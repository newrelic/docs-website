---
title: 'Kubernetes Supported Version Changes'
subject: Kubernetes integration
publishDate: '2026-10-05'
eolEffectiveDate: '2026-10-19'
---

Effective Monday, October 19, 2026, our Kubernetes integration will support only the three most recent minor versions of Kubernetes.

## Background [#bg]

To support the latest Kubernetes versions and deliver new features, we're no longer able to offer first-class support for older versions of Kubernetes. This change better aligns our support window with the standard support window of major cloud providers.

## What's happening [#whats-happening]

* The upcoming Kubernetes integration will support only the three most recent minor versions of Kubernetes. For example, if the latest supported version is v1.36, then the integration will support v1.34, v1.35, and v1.36.
* Most major Kubernetes cloud providers don't support more than three minor versions and have already removed v1.33 and earlier from standard support.

## What do you need to do [#what-to-do]

It's easy: [Upgrade your Kubernetes clusters](/docs/integrations/kubernetes-integration/installation/kubernetes-installation-configuration#update) to a supported version.

## What happens if you don't make any changes to your account [#account]

The Kubernetes integration may continue to work with unsupported versions. However, we can't guarantee the quality of the solution because new releases may cause some incompatibilities.

Please note that we won't accept support requests for these versions that have reached the end-of-life stage.
