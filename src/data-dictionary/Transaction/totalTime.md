---
name: totalTime
units: seconds (s)
events:
  - Transaction
  - AwsLambdaInvocation
---

The sum of all async components' duration, in seconds. An async component is a method or function where there is no instrumented encapsulating method or function.