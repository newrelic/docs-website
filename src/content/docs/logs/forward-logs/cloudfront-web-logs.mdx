---
title: Forward Amazon CloudFront access logs
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
  - CloudFront
metaDescription: "Configure New Relic logging for your Amazon CloudFront distribution, so you can use enhanced log management capabilities."
freshnessValidatedDate: never
---

You can enable logging from your Amazon CloudFront distribution to send web access logs to New Relic.

## Options for sending logs [#log-types]

There are two options for sending logs from CloudFront: standard logging or real-time logs.

<DNT>**Standard logs**</DNT> are sent from CloudFront to a S3 bucket where they are stored. You would then use our AWS Lambda trigger to send the logs from S3 to New Relic. Review [the Amazon CloudFront docs for configuring and using standard logs (access logs)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html). This has detailed information about creating your S3 bucket and setting appropriate permissions. Standard logs include all data fields and are sent to S3 and then to New Relic every 5 minutes. For detailed instructions on how to configure standard logs in the Amazon console and send them to New Relic via our S3 Lambda trigger, see the [Enable standard logging section](#enable-standard-logging).

<DNT>**Real-time logs**</DNT> are sent within seconds of receiving requests using a Kinesis Data Stream consumer and a Kinesis Data Firehose for delivery to New Relic. Review [the Amazon CloudFront docs for configuring real-time logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html). Real-time logs are configurable and allow you to configure a sampling rate (what percentage of logs to send), select specific fields to receive in the log records, and define specific cache behaviors (path patterns) that you want to receive logs for. Real-time logs also require an S3 backup bucket for sending either all data, or failed data only. So to enable real-time logs you must also follow [our instructions for creating an S3 bucket](#create-s3-bucket). For detailed instructions on how to configre standard logs in the Amazaon console and send them to New Relic via our S3 Lambda trigger, see the section [Enable real-time logs section](#enable-real-time-logging).

For both options you can use our [built-in log parsing rules](/docs/logs/ui-data/built-log-parsing-rules) to automatically parse your CloudFront access logs, and our quickstart dashboard to immediately gain insight into your data. For the built-in parsing rules to work and to populate data in the widgets of the quickstart dashboard provided, you must configure the `logtype` attribute as defined in the instructions. For additional details on parsing real-time logs if you only select some of the logging fields, see the [Parsing section](#parsing-real-time-logs)

## Create S3 bucket for storing CloudFront logs [#create-s3-bucket]

To enable standard logs or real-time logs for your CloudFront distribution, you must first create an S3 bucket to use for storing CloudFront access logs in:

1. In the AWS Management Console, choose <DNT>**Services > All services > S3**</DNT>.
2. Select <DNT>**Create bucket**</DNT>.
3. Enter a <DNT>**Bucket name**</DNT> and select the <DNT>**AWS region**</DNT> of your choice.  (Note that your S3 bucket must be in the same region as your Lambda function you create in the next section if you are using Standard logging.)
4. In the <DNT>**Object ownership**</DNT> section, select <DNT>**ACLs enabled**</DNT>.
5. Select <DNT>**Create bucket**</DNT>.

Now you can enable either standard or real-time logging. For instructions for those options, keep reading.

## Enable standard logging [#enable-standard-logging]

Update your CloudFront distribution to enable standard logs:

1. In the AWS Management Console, choose <DNT>**Services > All Services > CloudFront**</DNT>.
2. Click on your distribution <DNT>**ID**</DNT>.  On the General tab, select <DNT>**Edit**</DNT> in the Setting section.
3. In the <DNT>**Standard logging**</DNT> section, select <DNT>**On**</DNT> to enable logging and display the logging configuration settings.
4. For <DNT>**S3 bucket**</DNT>, search for and choose the S3 bucket name you created above.
5. Optional: You can add a log prefix like `cloudfront_logs`.
6. Choose <DNT>**Save changes**</DNT>.

Within five minutes, you should begin to see log files appearing in your S3 bucket with the following file name format:

```
<optional prefix>/<distribution ID>.YYYY-MM-DD-HH.unique-ID.gz
```

Next, you must install and configure our AWS Lambda function `NewRelic-log-ingestion-s3` to send the access logs in S3 to New Relic. You'll need a single Lambda function for the Amazon CloudFront logs so you can set the appropriate `LOG_TYPE` environment variable: this allows you to use our [CloudFront built-in parsing rules](/docs/logs/ui-data/built-log-parsing-rules/#cloudfront) and the [quickstart dashboard](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs). If you already have this Lambda function installed in a region and are using it to send other S3 logs to New Relic (for example ALB/NLB logs), you'll need to install the Lambda function again in another region. Also, as noted earlier your S3 bucket for storing access logs and your Lambda function for sending S3 logs to New Relic must be in the same region.

To do these steps:

7. Follow the instructions here to [Configure AWS Lambda for sending logs from S3](/docs/logs/forward-logs/aws-lambda-sending-logs-s3/).
8. After the Lambda function is installed, select <DNT>**Functions > NewRelic-s3-log-ingestion**</DNT>.
9. Select the <DNT>**+ Add trigger**</DNT> button under S3.
10. For <DNT>**Trigger Configuration**</DNT>, select S3.
11. For <DNT>**Bucket**</DNT>, search for and choose the S3 bucket you created above.
12. In the <DNT>**Recursive invocation**</DNT> section, check the ackknowledgement box and then choose <DNT>**Add**</DNT>.
13. On the <DNT>**Configuration**</DNT> tab for the function, choose the <DNT>**Environment variables**</DNT> option on the left.
14. Select <DNT>**Edit**</DNT>, and for the `LOG_TYPE` enter `cloudfront-web`.
15. Select <DNT>**Save**</DNT>.

Within five minutes you should begin to see your logs in the logs UI. To confirm you're receiving logs, you can search for `logtype:cloudfront-web` in the [logs UI search bar](/docs/logs/ui-data/use-logs-ui), or run a NRQL query with something like `FROM Log SELECT * WHERE logtype='cloudfront-web'`

## Enable real-time logs [#enable-real-time-logs]

To enable real-time logging for your CloudFront distribution, you must first create a Kinesis Data Stream for receiving the CloudFront logs:

1. In the AWS Management Console, choose <DNT>**Services > Kinesis**</DNT>.
2. Select <DNT>**Data streams**</DNT>, and then <DNT>**Create data stream**</DNT>.
3. Enter a <DNT>**Data stream name**</DNT>. For example, `CloudFront-DataStream`.
4. Select a Data Stream capacity mode of your choice.
5. Select <DNT>**Create data stream**</DNT>.
6. In the <DNT>**Consumers**</DNT> section, select <DNT>**Process with delivery stream**</DNT>.
7. For the <DNT>**Destination**</DNT>, select <DNT>**New Relic**</DNT>.
8. Enter a <DNT>**Delivery stream name**</DNT>. For example, `CloudFront-DeliveryStream`.
9. In the <DNT>**Destination**</DNT> settings section, for the HTTP endpoint URL, select <DNT>**New Relic logs - US**</DNT> or <DNT>**New Relic logs - EU**</DNT>.
10. For <DNT>**API key**</DNT>, enter the <InlinePopover type="licenseKey"/> for your New Relic account.
11. Select <DNT>**Add parameter**</DNT>.
12. If you will select all fields for logging in step 21 below, for <DNT>**Key**</DNT>, enter `logtype` and for the <DNT>**Value**</DNT> enter `cloudfront-rtl` . If you plan to select a subset of fields for logging in Step 21 below, enter `cloudfront-rtl-custom`. If you don't choose to select all the fields, see the [Real-time logs parsing section](#parsing-real-time-logs) below for information on how to create a custom parsing rule for your logs.
13. In the <DNT>**Backup settings**</DNT> section, you may choose either <DNT>**Failed data**</DNT> only or <DNT>**All data**</DNT> for the <DNT>**Source record backup in Amazon S3**</DNT> option, based on your preference.
14. For the S3 backup bucket, select <DNT>**Browse**</DNT> to search for and select the S3 bucket name you created above for storing CloudFront logs.
15. Choose <DNT>**Create delivery stream**</DNT>.

Next, create a real-time logging configuration and attach it to your CloudFront distribution:

16. In the AWS Management Console, choose <DNT>**Services > CloudFront**</DNT>.
17. In the <DNT>**Telemetry section**</DNT> on the left, select <DNT>**Logs**</DNT>.
18. Click on the <DNT>**Real-time configurations**</DNT> tab, and then choose <DNT>**Create configuration**</DNT>.
19. Enter a configuration name. For example: `CloudFront-RealTimeLogs`.
20. Enter a sampling rate from `1` to `100`.
21. For <DNT>**Fields**</DNT>, select <DNT>**All fields**</DNT> or choose the fields you wish to include in your logs.
22. For <DNT>**Endpoint**</DNT>, select the Data Stream name you created in Step 3. For example: `CloudFront-DataStream`.
23. In the <DNT>**Distrubutions**</DNT> section, select your CloudFront distribution ID.
24. For <DNT>**Cache behaviors**</DNT>, check <DNT>**Default (\*)**</DNT>.
25. Choose <DNT>**Create configuration**</DNT>.

Within a couple minutes you should begin to see your logs in our [logs UI](/docs/logs/ui-data/use-logs-ui). To confirm you're receiving real-time logs, you can search for `logtype:cloudfront-rtl*` in the logs UI search bar, or via a NRQL query like `FROM Log SELECT * WHERE logtype LIKE 'cloudfront-rtl%'`

## Real-time logs parsing [#parsing-real-time-logs]

Our built-in parsing rule for real-time logs assumes that all fields will be logged. If you choose to only log a subset of the fields, you must define a custom parsing rule that matches your log format. This is required for the logs to parse correctly and to use our [quickstart dashboard](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs).

To create a custom parsing rule, select <DNT>**Parsing**</DNT> in the <DNT>**Manage data**</DNT> section of the logs UI.

1. For the <DNT>**Rule name**</DNT>, enter `CloudFront custom parsing rule`.
2. For <DNT>**Filter logs based on NRQL**</DNT>, enter `logtype='cloundfront-rtl-custom'`.
3. Update the Grok parsing logic below so that it includes <DNT>**only**</DNT> the fields you've selected in the real-time logs configuration. For example, if you choose not to include the `cs_headers` field, remove `%{SPACE}%{NOTSPACE:cs_headers}%` from the Grok, and so on.
   ```
   ^%{NOTSPACE:timestamp}.\d{3}%{SPACE}%{NOTSPACE:c_ip}%{SPACE}%{NUMBER:time_to_first_byte:INT}%{SPACE}%{NUMBER:sc_status:INT}%{SPACE}%{NUMBER:sc_bytes:INT}%{SPACE}%{WORD:cs_method}%{SPACE}%{NOTSPACE:cs_protocol}%{SPACE}%{NOTSPACE:cs_host}%{SPACE}%{NOTSPACE:cs_uri_stem}%{SPACE}%{NUMBER:cs_bytes:INT}%{SPACE}%{NOTSPACE:x_edge_location}%{SPACE}%{NOTSPACE:x_edge_request_id}%{SPACE}%{NOTSPACE:x_host_header}%{SPACE}%{NUMBER:time_taken:INT}%{SPACE}%{NOTSPACE:cs_protocol_version}%{SPACE}%{NOTSPACE:cs_ip_version}%{SPACE}%{NOTSPACE:cs_user_agent}%{SPACE}%{NOTSPACE:cs_referer}%{SPACE}%{NOTSPACE:cs_cookie}%{SPACE}%{NOTSPACE:cs_uri_query}%{SPACE}%{NOTSPACE:x_edge_response_result_type}%{SPACE}%{NOTSPACE:x_forwarded_for}%{SPACE}%{NOTSPACE:ssl_protocol}%{SPACE}%{NOTSPACE:ssl_cipher}%{SPACE}%{NOTSPACE:x_edge_result_type}%{SPACE}%{NOTSPACE:fle_encrypted_fields}%{SPACE}%{NOTSPACE:fle_status}%{SPACE}%{NOTSPACE:sc_content_type}%{SPACE}%{NOTSPACE:sc_content_len}%{SPACE}%{NOTSPACE:sc_range_start}%{SPACE}%{NOTSPACE:sc_range_end}%{SPACE}%{NUMBER:c_port:INT}%{SPACE}%{NOTSPACE:x_edge_detailed_result_type}%{SPACE}%{NOTSPACE:c_country}%{SPACE}%{NOTSPACE:cs_accept_encoding}%{SPACE}%{NOTSPACE:cs_accept}%{SPACE}%{NOTSPACE:cache_behavior_path_pattern}%{SPACE}%{NOTSPACE:cs_headers}%{SPACE}%{NOTSPACE:cs_header_names}%{SPACE}%{NOTSPACE:cs_headers_count}$
   ```
4. Paste the updated Grok into the parsing logic section, and then select the <DNT>**Test grok**</DNT> to validate that your parser is working.
5. Enable the rule and then choose <DNT>**Save parsing rule**</DNT>.

<img
  title="Creating a CloudFront custom parsing rule"
  alt="Creating a CloudFront custom parsing rule"
  src="/images/logs_screenshot-crop_Cloudfront-log-parsing.webp"
/>

<figcaption>
  A screenshot of the CloudFront custom parsing configuration.
</figcaption>

## What's next? [#what-next]

<img
  title="Dashboard in Amazon CloudFront Access Logs quickstart"
  alt="Dashboard in Amazon CloudFront Access Logs quickstart"
  src="/images/logs_screenshot-crop_Cloudfront-logs-dashboard.webp"
/>

<figcaption>
  Our quickstart for Amazon CloudFront Access Logs includes a pre-built dashboard.
</figcaption>

Here are some ideas for next steps:

* Get started in minutes with a pre-built dashboard to see key metrics from your Amazon CloudFront access logs. Go to the [Amazon CloudFront access logs quickstart](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs) and click <DNT>**Install now**</DNT>.
* Explore logging data across your platform with our [logs UI](/docs/logs/log-management/ui-data/use-logs-ui).
* Get deeper visibility into both your application and your platform performance data by forwarding your logs with our [logs in context](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents) capabilities.
* Set up [alerts](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions).
* [Query your data](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) and [create dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

## Disable log forwarding [#disable]

To disable log forwarding capabilities, there are two options. If you just want to stop sending the S3 logs to New Relic you can delete the S3 trigger in the `NewRelic-log-ingestion-s3` Lambda function. If you want to disable Amazon CloudFront access logs completely you will need to delete the trigger as well as turn off logging in the general settings of the CloudFront distribution.
