---
name: parent.transportType
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

When a distributed tracing payload is received, the method of transport for the payload. Example values: Unknown, HTTP, HTTPS, Kafka, JMS, IronMQ, AMQP, Queue, or Other.