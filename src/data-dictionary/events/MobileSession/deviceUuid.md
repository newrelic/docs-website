---
name: deviceUuid
type: attribute
units: ID
events:
  - Mobile
  - MobileSession
  - MobileHandledException
  - MobileRequest
  - MobileRequestError
  - MobileCrash
---

A unique identifier assigned at the time of app installation by New Relic. It is only reset if a user deletes and then reinstalls the app. For example: B8B0BC30-0235-11E4-9191-0800200C9A66. Duplicate of `uuid`.
