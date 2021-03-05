terraform {
  required_version = "~> 0.13.0"

  required_providers {
    newrelic = {
      source  = "newrelic/newrelic"
      version = "~> 2.12"
    }
  }
}

provider "newrelic" {
  account_id = 10956800
  api_key    = var.api_key # TODO
  region     = "US"
}

module "docs_site_alerts" {
  source = "./modules/alerts" # TODO
}

module "docs_site_synthetics" {
  source = "./modules/synthetics" # TODO
}
