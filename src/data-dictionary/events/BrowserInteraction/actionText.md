---
name: actionText
type: attribute
events:
  - BrowserInteraction
  - AjaxRequest
  - JavaScriptError
  - BrowserTiming
---

The text of the HTML element that was clicked when a browser interaction started. This attribute is added to `BrowserInteraction` events and any `AjaxRequest`, `JavaScriptError` and `BrowserTiming` events that occurred during that interaction.