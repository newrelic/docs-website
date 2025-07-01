---
title: 'Kubernetes monitoring with OpenTelemetry is generally available!'
summary: 'Leverage open-source monitoring with OpenTelemetry to achieve first-class Kubernetes observability, seamlessly provided by New Relic through advanced configuration and top-tier UIs'
releaseDate: '2025-07-01'
learnMoreLink: 'https://docs.newrelic.com/docs/kubernetes-pixie/k8s-otel/intro'
---

OpenTelemetry observability for Kubernetes provides a complete, open-source setup paired with a top-notch Kubernetes UI that is already compatible with our proprietary Kubernetes instrumentation. 

By integrating Kubernetes components into our [NRDOT collector](https://github.com/newrelic/nrdot-collector-releases/tree/main/distributions/nrdot-collector-k8s), we can transmit metrics, events, and logs directly to New Relic. These telemetry signals automatically enhance our out-of-the-box experiences such as the Kubernetes Navigator, overview dashboard, Kubernetes events, or Kubernetes APM summary page.



## How to get started?

Getting started is easy—just run a helm install command to enable Kubernetes observability with open-source monitoring.
For installation details, visit our [documentation](https://docs.newrelic.com/docs/kubernetes-pixie/k8s-otel/install).

## Benefits

* **Avoid Vendor Lock-in:** Embrace open standards with our OpenTelemetry-based solutiongiving you the freedom to select the best observability options for your needs without being tied to a single vendor.
* **Streamline Data Collection and Reduce Costs:** Unify all your Kubernetes telemetry while controlling the high costs of granular OpenTelemetry data. Our optimized default configuration automatically reduces data ingest, saving you money and eliminating the toil of manual setup.
* **Get Enterprise-Grade Support:** Rely on quick and effective support from New Relic's experts for your open-source instrumentation, allowing you to resolve issues faster than relying on community forums.

## Key features

* **Compatibility with Multiple Platforms:** Support for EKS, AKS, GKE, Red Hat OpenShift, and on-premise clusters.
* **Kubernetes Entities:** Take advantage of the entity-based capabilities provided by New Relic.
* **Helmless/Manifest Installation:** Install K8s OTel monitoring without Helm charts by simply applying [manifest files](https://docs.newrelic.com/docs/kubernetes-pixie/k8s-otel/install/#manifest-install).
* **Support for Third-Party Collectors:** While we recommend using our NRDOT collector, customers can use other distros as long as they meet the requirements specified in our [documentation](https://docs.newrelic.com/docs/kubernetes-pixie/k8s-otel/install/#otel-components).
* **Optimized Data Ingest:** Benefit from our default configuration, which streamlines the heavy and granular OpenTelemetry ingest.
* **Flexible Configuration:** Easily add your [own collector configs](https://docs.newrelic.com/docs/kubernetes-pixie/k8s-otel/advance-config/#custom-config) without conflicting with default configs provided by New Relic.
* **Prometheus Service Discovery:** Automatically [detect Prometheus endpoints](https://docs.newrelic.com/docs/kubernetes-pixie/k8s-otel/advance-config/#enable-prom-sd).
* **Predefined Alerts:** Stay informed with automatic [notifications](https://docs.newrelic.com/docs/kubernetes-pixie/k8s-otel/install/#alerts) to quickly detect any anomalies.
* **Multi-Account Support:** Easily route your telemetry to different [accounts](https://docs.newrelic.com/docs/kubernetes-pixie/k8s-otel/advance-config/#multiple-accounts).
* **Proxy Support:** Ensure secure connections with integrated [proxy configurations](https://docs.newrelic.com/docs/kubernetes-pixie/k8s-otel/advance-config/#proxy-config).
* **OpenTelemetry Customer Support:** Receive dedicated support from New Relic, offering guidance typically unavailable when using OpenTelemetry independently.

## Learn more
[Learn how to get started in the docs](https://docs.newrelic.com/docs/kubernetes-pixie/k8s-otel/intro)