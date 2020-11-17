---
name: queue.messagesReadyUnacknowledged
events:
  - RabbitmqQueueSample
---

Count of messages per queue delivered to clients but not yet acknowledged. In RabbitMQ this is seen as message\_stats.deliver\_no\_ack.