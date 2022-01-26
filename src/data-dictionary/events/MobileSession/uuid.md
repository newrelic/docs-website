---
name: uuid
type: attribute
units: ID
events:
  - MobileSession
  - MobileHandledException
  - MobileCrash
  - MobileRequest
  - MobileRequestError
---

A unique identifier assigned by New Relic for a specific app on a particular device. It is only reset if a user deletes and then reinstalls the app. For example: B8B0BC30-0235-11E4-9191-0800200C9A66. Dupliate of `deviceUuid`.
