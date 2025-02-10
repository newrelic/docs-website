---
title: 'Deprecation notice: Kubernetes'
subject: Kubernetes integration
publishDate: '2020-05-15'
eolEffectiveDate: '2020-05-15'
---

Effective Wednesday, 12 August 2020, Kubernetes integration v1.7 or lower will be deprecated. To avoid losing data, [upgrade to the latest version](https://docs.newrelic.com/docs/integrations/kubernetes-integration/installation/kubernetes-installation-configuration#update). For more information, read this note or contact your account team.

### Background

In order to provide the best possible experience for monitoring Kubernetes, we are merging the Kubernetes cluster explorer into New Relic, where you'll enjoy all the latest features.

### What is happening?

We will support [Kubernetes integrations v1.7 or lower](https://docs.newrelic.com/docs/release-notes/platform-release-notes/host-integrations-release-notes/new-relic-integration-kubernetes-170) until **Wednesday, 12 August 2020**.

Starting on July 1st the Kubernetes cluster explorer will only be available at **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Kubernetes Cluster Explorer**. The Kubernetes cluster explorer will only be compatible with Kubernetes integrations v.1.8 and newer from Wednesday, August 12th.

Therefore in order to enjoy the latest features and to be fully compatible with the New Relic Kubernetes cluster explorer, **you must [upgrade your Kubernetes integration to the latest version](https://docs.newrelic.com/docs/integrations/kubernetes-integration/installation/kubernetes-installation-configuration#update)**.

### What do you need to do?

Follow the instructions [here](https://docs.newrelic.com/docs/integrations/kubernetes-integration/installation/kubernetes-installation-configuration#update) to upgrade to the latest version of the Kubernetes integration.

### What happens if you don't make any changes to your account?

The Kubernetes integration will still send data to the New Relic platform, though the Kubernetes cluster explorer will not work for clusters running Kubernetes integration versions v1.7 or older after **Wednesday, 12 August**. In other words, the integration will still send data, however you will be unable to view that data in the cluster explorer.
