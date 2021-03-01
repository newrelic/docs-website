---
subject: Go agent
releaseDate: '2018-08-28'
version: '2.1'
downloadLink: 'https://github.com/newrelic/go-agent/tree/v2.1.0'
---

### 2.1.0 New

**Go Agent now supports distributed tracing**

Distributed tracing lets you see the path that a request takes as it travels through your distributed system. By showing the distributed activity through a unified view, you can troubleshoot and understand a complex system better than ever before.

Distributed tracing is available with an APM Pro or equivalent subscription. To see a complete distributed trace, you need to enable the feature on a set of neighboring services. Enabling distributed tracing changes the behavior of some New Relic features, so carefully consult the [transition guide](https://docs.newrelic.com/docs/transition-guide-distributed-tracing) before you enable this feature.

To enable distributed tracing, set the following fields in your config. Note that distributed tracing and cross application tracing cannot be used simultaneously.

```
config := newrelic.NewConfig("Your Application Name", "__YOUR_NEW_RELIC_LICENSE_KEY__")
  config.CrossApplicationTracer.Enabled = false
  config.DistributedTracer.Enabled = true
```

Please refer to the [distributed tracing section of the guide](GUIDE.md#distributed-tracingg) for more detail on how to ensure you get the most out of the Go agent's distributed tracing support.

**New distributed trace calls/functions**

Added functions [NewContext](https://godoc.org/github.com/newrelic/go-agent#NewContext) and [FromContext](https://godoc.org/github.com/newrelic/go-agent#FromContext) for adding and retrieving the Transaction from a Context. Handlers instrumented by [WrapHandle](https://godoc.org/github.com/newrelic/go-agent#WrapHandle), [WrapHandleFunc](https://godoc.org/github.com/newrelic/go-agent#WrapHandleFunc), and [nrgorilla.InstrumentRoutes](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrgorilla/v1#InstrumentRoutes) may use [FromContext](https://godoc.org/github.com/newrelic/go-agent#FromContext) on the request's context to access the Transaction. Thanks to @caarlos0 for the contribution! Though [NewContext](https://godoc.org/github.com/newrelic/go-agent#NewContext) and [FromContext](https://godoc.org/github.com/newrelic/go-agent#FromContext) require Go 1.7+ (when [context](https://golang.org/pkg/context/) was added), [RequestWithTransactionContext](https://godoc.org/github.com/newrelic/go-agent#RequestWithTransactionContext) is always exported so that it can be used in all framework and library instrumentation.
