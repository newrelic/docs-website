---
title: AWS System Manager Distributor
metaDescription: "New Relic's AWS System Manager Distributor monitoring integration: what data it reports, and how to enable it."
freshnessValidatedDate: 2024-02-28
---

Install New Relic's infrastructure agent on your AWS EC2 instances with a single click through our integration for [AWS System Manager Distributor](https://docs.aws.amazon.com/systems-manager/latest/userguide/distributor.html). This document explains the integrations features, how to activate it, and what data can be reported.

## Features [#features]

Collect and send telemetry data to New Relic from diverse AWS instances with a single click. New Relic's AWS System Manager Distributor integration installs our infrastructure agent on your AWS instances and allows you to quickly monitor your services, query incoming data, and build dashboards so you can observe your system at a glance.

## Prerequisites [#prereqs]

Complete the setup recommended by AWS at [AWS Systems Manager documentation](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html) to configure roles, user accounts, permissions, and initial resources.

## Activate integration [#integration]

You can use the AWS Systems Manager console to install or update the <DNT>**New Relic infrastructure agent**</DNT> distributor package one time or you can set an install schedule.

* When you configure a one time installation, the <DNT>**Distributor package**</DNT> uses the [AWS Systems Manager Run Command](https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html), a capability of AWS Systems Manager, to perform the installation.
* When you schedule package installation or update, Distributor uses [AWS Systems Manager State Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html) to install or update.

New Relic also provides automated process for monitoring of EC2 and can be found [here](/whats-new/2023/08/whats-new-08-08-automatic-ec2-monitoring-through-nr-agent/)

## Install or update the agent [#install-update]

1. Open the AWS Systems Manager [console](https://console.aws.amazon.com/systems-manager). In the navigation pane, choose <DNT>**Distributor**</DNT>,  select <DNT>**Third party**</DNT> and select the <DNT>**New Relic infrastructure agent**</DNT> tile.

2. Select the installation mode. You can install or update the <DNT>**New Relic infrastructure agent**</DNT> package one time or schedule the installation. For detailed information on installing the <DNT>**Distributor packages**</DNT>, see [AWS Systems Manager Distributor documentation](https://docs.aws.amazon.com/systems-manager/latest/userguide/distributor-working-with-packages-deploy.html).

3. For <DNT>**Action**</DNT>, choose <DNT>**Install**</DNT>.

4. For <DNT>**Installation type**</DNT>, choose either <DNT>**Uninstall and reinstall**</DNT>: The package is completely uninstalled, and then reinstalled. The New Relic agent is unavailable until the reinstallation is complete <DNT>**In-place update**</DNT>. The application remains available throughout the update process.

5. For <DNT>**Additional Arguments**</DNT>, paste the code featured below. Be sure to replace `YOUR_NEWRELIC_LICENSE_KEY` with your [New Relic API Key](/docs/apis/intro-apis/new-relic-api-keys).

   ```
   {
     "SSM_NR_LICENSE_KEY" : "YOUR_NEWRELIC_LICENSE_KEY"
   }
   ```

   Sample variables can also be specified in **Additional Arguments** as shown below:

   ```
   { "SSM_NR_LICENSE_KEY" : "YOUR_NEWRELIC_LICENSE_KEY",
    "SSM_NRIA_METRICS_NETWORK_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_PROCESS_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_STORAGE_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_SYSTEM_SAMPLE_RATE" : "SOME_INTEGER_VALUE", 
    "SSM_NRIA_METRICS_NFS_SAMPLE_RATE" : "SOME_INTEGER_VALUE" }
   ```

   If not specified, they will take the [default values](https://github.com/newrelic/infrastructure-agent/blob/master/assets/examples/infrastructure/newrelic-infra-template.yml.example).

6. In the <DNT>**Targets**</DNT> section, choose the managed nodes on which you want to run this operation by specifying tags, selecting instances or devices manually, or by specifying a resource group.
   If you don't see a managed node in the list, see [these AWS docs](https://docs.aws.amazon.com/systems-manager/latest/userguide/troubleshooting-managed-instances.html).

7. For <DNT>**Rate Control**</DNT> for <DNT>**Concurrency**</DNT>, specify either a number or a percentage of targets on which to run the command at the same time.

   <Callout variant="tip">
     If you selected targets by specifying tags or resource groups and you aren't certain how many managed nodes are targeted, then restrict the number of targets that can run the document at the same time by specifying a percentage.
   </Callout>

8. For <DNT>**Error threshold**</DNT>, specify when to stop running the command on other targets after it fails on either a number or a percentage of managed nodes. For example, if you specify three errors, then Systems Manager stops sending the command when the fourth error is received. Managed nodes still processing the command might also send errors.

9. <DNT>**Verify the installation**</DNT>. After you run the installation, check the progress in the Command status area. When you see the Success status it means the installation was successful.

10. Explore your app's data in the [our UI](one.newrelic.com).

## Configuration and polling [#configure-polling]

You can change the polling frequency and filter data using [configuration options](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

[Default polling information](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) for the AWS integrations:

* New Relic polling interval: 5 minutes
* Amazon CloudWatch data interval: 1 minute or 5 minutes

## Find and use data

After you installed the New Relic infrastructure agent, [you can adjust and tune the data flow coming from your instances](/docs/infrastructure/infrastructure-monitoring/get-started/get-started-infrastructure-monitoring).

To read more about how to find your data, see our [Introduction to AWS integrations](/docs/infrastructure/amazon-integrations/get-started/introduction-aws-integrations/#insights).
