---
subject: Go agent
releaseDate: '2020-01-27'
version: 3.2.0
downloadLink: 'https://github.com/newrelic/go-agent/tree/v3.2.0'
---

## 3.2.0

### New Features

* Added support for `v7` of [go-redis/redis](https://github.com/go-redis/redis) in the new [v3/integrations/nrredis-v7](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrredis-v7) package.
  * [Documentation](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrredis-v7)
  * [Example](https://github.com/newrelic/go-agent/blob/master/v3/integrations/nrredis-v7/example/main.go)

### Changes

* Updated Gorilla instrumentation to include request time spent in middlewares. Added new `nrgorilla.Middleware` and deprecated `nrgorilla.InstrumentRoutes`. Register the new middleware as your first middleware using [`Router.Use`](https://godoc.org/github.com/gorilla/mux#Router.Use). See the [godocs examples](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrgorilla) for more details.

  ```
  r := mux.NewRouter()
  // Always register the nrgorilla.Middleware first.
  r.Use(nrgorilla.Middleware(app))

  // All handlers and custom middlewares will be instrumented.  The
  // transaction will be available in the Request's context.
  r.Use(MyCustomMiddleware)
  r.Handle("/", makeHandler("index"))

  // The NotFoundHandler and MethodNotAllowedHandler must be instrumented
  // separately using newrelic.WrapHandle.  The second argument to
  // newrelic.WrapHandle is used as the transaction name; the string returned
  // from newrelic.WrapHandle should be ignored.
  _, r.NotFoundHandler = newrelic.WrapHandle(app, "NotFoundHandler", makeHandler("not found"))
  _, r.MethodNotAllowedHandler = newrelic.WrapHandle(app, "MethodNotAllowedHandler", makeHandler("method not allowed"))

  http.ListenAndServe(":8000", r)
  ```

### Known Issues and Workarounds

If a .NET agent is initiating distributed traces as the root service, you must update that .NET agent to version 8.24 or later before upgrading your downstream Go New Relic agents to this agent release.
