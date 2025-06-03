---
title: Envía evento personalizado con nuestra API de eventos
tags:
  - Ingest and manage data
  - Ingest APIs
metaDescription: 'Intro to New Relic''s Event API, which lets you send custom event data to your New Relic account.'
freshnessValidatedDate: never
translationType: machine
---

La API de eventos le permite enviar [datos de eventos](/docs/using-new-relic/data/understand-data/new-relic-data-types#event-data) personalizados a New Relic. Estos eventos pueden luego consultarse y trazarse.

¿Quieres probar nuestra API de eventos? ¡ [Crea una cuenta New Relic](https://newrelic.com/signup) gratis! No se requiere tarjeta de crédito.

Contenido relacionado:

* Conozca [todas las opciones para reportar eventos personalizados](/docs/insights/insights-data-sources/custom-data/report-custom-event-data).
* Para saber cómo agregar un atributo a un evento existente, consulte [Agregar atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes).

## ¿Por qué utilizar la API de eventos? [#overview]

Nuestra API de eventos es una opción para informar datos personalizados. Otra opción es informar el atributo personalizado. Para obtener una descripción general de por qué usaría la API de eventos frente a otras opciones, consulte [evento personalizado y atributo](/docs/data-apis/custom-data/custom-events/report-custom-event-data#using-custom-events).

## Requisitos [#requirements]

Para conocer los límites de la API de eventos y el atributo restringido, consulte [Límites](#limits).

Asegúrese de que la conectividad saliente en el puerto TCP 443 esté permitida en el [rango CIDR](/docs/using-new-relic/cross-product-functions/install-configure/networks/#infrastructure) que coincida con su [región](/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers). El método de configuración preferido es utilizar el nombre DNS `insights-collector.newrelic.com` o `insights-collector.eu01.nr-data.net`.

## Ejemplo de envío y consulta de un evento personalizado [#example-use-case]

A continuación se muestra un ejemplo de la API de eventos en acción:

<CollapserGroup>
  <Collapser
    id="ruby-example"
    title="Llamar a la API de eventos desde una aplicación Ruby"
  >
    El evento personalizado se puede insertar a través de las [API del agente](/docs/data-apis/custom-data/custom-events/report-custom-event-data#ways) o directamente a través de la API del evento. El siguiente ejemplo muestra cómo enviar un tipo de evento personalizado `CLIRun`, que rastrea cuándo una herramienta de línea de comando escrita en Ruby tiene la salida del proceso debido a una excepción.

    ```ruby
    # Hook into the runtime 'at_exit' event
    at_exit do
      # Name the custom event
      payload = { 'eventType' => 'CLIRun' }

      # Check to see if the process is exiting due to an error
      if $!.nil? || $!.is_a?(SystemExit) && $!.success?
        payload[:status] = 0
      else
        # Gather any known errors
        errors = ""
        (Thread.current[:errors] ||= []).each do |err|
          errors += "#{err}\n"
        end
        payload[:errors] = errors
      end

      # Send the errors to New Relic as a custom event
      insights_url = URI.parse("https://insights-collector.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/events")
      headers = { "Api-Key" => "YOUR_LICENSE_KEY", "content-type" => "application/json" }

      http = Net::HTTP.new(insights_url.host, insights_url.port)
      http.use_ssl = true
      request = Net::HTTP::Post.new(insights_url.request_uri, headers)
      request.body = payload.to_json

      puts "Sending run summary to New Relic: #{payload.to_json}"
      begin
        response = http.request(request)
        puts "Response from New Relic: #{response.body}"
      rescue Exception => e
        puts "There was an error posting to New Relic. Error: #{e.inspect}"
      end
    end
    ```

    Luego, podrías ejecutar una consulta NRQL para obtener más detalles sobre ese evento personalizado, como:

    ```sql
    SELECT count(*) FROM CLIRun FACET errors SINCE 1 week ago
    ```
  </Collapser>
</CollapserGroup>

## Cómo utilizar la API de eventos [#workflow]

La API de eventos es un extremo asíncrono. Esto le permite enviar un volumen muy grande de POSTS, de manera confiable, con una latencia de respuesta muy baja.

<Callout variant="tip">
  Si su organización aloja datos en el centro de datos de la UE, asegúrese de utilizar el [extremo de región de la UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center#endpoints) adecuado.
</Callout>

Para enviar un evento personalizado a una cuenta de New Relic:

1. Obtenga un

   <InlinePopover type="licenseKey"/>

   para la cuenta a la que desea informar datos.

2. Antes de crear un evento personalizado o atributo, revise nuestra lista de [términos reservados utilizados por NRQL](/docs/insights/insights-data-sources/custom-data/insights-custom-data-requirements-limits#reserved-words).

3. [Genere JSON](#instrument) para el evento instrumentando su aplicación, consultando una API o algún otro método.

4. [Envíe una carga útil JSON comprimida](#submit-event) (por ejemplo, `gzip` o `deflate`) al extremo HTTPS usando curl en una solicitud

   <DNT>
     **POST**
   </DNT>

   .

5. <DNT>
     **Recommendation:**
   </DNT>

   Configure [la condición de alerta NRQL](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries) para que le notifique cuando se produzcan [errores de análisis](#errors-parsing) .

La API de eventos [limita el tamaño, la velocidad y los caracteres](#limits) permitidos en un evento personalizado. Además, al igual que otros datos disponibles en NRQL, los eventos personalizados no se pueden actualizar ni eliminar después de su creación. Si tiene problemas con su evento personalizado, siga los [procedimientos de resolución de problemas](#verify) o cree un nuevo evento personalizado.

## Formatear el JSON [#instrument]

La API de eventos acepta formatos específicos para atributos incluidos en la carga útil. Sólo se permiten valores flotantes o de cadena.

<CollapserGroup>
  <Collapser
    id="json-guidelines"
    title="Directrices de formato JSON"
  >
    Al definir un atributo para su evento personalizado, siga estas pautas de formato JSON.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Atributo
          </th>

          <th>
            Directrices de formato JSON
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `eventType`
          </td>

          <td>
            <DNT>**Required:**</DNT> El nombre del evento.
          </td>
        </tr>

        <tr>
          <td>
            Valores flotantes y de cadena
          </td>

          <td>
            Formato de valor flotante: `"label":value`

            Formato de valor de cadena: `"label":"value"`
          </td>
        </tr>

        <tr>
          <td>
            Tipos de datos
          </td>

          <td>
            La API solo acepta pares de valores principales, no valores de mapa/objeto ni de matriz. Los tipos de datos admitidos por esta API son cadenas y números (enteros o flotantes). Para obtener más información, consulte [Requisitos de datos](/docs/insights/insights-data-sources/custom-data/insights-custom-data-requirements-limits).
          </td>
        </tr>

        <tr>
          <td>
            Dígitos en cadenas
          </td>

          <td>
            Por motivos relacionados con el rendimiento, no emitimos valores enviados a la API. Por ejemplo, tratamos `123` como un número y `"123"` como una cadena.

            La base de datos sólo almacenará números de hasta 64 bits. Cualquier número mayor a 64 bits será truncado.
          </td>
        </tr>

        <tr>
          <td>
            Fechas
          </td>

          <td>
            Para atributos que contienen información de fecha, use una timestamp Unix sin formato en el [formateador de datos](/docs/insights/use-insights-ui/manage-account-data/data-formatter-set-default-formats-numeric-values). Puede [definir el atributo de fecha](#timestamp) en segundos o en milisegundos, ambos relativos a la Unix epoch.
          </td>
        </tr>

        <tr>
          <td>
            Tiempo
          </td>

          <td>
            A menos que se especifique lo contrario, la timestamp de un evento enviado es la hora en que se envió a New Relic. Para especificar una hora diferente para el evento, utilice el [atributo`timestamp` ](#timestamp).
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="json-example"
    title="Ejemplo JSON"
  >
    A continuación se muestra un ejemplo de un conjunto de datos JSON típico para enviar con la API. Esta llamada envía dos eventos de tipo <DNT>**Purchase**</DNT> como una matriz JSON. Puede agregar varios eventos en una sola llamada HTTP utilizando una matriz JSON.

    ```json
    [
        {
            "eventType": "Purchase",
            "account": 3,
            "amount": 259.54
        },
        {
            "eventType": "Purchase",
            "account": 5,
            "amount": 12309,
            "product": "Item"
        }
    ]
    ```

    Al generar el JSON, asegúrese de que su atributo esté [formateado correctamente](/docs/insights/new-relic-insights/decorating-events/insights-custom-attributes).
  </Collapser>

  <Collapser
    id="limits"
    title="Límites y personajes restringidos"
  >
    Los siguientes límites de tamaño y velocidad se aplican al evento enviado a través de la API de eventos:

    * Tamaño total de la carga útil: <DNT>**1MB(10^6 bytes) maximum per POST**</DNT>. Recomendamos encarecidamente utilizar compresión.

    * La carga útil debe estar codificada como <DNT>**UTF-8**</DNT>.

    * Número máximo de atributos por evento: 255

    * Longitud máxima del nombre del atributo: 255 caracteres

    * Longitud máxima del valor del atributo: 4096 caracteres

    * Existen [límites de velocidad en la cantidad de solicitudes HTTP por minuto](#post-limit) enviadas a la API del evento.

      Algunos atributos tienen restricciones adicionales:

    * `accountId`: Este es un nombre de atributo reservado. Si está incluido, se eliminará durante la ingesta.

    * `entity.guid`, `entity.name` y `entity.type`: estos atributos se utilizan internamente para identificar la entidad. Cualquier valor enviado con estas claves en la sección de atributos de un punto de datos métrico puede causar un comportamiento indefinido, como la falta de entidad en la UI o la telemetría que no se asocia con la entidad esperada. Para obtener más información, consulte [síntesis de entidad](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/#entity-synthesis).

    * [`appId`](/docs/apis/rest-api-v2/requirements/find-product-id#apm): el valor debe ser un número entero. Si no es un número entero, el nombre y el valor del atributo se eliminarán durante la ingesta.

    * `eventType`: este atributo puede ser una combinación de caracteres alfanuméricos, `_` guiones bajos y `:` puntos.

    * `timestamp`: este atributo debe ser una timestamp de Unix epoch, definida en segundos o milisegundos.
  </Collapser>
</CollapserGroup>

## Enviar el evento personalizado [#submit-event]

Los datos enviados a la API de eventos utilizan un formato JSON comprimido en una solicitud POST HTTPS simple. Este ejemplo usa `gzip`, pero también puedes usar `deflate`.

<CollapserGroup>
  <Collapser
    id="numberone"
    title="Ejemplo de Linux/bash"
  >
    ```bash
    gzip -c example_events.json | curl -X POST -H "Content-Type: application/json" \
    -H "Api-Key: YOUR_LICENSE_KEY" -H "Content-Encoding: gzip" \
    https://insights-collector.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/events --data-binary @-
    ```
  </Collapser>

  <Collapser
    id="numbertwo"
    title="Ejemplo de Windows/PowerShell"
  >
    ```powershell
    $accountId = "YOUR_ACCOUNT_ID"
    $insertkey = "YOUR_LICENSE_KEY"
    # Replace with your custom event for the body
    $body = '[{"eventType": "powershell", "account": 4, "amount": 123, "fileLocation": "c:\\temp2", "zipped": "true" }]'

    $headers = @{}
    $headers.Add("Api-Key", "$insertkey")
    $headers.Add("Content-Encoding", "gzip")


    $encoding = [System.Text.Encoding]::UTF8
    $enc_data = $encoding.GetBytes($body)

    $output = [System.IO.MemoryStream]::new()
    $gzipStream = New-Object System.IO.Compression.GzipStream $output, ([IO.Compression.CompressionMode]::Compress)

    $gzipStream.Write($enc_data, 0, $enc_data.Length)
    $gzipStream.Close()
    $gzipBody = $output.ToArray()

    Invoke-WebRequest -Headers $headers -Method Post -Body $gzipBody  "https://insights-collector.newrelic.com/v1/accounts/$accountId/events"
    ```
  </Collapser>
</CollapserGroup>

<Callout variant="important">
  Utilice siempre compresión con cada carga útil. Esto le permite enviar más datos y ahorra recursos durante el análisis.
</Callout>

Antes de generar su solicitud HTTP, asegúrese de que esté [formateada correctamente](/docs/insights/new-relic-insights/decorating-events/insights-custom-attributes), incluyendo:

* El `Api-Key` contiene el

  <InlinePopover type="licenseKey"/>

  correcto.

* El `Content-Type` es `application/json`.

* La solicitud utiliza POST únicamente. La API no acepta PUT y solicitud GET.

La API admite [conexiones persistentes HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html). Esto es útil para gestionar el rendimiento del lado del cliente bajo cargas pesadas de eventos.

## Verificar o solucionar problemas de respuesta a la solicitud [#verify]

La API de eventos sigue un proceso de dos pasos para procesar solicitudes:

1. La API de eventos reconoce o rechaza sincrónicamente la solicitud según la validación de los encabezados y el tamaño de la carga útil.
2. La API de eventos analiza de forma asincrónica la carga útil después de que se proporciona una respuesta HTTP exitosa al cliente. Esto puede generar un error debido a datos faltantes o mal formados. Estos se clasifican como errores de envío o errores de análisis.

Todos los envíos exitosos reciben una respuesta `200` , independientemente de los errores de datos que puedan existir dentro de la carga útil. La respuesta incluye un `uuid`, que es un ID único creado para cada solicitud. El `uuid` también aparece en cualquier evento de error creado para la solicitud.

Otros problemas potenciales:

* Tiempo de espera de 10 segundos: la llamada API que exceda los 10 segundos expirará.
* Carga grande: una carga que supere los 100 KB puede ver aumentado el tiempo de respuesta.

<DNT>**Recommendation:**</DNT> Además de verificar si hay un mensaje de éxito, cree una consulta NRQL de sus datos para verificar que estén disponibles.

<CollapserGroup>
  <Collapser
    id="success"
    title="Código de respuesta exitosa"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>
            Mensaje de éxito
          </th>

          <th>
            Comentarios
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            200
          </td>

          <td>
            ```json
            {"success":true,"uuid":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"}
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="errors-submission"
    title="Errores de envío"
  >
    La carga con errores de envío se maneja y se devuelve al remitente a través de un código de respuesta HTTP.

    Para solucionar errores de envío de carga útil, consulte estos códigos de respuesta HTTP.

    <table>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>
            Errores de envío
          </th>

          <th>
            Resolución de problemas
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            400
          </td>

          <td>
            Longitud del contenido faltante o no válida: no se puede procesar la solicitud vacía.
          </td>
        </tr>

        <tr>
          <td>
            403
          </td>

          <td>
            Clave faltante o no válida: Clave de licencia no válida. Registre un <InlinePopover type="licenseKey"/>válido. Debe utilizar una clave del tipo `License` . Las claves `Browser`, `Mobile` o `User` no funcionarán.
          </td>
        </tr>

        <tr>
          <td>
            408
          </td>

          <td>
            Se agotó el tiempo de espera de la solicitud: la solicitud tardó demasiado en procesarse.
          </td>
        </tr>

        <tr>
          <td>
            413
          </td>

          <td>
            Contenido demasiado grande: la solicitud es demasiado grande para procesarla. Consulte los límites y caracteres restringidos para solucionar problemas.
          </td>
        </tr>

        <tr>
          <td>
            415
          </td>

          <td>
            Tipo de contenido no válido: debe ser aplicación/JSON. La API de eventos acepta cualquier tipo de contenido excepto multiparte/relacionado y asume que se puede analizar en JSON.
          </td>
        </tr>

        <tr>
          <td>
            429
          </td>

          <td>
            Demasiadas solicitudes debido a la limitación de tarifas.
          </td>
        </tr>

        <tr>
          <td>
            503
          </td>

          <td>
            Servicio no disponible temporalmente: reintentar solicitud
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="errors-parsing"
    title="Errores de análisis"
  >
    Se producen errores de análisis si:

    * Se envía un evento dentro de una carga útil, pero faltan datos o excede los límites máximos. New Relic eliminará el evento individual de la carga útil, generará un [evento`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)y procesará el resto.

    * La carga útil JSON incluye JSON con formato incorrecto o faltan datos requeridos.

      Carga con errores de análisis recibe una respuesta `200` para indicar un envío exitoso. Para ayudar a resolver errores de análisis, se crea un nuevo tipo de evento `NrIntegrationError` . Todos los errores de análisis se deben a la consulta NRQL. Para mensajes de error relacionados con eventos eliminados, New Relic incluirá la cantidad de eventos que se eliminaron como parte del mensaje.

      Para solucionar problemas de solicitudes con errores de análisis, consulte estos mensajes de error.

      <table>
        <thead>
          <tr>
            <th style={{ width: "300px" }}>
              Errores de análisis
            </th>

            <th>
              Resolución de problemas
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              X evento(s) rechazado porque el atributo `appId` no era un número entero
            </td>

            <td>
              Un atributo `appId` tiene un valor no entero, como un valor decimal o una cadena.
            </td>
          </tr>

          <tr>
            <td>
              X evento(s) rechazado(s) porque `eventType` no puede contener los siguientes caracteres: `[., \]`
            </td>

            <td>
              Un atributo `eventType` incluía un carácter no válido, como un punto o una barra invertida.
            </td>
          </tr>

          <tr>
            <td>
              X evento(s) rechazado porque falta el nombre del atributo
            </td>

            <td>
              Un nombre de atributo se estableció como nulo o como una cadena vacía.
            </td>
          </tr>

          <tr>
            <td>
              X evento(s) rechazado(s) porque el nombre del atributo excedió la longitud máxima
            </td>

            <td>
              Un nombre de atributo tiene más de 255 caracteres.
            </td>
          </tr>

          <tr>
            <td>
              X evento(s) rechazado porque el valor del atributo excedió la longitud máxima
            </td>

            <td>
              El valor de un atributo tenía más de 4096 caracteres.
            </td>
          </tr>

          <tr>
            <td>
              X evento(s) rechazado porque el evento excedió el número máximo de atributos
            </td>

            <td>
              Un evento tiene más de 255 atributos.
            </td>
          </tr>

          <tr>
            <td>
              X evento(s) rechazado porque falta atributo requerido `eventType`
            </td>

            <td>
              El atributo `eventType` es obligatorio para el evento personalizado.
            </td>
          </tr>

          <tr>
            <td>
              Error al analizar la carga útil JSON
            </td>

            <td>
              Se produjo un error al analizar la solicitud JSON debido a problemas de formato o datos dañados.
            </td>
          </tr>
        </tbody>
      </table>
  </Collapser>
</CollapserGroup>

## Consulta y alerta con NrIntegrationError [#nrIntegration]

El [evento`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)le permite consultar y configurar <InlinePopover type="alerts"/>sobre los datos personalizados que se envían a su cuenta de New Relic. <DNT>**Recommendation:**</DNT> Para recibir alertas de errores de análisis, [cree una condición de alerta NRQL](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries) para `NrIntegrationError`. Utilice esta consulta NRQL de ejemplo:

```sql
SELECT message FROM NrIntegrationError WHERE newRelicFeature = 'Event API' AND category = 'EventApiException'
```

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        NrIntegrationError atributo
      </th>

      <th>
        Resolución de problemas
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td id="timestamp">
        `timestamp`
      </td>

      <td>
        La timestamp en la que se recibió la solicitud. El atributo `timestamp` toma una timestamp Unix entera de 64 bits dentro de las últimas 24 horas. Puede definir la marca de tiempo en segundos o en milisegundos, ambos relativos a la Unix epoch.

        No utilice un decimal para la timestamp. Si se utiliza un decimal, el atributo utilizará de forma predeterminada la timestamp en la que se creó el evento personalizado.
      </td>
    </tr>

    <tr>
      <td>
        `newRelicFeature`
      </td>

      <td>
        El nombre de la característica que experimenta errores. Para todos los errores de análisis de eventos personalizados, este será `Event API`.
      </td>
    </tr>

    <tr>
      <td>
        `apiKeyPrefix`
      </td>

      <td>
        Los primeros seis caracteres del <InlinePopover type="licenseKey"/>utilizados para la solicitud que generó un error.
      </td>
    </tr>

    <tr>
      <td>
        `requestId`
      </td>

      <td>
        El `uuid` devuelto por la API para la solicitud que generó un error.
      </td>
    </tr>

    <tr>
      <td>
        `category`
      </td>

      <td>
        La categoría del error. Para evento personalizado, este es `EventApiException`.
      </td>
    </tr>

    <tr>
      <td>
        `message`
      </td>

      <td>
        Contenido del mensaje de error.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        El nombre del error. Para eventos personalizados, esto siempre es `EventValidationException`.
      </td>
    </tr>

    <tr>
      <td>
        `eventTypeSample`
      </td>

      <td>
        Uno de los tipos de evento que generó el error, cuando esté disponible.
      </td>
    </tr>
  </tbody>
</table>

## Encuentra tus datos [#find-data]

Para encontrar datos enviados a través de la API del evento (y de integración que utilizan esta API), puedes consultarlo. Por ejemplo, para consultar un evento personalizado usando [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql), ejecutaría:

```sql
SELECT * FROM YOUR_CUSTOM_EVENT
```

Para obtener más información sobre cómo realizar una consulta, consulte [datos de consulta](/docs/using-new-relic/data/understand-data/query-new-relic-data).

## Límite de solicitudes HTTP [#post-limit]

La API de eventos tiene un límite de velocidad de 100.000 solicitudes HTTP (POST) por minuto, por cuenta. (Tenga en cuenta que esto **no** es un límite en la cantidad de eventos por minuto; solo en la cantidad de POST por minuto).

Este límite ayuda a garantizar que los grandes picos de tráfico en las cuentas de nuestra plataforma multiinquilino no afecten negativamente el rendimiento del servicio para usted.

Si su uso de API excede los 100 000 POST en un período de 1 minuto, rechazaremos las solicitudes de API posteriores con un código de respuesta 429 durante el resto del período de 1 minuto. Al final del período de 1 minuto, el contador se restablecerá y permitirá que se reanude el tráfico.

Este límite pretende ser un umbral superior que no debería alcanzar en escenarios normales. Si tiene una gran cantidad de 429 respuestas, considere usar menos la API. Si espera un nivel de actividad superior a lo normal en un futuro próximo y desea prepararse para ello, [comuníquese con el soporte técnico](https://support.newrelic.com/).
