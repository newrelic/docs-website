---
name: BrowserTiming
type: event
dataSources:
  - Browser agent
---

`BrowserTiming` is a custom event that captures SPA timing data for browser interactions started using the custom `createTracer` SPA API method. `BrowserTiming` contains many of the same attributes used by other events, especially `AjaxRequest`.