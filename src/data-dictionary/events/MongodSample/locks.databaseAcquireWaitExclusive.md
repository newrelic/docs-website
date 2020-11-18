---
name: locks.databaseAcquireWaitExclusive
type: attribute
events:
  - MongodSample
---

The number of times the database lock type acquisition in the Exclusive (X) mode encountered waits because the locks were held in a conflicting mode.