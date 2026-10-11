export async function onRequest(context) {
  const request = context.request;
  const accept = request.headers.get("accept") || "";
  const url = new URL(request.url);

  // Markdown Negotiation for Agents (Accept: text/markdown)
  if ((url.pathname === "/" || url.pathname === "/index.html") && accept.includes("text/markdown")) {
    const mdRes = await context.env.ASSETS.fetch(new URL("/llms-full.txt", request.url));
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

  // Handle /.well-known/api-catalog content type negotiation
  if (url.pathname === "/.well-known/api-catalog") {
    const catRes = await context.env.ASSETS.fetch(new URL("/.well-known/api-catalog", request.url));
    const catText = await catRes.text();
    return new Response(catText, {
      status: 200,
      headers: {
        "content-type": "application/linkset+json; charset=utf-8",
        "access-control-allow-origin": "*"
      }
    });
  }

  return context.next();
}
