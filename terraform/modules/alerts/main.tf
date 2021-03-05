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
    threshold     = 3 # seconds
    time_function = "all"
  }

  term {
    duration      = 5
    operator      = "above"
    priority      = "critical"
    threshold     = 5 # seconds
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
    threshold     = 0.7
    time_function = "all"
  }

  term {
    duration      = 5
    operator      = "below"
    priority      = "critical"
    threshold     = 0.5
    time_function = "all"
  }
}
