---
title: Instalar el agente del navegador
tags:
  - Browser
  - Browser monitoring
  - Installation
metaDescription: 'How to deploy browser monitoring in New Relic for your apps, including UI, copy/paste, and API options.'
freshnessValidatedDate: never
translationType: machine
---

Para comenzar con <InlinePopover type="browser"/>, deberá agregar nuestro agente del navegador al HTML de las vistas que desea monitor. El agente del navegador es un fragmento de código JavaScript que monitorea el rendimiento de su aplicación/sitio y envía esos datos a New Relic. Puede agregar ese código manualmente a su sitio o utilizar nuestro agente APM para inyectar ese código por usted.

## Antes de que empieces [#before-start]

Antes de comenzar, es posible que desees comprobar que la aplicación de tu navegador cumpla con nuestros [requisitos de compatibilidad](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring).

¿Quiere utilizar nuestra API para monitor su aplicación mediante programación? Ver [monitoreo de navegador con NerdGraph](/docs/apis/nerdgraph/examples/browser-monitoring-config-nerdgraph).

## Instalar el agente [#install]

Para instalar el agente del navegador: Vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com) > Add data > Browser and mobile > Browser monitoring**</DNT> y siga las instrucciones.

<ButtonGroup>
  <ButtonLink
    role="button"
    to="https://onenr.io/0MRNpYqNqQn"
    variant="primary"
  >
    Instalar monitoreo de navegador
  </ButtonLink>
</ButtonGroup>

Si tiene preguntas sobre el proceso de instalación, consulte [Métodos de instalación](#choose-deployment).

<img
  title="Install browser"
  alt="Install browser"
  src="/images/browser_screenshot-crop_install-browser.webp"
/>

## Busca tus datos en New Relic [#generate-traffic]

Cuando haya terminado de instalar el agente del navegador, espere unos minutos y busque los datos en [nuestra UIde usuario de monitoreo del navegador](/docs/browser/browser-monitoring/getting-started/browser-summary-page).

Si han pasado más de 15 minutos y no ves datos, consulta [resolución de problemas](/docs/browser/browser-monitoring/troubleshooting/troubleshoot-your-browser-monitoring-installation/).

## ¿Que sigue? [#whats-next]

Ideas para los próximos pasos:

* Vea los datos de su aplicación en la [página Resumen](/docs/browser/browser-monitoring/getting-started/browser-summary-page).
* Ahora que ha instrumentado con el agente del navegador, profundice con sus datos con nuestro [tutorial Mejore su sitio web](/docs/journey-performance/guide-to-monitoring-core-web-vitals).
* Aprenda cómo optimizar su experiencia de monitoreo de navegador con nuestra [Guía de mejores prácticas para monitoreo de navegador](/docs/new-relic-solutions/best-practices-guides/full-stack-observability/browser-monitoring-best-practices-guide).

## Métodos de instalación [#choose-deployment]

Cuando se trata de agregar el agente del navegador a tus páginas web, tienes dos métodos de despliegue:

* APM + monitoreo de navegador: Utilice uno de nuestros agentes APM para auto-instrumentado monitoreo de navegador
* Solo monitoreo del navegador: agregue nuestro agente del navegador manualmente como un fragmento de JavaScript a su interfaz HTML.

A continuación se ofrecen algunas orientaciones sobre estos dos métodos.

### APM + monitoreo de navegador [#apm-agent]

Si está utilizando un agente APM (monitoreo del rendimiento de aplicaciones (APM)) para monitor el backend de la aplicación de su browser , le recomendamos utilizar este método. Recomendamos esta opción para aplicaciones que no sean[SPA](/docs/browser/single-page-app-monitoring/get-started/introduction-single-page-app-monitoring) porque el agente APM desplegará automáticamente el agente del navegador en cada página de su sitio web y usted obtendrá automáticamente la última versión del agente del navegador cada vez que reinicie su agente APM.

Si desea personalizar el comportamiento del agente APM, puede utilizar nuestras API del agente APM. Aquí están esos documentos:

* [Go](/docs/agents/go-agent/features/install-new-relic-browser-go-apps)
* [Java](/docs/agents/java-agent/instrumentation/page-load-timing-java)
* [.NET](/docs/agents/net-agent/features/page-load-timing-net)
* [Node.js](/docs/agents/nodejs-agent/supported-features/page-load-timing-nodejs)
* [PHP](/docs/agents/php-agent/features/page-load-timing-php)
* [Python](/docs/agents/python-agent/supported-features/page-load-timing-python)
* [Ruby](/docs/agents/ruby-agent/features/page-load-timing-ruby)

### Monitoreo solo del navegador [#copy-paste]

Utilice este método si no puede utilizar APM por cualquier motivo, como si su agente APM no es compatible con la inyección automática (como ocurre con Node.js y algunas aplicaciones Java). Si utiliza este método, la UI le proporciona un fragmento de JavaScript personalizado al final del proceso de instalación que puede agregar al HTML de cualquier página que desee monitor en su sitio.

Pegue el fragmento de JavaScript dentro de la etiqueta HTML `<head>` de su página. La etiqueta principal generalmente maneja secuencias de comandos, fuentes y otros elementos de terceros que se cargan en todas las páginas de su aplicación, por lo que solo necesita pegarla en un lugar. Péguelo lo más cerca posible de la parte superior de `<head>` , pero después de cualquier etiqueta META sensible a la posición (como X-UA-Compatible y charset). Para obtener más información sobre la ubicación del fragmento, consulte [Requisitos de ubicación de JavaScript](/docs/browser/new-relic-browser/page-load-timing-resources/instrumentation-browser-monitoring#javascript-placement).

Alternativamente, y aunque recomendamos ENCARECIDAMENTE la ruta del script en línea, también puede usar un script src para insertar el agente de forma `async` o `defer` . Para advertencias y detalles, continúe a continuación.

### Retrasar el monitoreo del navegador [#delayed-script]

<Callout variant="caution">
  Retrasar la creación de instancias hace que el agente pierda información hasta que esté completamente cargado e inicializado. El orden de ejecución de estos scripts provoca cierta pérdida de datos de instrumentación desde el inicio de las visitas a la página.
</Callout>

Por posible rendimiento u otras razones, es posible que desee retrasar la inicialización del agente del navegador desde el inicio del ciclo de carga de la página. No podrá utilizar la API `newrelic` hasta que el agente esté completamente inicializado. Este retraso también crea datos incompletos en UI usuario del monitoreo de su navegador.

Una vez que el agente está completamente inicializado, funciona como se esperaba. Cualquier retraso también afecta cuando el agente ajusta globales o se suscribe a un evento relativo a otra biblioteca o código que afecta los datos capturados.

Puede retrasar la inicialización del agente de estas maneras:

* Agregue una etiqueta `script-src` con el atributo `async` .
* Agregue una etiqueta `script-src` con el atributo `defer` .
* Utilice la importación dinámica o la colocación cronológicamente tardía del código del cargador.

`src` de su página debe apuntar a una versión válida del cargador de agentes en nuestra CDN. Por ejemplo, la URL que siempre contiene nuestra versión actual del agente Pro+SPA es `https://js-agent.newrelic.com/nr-loader-spa-current.min.js`. [Se requiere CSP](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring#csp) para cargar scripts externos de terceros.

Para determinar cuándo puede comenzar a llamar a la API `newrelic` , suscríbase a un evento en el ámbito global:

```js
window.addEventListener('newrelic', (evt) => {
  if (evt.detail.loaded) {
    // you can start using newrelic.interaction(), etc. now
  }
})

<InstallFeedback />

```
