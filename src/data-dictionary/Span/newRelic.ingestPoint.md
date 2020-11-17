---
name: newRelic.ingestPoint
events:
  - Span
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

Where the data point entered the platform (such as \`browser.spans\`, or \`api.traces\`).