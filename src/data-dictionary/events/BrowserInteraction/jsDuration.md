---
name: jsDuration
type: attribute
units: seconds (s)
events:
  - BrowserInteraction
  - AjaxRequest
  - BrowserTiming
---

The total duration, in seconds, spent on JavaScript execution. This attribute is only seen in `AjaxRequest` data that is tied to `BrowserInteraction`. This attribute doesn't exist for initial page load events.