---
name: StorageDataUsagePercent
type: attribute
units: percentage (%)
events:
  - ContainerSample
---

Percent of Data space used in the Storage Driver. Only available while using Docker's `devicemapper` storage driver [that is deprecated](https://docs.docker.com/storage/storagedriver/select-storage-driver/#supported-storage-drivers-per-linux-distribution).