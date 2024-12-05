---
title: Hora de inicio de navegación desconocida
tags:
  - Browser
  - Browser monitoring
  - Page load timing resources
metaDescription: How New Relic's browser monitoring handles navigation start time when the navigation timing API is unavailable.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Para la versión 1220 y posteriores del agente del browser, [el uso de cookies de sesión ha quedado obsoleto](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1220/#removed-3rd-party-cookies), por lo que esta información solo es relevante si está utilizando la versión 1216 y anteriores del agente del browser.
</Callout>

Si un navegador no utiliza la [API de sincronización de navegación](/docs/browser/new-relic-browser/browser-agent-apis/navigation-timing-api) para cronometrar la carga de la página, el navegador utiliza una cookie para determinar la hora de inicio de la navegación. Si un usuario navega desde un sitio sin tiempo de carga de página a un sitio con tiempo de carga de página <DNT>**with**</DNT> (por ejemplo, a la primera página de su sitio con tiempo de carga de página habilitado), surgen consideraciones especiales para la hora de inicio de la navegación.

## Estimación de red [#network]

El archivo de utilidad JavaScript de tiempo de carga de la página crea una cookie con la hora de inicio de la navegación cuando un usuario abandona una página (enlazando un evento, `beforeunload` o `pagehide`, según el browser). Sin embargo, al navegar fuera de un sitio sin el tiempo de carga de la página habilitado, el código JavaScript no estará presente y no se creará la cookie. Luego, cuando el usuario llega a la primera página de un sitio, no se puede determinar la hora de inicio de la navegación porque no hay cookies.

En este caso, el agente del navegador tiene todos los datos (tiempo de cola, tiempo de aplicación, contenido DOM y tiempo de renderizado) <DNT>**except**</DNT> tiempo de red. Se requiere la hora de inicio de la navegación para calcular la hora de la red. En lugar de descartar los datos, la característica de tiempo de carga de la página estima el tiempo de la red en función de los promedios acumulados recientemente para su aplicación, a nivel regional. De esta manera, la característica de tiempo de carga de la página proporciona una medición del rendimiento más precisa y se retiene el resto de los datos.

Esto es especialmente importante para sitios con una alta tasa de rebote (cuando el usuario visita solo una página). Cuantos más visitantes tenga de diferentes regiones, más precisa será la estimación de la red.

## Estimación de red no disponible [#network-na]

Si no hay una estimación de red disponible para su aplicación y para la región donde se originó el acceso, el proceso de tiempo de carga de la página vuelve a una estimación de red en todas las aplicaciones de informes de la región. De no ser así, los datos se descartan.

<DNT>**Note:**</DNT> Para los navegadores que tienen la API de sincronización de navegación, esto no es un problema, ya que la hora de inicio de la navegación se puede determinar sin utilizar una cookie.
