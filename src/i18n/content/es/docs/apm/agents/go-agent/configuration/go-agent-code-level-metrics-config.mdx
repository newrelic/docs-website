---
title: Ir a configuración métrica a nivel de código de agente
tags:
  - Agents
  - Go agent
  - Configuration
metaDescription: 'For the New Relic Go language agent, you can add source code context to your application traces, associating the trace data with the specific code being instrumented.'
freshnessValidatedDate: never
translationType: machine
---

Las métricas a nivel de código permiten a los desarrolladores que utilizan la [extensión New Relic CodeStream](/docs/codestream/observability/code-level-metrics) ver <InlinePopover type="apm"/>datos mostrados contextualmente en su IDE, junto con métodos individuales en el código. Esto permite a los desarrolladores ser más proactivos a la hora de abordar los problemas de rendimiento mientras escriben y revisan el código.

Cuando habilita la métrica a nivel de código, el agente Go adjuntará el atributo a los datos de la traza. Estos atributos muestran la ubicación en el código fuente de su aplicación responsable de las acciones instrumentadas por esa traza. Los datos que puedes ver incluyen:

* Nombre del archivo fuente
* Número de línea del archivo fuente
* Nombre de la función
* Namespace

Eche un vistazo a los ajustes de configuración del agente Go para ayudarle a controlar la recopilación de métricas a nivel de código. Después de completar la configuración, si necesita ayuda para encontrar los datos, consulte [Ver su métrica](#view-metrics). Si desea tener más control sobre cómo se recopilan las métricas, consulte [a instrumentación métrica a nivel de código de agente de Go](/docs/apm/agents/go-agent/instrumentation/go-agent-code-level-metrics-instrument).

<Callout variant="important">
  Las métricas a nivel de código están disponibles para la versión 3.18.0 o superior del agente Go y están habilitadas de forma predeterminada para la versión 3.24.0 y superior. Para habilitarlo, debe agregar `newrelic.ConfigCodeLevelMetricsEnabled(true)` a la configuración de su aplicación como se explica a continuación.
</Callout>

## Métodos de configuración [#config]

Al llamar a `newrelic.NewApplication` para configurar el agente Go en su aplicación, puede habilitar la métrica a nivel de código incluyendo la opción `newrelic.ConfigCodeLevelMetricsEnabled` , así:

```go
app, err := newrelic.NewApplication(
   newrelic.ConfigAppName("Your Application Name"),
   newrelic.ConfigLicense(os.Getenv("NEW_RELIC_LICENSE_KEY")),
   newrelic.ConfigCodeLevelMetricsEnabled(true),
)
```

Con ese simple paso, el agente Go agregará la información de contexto del código fuente en el siguiente atributo del agente en transacción:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nombre
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `code.function`
      </td>

      <td>
        El nombre de la función que inició la transacción. Tenga en cuenta que, en algunos casos, el compilador Go puede generar esto automáticamente.
      </td>
    </tr>

    <tr>
      <td>
        `code.namespace`
      </td>

      <td>
        El paquete/namespace donde se encuentra la función. Se espera que la combinación de `code.namespace` y `code.function`, unidos con un delimitador como un punto (`.`), identifique de forma única la función.
      </td>
    </tr>

    <tr>
      <td>
        `code.filepath`
      </td>

      <td>
        El nombre de ruta del archivo fuente que contiene la función que se informa. Normalmente este es el nombre de ruta completo y absoluto; consulte a continuación una opción de configuración que le permite cambiar esto a una ruta relativa.
      </td>
    </tr>

    <tr>
      <td>
        `code.lineno`
      </td>

      <td>
        El número de línea dentro de `code.filepath` donde se inició la transacción. Consulte [la guía de instrumentación](/docs/apm/agents/go-agent/instrumentation/go-agent-code-level-metrics-instrument) para conocer formas de controlar esto.
      </td>
    </tr>
  </tbody>
</table>

Hay opciones de configuración adicionales que quizás desee utilizar para refinar aún más la colección de métricas a nivel de código en su aplicación.

<CollapserGroup>
  <Collapser
    id="errors-inbox-configuration"
    title="Configuración Errors Inbox"
  >
    Configurar una de las siguientes etiquetas le ayudará a identificar qué versiones de su software están produciendo los errores.

    * `NEW_RELIC_METADATA_SERVICE_VERSION` crea `tags.service.version` en los datos del evento que contienen la versión de su código que se desplegar, en muchos casos una versión semántica como 1.2.3, pero no siempre.

    * `NEW_RELIC_METADATA_RELEASE_TAG `crea `tags.releaseTag` en datos de evento que contienen la etiqueta de lanzamiento (como v0.1.209 o comunicado-209).

    * `NEW_RELIC_METADATA_COMMIT` crea `tags.commit` en los datos del evento que contienen el SHA de confirmación. Se puede utilizar el SHA completo o solo los primeros siete caracteres (por ejemplo, 734713b).

      Una próxima versión de Errors Inbox rastreará automáticamente qué versiones de su software están produciendo errores. Todos los datos de la versión también se mostrarán en [CodeStream](/docs/codestream/how-use-codestream/performance-monitoring/#buildsha).
  </Collapser>

  <Collapser
    id="go-clm-config-ignore-prefix"
    title={<>Identificar paquetes instrumentados</>}
  >
    De forma predeterminada, con la métrica a nivel de código habilitada, el agente ignorará las funciones en la stack de llamadas que cree que son internas del propio agente, para garantizar que la función reportada sea la prevista, incluso aunque las funciones dentro del agente hayan sido llamado para ingresar al código de instrumentación métrica a nivel de código. De forma predeterminada, lo hace ignorando cualquier función cuyo nombre de paquete comience con `github.com/newrelic/go-agent/`. Puede cambiar esto a cualquier lista arbitraria de nombres estableciendo su propio valor `IgnoredPrefixes` .

    Para lograr esto, haga una de las siguientes cosas:

    * Si realiza la configuración mediante la función `NewApplication` , agregue una opción `ConfigCodeLevelMetricsIgnoredPrefixes` y pase cualquier número de cadenas de prefijo como argumentos de cadena separados:

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigCodeLevelMetricsIgnoredPrefixes("github.com/some/other/name/"),
      )
      ```

    * Si realiza la configuración mediante variables de entorno, establezca `NEW_RELIC_CODE_LEVEL_METRICS_IGNORED_PREFIXES` en el prefijo deseado (o una lista de prefijos separados por comas):

      ```ini
      NEW_RELIC_CODE_LEVEL_METRICS_IGNORED_PREFIXES="github.com/some/other/name/"
      ```

      No olvide incluir también la opción `newrelic.ConfigFromEnvironment()` al configurar la aplicación:

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigFromEnvironment(),
      )
      ```

    * También es posible configurar directamente el miembro `CodeLevelMetrics.IgnoredPrefixes` de la estructura `Config` (que es un valor `[]string` ), pero recomendamos utilizar uno de los métodos mencionados anteriormente en lugar de manipular directamente la estructura `Config` .

      <Callout variant="important">
        En las versiones de Go agente anteriores a la 3.20.0, esta opción fue nombrada en singular en lugar de plural (es decir, `ConfigCodeLevelMetricsIgnoredPrefix`). Estos nombres están en desuso y se deben utilizar los documentados aquí. Los nombres más antiguos también siguen siendo compatibles por motivos de compatibilidad con versiones anteriores.
      </Callout>
  </Collapser>

  <Collapser
    id="go-clm-config-redact-ignored-prefix"
    title={<>Redactar prefijos de módulos ignorados</>}
  >
    Si, por motivos como la confidencialidad, decide ignorar algunos módulos a través de la opción `ConfigCodeLevelMetricsIgnoredPrefixes` , es posible que también desee eliminar la lista de dichos prefijos de los datos de configuración informados por el agente.

    Esto se logra configurando la opción `ConfigCodeLevelMetricsRedactIgnoredPrefixes` . Si se le asigna un valor `true` , su lista de prefijos ignorados no se mostrará en los datos de configuración que informa el agente. En caso contrario serán denunciados.

    Haz una de las siguientes:

    * Si configura mediante la función `NewApplication` , agregue una opción `ConfigCodeLevelMetricsRedactIgnoredPrefixes` :

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigCodeLevelMetricsRedactIgnoredPrefixes(true),
      )
      ```

    * Si configura mediante variables de entorno, establezca `NEW_RELIC_CODE_LEVEL_METRICS_REDACT_IGNORED_PREFIXES`:

      ```ini
      NEW_RELIC_CODE_LEVEL_METRICS_REDACT_IGNORED_PREFIXES=true
      ```

      No olvide incluir también la opción `newrelic.ConfigFromEnvironment` al configurar la aplicación:

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigFromEnvironment(),
      )
      ```

      <Callout variant="important">
        Esta opción de redacción está disponible en las versiones 3.20.0 de Go agente y después.
      </Callout>
  </Collapser>

  <Collapser
    id="go-clm-config-path-prefix"
    title={<>Truncar el prefijo de la ruta de origen</>}
  >
    De forma predeterminada, con la métrica a nivel de código habilitada, el agente informará la ruta completa de cada archivo fuente. Sin embargo, es posible que esto no sea lo deseado. Por ejemplo, es posible que desee informar solo las rutas de las aplicaciones relativas a la raíz del árbol de origen del proyecto, permitiendo que los datos se correlacionen entre instancias independientemente de dónde estén instalados en el sistema de archivos.

    Para lograr esto, especifique una cadena que indique el inicio de la ruta de origen de su proyecto local. Si ese prefijo se encuentra en la ruta de un archivo fuente, todo lo que aparezca antes se eliminará. Por ejemplo, si la cadena de prefijo de ruta se establece en `myproject/src` , entonces `/usr/local/projects/myproject/src/widget/main.go` se informará en el nivel de código métrico como `myproject/src/widget/main.go`.

    Si tiene varios prefijos de ruta que desea utilizar, simplemente enumere todos sus nombres como parámetro separado.

    Si `PathPrefixes` está vacío, o la ruta del archivo fuente no contiene ninguna de sus cadenas de prefijo, se informará el nombre de ruta completo.

    Haz una de las siguientes:

    * Si configura mediante la función `NewApplication` , agregue una opción `ConfigCodeLevelMetricsPathPrefixes` :

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigCodeLevelMetricsPathPrefixes("myprojects/src/", "otherproject/src/"),
      )
      ```

    * Si realiza la configuración mediante variables de entorno, establezca `NEW_RELIC_CODE_LEVEL_METRICS_PATH_PREFIXES` en los prefijos deseados:

      ```ini
      NEW_RELIC_CODE_LEVEL_METRICS_PATH_PREFIXES="myprojects/src/,otherproject/src/"
      ```

      No olvide incluir también la opción `newrelic.ConfigFromEnvironment` al configurar la aplicación:

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigFromEnvironment(),
      )
      ```

      <Callout variant="important">
        En las versiones de Go agente anteriores a la 3.20.0, esta opción fue nombrada en singular en lugar de plural (es decir, `ConfigCodeLevelMetricsPathPrefix`). Estos nombres están en desuso y se deben utilizar los documentados aquí. Los nombres más antiguos también siguen siendo compatibles por motivos de compatibilidad con versiones anteriores.
      </Callout>
  </Collapser>

  <Collapser
    id="go-clm-config-redact-path-prefix"
    title={<>Redactar prefijos de ruta de origen</>}
  >
    Si, por motivos como la confidencialidad, elige acortar los nombres de ruta de origen informados mediante la opción `ConfigCodeLevelMetricsPathPrefixes` , es posible que también desee redactar la lista de prefijos de ruta de los datos de configuración informados del agente.

    Esto se logra configurando la opción `ConfigCodeLevelMetricsRedactPathPrefixes` . Si se le asigna un valor `true` , su lista de prefijos de ruta no se mostrará en los datos de configuración que informa el agente. En caso contrario serán denunciados.

    Haz una de las siguientes:

    * Si configura mediante la función `NewApplication` , agregue una opción `ConfigCodeLevelMetricsRedactPathPrefixes` :

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigCodeLevelMetricsPathPrefixes("myprojects/src/", "otherproject/src/"),
         newrelic.ConfigCodeLevelMetricsRedactPathPrefixes(true),
      )
      ```

    * Si configura mediante variables de entorno, establezca `NEW_RELIC_CODE_LEVEL_METRICS_REDACT_PATH_PREFIXES`:

      ```ini
      NEW_RELIC_CODE_LEVEL_METRICS_REDACT_PATH_PREFIXES=true
      ```

      No olvide incluir también la opción `newrelic.ConfigFromEnvironment` al configurar la aplicación:

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigFromEnvironment(),
      )
      ```

      <Callout variant="important">
        Esta opción de redacción está disponible en las versiones 3.20.0 de Go agente y después.
      </Callout>
  </Collapser>
</CollapserGroup>

## Ver tu métrica [#view-metrics]

Una vez que haya configurado la métrica a nivel de código, podrá ver sus datos en la UI de New Relic. A continuación se muestra una forma de ver la traza de un servicio en particular:

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
     **Transactions**
   </DNT>

   .

4. Debajo de

   <DNT>
     **Transaction traces**
   </DNT>

   , haga clic en una traza individual.

5. Busque en

   <DNT>
     **Agent attributes**
   </DNT>

   los cuatro atributos que comienzan con `code.`.
