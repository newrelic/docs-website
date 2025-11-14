---
title: 'Automate your searches with Scheduled Search and Reporting (Preview)'
summary: 'Automatically run NRQL queries and email results as CSV or JSON files.'
releaseDate: '2025-10-29'
learnMoreLink: 'https://docs.newrelic.com/docs/nrql/using-nrql/schedule-nrql-searches/'
getStartedLink: 'https://docs.newrelic.com/docs/nrql/using-nrql/schedule-nrql-searches/#create-schedule'
---

Stop running the same NRQL queries over and over. Whether you're checking daily failed transactions or monitoring failures in your log data, manual reporting is time-consuming and makes it easy to miss insights.

We're excited to introduce **Scheduled Search and Reporting (Preview)**. This new feature, built on our Workflow Automation platform, lets you automate your repetitive queries and delivers the results straight to key stakeholders inboxes on a schedule you control.

### How it works

* **Automate any query:** Turn any NRQL query into an automated workflow.
* **Flexible scheduling:** Use standard cron expressions to run queries at any interval—every 15 minutes, daily at 9:00 AM, or the first day of every month.
* **Email notifications:** Send results to multiple team members or email destinations.
* **Multiple formats:** Get your query results as an attached **CSV** or **JSON** file, ready for reporting or analysis.
* **Centralized management:** View, edit, and manage all your scheduled searches from a single page in the Administration UI.

![Setting up Scheduled Search Notifications](/static/images/nrql_scheduled-query_-set-up-notification.webp "Setting up Scheduled Search Notifications")

<figcaption>Set up your email notification, schedule, and output format (CSV or JSON).</figcaption>

To get started, navigate to **[Administration > Scheduled Searches](https://one.newrelic.com/admin-portal)**. Please note that you'll need Workflow Automation permissions to create schedules.

This feature is currently in preview and available for customers in US data centers.
