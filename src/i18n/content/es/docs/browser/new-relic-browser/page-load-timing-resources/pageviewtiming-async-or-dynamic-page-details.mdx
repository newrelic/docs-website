---
title: 'PageViewTiming: detalles de página asíncronos o dinámicos'
tags:
  - Browser
  - Browser monitoring
  - Page load timing resources
metaDescription: The PageViewTiming event sends each data point separately to New Relic so you can receive first paint or first interaction data regardless of when it fires.
freshnessValidatedDate: '2024-03-27T00:00:00.000Z'
translationType: machine
---

[El evento`PageViewTiming` ](/attribute-dictionary/?event=PageViewTiming)de monitoreo de browser envía cada punto de datos como un evento separado tan pronto como esté disponible. Debido a que no restringimos el tiempo, puede recibir datos de la primera pintura o de la primera interacción independientemente de cuándo se active. Este documento describe por qué y cómo utilizar `PageViewTiming` y su atributo para consultar datos sobre su sitio, carga de componentes y métrica de rendimiento del usuario, tanto desde el punto de vista visual como de capacidad de respuesta.

## ¿Por qué utilizar PageViewTiming? [#why-pageviewtiming]

Si su aplicación utiliza páginas asincrónicas o dinámicas, es posible que necesite detalles adicionales sobre la carga del sitio o del componente. Pero las páginas pueden cargar contenido de muchas maneras diferentes y el usuario controla cuándo interactúa con ese contenido. Es por eso que algunas métricas de rendimiento centradas en el usuario ocurren fuera del tiempo de carga de la ventana estándar (tiempo de carga de la página) en el agente del navegador.

Por ejemplo, el usuario puede impacientarse y comenzar a hacer clic tan pronto como aparece el contenido en la página web. O bien, pueden esperar para usar la página hasta mucho después de que se cargue el contenido.

El evento `PageViewTiming` proporciona un mecanismo de entrega más en tiempo real que no depende de ningún otro evento. La métrica adicional puede ayudarle a comprender la experiencia del usuario en su sitio, tanto desde el punto de vista visual como de capacidad de respuesta.

## Soporte para los principales web Métricas de Google

A partir de [la versión 1177 del agente](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1177) para monitoreo de navegador, tenemos soporte completo para [Métricas web principales](https://web.dev/vitals/#core-web-vitals). Esta característica está disponible en todas las versiones del agente (Lite, Pro o Pro+SPA).

Tenga en cuenta que las métricas que componen Métricas web principales [evolucionan](https://web.dev/vitals/#evolving-web-vitals) con el tiempo. El conjunto actual se centra en tres aspectos de la experiencia del usuario: carga, interactividad y estabilidad visual. Incluye las siguientes métricas y su respectivo umbral:

* <DNT>
    **[Largest contentful paint (LCP)](https://web.dev/lcp/)**
  </DNT>

  : mide el rendimiento de carga. Para brindar una buena experiencia al usuario, LCP debe ocurrir

  <DNT>
    **within 2.5 seconds**
  </DNT>

  de cuando la página comienza a cargarse por primera vez.

* <DNT>
    **[Interaction to next paint (INP)](https://web.dev/inp/)**
  </DNT>

  : mide la latencia de toda la interacción del usuario con una página. Para brindar una buena experiencia al usuario, las páginas deben tener un INP de

  <DNT>
    **less than 200 milliseconds**
  </DNT>

  .

* <DNT>
    **[Cumulative layout shift (CLS)](https://web.dev/cls/)**
  </DNT>

  : mide la estabilidad visual. Para brindar una buena experiencia al usuario, las páginas deben mantener un CLS de

  <DNT>
    **less than 0.1**
  </DNT>

  .

Para cada una de estas métricas, para asegurarse de alcanzar el objetivo recomendado para la mayoría de sus usuarios, un buen umbral para medir es el <DNT>**75th percentile**</DNT> de cargas de página, segmentadas en dispositivos móviles y de escritorio.

Para obtener más información, vea nuestra [charla de Nerd Days](https://fast.wistia.net/embed/channel/nb8bpgbntl?wchannelid=nb8bpgbntl&wmediaid=n7p4x6skee) sobre el rendimiento percibido.

## Visual detallada, interactividad y capacidad de respuesta métrica. [#interactivity-metrics]

Los eventos `BrowserInteraction` y `PageView` finalizan sus informes cuando reciben el tiempo [de carga de la ventana de la página](/docs/browser/new-relic-browser/page-load-timing-resources/page-load-timing-process) (o carga de la ventana y AJAX). Sin embargo, la pintura y la interactividad métrica pueden ocurrir en cualquier momento. `PageViewTiming` entrega estas métricas como un evento separado a:

* Tenga en cuenta la variabilidad en este momento.
* Evite establecer un tiempo de espera arbitrario.
* Evite mantener `BrowserInteraction` y `PageView` eventos indefinidamente.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Datos adicionales
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `firstPaint` y `firstContentfulPaint`
      </td>

      <td>
        Los atributos [`firstPaint`](/attribute-dictionary/?event=PageViewTiming&attribute=firstPaint) y [`firstContentfulPaint`](/attribute-dictionary/?event=PageViewTiming&attribute=firstContentfulPaint) ya están disponibles con los eventos `BrowserInteraction` y `PageView` . Sin embargo, no siempre se capturan de manera confiable antes de que se active el evento de carga de ventana.

        El uso de `PageViewTiming` le brinda una manera de capturar estas métricas incluso si ocurren después del tiempo de carga de la página original. Esto le brinda una mejor comprensión de la correlación entre la capacidad de respuesta de ese evento de carga y la representación visual de su contenido.
      </td>
    </tr>

    <tr>
      <td>
        `largestContentfulPaint`
      </td>

      <td>
        La métrica [`largestContentfulPaint`](/attribute-dictionary/?event=PageViewTiming&attribute=largestContentfulPaint) está disponible con [la versión del agente 1163 o superior](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1163). Informa el tiempo de renderizado del elemento de contenido más grande visible en la ventana gráfica.

        La investigación de Google encontró que observar cuándo se representó el elemento más grande era una forma más precisa de medir cuándo el contenido principal de una página está cargado y es útil. Para obtener más información sobre esta métrica, incluidas limitaciones y consideraciones, consulte el [borrador del w3c](https://wicg.github.io/largest-contentful-paint/).

        También informamos el atributo de puntuación de cambio de diseño acumulativo con LCP. Este atributo se informa como `cumulativeLayoutShift`.

        La pintura de mayor contenido es una de las tres métricas identificadas por Google como [Métricas web principales](https://web.dev/vitals/). Los valores de LCP de hasta 2,5 segundos se consideran "buenos", entre 2,5 y 4 segundos se consideran "necesita mejorar" y por encima de 4 segundos se consideran "malos".
      </td>
    </tr>

    <tr>
      <td>
        `firstInteraction` y `interactionToNextPaint`
      </td>

      <td>
        Con la adición de [`firstInteraction`](/attribute-dictionary/?event=PageViewTiming&attribute=firstInteraction) y [`interactionToNextPaint`](/attribute-dictionary/?event=PageViewTiming&attribute=interactionToNextPaint), puede determinar rápidamente las formas en que su usuario interactúa con ese contenido visual. Estas métricas te dicen no sólo cuándo interactuaron, sino qué tipo de interacción (mousedown, pointerdown, etc.) y cuánto tiempo les llevó recibir una respuesta de tu sitio.

        La métrica `interactionToNextPaint` se encuentra en medio de las métricas `FirstContentfulPaint` y Time to Interactive (TTI). Mide el tiempo entre el momento en que se puede realizar una primera entrada y el momento en que el hilo principal del browser puede responder a cualquier interacción.

        También informamos el atributo de puntuación del cambio de diseño acumulativo (CLS) en el momento de la primera interacción del usuario. Este atributo se informa como `cumulativeLayoutShift.`

        INP es una de las tres métricas identificadas por Google como [core web vitals](https://web.dev/vitals/). Una puntuación INP de 200 ms o menos se considera "buena", entre 200 y 500 ms se considera "necesita mejorar" y por encima de 500 ms se considera "mala".
      </td>
    </tr>

    <tr>
      <td>
        `cumulativeLayoutShift`
      </td>

      <td>
        [El cambio de diseño acumulativo (CLS)](https://web.dev/cls/) está disponible con [el agente v1177 o superior](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1177). CLS es una métrica importante centrada en el usuario para medir [la estabilidad visual](https://web.dev/user-centric-performance-metrics/#types-of-metrics) porque ayuda a cuantificar la frecuencia con la que el diseño cambia inesperadamente. Un CLS bajo ayuda a garantizar que la página sea [atractiva](https://web.dev/user-centric-performance-metrics/#questions).

        El cambio de diseño acumulativo es una de las tres métricas identificadas por Google como [Métricas web principales](https://web.dev/vitals/). Las puntuaciones CLS de hasta 0,1 se consideran "buenas", entre 0,1 y 0,25 se consideran "necesita mejorar" y por encima de 0,25 se consideran "malas".
      </td>
    </tr>

    <tr>
      <td>
        `interactionToNextPaint`
      </td>

      <td>
        [La interacción con la siguiente pintura (INP)](https://web.dev/inp/) está disponible con [el agente v1227 o superior](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1227). INP es una métrica más nueva para medir [la capacidad de respuesta del tiempo de ejecución](https://web.dev/user-centric-performance-metrics/#types-of-metrics) y el rendimiento percibido por el usuario. Mide la mayor latencia entre la interacción del usuario y la respuesta o repintado de la página. Esta es una métrica experimental pero identificada como significativa agregada en [Web Vitals](https://github.com/GoogleChrome/web-vitals) v3.

        Las puntuaciones INP de hasta 200 ms se consideran "buenas", entre 200 y 500 ms se consideran "necesita mejorar" y por encima de 500 ms se consideran "malas".
      </td>
    </tr>

    <tr>
      <td>
        `timingName`
      </td>

      <td>
        Puede revisar diferentes tipos de actividades con el atributo `timingName` , como `firstPaint`, `firstContentfulPaint`, `firstInteraction`, `largestContentfulPaint`, `pageHide` y `windowUnload`. Por ejemplo, un evento `PageViewTiming` puede tener un `timingName` de `firstPaint` y un valor `firstPaint` de `.03`. El evento también incluirá todos los atributos predeterminados incluidos con los eventos estándar `BrowserInteraction` y `PageView` .
      </td>
    </tr>

    <tr>
      <td>
        `elementId`
      </td>

      <td>
        Este es el `Id`, si se especifica, del elemento `largestContentfulPaint` . Este valor solo se informará con la métrica LCP. Este valor puede ser `null`.
      </td>
    </tr>

    <tr>
      <td>
        `elementSize`
      </td>

      <td>
        Este es el tamaño informado del elemento `largestContentfulPaint` . Este valor solo se informará con la métrica LCP.
      </td>
    </tr>

    <tr>
      <td>
        `longTask`
      </td>

      <td>
        Los informes de tareas largas están disponibles a partir del [agente v1227](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1227). Este evento representa cada entrada observada por la [API experimental PerformanceLongTaskTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming), que informa tareas que bloquean el subproceso principal de la UI durante >50 ms.

        NOTA: Aunque este evento está disponible como característica experimental, los datos correspondientes no se recopilan automáticamente. Debe estar habilitado en la configuración del agente del navegador usando una bandera en el objeto `init` , por ejemplo `init: { page_view_timing: { long_task: true } }`.

        Generalmente se recomienda [dividir y optimizar](https://web.dev/optimize-long-tasks/) estas tareas para evitar retrasos en el procesamiento de la entrada o la interacción del usuario. Las tareas largas pueden afectar o estar estrechamente relacionadas con la métrica `interactionToNextPaint` . Tenga en cuenta que la API actualmente no proporciona un contexto detallado sobre la causa de estas tareas y recopila todas las tareas largas dentro de un marco de navegación, incluso si constan de múltiples funciones diferentes.
      </td>
    </tr>

    <tr>
      <td>
        `pageHide`
      </td>

      <td>
        El evento `pageHide` , disponible con [el agente v1177 o superior](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1177), se envía cuando el documento queda oculto para el usuario. En la práctica moderna, esto señala de forma más fiable el _posible final_ de una sesión de usuario. Este evento siempre acompaña a `windowUnload` si eso ocurre, pero también puede activarse por separado cuando el usuario cambia de pestaña. En ese caso, la descarga no se dispara.

        También informamos el atributo de puntuación de cambio de diseño acumulativo (CLS) con `pageHide`. Este atributo se informa como `cumulativeLayoutShift.`
      </td>
    </tr>

    <tr>
      <td>
        `windowLoad`
      </td>

      <td>
        El evento `windowLoad` está disponible con [el agente v1177 o superior](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1177). Esto se activa cuando se ha cargado toda la página, incluidos todos los recursos dependientes, como hojas de estilo e imágenes. Para obtener documentación de respaldo y compatibilidad browser para el evento `windowLoad`, consulte el [sitio MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event).

        También informamos el atributo de puntuación de cambio de diseño acumulativo (CLS) con `windowLoad`. Este atributo se informa como `cumulativeLayoutShift.`
      </td>
    </tr>

    <tr>
      <td>
        `windowUnload`
      </td>

      <td>
        El evento `windowUnload` , disponible con [el agente v1163 o superior](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1163), se envía cuando se detecta la descarga de la página. En la práctica moderna, esto se basa en la activación del evento de ocultación de página de la ventana y significa que el usuario está navegando.

        También informamos el atributo de puntuación de cambio de diseño acumulativo (CLS) con `windowUnload`. Este atributo se informa como `cumulativeLayoutShift`.
      </td>
    </tr>
  </tbody>
</table>

## Compatibilidad y requisitos [#requirements]

Requisitos:

* Cumple con [los requisitos de instalación](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-new-relic-browser).
* Para informar este evento se requiere [agente del navegador versión 1153 o superior](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes).

Siga nuestras [notas de la versión del agente del navegador](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) para saber cuándo se lanzan nuevas métricas.

Estas métricas son compatibles con las siguientes versiones browser . Para navegadores no compatibles, no se registrará ningún evento `PageViewTiming` .

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Métrica
      </th>

      <th>
        Versiones browser compatibles
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `cumulativeLayoutShift`
      </td>

      <td>
        * Chrome 79

          * Métrica se eleva a estable; Los cambios en la definición de métricas se informarán en este log.

        * Chrome 77

          * Métrica expuesta a través de API: [cambio de diseño acumulativo](https://web.dev/cls/) disponible a través de [API de inestabilidad de diseño](https://github.com/WICG/layout-instability)
      </td>
    </tr>

    <tr>
      <td>
        `firstPaint`

        `firstContentfulPaint`
      </td>

      <td>
        * Chrome 60 o superior para escritorio y dispositivos móviles (vista web de Android y Chrome para Android)
        * Opera 47 o superior para escritorio
        * Opera 44 o superior para móviles Android
        * Samsung Internet para móviles
      </td>
    </tr>

    <tr>
      <td>
        `largestContentfulPaint`
      </td>

      <td>
        * Chrome 77 o superior para computadoras de escritorio y dispositivos móviles
      </td>
    </tr>

    <tr>
      <td>
        `interactionToNextPaint`
      </td>

      <td>
        * Chrome 96 o superior

        * Borde 96 o superior

          Según la API de web-vitals, la compatibilidad la determina [PerformanceEventTiming.interactionId](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEventTiming/interactionId#browser_compatibility).
      </td>
    </tr>

    <tr>
      <td>
        `longTask`
      </td>

      <td>
        * Chrome 58 o superior

        * Borde 79 o superior

          El soporte está determinado por [PerformanceLongTaskTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming#browser_compatibility).
      </td>
    </tr>

    <tr>
      <td>
        `pageHide`
      </td>

      <td>
        Actualmente, este evento es compatible con la mayoría de las versiones browser modernos, excepto Safari inferior a 14.1 (escritorio) o 14.5 (iOS). [Matriz de compatibilidad vía documentación de MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event#browser_compatibility).
      </td>
    </tr>

    <tr>
      <td>
        `windowLoad`
      </td>

      <td>
        Actualmente, este evento es compatible con todos los navegadores de escritorio y móviles. [Matriz de compatibilidad vía documentación de MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event#Browser_compatibility).
      </td>
    </tr>

    <tr>
      <td>
        `windowUnload`
      </td>

      <td>
        Actualmente, este evento es compatible con todos los navegadores de escritorio y móviles. [Matriz de compatibilidad vía documentación de MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/pagehide_event#Browser_compatibility).
      </td>
    </tr>
  </tbody>
</table>

## Cambio de diseño acumulativo [#cumulative-layout-shift]

El cambio de diseño acumulativo (CLS) es una métrica que mide la estabilidad del contenido de una página web. Para obtener una descripción completa, consulte [web.dev/cls](https://web.dev/cls/).

### ¿Cómo se captura CLS en New Relic?

Los cambios en el diseño de la página según lo informado por la [API Layout Instability](https://developer.mozilla.org/en-US/docs/Web/API/Layout_Instability_API) se agregan a lo largo de la vida de la página y se informan como un atributo en todos los eventos `PageViewTiming` , lo que representa el valor CLS cuando ocurrió ese evento.

Usando este modelo, el usuario puede ver su valor CLS en diferentes puntos de la vida de la página; por ejemplo, CLS valora hasta que el usuario por primera vez interactúe con la página u oculte la página.

### Aproximación de otras fuentes CLS

Lighthouse captura el valor CLS solo hasta el momento en que se carga una página, lo cual es útil en un entorno de desarrollo o de laboratorio. Puede aproximar los valores de Lighthouse observando el evento `windowLoad` `PageViewTiming` .

El informe CrUX utiliza valores capturados durante la vida útil de la página, lo que es útil para analizar los peores cambios en un entorno RUM. Puede aproximar los valores de CrUX observando el atributo CLS en el evento `windowUnload` `PageViewTiming` . Estos valores no serán exactamente iguales debido a diferentes conjuntos de muestras y a una diferencia en cómo se incluyen los valores de las páginas web de larga duración. El agente de monitoreo de navegador New Relic captura CLS cuando se descarga la página, mientras que CrUX recopila y actualiza la métrica durante la vida útil de la página.

### Cómo se agrega CLS

A partir de julio de 2021, Google actualizó la forma en que se agregan los valores CLS. Las versiones v12xx del agente de monitoreo del navegador utilizan el método descrito en [Evolución de la métrica CLS](https://web.dev/cls-web-tooling/).

<DNT>
  **Browser monitoring agent v12xx or higher:**
</DNT>

Los valores de cambio de diseño se capturan en ventanas. Los cambios de diseño que ocurrieron con un intervalo de 1 segundo entre sí, pero con no más de 5 segundos entre el primer y el último cambio, son parte de la misma ventana. Una puntuación CLS representa la suma de los valores de cambio de diseño de la ventana con la suma más alta de valores de cambio de diseño.

<DNT>
  **Prior to Browser agent v12xx:**
</DNT>

Una puntuación CLS representa la suma de todos los cambios de diseño que ocurrieron hasta ese momento de la vida de la página.

## Consulta los datos de tu evento [#insights-queries]

Aquí hay algunos ejemplos de consultas sobre los datos del evento para ayudarlo a comenzar.

<CollapserGroup>
  <Collapser
    id="percentile-time"
    title="Percentil sobre series temporales"
  >
    Muestre el percentil 95 de la primera pintura y la primera pintura con contenido en una serie temporal:

    ```
    SELECT FILTER(percentile(firstPaint, 95), where(timingName = 'firstPaint')) as 'fp', FILTER(percentile(firstContentfulPaint, 95), where(timingName = 'firstContentfulPaint')) as 'fcp' FROM PageViewTiming TIMESERIES 1 minute SINCE 1 hour ago
    ```
  </Collapser>

  <Collapser
    id="percentile-transaction"
    title="Percentil por transacción e interacción"
  >
    Muestre el percentil 95 de interacción a continuación en una serie de tiempo, facetado por nombre de transacción y tipo de interacción:

    ```
    SELECT percentile(interactionToNextPaint, 75) as 'INP' FROM PageViewTiming WHERE timingName = 'interactionToNextPaint' TIMESERIES 1 minute FACET browserTransactionName, interactionType SINCE 3 hours ago
    ```
  </Collapser>

  <Collapser
    id="histogram-delay"
    title="Histograma de tiempos de retraso"
  >
    Muestre un histograma de interacción con los siguientes tiempos de pintura facetados por los rangos de tiempo de la primera interacción:

    ```
    FROM PageViewTiming SELECT percentile(interactionToNextPaint, 75) WHERE entityGuid = ‘xyz’ FACET `pageUrl` SINCE 24 hours ago
    ```
  </Collapser>
</CollapserGroup>
