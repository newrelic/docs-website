---
name: asserts.rolloversPerSecond
type: attribute
events:
  - MongoConfigServerSample
---

The number of times that the rollover counters roll over. The counters rollover to zero every 2^30 assertions per second.