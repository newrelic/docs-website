---
subject: Node.js agent
releaseDate: '2018-01-03'
version: 2.5.0
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

### New features

* Added hapi v17 instrumentation

  Hapi v17 added support for promise-based middleware which broke transaction tracking in the agent. This caused issues in naming, as the agent will name the transaction after the path to the middleware that responded to a request.
* Added instrumentation for `vision@5`

  Due to the way `vision` is mounted to the hapi server when using hapi v17.x, the agent's instrumentation would not pick up on the middleware being mounted. This new instrumentation now correctly times rendering done in the `vision` middleware.
* Added `unwrapOnce` method to shim object

  This new method can be used to unwrap a single layer of instrumentation. `unwrapOnce` is useful in cases where multiple instrumentations wrap the same method and unwrapping of the top level is required.
* Added `isErrorWare` checks around `nameState.appendPath`/`nameState.popPath` calls to avoid doubling up paths in transaction names

  Previously, the agent would append its transaction name with the path fragment where an error handler middleware was mounted. The extraneous path fragment will now be omitted, and the transaction will be named properly after the middleware that threw the error.
* Added support for `pg` 6 on Node 5 or higher

### Improvements

* Added `parent` property to webframework-shim segment description
* Refactored existing hapi instrumentation for different `server.ext()` invocations
* Refactored webframework-shim `_recordMiddleware` to construct different segment descriptions for callback- or promise-based middleware
* Updated `node-postgres@^6` versioned tests to avoid deprecation warning on direct module `connect` and `end` calls
* Fixed running domain tests on Node 9.3.0.
* Improved logging for CAT headers and transaction name-state management.
* All `json-safe-stringify` calls now wrapped in `try/catch`
* Removed `lib/util/safe-json`

### Bug fixes

* Fixed creating supportability metric when mysql2 goes uninstrumented.
* Added a `segmentStack.pop`to the middleware `after` in cases when an error is caught and there is no next handler
* Fixed determining parents for middleware segments when transaction state is lost and reinstated
* Added check to `_recordMiddleware` to avoid prepending a slash if original `route` is an array
* Changed logic in http instrumentation to attach `response.status` to the transaction as a string
* Updated `startWebTransaction` and `startBackgroundTransaction` to add nested transactions as segments to parent transactions
