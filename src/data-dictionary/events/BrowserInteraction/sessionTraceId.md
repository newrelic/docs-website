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

Allows for linking together end user actions from session traces and querying across browser events. Not all browser events will have this. For example, PageView events complete before the first session trace harvest. Also, initial page loads from BrowserInteraction won't always include this. 
