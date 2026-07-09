---
title: Redémarrages et lacunes dans les données (Kubernetes)
type: troubleshooting
tags:
  - Integrations
  - Prometheus integrations
  - Troubleshooting
metaDescription: 'Prometheus OpenMetrics integration for Kubernetes: What to do if you see restarts and gaps in data sent to New Relic.'
freshnessValidatedDate: never
translationType: machine
---

## Problème

Lors de l&apos;exécution de l&apos;intégration Prometheus OpenMetrics pour Kubernetes, vous remarquez des redémarrages et des lacunes dans les données envoyées à New Relic.

## Solution

Lorsque vous exécutez l&apos;intégration Prometheus OpenMetrics pour Kubernetes avec 500 000 points de données par minute, assurez-vous de définir ces limites :

* Limite du processeur : 1 cœur
* Limite de mémoire : 1 Go

Recommandation : exécutez toujours le scraper Kubernetes avec une seule réplique.

L&apos;ajout de répliques supplémentaires entraînera une duplication des données. Si les limites du processeur et de la mémoire ne sont pas suffisantes, cela peut entraîner des redémarrages et des lacunes dans les données.

Pour vérifier l&apos;état et redémarrer l&apos;événement pour le scraper :

```sh
kubectl describe pod -l "app=nri-prometheus"
```