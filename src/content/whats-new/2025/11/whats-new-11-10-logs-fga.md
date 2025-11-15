---
title: 'Fine Grained Access for Logs'
summary: 'Restrict user access to specific log data partitions for better security and compliance.'
releaseDate: '2025-10-29'
learnMoreLink: 'https://docs.newrelic.com/es/docs/accounts/accounts-billing/new-relic-one-user-management/data-access-control/'
getStartedLink: 'https://docs.newrelic.com/es/docs/accounts/accounts-billing/new-relic-one-user-management/data-access-control/#create-policies'
---

As your organization scales, managing who can access specific log data is vital for security, compliance, and data governance. Your security teams may need to monitor critical logs that contain sensitive information (PII), while development teams should only see logs relevant to their specific services.

We're excited to introduce **fine grained access** for log data. This new capability, available for Pro and Enterprise accounts, gives Administrator's fine-grained control over which users can view specific log data.

### How it works

With Fine Grained Access control for Logs, you create policies that define exactly which log partitions users can access. These policies are assigned to access grants and allow you to:

* **Allow access:** Grant access *only* to a specific set of partitions.
* **Deny access:** Block access to specific partitions, like those containing sensitive data.
* **Use wildcards:** Easily manage multiple partitions at once (e.g., `log_prod%` matches all partitions starting with "log_prod").

This enables you to restrict logs access to only the data a user should need. When a user belongs to multiple grants for an account, any deny policy will always override an allow policy.

![A screenshot that shows how to add a data access policy](/static/images/add-data-policy.webp "A screenshot that shows how to add a data access policy.")

<figcaption>Create policies to allow or deny access to specific log partitions from the Access Management UI.</figcaption>

### Automate with the NerdGraph API

In addition to the UI, you can now manage your data access policies using our NerdGraph API. This is ideal for automating your security workflows and integrating with your existing identity and access management systems. You can use NerdGraph to programmatically:

* Create, query, and update policies
* Delete policies
* Assign policies to access grants 

[Learn more about managing policies via NerdGraph](https://docs.newrelic.com/docs/apis/nerdgraph/examples/nerdgraph-data-access-control).

To get started in the UI, users with the Authentication domain manager role can navigate to **[Administration > Access Management > Data access policies](https://one.newrelic.com/admin-portal)**.
