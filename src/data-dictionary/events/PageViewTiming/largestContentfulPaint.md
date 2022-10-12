---
name: largestContentfulPaint
type: attribute
units: seconds (s)
events:
  - PageViewTiming
---

This metric, available with agent version 1163, largestContentfulPaint, reports the render time of the largest content element visible in the viewport.

This metric, available with [agent version 1163](https://docs.newrelic.com/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1163), [`largestContentfulPaint`](http://docs.newrelic.com/attribute-dictionary/pageviewtiming/largestcontentfulpaint), reports the render time of the largest content element visible in the viewport. Research from Google shows that when the largest element is rendered is a more accurate way to measure when the main content of a page is loaded and useful. Details on this metric, including limitations and considerations can be found in the [w3c draft on GitHub](https://wicg.github.io/largest-contentful-paint/).