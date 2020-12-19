---
subject: Node.js agent
releaseDate: '2020-02-20'
version: 6.4.1
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

## Improvements

* Removed calls to `OutgoingMessage.prototype._headers` in favor of using public `getHeaders` API (thanks to @adityasabnis for bringing this to our attention).
* Removed engine upper-bound to enable easier experimentation of newer Node versions with the agent for customers.

  Please see [https://docs.newrelic.com/docs/agents/nodejs-agent/getting-started/compa...](https://docs.newrelic.com/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent) for officially supported versions. Incompatibilities are expected for odd-numbered releases, which are not supported, and even-numbered releases before "official" support has been released.
* Reduced "... Aggregator data send." log messages to `debug` level to reduce noise of default logs.
* Prevented passing CI with `.only()` in mocha tests.
* Removed CI restriction for Node `12.15`. Node shipped a fix for the `12.16` breakage in `12.16.1`.
* Reduced logging level of raw `x-queue-start` or `x-request-start` header values to avoid logging very large values at default logging levels.

## Fixes

* Bumped `@newrelic/aws-sdk` version to `v1.1.2` from `v1.1.1`. [https://github.com/newrelic/node-newrelic-aws-sdk/blob/master/CHANGELOG.md](https://github.com/newrelic/node-newrelic-aws-sdk/blob/master/CHANGELOG.md)

  Notable improvements include:

  * Fixed issue where instrumentation would crash pulling `host` and `port` values when `AmazonDaxClient` was used as the service for `DocumentClient`.
* Fixed issue where disabled agent would return an empty string instead of an empty object from API getLinkingMetadata().

  This issue would cause the `@newrelic/winston-enricher` module to crash when attempting to inject log metatdata.

## Known issues and workarounds

* If a .NET agent is initiating distributed traces as the root service, you must update that .NET agent to version 8.24 or later before upgrading your downstream New Relic Node agents to this agent release.
