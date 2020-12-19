---
subject: Go agent
releaseDate: '2019-10-24'
version: 2.15.0
downloadLink: 'https://github.com/newrelic/go-agent/tree/v2.14.1'
---

## 2.15.0

### New Features

* Added support for monitoring [MongoDB](https://github.com/mongodb/mongo-go-driver/) queries with the new [\_integrations/nrmongo](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrmongo) package.

  * [Example application](https://github.com/newrelic/go-agent/blob/master/_integrations/nrmongo/example/main.go)
  * [Full godocs Documentation](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrmongo)
* Added new method `Transaction.IsSampled()` that returns a boolean that indicates if the transaction is sampled. A sampled transaction records a span event for each segment. Distributed tracing must be enabled for transactions to be sampled. `false` is returned if the transaction has finished. This sampling flag is needed for B3 trace propagation and future support of W3C Trace Context.
* Added support for adding [B3 Headers](https://github.com/openzipkin/b3-propagation) to outgoing requests. This is helpful if the service you are calling uses B3 for trace state propagation (for example, it uses Zipkin instrumentation). You can use the new [\_integrations/nrb3](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrb3) package's [`nrb3.NewRoundTripper`](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrb3#NewRoundTripper) like this:

  ```
  // When defining the client, set the Transport to the NewRoundTripper. This
  // will create ExternalSegments and add B3 headers for each request.
  client := &http.Client{
    Transport: nrb3.NewRoundTripper(nil),
  }

  // Distributed Tracing must be enabled for this application.
  // (see https://docs.newrelic.com/docs/understand-dependencies/distributed-tracing/enable-configure/enable-distributed-tracing)
  txn := currentTxn()

  req, err := http.NewRequest("GET", "http://example.com", nil)
  if nil != err {
    log.Fatalln(err)
  }

  // Be sure to add the transaction to the request context.  This step is
  // required.
  req = newrelic.RequestWithTransactionContext(req, txn)
  resp, err := client.Do(req)
  if nil != err {
    log.Fatalln(err)
  }

  defer resp.Body.Close()
  fmt.Println(resp.StatusCode)
  ```
