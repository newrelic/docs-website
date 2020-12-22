---
subject: Go agent
releaseDate: '2019-01-24'
version: '2.3'
downloadLink: 'https://github.com/newrelic/go-agent/tree/v2.3.0'
---

### 2.3.0 Notes

* Added support for [Echo](https://echo.labstack.com) in the new `nrecho` package.

  * [Documentation](http://godoc.org/github.com/newrelic/go-agent/_integrations/nrecho)
  * [Example](https://github.com/newrelic/go-agent/blob/master/_integrations/nrecho/example/main.go)
* Introduced `Transaction.SetWebResponse(http.ResponseWriter)` method which sets the transaction's response writer. After calling this method, the `Transaction` may be used in place of the `http.ResponseWriter` to intercept the response code. This method is useful when the `http.ResponseWriter` is not available at the beginning of the transaction (if so, it can be given as a parameter to `Application.StartTransaction`). This method will return a reference to the transaction which implements the combination of `http.CloseNotifier`, `http.Flusher`, `http.Hijacker`, and `io.ReaderFrom` implemented by the ResponseWriter. Example:

```
func setResponseDemo(txn newrelic.Transaction) {
    recorder := httptest.NewRecorder()
    txn = txn.SetWebResponse(recorder)
    txn.WriteHeader(200)
    fmt.Println("response code recorded:", recorder.Code)
}
```

* The `Transaction`'s `http.ResponseWriter` methods may now be called safely if a `http.ResponseWriter` has not been set. This allows you to add a response code to the transaction without using a `http.ResponseWriter`. Example:

```
func transactionWithResponseCode(app newrelic.Application) {
       txn := app.StartTransaction("hasResponseCode", nil, nil)
       defer txn.End()
       txn.WriteHeader(200) // Safe!
}
```

* The agent will now collect environment variables prefixed by `NEW_RELIC_METADATA_` and `KUBERNETES_SERVICE_HOST`. These will be added to Transaction events to provide context between your Kubernetes cluster and your services. For details on the benefits (currently in beta) see [this blog post](https://blog.newrelic.com/engineering/monitoring-application-performance-in-kubernetes/)
* The agent now collects the fully qualified domain name of the host and local IP addresses for improved linking with our Infrastructure product.
