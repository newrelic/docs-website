---
title: Solucionar errores de actualización del tiempo de ejecución
type: troubleshooting
tags:
  - Synthetics
  - Synthetic monitoring
  - Troubleshooting
  - Runtime conversion
metaDescription: null
freshnessValidatedDate: never
translationType: machine
---

## Browser con script: los intentos de interactuar con elementos fallan [#promises]

Al validar un monitor creado en un tiempo de ejecución anterior con [el tiempo de ejecución de Chrome 100 (o más reciente)](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100), findElement y otros métodos para buscar e interactuar con elementos en la página pueden fallar debido a diferencias en el manejo de promesas. Si el monitor pasa en un tiempo de ejecución legacy , falla en el nuevo tiempo de ejecución y el elemento está presente en la captura de pantalla, es posible que deba mejorar la lógica de manejo de promesas.

El flujo de control/administrador de promesas de Selenium Webdriver permitió que algunas funciones se ejecutaran en orden en tiempos de ejecución legacy , sin administrar promesas. Esta capacidad se eliminó en Selenium Webdriver 4.0 y ya no está disponible en el tiempo de ejecución. Todas las funciones asíncronas y las promesas deben administrarse con `await` o con `.then` promesa cadena. Esto garantizará que las funciones del script se ejecuten en el orden esperado.

Por ejemplo, el administrador de promesas/flujo de control podría permitir que este script parcial se complete exitosamente, aunque $browser.get devuelva una promesa y la promesa no se esté manejando correctamente:

```
$browser.get('http://example.com');

$browser.findElement($driver.By.css('h1'));
```

En el [tiempo de ejecución de Chrome 100 (o posterior)](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100), cualquier método que devuelva una promesa debe usar await o .then sintaxis para secuenciar correctamente los pasos. Se recomienda usar await debido a una sintaxis más limpia y un uso más fácil, pero .then La cadena de promesa todavía es compatible.

```
await $browser.get('http://example.com');

let el = await $browser.findElement($driver.By.css('h1'));
```

## API con secuencia de comandos: diferencias entre `request` y `got` [#request]

Los [tiempos de ejecución API con secuencias de comandos de Node.js 10 y anteriores](/docs/synthetics/synthetic-monitoring/using-monitors/manage-monitor-runtimes/#dependencies) usaban el módulo `request` Node.js [para proporcionar un objeto `$http` que podría usarse para probar las API](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests-legacy/).

Los [tiempos de ejecución de API con secuencias de comandos de Node.js 16 y más recientes](/docs/synthetics/synthetic-monitoring/using-monitors/manage-monitor-runtimes/#apidependencies) usan `got` en lugar de `request`. El módulo `request` quedó obsoleto en 2020 y ya no se incluirá en la nueva API ni en los tiempos de ejecución basados browser . El objeto `$http` proporciona una experiencia personalizada similar a la `request`mientras funciona con `got` para brindar compatibilidad con versiones anteriores para casos de uso básicos y al mismo tiempo evitar el uso de un módulo obsoleto. No todos los casos de uso avanzado de `request` son ni serán compatibles. [Hay disponibles ejemplosscript y una guía de conversión](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests/).

<Callout variant="tip">
  La experiencia similar a `request`proporcionada por el objeto `$http` también se devolverá para cualquier cliente que intente utilizar `request` directamente en Node.js 16 y tiempos de ejecución de API con secuencias de comandos más recientes.
</Callout>

## API con secuencia de comandos: errores inesperados del token JSON.parse

Intentar utilizar la función `JSON.parse` mientras se interactúa con el cuerpo de la respuesta puede producir errores de token inesperados en el monitor de API con secuencia de comandos que utiliza Node.js 16 y el tiempo de ejecución más reciente. Si el encabezado de respuesta del tipo de contenido es `application/json`, el cuerpo de la respuesta que devuelve el objeto `$http` se analizará en formato JSON. Las llamadas adicionales que intenten utilizar `JSON.parse` para analizar el cuerpo de la respuesta fallarán con este error porque el cuerpo de la respuesta ya se ha analizado.

## Browser con secuencias de comandos: advertencias de obsolescencia ($browser / $driver) [#deprecations]

Las advertencias de obsolescencia para `$browser` y `$driver` se eliminaron a partir de la versión 2.0.29 o más reciente del tiempo de ejecución del browser . Ya no deberías recibir estas advertencias cuando utilices la ubicación pública. Actualice la imagen del tiempo de ejecución de su browser de nodo si recibe estas advertencias cuando utiliza la ubicación privada.

## Browser con script: waitForAndFindElement y waitForPendingRequests [#waitMethods]

Los métodos `waitForAndFindElement` y `waitForPendingRequests` son métodos personalizados de New Relic que se proporcionan en Chrome 72 y en tiempos de ejecución browser con secuencias de comandos anteriores. Todavía se pueden usar con `$driver` y `$browser` en Chrome 100 y tiempos de ejecución más recientes, pero no estarán disponibles cuando se usan las API de Selenium Webdriver 4.1 directamente con `$selenium` y `$webDriver`. Este cambio alineará mejor la implementación de Selenium Webdriver de New Relic con la implementación básica de Selenium Webdriver .

Los clientes que opten por seguir usando `waitForAndFindElement` o `waitForPendingRequests` en el nuevo tiempo de ejecución pueden pegar [ejemplos de código](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100/#waitForAndFindElement) en sus monitores.
