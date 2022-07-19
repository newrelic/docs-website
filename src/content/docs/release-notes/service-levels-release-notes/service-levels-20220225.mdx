---
title: 'One SLO per SLI'
subject: Service levels
releaseDate: '2022-02-25'
---

New Relic is introducing a breaking change on the service level setup flow: Starting on February 25, 2022, each service level indicator will support only one objective.

## A little context [#context]

When we released the public beta back in December 2021, each SLI supported more than one SLO, which is a combination of target compliance and a time period. We thought that this flexibility could be useful in two different ways:

* Differentiate between realistic and aspirational targets: You'd set a single SLO period (for example, 1 week) and then a couple of targets. One target would represent the achievable compliance according to the current service baseline, while the other one would represent an aspirational compliance.
* Identify short term trends: You'd set a single target (for example, 99%), and then different periods to see how your compliance evolved. In particular, you'd probably report SLOs on a weekly or monthly basis, but you could use the daily SLO to see trends at a shorter term.

Although there's a third option (where you could have several SLOs with different combinations of periods and targets),  we noticed it's not easy to manage and interpret in practice, so we're not focusing on this case.

On the other hand, while we allowed defining an SLI without an SLO, it wasn't very useful, so we're making it mandatory to define at least an SLO for each SLI now.

## New SLI and SLO configuration [#configuration]

With this update, we'll provide the same functionality while sparing some configuration burden.

**Before**

* API: The `serviceLevelCreate` and `serviceLevelUpdate` mutations accepted none, one, or more SLO targets and periods for each SLI.
* Terraform: The `newrelic_service_level` Terraform resource accepted none, one, or more SLO targets and periods for each SLI.
* UI: The setup flow accepted none, one, or more SLO targets and periods for each SLI. Service levels showed the compliance for the configured periods only.

**After**

* API: The `serviceLevelCreate` and `serviceLevelUpdate` mutations require one (and only one!) SLO target and period for each SLI. Otherwise, it throws an error response.
* Terraform: The `newrelic_service_level` Terraform resource requires one and (and only one!) SLO target and period for each SLI. Otherwise, it throws an error response.
* UI: The setup flow requires one (and only one!) SLO target and period for each SLI. **Service levels show the compliance for 1, 7 and 28 days**, no matter the period you set for your SLO, simplifying the setup.

## Migration [#migration]

New Relic will execute an **automatic migration** to adapt the existing SLIs and SLOs to the new constraints:

* Those SLIs that had more than one SLO with the same target and different periods (for example, 99.0% for 7 days and 99% for 28 days) will keep just one SLO with the same target, adopting the longest period.
* Those SLIs that had different SLO targets will be split into different SLIs.
* The very few SLIs that didn't have any SLO configured will be assigned an SLO with a 95.0% target for a period of 7 days.
* SLIs with one SLO won't be modified.

Any charts that you've added to a dashboard will continue to work.

<Callout variant="important">
  **Action needed!** If you automated the creation of service levels through Terraform or Nerdgraph, you need to adapt your scripts to always define one SLO per SLI.
</Callout>
