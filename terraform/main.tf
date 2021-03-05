terraform {
  required_version = "~> 0.13.0"

  required_providers {
    newrelic = {
      source  = "newrelic/newrelic"
      version = "~> 2.12"
    }
  }
}

locals {
  account_id = 10956800
}

provider "newrelic" {
  account_id = local.account_id
  api_key    = var.api_key # TODO
  region     = "US"
}

data "newrelic_entity" "browser" {
  name   = "docs.newrelic.com"
  domain = "BROWSER"
  type   = "APPLICATION"

  tag {
    key   = "accountID"
    value = local.account_id
  }
}

resource "newrelic_synthetics_monitor" "docs_site_monitor" {
  name      = "docs.newrelic.com"
  type      = "SIMPLE"
  frequency = 5
  status    = "ENABLED"

  # Portland, London, Hong Kong
  locations = ["AWS_US_WEST_2", "AWS_EU_WEST_2", "AWS_AP_EAST_1"]

  uri        = "https://docs.newrelic.com"
  verify_ssl = true
}

module "docs_site_alerts" {
  source = "./modules/alerts"

  application_id = newrelic_entity.browser.application_id
  synthetics_id  = newrelic_synthetics_monitor.docs_site_monitor.id

  # Alert configuration (within the last 5 minutes)
  page_load_warning   = 3 # seconds
  page_load_critical  = 5 # seconds
  apdex_warning       = 0.7
  apdex_critical      = 0.5
  js_errors_warning   = 10 # unique sessions
  js_errors_critical  = 20 # unique sessions
  synthetics_warning  = 1 # failure
  synthetics_critical = 2 #failures
}
