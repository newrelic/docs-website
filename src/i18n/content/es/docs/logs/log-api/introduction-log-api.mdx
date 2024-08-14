---
title: Envíe sus datos de logging con nuestra API log
tags:
  - Logs
  - Log management
  - Log API
metaDescription: Use our Log API so you can send your monitored log data directly to New Relic via HTTP input.
freshnessValidatedDate: never
translationType: machine
---

Si nuestras [soluciones de reenvío de logs](/docs/logs/forward-logs/) no satisfacen sus necesidades, puede utilizar nuestra API log para enviar datos log directamente a New Relic a través de un extremo HTTP.

## Extremo HTTP [#endpoint]

Utilice el extremo que corresponda a su cuenta New Relic:

Extremo de Estados Unidos (EE.UU.):

```
https://log-api.newrelic.com/log/v1
```

Extremo [de la Unión Europea](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center) (UE):

```
https://log-api.eu.newrelic.com/log/v1
```

Extremo FedRAMP:

```
https://gov-log-api.newrelic.com/log/v1
```

## Configuración HTTP [#setup]

Para enviar datos log a su cuenta New Relic a través de la API log :

1. Consigue tu <InlinePopover type="licenseKey"/>.

2. Revise los [límites y caracteres restringidos](#limits) para su carga útil JSON.

3. Genere el mensaje JSON utilizando los [encabezados](#json-headers) y campos [de cuerpo](#json-body) requeridos.

4. Asegúrese de que su `Api-Key` o `License-Key` esté incluido en sus [encabezados](#auth-headers) o [parámetro de consulta](#query-parameters). Consulte los [ejemplos de log JSON](#log-attribute-examples).

5. Envíe su mensaje JSON al extremo HTTP apropiado para su cuenta New Relic en una solicitud `POST` .

   * A NOSOTROS: `https://log-api.newrelic.com/log/v1`
   * UE: `https://log-api.eu.newrelic.com/log/v1`
   * FedRAMP: `https://gov-log-api.newrelic.com/log/v1`

6. Genere algo de tráfico y espere unos minutos, luego [verifique los datos de su cuenta](#what-next) .

Si no aparecen datos después de habilitar nuestras capacidades <InlinePopover type="logs"/>, siga nuestros [procedimientos de resolución de problemas](/docs/logs/log-management/troubleshooting/no-log-data-appears-ui/).

## Encabezados HTTP [#json-headers]

Al crear sus encabezados HTTP, utilice estas pautas:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Encabezamiento
      </th>

      <th>
        Valores admitidos
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Content-Type`

        Requerido
      </td>

      <td>
        * `application/json`
        * `json`
        * `application/gzip`
        * `gzip`
      </td>
    </tr>
  </tbody>
</table>

Se acepta el formato JSON comprimido con Gzip. Si envía JSON comprimido, incluya los encabezados `Content-Type: application/json` y `Content-Encoding: gzip` .

## Autenticación [#authentication]

Su <InlinePopover type="licenseKey"/>sirve para autenticar su solicitud en la API log y determina la cuenta de New Relic donde se escribirán los mensajes de log enviados. Debe pasarse como un encabezado HTTP o un parámetro de cadena de consulta.

### Opción 1: autenticar mediante el encabezado HTTP [#auth-header]

Pase su clave de licencia agregando un encabezado HTTP personalizado como se describe a continuación:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Encabezamiento
      </th>

      <th>
        Valores admitidos
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Api-Key`
      </td>

      <td>
        Una New Relic <InlinePopover type="licenseKey"/>. También puede [enviar esto a través del parámetro de consulta](#query-parameters).
      </td>
    </tr>
  </tbody>
</table>

### Opción 2: autenticar mediante el parámetro de cadena de consulta (autenticación sin encabezado) [#query-parameters]

La clave de licencia también se puede pasar como parámetro de cadena de consulta en la URL. Esto resulta útil al enviar logs desde fuentes basadas en la nube que no permiten encabezados de solicitud HTTP personalizados.

Ejemplo: `https://LOG_API_ENDPOINT/log/v1?Api-Key=YOUR_API_KEY_HERE`

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Parámetro de consulta
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Api-Key`
      </td>

      <td>
        Tu <InlinePopover type="licenseKey"/>. También puedes [enviar esto a través del encabezado HTTP](#auth-header).
      </td>
    </tr>
  </tbody>
</table>

## Cuerpo JSON [#json-content]

Puedes enviar tu mensaje JSON utilizando un conjunto de atributos simplificado o detallado:

<CollapserGroup>
  <Collapser
    id="simple-json"
    title="Mensaje de cuerpo JSON simplificado"
  >
    Cuando utilice el formato simplificado para crear su mensaje JSON, envíe un único objeto JSON con lo siguiente:

    <table>
      <thead>
        <tr>
          <th>
            Campo
          </th>

          <th>
            Tipo de valor
          </th>

          <th>
            Formato
          </th>

          <th>
            Requerido
          </th>

          <th>
            Notas
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `"timestamp"`
          </td>

          <td>
            Entero, cadena
          </td>

          <td>
            Milisegundos o segundos desde la época (cuando se configura como un número entero) o timestamp con formato ISO8601 (cuando se configura como una cadena)
          </td>

          <td>
            No
          </td>

          <td>
            Si este campo no está presente o se especifica incorrectamente, el mensaje tendrá una marca de tiempo utilizando el tiempo de ingesta.
          </td>
        </tr>

        <tr>
          <td>
            `"message"`
          </td>

          <td>
            (cualquiera, pero se recomienda String. Consulte la [lista de tipos de atributos admitidos](#supported-types))
          </td>

          <td>
            cualquier
          </td>

          <td>
            No
          </td>

          <td>
            Este es el campo <DNT>**main**</DNT> mensaje de log que se busca de forma predeterminada
          </td>
        </tr>

        <tr>
          <td>
            `"logtype"`
          </td>

          <td>
            Cadena
          </td>

          <td>
            cualquier cadena
          </td>

          <td>
            No
          </td>

          <td>
            Campo principal para identificar logs y reglas de análisis coincidentes
          </td>
        </tr>

        <tr>
          <td>
            Otros campos
          </td>

          <td>
            (cualquiera: consulte la [lista de tipos de atributos admitidos](#supported-types))
          </td>

          <td>
            cualquier
          </td>

          <td>
            No
          </td>

          <td>
            Estos se convertirán en atributo del mensaje de log.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="detailed-json"
    title="Mensaje de cuerpo JSON detallado"
  >
    Cuando utilice el formato detallado para crear su cuerpo, debe ser un <DNT>**JSON array**</DNT> que contenga uno o más objetos JSON, cada uno de los cuales con el siguiente formato:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Campo
          </th>

          <th>
            Tipo de valor
          </th>

          <th>
            Formato
          </th>

          <th>
            Requerido
          </th>

          <th>
            Notas
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `"common"`
          </td>

          <td>
            Objeto
          </td>

          <td>
            Ver [común](#json-common).
          </td>

          <td>
            No
          </td>

          <td>
            Cualquier atributo que sea común a todos los mensajes de log.
          </td>
        </tr>

        <tr>
          <td>
            `"logs"`
          </td>

          <td>
            Matriz
          </td>

          <td>
            Ver [log](#json-logs).
          </td>

          <td>
            Sí
          </td>

          <td>
            Matriz con las entradas log
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Tipos de atributos soportados [#supported-types]

El atributo puede ser de cualquiera de los siguientes tipos:

<table>
  <thead>
    <tr>
      <th>
        Escriba la solicitud JSON
      </th>

      <th>
        Tipo almacenado en la base de datos de New Relic
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `boolean`
      </td>

      <td>
        `boolean`
      </td>
    </tr>

    <tr>
      <td>
        `integer`
      </td>

      <td>
        `integer`
      </td>
    </tr>

    <tr>
      <td>
        `long`
      </td>

      <td>
        `long`
      </td>
    </tr>

    <tr>
      <td>
        `float`
      </td>

      <td>
        `float`
      </td>
    </tr>

    <tr>
      <td>
        `double`
      </td>

      <td>
        `double`
      </td>
    </tr>

    <tr>
      <td>
        `string`
      </td>

      <td>
        `string` (Tenga en cuenta que si un valor de cadena es JSON encadenado, se analizará y sus campos se extraerán como variables. Ver [análisis de atributos de mensajes JSON](#message-attribute-parsin))
      </td>
    </tr>

    <tr>
      <td>
        Matriz
      </td>

      <td>
        (sin soporte)
      </td>
    </tr>
  </tbody>
</table>

## Límites y personajes restringidos [#limits]

<Callout variant="caution">
  Evite llamar a nuestra API desde el código de una aplicación orientada al cliente. Esto puede causar problemas de rendimiento o bloquear su aplicación si el tiempo de respuesta es lento. Si necesita hacerlo de esta manera, llame a nuestra API de forma asincrónica para evitar estos problemas de rendimiento.
</Callout>

Restricciones sobre el log enviado a la API log :

* Tamaño total de la carga útil:

  <DNT>
    **1MB(10^6 bytes) maximum per POST**
  </DNT>

  . Recomendamos encarecidamente utilizar compresión.

* La carga útil debe estar codificada como

  <DNT>
    **UTF-8**
  </DNT>

  .

* Número de atributos por evento: 255 máximo.

* Longitud del nombre del atributo: 255 caracteres.

* Longitud del valor del atributo: los primeros 4094 caracteres se almacenan en NRDB como un campo de evento `Log` con el mismo nombre, como `message`. Si el valor de la cadena supera los 4094 caracteres, almacenamos la cadena larga como un [blob](/docs/logs/ui-data/long-logs-blobs).

Algunos atributos específicos tienen restricciones adicionales:

* `accountId`: Este es un nombre de atributo reservado. Si está incluido, se eliminará durante la ingesta.
* `appId`: Debe ser un entero. Cuando se utiliza un tipo de datos no entero, los datos se ingerirán pero no se podrán consultar.
* `entity.guid`, `entity.name` y `entity.type`: estos atributos se utilizan internamente para identificar la entidad. Cualquier valor enviado con estas claves en la sección de atributos de un punto de datos métrico puede causar un comportamiento indefinido, como la falta de entidad en la UI o la telemetría que no se asocia con la entidad esperada. Para obtener más información, consulte [síntesis de entidad](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/#entity-synthesis).
* `eventType`: Este es un nombre de atributo reservado. Si está incluido, se eliminará durante la ingesta.
* `timestamp`: Debe ser una timestamp de época Unix (ya sea en segundos o en milisegundos) o una timestamp con formato ISO8601.

<Callout variant="important">
  La carga con marca de tiempo anterior a 48 horas puede eliminarse.
</Callout>

Límites de velocidad en el log enviado a la API log :

* Tasa máxima de solicitudes HTTP enviadas a la API log : 300.000 solicitudes por minuto
* Tasa máxima de bytes JSON log sin comprimir enviados a la API log : 10 GB por minuto

### Compromiso de límite de tarifa

Exceder los límites de velocidad afecta el comportamiento de la API log . Siga estas instrucciones si esto sucede.

<CollapserGroup>
  <Collapser
    id="http-requests"
    title="Solicitudes HTTP por minuto"
  >
    Cuando se excede el límite máximo de tasa de solicitudes para una cuenta, la API New Relic Logs devuelve una respuesta `429` durante el resto del minuto. Esta respuesta incluye un encabezado `Retry-After` que indica cuánto tiempo esperar en segundos antes de volver a enviar o enviar datos nuevos.

    Para resolver este problema, reduzca la cantidad de puntos de datos que envía o solicite un cambio en el límite de velocidad. Los cambios de suscripción posteriores no afectan los límites de tarifas modificados. Si un cambio de cuenta afecta su límite de tarifa, debe notificarnos para ajustar su límite de tarifa.

    Para solicitar cambios en el límite de tarifas, comuníquese con su representante de cuenta de New Relic o visite nuestro [portal de soporte](http://support.newrelic.com).
  </Collapser>

  <Collapser
    id="json-bytes"
    title="JSON bytes por minuto"
  >
    Cuando se excede el límite máximo de bytes JSON log para una cuenta, la API New Relic Logs devuelve una respuesta `429` durante el resto del minuto. Esta respuesta incluye un encabezado `Retry-After` que indica cuánto tiempo esperar en segundos antes de volver a enviar o enviar datos nuevos.

    Para resolver este problema, intente reducir la cantidad de datos log que envía o distribuirlos durante un período de tiempo mayor.

    Para solicitar cambios en el límite de tarifas, comuníquese con su representante de cuenta de New Relic o visite nuestro [portal de soporte](http://support.newrelic.com).
  </Collapser>
</CollapserGroup>

### Formato de carga útil log [#payload-format]

Aceptamos cualquier carga útil JSON válida. La carga útil debe codificarse como <DNT>**UTF-8**</DNT>.

## Atributo de mensaje JSON [#attributes]

<CollapserGroup>
  <Collapser
    id="json-common"
    title="Atributo de bloque común"
  >
    Este es un bloque que contiene un atributo que será común a todas las entradas log en [`logs`](#json-logs):

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Campo
          </th>

          <th>
            Tipo de valor
          </th>

          <th>
            Formato
          </th>

          <th>
            Requerido
          </th>

          <th>
            Notas
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `"timestamp"`
          </td>

          <td>
            Entero, cadena
          </td>

          <td>
            Milisegundos o segundos desde la época (cuando se configura como un número entero) o timestamp con formato ISO8601 (cuando se configura como una cadena)
          </td>

          <td>
            No
          </td>

          <td>
            Timestamp del mensaje es la hora de ingesta predeterminada
          </td>
        </tr>

        <tr>
          <td>
            `"attributes"`
          </td>

          <td>
            Objeto
          </td>

          <td>
            JSON
          </td>

          <td>
            No
          </td>

          <td>
            Este subobjeto contiene todos los demás atributos del mensaje.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="json-logs"
    title="Atributo de bloque de log"
  >
    Esta es una matriz que contiene entradas log con el siguiente formato:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Campo
          </th>

          <th>
            Tipo de valor
          </th>

          <th>
            Formato
          </th>

          <th>
            Requerido
          </th>

          <th>
            Notas
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `"timestamp"`
          </td>

          <td>
            Entero, cadena
          </td>

          <td>
            Milisegundos o segundos desde la época (cuando se configura como un número entero) o timestamp con formato ISO8601 (cuando se configura como una cadena)
          </td>

          <td>
            No
          </td>

          <td>
            Timestamp del mensaje es la hora de ingesta predeterminada
          </td>
        </tr>

        <tr>
          <td>
            `"attributes"`
          </td>

          <td>
            Objeto
          </td>

          <td>
            JSON
          </td>

          <td>
            No
          </td>

          <td>
            Este subobjeto contiene todos los demás atributos del mensaje.
          </td>
        </tr>

        <tr>
          <td>
            `"message"`
          </td>

          <td>
            (cualquiera, pero se recomienda String. Consulte la [lista de tipos de atributos admitidos](#supported-types))
          </td>

          <td>
            (cualquier)
          </td>

          <td>
            Sí
          </td>

          <td>
            Este es el campo principal de mensajes de log que se busca de forma predeterminada.
          </td>
        </tr>

        <tr>
          <td>
            `"log"`
          </td>

          <td>
            Cadena
          </td>

          <td>
            (cualquier cadena)
          </td>

          <td>
            No
          </td>

          <td>
            Reescribiremos esta cadena como el campo `message` en la ingesta.
          </td>
        </tr>

        <tr>
          <td>
            `"LOG"`
          </td>

          <td>
            Cadena
          </td>

          <td>
            (cualquier cadena)
          </td>

          <td>
            No
          </td>

          <td>
            Reescribiremos esta cadena como el campo `message` en la ingesta.
          </td>
        </tr>

        <tr>
          <td>
            `"MESSAGE"`
          </td>

          <td>
            Cadena
          </td>

          <td>
            (cualquier cadena)
          </td>

          <td>
            No
          </td>

          <td>
            Reescribiremos esta cadena como el campo `message` en la ingesta.
          </td>
        </tr>

        <tr>
          <td>
            `"msg"`
          </td>

          <td>
            Cadena
          </td>

          <td>
            (cualquier cadena)
          </td>

          <td>
            No
          </td>

          <td>
            Reescribiremos esta cadena como el campo `message` en la ingesta.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Análisis de atributos de mensajes JSON [#message-attribute-parsin]

Nuestras capacidades de administración de logs analizarán cualquier atributo `message` como JSON. El atributo JSON resultante en el mensaje analizado se agregará al evento. Si el atributo `message` no es JSON, se deja como está.

A continuación se muestra un atributo `message` de ejemplo:

```json
{
    "timestamp": 1562767499238,
    "message": "{\"service-name\": \"login-service\", \"user\": {\"id\": 123, \"name\": \"alice\"}}"
}
```

Esto será tratado como:

```json
{
  "timestamp": 1562767499238,
  "service-name": "login-service",
  "user": {
    "id": 123,
    "name": "alice"
  }
}
```

## Log ejemplos JSON [#log-attribute-examples]

El atributo puede ser tipos JSON escalares como cadena y número. También pueden ser objetos compuestos (o [anidados](https://www.digitalocean.com/community/tutorials/an-introduction-to-json#working-with-complex-types-in-json)). El atributo compuesto tendrá su atributo asociado almacenado con nombres aplanados.

Por ejemplo, aquí hay un atributo `user` compuesto en los atributos de una entrada de log :

```json
"attributes": {
    "action": "login",
    "user": {
        "id": 123,
        "name": "alice"
    }
}
```

Esto dará como resultado que el siguiente atributo se almacene con el log de evento:

<table>
  <thead>
    <tr>
      <th>
        Atributo
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `"action"`
      </td>

      <td>
        `"login"`
      </td>
    </tr>

    <tr>
      <td>
        `"user.id"`
      </td>

      <td>
        `123`
      </td>
    </tr>

    <tr>
      <td>
        `"user.name"`
      </td>

      <td>
        `"alice"`
      </td>
    </tr>
  </tbody>
</table>

### Ejemplo de mensaje POST log [#log-attribute-example]

Ejemplo de mensaje log `POST`:

```bash
POST /log/v1 HTTP/1.1
Host: log-api.newrelic.com
Content-Type: application/json
Api-Key: <YOUR_LICENSE_KEY>
Accept: */*
Content-Length: 319
[{
   "common": {
     "attributes": {
       "logtype": "accesslogs",
       "service": "login-service",
       "hostname": "login.example.com"
     }
   },
   "logs": [{
       "timestamp": <TIMESTAMP_IN_UNIX_EPOCH_OR_IS08601_FORMAT>,
       "message": "User 'xyz' logged in"
     },{
       "timestamp": <TIMESTAMP_IN_UNIX_EPOCH_OR_IS08601_FORMAT>,
       "message": "User 'xyz' logged out",
       "attributes": {
         "auditId": 123
       }
     }]
}]
```

Este mensaje `POST` daría como resultado que el siguiente mensaje de log se almacene en New Relic:

<table>
  <thead>
    <tr>
      <th>
        Atributo
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `"logtype"`
      </td>

      <td>
        `"accesslogs"`
      </td>
    </tr>

    <tr>
      <td>
        `"service"`
      </td>

      <td>
        `"login-service"`
      </td>
    </tr>

    <tr>
      <td>
        `"hostname"`
      </td>

      <td>
        `"login.example.com"`
      </td>
    </tr>
  </tbody>
</table>

A continuación se muestra un ejemplo de atributo de bloque de log almacenado:

<table>
  <thead>
    <tr>
      <th>
        Atributo
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `"timestamp"`
      </td>

      <td>
        `1550086450124`
      </td>
    </tr>

    <tr>
      <td>
        `"message"`
      </td>

      <td>
        `"User 'xyz' logged out"`
      </td>
    </tr>

    <tr>
      <td>
        `"auditId"`
      </td>

      <td>
        `123`
      </td>
    </tr>
  </tbody>
</table>

### Ejemplo de solicitud JSON POST [#example-post]

A continuación se muestra un ejemplo de una solicitud JSON POST:

```bash
POST /log/v1 HTTP/1.1
Host: log-api.newrelic.com
Content-Type: application/json
Api-Key: <YOUR_LICENSE_KEY>
Accept: */*
Content-Length: 133
{
    "timestamp": <TIMESTAMP_IN_UNIX_EPOCH_OR_IS08601_FORMAT>,
    "message": "User 'xyz' logged in",
    "logtype": "accesslogs",
    "service": "login-service",
    "hostname": "login.example.com"
}
```

## ¿Que sigue? [#what-next]

Explore [los datos de logging en su plataforma](/docs/logs/ui-data/use-logs-ui/).

* Obtenga una visibilidad más profunda de los datos de rendimiento de su aplicación y de su plataforma reenviando su log con nuestras capacidades [de logs en el contexto](/docs/logs/logs-context/configure-logs-context-apm-agents/) .
* Configurar [alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [Consulta tus datos](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) y [crea un panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).
