---
name: queue.messagesDeliveredAckModePerSecond
type: attribute
events:
  - RabbitmqQueueSample
---

Rate of messages delivered in acknowledgment mode to consumers per queue per second. In RabbitMQ this is seen as message\_stats.deliver\_details.rate.