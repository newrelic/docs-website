---
title: Fixes and optimizations
subject: Cloud integrations
releaseDate: '2019-02-20'
redirects:
  - /docs/release-notes/platform-release-notes/cloud-integrations-release-notes/2019-02-20-integrations-fixes-optimizations
---

### New

* The [AWS EMR integration](https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-emr-monitoring-integration) has been optimized to reduce the number of API calls that are made to collect data for terminated clusters, while ensuring that the latest metrics and inventory attribute values will be reported.
* The [AWS Route 53 integration](https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-route-53-monitoring-integration) has been optimized to reduce the number of calls to the AWS API that are needed to fetch hosted zone data. It's just one call per 100 hosted zones now, while an additional call per hosted zone was made before.
* In the [AWS RDS integration](https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-rds-monitoring-integration), the inventory attribute `allocatedStorageBytes` has been added to the RDS instance metric events, so now it's possible to calculate free storage percentage with an NRDB query:

  ```
  SELECT min(provider.freeStorageSpaceBytes.Minimum * 100 / provider.allocatedStorageBytes) FROM DatastoreSample where provider = 'RdsDbInstance' FACET displayName TIMESERIES AUTO
  ```

### Bug fixes

* When creating an Integrations alert condition through the user interface, some data sources were wrong or missing in the list:
  * For the [Google Kubernetes Engine integration](https://docs.newrelic.com/docs/integrations/google-cloud-platform-integrations/gcp-integrations-list/google-kubernetes-engine-monitoring-integration), `GcpKubernetesPod` and `GcpKubernetesNode` data sources should be used instead of `GcpKubernetesPodSample` and `GcpKubernetesNodeSample`, respectively.
  * For the [Google Cloud Pub/Sub integration](https://docs.newrelic.com/https://docs.newrelic.com/docs/integrations/google-cloud-platform-integrations/gcp-integrations-list/google-cloud-pubsub-monitoring-integration), `GcpPubSubSubscription` and `GcpPubSubTopic` data sources should be used instead of `GcpPubSubSubscriptionSample` and `GcpPubSubTopicSample`, respectively.
  * For the [Google Cloud Functions integration](https://docs.newrelic.com/docs/integrations/google-cloud-platform-integrations/gcp-integrations-list/google-cloud-functions-monitoring-integration), `GcpCloudFunction` data source should be used instead of `GcpCloudFunctionSample`.
  * For the [AWS Lambda integration](https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-lambda-monitoring-integration) used together with [AWS CloudFront](https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-cloudfront-monitoring-integration), the `LambdaEdgeFunction` data source was missing.
* In the [AWS VPC integration](https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-vpc-monitoring-integration), the value of the `provider` attribute for `PrivateNetworkSample` events, was fixed from `VpcEnpoint` to `VpcEndpoint`.
* For the [AWS API Gateway integration](https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-api-gateway-monitoring-integration), the Count metric aggregate, which provides the number of calls to API methods, has been changed from Sum to Sample Count. This change requires that you manually update all the alert conditions and custom Insights dashboards that involve the deprecated Sum metric.
  * To update an alert condition, use New Relic Infrastructure Alerts UI or API and edit the metric that defines the threshold for the `ApiGatewayApi` data source. If you use the UI, please replace `Provider - Count - Sum` with `Provider - Count - Sample Count`. If you use the API, please replace `provider.count.Sum` with `provider.count.SampleCount`.
  * To update an Insights dashboard, use New Relic Insights UI or API and edit the chart queries that involve the `provider.count.Sum` to replace it with `provider.count.SampleCount`.
  * In particular, if you enabled AWS API Gateway monitoring before December 2018, New Relic might have created a "AWS API Gateway (APIs)" dashboard automatically. This dashboard contains the "Total Calls compare with 1 hour ago" chart, which involves the `provider.count.Sum` metric that needs to be replaced.
  * Please note that the default dashboards shown under New Relic Infrastructure have already been updated.
