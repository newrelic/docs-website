---
name: aws.lambda.coldStart
type: attribute
events:
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

A boolean indicating if the AWS Lambda invocation is a cold start.