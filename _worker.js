const CANONICAL_HOST = "web.synertalk.com";
const REDIRECT_HOSTS = new Set(["synertalk.com", "www.synertalk.com"]);
// MTA-STS policy host (RFC 8461). The policy lists the MX hosts of synertalk.com: if the MX records
// change (e.g. moving inbound mail to Proton), update .well-known/mta-sts.txt AND the id in the
// _mta-sts.synertalk.com TXT record.
const MTA_STS_HOST = "mta-sts.synertalk.com";
const MTA_STS_PATH = "/.well-known/mta-sts.txt";

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

    // mta-sts.synertalk.com serves only the policy file
    if (url.hostname === MTA_STS_HOST) {
      if (url.pathname !== MTA_STS_PATH) return new Response("Not found", { status: 404 });
      const policy = await env.ASSETS.fetch(new URL(MTA_STS_PATH, request.url));
      return new Response(policy.body, {
        status: policy.status,
        headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "max-age=3600" }
      });
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
