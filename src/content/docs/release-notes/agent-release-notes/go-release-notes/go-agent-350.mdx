---
subject: Go agent
releaseDate: '2020-05-20'
version: 3.5.0
downloadLink: 'https://github.com/newrelic/go-agent/tree/v3.5.0'
features: ["Added support for Infinite Tracing"]
security: []
bugs: []
---

## 3.5.0

### New Features

* Added support for [Infinite Tracing on New Relic Edge](https://docs.newrelic.com/docs/understand-dependencies/distributed-tracing/enable-configure/enable-distributed-tracing).

  Infinite Tracing observes 100% of your distributed traces and provides visualizations for the most actionable data so you have the examples of errors and long-running traces so you can better diagnose and troubleshoot your systems.

  You [configure your agent](https://docs.newrelic.com/docs/agents/go-agent/configuration/go-agent-configuration#infinite-tracing) to send traces to a trace observer in New Relic Edge. You view your distributed traces through the New Relic’s UI. There is no need to install a collector on your network.

  Infinite Tracing is currently available on a sign-up basis. If you would like to participate, please contact your sales representative.

### Changes

* [`nrgin.Middleware`](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrgin#Middleware) uses [`Context.FullPath()`](https://godoc.org/github.com/gin-gonic/gin#Context.FullPath) for transaction names when using Gin version 1.5.0 or greater. Gin transactions were formerly named after the [`Context.HandlerName()`](https://godoc.org/github.com/gin-gonic/gin#Context.HandlerName), which uses reflection. This change improves transaction naming and reduces overhead. Please note that because your transaction names will change, you may have to update any related dashboards and alerts to match the new name. If you wish to continue using `Context.HandlerName()` for your transaction names, use [`nrgin.MiddlewareHandlerTxnNames`](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrgin#MiddlewareHandlerTxnNames) instead.

  ```
  // Transactions previously named
  "GET main.handleGetUsers"
  // will be change to something like this match the full path
  "GET /user/:id"
  ```

  Note: As part of agent release v3.4.0, a v2.0.0 tag was added to the nrgin package. When using go modules however, it was impossible to install this latest version of nrgin. The v2.0.0 tag has been removed and replaced with v1.1.0.
