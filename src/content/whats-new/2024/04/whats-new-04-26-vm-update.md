---
title: New Vulnerability Management enhancements
summary: Vulnerability Management now supports PHP, RBAC, and enhanced prioritization analytics
releaseDate: '2024-04-26'
learnMoreLink: 'https://docs.newrelic.com/docs/vulnerability-management/integrations/intro/#php-packages'
---

Our latest updates to Vulnerability Management expand language support, access controls, and prioritization insights:

## PHP
PHP language support is now enabled within Vulnerability Management.  Starting with PHP agent version 10.17.0.17, customers with access to New Relic Vulnerability Management can now view CVEs (commmon vulnerabities and exposures) in PHP applications related to packages from the following frameworks: Drupal, Guzzle, Laravel, PHPUnit, Predis, Slim and Wordpress.

More details around supported packages and versions can be found on the [Vulnerability Integrations page in our docs](https://docs.newrelic.com/docs/vulnerability-management/integrations/intro/#php-packages). 

## RBAC (role based access control)
Account admins on Pro or Enterprise plans may use [RBAC](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts/#overview) to restrict which users have access to read vulnerabilities on their account. If a user does **NOT** have this permission, they will be unable to access Vulnerability Management. More details around all permissions can be found in our [User permissions docs](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions/#security).

## Enhanced prioritization analytics
Vulnerability Management now provides additional security analytics to help users quickly and accurately prioritize which risks need to be fixed first:
* In addition to CVSS (Common Vulnerability Scoring System) data, Vulnerability Management now features **EPSS (Exploit Prediction Scoring System)** data, which rates the probability that a vulnerability will be exploited in the wild. In these cases, there are known instances of threat actors taking advantage of the vulnerability, which would elevate the severity of the vulnerability.
* Vulnerability Management now also includes **Active Ransomware** data. This indicates if the vulnerability has been used in known ransomware campaigns. The severe impacts of ransomware incidents make these vulnerabilities a high priority.

More details around the prioritization data can be found in our [Vulnerability Management docs](https://docs.newrelic.com/docs/vulnerability-management/understanding-prioritization/).
