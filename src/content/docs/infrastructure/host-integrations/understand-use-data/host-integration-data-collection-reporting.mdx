---
title: Data collection and reporting for on-host integrations
tags:
  - Integrations
  - On-host integrations
  - Understand and use data
metaDescription: How New Relic on-host integrations that work with the infrastructure agent collect and report data to New Relic.
redirects:
  - /docs/integrations/host-integrations/understand-use-data/host-integration-data-collection-reporting
  - /docs/infrastructure/host-integrations/use-data/host-integration-data-collection-reporting
  - /docs/integrations/host-integrations/understand-use-data/host-integration-file-structure
  - /docs/infrastructure/host-integrations/getting-started/host-integration-file-structure
freshnessValidatedDate: never
---

This doc explains how our on-host integrations collect and report data.

## Data collection and reporting process [#data-collection]

This is how on-host integrations send data to New Relic:

1. On startup, the infrastructure agent scans the directory that contains the integration's definition files.
2. The infrastructure agent registers every integration executable defined in the definition file.
3. The agent scans a dedicated directory for integration configuration files.
4. If those config files specify integrations that have been registered with the infrastructure agent, the agent sets up and schedules the integrations.
5. At the scheduled interval (the default is 15 seconds), the agent harvests the data from the integration and prepares it for transmission. Every 60 seconds, it sends that data to New Relic, along with any other infrastructure data.
6. After a successful collection pass, the integration executable exits.

<img
  title="Agents and New Relic"
  alt="Agents and New Relic"
  src="/images/infrastructure_diagram_agents-and-nr.webp"
/>

## Integration architecture [#example-diagram]

Here's an example of how the SQL Server integration works:

* Host 1 with the infrastructure agent installed needs an outbound rule for port `1433`.
* Host 2 with SQL Server needs an inbound rule for port `1433`.

In this example, host 1 pulls data from host 2.

## File structure and specifications [#file-structure]

Understanding the file structure of these on-host integrations can help you customize your integration, understand and use your data, and troubleshoot problems.

These integrations adhere to a set of open source specifications. For an explanation of these file specifications, see [File specs](/docs/integrations/integrations-sdk/file-specifications).
