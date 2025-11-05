---
title: 'Browser Update: Soft navigations improvements & New SPA launches'
summary: 'Update your browser agent version to take advantage of SPA improvements'
'
releaseDate: '2025-11-11'
---

We’re launching improvements to the SPA browser agent that adopt soft navigation heuristics from Google, reduce conflicts with third-party libraries, simplify interaction determinations, and more.

**What’s changing?**

The new soft navigation release adopts heuristics from Google and includes a refactor of our SPA functionality/agent, reducing code conflicts with third-party libraries.

Currently, the SPA agent experiences occasional third-party conflicts, particularly around promises, which disrupts code functionality. Performance bottlenecks include conflicts with code using timers, RAF, and promise chaining, leading to some issues like slowdowns and freezes.

After the change, improvements include: 

**Unwrapped execution:** By not wrapping core globals, the new SPA experience boosts execution speed for your application.

**Aligned with soft navigation heuristics:** Adopts Google Chrome's heuristics for more accurate interaction tracking and improved browser behavior alignment.

**Simplified interaction determination:** Interactions are now defined as a UI event (click/keydown/submit -> route change -> DOM modification), offering a clearer and more efficient capture approach.

Please note: Previously, we relied on wrapping many native browser APIs and a complex tracking system to now monitoring long running tasks (>= 50ms) on select callbacks. Metrics derived this way include jsDuration, timeToSettle, and timeToLastCallbackEnd. 

For more details on Browser SPA monitoring, [see our documentation.](https://docs.newrelic.com/docs/browser/single-page-app-monitoring/get-started/browser-spa-v2/)  

For more on SPA data collection, [see our docs here.](https://docs.newrelic.com/docs/browser/single-page-app-monitoring/use-spa-data/spa-data-collection/)

