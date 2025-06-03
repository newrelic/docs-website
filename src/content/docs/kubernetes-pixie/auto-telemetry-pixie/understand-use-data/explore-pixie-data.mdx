---
title: Explore Pixie data
tags:
  - Pixie Auto-telemetry
  - Pixie integration
  - Kubernetes
  - eBPF
metaDescription: "Explore Pixie data in the UI of New Relic"
redirects:
freshnessValidatedDate: never
---

Auto-telemetry collected by Pixie can be found throughout New Relic's UI. Use Pixie telemetry data to do the following:

* [Monitor service health](#service-health)
* [See pod application CPU profiles](#cpu-profiles)
* [Monitor networking issues](#network-health)
* [Inspect full-body requests](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/pixie-entities)

The UI of New Relic pulls Pixie telemetry data from both short-term and long-term storage. Find out more about the hybrid storage model for the New Relic Pixie integration [here](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/overview).

## Monitor service health  [#service-health]

Pixie automatically traces HTTP (including HTTP/2) requests sent between services, even if one endpoint is outside of the cluster.

The New Relic Pixie integration exports HTTP spans from Pixie to New Relic for long-term storage using the OpenTelemetry protocol. The <DNT>**Services - OpenTelemetry**</DNT> view lists the services automatically identified by Pixie, along with a high-level overview of service response time, throughput and error rate.

<img
  title="The <DNT>**Services - OpenTelemetry**</DNT> view lists all services identified by Pixie with high-level latency, error and throughput details."
  alt="The <DNT>**Services - OpenTelemetry**</DNT> view lists all services identified by Pixie with high-level latency, error and throughput details."
  src="/images/pixie_screenshot-full_services-otel.webp"
/>

<figcaption>
  The <DNT>**Services - OpenTelemetry**</DNT> view lists all services identified by Pixie along with high-level latency, error and throughput details.
</figcaption>

Selecting a service from this list will open the service <DNT>**Summary**</DNT> view which shows graphs of the response time, throughput and error rate for all HTTP requests made to this service.

<img
  title="The <DNT>**Services - OpenTelemetry**</DNT> service Summary view shows graphs of response time, throughput and error rate over time."
  alt="The <DNT>**Services - OpenTelemetry**</DNT> service Summary view shows graphs of response time, throughput and error rate over time."
  src="/images/pixie_screenshot-full_services-otel-details.webp"
/>

<figcaption>
  The OpenTelemetry service <DNT>**Summary**</DNT> view shows graphs of response time, throughput and error rate over time.
</figcaption>

From the OpenTelemetry service view, select the <DNT>**Service map**</DNT> tab in the left sidebar. This service map view helps visualize your application's dependencies by showing a graph of all the entities that the service communicates with.

<img
  title="The OpenTelemetry <DNT>**Service map**</DNT> view shows helps visualize your application's dependencies."
  alt="The OpenTelemetry <DNT>**Service map**</DNT> view shows helps visualize your application's dependencies."
  src="/images/pixie_screenshot-full_service-otel-map.webp"
/>

<figcaption>
  The OpenTelemetry <DNT>**Service map**</DNT> view shows helps visualize your application's dependencies.
</figcaption>

The OpenTelemetry service <DNT>**Transactions**</DNT> tab shows the different endpoints that the service makes requests to. You can sort the endpoints by response time or throughput.

<img
  title="Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  alt="Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  src="/images/pixie_screenshot-full_services-otel-transactions.webp"
/>

<figcaption>
  Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab.
</figcaption>

The <DNT>**Databases**</DNT> tab shows any database requests the service makes.

<img
  title="Pixie data seen in the OpenTelemetry <DNT>**Databases**</DNT> tab."
  alt="Pixie data seen in the OpenTelemetry <DNT>**Databases**</DNT> tab."
  src="/images/pixie_screenshot-full_services-otel-databases.webp"
/>

<figcaption>
  Pixie data seen in the OpenTelemetry <DNT>**Databases**</DNT> tab.
</figcaption>

Service health information powered by Pixie can also be found from the Kubernetes cluster explorer (KCE) views. The KCE summary view includes all services automatically identified by Pixie.

<img
  title="The Kubernetes cluster explorer shows the services identified by Pixie."
  alt="The Kubernetes cluster explorer shows the services identified by Pixie."
  src="/images/pixie_screenshot-full_kce.webp"
/>

<figcaption>
  The Kubernetes cluster explorer shows the services identified by Pixie.
</figcaption>

Selecting a service shows the service details sidebar with HTTP throughput, error rate and response time data collected by Pixie:

<img
  title="The pod details page in the Kubernetes cluster explorer shows application metrics collected by Pixie."
  alt="The pod details page in the Kubernetes cluster explorer shows application metrics collected by Pixie."
  src="/images/pixie_screenshot-full_kce-pod-details.webp"
/>

<figcaption>
  The pod details page in the Kubernetes cluster explorer shows application metrics collected by Pixie.
</figcaption>

At the bottom of the service details view, select the <DNT>**Map View**</DNT> button in the <DNT>**Related Entities**</DNT> section.

This map view helps visualize your application's dependencies by showing a graph of all the entities that the service communicates with.

<img
  title="The service map shown in the pod details view is constructed using HTTP traces collected by Pixie."
  alt="The service map shown in the pod details view is constructed using HTTP traces collected by Pixie."
  src="/images/pixie_screenshot-full_kce-pod-details-map.webp"
/>

<figcaption>
  The service map shown in the pod details view is constructed using HTTP traces collected by Pixie.
</figcaption>

At the top of the service details view, select <DNT>**Check metrics in Pixie**</DNT> to be taken to the `px/service` script in the [Live Debugging with Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) tab. The `px/service script` shows a high-level overview of this service performance statistics as well as inbound requests using the short-term Pixie data stored on your cluster.

## See pod application CPU profiles  [#cpu-profiles]

You can use Pixie's continuous profiling feature to investigate spikes in CPU utilization or to identify performance issues within your application code.

Select a pod listed in the Kubernetes cluster explorer view to see the pod details view.

<img
  title="The pod detail view contains an option to see a pod cpu flamegraph."
  alt="The pod detail view contains an option to see a pod cpu flamegraph."
  src="/images/pixie_screenshot-full_kce-pod.webp"
/>

<figcaption>
  The <DNT>**Pod details view**</DNT> in the Kubernetes cluster explorer has an option to <DNT>**Check flamegraph in Pixie**</DNT>.
</figcaption>

From the pod details view, select the <DNT>**Check flamegraph in Pixie**</DNT> option to see a CPU profile using the rich set of data Pixie stores in short-term storage on your cluster.

<img
  title="Check a pod's CPU profile using Pixie"
  alt="Check a pod's CPU profile using Pixie"
  src="/images/pixie_screenshot-crop_cpu-profile.webp"
/>

<figcaption>
  Use Pixie to see CPU flamegraphs for your Kubernetes pods.
</figcaption>

To see a CPU flamegraph for a Kubernetes node, use the `px/node` script in the [Live debugging with Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) tab. Scroll to the bottom of this view to see the CPU flamegraph for the node.

Learn how to interact with Pixie's CPU flamegraphs in the [Continuous Profiling Tutorial](https://docs.px.dev/tutorials/pixie-101/profiler/).

## Monitor networking issues  [#network-health]

You can use Pixie to monitor your Kubernetes network alongside your application and infrastructure layers.

The <DNT>**Summary**</DNT> tab of the Kubernetes cluster explorer contains a <DNT>**Kubernetes network monitoring with Pixie**</DNT> section. Each view linked in this section is powered by the rich set of Pixie telemetry data [stored in short-term storage](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/overview) on your cluster.

<img
  title="Kubernetes network monitoring with Pixie"
  alt="Kubernetes network monitoring with Pixie"
  src="/images/pixie_screenshot-full_network-monitoring.webp"
/>

<figcaption>
  Use Pixie for Kubernetes network monitoring.
</figcaption>

The <DNT>**Spot DNS issues**</DNT> link will show you a graph of all the DNS requests in your cluster. Hover over any edge on the graph to see latency and throughput information.

<img
  title="Spot DNS issues with Pixie's DNS flow graph"
  alt="Spot DNS issues with Pixie's DNS flow graph"
  src="/images/pixie_screenshot-full_dns-flow-graph.webp"
/>

<figcaption>
  Spot DNS issues in your cluster using Pixie's DNS flow graph.
</figcaption>

The <DNT>**See TCP retransmissions**</DNT> and <DNT>**See dropped packets**</DNT> links will show graphs of the TCP retransmits and TCP drops in your cluster. Note that you'll need to press the `RUN` button to see results for these views. The TCP drops output is shown below:

<img
  title="See TCP drops and TCP retransmissions using Pixie"
  alt="See TCP drops and TCP retransmissions using Pixie"
  src="/images/pixie_screenshot-full_tcp-drops.webp"
/>

<figcaption>
  See TCP drops and TCP retransmissions in your cluster using Pixie.
</figcaption>

Note that the above <DNT>**Kubernetes network monitoring with Pixie**</DNT> views can also be seen in the [Live debugging with Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) tab using the `px/dns_flow_graph`, `px/tcp_drops` and `px/tcp_retransmits` scripts. These scripts have optional arguments that allow you to filter the output to select entities.
