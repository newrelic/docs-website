---
name: agentHostname
units: ID
events:
  - NrDailyUsage
---

ID reported by the agent to uniquely identify the host for which this usage event is reported.

This value can come from several sources in the application's environment, but commonly is the value returned by the gethostname Linux syscall. In Docker environments, this attribute can take on the value (sometimes truncated) of the Docker container ID. agentHostname is one of three possible providers for the hostId value.