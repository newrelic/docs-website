---
title: 'Otel obsevability for Kubernetes'
tags:
    - Kubernetes integration
    - OpenTelemetry
metaDescription: "Learn how to monitor your Kubernetes Cluster using OpenTelemetry"
freshnessValidatedDate: 2024-07-20
---


import k8sOTelDiagram from 'images/infrastructure_diagram_k8s-otel-stack.webp'


Kubernetes is an open-source tool for automating deployments, scaling, and managing containerized applications. The New Relic Kubernetes monitoring integration gives you a quick and easy way to see what's going on with your Kubernetes clusters and workloads, whether they're hosted on-premises or in the cloud.

Once you've got the [Kubernetes integration up and running](/docs/kubernetes-pixie/kubernetes-integration/installation/kubernetes-integration-install-configure/), you can start monitoring all the services running on Kubernetes in one place with to our [Kubernetes out-of-the-box experiences](/docs/integrations/kubernetes-integration/cluster-explorer/kubernetes-cluster-explorer). It shows you everything from the top of the control plane down to the applications running on a single pod, so you can get to the heart of how your cluster works.

    <img
    title="K8s OTel diagram"
    alt="K8s OTel diagram"
    src={k8sOTelDiagram}
    />

<Callout title="preview">
    We're still working on this feature, but we'd love for you to try it out!
    This feature is currently provided as part of a preview program pursuant to our [pre-release policies](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

OpenTelemetry observability for Kubernetes offers users comprehensive, open-source instrumentation paired with first-class Kubernetes UI that our proprietary Kubernetes instrumentation already supports. Our K8s UIs  UIs are designed to be provider agnostic, giving users complete flexibility to choose between OpenTelemetry or New Relic instrumentation based on their needs.

This documentation outlines the process for monitoring a Kubernetes cluster utilizing OpenTelemetry. It involves the installation of the [nr-k8s-otel-collector](https://github.com/newrelic/helm-charts/tree/master/charts/nr-k8s-otel-collector) Helm chart within the cluster and the deployment of the necessary collectors to enable first-class observability.

With the incorporation of various components in the OpenTelemetry collector, we can transmit metrics, events, and logs directly to New Relic.
These telemetry signals automatically enhance our out-of-the-box experiences like our [Kubernetes navigator](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#navigator-preview) , [Overview dashboard](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#cluster-overview-dashboard), [Kubernetes events](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#browse-your-kubernetes-events) or the [APM Kubernetes page](https://docs.newrelic.com/docs/apm/apm-ui-pages/monitoring/kubernetes-summary-page/).

## Requirements [#requirements]

To transmit Kubernetes telemetry data to New Relic, we need an OpenTelemetry collector. 
Our New Relic Distribution of OpenTelemetry (NRDOT) comes pre-configured to automatically monitor a Kubernetes cluster. It achieves this by deploying all the necessary components through our [nr-k8s-otel-collector ](https://github.com/newrelic/helm-charts/tree/master/charts/nr-k8s-otel-collector)Helm chart.

If you're leaning towards a different OpenTelemetry collector, just double-check that it's got all the key components you need.

- [Hostmetrics receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/hostmetricsreceiver)
- [Prometheus receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/prometheusreceiver)
- [K8sevents receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/k8seventsreceiver)
- [Kubelet receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/kubeletstatsreceiver)
- [Filelog receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/filelogreceiver)
- [Attributes processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/attributesprocessor)
- [Filter processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/filterprocessor)
- [GroupByAttrs processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/groupbyattrsprocessor)
- [K8sAttributes processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/k8sattributesprocessor)
- [MetricsTransform processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/metricstransformprocessor)
- [Resource processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/resourceprocessor)
- [ResourceDetection processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/resourcedetectionprocessor)
- [Transform processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/transformprocessor)

## Installation [#installation]

To successfully install OpenTelemetry observability in your cluster, please follow these steps:

- ​​Begin by downloading the [Helm chart values file](https://github.com/newrelic/helm-charts/tree/master/charts/nr-k8s-otel-collector/values.yaml#L20-L24) and tailor it to meet your requirements.

  - Cluster name and License key are mandatory.

  - Check the entire list of config parameters [here](https://github.com/newrelic/helm-charts/tree/master/charts/nr-k8s-otel-collector#values).

- Install the [Helm chart](https://github.com/newrelic/helm-charts/tree/master/charts/nr-k8s-otel-collector) together with the values file 

<!---->

    helm repo add newrelic https://helm-charts.newrelic.com
    helm upgrade nr-k8s-otel-collector newrelic/nr-k8s-otel-collector -f your-custom-values.yaml -n newrelic --create-namespace --install

- Ensure the pods have been successfully spun up.

<!---->

    kubectl get pods -n newrelic --watch

- Verify that data, including metrics, events, and logs, is being received in New Relic by executing the appropriate queries. Additionally, you can confirm this by accessing the Kubernetes curated UIs.

<!---->

    FROM Metric SELECT * WHERE k8s.cluster.name='<CLUSTER_NAME>'
    FROM InfrastructureEvent SELECT * WHERE k8s.cluster.name='<CLUSTER_NAME>'
    FROM Log SELECT * WHERE k8s.cluster.name='<CLUSTER_NAME>'

If using **GKE Autopilot**,  it's necessary to apply the following configuration in your values.yaml file to ensure compatibility and proper functionality of the OTel collectors. 

    privileged: false
    receivers:
      filelog:
        enabled: false
    daemonset:
      containerSecurityContext:
        privileged: false

## Uninstalling [#uninstalling]

Run the following command.

    helm uninstall nr-k8s-otel-collector -n newrelic

## How it works? [#howitworks]

The [nr-k8s-otel-collector](https://github.com/newrelic/helm-charts/tree/master/charts/nr-k8s-otel-collector) Helm chart deploys two kinds of OpenTelemetry collectors.

- Deamonset collector : Deployed on each worker node and responsible for gathering metrics of the underlying host in the node, cAdvisor, Kubelet and for picking up logs from the containers.
- Deployment collector : Deployed on the master node and responsible for gathering metrics of Kube State Metrics and Kubernetes cluster events.

  

## Reduce data ingest [#reduce]

The **LowDataMode** option is turned on by default to ingest just the metrics required by our Kubernetes UIs.

If you need to further cut down on data ingestion, feel free to bump up the scrape interval in the [chart values](https://github.com/newrelic/helm-charts/tree/master/charts/nr-k8s-otel-collector#values) for each deployed component.

## Metrics [#metrics]

- [Metrics - Full list](https://github.com/newrelic/helm-charts/tree/master/charts/nr-k8s-otel-collector/docs/metrics-full.md)
- [Metrics - LowDataMode list](https://github.com/newrelic/helm-charts/tree/master/charts/nr-k8s-otel-collector/docs/metrics-lowDataMode.md)

## Find and use data [#find]

- You can learn more about our curated Kubernetes UIs for Infrastructure [here](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/).
- Check out the [APM Kubernetes summary page](https://docs.newrelic.com/docs/apm/apm-ui-pages/monitoring/kubernetes-summary-page/) which offers insights into your Kubernetes environment alongside your monitored applications.

## Troubleshooting [#troubleshooting]

Inspect the logs of the collector pod that's experiencing issues.

    kubectl logs <otel-pod-name> -n newrelic

If necessary, you can amplify the detail in the logs by setting the **verboseLog** parameter in the Helm chart to True.

## Common Errors [#common]

Check the corresponding [section](https://github.com/newrelic/helm-charts/tree/master/charts/nr-k8s-otel-collector#common-errors) in our GitHub repository.

## Support [#errors]

For issues with the OpenTelemetry obsevability for Kubernetes:

- Review the [issues section on GitHub](https://github.com/newrelic/helm-charts/issues) for any similar problems or consider opening a new issue.
-  You can reach out to the [New Relic support](https://support.newrelic.com/?_gl=1*9cfph2*_gcl_au*ODY3NDMxNTQ0LjE3MjA0NTEzNDA.*_ga*MTAzNzI2MTQ3NS4xNjE5MDgxMjMx*_ga_R5EF3MCG7B*MTcyMTQ0MjU1OS4xNC4wLjE3MjE0NDI1NjUuNTQuMS4xODAwNTcwMjc3) team for assistance.

