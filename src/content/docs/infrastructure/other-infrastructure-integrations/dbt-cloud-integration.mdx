---
title: dbt Cloud with Airflow and Snowflake integration 
tags:
    - New Relic integrations
    - Dbt Cloud integrations 
metaDescription: Dbt Cloud with Airflow and Snowflake integration 
redirects: 
  - /docs/install/dbt-cloud-integration
  - /docs/more-integrations/dbt-cloud/dbt-cloud-integration
freshnessValidatedDate: never
---

Our <DNT>dbt Cloud</DNT> integration with <DNT>Airflow</DNT> monitors the health of your <DNT>dbt Cloud</DNT> jobs and resources, helping you identify problems like when runs, models, or tests fail.

This integration runs on <DNT>Apache Airflow</DNT> and queries <DNT>Snowflake</DNT> for any failed tests if configured to do so.

## Prerequisites [#prerequisites]

* dbt Cloud account with APIs enabled and using <DNT>Snowflake</DNT> as the database.
* Access to the <DNT>Snowflake</DNT> account where the <DNT>dbt Cloud</DNT> account runs.
* Existing <DNT>Airflow</DNT> environment version 2.8.1 or higher, or or ability to run <DNT>Docker Compose</DNT>.

## Install the integration [#install]

You can install the New Relic <DNT>dbt Cloud</DNT> integration with <DNT>Airflow</DNT> by either:

* Installing in your existing Airflow environment. This is recommended for production environments.
* Installing with Docker Compose. This is suitable for quick POCs.

Select the option most suitable for your needs by clicking on its tab:

<Tabs>
  <TabsBar>
    <TabsBarItem id="1">
      Install on existing Airflow environment
    </TabsBarItem>

    <TabsBarItem id="2">
      Install with Docker Compose
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="1">
      <Steps>
        <Step>
          Ensure you have the Snowflake provider and then clone the `newrelic-dbt-cloud-integration` repository by running these commands:

          ```shell
          pip install apache-airflow-providers-snowflake>=3.0.0
          ```

          ```shell
          git clone https://github.com/newrelic-experimental/newrelic-dbt-cloud-integration.git
          ```
        </Step>

        <Step>
          Copy the contents of `airflow/dags` to the root of your Airflow dags folder
        </Step>

        <Step>
          Create the five Airflow connections needed for the DAG. The following table provides the connection name the info to set it up. Note that for all of these, the type is `http`:

          <table>
              <thead>
                  <tr>
                      <th>
                          Connection name
                      </th>
                      <th>
                          Description
                      </th>
                      <th>
                          Type
                      </th>
                      <th>
                          Host and password
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class="children-nowrap">
                          `dbt_cloud_admin_api`
                      </td>
                       <td>
                          Allows you to connect to the dbt Cloud admin API with <span class="children-nowrap">`SimpleHttpHook`</span>

                      </td>
                      <td>
                          <span class="children-nowrap">`http`</span>
                      </td>
                      <td>
                          **Host:** https://cloud.getdbt.com/api/v2/accounts/ACCOUNT_ID/ (Replace `ACCOUNT_ID` with your dbt Cloud account id)

                        **Password:** Your [dbt Cloud api token (Profile settings) or a service account token](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens#user-tokens)
                      </td>
                      <td>

                      </td>
                  </tr>
                  <tr>
                      <td class="children-nowrap">
                          `dbt_cloud_discovery_api`
                      </td>
                      <td>
                          Allows you to connect to the dbt discovery API
                      </td>
                      <td>
                          <span class="children-nowrap">`http`</span>
                      </td>
                      <td>
                        **Host:** https://metadata.cloud.getdbt.com/graphql
                  
                        **Password:** [Dbt Cloud service account token](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens#user-tokens) 
                      </td>
                  </tr>
                  <tr>
                      <td class="children-nowrap">
                          `nr_insights_insert`
                      </td>
                      <td>
                          Allows you to upload custom events to New Relic
                      </td>
                      <td>
                          <span class="children-nowrap">`http`</span>
                      </td>
                      <td>
                          **Host:** https://insights-collector.newrelic.com/v1/accounts/ACCOUNT_ID/events (Replace `ACCOUNT_ID` with your account id) 

                          **Password:** Your [NR insights insert API key](https://one.newrelic.com/admin-portal/api-keys/insightkeys) 
                      </td>
                  </tr>
                  <tr>
                      <td class="children-nowrap">
                          `nr_insights_query` 
                      </td>
                      <td>
                          Allows you to query New Relic custom events
                      </td>
                      <td>
                          <span class="children-nowrap">`http`</span>
                      </td>
                      <td>
                        **Host:** https://insights-api.newrelic.com/v1/accounts/ACCOUNT_ID/query (Replace `ACCOUNT_ID` with your account id) 

                        **Password:** Your [NR insights query API key](https://one.newrelic.com/admin-portal/api-keys/insightkeys)
                      </td>
                  </tr>
              </tbody>
          </table>

          Once you've configured the four above, you need to configure the Snowflake connection. Snowflake allows you to query for failed test rows. There are [many ways](https://airflow.apache.org/docs/apache-airflow-providers-snowflake/stable/connections/snowflake.html) to configure a snowflake connection. To configure using a private key pair, fill in the following attributes:

          * `Type`: Snowflake
          * `Login`: Your Snowflake username
          * `Account`: Your Snowflake account
          * `Warehouse`: Your Snowflake warehouse
          * `Role`: Your Snowflake role. The role must have access to all the DBs used in dbt Cloud to get all failed test rows.
          * `Private Key Text`: The full private key used for this connection.
          * `Password`: Pass phrase for the private key if it's encrypted. Blank if it's unencrypted.
        </Step>

        <Step>
          Complete the setup by enabling the `new_relic_data_pipeline_observability_get_dbt_run_metadata2` DAG.
        </Step>
      </Steps>
    </TabsPageItem>

    <TabsPageItem id="2">
      <Steps>
        <Step>
          Run the following command to clone the `newrelic-dbt-cloud-integration` repository:

          ```shell
          git clone https://github.com/newrelic-experimental/newrelic-dbt-cloud-integration.git
          ```

          Then `cd` into the Airflow directory:

          ```shell
          cd newrelic-dbt-cloud-integration/airflow
          ```

          Then initialize and run Docker compose by running the following commands:

          ```shell
          docker-compose up airflow-init
          ```

          ```shell
          docker-compose up
          ```
        </Step>

        <Step>
          Launch the Airflow UI: `http://localhost:8080`
        </Step>

        <Step>
          Create the five Airflow connections needed for the DAG. The following table provides the connection name the info to set it up. Note that for all of these, the type is `http`:

          <table>
              <thead>
                  <tr>
                      <th>
                          Connection name
                      </th>
                      <th>
                          Description
                      </th>
                      <th>
                          Type
                      </th>
                      <th>
                          Host and password
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class="children-nowrap">
                          `dbt_cloud_admin_api`
                      </td>
                       <td>
                          Allows you to connect to the dbt Cloud admin API with <span class="children-nowrap">`SimpleHttpHook`</span>

                      </td>
                      <td>
                          <span class="children-nowrap">`http`</span>
                      </td>
                      <td>
                          **Host:** https://cloud.getdbt.com/api/v2/accounts/ACCOUNT_ID/ (Replace `ACCOUNT_ID` with your dbt Cloud account id)

                        **Password:** Your [dbt Cloud api token (Profile settings) or a service account token](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens#user-tokens)
                      </td>
                      <td>

                      </td>
                  </tr>
                  <tr>
                      <td class="children-nowrap">
                          `dbt_cloud_discovery_api`
                      </td>
                      <td>
                          Allows you to connect to the dbt discovery API
                      </td>
                      <td>
                          <span class="children-nowrap">`http`</span>
                      </td>
                      <td>
                        **Host:** https://metadata.cloud.getdbt.com/graphql
                  
                        **Password:** [Dbt Cloud service account token](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens#user-tokens) 
                      </td>
                  </tr>
                  <tr>
                      <td class="children-nowrap">
                          `nr_insights_insert`
                      </td>
                      <td>
                          Allows you to upload custom events to New Relic
                      </td>
                      <td>
                          <span class="children-nowrap">`http`</span>
                      </td>
                      <td>
                          **Host:** https://insights-collector.newrelic.com/v1/accounts/ACCOUNT_ID/events (Replace `ACCOUNT_ID` with your account id) 

                          **Password:** Your [NR insights insert API key](https://one.newrelic.com/admin-portal/api-keys/insightkeys) 
                      </td>
                  </tr>
                  <tr>
                      <td class="children-nowrap">
                          `nr_insights_query` 
                      </td>
                      <td>
                          Allows you to query New Relic custom events
                      </td>
                      <td>
                          <span class="children-nowrap">`http`</span>
                      </td>
                      <td>
                        **Host:** https://insights-api.newrelic.com/v1/accounts/ACCOUNT_ID/query (Replace `ACCOUNT_ID` with your account id) 

                        **Password:** Your [NR insights query API key](https://one.newrelic.com/admin-portal/api-keys/insightkeys)
                      </td>
                  </tr>
              </tbody>
          </table>

          Once you've configured the four above, you need to configure the Snowflake connection. Snowflake allows you to query for failed test rows. There are [many ways](https://airflow.apache.org/docs/apache-airflow-providers-snowflake/stable/connections/snowflake.html) to configure a snowflake connection. To configure using a private key pair, fill in the following attributes:

          * `Type`: Snowflake
          * `Login`: Your Snowflake username
          * `Account`: Your Snowflake account
          * `Warehouse`: Your Snowflake warehouse
          * `Role`: Your Snowflake role. The role must have access to all the DBs used in dbt Cloud to get all failed test rows.
          * `Private Key Text`: The full private key used for this connection.
          * `Password`: Pass phrase for the private key if it's encrypted. Blank if it's unencrypted.
        </Step>

        <Step>
          Complete the setup by enabling the `new_relic_data_pipeline_observability_get_dbt_run_metadata2` DAG.
        </Step>
      </Steps>
    </TabsPageItem>
  </TabsPages>
</Tabs>

## Find your data [#find-data]

This integration creates and reports three custom events to New Relic:

<CollapserGroup>
  <Collapser
    id="collapser-1-in-group-2"
    title="`dbt_job_run`"
  >
    `dbt_job_run`: Provides metadata and the status of all completed runs. This event does not include any data about models, snapshots, seeds and tests. Attributes include:

    * `project_name`
    * `environment_name`
    * `run_team`
    * All fields listed in the [dbt Cloud v2 API for runs](https://docs.getdbt.com/dbt-cloud/api-v2#/operations/Retrieve%20Run).

    All attributes other than `project_name` and `environment_name` are prepended with `run_`

    Example queries:

    ```sql
    -- Get status of all job runs in the past seven days
    select 
        project_name,
        environment_name,
        job_name,
        run_created_at,
        run_run_duration_humanized,
        run_status,
        run_status_humanized,
        run_status_message
    from dbt_job_run
    since 7 days ago
    ```
  </Collapser>

  <Collapser
    id="collapser-1-in-group-2"
    title="`dbt_resource_run`"
  >
    `dbt_resource_run` Provides metadata and and statuses for all resources run in a dbt job run. Resource include models, snapshots, seeds and tests. Attributes include:

    * All attributes in `dbt_job_run`
    * `team` (Configured in dbt project meta)
    * `alert_failed_test_rows`
    * `failed_test_rows_limit`
    * `slack_mentions`
    * `message`
    * `resource_type`
    * `unique_id`
    * `database_name`
    * `schema_name`
    * `test_column_name`
    * `test_model_name`
    * `test_namespace`
    * `test_parameters`
    * `test_short_name`
    * `alias`
    * `severity`
    * `warn_if`
    * `error_if`
    * `tags`
    * `path`
    * `original_file_path`
    * `meta`
    * `meta_config`

    Example queries:

    ```sql
    -- Get status of all resources run in the past day
    -- Status = 'None' means the resource exists in the project but was not executed in a particular run
    select 
        project_name,
        environment_name,
        job_name,
        run_created_at,
        resource_type,
        name,
        status
    from dbt_resource_run
    where status != 'None'
    since 1 day ago
    limit 200
    ```

    ```sql
    -- Get all resources types in the past day
    select 
        uniques(resource_type)
    from dbt_resource_run 
    since 1 day ago
    ```

    ```sql
    -- Get the count of all statuses in the last day
    -- Status = 'None' means the resource exists in the dbt project, but was not executed in a particular run
    select 
        count(*) as total_count
    from dbt_resource_run
    facet
        status
    since 1 day ago
    ```
  </Collapser>

  <Collapser
    id="collapser-3-in-group-2"
    title="`dbt_failed_test_rows`"
  >
    `dbt_failed_test_rows`: Provides metadata and up to the first ten columns of the results of a failed test query. This event is only created when the meta config for a dbt test has `alert_failed_test_rows`: `true`. Attributes include:

    * All attributes in `dbt_resource_run`
    * `field_1` - `field_10` representing the first ten columns returned in a test query

    Example queries:

    ```sql
    select 
        project_name,
        environment_name,
        job_name,
        run_created_at,
        name,
        field_1,
        field_2,
        field_3,
        field_4,
        field_5,
        field_6,
        field_7,
        field_8,
        field_9,
        field_10
    from dbt_failed_test_row
    since 7 days ago
    ```
  </Collapser>
</CollapserGroup>

## DAG configurations

### Connections:

This DAG is intended to run as-is with no configuration. At the same time, we relize your company may have its own
naming conventions for connections. As such, we have a simple config inside `dag_config.yml` where you can set the name
for the various connections.

```yaml
connections:
  dbt_cloud_admin_api: dbt_cloud_admin_api
  dbt_cloud_discovery_api: dbt_cloud_discovery_api 
  nr_insights_query: nr_insights_query 
  nr_insights_insert: nr_insights_insert
  snowflake_api: SNOWFLAKE 
```

### Run Team:

dbt jobs might be owned by different teams, yet there is no place to set this within dbt Cloud. We can use Python code
to dynamically set the team. To write your own code, modify `airflow/dags/nr_utils/nr_utils.py` and put any logic needed in
`get_team_from_run()`. The run data passed in to that function has access to the following attributes.

* project_name
* environment_name
* All fields listed in the [dbt Cloud v2 API for runs](https://docs.getdbt.com/dbt-cloud/api-v2#/operations/Retrieve%20Run).
  All attributes are prepended with "run\_"

Here is an example function:

```python
def get_team_from_run(run: dict) -> str:
    team = 'Data Engineering' 
    if run['project_id'] == '11111' and run['environment_id'] in ['55555', '33333']:
        team = 'Platform'
    if re.match(r'Catch-all', run['job_name']):
        team = 'Project Catch All'
    return team
```

## Dbt project configuration

Within the Dbt project, we can use the meta config to set an additional team and test-specific settings.

* `Team`: While `run_team determines` who owns the jobs, we sometimes need upstream or downstream teams to receive alert
  notifications on failed resources like tests and models. Setting the team helps us do that.
* `alert_failed_test_rows`: Setting to `True` will enable failded test rows where we run the queries for failed tests and send
  up to the first 10 columns to New Relic
* `failed_test_rows_limit`: Maximum number of failed test rows to send to New Relic. We have a hard-coded limit of 100 rows to
  prevent situations where we are sending unreasonable amounts to New Relic.
* `slack_mentions`: If you enable slack alerts, this field allows you to set who should be mentioned in the message.

Setting this in `dbt_project.yml` would set team to 'Data Engineering' and it would enable failed test rows.

```yaml
models:
  dbt_fake_company:
    +meta:
      nr_config:
        team: 'Data Engineering'
        alert_failed_test_rows: False 
        failed_test_rows_limit: 5
        slack_mentions: '@channel, @business_users'
```

We can add another attributed called message to resources. In the following configuration, a partner business team
can be alerted on specific failed tests. Furthermore, we can set alerts on the failed test rows themselves.

```yaml
models:
  - name: important_business_model
    tests:
      - some_custom_test:
        config:
          meta:
            nr_config:
              team: 'Upstream Business Team'
              alert_failed_test_rows: true 
              failed_test_rows_limit: 10 
              slack_mentions: '@channel, @business_user1, @engineer1'
              message: 'Important business process produced invalid data. Please check X tool' 
```

## Troubleshooting [#troubleshooting]

Different versions of Airflow combined with different versions of providers can induce breaking changes. In some cases,
you may need to modify code to match the specific versions in your Airflow environment. We track known issues
in our [Github repository](https://github.com/newrelic-experimental/newrelic-dbt-cloud-integration/issues).
