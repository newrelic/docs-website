---
subject: Node.js agent
releaseDate: '2023-08-28'
version: 11.0.0
downloadLink: 'https://www.npmjs.com/package/newrelic'
security: []
bugs: ["Updated prisma instrumentation to parse prisma datamodel with internal package.","Replaced ESM loader with import-in-the-middle to fix instrumentation firing for both CommonJS and ESM."]
features: ["Added support for Node 20","Removed support for Node 14","Updated the default context manager to be AsyncLocalContextManager.","Renamed shim.handleCATHeaders to shim.handleMqTracingHeaders"]
---

## Notes

#### ⚠ BREAKING CHANGES

* Removed support for Node 14.
* Replaced ESM loader with import-in-the-middle to fix instrumentation firing for both CommonJS and ESM.
  * You must load both the ESM loader and agent as follows: `node --experimental-loader newrelic/esm-loader.mjs -r newrelic path/to/app.js`.
  * Removed `config.esm.custom_instrumentation_entrypoint` to register ESM instrumentation. You can now just call the `newrelic.instrument*` APIs but you must pass in an object and specify `isEsm: true`. [See example](https://github.com/newrelic/newrelic-node-examples/blob/main/esm-app/custom-instrumentation/parse-json.js).
* Updated agent to use require-in-the-middle to register CommonJS instrumentation. You can no longer use an onResolved hook to register custom instrumentation.
* Updated the default context manager to be AsyncLocalContextManager.
* Renamed `shim.handleCATHeaders` to `shim.handleMqTracingHeaders`.
* Updated agent to only run in the main thread. This is because running in a worker thread does not completely function out of the box. This will reduce the overhead for customers that are naively trying to load this into worker threads.

#### Features

* Added support for Node 20.
* Renamed `shim.handleCATHeaders` to `shim.handleMqTracingHeaders` ([#1735](https://github.com/newrelic/node-newrelic/pull/1735)) ([6788f9e](https://github.com/newrelic/node-newrelic/commit/6788f9e9b7ffb92e06b342553135871e5918fe87))
  * If you have calls to `shim.handleCATHeaders`, the signature is identical and a function name change is only necessary.
  * **Note**: The agent will be removing CAT functionality in an upcoming release.
* Updated the default context manager to be AsyncLocalContextManager ([#1731](https://github.com/newrelic/node-newrelic/pull/1731)) ([25f2bd8](https://github.com/newrelic/node-newrelic/commit/25f2bd8f9502c0e96fbe45ff4f417e426d32eed8))
  * To restore functionality of legacy context manager you can set `config.feature_flag.legacy_context_manager` to `true` or \`NEW_RELIC_FEATURE_FLAG_LEGACY_CONTEXT_MANAGER=true
  * Please note this legacy context manager will be removed in future major releases. If you have any issues, please raise with New Relic support or on the [issues](https://github.com/newrelic/node-newrelic/issues) of the agent.

#### Bug Fixes

* Replaced esm loader with import-in-the-middle to fix instrumentation firing for both commonjs and esm ([#1760](https://github.com/newrelic/node-newrelic/pull/1760)) ([4452354](https://github.com/newrelic/node-newrelic/commit/4452354a567438b3830ef454ed0299df5a12eab4)), closes [1646](https://github.com/newrelic/node-newrelic/issues/1646)
  * **Breaking Change**: Updated ESM loader that now requires to use both a loader and -r.
    * `node --experimental-loader newrelic/esm-loader.mjs -r newrelic path/to/app.js`
  * **Breaking Change**: Removed `config.esm.custom_instrumentation_entrypoint` to register ESM instrumentation.
    * You can now just call the `newrelic.instrument*` APIs but you must pass in an object and specify `isEsm: true`.
* Updated prisma instrumentation to parse prisma datamodel with internal package ([#1765](https://github.com/newrelic/node-newrelic/pull/1765)) ([48079b3](https://github.com/newrelic/node-newrelic/commit/48079b30332ef44b175443478dbe572fc4031ce7))

#### Code Refactoring

* Updated agent to use require-in-the-middle to register CommonJS instrumentation ([#1758](https://github.com/newrelic/node-newrelic/pull/1758)) ([d4b4f11](https://github.com/newrelic/node-newrelic/commit/d4b4f1177267dfc2e9e9216afe90180964fff823))
  * Removed onResolved hook. If you're using custom instrumentation with an onResolved hook, you must update to use onRequire
  * You can no longer instrument files that are not within a node_module unless you provide an absolute path to the file when registering the instrumentation.
  * You cannot instrument both the base module and a sub module.

#### Miscellaneous Chores

* Remove support for Node 14 ([#1756](https://github.com/newrelic/node-newrelic/pull/1756)) ([0ff9912](https://github.com/newrelic/node-newrelic/commit/0ff9912cd581599f22e12bedf7625b974b9332b3))
* Updated the bundled packages to the latest `@newrelic/superagent`, `@newrelic/aws-sdk`, `@newrelic/koa`, `@newrelic/native-metrics`, and `@newrelic/test-utilities` ([#1766](https://github.com/newrelic/node-newrelic/pull/1766)) ([8f6e15b](https://github.com/newrelic/node-newrelic/commit/8f6e15b89054ee81bfe30a065f4e6c4cacd073b2))
* Updated the aws-sdk external branch to be main now that the code is in there ([#1761](https://github.com/newrelic/node-newrelic/pull/1761)) ([d34d0fe](https://github.com/newrelic/node-newrelic/commit/d34d0fe3c99dc2dbc40799dace5a2a6ebdc8e19f))

#### Tests

* update smoke tests versioned matrix in CI to 16, 18, and 20. ([#1762](https://github.com/newrelic/node-newrelic/pull/1762)) ([c82b517](https://github.com/newrelic/node-newrelic/commit/c82b517abbb34b7505ebeafbd9b5be837167ca33))

### Support statement:

We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read more about keeping agents up to date. ([https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/](https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/))

See the New Relic Node.js agent EOL policy for information about agent releases and support dates. ([https://docs.newrelic.com/docs/apm/agents/nodejs-agent/getting-started/nodejs-agent-eol-policy/](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/getting-started/nodejs-agent-eol-policy/))
