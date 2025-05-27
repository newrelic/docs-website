---
subject: Browser agent
releaseDate: "2025-01-24"
version: 1.279.0
features: ["Remove FID","Debounce window user actions","Capture details in marks and measures","Add HTTP codes for harvest retry attempts"]
bugs: []
security: []
---

## v1.279.0

### Features

#### Remove FID
First Input Delay (FID) has been deprecated and replaced by Interaction To Next Paint (INP).   PageViewTiming events for first interactions are preserved by detecting the first `first-input` event  and will no longer output value for the `firstInputDelay` and `loadState` attributes.  For more info on PageViewTiming, see https://docs.newrelic.com/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details/.  For more info on INP and the FID deprecation, see https://web.dev/articles/inp.

#### Debounce window user actions
Debounce focus and blur events on the window for 500ms to prevent duplicate events from being harvested. All major browsers have their own quirky behaviors that generate duplicate blur and focus events under some conditions. This change ensures that only 1 blur or focus event can be captured every 500ms to reduce noise.

#### Capture details in marks and measures
The `detail` property of `PerformanceMark` and `PerformanceMeasure` events will now be captured in New Relic `BrowserPerformance` under the `entryDetail` attribute.  If `detail` is an object, it and any nested objects within it will be flatten into string path keys prefixed with `entryDetail`. See [the PR](https://github.com/newrelic/newrelic-browser-agent/pull/1332) for elucidation.

#### Add HTTP codes for harvest retry attempts
Agent will begin to retry harvests to the endpoints that failed for the following additional status codes: 502, 504, and 512-530. This is suggested by New Relic ingest teams as a possibility to recapture lost data in these marginal cases.

## Support statement

New Relic recommends that you upgrade the agent regularly to ensure that you're getting the latest features and performance benefits. Older releases will no longer be supported when they reach [end-of-life](https://docs.newrelic.com/docs/browser/browser-monitoring/getting-started/browser-agent-eol-policy/). Release dates are reflective of the original publish date of the agent version.

New browser agent releases are rolled out to customers in small stages over a period of time. Because of this, the date the release becomes accessible to your account may not match the original publish date. Please see this [status dashboard](https://newrelic.github.io/newrelic-browser-agent-release/) for more information.

Consistent with our [browser support policy](https://docs.newrelic.com/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring/#browser-types), v1.279.0 of the Browser agent was built for and tested against these browsers and version ranges: Chrome 121-131, Edge 121-131, Safari 17-17, and Firefox 122-132. For mobile devices, v1.279.0 was built and tested for Android OS 15 and iOS Safari 17-18.1.