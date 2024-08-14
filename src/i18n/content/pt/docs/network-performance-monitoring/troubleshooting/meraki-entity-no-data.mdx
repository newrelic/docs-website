---
title: Entidade controladora da Meraki tem métrica faltando
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'Meraki API polling is working, but expected metrics are missing.'
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Durante o monitoramento API Meraki, você não vê todas as métricas esperadas para sua entidade.

## Solução [#solution]

Identifique quais métricas existem no New Relic executando a seguinte consulta NRQL :

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

Esta consulta lhe dará uma lista de todos os eventos de alteração de configuração e métrica dimensional coletados do seu controlador Meraki na última hora. A [documentação de configuração da integração Meraki API ](/docs/network-performance-monitoring/advanced/advanced-config/#meraki)descreve as métricas e atributos disponíveis com base nas diferentes opções em suas configurações.
