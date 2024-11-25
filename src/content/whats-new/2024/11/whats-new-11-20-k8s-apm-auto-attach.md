---
title: 'Introducing Kubernetes APM auto-attach'
summary: 'New Relic extends one-step observability to Kubernetes for application workloads'
releaseDate: '2024-11-20'
learnMoreLink: 'https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/installation/k8s-agent-operator/'
---

The dynamic nature of Kubernetes environments makes it complicated to monitor your application workloads, as the containers hosting those workloads frequently spin up and down. Developers must continuously modify their workloads and deploy agents to achieve full visibility and manage performance effectively. This process makes installing and managing the life cycle of APM and Kubernetes instrumentation cumbersome and time-consuming, which negatively impacts developer productivity.

New Relic extends one-step observability to Kubernetes for fast instrumentation and out-of-the-box, AI-powered insights. It features automatic APM instrumentation with Kubernetes deployments and delivers out-of-the-box AI-powered insights with automatic correlation across applications and Kubernetes. All of this is accessible through a single user interface, enabling faster performance management and more efficient troubleshooting.

### K8s APM Auto-attach capabilities: 

  * **One-step APM and K8s instrumentation:**  New Relic APM auto-attach provides simple installation and one-time setup for auto-instrumentation for both APM and Kubernetes.
  * **Simple agent upgrades:** APM agent versions can be automatically updated to the latest version (or any other)  based on your needs.
  * **Empowered DevOps Teams:** DevOps teams gain independence by automatically instrumenting APM agents without relying on app developers. No changes in the application deployment manifest are needed.
  * **Agents supported:** Java, Node.js, Python, Ruby, .NET and PHP.

![An animated gif showing the K8s APM auto-attach installation flow.](/images/k8s-apm-auto-attach-flow.webp "An animated gif showing the K8s APM auto-attach installation flow.")

## How to start

Depending on your choice you can install it by taking advantage of our K8s guided install which includes APM auto-attach or following the steps described in our public docs.

### Guided install

The new K8s installation flows not only includes K8s APM auto-attach to be installed automatically but also provides guidance to inject the instrumentation CR needed to enable auto-instrumentation.

  1. Click on **Integrations & Agents** on the left menu.
  2. Select **Kubernetes & containers** collection listed in the bottom of the screen.
  3. Finally, click on the **Kubernetes** tile to start the guided install.

![Steps required to start the K8s guided install including APM auto-attach.](/images/k8s-apm-auto-attach-steps.webp "Steps required to start the K8s guided install including APM auto-attach.")


### Manual install

Depending on your needs you can install APM Auto-attach separately or as part of the Kubernetes integration.

  * [Installation as part of the Kubernetes integration](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/installation/k8s-agent-operator/#bundle-installation)
  * [Standalone installation](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/installation/k8s-agent-operator/#standalone-installation)

After installing K8s APM auto-attach you just need to configure APM auto-instrumentation by deploying an instrumentation CR in the cluster.

In this [section](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/installation/k8s-agent-operator/#configure-auto-instrumentation) you will find complete information and examples.

Check our [public docs](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/installation/k8s-agent-operator) for more information.

