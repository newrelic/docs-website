---
title: 'Install EKS add-on from AWS marketplace'
summary: 'Monitor EKS cluster with New Relic'
releaseDate: '2023-12-01'
---

Monitor your AWS EKS Clusters with New Relic EKS AddOn available at AWS EKS Marketplace. New Relic then offers end to end visualization on cluster metrics, logs and events. The new EKS AddOn eliminates the time consuming process of installing the helm charts manually. All it requires to do is, follow the guided steps to install the operator.

Installation of addon to EKS clusters comes with advantage to 

* **Check health of your nodes in your cluster:**  This includes monitoring the status of each node as wwell as resources available to them (such as CPU, memory usasge etc)
* **Customizable crd:** After installation of EKS Addon, you can apply customizable CRD to enable/disable various pods as per the monitoring requirements
* **Detailed events:** Detailed kubernetes events can be monitored to monitor health of the cluster
  

![A screenshot showing K8s operator in AWS Marketplace.](./images/aws-newrelic-eks-addon.webp")

**Next steps**

* Check out our documentation for [eks-add-on]([https://docs.newrelic.com/docs/mobile-apps/quick-actions/](https://docs.newrelic.com/docs/infrastructure/amazon-integrations/connect/eks-add-on/))
