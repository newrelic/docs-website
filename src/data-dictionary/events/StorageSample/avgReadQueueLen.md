---
name: avgReadQueueLen
type: attribute
units: count
events:
  - StorageSample
---

The average disk read queue length derived from (Disk Reads/sec) \* (Disk secs/Read).

This metric is only available for the **Windows** Infrastructure agent, **version 1.5.0 or higher**.

This value coincides with the following Windows Performance counter:

\\LogicalDisk(_&lt;drive letter&gt;_)\\Avg. Disk Read Queue Length