---
title: Utilice API de credenciales seguras de monitoreo sintético
tags:
  - APIs
  - Synthetic monitoring REST API
  - Secure credentials examples
metaDescription: Use REST API to manage secure credentials in your synthetic monitors.
freshnessValidatedDate: never
translationType: machine
---

Con la [API REST de monitoreo sintético](/docs/apis/synthetics-rest-api/monitor-examples/manage-synthetics-monitors-rest-api), puede realizar una llamada API para cambiar o recuperar datos [de credenciales seguras](/docs/synthetics/new-relic-synthetics/using-monitors/secure-credentials-store-credentials-information-scripted-browsers) . Este documento explica los requisitos de API y contiene ejemplos de comando curl de API.

Para obtener pautas generales para configurar credenciales seguras y configurarlas en la UI, consulte [Credenciales seguras](/docs/synthetics/new-relic-synthetics/using-monitors/secure-credentials-store-credentials-information-scripted-browsers).

<Callout variant="important">
  Ahora puede administrar sus credenciales seguras con nuestra [API NerdGraph](/docs/apis/nerdgraph/examples/nerdgraph-synthetics-tutorial#manage-your-secure-credentials).
</Callout>

## Requisitos y reglas [#requirements]

Para conocer las reglas generales sobre esta característica, consulte los [requisitos de credenciales seguras](/docs/synthetics/new-relic-synthetics/using-monitors/secure-credentials-store-credentials-information-scripted-browsers#requirements).

Los requisitos y reglas de API incluyen:

* Consulte [los requisitos generales de la API REST de monitoreo sintético](/docs/apis/synthetics-rest-api/monitor-examples/manage-synthetics-monitors-rest-api#use-api).
* La tasa de solicitudes de una cuenta está limitada a tres solicitudes por segundo. Las solicitudes que superen este umbral devolverán un código de respuesta 429.
* No se puede acceder al valor de una clave a través de la API; un usuario no autorizado no tendría acceso al valor principal seguro.

## Ejemplos de API

<CollapserGroup>
  <Collapser
    id="add-secure-credential"
    title="Agregar una credencial segura"
  >
    Para enviar una credencial segura a su cuenta de New Relic, envíe una solicitud POST a `https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials` con una carga útil JSON que describa la credencial segura. He aquí un ejemplo:

    ```
    {
      "key": string [required, 1-64 characters uppercase],
      "value": string [required, 1-3,000 characters],
      "description": string [optional]
    }
    ```

    Aquí hay un ejemplo de cómo hacer esto con un comando curl:

    ```
    curl -v \
         -X POST -H "Api-Key:<a href='/docs/apis/synthetics-rest-api/monitor-examples/manage-synthetics-monitors-rest-api#use-api'>$API_KEY</a>" \
         -H 'Content-Type: application/json' https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials \
         -d  '{ "key": "MYKEY", "value": "my value", "description": "Description of MYKEY" }'
    ```

    Una solicitud exitosa devolverá una respuesta `201 Created` , con el URI de la credencial segura recién creada especificada en el encabezado `location` . Los posibles códigos de error incluyen:

    * `303 See Other`: La clave especificada ya existe. El encabezado de ubicación devuelto contendrá el URI de la clave.
    * `400 Bad Request`: Clave demasiado larga o faltante, valor demasiado largo o faltante, carga útil JSON no analizable.
  </Collapser>

  <Collapser
    id="get-all-secure-credential"
    title="Obtenga todas las credenciales seguras"
  >
    Para ver una lista de todas las credenciales seguras en su cuenta New Relic, envíe una solicitud GET a `https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials`. Por ejemplo:

    ```
    curl -v \
         -H "Api-Key:<a href='/docs/apis/synthetics-rest-api/monitor-examples/manage-synthetics-monitors-rest-api#use-api'>$API_KEY</a>" https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials
    ```

    Una solicitud exitosa devolverá una respuesta `200 OK` . Los datos devueltos serán un objeto JSON en el siguiente formato:

    ```
    {
      "secureCredentials": [
        {
          "key": "MYKEY1",
          "description": "Description of MYKEY1",
          "createdAt": "2016-09-26T23:12:46.981+0000",
          "lastUpdated": "2016-09-26T23:12:46.981+0000"
        }, {
          "key": "MYKEY2",
          "description": "Description of MYKEY2",
          "createdAt": "2016-09-26T23:12:46.981+0000",
          "lastUpdated": "2016-09-26T23:12:46.981+0000"
        }
      ],
      "count": 2
    }
    ```
  </Collapser>

  <Collapser
    id="get-secure-credential"
    title="Obtenga una credencial segura específica"
  >
    Para ver una única credencial segura, envíe una solicitud GET a `https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/`$KEY.

    ```
    curl -v \
         -H "Api-Key:<a href='/docs/apis/synthetics-rest-api/monitor-examples/manage-synthetics-monitors-rest-api#use-api'>$API_KEY</a>" https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/$KEY
    ```

    Una solicitud exitosa devolverá una respuesta `200 OK` . Los [datos devueltos](/docs/apis/synthetics-rest-api/monitor-examples/payload-attributes-synthetics-rest-api#api-attributes) serán un objeto JSON en el siguiente formato:

    ```
    {
      "key": string,
      "description": string,
      "createdAt": date,​
      "lastUpdated": date
    }
    ```

    Una clave no válida devolverá `404 Not Found: The specified key doesn't exist`.
  </Collapser>

  <Collapser
    id="update-secure-credential"
    title="Actualizar una credencial segura existente"
  >
    Para actualizar una credencial existente en New Relic, envíe una solicitud PUT a `https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/`$KEY.

    ```
    curl -v \
         -X PUT -H "Api-Key:<a href='/docs/apis/synthetics-rest-api/monitor-examples/manage-synthetics-monitors-rest-api#use-api'>$API_KEY</a>" \
         -H 'Content-Type: application/json' https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/$KEY \
         -d  '{ "key": "MYKEY", "value": "my value", "description": "Description of MYKEY" }'
    ```

    Una clave no válida devolverá `404 Not Found: The specified key doesn't exist`.
  </Collapser>

  <Collapser
    id="delete-secure-credential"
    title="Eliminar una credencial segura existente"
  >
    Para eliminar una credencial existente en New Relic, envíe una solicitud DELETE a `https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/`$KEY.

    ```
    curl -v \
         -H "Api-Key:<a href='/docs/apis/synthetics-rest-api/monitor-examples/manage-synthetics-monitors-rest-api#use-api'>$API_KEY</a>" \
         -X DELETE https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/$KEY
    ```

    Tenga en cuenta que si la clave especificada no existe, no se producirá ningún error.
  </Collapser>
</CollapserGroup>
