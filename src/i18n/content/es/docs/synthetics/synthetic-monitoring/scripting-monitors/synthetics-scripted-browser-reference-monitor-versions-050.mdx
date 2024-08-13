---
title: Referencia del browser scripted de Sintético (versiones de monitor 0.5.0 y 0.6.0)
tags:
  - Synthetics
  - Synthetic monitoring
  - Scripting monitors
metaDescription: Description of every function available for synthetic scripted monitors for versions 0.5.0 and 0.6.0.
freshnessValidatedDate: never
translationType: machine
---

Este documento describe las funciones browser con secuencias de comandos disponibles para las versiones 0.5.0 o 0.6.0 del monitor Sintético. Si está utilizando una versión más reciente del monitor, consulte la [versión del monitor Chrome 100 y la documentación más reciente](/docs/synthetics/new-relic-synthetics/scripting-monitors/synthetic-scipted-browser-reference-monitor-versions-chrome100). Si está utilizando versiones de monitor anteriores, consulte la [versión del monitor 0.4.0 y la documentación anterior](/docs/synthetics/new-relic-synthetics/scripting-monitors/synthetics-scripted-browser-reference).

Para obtener más información sobre las versiones de monitores y las diferencias en tiempo de ejecución, consulte [Entornos de ejecución](/docs/synthetics/new-relic-synthetics/scripting-monitors/scripted-monitor-runtime-environment).

Para ver algunos ejemplos de uso común, consulte [Introducción al script de monitorización del browser](/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors).

## API de Selenium Webdriver [#selenium]

Al utilizar las variables `$driver` y `$browser`, su [navegador con secuencias de comandos](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers) obtiene acceso a Selenium Webdriver API 3.6.0 para monitor versión 0.6.x y API de Selenium Webdriver 3.5.0 para la versión del monitor 0.5.x.

En particular:

* `$driver` proporciona todas las exportaciones del módulo `selenium-webdriver` (por ejemplo, `ActionSequence`, `Button`, `By`, `WebElement`, etc.).
* `$browser` es una instancia de monitoreo sintético de `selenium-webdriver.WebDriver()`. Expone las principales API `WebDriver` básicas como `get()` y `findElement()`, así como algunas API personalizadas de Sintético.

## Funciones de nivel superior: cree su script [#structure]

New Relic llama a funciones de nivel superior directamente desde su instancia `$browser` . Estos proporcionan una amplia gama de funciones que cubren muchas acciones básicas programables.

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
    <tr id="browser-actions">
      <td>
        `$browser.actions()`
      </td>

      <td>
        Crea una nueva secuencia de acción usando este controlador. Para obtener una lista de acciones disponibles, consulte [ActionSequence](#actionsequence).

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-addHeader">
      <td>
        `$browser.addHeader(headerKey: string, headerValue: string)`
      </td>

      <td>
        Agrega el encabezado `headerKey` con el valor `headerValue` al tiempo de ejecución.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-addHeaders">
      <td>
        `$browser.addHeaders(headers: ?)`
      </td>

      <td>
        Agrega un mapa de encabezados al tiempo de ejecución.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-deleteHeader">
      <td>
        `$browser.deleteHeader(header: string)`
      </td>

      <td>
        Elimina un encabezado específico del tiempo de ejecución.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-deleteHeaders">
      <td>
        `$browser.deleteHeaders(header: [string])`
      </td>

      <td>
        Elimina todos los encabezados del argumento del tiempo de ejecución.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-addHostnameToBlacklist">
      <td>
        `$browser.addHostnameToBlacklist(hostname: string)`
      </td>

      <td>
        Agrega un nombre de host a su lista de denegación. Permite utilizar [comodines](#wildcard-use).

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-addHostnamesToBlacklist">
      <td>
        `$browser.addHostnamesToBlacklist(hostnameArr: [string])`
      </td>

      <td>
        Agrega todo el nombre de host en una matriz de argumentos a su lista de denegación. Permite utilizar [comodines](#wildcard-use).

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-addHostnameToWhitelist">
      <td>
        `$browser.addHostnameToWhitelist(hostname: string)`
      </td>

      <td>
        Agrega un nombre de host bloqueado por defecto en monitoreo sintético a su lista de 'permitidos'.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-addHostnamesToWhitelist">
      <td>
        `$browser.addHostnamesToWhitelist(hostnameArr: [string])`
      </td>

      <td>
        Agrega todo el nombre de host en el argumento a su lista de 'permitidos'.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-deleteHostnameFromBlacklist">
      <td>
        `$browser.deleteHostnameFromBlacklist(hostname: string)`
      </td>

      <td>
        Elimina un nombre de host para esta instancia browser de su lista de denegación.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-deleteHostnamesFromBlacklist">
      <td>
        `$browser.deleteHostnamesFromBlacklist(hostnameArr: [string])`
      </td>

      <td>
        Elimina todos los nombres de host en el argumento de su lista de denegados.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-deleteHostnameFromWhitelist">
      <td>
        `$browser.deleteHostnameFromWhitelist(hostnameArr: [string])`
      </td>

      <td>
        Elimina un nombre de host para esta instancia browser de su lista de 'permitidos'.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-deleteHostnamesFromWhitelist">
      <td>
        `$browser.deleteHostnamesFromWhitelist(hostnameArr: [string])`
      </td>

      <td>
        Elimina todos los nombres de host en el argumento de su lista de 'permitidos' para esta instancia browser .

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-executeAsyncScript">
      <td>
        `$browser.executeAsyncScript(script: ?, var_args: ?)`
      </td>

      <td>
        Programa un comando para ejecutar JavaScript asincrónico en el contexto del marco o ventana actualmente seleccionado.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-executeScript">
      <td>
        `$browser.executeScript(script: ?, var_args: ?)`
      </td>

      <td>
        Programa un comando para ejecutar JavaScript en el contexto del marco o ventana actualmente seleccionado.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-findElement">
      <td>
        `$browser.findElement(locator: $driver.Locator)`
      </td>

      <td>
        Programe un comando para [buscar un elemento en la página](#locators). Si no se encuentra, monitoreo sintético devuelve un error.

        Valor de retorno: WebElementPromise
      </td>
    </tr>

    <tr id="browser-findElements">
      <td>
        `$browser.findElements(locator: $driver.Locator)`
      </td>

      <td>
        Programe un comando para [buscar múltiples elementos en la página](#locators).

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-waitForAndFindElement">
      <td>
        `$browser.waitForAndFindElement(locator: $driver.Locator [, timeout: number)`
      </td>

      <td>
        Programe un comando para esperar y [encontrar un elemento en la página](#locators), y otro comando para esperar a que sea visible. Si no se encuentra, monitoreo sintético devuelve un error.

        El valor del tiempo de espera es opcional. Se aplica por separado a ambas tareas de encontrar el elemento y esperar su visibilidad. Esto significa que, en el peor de los casos, este método puede tardar hasta el doble del valor de tiempo de espera proporcionado. El valor de tiempo de espera predeterminado es 1000 ms (1 segundo).

        Valor de retorno: WebElementPromise
      </td>
    </tr>

    <tr id="browser-get">
      <td>
        `$browser.get(url: string)`
      </td>

      <td>
        Carga una página web en un browser Sintético.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-getAllWindowHandles">
      <td>
        `$browser.getAllWindowHandles()`
      </td>

      <td>
        Programa un comando para recuperar la lista actual de identificadores de ventana disponibles.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-getCapabilities">
      <td>
        `$browser.getCapabilities()`
      </td>

      <td>
        Una promesa que se resolverá con las capacidades de la instancia.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-getCurrentUrl">
      <td>
        `$browser.getCurrentUrl()`
      </td>

      <td>
        Programa un comando para recuperar la URL de la página actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-getHeaders">
      <td>
        `$browser.getHeaders()`
      </td>

      <td>
        Devuelve un mapa de encabezados configurados actualmente.

        Valor de retorno: mapa
      </td>
    </tr>

    <tr id="browser-getPageSource">
      <td>
        `$browser.getPageSource()`
      </td>

      <td>
        Programa un comando para recuperar la fuente de la página actual. La fuente de la página devuelta es una representación del DOM subyacente. No espere que tenga formato o formato de escape de la misma manera que la respuesta enviada desde el servidor web.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-getSession">
      <td>
        `$browser.getSession()`
      </td>

      <td>
        Una promesa para la sesión de este cliente.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-getTitle">
      <td>
        `$browser.getTitle()`
      </td>

      <td>
        Programa un comando para recuperar el título de la página actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-getWindowHandle">
      <td>
        `$browser.getWindowHandle()`
      </td>

      <td>
        Programa un comando para recuperar el identificador de la ventana actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-manage">
      <td>
        `$browser.manage()`
      </td>

      <td>
        La interfaz de opciones para esta instancia. Puede administrar [cookies, tiempos de espera y otras opciones de ventana](#options).

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-navigate">
      <td>
        `$browser.navigate()`
      </td>

      <td>
        La [interfaz de navegación (historial de funciones browser )](#navigate) para esta instancia.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-schedule">
      <td>
        `$browser.schedule(command: ?, description: string)`
      </td>

      <td>
        Programa un comando para que lo ejecute el `CommandExecutor` de este controlador.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-sleep">
      <td>
        `$browser.sleep()`
      </td>

      <td>
        Programa un comando para hacer que el conductor duerma durante un período de tiempo determinado.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-switchTo">
      <td>
        `$browser.switchTo()`
      </td>

      <td>
        La interfaz del localizador de objetivos para esta instancia.

        Valor de retorno: nulo
      </td>
    </tr>

    <tr id="browser-takeScreenshot">
      <td>
        `$browser.takeScreenshot()`
      </td>

      <td>
        Programa un comando para tomar una captura de pantalla.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="browser-wait">
      <td>
        `$browser.wait(fn: $driver.Condition, timeout: number, opt_message: string)`
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
    <tr id="options-manage-addCookie">
      <td>
        `$browser.addHostnameToBlacklist('*.com');`
      </td>

      <td>
        `a.com`
      </td>
    </tr>

    <tr>
      <td>
        `$browser.addHostnameToBlacklist('*.*.com');`
      </td>

      <td>
        `a.b.com`
      </td>
    </tr>

    <tr>
      <td>
        `$browser.addHostnameToBlacklist('*.*.*.com');`
      </td>

      <td>
        `a.b.c.com`
      </td>
    </tr>

    <tr>
      <td>
        `$browser.addHostnameToBlacklist('www.*.com');`
      </td>

      <td>
        `www.a.com`
      </td>
    </tr>

    <tr>
      <td>
        `$browser.addHostnameToBlacklist('www.*.*.com');`
      </td>

      <td>
        `www.a.b.com`
      </td>
    </tr>

    <tr>
      <td>
        `$browser.addHostnameToBlacklist('www.*.*.*.com');`
      </td>

      <td>
        `www.a.b.c.com`
      </td>
    </tr>
  </tbody>
</table>

## Opciones: administrar la instancia browser [#options]

Estas funciones administran opciones para la instancia de su browser , como cookies, tiempos de espera y tamaño de ventana. Accede a estas opciones a través de la función [`$browser.manage()`](#browser-manage) .

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
        `$browser.manage().addCookie(spec: object)`
      </td>

      <td>
        Programa un comando para agregar una cookie.

        `spec` es un objeto de registro que describe una cookie browser . Para obtener más información, consulte la [documentación de Selenium](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_Options.Cookie.html).

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-deleteAllCookies">
      <td>
        `$browser.manage().deleteAllCookies()`
      </td>

      <td>
        Programa un comando para eliminar todas las cookies visibles en la página actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-deleteCookie">
      <td>
        `$browser.manage().deleteCookie(name: string)`
      </td>

      <td>
        Programa un comando para eliminar la cookie con el nombre de pila. Este comando no funciona si no hay ninguna cookie con el nombre de pila visible en la página actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-getCookie">
      <td>
        `$browser.manage().getCookie(name: string)`
      </td>

      <td>
        Programa un comando para recuperar la cookie con el nombre de pila. Devuelve nulo si no existe dicha cookie. La cookie se devolverá como un objeto JSON como lo describe el protocolo de conexión Webdriver .

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-getCookies">
      <td>
        `$browser.manage().getCookies()`
      </td>

      <td>
        Programa un comando para recuperar todas las cookies visibles en la página actual. New Relic Syntheticcs devuelve cada cookie como un objeto JSON como lo describe el protocolo de conexión Webdriver .

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-timeouts-implicitlyWait">
      <td>
        `$browser.manage().timeouts().implicitlyWait(ms: number)`
      </td>

      <td>
        Especifica la cantidad de tiempo que el controlador debe esperar cuando busca un elemento si no está presente inmediatamente. Establecer el tiempo de espera en `0` deshabilita la espera implícita.

        Tenga cuidado al aumentar el tiempo de espera, ya que aumentará el tiempo de ejecución de la prueba, especialmente con estrategias de ubicación más lentas como XPath. El valor predeterminado es 10 segundos.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-timeouts-pageLoadTimeout">
      <td>
        `$browser.manage().timeouts().pageLoadTimeout(ms: number)`
      </td>

      <td>
        Establece la cantidad de tiempo que se debe esperar a que se complete la carga de una página antes de devolver un error. Si el tiempo de espera es negativo, la carga de la página puede durar hasta 180 segundos. El valor predeterminado es 60 segundos.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-timeouts-setScriptTimeout">
      <td>
        `$browser.manage().timeouts().setScriptTimeout(ms: number)`
      </td>

      <td>
        Establece la cantidad de tiempo que se debe esperar, en milisegundos, para que un script asincrónico finalice la ejecución antes de devolver un error. El valor predeterminado es 30 segundos.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-window-getPosition">
      <td>
        `$browser.manage().window().getPosition()`
      </td>

      <td>
        Recupera la posición actual de la ventana, en relación con la esquina superior izquierda de la pantalla.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-window-getSize">
      <td>
        `$browser.manage().window().getSize()`
      </td>

      <td>
        Recupera el tamaño actual de la ventana.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-window-maximize">
      <td>
        `$browser.manage().window().maximize()`
      </td>

      <td>
        Maximiza la ventana actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-window-setPosition">
      <td>
        `$browser.manage().window().setPosition(x: number, y: number)`
      </td>

      <td>
        Reposiciona la ventana actual.

        Valor de retorno: promesa
      </td>
    </tr>

    <tr id="options-manage-window-setSize">
      <td>
        `$browser.manage().window().setSize(width: number, height: number)`
      </td>

      <td>
        Cambia el tamaño de la ventana actual.

        Valor de retorno: promesa
      </td>
    </tr>
  </tbody>
</table>

## Localizador: Buscar elemento de página [#locators]

Localizador es una colección de funciones de fábrica para crear `locator` instancia. El localizador encuentra elementos DOM, que se pueden pasar a funciones como [`$browser.findElement`](#browser-findElement). Llámelos a través de `$driver.By`.

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
    <tr id="driver-by-className">
      <td>
        `$driver.By.className(className: string)`
      </td>

      <td>
        Localiza un elemento que tiene un nombre de clase específico. El localizador devuelto equivale a buscar elementos con el selector CSS `.class`.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="driver-by-css">
      <td>
        `$driver.By.css(cssName: string)`
      </td>

      <td>
        Localiza un elemento usando un selector CSS.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="driver-by-id">
      <td>
        `$driver.By.id(id: string)`
      </td>

      <td>
        Localiza un elemento por su ID.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="driver-by-linkText">
      <td>
        `$driver.By.linkText(linkText: string)`
      </td>

      <td>
        Localiza elementos de enlace cuyo texto visible coincide con la cadena dada.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="driver-by-js">
      <td>
        `$driver.By.js(js: string)`
      </td>

      <td>
        Localiza un elemento evaluando una expresión de JavaScript.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="driver-by-name">
      <td>
        `$driver.By.name(name: string)`
      </td>

      <td>
        Localiza elementos cuyo atributo de nombre tiene el valor dado.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="driver-by-partialLinkText">
      <td>
        `$driver.By.partialLinkText(partialLinkText: string)`
      </td>

      <td>
        Localiza elementos de enlace cuyo [getText](#webElement-getText) visible contiene la subcadena dada.

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="driver-by-tagName">
      <td>
        `$driver.By.tagName(tagName: string)`
      </td>

      <td>
        Localiza elementos con un nombre de etiqueta determinado. El localizador devuelto equivale a utilizar la función DOM `getElementsByTagName` .

        Valor de retorno: localizador
      </td>
    </tr>

    <tr id="driver-by-xpath">
      <td>
        `$driver.By.xpath(xpath: string)`
      </td>

      <td>
        Localiza elementos que coinciden con un selector XPath.

        Valor de retorno: localizador
      </td>
    </tr>
  </tbody>
</table>

## WebElement: Interactuar con el elemento de página [#webelement]

Cuando una función como [`$browser.findElement`](#browser-findElement) o [`$browser.waitForAndFindElement`](#browser-waitForAndFindElement) devuelve una referencia de WebElement, estas funciones se pueden usar para interactuar con ese elemento. Por ejemplo, puede hacer clic en botones, enviar texto para formar entradas y obtener atributos de elementos para probar.

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

* Para crear una nueva secuencia de acciones, utilice [`$browser.actions()`](#browser-actions).
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
        `mouseDown(opt_elementOrButton: ?, opt_button: ?)`
      </td>

      <td>
        Presiona un botón del mouse. El botón del mouse no se soltará hasta que se llame a [`mouseUp`](#actionSequence-mouseUp) , independientemente de si esa llamada se realiza en esta secuencia u otra. El comportamiento del evento fuera de servicio (como llamar a `mouseDown()` o `click()` cuando el botón ya está presionado) no está definido.

        Valor de retorno: secuencia de acciones
      </td>
    </tr>

    <tr id="actionSequence-mouseUp">
      <td>
        `mouseUp(opt_elementOrButton: ?, opt_button: ?)`
      </td>

      <td>
        Libera un botón del mouse. El comportamiento no está definido para llamar a esta función sin una llamada previa a [`mouseDown()`](#actionSequence-mouseDown).

        Valor de retorno: secuencia de acciones
      </td>
    </tr>

    <tr id="actionSequence-mouseMove">
      <td>
        `mouseMove(location: ?, offset: ?)`
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

La función `$browser.navigate()` expone una serie de funciones que le permiten avanzar y retroceder en el historial de su browser , actualizar su página y navegar a páginas nuevas.

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
        Cargue una nueva página web en la ventana actual browser . `$browser.navigate().to()` es equivalente a `$browser.get()`.

        Valor de retorno: nulo
      </td>
    </tr>
  </tbody>
</table>

## Condiciones: pausar y esperar condiciones. [#until]

<Callout variant="tip">
  Puede obtener más información sobre las esperas en Selenium [aquí](https://www.selenium.dev/documentation/en/webdriver/waits/).
</Callout>

Usado con `$browser.wait`, `until` pausa la ejecución del script hasta que se cumpla la condición. Para obtener más información, consulte [la documentación Webdriver `until` de Selenium](http://www.seleniumhq.org/docs/04_webdriver_advanced.jsp).

Las siguientes son funciones disponibles para `$driver.until.Condition`:

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
        `elementIsDisabled(element: $driver.WebElement)`
      </td>

      <td>
        Crea una condición que esperará a que se deshabilite el elemento dado.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementIsEnabled">
      <td>
        `elementIsEnabled(element: $driver.WebElement)`
      </td>

      <td>
        Crea una condición que esperará a que se habilite el elemento dado.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementIsNotVisible">
      <td>
        `elementIsNotVisible(element: $driver.WebElement)`
      </td>

      <td>
        Crea una condición que esperará a que el elemento dado esté en el DOM, pero no sea visible para el usuario.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementIsVisible">
      <td>
        `elementIsVisible(element: $driver.WebElement)`
      </td>

      <td>
        Crea una condición que esperará a que el elemento dado se vuelva visible.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementIsSelected">
      <td>
        `elementIsSelected(element: $driver.WebElement)`
      </td>

      <td>
        Crea una condición que esperará a que se seleccione el elemento dado.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementLocated">
      <td>
        `elementLocated(element: $driver.Locator)`
      </td>

      <td>
        Crea una condición que se repetirá hasta que se encuentre un elemento con el localizador dado.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementsLocated">
      <td>
        `elementsLocated(element: $driver.Locator)`
      </td>

      <td>
        Crea una condición que se repetirá hasta que se encuentre al menos un elemento con el localizador dado.

        Valor de retorno: condición

        n
      </td>
    </tr>

    <tr id="conditions-elementTextContains">
      <td>
        `elementTextContains(element: $driver.WebElement, substr: string)`
      </td>

      <td>
        Crea una condición que esperará a que el texto visible del elemento dado contenga la subcadena dada.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-elementTextIs">
      <td>
        `elementTextIs(element: $driver.WebElement, text: string)`
      </td>

      <td>
        Distingue mayúsculas y minúsculas. Crea una condición que esperará a que el texto visible del elemento dado coincida exactamente con el texto dado.

        Valor de retorno: condición

        n
      </td>
    </tr>

    <tr id="conditions-elementTextMatches">
      <td>
        `elementTextMatches(element: $driver.WebElement, regex: string)`
      </td>

      <td>
        Crea una condición que esperará a que el texto visible del elemento dado coincida con una expresión regular.

        Valor de retorno: condición
      </td>
    </tr>

    <tr id="conditions-stalenessOf">
      <td>
        `stalenessOf(element: $driver.WebElement)`
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
