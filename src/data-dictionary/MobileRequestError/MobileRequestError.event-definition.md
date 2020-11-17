---
name: MobileRequestError
dataSources:
  - Mobile
---

A MobileRequestError is used for HTTP errors or network failures. HTTP errors are HTTP requests that have a status code greater than 400. A network failure is a HTTP request that results in no response. The event is sent when the HTTP request completes.