---
title: Temporal Cloud integration
tags:
   - Temporal Cloud integration
   - Temporal Cloud monitoring
   - New Relic integrations
metaDescription: Install our Temporal Cloud dashboards and see your Temporal Cloud data in New Relic.
freshnessValidatedDate: never
---

Our Temporal Cloud integration monitors the performance of your Temporal Cloud data, helping you diagnose issues in your workflows, namespaces and scalable applications. Our Temporal Cloud integration gives you a pre-built dashboard with your most important Temporal Cloud metrics.

<img
  title="Temporal Cloud"
  alt="A screenshot depicting the Temporal Cloud dashboard"
  src="/images/infrastructure_screenshot-full_temporal_cloud-dashboard.webp"
/>

<figcaption>
  After setting up the integration with New Relic, see your data in dashboards like these, right out of the box.
</figcaption>

<Steps>
  <Step>
    ## Install the infrastructure agent [#infra]

    To use the Temporal Cloud integration, you need to first [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) on the same host. The infrastructure agent monitors the host itself, while the integration you'll install in the next step extends your monitoring with Temporal-specific data such as database and instance metrics.
  </Step>

  <Step>
    ## Configure `nri-flex` for Temporal Cloud [#configure-flex]

    Once the Temporal Cloud metrics are exposed on the Prometheus endpoint, accessible via `https://<account-id>.tmprl.cloud/prometheus`, you will need to [configure your setup](https://docs.temporal.io/production-deployment/cloud/metrics/general-setup) accordingly.

    <Callout
      title="Note"
      variant="tip"
    >
      Flex requires a [New Relic account](/docs/accounts/accounts-billing/account-setup/create-your-new-relic-account) and is compatible with the following operating systems/platforms:

      1. Linux
      2. Windows
      3. Kubernetes

         For more information on compatible distros and versions, see the [Infrastructure agent compatibility page](/docs/infrastructure/new-relic-infrastructure/getting-started/compatibility-requirements-new-relic-infrastructure).
    </Callout>

    1. Create file with named `nri-flex-temporal-cloud-config.yml` in this path:

       ```shell
       touch /etc/newrelic-infra/integrations.d/
       ```

    2. Below is a `nri-flex` configuration file. Be sure to copy and paste its contents into your previously created `nri-flex-temporal-cloud-config.yml` file, and remember to update your account ID in the Prometheus endpoint URL, as well as the paths for the certificate files:

       ```yml
       integrations:
        - name: nri-flex
          config:
            name: temporalCloudIntegration
            global:
              base_url: https://<your_account_id>.tmprl.cloud/prometheus/api/v1/
              headers:
                accept: application/json
              tls_config:
                enable: true
                key: /certs/client.key
                cert: /certs/client.pem
            interval: 60s
            timeout: 55s
            apis:
              - event_type: temporalCloudFrontendServiceError
                # sum(increase(temporal_cloud_v0_frontend_service_error_count[1m])) by (temporal_namespace,operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_frontend_service_error_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudFrontendServiceRequest
                # sum(increase(temporal_cloud_v0_frontend_service_request_count[1m])) by (temporal_namespace,operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_frontend_service_request_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudPollSuccess
                # sum(increase(temporal_cloud_v0_poll_success_count[1m])) by (temporal_namespace,operation,task_type)
                url: query?query=sum%28increase%28temporal_cloud_v0_poll_success_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%2Ctask_type%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudPollSuccessSync
                # sum(increase(temporal_cloud_v0_poll_success_sync_count[1m])) by (temporal_namespace,operation,task_type)
                url: query?query=sum%28increase%28temporal_cloud_v0_poll_success_sync_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%2Ctask_type%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudPollTimeout
                # sum(increase(temporal_cloud_v0_poll_timeout_count[1m])) by (temporal_namespace,operation,task_type)
                url: query?query=sum%28increase%28temporal_cloud_v0_poll_timeout_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%2Ctask_type%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudResourceExhaustedErrors
                # sum(increase(temporal_cloud_v0_resource_exhausted_error_count[1m])) by (temporal_namespace,resource_exhausted_cause)
                url: query?query=sum%28increase%28temporal_cloud_v0_resource_exhausted_error_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Cresource_exhausted_cause%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudScheduleActionSuccess
                # sum(increase(temporal_cloud_v0_schedule_action_success_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_schedule_action_success_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudScheduleBufferOverruns
                # sum(increase(temporal_cloud_v0_schedule_buffer_overruns_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_schedule_buffer_overruns_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudScheduleMissedCatchupWindow
                # sum(increase(temporal_cloud_v0_schedule_missed_catchup_window_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_schedule_missed_catchup_window_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudScheduleRateLimited
                # sum(increase(temporal_cloud_v0_schedule_rate_limited_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_schedule_rate_limited_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudStateTransition
                # sum(increase(temporal_cloud_v0_state_transition_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_state_transition_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudTotalAction
                # sum(increase(temporal_cloud_v0_total_action_count[1m])) by (temporal_namespace, namespace_mode)
                url: query?query=sum%28increase%28temporal_cloud_v0_total_action_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20namespace_mode%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowCancel
                # sum(increase(temporal_cloud_v0_workflow_cancel_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_cancel_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowContinued
                # sum(increase(temporal_cloud_v0_workflow_continued_as_new_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_continued_as_new_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowFailed
                # sum(increase(temporal_cloud_v0_workflow_failed_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_failed_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowSuccess
                # sum(increase(temporal_cloud_v0_workflow_success_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_success_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowTerminate
                # sum(increase(temporal_cloud_v0_workflow_terminate_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_terminate_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowTimeout
                # sum(increase(temporal_cloud_v0_workflow_timeout_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_timeout_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowExecutionLatencySecP95
                # histogram_quantile(0.95, sum(rate(temporal_cloud_v0_service_latency_bucket[1m] offset 1m)) by (temporal_namespace, operation, le))
                url: query?query=histogram_quantile%280.95%2C%20sum%28rate%28temporal_cloud_v0_service_latency_bucket%5B1m%5D%20offset%201m%29%29%20by%20%28temporal_namespace%2C%20operation%2C%20le%29%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudReplicationLagSecP95
                # histogram_quantile(0.95, sum(rate(temporal_cloud_v0_replication_lag_bucket[1m] offset 1m)) by (temporal_namespace, le))
                url: query?query=histogram_quantile%280.95%2C%20sum%28rate%28temporal_cloud_v0_replication_lag_bucket%5B1m%5D%20offset%201m%29%29%20by%20%28temporal_namespace%2C%20le%29%29
                split_array: true
                leaf_array: true
       ```

    3. Use our instructions [to restart your infrastructure agent](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/):

       ```bash
       sudo systemctl restart newrelic-infra.service
       ```

    4. Wait a few minutes until data starts folowing into your [New Relic account](https://one.newrelic.com/).
  </Step>

  <Step>
    ## Find your data [#find-your-data]

    You can choose our pre-built dashboard template named Temporal Cloud to monitor your Temporal Cloud metrics. Follow these steps to use our pre-built dashboard template:

    1. From [one.newrelic.com](https://one.newrelic.com/), go to the **+ Integrations & Agents** page.
    2. Click on **Dashboards**.
    3. In the search bar, type **Temporal Cloud**.
    4. The Temporal Cloud dashboard should appear. Click on it to install it.

    Your Temporal Cloud dashboard is considered a custom dashboard and can be found in the Dashboards UI. For docs on using and editing dashboards, see [our dashboard docs](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

    Here is a NRQL query to check the Temporal Cloud frontend service requests grouped by namespace and operation:

    ```sql
    FROM temporalCloudFrontendServiceRequest SELECT latest(`data.result-value1`) FACET `data.result-metric-temporal_namespace` AS namespace, `data.result-metric-operation` AS operation TIMESERIES 1 minute
    ```
  </Step>
</Steps>

## What's next?

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your dashboards display mode, or to add more content to your dashboard.
