---
name: queue.messagesRedeliverGetPerSecond
events:
  - RabbitmqQueueSample
---

Rate of subset of messages in acknowledgment mode which had the redelivered flag set per queue per second. In RabbitMQ this is seen as message\_stats.redeliver\_details.rate.