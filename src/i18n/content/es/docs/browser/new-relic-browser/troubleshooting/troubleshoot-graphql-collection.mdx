---
title: Los metadatos de GraphQL no se encuentran en AjaxRequests
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Troubleshooting for not seeing GraphQL metadata on AjaxRequest events for your browser app.
freshnessValidatedDate: '2023-10-19T00:00:00.000Z'
translationType: machine
---

## Problema

Estás viendo el evento AjaxRequest, pero no contiene las siguientes propiedades de metadatos GraphQL para tu aplicación browser .

* [Framework de operación](/attribute-dictionary/?event=AjaxRequest&attribute=operationFramework)
* [Nombre de la operación](/attribute-dictionary/?event=AjaxRequest&attribute=operationName)
* [Tipo de operación](/attribute-dictionary/?event=AjaxRequest&attribute=operationType)

## Causa

El agente del navegador analiza cada consulta y cuerpo de solicitud AJAX e intenta identificar patrones GraphQL comunes. Al detectar estos patrones, agregará propiedades de metadatos adicionales al evento AjaxRequest saliente que se está recopilando. Si el agente no detecta estos patrones, no agregará las propiedades de evento adicionales.

## Solución

Si su aplicación está [instrumentada con la última versión de monitoreo de navegador](/docs/browser/new-relic-browser/installation-configuration/troubleshooting-browser-monitoring-installation) y está recopilando datos para todas [las características Pro](/docs/browser/new-relic-browser/browser-pro-features), asegúrese de que sus solicitudes AJAX se envíen utilizando el formato GraphQL estándar.

Para verificar el formato de su solicitud AJAX, use la consola de desarrollo de su browser para ver las solicitudes y compararlas con la sintaxis siguiente.

<CollapserGroup>
  <Collapser
    id="post"
    title="Solicitudes GraphQL POST"
  >
    Para consultas, mutaciones y suscripción POST GraphQL, el agente del navegador analiza el cuerpo de la solicitud en busca de datos formateados como tales:

    ```js
    {
        "query": ...,
        "operationName": ...,
        "variables": ... 
      }
    ```
  </Collapser>

  <Collapser
    id="get"
    title="Solicitud GraphQL GET"
  >
    Para consultas GET GraphQL, el agente del navegador analiza el parámetro de consulta de solicitud para datos formateados como tales:

    ```js
    ?query=...&operationName=...&variables=...
    ```
  </Collapser>

  <Collapser
    id="batch"
    title="Solicitudes POST por lotes de GraphQL"
  >
    Para operaciones GraphQL por lotes, el agente del navegador analiza el cuerpo de la solicitud en busca de datos formateados como tales:

    ```js
    [
        {
          "query": ...,
          "operationName": ...,
          "variables": ... 
        },
        {
          "query": ...,
          "operationName": ...,
          "variables": ... 
        },
        ...etc
      ]
    ```
  </Collapser>
</CollapserGroup>

Consulte [la documentación de GraphQL](https://graphql.org/learn/serving-over-http/#post-request) para obtener una descripción detallada de estos estándares.

El agente utiliza el contenido de esta carga útil para detectar patrones GraphQL y crear las propiedades de los metadatos. Cualquier cuerpo de solicitud o consulta al que le falte la sección `query` no se procesará como datos GraphQL en absoluto.

Si ve que su carga GraphQL no sigue este patrón, el agente no podrá detectar de manera confiable los metadatos de GraphQL.

Si alguno de estos pasos de resolución de problemas falla o aún tiene problemas con las propiedades de datos AJAX que faltan, obtenga asistencia en [support.newrelic.com](https://support.newrelic.com).
