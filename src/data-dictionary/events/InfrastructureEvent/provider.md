---
name: provider
type: attribute
events:
  - InfrastructureEvent
---

For integrations that use generic event types (like the DatastoreSample event), the provider value specifies the source of the data (the service, or a sub-category of data from that service).

Some [events](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#event) are generic and are used by several integrations. For example, the `DatastoreSample` event is used by several integrations, including the [AWS DynamoDB integration](/docs/integrations/amazon-integrations/aws-integrations-list/aws-dynamodb-monitoring-integration) and the [AWS RDS integration](/docs/integrations/amazon-integrations/aws-integrations-list/aws-rds-monitoring-integration). In these cases, the `provider` attribute value represents the source of that attribute. This will usually be the service that data comes from or, for integrations that use several provider values, a certain sub-category of data from that service.

When a provider value is present for a generic event, that event will have additional integration-specific attributes attached to it.

Here’s an example of a NRQL query that returns the attributes present for a `DatastoreSample` event reported by the AWS RDS integration:

SELECT \* from DatastoreSample where provider = 'RdsDbCluster'