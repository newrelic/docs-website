---
title: Not seeing control plane data
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if you are not seeing data control plane data for your New Relic's Kubernetes integration.
redirects:
  - /docs/integrations/kubernetes-integration/troubleshooting/not-seeing-control-plane-data
freshnessValidatedDate: never
---

## Problems

You've completed the [Kubernetes installation procedure](/install/kubernetes/) and you're seeing Kubernetes data in your New Relic account but there's no data from any of the control plane components.

## Solution

<CollapserGroup>
  <Collapser
    id="control-plane-sample-missing"
    title="A control plane sample is missing"
  >
    In case the control plane data is missing, for example `K8sSchedulerSample`, the first thing to do is to check verbose logs of the control plane components. Read how to [enable verbose logging](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/#verbose-logging).

    * One possibility is that autodiscovery tries to find the control plane pods in the cluster using the most common labels; if no pod is found for a single component, it does not fail to avoid missing more data. You'll see logs similar to the following:

      ```bash
      time="2022-06-21T12:21:25Z" level=debug msg="Autodiscovering pods for \"scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="0 pods found with labels \"tier=control-plane,component=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="No pod found for \"scheduler\" with labels \"tier=control-plane,component=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="0 pods found with labels \"k8s-app=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="No pod found for \"scheduler\" with labels \"k8s-app=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="0 pods found with labels \"app=openshift-kube-scheduler,scheduler=true\""
      time="2022-06-21T12:21:25Z" level=debug msg="No pod found for \"scheduler\" with labels \"app=openshift-kube-scheduler,scheduler=true\""
      time="2022-06-21T12:21:25Z" level=debug msg="No \"scheduler\" pod has been discovered"
      ```

      In this case, you can change the discovery behavior with the `controlplane.config.[component].autodiscover[].selector` config of the  [Helm chart values](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml). Read more about the [control plane component](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-components/#nrk8s-controlplane).

    * It's also possible that the controlplane component is found, but the authentication with the endpoint fails. You'll see logs similar to the following:

      ```bash
      time="2022-06-21T15:54:52Z" level=debug msg="Endpoint \"https://localhost:10257\" probe failed, skipping: http request failed with status: 403 Forbidden"
      ```

      In this case you can change the authentication behavior for each endpoints with the `controlplane.config.[component].autodiscover[].endpoints[].auth` config of the helm [chart values](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml).

    * It's also possible that the controlplane component of the integration is not running on all control plane nodes. You can doublecheck that running this command:

      ```bash
      kubectl get pod -n <NEWRELIC_NAMESPACE> -l app.kubernetes.io/component=controlplane -o wide
      ```

      If there is any control plane pod you want to monitor running on a node whithout a New Relic monitoring instance then you can change as needed `controlplane.affinity`, `controlplane.nodeSelector`, and `controlplane.tolerations` of the [Helm chart values](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml).
  </Collapser>

  <Collapser
    id="control-plane-CrashLoopBackOff"
    title={<>Control plane component is in <InlineCode>CrashLoopBackOff</InlineCode></>}
  >
    In case the control plane components doesn't autodiscover or scrape succesfully any control plane pod it enters in `CrashLoopBackOff`.

    You can change the behaviour of autodiscovery and the authentication methods to meet your needs.

    On the other hand, if you are not interested in that data you can simply disable the control plane component by setting `controlplane.enabled=false` in the [Helm chart values](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml).
  </Collapser>
</CollapserGroup>
