locals {
  runbook_url = "https://github.com/newrelic/docs-website/wiki/Emergency-Runbook"
}

data "newrelic_alert_channel" "pagerduty" {
  name = "Developer Enablement"
  type = "pagerduty"
}

data "newrelic_alert_channel" "slack" {
  name = "#dev-enablement-bots"
  type = "slack"
}

resource "newrelic_alert_policy" "docs_site_policy" {
  name = "docs.newrelic.com"
}

# Connect the alert channels to the policy
resource "newrelic_alert_policy_channel" "docs_site_policy_channels" {
  policy_id = newrelic_alert_policy.docs_site_policy.id

  channel_ids = [
    newrelic_alert_channel.pagerduty.id,
    newrelic_alert_channel.slack.id,
  ]
}

resource "newrelic_alert_condition" "page_load_high" {
  policy_id = newrelic_alert_policy.id

  name        = "Total page load (High)"
  type        = "apm_app_metric"
  entities    = [var.application_id]
  metric      = "total_page_load"
  runbook_url = local.runbook_url

  term {
    duration      = 5
    operator      = "above"
    priority      = "warning"
    threshold     = var.page_load_warning
    time_function = "all"
  }

  term {
    duration      = 5
    operator      = "above"
    priority      = "critical"
    threshold     = var.page_load_critical
    time_function = "all"
  }
}

resource "newrelic_alert_condition" "apdex_low" {
  policy_id = newrelic_alert_policy.id

  name        = "End User Apdex (Low)"
  type        = "apm_app_metric"
  entities    = [var.application_id]
  metric      = "end_user_apdex"
  runbook_url = local.runbook_url

  term {
    duration      = 5
    operator      = "below"
    priority      = "warning"
    threshold     = var.apdex_warning
    time_function = "all"
  }

  term {
    duration      = 5
    operator      = "below"
    priority      = "critical"
    threshold     = var.apdex_critical
    time_function = "all"
  }
}

resource "newrelic_synthetics_multilocation_alert_condition" "synthetics_failures" {
  policy_id = newrelic_alert_policy.id

  name        = "Synthetics Failures"
  entities    = [var.synthetics_id]
  runbook_url = local.runbook_url

  warning {
    threshold = synthetics_warning
  }

  critical {
    threshold = synthetics_critical
  }
}

resource "newrelic_nrql_alert_condition" "js_errors" {
  policy_id = newrelic_alert_policy.id

  name           = "JS Errors (High)"
  type           = "static"
  value_function = "single_value"
  runbook_url    = local.runbook_url

  nrql {
    query             = "SELECT (uniqueCount(JavaScriptError.session) / uniqueCount(PageView.session)) * 100 AS '% Errors' FROM JavaScriptError, PageView WHERE appName = 'docs.newrelic.com' AND errorMessage != 'Unexpected token _ in JSON at position 0'"
    evaluation_offset = 3
  }

  warning {
    operator              = "above"
    threshold             = var.js_errors_warning
    threshold_duration    = 300 # 5 minutes
    threshold_occurrances = "all"
  }

  critical {
    operator              = "above"
    threshold             = var.js_errors_critical
    threshold_duration    = 300 # 5 minutes
    threshold_occurrances = "all"
  }
}
