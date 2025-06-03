---
subject: Node.js agent
releaseDate: '2018-10-01'
version: 4.9.0
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

### New features

* Added `superagent` as built-in instrumentation.

  This instrumentation just maintains transaction state when using the `superagent` module to make HTTP requests with either callbacks or promises.
* Updated `noticeError` API method to be partially functional in High-security mode.

  In HSM, any custom attributes will be ignored, but the error will still be tracked. This brings the Node agent in line with the behavior of other language agents.
* Added `PromiseShim` class for instrumenting promise libraries.
* Support for setting `transaction_tracer.transaction_threshold` to 0 has been added.

### Improvements

* Updated DT payload creation to use `primary_application_id` from connect response.
* Added protection against functions with modified prototypes in `shim.applySegment`.
* Replaced SQL ID hash generation algorithm with SHA1 instead of MD5 to allow usage in FIPS compliant environments.
* Leveraged 16 hex digits for creation of SQL ID.
* Upgraded ejs module to get rid of Github security warnings. The ejs module was only used for tests and not in main agent code.
* Changes DT payload configuration log messages to debug level as it is not uncommon for calls to occur before server configuration has been retrieved.
* Converted `net` instrumentation to use shim api.
* Converted child_process instrumentation to newer shim style.
* Converted Timers instrumentation to newer shim style.
* Converted zlib instrumentation to use shim API.

### Bug fixes

* Fixed `codec.decode()` callback bug that would re-call a callback with an error thrown within the callback.
* Fixed bug requiring Cross Application Tracing (CAT) to be enabled for Distributed Tracing (DT) `createDistributedTracePayload` and `acceptDistributedTracePayload` APIs to function. DT configuration will no longer consider CAT configuration.
* Fixed bug in wrap() that would fail to wrap callbacks if the callback index was 0.
* The agent now respects `NEW_RELIC_TRACER_THRESHOLD`.

  Previously, this environment variable was stored as a string. The environment variable is now stored as a float.
