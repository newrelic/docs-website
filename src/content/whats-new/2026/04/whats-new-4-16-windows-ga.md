---                                                                                                                                                                                
title: "Windows node monitoring for Kubernetes is now Generally Available"                                                                                                         
summary: "Monitor Windows nodes in your Kubernetes clusters with full production support"                                                                     
releaseDate: '2026-04-16'                                                                                                                                                          
learnMoreLink: "https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/installation/windows/"                                                                      
getStartedLink: "https://docs.newrelic.com/install/kubernetes/"
--- 

We're excited to announce that Windows node monitoring for Kubernetes is now **Generally Available**. 

## What's included

- **Unified Helm chart:** Windows and Linux nodes are now monitored using the same `newrelic-infrastructure` chart, no separate installation needed. A single `enableWindows: true` flag in your `values.yaml` is all it takes.
- **Per-version DaemonSets:** The chart automatically creates one DaemonSet per supported Windows version (Windows Server 2019, Windows Server 2022), scheduling pods only to nodes with a matching OS build — eliminating empty DaemonSets in your cluster.           
- **Privileged mode (HostProcess containers):** Full node-level metrics — including CPU, memory, disk, and network — are now collected via Windows HostProcess containers, surfacing `SystemSample`, `StorageSample`, and `NetworkSample` data.
- **Guided Install support:** The Kubernetes Guided Install now includes a Windows toggle, enabling Windows monitoring automatically sets the correct flag across Helm, manifest, and other install methods. No manual config editing required.

## Compatibility

- **Cloud providers:** EKS, AKS, GKE([unprivileged mode only](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-integration-compatibility-requirements/#node-requirements))
- **OS versions:** Windows Server 2019 and Windows Server 2022
                                         
## How to get started

Use the Kubernetes Guided Install and enable the Windows toggle, or add the following to your `values.yaml` manually and run `helm upgrade`, [see full instructions](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/installation/windows/#enable-windows):                                                                                                                                                                          
```yaml         
newrelic-infrastructure:                                                                                                                                                                         
  enableWindows: true   
```

## Find out more

- [Windows nodes monitoring](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/installation/windows/)
- [Compatibility & requirements](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-integration-compatibility-requirements/#req-windows)
- [Troubleshooting Windows nodes](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/troubleshooting/troubleshooting-windows/)
