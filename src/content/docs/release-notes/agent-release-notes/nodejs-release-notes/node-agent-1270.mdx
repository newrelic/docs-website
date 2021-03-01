---
subject: Node.js agent
releaseDate: '2016-04-21'
version: 1.27.0
downloadLink: 'https://www.npmjs.com/package/newrelic'
metaDescription: Release notes for Node Agent 1.26.2
---

### Notes

<Callout variant="important">
  This release has been unpublished from npmjs.org. Use version [1.27.1](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-1271) or higher.
</Callout>

### New Features

* Reworked promise instrumentation to be more reliable and reusable.

  Promise instrumentation has been rewritten to be applicable to any A+ compliant promise library. This change brings more consistent instrumentation of Bluebird promises.

  This change also allows users to see the execution order of chained promises in their Transaction Traces. This is an opt-in process and can be achieved by setting `feature_flag.promise_segments` to true in the agent config.

### Bug fixes

* The agent now properly checks for custom SSL certificates.

  The check previously was falsely positive if there was an empty list of custom certificates. This caused red herrings to be admitted into the debug logs. Thanks to Seth Shober (@sethshober) for the fix!
* Promise error handling is now more consistent.

  Previously the agent would notice errors being emitted on `unhandledRejection` regardless of other listeners. Errors coming in on the `unhandledRejection` event will not be recorded if there are handlers for the event - this is more in line with our error handling practices in other instrumentations.

### Improvements

* Added a `.npmignore` file to exclude non-essential files.

  The agent will now omit tests and examples on install from npm, drastically improving download times. Thanks to Serge Havas (@Sinewyk) for the contribution!
* Logging has been reworked to reduce CPU overhead.

  The check to see if a logging call was valid happened fairly late in the logic, causing unnecessary work to be done regardless of logger state. This has been rectified, netting a large decrease in CPU overhead.
