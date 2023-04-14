---
title: 'Streamline alert configuration and management'
summary: 'Set up alerts faster and with more flexible configuration options.’

releaseDate: '2023-04-06'
learnMoreLink: 'https://docs.newrelic.com/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/' 

---

We’re releasing a number of capabilities that simplify alert management, making setup faster and easier than ever and ensuring coverage without noise.

# Capabilities simplifying alert management:

* Faster setup for creating alerts
* Guided point-and-click alert configuration flow
* Recommended alert configurations to eliminate gaps
* Delayed signal evaluation for noisy environments
* Extended alert violation evaluation thresholds (2 hours > 24 hours)
* Workflows are now taggable entities
* New issues notifications log with critical workflow details
* Alert condition creation and management with Terraform

![The new alert condition creation form in New Relic](./images/alert_condition_form_screenshot.png "A screenshot of the New Relic alert condition creation form.")

# Deep dive into each capability:

## Faster setup for creating alerts

We’ve simplified our alert condition creation setup flow and are giving you more guidance while you determine alert thresholds and notification policies. We have broken the form into several steps so that you don’t have to wrangle a long, complex NRQL condition form. This change presents related settings together on the same page where you can follow the guided flow while we track the steps you’ve completed. Watch the latest [Data Byte](https://youtu.be/xUfyeZymvBU) episode to learn how to use this new setup flow.

## Guided point-and-click alert configuration flow

The dropdown options provided in the new UI make it as simple as selecting the type of signal, the entity type, and the specific services that you’d like to configure an alert for. From there, you simply match these alert configurations in the same flow to your workflow and destination policies. These changes make it easier to [create NRQL alert conditions](https://docs.newrelic.com/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/), especially if you’re unfamiliar with constructing NRQL queries.

## Recommended alert configurations to eliminate gaps

Alert coverage gaps will highlight areas in your stack where you're missing coverage and recommend alert configurations for those services. In New Relic, under the Alerts and AI capabilities, we've created a dedicated interface where you can see all of your uncovered entities, allowing you to assess alert coverage your team may be lacking and address any areas of concern.

## Delayed signal evaluation for noisy environments

When alerting on autoscale environments, alerts are configured to start watching new signals automatically as soon as they appear. However, since new signals are often atypical or erratic at first, they quite often trigger false alarms. Now, when creating a NRQL-based alert condition, you can specify how long to wait before we start evaluating a new signal that is covered by that alert.

## Extended alert violation evaluation thresholds (2 hours > 24 hours)

New Relic now allows alert evaluation periods to support the aggregation of up to 24 hours of data, up from 2 hours previously. This gives you more flexibility in alert conditions and furthers the accuracy of alert thresholds to help you limit noisy redundant alerts and ensure coverage across critical services.

## Workflows are now taggable entities

Workflows can now be tagged and are processed as their own events in NRDB. Workflows become entities and tags can be applied to these workflows so they can be used for reporting, relationships, custom dashboards, and more. Processing workflows as entities with tags is important so you can glean insights from workflows and alert operations to improve the way you send out, process, and respond to alert notifications over time.

## New issues notifications log with critical workflow details

Until now, the issues notifications log did not include critical details relevant to workflows such as the workflow name, the trigger event of the workflows, and the issue that triggered. The new solution provides end-to-end visibility, from the moment the issue event triggered a workflow to the notification evidence in third-party apps. The log contains the following information: Time, Status, Destination, Issue Name, Trigger event, Workflow, Error details, and Notification result.

## Alert condition creation and management with Terraform

We’ve made enhancements to the alert configuration flow to make it easier to use Terraform directly in New Relic. The Terraform script generator provides a button in your NRQL alert condition edit screen that will let you see an alert condition, as currently configured in the UI, as it would appear in a Terraform script.

To dive into more of these improvements, check out the [Data Byte video](https://youtu.be/xUfyeZymvBU) or read more about the benefits of the new alert condition creation flow in our [documentation](https://docs.newrelic.com/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/). 