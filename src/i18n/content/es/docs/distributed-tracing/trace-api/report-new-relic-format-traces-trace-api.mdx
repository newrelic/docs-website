---
title: Reportar traza a través de la traza API (formato New Relic)
tags:
  - Understand dependencies
  - Distributed tracing
  - Trace API
metaDescription: 'For New Relic''s Trace API: how to report traces using the New Relic format.'
freshnessValidatedDate: never
translationType: machine
---

Si desea crear su propia implementación de seguimiento, puede utilizar nuestra [traza API](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api). Este documento explica cómo enviar traza en nuestro formato general, también conocido como formato `newrelic` . (Para enviar datos en formato Zipkin, consulte [Zipkin](/docs/apm/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api)).

## Empezar [#send-data-overview]

Utilizar nuestra traza API es tan sencillo como:

* Envío de datos de traza en el formato esperado (en este caso, nuestro formato `newrelic` .
* Enviando esos datos al [extremo](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits#requirements) apropiado.

Antes de utilizar la API de traza, debes decidir si quieres utilizar Infinite Tracing. Para obtener más información sobre esto, consulte [Introducción a](/docs/understand-dependencies/distributed-tracing/infinite-tracing/introduction-infinite-tracing) [las consideraciones de seguimiento y muestreo](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api#sampling) infinitos.

Para comenzar a utilizar la API de traza, siga uno de estos caminos:

* ¿Quieres utilizar [el rastreo infinito](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api#sampling)? Siga las instrucciones [para configurar un observador de trazas](/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer#set-up) . Eso lo guiará a través de la creación de un observador de traza y el envío de una carga útil de muestra al extremo del observador de traza.
* ¿No quieres seguimiento infinito? Vea cómo enviar una [carga útil de muestra](#new-relic-quick-start) (a continuación).

## Enviar carga útil de traza de muestra (rastreo no infinito) [#new-relic-quick-start]

A continuación se explica cómo enviar una carga útil estándar (no[Infinite Tracing](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api#sampling)) a la API de traza utilizando nuestro formato `newrelic` .

1. Obtenga un <InlinePopover type="licenseKey"/>para la cuenta a la que desea informar datos.

2. Inserte esa clave en el siguiente JSON y luego envíe el JSON a nuestro extremo. Nota: si tiene una cuenta EU New Relic, utilice el [extremo EU](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits#requirements) en su lugar.

   ```bash
   curl -i -H 'Content-Type: application/json' \
       -H 'Api-Key: YOUR_LICENSE_KEY' \
       -H 'Data-Format: newrelic' \
       -H 'Data-Format-Version: 1' \
       -X POST \
       -d '[
               {
                   "common": {
                       "attributes": {
                           "service.name": "Test Service A",
                           "host": "host123.example.com"
                       }
                   },
                   "spans": [
                       {
                           "trace.id": "123456",
                           "id": "ABC",
                           "attributes": {
                               "duration.ms": 12.53,
                               "name": "/home"
                           }
                       },
                       {
                           "trace.id": "123456",
                           "id": "DEF",
                           "attributes": {
                               "error.message": "Invalid credentials",
                               "service.name": "Test Service A",
                               "host": "host456.example.com",
                               "duration.ms": 2.97,
                               "name": "/auth",
                               "parent.id": "ABC"
                           }
                       }
                   ]
               }
           ]' 'https://trace-api.newrelic.com/trace/v1'
   ```

   <Callout variant="tip">
     Si envía más de un `POST`, cambie el `trace.id` por un valor único. Enviar la misma carga útil o intervalo `id` varias veces para el mismo `trace.id` puede generar una traza fragmentada en la UI.
   </Callout>

3. Si su prueba arrojó `HTTP/1.1 202 Accepted`, vaya a [nuestra UI](https://one.newrelic.com/launcher/distributed-tracing-nerdlets.distributed-tracing?launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjoxODAwMDAwfSwiJGlzRmFsbGJhY2tUaW1lUmFuZ2UiOnRydWV9&pane=eyJuZXJkbGV0SWQiOiJkaXN0cmlidXRlZC10cmFjaW5nLW5lcmRsZXRzLmRpc3RyaWJ1dGVkLXRyYWNpbmctbGF1bmNoZXIiLCJzb3J0SW5kZXgiOjAsInNvcnREaXJlY3Rpb24iOiJERVNDIiwicXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJpbmRleFF1ZXJ5Ijp7ImNvbmRpdGlvblR5cGUiOiJJTkRFWCIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W119LCJzcGFuUXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJjb25kaXRpb25TZXRzIjpbeyJjb25kaXRpb25UeXBlIjoiU1BBTiIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W3siYXR0ciI6InNlcnZpY2UubmFtZSIsIm9wZXJhdG9yIjoiRVEiLCJ2YWx1ZSI6IlRlc3QgU2VydmljZSBBIn1dfV19fX0=) para ver una consulta de los datos de su prueba utilizando el atributo de intervalo `service.name = Test Service A`.

   <Callout variant="tip">
     Traza puede tardar hasta un minuto en ser procesada tanto por el observador de traza como por la traza API.
   </Callout>

## Traza API carga (formato New Relic) [#new-relic-guidelines]

La carga útil de traza API JSON es una matriz de objetos, y cada objeto representa una única traza. Cada uno de estos objetos requiere una clave `spans` y también puede incluir una clave `common` . `spans` (obligatorio) contiene una matriz de objetos, y cada objeto representa un intervalo. `common` (opcional) comparte información en varios tramos.

### El objeto Span en la matriz `spans`

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        campo
      </th>

      <th>
        tipo
      </th>

      <th>
        descripción
      </th>

      <th>
        requerido
      </th>

      <th>
        por defecto
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `id`
      </td>

      <td>
        _cadena_
      </td>

      <td>
        Identificador único para este lapso.
      </td>

      <td>
        Sí
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        `trace.id`
      </td>

      <td>
        _cadena_
      </td>

      <td>
        Identificador único compartido por todos los tramos dentro de una única traza.
      </td>

      <td>
        Sí
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        `timestamp`
      </td>

      <td>
        _largo_
      </td>

      <td>
        Hora de inicio del intervalo en [milisegundos desde la época de Unix](https://currentmillis.com/).
      </td>

      <td>
        No
      </td>

      <td>
        Hora actual en la zona horaria UTC
      </td>
    </tr>

    <tr>
      <td>
        `attributes`
      </td>

      <td>
        _objeto_
      </td>

      <td>
        Cualquier conjunto de pares de valores principales que agreguen más detalles sobre un lapso. Se recomienda encarecidamente agregar `duration.ms`, `name` y `parent.id` .
      </td>

      <td>
        No
      </td>

      <td>
        N/A
      </td>
    </tr>
  </tbody>
</table>

Las solicitudes que no contengan las claves requeridas anteriormente se rechazarán y se generará un [`NrIntegrationError`](/docs/apm/distributed-tracing/trace-api/trace-api-general-requirements-limits#response-validation) .

### El objeto `common` (opcional)

<table>
  <thead>
    <tr>
      <th style={{ width: "115px" }}>
        campo
      </th>

      <th style={{ width: "115px" }}>
        tipo
      </th>

      <th>
        descripción
      </th>

      <th style={{ width: "115px" }}>
        requerido
      </th>

      <th style={{ width: "115px" }}>
        por defecto
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `attributes`
      </td>

      <td>
        _objeto_
      </td>

      <td>
        Cualquier conjunto de pares de valores principales que agreguen detalles comunes sobre tramos en la carga útil. Si un intervalo contiene un atributo que se ha establecido en `common`, la clave en el objeto de atributos de intervalo tendrá prioridad. Se recomienda encarecidamente agregar `duration.ms`, `name` y `parent.id` .
      </td>

      <td>
        No
      </td>

      <td>
        N/A
      </td>
    </tr>
  </tbody>
</table>

### Atributo muy recomendado [#recommended-attributes]

Si bien no son obligatorios, estos atributos deben incluirse para obtener la mejor experiencia con sus datos en el objeto `attributes` para cada intervalo.

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        atributo
      </th>

      <th style={{ width: "120px" }}>
        por defecto
      </th>

      <th>
        descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `duration.ms`

        _Flotante_
      </td>

      <td>
        ninguno
      </td>

      <td>
        Duración de este lapso en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `name`

        _cadena_
      </td>

      <td>
        ninguno
      </td>

      <td>
        El nombre de este lapso.
      </td>
    </tr>

    <tr>
      <td>
        `parent.id`

        _cadena_
      </td>

      <td>
        ninguno
      </td>

      <td>
        La identificación de la persona que llama de este lapso. El valor es `null` si este es el [intervalo raíz](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#trace-grouping). La traza sin un tramo de raíz no se mostrará.
      </td>
    </tr>

    <tr>
      <td>
        `service.name`

        _cadena_
      </td>

      <td>
        ninguno
      </td>

      <td>
        El nombre de la entidad que creó este intervalo. Si no se proporciona ningún valor o se proporciona una cadena vacía, el intervalo se asigna a una entidad "DESCONOCIDA" y se mostrará como tal en la UI. Este valor debe proporcionarse para obtener una experiencia completa en la UI.
      </td>
    </tr>
  </tbody>
</table>

### Atributo reservado

Estos atributos están actualmente reservados para uso interno de New Relic. Si bien no están bloqueados explícitamente, recomendamos no utilizarlos.

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        atributo
      </th>

      <th style={{ width: "150px" }}>
        por defecto
      </th>

      <th>
        descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `entity.name`

        _cadena_
      </td>

      <td>
        `service.name`
      </td>

      <td>
        Esto se deriva del atributo `service.name` .
      </td>
    </tr>

    <tr>
      <td>
        `entity.type`

        _cadena_
      </td>

      <td>
        `service`
      </td>

      <td>
        Se supone que el tipo de entidad es un servicio.
      </td>
    </tr>

    <tr>
      <td>
        `entity.guid`

        _cadena_
      </td>

      <td>
        Ninguno
      </td>

      <td>
        El `entity.guid` es un valor derivado que identifica de forma única la entidad en el backend de New Relic.
      </td>
    </tr>
  </tbody>
</table>

### Otro atributo

Puede agregar cualquier atributo arbitrario que desee en el objeto `attributes` en `common` o en cada objeto span, con la excepción del [atributo restringido](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits#restricted-attributes). Por ejemplo, es posible que desees agregar atributos como `customer.id` o `user.id` para ayudarte a analizar los datos de tu traza.

Requisitos y lineamientos para traza JSON usando el formato `newrelic` :

* Cada carga útil JSON es una matriz de objetos.
* Cada objeto debe contener una clave `spans` obligatoria.
* Cada objeto puede contener una clave `common` opcional. Utilícelo si desea compartir información en varios tramos de un objeto.
* Cualquier clave en un intervalo tiene prioridad sobre la misma clave en el bloque `common` .
* El valor de una clave `spans` es una lista de `span` objetos.
* Ciertos atributos son [obligatorios](#required-attributes) y deben incluirse en el bloque opcional `common` o en cada tramo.
* Recomendado y el atributo personalizado se pueden incluir opcionalmente en una lista de pares de valores principales bajo una clave denominada `attributes`, en el bloque opcional `common` y/o en cada intervalo.

En el siguiente ejemplo `POST`, hay dos tramos, los cuales tienen el traza.id `12345` y el atributo personalizado `host: host123.example.com`. El primer tramo no tiene `parent.id`, por lo que esa es la raíz de la traza; El `parent.id` del segundo tramo apunta al ID del primero.

```json
[
  {
    "common": {
      "attributes": {
        "host": "host123.example.com"
      }
    },
    "spans": [
      {
        "trace.id": "12345",
        "id": "abc",
        "timestamp": 1603336834823,
        "attributes": {
          "user.email": "bob@newr.com",
          "service.name": "my-service",
          "duration.ms": 750,
          "name": "my-span"
        }
      },
      {
        "trace.id": "12345",
        "id": "def",
        "timestamp": 1603336834899,
        "attributes": {
          "parent.id": "abc",
          "service.name": "second-service",
          "duration.ms": 750,
          "name": "second-span"
        }
      }
    ]
  }
]
```

Para aprender a controlar cómo aparecen los intervalos en New Relic (por ejemplo, agregar errores o configurar un intervalo como intervalo de almacenamiento de datos), consulte [Decorar intervalos](/docs/apm/distributed-tracing/trace-api/trace-api-decorate-spans-attributes).

## Explore más sobre el rastreo distribuido: [#additional-help]

* [Descubra dónde aparecen los datos de traza API en la UI](/docs/understand-dependencies/distributed-tracing/ui-data/additional-distributed-tracing-features-new-relic-one#find-data).
* [Aprenda a decorar tramos](/docs/apm/distributed-tracing/trace-api/trace-api-decorate-spans-attributes) para disfrutar de una experiencia UI más rica y detallada. Por ejemplo, puede hacer que los intervalos se muestren como intervalos de almacenamiento de datos o muestren errores.
* Obtenga información sobre [los límites de datos generales, los metadatos requeridos y la validación de respuestas](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits).
* Si no ves los datos de tu traza, consulta [resolución de problemas](/docs/apm/distributed-tracing/trace-api/troubleshooting-missing-trace-api-data).
