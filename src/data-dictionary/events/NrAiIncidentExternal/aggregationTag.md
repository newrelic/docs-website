---
name: aggregationTag.*
type: attribute
events:
  - NrAiIncidentExternal
---

Any trigger events with the `aggregationTag` prefix and the same suffix attribute are grouped together in an incident. A resolve event resets this aggregation.
 
When resolving an incident, make sure the resolve event includes the same aggregation tag.