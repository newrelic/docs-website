---
subject: Node.js agent
releaseDate: '2018-02-07'
version: 2.7.1
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

### Notes

* Changed `attributes.enabled` to `true` by default.

  In the previous version we defaulted this to `false` to maintain parity with `capture_params` which defaulted to `false`. However, this is a invalid parity because `attribute.enabled` controls more attributes than `capture_params`.

### Improvements

* Removed unnecessary checks around `Timer.unref()` calls.

  `unref` has been supported since Node v0.9, meaning it will always be present in timers set by the agent (with 0.10 being the earliest supported version).
* Added a split in the node versions for the `mysql2` and `cassandra` versioned tests.

  As of `mysql2` v1.3.1 and `cassandra` v3.4.0 the minimum supported version of Node is 4.
* Replaced as many instances of `{}` as possible with `Object.create(null)`.
* Removed extraneous logger arg in `addCustomAttribute` call.

### Bug fixes

* The agent will no longer generate browser data for ignored transactions.
* Expanded Hapi instrumentation to support route [`pre` handlers](https://github.com/hapijs/hapi/blob/v16/API.md#route-prerequisites).

  This is a Hapi route config option that was previously uninstrumented, causing transaction names to become invalid. This expanded instrumentation ensures that all additional handlers are wrapped and associated with the main route.
