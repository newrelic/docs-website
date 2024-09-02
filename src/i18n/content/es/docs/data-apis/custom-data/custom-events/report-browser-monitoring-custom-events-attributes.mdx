---
title: Informe monitoreo de evento de navegador personalizado y atributo
tags:
  - Insights
  - Event data sources
  - Custom events
metaDescription: How to report custom events and attributes with browser monitoring in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar el monitoreo del navegador en New Relic para agregar [eventos personalizados y atributos](/docs/insights/insights-data-sources/custom-data/report-custom-event-data).

## Acciones y vistas de página [#overview]

Utilice la llamada [`addPageAction`](/docs/browser/new-relic-browser/browser-agent-spa-api/add-page-action) de la API del navegador para capturar eventos, acciones, cambios de ruta o cualquier interacción del usuario final con su aplicación. La llamada `addPageAction` agrega un evento llamado `PageAction` que contiene el nombre de la acción y cualquier nombre y valor de atributo personalizado que capture junto con él. El evento `PageAction` también contiene cualquier atributo personalizado que haya agregado al evento `PageView` .

Agrega atributo personalizado al evento `PageView` para que puedas consultar o filtrar tus datos para responder más preguntas sobre tu aplicación.

## Requisitos previos [#requirements]

Para reportar `PageAction` evento, verifique estos requisitos previos:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Requirement**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Versión del agente
      </td>

      <td>
        La versión de su agente de monitoreo de navegador debe ser [593 o superior](/docs/browser/new-relic-browser/installation-configuration/upgrading-browser-agent#checking).
      </td>
    </tr>

    <tr>
      <td>
        Versión browser del cliente
      </td>

      <td>
        Para grabar el evento `PageAction` , el navegador debe [admitir XHR entre dominios](/docs/browser/new-relic-browser/getting-started/compatibility-requirements#browser-types).
      </td>
    </tr>

    <tr>
      <td>
        Evento máximo por ciclo
      </td>

      <td>
        `PageAction` Los eventos se informan cada 30 segundos, con un máximo de 120 eventos por ciclo de recolección de 30 segundos, por browser. Una vez alcanzado el límite de 120 eventos, no se capturan eventos adicionales para ese ciclo.
      </td>
    </tr>

    <tr>
      <td>
        Nombre de evento/atributo, tipo de datos, tamaño
      </td>

      <td>
        Asegúrese de seguir [los requisitos generales](/docs/insights/insights-data-sources/custom-data/data-requirements#general) sobre la sintaxis de nomenclatura de eventos/atributos, los tipos de datos y el tamaño.
      </td>
    </tr>
  </tbody>
</table>

## Crear evento PageAction [#creating-pageactions]

Para crear un evento `PageAction` :

1. Asegúrese de que el [agente del navegador esté instalado](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent) para su aplicación.
2. Llame a la función [`newrelic.addPageAction`](/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicaddpageaction-browser-agent-api) en la parte relevante del JavaScript de su aplicación.
3. Espere un par de minutos hasta que la aplicación se ejecute e informe el evento `PageAction` relevante.
4. Ejecute una [consulta NRQL](/docs/query-data/nrql-new-relic-query-language/nrql-query-examples/insights-query-examples-new-relic-browser-spa) del evento `PageAction` que incluya el atributo `actionName` que utilizó para capturar el evento (y cualquier atributo asociado que envió junto con la acción).

## Agregar atributo personalizado al evento PageView [#custom-attributes]

El evento `PageView` es un evento informado browserpredeterminado. Puedes agregar un atributo personalizado al evento `PageView` . Cualquier atributo personalizado que agregue al evento `PageView` también se agrega automáticamente al evento `PageAction` .

Hay dos formas de agregar un atributo personalizado al evento `PageView` :

<CollapserGroup>
  <Collapser
    id="custom-attribute-via-browser-api"
    title={<>Utilice <Link to="/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicsetcustomattribute-browser-agent-api"><InlineCode>setCustomAttribute</InlineCode></Link> browser la llamada API</>}
  >
    Para agregar un atributo personalizado al evento `PageView` a través del agente del navegador, utilice la llamada API del navegador [`setCustomAttribute`](/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicsetcustomattribute-browser-agent-api) . Esto le permite capturar un atributo para anotarlo en cualquier evento `PageAction` .
  </Collapser>

  <Collapser
    id="custom-attribute-forward-apm"
    title="Reenviar atributo personalizado a partir de datos APM"
  >
    Si agregó un atributo personalizado al evento <InlinePopover type="apm"/>`Transaction` a través de un agente APM, puede reenviar esos atributos personalizados al evento `PageView` automáticamente:

    1. Inserte el atributo personalizado siguiendo las [instrucciones específicas del agente](/docs/insights/insights-data-sources/custom-data/add-custom-attributes-apm-data).

    2. Habilite el reenvío de atributos en el archivo de configuración de su agente:

       <table>
         <thead>
           <tr>
             <th style={{ width: "100px" }}>
               Agente
             </th>

             <th>
               Habilitar reenvío de atributos
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               Go
             </td>

             <td>
               Para habilitar el atributo, agregue esto a su configuración (deshabilitado de manera predeterminada):

               ```go
               cfg.BrowserMonitoring.Attributes.Enabled = true
               ```

               Luego agrega el atributo que deseas incluir:

               ```go
               cfg.BrowserMonitoring.Attributes.Include = []string{"request.*"}
               ```
             </td>
           </tr>

           <tr>
             <td>
               Java
             </td>

             <td>
               Agregue la opción [`attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-browser-attributes-enabled) en la sección `browser_monitoring` y configúrela en `true`.
             </td>
           </tr>

           <tr>
             <td>
               .NET
             </td>

             <td>
               Agregue el elemento [`<attributes enabled="true">`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#browser-attributes) como hijo del elemento `browserMonitoring` :

               ```xml
               <configuration xmlns="urn:newrelic-config">
                 ...
                 <browserMonitoring autoInstrument="true">
                   ...
                   <attributes enabled="true">
                     ...
                   </attributes>
                 </browserMonitoring>
                 ...
               </configuration>
               ```

               Si utiliza [instrumentación manual browser ](/docs/agents/net-agent/features/page-load-timing-net#manual_instrumentation)el atributo debe crearse antes de la llamada a `GetBrowserTimingHeader()`.
             </td>
           </tr>

           <tr>
             <td>
               Node.js
             </td>

             <td>
               Agregue [`attributes: {enabled: true}`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#browser-debug-enabled) a la sección `browser_monitoring` del archivo de configuración `newrelic.js` de su aplicación.
             </td>
           </tr>

           <tr>
             <td>
               PHP
             </td>

             <td>
               Agregue la opción [`newrelic.browser_monitoring.attributes.enabled`](/docs/agents/php-agent/attributes/enabling-disabling-attributes#cfg-browser-attributes-enabled) y configúrela en `true`.
             </td>
           </tr>

           <tr>
             <td>
               Python
             </td>

             <td>
               Agregue la opción [`browser_monitoring.attributes.enabled`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#cfg-browser-attributes-enabled) y configúrela en `true`.
             </td>
           </tr>

           <tr>
             <td>
               Ruby
             </td>

             <td>
               Agregue la opción [`browser_monitoring.attributes.enabled`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#browser_monitoring-attributes-enabled) y configúrela en `true`.
             </td>
           </tr>
         </tbody>
       </table>
  </Collapser>
</CollapserGroup>

## Atributos PageAction y PageView [#default-attributes]

Para ver el atributo predeterminado de `PageAction` y `PageView`, consulte [Evento de navegador](/docs/insights/insights-data-sources/default-events-attributes/browser-default-events-attributes-insights).

## Resolución de problemas

Aquí hay algunos consejos para la resolución de problemas:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Problem**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Falta el atributo personalizado
      </td>

      <td>
        Si su atributo personalizado no aparece en `PageView` eventos, verifique que esté llamando `setCustomAttribute` antes del evento Load en su página. Si se llama al atributo personalizado después de que se carga la página, no será visible en `PageView`.
      </td>
    </tr>

    <tr>
      <td>
        `PageAction` evento
      </td>

      <td>
        Si tu evento `PageAction` no aparece cuando realizas la consulta, revisa los [requisitos](#requirements).

        Si se cumplen los requisitos, verifique que no esté utilizando [nombres de atributos reservados o valores no válidos](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-insights-api#limits).
      </td>
    </tr>
  </tbody>
</table>
