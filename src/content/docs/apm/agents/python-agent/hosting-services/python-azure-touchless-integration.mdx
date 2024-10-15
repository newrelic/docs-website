---
title: Integrate the Python agent on Microsoft Azure Container Apps and App Service
metaDescription: How to integrate APM for Python on Microsoft Azure App Services and Container Apps
redirects:
  - /docs/agents/python-agent/hosting-services/python-agent-microsoft-azure-touchless
  - /docs/python/python-agent-on-microsoft-azure-touchless
freshnessValidatedDate: never
---

<Callout title="preview">
  We're still working on this feature, but we'd love for you to try it out!

  This feature is currently provided as part of a preview program pursuant to our [pre-release policies](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

This document provides solutions on New Relic integration into Azure hosted Python applications without having to modify the application code.  There are two supported instances of this capability:

    * [Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/overview)
    * [Microsoft Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/overview), using code

Support for New Relic integration for App Services using containerized images is not available.

## Compatibility and requirements [#compatibility-requirements]

Before you begin, we recommend the following:

* Starting with a Container App or App Service that has been deployed
* Installing the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-macos) in your environment if not using the Azure Portal

<Callout variant="tip" title="Info">
Keep in mind that the Python agent doesn't capture telemetry for Azure Functions without our integration. We recommend installing the [Azure Functions monitoring integration](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-functions-monitoring-integration/) if you'd like to collect data about Azure Functions.
</Callout>

## Integrate the Python agent onto Container Apps [#integrate-agent-container-app]

In certain cases, an app managed through [Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/overview) already has an image that cannot be modified by the user (or the user may simply not want to modify the app).  This provides a way to integrate New Relic into the environment without having to make any modifications to the code that builds the containerized image.

This can be done through the Azure Portal or the Azure CLI.

<CollapserGroup>
    <Collapser
        id="container-app-init-container-portal"
        title="Integrate the New Relic Python Agent into a Container App through the Azure Portal"
    >

    <Steps>
        <Step>
        ### Add [New Relic License Key](docs/apis/intro-apis/new-relic-api-keys/#license-key) to Azure Key Vault [#add-license-key-portal]

        This step is optional but highly recommended.

        If [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault) has not been created, follow [this quickstart guide](https://learn.microsoft.com/en-us/azure/key-vault/general/quick-create-portal).

        1. Select <DNT>**Container Apps > (select a Python app) > Settings > Secrets**</DNT>.
        2. Add a secret.  Give the secret a name, select "Key Vault reference", and add your license key
        3. Save your changes.

        </Step>
        <Step>
        ### Link Azure File Share to Container App [#add-volume-portal]

        Create an [Azure File Share](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction) by following [this quickstart tutorial](https://learn.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-portal?tabs=azure-portal).

        1. Select <DNT>**Container Apps > (select a Python app) > Application > Containers**</DNT>.
        2. Select "Edit and deploy"
        3. Jump to "Volumes" tab and click "(+) Add"
        4. Select "Azure file volume", fill in desired volume name, and select the file share created earlier.
        5. Save your changes.

        </Step>
        <Step>

        ### Add and setup init container [#init-container-setup-portal]

        1. Select <DNT>**Container Apps > (select a Python app) > Application > Containers**</DNT>.
        2. Under the "Container image" section, click "Add" and select "Init container"
        3. Enter the following:
            * Desired init container name
            * "Docker Hub or other registries" for "Image source"
            * `newrelic/newrelic-python-init` under "Image and tag"
            * `/bin/sh` for "Command override"
            * `-c, cp -r /instrumentation /mnt/` for "Arguments override"
            * Desired CPU Cores and Memory. This must not exceed that of the primary container.
        4. Go to "Volume Mounts" tab and select the volume mount created in the previous steps. The mount path should be `/mnt/instrumentation`.
        5. Save your changes.

        </Step>
        <Step>

        ### Link New Relic to the primary application [#link-nr-to-app-portal]

        1. Select <DNT>**Container Apps > (select a Python app) > Application > Containers**</DNT>.
        2. Under the "Container image" section, select the primary application and click "Edit"
        3. Jump to "Environment variables" tab and enter the following:
            * `NEW_RELIC_APP_NAME`: [desired app name]
            * `PYTHONPATH`: `/mnt/instrumentation`
            * `NEW_RELIC_AZURE_OPERATOR_ENABLED`: `True`
            * `NEW_RELIC_LICENSE_KEY` > Reference a secret > select the secret name from Step 1 (or manually enter the license key)
        4. Go to "Volume Mounts" tab and select the volume mount created in Step 2. The mount path should be `/mnt/instrumentation`.
        5. Save your changes.

        </Step>

        This should re-deploy the container app.  Wait a few minutes for the init container to finish running.

    </Steps>

    </Collapser>
    <Collapser
        id="container-app-init-container-cli"
        title="Integrate the New Relic Python Agent into a Container App through the Azure CLI"
    >

    <Steps>

        <Step>
        ### Add New Relic License Key to Azure Key Vault [#add-license-key-cli]

        This step is optional but highly recommended.

        If [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault) has not been created, follow [this quickstart tutorial](https://learn.microsoft.com/en-us/azure/key-vault/general/quick-create-cli).

        `az containerapp secret set --name $CONTAINER_APP_NAME --resource-group $RESOURCE_GROUP --secrets license-key=$NEW_RELIC_LICENSE_KEY`

        </Step>
        <Step>

        ### Create an Azure File Share and link to Container App [#add-volume-cli]

        1. `az storage account create --resource-group $RESOURCE_GROUP --name $STORAGE_ACCOUNT_NAME --location $LOCATION --kind StorageV2 --sku Standard_LRS --enable-large-file-share`
        2. `az storage share-rm create --resource-group $RESOURCE_GROUP --storage-account $STORAGE_ACCOUNT_NAME --name $STORAGE_SHARE_NAME --quota 4096 --enabled-protocols SMB`
        3. ``STORAGE_ACCOUNT_KEY=`az storage account keys list -n $STORAGE_ACCOUNT_NAME --query "[0].value" -o tsv --resource-group $RESOURCE_GROUP` ``
        4. `az containerapp env storage set --access-mode ReadWrite --azure-file-account-name $STORAGE_ACCOUNT_NAME --azure-file-account-key $STORAGE_ACCOUNT_KEY --azure-file-share-name $STORAGE_SHARE_NAME --storage-name $STORAGE_MOUNT_NAME --name $ENVIRONMENT_NAME --resource-group $RESOURCE_GROUP`
        
        </Step>
        <Step>
        
        ### Add environment variables [#add-env-vars-cli]        

        `az containerapp update --name $CONTAINER_APP_NAME --resource-group $RESOURCE_GROUP --set-env-vars "NEW_RELIC_APP_NAME=$NEW_RELIC_APP_NAME" "NEW_RELIC_AZURE_OPERATOR_ENABLED=True" "NEW_RELIC_LICENSE_KEY=secretref:license-key" "PYTHONPATH="/mnt/instrumentation`

        </Step>
        <Step>

        ### Link New Relic to the primary application [#link-nr-to-app-portal]

        #### Export container app's configuration
        `az containerapp show --name $CONTAINER_APP_NAME --resource-group $RESOURCE_GROUP --output yaml > demoapp.yaml`

        This file will produce a partial template file which contains information about the container app. Additional information will need to be added to link New Relic to the app.

        #### Mount volume to container app
        In properties > template, there will be a section called `volumes`.  Right now, this says `volumes: null`. We will replace that line with these lines:

        ```bash
        volumes:
        - name: $VOLUME_NAME
            storageName: $STORAGE_MOUNT_NAME
            storageType: AzureFile
        ```

        Where `$STORAGE_MOUNT_NAME` is what was used in Step 2 and `$VOLUME_NAME` is a name of your choosing

        #### Add init container
        In properties > template, there will be a section called `initContainers`. Right now, this says `initContainers: null`. We will replace that line with these lines:

        ```bash
        initContainers:
        - args:
            - -c
            - cp -r /instrumentation /mnt/
            command:
            - /bin/sh
            image: docker.io/newrelic/newrelic-python-init
            name: nr-init-container
        ```

        #### Link volume to containers
        In properties > template, we now have `containers` and `initContainers` sections. Within each of these sections, add the following lines:

        ```bash
        volumeMounts:
        - mountPath: /mnt/instrumentation
            volumeName: $VOLUME_NAME
        ```

        Where `$VOLUME_NAME` is the name chosen earlier

        #### Update container app with new configuration
        `az containerapp update --name $CONTAINER_APP_NAME --resource-group $RESOURCE_GROUP --yaml demoapp.yaml`

        This should re-deploy the container app.  Wait a few minutes for the init container to finish running.

        </Step>
    </Steps>
    </Collapser>
</CollapserGroup>

## Integrate the Python agent onto Azure App Service [#integrate-agent-app-service]

Currently App Services only support sidecars but not init containers.  Until that support is available, this prebuild script can be used.  Note: This only works for App Services using code and not for containerized images.

This can be done through the Azure Portal or the Azure CLI:

    ```bash prebuild.sh
    #!/bin/sh
    # prebuild.sh

    # Retrieve files to use in startup script:
    curl -L https://raw.githubusercontent.com/newrelic/newrelic-agent-init-container/refs/heads/main/src/python/newrelic_k8s_operator.py > newrelic_k8s_operator.py
    curl -L https://raw.githubusercontent.com/newrelic/newrelic-agent-init-container/refs/heads/main/src/python/requirements-vendor.txt > requirements-vendor.txt
    curl -L https://raw.githubusercontent.com/newrelic/newrelic-agent-init-container/refs/heads/main/src/python/requirements-builder.txt > requirements-builder.txt

    cd /home/

    pip install -r requirements-builder.txt

    export NEW_RELIC_EXTENSIONS=false
    export WRAPT_DISABLE_EXTENSIONS=true

    pip install newrelic --target=./workspace/newrelic

    mkdir -p ./workspace/vendor
    pip install --target=./workspace/vendor -r requirements-vendor.txt

    cp ./workspace/* /home/
    cp /home/workspace/newrelic/newrelic/bootstrap/sitecustomize.py /home/sitecustomize.py

    cd /home/site/wwwroot

    # This is the where the application's original startup script goes:
    gunicorn app:app
    ```

<CollapserGroup>
    <Collapser
        id="app-service-startup-script-portal"
        title="Integrate the New Relic Python Agent into App Services through the Azure Portal"
    >
        <Steps>
            <Step>
                ### Upload Startup Script
                Go to https://[YOUR_LINUX_AZURE_WEBSITE_NAME].scm.azurewebsites.net/newui/fileManager and upload the `prebuild.sh` script into the `/home` directory

            </Step>

            <Step>
                ### Add necessary environment variables

                1. Select <DNT>**App Services > (select a Python app) > Settings > Environment variables**</DNT>.
                2. Add the following to the <DNT>**App settings**</DNT>:
                    * `NEW_RELIC_APP_NAME`: Your Linux Azure website name
                    * `NEW_RELIC_LICENSE_KEY`: Your New Relic <InlinePopover type="licenseKey" />
                    * `PYTHONPATH`: `/home:/home/workspace/newrelic`
                    * `NEW_RELIC_AZURE_OPERATOR_ENABLED`: `True`
                3. Save your settings.
                
                If a specific agent version is desired, add the `AGENT_VERSION` environment variable with the version number, prepended by `v` (e.g. `v10.0.0`).

            </Step>

            <Step>
                ### Add `prebuild.sh` as a startup file setting

                1. Select <DNT>**App Services > (select a Python app) > Settings > Configuration**</DNT>.
                2. Add the following to <DNT>**Startup Command**</DNT>: `/home/prebuild.sh`
                3. Save your settings.  This should redeploy the app.

            This will take a few minutes.
            </Step>
        </Steps>
    </Collapser>

    <Collapser
        id="app-service-startup-script-cli"
        title="Integrate the New Relic Python Agent into App Services through the Azure CLI"
    >
        <Steps>
            <Step>
                ### Upload Startup Script
                `az webapp deploy --resource-group ${RESOURCE_GROUP} --name ${WEB_APP_NAME} --src-path prebuild.sh --target-path /home/prebuild.sh --type=static`

            </Step>
            <Step>
                ### Add necessary environment variables
                `az webapp config appsettings set --name ${WEB_APP_NAME} --resource-group ${RESOURCE_GROUP} --settings NEW_RELIC_LICENSE_KEY=$NEW_RELIC_LICENSE_KEY NEW_RELIC_AZURE_OPERATOR_ENABLED=true NEW_RELIC_APP_NAME="Azure Service App" PYTHONPATH="/home:/home/workspace/newrelic"`
                
                If a specific agent version is desired, add the `AGENT_VERSION` environment variable with the version number, prepended by `v` (e.g. `v10.0.0`) as shown in the example below:

                `az webapp config appsettings set --name ${WEB_APP_NAME} --resource-group ${RESOURCE_GROUP} --settings AGENT_VERSION=v10.0.0`

            </Step>
            <Step>
                ### Add `prebuild.sh` as a startup file setting
                `az webapp config set --resource-group ${RESOURCE_GROUP} --name ${WEB_APP_NAME} --startup-file "/home/prebuild.sh"`

            This will take a few minutes.
            </Step>
        </Steps>
    </Collapser>

</CollapserGroup>

### Troubleshooting [#troubleshooting]

In some cases, telemetry may not be available, or that the `prebuild.sh` script may cause the existing application to fail re-deployment.  To remedy this, enable these environment variables:

    * `SCM_DO_BUILD_DURING_DEVELOPMENT`: `True`
    * `ENABLE_ORYX_BUILD`: `True`
