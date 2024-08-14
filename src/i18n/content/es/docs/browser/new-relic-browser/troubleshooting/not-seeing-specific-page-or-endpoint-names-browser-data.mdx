---
title: No ver páginas específicas o nombres de extremos en los datos del navegador
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: 'Troubleshooting tips if you do not see expected page views, URLs, or AJAX when using New Relic browser or SPA monitoring.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Está buscando desgloses de rendimiento para páginas específicas o extremos en la[página UI <InlinePopover type="browser"/><DNT>**Page views**</DNT> ](/docs/browser/new-relic-browser/additional-standard-features/page-views-insights-your-sites-popularity)o [la página UI <DNT>**AJAX**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls). La UI no muestra el grupo de URL que está buscando o solo muestra `/` y `/*`. Este comportamiento también aparece en los datos SPA en el evento `BrowserInteraction` y se aplica a los atributos `browserInteractionName`, `targetGroupedUrl` y `previousGroupedUrl` .

## Solución

El monitoreo del navegador "aprende" automáticamente a agrupar las vistas de su página cuando su aplicación se implementa por primera vez y agrega esa información a una [lista de "permitidos" para URL](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls). A veces, es posible que esta agrupación no coincida con la información de visualización de su página actual.

Para resolver este problema, administre [la configuración de la lista de segmentos de URL](/docs/browser/new-relic-browser/configuration/browser-settings-ui-options-apdex-geography#enabling) de su aplicación [editando las reglas existentes](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls#maintaining) o [agregando los segmentos de dominio y URL](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls#adding) que conforman las URL de su sitio. Después de agregar las reglas necesarias, debería ver un desglose útil de su información en la UI.

A continuación se ofrecen algunos consejos útiles:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Adding segments to your allow list**
        </DNT>
      </th>

      <th>
        <DNT>
          **Tip**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Utilice segmentos de URL constantes.
      </td>

      <td>
        Agregue únicamente los segmentos de URL que permanezcan constantes en muchas páginas vistas. No agregue segmentos únicos, como ID o categorías muy específicas, porque esto puede generar [problemas de agrupación métrica](/docs/features/metric-grouping-issues).
      </td>
    </tr>

    <tr>
      <td>
        Introduzca coincidencias exactas.
      </td>

      <td>
        Ingrese cualquier segmento de URL como coincidencias exactas, incluido el caso.
      </td>
    </tr>

    <tr>
      <td>
        Utilice reglas existentes.
      </td>

      <td>
        Si ya aparece una regla para un dominio:

        1. Vaya a

           <DNT>
             **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Settings > Segment allow lists**
           </DNT>

           .

        2. En lugar de crear una regla nueva, edite la regla existente y agregue el dominio al campo

           <DNT>
             **Allow listed segments**
           </DNT>

           de la UI de usuario.
      </td>
    </tr>

    <tr>
      <td>
        Subdominio grupal.
      </td>

      <td>
        Agrupe subdominios similares como `foo.domain.com` y `bar.domain.com` en `*.domain.com`. Esta agrupación debe ocurrir justo antes del nombre de dominio de nivel superior.
      </td>
    </tr>

    <tr>
      <td>
        Configure aplicaciones de una sola página.
      </td>

      <td>
        Si su sitio es una aplicación de una sola página y solo ve `/` en las vistas de página, entonces su agrupación está funcionando correctamente. New Relic registra las solicitudes posteriores a medida que se carga AJAX y su [página<DNT>**AJAX**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls)contendrá información más detallada. Si no es así, siga los consejos de este documento.
      </td>
    </tr>

    <tr>
      <td>
        Elimine las reglas cuando sea apropiado.
      </td>

      <td>
        Si necesita eliminar una regla, obtenga asistencia en [support.newrelic.com](https://support.newrelic.com/).
      </td>
    </tr>
  </tbody>
</table>
