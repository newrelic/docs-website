---
subject: Node.js agent
releaseDate: '2019-10-10'
version: 5.13.1
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

## Improvements

* Added diagnostic code injector.

  The agent may now be configured to make transaction state checks via code injection. This may be turned on by setting `code_injector.diagnostics.enabled` to `true`. While this option is enabled, code around async boundaries will be added to track transactions, and log a message when they are not properly reinstated.
* Added back generation of entity stats logging and uninstrumented support metric generation on metric harvests.
* Removed legacy harvest code from main agent.
* Upgraded `tap` to latest version
* Upgraded `mocha` to latest version.
* Adds `--exit` flag to mocha test runs to prevent infinite runs on CI.

## Fixes

* `primary_application_id` now defaults to 'Unknown' in serverless mode to allow Distributed Tracing to function correctly when `NEW_RELIC_PRIMARY_APPLICATION_ID` is not defined.
* Updated `https-proxy-agent` to v3 for security fix.

  Shoutout to @asturur for the contribution.
* Fixed bug where `API.shutdown()` would not properly harvest when configured to.
* Fixed bug where multiple agent restarts would cause the number of 'stopped' listeners to exceed limit.
* Fixed inconsistent async return from collector API.

  This could result in an infinite loop due to attempting to merge before clearing. _This bug should not have impacted normal agent runs but was uncovered for certain test cases._
* Fixed tests that leave work scheduled on the event loop.
* Fixed issue that could result in vendor utilization detection failure. As a part of this fix, the request that hits the timeout will immediately abort instead of hanging around for the default timeout.
