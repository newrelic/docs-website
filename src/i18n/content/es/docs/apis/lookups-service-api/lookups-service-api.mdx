---
title: API de búsquedas NRQL
tags:
  - APIs
  - Lookups Service REST API
  - NRQL Lookups API
  - lookup
metaDescription: Use the NRQL Lookups API to create and manage lookup tables.
freshnessValidatedDate: '2023-09-18T00:00:00.000Z'
translationType: machine
---

Utilice la API de búsquedas NRQL para crear y administrar [tablas de búsquedas](/docs/logs/ui-data/lookup-tables-ui/#overview).

## Antes de que empieces

La API de búsquedas NRQL es una API REST que le permite administrar la tabla de búsquedas mediante programación. Como otra opción también puedes [gestionar la tabla de búsquedas a través de nuestra UI](/docs/logs/ui-data/lookup-tables-ui/#lookup-ui).

## Extremo HTTP [#http-endpoints]

### URL base

Utilice la URL base que corresponda a su cuenta New Relic en su API de llamada.

Extremo de Estados Unidos (EE.UU.):

```
https://nrql-lookup.service.newrelic.com
```

Extremo [de la Unión Europea](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center) (UE):

```
https://nrql-lookup.service.eu.newrelic.com
```

### Extremo

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Método
      </th>

      <th>
        Extremo
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [`create`](#create-and-update)
      </td>

      <td>
        `POST /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        Sube una nueva tabla.
      </td>
    </tr>

    <tr>
      <td>
        [`update`](#create-and-update)
      </td>

      <td>
        `PUT /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        Reemplazar una tabla existente.
      </td>
    </tr>

    <tr>
      <td>
        [`read`](#read)
      </td>

      <td>
        `GET /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        Descargue una tabla que se cargó anteriormente.
      </td>
    </tr>

    <tr>
      <td>
        [`delete`](#delete)
      </td>

      <td>
        `DELETE /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        Eliminar la tabla dada.
      </td>
    </tr>

    <tr>
      <td>
        [`list`](#list)
      </td>

      <td>
        `GET /v1/accounts/YOUR_ACCOUNT_ID`
      </td>

      <td>
        Enumere las tablas actualizadas previamente para esta cuenta.
      </td>
    </tr>
  </tbody>
</table>

Las variables requeridas en los extremos de API de búsqueda NRQL anteriores se definen a continuación.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Variable
      </th>

      <th style={{ width: "200px" }}>
        Tipo
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `YOUR_ACCOUNT_ID`
      </td>

      <td>
        `number`
      </td>

      <td>
        La cuenta a la que pertenece la tabla.
      </td>
    </tr>

    <tr>
      <td>
        `TABLE_NAME`
      </td>

      <td>
        `string`
      </td>

      <td>
        Un nombre para la tabla almacenada. Los nombres de las mesas deben cumplir con los [estándares de tipo evento personalizado](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#general):

        * Longitud máxima: 255
        * Puede ser una combinación de caracteres alfanuméricos, guiones bajos y dos puntos.
      </td>
    </tr>
  </tbody>
</table>

## Autenticación

Su <InlinePopover type="userKey"/>sirve para autenticar su solicitud en la API de búsquedas NRQL y debe pasarse como un encabezado HTTP.

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
        Una New Relic <InlinePopover type="userKey"/>.
      </td>
    </tr>
  </tbody>
</table>

## Crear/actualizar una tabla [#create-and-update]

### Extremo HTTP [#create-and-update-http-endpoints]

#### Crear

`POST /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

Se utiliza para cargar una nueva tabla. La tabla no puede existir ya. Si es así, esta llamada generará una respuesta `400 Bad Request` .

#### Actualizar

`PUT /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

Se utiliza para reemplazar una tabla existente. Si la tabla no existe, esta llamada generará una respuesta `404 Not Found` .

#### Solicitar parámetro de consulta

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nombre
      </th>

      <th>
        Tipo
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        Indica si se debe incluir el valor de la tabla en la respuesta.
      </td>
    </tr>
  </tbody>
</table>

### Encabezados HTTP [#create-http-headers]

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
      </td>

      <td>
        * `multipart/form-data`
        * `application/json`
      </td>
    </tr>

    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### Cuerpo de solicitud [#create-request-body]

Los datos que envía en el cuerpo de su solicitud pueden ser `multipart/form-data` o `application/json`.

<CollapserGroup>
  <Collapser
    id="multipart-form-data-request"
    title="Solicitud con datos multiparte/formulario"
  >
    #### Campos admitidos

    Puede proporcionar los siguientes campos en sus solicitudes de creación y actualización al enviar contenido `multipart/form-data` :

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Campo
          </th>

          <th style={{ width: "200px" }}>
            Tipo de valor
          </th>

          <th>
            Requerido
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `table`
          </td>

          <td>
            archivo CSV
          </td>

          <td>
            Sí
          </td>

          <td>
            Parte de datos de formulario de varias partes que contiene el contenido CSV. Nuestra lógica de análisis de CSV se describe en detalle [aquí](/docs/logs/ui-data/lookup-tables-ui/#valuetypes).
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            `string`
          </td>

          <td>
            No
          </td>

          <td>
            Segunda parte de datos del formulario de varias partes que contiene una descripción de la tabla.
          </td>
        </tr>
      </tbody>
    </table>

    #### Ejemplo de carga

    ```
    --__X_BOUNDARY__
    Content-Disposition: form-data; name="table"; filename="sample.csv"
    Content-Type: text/csv

    id,name,intvalue,floatvalue,boolvalue
    '1,abc,27,2.7,true
    '2,def,2622,26.22,false
    '2a,"g,hi",1234,43.21,false
    --__X_BOUNDARY__--
    Content-Disposition: form-data; name="description"

    A description of the table
    --__X_BOUNDARY__--
    ```
  </Collapser>

  <Collapser
    id="application-json-request"
    title="Solicitar con aplicación/json"
  >
    #### Campos admitidos

    Puede proporcionar los siguientes campos en su creación y actualización al enviar contenido `application/json` :

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Campo
          </th>

          <th style={{ width: "200px" }}>
            Tipo de valor
          </th>

          <th>
            Requerido
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `table`
          </td>

          <td>
            `JSON`
          </td>

          <td>
            Sí
          </td>

          <td>
            <table>
              <tr>
                <td style={{ width: "200px" }}>
                  `headers`
                </td>

                <td>
                  Una matriz de `string` valores que representan los nombres de las columnas de la tabla
                </td>
              </tr>

              <tr>
                <td style={{ width: "200px" }}>
                  `rows`
                </td>

                <td>
                  Una matriz de matrices, que representan los valores de la tabla. Todos los valores deben ser valores `string`, `number` o `boolean` . (No se permiten objetos JSON complejos).
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            `string`
          </td>

          <td>
            No
          </td>

          <td>
            Una descripción detallada de la tabla.
          </td>
        </tr>
      </tbody>
    </table>

    #### Ejemplo de carga

    ```json
    {
           "table": {
               "headers": [
               "id", "name", "intvalue", "floatvalue", "boolvalue"
               ],
               "rows": [
                   ["1", "abc", 27, 2.7, true],
                   ["2", "def", 2622, 26.22, false],
                   ["2a", "d,ef", 1234, 43.21, false]
               ]
           },
           "description": "This is a description."
       }
    ```
  </Collapser>
</CollapserGroup>

### Cuerpo de respuesta [#create-update-response]

Si la solicitud se realiza correctamente, la carga útil JSON de respuesta puede incluir los siguientes campos:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo
      </th>

      <th style={{ width: "200px" }}>
        Tipo de valor
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `accountId`
      </td>

      <td>
        `number`
      </td>

      <td>
        La cuenta a la que pertenece la tabla. Esto coincidirá con el valor de la cuenta en la ruta.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        `string`
      </td>

      <td>
        Un nombre para la tabla almacenada. Esto coincidirá con el valor del nombre en la ruta.
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        `string`
      </td>

      <td>
        Una descripción detallada de la tabla.
      </td>
    </tr>

    <tr>
      <td>
        `guid`
      </td>

      <td>
        `string`
      </td>

      <td>
        La guía asignada a la tabla al momento de su creación.
      </td>
    </tr>

    <tr>
      <td>
        `size`
      </td>

      <td>
        `number`
      </td>

      <td>
        Tamaño de la tabla como cadena CSV.
      </td>
    </tr>

    <tr>
      <td>
        `rows`
      </td>

      <td>
        `number`
      </td>

      <td>
        El número de filas de la tabla (excluida la fila del encabezado)
      </td>
    </tr>

    <tr>
      <td>
        `updatedBy`
      </td>

      <td>
        `string`
      </td>

      <td>
        El nombre de usuario/dirección de correo electrónico del último usuario que creó o actualizó por última vez esta tabla.
      </td>
    </tr>

    <tr>
      <td>
        `updatedAt`
      </td>

      <td>
        `string`
      </td>

      <td>
        La marca de timestamp de cuándo se creó o actualizó la tabla por última vez. Esto reflejará la última timestamp actualizada del objeto S3. El valor será una cadena de fecha y hora estándar ISO 8601 (ej. 2023-02-13T19:49:28.023Z)
      </td>
    </tr>

    <tr>
      <td>
        `table`
      </td>

      <td>
        `JSON` objeto literal
      </td>

      <td>
        <table>
          <tr>
            <td style={{ width: "200px" }}>
              `headers`
            </td>

            <td>
              Una matriz de `string` valores que representan los nombres de las columnas de la tabla
            </td>
          </tr>

          <tr>
            <td style={{ width: "200px" }}>
              `rows`
            </td>

            <td>
              Una matriz de matrices, que representan los valores de la tabla.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>

#### Ejemplo de carga útil JSON de respuesta

```json
{
  "accountId": YOUR_ACCOUNT_ID,
  "name": "sample",
  "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
  "size": 120
  "rows": 3
  "updatedBy": "jondoe@example.com"
  "updatedAt": "2023-02-13T19:49:28.023Z",
  "table": {
    "headers": [
      "id", "name", "description", "intvalue", "floatvalue", "boolvalue"
    ],
    "rows": [
      [1, "abc", 27, 2.7, true],
      [2, "def", 2622, 26.22, false],
      ["2a", "d,ef", 1234, 43.21, false]
    ]
  }
}
```

### Solicitudes de ejemplo

<CollapserGroup>
  <Collapser
    id="create-a-new-table"
    title="Crear una nueva tabla"
  >
    Para crear una nueva tabla de búsquedas, podemos enviar una solicitud POST al extremo de creación con una carga útil JSON que describe la tabla de búsquedas.

    Aquí hay un ejemplo de comando curl:

    ```bash
    curl -X "POST" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
          -H 'Content-Type: application/json' \
          -H 'Api-Key: YOUR_USER_KEY'\
          -d $'{
      "table": {
      "headers": ["id", "name", "intvalue", "floatvalue", "boolvalue"],
      "rows": [
          ["1", "abc", 27, 2.7, true],
          ["2", "def", 2622, 26.22, false]
      ]
      },
      "description": "This is a description."
      }'
    ```
  </Collapser>

  <Collapser
    id="update-a-table"
    title="Actualizar una tabla existente"
  >
    Para reemplazar una tabla de búsquedas existente, podemos enviar una solicitud PUT al extremo de actualización con un cuerpo de solicitud `multipart/form-data` que contenga la nueva tabla.

    ```bash
    curl -X "PUT" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Api-Key: YOUR_USER_KEY'\
       -H 'Content-Type: multipart/form-data; charset=utf-8; boundary=__X_PAW_BOUNDARY__' \
       -F "table=id,name,description,intvalue,floatvalue,boolvalue
          1,abc,desc1,27,2.7,true
          2,def,desc2,2622,26.22,false
          " \
       -F "description=This is a description."
    ```
  </Collapser>
</CollapserGroup>

## Leer una tabla [#read]

### Extremo HTTP [#read-endpoint]

`GET /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

Se utiliza para descargar una tabla que se cargó previamente. Si la tabla no existe, esta llamada generará una respuesta `404 Not Found` . Este extremo no tiene carga útil de solicitud.

#### Solicitar parámetro de consulta

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nombre
      </th>

      <th style={{ width: "150px" }}>
        Tipo
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        Indica si se debe incluir el valor de la tabla en la respuesta. Se ignora cuando el tipo de contenido es `text/csv`.
      </td>
    </tr>
  </tbody>
</table>

### Encabezados HTTP [#read-headers]

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
        `Accept`
      </td>

      <td>
        * `application/json`
        * `text/csv`
      </td>
    </tr>
  </tbody>
</table>

### Cuerpo de respuesta [#read-response-body]

Si la solicitud tiene éxito, la respuesta puede ser del tipo `application/json` o `text/csv`.

#### Respuesta con tipo `application/json`

La respuesta será la misma que la [carga útil de respuesta de creación/actualización](#create-update-response).

#### Respuesta con tipo `text/csv`

La respuesta contendrá la tabla en formato CSV.

### Solicitudes de ejemplo [#read-example-requests]

<Collapser
  id="download-an-existing-table"
  title="Descargar una tabla existente"
>
  Para descargar una tabla que fue cargada previamente, podemos enviar una solicitud GET al extremo de actualización.

  Aquí hay un ejemplo de comando curl:

  ```bash
  curl "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Accept: text/csv' \
       -H 'Api-Key: YOUR_USER_KEY'
  ```

  A continuación se muestra un ejemplo de respuesta `text/csv` :

  ```csv
  id,name,intvalue,floatvalue,boolvalue
  '1,abc,27,2.7,true
  '2,def,2622,26.22,false
  '2a,"g,hi",1234,43.21,false
  ```
</Collapser>

## Eliminar una tabla [#delete]

### Extremo HTTP [#delete-endpoint]

`DELETE /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

Se utiliza para eliminar la tabla dada. Si la tabla no existe, esta llamada generará una respuesta `404 Not Found` . Este extremo no tiene carga útil de solicitud.

<Callout variant="important">
  Las tablas eliminadas no son recuperables.
</Callout>

#### Solicitar parámetro de consulta

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nombre
      </th>

      <th>
        Tipo
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        Indica si se debe incluir el valor de la tabla en la respuesta.
      </td>
    </tr>
  </tbody>
</table>

### Encabezados HTTP [#delete-headers]

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
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### Cuerpo de respuesta [#delete-response-body]

Si la solicitud se realiza correctamente y el encabezado `Accept` está configurado en `application/json`, el cuerpo de la respuesta será el mismo que la [carga útil de la respuesta de creación/actualización](#create-update-response).

### Solicitudes de ejemplo [#delete-example-request]

<Collapser
  id="delete-an-existing-table"
  title="Eliminar una tabla existente"
>
  Para eliminar una tabla que se cargó anteriormente, podemos enviar una solicitud ELIMINAR al extremo de eliminación.

  Aquí hay un ejemplo de comando curl:

  ```bash
  curl -X "DELETE" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Accept: application/json' \
       -H 'Api-Key: YOUR_USER_KEY'\
  ```
</Collapser>

## Listar tablas [#list]

### Extremo HTTP [#list-endpoint]

`GET /v1/accounts/YOUR_ACCOUNT_ID`

Enumera las tablas actualizadas previamente para esta cuenta. Este extremo no tiene carga útil de solicitud.

### Encabezados HTTP [#list-headers]

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
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### Cuerpo de respuesta [#list-response-body]

Si la solicitud tiene éxito, la carga útil JSON de respuesta consistirá en una matriz de resúmenes de tablas. Cada resumen de tabla puede incluir los campos siguientes.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo
      </th>

      <th style={{ width: "200px" }}>
        Tipo de valor
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `accountId`
      </td>

      <td>
        `number`
      </td>

      <td>
        La cuenta a la que pertenece la tabla. Esto coincidirá con el valor de la cuenta en la ruta.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        `string`
      </td>

      <td>
        Un nombre para la tabla almacenada. Esto coincidirá con el valor del nombre en la ruta.
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        `string`
      </td>

      <td>
        Una descripción más detallada de la tabla.
      </td>
    </tr>

    <tr>
      <td>
        `guid`
      </td>

      <td>
        `string`
      </td>

      <td>
        La guía asignada a la tabla al momento de su creación.
      </td>
    </tr>

    <tr>
      <td>
        `size`
      </td>

      <td>
        `number`
      </td>

      <td>
        El tamaño de la tabla como una cadena CSV.
      </td>
    </tr>

    <tr>
      <td>
        `rows`
      </td>

      <td>
        `number`
      </td>

      <td>
        El número de filas de la tabla (excluida la fila del encabezado)
      </td>
    </tr>

    <tr>
      <td>
        `updateBy`
      </td>

      <td>
        `string`
      </td>

      <td>
        El nombre de usuario/dirección de correo electrónico del último usuario que actualizó esta tabla.
      </td>
    </tr>

    <tr>
      <td>
        `updatedAt`
      </td>

      <td>
        `string`
      </td>

      <td>
        La marca de timestamp de cuándo se creó o actualizó la tabla por última vez. Esto reflejará la última timestamp actualizada del objeto S3. El valor será una cadena de fecha y hora estándar ISO 8601 (ej. 2023-02-13T19:49:28.023Z)
      </td>
    </tr>
  </tbody>
</table>

### Solicitud de ejemplo [#list-example-request]

<Collapser
  id="list-tables"
  title="Tablas de listado actualizadas para una cuenta"
>
  Para enumerar las tablas de una cuenta, podemos enviar una solicitud GET al extremo de la lista.

  Aquí hay un ejemplo de comando curl:

  ```bash
  curl "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID" \
       -H 'Accept: text/csv' \
       -H 'Api-Key: YOUR_USER_KEY'
  ```

  Aquí hay un ejemplo de carga útil JSON de respuesta:

  ```json
  [
    {
      "accountId": YOUR_ACCOUNT_ID,
      "name": "sample",
      "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
      "size": 120
      "rows": 3
      "updatedBy": "jondoe@example.com"
      "updatedAt": "2023-02-13T19:49:28.023Z"
    },
    {
      "accountId": YOUR_ACCOUNT_ID,
      "name": "sample2",
      "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
      "size": 4096
      "rows": 2000
      "updatedBy": "janedoe@example.com"
      "updatedAt": "2023-02-14T13:30:21.100Z"
    }
  ]
  ```
</Collapser>

## Mensaje de error [#error-messaging]

Si una solicitud no tiene éxito, la carga útil de respuesta de error tendrá el siguiente formato.

```json
{
  "code": HTTP_STATUS_CODE(same as status header),
  "message": ERROR_MESSAGE
}
```
