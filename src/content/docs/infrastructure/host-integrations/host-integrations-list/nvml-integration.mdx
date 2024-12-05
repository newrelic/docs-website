---
title: NVML integration
tags:
  - NVML integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with nvml metrics.
freshnessValidatedDate: never
---

Integrating NVML with New Relic provides valuable insights into the GPU utilization and performance metrics of your applications and systems, facilitating resource optimization, performance bottleneck identification, and the maintenance of overall stability and efficiency in your environment.

<img
  title="NVML dashboard"
  alt="nvml dashboard"
  src="/images/infrastructure_screenshot-full_nvml-dashboard.webp"
/>

<figcaption>
  After setting up the NVML integration with New Relic, see your data in a dashboard right out of the box.
</figcaption>

## Set up the NVML integration

Complete the following steps to set up the NVML integration:

<Steps>
  <Step>
    ## Install the infrastructure agent

    To use the NVML integration, you need to first [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) on the same host. The infrastructure agent monitors the host itself, while the nvml integration extends your monitoring with data specific to your gpu clusters.
  </Step>

  <Step>
    ## Use NRI-Flex to capture metrics

    Flex comes bundled with the New Relic infrastructure agent. You need to configure NRI-Flex for nvml and create a flex configuration file. Follow these steps:

    1. Create a file named `nvml-config.yml` on the path below:
       * for Linux, `/etc/newrelic-infra/integrations.d`
       * for windows, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`
    2. Use the below snippet to update your configuration file named `nvml-config.yml`

       ```yml
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: NVMLexample
             apis:
               - name: nvml
                 file: <PATH_TO_METRIC_CSV_FILE>
       ```
  </Step>

  <Step>
    ## Restart the infrastructure agent [#restart-infra]

    Use the instructions in our [infrastructure agent docs](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) to restart your infrastructure agent. This is a basic command that should work for most people:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## View your nvml metrics in New Relic [#view-data]

    Once you've completed the setup above, you can view your metrics using our pre-built dashboard template. To access this dashboard:

    1. Go to **[one.newrelic.com](https://one.newrelic.com/) > + Integrations & Agents**.
    2. Click on the **Dashboards** tab.
    3. In the search box, type `nvml`.
    4. Select it and click **Install**.

    To instrument the nvml quickstart and to see metrics and alerts, you can also follow our [NVML quickstart page](https://newrelic.com/instant-observability/nvml) by clicking on the `Install now` button.

    Here's an example query to check the number of devices in GPU:

    ```sql
    SELECT latest(temperature_gpu) FROM nvmlSample TIMESERIES 
    ```
  </Step>
</Steps>

## What's next? [#whats-next]

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your <InlinePopover type="dashboards"/> display mode, or to add more content to your dashboard.
