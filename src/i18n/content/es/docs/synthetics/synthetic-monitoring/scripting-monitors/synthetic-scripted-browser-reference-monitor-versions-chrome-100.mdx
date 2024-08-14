---
title: Referencia browser con script Sintético (Chrome 100 y superior)
tags:
  - Synthetics
  - Synthetic monitoring
  - Scripting monitors
metaDescription: Description of every function available for synthetic scripted monitors for Chrome 100 and newer.
freshnessValidatedDate: never
translationType: machine
---

Para ejecutar el script del monitor del navegador utilizando [Selenium Webdriver 4.1 API](https://www.selenium.dev/documentation/webdriver/), asegúrese de que script la sintaxis del utilice las variables `$selenium` y `$webDriver`. Para acceder a las API de Selenium Webdriver 3.6.0, utilice las variables `$driver` y `$browser` como se describe en la [documentación de referencia del navegador 0.5.0+](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-browser-reference-monitor-versions-050/).

En particular:

* `$selenium` proporciona todas las exportaciones del módulo `selenium-webdriver` (por ejemplo, `ActionSequence`, `Button`, `By` o `WebElement`). Esto se asigna al uso `$driver` en tiempos de ejecución anteriores.
* `$webDriver` es una instancia de monitoreo sintético de `selenium-webdriver.WebDriver()`. Expone las principales API `WebDriver` básicas como `get()` y `findElement()`, así como algunas API personalizadas de Sintético. Esto se asigna al uso `$browser` en tiempos de ejecución anteriores.
* `$headers` proporciona la posibilidad de modificar los encabezados de las solicitudes. Esta capacidad estaba disponible en tiempos de ejecución anteriores en varios métodos `$browser`
* `$urlFilter` proporciona la capacidad de crear listas de permisos y denegaciones para limitar las solicitudes a determinados dominios. Esta capacidad estaba disponible en tiempos de ejecución anteriores en varios métodos `$browser`

Si está utilizando una versión anterior del monitor, consulte la [documentación de la versión 0.5.0 y 0.6.0 del monitor](/docs/synthetics/new-relic-synthetics/scripting-monitors/synthetics-scripted-browser-reference-monitor-versions-050) o la [documentación de la versión 0.4.0 y anteriores del monitor](/docs/synthetics/new-relic-synthetics/scripting-monitors/synthetics-scripted-browser-reference).

Para obtener más información sobre las versiones de monitores y las diferencias en tiempo de ejecución, consulte [Entornos de ejecución](/docs/synthetics/new-relic-synthetics/scripting-monitors/scripted-monitor-runtime-environment).

<Callout variant="important">
  El flujo de control/administrador de promesas de Selenium Webdriver permitió que algunas funciones se ejecutaran en orden, sin administrar manualmente las promesas/funciones asíncronas. Esto se eliminó en Selenium Webdriver 4.0 y ya no está disponible en el tiempo de ejecución. Todas las funciones asíncronas y las promesas deben administrarse con `await` o con `.then` promesa cadena. Esto garantizará que las funciones del script se ejecuten en el orden esperado.
</Callout>

Para ver algunos ejemplos de uso común, consulte [Introducción al script de monitorización del browser](/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors).

## Funciones de nivel superior: cree su script [#structure]

New Relic llama a funciones de nivel superior directamente desde su instancia `$webDriver` . Estos proporcionan una amplia gama de funciones que cubren muchas acciones básicas programables.

Los métodos `waitForAndFindElement(locator, timeout)` y `waitForPendingRequests(timeout)` se eliminaron del tiempo de ejecución y no están disponibles a través de `$webDriver`. La compatibilidad con versiones anteriores está disponible, pero se considera obsoleta y es posible que se elimine de futuros tiempos de ejecución. Utilice el siguiente fragmento de código para reemplazar su funcionalidad:

<CollapserGroup>
  <Collapser
    id="waitForAndFindElement"
    title="Método waitForAndFindElement (localizador, tiempo de espera)"
  >
    ```js
    const element = await $webDriver.wait($selenium.until.elementLocated(locator), timeout, 'Timed-out waiting for element to be located using: '+locator);
    await $webDriver.wait($selenium.until.elementIsVisible(element), timeout, 'Timed-out waiting for element to be visible using ${element}');
    return await $webDriver.findElement(locator);
    ```
  </Collapser>

  <Collapser
    id="waitForPendingRequests"
    title="Método waitForPendingRequests (tiempo de espera)"
  >
    ```js
    await $webDriver.wait($webDriver.executeScript('return document.readyState == \'complete\''), optTimeoutMs, 'waitForPendingRequests');
    ```
  </Collapser>
</CollapserGroup>

<table>
  <thead>
    <tr>
      <th style={{ width: "400px" }}>
        Función
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="webDriver-actions">
      <td>
        `$webDriver.actions()`
      </td>

      <td>
        Crea una nueva secuencia de acción usando este controlador. Para obtener una lista de acciones disponibles, consulte [ActionSequence](#actionsequence).

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="headers-add">
      <td>
        `$headers.add(headerKey: string, headerValue: string)`
      </td>

      <td>
        Agrega el encabezado `headerKey` con el valor `headerValue` al tiempo de ejecución.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="headers-addMultiple">
      <td>
        `$headers.addMultiple(headers: {key:value...})`
      </td>

      <td>
        Agrega múltiples encabezados al tiempo de ejecución.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="headers-get">
      <td>
        `$headers.get(headerKey: string)`
      </td>

      <td>
        Devuelve un mapa de encabezados configurados actualmente.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="headers-getAll">
      <td>
        `$headers.getAll()`
      </td>

      <td>
        Devuelve un mapa de encabezados configurados actualmente.

        Valor de retorno: mapa
      </td>
    </tr>

    <tr id="headers-getKeys">
      <td>
        `$headers.getKeys()`
      </td>

      <td>
        Devuelve una matriz de claves de encabezado configuradas actualmente.

        Valor de retorno: matriz
      </td>
    </tr>

    <tr id="headers-has">
      <td>
        `$headers.has(headerKey: string)`
      </td>

      <td>
        Devuelve un bool que indica si este encabezado existe.

        Valor de retorno: booleano
      </td>
    </tr>

    <tr id="headers-remove">
      <td>
        `$headers.remove(header: string)`
      </td>

      <td>
        Elimina un encabezado específico del tiempo de ejecución.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="headers-removeMultiple">
      <td>
        `$headers.removeMmultiple(headers: {key:value...})`
      </td>

      <td>
        Elimina todos los encabezados del argumento del tiempo de ejecución.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="headers-clear">
      <td>
        `$headers.clear()`
      </td>

      <td>
        Elimina todos los encabezados del tiempo de ejecución.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="urlFilter-addToDenyList">
      <td>
        `$urlFilter.addToDenyList(hostnameArr: [string])`
      </td>

      <td>
        Agrega todo el nombre de host en una matriz de argumentos a su lista de denegación. Permite utilizar [comodines](#wildcard-use).

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="urlFilter-addToAllowList">
      <td>
        `$urlFilter.addToAllowList(hostnameArr: [string])`
      </td>

      <td>
        Agrega todo el nombre de host en una matriz de argumentos a su lista de 'permitidos'. Permite utilizar [comodines](#wildcard-use).

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="urlFilter-removeFromDenyList">
      <td>
        `$urlFilter.removeFromDenyList(hostnameArr: [string])`
      </td>

      <td>
        Elimina todos los nombres de host en el argumento de su lista de denegados.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="urlFilter-removeFromAllowList">
      <td>
        `$urlFilter.removeFromAllowList(hostnameArr: [string])`
      </td>

      <td>
        Elimina todos los nombres de host en el argumento de su lista de 'permitidos'.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-executeAsyncScript">
      <td>
        `$webDriver.executeAsyncScript(script: ?, var_args: ?)`
      </td>

      <td>
        Programa un comando para ejecutar JavaScript asincrónico en el contexto del marco o ventana actualmente seleccionado.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-executeScript">
      <td>
        `$webDriver.executeScript(script: ?, var_args: ?)`
      </td>

      <td>
        Programa un comando para ejecutar JavaScript en el contexto del marco o ventana actualmente seleccionado.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-findElement">
      <td>
        `$webDriver.findElement(locator: $selenium.Locator)`
      </td>

      <td>
        Programe un comando para [buscar un elemento en la página](#locators). Si no se encuentra, monitoreo sintético devuelve un error.

        Valor de retorno: WebElementPromise
      </td>
    </tr>

    <tr id="webDriver-findElements">
      <td>
        `$webDriver.findElements(locator: $selenium.Locator)`
      </td>

      <td>
        Programe un comando para [buscar múltiples elementos en la página](#locators).

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-get">
      <td>
        `$webDriver.get(url: string)`
      </td>

      <td>
        Carga una página web en un browser Sintético.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-getAllWindowHandles">
      <td>
        `$webDriver.getAllWindowHandles()`
      </td>

      <td>
        Programa un comando para recuperar la lista actual de identificadores de ventana disponibles.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-getCapabilities">
      <td>
        `$webDriver.getCapabilities()`
      </td>

      <td>
        Una promesa que se resolverá con las capacidades de la instancia.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-getCurrentUrl">
      <td>
        `$webDriver.getCurrentUrl()`
      </td>

      <td>
        Programa un comando para recuperar la URL de la página actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-getPageSource">
      <td>
        `$webDriver.getPageSource()`
      </td>

      <td>
        Programa un comando para recuperar la fuente de la página actual. La fuente de la página devuelta es una representación del DOM subyacente. No espere que tenga formato o formato de escape de la misma manera que la respuesta enviada desde el servidor web.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-getSession">
      <td>
        `$webDriver.getSession()`
      </td>

      <td>
        Una promesa para la sesión de este cliente.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-getTitle">
      <td>
        `$webDriver.getTitle()`
      </td>

      <td>
        Programa un comando para recuperar el título de la página actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-getWindowHandle">
      <td>
        `$webDriver.getWindowHandle()`
      </td>

      <td>
        Programa un comando para recuperar el identificador de la ventana actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-manage">
      <td>
        `$webDriver.manage()`
      </td>

      <td>
        La interfaz de opciones para esta instancia. Puede administrar [cookies, tiempos de espera y otras opciones de ventana](#options).

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="webDriver-navigate">
      <td>
        `$webDriver.navigate()`
      </td>

      <td>
        La [interfaz de navegación (historial de funciones browser )](#navigate) para esta instancia.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="webDriver-sleep">
      <td>
        `$webDriver.sleep()`
      </td>

      <td>
        Programa un comando para hacer que el conductor duerma durante un período de tiempo determinado.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-switchTo">
      <td>
        `$webDriver.switchTo()`
      </td>

      <td>
        La interfaz del localizador de objetivos para esta instancia.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="webDriver-takeScreenshot">
      <td>
        `$webDriver.takeScreenshot()`
      </td>

      <td>
        Programa un comando para tomar una captura de pantalla.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webDriver-wait">
      <td>
        `$webDriver.wait(fn: $driver.Condition, timeout: number, opt_message: string)`
      </td>

      <td>
        Programa un [comando para esperar a que se cumpla una condición](#until), según lo definido por la función proporcionada.

        Valor de retorno: WebElement
      </td>
    </tr>

    <tr id="browser-waitforpending">
      <td>
        `$browser.waitForPendingRequests(timeout: number)`
      </td>

      <td>
        Hace que el script espere a que regresen las solicitudes que se han iniciado, hasta el tiempo de espera. Útil para rastrear recursos sin bloqueo.

        Valor de retorno: promesa
      </td>
    </tr>
  </tbody>
</table>

## Lista de denegaciones: uso de comodines [#wildcard-use]

Si desea agregar dominio a la lista de denegación de su instancia browser , los comodines deben coincidir con la sintaxis de la URL que se bloqueará.

Una lista de denegación general `.com` debe contener estas funciones:

<table>
  <thead>
    <tr>
      <th>
        Función
      </th>

      <th style={{ width: "200px" }}>
        Acción de bloqueo
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="deny-list-wildcard-examples">
      <td>
        `$urlFilter.addToDenyList(['*.com']);`
      </td>

      <td>
        `a.com`
      </td>
    </tr>

    <tr>
      <td>
        `$urlFilter.addToDenyList([*.*.com']);`
      </td>

      <td>
        `a.b.com`
      </td>
    </tr>

    <tr>
      <td>
        `$urlFilter.addToDenyList([*.*.*.com']);`
      </td>

      <td>
        `a.b.c.com`
      </td>
    </tr>

    <tr>
      <td>
        `$urlFilter.addToDenyList([www.*.com']);`
      </td>

      <td>
        `www.a.com`
      </td>
    </tr>

    <tr>
      <td>
        `$urlFilter.addToDenyList([www.*.*.com']);`
      </td>

      <td>
        `www.a.b.com`
      </td>
    </tr>

    <tr>
      <td>
        `$urlFilter.addToDenyList(['www.*.*.*.com']);`
      </td>

      <td>
        `www.a.b.c.com`
      </td>
    </tr>
  </tbody>
</table>

## Opciones: administrar la instancia browser [#options]

Estas funciones administran opciones para la instancia de su browser , como cookies, tiempos de espera y tamaño de ventana. Accede a estas opciones a través de la función [`$webDriver.manage()`](#webDriver-manage) .

<table>
  <thead>
    <tr>
      <th style={{ width: "400px" }}>
        Función
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="options-manage-addCookie">
      <td>
        `$webDriver.manage().addCookie(spec: object)`
      </td>

      <td>
        Programa un comando para agregar una cookie.

        `spec` es un objeto de registro que describe una cookie browser . Para obtener más información, consulte la [documentación de Selenium](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_Options.Cookie.html).

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-deleteAllCookies">
      <td>
        `$webDriver.manage().deleteAllCookies()`
      </td>

      <td>
        Programa un comando para eliminar todas las cookies visibles en la página actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-deleteCookie">
      <td>
        `$webDriver.manage().deleteCookie(name: string)`
      </td>

      <td>
        Programa un comando para eliminar la cookie con el nombre de pila. Este comando no funciona si no hay ninguna cookie con el nombre de pila visible en la página actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-getCookie">
      <td>
        `$webDriver.manage().getCookie(name: string)`
      </td>

      <td>
        Programa un comando para recuperar la cookie con el nombre de pila. Devuelve nulo si no existe dicha cookie. La cookie se devolverá como un objeto JSON como lo describe el protocolo de conexión Webdriver .

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-getCookies">
      <td>
        `$webDriver.manage().getCookies()`
      </td>

      <td>
        Programa un comando para recuperar todas las cookies visibles en la página actual. New Relic Syntheticcs devuelve cada cookie como un objeto JSON como lo describe el protocolo de conexión Webdriver .

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-get-timeouts">
      <td>
        `$webDriver.manage().getTimeouts()`
      </td>

      <td>
        Devuelve el script actual, la carga de página y los tiempos de espera implícitos.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-set-timeouts-implicit">
      <td>
        `$webDriver.manage().setTimeouts({implicit: numberMS})`
      </td>

      <td>
        Especifica la cantidad de tiempo que el controlador debe esperar cuando busca un elemento si no está presente inmediatamente. Establecer el tiempo de espera en `0` deshabilita la espera implícita.

        Tenga cuidado al aumentar el tiempo de espera, ya que aumentará el tiempo de ejecución de la prueba, especialmente con estrategias de ubicación más lentas como XPath. El valor predeterminado es 10 segundos.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-set-timeouts-pageLoad">
      <td>
        `$webDriver.manage().setTimeouts({pageLoad: numberMS})`
      </td>

      <td>
        Establece la cantidad de tiempo que se debe esperar a que se complete la carga de una página antes de devolver un error. Si el tiempo de espera es negativo, la carga de la página puede durar hasta 180 segundos. El valor predeterminado es 60 segundos.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-set-timeouts-script">
      <td>
        `$webDriver.manage().setTimeouts({script: numberMS})`
      </td>

      <td>
        Establece la cantidad de tiempo que se debe esperar, en milisegundos, para que un script asincrónico finalice la ejecución antes de devolver un error. El valor predeterminado es 30 segundos.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-window-getRect">
      <td>
        `$webDriver.manage().window().getRect()`
      </td>

      <td>
        Recupera la posición actual de la ventana (como xey), en relación con la esquina superior izquierda de la pantalla y el tamaño de la ventana (como ancho y alto).

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-window-maximize">
      <td>
        `$webDriver.manage().window().maximize()`
      </td>

      <td>
        Maximiza la ventana actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-window-setRect">
      <td>
        `$webDriver.manage().window().setRect({x: number|undefined, y: number|undefined, width: number|undefined, height: number|undefined})`
      </td>

      <td>
        Establezca la posición actual de la ventana (como xey), en relación con la esquina superior izquierda de la pantalla y el tamaño de la ventana (como ancho y alto).

        Valor de retorno: promesa
      </td>
    </tr>
  </tbody>
</table>

## Localizador: Buscar elemento de página [#locators]

Localizador es una colección de funciones de fábrica para crear `locator` instancia. El localizador encuentra elementos DOM, que se pueden pasar a funciones como [`$webDriver.findElement`](#webDriver-findElement). Llámelos a través de `$selenium.By`.

<table>
  <thead>
    <tr>
      <th style={{ width: "400px" }}>
        Función
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="selenium-by-className">
      <td>
        `$selenium.By.className(className: string)`
      </td>

      <td>
        Localiza un elemento que tiene un nombre de clase específico. El localizador devuelto equivale a buscar elementos con el selector CSS `.class`.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="selenium-by-css">
      <td>
        `$selenium.By.css(cssName: string)`
      </td>

      <td>
        Localiza un elemento usando un selector CSS.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="selenium-by-id">
      <td>
        `$selenium.By.id(id: string)`
      </td>

      <td>
        Localiza un elemento por su ID.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="selenium-by-linkText">
      <td>
        `$selenium.By.linkText(linkText: string)`
      </td>

      <td>
        Localiza elementos de enlace cuyo texto visible coincide con la cadena dada.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="selenium-by-js">
      <td>
        `$selenium.By.js(js: string)`
      </td>

      <td>
        Localiza un elemento evaluando una expresión de JavaScript.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="selenium-by-name">
      <td>
        `$selenium.By.name(name: string)`
      </td>

      <td>
        Localiza elementos cuyo atributo de nombre tiene el valor dado.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="selenium-by-partialLinkText">
      <td>
        `$selenium.By.partialLinkText(partialLinkText: string)`
      </td>

      <td>
        Localiza elementos de enlace cuyo [getText](#webElement-getText) visible contiene la subcadena dada.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="selenium-by-tagName">
      <td>
        `$selenium.By.tagName(tagName: string)`
      </td>

      <td>
        Localiza elementos con un nombre de etiqueta determinado. El localizador devuelto equivale a utilizar la función DOM `getElementsByTagName` .

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="selenium-by-xpath">
      <td>
        `$selenium.By.xpath(xpath: string)`
      </td>

      <td>
        Localiza elementos que coinciden con un selector XPath.

        Valor de retorno: localizador
      </td>
    </tr>
  </tbody>
</table>

## WebElement: Interactuar con el elemento de página [#webelement]

Cuando una función como [`$webDriver.findElement`](#webDriver-findElement) devuelve una referencia de WebElement, estas funciones se pueden usar para interactuar con ese elemento. Por ejemplo, puede hacer clic en botones, enviar texto para formar entradas y obtener atributos de elementos para probar.

<table>
  <thead>
    <tr>
      <th style={{ width: "400px" }}>
        Función
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="webElement-click">
      <td>
        `click()`
      </td>

      <td>
        Hace clic en este elemento.

        Valor de retorno: autorreferencia
      </td>
    </tr>

    <tr id="webElement-sendKeys">
      <td>
        `sendKeys(var_args: ?)`
      </td>

      <td>
        Programa un comando para escribir una secuencia en el elemento DOM representado por esta instancia.

        Valor de retorno: WebElement
      </td>
    </tr>

    <tr id="webElement-getTagName">
      <td>
        `getTagName()`
      </td>

      <td>
        Programa un comando para consultar la etiqueta/nombre de nodo de este elemento.

        Valor de retorno: WebElement
      </td>
    </tr>

    <tr id="webElement-getCssValue">
      <td>
        `getCssValue(name: string)`
      </td>

      <td>
        Programa un comando para consultar el estilo de calcular del elemento representado por esta instancia. Si el elemento hereda el estilo nombrado de su padre, se consultará al padre por su valor. Siempre que sea posible, los valores de color se convertirán a su representación hexadecimal (por ejemplo, `#00ff00` en lugar de `rgb(0, 255, 0)`).

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webElement-getAttribute">
      <td>
        `getAttribute(name: string)`
      </td>

      <td>
        Programa un comando para consultar el valor del atributo dado del elemento.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webElement-getText">
      <td>
        `getText(name: string)`
      </td>

      <td>
        Obtenga el `innerText` visible (no oculto por CSS) de este elemento, incluidos los subelementos, sin ningún espacio en blanco inicial o final.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webElement-getSize">
      <td>
        `getSize()`
      </td>

      <td>
        Programa un comando para calcular el tamaño del cuadro delimitador de este elemento, en píxeles.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webElement-getLocation">
      <td>
        `getLocation()`
      </td>

      <td>
        Programa un comando para calcular la ubicación de este elemento, en el espacio de la página.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webElement-isEnabled">
      <td>
        `isEnabled()`
      </td>

      <td>
        Programa un comando para consultar si el elemento DOM representado por esta instancia está habilitado, según lo dicta el atributo deshabilitado.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webElement-isSelected">
      <td>
        `isSelected()`
      </td>

      <td>
        Programa un comando para consultar si este elemento está seleccionado.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webElement-submit">
      <td>
        `submit()`
      </td>

      <td>
        Programa un comando para enviar el formulario que contiene este elemento (o este elemento si es un elemento `FORM` ). Este comando no es operativo si el elemento no está contenido en un formulario.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webElement-clear">
      <td>
        `clear()`
      </td>

      <td>
        Programa un comando para borrar el valor de este elemento.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="webElement-isDisplayed">
      <td>
        `isDisplayed()`
      </td>

      <td>
        Programa un comando para probar si este elemento se muestra actualmente.

        Valor de retorno: promesa
      </td>
    </tr>
  </tbody>
</table>

## ActionSequence: vincular múltiples acciones [#actionsequence]

Las secuencias de acción pueden crear una interacción compleja del usuario con su sitio web.

* Para crear una nueva secuencia de acciones, utilice [`$webDriver.actions()`](#webDriver-actions).
* Para vincular varias acciones en una secuencia, incluya [`perform()`](#actionSequence-perform) después de cada una. Esto ejecuta y luego finaliza secuencias individuales, incluidas secuencias de acción única.

La siguiente tabla contiene una lista de acciones disponibles. Para obtener más información, consulte la [documentación Webdriver ActionSequence en GitHub](https://github.com/browserstack/selenium-webdriver-nodejs/blob/master/docs/class_webdriver_ActionSequence.html).

<table>
  <thead>
    <tr>
      <th style={{ width: "400px" }}>
        Función
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="actionSequence-click">
      <td>
        `click(opt_elementOrButton: ?, opt_button: ?)`
      </td>

      <td>
        Hace clic en un botón del mouse. Si se proporciona un elemento, el mouse primero se moverá al centro de ese elemento. Esto es equivalente a [`WebElement.click()`](#webElement-click).

        Valor de retorno: secuencia de acciones
      </td>
    </tr>

    <tr id="actionSequence-doubleClick">
      <td>
        `doubleClick(opt_elementOrButton: ?, opt_button: ?)`
      </td>

      <td>
        Hace doble clic en un botón del mouse. Si se proporciona un elemento, el mouse primero se moverá al centro de ese elemento.

        Valor de retorno: secuencia de acciones
      </td>
    </tr>

    <tr id="actionSequence-dragAndDrop">
      <td>
        `dragAndDrop(element: ?, location: ?)`
      </td>

      <td>
        Función cómoda para realizar una maniobra de arrastrar y soltar. El elemento de destino se puede mover a la ubicación de otro elemento o mediante un desplazamiento (en píxeles). La ubicación es un objeto con dos propiedades `x` y `y`: `{x: x_offset, y: y_offset}`.

        Valor de retorno: secuencia de acciones
      </td>
    </tr>

    <tr id="actionSequence-keyDown">
      <td>
        `keyDown(key: ?)`
      </td>

      <td>
        Realiza una pulsación de tecla modificadora. Debe ser uno de `ALT`, `CONTROL`, `SHIFT`, `COMMAND` o `META`. La tecla modificadora no se suelta hasta que se llama a [`keyUp()`](#actionSequence-keyUp) o [`sendKeys()`](#actionSequence-sendKeys) . La pulsación de la tecla será dirigida al elemento actualmente enfocado.

        Valor de retorno: secuencia de acciones
      </td>
    </tr>

    <tr id="actionSequence-keyUp">
      <td>
        `keyUp(key: ?)`
      </td>

      <td>
        Realiza una liberación de tecla modificadora. El lanzamiento tiene como objetivo el elemento actualmente enfocado.

        Valor de retorno: secuencia de acciones
      </td>
    </tr>

    <tr id="actionSequence-mouseDown">
      <td>
        `press(opt_elementOrButton: ?, opt_button: ?)`
      </td>

      <td>
        Presiona un botón del mouse. El botón del mouse no se soltará hasta que se llame a [`release`](#actionSequence-mouseUp) , independientemente de si esa llamada se realiza en esta secuencia u otra. El comportamiento del evento fuera de servicio (como llamar a `press()` o `click()` cuando el botón ya está presionado) no está definido.

        Valor de retorno: secuencia de acciones
      </td>
    </tr>

    <tr id="actionSequence-mouseUp">
      <td>
        `release(opt_elementOrButton: ?, opt_button: ?)`
      </td>

      <td>
        Libera un botón del mouse. El comportamiento no está definido para llamar a esta función sin una llamada previa a [`press()`](#actionSequence-mouseDown).

        Valor de retorno: secuencia de acciones
      </td>
    </tr>

    <tr id="actionSequence-mouseMove">
      <td>
        `move(location: ?, offset: ?)`
      </td>

      <td>
        Mueve el ratón. La ubicación a la que moverse puede especificarse en términos de la ubicación actual del mouse, un desplazamiento relativo a la esquina superior izquierda de un elemento o un elemento (en cuyo caso se usa el centro del elemento).

        Valor de retorno: secuencia de acciones
      </td>
    </tr>

    <tr id="actionSequence-perform">
      <td>
        `perform()`
      </td>

      <td>
        Ejecuta esta secuencia de acciones.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="actionSequence-sendKeys">
      <td>
        `sendKeys(args: ?)`
      </td>

      <td>
        Simula escribir varias teclas. Cada tecla modificadora que se encuentre en la secuencia no se liberará hasta que se vuelva a encontrar. Todo evento clave tendrá como objetivo el elemento actualmente enfocado. Para obtener una lista completa de claves no alfanuméricas admitidas, consulte la [documentación de claves de enumeración Webdriver en GitHub](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/Keys.html).

        Valor de retorno: secuencia de acciones
      </td>
    </tr>
  </tbody>
</table>

## Promesas: vincular acciones en secuencias [#promises]

También puede ejecutar funciones directamente sobre las promesas. monitoreo sintético es un entorno nativo de Node.js y utiliza promesas estándar de Node.js.

Estas funciones evalúan el estado de las promesas, las cancelan y más. En particular, puedes crear secuencias de acciones con la función [`then()`](#promises-then) y sus hermanas, [`finally()`](#promises-thenFinally) y [`catch()`](#promises-thenCatch). Para obtener más información, consulte [Secuencia de acciones](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers#sequence).

<Callout variant="tip">
  Además de soportar la promesa cadena usando .then sintaxis, este tiempo de ejecución también admite la sintaxis async-await.
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "400px" }}>
        Función
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="promises-isPending">
      <td>
        `isPending()`
      </td>

      <td>
        Aún se está calculando si el valor de esta promesa.

        Valor de retorno: booleano
      </td>
    </tr>

    <tr id="promises-then">
      <td>
        `then(opt_callback: fn(T: ?), opt_errback: fn())`
      </td>

      <td>
        Registra oyentes para cuando se resuelva esta instancia. Esta es la función básica utilizada para vincular acciones sincrónicas en su script.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="promises-thenFinally">
      <td>
        `finally(callback: fn())`
      </td>

      <td>
        Registra un oyente para invocarlo cuando se resuelva esta promesa, independientemente de si el valor de la promesa se calculó correctamente.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="promises-thenCatch">
      <td>
        `catch(callback: fn())`
      </td>

      <td>
        Registra un oyente para cuando se rechace esta promesa.

        Valor de retorno: promesa
      </td>
    </tr>
  </tbody>
</table>

## Navegar: moverse por el historial browser [#promises]

La función `$webDriver.navigate()` expone una serie de funciones que le permiten avanzar y retroceder en el historial de su browser , actualizar su página y navegar a páginas nuevas.

<table>
  <thead>
    <tr>
      <th style={{ width: "400px" }}>
        Función
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="navigate-back">
      <td>
        `back()`
      </td>

      <td>
        Retroceder un paso en el historial del browser.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="navigate-forward">
      <td>
        `forward()`
      </td>

      <td>
        Avanza un paso en el historial del browser.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="navigate-refresh">
      <td>
        `refresh()`
      </td>

      <td>
        Actualizar la página actual.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="navigate-to">
      <td>
        `to(string: url)`
      </td>

      <td>
        Cargue una nueva página web en la ventana actual browser . `$webDriver.navigate().to()` es equivalente a `$webDriver.get()`.

        Valor de retorno: nulo
      </td>
    </tr>
  </tbody>
</table>

## Condiciones: pausar y esperar condiciones. [#until]

<Callout variant="tip">
  Puede obtener más información sobre las esperas en Selenium [en su documentación oficial](https://www.selenium.dev/documentation/en/webdriver/waits/).
</Callout>

Usado con `$webDriver.wait`, `until` pausa la ejecución del script hasta que se cumpla la condición. Para obtener más información, consulte [la documentación Webdriver `until` de Selenium](http://www.seleniumhq.org/docs/04_webdriver_advanced.jsp).

Las siguientes son funciones disponibles para `$selenium.until.Condition`:

<table>
  <thead>
    <tr>
      <th style={{ width: "400px" }}>
        Función
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="conditions-ableToSwitchToFrame">
      <td>
        `ableToSwitchToFrame(frame: ?)`
      </td>

      <td>
        Crea una condición que esperará hasta que el controlador de entrada pueda cambiar al marco designado. El marco objetivo se puede especificar como:

        * Un índice numérico en `window.frames` para el fotograma actual

        * Un `webdriver.WebElement`, que debe hacer referencia a un elemento `FRAME` o `IFRAME` en la página actual

        * Un localizador que se puede utilizar para localizar primero un `FRAME` o `IFRAME` en la página actual antes de intentar cambiar a ella.

          Una vez resuelta con éxito esta condición, el conductor quedará concentrado en el nuevo marco.

          Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-alertIsPresent">
      <td>
        `alertIsPresent()`
      </td>

      <td>
        Crea una condición que espera a que se abra una alerta. En caso de éxito, la promesa devuelta se cumplirá con el identificador de la alerta abierta.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementIsDisabled">
      <td>
        `elementIsDisabled(element: $selenium.WebElement)`
      </td>

      <td>
        Crea una condición que esperará a que se deshabilite el elemento dado.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementIsEnabled">
      <td>
        `elementIsEnabled(element: $selenium.WebElement)`
      </td>

      <td>
        Crea una condición que esperará a que se habilite el elemento dado.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementIsNotVisible">
      <td>
        `elementIsNotVisible(element: $selenium.WebElement)`
      </td>

      <td>
        Crea una condición que esperará a que el elemento dado esté en el DOM, pero no sea visible para el usuario.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementIsVisible">
      <td>
        `elementIsVisible(element: $selenium.WebElement)`
      </td>

      <td>
        Crea una condición que esperará a que el elemento dado se vuelva visible.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementIsSelected">
      <td>
        `elementIsSelected(element: $selenium.WebElement)`
      </td>

      <td>
        Crea una condición que esperará a que se seleccione el elemento dado.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementLocated">
      <td>
        `elementLocated(element: $selenium.Locator)`
      </td>

      <td>
        Crea una condición que se repetirá hasta que se encuentre un elemento con el localizador dado.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementsLocated">
      <td>
        `elementsLocated(element: $selenium.Locator)`
      </td>

      <td>
        Crea una condición que se repetirá hasta que se encuentre al menos un elemento con el localizador dado.

        Valor de retorno: condición

        n
      </td>
    </tr>

    <tr id="conditions-elementTextContains">
      <td>
        `elementTextContains(element: $selenium.WebElement, substr: string)`
      </td>

      <td>
        Crea una condición que esperará a que el texto visible del elemento dado contenga la subcadena dada.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementTextIs">
      <td>
        `elementTextIs(element: $selenium.WebElement, text: string)`
      </td>

      <td>
        Distingue mayúsculas y minúsculas. Crea una condición que esperará a que el texto visible del elemento dado coincida exactamente con el texto dado.

        Valor de retorno: condición

        n
      </td>
    </tr>

    <tr id="conditions-elementTextMatches">
      <td>
        `elementTextMatches(element: $selenium.WebElement, regex: string)`
      </td>

      <td>
        Crea una condición que esperará a que el texto visible del elemento dado coincida con una expresión regular.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-stalenessOf">
      <td>
        `stalenessOf(element: $selenium.WebElement)`
      </td>

      <td>
        Crea una condición que esperará a que el elemento dado quede obsoleto. Un elemento se considera obsoleto una vez que se elimina del DOM o se carga una nueva página.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-titleContains">
      <td>
        `titleContains(substr: string)`
      </td>

      <td>
        Crea una condición que esperará a que el título de la página actual contenga la subcadena dada.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-titleIs">
      <td>
        `titleIs(title: string)`
      </td>

      <td>
        Crea una condición que esperará a que el título de la página actual coincida con el valor dado.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-titleMatches">
      <td>
        `titleMatches(regex: string)`
      </td>

      <td>
        Crea una condición que esperará a que el título de la página actual coincida con la expresión regular dada.

        Valor de retorno: condición
      </td>
    </tr>
  </tbody>
</table>

## Shadow DOM: encontrar elementos [#shadow]

El tiempo de ejecución ahora admite el acceso a elementos DOM ocultos mediante el nuevo método Selenium Webdriver `getShadowRoot()`.

1. Utilice `findElement` o una [función similar de nivel superior](#structure) para encontrar el host oculto. Este es el elemento en el que está montada la raíz de sombra.
2. Utilice el método `getShadowRoot()` en el elemento que se encuentra en el paso 1 para obtener la raíz oculta.
3. Usando la raíz de la sombra, ahora puede usar findElement o funciones similares para buscar elementos dentro de la raíz de la sombra. Si se utilizan varios niveles de Shadow DOM, estos pasos deberán repetirse hasta que acceda al objeto raíz de Shadow que contiene el elemento con el que necesita interactuar.

<Callout variant="tip">
  Chrome no admite el uso del localizador XPath dentro de un objeto raíz de sombra. Utilice una [opción de localizador](#locators) diferente para buscar elementos dentro de un objeto raíz de sombra.
</Callout>

Ejemplo:

```js
// Find the shadow host 
let myShadowHost = await $webDriver.findElement($selenium.By.id('exampleShadowHost'));
// Get the shadow root
let myShadowRoot = await myShadowHost.getShadowRoot();
// Interact with an element inside the shadow root
let el = await myShadowRoot.findElement($selenium.By.id('myButton'));
await el.click();
```
