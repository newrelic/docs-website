---
title: 'Improve notification workflows with new Slack integration features'
summary: 'New alerting options enhance issue visibility and improve troubleshooting'
releaseDate: '2024-09-12'
---

We are pleased to announce the release of two highly-requested features for improved Slack issue notification troubleshooting.

**Slack channel broadcasting**

While tracking multiple issues as individual threads in Slack, the details can easily get buried in your thread notifications which makes it difficult to keep up with the latest developments of a particular issue. With our new broadcasting feature, automated replies to an issue will not only be added to the issue thread, but also sent to the entire channel. (This feature offers a similar functionality to the “Also send to [channel]” checkbox that appears while adding to a thread in Slack). This improves the visibility of each update and ensures everyone in the channel is informed with the latest information for an issue. 

To use this feature, select the “Receive notification updates on the channel as well” checkbox while configuring your Slack notification channel.

![Slack channel broadcast](/images/slack-channel-broadcast.png "Screenshot showing Slack channel broadcast")

**Uncheck Slack notification overrides**

While addressing an issue in Slack, you may sometimes need a snapshot of what was happening when the notification was originally issued. Previously, the initial Slack issue notification would be overwritten as the issue was updated. Now, the **Override notifications** option on the context menu for new Slack notification workflows offers the ability to disable this behavior. This box is checked by default; if unchecked, the original notification will remain unchanged - making it easier to understand the state of your system at the time of the alert.

![Slack notification override](/images/slack-notification-overrides-checkbox.png "Screenshot showing Slack notification override checkbox")


More information about our alerts notification integration for Slack and other applications can be found in our [documentation](https://docs.newrelic.com/docs/alerts/get-notified/notification-integrations/).
