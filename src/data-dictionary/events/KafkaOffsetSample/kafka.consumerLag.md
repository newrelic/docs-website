---
name: kafka.consumerLag
type: attribute
events:
  - KafkaOffsetSample
---

The difference between a broker's high water mark and a consumer groups offset (kafka.highWaterMark - kafka.consumerOffset).