---
title: Falta métrica en la entidad del controlador Meraki
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'Meraki API polling is working, but expected metrics are missing.'
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Durante el monitoreo API de Meraki, no ves todas las métricas esperadas para tu entidad.

## Solución [#solution]

Identifique qué métricas existen en New Relic ejecutando la siguiente consulta NRQL :

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

Esta consulta le brindará una lista de cada métrica dimensional y evento de cambio de configuración recopilados de su controlador Meraki en la última hora. La [documentación de configuración para la integración API de Meraki](/docs/network-performance-monitoring/advanced/advanced-config/#meraki) describe la métrica y el atributo disponibles en función de las diferentes opciones de su configuración.
