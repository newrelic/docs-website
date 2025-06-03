---
title: Nuxt.js integration
tags:
  - nuxt.js integration
  - nuxt integration
  - new relic integrations
metaDescription: "Learn how to query your New Relic data with NRQL, our SQL-like query language."
redirects:
  - /docs/infrastructure/host-integrations/host-integrations-list/browser-monitoring-integrations/nuxt-js-integration
freshnessValidatedDate: never
---

With our Nuxt.js dashboard, you can easily track your application error rate, initial page load average, route changes, throughput, and page views with JavaScript errors. Built with our infrastructure agent and our Vue <InlinePopover type="browser"/>, the Nuxt.js dashboard lets you view critical information all in one place.

<img
  title="Nuxt.js dashboard"
  alt="A screenshot of a Nuxt.js dashboard"
  src="/images/infrastructure_screenshot-crop_nuxtjs-dashboard.webp"
/>

## 1. Install infrastructure agent [#infra]

Before you can get your data into New Relic, you should first install the infrastructure agent (if you have it installed, you can skip this step). This enables New Relic to collect data so that application error rates, throughput, and page views with JavaScript errors can appear in dashboards. This step is optional, but we strongly recommend you install the infrastructure agent to see all your host and browser monitoring data.

There are two ways to install the infrastructure agent:

* Follow the [guided install](https://one.newrelic.com/marketplace?state=607786be-99a9-fa66-4b67-3f7f3b9551d4) to instrument our system with the infrastructure agent.
* [Install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux) using the command line.

## 2. Install Vue browser monitoring [#install]

After installing the infrastructure agent, the next step is to install the browser monitor. From <DNT>**[one.newrelic.com](https://one.newrelic.com)**</DNT>:

1. Click <DNT>**Integrations & Agents**</DNT>
2. Click <DNT>**Browser & mobile**</DNT>
3. Click <DNT>**Vue**</DNT>
   From there, follow the instructions to generate the JavaScript code snippet used in step 3. While the browser monitoring agent and the Vue integration provide essentially the same service, the Vue integration is specific to JavaScript (which is the framework of Nuxt.js). If you'd like to monitor other, non JavaScript-specific services, you should use the browser monitoring agent.

## 3. Configure the integration [#config]

To add the JavaScript snippet in the Nuxt.js application:

1. Create a JavaScript file in the <DNT>**`static`**</DNT> folder of your nuxt.js application:
   ```bash
   touch <FILENAME>.js
   ```
2. Create a function in the newly created JavaScript file and add the generated script within the function:
   ```js
   function FUNCTION_NAME() {
     // GENERATED SCRIPT IS PASTED HERE BY REMOVING OPENING AND CLOSING <script> TAGS>
   }
   FUNCTION_NAME();
   ```
3. Copy the code snippet below and paste it in `HEADER tag` of `nuxt.config.js` file and update function name and file name:
   ```js
     __dangerouslyDisableSanitizers: ["script"],
     script: [
       {
         hid: "<FUNCTION_NAME>",
         src: "/<FILENAME>.js",
         defer: true,
         type: "text/javascript",
         charset: "utf-8",
       },
     ],
   ```
4. Restart your application.

## 4. Monitor your application on one.newrelic.com [#monitor]

Now, you should be able to see your application on <DNT>**[one.newrelic.com](https://one.newrelic.com)**</DNT> by selecting <DNT>**Browser**</DNT> from the navigation bar. Choose your application to see all the metrics which are captured on the <DNT>**one.newrelic.com**</DNT> platform. You can also view the data with NRQL using the following query:

```sql
SELECT firstPaint 
FROM PageView
```

## What's next?

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust the display mode for your <InlinePopover type="dashboards"/>, or to add more content to your dashboards.
