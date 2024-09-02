---
title: Ray integration
tags:
   - Ray integration
   - New Relic integrations
metaDescription: Install our Ray dashboards and see your ray data in New Relic.
freshnessValidatedDate: never
---

Our Ray integration monitors the performance of your Ray, helping you diagnose and optimize the Ray clusters, ML tasks such as data preprocessing, distributed training, hyperparameter tuning, reinforcement learning, and model serving and scaling Python applications. Our Ray integration makes use of our infrastructure agent and NRI-Prometheus gives you a pre-built dashboard with your most important Ray metrics.

<img
  src="/images/infrastructure_screenshot-full_ray-dashboard.webp"
  title="Ray dashboard"
  alt="Ray dashboard"
/>

<figcaption>
  After setting up the integration with New Relic, see your data in dashboards like these, right out of the box.
</figcaption>

<Steps>
  <Step>
    ## Install the infrastructure agent

    To use the Ray integration, you need to first [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) on the same host. The infrastructure agent monitors the host itself, while the Ray integration extends your monitoring with data specific to Ray clusters.  

  </Step>

  <Step>
    ## Install the Prometheus integration

    1. Download the latest Prometheus release from the [Prometheus download page](https://prometheus.io/download/). Select the appropriate version for your operating system and architecture. For Linux, you'll likely choose the linux-amd64 version. Copy the download link for the tarball (`.tar.gz` file).

    2. Once Prometheus is downloaded, extract the download tar file:
       ```shell
       tar -xvzf <filename.tar.gz>
       ```

    3. Navigate to the extracted Prometheus folder and run the below command to start the Prometheus service:

       ```shell
       cd /DOWNLOADED-FOLDER/
       ```

       ```shell
       ./prometheus --config.file=/tmp/ray/session_latest/metrics/prometheus/prometheus.yml
       ```

    4. When Prometheus starts, it operates on port 9090. Navigate to the Prometheus web interface, select `Status` and click on the desired target to view the Ray metrics endpoint URLs, as shown below:
       `http://YOUR_DOMAIN:64415/metrics, http://YOUR_DOMAIN:44217/metrics, http://YOUR_DOMAIN:44227/metrics`
  </Step>

  <Step>
    ## Configure `nri-prometheus` for Ray [#configure]

    1. Create a file named `nri-prometheus-config.yml` in the following path:
       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Add the following snippet to your `nri-prometheus-config.yml` file that enables the agent to capture Ray data:
       ```yml
       integrations:
         - name: nri-prometheus
           config:
           standalone: false
           # Defaults to true. When standalone is set to `false`, `nri-prometheus` requires an infrastructure agent to send data.
           emitters: infra-sdk
           # When running with infrastructure agent emitters will have to include infra-sdk
           cluster_name: Ray_Metrics
           # Match the name of your cluster with the name seen in New Relic. 
           targets:
             - description: Ray_Metrics
               urls: ["http://<YOUR_HOST_IP>:64747/metrics", "http://<YOUR_HOST_IP>:44217/metrics", "http://<YOUR_HOST_IP>:44227/metrics"]
               # tls_config:
                 # ca_file_path: "/etc/etcd/etcd-client-ca.crt"
                 # cert_file_path: "/etc/etcd/etcd-client.crt"
                 # key_file_path: "/etc/etcd/etcd-client.key"
           verbose: false
           # Defaults to false. This determines whether or not the integration should run in verbose mode.
           audit: false
           # Defaults to false and does not include verbose mode. Audit mode logs the uncompressed data sent to New Relic and can lead to a high log volume.
           # scrape_timeout: "YOUR_TIMEOUT_DURATION"
           # `scrape_timeout` is not a mandatory configuration and defaults to 30s. The HTTP client timeout when fetching data from endpoints.
           scrape_duration: "5s"
           # worker_threads: 4
           # `worker_threads` is not a mandatory configuration and defaults to `4` for clusters with more than 400 endpoints. Slowly increase the worker thread until scrape time falls between the desired `scrape_duration`. Note: Increasing this value too much results in huge memory consumption if too many metrics are scraped at once.
           insecure_skip_verify: false
           # Defaults to false. Determins if the integration should skip TLS verification or not.
           timeout: 10s
       ```
  </Step>

  <Step>
    ## Forward Ray logs to New Relic [#Forward-log]

    You can use our log forwarding capability to forward Ray logs to New Relic.

    1. Edit the log file named `logging.yml` located at the following path:

       ```shell
       cd /etc/newrelic-infra/logging.d/
       ```

    2. Add the following script to the `logging.yml` file:
       ```yml
       - name: dashboard.log
         file: /tmp/ray/session_latest/logs/dashboard.log
         attributes:
           logtype: ray_dashboard_logs
       - name: monitor.log
         file: /tmp/ray/session_latest/logs/monitor.log
         attributes:
           logtype: ray_monitor_logs
       - name: log_monitor.log
         file: /tmp/ray/session_latest/logs/log_monitor.log
         attributes:
           logtype: ray_log_monitor_logs
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
    ## View your Ray metrics in New Relic [#view-data]

    Once you've completed the setup above, you can view your metrics using our pre-built dashboard template. To access this dashboard:

    1. Go to **[one.newrelic.com](https://one.newrelic.com/) > + Integrations & Agents**.
    2. Click on the **Dashboards** tab.
    3. In the search box, type `Ray`.
    4. Select it and click **Install**.

    To instrument the <DNT>Apache Druid</DNT> quickstart and to see metrics and alerts, you can also follow our [Ray quickstart page](https://newrelic.com/instant-observability/ray) by clicking on the **Install now** button.

    Here's an example query to check active nodes in your Ray cluster:

    ```sql
    SELECT latest(ray_cluster_active_nodes) FROM Metric
    ```
  </Step>
</Steps>

## What's next?

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your dashboards display mode, or to add more content to your dashboard.
