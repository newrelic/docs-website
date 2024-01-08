---
subject: Node.js agent
releaseDate: '2019-06-12'
version: 5.10.0
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

## New Features

* Enables ability to migrate to Configurable Security Policies (CSP) on a per agent basis for accounts already using High-security mode (HSM).

  When both HSM and CSP are enabled for an account, an agent (this version or later) can successfully connect with either `high_security: true` or the appropriate `security_policies_token` configured. `high_security` has been added as part of the preconnect payload.

## Improvements

* The agent now allows installation on node v11 and v12.

  This change relaxes the engines restriction to include Node v11 and v12. This does not constitute official support for those versions, and users on those versions may run into subtle incompatibilities. For those users who are interested in experimenting with the agent on v11 and v12, we are tracking relevant issues here: [https://github.com/newrelic/node-newrelic/issues/279](https://github.com/newrelic/node-newrelic/issues/279).

## Fixes

* Lambda invocations ended with promises will now be recorded properly.

  Previously, the lambda instrumentation was not intercepting the promise resolution/rejection returned from a lambda handler. The instrumentation now properly observes the promise, and ends the transaction when the promise has finished.
* Lambda invocations will only attempt to end the related transaction a single time.

  In the event of two lambda response events (e.g. callback called, and a promise returned), the agent would attempt to end the transaction twice, producing an extraneous empty payload. The agent now limits itself to a single end call for a given transaction.
* The agent will now properly end transactions in the face of uncaught exceptions while in serverless mode.
