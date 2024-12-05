---
componentType: default
optiontype: task
headingText: Integrate CloudWatch Metric Streams with AWS Console
---

This step gives you the necessary inputs to direct your metrics to New Relic. From AWS Console, you'll create a Firehose delivery stream and metric stream, then you'll go to the New Relic platform to finish set up.   

1. Create a Kinesis Data Firehose Delivery Stream and configure the following destination parameters:
   * Source: Direct PUT or other sources
   * Data transformation: Disabled
   * Record format conversion: Disabled
   * Destination: New Relic
   * Ensure the following settings are defined:
     * New Relic configuration (Destination Settings)
       * HTTP endpoint URL - US Datacenter: `https://aws-api.newrelic.com/cloudwatch-metrics/v1`
       * HTTP endpoint URL - EU Datacenter: `https://aws-api.eu01.nr-data.net/cloudwatch-metrics/v1`
       * API key: Enter your <InlinePopover type="licenseKey"/>
       * Content encoding: `GZIP`
       * Retry duration: `60`
     * S3 backup mode: Failed data only
     * S3 bucket: select a bucket or create a new one to store metrics that failed to be sent.
     * New Relic buffer conditions
       * Buffer size: `1 MB`
       * Buffer interval: `60 (seconds)`
     * Permissions IAM role:
       * Create or update IAM role
1. From AWS Console, go to <DNT>**CloudWatch service**</DNT> and select the <DNT>**Streams**</DNT> option under the <DNT>**Metrics**</DNT> menu. Click <DNT>**Create metric stream**</DNT>.
1. Determine the right configuration based on your use cases. For example, use inclusion and exclusion filters to select the services that should push metrics to New Relic.
1. Select the Firehose you created in the first step, then define a meaningful name for the metric stream. For example, you could name it `newrelic-metric-stream`.
1. Change default output format to `Open Telemetry 0.7`. Keep in mind that JSON isn't supported.
1. Go to <DNT>**[one.newrelic.com > All capabilities > Infrastructure > AWS](https://one.newrelic.com/infra/infrastructure/cloud-aws)**</DNT>. Click <DNT>**Add an AWS account**</DNT>, then <DNT>**Use metric streams**</DNT>. Follow the remaining steps. 
