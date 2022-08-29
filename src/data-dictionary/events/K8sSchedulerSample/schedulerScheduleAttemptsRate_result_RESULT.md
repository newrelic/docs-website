---
name: schedulerScheduleAttemptsRate_result_RESULT
type: attribute
units: 
events:
  - K8sSchedulerSample
---

Rate of the number of attempts to schedule pods, by the result. `unschedulable` means a pod could not be scheduled, while `error` means an internal scheduler problem.