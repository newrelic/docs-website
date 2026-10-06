---
title: 'Manage New Relic notebooks with Terraform'
summary: 'Create, update, and version-control your notebooks with the new Terraform resource.'
releaseDate: '2026-10-06'
getStartedLink: 'https://registry.terraform.io/providers/newrelic/newrelic/latest/docs/resources/notebook'
---

If you've ever wanted your notebooks living in version control, reviewed in pull requests, and deployed the same way as the rest of your infrastructure, that day is here. The New Relic Terraform provider now includes full CRUD support for notebooks.

## What you get

* **Full lifecycle management** — Create, update, and delete notebooks directly from your Terraform configuration, alongside the rest of your New Relic resources.
* **Version-controlled notebooks** — Store your notebook definitions in source control and roll out changes through your existing CI/CD pipeline instead of managing them by hand in the UI.
* **Copy-paste-ready examples** — The provider docs include a full schema reference and working example configurations you can adapt directly.

## Get started

Add the `newrelic_notebook` resource to your Terraform configuration using the [schema reference and examples](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs/resources/notebook) in the Terraform registry. For more on notebooks themselves, see [Create data-driven documents with notebooks](https://docs.newrelic.com/docs/query-your-data/explore-query-data/notebooks/introduction-notebooks/).
