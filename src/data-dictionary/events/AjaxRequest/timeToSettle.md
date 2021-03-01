---
name: timeToSettle
type: attribute
units: seconds (s)
events:
  - AjaxRequest
  - BrowserTiming
---

The time, in seconds, from the start of the request to when all resulting callbacks (including callbacks of subsequent AJAX requests) are complete.