---
name: processorCount
type: attribute
units: count
events:
  - SystemSample
---

* Linux: [/proc/cpuinfo: 'processor'] The total number of cores in all CPUs.

* Windows: [WMI win32_processor: 'NumberOfCores'] The number of physical processors on the integrated circuit.