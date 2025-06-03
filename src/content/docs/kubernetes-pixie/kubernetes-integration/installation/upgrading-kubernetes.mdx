---
title: 'Upgrade the Kubernetes integration'
tags:
  - Integrations
  - Kubernetes integration
  - Upgrade
metaDescription: "Learn how to upgrade the Kubernetes integration."
freshnessValidatedDate: never
---

After a new version of Kubernetes has been released, you can upgrade the Kubernetes version running on control plane nodes and worker nodes in a cluster.

## Upgrade our Kubernetes integration [#update]

Our Kubernetes integration is under active development and we regularly [release updates](/docs/release-notes/infrastructure-release-notes/kubernetes-integration-release-notes/), which include bug fixes, new features, and support for newer Kubernetes versions and cloud providers. We strongly recommend that you regularly update your Kubernetes integration to get the best experience.

### Upgrade using the guided install and Helm [#upgrade-helm]

In order to update an installation that was deployed using the Helm command provided by the [guided install](https://one.newrelic.com/nr1-core?state=51fbbd48-c8ca-ead9-bb90-af96e18d82a7), go through the process and run the Helm command again. This will pull the new version of the chart and its dependencies and upgrade it to the latest version.

If you want to manually upgrade your Kubernetes integration installed via Helm:

1. Update the local chart repository:

   ```bash
   helm repo update
   ```

2. Update the release by running the appropriate `helm upgrade --install ...` command from the section above:

   ```bash
   helm upgrade --install newrelic-bundle newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml
   ```

### Upgrade using the guided install and plain manifests [#update-manifests]

<Callout variant="tip">
  We encourage you to deploy our integration using Helm, as it provides a cleaner upgrade path compared to using manifests directly.
</Callout>

If you used custom manifests instead of Helm:

1. First, remove the old installation:

   ```bash
   kubectl delete -f previous-manifest-file.yml
   ```

2. Proceed through the guided install again. This will generate an updated set of manifests that you can deploy using:

   ```bash
   kubectl apply -f manifest-file.yml
   ```

We don't recommend applying a new version of the manifest file without removing the previous one first, since it might leave some leftover components in your cluster.

If you need an advanced way to create your manifest, template it using Helm.

## Upgrade the `nri-bundle` version [#update-nri-bundle]

The following are some issues you may encounter when upgrading your [`nri-bundle`](https://github.com/newrelic/helm-charts/blob/master/charts/nri-bundle/README.md), along with how to resolve them.

### Changed label selectors [#changed-label-selectors]

When upgrading to the new version of `kube-state-metrics` (or KSM), you might see an error like this:

```
v1.LabelSelector{MatchLabels:map[string]string{"app.kubernetes.io/instance":"newrelic", "app.kubernetes.io/name":"kube-state-metrics"}, MatchExpressions:[]v1.LabelSelectorRequirement(nil)}: field is immutable
```

The label selector in the new version of the chart changed, but the name of the deployment did not. Therefore, in order to upgrade you need to remove the `kube-state-metrics` deployment before running `helm upgrade`, or to fully uninstall and then reinstall the integration.

### Deprecated values [#deprecated-values]

If you encounter the following log:

```
warning: skipped value for nri-bundle.kube-state-metrics.collectors: Not a table.
Error: UPGRADE FAILED: template: nri-bundle/charts/kube-state-metrics/templates/role.yaml:18:6: executing "nri-bundle/charts/kube-state-metrics/templates/role.yaml" at <has "certificatesigningrequests" $.Values.collectors>: error calling has: Cannot find has on type map
```

This is because the KSM chart values changed and the map of collectors has been changed to a list of collectors.
The collector list is not needed anymore, and it has been removed from the new values.

If you still have those in your static Helm values, or if you are using the flag `--reuse-values`, you should first remove the following values:

```yml
kube-state-metrics:
  collectors:
    certificatesigningrequests: true
    ingresses: false
```

### Unsupported Kubernetes resources [#unsupported-k8s-resources]

When upgrading the `nri-bundle`, you might see an error about a certain resource not being supported by a specific Kubernetes API. For example,

```
Error: UPGRADE FAILED: unable to build kubernetes objects from current release manifest: resource mapping not found for name: "newrelic-bundle-nri-metadata-injection" namespace: "" from "": no matches for kind "MutatingWebhookConfiguration" in version "admissionregistration.k8s.io/v1beta1"
```

That means the corresponding Kubernetes resource is not supported by the corresponding Kubernetes API. You can follow the instructions in the [Helm mapkubeapis Plugin repo](https://github.com/helm/helm-mapkubeapis) to solve the error.
