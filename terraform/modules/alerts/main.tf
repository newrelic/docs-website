data "newrelic_entity" "browser" {
  name   = "docs.newrelic.com"
  domain = "BROWSER"
  type   = "APPLICATION"

  tag {
    key   = "accountID"
    value = 10956800
  }
}

data "newrelic_alert_channel" {
  name = "Developer Enablement"
  type = "pagerduty"
}

data "newrelic_alert_channel" {
  name = "#dev-enablement-bots"
  type = "slack"
}

# TODO: policy
# TODO: policy_channels
# TODO: conditions
