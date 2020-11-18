---
name: networkDuration
type: attribute
units: seconds (s)
events:
  - PageView
---

The total time spent in redirects as well as in requesting and receiving HTML (in seconds). If webAppDuration (server side timing information) is not available, time on the server will be included in this duration.