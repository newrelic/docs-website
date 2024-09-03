---
title: "New alert condition threshold type: stand-alone loss of signal"
summary: 'Get alerted when New Relic stops receiving data!'
releaseDate: '2024-09-03'
learnMoreLink: 'https://docs.newrelic.com/docs/alerts/create-alert/create-alert-condition/create-nrql-alert-conditions/#signal-loss'
---


The loss of signal threshold capabilities have been extended and are now available as the sole threshold option for an alert configuration with any entity type. Previously, you could only configure a loss of signal threshold  as an additional threshold value to any static or anomaly condition. What if you want an alert condition that is only monitoring the presence of a signal or data flowing though?

## Create a stand-alone threshold
Now, you can create an alert condition with a stand-alone loss of signal threshold and specify how long the signal must be lost before opening a violation. The additional anomaly or static threshold(s) are optional. 

The stand-alone loss of signal evaluation is similar to the way it works today in conjunction with static or anomaly conditions: There must be a signal that is detected first in order for the signal to meet the threshold of being “lost.” Entity status will function as it does today when a loss of signal occurs: An impacted entity will move into “critical” status when the signal is lost for the amount of time specified.

Here's what a stand-alone threshold for loss of signal looks like in the condition builder:

![Condition builder UI showing only Loss of Signal threhold configured](/images/whats-new-signal-loss-standalone.webp "Condition builder UI showing only Loss of Signal threhold configured")

## Manage expected terminations
We have also added a new feature to the loss of signal threshold that allows you to specify when a termination is expected. You can do this for entities with the `termination: expected` tag (formerly called `clean shut down` on host entities). This allows you to use a broad condition to evaluate many entities and avoid alerts from entities that do not have consistent signal-stop reporting.




