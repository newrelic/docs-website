---
subject: Go agent
releaseDate: '2018-05-15'
version: '2.0'
downloadLink: 'https://github.com/newrelic/go-agent/tree/v2.0.0'
---

### 2.0.0 New

* The `End()` functions defined on the `Segment`, `DatastoreSegment`, and `ExternalSegment` types now receive the segment as a pointer, rather than as a value. This prevents unexpected behaviour when a call to `End()` is deferred before one or more fields are changed on the segment.

  In practice, this is likely to only affect this pattern:

  ```
  defer newrelic.DatastoreSegment{
    // ...
  }.End()
  ```

  Instead, you will now need to separate the literal from the deferred call:

  ```
  ds := newrelic.DatastoreSegment{
    // ...
  }
  defer ds.End()
  ```

  When creating custom and external segments, we recommend using [`newrelic.StartSegment()`](https://godoc.org/github.com/newrelic/go-agent#StartSegment) and [`newrelic.StartExternalSegment()`](https://godoc.org/github.com/newrelic/go-agent#StartExternalSegment), respectively.
* Added GoDoc badge to README. Thanks to @mrhwick for the contribution!
* `Config.UseTLS` configuration setting has been removed to increase security. TLS will now always be used in communication with New Relic Servers.
