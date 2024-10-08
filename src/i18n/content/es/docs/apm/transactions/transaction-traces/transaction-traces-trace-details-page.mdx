---
title: Sumérgete en la traza de la transacción
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: APM's Trace Details page shows additional timing details about the individual segments that make up a transaction trace.
freshnessValidatedDate: never
translationType: machine
---

Una transacción es una agrupación de llamadas a funciones y métodos que comprenden una única unidad de trabajo. La transacción a menudo se asigna a una URL, pero no siempre. En <InlinePopover type="apm"/>, puedes ver todas tus transacciones para una entidad en particular en la pestaña **Transactions** . Si hace clic en una transacción específica en la pestaña de transacciones, verá datos de _todos los usuarios_ de _todos los tiempos_.

Pero si desea obtener más información sobre lo que le sucedió a un usuario _específico_ durante una instancia _específica_ , debe utilizar **Transaction traces**. Con la **pestaña Trace details** podrás:

* **Identificar segmentos lentos**: los segmentos que ocuparon más del 25 % del tiempo total de traza se marcan como "tramos lentos", lo que dirige la atención al posible cuello de botella.
* **Visualice sus transacciones**: vea una representación gráfica del cronograma de la transacción que muestra la duración de diferentes segmentos como llamadas de base de datos, llamadas externas o ejecución de código.
* **Solucione problemas de manera eficiente**: filtre sus datos para centrarse exclusivamente en tramos lentos.

## Cómo funciona [#how-it-works]

Al seleccionar una transacción específica en la **pestaña Transactions** se abrirá la **pestaña Transaction details**. Desde allí, seleccione una transacción en la tabla **Transaction trace** para abrir la **página Trace detailsa**. La **página Trace details** proporciona una inmersión profunda e intrincada en la experiencia _de un usuario_ con una transacción en una _sola instancia_. Explore sus datos utilizando una de tres vistas: línea de tiempo, latencia o cascada.

<img
  title="transaction trace details"
  alt="A screenshot depicting the transaction trace details view."
  src="/images/apm_screenshot-crop_transaction-trace-details.webp"
/>

<figcaption>
  Ir a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction trace) > Trace details.**</DNT>
</figcaption>

<Tabs>
  <TabsBar>
    <TabsBarItem id="timeline-view">
      Vista de línea de tiempo
    </TabsBarItem>

    <TabsBarItem id="latency-view">
      Vista de latencia
    </TabsBarItem>

    <TabsBarItem id="waterfall-view">
      Vista de la cascada
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="timeline-view">
      La vista de la línea de tiempo de la traza contiene una visualización visual condensada interactiva de la traza. El color del nodo presentado en esta vista coincide con la leyenda de la cascada para la categoría de cada segmento.

      Al pasar el cursor sobre los nodos en esta vista, se mostrará el nombre del segmento encima de la línea de tiempo. Al hacer clic en un nodo dentro de esta vista, se seleccionará el mismo nodo en la cascada y se abrirá el panel de detalles del segmento. Un arrastre horizontal en esta vista filtrará los nodos presentados en la cascada a aquellos que ocurren dentro de la ventana seleccionada. Puede cambiar la ventana filtrada moviendo manualmente los controles verdes o haciendo clic en el botón **Reset timeline** .

      <img
        title="Timeline view"
        alt="transaction-traces-timeline-view.png"
        src="/images/distributed-tracing-trace-details-page-timeline-view.webp"
      />
    </TabsPageItem>

    <TabsPageItem id="latency-view">
      ### Vista de latencia [#latency]

      La sección Vista de latencia proporciona información valiosa sobre los seis servicios o componentes más lentos que contribuyen a la duración general de la traza, junto con sus contribuciones individuales y recuentos de nodos lentos.

      Aspectos clave a tener en cuenta:

      * La duración informada de un servicio es la suma de la duración exclusiva de todos los nodos que se originan en ese servicio.
      * Al hacer clic en un servicio de un gráfico circular o de una tabla, se seleccionará el primer nodo de la cascada de ese servicio.
      * Cuando más de 6 servicios contribuyen a una traza, puede existir una categoría denominada **Other** , que contiene datos acumulados de todos los servicios en la traza, excluyendo los 6 más lentos. La categoría **Other** no responde a los clics en la tabla o el gráfico circular.

        <img
          title="Latency view"
          alt="transaction-traces-latency-view.png"
          src="/images/distributed-tracing-trace-details-page-latency-view.webp"
        />
    </TabsPageItem>

    <TabsPageItem id="waterfall-view">
      La cascada muestra un árbol de nodos de segmentos organizados en ramas según la ruta de llamada. Cada segmento muestra información sobre el servicio de origen, incluido el nombre del servicio, el tipo de segmento y la duración del segmento.

      ### Navegando por la cascada

      La vista en cascada tiene varios controles para que sea más fácil encontrar los segmentos que le interesan:

      * **Expandir/Contraer**: muestre u oculte fácilmente segmentos individuales o ramas enteras con las flechas.

      * **Centrarse en tramos lentos**: si su traza tiene tramos lentos, haga clic en la casilla de verificación para filtrar otros segmentos y centrarse en el cuello de botella potencial al instante.

      * **Leyenda**: haga clic en cualquier color de la leyenda para ver detalles sobre los segmentos que pertenecen a esa categoría de servicio.

        ### Leyenda de la cascada [#waterfall-legend]

        La cascada se divide en diferentes segmentos:

        Amarillo: Más del 25% del tiempo total de transacción se gastó en este segmento.

        <img
          title="Slow segment background."
          alt="icon-alerts-yellow.png"
          src="/images/apm_icon_yellow-alert.webp"
        />

        Rayado: Segmentos con clases y métodos no instrumentados con la configuración actual del agente.

        <img
          title="uninstrumented segment"
          alt="The icon that represents and uninstrumented segment"
          src="/images/apm_icon_uninstrumented-segment.webp"
        />

        Cada segmento de la cascada muestra una barra que representa su duración en relación con la duración de la traza. El color de esta barra indica si el segmento pertenece al código de la aplicación, a llamadas de base de datos o a llamadas externas.

        <img
          title="transaction trace waterfall"
          alt="A screenshot showing the transaction trace waterfall view in the UI."
          src="/images/apm_screenshot-crop_transaction-trace-waterfall.webp"
        />

        ### Propiedades del segmento de cascada [#icons]

        Estos iconos pueden identificar cada segmento:

        <table id="segment-types">
          <thead>
            <tr>
              <th style={{ width: "130px" }}>
                Propiedad de segmento
              </th>

              <th style={{ width: "110px" }}>
                Indicador
              </th>

              <th>
                Descripción
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                Servicio
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-service-span-icon.png"
                  alt="New Relic distributed tracing service icon."
                  src="/images/new-relic-distributed-tracing-service-icon.webp"
                />
              </td>

              <td>
                Este icono representa un nodo que es el punto de entrada de un servicio.
              </td>
            </tr>

            <tr id="in-process">
              <td>
                En proceso
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-in-process-span-icon.png"
                  alt="New Relic distributed tracing in-process span icon."
                  src="/images/new-relic-distributed-tracing-inprocess-icon.webp"
                />
              </td>

              <td>
                Este icono representa un nodo en proceso, que es un nodo que ocurre dentro de un proceso (a diferencia de un nodo entre procesos). Los ejemplos incluyen instrumentación de middleware y nodos creados por el usuario.
              </td>
            </tr>

            <tr>
              <td>
                Almacenamiento de datos
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-database-span-icon.png"
                  alt="New Relic distributed tracing datastore node icon."
                  src="/images/new-relic-distributed-tracing-databases-icon.webp"
                />
              </td>

              <td>
                Este icono representa una llamada de segmento a un almacenamiento de datos.
              </td>
            </tr>

            <tr>
              <td>
                Externo
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-external-span-icon.png"
                  alt="New Relic distributed tracing external node icon."
                  src="/images/new-relic-distributed-tracing-external-icon.webp"
                />
              </td>

              <td>
                Este icono representa una categoría que representa una llamada a un servicio externo realizada a través de HTTP.
              </td>
            </tr>

            <tr>
              <td>
                Aplicación browser
              </td>

              <td>
                <img
                  title="distributed-tracing-browser-span-icon.png"
                  alt="New Relic distributed tracing browser node icon."
                  src="/images/distributed-tracing-browser-span-icon.webp"
                />
              </td>

              <td>
                Este icono representa un [segmento de la aplicación del navegador](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing).
              </td>
            </tr>

            <tr>
              <td>
                Lambda
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-lambda-icon.png"
                  alt="New Relic distributed tracing external node icon."
                  src="/images/new-relic-distributed-tracing-databases-icon.webp"
                />
              </td>

              <td>
                Este icono representa un nodo de una [función Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/introduction-new-relic-monitoring-aws-lambda).
              </td>
            </tr>
          </tbody>
        </table>

        ### Reglas de agrupación de segmentos en cascada [#rollup]

        New Relic agrupa automáticamente llamadas a métodos rápidos y repetidos dentro de la cascada para hacer que la compleja traza de la transacción sea más fácil de entender. Agrupar segmentos le ayuda a centrarse en áreas potencialmente problemáticas sin sentirse abrumado por demasiados segmentos.

        Así es como funciona:

      * **Llamadas rápidas**: cuando ve un segmento titulado `fast calls`, significa que New Relic ha agrupado varias llamadas completadas rápidamente (menos de 7,5 ms cada una). Por lo general, no se trata de problemas de rendimiento, pero puede ampliar el grupo para ver segmentos individuales si es necesario.

      * **Llamadas idénticas**: cuatro o más llamadas idénticas consecutivas a menudo indican un problema N+1, por lo que New Relic las colapsa para resaltar el problema potencial. La ampliación del grupo colapsado revela las tres primeras llamadas a análisis.
    </TabsPageItem>
  </TabsPages>
</Tabs>

## Profundice en sus datos [#deep-dive]

### Tramos lentos [#slow-spans]

Un nodo marcado como _tramo lento_ cumple los siguientes criterios:

* El segmento es un nodo hoja o de salida, lo que significa que este nodo no tendrá hijos.
* El segmento tiene una duración exclusiva mayor o igual al 25% de la duración total de la traza.

### Código de aplicación en traza [#application-code]

Si un segmento aparece como **Application code** en la tabla, indica que esa sección de código no fue instrumentada. Puede utilizar [instrumentación personalizada](/docs/apm/other-features/metrics/custom-instrumentation) para obtener más detalles sobre esa parte del código. Los segmentos suelen aparecer como **Application code** para [traza parcial](#partial).

### Traza parcial [#partial]

Por razones de rendimiento, APM solo captura los primeros 2000 segmentos de una traza de la transacción (900 para Node.js). Si una traza de la transacción excede ese número de segmentos, el agente trunca la traza de la transacción y muestra un mensaje en la parte superior de la página <DNT>**Details**</DNT> :

`This is a partial trace.`

El agente APM tiene diferentes reglas sobre cuándo truncar segmentos.

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Agente APM
      </th>

      <th>
        Reglas de segmento truncado
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Go
      </td>

      <td>
        La duración del segmento debe ser mayor que el valor [`TransactionTracer.SegmentThreshold`](/docs/agents/go-agent/configuration/go-agent-configuration#txn-tracer-segment-threshold) establecido en la configuración del segmento Go.
      </td>
    </tr>

    <tr>
      <td>
        Java, .NET, Ruby
      </td>

      <td>
        Estos agentes truncan la traza cronológicamente. Para obtener más información, consulte la documentación del rastreador de transacciones para [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-transaction-segments), [.NET](/docs/agents/net-agent/configuration/net-agent-configuration#transaction_tracer) o [Ruby](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer) , según corresponda.
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        El agente de Node.js solo captura los primeros 900 segmentos de una traza de la transacción. Para obtener más información, consulte [Configuración del rastreador de transacciones de Node.js.](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_tracer_config)
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        Se trunca según la duración del segmento; los 2.000 segmentos más lentos se capturan para la traza. Para obtener más información, consulte [Configuración del rastreador de transacciones PHP](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page/).
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        Se trunca según la duración del segmento; los 2.000 segmentos más lentos se capturan para la traza. Para obtener más información, consulte [Configuración del rastreador de transacciones de Python](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-settings).
      </td>
    </tr>
  </tbody>
</table>

### Rastreo distribuido [#distributed-traces]

Cuando una traza de la transacción se basa en datos de rastreo distribuido, puede ver el rastreo distribuido completo haciendo clic en el enlace de rastreo distribuido en el encabezado de la página.

Cosas a tener en cuenta:

* Todos los atributos se agrupan en una única sección `Attributes` en lugar de dividirse en los tres tipos de atributos predeterminados.
* Los nombres de los segmentos métricos pueden diferir ligeramente entre rastreo distribuido y traza de la transacción.
* El rastreo del stack no se muestra en el atributo del segmento.
* La página de detalles de la traza mostrará información ligeramente diferente cuando mire un rastreo distribuido en lugar de una traza de la transacción.

## Solucionar problemas con los detalles del segmento [#segment-details]

Cuando selecciona un segmento, se abre un panel con tres páginas de detalles de segmentos independientes. Estas pestañas pueden ayudar a solucionar problemas de rendimiento.

1. Pestaña rendimiento:

   * **Visualice las tendencias de desempeño**: los gráficos muestran la duración promedio y el rendimiento de la operación de un segmento, revelando patrones y valor atípico potencial.
   * **Comparar y contrastar**: vea cómo el rendimiento de este segmento específico se compara con el promedio, identificando áreas que podrían necesitar atención.

2. Pestaña de atributos:

   * **Explorar más a fondo**: comprender los significados de los atributos y las posibles implicaciones en la resolución de problemas. Puede obtener más información utilizando nuestro [diccionario de datos](/attribute-dictionary/?dataSource=Distributed+Tracing&event=Span).

3. Pestaña de detalles:

   * **Información fundamental**: vea detalles críticos como el nombre completo del segmento, la fuente de datos y los metadatos relevantes. Puede obtener más información en nuestros [documentos de rastreo distribuido](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#prettified-span-names).
   * **Información valiosa personalizada**: descubra información específica del segmento crucial para la resolución de problemas, como la consulta de la base de datos para los segmentos de almacenamiento de datos.

Los segmentos muestran la fecha según su tipo de segmento. Por ejemplo, los detalles de un segmento de almacenamiento de datos incluirán la consulta de la base de datos.
