---
name: closeCause
type: attribute
events:
  - NrAiIssue
---

What caused the incident to close. Available values:

* `CLOSED_BY_ISSUE`: Issue in a created state that closed naturally before activation.

* `CLOSED_BY_USER`: Issue in a created state that the user closes before activation.

* `CLOSE_INACTIVE`: Issue reached 5000 (max) incidents.

* `closeTtl`: Issue closed due to issue TTL (issue settings).

* `CONDITION_DELETED`: Condition deleted.

* `CONDITION_DISABLED`: Condition disabled.

* `CONDITION_MODIFIED`: Condition [edited](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#evaluation-resets).

* `EVALUATOR`: Natural close because the metric has ceased to breach the threshold.

* `EXPIRED`:  Incident closed due to TTL.

* `INCIDENT_CLOSED`: The issue contains only anomalies and is closed when the last anomaly is closed.

* `LOSS_OF_SIGNAL`: Signal was lost, and incident was closed based on loss of signal settings.

* `POLICY_DELETED`: Policy was deleted.

* `TARGET_REMOVED`: The target was removed from the condition.

* `thirdPartyIntegration`: A third party closed the issue through an API call.

* `USER`: Closed manually by a user on the legacy version.

* `userAction`: Closed manually by a user.
