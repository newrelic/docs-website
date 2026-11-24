---
title: 'Deprecation Notice: Kubernetes 1.31 and earlier'
subject: Kubernetes integration
publishDate: '2026-10-02'
eolEffectiveDate: '2026-10-05'
---

Effective Monday, October 5, 2026, our Kubernetes integration will no longer support Kubernetes v1.31 and earlier. Starting with v4.8.0, the integration will be compatible only with Kubernetes versions 1.32 and later.

## Background [#bg]

To support the latest Kubernetes versions and deliver new features, we're no longer able to offer first-class support for v1.31 and earlier. Most major Kubernetes cloud providers have already deprecated v1.31 and earlier.

## What's happening [#whats-happening]

* The Kubernetes integration v4.8.0 and later will be compatible only with Kubernetes versions 1.32 and later.

## What do you need to do [#what-to-do]

It's easy: [Upgrade your Kubernetes clusters](/docs/integrations/kubernetes-integration/installation/kubernetes-installation-configuration#update) to a supported version.

## What happens if you don't make any changes to your account [#account]

The Kubernetes integration may continue to work with unsupported versions. However, we can't guarantee the quality of the solution because new releases may cause some incompatibilities.

Please note that we won't accept support requests for these versions that have reached the end-of-life stage.
