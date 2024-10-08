---
title: Introducción a la API métrica
tags:
  - Ingest and manage data
  - Ingest APIs
metaDescription: Learn how to report metrics to New Relic from any source with the Metric API.
freshnessValidatedDate: never
translationType: machine
---

La API métrica de New Relic se puede utilizar para enviar [datos métricos](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics) a New Relic desde una variedad de fuentes. Esta API es la forma en que algunos de nuestros integradores y exportadores ingresan a New Relic.

¿Quieres probar nuestra API métrica? ¡ [Crea una cuenta New Relic](https://newrelic.com/signup) gratis! No se requiere tarjeta de crédito.

## ¿Qué es la métrica API? [#why-use]

La API métrica es una forma de obtener datos métricos en New Relic. La API funciona enviando una solicitud POST a nuestro extremo HTTP con una carga útil JSON que contiene los datos métricos.

La API métrica es la forma en que se incorporan las métricas de algunas de nuestras [integraciones](https://newrelic.com/instant-observability/), incluidos nuestros [exportadores de código abierto](/docs/data-ingest-apis/get-data-new-relic/new-relic-sdks/telemetry-sdks-send-custom-telemetry-data-new-relic#external-data) (como DropWizard y Prometheus). La API métrica también es utilizada por nuestros [SDK de telemetría](/docs/data-ingest-apis/get-data-new-relic/new-relic-sdks/telemetry-sdks-send-custom-telemetry-data-new-relic), que son herramientas específicas del lenguaje que facilitan el uso de nuestras API de ingesta de datos.

La API métrica se puede utilizar para:

* Reportar datos métricos a New Relic sin un agente de New Relic.
* Integre datos métricos desde una herramienta, biblioteca o framework de código abierto o desarrollado internamente.
* Controla totalmente los datos métricos que envías, incluida la resolución y dimensiones asociadas.
* Aproveche el poder de [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql), el lenguaje de consulta de New Relic, para consultar sus [datos métricos](/docs/using-new-relic/data/understand-data/new-relic-data-types#metrics).
* Configura [alerta para tus datos métricos](#create-alerts).

## Requisitos

Asegúrese de que la conectividad saliente en el puerto TCP 443 esté permitida en el [rango CIDR](/docs/using-new-relic/cross-product-functions/install-configure/networks/#infrastructure) que coincida con su [región](/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers). El método de configuración preferido es utilizar el nombre DNS `metric-api.newrelic.com` o `metric-api.eu.newrelic.com`.

Necesitará una New Relic <InlinePopover type="licenseKey"/>para la cuenta New Relic a la que desea enviar datos. Para obtener información sobre límites y atributos restringidos, consulte [Límites y requisitos de API métrica](/docs/metric-api-general-requirements-limits).

## Empezar

Si no contamos con una [integración o un inicio rápido](https://newrelic.com/instant-observability/) que satisfaga sus necesidades de informes métricos, tiene dos opciones:

* [Utilice nuestros SDK de telemetría](/docs/data-ingest-apis/get-data-new-relic/new-relic-sdks/telemetry-sdks-send-custom-telemetry-data-new-relic), que son herramientas específicas del idioma que le ayudan a enviarnos datos métricos y de otro tipo.
* [Utilice la API métrica directamente](/docs/report-metrics-metric-api).

## Encuentra y utiliza tus datos [#find-data]

Puede encontrar datos enviados a través de la API de métrica (incluidas las de integración que utilizan esta API) en estas ubicaciones:

* Desde <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT>, selecciona <DNT>**Explorer**</DNT> y busca tu servicio.

* Consultando el tipo de datos `Metric` . Por ejemplo, puedes usar [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) para ejecutar:

  ```sql
  SELECT * FROM Metric
  ```

  Para obtener más información sobre consultas, consulte [ejemplos de consulta métrica](/docs/data-ingest-apis/get-data-new-relic/metric-api/view-query-you-metric-data). Para obtener información sobre consultas en general, consulte [datos de consulta](/docs/using-new-relic/data/understand-data/query-new-relic-data).

## Alerta sobre datos métricos [#create-alerts]

Para alertar sobre métricas creadas con la API de métrica, use [NRQL condición de alerta](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries): seleccione la categoría NRQL al definir su condición, luego use la sintaxis de consulta `FROM Metric ...` NRQL para expresarla. Cuando crea estas condiciones de alerta, <InlinePopover type="alerts"/>utiliza automáticamente los datos de granularidad más finos disponibles (los puntos de datos métricos sin procesar) para evaluar las alertas.

## Retención de datos [#retention]

Todos los puntos de datos métricos sin procesar se conservarán durante 30 días. Todos los datos agregados adicionales derivados de los puntos de datos métricos sin procesar (por ejemplo, resúmenes de un minuto) se conservarán durante 13 meses. Cualquier cambio en el período de retención más allá de dichos períodos puede generar un cargo para usted.

## Resolución de problemas

Consulte [Solucionar problemas de un evento `NrIntegrationError` ](/docs/troubleshoot-nrintegrationerror-event).
