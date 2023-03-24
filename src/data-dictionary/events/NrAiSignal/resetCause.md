---
name: resetCause
type: attribute
events:
  - NrAiSignal
---

For reset events only. NrAiSignal indicates suppression as a `resetCause` when New Relic has had internal problems and alerts have been suppressed to avoid a wave of false alerts. Available values:

  * `New`: It's a new signal coming online.
  * `Expired`: Signal reset due to loss of signal configuration.
  * `ConditionDisabled`: The user disabled the in the UI.
  * `delayedEvaluation`: The condition has a delayed evaluation configuration before it starts evaluating.
  * `Suppression`: Because of an ongoing incident, alerts are suppressed.
  * `Interrupt`: When we detect issues, we internally interrupt our services. Issues are mainly out-of-order data points that can cause false alerts.
  * `ConditionDeleted`: The user has deleted the condition in the UI.
  * `ConditionModified`: The user has modified the condition in a way that requires re-registration on our side.
  * `PolicyDeleted`: Deleted the entire policy.
  * `User`: The user has closed the incident manually in the UI.