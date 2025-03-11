---
title: Escribir pruebas de API Sintético
tags:
  - Synthetics
  - Synthetic monitoring
  - Scripting monitors
metaDescription: Use API test scripts to ensure your API endpoint is functioning correctly.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Este documento está dirigido al tiempo de ejecución de API con script de Node.js 16.10 y versiones posteriores. [Detalles para los tiempos de ejecución de Node.js 10 y anteriores basados en `http-request`](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests-legacy)
</Callout>

El monitor de API con secuencia de comandos verifica los extremos de API para asegurarse de que estén funcionando correctamente. Para crear un monitor API con secuencia de comandos, vaya a <DNT>**[one.newrelic.com > Synthetic monitoring > Create a monitor](https://one.newrelic.com/synthetics-nerdlets/monitor-create)**</DNT> y luego seleccione el icono <DNT>**Endpoint availability**</DNT> .

<Callout variant="tip">
  Para ver y compartir otros ejemplos de pruebas de API, visite la sección [de scripts de Sintético](https://discuss.newrelic.com/tags/c/full-stack-observability/synthetic/81/script) en el Foro de soporte o la [biblioteca de inicios rápidos de Synthetic Monitoring](https://newrelic.github.io/quickstarts-synthetics-library/#/).
</Callout>

## Utilice el módulo API obtenido [#overview]

Las pruebas de API funcionan con el [módulo got](https://github.com/sindresorhus/got), que está disponible a través del objeto `$http` . El objeto `$http` proporciona una experiencia personalizada similar a la `request`con `got`, lo que le brinda a su monitor compatibilidad con versiones anteriores para casos de uso básicos. La experiencia similar a `request`proporcionada por el objeto `$http` también se devolverá para cualquier cliente que intente usar `request` directamente en Node.js 16 y tiempos de ejecución de API con script más recientes.

Se proporcionarán detalles sobre el tiempo de los resultados siempre que utilice el objeto `$http` . Para casos de uso de API con secuencias de comandos que no están cubiertos por el objeto `$http` , puede utilizar el objeto `$har` para [informar detalles de tiempo personalizados](/docs/synthetics/synthetic-monitoring/scripting-monitors/custom-timing-details/).

<Callout variant="important">
  Después de un tiempo de ejecución máximo de tres minutos, New Relic detiene manualmente el script.
</Callout>

<img
  title="syntheticApiTestScript"
  alt="syntheticApiTestScript"
  src="/images/synthetic_screenshot-crop_api-test-script.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > Synthetic monitoring > Create monitor](https://one.newrelic.com/synthetics-nerdlets/monitor-create)**</DNT>: El editor script sugiere funciones, selectores y otros elementos para simplificar [los comandos del script (disponibles en GitHub)](https://github.com/request/request).
</figcaption>

## Configurar opciones de solicitud [#request-options]

Para iniciar su script:

* Declare una variable (como `options`) para almacenar su [objeto de opciones obtenidas](https://github.com/sindresorhus/got/blob/main/documentation/2-options.md).
* Defina opciones de solicitud como el extremo de la URL y encabezados personalizados.

<Callout variant="tip">
  Para obtener una lista completa de las opciones admitidas, consulte [las opciones obtenidas](https://github.com/sindresorhus/got/blob/main/documentation/2-options.md) en la documentación `got` en GitHub.
</Callout>

A continuación se muestra un ejemplo de metadatos opcionales en el objeto de opciones:

<CollapserGroup>
  <Collapser
    id="metadata-1"
    title="Usar metadatos opcionales"
  >
    ```
    //Declare optional metadata
    var options = {
            //Specify the endpoint URL
            url: 'https://api-endpoint.example.com',
            //Specify optional headers
            headers: {
                    'Endpoint-Key': 'uqNTC57Phe72pnnB8JuJmwAr7b09nKSKSz',
                    'Additional-Header': 'Additional-Header-Data'
            }
    };
    ```
  </Collapser>
</CollapserGroup>

## Enviar una solicitud GET [#get]

Para realizar una solicitud GET, utilice el método [`$http.get`](https://github.com/request/request#requestget) para enviar su solicitud. Defina [las opciones de su solicitud](#request-options), realice su solicitud usando `$http.get` y luego [valide](#validating) la respuesta para asegurarse de que su extremo devuelva los resultados correctos.

## Enviar una solicitud POST [#post]

Para realizar una solicitud POST, utilice el método [`$http.post`](https://github.com/request/request#requestpost) para enviar su solicitud. Defina [las opciones de su solicitud](#request-options), realice su solicitud usando `$http.post` y luego [valide](#validating) la respuesta para asegurarse de que su extremo devuelva los resultados correctos.

<CollapserGroup>
  <Collapser
    id="get-nerdgraph-example"
    title="Ejemplo de NerdGraph"
  >
    Este ejemplo consulta nuestra [API NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph):

    ```
    // Define your authentication credentials
    const myAccountId = '{YOUR_ACCOUNT_ID}';
    const myAPIKey = '{YOUR_API_KEY}';

    const options = {
      // Define endpoint URI, https://api.eu.newrelic.com/graphql for EU accounts
      uri: 'https://api.newrelic.com/graphql',
      headers: {
        'API-key': myAPIKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query getNrqlResults($accountId: Int!, $nrql: Nrql!) {
            actor {
              account(id: $accountId) {
                nrql(query: $nrql) {
                  results
                }
              }
            }
          }
        `,
        variables: {
          accountId: Number(myAccountId),
          nrql: 'SELECT average(duration) FROM Transaction',
        },
      }),
    };

    // Define expected results using callback function
    function callback(err, response, body) {
      // Log JSON results from endpoint to Synthetics console
      console.log(body);
      console.log('Script execution completed');
    }

    // Make POST request, passing in options and callback
    $http.post(options, callback);
    ```
  </Collapser>

  <Collapser
    id="post-insights-example"
    title="Ejemplo de publicación de API de evento"
  >
    Este ejemplo envía un evento personalizado que contiene enteros estáticos a la [API de eventos](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events):

    ```
    //Define your authentication credentials.
    var myAccountID = '{YOUR_ACCOUNT_ID}';
    var myAPIKey = '{YOUR_API_KEY}';
    //Import the <a href="https://nodejs.org/docs/latest/api/assert.html">'assert' module</a> to validate results.
    var assert = require('assert');

    var options = {
        //Define endpoint URL.
        url: "https://insights-collector.newrelic.com/v1/accounts/"+myAccountID+"/events",
        //Define body of POST request.
        body: '[{"eventType":"SyntheticsEvent","integer1":1000,"integer2":2000}]',
        //Define New Relic API key and expected data type.
        headers: {
            'Api-Key': myAPIKey,
            'Content-Type': 'application/json'
            }
    };

    //Define expected results using callback function.
    function callback(error, response, body) {
        //Log status code to Synthetics console.
        console.log(response.statusCode + " status code")
        //Verify endpoint returns 200 (OK) response code.
        assert.ok(response.statusCode == 200, 'Expected 200 OK response');
        //Verify that `body` contains element named `success` with a value of `true`.
        assert.ok(body.success == true, 'Expected True results in Response Body, result was ' + body.success);
        //Log end of script.
        console.log("End reached");
    }

    //Make POST request, passing in options and callback.
    $http.post(options, callback);
    ```
  </Collapser>
</CollapserGroup>

## Validar resultados [#validating]

Para validar sus resultados, importe el módulo `assert` para definir su caso de prueba. Llame a un método `assert` para validar la respuesta de su extremo. Si alguna de las funciones `assert` falla, todo el monitor se considerará una verificación fallida. Esto puede activar [una notificación de alerta](/docs/synthetics/new-relic-synthetics/using-monitors/alerting-synthetics#alerts) y afectar su métrica.

<Callout variant="important">
  Monitoreo sintético no permite excepciones lanzadas. Las excepciones lanzadas provocan un error en el script. Utilice el módulo `assert` para validar sus resultados y utilice `console.log()` para [log los resultados en la consola de Sintético](/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers#logging).
</Callout>

<CollapserGroup>
  <Collapser
    id="validation-insights-example"
    title="Ejemplo de validación de API de evento"
  >
    Este ejemplo realiza una PUBLICACIÓN en la API de eventos y luego valida que la respuesta sea `{"success":true}`:

    ```
    //Define your authentication credentials.
    var myAccountID = '{YOUR_ACCOUNT_ID}';
    var myAPIKey = '{YOUR_API_KEY}';
    //Import the `assert` module to validate results.
    var assert = require('assert');

    var options = {
        //Define endpoint URL.
        url: "https://insights-collector.newrelic.com/v1/accounts/"+myAccountID+"/events",
        //Define body of POST request.
        body: '[{"eventType":"SyntheticsEvent","integer1":1000,"integer2":2000}]',
        //Define New Relic API key and expected data type.
        headers: {
            'Api-Key': myAPIKey,
            'Content-Type': 'application/json'
            }
    };

    $http.post(options, function(error, response, body) {
        //Log status code to Synthetics console. The status code is logged before the `assert` function, 
        //because a failed assert function ends the script.
        console.log(response.statusCode + " status code")
        //Call `assert` method, expecting a `200` response code.
        //If assertion fails, log `Expected 200 OK response` as error message to Synthetics console.
        assert.ok(response.statusCode == 200, 'Expected 200 OK response');  
        //Call `assert` method, expecting body to return `{"success":true}`.
        //If assertion fails, log `Expected True results in Response Body,` plus results as error message to Synthetics console. 
        assert.ok(body.success == true, 'Expected True results in Response Body, result was ' + body.success);
    });
    ```
  </Collapser>
</CollapserGroup>

Si aún no lo ha hecho, cree su cuenta New Relic gratuita a continuación para comenzar a monitorear sus datos hoy.

<InlineSignup/>
