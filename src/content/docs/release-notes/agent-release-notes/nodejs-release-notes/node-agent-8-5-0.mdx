---
subject: Node.js agent
releaseDate: '2021-10-12'
version: 8.5.0
features: ["Add full support for Fastify v2 and v3. Fastify instrumentation is now GA.","Add experimental instrumentation for the undici http client behind a feature flag."]
bugs: []
security: []
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

## Notes

* Added full support for Fastify v2 and v3. Fastify instrumentation is now GA.
  * Removed fastify feature flag.
  * Instrumented Fastify routes by wrapping `addHook`.
  * Added middleware mounting for fastify v3.
  * Fixed capturing of mount point for middleware naming.
  * Fixed the WebFramework spec definitions for Fastify middleware and route handlers to properly retrieve the IncomingMessage from a request object.
  * Added proper definition to middleware handlers so that the relationship to consecutive middleware and route handler are siblings and not direct children.

* Added experimental instrumentation for the [undici](https://github.com/nodejs/undici) http client behind a feature flag.

  To enable undici support, add the following into your config: `{ feature_flag: { undici_instrumentation: true } }`.  The support for undici client is Node.js 16.x as it takes advantage of the [diagnostics_channel](https://nodejs.org/dist/latest-v16.x/docs/api/diagnostics_channel.html). Lastly, you must be using [v4.7.0+](https://github.com/nodejs/undici/releases/tag/v4.7.0) of the undici client for any of the instrumentation to work.

  Note: There are currently some state issues if requests to an app are made with keep alive and you have multiple undici requests being made in parallel. In this case, set feature_flag: `{ undici_async_tracking: false }` which avoids these state issues at the cost of some broken segment nesting.
