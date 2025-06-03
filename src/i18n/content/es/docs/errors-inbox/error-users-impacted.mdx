---
title: Seguimiento del usuario afectado con Errors Inbox
metaDescription: Triage more effectively by viewing how many users are impacted by an error group.
freshnessValidatedDate: never
translationType: machine
---

Ahora puede ver la cantidad de usuarios afectados por un grupo de errores, lo que le permite centrar su esfuerzo en los grupos de errores de mayor impacto. El usuario afectado se enumera junto a la métrica de ocurrencias en la vista de lista. También puede [configurar alertas](/docs/errors-inbox/error-users-impacted/#alerting-on-users-impacted) para grupos de errores que afecten a más de un determinado número de usuarios.

<img
  title="An image showing how to navigate users impacted"
  alt="This is an image of the main errors inbox users impacted"
  src="/images/errors-inbox_screenshot-full_users-impacted.webp"
/>

## Empezando [#getting-started]

Las métricas de impacto del usuario se recopilan automáticamente si su error incluso tiene un atributo que identifica al usuario final. Para los agentes que no admiten de forma nativa agregar un identificador de usuario a la telemetría, recomendamos agregar un atributo personalizado y seguir el atributo de convención [de OpenTelemetry](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/opentelemetry-introduction) para los atributos de identidad, que es `enduser.id`. El proceso de envío de atributo personalizado a New Relic se detalla [aquí](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/#enabling-custom).

## Convenciones de atributos para capturar usuarios impactados. [#attributes]

Existen múltiples convenciones comunes para nombrar los atributos del usuario final. Primero, comprobaremos `enduser.id` según el [estándar OpenTelemetry](https://opentelemetry.io/docs/reference/specification/trace/semantic_conventions/span-general/#general-identity-attributes). Luego usaremos el siguiente atributo en orden de prioridad:

* `userId`
* `user`

### Consultando usuario impactado [#alerts]

La cantidad de usuarios afectados por un grupo de errores se registra como un [tipo de datos de métrica](/docs/data-apis/understand-data/metric-data/metric-data-type/) con el nombre `newrelic.error.group.userImpact`. Puede utilizar esta métrica con la siguiente cadena NRQL:

```sql
SELECT uniqueCount(newrelic.error.group.userImpact) FROM Metric WHERE metricName='newrelic.error.group.userImpact'
```

La métrica captura el número aproximado de usuarios únicos en el período de tiempo seleccionado. Los atributos adicionales proporcionados por la métrica `userImpact` que se pueden usar en una cláusula `FACET` son `error.group.guid`, `entity.guid`.

## Alerta sobre usuario impactado

Al crear una [condición de alerta NRQL](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/), los desarrolladores pueden activar <InlinePopover type="alerts"/>cuando la cantidad de usuarios afectados por errores supera un umbral.

La creación de esta alerta requiere determinar la [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/) que mide la cantidad de usuarios afectados de la manera que mejor capture su caso de uso.

Como ejemplo, la siguiente consulta NRQL mide la cantidad de usuarios únicos que se han visto afectados por un [grupo de errores](/docs/errors-inbox/errors-inbox/#groups) procedente de una entidad específica:

```sql
SELECT uniqueCount(newrelic.error.group.userImpact) FROM Metric WHERE metricName='newrelic.error.group.userImpact' 
AND entity.guid='RXxCUk9XU9182nNEFQUExJQ0FLsU9OfDgzNzgwNw' FACET error.group.guid TIMESERIES
```

Lea más sobre el uso de la función [`uniqueCount()`](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/) , [cómo encontrar el GUID de entidad](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic/#find) para sus entidades.

De manera similar, la siguiente consulta NRQL mide el número total de usuarios afectados por errores de todas las entidades de la cuenta en la última hora:

```sql
SELECT count(newrelic.error.group.userImpact) FROM Metric WHERE metricName='newrelic.error.group.userImpact' SINCE 1 hour ago TIMESERIES
```

Una vez que haya decidido una consulta NRQL, puede usarla para crear una [condición de alerta NRQL](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#create).

Para mejorar la relación señal-ruido de sus alertas activadas, consulte [los consejos para la creación de alertas](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#condition-tips), [cómo se evalúan los umbrales de alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#advanced-signal) y [ejemplos de condición de alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#examples).

## Establecer usuario impactado con el método setUser [#set-users]

Puede utilizar un método de agente para identificar a un usuario final. Consulte los detalles de implementación para cada agente a continuación:

* [Java](/docs/apm/agents/java-agent/attributes/java-agent-attributes/#user-attributes)
* [Go](/docs/apm/agents/go-agent/api-guides/guide-using-go-agent-api/#user-tracking)
* [.Net](/docs/apm/agents/net-agent/net-agent-api/itransaction/#setuserid)
* [Node.js](/docs/apm/agents/nodejs-agent/api-guides/nodejs-agent-api/#setUserID)
* [Python](/docs/apm/agents/python-agent/python-agent-api/setuserid-python-agent-api/)
* [Ruby](/docs/apm/agents/ruby-agent/api-guides/sending-handled-errors-new-relic/#user-tracking)
* [Browser](/docs/browser/new-relic-browser/browser-apis/setuserid/)
* [Móvil](/docs/data-apis/custom-data/custom-events/report-mobile-monitoring-custom-events-attributes/#track-user)
