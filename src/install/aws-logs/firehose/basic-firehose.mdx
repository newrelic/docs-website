---
componentType: default
headingText: Create the delivery stream for New Relic
---

To forward your logs from Kinesis Data Firehose to New Relic:

1. Follow the procedures to [create an Amazon Kinesis Data Firehose delivery stream](https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html), and select New Relic as the destination.
2. In the AWS Management Console, go to <DNT>**Amazon Kinesis**</DNT>.
3. Select <DNT>**Kinesis Data Firehose**</DNT> and click <DNT>**Create delivery stream**</DNT>. Enter a name for the stream and select your data source.
4. When selecting the destination, click <DNT>**Third-party partner**</DNT> and then <DNT>**New Relic.**</DNT>
5. Under <DNT>**HTTP endpoint URL**</DNT>, select <DNT>**New Relic logs - US**</DNT>. This is the US endpoint ([https://aws-api.newrelic.com/firehose/v1](https://aws-api.newrelic.com/firehose/v1)). To use the EU endpoint, complete the remaining steps in this procedure, then go to [EU account configuration](#configure-eu-stream).
6. Paste your <InlinePopover type="licenseKey"/> in the <DNT>**API key**</DNT> field.
7. Ensure that <DNT>**Content encoding**</DNT> is set to `GZIP`.
8. Set a <DNT>**buffer size**</DNT> of `1 MiB` under `Buffer hints/Buffer size`. (Note that the `Buffer hints` section is folded by default. For more information, see the [buffer settings section](#buffer-settings).
9. Configure and review the remaining metadata settings.

Any optional key/value pairs you add in the AWS Management Console will result in attribute/value pairs you can use in New Relic. Kinesis Data Firehose includes these key-value pairs in each HTTP call. These [Kinesis Firehose parameters](https://docs.aws.amazon.com/firehose/latest/dev/create-destination.html#create-destination-new-relic) can help you identify and organize your destinations.

<CollapserGroup>
  <Collapser
    id="buffer-settings"
    title="Buffer size and interval information"
  >
    When selecting our Kinesis Firehose integration for logs in AWS, the wizard hides a small section called `Buffer hints` at the bottom of the screen. This section contains two very important configuration options: `Buffer size` and `Buffer interval`.

    <img
      title="Firehose Buffer Hints"
      alt="Firehose Buffer Hints"
      src="/images/logs_screenshot-crop_AWS-Kinesis-firehose-buffer-hints.webp"
    />

    The default values are 5 MiB for `Buffer size`, and 60 seconds for `Buffer interval`. This means that Firehose accumulates logs until either they contain 5 MiB of data, or until 60 seconds have passed since the last time they were flushed to New Relic.

    <Callout variant="important">
      These default settings are not appropriate for log management in New Relic. We strongly advise to use 1 MiB as the `Buffer size` and activate GZIP body compression.
    </Callout>

    Why do we recommend this? New Relic accepts at most [payloads of 1 MB](/docs/logs/log-api/introduction-log-api/#limits) (1.000.000 bytes) for an individual HTTP POST request to its Logs API. If the size of the accumulated logs exceeds 1 MB during any 60-second accumulation period, we will reject those logs with a `413` HTTP error.

    The delivery stream allows configuring, at a minimum, a buffer size of 1 MiB (1.048.576 bytes). Even though this value is slightly greater than the 1MB allowed by New Relic's Logs API, you can use GZIP compression so that the resulting payload becomes smaller than the 1MB limit.
  </Collapser>
</CollapserGroup>
