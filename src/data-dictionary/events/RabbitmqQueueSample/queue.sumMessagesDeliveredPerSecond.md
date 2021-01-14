---
name: queue.sumMessagesDeliveredPerSecond
type: attribute
events:
  - RabbitmqQueueSample
---

Rate per second of the sum of messages delivered in acknowledgment mode to consumers, in no-acknowledgment mode to consumers, in acknowledgment mode in response to basic.get, and in no-acknowledgment mode in response to basic.get per queue. In RabbitMQ this is seen as message\_stats.deliver\_get\_details.rate.