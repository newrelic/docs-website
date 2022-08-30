---
name: closeCause
type: attribute
events:
  - NrAiIncident
---

If applicable, what caused the incident to close.

Available values: 
`CONDITION_DELETED`: condition was deleted.
`CONDITION_DISABLED` condition was disabled.
`CONDITION_MODIFIED` condition was [edited](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#evaluation-resets)
`EVALUATOR`: natural close because the metric has ceased to breach the threshold.
`EXPIRED`:  incident closed due to TTL.
`INCIDENT_WORKFLOW_INTEGRATION`: a third party closed the issue or incident through an API call.
`LABEL_BINDINGS_CHANGED `:  label was removed from the target, causing it to no longer be covered by the condition. This only applies to APM/Mobile/Browser/Infra conditions.
`LOSS_OF_SIGNAL`: signal was lost, and incident was closed based on LoS settings.
`MAINTENANCE`: New Relic was performing maintenance and we closed the incident as part of it.
`POLICY_DELETED`: policy was deleted.
`TARGET_REMOVED`: the target was removed from the condition. 
`USER`: closed manually by a user.



