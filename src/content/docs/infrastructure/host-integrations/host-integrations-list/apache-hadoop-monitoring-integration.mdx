---
title: Apache Hadoop integration
tags:
  - Apache Hadoop integration
  - New Relic integrations
metaDescription: Install our Apache Hadoop dashboards and see your Apache Hadoop  data in New Relic.
freshnessValidatedDate: 2023-06-28
---

Our Apache Hadoop integration monitors the performance of your Hadoop cluster and applications. The integration provides an in-depth understanding of Apache Hadoop performance and health by providing data about your HDFS (Hadoop Distributed File System), blocks, system load, data nodes, NodeManager, and jobs.

<img
  title="Apache Hadoop dashboard"
  alt="Apache Hadoop dashboard"
  src="/images/infrastructure_screenshot-full_apache-hadoop-dashboard.webp"
/>

<figcaption>
  After setting up our Apache Hadoop, we give you a dashboard for your Apache Hadoop metrics.
</figcaption>

Complete the following steps to install the integration:

<Steps>
  <Step>
    ## Install the infrastructure agent [#infra]

    To use the Apache Hadoop integration, you need to first [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) on the same host. The infrastructure agent monitors the host itself, while the integration you'll install in the next step extends your monitoring with Hadoop-specific data.  

  </Step>

  <Step>
    ## Configure NRI-Flex for Apache Hadoop [#integrate]

    Our flex integration comes bundled with the New Relic infrastructure agent and is used to send your Apache Hadoop data to New Relic. To create a flex configuration file follow these steps:

    1. Create a file named `nri-flex-hadoop-config.yml` in the `/etc/newrelic-infra/integrations.d` path.

    2. Use our [configuration template](https://github.com/newrelic/nri-flex/blob/master/examples/json-read-cmd-example.yml) to update the fields `EVENT_TYPE` and `YOUR_DOMAIN` in the created file named `nri-flex-hadoop-config.yml`.
       The value on the `event_type` is used to store metrics on the NRDB.

       Example:

       * `EVENT_TYPE1` can be updated to `HadoopResourceManagerSample`
       * `EVENT_TYPE2` can be updated to `HadoopNameNodeSample`

       Your `nri-flex-hadoop-config.yml` file should look like this:

       ```yml
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: hadoopMetrics
             apis:
               - event_type: EVENT_TYPE1
                 commands: 
                   # run any command, you could cat .json file, or run some commands that produce a json output
                   # the example just calls an API that returns json
                   - run: curl -s https://YOUR_DOMAIN:9870/jmx #json output is retrieved from this command
               - event_type: EVENT_TYPE2
                 commands: 
                   - run: curl -s https://YOUR_DOMAIN:8088/jmx?qry=Hadoop:*
       ```
  </Step>

  <Step>
    ## Forward Apache Hadoop logs to New Relic

    You can use our [log forwarding](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) to forward Apache Hadoop logs to New Relic.

    1. Create a log file named `logging.yml` in `/etc/newrelic-infra/logging.d/`
    2. After creating the log file, add the following script to the `logging.yml` file:

       ```yml
       logs:
         - name: hadoop_secondarynamenode_log
           file: /usr/local/hadoop/logs/hadoop-hadoopuser-secondarynamenode-hadoop-master.log
           attributes:
             logtype: hadoop_secondarynamenode_logs
         - name: hadoop_resourcemanager_log
           file: /usr/local/hadoop/logs/hadoop-hadoopuser-resourcemanager-hadoop-master.log
           attributes:
             logtype: hadoop_hadoop_resourcemanager_logs
         - name: hadoop_namenode_log
           file: /usr/local/hadoop/logs/hadoop-hadoopuser-namenode-hadoop-master.log
           attributes:
             logtype: hadoop_namenode_logs
       ```
  </Step>

  <Step>
    ## Restart the New Relic infrastructure agent

    Before you can start using your data, [restart your infrastructure agent](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/).

    The following command should work for most systems:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## Find your data

    You can choose our pre-built dashboard template named `Apache Hadoop` to monitor your Apache Hadoop server metrics. Follow these steps to use our pre-built dashboard template:

    1. From [one.newrelic.com](https://one.newrelic.com), go to the <DNT>**+ Integrations & Agents**</DNT> page.
    2. Click on <DNT>**Dashboards**</DNT>.
    3. In the search bar, type `apache hadoop`.
    4. The Apache Hadoop dashboard should appear. Click on it to install it.

    Your Apache Hadoop dashboard is considered a custom dashboard and can be found in the <DNT>**Dashboards**</DNT> UI. For docs on using and editing dashboards, see [our dashboard docs](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

    Here is a NRQL query to check the active users from the resource manager:

    ```sql
    SELECT latest(activeUsers) 
    FROM HadoopResourceManagerSample
    ```

    Here is a NRQL query to view the number of active clients from the name node:

    ```sql
    SELECT latest(numActiveClients) 
    FROM HadoopNameNodeSample
    ```
  </Step>
</Steps>

## What's next?

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your dashboards display mode, or to add more content to your dashboard.
