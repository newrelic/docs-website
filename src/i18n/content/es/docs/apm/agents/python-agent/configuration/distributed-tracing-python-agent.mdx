---
title: Rastreo distribuido para tus servicios Python
tags:
  - Understand dependencies
  - Distributed tracing
  - Enable and configure
metaDescription: How to enable distributed tracing or Infinite Tracing for the APM Python agent.
freshnessValidatedDate: never
translationType: machine
---

Rastreo distribuido te permite ver el recorrido completo de tus solicitudes a lo largo de un [sistema distribuido](/docs/distributed-tracing/concepts/introduction-distributed-tracing). Para el agente Python ofrecemos dos tipos de rastreo distribuido. Para obtener más detalles, consulte [Cómo funciona el muestreo de intervalos](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#sampling):

* Estándar (muestreo head-based): Antes de que llegue cualquier traza, determinamos un porcentaje determinado de traza para aceptar y analizar. Esto le brinda un punto de partida sólido para ver cómo el rastreo puede ayudarlo. Está activado de forma predeterminada en Python agente 7.0.0.166 y superiores.
* Infinite Tracing (muestreo tail-based): Nuestro servicio basado en la nube acepta todas sus trazas y luego las clasifica para encontrar las más importantes. Después de configurar el seguimiento estándar, le recomendamos agregar esta opción porque analiza toda su traza y le brinda opciones de configuración para tomar muestras de la traza que más le importa.

Todos los pasos que necesitas para empezar con rastreo distribuido son estos:

* [Nuevo agente Python](#new-agents): Pasos para la cabeza y muestreo tail-based para la instalación del nuevo agente
* [Agente Python anterior](#older-agents): opciones de seguimiento si tiene un agente Python anterior
* [Instrumentación manual](#manual-instrumentation): Consejos si la instrumentación automática no funciona

## Nuevo agente Python [#new-agents]

Ya sea que solo desee probar el rastreo distribuido estándar (muestreo head-based) o también desee configurar Infinite Tracing (muestreo tail-based), debe comenzar configurando el rastreo estándar. Lo guiaremos a través de la instalación del agente APM para poner en marcha el muestreo head-based. Después de eso, puedes configurar Infinite Tracing, que es opcional pero recomendado.

### Instale un agente para obtener rastreo estándar distribuido [#quick-start-apm]

Este es el mejor enfoque para configurar [el rastreo distribuido estándar](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#head-based) si aún no ha instalado ningún agente APM para sus servicios o si desea implementar servicios adicionales.

Si ya tiene algunos servicios instrumentados con este agente APM y desea incluirlos en rastreo distribuido, deberá habilitar rastreo distribuido manualmente para cada servicio. Consulte [Opciones para agentes Python anteriores](#older-agents).

<Callout variant="tip">
  Necesitará una cuenta de New Relic para configurar rastreo distribuido. Si aún no tiene una, puede [crear rápidamente una cuenta gratuita](https://newrelic.com/signup).
</Callout>

#### Paso 1. Identificar servicios [#identify]

Averigüe qué servicios desea instrumentar para que cada uno envíe datos de traza a New Relic.

#### Paso 2. Instrumentar cada servicio con un agente de APM [#update-agents]

Repetirás la rutina de instalación del agente para cada servicio involucrado en tu transacción. Si algunos de sus servicios utilizan otros idiomas, simplemente repita los [pasos de instalación](/docs/distributed-tracing/enable-configure/quick-start) para esos idiomas.

Para iniciar la rutina de instalación, haga clic en el mosaico a continuación. Cuando haya terminado de instalar cada agente, regrese aquí para ver consejos para [ver su traza](#view-traces).

<TechTileGrid>
  <TechTile
    name="Start installation"
    variant="TechTile"
    to="https://one.newrelic.com/launcher/nr1-core.settings?pane=eyJuZXJkbGV0SWQiOiJ0dWNzb24ucGxnLWluc3RydW1lbnQtZXZlcnl0aGluZyJ9&cards[0]=eyJuZXJkbGV0SWQiOiJzZXR1cC1uZXJkbGV0cy5zZXR1cC1weXRob24taW50ZWdyYXRpb24iLCJhY2NvdW50SWQiOjI2NDA0MDl9&platform[accountId]=2498654&platform[timeRange][duration]=1800000&platform[$isFallbackTimeRange]=true"
    icon={<img src="/images/apm_logo_python.webp" alt="Python"/>}
  />
</TechTileGrid>

### Paso 3. Ver traza [#view-traces]

Después de instrumentar cada uno de sus servicios con el agente APM, genere algo de tráfico en su aplicación para que podamos capturar alguna traza. Aquí hay dos formas de ver su traza en la UI:

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

Antes de comenzar, primero asegúrese de cumplir con [los requisitos](/docs/distributed-tracing/infinite-tracing/introduction-infinite-tracing/#requirements).

#### Paso 1. Complete la instalación del nuevo agente [#install-agents-first]

La configuración de Infinite Tracing se basa en el paso de instrumentación de la [instalación del nuevo agente](#quick-start-apm) para el rastreo distribuido estándar. Después de terminar de instalar el agente, continúe con la configuración del observador de traza.

### Paso 2. Configurar el observador de trazas [#provision-trace-observer]

El observador de trazas es un servicio de New Relic basado en AWS que recopila y analiza todas sus trazas. Siga las instrucciones en [Configurar traza observer](/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer). Cuando haya terminado, regrese aquí con su información de observador de traza y continúe con el siguiente paso para configurar el agente.

#### Paso 3: Configurar el agente para Infinite Tracing [#configure-agent-inf]

Los ajustes de configuración de Infinite Tracing incluyen el rastreo estándar distribuido más información sobre el observador de traza. Tenga en cuenta que la configuración del lado del servidor no está disponible para Infinite Tracing.

<CollapserGroup>
  <Collapser
    id="python-config"
    title="Configuración de seguimiento infinito de Python"
  >
    Aquí hay una descripción general de la configuración. Para obtener más ayuda con la configuración, consulte [Configuración del agente Python.](/docs/apm/agents/python-agent/configuration/python-agent-configuration/#dt-main)

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
            Despliegue la biblioteca con este comando de instalación y luego configure el archivo de configuración o las variables de entorno:

            ```bash
            pip install newrelic[infinite-tracing]
            ```

            <DNT>
              **General configuration options:**
            </DNT>

            Archivo de configuración (`newrelic.ini`):

            ```ini
            distributed_tracing.enabled = true
            infinite_tracing.trace_observer_host = YOUR_TRACE_OBSERVER_HOST
            ```

            Variables de entorno:

            ```ini
            NEW_RELIC_DISTRIBUTED_TRACING_ENABLED = true
            NEW_RELIC_INFINITE_TRACING_TRACE_OBSERVER_HOST = "YOUR_TRACE_OBSERVER_HOST"
            ```

            <DNT>
              **Batching and compression configuration options:**
            </DNT>

            A partir de la versión 8.7.0, el agente Python admite tanto el procesamiento por lotes como la compresión. Ambas configuraciones están predeterminadas en verdaderas y se pueden alternar con las siguientes opciones:

            Archivo de configuración (`newrelic.ini`):

            ```ini
            infinite_tracing.batching = true # Send spans to the trace observer in batches rather than one by one
            infinite_tracing.compression = true # Enable gzip compression for data sent via Infinite Tracing
            ```

            Variables de entorno:

            ```ini
            NEW_RELIC_INFINITE_TRACING_BATCHING = true
            NEW_RELIC_INFINITE_TRACING_COMPRESSION = true
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

<Callout variant="tip">
  Si necesita ayuda con la configuración del proxy, consulte [Soporte de proxy](/docs/understand-dependencies/distributed-tracing/other-requirements/infinite-tracing-proxy-support).
</Callout>

#### Paso 4. (Opcional) Personaliza el seguimiento infinito [#customize-inf]

Después de agregar los ajustes de configuración del agente, debería comenzar a ver datos en la UI de New Relic. Después de pasar algún tiempo analizando sus datos, es posible que desee ajustar algunas de las características de Infinite Tracing:

* [Configurar monitoreo de observador de trazas](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-trace-observer-monitoring)
* [Configurar filtro de traza de atributo span](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-span-attribute-trace-filter)
* [Configurar filtro de traza aleatorio](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-random-trace-filter)

## Opciones para agentes Python más antiguos [#older-agents]

Si tiene un agente Python anterior, confirme que la característica distribuida de rastreo que desea sea compatible antes de habilitarla.

### Guía de compatibilidad

Después de revisar la información de compatibilidad a continuación, consulte [Configurar su agente Python anterior](#configure-agents).

<CollapserGroup>
  <Collapser
    id="python-version"
    title="Compatibilidad del agente Python"
  >
    [Instale](/docs/agents/python-agent/installation/standard-python-agent-install) o [actualice](/docs/agents/python-agent/installation-configuration/upgrade-python-agent) a la versión requerida del agente Python. Para obtener mejores resultados, actualice a la [última versión del agente Python](/docs/release-notes/agent-release-notes/python-release-notes).

    <table>
      <thead>
        <tr>
          <th style={{ width: "250px" }}>
            Opción
          </th>

          <th>
            Versión del agente Python
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Rastreo estándar distribuido
          </td>

          <td>
            4.2.0.100 o superior

            Con W3C Trace Context: 5.6 o superior
          </td>
        </tr>

        <tr>
          <td>
            Rastreo infinito
          </td>

          <td>
            5.12.0.140 (incluye W3C Trace Context)

            Entornos compatibles: solo CPython (pypy no es compatible)
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

### Configura tu antiguo agente Python [#configure-agents]

Consulte la configuración a continuación para habilitar rastreo distribuido.

<Callout variant="tip">
  Si ha estado usando un agente antiguo sin rastreo distribuido, antes de activar rastreo distribuido, consulte [Impactos en APM](/docs/apm/distributed-tracing/getting-started/transition-guide-distributed-tracing).
</Callout>

<CollapserGroup>
  <Collapser
    id="python-config-standard"
    title="Configuración del agente Python"
  >
    Aquí hay una descripción general de la configuración. Para obtener más ayuda con la configuración, consulte [Configuración del agente Python](/docs/apm/agents/python-agent/configuration/python-agent-configuration#dt-main).

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
            Archivo de configuración (`newrelic.ini`):

            ```ini
            distributed_tracing.enabled = true
            ```

            Variable ambiental:

            ```ini
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

## Instrumentación manual (Si no funciona la instrumentación automática) [#manual-instrumentation]

<DNT>**Recommendation:**</DNT> Antes de realizar cualquier instrumentación personalizada, lea:

* [Cómo funciona el rastreo distribuido](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works)
* [Solucionar problemas de datos faltantes](/docs/apm/distributed-tracing/troubleshooting/troubleshooting-missing-trace-data)

Si un servicio no pasa el encabezado de rastreo a otros servicios, puede usar las API de carga útil distribuidas de rastreo para instrumentar el [servicio que llama](#calling-service) y el [servicio llamado](#called-service). El servicio de llamada utiliza una llamada API para generar una carga útil, que es aceptada por el servicio llamado.

<CollapserGroup>
  <Collapser
    id="calling-service"
    title="Instrumento el servicio de llamadas"
  >
    Para instrumentar el servicio de llamadas:

    1. Asegúrese de que la [versión del agente APM](#compatibility-requirements) que monitorea el servicio de llamadas sea compatible con rastreo distribuido.

    2. Invoque la llamada API del agente para generar una carga útil distribuida de rastreo (consulte la [API del agente Python](/docs/agents/python-agent/python-agent-api/create_distributed_trace_payload)).

       <Callout variant="important">
         Para mantener el orden correcto de los tramos en una traza, asegúrese de <DNT>**generate the payload in the context of the span that sends it**</DNT>.
       </Callout>

    3. Agregue esa carga útil a la llamada realizada al servicio de destino (por ejemplo, en un encabezado).

    4. (Opcional) Identifique la llamada como una llamada externa (consulte la [API del agente Python](/docs/agents/python-agent/python-agent-api/external-trace)).
  </Collapser>

  <Collapser
    id="called-service"
    title="Instrumento el servicio llamado"
  >
    Para instrumentar el servicio llamado:

    1. Asegúrese de que la [versión del agente APM](#compatibility-requirements) que monitorea el servicio llamado admita rastreo distribuido.

    2. Si el agente New Relic en el servicio llamado no identifica una transacción New Relic, use la API del agente para declarar una transacción. Esta es una forma de saber que una transacción no está en progreso: cuando se ejecuta `transaction = current_transaction()` , `transaction` es `None`. O, si se ejecuta `result = accept_distributed_trace_payload(payload)` , entonces el resultado es `False`.

       Utilice [`background_task`](/docs/agents/python-agent/python-agent-api/background_task) para reportar una [transacción no web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions#define). Para obtener más información sobre la instrumentación de Python, consulte [monitor transacciones y segmentos](/docs/agents/python-agent/api-guides/guide-using-python-agent-api#transaction-segments).

    3. Extraiga la carga útil de la llamada que recibió (por ejemplo, en un encabezado).

    4. Invoque la llamada para aceptar la carga útil (consulte la [API del agente Python](/docs/agents/python-agent/python-agent-api/accept_distributed_trace_payload).
  </Collapser>
</CollapserGroup>
