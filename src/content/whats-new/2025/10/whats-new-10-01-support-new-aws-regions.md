---
title: "Added Support For New Regions For Polling and Metric Stream Integration"
summary: "Extended support for 4 new aws regions (mx-central-1, ap-east-2, ap-southeast-5, ap-southeast-7) in Infrastructre monitoring in AWS Polling and Metric stream integration."
releaseDate: "2025-10-01"
---

# Expanded AWS Region Support for Infrastructure Monitoring

We are excited to announce the expansion of our AWS infrastructure monitoring capabilities. Support for both our **Polling** and **Metric Stream** integrations has been extended to include four new AWS regions. This update allows you to gain complete visibility into your AWS services across an even wider geographical footprint, ensuring you have a comprehensive view of your entire infrastructure. 🗺️

***

## Changes

You can now monitor resources in four additional AWS regions, closing potential gaps in your observability strategy. By enabling these new regions in your integration settings, you can seamlessly pull metrics, events, and inventory data into your dashboards, alerts, and analysis tools.


This enhancement provides several key benefits:

1.  **Eliminate Blind Spots**
    * Gain full visibility into your applications and services deployed in the newly supported regions. Ensure consistent monitoring coverage across your entire global AWS deployment.
2.  **Unified Observability**
    * Integrate data from these new regions into a single, unified platform. View, query, and alert on performance metrics from all your environments without needing to switch between different tools or contexts.

The newly supported regions are detailed below:

| Region Name | Region Code | Identifier |
| :--- | :--- | :--- |
| Asia Pacific (Malaysia) | `ap-southeast-5` | `AP_SOUTHEAST_5` |
| Asia Pacific (Thailand) | `ap-southeast-7` | `AP_SOUTHEAST_7` |
| Asia Pacific (Taipei) | `ap-east-2` | `AP_EAST_2` |
| Mexico (Central) | `mx-central-1` | `MX_CENTRAL_1` |

***

### Getting Started

To begin monitoring resources in these new regions, simply update your existing AWS integration configuration:

1.  Navigate to your AWS cloud integration settings.
2.  Select the account you wish to modify.
3.  In the configuration settings for either Polling or Metric Stream, find the region list and select the newly available regions you want to monitor. ![AWS Region Selection](/images/aws-regions-selection.png "AWS Region Selection")
4.  For Auto Discovery, find the region list under manage integration and select newly available regions.
5.  Save your updated configuration.

Data from the selected regions will begin populating in your account shortly after the changes are saved. ✨
