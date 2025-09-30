---
title: 'Protección contra sobrecarga de API: manejo de errores 429'
tags:
  - APIs
  - REST API v2
  - Basic functions
metaDescription: 'To prevent resource-intensive API calls from affecting other customers'' API calls, New Relic''s REST API includes overload protection.'
freshnessValidatedDate: never
translationType: machine
---

Para responder rápidamente a su API de llamada REST, incluso cuando otros clientes realizan consultas que consumen mucho tiempo, New Relic incluye protección contra sobrecargas en la API.

Si está consultando una cantidad de datos lo suficientemente grande como para consumir recursos significativos, el código de respuesta y los encabezados de la API indicarán que ha excedido la capacidad disponible para su clave de API. Esta es una condición rara que la mayoría de los clientes nunca verán. Solo lo verán los clientes cuyo uso de API requiera muchos recursos.

Los clientes estarán limitados a 1000 llamadas API por minuto.

## Respuestas API [#api_response]

En funcionamiento normal, la API no agrega ningún estado de protección contra sobrecargas a las respuestas. No es necesario realizar ninguna acción.

Durante el intervalo de tiempo <DNT>**reporting period**</DNT> , New Relic rastrea el impacto de cada solicitud de API en nuestro sistema.

Estos son los casos típicos que pueden activar la protección contra sobrecarga o la limitación de velocidad:

* Una clave de API que estás utilizando ha superado el número máximo de solicitudes por minuto.
* Nuestro sistema generalmente está sobrecargado y necesitamos que algunas cuentas reduzcan sus informes.

En el caso de que se produzca una limitación de velocidad, sucederán las siguientes cosas:

* La API de llamada adicional fallará con el código de estado HTTP 429 (demasiadas solicitudes).
* Los encabezados y el cuerpo de las respuestas HTTP pueden contener o no más información sobre el error.
* La llamada API se permitirá nuevamente al final del período del informe.

## Encabezados [#api_headers]

Estos son los encabezados HTTP que aparecerán en las respuestas de API si ha excedido el límite individual de su clave de API:

<table>
  <thead>
    <tr>
      <th>
        Encabezado de sobrecarga
      </th>

      <th>
        Significado
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `X-RateLimit-Limit`
      </td>

      <td>
        Número máximo de solicitudes por minuto.
      </td>
    </tr>

    <tr>
      <td>
        `X-RateLimit-Remaining`
      </td>

      <td>
        Número de solicitudes restantes en este período.
      </td>
    </tr>

    <tr>
      <td>
        `X-RateLimit-Reset`
      </td>

      <td>
        Timestamp UNIX (número de segundos desde el 1 de enero de 1970) cuando finaliza el período de informe actual. Las solicitudes de API serán respondidas después de este tiempo.
      </td>
    </tr>

    <tr>
      <td>
        `X-RateLimit-Docs`
      </td>

      <td>
        Hipervínculo a este documento para que tenga información adicional de inmediato.
      </td>
    </tr>
  </tbody>
</table>

Estos son los encabezados HTTP que aparecerán en las respuestas de la API si hay un problema general del sistema:

<table>
  <thead>
    <tr>
      <th style={{ width: "400px" }}>
        Encabezado de sobrecarga
      </th>

      <th>
        Significado
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td id="overload-reset">
        `Retry-After`
      </td>

      <td>
        Número de segundos hasta que debas volver a intentarlo.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplo [#api_example]

Aquí hay un ejemplo de solicitud de API que indica que la persona que llama ha consumido todos los recursos disponibles y que se permitirán más llamadas API nuevamente al mediodía del 1 de febrero de 2016:

```
curl -X GET 'https://api.newrelic.com/v2/applications.json' \
     -H "Api-Key:<a href='/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key'>$API_KEY</a>" -i
HTTP/1.1 429 Too Many Requests
Content-Type: application/json
...
X-RateLimit-Docs: https://docs.newrelic.com/docs/apis/rest-api-v2/requirements/api-overload-protection-preventing-429-errors
X-RateLimit-Reset: 1454313600
X-RateLimit-Remaining: 0
X-RateLimit-Limit: 1000

{}
```

## Prevención de errores de limitación de velocidad [#preventing-errors]

La solución más sencilla para un error 429 es esperar hasta que finalice el período del informe antes de enviar su próxima solicitud de API. Sin embargo, con una gestión cuidadosa de su consulta, puede evitar errores de protección contra sobrecargas en primer lugar.

Si sabe que enviará muchas consultas que consumirán muchos recursos, puede realizar una de las siguientes medidas preventivas:

* Envía tu consulta con menos frecuencia; en particular, consulte con menos frecuencia que una vez por minuto (la frecuencia de actualización de los datos del agente).
* Almacene en caché los datos de New Relic en lugar de solicitarlos desde la API cada vez.
* Utilice la [técnica basada en cursor](/docs/apis/rest-api-v2/requirements/pagination-api-output#metric_name_cursor_paging) si debe solicitar nombres métricos y los resultados de salida en varias páginas.
