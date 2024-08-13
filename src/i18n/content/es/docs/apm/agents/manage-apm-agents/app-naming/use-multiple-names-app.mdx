---
title: Usar varios nombres para una aplicación
tags:
  - Agents
  - Manage APM agents
  - App naming
metaDescription: Aggregate your app's data under a maximum of three different names by editing your New Relic agent's config file.
freshnessValidatedDate: never
translationType: machine
---

Cuando trabaje con sus datos de APM en New Relic, es posible que desee ver datos agregados y "acumulados" para una aplicación que abarca múltiples clústeres, entornos o centros de datos, pero también poder ver cada uno de los datos de la instancia de la aplicación por separado. . Puede hacer esto configurando varios nombres de aplicaciones para sus aplicaciones de monitor APM.

## Antes de que empieces [#important-notes]

Aquí hay algunas advertencias importantes que se deben tener en cuenta al utilizar varios nombres de aplicaciones.

### Soluciones alternativas [#alt-options]

Debido a que al agregar varios nombres de aplicaciones se [generan informes de datos duplicados](#duplicate), es posible que desees considerar estas otras opciones.

Si su objetivo es poder filtrar más fácilmente sus telemetry data por atributo (por ejemplo, filtrar por región de agente), le recomendamos una de estas opciones:

* Agregue [una etiqueta](/docs/new-relic-solutions/new-relic-one/core-concepts/use-tags-help-organize-find-your-data) a través del archivo de configuración del agente (por ejemplo, [esta configuración de Java](/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#labels))
* Añadir [atributo personalizado](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/#enabling-custom)

Como otra opción para organizar los datos de su aplicación, puede establecer un umbral de rendimiento distinto para cada entorno usando [la condición de alerta](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts) y [la clave de transacción](/docs/apm/transactions/key-transactions/create-update-key-transactions). Estos umbrales se aplicarán a las aplicaciones individuales, mientras que la aplicación general acumulada no tendrá su propio umbral. La aplicación general tratará los datos entrantes según el umbral del entorno relevante.

### Datos duplicados [#duplicate]

El uso de varios nombres de aplicaciones genera eventos y métricas duplicados, que se cuentan como datos ingeridos. Por ejemplo, si su aplicación New Relic-monitor tiene tres nombres de aplicaciones configurados, informará tres veces el evento y la métrica.

Si desea utilizar varios nombres de aplicaciones y ninguna de las soluciones alternativas siguientes, puede utilizar [reglas de eliminación de datos](/docs/data-apis/manage-data/drop-data-using-nerdgraph) para eliminar algún evento específico que no necesita.

### Prioridad de nombres [#priority]

El orden de los nombres de las aplicaciones en la configuración del agente es importante. Para obtener más información, consulte [Definir nombres de aplicaciones](#most-least-specific).

## Cómo funciona el uso de varios nombres de aplicaciones [#rollup]

Normalmente, cuando dos instancias informan con el mismo nombre de aplicación, idioma del agente y [clave de licencia](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key), New Relic agrega sus datos en una única aplicación de monitor New Relic. También puede ver los datos de los hosts individuales y la instancia desde la [página New Relic APM <DNT>**Overview**</DNT> ](/docs/apm/applications-menu/monitoring/apm-overview-page#infra-server)de la aplicación.

Para segmentar su aplicación de una manera diferente, o para trabajar con cada instancia como una aplicación individual mientras mantiene la vista general de los datos, use [el archivo de configuración](#agent) de su agente New Relic para darle a una aplicación hasta tres nombres acumulados diferentes. New Relic luego informará los datos de la aplicación por separado a cada aplicación enumerada en el archivo de configuración.

Por ejemplo, es posible que desee separar los datos recopilados para su aplicación que se ejecuta en desarrollo, de prueba y entorno de producción, pero también tener una vista común de la aplicación en todos los entornos. O, si tiene dos centros de datos ejecutando el mismo código, puede nombrar una aplicación `EastCoastApp;AggregateApp` y la segunda aplicación `WestCoastApp;AggregateApp`.

## Acumular datos del navegador [#browser-rollup]

Cuando utiliza varios nombres para informar los datos de la aplicación, cualquier dato <InlinePopover type="browser"/>de esa aplicación también se agrupará en varias aplicaciones usando la misma configuración.

<Callout variant="important">
  Los datos del rastreo de sesión <DNT>**only**</DNT> informarán a la primera aplicación de la lista. Otros datos del navegador se completarán en cada una de las hasta tres aplicaciones, pero los datos del rastreo de sesión se limitarán a la aplicación más específica.
</Callout>

## Defina los nombres de las aplicaciones de mayor a menor específico [#most-least-specific]

Puede darle a cada aplicación hasta tres nombres, que New Relic utiliza para agregar datos de mayor a menor específico. Luego puede usar la UI de New Relic para ver los datos de cada nombre de aplicación individualmente, así como en conjunto para obtener el rendimiento general de la aplicación. Al hacerlo, el orden en el que especifica los nombres de las aplicaciones es importante.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Using multiple names**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Más específico
      </td>

      <td>
        Un nombre de acumulación único.
      </td>
    </tr>

    <tr>
      <td>
        [Menos específico](#example1)
      </td>

      <td>
        Un nombre de acumulación compartido para agregar datos en la UI de New Relic. Esto proporciona una organización más general.
      </td>
    </tr>

    <tr>
      <td>
        Opcional, [menos específico](#example2)
      </td>

      <td>
        Un nombre de acumulación adicional compartido. Si se usa, este es el nombre más general que usa New Relic para agregar datos en una sola aplicación.
      </td>
    </tr>
  </tbody>
</table>

## Nombre la instancia de la aplicación a través del archivo de configuración del agente [#agent]

La convención de nomenclatura que utilice en su archivo de configuración depende de su agente New Relic. Establece el orden de los nombres de tu aplicación para que el primer nombre acumulado sea el más exclusivo.

El segundo y tercer nombre pueden ser únicos o pueden ser iguales. El segundo nombre es más general para datos agregados y el tercer nombre (si se utiliza) es el más general.

<table>
  <thead>
    <tr>
      <th width={100}>
        <DNT>
          **Agent**
        </DNT>
      </th>

      <th>
        <DNT>
          **Configuration file value**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        C
      </td>

      <td>
        Identifique un máximo de tres nombres separados por un punto y coma `;` en su [configuración newrelic_app_config_t\*;](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code#app-name).
      </td>
    </tr>

    <tr>
      <td>
        Go
      </td>

      <td>
        Establezca [`AppName`](/docs/agents/go-agent/instrumentation/go-agent-configuration#app-name) en un máximo de tres nombres separados por un punto y coma.
      </td>
    </tr>

    <tr>
      <td>
        Java
      </td>

      <td>
        Establezca [`app_name`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-app_name) en un máximo de tres nombres separados por un punto y coma.
      </td>
    </tr>

    <tr>
      <td>
        .NET
      </td>

      <td>
        Utilice cualquiera de las opciones disponibles para [nombrar su aplicación .NET](/docs/agents/net-agent/installation-configuration/name-your-net-application).
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        Establezca [`app_name`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#app_name) en un máximo de tres nombres separados por una coma. Encierre la cadena de nombres entre comillas simples o dobles. (O cambie la variable de entorno [`NEW_RELIC_APP_NAME`](/docs/agents/nodejs-agent/installation-configuration/configuring-nodejs-environment-variables#app_name)).
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        Utilice cualquiera de las opciones disponibles para [nombrar su aplicación PHP](/docs/agents/php-agent/configuration/name-your-php-application). Utilice tres nombres separados por punto y coma.
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        Establezca [`app_name`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#app_name) en un máximo de tres nombres separados por un punto y coma. No agregue un espacio después del punto y coma, o el siguiente nombre se interpretará como un comentario.
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        Establezca [`app_name`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#app_name) en un máximo de tres nombres separados por un punto y coma.
      </td>
    </tr>
  </tbody>
</table>

Para obtener más información, consulte la [documentación del archivo de configuración](/docs/agents/manage-apm-agents/configuration/configure-agent) de su agente.

## Ejemplos

A continuación se muestran ejemplos de cómo podría utilizar varios nombres de acumulación para una sola aplicación.

<CollapserGroup>
  <Collapser
    id="example1"
    title="Una aplicación, tres clústeres"
  >
    Una aplicación Java que recopila datos de encuestas se ejecuta en tres clústeres. Cambie el valor del nombre de la aplicación en el archivo de configuración de su agente dándole tres nombres diferentes, uno para cada clúster.

    Grupo 1:

    ```yml
    app_name: SurveyCluster1;Survey Data
    ```

    Grupo 2:

    ```yml
    app_name: SurveyCluster2;Survey Data
    ```

    Grupo 3:

    ```yml
    app_name: SurveyCluster3;Survey Data
    ```

    Esto reportará cuatro aplicaciones en APM:

    * El nombre de la aplicación para los datos agregados de los tres clústeres es `Survey Data`.
    * Tres aplicaciones individuales denominadas `SurveyCluster1`, `SurveyCluster2` y `SurveyCluster3`.
  </Collapser>

  <Collapser
    id="example2"
    title="Dos instancias de una aplicación"
  >
    Un agente PHP está monitoreando una aplicación de comercio electrónico que se ejecuta en dos clústeres en cada uno de los dos centros de datos y desea ver los datos de cada subgrupo, así como los datos agregados generales.

    Grupo A:

    ```ini
    newrelic.appname="EcomClusterA;EcomEast;EcomAll"
    ```

    Grupo B:

    ```ini
    newrelic.appname="EcomClusterB;EcomEast;EcomAll"
    ```

    Grupo C:

    ```ini
    newrelic.appname="EcomClusterC;EcomWest;EcomAll"
    ```

    Grupo D:

    ```ini
    newrelic.appname="EcomClusterD;EcomWest;EcomAll"
    ```

    Esta configuración de ejemplo informará siete aplicaciones en la UI de APM:

    * Cuatro aplicaciones: Una para cada uno de los cuatro clústeres (`A B C D`)
    * Dos aplicaciones: una para cada centro de datos (`East` y `West`)
    * Una aplicación para los datos generales de clúster y centro de datos (`EcomAll`)
  </Collapser>
</CollapserGroup>
