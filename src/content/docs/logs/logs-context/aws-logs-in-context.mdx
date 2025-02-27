---
title: AWS Logs in Context
tags:
  - Logs
  - Enable log management in New Relic
  - Configure logs in context
  - AWS
  - CloudWatch
  - S3
  - Lambda
  - RDS
  - ALB
  - NLB
  - Load Balancer
  - CloudFront
  - SQS
  - EC2
metaDescription: New Relic logs in context displays your logs in assorted New Relic experiences, helping you more easily correlate and troubleshoot issues.
redirects:
freshnessValidatedDate: never
---

New Relic Logs offers AWS users a comprehensive, integrated log management solution that enhances both troubleshooting efficiency and system observability within AWS environments. New Relic's AWS Logs in Context seamlessly correlates logs from various AWS services with their metrics, unlocking the ability to swiftly identify and resolve issues out-of-the-box. AWS Logs in Context enables development and operations teams to minimize system downtime and ensure reliability. The New Relic platform's advanced search and filtering capabilities, along with real-time log analysis, provide deep insights into the performance and usage of AWS services, helping drive cost efficiencies. With New Relic Logs, AWS users gain powerful insights and streamlined processes, supporting more effective and informed management of their cloud resources.

## How does AWS Logs in Context work?

AWS Logs in Context feature is designed to enhance log management by providing a seamless linkage between logs and their corresponding AWS resources (entities). Logs are enriched with metadata that is needed to link it back to its corresponding AWS resource. The added enrichment enables:
- **Automatic entity creation & association**: every log reported from AWS services automatically gets associated with the specific AWS resource (or entity) that generated it. If the entity does not yet exist, then the system automatically creates it.
- **Seamless bidirectional navigation between entities and Logs**: logs enriched with the required contextual information allows users to utilize the Entity Explorer to search for specific AWS resources they are interested in, and navigate quickly between logs and their generating entities.

## Prerequisites
AWS Logs in Context is **automatically enabled** when using New Relic's [AWS log forwarding integration](https://docs.newrelic.com/install/aws-logs/?service=aws_services). No [additional configuration](#configuring-aws-logs-in-context) is required for most AWS resources.

## Configuring AWS Logs in Context [#configuring-aws-logs-in-context]

The AWS Logs in Context feature works out-of-the-box for most AWS services. However, for some services, you will need to do some adaptations to your AWS resource configuration. The following sections describe whether any configuration customization is required for each supported AWS resource type.

<CollapserGroup>
  <Collapser
    id="alb-configuration"
    title="Application Load Balancer (ALB)"
  >
    AWS Logs in Context works out-of-the-box for ALB [access logs](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/enable-access-logging.html) and [connection logs](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/enable-connection-logging.html) delivered to an S3 bucket.
  </Collapser>
  <Collapser
    id="elb-configuration"
    title="Classic Load Balancer (ELB)"
  >
    AWS Logs in Context works out-of-the-box for ELB [access logs](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html) delivered to an S3 bucket.
  </Collapser>
  <Collapser
    id="cloudfront-distribution-configuration"
    title="CloudFront Distribution"
  >
    AWS Logs in Context currently supports CloudFront [access logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html) delivered to an S3 bucket using the [Amazon S3 (Legacy)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/standard-logging-legacy-s3.html) delivery method and Web Application Firewall (WAF) logs delivered to a CloudWatch log group

    When you configure your CloudFront standard logging destination, select the type "Amazon S3 (Legacy)" in the "Deliver to" option and **set the log prefix option to** `CLOUDFRONT_ACCESS_LOGS`:

    <img
      title="CloudFront standard logging configuration using S3 (Legacy)"
      alt="Screenshot of the CloudFront logging configuration, which highlights the 'Deliver to' option set to 'Amazon S3 (Legacy)' and the 'Log prefix' option set to 'CLOUDFRONT_ACCESS_LOGS'"
      src="/images/logs_screenshot-aws_lic_cloudfront_s3_legacy_config.webp"
    />

    CloudFront allows the collection of Web Application Firewall (WAF) logs via CloudWatch. Simply enable the Web Application Firewall at the "Security" tab of your CloudFront distribution and click on the "Enable AWS WAF logs" button. However, no matter what AWS region your CloudFront Distribution is deployed into, its WAF logs get collected in CloudWatch in the `us-east-1` (N. Virginia) region in a log group named `aws-waf-logs-CloudFrontDistribution-YOUR_DISTRIBUTION_NAME`. In order to ship these logs **you will need to also deploy our [AWS log forwarding integration](https://docs.newrelic.com/install/aws-logs/?service=aws_services) in the `us-east-1` region** and create a corresponding subscription filter from that log group.
  </Collapser>
  <Collapser
    id="elastic-beanstalk-ec2-configuration"
    title="Elastic Beanstalk EC2 Instance"
  >
    AWS Logs in Context works out-of-the-box for Elastic Beanstalk EC2 Instance [streamed logs](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.logging.html#health-logs-cloudwatchlogs) and [rotated logs](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.logging.html#health-logs-s3location) delivered to CloudWatch and S3, respectively.
  </Collapser>
  <Collapser
    id="lambda-function-configuration"
    title="Lambda Function"
  >
    AWS Logs in Context works out-of-the-box for Lambda function logs delivered to CloudWatch's [default log group](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs-advanced.html#monitoring-cloudwatchlogs-loggroups) or sent directly to New Relic using [New Relic Layers' Lambda Extension](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/introduction-lambda/)
  </Collapser>
  <Collapser
    id="nlb-configuration"
    title="Network Load Balancer (NLB)"
  >
    AWS Logs in Context works out-of-the-box for NLB [access logs](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/enable-access-logs.html) delivered to an S3 bucket.
  </Collapser>
  <Collapser
    id="rds-configuration"
    title="Relational Database Service (RDS) Instance"
  >
    AWS Logs in Context works out-of-the-box for RDS [instance logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html) delivered to CloudWatch.
  </Collapser>
  <Collapser
    id="s3-configuration"
    title="S3 Bucket"
  >
    AWS Logs in Context supports S3 [server access logs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html) delivered to an S3 bucket.

    When you configure your S3 Server Access logging configuration, you must set the "Destination" field so that the "Destination prefix" field becomes `S3_ACCESS_LOGS/` (with final forward slash), and select the [date-based partitioned log object key format](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html#server-log-keyname-format), as in the following screenshot:

    <img
      title="S3 server access logging configuration"
      alt="Screenshot of the S3 server access logging configuration, which highlights the 'Destination' field set to 'S3_ACCESS_LOGS/' and the 'Log object key format' set to 'Date-based partitioned log object key format'"
      src="/images/logs_screenshot-aws_lic_s3_access_logging_config.webp"
    />
  </Collapser>
  <Collapser
    id="sqs-configuration"
    title="Simple Queue Service (SQS) Queue"
  >
    AWS Logs in Context works out-of-the-box for SQS [management and data events](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/logging-using-cloudtrail.html) (related to a particular SQS queue) delivered via CloudTrail to either CloudWatch or an S3 bucket.
  </Collapser>
</CollapserGroup>

## AWS Logs in Context enrichment

The AWS Logs in Context feature automatically enriches your logs with attributes that allow correlating them with the entities created in New Relic. These attributes vary depending on the AWS service that generated the logs and are detailed in the following sections.

<CollapserGroup>
  <Collapser
    id="alb-attributes"
    title="Application Load Balancer (ALB)"
  >
    | Attribute name                  | Description                                                                                                                                                                                                                                             |
    |---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `aws.Arn`                       | The Amazon Resource Name (ARN) of the AWS resource.                                                                                                                                                                                                     |
    | `entity.guid`                   | The unique identifier of the emitting entity.                                                                                                                                                                                                           |
    | `entity.name`                   | The name of the emitting entity, as displayed in the Entity Explorer or Catalog views.                                                                                                                                                                  |
    | `entity.type`                   | The entity type, as described in our [entity definitions](https://github.com/newrelic/entity-definitions), such as `AWSALB`, `AWSS3BUCKET`, etc.                                                                                                        |
    | `entityId`                      | Only added if you collect logs together with metrics using the [AWS API Polling integration](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/). It allows us to correlate your log with the entity created by this integration. |
    | `aws.alb.loadBalancer`          | The name of the Application Load Balancer.                                                                                                                                                                                                              |     |

  </Collapser>
  <Collapser
    id="elb-attributes"
    title="Classic Load Balancer (ELB)"
  >
    | Attribute name                  | Description                                                                                                                                                                                                                                             |
    |---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `aws.Arn`                       | The Amazon Resource Name (ARN) of the AWS resource.                                                                                                                                                                                                     |
    | `entity.guid`                   | The unique identifier of the emitting entity.                                                                                                                                                                                                           |
    | `entity.name`                   | The name of the emitting entity, as displayed in the Entity Explorer or Catalog views.                                                                                                                                                                  |
    | `entity.type`                   | The entity type, as described in our [entity definitions](https://github.com/newrelic/entity-definitions), such as `AWSALB`, `AWSS3BUCKET`, etc.                                                                                                        |
    | `entityId`                      | Only added if you collect logs together with metrics using the [AWS API Polling integration](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/). It allows us to correlate your log with the entity created by this integration. |
    | `aws.elb.loadBalancer`          | The name of the Classic Load Balancer.                                                                                                                                                                                                                  |
  </Collapser>
  <Collapser
    id="cloudfront-distribution-attributes"
    title="CloudFront Distribution"
  >
    | Attribute name                  | Description                                                                                                                                                                                                                                             |
    |---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `aws.Arn`                       | The Amazon Resource Name (ARN) of the AWS resource.                                                                                                                                                                                                     |
    | `entity.guid`                   | The unique identifier of the emitting entity.                                                                                                                                                                                                           |
    | `entity.name`                   | The name of the emitting entity, as displayed in the Entity Explorer or Catalog views.                                                                                                                                                                  |
    | `entity.type`                   | The entity type, as described in our [entity definitions](https://github.com/newrelic/entity-definitions), such as `AWSALB`, `AWSS3BUCKET`, etc.                                                                                                        |
    | `entityId`                      | Only added if you collect logs together with metrics using the [AWS API Polling integration](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/). It allows us to correlate your log with the entity created by this integration. |
    | `aws.cloudfront.DistributionId` | The identifier of the Cloudfront distribution.                                                                                                                                                                                                          |
  </Collapser>
  <Collapser
    id="elastic-beanstalk-ec2-attributes"
    title="Elastic Beanstalk EC2 Instance"
  >
    | Attribute name                  | Description                                                                                                                                                                                                                                             |
    |---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `aws.Arn`                       | The Amazon Resource Name (ARN) of the AWS resource.                                                                                                                                                                                                     |
    | `entity.guid`                   | The unique identifier of the emitting entity.                                                                                                                                                                                                           |
    | `entity.name`                   | The name of the emitting entity, as displayed in the Entity Explorer or Catalog views.                                                                                                                                                                  |
    | `entity.type`                   | The entity type, as described in our [entity definitions](https://github.com/newrelic/entity-definitions), such as `AWSALB`, `AWSS3BUCKET`, etc.                                                                                                        |
    | `entityId`                      | Only added if you collect logs together with metrics using the [AWS API Polling integration](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/). It allows us to correlate your log with the entity created by this integration. |
    | `aws.ec2.InstanceId`            | The identifier of the EC2 instance.                                                                                                                                                                                                                     |
  </Collapser>
  <Collapser
    id="lambda-function-attributes"
    title="Lambda Function"
  >
    Logs sent to CloudWatch will be enriched with the following attributes:

    | Attribute name                  | Description                                                                                                                                                                                                                                             |
    |---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `aws.Arn`                       | The Amazon Resource Name (ARN) of the AWS resource.                                                                                                                                                                                                     |
    | `entity.guid`                   | The unique identifier of the emitting entity.                                                                                                                                                                                                           |
    | `entity.name`                   | The name of the emitting entity, as displayed in the Entity Explorer or Catalog views.                                                                                                                                                                  |
    | `entity.type`                   | The entity type, as described in our [entity definitions](https://github.com/newrelic/entity-definitions), such as `AWSALB`, `AWSS3BUCKET`, etc.                                                                                                        |
    | `entityId`                      | Only added if you collect logs together with metrics using the [AWS API Polling integration](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/). It allows us to correlate your log with the entity created by this integration. |
    | `aws.lambda.FunctionName`       | The name of the Lambda function.                                                                                                                                                                                                                        |

    Logs sent directly to New Relic using [New Relic Layers' Lambda Extension](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/introduction-lambda/) will be enriched with the following attributes:

    | Attribute name                  | Description                                                                                                                                                                                                                                             |
    |---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `entity.guid`                   | The unique identifier of the emitting entity.                                                                                                                                                                                                           |
    | `entity.name`                   | The name of the emitting entity, as displayed in the Entity Explorer or Catalog views.                                                                                                                                                                  |
    | `entity.type`                   | The entity type, as described in our [entity definitions](https://github.com/newrelic/entity-definitions), such as `AWSALB`, `AWSS3BUCKET`, etc.                                                                                                        |
    | `entityId`                      | Only added if you collect logs together with metrics using the [AWS API Polling integration](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/). It allows us to correlate your log with the entity created by this integration. |
  </Collapser>
  <Collapser
    id="nlb-attributes"
    title="Network Load Balancer (NLB)"
  >
    | Attribute name                  | Description                                                                                                                                                                                                                                             |
    |---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `aws.Arn`                       | The Amazon Resource Name (ARN) of the AWS resource.                                                                                                                                                                                                     |
    | `entity.guid`                   | The unique identifier of the emitting entity.                                                                                                                                                                                                           |
    | `entity.name`                   | The name of the emitting entity, as displayed in the Entity Explorer or Catalog views.                                                                                                                                                                  |
    | `entity.type`                   | The entity type, as described in our [entity definitions](https://github.com/newrelic/entity-definitions), such as `AWSALB`, `AWSS3BUCKET`, etc.                                                                                                        |
    | `entityId`                      | Only added if you collect logs together with metrics using the [AWS API Polling integration](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/). It allows us to correlate your log with the entity created by this integration. |
    | `aws.nlb.loadBalancer`          | The name of the Network Load Balancer.                                                                                                                                                                                                                  |
  </Collapser>
  <Collapser
    id="rds-attributes"
    title="Relational Database Service (RDS) Instance"
  >
    | Attribute name                  | Description                                                                                                                                                                                                                                             |
    |---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `aws.Arn`                       | The Amazon Resource Name (ARN) of the AWS resource.                                                                                                                                                                                                     |
    | `entity.guid`                   | The unique identifier of the emitting entity.                                                                                                                                                                                                           |
    | `entity.name`                   | The name of the emitting entity, as displayed in the Entity Explorer or Catalog views.                                                                                                                                                                  |
    | `entity.type`                   | The entity type, as described in our [entity definitions](https://github.com/newrelic/entity-definitions), such as `AWSALB`, `AWSS3BUCKET`, etc.                                                                                                        |
    | `entityId`                      | Only added if you collect logs together with metrics using the [AWS API Polling integration](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/). It allows us to correlate your log with the entity created by this integration. |
    | `aws.rds.DBInstanceIdentifier`  | The identifier (name) of the RDS database instance.                                                                                                                                                                                                     |
  </Collapser>
  <Collapser
    id="s3-attributes"
    title="S3 Bucket"
  >
    | Attribute name                  | Description                                                                                                                                                                                                                                             |
    |---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `aws.Arn`                       | The Amazon Resource Name (ARN) of the AWS resource.                                                                                                                                                                                                     |
    | `entity.guid`                   | The unique identifier of the emitting entity.                                                                                                                                                                                                           |
    | `entity.name`                   | The name of the emitting entity, as displayed in the Entity Explorer or Catalog views.                                                                                                                                                                  |
    | `entity.type`                   | The entity type, as described in our [entity definitions](https://github.com/newrelic/entity-definitions), such as `AWSALB`, `AWSS3BUCKET`, etc.                                                                                                        |
    | `entityId`                      | Only added if you collect logs together with metrics using the [AWS API Polling integration](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/). It allows us to correlate your log with the entity created by this integration. |
    | `aws.s3.BucketName`             | The name of the S3 bucket.                                                                                                                                                                                                                              |
  </Collapser>
  <Collapser
    id="sqs-attributes"
    title="Simple Queue Service (SQS) Queue"
  >
    | Attribute name                  | Description                                                                                                                                                                                                                                             |
    |---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `aws.Arn`                       | The Amazon Resource Name (ARN) of the AWS resource.                                                                                                                                                                                                     |
    | `entity.guid`                   | The unique identifier of the emitting entity.                                                                                                                                                                                                           |
    | `entity.name`                   | The name of the emitting entity, as displayed in the Entity Explorer or Catalog views.                                                                                                                                                                  |
    | `entity.type`                   | The entity type, as described in our [entity definitions](https://github.com/newrelic/entity-definitions), such as `AWSALB`, `AWSS3BUCKET`, etc.                                                                                                        |
    | `entityId`                      | Only added if you collect logs together with metrics using the [AWS API Polling integration](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/). It allows us to correlate your log with the entity created by this integration. |
    | `aws.sqs.QueueName`             | The name of the SQS queue.                                                                                                                                                                                                                              |
    | `aws.sqs.queueUrl`              | The URL of the SQS queue.                                                                                                                                                                                                                               |
  </Collapser>
</CollapserGroup>

## Troubleshoot
<CollapserGroup>
  <Collapser
    id="troubleshoot-nondefault-log-group-or-s3-bucket"
    title="Using non-default log group or S3 bucket names"
  >
    The AWS Logs in Context feature will only work when using the default CloudWatch log group name or S3 bucket names set up by each AWS service. Despite some services allow customizing these values (for example, [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs-advanced.html#monitoring-cloudwatchlogs-loggroups), doing so will result in logs not correctly being attached to an entity, and potentially incorrect entities being created. Unless indicated in [this section](#configuring-aws-logs-in-context), we strongly recommend using the default configuration values.
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## What's next? [#what-next]

After you set up AWS Logs in Context for your AWS resources, make the most of your logging data in the New Relic UI:

* Explore the logging data across your platform with our [Logs UI](/docs/logs/log-management/ui-data/use-logs-ui).
* Search the entity associated with your AWS resource through the [entity explorer](https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts/#find) and quickly navigate to its logs by selecting its "Logs" tab.
* Set up [alerts](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [Query your data](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) and [create dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).
