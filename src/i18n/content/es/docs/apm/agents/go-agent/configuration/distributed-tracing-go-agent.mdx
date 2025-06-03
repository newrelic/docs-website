---
title: Habilite rastreo distribuido para su aplicación Go
tags:
  - Agents
  - Go agent
  - Features
metaDescription: 'For the New Relic Go agent: how to implement distributed tracing across your Go language applications and services.'
freshnessValidatedDate: never
translationType: machine
---

Rastreo distribuido te permite ver el recorrido completo de tus solicitudes a lo largo de un [sistema distribuido](/docs/distributed-tracing/concepts/introduction-distributed-tracing). Para el agente Go, ofrecemos dos tipos de rastreo distribuido (para más detalles, consulte [Cómo funciona el muestreo de intervalo](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#sampling)):

* Estándar (muestreo head-based): Antes de que llegue cualquier traza, determinamos un porcentaje determinado de traza para aceptar y analizar. Esto le brinda un punto de partida sólido para ver cómo el rastreo puede ayudarlo. Está activado de forma predeterminada en Go agente 3.16.0 y versiones posteriores.
* Infinite Tracing (muestreo tail-based): Nuestro servicio basado en la nube acepta todas sus trazas y luego las clasifica para encontrar las más importantes. Después de configurar el seguimiento estándar, le recomendamos agregar esta opción porque analiza toda su traza y le brinda opciones de configuración para tomar muestras de la traza que más le importa.

Todos los pasos que necesitas para empezar con rastreo distribuido están aquí:

* [New Go agente:](#new-agents) Pasos para el muestreo al tail-based y head-based para la instalación del nuevo agente
* [Go agente más antiguo:](#older-agents) opciones de seguimiento si tienes un Go agente más antiguo
* [Instrumentación manual:](#guidelines) Consejos para instrumentación adicional

## Nuevo agente Go [#new-agents]

Ya sea que solo desee probar el rastreo distribuido estándar (muestreo head-based) o también desee configurar Infinite Tracing (muestreo tail-based), debe comenzar configurando el rastreo estándar. Lo guiaremos a través de la instalación del agente <InlinePopover type="apm"/>para poner en marcha el muestreo head-based. Después de eso, puedes configurar Infinite Tracing, que es opcional pero recomendado.

<Callout variant="tip">
  El agente Go requiere que instrumentes manualmente tus servicios Go, a diferencia de la instrumentación automática de los otros agentes de New Relic. Esto significa que necesita agregar algunas líneas a su código para usar el agente Go y habilitar rastreo distribuido.
</Callout>

### Instale un agente para obtener rastreo estándar distribuido [#quick-start-apm]

Este es el mejor enfoque para configurar [el rastreo distribuido estándar](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#head-based) si aún no ha instalado ningún agente APM para sus servicios o si desea implementar servicios adicionales.

Si ya tiene algunos servicios instrumentados con este agente APM y desea incluirlos en rastreo distribuido, deberá habilitar rastreo distribuido manualmente para cada servicio. Consulte [Opciones para agentes Go más antiguos](#older-agents).

<Callout variant="tip">
  Necesitará una cuenta de New Relic para configurar rastreo distribuido. Si aún no tiene una, puede [crear rápidamente una cuenta gratuita](https://newrelic.com/signup).
</Callout>

#### Paso 1. Identificar servicios [#identify]

Averigüe qué servicios se relacionan con su solicitud para que pueda instrumentar cada uno de ellos para enviar datos de traza a New Relic.

#### Paso 2. Instrumentar cada servicio con un agente de APM [#update-agents]

Repetirás la rutina de instalación del agente para cada servicio involucrado en tu transacción. Si algunos de sus servicios utilizan otros idiomas, simplemente repita los [pasos de instalación](/docs/distributed-tracing/enable-configure/quick-start) para esos idiomas.

Para iniciar la rutina de instalación, haga clic en el mosaico a continuación. Cuando haya terminado de instalar cada agente, regrese aquí para ver consejos para [ver su traza](#view-traces).

<TechTileGrid>
  <TechTile
    name="Start installation"
    to="https://one.newrelic.com/launcher/nr1-core.settings?pane=eyJuZXJkbGV0SWQiOiJ0dWNzb24ucGxnLWluc3RydW1lbnQtZXZlcnl0aGluZyJ9&cards[0]=eyJuZXJkbGV0SWQiOiJzZXR1cC1uZXJkbGV0cy5zZXR1cC1nby1pbnRlZ3JhdGlvbiIsImFjY291bnRJZCI6MjY0MDQwOX0=&platform[accountId]=2498654&platform[timeRange][duration]=1800000&platform[$isFallbackTimeRange]=true"
    icon={<img variant="TechTile" src="/images/apm_logo_Go-logo.webp" alt="Golang"/>}
  />
</TechTileGrid>

#### Paso 3. Ver traza [#view-traces]

Después de instrumentar cada uno de sus servicios con el agente APM, genere algo de tráfico en su aplicación para que podamos capturar alguna traza. A continuación se muestran algunas formas de ver su traza en la UI:

<CollapserGroup>
  <Collapser
    id="entity-explorer"
    title="Ver trazas que incluyen un servicio específico"
  >
    A continuación se muestra una forma de ver la traza de un servicio en particular:

    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services**
       </DNT>

       .

    2. Haga clic en su entidad (servicio).

    3. En la sección

       <DNT>
         **Monitor**
       </DNT>

       del panel izquierdo, haga clic en

       <DNT>
         **Distributed tracing**
       </DNT>

       .

    4. Para más detalles, haga clic en una traza individual. Si

       <DNT>
         **Group similar traces**
       </DNT>

       está activado en el menú superior, haga clic en un grupo de trazas y luego haga clic en una traza individual.

    5. Si no ves la traza que quieres, puedes filtrar por el `trace.id`.
  </Collapser>

  <Collapser
    id="cross-acct-traces"
    title="Ver traza entre cuentas"
  >
    Para ver traza que cruza cuentas:

    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Traces**
       </DNT>

       .

    2. Seleccione su entidad (servicio) en el panel izquierdo.

    3. Para más detalles, haga clic en una traza individual. Si

       <DNT>
         **Group similar traces**
       </DNT>

       está activado en el menú superior, haga clic en un grupo de trazas y luego haga clic en una traza individual.

    4. Si no ves la traza que quieres, puedes filtrar por el `trace.id`.
  </Collapser>

  <Collapser
    id="logs-context"
    title="Examinar el registro relacionado con la traza."
  >
    Puede reunir su registro y los detalles de seguimiento para que la resolución de problemas sea más fácil y rápida. Con [el contexto de inicio de sesión](/docs/logs/logs-context/configure-logs-context-apm-agents/), puede ver el mensaje de inicio de sesión junto con la traza en la UI de New Relic.

    Luego de haber localizado una traza interesante siguiendo los pasos en [Ver traza que incluye un servicio específico](#entity-explorer) o [Ver traza entre cuentas](#cross-acct-traces), haga lo siguiente:

    1. Si ha habilitado el contexto de inicio de sesión, haga clic en la pestaña

       <DNT>
         **Logs**
       </DNT>

       (al lado de

       <DNT>
         **Trace details**
       </DNT>

       ).

    2. Para ver detalles relacionados con un log individual, haga clic directamente en el mensaje.
  </Collapser>
</CollapserGroup>

Para obtener más ayuda para encontrar su traza en la UI:

* [Comprender y utilizar la UIde rastreo distribuido](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui)
* [Consulta rastreo datos distribuidos](/docs/understand-dependencies/distributed-tracing/ui-data/query-distributed-trace-data)

### Configurar el seguimiento infinito [#infinite-tracing]

El rastreo distribuido estándar para el agente APM ([arriba](#quick-start-apm)) captura hasta el 10% de su traza, pero si desea que analicemos todos sus datos y encontremos la traza más relevante, puede configurar Infinite Tracing.

<Callout variant="tip">
  Para obtener más información sobre esta característica, consulte [Seguimiento infinito](/docs/understand-dependencies/distributed-tracing/infinite-tracing/introduction-infinite-tracing).
</Callout>

Antes de comenzar, primero asegúrese de cumplir con [los requisitos](/docs/understand-dependencies/distributed-tracing/infinite-tracing/introduction-infinite-tracing#requirements).

#### Paso 1. Complete la instalación del nuevo agente [#install-agents-first]

La configuración de Infinite Tracing se basa en el paso de instrumentación del [Nuevo agente de instalación](#quick-start-apm) para rastreo distribuido estándar.

#### Paso 2. Configurar el observador de trazas [#provision-trace-observer]

El observador de trazas es un servicio de New Relic basado en AWS que recopila y analiza todas sus trazas. Siga las instrucciones en [Configurar traza observer](/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer). Cuando haya terminado, regrese aquí con su información de observador de traza y continúe con el siguiente paso para configurar el agente.

#### Paso 3: Configurar el agente para Infinite Tracing [#configure-agent-inf]

Los ajustes de configuración de Infinite Tracing incluyen el rastreo estándar distribuido más información sobre el observador de traza:

<CollapserGroup>
  <Collapser
    id="go-config"
    title="Configuración de Go Infinite Tracing"
  >
    Aquí hay una descripción general de la configuración.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Tipo
          </th>

          <th>
            Configuración requerida
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Rastreo infinito
          </td>

          <td>
            Opciones de configuración:

            * `newrelic.Config` estructura:

              ```go
              app, err := newrelic.NewApplication(
                  newrelic.ConfigAppName(YOUR_APP_NAME),
                  newrelic.ConfigLicense(YOUR_LICENSE_KEY),
                  func(cfg *newrelic.Config) {
                      cfg.InfiniteTracing.TraceObserver.Host = YOUR_TRACE_OBSERVER_HOST
                  },
              )
              ```

            * Variable ambiental:

              ```
              NEW_RELIC_INFINITE_TRACING_TRACE_OBSERVER_HOST=<a href="/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer#ui-endpoints">YOUR_TRACE_OBSERVER_HOST</a>
              ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

#### Paso 4. (Opcional) Personaliza el seguimiento infinito [#customize-inf-tracing]

Después de agregar los ajustes de configuración del agente, debería comenzar a ver datos en la UI de New Relic. Después de pasar algún tiempo analizando sus datos, es posible que desee ajustar algunas de las características de Infinite Tracing:

* [Configurar monitoreo de observador de trazas](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-trace-observer-monitoring)
* [Configurar filtro de traza de atributo span](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-span-attribute-trace-filter)
* [Configurar filtro de traza aleatorio](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-random-trace-filter)

## Opciones para agentes Go mayores [#older-agents]

Si tiene un Go agente anterior, use esta sección para determinar si la característica de distribución de rastreo que desea es compatible.

Después de la información de compatibilidad hay una sección que muestra los ajustes de configuración básicos para activar el rastreo distribuido estándar. Si su agente anterior admite Infinite Tracing y desea configurarlo, consulte los pasos [anteriores](#infinite-tracing).

### Guía de compatibilidad [#compatibility-guide]

Después de revisar la información de compatibilidad a continuación, siga los ajustes de configuración:

<CollapserGroup>
  <Collapser
    id="go-version"
    title="Compatibilidad del agente Go"
  >
    [Instale](/docs/agents/go-agent/installation/install-new-relic-go) o [actualice](/docs/agents/go-agent/installation/install-new-relic-go) a la versión requerida del agente Go. Para obtener mejores resultados, actualice a la [última versión del agente Go](/docs/release-notes/agent-release-notes/go-release-notes).

    <table>
      <thead>
        <tr>
          <th style={{ width: "250px" }}>
            Opción
          </th>

          <th>
            Versión del agente Go
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Rastreo estándar distribuido
          </td>

          <td>
            2.1.0 o mas alto

            Con W3C Trace Context: 3.1.0 o mas alto
          </td>
        </tr>

        <tr>
          <td>
            Rastreo infinito
          </td>

          <td>
            v3.5.0 (incluye W3C Trace Context)

            Entornos compatibles: Go 1.9 o superior
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

### Configura tu agente Go anterior [#configure-agents]

Consulte la configuración a continuación para habilitar rastreo distribuido.

<Callout variant="tip">
  Si ha estado usando un agente antiguo sin rastreo distribuido, antes de activar rastreo distribuido, consulte [Impactos en APM](/docs/apm/distributed-tracing/getting-started/transition-guide-distributed-tracing).
</Callout>

<CollapserGroup>
  <Collapser
    id="go-config-standard"
    title="Configuración del agente Go"
  >
    Aquí hay una descripción general de la configuración. Para obtener más ayuda con la configuración, consulte [Configuración del agente Go](/docs/apm/agents/go-agent/configuration/go-agent-configuration#distributed-tracing).

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Tipo
          </th>

          <th>
            Configuración requerida
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Rastreo estándar distribuido
          </td>

          <td>
            Opciones de configuración:

            * `ConfigOption` estructura:

              ```go
              newrelic.NewApplication(
                  newrelic.ConfigAppName("Example App"),
                  newrelic.ConfigLicense(os.Getenv("NEW_RELIC_LICENSE_KEY")),
                  newrelic.ConfigDistributedTracerEnabled(true),
              )
              ```

            * Variable ambiental:

              ```
              NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
              ```
          </td>
        </tr>

        <tr>
          <td>
            Rastreo infinito
          </td>

          <td>
            Si su agente anterior admite Infinite Tracing, consulte los pasos de configuración [anteriores](#infinite-tracing).
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Instrumentación manual adicional [#guidelines]

Toda instalación del agente Go y el seguimiento distribuido requieren cierta instrumentación manual utilizando las configuraciones enumeradas en [Configuración del agente Go](/docs/agents/go-agent/configuration/go-agent-configuration#distributed-tracing). Aún así, es posible que necesites realizar alguna configuración adicional para optimizar tu configuración. Aquí hay algunas pautas para transacciones instrumentadas y solicitudes HTTP.

<CollapserGroup>
  <Collapser
    id="create-transactions"
    title="Transacción de instrumento (si usa ServeMux)"
  >
    Si está utilizando [`http.ServeMux`](https://golang.org/pkg/net/http/#ServeMux) de Go y desea habilitar el rastreo distribuido de New Relic, su aplicación Go debe estar instrumentada con los contenedores `WrapHandle` y `WrapHandleFunc` de New Relic. Estos contenedores inician y finalizan automáticamente la transacción con el escritor de solicitud y respuesta, que agregará automáticamente los encabezados de rastreo distribuidos correctos. Para obtener más información sobre cómo funciona la propagación de encabezados, consulte [Cómo funciona rastreo distribuido](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works).

    <CollapserGroup>
      <Collapser
        id="example-go-instrumentation"
        title="Ejemplo de antes y después"
      >
        Aquí hay un ejemplo de código antes de la instrumentación:

        ```go
        http.HandleFunc("/users", usersHandler)
        ```

        Y aquí hay un ejemplo de ese mismo código después de la instrumentación:

        ```go
        http.HandleFunc(newrelic.WrapHandleFunc(app, "/users", usersHandler))
        ```
      </Collapser>
    </CollapserGroup>

    Lea más sobre el uso de estos envoltorios en [el instrumento Go transacción](/docs/agents/go-agent/get-started/instrument-go-transactions#http-handler-txns).
  </Collapser>

  <Collapser
    id="make-http-requests"
    title="Utilizar solicitudes HTTP salientes como segmentos externos."
  >
    Para que sus solicitudes HTTP salientes sean elegibles para rastreo distribuido, [cree un segmento externo](/docs/agents/go-agent/get-started/instrument-go-segments#go-external-segments).

    La forma más sencilla de crear un segmento externo para su solicitud HTTP saliente es utilizar el método `newrelic.NewRoundTripper` . A continuación se muestra un ejemplo de cómo realizar una solicitud a `http://api.example.com` que incluye los encabezados de rastreo distribuido salientes:

    ```go
    func useNewRoundTripper(txn *newrelic.Transaction) (*http.Response, error) {
        client := &http.Client{}
        client.Transport = newrelic.NewRoundTripper(client.Transport)
        request, _ := http.NewRequest("GET", "http://example.com", nil)
        request = newrelic.RequestWithTransactionContext(request, txn)
        return client.Do(request)
    }
    ```

    Si tiene una solicitud más compleja que utiliza la biblioteca estándar de Go `http.Request`, utilice el método `newrelic.StartExternalSegment` para asegurarse de que su solicitud saliente sea apta para rastreo distribuido:

    ```go
    func external(txn *newrelic.Transaction, req *http.Request) (*http.Response, error) { 
        s := newrelic.StartExternalSegment(txn, req) 
        response, err := http.DefaultClient.Do(req) 
        s.Response = response 
        s.End() 
        return response, err
    }
    ```

    Un `ExternalSegment` creado con una estructura literal no se puede utilizar para rastreo distribuido. Debido a esto, New Relic recomienda usar [`newrelic.NewRoundTripper` o `newrelic.StartExternalSegment`](/docs/agents/go-agent/get-started/instrument-go-segments#go-external-segments).

    ```go
    func noGoodForDt(txn *newrelic.Transaction, url string) (*http.Response, error) {
        // Distributed tracing headers are not added to the outgoing request.
        // Use newrelic.NewRoundTripper or newrelicc.StartExternalSegment instead.
        defer newrelic.ExternalSegment{
            StartTime: txn.StartSegmentNow(),
            URL:       url,
        }.End()

        return http.Get(url)
    }
    ```
  </Collapser>

  <Collapser
    id="create-manually"
    title="Crear y aceptar manualmente la carga útil de rastreo distribuido"
  >
    La carga útil del rastreo distribuido contiene información que permite a New Relic unir las transacciones que ocurren en múltiples servicios en una traza de la transacción completa. Si los servicios de New Relic-monitor no se envían el contexto de traza entre sí, se obtendrán detalles de traza incompletos.

    Para obtener instrucciones generales sobre cómo usar la API de llamada a continuación para implementar rastreo distribuido, primero consulte [Usar las API de rastreo distribuido](/docs/enable-distributed-tracing#agent-apis).

    <table>
      <thead>
        <tr>
          <th>
            Si quieres...
          </th>

          <th>
            Utilizar esta
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Cree una carga útil para enviarla al servicio llamado.
          </td>

          <td>
            ```go
            <a href="https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#Transaction.InsertDistributedTraceHeaders">InsertDistributedTraceHeaders(h http.Header)</a>
            ```
          </td>
        </tr>

        <tr>
          <td>
            Aceptar una carga útil enviada desde el primer servicio; esto unirá estos servicios en una traza.
          </td>

          <td>
            ```go
            <a href="https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#Transaction.AcceptDistributedTraceHeaders">AcceptDistributedTraceHeaders(h http.Header)</a>
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

Para obtener más detalles sobre su uso, consulte el [repositorio de GitHub del agente Go](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#distributed-tracing).
