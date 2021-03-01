---
name: currentQueueLen
type: attribute
units: count
events:
  - StorageSample
---

Length of the disk queue at the time of sampling.

This metric is only available for the **Windows** Infrastructure Agent, **version 1.5.0 or higher**.

This value coincides with the following Windows Performance counter:

\\LogicalDisk(_&lt;drive letter&gt;_)\\Current Disk Queue Length