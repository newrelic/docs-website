---
subject: Go agent
releaseDate: '2021-07-12'
version: 3.14.0
downloadLink: 'https://github.com/newrelic/go-agent/tree/v3.14.0'
features: ["Added DistributedTraceHeadersFromJSON() function to build distributed trace headers from a JSON string","Improved the NR AWS SDK V2 integration to use the current transaction rather than the one passed in during middleware creation"]
bugs: ["Updated integration tags so that pkg.go.dev displays documentation for each integration correctly","Fixed an issue where the nrgrpc server integration would report all non-OK grpc statuses as errors"]
security: []
---

## 3.14.0

## Fixed

* Integration tags and `go.mod` files for integrations were updated so that [pkg.go.dev](<>) displays the documentation for each integration correctly.
* The `nrgrpc` server integration was reporting all non-`OK` grpc statuses as errors. This has now been changed so that only selected grpc status codes will be reported as errors. Others are shown (via transaction attributes) as "warnings" or "informational" messages. There is a built-in set of defaults as to which status codes are reported at which severity levels, but this may be overridden by the caller as desired. Also supports custom grpc error handling functions supplied by the user.
  * This is implemented by adding `WithStatusHandler()` options to the end of the `UnaryServerInterceptor()` and `StreamServerInterceptor()` calls, thus extending the capability of those functions while retaining the existing functionality and usage syntax for backward compatibility.
* Added advice on the recommended usage of the `app.WaitForConnection()` method. Fixes [https://github.com/newrelic/go-agent/issues/296]\(Issue #296)

## Added

* Added a convenience function to build distributed trace header set from a JSON string for use with the `AcceptDistributedTraceHeaders()` method. Normally, you must create a valid set of HTTP headers representing the trace identification information from the other trace so the new trace will be associated with it. This needs to be in a Go `http.Header` type value.
  * If working only in Go, this may be just fine as it is. However, if the other trace information came from another source, possibly in a different language or environment, it is often the case that the trace data is already presented to you in the form of a JSON string.
  * This new function, `DistributedTraceHeadersFromJSON()`, creates the required `http.Header` value from the JSON string without requiring manual effort on your part.
  * We also provide a new all-in-one method `AcceptDistributedTraceHeadersFromJSON()` to be used in place of `AcceptDistributedTraceHeaders()`. It accepts a JSON string rather than an `http.Header`, adding its trace info to the new transaction in one step.
  * Fixes [https://github.com/newrelic/go-agent/issues/331]\(Issue #331)

### Changed

* Improved the NR AWS SDK V2 integration to use the current transaction rather than the one passed in during middleware creation, if `nil` is passed into nrawssdk-v2.AppendMiddlewares. Thanks to @HenriBeck for noticing and suggesting improvement, and thanks to @nc-wittj for the fantastic PR! [#328](https://github.com/newrelic/go-agent/pull/328)

## Support Statement

New Relic recommends that you upgrade the agent regularly to ensure that you're getting the latest features and performance benefits. Additionally, older releases will no longer be supported when they reach end-of-life.
