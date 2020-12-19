---
subject: Node.js agent
releaseDate: '2016-07-14'
version: 1.28.3
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

### Improvements

* Improved agent startup speed by {'~'}10% by simplifying environment checks.

  Removed prolific `fs.exists` and `fs.stat` checks, instead simply handling the error for mis-used files which greatly reduces disk access.
* Added slightly more trace-level logging around the creation of segments.
* Added examples for using the `newrelic.createBackgroundTransaction` method in a number of different use cases.

### Bug fixes

* Removed excessive segment creation from PG instrumentation.

  For queries with many results we would create a segment for each result. This would result in excessive object allocation and then cause harsh GC thrashing.
* Fixed a bug in agent connect that could cause an identity crisis under specific use cases.

  When using the agent with multiple app names, transaction information could be misattributed to other services if they share the same first app name. This resolves that by using all of the host names to uniquely identify the agent.
