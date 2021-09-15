---
name: timeToLastCallbackEnd
type: attribute
units: seconds (s)
events:
  - AjaxRequest
  - BrowserInteraction
  - BrowserTiming
---

The duration, in seconds, from the start of the request (timestamp) to the end of the last callback. This is not just an additive function; the callback time can overlap with the wait time. This attribute is only seen in `AjaxRequest` data that is tied to `BrowserInteraction`.
