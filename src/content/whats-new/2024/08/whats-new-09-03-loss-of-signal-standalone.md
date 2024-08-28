---
title: 'New Stand-alone  ‘Loss of Signal’ Alert Condition Threshold Type'
summary: 'Get alerted when New Relic stops receiving data!'
releaseDate: '2024-09-03'
learnMoreLink: 'https://docs.newrelic.com/docs/alerts/create-alert/create-alert-condition/create-nrql-alert-conditions/#signal-loss'
---


## Word wrap (remove this section before publishing)

If you're using VS Code and want to turn on text wrapping to make it easier to edit:

* Windows: Ctrl + Shift + press the key `p`. Now on the command line, type Toggle Word Wrap and press Enter.
* Mac: Command + Shift + press the key `p`. Now in the command line, type Toggle Word Wrap and press Enter.


## Body format (remove this section before publishing)

“Loss of signal” threshold capabilities have been extended to now be available as the sole threshold option for an alert configuration for any entity type.  Previously, a loss of signal threshold could be configured as an additional threshold value to any static or anomaly condition.   What if you want an alert condition that is only monitoring the presence of a signal, or data, flowing though?

Now, you can create an alert condition with a stand-alone “loss of signal” threshold and specify for how long the signal must be lost before opening a violation.  The additional anomaly or static threshold(s) are optional.  The loss of signal evaluation will work similarly to how it does today: there must be a signal that is detected first in order for the signal to meet the threshold of being “lost.”  Entity status will function as it does today when a loss of signal occurs: an impacted entity will move into “critical” status when the signal is lost for the amount of time specified.

We have added a new feature to the “loss of signal” threshold to allow users to specify via Tags on the entities when a termination is expected with the “termination: expected” tag (formerly called “clean shut down” on Host entities).  This will allow for a broad condition to be used to evaluate many entities, and for you to not get alerted when those entities that you know do not have a consistent signal stop reporting.


Here is what a loss of signal only threshold would look like on the condition builder UI:

![Condition builder UI showing only Loss of Signal threhold configured](/images/INSERT_IMAGE_FILE_NAME.webp "Condition builder UI showing only Loss of Signal threhold configured")

