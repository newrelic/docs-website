---
subject: Node.js agent
releaseDate: '2019-10-29'
version: 6.0.0
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

## Notes

* Added official parity support for Node 12.

  * Exception: Errors resulting in unhandled rejections will no longer be scoped to the transaction that was active when the rejected promise was created.

    As of Node 12, the promise responsible for triggering the init async hook will no longer be passed through on the promise wrap instance. This breaks the linkage used to relate a given promise rejection to the transaction it was scheduled in.
* **BREAKING** Removed support for Node 6, 7, and 9.

  The minimum supported version is now Node v8. For further information on our support policy, see: [https://docs.newrelic.com/docs/agents/nodejs-agent/getting-started/compa...](https://docs.newrelic.com/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent).

  * Bumped version of `@newrelic/superagent` instrumentation to `v2.0.0`.
  * Bumped version of `@newrelic/native-metrics` to `v5.0.0`.
* **BREAKING** Bumped version of `@newrelic/koa` instrumentation to `v3.0.0` `@newrelic/koa` update includes changes to transaction naming in addition to dropping Node versions 6, 7, and 9. See `@newrelic/koa`release notes for what was included in `v2.0.0` and `v3.0.0` updates. [https://github.com/newrelic/node-newrelic-koa/blob/master/NEWS.md](https://github.com/newrelic/node-newrelic-koa/blob/master/NEWS.md).
* **BREAKING** `max_samples_stored` behavior has changed to replace `max_samples_per_minute`. `max_samples_per_minute` is no longer a configuration parameter.

  The new behavior for `max_samples_stored` is as follows: "The agent will collect all events up to this number per minute. If there are more than that, a statistical sampling will be collected." This usage of the configuration is consistent with other New Relic APM agents.

  If your application has previously used `max_samples_per_minute` as an upper bound, you may need to lower the threshold to a valid maximum to avoid data being dropped on the server. No larger than 10k is recommended.
* Updated utilization callback test to point to a host that can't represent a valid provider. Previously, location where CI provider runs tests could cause test to fail.
* Added support for `Promise.allSettled()` method in Bluebird 3.7.
* Bumped `mongodb` dev dependency past security warning.
* Fixed `mongodb` versioned tests so they are self-contained by using version under test for setup/teardown instead of agent dev-dependency version.
* Forced filename resolution if not already cached on module load. This should not occur in normal/non-test scenarios but provides a fall-back to maintain functionality.
* Refactored `restify` versioned tests to be less dependent on the order of asynchronous operations.
* Updated README to reference Pug rather than Jade.
