---
title: 'Deprecation notice: Kubernetes'
subject: Kubernetes integration
publishDate: '2021-12-16'
eolEffectiveDate: '2021-12-16'
---

Effective Monday, 1 January 2022, our Kubernetes integration drops support for Kubernetes v1.15 and lower. The Kubernetes integration v2.8.0 and higher will only be compatible with Kubernetes versions 1.16 and higher. For more information, read this note or contact your account team.

## Background [#bg]

Enabling compatibility with the latest Kubernetes versions and adding new features to our Kubernetes offering prevents us from offering first-class support to versions prior to v1.16.

## What is happening? [#what-is-happening]

- The latest Kubernetes version v1.22 has API incompatibilities with versions prior to v1.16.
- Most major Kubernetes cloud providers have already deprecated v1.15 and lower.

## What do you need to do? [#what-to-do]

It's easy: [Upgrade your Kubernetes clusters](/docs/integrations/kubernetes-integration/installation/kubernetes-installation-configuration#update) to a supported version.

## What happens if you don't make any changes to your account? [#account]

The Kubernetes integration may continue to work with end-of-lifed versions. However, we can't guarantee the quality of the solution as new releases may cause some incompatibilities.

Note that support requests regarding these end-of-lifed versions won't be accepted.
