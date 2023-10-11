---
subject: Go agent
releaseDate: '2019-09-17'
version: 2.12.0
downloadLink: 'https://github.com/newrelic/go-agent/tree/v2.12.0'
---

### New Features

* Added new methods to expose `Transaction` details:

  * `Transaction.GetTraceMetadata()` returns a [TraceMetadata](https://godoc.org/github.com/newrelic/go-agent#TraceMetadata) which contains distributed tracing identifiers.
  * `Transaction.GetLinkingMetadata()` returns a [LinkingMetadata](https://godoc.org/github.com/newrelic/go-agent#LinkingMetadata) which contains the fields needed to link data to a trace or entity.
* Added a new plugin for the [Logrus logging framework](https://github.com/sirupsen/logrus) with the new [\_integrations/logcontext/nrlogrusplugin](https://github.com/newrelic/go-agent/go-agent/tree/master/_integrations/logcontext/nrlogrusplugin) package. This plugin leverages the new `GetTraceMetadata` and `GetLinkingMetadata` above to decorate logs.

  To enable, set your log's formatter to the `nrlogrusplugin.ContextFormatter{}`

  ```
  logger := logrus.New()
  logger.SetFormatter(nrlogrusplugin.ContextFormatter{})
  ```

  The logger will now look for a `newrelic.Transaction` inside its context and decorate logs accordingly. Therefore, the Transaction must be added to the context and passed to the logger. For example, this logging call

  ```
  logger.Info("Hello New Relic!")
  ```

  must be transformed to include the context, such as:

  ```
  ctx := newrelic.NewContext(context.Background(), txn)
  logger.WithContext(ctx).Info("Hello New Relic!")
  ```

  For full documentation see the [godocs](https://godoc.org/github.com/newrelic/go-agent/_integrations/logcontext/nrlogrusplugin) or view the [example](https://github.com/newrelic/go-agent/blob/master/_integrations/logcontext/nrlogrusplugin/example/main.go).
* Added support for [NATS](https://github.com/nats-io/nats.go) and [NATS Streaming](https://github.com/nats-io/stan.go) monitoring with the new [\_integrations/nrnats](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrnats) and [\_integrations/nrstan](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrstan) packages. These packages support instrumentation of publishers and subscribers.

  * [NATS Example](https://github.com/newrelic/go-agent/blob/master/_integrations/nrnats/examples/main.go)
  * [NATS Streaming Example](https://github.com/newrelic/go-agent/blob/master/_integrations/nrstan/examples/main.go)
* Enables ability to migrate to [Configurable Security Policies (CSP)](https://docs.newrelic.com/docs/agents/manage-apm-agents/configuration/enable-configurable-security-policies) on a per agent basis for accounts already using [High-security mode (HSM)](https://docs.newrelic.com/docs/agents/manage-apm-agents/configuration/high-security-mode).

  * Previously, if CSP was configured for an account, New Relic would not allow an agent to connect without the `security_policies_token`. This led to agents not being able to connect during the period between when CSP was enabled for an account and when each agent is configured with the correct token.
  * With this change, when both HSM and CSP are enabled for an account, an agent (this version or later) can successfully connect with either `high_security: true` or the appropriate `security_policies_token` configured - allowing the agent to continue to connect after CSP is configured on the account but before the appropriate `security_policies_token` is configured for each agent.
