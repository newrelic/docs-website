---
title: No se puede crear una condición de alerta para la integración de la infraestructura
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

No puede crear una [condición de alerta de infraestructura](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/infrastructure-alerts-add-edit-or-view-host-alert-information) porque la métrica sobre la que desea alertar no aparece en la sección <DNT>**Define thresholds**</DNT> de la página de alertas de nuestra UI de infraestructura.

## Solución

En lugar de utilizar de New Relic infraestructura de UI, utilice [la API de llamada REST](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts) de infraestructura para crear la condición de alerta.

1. Revise la [sintaxis de consulta para crear (POST)](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts#post-conditions) una condición de infraestructura.

2. Revisar los [requisitosAPI para condiciones métricas](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts#metric-api).

3. Cuando cree la condición: para el campo `select_value` , cree el nombre de la métrica utilizando la siguiente sintaxis, donde `provider` es una cadena de prefijo estándar:

   ```
   provider.metric.aggregation_type
   ```

   * `metric`: utilice el nombre de la métrica como se describe en la documentación de New Relic para su integración.
   * `aggregation_type` Utilice `Sum`, `Average`, `Minimum` o `Maximum`. Consulte la documentación original del proveedor de la nube de la integración para ver qué agregaciones de estadísticas están disponibles para cada métrica.

4. Para el campo `policy_id` , utilice el ID único para la política de alertas asociada a la condición. Busque el ID de la política en la URL de la política:

   ```
   https://alerts.newrelic.com/accounts/ACCOUNT_ID/policies/ALERT_POLICY_ID
   ```

## Causa

Esto sucede porque la lista desplegable <DNT>**Define thresholds**</DNT> en nuestra UI de infraestructura solo muestra la métrica que New Relic ha podido recolectar en la última hora.
