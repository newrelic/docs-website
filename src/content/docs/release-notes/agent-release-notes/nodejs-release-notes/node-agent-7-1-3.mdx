---
subject: Node.js agent
releaseDate: '2021-03-09'
version: 7.1.3
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

## Improvements

* Removed requirement to configure application name when running in AWS Lambda (serverless mode).

  Currently New Relic doesn't leverage the application name for Lambda invocations. The agent now defaults the application name in serverless mode to remove the requirement of end-user configuration while handling cases if it were to be leveraged in the future.

* Improved clarity of logging between 'no log file' or disabled agent startup issues.

  * Logs no-config file error to initialized logger (stdout) in addition to existing console.error() logging.
  * Adds specific message to no config file separate from being disabled.

* Stopped binding/propagating segments via `setImmediate` for ended transactions.

* Bumped @grpc/grpc-js to ^1.2.7.

* Added support metric to be able to track usage of cert bundle via usage of custom certificates.

## Fixes

* Fixed bug where agent would attempt to call the 'preconnect' endpoint on the redirect host returned by the previous 'preconnect' call when reconnecting to the New Relic servers.

  The 'preconnect' calls now always use the original agent configuration value. Subsequent endpoints (connect, harvest endpoints, etc.) will continue to leverage the new redirect host value returned by 'preconnect.' The original config values are no longer overridden.

* Fixed issue where a call to `transaction.acceptDistributedTraceHeaders` would throw an error when the `headers` parameter is a string.

* Removed index-bad-config test which tested a no-longer possible use-case.

* Removed license-key test logic from serverless-harvest test.

  Serverless mode does not require a license key as data transfer is handled by the integration.

* Removed aws-sdk versioned test filtering.

* Removed unused Travis CI scripts.

### Support statement:

* New Relic recommends that you upgrade the agent regularly to ensure that you're getting the latest features and performance benefits. Additionally, older releases will no longer be supported when they reach [end-of-life](https://docs.newrelic.com/docs/using-new-relic/cross-product-functions/install-configure/notification-changes-new-relic-saas-features-distributed-software).
