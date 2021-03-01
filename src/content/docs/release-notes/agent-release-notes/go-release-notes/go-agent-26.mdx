---
subject: Go agent
releaseDate: '2019-03-12'
version: '2.6'
downloadLink: 'https://github.com/newrelic/go-agent/tree/v2.6.0'
---

## 2.6.0

### New Features

* Added support for async: the ability to instrument multiple concurrent goroutines, or goroutines that access or manipulate the same Transaction.

  The new `Transaction.NewGoroutine() Transaction` method allows transactions to create segments in multiple goroutines!

  `NewGoroutine` returns a new reference to the `Transaction`. This must be called any time you are passing the `Transaction` to another goroutine which makes segments. Each segment-creating goroutine must have its own `Transaction` reference. It does not matter if you call this before or after the other goroutine has started.

  All `Transaction` methods can be used in any `Transaction` reference. The `Transaction` will end when `End()` is called in any goroutine.

  Example passing a new `Transaction` reference directly to another goroutine:

  ```
  go func(txn newrelic.Transaction) {
      defer newrelic.StartSegment(txn, "async").End()
      time.Sleep(100 * time.Millisecond)
  }(txn.NewGoroutine())
  ```

  Example passing a new `Transaction` reference on a channel to another goroutine:

  ```
  ch := make(chan newrelic.Transaction)
  go func() {
      txn := <-ch
      defer newrelic.StartSegment(txn, "async").End()
      time.Sleep(100 * time.Millisecond)
  }()
  ch <- txn.NewGoroutine()
  ```
* Added integration support for [`aws-sdk-go`](https://github.com/aws/aws-sdk-go) and [`aws-sdk-go-v2`](https://github.com/aws/aws-sdk-go-v2).

  When using these SDKs, a segment will be created for each out going request. For DynamoDB calls, these will be Datastore segments and for all others they will be External segments.

  * [v1 Documentation](http://godoc.org/github.com/newrelic/go-agent/_integrations/nrawssdk/v1)
  * [v2 Documentation](http://godoc.org/github.com/newrelic/go-agent/_integrations/nrawssdk/v2)
  * Added span event and transaction trace segment attribute configuration. You may control which attributes are captured in span events and transaction trace segments using the `Config.SpanEvents.Attributes` and `Config.TransactionTracer.Segments.Attributes` settings. For example, if you want to disable the collection of `"db.statement"` in your span events, modify your config like this:

  ```
  cfg.SpanEvents.Attributes.Exclude = append(cfg.SpanEvents.Attributes.Exclude,
      newrelic.SpanAttributeDBStatement)
  ```

  To disable the collection of all attributes from your transaction trace segments, modify your config like this:

  ```
  cfg.TransactionTracer.Segments.Attributes.Enabled = false
  ```

### Bug Fixes

* Fixed a bug that would prevent External Segments from being created under certain error conditions related to Cross Application Tracing.

### Miscellaneous

* Improved linking between Cross Application Transaction Traces in the APM UI. When `Config.CrossApplicationTracer.Enabled = true`, External segments in the Transaction Traces details will now link to the downstream Transaction Trace if there is one. Additionally, the segment name will now include the name of the downstream application and the name of the downstream transaction.
* Update attribute names of Datastore and External segments on Transaction Traces to be in line with attribute names on Spans. Specifically:

  * `"uri"` => `"http.url"`
  * `"query"` => `"db.statement"`
  * `"database_name"` => `"db.instance"`
  * `"host"` => `"peer.hostname"`
  * `"port_path_or_id"` + `"host"` => `"peer.address"`
