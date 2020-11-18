---
name: session
type: attribute
events:
  - PageView
  - PageAction
  - BrowserInteraction
  - AjaxRequest
  - BrowserTiming
  - PageViewTiming
  - Span
  - JavaScriptError
---

A unique identifier for a single session. The session cookie expires when the user closes the browser (for example, they fully exit Chrome.) A new session identifier will be assigned when the user opens up a new instance of the browser.