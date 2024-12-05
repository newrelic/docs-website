---
title: Set up Amazon VPC Flow Logs monitoring
tags:
  - Integrations
  - Network monitoring
  - Installation
  - Setup
  - AWS
metaDescription: Set up Amazon VPC Flow Logs monitoring.
redirects:
    - /docs/network-performance-monitoring/setup-performance-monitoring/aws-vpc-flow-monitoring/
freshnessValidatedDate: never
---

<Video
  type="youtube"
  id="ao_8izubBFw"
/>

Amazon Virtual Private Cloud Flow (VPC) Logs via Amazon Kinesis Data Firehose help you reduce the friction of sending logs to New Relic. With VPC flow logs from across your AWS estates, you can quickly understand key insights for performance analytics and troubleshooting network connectivity.

<img
  title="Amazon VPC Flow Logs overview"
  alt="Amazon VPC Flow Logs overview"
  src="/images/network_screenshot-crop_cloud-flow-logs-overview.webp"
/>

<figcaption>
  <DNT>**Add [Amazon VPC Flow Logs to your New Relic account](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**</DNT>.
</figcaption>

Amazon Virtual Private Cloud (VPC) enables you to launch AWS resources into an isolated and secure virtual network with the benefits of using scalable AWS infrastructure.

<ButtonGroup>
  <ButtonLink
    role="button"
    to="https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9"
    variant="primary"
  >
    Add Amazon VPC Flow Logs
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.eu.nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9"
    variant="primary"
  >
    Guided install, EU region
  </ButtonLink>
</ButtonGroup>

## Prerequisites [#prerequisites]

### New Relic prerequisites [#prerequisites-NR]

* A New Relic account. Don't have one? [Sign up for free!](https://newrelic.com/signup) No credit card required.

### AWS prerequisites [#prerequisites-aws]

<Callout variant="important">
  Amazon VPC Flow Logs via Kinesis Data Firehose isn't supported for FedRAMP customers yet. In the meantime, you can use [our FedRAMP ingest APIs](/docs/security/security-privacy/compliance/fedramp-compliant-endpoints#data-ingest-apis).
</Callout>

* Environment:
  * [AWS CLI (v 1.9.15+) installed](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).
  * A list of AWS regions where you collect Amazon VPC Flow Logs.
  * [VPC IDs](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/describe-vpcs.html) that will be configured to ship VPC flow logs. If you want more granular control, specify the [subnet IDs](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/describe-subnets.html) instead of the VPC IDs.
* Permissions:
  * An AWS user with [permissions to create VPC flow logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-s3-iam).
  * Amazon S3 log file permissions to [read and write for the log delivery owner](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-file-permissions).
  * Allow [Kinesis Data Firehose to Assume an IAM Role](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#firehose-assume-role).
* [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html):
  * ARN of an S3 bucket with permissions to [store undelivered flow log messages](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-s3-permissions).
  * If you wish to enable sampling, you'll need the ARN for the Lambda's IAM role.
  * ARN for the [Kinesis Data Firehose with S3 bucket access](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3).
    <Callout variant="tip">We recommend you create a new data firehose with our guided install the first time you configure VPC flow logs for a specific region. For subsequent VPCs and subnets in the same region, you can reuse the existing data firehose.</Callout>

### IAM roles [#iam-roles]

If you set up the flow logs integration using the AWS CLI, you must provide one or two IAM roles for different infrastructure components. If you use CloudFormation, you can either provide your own roles or let the template define new roles.

The necessary roles should have at least the following permissions:

<CollapserGroup>
  <Collapser
    id="kinesis-firehose"
    title="Kinesis Firehose"
  >
    This permission is required.

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "",
                "Effect": "Allow",
                "Action": [
                    "s3:AbortMultipartUpload",
                    "s3:GetBucketLocation",
                    "s3:GetObject",
                    "s3:ListBucket",
                    "s3:ListBucketMultipartUploads",
                    "s3:PutObject"
                ],
                "Resource": [
                    "arn:aws:s3:::<FIREHOSE_ERRORS_BUCKET>",
                    "arn:aws:s3:::<FIREHOSE_ERRORS_BUCKET>/*"
                ]
            },
            {
                "Sid": "",
                "Effect": "Allow",
                "Action": [
                    "lambda:InvokeFunction",
                    "lambda:GetFunctionConfiguration"
                ],
                "Resource": [
                    "arn:aws:lambda:us-west-2:<YOUR_ACCOUNT>:function:NewRelic-Flow-Sampling-Lambda",
                    "arn:aws:lambda:us-west-2:<YOUR_ACCOUNT>:function:NewRelic-Flow-Sampling-Lambda:*"
                ]
            }
        ]
    }
    ```
  </Collapser>

  <Collapser
    id="aws-sampling-lambda"
    title="AWS Sampling Lambda"
  >
    You only need this permission if you're using sampling.

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Action": "logs:CreateLogGroup",
                "Resource": "arn:aws:logs:us-west-2:<YOUR_ACCOUNT>:*",
                "Effect": "Allow"
            },
            {
                "Action": [
                    "logs:CreateLogStream",
                    "logs:PutLogEvents"
                ],
                "Resource": [
                    "arn:aws:logs:us-west-2:<YOUR_ACCOUNT>:log-group:/aws/lambda/NewRelic-Flow-Sampling-Lambda:*"
                ],
                "Effect": "Allow"
            }
        ]
    }
    ```
  </Collapser>
</CollapserGroup>

## Formatting your logs in New Relic [#NR-logs-format]

To use the curated flow log exploration and entity linking, you must follow this format for the VPC flow logs:

```shell
${version} ${account-id} ${region} ${az-id} ${sublocation-type} ${vpc-id} ${subnet-id} ${instance-id} ${interface-id} ${srcaddr} ${pkt-srcaddr} ${pkt-src-aws-service} ${dstaddr} ${pkt-dstaddr} ${pkt-dst-aws-service} ${srcport} ${dstport} ${protocol} ${packets} ${bytes} ${flow-direction} ${traffic-path} ${start} ${end} ${action} ${log-status}
```

<Callout variant="tip">
  If you want to learn more about the log fields, check the available fields in the [VPC Amazon documentation](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-logs-fields).
</Callout>

You must use a [log partition](/docs/logs/ui-data/data-partitions) for VPC flow logs named `Log_VPC_Flows_AWS`. If you use the [guided install](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9), this is handled automatically.

## Set up Amazon VPC Flow Logs monitoring in New Relic [#setup-aws-vpc-flow-logs]

Follow the guided wizard to install Amazon VPC Flow Logs:

1. Start the <DNT>**[guided install process](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**</DNT>.
2. From the <DNT>**Select an account**</DNT> dropdown, choose the New Relic account you want to send Amazon VPC Flow Logs to, and click <DNT>**Continue**</DNT>.
3. In the <DNT>**Select your data**</DNT> section, choose <DNT>**Amazon VPC Flow Logs**</DNT> and click <DNT>**Continue**</DNT>.
4. In the <DNT>**Select your install method**</DNT> section, continue with <DNT>**CLI**</DNT> and click <DNT>**Continue**</DNT>.

After these steps, a new wizard pops-up to help you set up the sending of Amazon VPC Flow Logs to New Relic through the AWS Kinesis Firehose service.

1. In the <DNT>**Choose Setup Options**</DNT> section:
   * Verify your setup method is correct.
   * Select the AWS region that will send VPC flow logs to New Relic.
   * Optionally, if you are reusing a Kinesis Data Firehose, select the <DNT>**I already have a Kinesis Firehose to New Relic**</DNT> checkbox and continue to the <DNT>**Define flow logs**</DNT> section.
   * Click <DNT>**Continue**</DNT>.

2. In the <DNT>**Define Kinesis Firehose**</DNT> section:

   * In the <DNT>**Kinesis Firehose Name**</DNT> field, make sure the generated name is correct.
   * In the <DNT>**Firehose Backup Bucket**</DNT> field, enter the [ARN of the S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html) to be used to store messages that fail delivery. The ARN must follow this format: `arn:my_string`.
   * In the <DNT>**Firehose IAM Role**</DNT> field, enter the [ARN of the IAM role](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#firehose-assume-role) to be used by Kinesis Data Firehose. The ARN must follow this format: `arn:my_string`.
   * Click <DNT>**Continue**</DNT>.
   * Optionally, if you want to sample VPC flow logs, select the <DNT>**Use Sampling**</DNT> checkbox and:

   <CollapserGroup>
     <Collapser
       id="sampling-lambda"
       title="Use Sampling Lambda"
     >
       * First, in the <DNT>**Define Sampling Lambda**</DNT> section, do the following:
         * In the <DNT>**Lambda Name**</DNT> field, make sure the generated name for the Lambda function is correct. If you have specific Lambda naming standards, edit the name.
         * In the <DNT>**Sample Rate**</DNT> field, specify the sample rate to be applied. By default it's set to `1:10`.
       * Then, in the <DNT>**Create Sampling Lambda**</DNT> section, click <DNT>**Generate CLI Command**</DNT> and:

         * Copy the contents of the code block for <DNT>**Create your sampling Lambda**</DNT> and run it in the AWS CLI.
         * To check if your Lambda is created, run the command from the second step in the AWS CLI.
         * Copy the returned ARN for the Lambda function and paste into the <DNT>**Sampling Lambda ARN**</DNT> field in the format `arn:my_string`. Then, click <DNT>**Continue**</DNT>.

         <Callout variant="tip">
           Sampling is a simple count function but it'll reduce the volume of flow logs shipped to New Relic.
           Data sampled by using this Lambda function, may miss a specific conversation in New Relic.
           Watch out for callouts indicating sampled data in the network monitoring UI of New Relic.
         </Callout>
     </Collapser>
   </CollapserGroup>

3. In the <DNT>**Generate Kinesis Firehose**</DNT> section, click <DNT>**Generate CLI Command**</DNT> and:

   <Callout variant="tip">
     We automatically generate a new <InlinePopover type="licenseKey"/> to be used for this data ingest. To regenerate a key, click <DNT>**Generate and use a new key**</DNT>.

     If you want to re-use an existing key, update the `AccessKey` value in the first step.
   </Callout>

   * Copy the contents of the code block for <DNT>**Create your Kinesis Data Firehose**</DNT> and paste run it in the AWS CLI.
   * To check if your Kinesis Firehose is created, run the command from the second step in the AWS CLI. If no ARN is returned, wait 30 seconds and try again.
   * Copy the returned ARN for the Kinesis Firehose and paste it into the <DNT>**Kinesis Data Firehose ARN**</DNT> field in the format `arn:my_string`. Then, click <DNT>**Continue**</DNT>.

   <img
     title="Generate Kinesis Firehose"
     alt="Generate Kinesis Firehose"
     src="/images/network_screenshot-crop_kinesis-forehose-aws-vpc-flow-logs.webp"
   />

   <figcaption>
     Generate Kinesis Firehose step in the guided install.
   </figcaption>

4. In the <DNT>**Define Flow Logs**</DNT> section, do the following:
   * From the <DNT>**Traffic Type**</DNT> dropdown, select whether to send only accepted, only rejected, or all flow log entries.
   * In the <DNT>**Flow Source ID**</DNT> field, enter the VPC ID (`vpc-MY_STRING`) or the subnet ID (`subnet-MY_STRING`) for which Amazon VPC Flow Logs should be created.
   * The <DNT>**Flow Source Type**</DNT> field will be automatically populated, so click <DNT>**Continue**</DNT>.

5. In the <DNT>**Create Flow Logs**</DNT> section, click <DNT>**Generate CLI Command**</DNT> and copy the contents of the syntax block. Then, run it in the AWS CLI to begin generating flow logs for the specified resources.

6. Click <DNT>**Continue**</DNT> to start exploring Amazon VPC Flow Logs in the network monitoring section of New Relic.

7. [Visualize your network performance data in New Relic](/docs/network-performance-monitoring/monitoring-network-data/visualize-network-data).

<InstallFeedback/>
