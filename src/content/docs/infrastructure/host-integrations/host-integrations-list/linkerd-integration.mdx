---
title: Linkerd integration
tags:
    - New Relic integrations
    - Linkerd integration
metaDescription: Use New Relic infrastructure agent to get a dashboard with metrics from your Linkerd.
freshnessValidatedDate: 2024-05-29
---

Our Linkerd integration is a service mesh for Kubernetes. It makes running services easier and safer by giving you runtime debugging, observability, reliability, and security—all without requiring any changes to your code.

<img
  title="Linkerd dashboard"
  alt="Linkerd dashboard"
  src="/images/infrastructure_screenshot_full-linkerd-dashboard.webp"
/>

<figcaption>
  After setting up our Linkerd integration, you'll see a dashboard for your Linkerd metrics.
</figcaption>

<Steps>
  <Step>
    ## Install the infrastructure agent [#infra-install]

    To use the Linkerd integration, you need to also [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) on the same host. The infrastructure agent monitors the host itself, while the integration you'll install in the next step extends your monitoring with Linkerd-specific data.
  </Step>

  <Step>
    ## Expose Linkerd metrics [#expose-linkerd-metrics]

    1. Use the following script to check all Linkerd pods:

       ```shell
           kubectl get pods -n <LINKERD_NAMESPACE>
       ```

       * Replace `LINKERD_NAMESPACE` with the actual namespace where your Linkerd pods are running.

    2. Next, make sure to send all metrics to Port 4191 for each Linkerd Pod:

       ```shell
           kubectl port-forward --address 0.0.0.0 -n <LINKERD_NAMESPACE> <LINKERD_POD_NAME> 4191:4191 &
       ```

       * Replace `LINKERD_NAMESPACE` with the actual namespace where your Linkerd pods are running and `LINKERD_POD_NAME` with the actual name of each Linkerd pod.
  </Step>

  <Step>
    ## Enable the Linkerd integration with nri-prometheus [#enable-linkerd]

    To set up the Linkerd integration, follow these steps:

    1. Create a file named `nri-prometheus-config.yml` in the integrations directory:
       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```
    2. Add the following snippet to your `nri-prometheus-config.yml` file to enable the agent to capture Linkerd data:

       ```yml
       integrations:
         - name: nri-prometheus
           config:
             # When standalone is set to false nri-prometheus requires an infrastructure agent to work and send data. Defaults to true 
             standalone: false

             # When running with infrastructure agent emitters will have to include infra-sdk 
             emitters: infra-sdk

             # The name of your cluster. It's important to match other New Relic products to relate the data.
             cluster_name: "YOUR_DESIRED_CLUSTER_NAME"

             targets:
               - description: Linkerd metrics list
                 urls: ["http://<ip-address>:4191/metrics","http://<ip-address>:9090/metrics"]

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
    ## Restart the New Relic infrastructure agent

    Restart your infrastructure agent.

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    In a couple of minutes, your application will send metrics to [one.newrelic.com](https://one.newrelic.com).  

  </Step>

  <Step>
    ## Find your data

    You can choose our pre-built dashboard template named `Linkerd` to monitor your Linkerd application metrics. Follow these steps to use our pre-built dashboard template:

    1. From [one.newrelic.com](https://one.newrelic.com), go to the <DNT>**+ Integrations & Agents**</DNT> page.
    2. Click on <DNT>**Dashboards**</DNT>.
    3. In the search bar, type `Linkerd`.
    4. When the Linkerd dashboard option appears, click to install it.

    Your Linkerd dashboard is considered a custom dashboard and can be found in the <DNT>**Dashboards**</DNT> UI. For docs on using and editing dashboards, see [our dashboard docs](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

    Here is a NRQL query to check the Linkerd downstream total connections:

    ```sql
    SELECT latest(process_virtual_memory_bytes)/(1024*1024) as 'Memory in MB' FROM Metric
    ```
  </Step>
</Steps>

## What's next?

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your dashboards display mode, or to add more content to your dashboard.
