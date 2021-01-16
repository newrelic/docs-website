---
subject: Go agent
releaseDate: '2019-10-14'
version: 2.14.0
downloadLink: 'https://github.com/newrelic/go-agent/tree/v2.14.0'
---

## 2.14.0

### New Features

* Added support for a new segment type, [`MessageProducerSegment`](https://godoc.org/github.com/newrelic/go-agent#MessageProducerSegment), to be used to track time spent adding messages to message queuing systems like RabbitMQ or Kafka.

  ```
  seg := &newrelic.MessageProducerSegment{
    StartTime:       newrelic.StartSegmentNow(txn),
    Library:         "RabbitMQ",
    DestinationType: newrelic.MessageExchange,
    DestinationName: "myExchange",
  }
  // add message to queue here
  seg.End()
  ```
* Added new attribute constants for use with message consumer transactions. These attributes can be used to add more detail to a transaction that tracks time spent consuming a message off a message queuing system like RabbitMQ or Kafka. They can be added using [`txn.AddAttribute`](https://godoc.org/github.com/newrelic/go-agent#Transaction).

  ```
  // The routing key of the consumed message.
  txn.AddAttribute(newrelic.AttributeMessageRoutingKey, "myRoutingKey")
  // The name of the queue the message was consumed from.
  txn.AddAttribute(newrelic.AttributeMessageQueueName, "myQueueName")
  // The type of exchange used for the consumed message (direct, fanout,
  // topic, or headers).
  txn.AddAttribute(newrelic.AttributeMessageExchangeType, "myExchangeType")
  // The callback queue used in RPC configurations.
  txn.AddAttribute(newrelic.AttributeMessageReplyTo, "myReplyTo")
  // The application-generated identifier used in RPC configurations.
  txn.AddAttribute(newrelic.AttributeMessageCorrelationID, "myCorrelationID")
  ```

  It is recommended that at most one message is consumed per transaction.
* Added support for [Go 1.13's Error wrapping](https://golang.org/doc/go1.13#error_wrapping). `Transaction.NoticeError` now uses [Unwrap](https://golang.org/pkg/errors/#Unwrap) recursively to identify the error's cause (the deepest wrapped error) when generating the error's class field. This functionality will help group your errors usefully.

  For example, when using Go 1.13, the following code:

  ```
  type socketError struct{}

  func (e socketError) Error() string { return "socket error" }

  func gamma() error { return socketError{} }
  func beta() error  { return fmt.Errorf("problem in beta: %w", gamma()) }
  func alpha() error { return fmt.Errorf("problem in alpha: %w", beta()) }

  func execute(txn newrelic.Transaction) {
  err := alpha()
  txn.NoticeError(err)
  }
  ```

  captures an error with message `"problem in alpha: problem in beta: socket error"` and class `"main.socketError"`. Previously, the class was recorded as `"*fmt.wrapError"`.
* A `Stack` field has been added to [Error](https://godoc.org/github.com/newrelic/go-agent#Error), which can be assigned using the new [NewStackTrace](https://godoc.org/github.com/newrelic/go-agent#NewStackTrace) function. This allows your error stack trace to show where the error happened, rather than the location of the `NoticeError` call.

  `Transaction.NoticeError` not only checks for a stack trace (using [StackTracer](https://godoc.org/github.com/newrelic/go-agent#StackTracer)) in the error parameter, but in the error's cause as well. This means that you can create an [Error](https://godoc.org/github.com/newrelic/go-agent#Error) where your error occurred, wrap it multiple times to add information, notice it with `NoticeError`, and still have a useful stack trace. Take a look!

  ```
  func gamma() error {
  return newrelic.Error{
      Message: "something went very wrong",
      Class:   "socketError",
      Stack:   newrelic.NewStackTrace(),
  }
  }

  func beta() error  { return fmt.Errorf("problem in beta: %w", gamma()) }
  func alpha() error { return fmt.Errorf("problem in alpha: %w", beta()) }

  func execute(txn newrelic.Transaction) {
  err := alpha()
  txn.NoticeError(err)
  }
  ```

  In this example, the topmost stack trace frame recorded is `"gamma"`, rather than `"execute"`.
* Added support for configuring a maximum number of transaction events per minute to be sent to New Relic. It can be configured as follows:

  ```
  config := newrelic.NewConfig("Application Name", os.Getenv("NEW_RELIC_LICENSE_KEY"))  
  config.TransactionEvents.MaxSamplesStored = 100
  ```

  * For additional configuration information, see our [documentation](https://docs.newrelic.com/docs/agents/go-agent/configuration/go-agent-configuration)

### Miscellaneous

* Updated the [`nrmicro`](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrmicro) package to use the new segment type [`MessageProducerSegment`](https://godoc.org/github.com/newrelic/go-agent#MessageProducerSegment) and the new attribute constants:

  * [`nrmicro.ClientWrapper`](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrmicro#ClientWrapper) now uses `newrelic.MessageProducerSegment`s instead of `newrelic.ExternalSegment`s for calls to [`Client.Publish`](https://godoc.org/github.com/micro/go-micro/client#Client).
  * [`nrmicro.SubscriberWrapper`](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrmicro#SubscriberWrapper) updates transaction names and adds the attribute `message.routingKey`.
* Updated the [`nrnats`](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrnats) and [`nrstan`](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrstan) packages to use the new segment type [`MessageProducerSegment`](https://godoc.org/github.com/newrelic/go-agent#MessageProducerSegment) and the new attribute constants:

  * [`nrnats.StartPublishSegment`](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrnats#StartPublishSegment) now starts and returns a `newrelic.MessageProducerSegment` type.
  * [`nrnats.SubWrapper`](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrnats#SubWrapper) and [`nrstan.StreamingSubWrapper`](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrstan#StreamingSubWrapper) updates transaction names and adds the attributes `message.routingKey`, `message.queueName`, and `message.replyTo`.
