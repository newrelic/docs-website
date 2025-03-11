---
title: Forward Kong Gateway logs
tags:
    - Logs
    - Enable log management in New Relic
    - Enable log monitoring in New Relic
metaDescription: How to forward your logs to New Relic using our kong Gateway file log plugin, so you can use enhanced log management capabilities.
freshnessValidatedDate: never
---

Forwarding Kong Gateway logs to New Relic provides valuable insights into API gateway performance, health, security, and usage. This document outlines how to direct the File Log plugin from Kong Gateway to forward logs from Kong Gateway to New Relic.

## Compatibility and requirements [#compatibility-requirements]

To use this log forwarding plugin, you need the following:

    * [Kubernetes plugin](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding) installed 
    * Kong Gateway installed with [Custom Resource Definitions (CRDs)](https://docs.konghq.com/kubernetes-ingress-controller/latest/plugins/rate-limiting/#install-the-gateway-apis)

## Install the Kong Gateway plugin [#install-overview]

To receive logs from Kong Gateway, you need to connect the Kong Gateway File Log plugin to the New Relic Kubernetes integration. This set-up directs the logs through a standard output (`/dev/stdout`), which establishes a connection between the New Relic Kubernetes integration and Kong Gateway.

<Steps>
    <Step>
    ## Install the New Relic Kubernetes logs integration [#install-k8s-logs]

    If you haven't already, [install the New Relic Kubernetes plugin for log forwarding](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding), then return to this doc. The plugin uses a standalone Docker image that collects and forwards logs from your Kubernetes environment. 

    </Step>
    <Step>
    ## Configure the File Log plugin [#install-config-filelog]

    Once you've [installed the Kong Gateway File Log plugin](https://docs.konghq.com/hub/kong-inc/file-log/), you need to direct the plugin to send logs to `/dev/stdout`. Here is an example manifest for this configuration:

        ```yaml
        # file-log-plugin.yaml
        apiVersion: configuration.konghq.com/v1
        kind: KongClusterPlugin
          metadata:
            name: global-file-log
            annotations:
                kubernetes.io/ingress.class: kong
            labels:
                global: "true"
          config:
            path: "/dev/stdout" # Directs logs through a standard output so New Relic can receive Kong Gateway logs
        plugin: file-log
        ```

    </Step>
    <Step>
    ## Deploy the configuration to your Kubernetes cluster [#deploy-config]

    Deploy the File Log plugin configuration to your Kubenrnetes cluster, but be sure to update `file-log-plugin.yaml` with the actual filename of your manifest:

        ```bash
        kubectl apply -f file-log-plugin.yaml -n kong
        ```
    </Step>
    <Step>
    ## Confirm that your logs are in the New Relic platform [#confirm-logs-platform]

    Once you've deployed the configurations, go to **[one.newrelic.com > All Capabilities > Logs](https://one.newrelic.com/launcher/logger.log-launcher)**. Confirm that logs from Kong Gateway are appearing in the platform by triggering some data, then running a query that filters for that data.
    
 You can start building that query with this example:

    ```sql
    SELECT * FROM Log
    ```
    </Step>
</Steps>

## What's next? [#whats-next]

Now that you're forwarding your Kong Gateway logs to New Relic, we recommend checking out some of our other docs and tutorials:

* Follow our tutorial to learn how to [manage a large log volume](/docs/tutorial-manage-large-log-volume/get-started-managing-large-logs). 
* Learn about [our logs query syntax](/docs/logs/ui-data/query-syntax-logs).
* Explore our docs about the logs UI, starting with our [Logs UI overview doc](/docs/logs/ui-data/use-logs-ui)


