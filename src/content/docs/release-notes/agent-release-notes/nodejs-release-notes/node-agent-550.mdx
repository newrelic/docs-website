---
subject: Node.js agent
releaseDate: '2019-02-19'
version: 5.5.0
---

### New features

* Added `SNS` to message shim library names.
* Added check for `collect_span_events` in config sent from the server on connect.

  Collection of span events can be disabled from the server configuration, but not enabled.

### Improvements

* Refactored `Segment#toJSON` to be more readable.
* Added a `try/catch` to config initialization to safely handle invalid setting combinations.

  When an error is caught the agent is marked as disabled, which ultimately returns a stub API and keeps the process running.
* String truncation is now done using a binary search over the byte length of the string.

  Previously this truncation was done using a linear search for the proper byte length.
* Optimized segment and span attribute filtering.

### Fixes

* Fixed issue where `shim.createSegment()` could result in modifying the parent when opaque.
* Fixed issue where `http-outbound` would modify parent segments when parent is opaque.
* Moved processing of exclusive time attribute out of `toJSON` and into `finalize` to only be calculated once.

  Previously, serializing a segment would result in calculating and caching exclusive time which could result in issues if serialized prior to ending.
