---
title: Recopilación de datos SPA
tags:
  - Browser
  - Single page app monitoring
  - Use SPA data
metaDescription: How browser stores data from an app that uses a single-page app (SPA) architecture.
freshnessValidatedDate: never
translationType: machine
---

Este documento explica cómo browser recopila y almacena los datos asincrónicos de su aplicación de página única (SPA). Esto le permitirá comprender mejor los [datos del SPA que ve en la UIdel navegador](/docs/browser/single-page-app-monitoring/browser-ui/view-spa-data-new-relic-browser). Esto también le ayudará a agregar más fácilmente un monitoreo personalizado con la [API SPA](/docs/browser/single-page-app-monitoring/use-spa-data/use-spa-api).

## Interacción browser [#browser-interaction]

En el corazón del monitoreo de SPA se encuentra el concepto de <DNT>**browser interaction**</DNT>. New Relic define una interacción browser como cualquier cosa que ocurra en el browser del usuario de la aplicación; Por ejemplo:

* Una interacción del usuario que conduce a la carga de una página o a un cambio de ruta.
* Una actualización dinámica y programada del widget de una aplicación

Una interacción browser incluye no solo el evento desencadenante inicial, sino también la actividad causada por ese evento, como las solicitudes AJAX y JavaScript tanto sincrónico como asincrónico. Al rastrear no solo la causa sino también los efectos de la interacción de un browser , le ayudamos a comprender cómo cambian las vistas y la ruta de su aplicación.

Todas las aplicaciones son diferentes y tienen diferentes necesidades de monitoreo. Es por eso que incluimos monitoreo predeterminado, así como la capacidad de configurar un monitoreo personalizado para cualquier interacción browser que elija.

## Tipos de informes de datos SPA [#spa-data]

Se pueden informar a New Relic tres categorías principales de datos de aplicaciones de una sola página:

* Cargas de la página inicial
* Cambios de ruta
* Interacción de navegador personalizada creada a través de la [API SPA](/docs/browser/single-page-app-monitoring/use-spa-data/use-spa-api)

Cada uno de estos crea un evento `BrowserInteraction` . Si una o más solicitudes AJAX son parte de una interacción, también se crea el evento `AjaxRequest` asociado. Estos eventos y sus atributos se pueden consultar en el [generador de consultas](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-specify-data).

## Cargas de la página inicial

Un <DNT>**initial page load**</DNT> es un cambio de URL tradicional, que surge de una carga o recarga completa de una URL. Esto se indica en el browser cuando se activa un evento de carga de página (el evento `window.onload`. Las cargas de página iniciales aparecen junto con los cambios de ruta en [la UIdel navegador](/docs/browser/single-page-app-monitoring/browser-ui/view-spa-data-new-relic-browser).

## Cambios de ruta

La ruta dinámica de SPA experiencia del usuario cambia de forma similar a la carga de páginas. A los visitantes de un sitio o aplicación generalmente no les importa <DNT>**how**</DNT> que se haya entregado una nueva vista; simplemente saben que cuando realizan una acción, aparece una nueva vista. Por este motivo, tratamos los cambios de ruta de forma similar a las cargas de páginas en la UI.

Para monitor de manera óptima la aplicación de una sola página, comenzamos a monitorear muchas interacciones browser que, en teoría, podrían conducir a cambios de ruta.

* Si estas interacciones **no** conducen a cambios de ruta, browser inicia el monitoreo pero luego los descarta.

* Si estas interacciones

  <DNT>
    **do**
  </DNT>

  conducen a un cambio de ruta, browser guarda la secuencia de interacción como un evento `BrowserInteraction`, incluida información sobre la actividad sincrónica y asincrónica.

Una interacción se considera un cambio de ruta y se guarda como un evento `BrowserInteraction` cuando ocurre una de las siguientes situaciones:

* El hash de la URL cambia (generalmente usando `window.location.hash`).
* Un evento `popstate` se activa durante una devolución de llamada asociada con una interacción.
* Se llama a una API `pushState` o `replaceState` .

Los cambios de ruta aparecen junto con las cargas iniciales de la página en la [UIdel navegador](/docs/browser/single-page-app-monitoring/browser-ui/view-spa-data-new-relic-browser).

Recibimos y guardamos fragmentos hash de las URL de cambio de ruta. Si utiliza hash para pasar datos privados o confidenciales, esos datos pueden ser visibles para el usuario de su cuenta New Relic. Para obtener más información sobre la recopilación de datos y la generación de informes, consulte [Seguridad del navegador](/docs/browser/new-relic-browser/performance-quality/security-new-relic-browser).

## Monitoreo personalizado [#api-custom-events]

Puede utilizar la [API SPA](/docs/browser/new-relic-browser/browser-agent-spa-api) para configurar un monitoreo personalizado de la interacción del navegador que no se monitorea de forma predeterminada. También puede utilizar la API para desactivar el monitoreo predeterminado.

Evento personalizado se guardan como `BrowserInteraction` evento y tienen el siguiente atributo:

* El atributo `category` tendrá el valor `Custom`.
* El atributo `trigger` tendrá el valor `api`. (Este es el valor predeterminado pero se puede cambiar con la API).

## Diferencia con el tiempo de carga de página tradicional [#page-load-timing-diff]

Para proporcionar datos optimizados para el monitoreo de aplicaciones de una sola página, medimos el tiempo de carga de la página de una manera nueva: integrando funciones browser de bajo nivel, tanto sincrónicas como asincrónicas. Esto brinda una descripción más completa de cuánto tiempo lleva completar los cambios necesarios para una nueva vista.

Esto es diferente del método tradicional para medir el tiempo de carga de la página. [El tiempo de carga de página tradicional](/docs/browser/new-relic-browser/page-load-timing-resources/page-load-timing-process) utiliza la activación del evento `window.onload` para determinar cuándo se carga una página. Esta no es una forma óptima de medir el tiempo de cambio de vista porque las aplicaciones web suelen tener código asincrónico que se ejecuta durante un período de tiempo significativo después de que ocurre el evento `window.onload` .

<Callout variant="tip">
  La página <DNT>**Page views**</DNT> estándar que no es SPA del browser muestra un tiempo de carga de la página diferente que cuando el monitoreo SPA está habilitado. Debido a que el monitoreo de SPA mide toda la actividad asincrónica, los tiempos de carga del SPA generalmente serán más largos que el tiempo de carga de la página estándar.
</Callout>

El tiempo de carga de la página `window.onload` tradicional todavía aparece en la página SPA <DNT>**Page views**</DNT> . Cuando selecciona un evento de carga de página específico, <DNT>**Window onload**</DNT> aparece como una línea roja en el gráfico de tiempo de carga de la página. También puede seleccionar <DNT>**Switch to standard page views**</DNT> para volver a las pantallas de tiempo de carga tradicionales.

## Temporizadores [#spa-timers]

El agente monitorea todas las llamadas asincrónicas, incluidos los temporizadores. Los temporizadores con duraciones inferiores a un segundo se ajustan. Los temporizadores de más de un segundo no se ajustan porque generalmente están destinados a [transacciones no web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions), como trabajo en segundo plano o encuestas que no están relacionadas con la interacción del usuario.

## Evento y atributo [#event-data-structure]

Guardamos las interacciones browser que conducen a cambios de ruta y cargas de páginas como `BrowserInteraction` evento, y las solicitudes AJAX como `AjaxRequest` evento. Puedes consultar estos eventos en el [generador de consultas](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-specify-data).
