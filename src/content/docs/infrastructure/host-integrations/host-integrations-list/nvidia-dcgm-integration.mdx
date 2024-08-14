---
title: NVIDIA DCGM integration
tags:
  - NVIDIA integration
  - DCGM integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with DCGM metrics.
freshnessValidatedDate: 2023-10-30
---

Our NVIDIA DCGM integration assists you in monitoring the status of GPUs. This integration leverages our infrastructure agent and the Prometheus remote write integration, which is seamlessly integrated with NVIDIA's SMI utility. It provides you with a pre-built dashboard containing crucial DCGM metrics, including GPU utilization, XID error counts, clock and performance states, temperature, and power usage.

<img
  title="NVIDIA DCGM dashboard"
  alt="NVIDIA DCGM dashboard"
  src="/images/infrastructure_screenshot-full_nvidia-dcgm-dashboard.webp"
/>

<figcaption>
  After you set up our NVIDIA DCGM integration, we give you a dashboard for your DCGM metrics.
</figcaption>

## Install the infrastructure agent [#infra]

To get data into New Relic, install our infrastructure agent. Our infrastructure agent collects and ingests data so you can keep track of your DCGM performance.

You can install the infrastructure agent two different ways:

* Our [guided install](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) is a CLI tool that inspects your system and installs the infrastructure agent alongside the application monitoring agent that best works for your system. To learn more about how our guided install works, check out our [Guided install overview](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* If you'd rather install our infrastructure agent manually, you can follow a tutorial for manual installation for [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/).

## Configure the DCGM exporter [#configure-exporter]

1. In your terminal, clone the `dcgm-exporter` repository:
   ```shell
   git clone https://github.com/NVIDIA/dcgm-exporter
   ```
2. In the cloned repository, navigate to the `dcgm-exporter` directory:
   ```shell
   cd dcgm-exporter
   ```
3. Install necessary binaries:

   ```shell
   make binary
   ```

   ```shell
   sudo make install
   ```
4. Start the `dcgm-exporter`:
   ```shell
   dcgm-exporter &
   ```
5. See the details of your DCGM metrics:
   ```shell
   curl localhost:9400/metrics
   ```

## NVIDIA-DCGM configuration on Prometheus [#configure-prometheus]

Prometheus is an open-source monitoring and alerting tool that can be used to monitor NVIDIA GPUs using the NVIDIA-DCGM exporter. To configure Prometheus to monitor DCGM metrics, follow these steps:

1. Visit the [Prometheus download page](https://prometheus.io/download/) to find the latest release.
2. Select the appropriate version for your operating system and architecture. For Linux, you'll likely choose the linux-amd64 version. Copy the download link for the tarball (`.tar.gz` file).
3. Once Prometheus is downloaded, untar the download tar file:
   ```shell
   tar -xvzf <filename.tar.gz>
   ```
4. Navigate to the downloaded Prometheus folder:
   ```shell
   cd /DOWNLOADED-FOLDER/
   ```
5. Open your `prometheus.yml` file and add the following lines:
   ```yml
   ---
   scrape_configs:
     - job_name: NVIDI
       static_configs:
         - targets:['localhost:9400']
   ```
6. Start Prometheus:
   ```shell
   ./prometheus --config.file=prometheus.yml
   ```

## Install Prometheus remote write agent for NVIDIA-DCGM [#install-remote-write]

After setting up Prometheus configuration, you have to send NVIDIA DCGM metrics to Prometheus. Later, to integrate Prometheus metrics with New Relic, you can leverage the Prometheus remote write agent. Simply follow the [Prometheus remote write setup launcher in the UI](https://one.newrelic.com/catalog-pack-details?state=04de330d-ad8b-b61c-68e2-ad852c2ca1d4).

## Restart the New Relic infrastructure agent [#restart-infra-agent]

Before you can start reading your data, use the instructions in our [infrastructure agent docs](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) to restart your infrastructure agent.

```shell
sudo systemctl restart newrelic-infra.service
```

## View your DCGM metrics in New Relic [#view-data]

Once you've completed the setup above, you can view your metrics using our pre-built dashboard template named nvidia-dcgm. To access this dashboard:

1. Go to <DNT>**[one.newrelic.com](https://one.newrelic.com/) > + Integrations & Agents**</DNT>.
2. Click on the <DNT>**Dashboards**</DNT> tab.
3. In the search box, type "nvidia-dcgm".
4. Select it and click <DNT>**Install**</DNT>.

To instrument the `nvidia-dcgm` quickstart and to see metrics and alerts, you can also follow our [Nvidia-DCGM quickstart page](https://newrelic.com/instant-observability/nvidia-dcgm) by clicking on the **Install now** button.

Here are some example queries:

<DNT>**Example:**</DNT> view the count of the device GPU temperature

```sql
SELECT latest(DCGM_FI_DEV_GPU_TEMP) FROM Metric WHERE metricName LIKE 'DCGM_FI_DEV_GPU_TEMP' TIMESERIES
```

## What's next? [#whats-next]

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your <InlinePopover type="dashboards"/> display mode, or to add more content to your dashboard.
