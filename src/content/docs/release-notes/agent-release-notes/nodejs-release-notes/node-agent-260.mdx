---
subject: Node.js agent
releaseDate: '2018-01-10'
version: 2.6.0
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

### New features

* Added `transaction_tracer.hide_internals` configuration.

  This configuration controls the enumerability of the internal properties of the agent. Making these properties non-enumerable can have an impact on the performance of the agent. Disabling this option may decrease agent overhead.

### Improvements

* Refactored promise instrumentation.

  This new instrumentation is far more performant than the previous and maintains a more sensible trace structure under a wider range of sequences.
* Added concurrent environment scanning, limited to 2 reads at a time.

  This improves the performance of dependency scanning at agent startup, allowing the agent to connect to our services more quickly.
* Refactored instrumentation tests to run against wide range of module versions.

  Instrumentation tests will be run against all supported major versions of every instrumented module. For releases, we will test against every supported minor version of the modules. This vastly improves our test coverage and should reduce the instances of regressions for specific versions of modules.
* Added tests for _all_ of bluebird's promise methods.

  These tests ensure that we 100% instrument bluebird. Some gaps in instrumentation were found and fixed. Anyone using bluebird should upgrade.

### Bug fixes

* Fixed a crashing error in the hapi instrumentation.

  When recording the execution of an extension listening to a server event (for example, 'onPreStart') the agent would crash due to the lack of a `raw` property on the first argument passed to the extension handler. The agent now checks the event before wrapping the extension handler and checks for the existence of the `raw` property before attempting to dereference off of it.
* Fixed an incompatibility with the npm module `mimic-response`.

  The agent's HTTP instrumentation previously did not play well with the way `mimic-response` copied properties from an `http.IncomingMessage`. This caused modules that relied on that process, such as `got`, to hang.
* Fixed naming rule testing tool to use same url scrubbing as the agent itself.
