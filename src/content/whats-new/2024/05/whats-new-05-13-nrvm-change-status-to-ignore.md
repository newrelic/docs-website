---
title: 'Manage vulnerabilies in VM with new “Ignored” vulnerability feature'
summary: 'NRVM users can remove noncritical vulnerabilies from default views, thereby reducing the volume of vulnerabilies that require attention, by assigning individual entities the Ignored status.'
releaseDate: '2023-05-13'
learnMoreLink: 'https://docs.newrelic.com/docs/vulnerability-management/change-vulnerability-status/' 
getStartedLink: 'https://docs.newrelic.com/docs/vulnerability-management'
---

Vulnerability Management users who want to remove noncritical vulnerabilies from views, thereby reducing the volume of vulnerabilies that require user attention, cafeatn manage vulnerabilities by assigning individual entities the **Ignored** status so specific vulnerabilities no longer appear in default views.

VM helps DevSecOp users claim back their time spent triaging and remediating noncritical vulnerabilies by providing industry leading prioritization capabilities and the ability to customize vulnerability notifications so users can focus on those risks that matter. 

The **Ignored** status capability allows users to assign individual entities the **Ignored** status so their vulnerabilities no longer appear in VM default views, removing those items from triaging and remediation workflows which improves user productivity and reduces toil.

Key Capabilities:
* **Ignore specific or groups of entities** VM users can ignore vulnerabilities for a specific entity, or ignore a vulnerability across multiple instances. Once the status of an instance is set to **Ignored**, this instance will be excluded from the summary tiles and vulnerability list by default.
* **Audit documentation** When choosing to ignore a vulnerability, users are prompted to explain the rationale behind the decision for audit and compliance purposes.
* **Summary Reporting** Ignored vulnerabilities can be viewed with the filter bar for summary reporting and audit checks.
Configure time settings. The Ignored status duration can be set for a specific time period or manually removed.
* **Manage vulnerability status** Changing the status from **Ignored** to **Affected** reintroduces the vulnerability back into default views and counts on this entity, but other instances of this vulnerability on other entities will still remain ignored.
