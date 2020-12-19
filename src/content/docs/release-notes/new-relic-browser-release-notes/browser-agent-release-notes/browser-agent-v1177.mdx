---
subject: Browser agent
releaseDate: '2020-08-18'
version: '1177'
---

## New Features

We are excited to announce the release of [Cumulative Layout Shift](https://web.dev/cls/), the third and final metric in [Google's Core Web Vitals](https://web.dev/vitals/). This metric is an important, user-centric metric for measuring visual stability because it helps quantify how often users experience unexpected layout shifts—a low CLS helps ensure that the page is delightful. The current set for 2020 Core Web Vitals focuses on three aspects of the user experience—loading, interactivity, and visual stability—and includes the following metrics (and their respective thresholds):

* Largest Contentful Paint (LCP): measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.
* First Input Delay (FID): measures interactivity. To provide a good user experience, pages should have a FID of less than 100 milliseconds.
* Cumulative Layout Shift (CLS): measures visual stability. To provide a good user experience, pages should maintain a CLS of less than 0.1. For each of the above metrics, to ensure you're hitting the recommended target for most of your users, a good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices. To learn more about the research and methodology behind these recommendations, see: [Defining the Core Web Vitals metrics thresholds](https://web.dev/defining-core-web-vitals-thresholds/). Tools that assess Core Web Vitals compliance should consider a page passing if it meets the recommended targets at the 75th percentile for all of the above three metrics.

### How does the Browser Agent report this data?

The agent now collects CLS (Cumulative Layout Shift) values as attributes on PageViewTiming events. CLS measures how much layout of the page shifts and is represented as a score. All types of PageViewTiming events (except FP and FCP) include this attribute, showing the score up until the point the timing measurement was taken. You can now track your CLS score throughout the page loading cycle to better understand and focus your optimization work on the moment in time where you are experiencing the worst scores.

We have also added two new events to the PageViewTiming event, pageHide and windowLoad to complete the full page load journey. These timings are useful with its CLS (Cumulative Layout Shift) attribute to paint the picture of a user's journey through the load experience.

* The [pageHide](https://developer.mozilla.org/en-US/docs/Web/API/Window/pagehide_event) event represents the first time that the page was hidden (e.g. by switching browser tab). Note that we only collect the first pageHide events at this point.
* The [windowLoad](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

For more information, please visit our docs on the [PageViewTiming event](https://docs.newrelic.com/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details).

## Issue Fixes

* \[PageViewTiming event] Fixed unrealistic high values for FI & FID Older browsers report Event.timeStamp as an epoch time instead of value relative to the page navigation start. The agent took this into account for FI (First Interaction) timing values but not for FID (First Input Delay). With this fix, there should no longer be unrealistic outlier values for FID.

### How to upgrade your agent

For instructions for upgrading your agent, please view our [docs](https://docs.newrelic.com/docs/browser/new-relic-browser/installation/update-browser-agent).
