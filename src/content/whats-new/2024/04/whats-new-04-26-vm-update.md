---
title: Vulnerability Management updates 
summary: Check out three new changes that expand Vulnerability Management 
releaseDate: '2024-04-26'
learnMoreLink: 'https://docs.newrelic.com/docs/vulnerability-management/integrations/intro/#php-packages'
getStartedLink: ''
---

Vulnerability Management now has support for PHP, role based access control, and prioritization analytics! 

## PHP Language Support
PHP language support is now enabled within Vulnerability Management.  Starting with PHP agent version 10.17.0.17, 
customers with access to NRVM can now view CVEs in PHP applications related to packages from the following frameworks: 
Drupal, Guzzle, Laravel, PHPUnit, Predis, Slim and Wordpress.

For more details about supported packages and versions, visit the Vulnerability Integrations page in [New Relic docs](https://docs.newrelic.com/docs/vulnerability-management/integrations/intro/#php-packages). 

## Vulnerability Management supports RBAC (role based access control)
RBAC permission allows customers with Pro or Enterprise to restrict which users have access to read vulnerabilities. 
If a user does **NOT** have this permission, they will be unable to access Vulnerability Management. More details around 
all permissions used by NRVM can be found in the user [docs](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions/#security) for NRVM.

## Vulnerability Management enhances prioritization analytics
Vulnerability Management now provides additional security analytics that help users quickly and 
accurately prioritize which risks need to be fixed first.

In addition to CVSS data, VM now features **Exploit Prediction Scoring System (EPSS)** data which rates the 
probability that a vulnerability will be exploited in the wild. In these cases, there are known instances 
of threat actors taking advantage of the vulnerability, which would elevate the severity of the vulnerability.

**Active Ransomware** data has also been added which indicates if the vulnerability has been used in known ransomware campaigns. 
The severe impacts of ransomware incidents make these vulnerabilities a high priority.

More details around prioritization data used by NRVM can be found in the [user docs](https://docs.newrelic.com/docs/vulnerability-management/understanding-prioritization/) for NRVM.
