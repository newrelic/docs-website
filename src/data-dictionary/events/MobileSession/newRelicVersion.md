---
name: newRelicVersion
type: attribute
events:
  - MobileSession
  - MobileHandledException
  - MobileCrash
  - MobileRequest
  - MobileRequestError
---

The version number of the agent running on the application. For example: 4.232.0. Duplicate of `newRelicAgentVersion`.
