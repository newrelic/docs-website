---
name: consumption
type: attribute
units: count
events:
  - NrConsumption
  - NrMTDConsumption
---

The amount of consumption converted to the unit of pricing. For example, for data ingest, consumption is equal to GigabytesIngested. For billable users, consumption is equal to FullPlatformUsers. This attribute is useful if you want to see consumption faceted by productLine or another attribute.