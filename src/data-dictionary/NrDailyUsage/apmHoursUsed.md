---
name: apmHoursUsed
events:
  - NrDailyUsage
---

Number of hours for which usage was recorded for the given entity.

When an entity is connected to New Relic for any amount of time within a given hour, that hour is counted toward usage. When calculating monthly APM host usage, the calculation for equivalent hosts for a month assumes that a standard month has 750 hours: \`apmHoursUsed / 750\`.