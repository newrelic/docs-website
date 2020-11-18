---
name: cluster.slaveRunning
type: attribute
events:
  - MysqlSample
---

Boolean. 1 if this server is a replication slave that is connected to a replication master, and both the I/O and SQL threads are running; otherwise, it is 0. For metrics reported if enabled, see replication slave metrics.