---
title: Rastreo de errores con Errors Inbox
metaDescription: 'Errors inbox is an error tracking solution designed to give you the tools to proactively detect, triage, and resolve errors across your full application stack.'
freshnessValidatedDate: '2023-09-22T00:00:00.000Z'
translationType: machine
---

El seguimiento de la versión Errors Inbox permite a los desarrolladores monitor cada despliegue para verificar su precisión y éxito. Supongamos que usted y su equipo reciben una alerta que dice que una de sus entidades tiene un aumento en su tasa de errores. Identifica la [fuente del error](/docs/tutorial-error-tracking/respond-outages/) y decide liberar un canario desplegable. Puede utilizar el seguimiento de versiones para monitor su solución, así como el despliegue anterior para determinar si resolvió el problema o si necesita volver a la mesa de dibujo.

<img
  title="errors inbox change tracking"
  alt="A screenshot that depicts error occurrences by version"
  src="/images/errors-inbox_screenshot-crop_errors-inbox-change-tracking.webp"
/>

## Comprender los campos de seguimiento de versiones

Antes de instrumentar el seguimiento de versiones, es importante comprender cómo Errors Inbox clasifica los resultados. En la aplicación APM y OpenTelemetry, cuando realiza un seguimiento de errores, los siguientes campos de eventos se verifican y se muestran _en este orden_:

1. `service.version`
2. `tags.service.version`
3. `tags.releaseTag`
4. `tags.commit`

Para la aplicación móvil, el campo del evento es `appVersion`.

Para la aplicación browser , el campo de evento es `application.version`.

## seguimiento de la versión instrumentada

Para capturar datos de nuestro seguimiento de versiones, debe configurar campos para la entidad relevante:

* [Para entidad OpenTelemetry, configure `service.version`](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-resources/).

* Para APM entidad, configure las variables de entorno para APM entidad.

  * [Go](/docs/apm/agents/go-agent/configuration/go-agent-code-level-metrics-config/#errors-inbox-configuration)
  * [Java](/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#errors-inbox-configuration)
  * [.NET](/docs/apm/agents/net-agent/configuration/net-agent-configuration/#errors-inbox-configuration)
  * [Node.js](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#errors-inbox-configuration)
  * [PHP](/docs/apm/agents/php-agent/configuration/php-agent-configuration/#errors-inbox-configuration)
  * [Python](/docs/apm/agents/python-agent/configuration/python-agent-configuration/#errors-inbox-configuration)
  * [Ruby](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#errors-inbox-configuration)

* [Para entidad móvil, configure `appVersion`](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/set-application-version/).

* [Para la entidad del navegador, utilice `application.version`](/docs/browser/new-relic-browser/browser-apis/setApplicationVersion/).

## Filtrar por versión

Una vez que haya instrumentado el seguimiento de versiones, sus grupos de errores capturarán automáticamente datos de cada versión. Puedes filtrar por cada versión.

Para filtrar grupos de errores con varias versiones, utilice el operador + para elegir una condición `OR` .

<img
  title="version tracking errors inbox"
  alt="A screenshot depicting how to filter by versions in errors inbox. "
  src="/images/errors-inbox_screenshot-crop_filter-errors-by-versions.webp"
/>

Puede utilizar [el seguimiento de cambios](/docs/change-tracking/change-tracking-view-analyze/) para monitor su implementación. Si ha hecho esto, es importante asegurarse de que su despliegue coincida con el mismo formato de versión que instrumentó en su entidad para que pueda hacer coincidir las versiones de sus errores con su despliegue.

## Buscar versiones por grupo de errores

También puede hacer clic en un grupo de errores para ver cada despliegue que coincida con las fechas vistas por primera y última vez para su grupo de errores. Solo verá las versiones que se publicaron dentro de los 30 minutos posteriores a la primera fecha de visualización y dentro de los 30 minutos anteriores a la última fecha de visualización.

<img
  title="error date"
  alt="A screenshot depicting last seen date of errors"
  src="/images/errors-inbox_screenshot-full_error-date.webp"
/>

Puede profundizar en sus grupos de errores utilizando el gráfico que muestra cada una de sus ocurrencias de errores agrupadas por versión.

Si también ha configurado el despliegue con seguimiento de cambios, verá el marcador de despliegue en este gráfico. Estos marcadores indican cuándo se lanzó cada despliegue. Haga clic en el marcador para navegar hasta el despliegue.
