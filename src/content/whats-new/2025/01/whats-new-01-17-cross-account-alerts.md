---
title: 'Configure cross account alerts for improved organization and manageability'
summary: 'Alert conditions can now target data in another account'
releaseDate: '2025-01-16'
learnMoreLink: 'https://docs.newrelic.com/docs/alerts/create-alert/create-alert-condition/cross-account-alert/'
---

In many organizations, different teams or departments may use separate New Relic accounts to organize their data. The new cross-account alert condition feature now enables users to create and manage an alert condition in one account that targets data residing in another account.

## Key benefits

* **Consolidated alerts management**: Manage alerts across multiple accounts you have access to, enabling a unified view of all relevant incidents and issues.
* **Enhanced security**: Limit write and edit access to sensitive accounts, minimizing the need for multiple users to have permissions on accounts they do not directly manage.
* **Efficient alert organization**: Reduce unnecessary alerts on accounts that serve as data sources for others.
* **Delegated governance**: Delegate alert threshold management and governance to the appropriate teams, easing the burden on account owners.
* **Timely Notifications**: Ensure timely alerts for critical dependencies, even if they reside in different New Relic accounts.

## Example

Consider an application team dependent on the host their application runs on, with the application team’s data in a separate account from the host data. 

Once data sharing is enabled on the host data’s account, the application team can create an alert condition within their own account targeting the host’s data. This allows the application team to manage their own alert conditions and notifications, ensuring they are informed of any host issues. The team managing the host data’s account does not need to manage these alert conditions on behalf of the application team.

## Get started

To use cross-account conditions, an organization manager must decide which accounts can share data for cross-account alerts. They need to opt-in those accounts via the **Alerts > Settings** page or the [cross account enablement API](https://docs.newrelic.com/docs/apis/nerdgraph/examples/nerdgraph-api-cross-account-alerting-elections/)

!["Screenshot showing account opt in for data sharing for cross account alerts"](/images/cross_account_alerts_opt_in.webp "Screenshot showing account opt in for data sharing for cross account alerts")

This feature is available only on the new NRQL alert conditions through the **Query Mode** form. This field is located in the **Tell us where to look** section of the form above the query box. It can also be edited using the alert condition APIs and in our latest Terraform provider. For more details, refer to [Cross-account alert](https://docs.newrelic.com/docs/alerts/create-alert/create-alert-condition/cross-account-alert/).

!["Screenshot showing cross account alert configuration"](/images/cross_account_alert_config.webp "Screenshot showing cross account alert configuration")
