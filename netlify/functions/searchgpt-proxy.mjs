// Same-origin proxy for the SearchGPT REST API (v2).
//
// The docs search client (gatsby-theme-newrelic/src/utils/searchGPT.js) is
// configured with GATSBY_SEARCHGPT_BASE_URL="/", so the browser calls
// <origin>/v2/* with NO credentials. This function runs server-side, injects the
// api-key from the SEARCHGPT_API_KEY env var (set in the Netlify UI — never in
// the repo), and forwards the request to the SearchGPT service. Because the key
// only exists in this server-side env, it never reaches the public client
// bundle. This is the production counterpart of the dev proxy in the theme's
// demo/gatsby-node.js (onCreateDevServer).
//
// Routing is via the exported `config.path` below, which binds the function to
// /v2/* while preserving the original request path (no rewrite needed).

const SERVICE_BASE_URL =
  process.env.SEARCHGPT_BASE_URL ||
  'https://support-search.service.newrelic.com';

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

export default async (req) => {
  // The API surface we proxy is read-only; reject anything but GET so this can
  // never be turned into a write path against the service.
  if (req.method !== 'GET') {
    return json(405, { error: { message: 'Method not allowed' } });
  }

  const apiKey = process.env.SEARCHGPT_API_KEY;
  if (!apiKey) {
    // Misconfiguration (key not set in Netlify env) — fail closed and loud
    // rather than forwarding an unauthenticated request.
    return json(500, { error: { message: 'Search is not configured' } });
  }

  const incoming = new URL(req.url);

  // Defense in depth: only forward the /v2/ search API, nothing else.
  if (!incoming.pathname.startsWith('/v2/')) {
    return json(404, { error: { message: 'Not found' } });
  }

  // pathname is absolute ("/v2/search"), so this resolves to
  // <service>/v2/search?<same query>. Any api-key the client may have sent is
  // dropped here — we only pass through the query string and set our own header.
  const target = new URL(incoming.pathname + incoming.search, SERVICE_BASE_URL);

  try {
    const upstream = await fetch(target, {
      method: 'GET',
      headers: { 'api-key': apiKey },
    });

    const body = await upstream.text();
    const contentType =
      upstream.headers.get('content-type') || 'application/json';

    // Typeahead (suggest, on every keystroke) and repeated result-page queries
    // dominate traffic. A short shared CDN cache collapses identical GETs into
    // far fewer upstream calls, which also keeps us under the per-principal rate
    // limit on /v2/search (all site traffic shares this one service key).
    return new Response(body, {
      status: upstream.status,
      headers: {
        'content-type': contentType,
        'cache-control': 'public, max-age=60, stale-while-revalidate=300',
      },
    });
  } catch (err) {
    return json(502, { error: { message: `Search proxy error: ${String(err)}` } });
  }
};

export const config = { path: '/v2/*' };
