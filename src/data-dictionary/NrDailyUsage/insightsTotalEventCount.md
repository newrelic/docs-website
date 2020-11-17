---
name: insightsTotalEventCount
units: count
events:
  - NrDailyUsage
---

Count of all events stored for the given insightsEventNamespace as of the given day.

Sum of insightsIncludedEventCount and the number of events stored beyond the retention period included with a paid non-Insights product subscription. This attribute represents a count of events existing in storage as measured on a given day, and not a count of the events added to storage during a given day. Summing this attribute over a period of more than a day may not give you what you expect; for example, it will not yield the total volume of events written to storage in that period.