---
name: evaluationType
type: attribute
events:
  - NrAiIncident
---

The reason the violation was opened. Available values: 

* `threshold` (the condition threshold was breached)
* `expiration` (the entity's signal was lost)
* `anomaly` (an automatic anomaly was generated)