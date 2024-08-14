---
title: Ejemplos personalizados de JMX YAML
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: 'Example of a custom JMX YAML file for New Relic''s Java agent: value and definition, MBean, attributes, type, and names for metrics, objects, and attributes.'
freshnessValidatedDate: never
translationType: machine
---

Este es un ejemplo de un archivo JMX YAML personalizado para el agente de Java de New Relic, que incluye valor y definición, MBean, atributo, tipo y nombres para métrica, objetos y atributo. Para obtener más información, incluido un vídeo, consulte [Monitoreo JMX personalizado por YAML](/docs/java/custom-jmx-monitoring-by-yml).

## Ejemplo de YAML

A continuación se muestra un ejemplo de un archivo JMX YAML personalizado. Los archivos YAML sensibles al espacio.

```yml
name: TomcatCustom
version: 1.0
enabled: true
jmx:
  - object_name: Catalina:type=Cache,host=localhost,path=/examples
    metrics:
      - attributes: accessCount, cacheSize, hitsCount
        type: simple
  - object_name: Catalina:type=Connector,port=8009
    metrics:
      - attributes: bufferSize, maxHeaderCount
  - object_name: java.nio:type=BufferPool,name=*
    metrics:
      - attributes: Count
        type: monotonically_increasing
```

## Explicación de ejemplo [#initial_info]

<CollapserGroup>
  <Collapser
    id="properties"
    title="Propiedades"
  >
    <table>
      <thead>
        <tr>
          <th width={150}>
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
            Un nombre descriptivo que identifica su archivo de instrumentación personalizada YAML, usando un espacio antes del nombre de la propiedad. En el ejemplo anterior, el nombre es `TomcatCustom`.
          </td>
        </tr>

        <tr>
          <td>
            `version`
          </td>

          <td>
            La versión del archivo de extensión. Utilice un doble. Si dos extensiones tienen el mismo nombre, solo se utilizará la extensión con la versión más alta. Utilice un espacio antes de la versión de la propiedad. En el ejemplo anterior, la versión es `1.0`.
          </td>
        </tr>

        <tr>
          <td>
            `enabled`
          </td>

          <td>
            Si `true`, el agente de Java leerá la extensión. Si `false`, el agente de Java ignorará la extensión. Utilice un espacio antes de la propiedad habilitada. El ejemplo anterior está habilitado.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example_mbeans"
    title="MBeans"
  >
    Cada línea en YAML que comienza con `- object_name` representa un MBean. Por ejemplo, las siguientes líneas describen la información que se extraerá del primer MBean:

    ```yml
    - object_name: Catalina:type=Cache,host=localhost,path=/examples
      metrics:
        - attributes: accessCount, cacheSize, hitsCount
          type: simple
    ```

    La propia propiedad object_name puede coincidir con uno o más MBeans. Por ejemplo, la línea siguiente solo coincide con un MBean:

    ```yml
    - object_name: Catalina:type=Cache,host=localhost,path=/examples
    ```

    La siguiente línea podría coincidir con varios MBeans:

    ```yml
    - object_name: java.nio:type=BufferPool,name=*
    ```

    El comodín asterisco (`*`) solo se puede utilizar con JDK 1.6 y superior.

    Los tres MBeans enumerados en el ejemplo anterior tienen los siguientes nombres de objeto:

    ```
    Catalina:type=Cache,host=localhost,path=/examples
    Catalina:type=Connector,port=8009
    java.nio:type=BufferPool,name=*
    ```
  </Collapser>

  <Collapser
    id="example_attributes"
    title="Atributo"
  >
    El ejemplo de JMX recupera seis atributos diferentes de los tres MBeans. El agente de Java de New Relic extrae estos atributos del primer MBean:

    * `accessCount`

    * `cacheSize`

    * `hitsCount`

      El agente extrae estos atributos del segundo MBean:

    * `bufferSize`

    * `maxHeaderCount`

      El agente extrae un atributo (`Count`) del tercer MBean.
  </Collapser>

  <Collapser
    id="example_type"
    title="Tipo"
  >
    Para `type`, utilice `simple` o `monotonically_increasing`. Cuando no se especifica `type` en el archivo JMX YAML, el valor predeterminado es `monotonically_increasing`.

    <table>
      <thead>
        <tr>
          <th width={200}>
            Valor
          </th>

          <th>
            Definición
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `simple`
          </td>

          <td>
            El valor exacto del atributo se informará a New Relic cada minuto.
          </td>
        </tr>

        <tr>
          <td>
            `monotonically_increasing`
          </td>

          <td>
            La diferencia positiva se informará a New Relic cada minuto.
          </td>
        </tr>
      </tbody>
    </table>

    En el ejemplo anterior, el atributo `accessCount`, `cacheSize` y `hitsCount` se informará como `simple`. El atributo `bufferSize`, `maxHeaderCount` y `Count` se informará como `monotonically_increasing`.

    * Si el valor del atributo `hitsCount` es siempre `5`, New Relic informará un `5` cada minuto.
    * Si el valor del atributo `Count` es siempre `5`, New Relic informará un `0` para el valor cada minuto.
    * Si el valor del atributo `Count` cambia de `5` a `7`, New Relic informará un `2` para ese minuto.
  </Collapser>

  <Collapser
    id="metric_names"
    title="Nombres métricos"
  >
    Al seleccionar el tablero personalizado métrica y no usar la propiedad `root_metric_name`, use el siguiente formato para todas las métricas JMX personalizadas:

    ```
    JMX/beginning_of_object_name/type/any_properties_in_object_name/attribute_name
    ```

    <Callout variant="tip">
      Algunos nombres de objetos no incluyen un tipo. En ese caso, habrá un valor nulo en el nombre de la métrica.
    </Callout>

    El archivo de configuración no utiliza `root_metric_name`, por lo que se creará la siguiente métrica:

    ```
    JMX/Catalina/Cache/localhost/examples/accessCount
    JMX/Catalina/Cache/localhost/examples/cacheSize
    JMX/Catalina/Cache/localhost/examples/hitsCount
    JMX/Catalina/Connector/8009/bufferSize
    JMX/Catalina/Connector/8009/maxHeaderCount
    JMX/java.nio/BufferPool/direct/Count
    JMX/java.nio/BufferPool/mapped/Count
    ```

    Si está utilizando la propiedad `root_metric_name`, la métrica será el nombre de la métrica raíz con el prefijo JMX y seguido del nombre del atributo. Puede utilizar valores de nombre de objeto especificando la clave de nombre de objeto en `root_metric_name` entre corchetes `{}`. Por ejemplo:

    Parte de un archivo de configuración:

    ```yml
    - object_name: Catalina:type=Cache,host=localhost,path=/examples
      root_metric_name: Tomcat/{host}
      metrics:
        - attributes: accessCount, cacheSize, hitsCount
          type: simple
    - object_name: mbean:type=Sample,host=localhost,path=*
      root_metric_name: SampleMBean
      metrics:
        - attributes: attOne, attTwo
          type: simple
    ```

    Nombres métricos:

    ```
    JMX/Tomcat/localhost/accessCount
    JMX/Tomcat/localhost/cacheSize
    JMX/Tomcat/localhost/hitsCount
    JMX/SampleMBean/attOne
    JMX/SampleMBean/attTwo
    ```

    Si un atributo no existe realmente en el MBean, la métrica nunca aparecerá en New Relic.
  </Collapser>
</CollapserGroup>

## Encontrar nombres de objetos y atributos [#finding_names]

La forma más sencilla de encontrar MBeans disponibles y sus atributos asociados es utilizar las [instrucciones de JConsole para JDK 1.6](http://docs.oracle.com/javase/6/docs/technotes/guides/management/jconsole.html).
