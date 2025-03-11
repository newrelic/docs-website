---
title: Traza API requisitos generales y límites
tags:
  - Understand dependencies
  - Distributed tracing
  - Trace API
metaDescription: 'For New Relic Trace API: requirements, rules, max limits, and validation rules and responses.'
freshnessValidatedDate: never
translationType: machine
---

Información sobre los requisitos de datos [de traza API](/docs/apm/distributed-tracing/trace-api/introduction-new-relic-trace-api) , que incluyen:

* Especificaciones de datos y límites máximos.
* Metadatos requeridos (encabezados, parámetro de consulta)
* Detalles de validación de respuesta

Este documento se aplica a la traza API en general. Para conocer las reglas relativas a formatos de datos específicos, consulte:

* [Datos de traza en formato New Relic](/docs/apm/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api)
* [Datos de traza en formato Zipkin](/docs/apm/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api)

## Extremo [#requirements]

Todos los datos de la traza se envían vía HTTPS POST a una traza extremos de API. Tenemos algunos extremos, dependiendo de su configuración:

* Traza por defecto extremos de API: `https://trace-api.newrelic.com/trace/v1`
* Centro de datos de la UE: `https://trace-api.eu.newrelic.com/trace/v1` (ver otro [extremo de la UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center#endpoints)).
* [Seguimiento infinito](/docs/understand-dependencies/distributed-tracing/infinite-tracing/introduction-infinite-tracing): cuando completa la [configuración del observador de traza](/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer), obtiene un valor personalizado YOUR_TRACE_OBSERVER_URL para usar como extremo. Si estás utilizando una integración que utiliza la API de traza (por ejemplo, [Kamon reporter](/docs/more-integrations/open-source-telemetry-integrations/kamon/kamon-reporter/#install)), debes configurar esa integración con ese extremo. También querrás ajustar el [muestreo de tu servicio de rastreo](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#tail-based) para enviarnos el 100 % de los intervalos.
* FedRAMP: Ver [FedRAMP extremo](/docs/security/security-privacy/compliance/fedramp-compliant-endpoints/#trace-api).

## Formatos de datos [#data-formats]

Actualmente, la API de traza acepta dos tipos de formatos de datos:

* [`zipkin`](/docs/apm/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api): Para informar datos de Zipkin traza. Los datos de Zipkin deben ser [Zipkin JSON v2](https://zipkin.io/zipkin-api/#/default/post_spans).
* [`newrelic`](/docs/apm/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api): Para informar todos los demás datos de traza.

## Atributo restringido [#restricted-attributes]

Los atributos de la siguiente tabla están restringidos en el formato JSON `newrelic` (en el bloque `attributes` ) y en el formato JSON [`zipkin`](/docs/apm/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api) (en el bloque `tags` . <DNT>**Any values with these keys will be omitted**</DNT>:

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        Atributo restringido
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `entityGuid`

        _cadena_
      </td>

      <td>
        Identificador único de la entidad que creó este intervalo. Generado a partir de `service.name`, si está disponible.
      </td>
    </tr>

    <tr>
      <td>
        `guid`

        _cadena_
      </td>

      <td>
        Se utiliza para compatibilidad con datos de <InlinePopover type="apm"/>agente.
      </td>
    </tr>
  </tbody>
</table>

Los atributos en la siguiente tabla se utilizan internamente para identificar la entidad. Cualquier valor enviado con estas claves en la sección de atributos de un punto de datos métrico puede causar un comportamiento indefinido, como la falta de entidad en la UI o que la telemetría no se asocie con la entidad esperada. Para obtener más información, consulte la [síntesis de entidades](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/#entity-synthesis):

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        Atributo restringido
      </th>

      <th>
        descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `entity.guid`

        _cadena_
      </td>

      <td>
        Identificador único de la entidad asociada con este intervalo.
      </td>
    </tr>

    <tr>
      <td>
        `entity.name`

        _cadena_
      </td>

      <td>
        Nombre legible por humanos de una entidad, que a menudo se usa para identificar una entidad en la UI.
      </td>
    </tr>

    <tr>
      <td>
        `entity.type`

        _cadena_
      </td>

      <td>
        Se utiliza para diferenciar entre diferentes tipos de entidades, como hosts, aplicaciones, etc.
      </td>
    </tr>
  </tbody>
</table>

## Solicitar metadatos (encabezados y parámetro de consulta) [#headers-query-parameters]

La siguiente tabla muestra los metadatos de solicitud requeridos para todos los formatos de datos de traza. Estos metadatos se pueden enviar como encabezados HTTP en una solicitud de ingesta o, en algunos casos, proporcionarse como parámetro de consulta, que puede ser necesario para el marco de seguimiento que no permite la modificación del encabezado.

<Callout variant="important">
  Nota de seguridad: sugerimos usar encabezados porque los parámetros de consulta están presentes en la URL y pueden registrarse antes de ser cifrados y recibidos por New Relic. Todos los datos enviados como parámetro de consulta deben ser seguros para URL.
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Encabezamiento
      </th>

      <th style={{ width: "110px" }}>
        ¿Parámetro de consulta?
      </th>

      <th>
        Detalles
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Content-Type`
      </td>

      <td>
        No
      </td>

      <td>
        <DNT>**Required.**</DNT> Debe ser `application/json`.
      </td>
    </tr>

    <tr>
      <td>
        `Content-Length`
      </td>

      <td>
        No
      </td>

      <td>
        <DNT>**Required.**</DNT> La longitud del cuerpo de la solicitud en octetos (bytes de 8 bits), a menos que se envíe con codificación fragmentada. Este encabezado generalmente lo establece de forma predeterminada el cliente HTTP subyacente que envía los datos y, en la mayoría de los casos, no debería requerir ningún esfuerzo adicional por parte del usuario final.
      </td>
    </tr>

    <tr>
      <td>
        `Api-Key`
      </td>

      <td>
        Sí (distingue entre mayúsculas y minúsculas)
      </td>

      <td>
        <DNT>**Required.**</DNT> La API de traza requiere un <InlinePopover type="licenseKey"/>. Si esto se proporciona como encabezado y parámetro de consulta, los valores deben coincidir.
      </td>
    </tr>

    <tr>
      <td>
        `Content-Encoding`
      </td>

      <td>
        No
      </td>

      <td>
        <DNT>**Required if compressed payload.**</DNT> El valor debe ser `gzip`.
      </td>
    </tr>

    <tr id="data-format">
      <td>
        `Data-Format`
      </td>

      <td>
        Sí
      </td>

      <td>
        <DNT>**Required for `zipkin`**</DNT>. Opcional para `newrelic`.

        Si está presente, [`Data-Format-Version`](#data-format-version) también debe estar presente.
      </td>
    </tr>

    <tr id="data-format-version">
      <td>
        `Data-Format-Version`
      </td>

      <td>
        Sí
      </td>

      <td>
        <DNT>**Required for `zipkin`**</DNT>.

        Si está presente, `Data-Format` también debe estar presente.

        Sólo hay dos combinaciones posibles para estos valores:

        * Si `Data-Format` es `zipkin`, `Data-Format-Version` debe ser `2`.
        * Si `Data-Format` es `newrelic`, `Data-Format-Version` debe ser `1`.
      </td>
    </tr>

    <tr id="data-format">
      <td>
        `x-request-id`
      </td>

      <td>
        No
      </td>

      <td>
        <DNT>**Optional - Reserved for future use.**</DNT> El valor debe ser un `UUID4` válido. Se espera que el valor sea único para cada solicitud.
      </td>
    </tr>
  </tbody>
</table>

## Validación de respuesta

Una respuesta para enviar datos de traza con éxito incluirá un `requestId`. Por ejemplo:

```json
{"requestId":"c1bb62fc-001a-b000-0000-016bb152e1bb"}
```

Hay dos formas de señalar el éxito o los errores:

* <DNT>**HTTP status code**</DNT> (sincrónico). Los errores de autenticación y solicitud se indicarán mediante un código de estado HTTP.

  <CollapserGroup>
    <Collapser
      id="status-codes"
      title="Ver códigos de estado HTTP"
    >
      <table>
        <thead>
          <tr>
            <th style={{ width: "150px" }}>
              Código
            </th>

            <th>
              Significado
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              202
            </td>

            <td>
              Datos aceptados. Esto significa que ha pasado las verificaciones preliminares, pero no es garantía de que los datos hayan sido analizados e indexados exitosamente como parte de un rastreo distribuido.
            </td>
          </tr>

          <tr>
            <td>
              400
            </td>

            <td>
              La estructura de la solicitud no era válida. Errores con parámetro de consulta, etc.
            </td>
          </tr>

          <tr>
            <td>
              403
            </td>

            <td>
              Error de autenticación. Puede ocurrir con un <InlinePopover type="licenseKey"/>no válido o si no tiene el derecho necesario para utilizar la API de traza.
            </td>
          </tr>

          <tr>
            <td>
              404
            </td>

            <td>
              La ruta de la solicitud es incorrecta.
            </td>
          </tr>

          <tr>
            <td>
              405
            </td>

            <td>
              Para cualquier método de solicitud que no sea POST.
            </td>
          </tr>

          <tr>
            <td>
              408
            </td>

            <td>
              La solicitud tardó demasiado en llegar al extremo.
            </td>
          </tr>

          <tr>
            <td>
              411
            </td>

            <td>
              El encabezado Content-Length no estaba incluido.
            </td>
          </tr>

          <tr>
            <td>
              413
            </td>

            <td>
              La carga útil era demasiado grande.
            </td>
          </tr>

          <tr>
            <td>
              414
            </td>

            <td>
              El URI de solicitud era demasiado largo.
            </td>
          </tr>

          <tr>
            <td>
              415
            </td>

            <td>
              El tipo de contenido o la codificación de contenido no eran válidos.
            </td>
          </tr>

          <tr>
            <td>
              429
            </td>

            <td>
              Se ha superado la cuota de tasa de solicitud.
            </td>
          </tr>

          <tr>
            <td>
              431
            </td>

            <td>
              Los encabezados de la solicitud son demasiado largos.
            </td>
          </tr>

          <tr>
            <td>
              5xx
            </td>

            <td>
              Hubo un error en el servidor (vuelve a intentarlo).
            </td>
          </tr>
        </tbody>
      </table>
    </Collapser>
  </CollapserGroup>

* `NrIntegrationError` evento (asincrónico). Los errores con la carga útil JSON u otros errores semánticos se señalan de forma asincrónica a través del [evento`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)que se almacena en la cuenta cuyo <InlinePopover type="licenseKey"/>está asociado con la solicitud. Para todos los errores de este tipo, el atributo `newRelicFeature` será `Distributed Tracing` y `requestId` será el `requestId` de la respuesta extremo.

Si recibe una respuesta `202` y no ve un evento `NrIntegrationError`, sus datos deberían estar visibles en nuestra [UIglobal de rastreo distribuida](https://one.newrelic.com/launcher/distributed-tracing-nerdlets.distributed-tracing#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjoxODAwMDAwfX0=&pane=eyJuZXJkbGV0SWQiOiJkaXN0cmlidXRlZC10cmFjaW5nLW5lcmRsZXRzLmRpc3RyaWJ1dGVkLXRyYWNpbmctbGF1bmNoZXIiLCJzb3J0SW5kZXgiOjAsInNvcnREaXJlY3Rpb24iOiJERVNDIn0=) en aproximadamente un minuto. Debería poder encontrar la traza utilizando una [búsqueda de traza](/docs/apm/distributed-tracing/ui-data/additional-distributed-tracing-features-new-relic-one#find-data) estándar como:

```
traceId = TRACE_ID_SENT
```

## Límites de datos [#data-limits]

Para conocer los límites relacionados con la traza, consulte [Cómo funciona rastreo distribuido](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#limits).
