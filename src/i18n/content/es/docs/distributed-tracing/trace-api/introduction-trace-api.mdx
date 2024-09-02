---
title: Introducción a la traza API
tags:
  - Understand dependencies
  - Distributed tracing
  - Trace API
metaDescription: 'Intro to New Relic''s Trace API, which lets you consolidate multiple sources of distributed tracing data in New Relic.'
freshnessValidatedDate: never
translationType: machine
---

Nuestra traza API se utiliza para enviar [datos de rastreo distribuido](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing#definition) a New Relic: ya sea en nuestro propio formato genérico o en el formato de datos [Zipkin](https://zipkin.io/) . Esta API también es la forma en que los datos de traza de algunos de nuestros integradores y exportadores se informan a New Relic.

¿Quieres probar la traza API? Asegúrate de haber creado una [cuenta gratuita de New Relic](https://newrelic.com/signup). No se requiere tarjeta de crédito.

Para omitir parte del contenido introductorio y comenzar rápidamente, vaya a [Comenzar a generar informes de datos](#get-started).

## ¿Qué es la traza API? [#why-use]

La traza API es una forma en que New Relic recopila [datos de rastreo distribuido](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing). Tenemos algunas herramientas de seguimiento que informan datos a través de esta API ([Infinite Tracing](/docs/understand-dependencies/distributed-tracing/infinite-tracing/introduction-infinite-tracing), nuestra [integración de código abierto](/docs/data-ingest-apis/get-data-new-relic/new-relic-sdks/telemetry-sdks-send-custom-telemetry-data-new-relic#external-data) y nuestros [SDK de telemetría](/docs/telemetry-sdks-send-custom-telemetry-data-new-relic)), o puede usar la API directamente para crear su propia implementación de seguimiento.

Razones para utilizar la traza API:

* Tienes tu propia herramienta personalizada de distribución de rastreo y quieres ver esos datos en New Relic sin cambiar tu instrumentación.
* Tienes una herramienta que emite datos de rastreo pero que requiere un backend para el almacenamiento de trazas.
* Quiere reportar datos de rastreo distribuido a New Relic sin el uso de nuestras [soluciones instaladas](/docs/understand-dependencies/distributed-tracing/enable-configure/enable-distributed-tracing).
* Utiliza [Zipkin](https://zipkin.io/) y desea ver los datos de la traza en New Relic sin cambiar su instrumentación.

¿Quiere comprender cómo se relacionan los datos de Traza con otros datos de New Relic? Lea acerca de [nuestros tipos de datos](/docs/using-new-relic/data/understand-data/new-relic-data-types).

## Requisitos [#rules]

Para obtener detalles sobre qué datos puede enviar y cómo se manejan, consulte [Reglas y límites](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits).

## Consideraciones de muestreo [#sampling]

Al utilizar la API de traza, tiene la opción de habilitar [Infinite Tracing](/docs/understand-dependencies/distributed-tracing/infinite-tracing/introduction-infinite-tracing). El uso de Infinite Tracing tiene implicaciones en la forma de configurar el muestreo:

* <DNT>
    **Use your own sampling (no Infinite Tracing):**
  </DNT>

  Si no utiliza Infinite Tracing, se supone que desea utilizar su propia implementación de muestreo para muestrear las trazas antes de enviárnoslas. (Si los datos de su traza exceden nuestros [límites de datos](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits), implementamos muestreo).

* <DNT>
    **Use Infinite Tracing:**
  </DNT>

  Si desea utilizar Infinite Tracing, un enfoque típico es enviarnos el 100% de sus datos de traza y confiar en [el muestreo de Infinite Tracing](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#tail-based). (Cuando siga las instrucciones [para comenzar a informar datos](#get-started) , a continuación, tendrá una opción para habilitar Infinite Tracing).

## Empezar a informar datos [#get-started]

La API de traza acepta datos de traza en estos dos formatos JSON:

* `zipkin`: el formato de datos de traza Zipkin JSON v2 ([aprenda qué es Zipkin](https://zipkin.io)). [Comience a enviar datos Zipkin](/docs/apm/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api).
* `newrelic`: nuestro formato general. Si no tiene datos en formato Zipkin, utilice esto. [Comience a enviar datos en formato New Relic](/docs/apm/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api).

¿Tiene problemas para obtener datos para informar? Ver [resolución de problemas](/docs/apm/distributed-tracing/trace-api/troubleshooting-missing-trace-api-data).

## Encontrar datos [#view-data]

Puedes encontrar los datos enviados a través de la API de traza, o de integraciones que utilizan esta API, en estas ubicaciones:

* En nuestro [rastreo UIdistribuido](/docs/understand-dependencies/distributed-tracing/ui-data/additional-distributed-tracing-features-new-relic-one#find-data).
* Mediante consulta: Para obtener detalles sobre cómo consultar y crear gráficos personalizados, consulte [Consulta de datos de rastreo distribuido](/docs/understand-dependencies/distributed-tracing/ui-data/query-distributed-trace-data).

## Próximos pasos

Aquí hay algunos pasos adicionales a considerar:

* Conoce más sobre [cómo funciona rastreo distribuido](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works) y la estructura de datos.
* [Decora los datos del tramo](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-decorate-spans-attributes) con un atributo personalizado.
* Utilice nuestra [API NerdGraph basada en GraphQL para consultar mediante programación sus datos de traza](/docs/apis/graphql-api/tutorials/query-distributed-trace-data-using-graphql-api).
