---
title: Ingest New Relic logs directly with Amazon Web Services (AWS) Kinesis Data Firehose
summary: New Relic can ingest data from Amazon's Kinesis Data Firehose.
releaseDate: '2020-08-16'
learnMoreLink: 'https://aws.amazon.com/blogs/big-data/new-relic-drinks-straight-from-the-firehose-consuming-amazon-kinesis-data/'
getStartedLink: 'https://docs.newrelic.com/docs/logs/enable-new-relic-logs/1-enable-logs/stream-logs-using-kinesis-data-firehose'
---

New Relic can now ingest data from Amazon Web Services (AWS) Kinesis Data Firehose, making it easier than ever to gain visibility into your cloud stack. The Kinesis Data Firehose is a fully managed service for delivering real-time streaming data to AWS services like Amazon Simple Storage Service (Amazon S3), Amazon Redshift, and a wide array of external destinations.

![A diagram showing how New Relic ingests data from Kinesis Data Firehose.](./images/kinesis_data_firehose.webp "A diagram of Kinesis Data Firehose.")

Log data flows from AWS through Kinesis Data Firehose and Cloudflare into New Relic.

This integration brings a wide range of additional advantages:

* Fully managed: Amazon Kinesis is fully managed and runs your streaming applications without requiring you to manage any infrastructure.
* Scalability: Amazon Kinesis can handle any amount of streaming data and process data from hundreds of thousands of sources with very low latencies.
* Integrated with various AWS data sources: Amazon Kinesis can be used to easily collect Virtual Private Cloud (VPC) Flow Logs, CloudWatch Logs, CloudWatch Events, and AWS Internet of Things (IoT).
* Real time: Amazon Kinesis enables you to ingest, buffer, and process streaming data in real time, so you can derive insights in seconds or minutes instead of hours or days.
* Easily configurable: With the release of Kinesis Data Firehose HTTP endpoint delivery, you can easily configure data streams to automatically ingest and forward data to New Relic. You can also configure Kinesis Data Firehose to transform your data before delivering it. You don't need to write applications, manage resources, or create [AWS Lambda](http://aws.amazon.com/lambda) functions, which makes it easier to manage and estimate costs for your data based on data volume.
