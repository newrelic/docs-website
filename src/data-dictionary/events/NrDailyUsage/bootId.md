---
name: bootId
type: attribute
units: ID
events:
  - NrDailyUsage
---

Linux boot ID of host for which this usage is reported, which is unique for each boot lifetime of each Linux operating system instance.

Will only be present when the New Relic agent is one of the following versions: Go: 1.11 or higher Java: 3.42.0 or higher .NET: 6.19.330.0 or higher Node.js: 2.1.0 or higher PHP: 7.5.0.199 or higher Python: 2.90.0.75 or higher Ruby: 4.4.0.336 or higher bootId is one of three possible providers for the hostId value.