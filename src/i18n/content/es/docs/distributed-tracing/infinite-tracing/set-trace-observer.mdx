---
title: Configurar el observador de trazas
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: 'How to set up New Relic''s trace observer, which is required for enabling our tracing tools that use Infinite Tracing.'
freshnessValidatedDate: never
translationType: machine
---

Si estás siguiendo los [pasos para configurar rastreo distribuido](/docs/distributed-tracing/enable-configure/quick-start) y continúas con los pasos para la opción avanzada llamada Infinite Tracing, necesitas configurar un observador de traza. Traza Observer es un servicio basado en AWS para Infinite Tracing que le brinda una forma de baja latencia y bajo costo de enviar sus telemetry data a New Relic. A medida que recibe sus datos de rastreo, el observador de traza utiliza [el muestreo final](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#tail-based) para decidir qué conservar y enviar a New Relic.

Complete la configuración de traza observer que se ajuste a sus tipos de fuentes de datos (servicios, aplicaciones o entidad). Es posible que deba realizar pasos en más de una sección si tiene una variedad de tipos:

* [Servicios instrumentados con agente APM y herramientas de telemetría de terceros.](#apm-and-third-party)
* [Servicios instrumentados con New Relic Browser, móvil y Lambda](#browser-mobile-lambda)
* [(Opcional) Configuración adicional para todos los tipos de servicios](#follow-up-config)

<Callout variant="tip">
  ¿Algunas de sus solicitudes se comunican con servicios que todavía utilizan el rastreo distribuido estándar? Para evitar [conflictos de configuración](/docs/understand-dependencies/distributed-tracing/troubleshooting/infinite-tracing-trace-configuration-conflicts), lo ideal sería habilitar Infinite Tracing para todos los servicios asociados.
</Callout>

## Servicios instrumentados con agente APM y herramientas de telemetría de terceros. [#apm-and-third-party]

Para crear un nuevo observador de traza si está utilizando New Relic <InlinePopover type="apm"/>agente o integración de terceros:

1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**</DNT>.

2. Seleccione una cuenta en el menú desplegable superior izquierdo. Si tiene acceso a varias cuentas, asegúrese de estar en la cuenta donde desea habilitar Infinite Tracing. Si no puede agregar un observador, probablemente se deba a que solo permitimos [un observador por región, por familia de cuentas](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#infinite-architecture).

3. Si ya no hay observadores de traza presentes, haga clic en <DNT>**New trace observer**</DNT> para agregar uno, complete la información y haga clic en <DNT>**Create**</DNT>. Tenga en cuenta que ofrecemos las siguientes regiones:

   * <DNT>
       **us-east-1 (US)**
     </DNT>

   * <DNT>
       **us-west-2 (US)**
     </DNT>

   * <DNT>
       **eu-central-1 (EU):**
     </DNT>

     Seleccione esta región si está recopilando datos de solicitudes de la UE y tiene una cuenta New Relic con sede en la UE que informa en el centro de datos de la UE.

   * <DNT>
       **eu-west-1 (US):**
     </DNT>

     Seleccione esta región si está recopilando datos de solicitudes de la UE y tiene una cuenta New Relic con sede en EE. UU. que informa en el centro de datos de EE. UU.

   * <DNT>
       **ap-southeast-1 (US)**
     </DNT>

   * <DNT>
       **ap-southeast-2 (US)**
     </DNT>

   * <DNT>
       **us-east-2 (US, FedRAMP)**
     </DNT>

4. En el menú desplegable <DNT>**Endpoints**</DNT> , copia el valor extremo en <DNT>**For other integrations**</DNT> y tenlo listo. En nuestros ejemplos de código se hace referencia a este valor como `YOUR_TRACE_OBSERVER_URL`. Esto se utiliza para probar el [observador de traza](#sample-payload), así como para configurar nuestra [integración de telemetría](/docs/distributed-tracing/enable-configure/quick-start) y para enviar datos a través de la [API de traza](/docs/distributed-tracing/trace-api/introduction-trace-api/).

5. Si está configurando un agente APM, también debe copiar el valor extremo en <DNT>**For language agents**</DNT> y tenerlo listo. En nuestros ejemplos de código se hace referencia a este valor como `YOUR_TRACE_OBSERVER_HOST`. Esto se utiliza para [configurar nuestro agente de lenguaje para enviar datos al observador de traza](/docs/distributed-tracing/enable-configure/quick-start).

6. (Opcional) Para verificar que el observador de traza esté funcionando, recomendamos enviar una carga útil de traza de muestra. Si está utilizando nuestra [traza API](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api) directamente, esto le ayudará a aprender cómo funciona la API.

   <CollapserGroup>
     <Collapser
       id="sample-request"
       title="Enviar carga útil de muestra"
     >
       <Callout variant="important">
         Si utiliza datos en formato Zipkin, consulte [Enviar carga útil Zipkin](/docs/understand-dependencies/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api#send-zipkin-curl).
       </Callout>

       Esta prueba envía una carga útil de traza de muestra con una traza y dos tramos desde un servicio denominado `Test Service A`.

       Para enviar esta solicitud de muestra:

       1. Obtenga el <InlinePopover type="licenseKey"/>para la cuenta a la que desea informar datos y téngalo listo.

       2. Copie la siguiente solicitud `curl` en un editor de texto:

          ```bash
          curl -i -H 'Content-Type: application/json' \
              -H 'Api-Key: YOUR_LICENSE_KEY' \
              -H 'Data-Format: newrelic' \
              -H 'Data-Format-Version: 1' \
              -X POST \
              -d '[
                  {
                      "common": {
                          "attributes": {
                              "environment": "staging"
                          }
                      },
                      "spans": [
                          {
                              "trace.id": "123456",
                              "id": "ABC",
                              "attributes": {
                                  "duration.ms": 12.53,
                                  "host": "host123.example.com",
                                  "name": "/home",
                                  "service.name": "Test Service A"
                              }
                          },
                          {
                              "trace.id": "123456",
                              "id": "DEF",
                              "attributes": {
                                  "error.message": "Invalid credentials",
                                  "service.name": "Test Service B",
                                  "host": "host456.example.com",
                                  "duration.ms": 2.97,
                                  "name": "/auth",
                                  "parent.id": "ABC"
                              }
                          }
                      ]
                  }
              ]' 'YOUR_TRACE_OBSERVER_URL'
          ```

       3. Inserte sus propios valores en la solicitud `curl` :

          <table>
            <thead>
              <tr>
                <th>
                  Valor
                </th>

                <th>
                  Descripción
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `YOUR_LICENSE_KEY`
                </td>

                <td>
                  Reemplace esto con su ingesta <InlinePopover type="licenseKey"/>.
                </td>
              </tr>

              <tr>
                <td>
                  `YOUR_TRACE_OBSERVER_URL`
                </td>

                <td>
                  Reemplace esto con el valor extremo <DNT>**For other integrations**</DNT> que copió en un paso anterior.
                </td>
              </tr>
            </tbody>
          </table>

       4. Copie la solicitud curl en una terminal y ejecútela.

       5. La prueba debería devolver `HTTP/1.1 202 Accepted`, lo que indica éxito. Si no es así, verifique los siguientes problemas comunes:

          * Confirma que usaste el valor [extremo](#endpoints)

            <DNT>
              [**For other integrations**](#endpoints)
            </DNT>

            [](#endpoints).

          * Confirme que está utilizando comillas simples alrededor de `YOUR_TRACE_OBSERVER_URL`.

          * Comprueba que estás utilizando la clave de API correcta.

       6. Si su prueba arrojó `HTTP/1.1 202 Accepted`, vaya a la UI de New Relic para ver una consulta de los datos de carga útil de muestra utilizando el atributo span `service.name = Test Service A` ([aquí hay un enlace para esa consulta](https://one.newrelic.com/launcher/distributed-tracing-nerdlets.distributed-tracing?launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjoxODAwMDAwfSwiJGlzRmFsbGJhY2tUaW1lUmFuZ2UiOnRydWV9&pane=eyJuZXJkbGV0SWQiOiJkaXN0cmlidXRlZC10cmFjaW5nLW5lcmRsZXRzLmRpc3RyaWJ1dGVkLXRyYWNpbmctbGF1bmNoZXIiLCJzb3J0SW5kZXgiOjAsInNvcnREaXJlY3Rpb24iOiJERVNDIiwicXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJpbmRleFF1ZXJ5Ijp7ImNvbmRpdGlvblR5cGUiOiJJTkRFWCIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W119LCJzcGFuUXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJjb25kaXRpb25TZXRzIjpbeyJjb25kaXRpb25UeXBlIjoiU1BBTiIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W3siYXR0ciI6InNlcnZpY2UubmFtZSIsIm9wZXJhdG9yIjoiRVEiLCJ2YWx1ZSI6IlRlc3QgU2VydmljZSBBIn1dfV19fX0=)). Debido a que la carga útil de muestra contiene un atributo de error, el muestreador de errores la marcará para conservarla. Si modifica la carga útil para eliminar el atributo de error, es posible que el muestreador aleatorio no elija conservar esta traza en particular.

          <Callout variant="tip">
            Traza puede tardar hasta un minuto en aparecer en la UI.
          </Callout>
     </Collapser>
   </CollapserGroup>

7. Marque la [configuración opcional](#follow-up-config) a continuación para que pueda volver a ella después de experimentar con Infinite Tracing.

8. Vuelva a las instrucciones de configuración originales de rastreo distribuido para su agente o herramienta de telemetría de terceros e inserte su nuevo valor extremo en la configuración de cada servicio.

9. Si también tienes [servicios instrumentados con New Relic Browser, móvil y Lambda](#browser-mobile-lambda), sigue los pasos de esa sección para seleccionar tus fuentes de datos (servicios, aplicaciones o entidad) en el observador de traza.

## Servicios instrumentados con New Relic Browser, móvil y Lambda [#browser-mobile-lambda]

Para crear un nuevo observador de traza si está utilizando New Relic Browser, dispositivo móvil o Lambda, siga pasos similares a los del [agente APM y la integración de terceros](#apm-and-third-party). La diferencia entre esta configuración es que no es necesario insertar un nuevo extremo de traza observer en la configuración de cada servicio. En su lugar, completa una configuración separada en el observador de traza que especifica qué fuentes de datos (servicios, aplicaciones o entidad) deben enviar sus datos al observador de traza de Infinite Tracing.

Si ya creó un observador de traza mientras configuraba otro tipo de servicio (por ejemplo, un <InlinePopover type="apm"/>agente), puede omitir los pasos sobre la creación del observador de traza e ir directamente a [Configuración inicial del observador de traza para browser, dispositivo móvil y Lambda.](#initial-config) para seleccionar sus fuentes de datos.

### Crear un observador de traza [#create-for-mlb]

Si aún no ha configurado un observador de trazas, complete lo siguiente:

1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**</DNT>.

2. Seleccione una cuenta en el menú desplegable superior izquierdo. Si tiene acceso a varias cuentas, asegúrese de estar en la cuenta donde desea habilitar Infinite Tracing. Si no puede agregar un observador, probablemente se deba a que solo permitimos [un observador por región, por familia de cuentas](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#infinite-architecture).

3. Si ya no hay observadores de traza presentes, haga clic en <DNT>**New trace observer**</DNT> para agregar uno, complete la información y haga clic en <DNT>**Create**</DNT>. Tenga en cuenta que ofrecemos las siguientes regiones:

   * <DNT>
       **us-east-1 (US)**
     </DNT>

   * <DNT>
       **us-west-2 (US)**
     </DNT>

   * <DNT>
       **eu-central-1 (EU):**
     </DNT>

     Seleccione esta región si está recopilando datos de solicitudes de la UE y tiene una cuenta New Relic con sede en la UE que informa en el centro de datos de la UE.

   * <DNT>
       **eu-west-1 (US):**
     </DNT>

     Seleccione esta región si está recopilando datos de solicitudes de la UE y tiene una cuenta New Relic con sede en EE. UU. que informa en el centro de datos de EE. UU.

   * <DNT>
       **ap-southeast-1 (US)**
     </DNT>

   * <DNT>
       **ap-southeast-2 (US)**
     </DNT>

   * <DNT>
       **us-east-2 (US, FedRAMP)**
     </DNT>

4. En el menú desplegable <DNT>**Endpoints**</DNT> , copia el valor extremo en <DNT>**For other integrations**</DNT> y tenlo listo. En nuestros ejemplos de código se hace referencia a este valor como YOUR_TRACE_OBSERVER_URL. Esto se utiliza para probar el [observador de traza](#sample-payload).

5. (Opcional) Para verificar que el observador de traza esté funcionando, recomendamos enviar una carga útil de traza de muestra.

   <CollapserGroup>
     <Collapser
       id="sample-request"
       title="Enviar carga útil de muestra"
     >
       <Callout variant="important">
         Si utiliza datos en formato Zipkin, consulte [Enviar carga útil Zipkin](/docs/understand-dependencies/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api#send-zipkin-curl).
       </Callout>

       Esta prueba envía una carga útil de traza de muestra con una traza y dos tramos desde un servicio denominado `Test Service A`.

       Para enviar esta solicitud de muestra:

       1. Obtenga el <InlinePopover type="licenseKey"/>para la cuenta a la que desea informar datos y téngalo listo.

       2. Copie la siguiente solicitud `curl` en un editor de texto:

          ```bash
          curl -i -H 'Content-Type: application/json' \
              -H 'Api-Key: YOUR_LICENSE_KEY' \
              -H 'Data-Format: newrelic' \
              -H 'Data-Format-Version: 1' \
              -X POST \
              -d '[
                  {
                      "common": {
                          "attributes": {
                              "environment": "staging"
                          }
                      },
                      "spans": [
                          {
                              "trace.id": "123456",
                              "id": "ABC",
                              "attributes": {
                                  "duration.ms": 12.53,
                                  "host": "host123.example.com",
                                  "name": "/home",
                                  "service.name": "Test Service A"
                              }
                          },
                          {
                              "trace.id": "123456",
                              "id": "DEF",
                              "attributes": {
                                  "error.message": "Invalid credentials",
                                  "service.name": "Test Service B",
                                  "host": "host456.example.com",
                                  "duration.ms": 2.97,
                                  "name": "/auth",
                                  "parent.id": "ABC"
                              }
                          }
                      ]
                  }
              ]' 'YOUR_TRACE_OBSERVER_URL'
          ```

       3. Inserte sus propios valores en la solicitud `curl` :

          <table>
            <thead>
              <tr>
                <th>
                  Valor
                </th>

                <th>
                  Descripción
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `YOUR_LICENSE_KEY`
                </td>

                <td>
                  Reemplace esto con su <InlinePopover type="licenseKey"/>.
                </td>
              </tr>

              <tr>
                <td>
                  `YOUR_TRACE_OBSERVER_URL`
                </td>

                <td>
                  Reemplace esto con el valor extremo <DNT>**For other integrations**</DNT> que copió en un paso anterior.
                </td>
              </tr>
            </tbody>
          </table>

       4. Copie la solicitud curl en una terminal y ejecútela.

       5. La prueba debería devolver `HTTP/1.1 202 Accepted`, lo que indica éxito. Si no es así, verifique los siguientes problemas comunes:

          * Confirma que usaste el valor [extremo](#endpoints)

            <DNT>
              [**For other integrations**](#endpoints)
            </DNT>

            [](#endpoints).

          * Confirme que está utilizando comillas simples alrededor de `YOUR_TRACE_OBSERVER_URL`.

          * Comprueba que estás utilizando la clave de API correcta.

       6. Si su prueba arrojó `HTTP/1.1 202 Accepted`, vaya a la UI de New Relic para ver una consulta de los datos de carga útil de muestra utilizando el atributo span `service.name = Test Service A` ([aquí hay un enlace para esa consulta](https://one.newrelic.com/launcher/distributed-tracing-nerdlets.distributed-tracing?launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjoxODAwMDAwfSwiJGlzRmFsbGJhY2tUaW1lUmFuZ2UiOnRydWV9&pane=eyJuZXJkbGV0SWQiOiJkaXN0cmlidXRlZC10cmFjaW5nLW5lcmRsZXRzLmRpc3RyaWJ1dGVkLXRyYWNpbmctbGF1bmNoZXIiLCJzb3J0SW5kZXgiOjAsInNvcnREaXJlY3Rpb24iOiJERVNDIiwicXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJpbmRleFF1ZXJ5Ijp7ImNvbmRpdGlvblR5cGUiOiJJTkRFWCIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W119LCJzcGFuUXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJjb25kaXRpb25TZXRzIjpbeyJjb25kaXRpb25UeXBlIjoiU1BBTiIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W3siYXR0ciI6InNlcnZpY2UubmFtZSIsIm9wZXJhdG9yIjoiRVEiLCJ2YWx1ZSI6IlRlc3QgU2VydmljZSBBIn1dfV19fX0=)). Debido a que la carga útil de muestra contiene un atributo de error, el muestreador de errores la marcará para conservarla. Si modifica la carga útil para eliminar el atributo de error, es posible que el muestreador aleatorio no elija conservar esta traza en particular.

          <Callout variant="tip">
            Traza puede tardar hasta un minuto en aparecer en la UI.
          </Callout>
     </Collapser>
   </CollapserGroup>

### Configuración inicial de traza observer para browser, móvil y Lambda [#initial-config]

Una vez que tenga un observador de traza, debe especificar qué fuentes de datos (servicios, aplicaciones o entidad) deben enviar sus datos al observador de traza de Infinite Tracing. Antes de seleccionar sus fuentes de datos, familiarícese con lo siguiente:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="timing"
    title="¿Cuánto tiempo pasará antes de que vea mis datos en la UI de New Relic?"
  >
    Cuando selecciona su browser, dispositivo móvil y fuentes de datos Lambda, debe esperar un retraso de hasta tres minutos antes de ver los resultados en la UI de New Relic para ese observador de traza. Esto permite al observador de traza esperar el tiempo suficiente para que lleguen estas fuentes de datos de alta latencia antes de tomar una decisión de muestreo.

    Por ejemplo, si vuelve a ejecutar la prueba [de curl de muestra](#sample-request) después de agregar fuentes de datos browser, dispositivos móviles o Lambda, debe esperar un retraso antes de que los datos aparezcan en la UI.
  </Collapser>

  <Collapser
    className="freq-link"
    id="multi-named-apps"
    title="¿Qué pasa si mi aplicación browser está conectada a un agente APM que tiene varios nombres?"
  >
    Si su aplicación browser está asociada con una [aplicación APM que tiene varios nombres](/docs/apm/agents/manage-apm-agents/app-naming/use-multiple-names-app/), solo puede seleccionar una del grupo de aplicaciones browser con varios nombres cuando elige su fuente de datos. Si intenta seleccionar la misma aplicación que tiene otro nombre, la UI le indicará que debe elegir solo una aplicación browser .
  </Collapser>

  <Collapser
    className="freq-link"
    id="lambda-sampling"
    title="¿Cómo funciona el muestreo Lambda?"
  >
    De forma predeterminada, cuando configura capas Lambda, automáticamente obtiene muestreo al inicio. Cuando habilita Infinite Tracing para Lambda, el observador de trazas muestrea adicionalmente sus datos de muestreo al inicio. El principal beneficio de habilitar Infinite Tracing para su función Lambda es garantizar que sus intervalos se incluyan con intervalos de otros servicios rastreados por Infinite Tracing.
  </Collapser>
</CollapserGroup>

El procedimiento a continuación es para usar la UI de New Relic, pero si prefiere un enfoque programático, puede [especificar fuentes de datos con GraphQL](/docs/apis/nerdgraph/examples/configure-infinite-tracing-graphql/#updating-the-data-sources). Si usa GraphQL, regrese a este procedimiento y continúe con el paso 4 (configuración opcional) a continuación.

Para finalizar la configuración para browser, móvil y Lambda en la UI:

1. Regrese a la aplicación de traza observer (<DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**</DNT>).

2. Para su observador de traza, vaya al final de la fila, haga clic en el icono de puntos suspensivos <DNT>**...**</DNT> y luego haga clic en <DNT>**Edit mobile, browser, lambda sources**</DNT>.

   <img
     title="Screenshot showing menu when you click the ellipsis next to your trace observer"
     alt="Screenshot showing menu when you click the three dots next to your trace observer"
     src="/images/distributed-tracing_screenshot-crop_mobile-lambda-menu-.webp"
   />

3. Seleccione las fuentes de datos que desea incluir, teniendo en cuenta lo siguiente:

   * Puede utilizar el filtro para limitar sus opciones.

   * Si su aplicación browser está conectada a un

     <InlinePopover type="apm"/>

     agente que tiene varios nombres, solo podrá elegir un nombre.

   * Si una entrada es gris, ya está siendo utilizada por otro observador de traza.


4. Marque la [configuración opcional](#follow-up-config) a continuación para que pueda volver a ella después de experimentar con Infinite Tracing.
5. Vea sus datos de Infinite Tracing en la [UIdistribuida del rastreo de New Relic](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/).
6. Si también tiene [servicios instrumentados con agente APM o herramientas de telemetría de terceros,](#apm-and-third-party) siga los pasos en esa sección para asegurarse de que sus datos se informen a New Relic.

## (Opcional) Configuración adicional para todos los tipos de servicios [#follow-up-config]

<Callout variant="tip">
  Es posible que desees posponer estas configuraciones opcionales hasta que hayas trabajado con esta característica por un tiempo.
</Callout>

Puedes controlar el comportamiento del observador de trazas con varias configuraciones. Estas son algunas de las características que puedes configurar:

* [Configurar monitoreo de traza observador](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-trace-observer-monitoring/): Permite ver la cantidad de traza vista y retenida.
* [Configure el filtro de traza del atributo span](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-span-attribute-trace-filter/): cree reglas de filtrado personalizadas para tramos.
* [Seguimiento Infinito: Configurar filtro de traza aleatoria](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-random-trace-filter): Ajusta el porcentaje utilizado por el filtro de traza aleatoria.
