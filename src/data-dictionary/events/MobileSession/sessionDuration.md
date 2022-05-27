---
name: sessionDuration
type: attribute
units: seconds (s)
events:
  - MobileSession
---

The length of time for which the user used the application in seconds. If the session crashes, sessionDuration is not captured (although other events and attributes are still recorded).

For sessions longer than 10 minutes, events in the Interaction and Custom event categories are sent to New Relic while the session is ongoing, and therefore do not have sessionDuration attributes. Events recorded near the end of the session will include the duration, as will the Session event category.