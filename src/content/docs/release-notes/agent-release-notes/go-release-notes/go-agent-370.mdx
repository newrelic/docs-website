---
subject: Go agent
releaseDate: '2020-06-18'
version: 3.7.0
downloadLink: 'https://github.com/newrelic/go-agent/tree/v3.7.0'
features: ["If a time out when attempting to send data, instead of dropping the data, the agent will save it and attempt to send it with the next harvest"]
bugs: ["Fixed a bug where a bad https connection which uses Header.Set could potentially block all https requests"]
security: []
---

## 3.7.0

### Changes

* When `Config.Transport` is nil, no longer use the `http.DefaultTransport` when communicating with the New Relic backend. This addresses an issue with shared transports as described in [golang/go#33006](https://github.com/golang/go/issues/33006).
* If a timeout occurs when attempting to send data to the New Relic backend, instead of dropping the data, we save it and attempt to send it with the next harvest. Note [data retention limits](https://docs.newrelic.com/docs/apm/new-relic-apm/maintenance/apm-data-retention) still apply and the agent will still start to drop data when these limits are reached. We attempt to keep the highest priority events and traces.
