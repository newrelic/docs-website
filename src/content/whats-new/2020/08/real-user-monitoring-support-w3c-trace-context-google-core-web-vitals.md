---
title: 'Real user monitoring support for W3C trace context and Google Core Web Vitals '
summary: We've added support for W3C trace context and Google Core Web Vitals!
releaseDate: '2020-08-26'
---

While it has a new home within our [Full-Stack Observability](https://newrelic.com/platform/full-stack-observability) product, we’ve made improvements to our [Browser agent](https://newrelic.com/products/browser-monitoring) and [real user monitoring capabilities](/docs/browser/new-relic-browser/getting-started/introduction-browser-monitoring), including:

* [W3C trace context](https://www.w3.org/TR/trace-context/) standardization
* [Cumulative Layout Shift](https://web.dev/cls/) to measure a page’s visual stability

These new improvements help both frontend and web developers, who are increasingly spending time in incident resolution, focus on their main role of solving problems with software.

### Expanding W3C trace context standardization

In our [continued standardization of W3C trace context](https://blog.newrelic.com/product-news/w3c-trace-context-distributed-tracing-standard/), our Browser agent now offers the standard trace context. W3C trace context enables cross-vendor interoperation of traces and helps ensure that, when using [distributed tracing](https://blog.newrelic.com/product-news/distributed-tracing-general-availability/), you can troubleshoot services instrumented with agents from other vendors without risking broken or incomplete traces. Additionally, this also ensures that you’ll be able to reliably traverse third-party components, including proxies and API gateways.

Additionally, W3C trace context offers the same advantages when using open source tracers, enabling you to incorporate tracing [telemetry data](https://blog.newrelic.com/product-news/introducing-telemetry-data-platform/) from any source, at any time, and to implement traces across highly-distributed application environments.

See our [docs](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1173) for more information about standard trace context.

### New Metric: Cumulative Layout Shift

We're excited to announce the release of [Cumulative Layout Shift (CLS)](https://web.dev/cls/), the third and final metric in [Google Core Web Vitals](https://web.dev/vitals/). This metric is an important user-centric metric for measuring visual stability, because it helps quantify how often users experience unexpected layout shifts. A low CLS score helps ensure that your page is delightful and visually stable.

The current set of 2020 Core Web Vitals focuses on three aspects of the user experience: loading, interactivity, and visual stability. These are the following metrics and their thresholds:

* Largest Contentful Paint (LCP): measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page starts loading.
* First Input Delay (FID): measures interactivity. To provide a good user experience, pages should have a FID of less than 100 milliseconds.
* Cumulative Layout Shift (CLS): measures visual stability. To provide a good user experience, pages should maintain a CLS of less than 0.1.

For each of the above metrics, to ensure you're hitting the recommended target for most of your users, a good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices. To learn more about the research and methodology behind these recommendations, see: [Defining the Core Web Vitals metrics thresholds](https://web.dev/defining-core-web-vitals-thresholds/). Tools that assess Core Web Vitals compliance should consider a page passing if it meets the recommended targets at the 75th percentile for all of these three metrics.

For more on measuring Cumulative Layout Shift, see our [docs](/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details#h2-support-for-googles-core-web-vitals).
