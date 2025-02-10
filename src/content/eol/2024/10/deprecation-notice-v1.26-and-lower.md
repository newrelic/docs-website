---
title: 'Deprecation notice: Kubernetes'
subject: Kubernetes integration
publishDate: '2024-10-29'
eolEffectiveDate: '2024-10-19'
---

Effective Tuesday, October 29, 2024, our Kubernetes integration drops support for Kubernetes v1.26 and lower. The Kubernetes integration v3.30.0 and higher will only be compatible with Kubernetes versions 1.27 and higher. For more information, read this note or contact your account team.

## Background [#bg]

Enabling compatibility with the latest Kubernetes versions and adding new features to our Kubernetes offering prevents us from offering first-class support to versions v1.26 and lower.

## What's happening [#whats-happening]

- Most major Kubernetes cloud providers have already deprecated v1.26 and lower.

## What do you need to do [#what-to-do]

It's easy: [Upgrade your Kubernetes clusters](/docs/integrations/kubernetes-integration/installation/kubernetes-installation-configuration#update) to a supported version.

## What happens if you don't make any changes to your account [#account]

The Kubernetes integration may continue to work with unsupported versions. However, we can't guarantee the quality of the solution as new releases may cause some incompatibilities.

Please note that we won't accept support requests for these versions that have reached the end of life stage.
