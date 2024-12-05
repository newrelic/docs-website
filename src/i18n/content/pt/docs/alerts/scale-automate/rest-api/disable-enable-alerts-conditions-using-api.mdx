---
title: Desabilitar e habilitar condição do alerta usando a API
tags:
  - Alerts
  - REST API alerts
metaDescription: 'Read about using the New Relic REST API (v2) to add or remove apps, servers, and other entities from a policy condition.'
freshnessValidatedDate: never
translationType: machine
---

Em uma política, uma [condição](/docs/alerts/create-alert/create-alert-condition/alert-conditions) identifica o que aciona um alerta. Você pode usar a API REST para desabilitar e habilitar condições. Você também pode [desabilitar e habilitar condições na interface do usuário](/docs/alerts/new-relic-alerts/updating-alert-policies/disable-or-delete-alert-policies-conditions#condition-on-off).

[As políticas não podem ser ativadas ou desativadas](/docs/alerts/new-relic-alerts/updating-alert-policies/disable-or-delete-alert-policies-conditions#disable-policy), seja por meio da API ou da interface. As políticas só podem ser criadas, excluídas ou ter suas condições alteradas.

## Antes de usar a API REST [#before-start]

A API REST não é mais a forma preferida de gerenciar programaticamente seus alertas. Para obter mais contexto, leia a [introdução à API de <InlinePopover type="alerts" />](/docs/alerts-applied-intelligence/new-relic-alerts/advanced-alerts/alerts-api/intro-alerts-api).

## Requisitos

A modificação de qualquer atributo em uma condição usando a API requer:

* Uma [chave de API](/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key) e permissões para gerenciar alertas
* O `id` da condição (disponível no [API Explorer:](https://rpm.newrelic.com/api/explore/alerts_condition/list) <DNT>**Alerts Conditions &gt; GET &gt; List**</DNT>)
* Se a sua organização hospedar dados no data center da UE, verifique se você está usando os [endpoints de API adequados para contas da região da UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center#endpoints).

## Habilitar e desabilitar uma condição

O processo para desabilitar ou habilitar uma condição é o mesmo processo geral para alterar qualquer atributo em uma condição. Um exemplo mais detalhado vem após este procedimento geral:

1. Encontre o ID da política que contém a condição que você deseja alterar.

   Se o ID da política for desconhecido, use o nome ou tipo da política para fazer uma chamada de API e encontrar o ID da política. Para obter mais informações sobre esse processo, consulte [Listar uma única política](/docs/alerts/alert-policies/rest-api-alert-policies/list-policies-v2#single_policy).

2. Com o ID da política, faça uma chamada de API que retorne as condições associadas a essa política. Existem quatro categorias de condições diferentes. Se você não conhece a categoria, pode ser necessário fazer até quatro chamadas de API para encontrar a condição.

   <CollapserGroup>
     <Collapser id="types-conditions-API" title="Detalhes sobre a pesquisa do ID da condição">
       Caso não saiba a categoria da condição que deseja alterar, deverá procurá-la fazendo chamada de API utilizando as quatro categorias de condição. Aqui estão os diferentes formatos de chamada de API para as diversas categorias de condição.

       * [<InlinePopover type="apm" />, <InlinePopover type="browser" />e<InlinePopover type="mobile" />](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#conditions-list)\
         Condições disponíveis: `apm_app_metric`, `apm_kt_metric`, `browser_metric` e `mobile_metric`\
         [API Explorer link Get&gt;List](https://rpm.newrelic.com/api/explore/alerts_conditions/list)
       * [Serviços externos](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#ext-conditions-list)\
         Condições disponíveis: `apm_external_service`, `mobile_external_service`\
         [API Explorer link Get&gt;List](https://rpm.newrelic.com/api/explore/alerts_external_service_conditions/list)
       * [Monitoramento sintético](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#synthetics-conditions-list)\
         [API Explorer link Get&gt;List](https://rpm.newrelic.com/api/explore/alerts_synthetics_conditions/list)
     </Collapser>
   </CollapserGroup>

3. Para o JSON retornado, encontre o objeto JSON da condição que você deseja alterar.

4. Copie e cole o JSON da condição em um editor de texto de sua preferência e edite o JSON. Para ativar a condição, defina `"enabled"` como `true`. Para desativar a condição, defina `"enabled"` como `false`.

5. Atualize a condição enviando seu JSON editado por meio de uma solicitação de API de atualização. Nossos diferentes produtos exigem diferentes solicitações de API.

   <CollapserGroup>
     <Collapser id="update-api-requests" title="Detalhes sobre solicitações de API de atualização">
       Use a solicitação de atualização da API que corresponde ao produto em questão:

       * [Condições para APM, browser e mobile](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#conditions-update)\
         Condições disponíveis: `apm_app_metric`, `apm_kt_metric`, `browser_metric` e `mobile_metric`\
         [API Explorer PUT&gt;Update link](https://rpm.newrelic.com/api/explore/alerts_conditions/update)

       * [Condições para serviços externos](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#ext-conditions-update)\
         Condições disponíveis: `apm_external_service`, `mobile_external_service`\
         [API Explorer PUT&gt;Update](https://rpm.newrelic.com/api/explore/alerts_external_service_conditions/update)

       * [Condições para monitoramento sintético](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#synthetics-conditions-update))\
         [API Explorer PUT&gt;Update](https://rpm.newrelic.com/api/explore/alerts_synthetics_conditions/update)

         <Callout variant="tip">
           Uma solicitação de API de atualização só pode alterar uma condição por vez e não pode atualizar um vetor de objetos. Por exemplo, para alterar três condições, você terá que fazer três solicitações separadas.
         </Callout>
     </Collapser>
   </CollapserGroup>

## Exemplo: desabilitar uma condição de APM [#example]

O exemplo a seguir mostra como desativar uma condição para uma condição `apm_app_metric` . Com exceção dos tipos de chamada de API necessários, o processo é semelhante ao processo de alteração de outros tipos de condições.

1. Obtenha o `policy_id` da política que você deseja atualizar. Para uma política imaginária chamada `Logjam Alert`, o comando seria:

   ```shell
   curl -X GET 'https://api.newrelic.com/v2/alerts_policies.json' \
       -H "X-Api-Key:$API_KEY" -i \
       -G --data-urlencode 'filter[name]= Logjam Alert'  # policy_name
   ```

   A saída desta solicitação pode ser semelhante a:

   ```json
   {
     "policies": [
       {
         "id": 85,                            // policy_id
         "incident_preference": "PER_POLICY",
         "name": "Logjam Alert",
         "created_at": 1461176510393,
         "updated_at": 1461176510393
       }
     ]
   }
   ```

2. Liste todas as condições desta política e localize `condition_id`:

   ```shell
   curl -X GET 'https://api.newrelic.com/v2/alerts_conditions.json' \
        -H "X-Api-Key:$API_KEY" -i \
        -G -d 'policy_id=85'
   ```

   A saída desta solicitação pode ser semelhante a:

   ```json
   {
     "conditions": [
       {
         "id": 12345,               // condition_id
         "type": "apm_app_metric",
         "name": "Apdex (Low)",
         "enabled": true,           // Note the condition is enabled
         "entities": [
           "8288171"
         ],
         "metric": "apdex",
         "terms": [
           {
             "duration": "5",
             "operator": "below",
             "priority": "critical",
             "threshold": "1",
             "time_function": "any"
           }
         ]
       },
       {
         "id": 2468,                // another condition_id
         "type": "apm_app_metric",
         "name": "Throughput (Low)",
         ...
       }
     ]
   }
   ```

3. Copie o JSON apenas para a condição em questão e cole-o em um editor de texto. Altere `"enabled": true` para `"enabled": false`. O JSON editado ficaria assim:

   ```shell lineHighlight=9
   curl -X PUT 'https://api.newrelic.com/v2/alerts_conditions/12345.json' \
        -H "X-Api-Key:$API_KEY" -i \
        -H 'Content-Type: application/json' \
        -d \
   '{
     "condition": {
       "type": "apm_app_metric",
       "name": "Apdex (Low)",
       "enabled": false,
       "entities": [
         "8288171"
       ],
       "metric": "apdex",
       "terms": [
         {
           "duration": "5",
           "operator": "below",
           "priority": "critical",
           "threshold": "1",
           "time_function": "any"
         }
       ]
     }
   }'
   ```

4. Atualize a condição enviando o JSON da condição editada por meio de uma solicitação de API de atualização. Para esta condição específica, você seguiria as etapas em [Condições de atualização para políticas do APM](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#conditions-update). Outras condições de produto teriam outras solicitações de API, conforme detalhado em [Atualizar solicitações de API](#update-api-requests).