---
title: Compare el rendimiento de carga de la página en browser y el monitoreo sintético
tags:
  - Synthetics
  - Synthetic monitoring
  - Administration
metaDescription: 'For a direct page load time comparison between real user (browser) interactions and synthetic monitors, use New Relic''s comparative charting feature.'
freshnessValidatedDate: never
translationType: machine
---

[El monitoreo sintético](/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics) verifica periódicamente sus sitios web, transacciones comerciales críticas y extremos de API para medir el rendimiento óptimo. Nuestro [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)rastrea los resultados reales del rendimiento de la página web en todas las variaciones de dispositivos, navegadores y velocidades de conexión. Usados juntos, proporcionan una comparación directa del tiempo de carga de la página entre la interacción del usuario real (browser) y el monitor Sintético.

<img
  title=""
  alt=""
  src="/images/browser_screenshot-full_synthetic-chart.webp"
/>

## Comparar rendimiento y tendencias [#features]

La característica de gráficos comparativos de New Relic ayuda a los gerentes y equipos de operaciones al proporcionar:

* Punto de referencia para el tiempo de carga de la página
* Información adicional valiosa para ayudarle a planificar dónde optimizar su sitio
* Comparaciones de las tendencias de Sintético con el rendimiento real browser sin necesidad de cambiar entre nuestras capacidades de monitoreo.

Por ejemplo, durante una interrupción de la página, puede comparar las tendencias de monitoreo sintético con comparaciones reales de monitoreo de browser para ver si un problema también es visible en Sintético UI, o si es causado por variables fuera de New Relic. Esto le ayuda a saber de manera más eficiente dónde actuar.

## Que necesitas [#requirements]

La característica de gráficos comparativos requiere:

* Monitoreo de browser habilitado con el [agente SPA del browser](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring#spa) ([versión 885](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) o superior).
* Un [browser sintético o monitorscripted](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors) con una o más pruebas en las mismas URL monitoreadas por el agente del browser.

## Ver datos de comparación [#view-ui]

<img
  title="synthetic monitors chart"
  alt="synthetic monitors chart"
  src="/images/browser_screenshot-full_synthetic-monitors-comparison-chart.gif"
/>

<figcaption>
  Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser >**</DNT> (seleccione una aplicación browser ) <DNT>**> Page views >**</DNT> (haga clic en un monitor de página mediante monitoreo sintético) > (desplácese hacia abajo hasta el gráfico <DNT>**Synthetic monitors comparison**</DNT>).
</figcaption>

La característica de gráficos comparativos aparece cada vez que el monitoreo sintético identifica una coincidencia de URL con el monitoreo del browser y puede compararla.

Según las [fuentes de datos de comparación](#data-sources), el gráfico <DNT>**Synthetic monitors comparison**</DNT> muestra:

* Comparación del porcentaje de velocidad general entre las visitas a la página browser (usuario real) y cualquier URL coincidente encontrada en el monitor Sintético que el usuario tiene permisos para ver.
* Número de URL encontradas en el monitor Sintético que coinciden con la URL acumulada browser

### ¿No ves datos en el gráfico <DNT>**Synthetic monitors comparison**</DNT> ?

Si no ve datos, tenga en cuenta que en algunos casos el monitor simple browser finaliza antes de que el agente del browser haya tenido la oportunidad de recopilar el evento `BrowserInteraction`. En este caso, no se muestran datos de gráficos comparativos en la UI. Para resolver este problema, cree un script de monitor de browser con y agregue una llamada para esperar (dormir) después de cargar la página. Aquí hay un ejemplo:

```js
$browser.get('https://www.mywebsite.com').then(function() {
  return $browser.sleep(1000);
});
```

## Fuentes de datos

New Relic utiliza estas fuentes de datos para la comparación de Sintético y browser en la UI. Para un análisis más profundo de los datos del gráfico comparativo que ve en la UI, utilice el [generador de consultas](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-specify-data) para ejecutar [NRQL consulta](/docs/insights/nrql-new-relic-query-language/using-nrql/introduction-nrql).

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Variable
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Monitor ID de cuenta
      </td>

      <td>
        La cuenta desde la que está ejecutando el monitor:

        ```sql
        SELECT monitorAccountId FROM BrowserInteraction
        ```
      </td>
    </tr>

    <tr>
      <td>
        Identificador del monitor
      </td>

      <td>
        El ID único asignado a tu monitor Sintético:

        ```sql
        SELECT monitorId FROM BrowserInteraction
        ```
      </td>
    </tr>

    <tr>
      <td>
        Monitor la identificación del trabajo
      </td>

      <td>
        El ID de una única ejecución del monitor Sintético, que comenzó en un momento específico y se originó en una ubicación específica:

        ```sql
        SELECT monitorJobId FROM BrowserInteraction LIMIT 1
        ```
      </td>
    </tr>

    <tr>
      <td>
        Promedio de usuarios reales
      </td>

      <td>
        El tiempo promedio de carga de la página para un usuario real que ve su sitio web (excluye el monitor Sintético).
      </td>
    </tr>

    <tr>
      <td>
        Vistas de páginas de usuarios reales
      </td>

      <td>
        Detalles de vistas de página provenientes de visitantes a su sitio web (excluye monitor Sintético).
      </td>
    </tr>

    <tr>
      <td>
        El promedio del Sintético
      </td>

      <td>
        El tiempo promedio de carga de la página del monitor Sintético simple o scripted que se ejecutó en su sitio web.
      </td>
    </tr>

    <tr>
      <td>
        Vistas a la página de Sintético
      </td>

      <td>
        Sólo tráfico generado por el monitor Sintético simple o scripted.
      </td>
    </tr>
  </tbody>
</table>
