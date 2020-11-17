---
name: SyntheticRequest
dataSources:
  - Synthetics
---

SyntheticRequest returns results from individual HTTP requests made during a check. The data gathered includes job information, location, type of content for request, duration information, request size, and page load information. With each simple or scripted monitor check, we capture each individual HTTP request made during the check. The HTTP details are captured at a more granular level than the SyntheticsCheck event type.