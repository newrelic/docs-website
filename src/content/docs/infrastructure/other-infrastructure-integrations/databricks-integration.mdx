---
title: DataBricks integration
tags:
  - databricks integration
  - New Relic integration
metaDescription: Install the DataBricks integration to monitor your spark metrics. 
freshnessValidatedDate: 2024-09-19
---


The New Relic Databricks integration can collect telemetry from Spark running on Databricks as well as from any Spark deployment that is not running on Databricks.

By default, the integration automatically connects to and collects telemetry from Spark deployments in all clusters created through the UI or API in the specified workspace. This integration supports the Collect Spark telemetry capability. 


## Set up the integration [#setup]

This integration uses a standalone tool from the New Relic experimental repository. This integration can be run on a host, or locally for testing. 
This integration runs on these host platforms:

- Linux amd64
- Windows amd64

<Callout variant="tip">
  For more information, refer to the [GitHub ReadMe](https://github.com/newrelic-experimental/newrelic-databricks-integration) for this integration.
</Callout>

### Deploy on-host [#on-host-deploy]

To deploy this integration on a host (example: EC2), follow these steps:

1. Download the appropriate archive for your platform from the [latest release](https://github.com/newrelic-experimental/newrelic-databricks-integration/releases).

2. Extract the archive to a new or existing directory.

3. Create a directory named **configs** in the same directory.

4. Create a file named `config.yml` in the configs directory and copy the contents of the [`configs/config.template.yml`](https://github.com/newrelic-experimental/newrelic-databricks-integration/blob/main/configs/config.template.yml) file in this repository into it.

5. Edit the `config.yml` file to [configure](https://github.com/newrelic-experimental/newrelic-databricks-integration#configuration) the integration appropriately for your environment.

6. From the directory where the archive was extracted, execute the integration binary using the command following command copying any [command line options](https://github.com/newrelic-experimental/newrelic-databricks-integration#command-line-options) as necessary:

```bash
# Linux
 ./newrelic-databricks-integration 
 
 # Windows
 .\newrelic-databricks-integration.exe
```

### Deploy on a databricks cluster [#databricks-deploy]

The New Relic Databricks integration can be deployed on the driver node of a Databricks cluster using a cluster-scoped init script. The init script uses custom environment variables to specify configuration parameters necessary for the integration configuration.

To install the init script, follow these steps:

1. Login to your Databricks account and navigate to the desired [workspace](https://docs.databricks.com/en/getting-started/concepts.html#accounts-and-workspaces).

2. Follow the [recommendations for init scripts](https://docs.databricks.com/en/init-scripts/index.html#recommendations-for-init-scripts) to store the `cluster_init_integration.sh` script within your workspace in the recommended manner. For example, if your workspace is [enabled for unity catalog](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html#step-1-confirm-that-your-workspace-is-enabled-for-unity-catalog), you should store the init script in a [unity catalog volume](https://docs.databricks.com/en/ingestion/file-upload/upload-to-volume.html).

3. Go to the **Compute** tab and select the desired all-purpose or job compute to open the compute details UI.

4. Click the **Edit** button to [edit the compute's configuration](https://docs.databricks.com/en/compute/clusters-manage.html#edit-a-compute).

5. Follow the steps to use the UI to configure a [cluster-scoped init script](https://docs.databricks.com/en/init-scripts/cluster-scoped.html#configure-a-cluster-scoped-init-script-using-the-ui) and point to the location where you stored the init script in step 2 above.

6. If your cluster is not running, click the **Confirm** button to save your changes. Then, restart the cluster. If your cluster is already running, click the **Confirm and restart** button to save your changes, and restart the cluster.

Additionally, follow the steps to [set environment variables](https://docs.databricks.com/en/compute/configure.html#environment-variables) to add the following environment variables:

* `NEW_RELIC_API_KEY`: Your [New Relic user API key](/docs/apis/intro-apis/new-relic-api-keys/#user-key).

* `NEW_RELIC_LICENSE_KEY`: Your [New Relic license key](/docs/apis/intro-apis/new-relic-api-keys/#license-key).

* `NEW_RELIC_ACCOUNT_ID`: Your [New Relic account ID](/docs/accounts/accounts-billing/account-structure/account-id/).

* `NEW_RELIC_REGION`: The [region](/docs/accounts/accounts-billing/account-setup/choose-your-data-center/#regions-availability) of your New Relic account; one of **US** or **EU**.

* `NEW_RELIC_DATABRICKS_WORKSPACE_HOST`: The [instance name](https://docs.databricks.com/en/workspace/workspace-details.html) of the target Databricks instance.

* `NEW_RELIC_DATABRICKS_ACCESS_TOKEN`: To [authenticate](https://github.com/newrelic-experimental/newrelic-databricks-integration#authentication) with a [personal access token](https://docs.databricks.com/en/dev-tools/auth/pat.html#databricks-personal-access-tokens-for-workspace-users), your personal access token.

* `NEW_RELIC_DATABRICKS_OAUTH_CLIENT_ID`: To use a service principal to [authenticate with Databricks (OAuth M2M)](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html), the OAuth client ID for the service principal.

* `NEW_RELIC_DATABRICKS_OAUTH_CLIENT_SECRET`: To use a service principal to [authenticate with Databricks (OAuth M2M)](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html), an OAuth client secret associated with the service principal.

<Callout variant="tip">
  Note that the `NEW_RELIC_API_KEY` and `NEW_RELIC_ACCOUNT_ID` are currently unused, but are required by the [`new-relic-client-go` module](https://github.com/newrelic/newrelic-client-go) used by the integration. 
  
  Additionally, note that only the personal access token or OAuth credentials need to be specified, but not both. If both are specified, the OAuth credentials take precedence.
  
  Finally, make sure to restart the cluster following the configuration of the environment variables.
</Callout>


## Install our DataBricks monitoring dashboard [#add-dashboard]

To set up our pre-built DataBricks dashboard to monitor your application metrics, go to the [DataBricks dashboard installation](https://one.newrelic.com/marketplace?state=34e67b15-4fe1-28ef-ff41-99658fb36820) and follow the instructions. Once installed, the dashboard should display metrics.

If you need help with dashboards, see:

* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your <InlinePopover type="dashboards"/> display mode, or to add more content to your dashboard.
