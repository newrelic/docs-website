---
title: Não é possível criar condição de alerta para integração de infraestrutura
type: troubleshooting
tags:
  - Integrations
  - Amazon integrations
  - Troubleshooting
metaDescription: Troubleshooting suggestions if you cannot create an alert condition for your New Relic infrastructure integration.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você não pode criar uma [infraestrutura condição do alerta](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/infrastructure-alerts-add-edit-or-view-host-alert-information) porque a métrica que você deseja alertar não aparece na seção <DNT>**Define thresholds**</DNT> da página de alertas da nossa interface de infraestrutura.

## Solução

Em vez de usar a interface de infraestrutura do New Relic, use [a infraestrutura REST chamada de API](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts) para criar a condição do alerta.

1. Revise a [sintaxe da consulta para criar (POST)](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts#post-conditions) uma condição de infraestrutura.

2. Revise os [requisitosAPI para condições métricas](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts#metric-api).

3. Ao criar a condição: Para o campo `select_value` , crie o nome da métrica usando a sintaxe a seguir, em que `provider` é uma sequência de prefixo padrão:

   ```
   provider.metric.aggregation_type
   ```

   * `metric`: use o nome da métrica conforme descrito na documentação do New Relic para sua integração.
   * `aggregation_type` Use `Sum`, `Average`, `Minimum` ou `Maximum`. Consulte a documentação original do fornecedor de nuvem da integração para ver quais agregações estatísticas estão disponíveis para cada métrica.

4. Para o campo `policy_id` , use o ID único da política de alertas associada à condição. Encontre o ID da política no URL da política:

   ```
   https://alerts.newrelic.com/accounts/ACCOUNT_ID/policies/ALERT_POLICY_ID
   ```

## Causa

Isso acontece porque a lista dropdown <DNT>**Define thresholds**</DNT> em nossa interface de infraestrutura mostra apenas a métrica que New Relic conseguiu coletar na última hora.
