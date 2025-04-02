---
title: L'entité du contrôleur Meraki a des mesures manquantes
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'Meraki API polling is working, but expected metrics are missing.'
freshnessValidatedDate: never
translationType: machine
---

## Problème [#problem]

Lors de monitoring de l&apos;API Meraki, vous ne voyez pas toutes les métriques attendues pour votre entité.

## Solution [#solution]

Identifiez les métriques existantes dans New Relic en exécutant la requête NRQL suivante :

```sql
FROM Metric, KExtEvent SELECT
  count(*)
FACET
  metricName OR eventType(),
  instrumentation.name
WHERE instrumentation.name LIKE 'meraki%'
OR eventType() = 'KExtEvent'
SINCE 1 HOUR AGO
LIMIT MAX
```

Cette requête vous donnera une liste de tous les événements de changement de métrique et configuration dimensionnels collectés à partir de votre contrôleur Meraki au cours de la dernière heure. La [documentationconfiguration de l&apos;intégration de l&apos;API Meraki](/docs/network-performance-monitoring/advanced/advanced-config/#meraki) décrit les métriques et les attributs disponibles en fonction de différentes options dans vos paramètres.