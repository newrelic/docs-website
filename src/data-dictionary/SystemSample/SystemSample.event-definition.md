---
name: SystemSample
dataSources:
  - Infrastructure
---

The SystemSample event aggregates data describing the current overall state of the entire server. This data appears in the New Relic Infrastructure Hosts page to show usage trends for the associated host's main resources. These resources include CPU, memory, disk, and network. New Relic samples this data every 5 seconds and packages it into a SystemSample event, then sends the raw data to New Relic's collectors every 60 seconds.