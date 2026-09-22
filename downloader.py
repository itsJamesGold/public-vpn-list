#!/usr/bin/env python3
"""
Professional OpenVPN Downloader for publicvpnlist.com
Features: Dynamic Discovery, Concurrency, Rate Limiting, Resume Support, Verification, Logging, and Signal Handling.
"""

import argparse
import concurrent.futures
import csv
import json
import logging
import os
import random
import re
import signal
import sys
import threading
import time
from datetime import datetime
from pathlib import Path
from typing import Dict, Any, List, Set, Optional
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler(sys.stdout)]
)
logger = logging.getLogger("PublicVPNListDownloader")


class PublicVPNDownloader:
    def __init__(self, args: argparse.Namespace) -> None:
        self.workers: int = args.workers
        self.country_filter: Optional[str] = args.country
        self.resume: bool = args.resume
        self.discover_only: bool = args.discover_only
        self.download_only: bool = args.download_only
        self.yes_prompt: bool = args.yes
        self.limit: Optional[int] = args.limit
        self.max_pages: int = args.max_pages

        self.pages_project: str = "public-vpn-list"

        self.base_url: str = "https://publicvpnlist.com"
        self.servers: Dict[str, Dict[str, Any]] = {}
        self.stop_requested: bool = False

        # Clean environment for fresh sync
        if not self.resume and not self.download_only:
            self.clean_env()

    def clean_env(self) -> None:
        """Deletes previous output and web files for a fresh sync."""
        import shutil
        for folder in ["output", "web_dist"]:
            path = Path(folder)
            if path.exists():
                logger.info(f"Cleaning {folder}...")
                try:
                    shutil.rmtree(path)
                except Exception as e:
                    logger.error(f"Failed to clean {folder}: {e}")
            path.mkdir(parents=True, exist_ok=True)

        # Thread synchronization locks
        self.lock = threading.Lock()
        self.csv_lock = threading.Lock()

        # Initialize Session
        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
        })

        # Register signal handlers
        self.setup_signals()

    def clean_output_dir(self) -> None:
        """Deletes all previously downloaded files to start fresh."""
        output_dir = Path("output")
        if output_dir.exists():
            import shutil
            logger.info("Cleaning previous output files for a fresh sync...")
            try:
                shutil.rmtree(output_dir)
                output_dir.mkdir()
            except Exception as e:
                logger.error(f"Failed to clean output directory: {e}")

    def setup_signals(self) -> None:
        """Sets up graceful handling of Ctrl+C and termination signals."""
        signal.signal(signal.SIGINT, self.handle_exit_signal)
        signal.signal(signal.SIGTERM, self.handle_exit_signal)

    def handle_exit_signal(self, signum: int, frame: Any) -> None:
        """Handles signal interruption by marking stop flag and saving current state."""
        logger.warning(f"Signal {signum} received. Triggering graceful exit and saving state...")
        self.stop_requested = True
        self.save_servers()

    def sanitize_filename(self, name: str) -> str:
        """Removes illegal characters to create safe paths/filenames."""
        return re.sub(r'[\\/*?:"<>|]', "_", name).strip()

    def safe_request(self, method: str, url: str, max_retries: int = 5, **kwargs: Any) -> Optional[requests.Response]:
        """Performs HTTP requests with jittered delays, exponential backoff for 429, and skipping for 403."""
        retries = 0
        base_delay = 2.0

        while retries < max_retries:
            if self.stop_requested:
                return None
            try:
                # Add a small jittered baseline delay between requests
                time.sleep(random.uniform(0.2, 0.7))

                response = self.session.request(method, url, timeout=15, **kwargs)

                if response.status_code == 429:
                    retries += 1
                    delay = base_delay * (2 ** retries) + random.uniform(0.5, 1.5)
                    logger.warning(f"Rate limited (429) for {url}. Retrying in {delay:.2f}s...")
                    time.sleep(delay)
                    continue
                elif response.status_code == 403:
                    logger.error(f"Access Forbidden (403) for {url}. Skipping.")
                    return response

                return response

            except requests.RequestException as e:
                retries += 1
                delay = base_delay * (2 ** retries) + random.uniform(0.5, 1.5)
                logger.warning(f"Request exception for {url}: {e}. Retrying in {delay:.2f}s...")
                time.sleep(delay)

        return None

    def load_servers(self) -> Dict[str, Dict[str, Any]]:
        """Loads server listings from data/servers.json."""
        servers_file = Path("data/servers.json")
        if servers_file.exists():
            try:
                with open(servers_file, "r", encoding="utf-8") as f:
                    self.servers = json.load(f)
                logger.info(f"Loaded {len(self.servers)} servers from data/servers.json")
            except Exception as e:
                logger.error(f"Failed to read data/servers.json: {e}. Starting with empty state.")
                self.servers = {}
        else:
            self.servers = {}
        return self.servers

    def save_servers(self) -> None:
        """Saves current state of server listings to data/servers.json."""
        servers_file = Path("data/servers.json")
        servers_file.parent.mkdir(parents=True, exist_ok=True)
        try:
            with self.lock:
                with open(servers_file, "w", encoding="utf-8") as f:
                    json.dump(self.servers, f, indent=4)
            logger.info("Saved server IDs to data/servers.json")
        except Exception as e:
            logger.error(f"Failed to save data/servers.json: {e}")

    def log_to_csv(self, server_id: str, country: str, status: str, filename: str, error: str = "") -> None:
        """Appends log entry to logs/downloads.csv file in a thread-safe manner."""
        log_file = Path("logs/downloads.csv")
        log_file.parent.mkdir(parents=True, exist_ok=True)

        with self.csv_lock:
            file_exists = log_file.exists()
            try:
                with open(log_file, "a", newline="", encoding="utf-8") as f:
                    writer = csv.writer(f)
                    if not file_exists:
                        writer.writerow(["timestamp", "server_id", "country", "status", "filename", "error"])
                    writer.writerow([datetime.utcnow().isoformat(), server_id, country, status, filename, error])
            except Exception as e:
                logger.error(f"Failed to write to downloads.csv: {e}")

    def discover_from_sitemap(self, url: Optional[str] = None) -> Set[str]:
        """Discovers server IDs via sitemap.xml, supporting sitemap indexes recursively."""
        target_url = url if url else urljoin(self.base_url, "/sitemap.xml")
        logger.info(f"Scanning sitemap: {target_url}...")
        discovered: Set[str] = set()

        response = self.safe_request("GET", target_url)
        if response and response.status_code == 200:
            try:
                soup = BeautifulSoup(response.text, "xml")

                # 1. Look for sub-sitemaps (Sitemap Index)
                sitemaps = soup.find_all("sitemap")
                for sm in sitemaps:
                    sm_loc = sm.find("loc")
                    if sm_loc:
                        discovered.update(self.discover_from_sitemap(sm_loc.text.strip()))

                # 2. Look for server URLs
                locs = soup.find_all("loc")
                for loc in locs:
                    u = loc.text.strip()
                    match = re.search(r'/server/(\d+)', u)
                    if match:
                        discovered.add(match.group(1))
            except Exception as e:
                logger.debug(f"Sitemap parsing exception at {target_url}: {e}")

        if not url: # Final log for root call
            logger.info(f"Sitemap discovery found {len(discovered)} servers.")
        return discovered

    def discover_from_pages(self) -> Set[str]:
        """Discovers server IDs by iterating through main page pagination."""
        logger.info("Starting discovery via pagination main pages...")
        discovered: Set[str] = set()
        page = 1
        consecutive_empty = 0

        logger.info(f"Starting aggressive catalog discovery (page_size=50)...")
        while not self.stop_requested:
            if self.limit and len(discovered) >= self.limit:
                break
            if page > self.max_pages:
                break

            url = f"{self.base_url}/?page={page}&page_size=50"
            logger.info(f"Scanning catalog page {page}...")
            response = self.safe_request("GET", url)
            if not response or response.status_code != 200:
                break

            soup = BeautifulSoup(response.text, "html.parser")
            links = soup.find_all("a", href=re.compile(r'/server/(\d+)'))

            page_ids = set()
            for link in links:
                match = re.search(r'/server/(\d+)', link['href'])
                if match:
                    page_ids.add(match.group(1))

            if not page_ids:
                consecutive_empty += 1
                if consecutive_empty >= 2:
                    break
            else:
                before_count = len(discovered)
                discovered.update(page_ids)
                after_count = len(discovered)

                # If no new unique IDs found for 3 pages, stop
                if after_count == before_count:
                    consecutive_empty += 1
                    if consecutive_empty >= 3:
                        break
                else:
                    consecutive_empty = 0

            page += 1

        logger.info(f"Pagination discovery found {len(discovered)} servers.")
        return discovered

    def discover_from_countries(self) -> Set[str]:
        """Discovers server IDs from separate country pages."""
        logger.info("Starting discovery via country-specific pages...")
        discovered: Set[str] = set()

        response = self.safe_request("GET", self.base_url)
        if not response or response.status_code != 200:
            return discovered

        soup = BeautifulSoup(response.text, "html.parser")
        country_links = soup.find_all("a", href=re.compile(r'/country/'))

        for c_link in country_links:
            if self.stop_requested:
                break
            if self.limit and len(discovered) >= self.limit:
                break

            country_url = urljoin(self.base_url, c_link['href'])
            logger.info(f"Scanning country page: {c_link.text.strip()} ({country_url})")

            c_response = self.safe_request("GET", country_url)
            if c_response and c_response.status_code == 200:
                c_soup = BeautifulSoup(c_response.text, "html.parser")
                links = c_soup.find_all("a", href=re.compile(r'/server/(\d+)'))
                for link in links:
                    match = re.search(r'/server/(\d+)', link['href'])
                    if match:
                        discovered.add(match.group(1))

        logger.info(f"Country pages discovery found {len(discovered)} servers.")
        return discovered

    def run_discovery(self) -> None:
        """Orchestrates all dynamic discovery techniques."""
        if self.download_only:
            logger.info("Download-only specified. Skipping dynamic discovery phase.")
            self.load_servers()
            return

        all_ids: Set[str] = set()
        if self.resume:
            self.load_servers()
            all_ids.update(self.servers.keys())

        # Combine different discovery avenues
        all_ids.update(self.discover_from_sitemap())

        if not self.limit or len(all_ids) < self.limit:
            all_ids.update(self.discover_from_pages())

        if not self.limit or len(all_ids) < self.limit:
            all_ids.update(self.discover_from_countries())

        # Update server mappings
        for sid in all_ids:
            if sid not in self.servers:
                self.servers[sid] = {"id": sid, "country": "Unknown"}

        # Apply limit if specified
        if self.limit and len(self.servers) > self.limit:
            limited_keys = list(self.servers.keys())[:self.limit]
            self.servers = {k: self.servers[k] for k in limited_keys}

        self.save_servers()

        print("\n" + "-"*30)
        print(f" Discovery Complete! ")
        print(f" Unique servers found: {len(self.servers)}")
        print("-"*30 + "\n")

    def save_and_verify_file(self, server_id: str, country: str, content: bytes, file_path: Path, filename: str) -> bool:
        """Verifies downloaded .ovpn file contents and stores them under country directories."""
        try:
            text_content = content.decode("utf-8", errors="ignore")
            if "client" in text_content and "remote" in text_content and "proto" in text_content:
                file_path.parent.mkdir(parents=True, exist_ok=True)
                file_path.write_bytes(content)
                logger.info(f"[{server_id}] Successfully saved and verified: {file_path}")
                self.log_to_csv(server_id, country, "SUCCESS", filename)
                return True
            else:
                error_msg = "Verification failed: missing 'client', 'remote' or 'proto'"
                logger.error(f"[{server_id}] {error_msg}")
                self.log_to_csv(server_id, country, "INVALID", filename, error_msg)
                return False
        except Exception as e:
            error_msg = f"Exception saving file: {e}"
            logger.error(f"[{server_id}] {error_msg}")
            self.log_to_csv(server_id, country, "FAILED", filename, error_msg)
            return False

    def download_server(self, server_id: str) -> bool:
        """Executes full download flow for a single server ID."""
        if self.stop_requested:
            return False

        server_info = self.servers.get(server_id, {"id": server_id, "country": "Unknown"})
        country = server_info.get("country", "Unknown")

        # Step 1: Visit /server/{id}/ to fetch actual page info & update Country if Unknown
        server_url = f"{self.base_url}/server/{server_id}/"
        logger.info(f"[{server_id}] Accessing server profile...")
        response = self.safe_request("GET", server_url)

        if not response or response.status_code != 200:
            err = f"Failed to load profile page (Status: {response.status_code if response else 'No response'})"
            logger.error(f"[{server_id}] {err}")
            self.log_to_csv(server_id, country, "FAILED", "", err)
            return False

        soup = BeautifulSoup(response.text, "html.parser")

        # Extract country dynamically from page text/links
        if country == "Unknown":
            c_node = soup.find('a', href=re.compile(r'/country/'))
            if c_node:
                country = c_node.text.strip()
            else:
                text_match = soup.find(text=re.compile(r'Country:', re.I))
                if text_match:
                    match = re.search(r'Country:\s*([A-Za-z\s]+)', text_match, re.I)
                    if match:
                        country = match.group(1).strip()

            if not country or country.isspace():
                country = "Unknown"

            with self.lock:
                self.servers[server_id]["country"] = country

        # Apply country filter if specified
        if self.country_filter and self.country_filter.lower() != country.lower():
            logger.info(f"[{server_id}] Skipping. Country '{country}' does not match filter.")
            return False

        sanitized_country = self.sanitize_filename(country)
        filename = f"server_{server_id}.ovpn"
        file_path = Path("output") / sanitized_country / filename

        # Resume Support: skip if existing file is already valid
        if file_path.exists():
            try:
                existing_text = file_path.read_text(encoding="utf-8", errors="ignore")
                if "client" in existing_text and "remote" in existing_text and "proto" in existing_text:
                    logger.info(f"[{server_id}] Valid .ovpn file already exists locally. Skipping download.")
                    self.log_to_csv(server_id, country, "SKIPPED", filename, "File already exists and is valid")
                    return True
            except Exception:
                pass

        # Step 2: Access download landing page /download/{id}/
        download_page_url = f"{self.base_url}/download/{server_id}/"
        logger.info(f"[{server_id}] Navigating to download page...")
        dl_response = self.safe_request("GET", download_page_url)

        if not dl_response or dl_response.status_code != 200:
            err = f"Failed to load download page (Status: {dl_response.status_code if dl_response else 'No response'})"
            logger.error(f"[{server_id}] {err}")
            self.log_to_csv(server_id, country, "FAILED", "", err)
            return False

        # In case the download page directly serves the OpenVPN file contents
        dl_text = dl_response.text
        if "client" in dl_text and "remote" in dl_text and "proto" in dl_text:
            return self.save_and_verify_file(server_id, country, dl_response.content, file_path, filename)

        # Parse temporary link out of download landing page
        dl_soup = BeautifulSoup(dl_text, "html.parser")
        ovpn_link_node = dl_soup.find('a', href=re.compile(r'\.ovpn', re.I))
        if not ovpn_link_node:
            ovpn_link_node = dl_soup.find('a', string=re.compile(r'Download', re.I))
        if not ovpn_link_node:
            ovpn_link_node = dl_soup.find('a', href=re.compile(r'/get/|/file/|/storage/|ovpn', re.I))

        if not ovpn_link_node or not ovpn_link_node.get('href'):
            err = "Temporary .ovpn download link could not be detected on the download page"
            logger.error(f"[{server_id}] {err}")
            self.log_to_csv(server_id, country, "FAILED", "", err)
            return False

        final_dl_url = urljoin(download_page_url, ovpn_link_node['href'])
        logger.info(f"[{server_id}] Fetching file from link: {final_dl_url}")

        file_response = self.safe_request("GET", final_dl_url)
        if not file_response or file_response.status_code != 200:
            err = f"Failed to acquire file from link (Status: {file_response.status_code if file_response else 'No response'})"
            logger.error(f"[{server_id}] {err}")
            self.log_to_csv(server_id, country, "FAILED", "", err)
            return False

        return self.save_and_verify_file(server_id, country, file_response.content, file_path, filename)

    def download_all(self) -> None:
        """Manages the download execution queue using concurrent workers thread pool."""
        if self.discover_only:
            logger.info("Discover-only specified. Exiting without downloading.")
            return

        targets = list(self.servers.keys())
        if not targets:
            logger.info("No server listings available to process.")
            return

        logger.info(f"Total loaded servers to evaluate: {len(targets)}")

        if not self.yes_prompt:
            try:
                ans = input(f"Proceed to process up to {len(targets)} servers? (y/n): ").strip().lower()
                if ans not in ["y", "yes"]:
                    logger.info("Download sequence aborted by user request.")
                    return
            except (EOFError, Exception):
                logger.warning("Non-interactive runtime detected. Launching processing flow automatically.")

        # Execute processing thread pool
        with concurrent.futures.ThreadPoolExecutor(max_workers=self.workers) as executor:
            futures = {executor.submit(self.download_server, sid): sid for sid in targets}
            try:
                for future in concurrent.futures.as_completed(futures):
                    if self.stop_requested:
                        break
                    sid = futures[future]
                    try:
                        future.result()
                    except Exception as e:
                        logger.error(f"[{sid}] Thread worker raised unexpected exception: {e}")
            except KeyboardInterrupt:
                logger.warning("Keyboard interruption detected inside execution manager.")
                self.stop_requested = True

        # Perform final actions
        self.save_servers()
        # In GitHub Actions, we deploy via the YAML workflow for better reliability
        if "GITHUB_ACTIONS" not in os.environ:
            self.deploy_to_pages()
        else:
            self.prepare_bundle_only()
        self.print_summary()

    def prepare_bundle_only(self) -> None:
        """Just prepares the JSON bundle without triggering wrangler (for CI/CD)."""
        logger.info("Preparing bundle for CI/CD deployment...")
        bundle = []
        output_dir = Path("output")
        web_dist = Path("web_dist")
        if not output_dir.exists(): return
        for country_dir in output_dir.iterdir():
            if country_dir.is_dir():
                for ovpn_file in country_dir.glob("*.ovpn"):
                    try:
                        content = ovpn_file.read_text(encoding="utf-8", errors="ignore")
                        bundle.append({
                            "id": ovpn_file.stem.replace("server_", ""),
                            "country": country_dir.name,
                            "config": content,
                            "updated_at": datetime.utcnow().isoformat()
                        })
                    except Exception: pass
        web_dist.mkdir(parents=True, exist_ok=True)
        with open(web_dist / "servers.json", "w", encoding="utf-8") as f:
            json.dump(bundle, f)

    def deploy_to_pages(self) -> None:
        """Aggregates all OVPN files into JSON and deploys to Cloudflare Pages via Wrangler."""
        import platform
        npx_cmd = "npx.cmd" if platform.system() == "Windows" else "npx"

        logger.info("Preparing static server bundle for Cloudflare Pages...")
        bundle = []
        output_dir = Path("output")
        web_dist = Path("web_dist")

        if not output_dir.exists():
            return

        for country_dir in output_dir.iterdir():
            if country_dir.is_dir():
                country_name = country_dir.name
                for ovpn_file in country_dir.glob("*.ovpn"):
                    try:
                        content = ovpn_file.read_text(encoding="utf-8", errors="ignore")
                        server_id = ovpn_file.stem.replace("server_", "")
                        bundle.append({
                            "id": server_id,
                            "country": country_name,
                            "filename": ovpn_file.name,
                            "config": content,
                            "updated_at": datetime.utcnow().isoformat()
                        })
                    except Exception as e:
                        logger.error(f"Error reading {ovpn_file}: {e}")

        if not bundle:
            logger.info("No servers found to bundle.")
            return

        # Write to web_dist
        web_dist.mkdir(parents=True, exist_ok=True)
        json_path = web_dist / "servers.json"
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(bundle, f)

        logger.info(f"Deploying bundle to Cloudflare Pages project: {self.pages_project}...")
        try:
            import subprocess
            result = subprocess.run(
                [npx_cmd, "wrangler", "pages", "deploy", "web_dist", "--project-name", self.pages_project],
                capture_output=True, text=True, shell=(platform.system() == "Windows")
            )
            if result.returncode == 0:
                logger.info("Successfully deployed servers to Cloudflare Pages.")
                logger.info(f"Public URL: https://{self.pages_project}.pages.dev/servers.json")
            else:
                logger.error(f"Pages deployment failed: {result.stdout} {result.stderr}")
        except Exception as e:
            logger.error(f"Failed to run wrangler deploy: {e}")

    def print_summary(self) -> None:
        """Prints a formatted summary box with final statistics."""
        log_file = Path("logs/downloads.csv")
        stats = {
            "SUCCESS": 0,
            "SKIPPED": 0,
            "FAILED": 0,
            "INVALID": 0
        }

        if log_file.exists():
            try:
                with open(log_file, "r", encoding="utf-8") as f:
                    reader = csv.DictReader(f)
                    for row in reader:
                        status = row.get("status")
                        if status in stats:
                            stats[status] += 1
            except Exception:
                pass

        print("\n" + "=" * 40)
        print(" PublicVPNList Downloader Summary")
        print("=" * 40)
        print(f"Discovered servers : {len(self.servers)}")
        print(f"Already downloaded : {stats['SKIPPED']}")
        print(f"Downloaded         : {stats['SUCCESS']}")
        print(f"Failed             : {stats['FAILED']}")
        print(f"Invalid files      : {stats['INVALID']}")
        print(f"\nTotal files tracked: {sum(stats.values())}")
        print(f"\nOutput: ./output/")
        print(f"Log:    ./logs/downloads.csv")
        print("=" * 40 + "\n")


def main() -> None:
    parser = argparse.ArgumentParser(description="Professional publicvpnlist.com OpenVPN Downloader CLI")
    parser.add_argument("--workers", type=int, default=6, help="Number of concurrent downloader threads (default: 6)")
    parser.add_argument("--country", type=str, default=None, help="Filter downloads by country name (case-insensitive)")
    parser.add_argument("--resume", action="store_true", help="Resume download utilizing existing data/servers.json data")
    parser.add_argument("--discover-only", action="store_true", help="Perform discovery phase only without file downloads")
    parser.add_argument("--download-only", action="store_true", help="Run downloader phase only utilizing data/servers.json")
    parser.add_argument("--yes", action="store_true", help="Skip confirmation prompt and proceed automatically")
    parser.add_argument("--limit", type=int, default=None, help="Impose maximum limit on servers discovered/downloaded")
    parser.add_argument("--max-pages", type=int, default=500, help="Maximum number of pages to scan during discovery (default: 500)")

    args = parser.parse_args()

    downloader = PublicVPNDownloader(args)
    downloader.run_discovery()
    downloader.download_all()


if __name__ == "__main__":
    main()
