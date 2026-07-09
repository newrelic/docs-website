---
title: 'New Relic AWS Metric Streams Integration Now Supports OpenTelemetry 1.0 Format'
summary: 'Enhanced Support for the OpenTelemetry 1.0 output format in our AWS CloudWatch Metric Streams integration, offering improved performance and richer metadata for all setup methods.'
releaseDate: '2025-10-13'
---

We're excited to announce a significant enhancement to our AWS infrastructure monitoring capabilities. Our **AWS CloudWatch Metric Streams** integration now supports the **OpenTelemetry (OTel) 1.0** output format. This update allows you to leverage the latest industry standards for telemetry data, providing a more efficient and future-proof way to stream metrics from your AWS environment into New Relic.

## What's Changed

You can now configure your AWS Metric Stream integration to send data using the OTel 1.0 format, which uses an efficient binary protobuf encoding. To ensure backward compatibility and a seamless transition for existing users, our updated CloudFormation and Terraform integrations will continue to **default to the OTel 0.7 format**. You can easily change the default to use the new 1.0 format.

This enhancement provides several key benefits:

- **Improved Performance and Efficiency**: Use the highly efficient binary protobuf format of OTel 1.0, reducing data transfer volume and processing overhead compared to JSON-based formats.
- **Richer Metadata and Future-Proofing**: Align with the latest OpenTelemetry standards, ensuring compatibility with future enhancements and enabling richer, more detailed metric attributes.

## How to Enable OpenTelemetry 1.0

You can enable the OTel 1.0 format based on your integration method.

### CloudFormation Template

#### For New Stacks

When setting up a new stack with our latest template, you will have the option to select `opentelemetry1.0` as the output format. The template continues to default to `opentelemetry0.7`.

#### For Existing Stacks

If you have an existing stack, you must perform a stack update.

1.  Navigate to your stack in the AWS CloudFormation console.
2.  Initiate an update and choose **Replace existing template**.
3.  Provide the following updated template URL:
    [https://nr-downloads-main.s3.amazonaws.com/cloud_integrations/aws/cloudformation/newrelic-cloudformation-mstreams.yml](https://nr-downloads-main.s3.amazonaws.com/cloud_integrations/aws/cloudformation/newrelic-cloudformation-mstreams.yml)
4.  Proceed with the stack update, selecting `opentelemetry1.0` when prompted for the output format.

### Terraform

**Note:** Support for the OTel 1.0 format is available starting with version 3.70.6 of the New Relic Terraform provider.

Our Terraform configuration uses the official `newrelic` provider to create the necessary AWS and New Relic resources. To enable OTel 1.0, you define a variable for the output format and set its value to `opentelemetry1.0`.

First, define the variable in your `variables.tf` file, defaulting to `opentelemetry0.7` for backward compatibility:

```tf
variable "output_format" {
  description = "The output format for the CloudWatch Metric Stream. Use 'opentelemetry0.7' for OTel 0.7 or 'opentelemetry1.0' for OTel 1.0."
  type        = string
  default     = "opentelemetry0.7"
}
```

Then, in your `main.tf`, reference this variable in the `aws_cloudwatch_metric_stream` resource:

```tf
resource "aws_cloudwatch_metric_stream" "newrelic_metric_stream" {
  # ... other properties like name, role_arn, firehose_arn ...

  output_format = var.output_format

  # ... include/exclude filters ...
}
```

When you run your Terraform plan, you can set `output_format` to `opentelemetry1.0` to enable the new format.

### Manual setup

If you configured your integration manually, you can update the format directly in the AWS console.

1.  Navigate to **CloudWatch > Metrics > Streams**.
2.  Select the metric stream that forwards data to New Relic's Kinesis Firehose.
3.  Click **Edit**.
4.  Under **Output format**, change the selection to **OpenTelemetry 1.0**.
5.  Click **Save**.

