---
name: ioTotalWriteBytes
type: attribute
units: count
events:
  - ProcessSample
---

Counts bytes that the process caused to be sent to the storage layer.

Counts bytes that the process caused to be sent to the storage layer. This is done at page-dirtying time. Read from the `/proc/PID/io` file, where PID is the ID of the process being monitored.