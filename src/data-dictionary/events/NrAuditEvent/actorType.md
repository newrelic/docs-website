---
name: actorType
type: attribute
events:
  - NrAuditEvent
---

Identifies whether the action was initiated by a user (person) or with an API key that is not associated with a user.

*   user: For greatest data accuracy, select user, along with actorId and actorEmail.
*   api\_key: If used, the actorId and actorEmail are not required