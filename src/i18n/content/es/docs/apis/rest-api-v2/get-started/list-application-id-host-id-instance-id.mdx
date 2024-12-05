---
title: 'Lista ID de la aplicación, ID del host, ID de la instancia'
tags:
  - APIs
  - REST API v2
  - Get started
metaDescription: 'How to locate New Relic IDs, including the application ID, host ID, and instance ID, via the REST API Explorer.'
freshnessValidatedDate: never
translationType: machine
---

[El APM](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm) de New Relic asigna ID a entidades relacionadas con una aplicación. Se utilizan para recopilar información sobre el funcionamiento y el rendimiento desde diferentes puntos de vista. Estos ID se pueden devolver a través de [la API REST de New Relic](/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2).

Las identificaciones pueden incluir:

* ID de la aplicación `$APP_ID` para cada aplicación instrumentada
* ID del host `$HOST_ID` para cada host
* ID de la instancia `$INSTANCE_ID` si hay varias instancias de la aplicación

Para enumerar cualquiera de estos ID en el [Explorador de API de New Relic](/docs/apis/using-the-api-explorer), necesita una [clave de API](/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key).

## Utilice el Explorador de API [#explorer]

Puede utilizar API Explorer para devolver una lista de todos los ID de producto para un producto en particular:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app)**
   </DNT>

   .

2. Vaya al Explorador de API en [rpm.newrelic.com/api/explore](https://rpm.newrelic.com/api/explore), luego seleccione el nombre de su cuenta en el menú desplegable

   <DNT>
     **Select an account**
   </DNT>

   .

3. En la barra lateral, seleccione

   <DNT>
     **(product category) > GET List**
   </DNT>

   . Seleccione

   <DNT>
     **Send Request**
   </DNT>

   .

4. Explore

   <DNT>
     **Response**
   </DNT>

   para localizar el ID del producto.

Utilice la ID del producto que ubicó en su API de llamada REST.

## ID de lista de la aplicación [#locating_app_id]

A cada monitor de aplicación realizado por un agente <InlinePopover type="apm"/>se le asigna un nombre. Un `$APP_ID` único también está asociado con ese nombre. El `$APP_ID` es fundamental para recuperar <InlinePopover type="apm"/>información sobre tus aplicaciones. Para obtener más información sobre cómo incluir y usar `$APP_ID` y obtener los datos resumidos, consulte [Cómo incluir el ID de su aplicación](/docs/apis/rest-api-v2/application-examples-v2/listing-your-app-id-metric-data-v2).

## Lista ID del host [#locating_host_id]

El `$HOST_ID` se utiliza para obtener datos de APM para un host específico que ejecuta una aplicación. Un servidor físico puede tener más de un host. Por ejemplo, un programa de servidor web que se ejecuta en un servidor físico puede configurarse para tener más de un host virtual.

Los ID del host y del servidor físico no son los mismos. Cada ID del host es único y representa diferentes elementos.

Utilice `$HOST_ID` para recuperar métricas resumidas para el host, así como valores de intervalo de tiempo de métrica específicos. Para más información sobre métricas disponibles:

1. Vaya a

   <DNT>
     **[rpm.newrelic.com](https://rpm.newrelic.com)**
   </DNT>

   .

2. Vaya al [Explorador de API](https://rpm.newrelic.com/api/explore/application_hosts/list) y luego seleccione el nombre de su cuenta en el menú desplegable

   <DNT>
     **Select an account**
   </DNT>

   .

3. Vaya a la página

   <DNT>
     **Application host**
   </DNT>

   del Explorador de API en [rpm.newrelic.com/api/explore/application_hosts/names](https://rpm.newrelic.com/api/explore/application_hosts/names).

<CollapserGroup>
  <Collapser
    id="host_id"
    title="ID del host y datos resumidos usando REST API Explorer"
  >
    Para utilizar API Explorer para devolver una lista de cada `$HOST_ID` para una aplicación en particular, necesitará el [`$APP_ID`](/docs/apis/rest-api-v2/requirements/finding-product-id).

    1. Vaya al [Explorador de API](https://rpm.newrelic.com/api/explore/application_hosts/list) y luego seleccione el nombre de su cuenta en el menú desplegable <DNT>**Select an account**</DNT> .

    2. Ingrese el [`$APP_ID`](/docs/apis/rest-api-v2/requirements/finding-product-id) específico en el siguiente comando:

       ```
       curl -X GET "https://api.newrelic.com/v2/applications/$APP_ID/hosts.json" \
            -H "Api-Key:<a href='/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key'>$API_KEY</a>" -i
       ```

       Si tiene una [cuenta de región de la UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center), el extremo comienza con `https://api.eu.newrelic.com`.

    3. Seleccione <DNT>**Send Request**</DNT>.

    4. Explore el <DNT>**Response**</DNT> para localizar el `{HOST_ID}` de cada host.
  </Collapser>

  <Collapser
    id="host-id"
    title="{HOST_ID} salida"
  >
    El resultado será similar a este:

    ```
    {
      "application_hosts": [
        {
          "id": 34966,      <---<<< {HOST_ID}
          "application_name": "Combined Production",
          "host": "prod-app-10.com",
          "language": "ruby",
          "health_status": "green",
          "application_summary": {
            . . .
          },
          "links": {
            "application": 1234,   <---<<< {APP_ID}
            "application_instances": [
              13512     <---<<< {INSTANCE_ID}
            ],
          }
        },
        {
          "id": 9999999,      <---<<< {HOST_ID}
          "application_name": "Combined Production",
          "host": "prod-app-11.com",
          "language": "ruby",
          "health_status": "green",
          "application_summary": {
            ". . .
          },
          "links": {
            "application": 1234,   <---<<< {APP_ID}
            "application_instances": [
              186288     <---<<< {INSTANCE_ID}
            ],
          }
        },
    . . .
    ```
  </Collapser>
</CollapserGroup>

## ID de lista de la instancia [#locating_instance_id]

El significado del ID de la instancia depende del agente de lenguaje de New Relic que se utilice. Puede enumerar este ID desde la API REST. Para Java, también puede [ver el ID de la instancia (JVM)](#UI) desde la página <DNT>**Overview**</DNT> de APM.

<table>
  <thead>
    <tr>
      <th width={100}>
        Agente
      </th>

      <th>
        ID de la instancia representa
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Go
      </td>

      <td>
        El programa Go en el host informa al nombre de la aplicación
      </td>
    </tr>

    <tr>
      <td>
        Java
      </td>

      <td>
        Una máquina virtual Java (JVM)
      </td>
    </tr>

    <tr>
      <td>
        .NET
      </td>

      <td>
        Para el agente para .NET framework, este es el `AppDomain`
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        Un proceso de trabajo
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        El agente daemon
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        Un proceso de trabajo individual de Ruby
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        Los procesos maestro y trabajador.
      </td>
    </tr>
  </tbody>
</table>

Puede recuperar métricas resumidas para la instancia, así como valores de intervalo de tiempo de métrica específicos usando `{INSTANCE_ID}`. Para obtener detalles sobre las métricas disponibles, utilice la página [de instancia de la aplicación REST API Explorer](https://rpm.newrelic.com/api/explore/application_instances/names) .

<CollapserGroup>
  <Collapser
    id="host_id"
    title="ID de la instancia y datos resumidos usando REST API Explorer"
  >
    Para utilizar API Explorer para devolver una lista de cada `$INSTANCE_ID` para una aplicación en particular, necesitará el [`$APP_ID`](/docs/apis/rest-api-v2/requirements/finding-product-id).

    1. Vaya al [Explorador de API](https://rpm.newrelic.com/api/explore/application_hosts/list) y luego seleccione el nombre de su cuenta en el menú desplegable <DNT>**Select an account**</DNT> .

    2. Ingrese el [`$APP_ID`](/docs/apis/rest-api-v2/requirements/finding-product-id) específico en el siguiente comando:

       ```
       curl -X GET "https://api.newrelic.com/v2/applications/$APP_ID/hosts.json" \
            -H "Api-Key:<a href='/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key'>$API_KEY</a>" -i
       ```

       Si tiene una [cuenta de región de la UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center), el extremo comienza con `https://api.eu.newrelic.com`.

    3. Seleccione <DNT>**Send Request**</DNT>.

    4. Explore el <DNT>**Response**</DNT> para localizar el `$INSTANCE_ID` para cada instancia.
  </Collapser>

  <Collapser
    id="instance-id"
    title="{INSTANCE_ID} salida"
  >
    La salida de &#x7B;INSTANCE_ID} será similar a esta:

    ```
    {
      "application_instances": [
        {
          "id": 35120,     <---<<< {INSTANCE_ID}
          "application_name": "Combined Production",
          "host": "prod-app-10.com",
          "language": "ruby",
          "health_status": "green",
          "application_summary": {
            . . .
          },
          "links": {
            "application": 1441,   <---<<< {APP_ID}
            "application_host": 34966,    <---<<< {HOST_ID}
          }
        },
        {
          "id": 186288,     <---<<< {INSTANCE_ID}
          "application_name": "Combined Production",
          "host": "prod-app-11.com",
          "language": "ruby",
          "health_status": "green",
          "application_summary": {
            . . .
          },
          "links": {
            "application": 1441,   <---<<< {APP_ID}
            "application_host": 186283,    <---<<< {HOST_ID}
          }
        },
    . . .
    ```
  </Collapser>

  <Collapser
    id="UI"
    title="ID de instancia de Java (JVM) usando la UI"
  >
    Aplicaciones Java: para localizar una JVM específica `$INSTANCE_ID` en New Relic:

    1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > Applications > (select an app) > JVMs**</DNT>.

    2. Seleccione el nombre de la instancia.

       En la URL, el número después del designador `_i` representa la instancia de Java JVM:

       ```
       https://rpm.newrelic.com/accounts/<a href="/docs/accounts-partnerships/accounts/account-setup/account-id">$ACCOUNT_ID</a>/applications/$APP_ID_i$INSTANCE_ID
       ```
  </Collapser>
</CollapserGroup>

## Ejemplo de lista de aplicaciones de API REST [#app-list-example]

El siguiente ejemplo muestra cómo localizar toda la información de ID de una aplicación utilizando `APP_ID`. Si tiene una [cuenta de la UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center), el extremo comienza con `https://api.eu.newrelic.com`.

```
curl -X GET 'https://api.newrelic.com/v2/applications.json' \
     -H "Api-Key:<a href='/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key'>$API_KEY</a>" -i \
     -d 'filter[ids]=1441'    <----<<<< {APP_ID}
```

El resultado del ejemplo resultante se ejecuta en cinco servidores. Un servidor aloja dos hosts virtuales para un total de seis hosts. El resultado incluye una sección `links` que enumera `application_instances` y `application_hosts` para la aplicación.

```
{
  "applications": [
    {
      "id": 1441,      <----<<<< {APP_ID}
      "name": "RPM Combined Production",
      "language": "ruby",
      "health_status": "green",
      "reporting": true,
      "last_reported_at": "2015-11-10T23:19:47+00:00",
      "application_summary": {
        . . .
      },
      "end_user_summary": {
        . . .
      },
      "settings": {
        . . .
      },
      "links": {
        "application_instances": [    <---<<<< {INSTANCE_ID} list
          21790,
          24810,
          27948,
          35120,
          35121,
          35122,
          186288,
          247253,
          247254,
          247255,
          247256
        ],
        "application_hosts": [    <---<<<< {HOST_ID} list
          21788,
          24808,
          34966,
          186283,
          247245,
          286551
        ]
      }
    }
  ],
. . .
```
