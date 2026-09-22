export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. App endpoint: GET /servers
    if (request.method === "GET" && url.pathname === "/servers") {
      const data = await env.VPN_DATA.get("SERVER_LIST");
      if (!data) return new Response(JSON.stringify([]), { status: 404, headers: { "Content-Type": "application/json" } });

      return new Response(data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Allow all apps to access
          "Cache-Control": "public, max-age=60" // Cache for 60 seconds
        }
      });
    }

    // 2. Upload endpoint: POST /upload (Used by Python script)
    if (request.method === "POST" && url.pathname === "/upload") {
      const authHeader = request.headers.get("Authorization");
      if (authHeader !== `Bearer ${env.API_SECRET}`) {
        return new Response("Unauthorized", { status: 401 });
      }

      try {
        const body = await request.json();
        await env.VPN_DATA.put("SERVER_LIST", JSON.stringify(body));
        return new Response("Servers Updated Successfully", { status: 200 });
      } catch (e) {
        return new Response("Invalid JSON", { status: 400 });
      }
    }

    return new Response("PublicVPNList Backend Running", { status: 200 });
  }
};
