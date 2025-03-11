---
title: Administrar entidad en condición de alerta
tags:
  - Alerts
  - REST API alerts
metaDescription: Read about how to use the REST API (v2) to add or remove apps and other entities from an alerts policy condition.
freshnessValidatedDate: never
translationType: machine
---

En <InlinePopover type="alerts" />, un <DNT>**entity**</DNT> se define como cualquier objetivo de monitoreo, como una aplicación, un browser o un host. La [UI de alertas](http://one.newrelic.com/alerts/) muestra las entidades disponibles que puedes seleccionar. También puede emplear la API REST y el Explorador API para [agregar](https://api.newrelic.com/docs/#/Alerts%20Entity%20Conditions/put_alerts_entity_conditions__entity_id__json) o [eliminar](https://api.newrelic.com/docs/#/Alerts%20Entity%20Conditions/delete_alerts_entity_conditions__entity_id__json) entidades para una condición.

## Antes de usar la API REST [#before-start]

La API REST ya no es la forma preferida de gestionar programáticamente sus alertas. Para obtener más contexto, lea [Introducción a las API para alertas](/docs/alerts/scale-automate/nerdgraph/nerdgraph-api-examples/).

## Requisitos

Modificar la lista de entidades en una condición requiere que sepas:

* Tu [clave de API](/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key)
* La [\{&apos;\{entity\_ID}&apos;}](/docs/new-relic-solutions/get-started/glossary/#entity) de la entidad que desea monitor
* El [\{&apos;\{condition\_ID}&apos;}](/docs/new-relic-solutions/get-started/glossary/#alert-condition) de la condición que desea modificar

## Procedimiento general [#basic\_process][#basic_process]

Para actualizar la lista de entidades para una condición:

1. Localice el ID de entidad correspondiente; por ejemplo, [ID de la aplicación](/docs/apis/rest-api-v2/requirements/listing-host-instance-application-server-ids) y [IDbrowser ](/docs/apis/rest-api-v2/browser-examples-v2/add-or-list-browser-apps-api-v2/).

2. [Identifique el ID de la política por nombre o tipo](/docs/alerts/scale-automate/rest-api/rest-api-calls-alerts/#alert-policies).

3. Obtenga la lista de condiciones asociadas a la póliza y elija la que desea modificar para la categoría adecuada:

   * [APM, monitoreo de browser, y monitoreo de celulares](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#conditions)
   * [Servicios externos](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#ext-services-conditions)
   * [Monitoreo sintetico](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#synthetics-conditions)

4. Modifique la condición mediante las [solicitudes de API](/docs/alerts/scale-automate/rest-api/rest-api-calls-alerts/#alert-entity-conditions) para agregar o eliminar.

<Callout variant="important">
  Siga los requisitos para la [cantidad mínima y máxima de entidades](/docs/alerts/new-relic-alerts/configuring-alert-policies/minimum-maximum-values) que puede agregar a las condiciones.
</Callout>

## Ejemplo: Agregar o eliminar una entidad [#example]

El siguiente ejemplo muestra cómo agregar una aplicación Ruby denominada `TimberTime` en una condición y cómo eliminar una entidad de esa misma condición.

Solo el primer paso de este ejemplo es exclusivo de elegir la aplicación Ruby como entidad. Los pasos restantes serán los mismos para cualquier entidad que elijas.

1. Obtenga el `entity_id`; por ejemplo, `application_id`:

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/applications.json' \
        -H $API_KEY -i
   ```

   O

   Si conoce el nombre de la aplicación, utilice este comando y especifique `app_name`:

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/applications.json' \
        -H $API_KEY -i \
        -d 'filter[name]=TimberTime'
   ```

2. Revise el resultado para encontrar el `application_id` y utilícelo como `entity_id`:

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

3. Obtenga el `policy_id` que desea actualizar; por ejemplo, la política `Logjam Alert` de la aplicación `TimberTime` . Para obtener el `policy_id`, use este comando:

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/alerts_policies.json' \
        -H $API_KEY -i \
        -G -d 'filter[name]= Logjam Alert'   # policy_name
   ```

4. Revisar el resultado de la política; Por ejemplo:

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

5. Enumere todas las condiciones de esta política y localice el `condition_id`:

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/alerts_conditions.json' \
        -H $API_KEY -i \
        -G -d 'policy_id=85'
   ```

   Revisar las condiciones de la póliza; Por ejemplo:

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

6. Utilice solicitudes API para agregar entidad o eliminar entidad de la condición de la póliza:

   Para agregar `entity_id` 12345 a `condition_id` 234567, con `entity_type` configurado como `Application`:

   ```shell

   curl -X PUT 'https://api.newrelic.com/v2/alerts_entity_conditions/12345.json' \
        -H $API_KEY -i \
        -H 'Content-Type: application/json' \
        -G -d 'entity_type=Application&condition_id=234567'
   ```

   Para eliminar `entity_id` 8288171 de `condition_id` 234567, con `entity_type` configurado como `Application`:

   ```shell

   curl -X DELETE 'https://api.newrelic.com/v2/alerts_entity_conditions/8288171.json' \
        -H $API_KEY -i \
        -G -d 'entity_type=Application&condition_id=234567'
   ```