---
title: Zookeeper monitoring integration
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: An introduction to New Relic's open-source ZooKeeper integration.
redirects:
  - /docs/zookeeper-open-source-integration
  - /docs/integrations/host-integrations/host-integrations-list/zookeeper-integration
freshnessValidatedDate: never
---

Our Apache ZooKeeper integration monitors the performance of your ZooKeeper clusters, helping you manage and synchronize your distributed systems. Our Apache ZooKeeper integration gives you a pre-built dashboard that includes cluster-level and node-level metrics.

<img
  src="/images/infrastructure_screenshot-full_apache-zookeeper-dashboard.webp"
  title="Apache ZooKeeper dashboard landing page"
  alt="A screenshot of a dashboard with Apache ZooKeeper metrics."
/>

<figcaption>
  After setting up the integration with New Relic, see your data in dashboards like these, right out of the box.
</figcaption>

Complete the following steps to install the integration:

<Steps>
  <Step>
    ## Install the infrastructure agent [#infra]

    To use the Zookeeper integration, you need to first [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) on the same host. The infrastructure agent monitors the host itself, while the integration you'll install in the next step extends your monitoring with Zookeeper-specific data.
  </Step>

  <Step>
    ## Use NRI-Flex to capture metrics

    Flex allows you to capture Apache Zookeeper metrics. It comes bundled with the New Relic infrastructure agent you installed in the previous step.

    1. Create a file named `zookeeper-config.yml` in the `/newrelic-infra/integrations.d` path.

    2. Update the `zookeeper-config.yml` with the following configuration example:

       ```yml
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: zookeeperFlex
             apis:
               - name: zookeeper
                 event_type: zkSample
                 commands:
                   - run: echo mntr | nc localhost 2181  ## change to your zookeeper server
                     split_by: "\t"  ## split by tab
                 snake_to_camel: true
                 custom_attributes:
                   myCustomAttr: theValue  ## inject your own additional custom attributes
       ```
  </Step>

  <Step>
    ## Restart the New Relic infrastructure agent

    Before you can start reading your data, use the instructions in our [infrastructure agent docs](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) to restart your infrastructure agent:

    ```bash
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## Find your data

    You can choose our pre-built dashboard template named `Apache ZooKeeper` to monitor your Zookeeper application metrics. Follow these steps to use our pre-built dashboard template:

    1. From [one.newrelic.com](https://one.newrelic.com), go to the <DNT>**+ Integrations & Agents**</DNT> page.
    2. Click on <DNT>**Dashboards**</DNT>.
    3. In the search bar, type `apache zookeeper`.
    4. The ZooKeeper dashboard should appear. Click on it to install it.

    Your Apache ZooKeeper dashboard is considered a custom dashboard and can be found in the <DNT>**Dashboards**</DNT> UI. For docs on using and editing dashboards, see [our dashboard docs](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

    When you use the `nri-flex` integration your metrics will be exported into the given `EVENT_TYPE`. Here is a NRQL query to check the number of znodes in the ZooKeeper namespace with a `nri-flex` integration:

    ```sql
    FROM <EVENT_TYPE> 
    SELECT latest(zkZnodeCount)
    ```
  </Step>
</Steps>

## What's next?

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your dashboards display mode, or to add more content to your dashboard.
