---
name: cloudInstanceId
type: attribute
units: ID
events:
  - NrDailyUsage
---

ID uniquely identifying the cloud host instance (example: an AWS EC2 instance) for which this usage is reported.

(For example, for an AWS EC2 instance, the value would look like i-1234abcd5678ef900.) This is used to uniquely identify the host if the apmComputeUnitRule is cloud\_provider\_data. This will not be present if no cloud provider was detected by the agent. Agents with these versions will detect cloud provider data for AWS: Go: 1.11 or higher Java: 3.18.0 or higher .NET: 5.1.72.0 or higher Node.js: 1.21.0 or higher PHP: 5.5.0 or higher Python: 2.54.0.41 or higher Ruby: 3.12.1.298 or higher cloudInstanceId is one of three possible providers for the hostId value.