---
name: db.droppedRequestTypeMessagesPerSecond
type: attribute
events:
  - CassandraSample
---

Dropped messages per second for this type of request. RequestType can be any of the following: BatchRemove, BatchStore, CounterMutation, Hint, Mutation, PagedRange, RangeSlice, Read, ReadRepair, RequestResponse, Trace.