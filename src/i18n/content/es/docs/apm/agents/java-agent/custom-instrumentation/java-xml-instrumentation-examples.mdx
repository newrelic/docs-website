---
title: Ejemplos de instrumentación XML de Java
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: 'With New Relic monitoring for Java, you can use XML files to set up custom instrumentation of your Java application.'
freshnessValidatedDate: never
translationType: machine
---

Para su aplicación Java New Relic-monitor, un método [de instrumentación personalizado](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) es utilizar un archivo XML que enumere los métodos y clases que desea instrumentar. Esta documentación muestra un archivo de instrumentación XML de ejemplo. Para más información, consulte [Instrumentación Java por XML](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-xml).

## Editar archivo XML en UI [#ui]

Para editar su archivo XML directamente desde la UI de New Relic: vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Instrumentation**</DNT>. Desde aquí puedes:

* Descargue un archivo XML de muestra.
* Seleccione un archivo XML existente para editar.
* Busque en el historial de instrumentación.

## Formato de archivo XML [#file-format]

El formato de archivo XML incluye nodos raíz y secundarios.

<Callout variant="caution">
  No instrumente todos sus métodos, ya que esto puede provocar un [problema de agrupación métrica](/docs/apm/other-features/metrics/metric-grouping-issues).
</Callout>

<CollapserGroup>
  <Collapser
    id="extension"
    title="Nodo raíz: extensión"
  >
    El nodo raíz de un archivo XML es `extension`. Puede tener tres atributos diferentes:

    <table>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>
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
            `name`
          </td>

          <td>
            Un nombre único pero descriptivo que identifica su extensión XML.
          </td>
        </tr>

        <tr>
          <td>
            `enabled`
          </td>

          <td>
            Identifica si la extensión será leída por el agente de Java. El valor predeterminado es `true`. Si `false`, New Relic ignorará la extensión.
          </td>
        </tr>

        <tr>
          <td>
            `version`
          </td>

          <td>
            La versión de la extensión. Si dos extensiones tienen el mismo nombre, solo se utilizará la extensión con la versión más alta.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="instrumentation"
    title="Instrumentación (hijo de extensión)"
  >
    El nodo `instrumentation` es hijo de `extension`. Puede tener un atributo: `metricPrefix`. Este es el prefijo utilizado para los nombres métricos cuando no se especifica el nodo `nameTransaction` . El valor predeterminado es `CUSTOM`.
  </Collapser>

  <Collapser
    id="pointcut"
    title="Pointcut (hijo de la instrumentación)"
  >
    El `pointcut` es un nodo hijo de `instrumentation` y puede tener varios atributos. Además, un `pointcut` puede tener varios [nodos secundarios](#pointcut-children) diferentes.

    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
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
            `transactionStartPoint`
          </td>

          <td>
            Si una transacción aún no está en progreso cuando se alcanza este punto de corte, se iniciará una transacción. Si una transacción ya está en curso, esa transacción continuará. No se creará una nueva transacción.
          </td>
        </tr>

        <tr>
          <td>
            `metricNameFormat`
          </td>

          <td>
            El formato de nombre que se utilizará para una métrica. Si no está presente, el valor predeterminado será el nombre de la clase seguido del nombre del método. Solo puede configurar el `metricNameFormat` en puntos de corte donde `transactionStartPoint` está configurado en `false`.
          </td>
        </tr>

        <tr>
          <td>
            `excludeFromTransactionTrace`
          </td>

          <td>
            Cuando `true` no se proporcionará la traza de la transacción si este punto inicia la transacción. Si se alcanza el punto de corte en medio de una transacción, la traza de la transacción seguirá presente, pero este método se excluirá del gráfico de llamadas.
          </td>
        </tr>

        <tr>
          <td>
            `ignoreTransaction`
          </td>

          <td>
            Cuando `true` se ignorará toda la transacción.
          </td>
        </tr>

        <tr>
          <td>
            `transactionType`
          </td>

          <td>
            Establece el tipo de transacción. Los valores posibles son `background` (predeterminado, reportado como una [transacción no web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions)) y `web` (reportado como una [transacción web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm)).
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="pointcut-children"
    title="Nodos secundarios para pointcut"
  >
    Un `pointcut` puede tener varios nodos secundarios diferentes:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
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
            `nameTransaction`
          </td>

          <td>
            Si este elemento está presente, el agente nombrará la transacción utilizando el nombre de la clase y los métodos instrumentados por este punto.
          </td>
        </tr>

        <tr>
          <td>
            `methodAnnotation`
          </td>

          <td>
            El nombre completo que distingue entre mayúsculas y minúsculas de una clase de anotación, incluido el nombre del paquete. Todos los métodos marcados con esta anotación coincidirán.
          </td>
        </tr>

        <tr>
          <td>
            `className`
          </td>

          <td>
            El nombre que distingue entre mayúsculas y minúsculas de la clase que debe coincidir, incluido el nombre del paquete. Empareje este nodo con el nodo de método. Si este nodo está presente en un punto de corte, entonces el nodo `interfaceName` no puede estar presente en el mismo nodo de punto de corte.

            El nodo `className` tiene el atributo `includeSubclasses`. Si `true` los métodos de la clase con el nombre coincidente se instrumentarán junto con los métodos coincidentes de cualquier clase secundaria de esta clase. Si `false` (predeterminado), solo se instrumentarán los métodos de la clase exacta especificada.

            El `className` debe seguir estas reglas:

            * Las clases internas pueden ser instrumentadas.
            * Se debe utilizar la estructura completa del paquete con puntos entre paquetes.
            * Para hacer coincidir subclases de la clase especificada, establezca el atributo `includeSubclasses` en `true`.
          </td>
        </tr>

        <tr>
          <td>
            `interfaceName`
          </td>

          <td>
            El nombre que distingue entre mayúsculas y minúsculas de una interfaz, incluido el nombre del paquete, cuyas clases de implementación coincidirán. Empareje este nodo con el nodo de método. Si este nodo está presente en un punto de corte, entonces el nodo `className` no puede estar presente en el mismo nodo de punto de corte.

            El `interfaceName` debe seguir esta regla: se debe utilizar la estructura completa del paquete con puntos entre paquetes.
          </td>
        </tr>

        <tr>
          <td>
            `method`
          </td>

          <td>
            Un método sobre la clase de instrumento. Empareje este nodo con un nodo `className` . Además, el nodo `method` puede tener [hijos](#method-children).
          </td>
        </tr>

        <tr>
          <td>
            `traceByReturnType`
          </td>

          <td>
            El nombre de la clase, incluido el paquete, en el formato utilizado en el código de bytes, por ejemplo `Ljava/lang/String;`.

            Todos los métodos que devuelvan un objeto de esa clase coincidirán.
          </td>
        </tr>

        <tr>
          <td>
            `traceLambda`
          </td>

          <td>
            Un booleano que indica si se deben hacer coincidir lambdas.

            El nodo `traceLambda` tiene el atributo:

            * `includeNonstatic` - un valor booleano que indica si deben coincidir con métodos no estáticos (el valor predeterminado es falso);
            * `pattern` - una cadena con el patrón para buscar los métodos lambda.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="method-children"
    title="Nodos secundarios para el método"
  >
    El nodo `method` puede tener varios hijos. Para obtener más información y ejemplos, consulte [resolución de problemas de instrumentación personalizada de Java](/docs/agents/java-agent/custom-instrumentation/troubleshooting-java-custom-instrumentation#separate-transaction).

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
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
            `name`
          </td>

          <td>
            El nombre exacto, que distingue entre mayúsculas y minúsculas, del método que debe coincidir.

            Un nodo del método `name` debe seguir estas reglas:

            * Se pueden instrumentar métodos públicos, protegidos, privados y de paquetes.
            * Se pueden instrumentar métodos estáticos y de instancia.
            * Los constructores no pueden ser instrumentados.
          </td>
        </tr>

        <tr>
          <td>
            `parameters`
          </td>

          <td>
            Los tipos de parámetros del método especificados en orden. Si el elemento `parameters` no está presente, se coincidirán todos los métodos que coincidan con el nombre. Esto incluye declaraciones privadas y protegidas.

            Un nodo del método `parameters` contiene una lista del parámetro del método, especificado por `type` elementos. Estas son las reglas principales para los `type` elementos:

            * Las primitivas se especifican usando su nombre normal: int, flotante, double, long, byte, short, boolean, char.
            * Los objetos requieren una estructura de paquete completa. Por ejemplo, no utilice `String` en XML; en su lugar, utilice `java.lang.String`.
            * No utilice genéricos con objetos de colección. Por ejemplo, escriba `java.util.List` en lugar de `java.util.List<String>`.
            * Incluye soportes para matriz. Por ejemplo, una matriz de números enteros será `int[ ]` y una matriz de cadenas será `java.lang.String[ ]`.
            * Incluya dos juegos de corchetes para una matriz de matriz. Por ejemplo, una matriz de conjuntos de largos sería `long[ ][ ]`.
            * Para enviar el parámetro como un evento analítico a New Relic, agregue un atributo XML al elemento de tipo llamado `attributeName`.
            * Para utilizar un método sin parámetro, el nodo `parameters` debe estar presente para coincidir con un método "sin argumentos".
          </td>
        </tr>

        <tr>
          <td>
            `returnType`
          </td>

          <td>
            El nombre de una clase que distingue entre mayúsculas y minúsculas y que indica un tipo de valor devuelto que debe coincidir. Todos los métodos que devuelvan este tipo de clase coincidirán.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Ejemplo

Aquí hay una clase de muestra y un archivo XML que podría usarse para instrumentar esa clase.

<CollapserGroup>
  <Collapser
    id="package-test"
    title="Clase de muestra"
  >
    ```java
    package test;

    import java.util.HashMap;
    import java.util.Map;
    import java.util.concurrent.Executors;
    import java.util.concurrent.ScheduledExecutorService;
    import java.util.concurrent.TimeUnit;

    public class SampleTester {

        private String configName;
        private Map<String, Long> maxSampleTimes;

        public SampleTester(String pConfigName) {
            configName = pConfigName;
            maxSampleTimes = new HashMap<>();
        }

        public void checkSample(String name, long[] times) {
            if (times != null) {
                maxSampleTimes.put(name, getFirst(times));
            } else {
                maxSampleTimes.put(name, (long) getFirst());
            }
        }

        private Long getFirst(long[] times) {
            return times[0];
        }

        private int getFirst() {
            return 0;
        }

        public void printMaxRepeat(final long max) throws Exception {
            Runnable myRunnable = new Runnable() {
                public void run() {
                    try {
                        printMax(max);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            };

            ScheduledExecutorService scheduledExecutor = Executors.newScheduledThreadPool(1);
            scheduledExecutor.scheduleWithFixedDelay(myRunnable, 0, 10000, TimeUnit.MILLISECONDS);
        }

        private void printMax(long max) {
            System.out.println("max is " + max);
        }
    }
    ```
  </Collapser>

  <Collapser
    id="sample-xml-file"
    title="Ejemplo de archivo de instrumentación XML y explicación"
  >
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <extension xmlns="https://newrelic.com/docs/java/xsd/v1.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="newrelic-extension extension.xsd"
      name="customExtension" version="1.0">

      <instrumentation metricPrefix="EXAMPLE">
        <pointcut transactionStartPoint="true">

          <!--class name is preceded by package name-->
          <className>test.SampleTester</className>
          <method>
            <name>checkSample</name>
            <parameters>
              <type attributeName="sampleName">java.lang.String</type>
              <type>long[]</type>
            </parameters>
          </method>
          <!--two methods with the same name but different signatures can share one node-->
          <method>
            <name>getFirst</name>
          </method>
          <method>
            <name>run</name>
          </method>
        </pointcut>

        <pointcut transactionStartPoint="false" 
          ignoreTransaction="false"
          excludeFromTransactionTrace="false"
          metricNameFormat="SampleTester/methods">
  
          <className>test.SampleTester</className>
          <method>
            <name>printMaxRepeat</name>
          </method>
          <method>
            <name>printMax</name>
          </method>
        </pointcut>

      </instrumentation>
    </extension>
    ```

    El primer bloque del archivo XML especifica el nombre y la versión de la extensión. Como la extensión XML es la predeterminada `enabled`, ese atributo no se especifica.

    El segundo bloque especifica los métodos en `SampleClass` que deben instrumentarse. Se inicia una transacción al comienzo del bloque. Vale la pena señalar que en la clase de ejemplo, hay dos métodos que comparten un nombre (`getFirst`) pero tienen firmas diferentes. Estos están instrumentados con un único nodo de método. Al eliminar el nodo `parameters` , todos los métodos con el mismo nombre pueden coincidir en un nodo de método.

    En el tercer bloque, los métodos especificados no tienen una transacción iniciada en ellos. Esto se debe a que la transacción ya se inició en `run`. La transacción no será ignorada y se incluirá en la traza de la transacción.
  </Collapser>
</CollapserGroup>
