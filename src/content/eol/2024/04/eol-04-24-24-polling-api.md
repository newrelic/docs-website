---
title: "End of life for Azure SQL database integration polling API"
summary: "Azure is deprecating the SDK the polling API uses and will no longer be providing critical updates to this API, creating security concerns moving forward."
publishDate: '2024-04-22'
eolEffectiveDate: '2024-12-01'
---

On December 1, 2024, New Relic will end support for the Azure SQL database integration polling API, because Azure is deprecating the SDK that the polling API uses. You don't need to take action unless you capture data with the polling API and you're using the Azure SQL Database integration.  

## What you need to do

If you’re using the Polling API to report data to the Azure SQL Database integration, we recommend that you migrate to the Azure Monitor integration. 

You can access the Azure monitoring integration by going to **one.newrelic.com > Infrastructure > Azure**. Once you’ve enabled the Azure monitoring integration, go to **Limit resource types** and set it to **microsoft.Sql/servers/databases**.

If you have alerts or dashboards that use metrics from the Azure SQL database monitoring polling API, replace them with metrics from the Azure monitoring integration.

## Links to additional resources

For more on the New Relic Azure monitor integration, [see our docs](https://docs.newrelic.com/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/).

