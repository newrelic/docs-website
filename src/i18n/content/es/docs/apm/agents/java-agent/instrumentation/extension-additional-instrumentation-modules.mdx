---
title: Módulos de extensión e instrumentación adicional.
tags:
  - Agents
  - Java agent
  - Instrumentation
metaDescription: 'New Relic Java agent: How to install experimental instrumentation with incubator modules, and instrument older libraries with archived modules.'
freshnessValidatedDate: never
translationType: machine
---

El agente de Java es una biblioteca con todas las funciones que recopila automáticamente datos de muchos servidores, marcos, bibliotecas y almacenes de datos populares (para obtener una lista completa, consulte [Compatibilidad y requisitos](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent)). También tiene un importante conjunto de características. Sin embargo, siempre hay solicitudes adicionales de funcionalidad e instrumentación de una nueva biblioteca. El agente de Java proporciona <DNT>**extension modules**</DNT> para este fin.

Los módulos de extensión se dividen en tres categorías generales:

* [Módulos de instrumentación de incubadoras](#incubator-modules-list): nuevo soporte experimental para recopilar datos de una biblioteca específica
* [Módulos de instrumentación archivados](#archived-modules-list): Instrumentación para biblioteca que la empresa o autor original ya no mantiene o actualiza.
* [característica módulos de extensión](#feature-extension-modules): Código que agrega nuevo comportamiento al agente, independiente de cualquier biblioteca específica.

Si su biblioteca no está cubierta por la instrumentación automática o por un módulo de instrumentación, aún puede recopilar datos con [instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation).

<Callout variant="tip">
  Si tiene comentarios, preguntas o problemas con esta instrumentación, cree una publicación en [el Foro de soporte de New Relic](https://discuss.newrelic.com/tags/javaagent) y etiquete su publicación con `java_incubator`.
</Callout>

## Instalar módulos de extensión [#install]

Recomendamos [actualizar a la última versión del agente de Java](/docs/agents/java-agent/installation/upgrade-java-agent) antes de instalar un módulo de extensión. Para instalar un módulo de extensión:

1. Descargue el archivo `.jar` apropiado de las listas de módulos a continuación.
2. Localice el directorio que contiene sus archivos `newrelic.jar` y `newrelic.yml` . En ese directorio, cree un subdirectorio llamado `extensions` (si aún no existe uno allí).
3. Copie el módulo de extensión `.jar` que descargó en el directorio `extensions` .
4. Para módulos de extensión de características, actualice su `newrelic.yml` con una configuración específica de características.
5. Reinicie su servidor.
6. Enviar algo de tráfico al servidor o host que ejercerá la característica o instrumentación.

<Callout variant="tip">
  Los módulos de extensión de agente de Java están sujetos a las [licencias de agente de Java de New Relic](/docs/licenses/license-information/agent-licenses/java-agent-licenses), que se incluyen en el archivo jar `LICENSE` de cada módulo.
</Callout>

## Módulos de extensión característicos

Los módulos de extensión son bibliotecas adicionales que agregan funciones comúnmente solicitadas.

Para utilizar un módulo de extensión, descárguelo y colóquelo en el [Directorio de extensiones](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#extensions-directory).

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="class-histogram"
    title="Histograma de clase"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://repo1.maven.org/maven2/com/newrelic/agent/extension/class-histogram-extension/)
          </td>
        </tr>
      </tbody>
    </table>

    La extensión Class histograma ejecuta [jmap](https://docs.oracle.com/javase/7/docs/technotes/tools/share/jmap.html) periódicamente y genera datos `ClassHistogramRowEvent` y `ClassHistogramStatsEvent` que [puedes consultar y graficar](/docs/using-new-relic/data/understand-data/query-new-relic-data). Consultar estos datos puede ser útil cuando hay pérdidas de memoria, ya que puede ver los valores a lo largo del tiempo.

    Configuras la extensión Class histograma de la misma manera que configuras el agente de Java: usando variables de entorno, propiedades del sistema o `newrelic.yml`. Aquí están las propiedades disponibles, con los valores predeterminados:

    ```yml
    extensions:
      class_histogram:
        enabled: true                    # true is the default if the extension is present
        classes_per_histogram: 50        # 50 is the default, and memory leak issues are usually in the highest 50 classes by bytes
        jmap_path: /your/jdk/bin         # The folder where the jmap binary lives. The default is $JAVA_HOME/bin.
        delay_between_calls_seconds: 60  # Length of the delay between executions to avoid frequent pauses
    ```
  </Collapser>
</CollapserGroup>

## Módulos de instrumentación de incubadoras. [#incubator-modules-list]

Los módulos de incubadora son instrumentación experimental, que podemos incorporar a la instrumentación automática del agente en el futuro.

Estos son los módulos de incubadora que están disponibles actualmente:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="apache-camel-212"
    title="Camello Apache 2.12"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://download.newrelic.com/newrelic/java-agent/extensions/camel-2.12.jar)
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentación intercepta lo siguiente:

    ```java
    org.apache.camel.component.http.CamelServlet.resolve
    ```

    Para nombrar la transacción de modo que transacción web tenga un nombre más detallado que el nombre del servlet Camel, usa esto:

    ```java
    org.apache.camel.component.http.HttpConsumer.getPath()
    ```

    Para ver el código de bytes, use este comando de terminal:

    ```bash
    javap -verbose -cp camel-2.12-FILENAME.jar org.apache.camel.component.http.CamelServlet
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="c3p0-db-connection"
    title="C3P0 grupos de conexiones de base de datos"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://download.newrelic.com/newrelic/java-agent/extensions/c3p0-0.9.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.12.0 o superior
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentación muestra grupos de conexiones C3P0 e informa conteos ocupados e inactivos en métrica que comienzan con esto:

    ```
    Custom/Database Connection/C3P0/METRIC_NAME
    ```

    Puedes ver la métrica con el [explorador de métricas](/docs/insights/use-insights-ui/explore-data/metric-explorer-search-chart-metrics-sent-new-relic-agents).
  </Collapser>

  <Collapser
    className="freq-link"
    id="code-hale-metrics-2"
    title="Coda Hale métrica 2"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://download.newrelic.com/newrelic/java-agent/extensions/metrics-2.jar)
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentación se integra con el `MetricRegistry` y comienza a muestrear la métrica registrada cada minuto. Las métricas reportadas tienen el prefijo siguiente:

    ```
    Custom/CodaHale/Metrics2/METRIC_NAME
    ```

    Puedes ver la métrica con el [explorador de métricas](/docs/insights/use-insights-ui/explore-data/metric-explorer-search-chart-metrics-sent-new-relic-agents).
  </Collapser>

  <Collapser
    className="freq-link"
    id="coda-hale-metrics-3"
    title="Coda Hale métrica 3"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://download.newrelic.com/newrelic/java-agent/extensions/metrics-3.jar)
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentación se integra con el `MetricRegistry` y comienza a muestrear la métrica registrada cada minuto. Las métricas reportadas tienen el prefijo siguiente:

    ```
    Custom/CodaHale/Metrics3/METRIC_NAME
    ```

    Puedes ver la métrica con el [explorador de métricas](/docs/insights/use-insights-ui/explore-data/metric-explorer-search-chart-metrics-sent-new-relic-agents).
  </Collapser>

  <Collapser
    className="freq-link"
    id="hikaricp-230"
    title="HikariCP 2.3.0 - 2.3.8"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://download.newrelic.com/newrelic/java-agent/extensions/hikaricp-2.3.5.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.12.0 o superior
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentación muestra los grupos de conexiones de la base de datos de HikariCP e informa conteos ocupados e inactivos en métrica que comienzan con esto:

    ```
    Custom/Database Connection/HikariCP/METRIC_NAME
    ```

    Puedes ver la métrica con el [explorador de métricas](/docs/insights/use-insights-ui/explore-data/metric-explorer-search-chart-metrics-sent-new-relic-agents).
  </Collapser>

  <Collapser
    className="freq-link"
    id="hikaricp-240"
    title="HikariCP 2.4.0 o superior"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://download.newrelic.com/newrelic/java-agent/extensions/hikaricp-2.4.0.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.12.0 o superior
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentación muestra los grupos de conexiones de la base de datos de HikariCP e informa conteos ocupados e inactivos en métrica que comienzan con esto:

    ```
    Custom/Database Connection/HikariCP/METRIC_NAME
    ```

    Puedes ver la métrica con el [explorador de métricas](/docs/insights/use-insights-ui/explore-data/metric-explorer-search-chart-metrics-sent-new-relic-agents).
  </Collapser>

  <Collapser
    className="freq-link"
    id="ratpack-1-6-0"
    title="Ratpack 1.6.0 o superior"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://download.newrelic.com/newrelic/java-agent/extensions/ratpack-1.6.0.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.29 o superior
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentación agrega soporte para enlaces asíncronos de las primitivas de ejecución de Ratpack. También monitorea la ejecución del controlador. Debes nombrar la transacción manualmente usando la [API del agente de Java](/docs/agents/java-agent/api-guides/guide-using-java-agent-api).
  </Collapser>

  <Collapser
    className="freq-link"
    id="ratpack-http-1-4-0"
    title="Cliente Ratpack Http 1.4.0 o superior"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://download.newrelic.com/newrelic/java-agent/extensions/ratpack-http-1.4.0.jar)
          </td>
        </tr>
      </tbody>
    </table>

    Esta instrumentación captura las solicitudes y respuestas del cliente HTTP de Ratpack.
  </Collapser>
</CollapserGroup>

## Módulos de instrumentación archivados [#archived-modules-list]

Los módulos archivados son instrumentos para la biblioteca que ya no son mantenidos por la empresa o el autor original. Debido a que la biblioteca de destino no se actualiza, nuestro soporte para módulos archivados tiene fechas de finalización designadas.

Estos son los módulos archivados que están disponibles actualmente:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="akka-20"
    title="Akka [2.0]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/akka-2.0/SNAPSHOT/akka-2.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.22.1 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo proporciona instrumentación de enlace entre actores que envían y reciben mensajes. También traza mensajes difundidos o reenviados a los actores. Para evitar sobreinstrumentación, esta instrumentación no inicia transacción. Si desea que una llamada de actor determinada marque el comienzo de una transacción, utilice la anotación [`@Trace(dispatcher=true)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Trace.html) o alguna otra forma de [instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation).
  </Collapser>

  <Collapser
    className="freq-link"
    id="akka-21"
    title="Akka [2.1]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/akka-2.1/SNAPSHOT/akka-2.1-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.22.1 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo proporciona instrumentación de enlace entre actores que envían y reciben mensajes. También traza mensajes difundidos o reenviados a los actores. Para evitar sobreinstrumentación, esta instrumentación no inicia transacción. Si desea que una llamada de actor determinada marque el comienzo de una transacción, utilice la anotación [`@Trace(dispatcher=true)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Trace.html) o alguna otra forma de [instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation).
  </Collapser>

  <Collapser
    className="freq-link"
    id="akka-http-10"
    title="Akka HTTP [1.0]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/akka-http-1.0/SNAPSHOT/akka-http-1.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.24.1 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo crea [transacciones](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction) a partir de llamadas HTTP de Akka. También instrumentó transferencias entre actores de Akka y llamadas de Akka a otras bases de datos y servicios.

    Para sistemas de llamada, esta instrumentación recoge [multiaplicación de traza](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces). Si está utilizando una versión compatible de Akka, puede ver la actividad de sus aplicaciones HTTP de Akka desde la transacción hasta los sistemas de actores.
  </Collapser>

  <Collapser
    className="freq-link"
    id="akka-http-20"
    title="Akka HTTP [2.0 – 2.4.1]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/akka-http-2.0/SNAPSHOT/akka-http-2.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.24.1 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo crea [transacciones](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction) a partir de llamadas HTTP de Akka. También instrumentó transferencias entre actores de Akka y llamadas de Akka a otras bases de datos y servicios.

    Para sistemas de llamada, esta instrumentación recoge [multiaplicación de traza](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces). Si está utilizando una versión compatible de Akka, puede ver la actividad de sus aplicaciones HTTP de Akka desde la transacción hasta los sistemas de actores.
  </Collapser>

  <Collapser
    className="freq-link"
    id="akka-http-242"
    title="Akka HTTP [2.4.2 – 2.4.4]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/akka-http-2.4.2/SNAPSHOT/akka-http-2.4.2-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.24.1 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo crea [transacciones](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction) a partir de llamadas HTTP de Akka. También instrumentó transferencias entre actores de Akka y llamadas de Akka a otras bases de datos y servicios.

    Para sistemas de llamada, esta instrumentación recoge [multiaplicación de traza](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces). Puede utilizar esta instrumentación junto con nuestro soporte creado anteriormente para Akka, para ver la actividad de sus aplicaciones HTTP de Akka desde la transacción hasta sus sistemas de actores.
  </Collapser>

  <Collapser
    className="freq-link"
    id="hystrix-102"
    title="Hystrix [1.0.2 – 1.1.7]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/hystrix-1.0.2/SNAPSHOT/hystrix-1.0.2-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.23.0 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo proporciona información de tiempo relacionada con cada comando de Hystrix. El agente vinculará los comandos encadenados de Hystrix en una sola [transacción](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction).
  </Collapser>

  <Collapser
    className="freq-link"
    id="hystrix-120"
    title="Hystrix [1.2.0 – 1.2.18]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/hystrix-1.2/SNAPSHOT/hystrix-1.2-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.23.0 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo proporciona información de tiempo relacionada con cada comando de Hystrix. El agente vinculará los comandos encadenados de Hystrix en una sola [transacción](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction).
  </Collapser>

  <Collapser
    className="freq-link"
    id="hystrix-130"
    title="Hystrix [1.3.0 – 1.3.13]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/hystrix-1.3.0/SNAPSHOT/hystrix-1.3.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.23.0 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo proporciona información de tiempo relacionada con cada comando de Hystrix. El agente vinculará los comandos encadenados de Hystrix en una sola [transacción](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction).
  </Collapser>

  <Collapser
    className="freq-link"
    id="play-20"
    title="Play [2.0]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/play-2.0/SNAPSHOT/play-2.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.24.1 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo crea y nombra [transacciones](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction) según sus clases de controlador de Play.
  </Collapser>

  <Collapser
    className="freq-link"
    id="play-21"
    title="Play [2.1]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/play-2.1/SNAPSHOT/play-2.1-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.24.1 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo crea y nombra [transacciones](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction) según sus clases de controlador de Play.
  </Collapser>

  <Collapser
    className="freq-link"
    id="play22"
    title="Play [2.2]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/play-2.2/SNAPSHOT/play-2.2-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.24.1 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo crea y nombra [transacciones](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction) según sus clases de controlador de Play.
  </Collapser>

  <Collapser
    className="freq-link"
    id="solr-310"
    title="Solr [3.1.0 – 3.4.0]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/solr-3.1.0/SNAPSHOT/solr-3.1.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.34.0 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo instrumentado base de datos llama a servidores Solr y recopila información detallada sobre el propio servidor Solr. También proporciona el servidor de la base de datos y el nombre de la base de datos para la consulta que se muestra en [traza de la transacción](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) y [consulta lenta traza](/docs/apm/applications-menu/monitoring/view-slow-query-details).
  </Collapser>

  <Collapser
    className="freq-link"
    id="solr-350"
    title="Solr [3.5.0]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/solr-3.5.0/SNAPSHOT/solr-3.5.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.34.0 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo instrumentado base de datos llama a servidores Solr y recopila información detallada sobre el propio servidor Solr. También proporciona el servidor de la base de datos y el nombre de la base de datos para la consulta que se muestra en [traza de la transacción](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) y [consulta lenta traza](/docs/apm/applications-menu/monitoring/view-slow-query-details).
  </Collapser>

  <Collapser
    className="freq-link"
    id="solr-360"
    title="Solr [3.6.0 – 3.6.2]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Enlace de descarga
          </th>

          <td>
            [Descarga el módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/solr-3.6.0/SNAPSHOT/solr-3.6.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versión agente de Java
          </th>

          <td>
            3.34.0 o superior
          </td>
        </tr>

        <tr>
          <th>
            El soporte finaliza el
          </th>

          <td>
            Diciembre 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo instrumentado base de datos llama a servidores Solr y recopila información detallada sobre el propio servidor Solr. También proporciona el servidor de la base de datos y el nombre de la base de datos para la consulta que se muestra en [traza de la transacción](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) y [consulta lenta traza](/docs/apm/applications-menu/monitoring/view-slow-query-details).
  </Collapser>
</CollapserGroup>
