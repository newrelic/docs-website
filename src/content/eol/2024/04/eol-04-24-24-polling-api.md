---
title: "EOL for Azure SQL database integration polling API"
summary: "Azure is deprecating the SDK the polling API uses and will no longer be providing critical updates to this API, creating security concerns moving forward."
publishDate: '2024-04-22'
eolEffectiveDate: '2024-12-01'
---

On December 1, 2024, New Relic will end support for the Azure SQL database integration polling API, because Azure is deprecating the SDK that the polling API uses. Only customers who capture data with the polling API will experience a change in their data if they’re using the Azure SQL Database integration.  


## What you need to do

If you’re using the Polling API to report data to the Azure SQL Database integration, we recommend that you migrate to the Azure Monitor integration. 

You can access the Azure monitoring integration by going to <DNT>**one.newrelic.com > Infrastructure > Azure**</DNT>. Once you’ve enabled the Azure monitoring integration, go to <DNT>**Limit resource types**</DNT> and set it to <DNT>**microsoft.Sql/servers/databases**</DNT>.

If there are alerts/dashboards that use metrics from the Azure SQL database monitoring polling API, replace them with metrics from the Azure monitoring integration for them to continue working.

## Links to additional resources

For more on the New Relic Azure Monitor integration, [see our docs](https://docs.newrelic.com/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/).

