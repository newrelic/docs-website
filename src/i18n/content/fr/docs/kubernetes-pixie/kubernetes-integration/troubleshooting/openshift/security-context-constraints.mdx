---
title: "Interdit\_: non utilisable par l'utilisateur ou le compte de service"
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
  - OpenShift
metaDescription: Some troubleshooting tips if there are permissions issues with OpenShift
freshnessValidatedDate: '2024-12-09T00:00:00.000Z'
translationType: machine
---

## Problème

Le compte de service d&apos;un conteneur ne dispose pas des autorisations appropriées.

## Solution

1. Découvrez le compte de service exécuté sur ce pod.

```shell
oc get pod <pod-name> -o jsonpath='{.spec.serviceAccountName}' -n <namespace>
```

2. Ajoutez la contrainte de contexte de sécurité privilégié (ou le scc que vous souhaitez utiliser) à ce compte de service.

```shell
oc adm policy add-scc-to-user privileged system:serviceaccount:<namespace>:<release_name>-newrelic-infrastructure
```