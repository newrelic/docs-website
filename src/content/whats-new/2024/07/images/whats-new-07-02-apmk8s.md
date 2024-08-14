---
title: 'Automatically monitor APM and Kubernetes with the New Relic Kubernetes agent operator'
summary: 'Break down team silos and accelerate full stack observability with one step APM and K8s instrumentation'
releaseDate: '2024-07-02'
learnMoreLink: ''
getStartedLink: 'https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/installation/k8s-agent-operator/'
---

Achieving full stack observability for containerized applications is a challenge. Usually, you need to install and manage separate agents for both applications and Kubernetes. This creates friction within CI/CD pipelines, where managing deployments across large fleets becomes complex and time-consuming. 

**New Relic K8s agent operator**(now in preview) streamlines full-stack observability for Kubernetes environments by automating APM instrumentation alongside the Kubernetes integration deployment. It currently supports Java, Ruby, Python, .NET, and Node.js, with additional languages coming soon. With the K8s agent operator you get:

* **One step APM and K8s instrumentation:** Simple installation using a helm chart and one-time setup for auto-instrumentation for both APM and Kubernetes.
* **Simple agent upgrades:**  APM agents are automatically updated to the latest version(or a specific version)for new pods, based on the configuration of the instrumentation custom resource.
* **Empowered DevOps Teams:** DevOps teams gain independence by automatically instrumenting APM agents without relying on app developers. This breaks down silos and accelerates achieving full-stack observability.
