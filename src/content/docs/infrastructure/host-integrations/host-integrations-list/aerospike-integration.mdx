---
title: Aerospike platform integration
tags:
    - New Relic integrations
    - Aerospike
metaDescription: Use New Relic's infrastructure monitoring to get a dashboard with metrics from your Aerospike platform. 

freshnessValidatedDate: never
---

Our Aerospike integration monitors the performance of your Aerospike data platform, helping you diagnose issues in your application and optimize your code. Our Aerospike integration gives you a pre-built dashboard with your most important Aerospike app metrics.

<img
  title="aerospike dashboard"
  alt="A screenshot depicting an Aerospike pre-built dashboard"
  src="/images/infrastructure_screenshot-full_aerospike-dashboard.webp"
/>

<figcaption>
  After setting up the integration with New Relic, see your data in dashboards like these, right out of the box.
</figcaption>

<Steps>
  <Step>
    ## Install the infrastructure agent [#infra]

    To use the Aerospike integration, you need to first [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) on the same host. The infrastructure agent monitors the host itself, while the integration you'll install in the next step extends your monitoring with Aerospike-specific data.
  </Step>

  <Step>
    ## Install Aerospike integration

    1. To install nri-aerospike, use the following command:

       ```bash
       sudo apt-get install nri-aerospike
       ```

    2. Verify  `nri-aerospike` was successfully installed by:
       * Checking that <DNT>**Exporter**</DNT> is installed in the `/var/db/newrelic-infra/newrelic-integrations/bin` directory.
       * Checking for a configuration file in the `/etc/newrelic-infra/integrations.d` directory
  </Step>

  <Step>
    ## Configure the integration:

    1. Rename the sample configuration file from `aerospike-config.yml.sample` to `aerospike-config.yml`:

       ```shell
       sudo cp aerospike-config.yml.sample aerospike-config.yml
       ```

    2. Edit the config file as needed. The following is as basic example of a configuration file:

       ```yml
       integrations:
         - name: nri-aerospike
           config:
             # API URL of the aerospike service
             aerospike_db_host: localhost
             aerospike_db_port: 3000

             # Port to expose scrape endpoint on, If this is not provided a random port will be used to launch the exporter
             exporter_port: 9145

             # Cluster name is used on the aerospike.prometheus.json.template - 
             # all the metrics captured by nri-prometheus will be categorized under this cluster name
             aerospike_cluster_name: YOUR_DESIRED_CLUSTER_NAME
             scrape_timeout: 5s
      
             label_type: development
             label_source: aerospike

             exporter_files_path: /tmp
       ```

    After you've successfully configured `nri-aerospike`, you can see the list of monitored Aerospike metrics in `http://localhost:9145/metrics`.
  </Step>

  <Step>
    ## Find your data [#find-data]

    To get your Aerospike dashboard:

    1. From [one.newrelic.com](https://one.newrelic.com), go to the [<DNT>**Integrations & Agents**</DNT> page](https://one.newrelic.com/marketplace).
    2. Click on <DNT>**Dashboards**</DNT>.
    3. In the search bar, type `Aerospike`.
    4. The Aerospike dashboard should appear. Click on it to install it.

    Your Aerospike dashboard is considered a custom dashboard and can be found in the <DNT>**Dashboards**</DNT> UI. For docs on using and editing dashboards, see [our dashboard docs](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

    This integration reports data in the form of our [infrastructure agent](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data/#infrastructure-events).

    Here's an example NRQL query checking the percentage of memory capacity free on the namespace:

    ```sql
    FROM Metric 
    SELECT latest (aerospike_namespace_memory_free_pct)
    ```
  </Step>
</Steps>

## What's next? [#whats-next]

To learn more about querying your data and creating custom dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)
* [Introduction to custom dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)
