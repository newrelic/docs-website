---
name: ioTotalReadBytes
units: count
events:
  - ProcessSample
---

Counts bytes that the process caused to be fetched from the storage layer.

Count of bytes that the process caused to be fetched from the storage layer. Done at submit\_bio() level, so it's accurate for block-backed filesystems. Read from the `/proc/PID/io` file, where PID is the ID of the process being monitored.