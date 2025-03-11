---
title: Install the Python agent on Microsoft Azure Container Apps and App Service
metaDescription: How to install APM for Python on Microsoft Azure App Services and Container Apps.
redirects:
  - /docs/agents/python-agent/hosting-services/python-agent-microsoft-azure
  - /docs/python/python-agent-on-microsoft-azure
freshnessValidatedDate: never
---

Microsoft Azure offers two platform services that manage your web or containerized apps. You can install the Python agent on both [Microsoft Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/overview) and [Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/overview), letting you track your Azure-managed Python apps in New Relic.

<Callout variant="tip" title="Alternative Approaches">
  If you are looking for a way to integrate New Relic into your Azure hosted application without modifying your application code, [this tutorial](/docs/apm/agents/python-agent/hosting-services/python-azure-touchless-integration) provides that solution.
</Callout>

## Compatibility and requirements [#compatibility-requirements]

Before you install the Python agent, we recommend: 

* Reviewing the Python agent's [compatibility and requirements doc](/docs/agents/python-agent/getting-started/compatibility-requirements-python-agent)
* Setting up a Python app on one (or both!) of the Azure managed platforms
* Installing the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-macos) in your environment

<Callout variant="tip" title="Info">
Keep in mind that the Python agent doesn't capture telemetry for Azure Functions without our integration. We recommend installing the [Azure Functions monitoring integration](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-functions-monitoring-integration/) if you'd like to collect data about Azure Functions.
</Callout>

## Install the Python agent onto Azure App Service or Container Apps [#install-python]

<Steps>
  <Step>
    ## Add the Python agent to your Azure application [#add-python-agent]

    To add the New Relic Python agent to your Azure application, add `newrelic` to your `requirements.txt` file:

    ```bash
    foo@bar:~$ cat requirements.txt 
    newrelic
    flask
    ```

  </Step>
  <Step>
    ## Initialize the agent [#initialize-agent]

    The agent can be initialized either by manually initializing the app itself or by adding a New Relic entrypoint in the Dockerfile:

    <CollapserGroup>
      <Collapser
          id="initialize-via-app"
          title="Initialize the Python agent with `initialize()`"
      >
        
        Update your app code to import `newrelic.agent`, then add the `newrelic.agent.initialize()` function to initialize the agent. 

        Here's an example Flask app with the agent initialized:

        ```python
        # app.py
        # Run with command "flask run"

        import newrelic.agent   # ADDED
        from flask import Flask

        newrelic.agent.initialize()   # ADDED

        app = Flask(__name__)

        @app.route('/')
        def hello_world():
            return "Hello, fellow humans!"

        if __name__ == '__main__':
            app.run()
        ```

      </Collapser>
      <Collapser
          id="initialize-via-dockerfile"
          title="Initialize the Python agent through the Dockerfile"
      >
        
        If you're using a Dockerfile, add `newrelic-admin run-program` as an entrypoint to your startup script.

        ```go
        COPY requirements.txt .
        COPY app.py .

        RUN pip install -r requirements.txt

        EXPOSE 5000

        ENTRYPOINT ["newrelic-admin", "run-program"]
        CMD ["flask", "run"]
        ```

      </Collapser>
    </CollapserGroup>

  </Step>
  <Step>
    ## Configure your Azure settings [#azure-settings]

    Once you've installed the Python agent, we recommend configuring your app in either the Azure App Service or Container Apps portal, depending on the service you're using. You can update your app settings through the Azure UI, or using the Python CLI. 

    <CollapserGroup>
      <Collapser
          id="config-app-services-ui"
          title="Configure your app in Azure App Services through the Azure Portal"
      >
        1. Sign in to <DNT>**[portal.azure.com](https://portal.azure.com)**</DNT>.
        2. Select <DNT>**App Services > (select a Python app) > Settings > Environment variables**</DNT>.
        3. Add the following to the <DNT>**App settings**</DNT>:
          * `NEW_RELIC_APP_NAME`: Your Linux Azure website name
          * `NEW_RELIC_LICENSE_KEY`: Your New Relic <InlinePopover type="licenseKey" />
        4. Save your settings.
        5. Restart your Python app.

      </Collapser>
      <Collapser
          id="config-container-apps-ui"
          title="Configure your app in Azure Container Apps though the Azure Portal"
      >
        1. Sign in to <DNT>**[portal.azure.com](https://portal.azure.com)**</DNT>.
        2. Select <DNT>**Container Apps > (select a Python app) > Containers > Environment variables**</DNT>.
        3. Add the following to the <DNT>**Container settings**</DNT>:
          * `NEW_RELIC_APP_NAME`: Your Linux Azure website name
          * `NEW_RELIC_LICENSE_KEY`: Your New Relic <InlinePopover type="licenseKey" />
        4. Save your settings.
        5. Restart your Python app.

        Generate some traffic to your app and wait a few minutes. You can see your data by going to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select your app)**</DNT>.
      </Collapser>
      <Collapser
          id="config-app-services-cli"
          title="Configure your app in Azure App Services through the CLI"
      >
        Run the following on the command line: 

        ```bash
        az webapp config appsettings set --name ${WEB_APP_NAME} --settings NEW_RELIC_LICENSE_KEY=${NEW_RELIC_LICENSE_KEY} NEW_RELIC_APP_NAME=${NEW_RELIC_APP_NAME}
        ```

      </Collapser>
      <Collapser
          id="config-container-apps-cli"
          title="Configure your app in Azure Container Apps though the CLI"
      >
        Run the following on the command line:

        ```bash
        az containerapp update --name ${CONTAINER_APP_NAME} --set-env-vars "NEW_RELIC_APP_NAME=${NEW_RELIC_APP_NAME}" "NEW_RELIC_LICENSE_KEY=${NEW_RELIC_LICENSE_KEY}"
        ```

        If multiple replicas are allowed, the command above will create a new one.  Otherwise, the container replica will need to be restarted. To do so, find the name of the replica and use that to restart:

        ```bash
        az containerapp revision list --name ${CONTAINER_APP_NAME} -o table
        az containerapp revision restart --revision [Revision name from list generated above]
        ```

      </Collapser>
    </CollapserGroup>
  </Step>
</Steps>

## What's next? [#whats-next]

Now that you're collecting data from your Azure-managed Python apps, you can:

* Check out our docs to learn [how to query your New Relic data](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data).
* Learn how to [create your first alert](/docs/alerts/create-alert/create-alert-condition/alert-conditions).
* You can [get started with dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to learn how to build tailored visualizations about your environment.
