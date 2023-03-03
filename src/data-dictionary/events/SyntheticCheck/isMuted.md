---
name: isMuted
type: attribute
events:
  - SyntheticCheck
---

A boolean value that indicates the monitor status is muted. This will only be set if the monitor configuration is changed to muted. This will not be set if the monitor is part of a [monitor downtime](/docs/synthetics/synthetic-monitoring/using-monitors/monitor-downtimes-disable-monitoring-during-scheduled-maintenance-times/) or [muting rules](/docs/alerts-applied-intelligence/new-relic-alerts/alert-notifications/muting-rules-suppress-notifications/) configuration.