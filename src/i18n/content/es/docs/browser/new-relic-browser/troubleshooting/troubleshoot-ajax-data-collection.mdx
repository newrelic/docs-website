---
title: Solucionar problemas de recopilación de datos AJAX
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Troubleshooting for not seeing AJAX data for your browser app.
freshnessValidatedDate: never
translationType: machine
---

## Problema

No ves [datos AJAX](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls) para la aplicación de tu navegador.

## Solución

Si tu aplicación está [instrumentada con <InlinePopover type="browser"/>](/docs/browser/new-relic-browser/installation-configuration/troubleshooting-browser-monitoring-installation)y está recopilando datos correctamente para otras [características Pro](/docs/browser/new-relic-browser/browser-pro-features), sigue estos pasos:

<CollapserGroup>
  <Collapser
    id="verify-instrumentation"
    title="1. Verifique que la página esté instrumentada."
  >
    Utilice la consola de desarrollo de su browser para verificar que la página se haya instrumentado correctamente. Ingrese `XMLHttpRequest` y/o `fetch` en la consola.

    Si la instrumentación ha tenido éxito, la consola debería devolver algo como:

    ```js
    // XMLHttpRequest
      ƒ (e){const t=new o(e),n=r.context...

      // fetch
      ƒ (){var t=3,n=(0,r().getTrace...
    ```

    Si la instrumentación falla, verá algo como:

    ```js
    // XMLHttpRequest
    ƒ XMLHttpRequest() { [native code] }

    // fetch 
    ƒ fetch() { [native code] }
    ```

    Si ve este tipo de falla o ve una respuesta diferente, es posible que la instrumentación AJAX esté deshabilitada o que esté usando otro script o biblioteca que esté en conflicto con la instrumentación de New Relic.
  </Collapser>

  <Collapser
    id="verify-ajax-enabled"
    title="2. Verifique que la instrumentación AJAX esté habilitada."
  >
    La instrumentación AJAX no está incluida en el agente ligero. Abra la herramienta de desarrollo de la consola de su browser y verifique el objeto `newrelic.initializedAgents`. Este objeto contiene una entrada para cada agente que se ejecuta en la página. Normalmente hay un solo agente en una página. Inspeccione el objeto del agente inicializado en busca de un objeto `runtime` . Este objeto contiene información sobre el agente en ejecución como `loaderType`. Si `loaderType` es `lite`, la instrumentación AJAX no está incluida en el agente que se utiliza.

    Si `loaderType` no es `lite`, también puede verificar el agente inicializado para los objetos `config` y `features` . El objeto `config` contendrá la configuración de tiempo de ejecución del agente, incluido un objeto `ajax` con un valor booleano `enabled` . El objeto `features` debe contener una entrada para cada característica inicializada por el agente, incluida una entrada `ajax` . Verifique que este objeto ajax contenga una entrada booleana `enabled` de `true` y `featAggregate` . Si alguno de estos elementos no es verdadero, es posible que la instrumentación AJAX no se haya inicializado debido a un cambio de configuración en New Relic en la entidad browser o posiblemente a un cambio manual en el objeto `NREUM.init` que se copió/pegó en el HTML.
  </Collapser>

  <Collapser
    id="verify-config"
    title="2. Verifique la configuración de la lista de denegación."
  >
    El agente se puede configurar para ignorar ciertos dominios y rutas al crear [el evento AjaxRequest](/attribute-dictionary/?event=AjaxRequest).

    Utilice la consola de desarrollo de su browser para comprobar las reglas actuales de la lista de denegación de AJAX ejecutando `newrelic.init`. Busque una propiedad `ajax` que contenga una matriz llamada `deny_list`.

    Si ve entradas en la lista de denegación que no le resultan familiares o que hacen que se filtren las llamadas AJAX, revise la documentación [del evento Filter AjaxRequest](/docs/browser/new-relic-browser/configuration/filter-ajax-request-events/) para obtener más orientación.
  </Collapser>

  <Collapser
    id="verify-network-access"
    title="3. Verifique el acceso a la red."
  >
    Si el objeto está correctamente instrumentado, intente activar una llamada AJAX en su aplicación mientras monitorea el tráfico de red en las herramientas de desarrollo del browser. Espere hasta un minuto y busque una llamada a `bam.nr-data.net/jserrors` con un parámetro `xhr` . Si la llamada falla, verifique si hay problemas de red.

    Si no ve esta llamada, si falla con un error no relacionado con el acceso a la red, o si tiene éxito pero aún no ve datos, continúe con la documentación de resolución de problemas.
  </Collapser>
</CollapserGroup>

Si sus solicitudes utilizan JSONP, consulte los requisitos y notas sobre la funcionalidad a continuación:

<CollapserGroup>
  <Collapser
    id="jsonp"
    title="Requisitos JSONP"
  >
    Si sus solicitudes utilizan [JSONP](https://en.wikipedia.org/wiki/JSONP), estas solicitudes no aparecerán en la [página UI de AJAX](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls). Sin embargo, puedes verlos como activos dentro del [rastreo de sesión](/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle). Si utiliza monitoreo SPA, puede verlos en la pestaña <DNT>**Breakdown**</DNT> de la página <DNT>**Page views**</DNT> .

    Requisitos para que JSONP sea reconocido:

    * Cada solicitud JSONP debe utilizar una función de devolución de llamada única. Las bibliotecas más populares (como jQuery) generan dinámicamente una función de devolución de llamada única para cada solicitud.
    * La cadena de consulta que contiene el nombre de la función de devolución de llamada debe denominarse `"callback"` o `"cb"` para que New Relic la reconozca. Este es el comportamiento predeterminado en la biblioteca más popular.
  </Collapser>
</CollapserGroup>

Si alguno de estos pasos de resolución de problemas falla o aún tiene problemas con datos AJAX faltantes, obtenga soporte en [support.newrelic.com](https://support.newrelic.com).
