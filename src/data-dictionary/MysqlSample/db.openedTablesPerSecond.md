---
name: db.openedTablesPerSecond
events:
  - MysqlSample
---

Number of files that have been opened with \`my\_open()\` (a mysys library function) per second. Parts of the server that open files without using this function do not increment the count.