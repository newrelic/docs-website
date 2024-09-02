---
title: SonarQube monitoring integration
tags:
    - New Relic integrations
    - SonarQube
metaDescription: Use New Relic browser monitoring to get a dashboard with metrics from your SonarQube.
redirects: 
freshnessValidatedDate: 2023-06-28
---

Our SonarQube integration monitors the performance of your SonarQube application, helping you diagnose and optimize the code. Our SonarQube integration makes use of our infrastructure agent, PosgreSQL integration, NRI-Prometheus, and NRI-JMX and gives you a pre-built dashboard with your most important SonarQube metrics.

<img
  title="New Relic SonarQube dashboard"
  alt="New Relic SonarQube dashboard"
  src="/images/infrastructure_screenshot_full-sonarqube-dashboard.webp"
/>

<figcaption>
  After setting up our SonarQube integration, we give you a dashboard for your SonarQube metrics.
</figcaption>

<Steps>
  <Step>
    ## Install the infrastructure agent [#infra-install]

    To use the SonarQube integration, you need to first [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) on the same host. All our on-host integrations require the infrastructure agent, which helps expose and report metrics to New Relic.  

  </Step>

  <Step>
    ## Install the PostgreSQL integration

    To use the SonarQube integration, you need to first install our PostgreSQL integration.

    1. Check out our PostgreSQL integration requirements in our [documentation](/docs/infrastructure/host-integrations/host-integrations-list/postgresql/postgresql-integration/)  before installing the integration. Confirm your compatibility, then return to this doc.
    2. Open PostgreSQL Quickstart page [PostgreSQL quickstart installation](https://newrelic.com/instant-observability/postresql).
    3. Click  <DNT>**Install now**</DNT> to start the PostgreSQL quickstart installation.
  </Step>

  <Step>
    ## Configure NRI-Prometheus

    1. Run the following command to create a NRI-Prometheus config file:

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```
    2. Paste the following snippet into the new config file. Be sure to update the `cluster_name` and `urls` with your relevant fields:

       ```yml
       integrations:
         - name: nri-prometheus
           config:
             # When standalone is set to false nri-prometheus requires an infrastructure agent to work and send data. Defaults to true 
             standalone: false

             # When running with infrastructure agent emitters will have to include infra-sdk 
             emitters: infra-sdk

             # The name of your cluster. It's important to match other New Relic products to relate the data.
             cluster_name: "YOUR_CLUSTER_NAME"

             targets:
               - description: Sonarqube metrics list
                 urls: ["http://user_name:password@YOUR_HOST_IP:9000/api/monitoring/metrics"]

             #     tls_config:
             #     ca_file_path: "/etc/etcd/etcd-client-ca.crt"
             #     cert_file_path: "/etc/etcd/etcd-client.crt"
             #      key_file_path: "/etc/etcd/etcd-client.key"

             # Whether the integration should run in verbose mode or not. Defaults to false
             verbose: false

             # Whether the integration should run in audit mode or not. Defaults to false.
             # Audit mode logs the uncompressed data sent to New Relic. Use this to log all data sent.
             # It does not include verbose mode. This can lead to a high log volume, use with care
             audit: false

             # The HTTP client timeout when fetching data from endpoints. Defaults to 30s.
             # scrape_timeout: "30s"

             # Length in time to distribute the scraping from the endpoints
             scrape_duration: "5s"

             # Number of worker threads used for scraping targets.
             # For large clusters with many (&gt;400) endpoints, slowly increase until scrape
             # time falls between the desired `scrape_duration`.
             # Increasing this value too much will result in huge memory consumption if too
             # many metrics are being scraped.
             # Default: 4
             # worker_threads: 4

             # Whether the integration should skip TLS verification or not. Defaults to false
             insecure_skip_verify: true
           timeout: 10s
       ```
  </Step>

  <Step>
    ## Install and configure the JMX integration

    To use the SonarQube integration, you need to also [install our JMX monitoring integration](/docs/infrastructure/host-integrations/host-integrations-list/jmx-monitoring-install/). The JMX integration scrapes SonarQube data, which we will later turn into dashboards and queryable data.

    1. [Install our JMX monitoring integration](/docs/infrastructure/host-integrations/host-integrations-list/jmx-monitoring-install/).

    2. Add the following code snippet to `/opt/sonarqube/conf/sonar.properties`:

       ```yml
       # SonarQube Web Server JMX configuration.
         sonar.web.javaOpts=-Dcom.sun.management.jmxremote \
                         -Dcom.sun.management.jmxremote.port=9010 \
                         -Dcom.sun.management.jmxremote.authenticate=false \
                         -Dcom.sun.management.jmxremote.ssl=false

       # SonarQube Compute Engine JMX configuration.
         sonar.ce.javaOpts=-Dcom.sun.management.jmxremote \
                         -Dcom.sun.management.jmxremote.port=9011 \
                         -Dcom.sun.management.jmxremote.authenticate=false \
                         -Dcom.sun.management.jmxremote.ssl=false
       ```

    3. Add the following code snippet to `/etc/newrelic-infra/integrations.d/jvm-sonarqube-web-metrics.yml/`:
       ```yml
       collect:
         - domain: SonarQube
           event_type: JVMSampleSonarQubeWebMetrics
           beans:
             - query: name=AsyncExecution
               attributes:
                 - QueueSize
                 - WorkerCount
                 - LargestWorkerCount
             - query: name=Database
               attributes:
                 - MigrationStatus
                 - PoolActiveConnections
                 - PoolMaxActiveConnections
                 - PoolIdleConnections
                 - PoolMaxIdleConnections
                 - PoolMinIdleConnections
                 - PoolInitialSize
                 - PoolMaxWaitMillis
                 - PoolRemoveAbandoned
                 - PoolRemoveAbandonedTimeoutSeconds
             - query: name=SonarQube
               attributes:
                 - Version
                 - ServerId
                 - LogLevel
       ```

    4. Add the following code snippet to `/etc/newrelic-infra/integrations.d/jvm-sonarqube-compute-engine-metrics.yml`:

       ```yml
       collect:
         - domain: SonarQube
           event_type: JVMSampleSonarQubeComputeEngineMetrics
           beans:
             - query: name=ComputeEngineDatabaseConnection
               attributes:
                 - PoolInitialSize
                 - PoolActiveConnections
                 - PoolMaxActiveConnections
                 - PoolIdleConnections
                 - PoolMaxIdleConnections
                 - PoolMinIdleConnections
                 - PoolMaxWaitMillis
                 - PoolRemoveAbandoned
                 - PoolRemoveAbandonedTimeoutSeconds
             - query: name=ComputeEngineTasks
               attributes:
                 - PendingCount
                 - LongestTimePending
                 - InProgressCount
                 - ErrorCount
                 - SuccessCount
                 - ProcessingTime
                 - WorkerMaxCount
                 - WorkerCount
                 - WorkerUuids
                 - EnabledWorkerUuids
       ```

    5. Add the following code snippet to `/etc/newrelic-infra/integrations.d/jmx-sonarqube-compute-engine-config.yml`:
       ```yml
       integrations:
         - name: nri-jmx
           env:
             COLLECTION_FILES: /etc/newrelic-infra/integrations.d/jvm-sonarqube-compute-engine-metrics.yml
             JMX_HOST: <YOUR_HOST>
             JMX_PASS: admin
             JMX_PORT: 9010
             JMX_USER: admin
             CONNECTION_URL: service:jmx:rmi://<YOUR_IP>:9010/jndi/rmi://<YOUR_IP>:9010/jmxrmi
             REMOTE_MONITORING: "true"
           interval: 15s
           labels:
             env: staging
       ```

    6. Add the following code snippet to `/etc/newrelic-infra/integrations.d/jmx-sonarqube-web-config.yml`:

       ```yml
       integrations:
         - name: nri-jmx
           env:
             COLLECTION_FILES: /etc/newrelic-infra/integrations.d/jvm-sonarqube-web-metrics.yml
             JMX_HOST: <YOUR_HOST>
             JMX_PASS: admin
             JMX_PORT: 9011
             JMX_USER: admin
             CONNECTION_URL: service:jmx:rmi://<YOUR_IP>:9011/jndi/rmi://<YOUR_IP>:9011/jmxrmi
             REMOTE_MONITORING: "true"
           interval: 15s
           labels:
             env: staging
       ```
  </Step>

  <Step>
    ## Forward SonarQube logs to New Relic

    Follow these steps to forward SonarQube logs to New Relic:

    1. Create a log file named `logging.yml` in the following path:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Add the following script to the `logging.yml` file:

       ```yml
       logs:
         - name: sonar_logs
           file: /opt/sonarqube/logs/sonar.log
           attributes: 
             logtype: sonar_logs
         - name: ce_logs
           file: /opt/sonarqube/logs/ce.log
           attributes:
             logtype: sonar_ce_logs
         - name: es_logs
           file: /opt/sonarqube/logs/es.log
           attributes: 
             logtype: sonar_es_logs
         - name: web_logs
           file: /opt/sonarqube/logs/web.log
           attributes:
             logtype: sonar_web_logs
       ```
  </Step>

  <Step>
    ## Restart the New Relic infrastructure agent

    Restart your infrastructure agent:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    In a couple of minutes, your application will send metrics to [one.newrelic.com](https://one.newrelic.com).  

  </Step>

  <Step>
    ## Find your data

    You can choose our pre-built dashboard template named `SonarQube` to monitor your SonarQube application metrics. Follow these steps to use our pre-built dashboard template:

    1. From [one.newrelic.com](https://one.newrelic.com), go to the <DNT>**+ Integrations & Agents**</DNT> page.
    2. Click on <DNT>**Dashboards**</DNT>.
    3. In the search bar, type `sonarqube`.
    4. The SonarQube dashboard should appear. Click on it to install it.

    Your SonarQube dashboard is considered a custom dashboard and can be found in the <DNT>**Dashboards**</DNT> UI. For docs on using and editing dashboards, see [our dashboard docs](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

    Here's a few example NRQL queries for Postfix data:

    <CollapserGroup>
      <Collapser
        id="webstatus"
        title="Check your SonarQube web status"
      >
        ```sql
        SELECT latest(sonarqube_web_uptime_minutes) 
        AS 'SonarQube Web Uptime (minutes)' 
        FROM Metric
        ```
      </Collapser>

      <Collapser
        id="jvm-metrics"
        title="View the JVM metrics"
      >
        ```sql
        SELECT latest(PoolIdleConnections) FROM JVMSampleSonarQubeWebMetrics
        ```
      </Collapser>
    </CollapserGroup>
  </Step>
</Steps>

## What's next?

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your dashboards display mode, or to add more content to your dashboard.
