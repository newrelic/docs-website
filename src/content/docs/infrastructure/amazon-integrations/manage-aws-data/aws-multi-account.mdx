---
title: Collect data from multiple AWS accounts
type: troubleshooting
tags:
    - Integrations
    - Amazon integrations
    - AWS multi-account
    - CloudWatch cross-account observability
metaDescription: 'Learn how to observe multiple AWS accounts under a single account on the New Relic user interface.'
redirects:
    - /docs/infrastructure/amazon-integrations/connect/aws-multi-account
freshnessValidatedDate: 2024-07-22
---

The New Relic UI gives you a complete view of your AWS system, making monitoring much easier. You can view metrics and monitor multiple AWS accounts that send metrics to a single account linked to New Relic. For this feature to work, you must send metrics from different AWS accounts that you want to monitor to a single AWS account. You can then monitor those different AWS accounts with the metrics enriched with the appropriate tags and metadata. You can easily track [performance metrics](/docs/data-apis/understand-data/new-relic-data-types/) while reducing overall infrastructure [costs](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing/), which means you'll save time and money.

Having a single view of all your AWS accounts helps you:

* Reduce the number of friction points by setting up a single observe account for AWS.

* Reduce overall infrastructure costs by reducing the number of streams sending metrics to observability solutions.

* Get tagged and metadata-enriched metrics from your AWS accounts.

## Before you start [#before-start]

Check the following:

* You've configured [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) to send metrics to a single AWS account that must be connected to New Relic.

* You're using [AWS Resource Groups Tagging API Reference](https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/overview.html) to collect tags.

* You're using AWS config to collect metadata.

* All IAM roles have access to fetch tags from individual accounts.

* You use the [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) used in the AWS observe account on all AWS accounts to monitor.

* You have [CloudWatch cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html) properly set up. See [Setting up cross account access](#setting-up-aws-cross-account-access).

### Set up AWS cross-account access [#setting-up-aws-cross-account-access]

You'll need to have access to the AWS Management Console of both monitoring and source accounts.

* **Source AWS account(s)**: These are individual AWS accounts that generate observability data for the resources that reside in them. Source accounts share their observability data with the monitoring account.
* **Monitoring AWS account**: This is a central AWS account that can view and interact with observability data generated from source accounts. It collects the telemetry from these accounts and pushes it to New Relic.

<Steps>

<Step>
Go to the AWS Management Console of the monitoring account and follow these steps to copy the <DNT>**Monitoring accounts sink ARN**</DNT>:

1. Go to <DNT>**CloudWatch > Settings**</DNT>.
2. Click <DNT>**Manage monitoring account**</DNT>.
3. Click the <DNT>**Configuration details**</DNT> tab.
4. Copy the <DNT>**Monitoring accounts sink ARN**</DNT>.

    <Callout variant="important">
        Each account can have one sink per region, so if you need to monitor multiple regions, you need to set up a sink for each region.
    </Callout>
</Step>

<Step>
Go to the AWS Management Console of the source account and [link the monitoring account](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account-Setup.html) for the <DNT>**Metrics**</DNT> resources:

1. Go to <DNT>**Cloudwatch > Settings**</DNT>.
2. In the <DNT>**Source account configuration**</DNT> section, click <DNT>**Configure**</DNT>.
3. Select <DNT>**Metrics**</DNT>.
4. (Optional) Mark <DNT>**Filter Metrics**</DNT> and set up a filter.
5. Paste the previously copied sink ARN in <DNT>**Sink ARN**</DNT> field.
6. Click <DNT>**Link**</DNT> and confirm.
</Step>

<Step>
Go back to the AWS Management Console of the monitoring account:

1. Go to <DNT>**CloudWatch > Settings**</DNT>.
2. Click <DNT>**Manage monitoring account**</DNT> and check that the source account is listed.
3. Go to <DNT>**CloudWatch > Metrics > Streams**</DNT> and check that the metric stream sending the telemetry has <DNT>**Cross account status**</DNT> enabled. If not, edit it, mark the <DNT>**Metrics to be streamed > Include source account metrics**</DNT> check, and save.
</Step>

</Steps>

## Connect your AWS observe account to New Relic [#connect-aws-account]

To start receiving Amazon data with New Relic AWS integrations, connect your AWS account, which receives metrics from all the other AWS accounts you want to monitor, to New Relic.

1. Go to <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) > Infrastructure**</DNT>. Under the <DNT>**Integrations**</DNT> section, click <DNT>**AWS**</DNT>.

2. Click <DNT>**Add AWS account**</DNT>.

   <img
     title="Add AWS account to New Relic"
     alt="Add AWS account to New Relic"
     src="/images/infrastructure_screenshot-crop_aws-add-account.webp"
   />

3. Choose <DNT>**Manually integrate your AWS account**</DNT> intrumentation method.

4. Choose the <DNT>**Real-time AWS monitoring (Recommended)**</DNT> option.

5. Sign in to the [AWS Management Console](https://aws.amazon.com/console/) and follow the steps.

6. Once you finish all the steps, click the <DNT>**Explore data**</DNT> link to check out your metrics.

   <img
     title="Explore your data link"
     alt="Explore your data link"
     src="/images/infrastructure_screenshot-crop_aws-explore-data-link.webp"
   />

## Explore your AWS data [#explore-data]

To explore your AWS data, go to <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) > Infrastructure**</DNT>. Under the <DNT>**Integrations**</DNT> section, click <DNT>**AWS**</DNT>. Then, select your integration and click the <DNT>**Explore data**</DNT> link. This link opens the <DNT>[**Data explorer**](/docs/query-your-data/explore-query-data/browse-data/introduction-data-explorer/)</DNT> to browse the available metrics, facet, and filter by the associated dimensions. You also have a tab to open the [query builder](/docs/telemetry-data-platform/get-data/apis/query-metric-data-type/).

## Check the status of your account [#account-status]

You can check the status of your account by clicking the <DNT>**See account status dashboard**</DNT> button.

<img
  title="See the status of your account"
  alt="See the status of your account"
  src="/images/infrastructure_screenshot-crop_aws-see-account-status-dashboard.webp"
/>

<figcaption>
  Go to <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) > Infrastructure**</DNT>. Under the <DNT>**Integrations**</DNT> section, click <DNT>**AWS**</DNT>. Then, click the <DNT>**See account status dashboard**</DNT> button.
</figcaption>

Once you click the button, the dashboard opens.

<img
  title="See the status of your account"
  alt="See the status of your account"
  src="/images/infrastructure_screenshot-crop_aws-account-status-dashboard.webp"
/>
