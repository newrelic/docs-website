---
title: 'Deprecation notice: Kubernetes'
subject: Kubernetes integration
publishDate: '2025-03-24'
eolEffectiveDate: '2025-03-24'
---

Effective Monday, March 3, 2025, our Kubernetes integration will not support Kubernetes v1.27 and earlier. The Kubernetes integration v3.40.1 and later will be compatible only with Kubernetes versions 1.28 and later. For more information, read this note or contact your account team.

## Background [#bg]

Enabling compatibility with the latest Kubernetes versions and adding new features to our Kubernetes offering prevents us from offering first-class support to versions v1.27 and earlier.

## What's happening [#whats-happening]

* Most major Kubernetes cloud providers have already deprecated v1.27 and earlier.

## What do you need to do [#what-to-do]

It's easy: [Upgrade your Kubernetes clusters](/docs/integrations/kubernetes-integration/installation/kubernetes-installation-configuration#update) to a supported version.

## What happens if you don't make any changes to your account [#account]

The Kubernetes integration may continue to work with unsupported versions. However, we can't guarantee the quality of the solution as new releases may cause some incompatibilities.

Please note that we won't accept support requests for these versions that have reached the end of life stage.