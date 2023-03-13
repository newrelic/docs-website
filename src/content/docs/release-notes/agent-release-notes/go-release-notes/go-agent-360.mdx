---
subject: Go agent
releaseDate: '2020-06-09'
version: 3.6.0
downloadLink: 'https://github.com/newrelic/go-agent/tree/v3.6.0'
features: ["Add custom attributes directly to spans"]
bugs: ["Fixed bug where it was impossible to exclude error.class and error.message attributes from the root span","Fixed bug that caused Go's data race warnings to trigger when using newrelic.NewRoundTripper"]
security : []
---

## 3.6.0

## New Features

* Added support for [adding custom attributes directly to spans](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#Segment.AddAttribute). These attributes will be visible when looking at spans in the distributed tracing UI.

  Example:

  ```
  txn := newrelic.FromContext(r.Context())
  sgmt := txn.StartSegment("segment1")
  defer sgmt.End()
  sgmt.AddAttribute("mySpanString", "hello")
  sgmt.AddAttribute("mySpanInt", 123)
  ```
* Custom attributes added to the transaction with `txn.AddAttribute` are now also added to the root span and will be visible when looking at the span in the distributed tracing UI. These custom attributes can be disabled from all destinations using `Config.Attributes.Exclude` or disabled from spans specifically using `Config.SpanEvents.Attributes.Exclude`.
* Agent attributes added to the transaction are now also added to the root span event and will be visible when looking at the span in the distributed tracing UI. These attributes include the `request.uri` and the `request.method` along with all other attributes listed in the [attributes section of our godocs](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#pkg-constants). These agent attributes can be disabled from all destinations using `Config.Attributes.Exclude` or disabled from spans specifically using `Config.SpanEvents.Attributes.Exclude`.

### Bug Fixes

* Fixed an issue where it was impossible to exclude the attributes `error.class` and `error.message` from the root span. This issue has now been fixed. These attributes can now be excluded from all spans using `Config.Attributes.Exclude` or `Config.SpanEvents.Attributes.Exclude`.
* Fixed an issue that caused Go's data race warnings to trigger in certain situations when using the `newrelic.NewRoundTripper`. There were no reports of actual data corruption, but now the warnings should be resolved. Thank you to @blixt for bringing this to our attention!
