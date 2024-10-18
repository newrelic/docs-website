---
title: Gerenciar entidade em condição de alerta
tags:
  - Alerts
  - REST API alerts
metaDescription: Read about how to use the REST API (v2) to add or remove apps and other entities from an alerts policy condition.
freshnessValidatedDate: never
translationType: machine
---

Em <InlinePopover type="alerts" />, um <DNT>**entity**</DNT> é definido como qualquer destino para monitoramento, como um aplicativo, um navegador ou um host. A [interface de alertas](http://one.newrelic.com/alerts/) mostra as entidades disponíveis que você pode selecionar. Você também pode usar a API REST e API Explorer para [adicionar](https://api.newrelic.com/docs/#/Alerts%20Entity%20Conditions/put_alerts_entity_conditions__entity_id__json) ou [remover](https://api.newrelic.com/docs/#/Alerts%20Entity%20Conditions/delete_alerts_entity_conditions__entity_id__json) entidades para uma condição.

## Antes de usar a API REST [#before-start]

A API REST não é mais a maneira preferida de gerenciar seus alertas programaticamente. Para mais contexto, leia a [Introdução à API para alertas](/docs/alerts/scale-automate/nerdgraph/nerdgraph-api-examples/).

## Requisitos

Modificar a lista de entidades numa condição exige que você saiba:

* Sua [chave de API](/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key)
* A [\{&apos;\{entity\_ID}&apos;}](/docs/new-relic-solutions/get-started/glossary/#entity) da entidade que pretende monitor
* O [\{&apos;\{condition\_ID}&apos;}](/docs/new-relic-solutions/get-started/glossary/#alert-condition) da condição que você deseja modificar

## Procedimento geral [#basic\_process][#basic_process]

Para atualizar a lista de entidades para uma condição:

1. Localize o ID da entidade apropriado; por exemplo, [ID do aplicativo](/docs/apis/rest-api-v2/requirements/listing-host-instance-application-server-ids) e [ID do navegador](/docs/apis/rest-api-v2/browser-examples-v2/add-or-list-browser-apps-api-v2/).

2. [Identifique o ID da política por nome ou tipo](/docs/alerts/scale-automate/rest-api/rest-api-calls-alerts/#alert-policies).

3. Obtenha a lista de condições associadas à política e escolha aquela que deseja modificar para a categoria apropriada:

   * [APM, monitoramento de Browser e monitoramento de Mobile](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#conditions)
   * [Serviços externos](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#ext-services-conditions)
   * [Monitoramento sintético](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#synthetics-conditions)

4. Modifique a condição usando as [solicitações de API](/docs/alerts/scale-automate/rest-api/rest-api-calls-alerts/#alert-entity-conditions) de adição ou remoção.

<Callout variant="important">
  Siga os requisitos para o [número mínimo e máximo de entidades](/docs/alerts/new-relic-alerts/configuring-alert-policies/minimum-maximum-values) que você pode adicionar às condições.
</Callout>

## Exemplo: Adicionar ou remover uma entidade [#example]

O exemplo a seguir mostra como adicionar um aplicativo Ruby chamado `TimberTime` em uma condição e como remover uma entidade dessa mesma condição.

Apenas a primeira etapa neste exemplo é exclusiva para escolher o aplicativo Ruby como entidade. As etapas restantes serão as mesmas para qualquer entidade que você escolher.

1. Obtenha o `entity_id`; por exemplo, `application_id`:

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/applications.json' \
        -H $API_KEY -i
   ```

   OU

   Se você souber o nome do aplicativo, use este comando e especifique `app_name`:

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/applications.json' \
        -H $API_KEY -i \
        -d 'filter[name]=TimberTime'
   ```

2. Revise a saída para encontrar `application_id` e use-a como `entity_id`:

   ```json
   {
     "applications": [
       {
         "id": 12345,         // application_id == entity_id
         "name": "TimberTime",
         "language": "ruby",
         "health_status": "gray",
         ...
       },
   ```

3. Obtenha o `policy_id` que você deseja atualizar; por exemplo, a política `Logjam Alert` do aplicativo `TimberTime` . Para obter o `policy_id`, use este comando:

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/alerts_policies.json' \
        -H $API_KEY -i \
        -G -d 'filter[name]= Logjam Alert'   # policy_name
   ```

4. Rever o resultado da política; por exemplo:

   ```json
   {
     "policies": [
       {
         "id": 85,      // policy_id
         "incident_preference": "PER_POLICY",
         "name": "Logjam Alert",
         "created_at": 1461176510393,
         "updated_at": 1461176510393
       },
   ```

5. Liste todas as condições desta política e localize `condition_id`:

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/alerts_conditions.json' \
        -H $API_KEY -i \
        -G -d 'policy_id=85'
   ```

   Revise as condições da apólice; por exemplo:

   ```json
   {
     "conditions": [
       {
         "id": 234567,               // condition_id
         "type": "apm_app_metric",
         "name": "Throughput (web) (High)",
         "enabled": true,
         "entities": [
           "8288171"                 // Entity currently included in the policy
         ],
         "metric": "response_time_web",
         "terms": [
           {
             "duration": "5",
             "operator": "above",
             "priority": "critical",
             "threshold": "500",
             "time_function": "all"
           }
         ]
       }
     ]
   }
   ```

6. Use solicitações de API para adicionar entidade ou remover entidade da condição da política:

   Para adicionar `entity_id` 12345 a `condition_id` 234567, com `entity_type` definido como `Application`:

   ```shell

   curl -X PUT 'https://api.newrelic.com/v2/alerts_entity_conditions/12345.json' \
        -H $API_KEY -i \
        -H 'Content-Type: application/json' \
        -G -d 'entity_type=Application&condition_id=234567'
   ```

   Para remover `entity_id` 8288171 de `condition_id` 234567, com `entity_type` definido como `Application`:

   ```shell

   curl -X DELETE 'https://api.newrelic.com/v2/alerts_entity_conditions/8288171.json' \
        -H $API_KEY -i \
        -G -d 'entity_type=Application&condition_id=234567'
   ```