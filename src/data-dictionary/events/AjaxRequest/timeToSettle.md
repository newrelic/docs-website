---
name: timeToSettle
type: attribute
units: seconds (s)
events:
  - AjaxRequest
  - BrowserTiming
---

The time, in seconds, from the start of the request to when all resulting callbacks (including callbacks of subsequent AJAX requests) are complete. This attribute is only seen in `AjaxRequest` data that is tied to `BrowserInteraction`.
