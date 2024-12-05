---
title: Faltan cambios de ruta con el agente SPA
type: troubleshooting
tags:
  - Browser
  - Single page app monitoring
  - Troubleshooting
freshnessValidatedDate: never
translationType: machine
---

## Problema

Está utilizando el agente Pro + SPA, pero no ve toda la interacción `route change` browser que espera.

Somos conscientes de que esto puede resultar frustrante. Nuestro objetivo continuo es mejorar la funcionalidad de la característica SPA, haciéndola más simple y confiable, comenzando por los métodos que utilizamos para detectar y capturar cambios de ruta.

## Solución

### Soluciones a corto plazo

Para asegurarse de que se capturen todos los cambios de ruta, puede utilizar nuestra [API de interacción SPA ()](/docs/browser/new-relic-browser/browser-agent-spa-api). El uso de la API de interacción categorizará el evento `BrowserInteraction` (en el atributo `category` ) como `custom` en lugar de un cambio `route` si en realidad no se detecta ningún cambio de ruta.

Si su framework expone eventos que representan la actividad del enrutador, puede usar instrumentación personalizada en estos eventos. Aquí hay un ejemplo usando nuestra API con el enrutador Angular:

```js
router.events.subscribe((event: Event) => {
  if (event instanceof NavigationStart) {
    let i = newrelic.interaction();
    i.setName(event.url);
    i.save();
  }
});
```

En este ejemplo, el objeto `router` es una instancia del enrutador Angular (del módulo `@angular/router` ). La llamada `setName` establece el atributo de nombre del evento `BrowserInteraction` en la nueva URL y la llamada `save` garantiza que se capture la interacción. Deberá adaptar esto a las necesidades del framework de su propia aplicación.

Si su framework no proporciona eventos de enrutamiento, puede agregar este código en el controlador de eventos del evento de interacción original, como `click`):

```js
myButton.addEventListener('click', function() {
  let i = newrelic.interaction();
  i.setName('new URL');
  i.save();
});
```

<DNT>**Recommendation:**</DNT> Si no tiene acceso al evento del enrutador ni al controlador de eventos de interacción, implemente esto lo antes posible en un código que sepa que es el resultado de la interacción del usuario.

Una alternativa al uso de la API SPA es capturar rutas como evento `PageAction` . [`PageAction` evento](/docs/browser/new-relic-browser/browser-agent-spa-api/add-page-action) se puede utilizar para capturar cualquier dato personalizado. Recomendamos esta opción como alternativa en caso de que el uso de la API de interacción SPA no funcione como se esperaba, o para separar completamente la instrumentación personalizada del evento `BrowserInteraction` integrado.

Ambas soluciones pueden garantizar que estos eventos se capturen, ya sea como un evento `BrowserInteraction` o como un evento `PageAction` . Sin embargo, no abordarán el registro de la duración correcta ni las llamadas AJAX relacionadas.

### Apoyo

Si esta solución no resuelve su problema, presente un ticket de soporte y tenga disponible la siguiente información:

* Para situaciones en las que ve la mayoría de los cambios de ruta, pero ninguno para un cambio de ruta en particular que espera, intente evaluar la diferencia en la implementación del código para esa ruta en particular. ¿Hay algo no estándar o único en esa ruta que podría proporcionar a nuestro equipo de soporte?
* Documente el marco y cualquier biblioteca que pueda ser de interés. Si se trata de un problema nuevo, ¿ha cambiado algo en su entorno que haya provocado que de repente no se realice un seguimiento de estas interacciones?
* Tenga en cuenta la versión del agente del navegador que está utilizando. Si tiene más de unas pocas versiones atrasadas, le recomendaremos que actualice a la última versión, ya que es posible que ya hayamos resuelto un problema similar.
* Tenga en cuenta que, debido a la complejidad de diagnosticar estos problemas, es probable que el equipo necesite acceso a un entorno y código que demuestre el problema para realizar pruebas e investigaciones.

## Causa

El agente del navegador intenta ser independiente framework , además de admitir las mejores prácticas de codificación. Sin embargo, a menudo hay casos extremos que se pasan por alto y que hacen que no recopile los cambios de ruta que espera. La implementación se basa en el instrumentado API más común browser asincrónico. Hay casos en los que una aplicación web utiliza alguna API asincrónica o utiliza código personalizado o de terceros que no instrumentamos, y esto puede resultar en cambios de ruta inexactos o perdidos.
