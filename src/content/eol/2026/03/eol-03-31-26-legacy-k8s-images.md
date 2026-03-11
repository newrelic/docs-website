---
title: 'Permanent deletion notice: Legacy (pre-2020) Kubernetes images'
summary: 'Legacy Kubernetes container images deprecated in 2020 will be permanently removed due to security concerns.'
publishDate: '2026-03-01'
eolEffectiveDate: '2026-03-31'
---

In February 2020, New Relic replaced some individual Kubernetes container images for NR On-Host Integrations with one single container image called `newrelic/infrastructure-bundle`.

At the same time, the older images were deprecated, along with a deletion notice on Docker Hub:

![Screenshot of Docker Hub deprecation notice for legacy Kubernetes images](/images/eol_k8.webp "Docker Hub deprecation notice")

**Note:** The images were left for an additional 2 years more, to give customers time to migrate.

Now, in March 2026, based on security concerns, we will permanently remove the images listed below. These had been last updated more than 6 years ago, and were based on Alpine version 2.8, which itself reached EOL in 2020.

## Action required

To continue monitoring these services and ensure you are using the latest security-hardened images, you must migrate to the [New Relic Infrastructure Bundle (nri-bundle) Helm chart](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm/).

## Affected images

The following images will be permanently removed on **March 31, 2026**:

* `newrelic/k8s-nri-mongodb`
* `newrelic/k8s-nri-kafka`
* `newrelic/k8s-nri-couchbase`
* `newrelic/k8s-nri-rabbitmq`
* `newrelic/k8s-nri-nginx`
* `newrelic/k8s-nri-jmx`
* `newrelic/k8s-nri-cassandra`
* `newrelic/nri-statsd-alpha`
* `newrelic/k8s-webhook`

## What happens if you don't migrate?

If you are still using any of these legacy images after **March 31, 2026**, your deployments will fail to pull the images, resulting in service monitoring disruptions.

## Additional support

If you have any questions or need assistance with the migration, please reach out to our [support team](https://support.newrelic.com/s/).
