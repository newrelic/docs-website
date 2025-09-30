---
title: Vertica integration
tags:
  - Vertica integration
  - New Relic integrations
metaDescription: Use New Relics infrastructure agent to get a dashboard with metrics from your Vertica.
freshnessValidatedDate: 2023-09-01
---

Our Vertica integration monitors the performance of your data storage.

<img
  title="Vertica dashboard"
  alt="Vertica dashboard"
  src="/images/infrastructure_screenshot-full_Vertica-dashboard.webp"
/>

<figcaption>
  After setting up our Vertica integration, we give you a dashboard for your Vertica metrics.
</figcaption>

<Steps>
  <Step>
    ## Install the infrastructure agent [#infra-install]

    You can install the infrastructure agent two different ways:

    * Our [guided install](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) is a CLI tool that inspects your system and installs the infrastructure agent alongside the application monitoring agent that best works for your system. To learn more about how our guided install works, check out our [Guided install overview](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
    * If you'd rather install our infrastructure agent manually, you can follow a tutorial for manual installation for [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/), or [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).
  </Step>

  <Step>
    ## Use `nri-flex` to capture metrics [#flex]

    Flex comes bundled with the New Relic infrastructure agent. You need to configure `nri-flex` for Vertica and create a flex configuration file.

    Follow these steps:

    1. Create a file named `vertica-flex-config.yml` in this path:

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Update the file `vertica-flex-config.yml` with these configurations:

       * `EVENT_TYPE`: You can consider `EVENT_TYPE` as a New Relic database table that you can query using NRQL.
       * `COMMAND`: This contains the command which is used to print metrics on the terminal.

       Once your configuration file is updated, it will look like below:

    ```yml
      --- 
      integrations:
        - name: nri-flex
          config:
            name: VerticaFlex
            apis:
              - database: vertica
                db_conn: 'vertica://dbadmin:vertica@13.235.79.230:5433/dbadmin'
                logging:
                  open: true
                db_async: true # process queries async
                db_queries:
                  - name: VerticaFindCitiesDetails
                    run: SELECT * FROM cities;
                  - name: VerticaDiskSpaceUsedByTables
                    run: SELECT projection_schema, anchor_table_name, to_char(sum(used_bytes)/1024/1024/1024,'999,999.99') as disk_space_used_gb FROM projection_storage
    GROUP by projection_schema, anchor_table_name ORDER by disk_space_used_gb desc limit 50;
                  - name: VerticaFreeDiskSpace
                    run: SELECT to_char(sum(disk_space_free_mb)/1024,'999,999,999') AS disk_space_free_gb, to_char(sum(disk_space_used_mb)/1024,'999,999,999') AS disk_space_used_gb FROM disk_storage;
                  - name: VerticaUserInformation
                    run: SELECT user_name, is_super_user, resource_pool, memory_cap_kb, temp_space_cap_kb, run_time_cap FROM users;
                  - name: VerticaUserDetails
                    run: SELECT * FROM user_sessions;
                  - name: VerticaQueriesByUser
                    run: SELECT * FROM query_profiles WHERE user_name ILIKE '%dbadmin%';
                  - name: VerticaUserRolesInformation
                    run: SELECT * FROM roles;
                  - name: VerticaResourcePoolAssignments
                    run: SELECT user_name, resource_pool FROM users;
                  - name: VerticaTableInfo
                    run: SELECT table_name, is_flextable, is_temp_table, is_system_table, count(*) FROM tables GROUP by 1,2,3,4;
                  - name: VerticaActiveEvents
                    run: SELECT * FROM active_events WHERE event_problem_description NOT ILIKE '%state to UP';
                  - name: VerticaDiskStorage
                    run:  SELECT node_name, storage_path, storage_usage, storage_status, disk_space_free_percent FROM disk_storage;
                  - name: VerticaLongRunningQueries
                    run: SELECT query_duration_us/1000000/60 AS query_duration_mins, table_name, user_name, processed_row_count AS rows_processed, substr(query,0,70) FROM query_profiles ORDER BY query_duration_us DESC LIMIT 250;
                  - name: VerticaLicenseConsumption
                    run: SELECT GET_COMPLIANCE_STATUS();
                  - name: VerticaAudit
                    run: SELECT AUDIT('');

    ```
  </Step>

  <Step>
    ## Forward your Vertica logs to New Relic [#logs]

    You can use our [log forwarding](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) to forward Vertica logs to New Relic.

    On Linux machines, your can find your log file named `logging.yml`  in this path:

    ```shell
    /etc/newrelic-infra/logging.d/
    ```

    After creating the log file, add the following script to the `logging.yml` file:

    ```yml
    logs:
      - name: vertica.log
        file: /home/dbadmin/vdb/v_vdb_node0001_catalog/vertica.log
        attributes:
          logtype: vertica_log
    ```
  </Step>

  <Step>
    ## Restart the New Relic infrastructure agent [#restart]

    Before you can start reading your data, use the instructions in our [infrastructure agent docs](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) to restart your infrastructure agent.

    ```bash
    sudo systemctl restart newrelic-infra.service
    ```

    In couple of minutes, your application will send metrics to [one.newrelic.com](https://one.newrelic.com).
  </Step>

  <Step>
    ## Find your data [#find-data]

    You can choose our pre-built dashboard template named `Vertica` to monitor your Vertica application metrics. Follow these steps to use our pre-built dashboard template:

    1. From [one.newrelic.com](https://one.newrelic.com), go to the <DNT>**+ Integrations & Agents**</DNT> page.
    2. Click on <DNT>**Dashboards**</DNT>.
    3. In the search bar, type `vertica`.
    4. The Vertica dashboard should appear. Click on it to install it.

    Your Vertica dashboard is considered a custom dashboard and can be found in the <DNT>**Dashboards**</DNT> UI. For docs on using and editing dashboards, see [our dashboard docs](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

    Here's a NRQL query to search database user information for data points like user name, resource pool, memory cap, temporary space cap, and run time cap.

    ```sql
    SELECT user_name, is_super_user, resource_pool, memory_cap_kb, temp_space_cap_kb, run_time_cap 
    FROM VerticaUserInformation;
    ```
  </Step>
</Steps>

## What's next? [#next]

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your <InlinePopover type="dashboards"/> display mode, or to add more content to your dashboard.
