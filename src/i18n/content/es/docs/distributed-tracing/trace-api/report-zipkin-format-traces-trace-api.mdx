---
title: Denunciar Traza en formato Zipkin vía traza API
tags:
  - Understand dependencies
  - Distributed tracing
  - Trace API
metaDescription: 'For the Trace API: How to report Zipkin-format distributed tracing data via the Trace API.'
freshnessValidatedDate: never
translationType: machine
---

Si desea crear su propia implementación de seguimiento, puede utilizar nuestra [traza API](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api). Este documento explica cómo enviar datos de traza en formato Zipkin a nuestra API de traza. (Para conocer nuestro formato de datos generales, consulte [Formato New Relic](/docs/understand-dependencies/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api)).

## Requisitos de la versión Zipkin [#zipkin-requirements]

La API de traza admite datos de [Zipkin](https://zipkin.io/) JSON v2 (o superior) sin ninguna modificación. Para obtener detalles sobre esta versión, consulte [los detalles de la versión de Zipkin v2](https://github.com/openzipkin/zipkin/releases/tag/2.0.0) y el [esquema de Zipkin v2](https://zipkin.io/zipkin-api/#/default/post_spans).

## Descripción general del uso de traza API [#send-data-overview]

Utilizar nuestra traza API es tan sencillo como:

* Envío de datos de traza en el formato esperado (en este caso, formato `zipkin` ).
* Enviando esos datos al [extremo](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits#requirements)apropiado

Nuestras instrucciones de envío de datos tienen opciones para habilitar Infinite Tracing. Para obtener más información sobre esto, consulte [Introducción a](/docs/understand-dependencies/distributed-tracing/infinite-tracing/introduction-infinite-tracing) [las consideraciones de seguimiento y muestreo](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api#sampling) infinitos.

Para comenzar a utilizar la API de traza, elija una opción:

* [Enviar una traza de muestra](#quick-start): Esto muestra un ejemplo de envío de una traza a New Relic. Esto es útil para comprender cómo funciona la API de traza y para verificar que está viendo datos en New Relic.
* [Informe de datos de la instrumentación Zipkin existente](#existing-zipkin): si tiene una implementación Zipkin existente, simplemente puede cambiar el extremo desde donde se envían sus datos.

## Enviar muestra de carga útil Zipkin traza [#quick-start]

Esta sección describe cómo enviar una traza simple en formato Zipkin a nuestra API de traza a través de una solicitud curl. Puede optar por hacer esto para aprender cómo funciona nuestra API y verificar que los datos se muestren en New Relic antes de realizar una instrumentación en profundidad.

Para comenzar a enviar una carga útil de muestra:

1. (Opcional, para habilitar Infinite Tracing) Primero, debe [configurar un observador de traza](/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer#set-up). Ese procedimiento incluye instrucciones para enviar una traza de muestra utilizando nuestro formato general `new-relic` . Cuando llegue a ese paso, regrese aquí para aprender cómo enviar una traza en formato Zipkin.
2. Envíe una carga útil en formato Zipkin siguiendo las instrucciones a continuación.

### Enviar carga útil en formato Zipkin [#send-zipkin-curl]

Para enviar una muestra de traza en formato Zipkin:

Obtenga el <InlinePopover type="licenseKey"/>para la cuenta a la que desea informar datos.

Estará ejecutando una solicitud curl, a continuación. Notas sobre esto:

* Reemplace el marcador de posición de la clave de licencia con su clave de licencia.
* Si está utilizando Infinite Tracing, utilice el valor [YOUR_TRACE_OBSERVER_URL](/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer#ui-endpoints) en lugar del extremo estándar.
* Si desea enviar más de una publicación, cambie el ID de la traza a un valor diferente. Enviar la misma carga útil o intervalo `id` varias veces para el mismo `traceId` puede generar una traza fragmentada en la UI.

```bash
curl -i -H 'Content-Type: application/json' \
    -H 'Api-Key: NEW_RELIC_API_KEY' \
    -H 'Data-Format: zipkin' \
    -H 'Data-Format-Version: 2' \
    -X POST \
    -d '[
        {
            "traceId": "test-zipkin-trace-id-1",
            "id": "3e0f5885710776cd",
            "kind": "CLIENT",
            "name": "post",
            "duration": 508068,
            "localEndpoint": {
                "serviceName": "service-1",
                "ipv4": "127.0.0.1",
                "port": 8080
            },
            "tags": {
            }
        },
        {
            "traceId": "test-zipkin-trace-id-1",
            "parentId": "3e0f5885710776cd",
            "id": "asdf9asdn123lkasdf",
            "kind": "CLIENT",
            "name": "service 2 span",
            "duration": 2019,
            "localEndpoint": {
                "serviceName": "service-2",
                "ipv4": "127.0.0.1",
                "port": 8080
            },
            "tags": {
                "error.message": "Invalid credentials"
            }
        }
    ]' 'https://trace-api.newrelic.com/trace/v1'
```

En un minuto, la traza debería estar disponible en [nuestra UIde rastreo distribuido](https://one.newrelic.com/launcher/distributed-tracing-nerdlets.distributed-tracing). Para encontrarlo, ejecute una consulta para `trace.id`. En este ejemplo, fue `test-zipkin-trace-id-1`. Tenga en cuenta que busca por el [atributo transformado](#zipkin-transform) de `trace.id` (no `traceId`).

<img
  title="Distributed Tracing Zipkin Integration Searching for sample trace"
  alt="Distributed Tracing Zipkin Integration Searching for sample trace"
  src="/images/distributed-tracing_screenshot-full_zipkin-query.webp"
/>

Aprender más:

* [Descubra dónde aparecen los datos de traza API en la UI](/docs/understand-dependencies/distributed-tracing/ui-data/additional-distributed-tracing-features-new-relic-one#find-data).
* [Envíe datos desde una instrumentación Zipkin existente](#existing-zipkin).
* [Aprenda a decorar tramos](/docs/apm/distributed-tracing/trace-api/trace-api-decorate-spans-attributes) agregando etiquetas. Esto le ayuda a personalizar cómo se muestran las trazas en nuestra UI para obtener una experiencia más rica y útil.
* Obtenga información sobre [información general sobre extremos (límites de datos, metadatos requeridos y validación de respuestas](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits)).
* Conozca cómo [se transforman y almacenan los datos de Zipkin en nuestro formato](#zipkin-transform).
* Si no ves los datos de tu traza, consulta [resolución de problemas](/docs/apm/distributed-tracing/trace-api/troubleshooting-missing-trace-api-data).

## Enviar datos desde instrumentación Zipkin existente [#existing-zipkin]

Notas preliminares:

* Si desea habilitar [Infinite Tracing](/docs/understand-dependencies/distributed-tracing/infinite-tracing/introduction-infinite-tracing), primero debe [configurar un observador de traza](/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer#set-up).
* Puede resultar útil [enviar primero una carga útil de muestra](#quick-start) para verificar que todo funcione correctamente.

Para informar datos de una instrumentación Zipkin existente, apuntará el trazador Zipkin a los [extremos de traza de API apropiados](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits#requirements) con algunos metadatos de solicitud requeridos. Puede enviar los metadatos requeridos como encabezados o parámetros de consulta (algunas versiones de Zipkin rastreador no permiten especificar encabezados HTTP).

A continuación se muestra un ejemplo de cómo se vería al crear un Zipkin `OkHttpSender` en Java configurado para la API de traza:

```java
OkHttpSender.create("https://trace-api.newrelic.com/trace/v1?Api-Key=NEW_RELIC_LICENSE_KEY&Data-Format=zipkin&Data-Format-Version=2");
```

Tenga en cuenta que si estuviera utilizando Infinite Tracing o tuviera una cuenta New Relic de la región de la UE, el [extremo](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits#requirements) sería diferente.

Para obtener una explicación de `Api-Key` y otros metadatos, consulte [Solicitar metadatos](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits#headers-query-parameters).

## Transformación de datos Zipkin [#zipkin-transform]

Para crear una experiencia de búsqueda/consulta consistente, algunos datos de Zipkin se transformarán para que coincidan con el nombre [del atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) New Relic. Para obtener más información sobre cómo almacenamos y estructuramos los datos de traza, consulte [Cómo funciona rastreo distribuido](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works).

<table>
  <thead>
    <tr>
      <th>
        Etiqueta Zipkin
      </th>

      <th>
        Almacenado en New Relic como...
      </th>

      <th>
        Detalles
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `traceId`
      </td>

      <td>
        `trace.id`
      </td>

      <td>
        Identificador único para una traza.
      </td>
    </tr>

    <tr>
      <td>
        `id`
      </td>

      <td>
        `id`
      </td>

      <td>
        Identificador único para un lapso.
      </td>
    </tr>

    <tr>
      <td>
        `parentId`
      </td>

      <td>
        `parent.id`
      </td>

      <td>
        Identificador del tramo ascendente que llamó al servicio.
      </td>
    </tr>

    <tr>
      <td>
        `kind`
      </td>

      <td>
        `kind`
      </td>

      <td>
        Ya sea `Client` o `Server`.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        `name`
      </td>

      <td>
        Nombre del tramo.
      </td>
    </tr>

    <tr>
      <td>
        `duration`
      </td>

      <td>
        `duration.ms`
      </td>

      <td>
        Los intervalos de Zipkin v2 deben tener duraciones especificadas en microsegundos y se convertirán a milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        localEndpoint: `serviceName`
      </td>

      <td>
        `service.name`
      </td>

      <td>
        Usamos el nombre del servicio Zipkin v2 para identificar la entidad que creó este tramo. Si no se proporciona ningún valor o se proporciona una cadena vacía, el intervalo se asigna a una entidad "DESCONOCIDA" y se mostrará como tal en la UI. Este valor debe proporcionarse para obtener una experiencia completa en la UI.
      </td>
    </tr>

    <tr>
      <td>
        localEndpoint: `port`
      </td>

      <td>
        `localEndpoint.port`
      </td>

      <td>
        Todos los valores del objeto `localEndpoint` se aplanarán a un atributo de intervalo llamado `localEndpoint.key`
      </td>
    </tr>

    <tr>
      <td>
        `tags`
      </td>

      <td>
        reportado como [atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute)
      </td>

      <td>
        Los pares principales de valor en el objeto `tags` en Zipkin v2 se escribirán como atributo span.
      </td>
    </tr>

    <tr>
      <td>
        anotaciones
      </td>

      <td>
        No soportado
      </td>

      <td>
        Actualmente no admitimos anotaciones en la traza API. No se rechazarán los tramos que contengan anotaciones, pero no se escribirán los datos de las anotaciones.
      </td>
    </tr>
  </tbody>
</table>

## Agregar otra etiqueta/atributo [#other-tags]

Puedes agregar cualquier etiqueta que desees al bloque `tags` , con la excepción de la [etiqueta restringida](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits#restricted-attributes). Por ejemplo, es posible que desees agregar atributos como `customer.id` o `user.id` para ayudarte a analizar los datos de tu traza. La etiqueta se convertirá en New Relic [el atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute).

Para aprender a controlar cómo aparecen los intervalos en New Relic (por ejemplo, agregar errores o configurar un intervalo como intervalo de almacenamiento de datos), consulte [Decorar intervalos](/docs/apm/distributed-tracing/trace-api/trace-api-decorate-spans-attributes).
