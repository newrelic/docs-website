---
subject: Go agent
releaseDate: '2019-12-10'
version: 2.16.2
downloadLink: 'https://github.com/newrelic/go-agent/tree/v2.16.2'
---

## 2.16.2

### New Relic's Go agent v3.0 is currently available for review and beta testing. Your use of this pre-release is at your own risk. New Relic disclaims all warranties, express or implied, regarding the beta release.

### If you do not manually take steps to use the new v3 folder you will not see any changes in your agent.

This is the second release of the pre-release of Go agent v3.0. It includes changes due to user feedback during the pre-release. The existing agent in `"github.com/newrelic/go-agent"` is unchanged. The Go agent v3.0 code in the v3 folder has the following changes:

* Transaction names created by [`WrapHandle`](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#WrapHandle), [`WrapHandleFunc`](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#WrapHandleFunc), [nrecho-v3](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrecho-v3), [nrecho-v4](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrecho-v4), [nrgorilla](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrgorilla), and [nrgin](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrgin) now include the HTTP method. For example, the following code:

  ```
  http.HandleFunc(newrelic.WrapHandleFunc(app, "/users", usersHandler))
  ```

  now creates a metric called `WebTransaction/Go/GET /users` instead of `WebTransaction/Go/users`. As a result of this change, you may need to update your alerts and dashboards.
* The [ConfigFromEnvironment](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#ConfigFromEnvironment) config option is now strict. If one of the environment variables, such as `NEW_RELIC_DISTRIBUTED_TRACING_ENABLED`, cannot be parsed, then `Config.Error` will be populated and [NewApplication](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#NewApplication) will return an error.
* [ConfigFromEnvironment](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#ConfigFromEnvironment) now processes `NEW_RELIC_ATTRIBUTES_EXCLUDE` and `NEW_RELIC_ATTRIBUTES_INCLUDE`.
