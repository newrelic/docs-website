---
name: billableConsumption
type: attribute
units: count
events:
  - NrMTDConsumption
---

The amount of billable consumption in the unit of pricing. For example, for Data Platform, billableConsumption is equal to GigabytesIngestedBillable. For Full Stack Observability, billableConsumption is equal to FullUsersBillable. Estimated cost is equal to billableConsumption multiplied by the unit price of the metric.