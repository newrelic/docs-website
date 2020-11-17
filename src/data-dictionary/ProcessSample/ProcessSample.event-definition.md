---
name: ProcessSample
dataSources:
  - Infrastructure
---

ProcessSample event gathers detailed resource usage information from programs running on a single system. New Relic samples the data every 20 seconds for every active process and packages it into a ProcessSample event, which then sends the raw data to New Relic's collectors every 60 seconds.