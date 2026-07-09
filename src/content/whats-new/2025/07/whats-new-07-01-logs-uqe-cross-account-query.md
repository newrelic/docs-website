---
title: "Logs Cross Account Query in the Unified Query Explorer"
summary: "Search and analyze all your log data across every account in a single place"
releaseDate: "2025-07-01"
learnMoreLink: ''
getStartedLink: ''
---

## Search, View, and Analyze Logs Across All Your Accounts
At last, you can search and analyze all your log data across every account from a single place in the Unified Query Explorer. No more switching contexts to find the logs you need.

## Summary
As your organization scales with New Relic's multi-account structure, we know how crucial it is to have a centralized view of your data. That's why we're excited to announce that you can now search, aggregate, and view log data in the Log Table from multiple accounts directly in the Query Builder. This update eliminates the pain of querying individual accounts, allowing you to easily analyze logs from across your entire organization in one unified Log Table.

<img
  title="Logs cross account query in the UQE"
  alt="Image of logs table cross account query in the UQE"
  src="/images/logs_uqe_cross_account_query.webp"
/>

## Key Benefits
- **Gain a Centralized View of Your Logs:** Search and filter log data in the Log Table visual from all your accounts in a single query from within the Query Builder or UQE. No more switching between accounts to hunt down the information you need.
- **Accelerate Root Cause Analysis:** Quickly search for specific customer IDs, error messages, or other key identifiers across your entire account structure to find the root cause of issues faster than ever before.
- **Unlock Deeper Insights:** Easily aggregate log data from multiple environments, such as different Kubernetes clusters spread across various accounts, to get a complete picture of your system's behavior.
- **Perform Advanced Analysis at Scale:** Use powerful features like aparse(), and regex on log data from all your accounts to uncover trends and insights that were previously out of reach.
- **Add Queries to Dashboards:** With cross account query you can save the Log Table widget to any dashboard. To view which account a log belongs to simply include the accountId() function in your query `SELECT *, accountId() as ‘accountId’ FROM Log`
