---
title: Apache Druid integration
tags:
  - Druid integration
  - apache druid integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with druid metrics.
freshnessValidatedDate: 2024-04-21
---

Integrating Apache Druid with New Relic enhances your ability to monitor, analyze, and optimize the performance of your Druid clusters.  The Apache Druid integration provides powerful monitoring and alerting features so you can ensure the reliability and efficiency of your Druid-based analytics platform.

<img
  title="Apache Druid dashboard"
  alt="Apache Druid dashboard"
  src="/images/infrastructure_screenshot-full_apache-druid-dashboard.webp"
/>

<figcaption>
  After setting up the Apache Druid integration with New Relic, see your data in a dashboard right out of the box.
</figcaption>

## Set up the Apache Druid integration

Complete the following steps to set up the Apache Druid integration:

<Steps>
  <Step>
    ## Install the infrastructure agent

    To use the Apache Druid integration, you need to first [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) on the same host. The infrastructure agent monitors the host itself, while the Apache Druid integration extends your monitoring with data specific to your Druid clusters.
  </Step>

  <Step>
    ## Expose Druid metrics using Prometheus Emitter [#Expose]

    1. Add `prometheus.emitter` to the end of the extensions load list in your `apache-druid-$version/conf/druid/single-server/micro-quickstart/_common/common.runtime.properties` file:

       ```ini
       druid.extensions.loadList=["druid-hdfs-storage", "druid-kafka-indexing-service", "druid-datasketches", "druid-multi-stage-query", "prometheus-emitter"]
       ```

    2. In the file paths listed in the left column, add the code snippets listed in the right columns.

       <table>
         <thead>
           <tr>
             <th>
               Filepath
             </th>

             <th>
               Code snippet
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               `PATH/TO/broker/runtime.properties`
             </td>

             <td>
               ```ini
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19091
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/coordinator-overlord/runtime.properties`
             </td>

             <td>
               ```ini
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19092
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/historical/runtime.properties`
             </td>

             <td>
               ```ini
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19093
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/middleManager/runtime.properties`
             </td>

             <td>
               ```ini
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19094
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/router/runtime.properties`
             </td>

             <td>
               ```ini
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19095
               ```
             </td>
           </tr>
         </tbody>
       </table>
  </Step>

  <Step>
    ## Install the Prometheus Emitter Extension [#prometheus-emitter-extension]

    1. Run the following commands to create a folder named `prometheus-emitter` within the `extensions` folder directory of your Apache Druid setup:
       ```shell
       cd apache-druid-$version/extensions/
       ```
       ```shell
       sudo mkdir prometheus-emitter
       ```
    2. Navigate to the druid download directory and run the following command to create jar files that the server calls on start up:
       ```shell
       sudo java \
         -cp "lib/*" \
         -Ddruid.extensions.directory="extensions" \
         -Ddruid.extensions.hadoopDependenciesDir="hadoop-dependencies" \
         org.apache.druid.cli.Main tools pull-deps \
         --no-default-hadoop \
         -c "org.apache.druid.extensions.contrib:prometheus-emitter:24.0.0"
       ```
  </Step>

  <Step>
    ## Configure `nri-prometheus` for Apache Druid [#configure]

    1. Create a file named `nri-prometheus-config.yml`:
       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```

    2. Add the following snippet to your `nri-prometheus-config.yml` file to enable the capture of Apache Druid data:

       ```yml
       integrations:
         - name: nri-prometheus
           config:
             # When standalone is set to false nri-prometheus requires an infrastructure agent to work and send data. Defaults to true
             standalone: false

             # When running with infrastructure agent emitters will have to include infra-sdk
             emitters: infra-sdk

             # The name of your cluster. It's important to match other New Relic products to relate the data.
             cluster_name: "Apache-druid"

             targets:
               - description: Secure etcd example
                 urls: ["http://<YOUR_HOST_IP>:19091/metrics","http://<YOUR_HOST_IP>:19092/metrics", "http://<YOUR_HOST_IP>:19093/metrics","http://<YOUR_HOST_IP>:19094/metrics","http://<YOUR_HOST_IP>:19095/metrics"]
             #    tls_config:
             #      ca_file_path: "/etc/etcd/etcd-client-ca.crt"
             #      cert_file_path: "/etc/etcd/etcd-client.crt"
             #      key_file_path: "/etc/etcd/etcd-client.key"

             # Whether the integration should run in verbose mode or not. Defaults to false.
             verbose: false

             # Whether the integration should run in audit mode or not. Defaults to false.
             # Audit mode logs the uncompressed data sent to New Relic. Use this to log all data sent.
             # It does not include verbose mode. This can lead to a high log volume, use with care.
             audit: false

             # The HTTP client timeout when fetching data from endpoints. Defaults to "5s" if it is not set.
             # This timeout in seconds is passed as well as a X-Prometheus-Scrape-Timeout-Seconds header to the exporters
             # scrape_timeout: "5s"

             # Length in time to distribute the scraping from the endpoints. Default to "30s" if it is not set.
             scrape_duration: "5s"

             # Number of worker threads used for scraping targets.
             # For large clusters with many (>400) endpoints, slowly increase until scrape
             # time falls between the desired `scrape_duration`.
             # Increasing this value too much will result in huge memory consumption if too
             # many metrics are being scraped.
             # Default: 4
             # worker_threads: 4

             # Whether the integration should skip TLS verification or not. Defaults to false.
             insecure_skip_verify: false

           timeout: 10s
       ```
  </Step>

  <Step>
    ## Forward Druid logs to New Relic

    1. Edit the log file named `logging.yml` located at the following path:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Add the following snippet to the `logging.yml` file:
       ```yml
       - name: druid-logs
         file: /home/<Druid-Download Directory>/log/*.log
         attributes:
             logtype: apache-druid
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
    ## View your Druid metrics in New Relic [#view-data]

    Once you've completed the setup above, you can view your metrics using our pre-built dashboard template. To access this dashboard:

    1. Go to **[one.newrelic.com](https://one.newrelic.com/) > + Integrations & Agents**.
    2. Click on the **Dashboards** tab.
    3. In the search box, type `Apache druid`.
    4. Select it and click **Install**.

    To instrument the Apache Druid quickstart and to see metrics and alerts, you can also follow our [Apache Druid quickstart page](https://newrelic.com/instant-observability/apache-druid) by clicking on the `Install now` button.

    Here's an example query to check the average Druid segment size:

    ```sql
    SELECT average(druid_segment_size) AS  'MiB' FROM Metric SINCE 30 MINUTES AGO
    ```
  </Step>
</Steps>

## What's next? [#whats-next]

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your <InlinePopover type="dashboards"/> display mode, or to add more content to your dashboard.
