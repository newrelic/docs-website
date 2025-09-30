---
title: Resolución de problemas faltan datos de traza API
type: troubleshooting
tags:
  - Understand dependencies
  - Distributed tracing
  - Trace API
metaDescription: 'For New Relic''s Trace API: how to troubleshoot missing trace data.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Ha utilizado la [API de traza](/docs/apm/distributed-tracing/trace-api/introduction-new-relic-trace-api) para informar datos, pero no ve sus datos en New Relic o tiene preguntas al respecto.

## Solución

Aquí hay algunas ideas para la resolución de problemas de traza con datos reportados por API:

* Para verificar que se hayan informado los datos del intervalo, ejecute una consulta NRQL en el [generador de consultas](https://one.newrelic.com/launcher/nr1-core.home#pane=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5zZWFyY2gtcm9vdCJ9&overlay=eyJvdmVybGF5SWQiOiJ3YW5kYS1kYXRhLWV4cGxvcmF0aW9uLm5ycWwtZWRpdG9yIiwibmVyZGxldElkIjoid2FuZGEtZGF0YS1leHBsb3JhdGlvbi5kYXRhLWV4cGxvcmVyIiwiaW5pdGlhbEFjdGl2ZUludGVyZmFjZSI6Im5ycWxFZGl0b3IiLCJpbml0aWFsQWNjb3VudElkIjoxfQ==) para el intervalo que acaba de cargar. Debes estar en la misma cuenta de New Relic utilizada para reportar los datos de la traza (mismo <InlinePopover type="licenseKey"/>). Ejemplo de consulta:

  ```sql
  FROM Span SELECT * WHERE trace.id = '123456'
  ```

* Si una llamada genera un código de respuesta HTTP, busque el [significado del código de respuesta](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits#status-codes).

* Si ocurren problemas de limitación de velocidad, generamos un [`NrIntegrationError`](/docs/telemetry-data-platform/manage-data/nrintegrationerror). Puede [ejecutar una consulta NRQL de ese evento](https://one.newrelic.com/launcher/nr1-core.home?pane=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5ob21lLXNjcmVlbiJ9&overlay=eyJuZXJkbGV0SWQiOiJ3YW5kYS1kYXRhLWV4cGxvcmF0aW9uLmRhdGEtZXhwbG9yZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxBY2NvdW50SWQiOjI0NTkxMTUsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3siYWNjb3VudElkIjoyNDU5MTE1LCJucnFsIjoiRlJPTSBOckludGVncmF0aW9uRXJyb3Igc2VsZWN0ICogIn1dLCJpbml0aWFsQ2hhcnRTZXR0aW5ncyI6eyJjaGFydFR5cGUiOiJDSEFSVF9UQUJMRSJ9fQ==) para ver si los datos de su traza encontraron un problema. Si desea correlacionar el evento `NrIntegrationError` , puede utilizar el `requestId` proporcionado por cada solicitud de API de traza.

* Si sus intervalos tienen una marca de tiempo, asegúrese de que cumplan con las siguientes pautas:

  * La marca de tiempo del intervalo debe haber ocurrido dentro de los últimos 60 minutos.

  * `newrelic`La marca de tiempo en formato debe estar en

    <DNT>
      **milliseconds**
    </DNT>

    . Puede obtener la hora actual en milisegundos en [currentmillis.com](https://currentmillis.com).

  * `zipkin`La marca de tiempo en formato debe estar en

    <DNT>
      **microseconds**
    </DNT>

    .

  * La marca de tiempo debe estar en UTC.

* Las llamadas al extremo no son idempotentes. Esto significa que si envía varias trazas con el mismo `trace.id`, se producirá una traza fragmentada en la UI debido a datos ambiguos entre padres e hijos de la traza.

* Verifique que su carga útil sea válida. Para la traza de formato `newrelic` , un problema puede ser que los pares principales de valores no se hayan colocado en el bloque `attributes` .

* Confirma que tu traza tiene un tramo raíz (un `parent.id` nulo en un tramo). Ejemplo de consulta:

  ```sql
  FROM Span SELECT * WHERE trace.id = '123456' AND parent.id IS NULL
  ```

Para obtener más información sobre cómo se valida la transmisión de datos de traza API, consulte [Validación](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits#response-validation).
