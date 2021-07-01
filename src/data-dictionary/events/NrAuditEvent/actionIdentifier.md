---
name: actionIdentifier
type: attribute
events:
  - NrAuditEvent
---

Indicates an action that was taken in a New Relic account.

The `actionIdentifier` attribute describes the action that was taken. Some `actionIdentifier` values will be prefixed by the [`targetType`](/attribute-dictionary/nrauditevent/targettype).

Some examples of `actionIdentifier` values:

*   account.update\_owner
*   alerts.condition.create
*   alerts.condition.update
*   alerts.condition.delete
*   alerts.condition.unarchive
*   role.create
*   user.add\_roles
*   user.add\_to\_account
*   user.invite\_to\_account
*   user.remove\_from\_account
*   user.remove\_roles
*   synthetics\_monitor.create
*   synthetics\_monitor.delete