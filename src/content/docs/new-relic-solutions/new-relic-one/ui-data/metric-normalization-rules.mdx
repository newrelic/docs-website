---
title: Metric normalization rules
tags:
  - New Relic 
  - Use New Relic 
  - UI and data
metaDescription: How to create and manage rules in New Relic  to deal with noise from high cardinality metrics and prevent metric grouping issues (MGIs).
redirects:
  - /docs/data-ingest-apis/get-data-new-relic/metric-api/metric-normalization-rules
  - /docs/metric-normalization-rules
  - /docs/new-relic-one/use-new-relic-one/ui-data/metric-normalization-rules
  - /docs/new-relic-one/ui-data/metric-normalization-rules
freshnessValidatedDate: never
---

There may be cases where an application sends many individual metrics that could be better managed in groups. Most of these occur with web transactions metrics named from URLs. For an explanation of this issue, see [Metric grouping issues](/docs/using-new-relic/cross-product-functions/troubleshooting/metric-grouping-issues) (MGIs).

To reduce high cardinality and prevent metric grouping issues, New Relic supports rules for grouping or filtering out metric timeslice data (normalization). In some cases, when metric grouping issues with a very high number of metrics are detected, a rule is created automatically to protect the platform from performance degradation.

## Requirements [#requirements]

Metric grouping issues and metric normalization applies only to [metric timeslice data](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data). <InlinePopover type="apm"/> agents, mobile agents, and <InlinePopover type="browser"/> agent report and display metric timeslice data.

## Metric normalization rules management [#create-rules]

You can create and manage new rules that deal with the noise produced from high cardinality metrics by using the metric normalization tool, which is accessible from each service dashboard in the [entity explorer](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find). Once there, select <DNT>**Metric normalization**</DNT> in the left sidebar.

There you can see the existing rules or create new ones. Click a rule to modify it, or click <DNT>**Create a new rule**</DNT> to create a new one. A new pane to configure the rule will be displayed.

<img
  style={{ width: '324px', height: '352px'}}
  class="inline"
  title="create new rule.png"
  alt="Create New Rule"
  src="/images/solutions_screenshot-full_create-new-rule-window.webp"
/>

Available fields are:

* <DNT>**Order**</DNT>: Determines the precedence of the rule. A lower number means higher precedence.
* <DNT>**Match expression**</DNT>: Enter the regular expression to group all the metrics you want to include in the rule.
* <DNT>**Matches**</DNT>: Here you will see a preview of the metrics matched by the regular expression above.
* <DNT>**Action**</DNT>: The action you want to perform on the metrics.

  * <DNT>**Replace**</DNT>: Replace the matched metrics by the regular expression with the value described in the <DNT>**Replacement**</DNT> field.
  * <DNT>**Ignore**</DNT>: Ignore any metric that matches the regular expression.
  * <DNT>**Deny new metrics**</DNT>: Only write metrics that have already been reported, and ignore those that match the regular expression.
* <DNT>**Replacement**</DNT>: Only active when <DNT>**Replace**</DNT> is enabled. Matched metrics are replaced with the field's value. If the regular expression is capturing groups, you can use placeholders for them with `\1` or `\2` for the groups `1` and `2` respectively.
* <DNT>**Active**</DNT>: Rules can’t be deleted, but can be deactivated. Click the toggle to enable or disable the rule.
* <DNT>**Terminate**</DNT>: When enabled, the rules waterfall is exited when the associated pattern is matched.
* <DNT>**Notes**</DNT>: Internal notes on the rule. Has no effect on the rule.

Once you have set up the fields, click <DNT>**Create**</DNT> (or <DNT>**Edit**</DNT> in case you are editing an existing rule), and the rule will be applied immediately as long as it's <DNT>**Active**</DNT>.
