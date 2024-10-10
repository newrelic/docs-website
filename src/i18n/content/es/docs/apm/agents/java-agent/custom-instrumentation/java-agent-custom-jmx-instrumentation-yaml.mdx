---
title: 'Agente de Java: Instrumentación JMX personalizada por YAML'
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: How to monitor specific JMX metrics in your app without modifying code by using a custom instrumentation YAML file for your New Relic Java agent.
freshnessValidatedDate: never
translationType: machine
---

La plataforma Java SE incluye Java Management Extensions (JMX). JMX es una forma de monitor y administrar aplicaciones, dispositivos y servicios. Generalmente, los servidores de aplicaciones tienen JMX métrica incorporado que puedes monitor.

El agente de Java de New Relic ofrece la capacidad de monitor métricas específicas de MBeans y atributos en su aplicación sin modificar el código mediante el uso de un [archivo YAML de instrumentación personalizada](/docs/java/custom-jmx-yaml-examples). El agente de Java leerá el archivo YAML al inicio y registrará la métrica específica.

<Callout variant="tip">
  También puede monitor JMX con la [integración de infraestructura JMX](/docs/integrations/host-integrations/host-integrations-list/jmx-monitoring-integration).
</Callout>

## Requisitos y acceso [#requirements]

El agente de Java solo ve métricas de MBeans en su JVM actual. Si se accede a los MBeans de forma remota o existen en una JVM separada, no estarán disponibles para el agente de Java de New Relic.

Los datos JMX personalizados no se mostrarán en nuestros gráficos <InlinePopover type="apm"/>, pero puede [consultar los datos](#display_metrics) y crear gráficos personalizados con ellos.

Esta integración informa solo valores numéricos simples. Si desea informar otros tipos de valores, es posible que desee utilizar la [integración de infraestructura JMX](/docs/integrations/host-integrations/host-integrations-list/jmx-monitoring-integration).

## Reglas de estructura de archivos [#file_structure]

El fichero de instrumentación personalizada debe estar en [formato YAML](https://en.wikipedia.org/wiki/YAML). Utilice un validador YAML para asegurarse de que la sintaxis sea precisa antes de usar el archivo con el agente de Java de New Relic y siga estas reglas:

* Los archivos YAML distinguen entre mayúsculas y minúsculas.
* Todas las sangrías están en incrementos de dos caracteres. Los datos en las mismas secciones del archivo deben usar el mismo nivel de sangría. Sangra las subsecciones con dos espacios adicionales.
* Debe reiniciar su proceso de host JVM para que los cambios surtan efecto.

## Propiedades disponibles [#properties]

A continuación se muestra un resumen de cada propiedad en el archivo JMX. Para obtener más información, consulte [Ejemplos personalizados de JMX YAML](/docs/java/custom-jmx-yaml-examples).

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Value**
        </DNT>
      </th>

      <th>
        <DNT>
          **Definition**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `name`
      </td>

      <td>
        El nombre descriptivo principal que identifica su archivo de instrumentación personalizada YAML. Incluya un espacio antes de la propiedad `name` .
      </td>
    </tr>

    <tr>
      <td>
        `version`
      </td>

      <td>
        La versión del archivo de extensión. Si dos extensiones tienen el mismo nombre, solo se utilizará la extensión con la versión más alta. Asegúrese de que la propiedad de versión esté en una línea separada de `name`. Incluya un espacio antes de la propiedad de versión.
      </td>
    </tr>

    <tr>
      <td>
        `enabled`
      </td>

      <td>
        Si `true`, el agente de Java leerá la extensión. Si `false`, el agente de Java ignorará la extensión. Incluya un espacio antes de la propiedad `enabled` .
      </td>
    </tr>

    <tr>
      <td>
        `jmx`
      </td>

      <td>
        Ningún valor sigue a la propiedad `jmx`. Utilice cero espacios antes de la propiedad.
      </td>
    </tr>

    <tr>
      <td>
        `object_name`
      </td>

      <td>
        Coincide con el objeto del MBean específico. Si está utilizando JDK versión 1.6 o superior, el `object_name` puede incluir asteriscos (\*). Incluya dos espacios antes del guión y un espacio entre el guión y `object_name`.
      </td>
    </tr>

    <tr>
      <td>
        `root_metric_name`
      </td>

      <td>
        Disponible con el agente de Java de New Relic versión 3.7.0 o superior. Una propiedad opcional que brinda la posibilidad de nombrar la métrica utilizada en New Relic. Para utilizar valores de propiedad `object_name` , especifique la clave de propiedad entre paréntesis (`{}`). New Relic prefijará automáticamente el `root_metric_name` especificado con JMX y agregará el nombre del atributo al final de la métrica. Incluya cuatro espacios antes de `root_metric_name`.
      </td>
    </tr>

    <tr>
      <td>
        `metrics`
      </td>

      <td>
        No hay ningún valor en la línea métrica. Incluya cuatro espacios antes de métrica.
      </td>
    </tr>

    <tr>
      <td>
        `attributes`
      </td>

      <td>
        Una lista separada por comas del atributo del MBean. El nombre del atributo debe coincidir exactamente. Incluya 6 espacios antes del guión y un espacio entre el guión y la palabra clave `attributes` .
      </td>
    </tr>

    <tr>
      <td id="attribute-type">
        `type`
      </td>

      <td>
        * Si es `simple`, cada valor se informará al recolector de New Relic.
        * Si es `monotonically_increasing` (predeterminado), la diferencia positiva se informará al recolector de New Relic.
      </td>
    </tr>
  </tbody>
</table>

## Ubicación del archivo YAML [#file_location]

El agente de Java lee el archivo YAML al iniciar el proceso. Hay dos formas de especificar la ubicación del archivo YAML:

<CollapserGroup>
  <Collapser
    id="create-extensions-dir"
    title="Crear un directorio de extensiones"
  >
    1. En el directorio donde se encuentran `newrelic.jar` y `newrelic.yml` , cree un directorio llamado `extensions`.
    2. Coloque el archivo YAML en este directorio con una extensión `.yml` .
    3. En `newrelic.yml`, verifique que la propiedad `extensions.dir` no esté configurada.
  </Collapser>

  <Collapser
    id="specify-existing-direction"
    title="Especificar un directorio de extensiones existente"
  >
    1. En el archivo de configuración `newrelic.yml` en la sección común, utilice la propiedad `extensions.dir` para especificar el directorio donde se encuentra el archivo YAML.
    2. Asegúrese de que el archivo esté en el directorio especificado y que tenga una extensión `.yml` .
  </Collapser>
</CollapserGroup>

<Callout variant="caution">
  La métrica personalizada no funcionará si hay más de un archivo YAML en la misma carpeta que el agente. Mueva las copias de seguridad y las copias a otra carpeta al personalizar.
</Callout>

## Verificar que el archivo fue leído [#verify_read]

Para verificar que el agente leyó el archivo YAML:

1. Abra el archivo de configuración `newrelic.yml` .

2. Cambie la propiedad nivel de logs a `log_level: finer`.

3. Inicie la aplicación.

4. Verifique que el archivo `logs/newrelic_agent.log` incluya una declaración que indique que el archivo se leyó en:

   ```
   Reading custom extension file /path/to/file/file.yml
   ```

5. Si no puede encontrar esta declaración, verifique la ubicación del archivo YAML. También asegúrese de que el proceso tenga acceso de lectura al archivo.

6. Verifique que el archivo incluya esta declaración:

   ```
   Adding extension with name NAME_FROM_YAML and version VERSION_FROM_YAML
   ```

7. Si no puede encontrar esta declaración, verifique que el documento se haya analizado correctamente. También verifique si hay otro archivo de extensión con el mismo nombre y un número de versión superior.

## Consultar y graficar datos JMX [#display_metrics]

Puede realizar una consulta de sus datos JMX y utilizarlos para crear gráficos personalizados. Para conocer más sobre cómo consultar este tipo de datos, consulte [consulta APM métrica](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/query-apm-metric-timeslice-data-nrql).

A continuación se explica cómo buscar <DNT>**JMX**</DNT> o la ruta directa al contador tal como se establece en su archivo YAML.

<CollapserGroup>
  <Collapser
    id=""
    title="Busca el camino directo a tus mostradores"
  >
    Ejemplo de archivo YAML

    ```yml
    name: TomcatCustom
      version: 1.0
      enabled: true
      jmx:
        - object_name: java.nio:type=BufferPool,name=*
          metrics:
            - attributes: Count
              type: monotonically_increasing
    ```

    Puede encontrar contadores del objeto en el archivo YAML de ejemplo buscando en el [Explorador de métrica](/docs/insights/use-insights-ui/explore-data/metric-explorer-search-chart-metrics-sent-new-relic-agents) lo siguiente:

    ```
    JMX/java.nio/BufferPool/direct/Count
    JMX/java.nio/BufferPool/mapped/Count
    ```
  </Collapser>
</CollapserGroup>

Para obtener más información sobre cómo se nombran y almacenan las métricas, consulte [Ejemplos personalizados de JMX YAML](/docs/agents/java-agent/custom-instrumentation/custom-jmx-yaml-examples#metric_names).
