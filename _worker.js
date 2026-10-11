export default {
  async fetch(request, env) {
    const accept = request.headers.get("accept") || "";
    const url = new URL(request.url);

    // Markdown Negotiation for AI Agents (Accept: text/markdown)
    if ((url.pathname === "/" || url.pathname === "/index.html") && accept.includes("text/markdown")) {
      const mdRes = await env.ASSETS.fetch(new URL("/llms-full.txt", request.url));
      const mdText = await mdRes.text();
      return new Response(mdText, {
        status: 200,
        headers: {
          "content-type": "text/markdown; charset=utf-8",
          "access-control-allow-origin": "*",
          "vary": "Accept"
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
