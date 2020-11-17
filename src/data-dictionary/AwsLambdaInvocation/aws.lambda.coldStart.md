---
name: aws.lambda.coldStart
events:
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

A Boolean indicating if the AWS Lambda invocation is a cold start.