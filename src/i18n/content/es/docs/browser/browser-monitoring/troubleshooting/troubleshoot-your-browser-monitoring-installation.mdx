---
title: Solucionar problemas de instalación de monitoreo de navegador
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: 'If you have problems installing or activating browser monitoring for your app in New Relic, try these troubleshooting tips.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Si acaba de configurar su aplicación con <InlinePopover type="browser"/>, espere unos minutos hasta que aparezcan los datos. Si ya has esperado unos minutos y aún no ves ningún dato, prueba estos consejos de resolución de problemas. Algunos de estos consejos dependen de si [implementa su aplicación](/docs/browser/new-relic-browser/getting-started/adding-apps-new-relic-browser) permitiendo que el monitoreo del navegador inserte automáticamente el fragmento de JavaScript en su aplicación de monitor APM o insertando el fragmento de JavaScript usted mismo.

## Solución

<DNT>**Recommendation:**</DNT> Antes de seguir procedimientos específicos de resolución de problemas, ejecute las [comprobaciones browser de Diagnóstico](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics). Una vez descargada la CLI de diagnóstico, el browser verifica ejecutando las opciones de línea de comando: `/nrdiag -browser-url YOUR-WEBSITE-URL -suites browser`. La información devuelta por la CLI de diagnóstico se puede utilizar al comunicarse con el soporte de New Relic.

Si su agente de monitoreo de navegador fue implementado para un monitor de cuenta con un agente <InlinePopover type="apm"/>, consulte [APM implementado](#apm-tips). Si su agente de monitoreo de navegador se implementó utilizando el método de copiar/pegar de JavaScript, consulte [Copiar/pegar implementación](#manual-tips). Si no está seguro de cuál tiene, la herramienta de Diagnóstico le devolverá el método desplegable.

También puede solucionar situaciones en las que solo faltan datos [AJAX](/docs/browser/new-relic-browser/troubleshooting/troubleshooting-ajax-data-collection) o [rastreo de sesión](/docs/browser/new-relic-browser/troubleshooting/troubleshooting-session-trace-collection) .

### Implementación a través del agente APM [#apm-tips]

Estos pasos de resolución de problemas se aplican a problemas cuando el agente de monitoreo de navegador está instalado en una aplicación que ya está siendo [monitoreada por un agente APM](/docs/browser/new-relic-browser/installation-configuration/adding-apps-new-relic-browser#select-apm-app):

<CollapserGroup>
  <Collapser
    id="app_enabled"
    title="Habilita tu aplicación"
  >
    Verifique que el monitoreo del navegador se haya habilitado en <DNT>**Browser settings**</DNT> de su aplicación:

    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Settings**
       </DNT>

       .

    2. Siga los procedimientos estándar para [habilitar la configuración del navegador](/docs/browser/new-relic-browser/installation-configuration/browser-settings-ui-options-browser-monitoring#enabling) para cada aplicación.

    3. Vacíe [la caché de su servidor web](#restart_app).

    4. Espere unos minutos más para que lleguen los datos.

    5. Pruebe los siguientes pasos si aún no ve ningún dato.
  </Collapser>

  <Collapser
    id="update_agent"
    title="Actualice su agente APM"
  >
    El agente <InlinePopover type="apm"/>más reciente coloca el script de tiempo de carga de la página con mayor precisión. Antes de continuar con estos consejos de resolución de problemas, asegúrese de tener la [versión más reciente](/docs/apm/new-relic-apm/maintenance/keeping-new-relic-date) para su agente APM.

    <Callout variant="tip">
      Para conocer los requisitos de la versión del agente para el tiempo de carga de la página, consulte [Compatibilidad y requisitos](/docs/browser/new-relic-browser/getting-started/compatibility-requirements).
    </Callout>
  </Collapser>

  <Collapser
    id="javascript"
    title="Verificar el fragmento de JavaScript"
  >
    Verifique la fuente de su página para conocer los dos elementos script necesarios para capturar métrica y enviarlos a New Relic. En un browser, vea el código fuente de su página y busque un elemento script cerca del principio como este:

    ```html
    <script type="text/javascript">
        (window.NREUM||(NREUM={})).loader_config={xpid:"VRUGVVJS";window.NREUM||(NREUM={}),__nr_require=function a(b,c,d){ ...
    ```

    O así:

    ```html
    <script type="text/javascript">
        window.NREUM||(NREUM={}),__nr_require=function a (b,c,d){ ...
    ```

    También verifique que exista un segundo elemento script en una de dos ubicaciones, según el idioma del agente del servidor de aplicaciones.

    * <DNT>
        **Go**
      </DNT>

      : n / A

    * <DNT>
        **Java**
      </DNT>

      : antes de la etiqueta `</body>` (que debe agregarse a la página si falta)

    * <DNT>
        **.NET**
      </DNT>

      : Inmediatamente antes del primer elemento del script

    * <DNT>
        **Node.js**
      </DNT>

      : Inmediatamente antes del primer elemento del script

    * <DNT>
        **PHP**
      </DNT>

      : Al final del elemento del cuerpo.

    * <DNT>
        **Python**
      </DNT>

      : En el elemento head o al final del elemento body

    * <DNT>
        **Ruby**
      </DNT>

      : Inmediatamente antes del primer elemento del script

    La segunda etiqueta contiene datos de configuración y sincronización y tiene este aspecto:

    ```html
    <script type="text/javascript">
        window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net"...
    ```

    Si falta alguno de los elementos del script, continúe con la resolución de problemas con los siguientes pasos. Si los elementos del script están presentes y los datos no aparecen después de varios minutos, obtenga asistencia en [support.newrelic.com](https://support.newrelic.com "El enlace se abre en una ventana nueva.").
  </Collapser>

  <Collapser
    id="check_js_monitors"
    title="Verifique otro monitor de errores de JavaScript"
  >
    Si ve errores de JavaScript en su página web, o si no ve ningún dato en su [página<DNT>**Errors**</DNT> ](/docs/errors-inbox/browser-tab)en la UI de New Relic, verifique si se ha habilitado algún otro marco de monitoreo de errores de JavaScript para su aplicación. Algunos monitores de errores de JavaScript pueden interferir con la funcionalidad de monitoreo del navegador.
  </Collapser>

  <Collapser
    id="auto_instrumentation"
    title="Configurar instrumentación automática"
  >
    Si está utilizando la característica de instrumentación automática de New Relic, asegúrese de que su agente esté configurado correctamente. Cada agente tiene una configuración de archivo de configuración e instrucciones específicas para activar o desactivar la instrumentación automática:

    * <DNT>**Go**</DNT>: n / A

    * [Java](/docs/agents/java-agent/instrumentation/page-load-timing-java#auto_instrumentation)

    * [.NET](/docs/agents/net-agent/features/page-load-timing-net#auto_instrumentation)

    * Agente de Node.js: actualmente no es compatible; ver [procedimientos de instrumentación manual](/docs/agents/nodejs-agent/supported-features/page-load-timing-nodejs)

    * [PHP](/docs/agents/php-agent/features/page-load-timing-php#auto_instrumentation)

    * [Python](/docs/agents/python-agent/supported-features/page-load-timing-python#automatic_instrumentation)

    * [Ruby](/docs/agents/ruby-agent/features/page-load-timing-ruby#auto_instrumentation)

      <Callout variant="important">
        Si modifica el archivo de configuración de su agente, asegúrese de [reiniciar su aplicación](#restart_app).
      </Callout>
  </Collapser>

  <Collapser
    id="manual_api_instrumentation"
    title="Verificar la instrumentación API manual"
  >
    Si llama manualmente a la API del agente New Relic para generar e insertar JavaScript, verifique que las llamadas realmente se estén realizando. Las API y cómo usarlas son específicas de su agente:

    * <DNT>
        **Go**
      </DNT>

      : n / A

    * [Agente de Java](/docs/agents/java-agent/instrumentation/page-load-timing-java#manual_instrumentation)

    * [Agente .NET](/docs/agents/net-agent/features/page-load-timing-net#manual_instrumentation)

    * [Agente Node.js](/docs/agents/nodejs-agent/supported-features/page-load-timing-nodejs) (ver también los [procedimientos de resolución de problemas de Node.js](/docs/agents/nodejs-agent/troubleshooting/troubleshooting-page-load-timing-nodejs))

    * [Agente PHP](/docs/agents/php-agent/features/page-load-timing-php#manual_instrumentation)

    * [Agente Python](/docs/agents/python-agent/supported-features/page-load-timing-python#manual_instrumentation)

    * [Agente Ruby](/docs/agents/ruby-agent/features/page-load-timing-ruby#manual_instrumentation)
  </Collapser>

  <Collapser
    id="restart_app"
    title="Reinicie su aplicación APM"
  >
    Si modificó el archivo de configuración de su agente APM, asegúrese de reiniciar su aplicación para que recoja la configuración modificada.

    * Agente de Java: Vacía la caché de "trabajo" del servidor de aplicaciones. Esto obliga al servidor de aplicaciones a volver a compilarse.

    * Agente .NET: asegúrese de que su directorio de caché

      <DNT>
        **asp.net**
      </DNT>

      esté limpio usando el comando `flush_dotnet_temp.cmd`. Esto obliga al servidor de aplicaciones a recompilar las ASP con instrumentación de sincronización de carga de página.
  </Collapser>

  <Collapser
    id="verify-js"
    title="Punto de control: verificar JavaScript en la página"
  >
    Verifique que el JavaScript esté en la página como se detalla en el paso anterior [Verifique el fragmento de JavaScript](#javascript). Si no está en la página, utilice la instrumentación manual como se detalla en [Verificar la instrumentación manual de API](#manual_api_instrumentation). El Javascript debe estar presente en su página antes de poder continuar con el siguiente paso.
  </Collapser>

  <Collapser
    id="network_access"
    title="Verificar el acceso a la red del usuario final"
  >
    Si su aplicación se carga principalmente dentro de una red local segura, asegúrese de que su usuario pueda llegar al extremo de red necesario para informar los datos del navegador. Esto incluye [las CDN y la baliza](/docs/browser/new-relic-browser/performance-quality/security-new-relic-browser#cdn) de New Relic.
  </Collapser>
</CollapserGroup>

### Implementación mediante copiar/pegar JavaScript [#manual-tips]

Estos pasos de resolución de problemas se aplican a problemas cuando el agente de monitoreo de navegador de New Relic se implementó usando el [método de copiar y pegar HTML](/docs/browser/new-relic-browser/installation-configuration/adding-apps-new-relic-browser#copy-paste-app):

<CollapserGroup>
  <Collapser
    id="app_enabled"
    title="Habilita tu aplicación"
  >
    Verifique que el monitoreo del navegador se haya habilitado en <DNT>**Browser settings**</DNT> de su aplicación:

    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Settings**
       </DNT>

       .

    2. Siga los procedimientos estándar para [habilitar la configuración del navegador](/docs/browser/new-relic-browser/installation-configuration/browser-settings-ui-options-browser-monitoring#enabling) para cada aplicación.

    3. Vacíe [la caché de su servidor web](#restart_app).

    4. Espere unos minutos más para que lleguen los datos.

    5. Pruebe los siguientes pasos si aún no ve ningún dato.
  </Collapser>

  <Collapser
    id="manual_javascript"
    title="Verificar el fragmento de JavaScript"
  >
    Verifique la fuente de su página para conocer el elemento script necesario para capturar métricas y enviarlas a New Relic. En un browser, vea el código fuente de su página y busque un elemento script cerca del principio como este:

    ```html
    <script type="text/javascript">
        window.NREUM||(NREUM={}),__nr_require=function a (b,c,d){ ...
    ```

    Si falta el elemento del script, asegúrese de haberlo pegado y desplegar su nuevo código. Si aún no ha pegado el fragmento de JavaScript, puede copiarlo nuevamente desde [la página<DNT>**Settings**</DNT> ](/docs/browser/new-relic-browser/installation-configuration/browser-settings-ui-options-browser-monitoring)de la aplicación de su navegador. Si corresponde, reinicie la aplicación que sirve estas páginas.

    Si aún no ves el script, continúa la resolución de problemas con los siguientes pasos.
  </Collapser>

  <Collapser
    id="manual_check_cache"
    title="Borre cualquier versión en caché de sus páginas"
  >
    Para que el fragmento de Javascript aparezca en las páginas proporcionadas por su aplicación, asegúrese de que se hayan borrado todas las versiones almacenadas en caché de las páginas antes de agregar el código.

    1. Verifique los cachés CDN.
    2. Vacíe la caché de su servidor web.
  </Collapser>

  <Collapser
    id="manual_check_placement"
    title="Verifique la ubicación y la integridad de JavaScript"
  >
    Inserte JavaScript lo más cerca posible de la parte superior de `head` , pero después de cualquier etiqueta `meta` sensible a la posición (compatible con X-UA y juego de caracteres). Debe estar fuera de cualquier comentario. A continuación se muestra un ejemplo del formato general:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta tags>
        {PLACE NEW RELIC SCRIPT TAG HERE}
        <script and link tags>
    </head>
    <body>
        ...
    </body>
    </html>
    ```

    Si el Javascript está colocado correctamente, compárelo con el fragmento original que generó para asegurarse de que esté completo e idéntico. Es posible que un fragmento incompleto o modificado no se informe correctamente.
  </Collapser>

  <Collapser
    id="manual_check_js_monitors"
    title="Verifique otro monitor de errores de JavaScript"
  >
    Si ve errores de JavaScript en su página web, o si no ve ningún dato en su [página<DNT>**JavaScript errors**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/js-errors-dashboard-examining-errors-over-time)en la UI de New Relic, verifique si se ha habilitado algún otro marco de monitoreo de errores de JavaScript para su aplicación. Algunos monitores de errores de JavaScript pueden interferir con la funcionalidad de monitoreo del navegador.
  </Collapser>

  <Collapser
    id="manual_network_access"
    title="Verificar el acceso a la red del usuario final"
  >
    Si su aplicación se carga principalmente dentro de una red local segura, asegúrese de que su usuario pueda llegar al extremo de red necesario para informar los datos del navegador. Esto incluye [las CDN y la baliza](/docs/browser/new-relic-browser/performance-quality/security-new-relic-browser#cdn) de New Relic.
  </Collapser>

  <Collapser
    id="dotnet_razor"
    title="Framework Razor: busque un mensaje de error del analizador"
  >
    Si utiliza el [método de instalación copiar y pegar](/docs/browser/new-relic-browser/installation-configuration/adding-apps-new-relic-browser#copy-paste-app) en una aplicación .NET que utiliza el framework Razor, esto puede provocar el siguiente error:

    ```
    Parser Error Message: "").pop().split("" is not valid at the start of a code block. Only identifiers, keywords, comments, "(" and "{" are valid.
    ```

    ```
    error CS0103: The name 'nr' does not exist in the current context
    ```

    El error es causado por un símbolo `@` en el fragmento de JavaScript para monitoreo del navegador. El símbolo `@` representa el comienzo de un bloque de código en Razor. La línea que causa el problema es:

    ```js
    .split("@").pop().split(":")
    ```

    ```js
    "@nr="
    ```

    Para solucionar este problema, utilice <DNT>**one**</DNT> de estas soluciones alternativas:

    * Envuelva el fragmento de JavaScript browser en la etiqueta `<text></text>` para forzar que se interprete como contenido.

      O

    * Agregue otro `@` a la línea para escapar de ella. Compruebe que la línea se vea así:

      ```js
      .split("@@").pop().split(":")
      ```

      ```js
      "@@nr="
      ```

    Utilice sólo una de las soluciones. Usar ambos romperá el código nuevamente.
  </Collapser>
</CollapserGroup>
