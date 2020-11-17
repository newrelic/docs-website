---
name: NetworkSample
dataSources:
  - Infrastructure
---

NetworkSample event captures the descriptive and state information for each network device associated with a server. It includes the device's interface and address information, as well as current usage data. New Relic samples this data every 10 seconds for each attached network interface and packages it into a NetworkSample event, then sends the raw data to New Relic's collectors every 60 seconds.