---
subject: Node.js agent
releaseDate: '2018-02-27'
version: 2.9.0
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

### Note

This release is deprecated due to an issue where the agent may capture transaction attributes regardless of agent settings. If you are using this release, upgrade your agent to agent version 2.9.1 or higher. For more information, see [Security Bulletin NR18-06](/docs/using-new-relic/new-relic-security/security-bulletins/security-bulletin-nr18-06).

### Improvements

* Added the `WebFrameworkShim#savePossibleTransactionName` method.

  This method may be used to mark the current running middleware as a potential responder. `savePossibleTransactionName` should be used if a middleware can't be determined to be a terminal middleware while it executes, but may be responsible for responding after execution has finished.
* Fixed `dns.resolve` results assertion.
* Expanded `async_hooks` tests around maintain transaction context.
* Added Koa to metric naming objects.
* Added `callback` prop to `middlewareWithPromiseRecorder` return spec.

  While we aren't actually wrapping any callback, this is a workaround that gives us access to the active segment. This ensures that all segments inside Koa transaction traces are named correctly, particularly in cases when transaction context may be lost.
* Updated `after` prop in `middlewareWithPromiseRecorder` return spec to set `txInfo.errorHandled = true` in cases when there is no error.

  Because Koa has no concept of errorware in the same sense as Express or Connect (`(err, req, res, next)`), the agent now assumes if a middleware resolves, any error that may have occurred can be marked as handled.

### Fixes

* Added check for `parentSegment` in `async_hooks` instrumentation, to help ensure that transaction context is maintained.
