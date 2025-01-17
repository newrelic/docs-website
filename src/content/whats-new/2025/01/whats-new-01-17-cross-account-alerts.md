---
title: 'Configure cross account alerts for improved organization and manageability'
summary: 'Alert conditions can now target data in another account'
releaseDate: '2025-01-16'
learnMoreLink: 'https://docs.newrelic.com/docs/alerts/create-alert/create-alert-condition/cross-account-alert/'
---

In many organizations, different teams or departments may use separate New Relic accounts to organize their data.  The new cross account alert condition feature now allows users the ability to create and manage an alert condition in one account that targets data that lives in another account.

This offers several benefits:
* Manage alerts across multiple accounts that you have access to, enabling a consolidated view of all relevant incidents and issues.
* Limit write and edit access to sensitive accounts, minimizing the need for multiple users to have permissions on accounts they do not directly manage.
* Organize alert configurations by reducing unnecessary alerts on accounts that serve as data sources for others.
* Delegate alert threshold management and governance to the appropriate teams, easing the burden on account owners.
* Ensure timely alerts for critical dependencies, even if they reside in different New Relic accounts.


For example, you may have an application team who is dependent upon the host that their application is running on, however, the application team’s data is in a separate account from the host data. 


Once data sharing is enabled on the host data’s account, the application team can now create an alert condition within their own account that targets the host’s data.  Now the application team can create and manage their own alert conditions and notifications to ensure they know if there is a problem with the host.  The team managing the host data’s account does not need to be concerned with creating or managing this alert condition on the application team’s behalf.


In order to start using cross account conditions, first, an organization manager will need to decide which accounts may share data for the purposes of cross account alerts.  They will need to opt in those accounts either via the Alerts>Settings page or the [cross account enablement API] (https://docs.newrelic.com/docs/apis/nerdgraph/examples/nerdgraph-api-cross-account-alerting-elections/).

!["Screenshot showing account opt in for data sharing for cross account alerts"](/images/cross_account_alerts_opt_in.webp "Screenshot showing account opt in for data sharing for cross account alerts")

This feature is only available on the new NRQL alert conditions through the “Query Mode” form. This field is available on the ‘Tell us where to look’ section of the form above the query box. This field can also be edited using the alert condition APIs and in our latest Terraform provider.  You may read more about this in the documentation at : https://docs.newrelic.com/docs/alerts/create-alert/create-alert-condition/cross-account-alert/

!["Screenshot showing cross account alert configuration"](/images/cross_account_alert_config.webp "Screenshot showing cross account alert configuration")