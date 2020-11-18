---
name: locks.oplogAcquireWaitShared
type: attribute
events:
  - MongoConfigServerSample
---

The number of times the oplog lock type acquisition in the Shared (S) mode encountered waits because the locks were held in a conflicting mode.