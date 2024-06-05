---
title: 'Manage vulnerabilities with new “Ignored” feature'
summary: 'Remove noncritical vulnerabilities from Vulnerability Management default views.'
releaseDate: '2024-06-05'
learnMoreLink: 'https://docs.newrelic.com/docs/vulnerability-management/change-vulnerability-status/' 
getStartedLink: 'https://docs.newrelic.com/docs/vulnerability-management'
---

Vulnerability Management now allows you to remove noncritical vulnerabilities from views by assigning individual entities the **Ignored** status so specific vulnerabilities no longer appear in default views. This can reduce the volume of vulnerabilities that require your attention.

If you're in DevSecOp, this option let's you claim back time spent triaging and remediating noncritical vulnerabilities by providing industry-leading prioritization capabilities and the ability to customize vulnerability notifications so you can focus on those risks that matter. 

Key Capabilities:
* **Ignore specific or groups of entities**: Vulnerability Management users can ignore vulnerabilities for a specific entity or ignore a vulnerability across multiple instances. Once the status of an instance is set to **Ignored**, this instance will be excluded from the summary tiles and vulnerability list by default.
* **Audit documentation**: When choosing to ignore a vulnerability, users are prompted to explain the rationale behind the decision for audit and compliance purposes.
* **Summary Reporting**: Ignored vulnerabilities can be viewed with the filter bar for summary reporting and audit checks.
* **Configure time settings**: The **Ignored** status duration can be set for a specific time period or manually removed.
* **Manage vulnerability status**: Changing the status from **Ignored** to **Affected** reintroduces the vulnerability back into default views and counts on this entity, but other instances of this vulnerability on other entities will still remain ignored.
