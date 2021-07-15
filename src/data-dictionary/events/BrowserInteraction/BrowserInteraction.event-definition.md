---
name: BrowserInteraction
type: event
dataSources:
  - Browser agent
---

A BrowserInteraction represents a unit of work in a browser session, triggered by a user interacting with the webpage. It captures information about the session, AJAX calls and custom JavaScript timing that occurred as a result of the interaction. Initial load and route changes are captured as special types of browser interactions, and are used for SPA monitoring.