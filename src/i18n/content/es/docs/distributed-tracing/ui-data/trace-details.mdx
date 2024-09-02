---
title: Comprender la página UI de detalles de traza
tags:
  - Distributed tracing
  - UI and data
  - Trace details
metaDescription: 'Dive deeper into New Relic''s distributed tracing feature: learn how to use and understand the trace details UI.'
freshnessValidatedDate: '2023-07-19T00:00:00.000Z'
translationType: machine
---

Una vez que seleccione una traza de la lista de trazas, será dirigido a la página de detalles de la traza en la UI. Utilice los detalles de la traza para comprender el flujo de operaciones que componen un rastreo distribuido y ajuste la vista para encontrar la información más importante para usted.

<img
  title="Trace details page"
  alt="New Relic distributed tracing UI - trace details page"
  src="/images/distributed-tracing-trace-details-page.webp"
/>

<figcaption>
  Selecciona una traza del listado de trazas para ver detalles sobre la misma.
</figcaption>

Vea formas de mostrar los tramos de su traza:

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
      La vista de línea de tiempo es una vista de alta densidad de todos los tramos de la traza. Esta vista le permite desplazarse rápidamente por toda la traza y ver cómo la latencia y los errores se propagan a través de la traza y a través de los límites de la entidad. Puede seleccionar tramos desde esta vista para ver los detalles del tramo en la vista de cascada debajo de ella.
    </TabsPageItem>

    <TabsPageItem id="latency-view">
      La vista de latencia le muestra cuánta latencia aporta cada entidad en la traza, así como el número de intervalos de error por entidad. La latencia aportada por una entidad es el tiempo de reloj en el que tenía uno o más procesos en ejecución pero **no** estaba realizando ninguna llamada externa o de base de datos. Aquí hay dos ejemplos:

      * Si una entidad tiene un proceso que dura 500 ms, pero 400 ms de ese tiempo está realizando una llamada externa, se muestra que contribuye con 100 ms de latencia a la traza.

      * Si una entidad tiene tres procesos ejecutándose en paralelo durante un segundo y ninguno de ellos realizó llamadas externas, se muestra que contribuye con un segundo de latencia a la traza.

        <img
          title="Latency view"
          alt="Screenshot showing the distributed tracing latency view"
          src="/images/distributed-tracing-trace-details-page-latency-view.webp"
        />
    </TabsPageItem>

    <TabsPageItem id="waterfall-view">
      La vista en cascada en la sección inferior de la página muestra un flujo detallado de todas las operaciones que componen el rastreo distribuido. Esto le permite ver el contexto exacto del que surgen la latencia y los errores.

      ### Controles de cascada [#waterfall-controls]

      La vista en cascada tiene una serie de controles para que sea más fácil encontrar tramos que le interesen:

      * <DNT>**Expand all/Collapse all**</DNT>: Utilice esta opción para alternar entre mostrar cada tramo (incluido el tramo en proceso) y mostrar tramos colapsados.

      * <DNT>**Standard/Manual**</DNT>: En el modo estándar, obtienes una vista semiampliada que incluye el primer tramo de cada proceso. En el modo manual, solo ves lo que expandes.

        * Tanto

          <DNT>
            **Standard**
          </DNT>

          como

          <DNT>
            **Manual**
          </DNT>

          son anulados por

          <DNT>
            **Expand all**
          </DNT>

          , que muestra todos los intervalos.

        * Si está en modo estándar o manual y hace clic en

          <DNT>
            **Collapse all**
          </DNT>

          , la cascada se restablece al valor predeterminado para el modo que está utilizando.

      * <DNT>**Focus on**</DNT>: Si su intervalo tiene errores o anomalías, verá casillas de verificación para cada uno de estos tipos. Si marca estas casillas, su vista en cascada colapsará todos los demás tipos de tramos y solo mostrará errores codificados por colores o tramos anómalos. Ésta es una forma rápida de encontrar tramos problemáticos.<img style={{ width: "70%",align: "left" }} title="Screenshot showing the color coding of focus on" alt="Screenshot showing the color coding of focus on" src="/images/distributed-tracing_screenshot-crop_focus-on-example.webp"/>

      * <DNT>**Maximize**</DNT>: Esto te permite ver más tramos en la pantalla expandiendo la cascada y ocultando el mapa de entidades.

        ### Propiedades del tramo de cascada [#span-icons]

        La UI indica las propiedades del tramo con estos iconos:

        <table id="span-types">
          <thead>
            <tr>
              <th style={{ width: "130px" }}>
                Propiedad de extensión
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
                  alt="New Relic distributed tracing service icon"
                  src="/images/new-relic-distributed-tracing-service-icon.webp"
                />
              </td>

              <td>
                Este icono representa un tramo que es el punto de entrada de un servicio.
              </td>
            </tr>

            <tr id="in-process">
              <td>
                En proceso
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-in-process-span-icon.png"
                  alt="New Relic distributed tracing in-process span icon "
                  src="/images/new-relic-distributed-tracing-inprocess-icon.webp"
                />
              </td>

              <td>
                Este icono representa un [lapso en proceso](#in-process), que es un lapso que tiene lugar dentro de un proceso (a diferencia de un lapso entre procesos). Ejemplos: instrumentación de middleware, tramos creados por el usuario.
              </td>
            </tr>

            <tr>
              <td>
                Almacenamiento de datos
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-database-span-icon.png"
                  alt="New Relic distributed tracing datastore span icon"
                  src="/images/new-relic-distributed-tracing-databases-icon.webp"
                />
              </td>

              <td>
                Este icono representa una llamada de intervalo a un almacenamiento de datos.
              </td>
            </tr>

            <tr>
              <td>
                Externo
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-external-span-icon.png"
                  alt="New Relic distributed tracing external span icon"
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
                  alt="New Relic distributed tracing browser span icon"
                  src="/images/distributed-tracing-browser-span-icon.webp"
                />
              </td>

              <td>
                Este icono representa una [extensión de aplicación del navegador](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing).
              </td>
            </tr>

            <tr>
              <td>
                Lambda
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-lambda-icon.png"
                  alt="New Relic distributed tracing external span icon"
                  src="/images/new-relic-distributed-tracing-lambda-icon.webp"
                />
              </td>

              <td>
                Este icono representa un intervalo de una [función Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/introduction-new-relic-monitoring-aws-lambda).
              </td>
            </tr>
          </tbody>
        </table>

        Algunos tramos tendrán indicadores adicionales:

        <table id="span-types-table">
          <thead>
            <tr>
              <th style={{ width: "130px" }}>
                Propiedad de extensión
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
            <tr id="connecting-lines">
              <td>
                Tipo de conexión
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-lines-image.png"
                  alt="New Relic distributed tracing connecting lines image"
                  src="/images/new-relic-distributed-tracing-lines-image.webp"
                />
              </td>

              <td>
                Las líneas continuas indican una relación directa entre padres/hijos; en otras palabras, un proceso o función llama directamente a otro. Una línea de puntos indica una relación no directa. Para más información sobre las relaciones entre tramos, consulte [estructura de traza](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure).
              </td>
            </tr>

            <tr>
              <td>
                Errores
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-error-icon.png"
                  alt="New Relic distributed tracing error icon"
                  src="/images/new-relic-distributed-tracing-error-icon.webp"
                />
              </td>

              <td>
                Un lapso con un error. Consulte [Cómo entender los errores de extensión](#error-tips).
              </td>
            </tr>

            <tr>
              <td>
                Anómalo
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-anomalous-icon.png"
                  alt="New Relic distributed tracing datastore span icon"
                  src="/images/new-relic-distributed-tracing-anomalous-icon.webp"
                />
              </td>

              <td>
                Este icono representa la detección de un [lapso anómalo](#anomalous-spans).
              </td>
            </tr>

            <tr>
              <td>
                Tramos huérfanos
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-fragmented-icon.png"
                  alt="New Relic distributed tracing orphaned span icon"
                  src="/images/new-relic-distributed-tracing-orphan-icon.webp"
                />
              </td>

              <td>
                Algunos tramos pueden quedar "huérfanos" o separados de la traza. Estos tramos aparecerán en la parte inferior de la traza. Para más detalles, ver [Traza fragmentada](#fragmented-traces).
              </td>
            </tr>

            <tr>
              <td>
                Varios nombres de aplicaciones
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-multiple-app-names-indicator.png"
                  alt="New Relic distributed tracing multiple app names indicator"
                  src="/images/new-relic-distributed-tracing-multiapp-icon.webp"
                />
              </td>

              <td>
                Cuando está al lado de un nombre de extensión, representa una entidad que ha tenido [configurados varios nombres de aplicaciones](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app). Seleccione esto para ver todos los nombres de aplicaciones a las que informa. Para buscar datos de traza por nombres de aplicaciones alternativos, utilice el atributo `appName` .
              </td>
            </tr>

            <tr>
              <td>
                Diferencia horaria cliente/servidor
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-client-server-time-indicator.png"
                  alt="New Relic distributed tracing client-server time difference indicator"
                  src="/images/new-relic-distributed-tracing-client-server-time-indicator.webp"
                />
              </td>

              <td>
                Si el indicador de duración de un lapso no está completamente coloreado (como en este ejemplo), significa que hay una discrepancia de tiempo entre la duración del lado del servidor y la duración del lado del cliente para esa actividad. Para obtener más información sobre esto, consulte [Diferencia horaria cliente/servidor](#client-server-time).
              </td>
            </tr>
          </tbody>
        </table>
    </TabsPageItem>
  </TabsPages>
</Tabs>

## Panel de detalles del tramo [#span-details]

Cuando selecciona un tramo, se abre un panel con detalles del tramo. Estos detalles pueden ser útiles para la resolución de problemas de rendimiento. Esta página tiene tres pestañas:

* <DNT>
    **Performance**
  </DNT>

  : Verá gráficos que muestran la duración promedio y el rendimiento de esa operación de tramo, así como también cómo se compara el rendimiento de este tramo específico con el promedio.

* <DNT>
    **Attributes**
  </DNT>

  : Puede obtener más información sobre el atributo en nuestro [diccionario de datos](/attribute-dictionary/?dataSource=Distributed+Tracing&event=Span).

* <DNT>
    **Details**
  </DNT>

  : Puede ver detalles, como el [nombre completo del tramo](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#prettified-span-names) y la fuente de datos.

Lo que muestra un tramo se basa en su tipo de tramo. Por ejemplo, los detalles del intervalo de almacenamiento de datos incluirán la consulta de la base de datos. Para obtener más información sobre la estructura de la traza y cómo se determinan las propiedades de extensión, consulte [estructura de la traza](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure).

## Span atributo [#span-attributes]

Si desea obtener más información sobre los datos de `Span` :

* Explore los datos de su intervalo utilizando el [generador de consultas](/docs/chart-builder/use-chart-builder/get-started/introduction-chart-builder).
* Para ver el atributo predeterminado adjunto a los datos de extensión, use el [diccionario de datos](/attribute-dictionary/?event=Span).
* Consulte estos [ejemplos de consulta](/docs/apm/distributed-tracing/ui-data/example-insights-queries-distributed-trace-data) para obtener ayuda con la consulta NRQL utilizando estos atributos.

## Ver registro relacionado [#view-your-logs]

Si está utilizando nuestra característica [de inicio de sesión en contexto](/docs/logs/logs-context/configure-logs-context-apm-agents/) , podrá ver cualquier registro que esté vinculado a su traza:

1. Vaya a la página de detalles de la traza haciendo clic en una traza.

2. En la esquina superior izquierda de la página de detalles del tramo, haga clic en la pestaña

   <DNT>
     **Logs**
   </DNT>

   .

3. Para obtener detalles relacionados con un mensaje de registro individual, haga clic directamente en el mensaje.
