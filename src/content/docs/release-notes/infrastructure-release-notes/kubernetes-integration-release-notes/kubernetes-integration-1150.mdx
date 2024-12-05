---
subject: Kubernetes integration
releaseDate: '2020-02-27'
version: 1.15.0
redirects:
  - /docs/release-notes/platform-release-notes/host-integrations-release-notes/new-relic-integration-kubernetes-1150
---

## Notes

Follow standard procedures to [install](/docs/integrations/host-integrations/host-integrations-list/kubernetes-monitoring-integration#install) or [update](/docs/integrations/host-integrations/host-integrations-list/kubernetes-monitoring-integration#update) the New Relic integration for Kubernetes.

## Changelog

* **Added:** support for querying Kube State Metrics (KSM) instances behind [kube-rbac-proxy](https://github.com/brancz/kube-rbac-proxy). This feature only works when paired with the label-based KSM discovery (see [release notes of version 1.11.0](https://docs.newrelic.com/docs/release-notes/platform-release-notes/host-integrations-release-notes#h2-new-relic-integration-for-kubernetes-1110) for more information). This adds two new environment variables that allow deeper configuration of the feature:
  * `KUBE_STATE_METRICS_SCHEME`: Whether the query should use the `http` or `https` protocols. Defaults to `http` and doesn't introduce a breaking change in behavior.
  * `KUBE_STATE_METRICS_PORT`: The port in which the `kube-rbac-proxy` instance is listening on. You can confirm this by describing your KSM pod. Defaults to `8080` and doesn't introduce a breaking change in behavior.
* **Added:** Added 4 new environment variables to explicitly set the control plane component base URLs. These variables can be used for Kubernetes configurations, such as [OpenShift](http://learn.openshift.com/?extIdCarryOver=true&sc_cid=701f2000001OH7iAAG), that are different than the defaults defined in the section [Discovery of master nodes and control plane components](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#discover-nodes-components). See the section [OpenShift 4.x Configuration](https://docs.newrelic.com/docs/integrations/kubernetes-integration/installation/configure-control-plane-monitoring#openshift-4x-configuration) for more information.
  * `SCHEDULER_ENDPOINT_URL`: The base URL of the scheduler pod metrics endpoint. The default is the empty string. In this case, [the default configuration](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#discover-nodes-components) will be used.
  * `ETCD_ENDPOINT_URL`: The base URL of the ETCD pod metrics endpoint. The default is the empty string. In this case, [the default configuration](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#discover-nodes-components) will be used.
  * `CONTROLLER_MANAGER_ENDPOINT_URL`: The base URL of the controller manager pod metrics endpoint. The default is the empty string. In this case, [the default configuration](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#discover-nodes-components) will be used.
  * `API_SERVER_ENDPOINT_URL`: The base URL of the API server pod metrics endpoint. The default is the empty string. In this case, [the default configuration](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#discover-nodes-components) will be used.
* **Fixed:** A bug preventing attributes named like `selector.<label_name>` from being added to some entries in the `K8sServiceSample`.
* **Changed:** The integration now uses [newrelic/infrastructure-bundle](https://github.com/newrelic/infrastructure-bundle/releases/tag/1.2.0) as the base image. The tag used is for the version 1.2.0. For more information on this image please see the [New Relic Infrastructure Bundle releases notes](https://github.com/newrelic/infrastructure-bundle/releases/tag/1.2.0).
