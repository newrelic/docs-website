---
name: avgQueueLen
units: count
events:
  - StorageSample
---

The average disk queue length derived from (Disk Transfers/sec) \* (Disk secs/Transfer).

This metric is only available for the **Windows** Infrastructure agent, **version 1.5.0 or higher**.

This value coincides with the following Windows Performance counter:

\\LogicalDisk(_&lt;drive letter&gt;_)\\Avg. Disk Queue Length