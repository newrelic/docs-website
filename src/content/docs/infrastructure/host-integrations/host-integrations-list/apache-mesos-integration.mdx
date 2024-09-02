---
title: Apache Mesos integration
tags:
    - New Relic integrations
    - Apache Mesos integration
metaDescription: Use New Relic infrastructure agent to get a dashboard with metrics from your Apache Mesos.
freshnessValidatedDate: 2024-05-20
---

Monitor Apache Mesos clusters seamlessly with New Relic for comprehensive insights into performance, health, and resource utilization. Track master and slave nodes, monitor task execution, and review system metrics.

<img
  title="Apache Mesos dashboard"
  alt="Apache Mesos dashboard"
  src="/images/infrastructure_screenshot_full-apache-mesos-dashboard.webp"
/>

<figcaption>
  After setting up our Apache Mesos integration, we give you a dashboard for your Apache Mesos metrics.
</figcaption>

<Steps>
  <Step>
    ## Install the infrastructure agent [#infra-install]

    To use the Apache Mesos integration, you need to also [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) on the same host. The infrastructure agent monitors the host itself, while the integration you'll install in the next step extends your monitoring with Apache Mesos-specific data.
  </Step>

  <Step>
    ## Enable the Apache Mesos integration with nri-flex

    To set up the Apache Mesos integration, follow these steps:

    1. Create a file named `nri-apache-mesos-config.yml` in the integrations directory:

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-apache-mesos-config.yml
       ```

    2. Add the following snippet to your `nri-apache-mesos-config.yml` file to enable the agent to capture Apache Mesos data:
       ```yml
       integrations:
         - name: nri-flex
           interval: 30s
           config:
             name: apacheMesos
             apis:
               - event_type: apacheMesos
                 url: http://<ip-address>:5050/metrics/snapshot
       ```
  </Step>

  <Step>
    ## Forward Apache Mesos logs

    Follow these steps to forward Apache Mesos logs to New Relic:

    1. Edit the log file named `logging.yml` located at the following path:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Add the following snippet to the `logging.yml` file. Replace `file` with your Apache Mesos log filepath if needed:

       ```yml
       logs:
         - name: apache-mesos.log
           file: /var/log/mesos/LOG_FILE_NAME
           attributes:
             logtype: apache_mesos_log
       ```
  </Step>

  <Step>
    ## Restart the New Relic infrastructure agent

    Restart your infrastructure agent:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    In a couple of minutes, your application will begin sending metrics to [one.newrelic.com](https://one.newrelic.com).  

  </Step>

  <Step>
    ## Find your data

    You can use our pre-built dashboard template to monitor your Apache Mesos application metrics. Follow these steps to use our pre-built dashboard template:

    1. From [one.newrelic.com](https://one.newrelic.com), go to the <DNT>**+ Integrations & Agents**</DNT> page
    2. Click on <DNT>**Dashboards**</DNT>
    3. In the search bar, type `Apache Mesos`
    4. The Apache Mesos dashboard should appear. Click on it to install it

    Your Apache Mesos dashboard is considered a custom dashboard and can be found in the <DNT>**Dashboards**</DNT> UI. For docs on using and editing dashboards, see [our dashboard docs](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

    Here is an example NRQL query to view the Apache Mesos master uptime:

    ```sql
    SELECT latest(`master/uptime_secs`) as 'Masters uptime (seconds)' FROM apacheMesos
    ```
  </Step>
</Steps>

## What's next?

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your dashboards display mode, or to add more content to your dashboard.
