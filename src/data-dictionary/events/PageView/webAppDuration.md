---
name: webAppDuration
type: attribute
units: seconds (s)
events:
  - PageView
---

The total server-side response time for the top-level resource of the PageView (in seconds) as measured by the APM agent.

This does not include network time to transmit the request or receive the response, or server-side request queueing time. The webAppDuration is measured by the APM agent and must be injected into the browser monitoring script before the request is fully finished. Its end point is slightly before the end point used to calculate the duration attribute on Transactions, so webAppDuration will be slightly less than the duration attribute on Transactions in practice.