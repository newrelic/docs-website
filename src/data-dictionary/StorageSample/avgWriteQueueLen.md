---
name: avgWriteQueueLen
units: count
events:
  - StorageSample
---

The average disk write queue length derived from (Disk Writes/sec) \* (Disk secs/Write)

This metric is only available for the **Windows** Infrastructure agent, **version 1.5.0 or higher**.

This value coincides with the following Windows Performance counter:

\\LogicalDisk(_&lt;drive letter&gt;_)\\Avg. Disk Write Queue Length