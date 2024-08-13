---
title: Cacti integration
tags:
  - Cacti integration
  - New Relic integrations
metaDescription: Use the New Relic infrastructure agent to monitor your Cacti data.
freshnessValidatedDate: never
---

Integrating Cacti with New Relic provides you with a user-friendly, graphical representation of your RRD data, all within New Relic's unified platform.

<img
  title="Cacti dashboard"
  alt="Cacti dashboard"
  src="/images/infrastructure_screenshot-full_cacti-dashboard.webp"
/>

<figcaption>
  You can see your data in a dashboard after setting up the Cacti integration with New Relic.
</figcaption>

## Set up the Cacti integration [#setup]

Complete the following steps to set up the Cacti integration:

<Steps>
  <Step>
    ## Install the infrastructure agent [#install]

    To use the Cacti integration, you need to first [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) on the same host.
  </Step>

  <Step>
    ## Expose Cacti metrics [#Expose]

    Complete the steps below to expose your RRD data in either a CSV or JSON format:

    1. Export data from Cacti's RRD files into the `XML format` using RRDTool.
    2. Convert the XML data into a `CSV or JSON` format.
  </Step>

  <Step>
    ## Use NRI-Flex to capture CSV format metrics [#capture-csv]

    Flex comes bundled with the New Relic infrastructure agent. You need to configure NRI-Flex for Cacti and create a flex configuration file. Follow these steps:

    1. Create a file named `cacti-config.yml` in the `/newrelic-infra/integrations.d` path.
    2. Update the `cacti-config.yml` with the following configuration example:

       ```yml
       ---
       integrations:
         - name: nri-flex
           config:
             name: machineLoad
             apis:
              - name: machineLoad
                file: /home/ubuntu/xmlToCsv/local_linux_machine_load_1min_2.csv
              - name: memSwap
                file: /home/ubuntu/xmlToCsv/local_linux_machine_mem_swap_5.csv
              - name: proc
                file: /home/ubuntu/xmlToCsv/local_linux_machine_proc_1.csv
              - name: machineUser
                file: /home/ubuntu/xmlToCsv/local_linux_machine_users_3.csv
              - name: memBuffers
                file: /home/ubuntu/xmlToCsv/local_linux_machine_mem_buffers_4.csv
              - name: ApacheCpuLoad
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_cpuload_6.csv
              - name: ApacheTotalHits
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_total_hits_7.csv
              - name: ApacheTotalKbytes
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_total_kbytes_8.csv
              - name: UserLogins
                file: /home/ubuntu/xmlToCsv/local_linux_machine_active_10.csv
       ```
  </Step>

  <Step>
    ## Forward Cacti logs [#forward]

    Follow these steps to forward Cacti logs to New Relic:

    1. Edit the log file named `logging.yml` located at the following path:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Add the following snippet to the `logging.yml` file. Replace `file` with your Cacti log file path if needed:

       ```yml
       logs:
         - name: cacti.log
           file: /var/www/html/cacti/log/LOG_FILE_NAME
           attributes:
             logtype: cacti_log
       ```
  </Step>

  <Step>
    ## Restart the New Relic infrastructure agent [#restart]

    Restart your infrastructure agent:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    Your application will send metrics to [one.newrelic.com](https://one.newrelic.com) in a few minutes.
  </Step>

  <Step>
    ## Find your data [#find-data]

    You can use our pre-built dashboard template to monitor your Cacti application metrics. Follow these steps to use our pre-built dashboard template:

    1. From [one.newrelic.com](https://one.newrelic.com), go to the <DNT>**+ Integrations & Agents**</DNT> page
    2. Click on <DNT>**Dashboards**</DNT>
    3. In the search bar, type `Cacti`
    4. The Cacti dashboard should appear. Click on it to install it

    Your Cacti dashboard is considered a custom dashboard and can be found in the <DNT>**Dashboards**</DNT> UI. For docs on using and editing dashboards, see [our dashboard docs](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

    Here is an example NRQL query to view the count of the user login  :

    ```sql
    SELECT latest(value) FROM UserLoginsSample FACET name
    ```
  </Step>
</Steps>

## What's next? [#whats-next]

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your dashboard display mode or add more content.
