---
name: containerId
events:
  - NrDailyUsage
---

ID of the Docker or other Linux container in which the application instance is running.

This will not be present if a container was not detected by the agent. Present only for events where usageType equals Application. This attribute is not used to uniquely identify hosts for billing purposes.