---
title: Monitoreo del navegador y el impacto en el rendimiento
tags:
  - Browser
  - Browser monitoring
  - Performance quality
metaDescription: The negligible amount of overhead required to load browser JavaScript into a webpage results in a significant return of actionable data.
freshnessValidatedDate: never
translationType: machine
---

El fragmento de JavaScript de <InlinePopover type="browser"/>introduce un impacto casi invisible en el rendimiento del sitio web y en la percepción del usuario sobre el tiempo que tarda una página en cargarse. El JavaScript está incluido en un paquete de datos de una página web que se envía de todos modos. Además, inmediatamente comienza a monitorear errores y eventos mientras se ejecuta el resto de la página web. La insignificante cantidad de gastos generales necesarios para cargar JavaScript da como resultado un retorno significativo de datos accionables.

## Impacto general [#overall]

La sobrecarga de JavaScript tiene en cuenta tanto el impacto en el usuario como el impacto en el rendimiento de sus sistemas:

* <DNT>
    **User perception:**
  </DNT>

  Normalmente, el usuario no puede detectar degradaciones de rendimiento en un sitio web de menos de 200 ms. El JavaScript del browser agrega menos de 15 ms en tiempo agregado por carga de página. Esto se divide a lo largo del tiempo, por lo que en ningún momento un usuario podrá percibir ningún impacto en el rendimiento debido a JavaScript.

* <DNT>
    **Webserver and systems:**
  </DNT>

  El monitoreo de la aplicación browser ocurre en el browser del usuario, no en el servidor. El tiempo de procesamiento no tiene un impacto en el consumo de CPU.

Además, tomamos medidas adicionales para minimizar cualquier impacto potencial en las aplicaciones y páginas web que se monitorean. Por ejemplo, el script "cargador" se carga sincrónicamente en `<HEAD>` para garantizar que el monitoreo esté habilitado durante todo el ciclo de vida de la página. Este script se incluye en línea, lo que elimina la necesidad de realizar otra solicitud de red de ida y vuelta a una [red de entrega de contenido (CDN)](/docs/browser/new-relic-browser/performance-quality/security-new-relic-browser#cdn). El "cargador" viene con la carga inicial de la página.

Más adelante en el ciclo de vida de la página, New Relic carga un script de monitoreo adicional de forma asíncrona. Estos scripts no deberían tener ningún efecto perceptible para el usuario y están incluidos en la sobrecarga general de menos de 15 ms por página.

## Impacto de la red [#network]

El monitoreo del navegador también minimiza el tráfico de red para el usuario final al agregar datos localmente (en el cliente) y enviarlos de regreso a New Relic a intervalos periódicos y en los eventos del ciclo de vida de la página `load`, `unload`, `pageshow` y `pagehide`. (Durante los períodos de inactividad de la sesión browser , es posible que no se requieran transmisiones).

### script del agente del navegador [#agent-scripts]

El agente consta de múltiples scripts para reducir el tamaño inicial del "cargador" y soportar la carga sólo del JavaScript necesario para soportar las características del agente que están habilitadas. El primer script, el "cargador", se inserta en línea en el documento HTML. El script restante se descarga de la red de entrega de contenido (js-agente.newrelic.com) cuando ocurre el evento del ciclo de vida de la página `load` . La cantidad de scripts cargados depende del tipo de agente que se esté utilizando. Obtenga más información sobre [los tipos de agente del navegador aquí](/docs/browser/browser-monitoring/installation/install-browser-monitoring-agent/#agent-types).

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        script
      </th>

      <th>
        Lite
      </th>

      <th>
        Pro
      </th>

      <th>
        Profesional + SPA
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tamaño del script en línea
      </td>

      <td>
        10,2 kB
      </td>

      <td>
        15,5 kB
      </td>

      <td>
        17,5 kB
      </td>
    </tr>

    <tr>
      <td>
        Tamaño del script descargado
      </td>

      <td>
        15,3 kB
      </td>

      <td>
        21KB
      </td>

      <td>
        25,4 kB
      </td>
    </tr>
  </tbody>
</table>

<sup>
  Los tamaños se basan en secuencias de comandos minimizadas mediante compresión gzip.
</sup>

### Cosechas agente del navegador [#agent-harvests]

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Tipo de datos
      </th>

      <th>
        Lite
      </th>

      <th>
        Pro
      </th>

      <th>
        Profesional + SPA
      </th>

      <th>
        Frecuencia de cosecha
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Evento [de visualización de página](/attribute-dictionary/?event=PageView)
      </td>

      <td>
        Sí
      </td>

      <td>
        Sí
      </td>

      <td>
        Sí
      </td>

      <td>
        `PageView` los eventos se recopilan una vez inmediatamente después del evento del ciclo de vida de la página `load` . Estos datos son responsables de generar la métrica de visualización de la página en el New Relic browser dashboard UI. Esta es una llamada JSONP a `bam.nr-data.net` o `bam-cell.nr-data.net`. Todos los agentes deben <DNT>**required**</DNT> recopilar un evento `PageView` .
      </td>
    </tr>

    <tr>
      <td>
        Evento [PageViewTiming](/attribute-dictionary/?event=PageViewTiming)
      </td>

      <td>
        Sí
      </td>

      <td>
        Sí
      </td>

      <td>
        Sí
      </td>

      <td>
        `PageViewTiming` Los eventos son recopilados por todos los agentes e incluyen datos de tiempo como mediciones principales de Métricas web. La primera recolección ocurre 10 segundos después del evento del ciclo de vida de la página `load` . Se realizan recopilaciones adicionales cada 30 segundos según sea necesario cuando hay datos para enviar. Consulte los [documentos de PageViewTiming](/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details/#interactivity-metrics) para obtener una lista de eventos informados.
      </td>
    </tr>

    <tr>
      <td>
        [JavaScriptError](/attribute-dictionary/?event=JavaScriptError) métrica
      </td>

      <td>
        No
      </td>

      <td>
        Sí
      </td>

      <td>
        Sí
      </td>

      <td>
        `JavaScriptError` métrica se recopilan cada 10 segundos después del evento del ciclo de vida de la página `load` . Esta cosecha se envía como dato de intervalo de tiempo de métrica y también incluye la métrica Ajax.
      </td>
    </tr>

    <tr>
      <td>
        Ajax métrica
      </td>

      <td>
        No
      </td>

      <td>
        Sí
      </td>

      <td>
        Sí
      </td>

      <td>
        Enviado junto con JavaScriptError métrica como datos de intervalo de tiempo.
      </td>
    </tr>

    <tr>
      <td>
        Evento [AjaxRequest](/attribute-dictionary/?event=AjaxRequest)
      </td>

      <td>
        No
      </td>

      <td>
        Sí
      </td>

      <td>
        Sí
      </td>

      <td>
        `AjaxRequest` los eventos se recopilan cada 10 segundos después del evento del ciclo de vida de la página `load` , a menos que el agente `SPA` esté en uso. Si utiliza el agente `SPA` , la primera recolección se producirá después del evento del ciclo de vida de la página `load` . Las recopilaciones posteriores se realizarán cada 10 segundos o cuando el agente `SPA` note un cambio de ruta.
      </td>
    </tr>

    <tr>
      <td>
        Rastreo de sesión
      </td>

      <td>
        No
      </td>

      <td>
        Sí
      </td>

      <td>
        Sí
      </td>

      <td>
        Los datos del rastreo de sesión se recopilan después del evento del ciclo de vida de la página `load` . La recolección posterior se realiza cada 10 segundos si se han recopilado suficientes datos. rastreo de sesión envía la mayor cantidad de datos, pero están muy muestreados. Solo se habilitan alrededor de 75 páginas vistas por hora para enviar datos de rastreo de sesión.
      </td>
    </tr>

    <tr>
      <td>
        Session Replay
      </td>

      <td>
        No
      </td>

      <td>
        Sí
      </td>

      <td>
        Sí
      </td>

      <td>
        Los eventos Session Replay se recopilan cuando ocurre una de las siguientes situaciones:

        * Cuando los datos comprimidos recopilados para la sesión alcancen un tamaño máximo de 64 KB.
        * Si el usuario permanece en la misma página por más de 60 segundos.
        * Cuando cambia la visibilidad de la página (cambio de pestaña, enfoque, navegación, etc.)

          El extremo puede diferir según la ubicación, pero un ejemplo para EE. UU. sería `https://bam.nr-data.net/browser/blobs`.
      </td>
    </tr>

    <tr>
      <td>
        Evento [de acción de página](/attribute-dictionary/?event=PageAction)
      </td>

      <td>
        No
      </td>

      <td>
        Sí
      </td>

      <td>
        Sí
      </td>

      <td>
        `PageAction` Los eventos se recopilan después del evento del ciclo de vida de la página `load` . Las recopilaciones posteriores ocurren cada 30 segundos.
      </td>
    </tr>

    <tr>
      <td>
        Evento [de interacción del navegador](/attribute-dictionary/?event=BrowserInteraction)
      </td>

      <td>
        No
      </td>

      <td>
        No
      </td>

      <td>
        Sí
      </td>

      <td>
        `BrowserInteraction` Evento se recolectan inmediatamente después de que finaliza la interacción. La primera recolección ocurre después del evento del ciclo de vida de la página `load` . Siempre habrá al menos una interacción que represente la carga inicial de la página. Se recopilan interacciones adicionales solo si la URL cambia (lo que representa un cambio de ruta). `AjaxRequest` evento también se recopilan al mismo tiempo si ocurren durante una interacción.
      </td>
    </tr>
  </tbody>
</table>
