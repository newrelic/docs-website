---
name: aggregationTag.*
type: attribute
events:
  - NrAiIncidentExternal
---

The `aggregationTag` attribute has a unique suffix added to it. Any events with `aggregationTag` and the same suffix value are grouped together in an incident. A resolve event resets this aggregation grouping.
 
When resolving an incident, make sure the resolve event includes the same aggregation tag.