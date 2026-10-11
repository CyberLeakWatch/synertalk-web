const CANONICAL_HOST = "web.synertalk.com";
const REDIRECT_HOSTS = new Set(["synertalk.com", "www.synertalk.com"]);

export default {
  async fetch(request, env) {
    const accept = request.headers.get("accept") || "";
    const url = new URL(request.url);

    // synertalk.com and www.synertalk.com -> web.synertalk.com (same path and query)
    if (REDIRECT_HOSTS.has(url.hostname)) {
      url.hostname = CANONICAL_HOST;
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

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

    const response = await env.ASSETS.fetch(request);

    // Preview and *.pages.dev copies must not compete with the canonical domain in search results
    if (url.hostname.endsWith(".pages.dev")) {
      const headers = new Headers(response.headers);
      headers.set("x-robots-tag", "noindex");
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
    }

    return response;
  }
};
