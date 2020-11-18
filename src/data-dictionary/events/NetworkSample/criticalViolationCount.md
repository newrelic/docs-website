---
name: criticalViolationCount
type: attribute
units: count
events:
  - NetworkSample
  - ContainerSample
  - ProcessSample
  - StorageSample
  - SystemSample
---

The number of times that alert conditions violated critical thresholds, causing critical violations and opening incidents. If this attribute does not exist on the sample, it has zero violations.