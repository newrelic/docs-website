---
name: sessionTraceId
type: attribute
units: ID
events:
  - BrowserInteraction
  - AjaxRequest
  - BrowserTiming
  - PageViewTiming
  - JavaScriptError
  - PageAction
---

Allows for linking together actions from the same session. Session trace data relies on browser agent sampling so not all browser events will have this. 

