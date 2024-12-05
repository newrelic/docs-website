---
title: Rastreo distribuido para tus servicios PHP
tags:
  - Agents
  - PHP agent
  - Features
metaDescription: How to enable distributed tracing or Infinite Tracing for the APM PHP agent.
freshnessValidatedDate: never
translationType: machine
---

Rastreo distribuido te permite ver el recorrido completo de tus solicitudes a lo largo de un [sistema distribuido](/docs/distributed-tracing/concepts/introduction-distributed-tracing). El agente PHP instrumentado automáticamente con rastreo distribuyó una serie de funciones PHP nativas, así como algunos clientes HTTP de terceros:

* Función PHP [`file_get_contents`](http://php.net/manual/en/function.file-get-contents.php)
* Funciones PHP [`curl_exec`](http://php.net/manual/en/function.curl-exec.php) y [`curl_multi_exec`](http://php.net/manual/en/function.curl-multi-exec.php)
* Trago 4, Trago 5, Trago 6
* Drupal `drupal_http_request function`
* Trabajos en cola de Laravel

Para el agente PHP, ofrecemos dos tipos de rastreo distribuido (para más detalles, consulte [Cómo funciona el muestreo de intervalo](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#sampling)):

* Estándar (muestreo head-based): Antes de que llegue cualquier traza, determinamos un porcentaje determinado de traza para aceptar y analizar. Esto le brinda un punto de partida sólido para ver cómo el rastreo puede ayudarlo. Está activado de forma predeterminada en agente PHP 9.21.0 y superior.
* Infinite Tracing (muestreo tail-based): Nuestro servicio basado en la nube acepta todas sus trazas y luego las clasifica para encontrar las más importantes. Después de configurar el seguimiento estándar, le recomendamos agregar esta opción porque analiza toda su traza y le brinda opciones de configuración para tomar muestras de la traza que más le importa.

Todos los pasos que necesitas para empezar con rastreo distribuido están aquí:

* [Nuevo agente PHP:](#new-agents) Pasos para head- y muestreo tail-based para la instalación del nuevo agente
* [Agente PHP más antiguo:](#older-agents) opciones de seguimiento si tiene un agente PHP más antiguo
* [Establecer nivel de detalle de la traza](#performance)
* [Aplicación y servicios de instrumento manual con API de agente PHP](#manual)

## Nuevo agente PHP [#new-agents]

Ya sea que solo desee probar el rastreo distribuido estándar (muestreo head-based) o también desee configurar Infinite Tracing (muestreo tail-based), debe comenzar configurando el rastreo estándar. Lo guiaremos a través de la instalación del agente APM para poner en marcha el muestreo head-based. Después de eso, puedes configurar Infinite Tracing, que es opcional pero recomendado.

### Instale un agente para obtener rastreo estándar distribuido [#quick-start-apm]

Este es el mejor enfoque para configurar [el rastreo distribuido estándar](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#head-based) si aún no ha instalado ningún agente APM para sus servicios o si desea implementar servicios adicionales.

Si ya tiene algunos servicios instrumentados con este agente APM y desea incluirlos en rastreo distribuido, deberá habilitar rastreo distribuido manualmente para cada servicio. Consulte [Opciones para agentes PHP más antiguos](#older-agents).

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
    variant="TechTile"
    to="https://one.newrelic.com/launcher/nr1-core.settings?pane=eyJuZXJkbGV0SWQiOiJ0dWNzb24ucGxnLWluc3RydW1lbnQtZXZlcnl0aGluZyJ9&cards[0]=eyJuZXJkbGV0SWQiOiJzZXR1cC1uZXJkbGV0cy5zZXR1cC1waHAtaW50ZWdyYXRpb24iLCJhY2NvdW50SWQiOjI2NDA0MDl9&platform[accountId]=2498654&platform[timeRange][duration]=1800000&platform[$isFallbackTimeRange]=true"
    icon={<img src="/images/phplogo.webp" alt="PHP"/>}
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

La configuración de Infinite Tracing se basa en el paso de instrumentación de la [instalación del nuevo agente](#quick-start-apm) para el rastreo distribuido estándar. Después de terminar de instalar el agente, continúe con la configuración del observador de traza.

#### Paso 2. Configurar el observador de trazas [#provision-trace-observer]

El observador de trazas es un servicio de New Relic basado en AWS que recopila y analiza todas sus trazas. Siga las instrucciones en <a href="/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer" target="_blank">Configurar traza observer</a>. Cuando haya terminado, regrese aquí con su información de observador de traza y continúe con el siguiente paso para configurar el agente.

#### Paso 3: Configurar el agente para Infinite Tracing [#configure-agent-inf]

Los ajustes de configuración de Infinite Tracing incluyen el rastreo estándar distribuido más información sobre el observador de traza. Tenga en cuenta que la configuración del lado del servidor no está disponible para Infinite Tracing.

<CollapserGroup>
  <Collapser
    id="php-config"
    title="Configuración de seguimiento infinito de PHP"
  >
    Aquí hay una descripción general de la configuración. Para obtener más ayuda con la configuración, consulte [Configuración del agente PHP](/docs/apm/agents/php-agent/configuration/php-agent-configuration).

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

            * Archivo de configuración (`newrelic.ini`):

              ```ini
              newrelic.distributed_tracing_enabled = true
              newrelic.span_events_enabled = true
              newrelic.infinite_tracing.trace_observer.host= "<a href="/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer#ui-endpoints">YOUR_TRACE_OBSERVER_HOST</a>"
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

#### Paso 4. (Opcional) Personaliza el seguimiento infinito [#customize-agent-inf]

Después de agregar los ajustes de configuración del agente, debería comenzar a ver datos en la UI de New Relic. Después de pasar algún tiempo analizando sus datos, es posible que desee ajustar algunas de las características de Infinite Tracing:

* [Configurar monitoreo de observador de trazas](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-trace-observer-monitoring)
* [Configurar filtro de traza de atributo span](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-span-attribute-trace-filter)
* [Configurar filtro de traza aleatorio](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-random-trace-filter)

## Opciones para agentes PHP más antiguos [#older-agents]

Si tiene un agente PHP anterior, confirme que la característica de rastreo distribuido que desea sea compatible antes de habilitarla.

### Guía de compatibilidad [#compatibility]

Después de revisar la información de compatibilidad a continuación, consulte [Configurar su agente PHP anterior](#configure-agents).

<Collapser
  id="php-version"
  title="Compatibilidad del agente PHP"
>
  [Instale](/docs/agents/php-agent/getting-started/introduction-new-relic-php) o [actualice](/docs/agents/php-agent/installation/upgrade-php-agent) a la versión requerida del agente PHP. Para obtener mejores resultados, actualice a la [última versión del agente PHP](/docs/release-notes/agent-release-notes/php-release-notes).

  <table>
    <thead>
      <tr>
        <th style={{ width: "250px" }}>
          Opción
        </th>

        <th>
          Versión del agente PHP
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          Rastreo estándar distribuido
        </td>

        <td>
          8.4 o superior

          Con W3C Trace Context: 9.8 o superior
        </td>
      </tr>

      <tr>
        <td>
          Rastreo infinito
        </td>

        <td>
          9.12.0.268 o superior
        </td>
      </tr>
    </tbody>
  </table>
</Collapser>

### Configura tu antiguo agente PHP [#configure-agents]

Consulte la configuración a continuación para habilitar rastreo distribuido.

<Callout variant="tip">
  Si ha estado usando un agente antiguo sin rastreo distribuido, antes de activar rastreo distribuido, consulte [Impactos en APM](/docs/apm/distributed-tracing/getting-started/transition-guide-distributed-tracing).
</Callout>

<CollapserGroup>
  <Collapser
    id="php-config-standard"
    title="Configuración del agente PHP"
  >
    Aquí hay una descripción general de la configuración. Para obtener más ayuda con la configuración, consulte [rastreo distribuido para el agente PHP](/docs/apm/agents/php-agent/configuration/php-agent-configuration#inivar-distributed-enabled).

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
            Opciones del archivo de configuración en `newrelic.ini`:

            * Habilitar rastreo distribuido:

              ```ini
              newrelic.distributed_tracing_enabled = true
              ```

            * Establecer [rastreador de transacciones](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-settings)

              ```ini
              newrelic.transaction_tracer.enabled = true
              ```

            * Establezca [el umbral del rastreador de transacciones](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-threshold) en un valor adecuado:

              * Si desea que todas las transacciones sean elegibles para un rastreo distribuido, establezca este valor en `0` segundos.
              * Si solo está interesado en la traza para transacciones de mayor duración, o si generar una traza para cada transacción crea un rendimiento de la aplicación inaceptable, establezca este valor en un valor superior a `0` segundos.

              ```ini
              newrelic.transaction_tracer.threshold = 0
              ```

            * Opcionalmente, si solo desea el seguimiento W3C Trace Context , puede desactivar los encabezados de rastreo distribuidos de New Relic en la opción de configuración `newrelic.distributed_tracing_exclude_newrelic_header`:

              ```ini
              newrelic.distributed_tracing_exclude_newrelic_header = 1
              ```

            * Habilite los tramos con la configuración:

              ```ini
              newrelic.span_events_enabled = true
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

## Establecer nivel de detalle de la traza [#performance]

El soporte de rastreo distribuido depende del [rastreador de transacciones](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-enable) del agente PHP. Cuando [el rastreo distribuido está habilitado](#enable-distributed), se crea un [tramo](/docs/apm/distributed-tracing/ui-data/distributed-tracing-attributes) para cada segmento visto por el rastreador de transacciones.

A medida que [se muestrean los intervalos](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works), el agente PHP dará prioridad a los intervalos relacionados con llamadas externas por encima de otros intervalos, que luego se registran en orden descendente de duración.

Si descubre que se informan demasiados intervalos sin importancia para las llamadas a funciones PHP, puede reducir el detalle del rastreador de transacciones configurando [`newrelic.transaction_tracer.detail`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-detail) en `0`. Luego puede usar la configuración [`newrelic.transaction_tracer.custom`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-custom) o el método API [`newrelic_add_custom_tracer`](/docs/agents/php-agent/php-agent-api/newrelic_add_custom_tracer) para agregar segmentos y tramos de traza para la función PHP específica o los métodos que desea agregar a su traza.

<Callout variant="important">
  Para las versiones del agente PHP 8.4 a 8.7: cuando rastreo distribuido está habilitado, estas versiones se comportan como si [`newrelic.transaction_tracer.detail`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-detail) estuviera configurado en `0` (como se describe anteriormente), lo que da como resultado que las llamadas a funciones de PHP no generen intervalos. Para obtener intervalos relacionados con llamadas a funciones PHP, actualice a la versión 9.0 o superior.
</Callout>

## Aplicación y servicios de instrumento manual con API de agente PHP [#manual]

<Callout variant="important">
  La compatibilidad con W3C Trace Context se agregó en la versión 9.8. Con esto, la API para aplicaciones instrumentadas manualmente ha cambiado de las funciones relacionadas con la carga útil JSON:

  ```php
  newrelic_create_distributed_trace_payload()
  newrelic_accept_distributed_trace_payload($payload)
  ```

  A los formularios de matriz de encabezado:

  ```php
  newrelic_insert_distributed_trace_headers($outbound_headers)
  newrelic_accept_distributed_trace_headers($inbound_headers)
  ```

  Las funciones JSON ahora se consideran obsoletas y se eliminarán en una versión futura.
</Callout>

Si está utilizando una biblioteca no compatible o tiene un componente de sistemas distribuidos no basado en HTTP (como cola de mensajes), puede usar la API del agente PHP para identificar manualmente las transacciones que se incluirán en un rastreo distribuido. Este es un proceso de dos pasos:

1. Modifica tu servicio o aplicación a

   <DNT>
     **create**
   </DNT>

   o

   <DNT>
     **insert**
   </DNT>

   los datos del rastreo distribuido

2. Modifique su servicio o aplicación a

   <DNT>
     **accept**
   </DNT>

   datos de rastreo distribuido creados por otras transacciones o solicitudes.

El siguiente ejemplo utiliza una cola genérica de mensajes/trabajos. Si bien los detalles reales variarán según el tipo de sistema que intente agregar a un rastreo distribuido, los conceptos básicos son los mismos. Además, aunque hemos utilizado una cola de trabajos como ejemplo, puedes utilizar estos métodos con el componente <DNT>**any**</DNT> sistemas distribuidos.

<Callout variant="tip">
  Cuando <DNT>**create a payload**</DNT> o <DNT>**insert headers**</DNT>, le estás diciendo a New Relic que deseas que esta solicitud o transacción o solicitud participe en un rastreo distribuido. Cuando los <DNT>**accept**</DNT> , vincula la solicitud o transacción actual con su solicitud o transacción principal.
</Callout>

Para obtener más información sobre el uso de instrumentación manual para obtener más detalles o ver conexiones entre servicios, consulte la documentación sobre [las API de rastreo distribuida](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis).

### API de encabezado [#header-api]

<CollapserGroup>
  <Collapser
    id="example-dt-create"
    title="Insertar encabezados de rastreo distribuido"
  >
    En algún lugar de su aplicación tendrá un código que se verá o actuará como el siguiente:

    ```php
    // create a job object
    $job = new \Generic\Queue\Job;

    // set the information needed to run the queue job
    $job->setData('info', $info);

    // save the job
    $job->save();
    ```

    Si desea que este trabajo aparezca en un rastreo distribuido, debe insertar encabezados de rastreo distribuido en una matriz usando `newrelic_insert_distributed_trace_headers` y luego agregar esos encabezados a los datos del trabajo:

    ```php
    $outbound_headers = array();
    if (newrelic_insert_distributed_trace_headers($outbound_headers)) {

        // create a job object
        $job = new \Generic\Queue\Job;

        // set the information needed to run the queue job
        $job->setData('info', $info);

        // add the headers to the job data
        $job->setData('nr_dt_headers', $outbound_headers);

        // save the job
        $job->save();
    } else {
        echo "Unable to obtain distributed tracing headers";
    }
    ```

    <Callout variant="tip">
      Consejo: Los encabezados creados a través de `newrelic_insert_distributed_trace_headers()` son seguros para HTTP.
    </Callout>

    Este es el primer paso: has insertado los encabezados del rastreo distribuido.
  </Collapser>

  <Collapser
    id="example-dt-accept"
    title="Aceptar los encabezados del rastreo distribuido"
  >
    A continuación, en algún lugar de stack de su aplicación tendrá un corredor de cola que se ve o actúa como el siguiente:

    ```php
    // create the job runner
    $jobRunner = \Generic\Queue\Runner;

    // grab jobs until there aren't any
    while($job = $jobRunner->next()) {
        // run the job
        $job->run();
    }
    ```

    Para aceptar encabezados de rastreo distribuido, use la función `newrelic_accept_distributed_trace_headers`

    ```php
    // create the job runner
    $jobRunner = \Generic\Queue\Runner;

    while($job = $jobRunner->next()) {
        $inbound_headers = $job->getData('nr_dt_headers');
        if($inbound_headers) {
            newrelic_accept_distributed_trace_headers($inbound_headers);
        }
        $job->run();
    }
    ```
  </Collapser>
</CollapserGroup>

### API de carga útil (obsoleta)

<CollapserGroup>
  <Collapser
    id="example-dt-create"
    title="Crear una carga útil de rastreo distribuido"
  >
    En algún lugar de su aplicación tendrá un código que se verá o actuará como el siguiente:

    ```php
    // create a job object
    $job = new \Generic\Queue\Job;

    // set the information needed to run the queue job
    $job->setData('info', $info);

    // save the job
    $job->save();
    ```

    Si desea que este trabajo aparezca en un rastreo distribuido, debe crear una carga útil de rastreo distribuido usando `newrelic_create_distributed_trace_payload` y luego agregar esa carga útil a los datos del trabajo:

    ```php
    $payload = newrelic_create_distributed_trace_payload();

    // create a job object
    $job = new \Generic\Queue\Job;

    // set the information needed to run the queue job
    $job->setData('info', $info);

    // add the payload data to the job data as a text json string
    $job->setData('dt_payload', $payload->Text());

    // save the job
    $job->save();
    ```

    Este es el paso uno: has creado una carga útil de rastreo distribuido.
  </Collapser>

  <Collapser
    id="example-dt-accept"
    title="Aceptar la carga útil del rastreo distribuido"
  >
    A continuación, en algún lugar de stack de su aplicación tendrá un corredor de cola que se ve o actúa como el siguiente:

    ```php
    // create the job runner
    $jobRunner = \Generic\Queue\Runner;

    // grab jobs until there aren't any
    while($job = $jobRunner->next()) {
        // run the job
        $job->run();
    }
    ```

    Para aceptar una carga útil de rastreo distribuido, use la función `newrelic_accept_distributed_trace_payload`

    ```php
    // create the job runner
    $jobRunner = \Generic\Queue\Runner;

    while($job = $jobRunner->next()) {
        $payload = $job->getData('dt_payload');
        if($payload) {
            newrelic_accept_distributed_trace_payload($payload);
        }
        $job->run();
    }
    ```
  </Collapser>

  <Collapser
    id="example-dt-accept"
    title="Opcional: utilice cadenas de carga útil HTTP seguras"
  >
    Si necesita transportar la carga útil a través de un mecanismo que requiere cadenas HTTP seguras (encabezados HTTP, cadenas de consulta URL, campos POST, etc.), la API incluye métodos y funciones distribuidos por rastreo que crearán y aceptarán versiones HTTP seguras de las cadenas. .

    ```php
    // create the HTTP safe payload string 
    $payload = newrelic_create_distributed_trace_payload();
    $httpSafePayload = $payload->httpSafe();

    // ...

    // accept the HTTP safe payload string
    newrelic_accept_distributed_trace_payload_httpsafe($httpSafePayload);
    ```
  </Collapser>
</CollapserGroup>

## Programas PHP de línea de comando [#command-line]

Los programas PHP ejecutados desde la línea de comando PHP siempre son muestreados por el rastreador distribuido del agente. Dependiendo de los programas que ejecutes, estos procesos podrían tener una sobrerrepresentación en tu colección de rastreo distribuido. En estas situaciones, puede optar por desactivar la instrumentación de línea de comando utilizando la configuración [`per-directory newrelic.enabled`](/docs/agents/php-agent/configuration/php-agent-configuration) en su `newrelic.ini files`.
