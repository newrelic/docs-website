---
name: StorageMetadataUsedBytes
type: attribute
units: bytes (B)
events:
  - ContainerSample
---

Metadata space used by the Storage Driver. Only available while using Docker's `devicemapper` storage driver [that is deprecated](https://docs.docker.com/storage/storagedriver/select-storage-driver/#supported-storage-drivers-per-linux-distribution).