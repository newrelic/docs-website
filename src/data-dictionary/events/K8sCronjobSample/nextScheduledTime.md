---
name: nextScheduledTime
type: attribute
units:
events:
  - K8sCronjobSample
---

Next time the Cronjob should be scheduled. The time after lastScheduleTime, or after the Cronjob's creation time if it's never been scheduled. Use this to determine if the job is delayed.
