---
subject: Browser agent
releaseDate: "2024-08-30"
version: 1.265.0
features: ["Standardize Feature Buffering Behavior","Add WebSocket wrapper and supportability metrics","Configure Session Replay to wait for DOMContentLoaded","removing internal barrel exports","add payload size evaluation to generic events feature"]
bugs: ["fix duplicative log payloads on unload","Ensure drain target is a valid event emitter before subscribing","relative timestamps in session trace","Updated Logging API function"]
security: ["apply obfuscation rules to session trace"]
---

## v1.265.0

### Features

#### Standardized feature buffering behavior

We've established one pattern for holding data before harvests and for retry logic that can be shared by the all of the features. This reduces bespoke logic per feature and establishes a pattern for use with future architecture changes.

#### Add `WebSocket` wrapper and supportability metrics

We added a wrapper to detect usage of `WebSockets`. This is intended to help evaluate viability of the agent tracking `WebSocket` data and its overall mechanism usage patterns.

#### Configure session replay to wait for `DOMContentLoaded`

We decreased the time spent waiting by triggering the session replay mutation observer wrapping on the `DOMContentLoaded` event instead of the previously used window load event. This ensures wrapping is completed before the load chain.

#### Removed internal barrel exports

We reduced the loader bundle size by reworking the internal source code imports and exports.

#### Added payload size evaluation to generic events feature

We've changed data harvesting, where now harvesting occurs early when the payload reaches 64kb and and will harvests from sending if it exceeds the 1MB ingest limit.


### Bug fixes

#### Fix duplicative log payloads on unload

Ensure agent clears buffer on page navigation unload harvests to prevent duplicative payloads from being sent.

#### Ensure drain target is a valid event emitter before subscribing

Ensure that the drain target is a valid event emitter to ensure that the `.on` method exists and will not throw errors.

#### Telative timestamps in session trace

In rare cases where `PerformanceNavigationTiming` API is undefined, session trace timing nodes would be reported using epoch timestamp values instead of relative timestamp values. This would result in a broken session trace experience in New Relic. If the `PerformanceNavigationTiming` API is unavailable, the epoch timestamps will now be converted to relative timestamps accounting for user clock difference with New Relic servers.

#### Updated logging API function

Fix an issue where the logging API method would always result in an uninitialized agent warning and would not capture the log.


### Security fixes

#### Apply obfuscation rules to session trace

A bug was introduced in version 1.259.0 where session trace data was not being processed through configured obfuscation rules. This fix ensures session trace data is properly obfuscated.

Potential areas where un-obfuscated data could be added to the session trace:

- When calling newrelic.addToTrace, the name of the trace event is a string provided by the customer.
- When capturing session trace nodes for ajax requests, the node will contain the current page URL excluding query parameters and hash fragments.
- When capturing resources being loaded on the page (javascript and css files), the session trace node will contain the URL of the resource excluding query parameters and hash fragments.
- When a user clicks a link on the page containing an href that includes a hash fragment and does not result in a hard page load, the href value of the link will be captured in a session trace node.
- When the browser agent captures an error on the page, the message of the error is included in a session trace node.

## Support statement

New Relic recommends that you upgrade the agent regularly to ensure that you're getting the latest features and performance benefits. Older releases will no longer be supported when they reach [end-of-life](https://docs.newrelic.com/docs/browser/browser-monitoring/getting-started/browser-agent-eol-policy/). Release dates are reflective of the original publish date of the agent version.

New browser agent releases are rolled out to customers in small stages over a period of time. Because of this, the date the release becomes accessible to your account may not match the original publish date. Please see this [status dashboard](https://newrelic.github.io/newrelic-browser-agent-release/) for more information.

Consistent with our [browser support policy](https://docs.newrelic.com/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring/#browser-types), v1.265.0 of the Browser agent was built for and tested against these browsers and version ranges: Chrome 117-127, Edge 116-126, Safari 16-17, and Firefox 118-128. For mobile devices, v1.265.0 was built and tested for Android OS 14 and iOS Safari 16-18.