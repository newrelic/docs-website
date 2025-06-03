---
subject: Go agent
releaseDate: '2020-03-23'
version: 3.4.0
downloadLink: 'https://github.com/newrelic/go-agent/tree/v3.4.0'
feature: ["Attribute http.statusCode has been added to external span events","Error attributes error.class and error.message are now included on the span event in which the error was noticed", "Use Context.FullPath() to improve transaction naming and reducing overhead"]
security: []
bugs: []
---

## 3.4.0

### New Features

* Attribute `http.statusCode` has been added to external span events representing the status code on an http response. This attribute will be included when added to an ExternalSegment in one of these three ways:

  1. Using [`NewRoundTripper`](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#NewRoundTripper) with your http.Client
  2. Including the http.Response as a field on your [`ExternalSegment`](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#ExternalSegment)
  3. Using the new [`ExternalSegment.SetStatusCode`](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#ExternalSegment.SetStatusCode) API to set the status code directly

  To exclude the `http.statusCode` attribute from span events, update your agent configuration like so, where `cfg` is your [`newrelic.Config`](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#Config) object.

  ```
  cfg.SpanEvents.Attributes.Exclude = append(cfg.SpanEvents.Attributes.Exclude, newrelic.SpanAttributeHTTPStatusCode)
  ```
* Error attributes `error.class` and `error.message` are now included on the span event in which the error was noticed, or on the root span if an error occurs in a transaction with no segments (no chid spans). Only the most recent error information is added to the attributes; prior errors on the same span are overwritten.

  To exclude the `error.class` and/or `error.message` attributes from span events, update your agent configuration like so, where `cfg` is your [`newrelic.Config`](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#Config) object.

  ```
  cfg.SpanEvents.Attributes.Exclude = append(cfg.SpanEvents.Attributes.Exclude, newrelic.newrelic.SpanAttributeErrorClass, newrelic.SpanAttributeErrorMessage)
  ```

### Changes

* Use [`Context.FullPath()`](https://godoc.org/github.com/gin-gonic/gin#Context.FullPath) for transaction names when using Gin version 1.5.0 or greater. Gin transactions were formerly named after the [`Context.HandlerName()`](https://godoc.org/github.com/gin-gonic/gin#Context.HandlerName), which uses reflection. This change improves transaction naming and reduces overhead. Please note that because your transaction names will change, you may have to update any related dashboards and alerts to match the new name.

  ```
  // Transactions previously named
  "GET main.handleGetUsers"
  // will be change to something like this match the full path
  "GET /user/:id"
  ```
