---
subject: Node.js agent
releaseDate: '2018-06-19'
version: 4.2.0
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

### New features

* Added an option for using the `finally` method on promises for instrumentation.

  The promise instrumentation would use `Promise#finally` if available. This change is in response to Node v10 promises calling `then` inside their `finally` method, which caused infinite recursion in the agent's promise instrumentation.
* Added seen/sent/dropped supportability metrics for all event collections.

### Improvements

* Refactored harvest cycle into separate class.

  This refactoring eases managing harvested data and re-merging unharvested values on failure.
* No longer download gcc on test suites that do not require it.

### Bug fixes

* Updated `WebFrameworkShim` to handle arrays of routes when wrapping middleware mounters.

  Previously, a transaction that hit a shared middleware (eg, `app.use(['/one', '/two'], ...)`) would always be tagged with `<unknown>` in its name, due to the agent not interpreting arrays of paths. Now transaction names will include all paths for a shared middleware, comma-delimited, followed by the current route (`'WebTransaction/Expressjs/GET//one,/two/one'`).
