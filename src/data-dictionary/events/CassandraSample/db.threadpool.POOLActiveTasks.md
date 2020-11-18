---
name: db.threadpool.POOLActiveTasks
type: attribute
events:
  - CassandraSample
---

Number of tasks being actively worked on by this pool. The POOL variable can be any of the terms found in this attribute's long description.

Any of these terms can be used for the POOL variable in the db.threadpool.POOLActiveTasks attribute:

*   internalAntiEntropyStage
*   internalCacheCleanupExecutor
*   internalCompactionExecutor
*   internalGossipStage
*   internalHintsDispatcher
*   internalInternalResponseStage
*   internalMemtableFlushWriter
*   internalMemtablePostFlush
*   internalMemtableReclaimMemory
*   internalMigrationStage
*   internalMiscStage
*   internalPendingRangeCalculator
*   internalSampler
*   internalSecondaryIndexManagement
*   internalValidationExecutor
*   requestCounterMutationStage
*   requestMutationStage
*   requestReadRepairStage
*   requestReadStage
*   requestRequestResponse
*   requestViewMutationStage