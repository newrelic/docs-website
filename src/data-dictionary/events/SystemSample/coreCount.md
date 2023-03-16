---
name: coreCount
type: attribute
units: count
events:
  - SystemSample
---

* Linux: [/proc/cpuinfo: 'cpu cores'] The number of cores within a single CPU.

* Windows: [WMI win32_processor: 'NumberOfLogicalProcessors'] The number of logical processors, including cores divided by hyperthreading.