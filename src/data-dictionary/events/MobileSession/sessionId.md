---
name: sessionId
type: attribute
units: ID
events:
  - MobileSession
  - MobileHandledException
  - MobileCrash
  - MobileRequest
  - MobileRequestError
---

A unique identifier for a single user session. A new sessionId is created each time the app is brought into the foreground.
