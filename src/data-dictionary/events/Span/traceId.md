---
name: traceId
type: attribute
units: ID
events:
  - Span
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
  - MobileRequest
  - MobileRequestError
---

The unique ID (a randomly generated string) used to identify a single request as it crosses inter- and intra- process boundaries. This ID allows the linking of spans in a distributed trace. Included when distributed tracing is enabled.