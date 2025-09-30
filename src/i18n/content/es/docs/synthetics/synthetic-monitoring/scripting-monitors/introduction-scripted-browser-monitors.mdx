---
title: Introducción al script de monitorización del browser
tags:
  - Synthetics
  - Synthetic monitoring
  - Scripting monitors
metaDescription: 'How to create scripted browsers, which send Selenium browsers to your website to test key workflows such as login or search.'
freshnessValidatedDate: never
translationType: machine
---

El browser con secuencias de comandos emula una experiencia personalizada del usuario mediante un browser con secuencias de comandos que navega por su sitio web, realiza acciones específicas y garantiza que haya elementos específicos presentes. Para crear un browser con secuencias de comandos, vaya a <DNT>**[one.newrelic.com > Synthetic monitoring > Create a monitor](https://one.newrelic.com/synthetics-nerdlets/monitor-create)**</DNT> y luego seleccione el mosaico <DNT>**User flow / functionality**</DNT>.

Consulte [Referencia del navegador con secuencias de comandos](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100/) para obtener una lista de todas las funciones disponibles.

Scripted monitors are driven by [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/). Each time your script runs, New Relic creates a fully virtualized Selenium-driven Google Chrome browser that navigates your website and follows each script step. Synthetic monitoring includes an IDE-style script editor that suggests functions, locators, and other elements to simplify scripting.

Para ver cómo usar Selenium IDE para registrar su flujo de trabajo y exportarlos en el formato requerido por New Relic, mire este breve video de YouTube (3:49 minutos).

<Video
  id="Y0BCF-MSX44"
  type="youtube"
/>

## Visita una URL [#visiting-a-url]

Todos los scripts comienzan especificando a qué URL debe navegar el monitor. Para especificar una URL, llame a `$browser.get("url")`:

```
$browser.get("https://mywebsite.com");
```

## Secuencia de acciones [#sequence]

Debido a que WebDriverJS es asincrónico, las acciones de script a veces pueden ejecutarse fuera de orden. Para forzar que las acciones del script se ejecuten en orden, incluya cada acción en una llamada `then(function(){})` :

```
$browser.get("https://my-website.com").then(function(){
    return $browser.findElement($driver.By.linkText("Configuration Panel"));
});
```

Para conectar varias acciones en secuencia, envuelva cada acción en una llamada `then(function(){})` y encadene las llamadas:

```
$browser.get("https://my-website.com").then(function(){
    return $browser.findElement($driver.By.linkText("Configuration Panel"));
}).then(function(){
    return $browser.findElement($driver.By.partialLinkText("Configuration Pa"));
});
```

## Localizar elementos [#locating-elements]

Una vez que haya especificado una URL para monitor, generalmente querrá ubicar un elemento particular en la página. Ubicar un elemento verifica su presencia en la página y también le permite [interactuar con el elemento de página](#interacting-elements).

Puede ubicar elementos por su `class`, `id`, `link text`, `name` o incluso XPath. Para encontrar estos atributos, utilice las herramientas de desarrollo de su browser o vea el código fuente de su sitio web. Para obtener una lista de todas las funciones del localizador, consulte [Localizadores: Buscar elemento de página](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-browser-reference-monitor-versions-050/#locators).

<CollapserGroup>
  <Collapser
    id="locate-by-class"
    title="Localizar por clase CSS"
  >
    Localice un elemento por su HTML `class` (por ejemplo, `class="button"`). Generalmente se especifica una clase para el estilo CSS. Al ubicar un elemento por clase, el monitor seleccionará el primer elemento de la página que tenga esa clase:

    ```
    $browser.findElement($driver.By.className("button"));
    ```
  </Collapser>

  <Collapser
    id="locate-by-id"
    title="Localizar por ID HTML"
  >
    Localice un elemento por su <DNT>**exact**</DNT> HTML `id` (por ejemplo, `id="edit-submit"`). Esta es una forma sencilla de ubicar el elemento de página, pero tenga cuidado de especificar un `id` que probablemente no cambie.

    ```
    $browser.findElement($driver.By.id("edit-submit"));
    ```

    Para ver un ejemplo de cómo ubicar un elemento por su `id`, consulte [Esperar un elemento de página](/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors/#wait-page-element).
  </Collapser>

  <Collapser
    id="locate-by-link-text"
    title="Localizar por texto de vínculo"
  >
    Localizar un elemento por el texto de vínculo mostrado; por ejemplo, `<a href="http://example.com>your link text here</a>`. Puedes localizar por el <DNT>**exact**</DNT> texto de vínculo (`$driver.By.linkText`) o por coincidencia parcial (`$driver.By.partialLinkText`):

    ```
    $browser.findElement($driver.By.linkText("Configuration Panel"));
    ```

    ```
    $browser.findElement($driver.By.partialLinkText("Configuration Pa"));
    ```

    Para ver un ejemplo de cómo ubicar un enlace por su texto de enlace, consulte [Navegar a un enlace](#locate-by-link-text).
  </Collapser>

  <Collapser
    id="locate-by-name"
    title="Localizar por nombre"
  >
    Localice un elemento por su <DNT>**exact**</DNT> HTML `name` (por ejemplo, `name="search-query-field"`). Esto se usa más comúnmente con campos de entrada como un cuadro de búsqueda:

    ```
    $browser.findElement($driver.By.name("search-query-field"));
    ```

    Para ver un ejemplo de cómo ubicar un elemento por su `name`, consulte [log sesión en un sitio web](/docs/synthetics/synthetic-monitoring/getting-started/get-started-synthetic-monitoring/).
  </Collapser>

  <Collapser
    id="locate-by-xpath"
    title="Localizar por XPath"
  >
    Para estructuras de página más complejas, puede utilizar XPath para localizar el elemento de destino:

    ```
    $browser.findElement($driver.By.xpath("//input[@placeholder = 'search-query-field']"));
    ```

    Los selectores XPath pueden fallar cuando cambia la estructura de su sitio web. Para obtener sugerencias sobre cómo crear buenos selectores XPath, consulte [Optimización de selectores XPath](https://blog.newrelic.com/engineering/optimize-xpath-selectors/). Para ver un ejemplo de cómo ubicar un elemento por su xpath, consulte [Buscar en un sitio web](/docs/synthetics/synthetic-monitoring/getting-started/get-started-synthetic-monitoring/).

    <Callout variant="tip">
      Para encontrar rápidamente el XPath de un elemento en particular, utilice las herramientas de desarrollo de su browser. Por ejemplo, en Chrome:

      1. En Chrome, navegue hasta el sitio web de destino.

      2. Haga clic derecho en el elemento de destino y luego seleccione

         <DNT>
           **Inspect element**
         </DNT>

         .

      3. Desde el panel Herramientas de desarrolladores que se abre automáticamente, busque el elemento de destino resaltado.

      4. Haga clic derecho en el elemento de destino y luego seleccione

         <DNT>
           **Copy XPath**
         </DNT>

         .
    </Callout>
  </Collapser>
</CollapserGroup>

## Interactuar con elementos [#interacting-elements]

Debido a que un monitor con secuencias de comandos controla un browser Google Chrome real con tecnología Selenium, los monitores con secuencias de comandos pueden interactuar con el elemento de página de la misma manera que lo haría un usuario. Por ejemplo, el monitor puede hacer clic en un enlace, ingresar texto en un cuadro de búsqueda, etc. Para obtener una lista de acciones disponibles, consulte [ActionSequence: vincular varias acciones](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-browser-reference-monitor-versions-050/#actionsequence).

Primero, [ubique el elemento de página](#locating-elements) y luego llame a una función de interacción:

<CollapserGroup>
  <Collapser
    id="clicking-elements"
    title="Haga clic en el elemento de la página"
  >
    Para hacer clic en un enlace u otro elemento de página, ubique el elemento y llame a la función `click()` :

    ```
    $browser.findElement($driver.By.linkText("Configuration Panel")).click();
    ```

    ```
    $browser.findElement($driver.By.className("config-panel-02")).click();
    ```

    Para ver un ejemplo de cómo hacer clic en un elemento ubicado, consulte [Navegar a un enlace](#locate-by-link-text).

    <Callout variant="tip">
      Puede controlar el mouse de otras formas con las funciones `doubleClick()`, `dragAndDrop()`, `mouseDown`, `mouseUp` y `mouseMove` .
    </Callout>
  </Collapser>

  <Collapser
    id="entering-text"
    title="Ingrese texto"
  >
    Para ingresar texto en un campo, ubique el campo y llame a la función `sendKeys()` :

    ```
    $browser.findElement($driver.By.name("search-query-field")).sendKeys("EXAMPLE USER NAME");
    ```

    ```
    $browser.findElement($driver.By.id("search-q-box")).sendKeys("EXAMPLE USER NAME");
    ```

    Algunos campos pueden tener texto predeterminado. [Borre](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-browser-reference-monitor-versions-050/#webelement) estos campos antes de enviarles texto:

    ```
    $browser.findElement($driver.By.name("search-query-field")).clear();
    ```

    ```
    $browser.findElement($driver.By.id("search-q-box")).clear();
    ```

    Para ver un ejemplo de cómo ingresar texto en un campo, consulte [Buscar en un sitio web](/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors/#locate-by-link-text).

    <Callout variant="tip">
      Puede agregar teclas modificadoras (como `ALT` y `SHIFT`) con las funciones `keyDown()` y `keyUp()` .
    </Callout>
  </Collapser>
</CollapserGroup>

## Esperas y tiempos de espera [#waiting-elements]

Los elementos de página grandes, como imágenes o contenido dinámico complejo, pueden tardar mucho en cargarse. Esto puede hacer que su script falle cuando el monitor intenta interactuar o ubicar un elemento que aún no se ha cargado.

Para evitar estos problemas, establezca condiciones de espera que pausarán el script hasta que el elemento de página especificado esté presente, o [secuenciar acciones manualmente](#sequence). Para obtener una lista de condiciones, consulte [Condiciones: pausar y esperar condiciones](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-browser-reference-monitor-versions-050/#until).

<Callout variant="important">
  Después de un tiempo de ejecución máximo de tres minutos, New Relic detiene manualmente el script.
</Callout>

<CollapserGroup>
  <Collapser
    id="wait-page-title"
    title="Espere el título de la página."
  >
    Indique al monitor que espere a que el título de la página coincida con un valor determinado. Esto asegura que el browser haya recibido al menos algunos datos de la página de destino. Para esperar el título de la página, especifique un título esperado y un valor de tiempo de espera en milisegundos:

    ```
    //Call the wait function
    $browser.wait(function() {
    //Tell the monitor to get the page title, then run a function on that title.
      return $browser.getTitle().then(function(title) {
    //Specify the expected page title.
        return title === "Your Page Title Here";
        });
    //If the condition is not satisfied within a timeout of 1000 milliseconds (1 second), proceed anyway.
    }, 1000);
    ```

    Para ver un ejemplo de cómo esperar el título de una página, consulte [Esperar a que se cargue una página](/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors/#wait-page-title).
  </Collapser>

  <Collapser
    id="wait-page-element"
    title="Espere un elemento específico"
  >
    Indique al monitor que espere hasta que esté presente un elemento de página. Esto es útil cuando un elemento del que depende su script tarda mucho en cargarse, o simplemente para garantizar que un elemento de página esté presente antes de que su script haga clic en él.

    Utilice cualquiera de las [funciones de localización](#locating-elements) con la función de espera a continuación. Utilice la función que desee en lugar de la función `$driver.By.linkText` que se utiliza a continuación:

    ```
    //Tell the monitor to wait up to 7,500 milliseconds (7.5 seconds) for a link whose text is `Your Link Text Here`.
    $browser.waitForAndFindElement($driver.By.linkText("Your Link Text Here"), 7500);
    ```

    Para ver un ejemplo de cómo esperar a que se cargue un elemento de página específico, consulte [Esperar a que se cargue un elemento de página](/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors/#wait-page-element).

    <Callout variant="important">
      `waitForAndFindElement()` no podrá encontrar un elemento si está completamente detrás de otro elemento o si tiene un tamaño de 0. Aún así encontrará elementos con opacidad 0.
    </Callout>
  </Collapser>
</CollapserGroup>

## Log resultados del script [#logging]

También puede log manualmente los resultados del monitor en el [logdel script](/docs/synthetics/synthetic-monitoring/using-monitors/view-simple-scripted-monitor-results/#viewing-logs). Utilice el registro para solucionar problemas de una script: para descubrir qué paso de su script está fallando, incluya una función log junto con cada paso clave de su script.

<Callout variant="important">
  La longitud máxima log es 50.000 bytes. Los registros de script de más de 50.000 bytes se truncan.
</Callout>

<CollapserGroup>
  <Collapser
    id="log-static"
    title="Log texto estático"
  >
    Para log una línea de texto estático, llame a `console.log()`:

    ```
    //Send `Hello world.` to the console log.
    console.log('Hello world.');
    ```

    Esto da como resultado [la salida](/docs/synthetics/synthetic-monitoring/using-monitors/view-simple-scripted-monitor-results/#viewing-logs):

    ```
    // ----------------------------------- Console log
    Hello world.
    ```
  </Collapser>

  <Collapser
    id="pass-a-variable"
    title="Pasar una variable a la función log ."
  >
    Además de [registrar texto estático](#log-static), también puedes pasar variables a `console.log()`:

    ```
    //Declare the variable `WEBSITE_URL`
    var assert = require('assert'),
      WEBSITE_URL = 'https://my-website.com/';

    console.log('Hello world.');
    //Load the website specified in `WEBSITE_URL`
    $browser.get(WEBSITE_URL);
    //Log our success to the console
    console.log('Success for', WEBSITE_URL);
    ```

    [Busque estos resultados](/docs/synthetics/synthetic-monitoring/using-monitors/view-simple-scripted-monitor-results/#viewing-logs):

    ```
    // ----------------------------------- Console log
    Hello world.
    Success for https://my-website.com/
    ```
  </Collapser>
</CollapserGroup>

## Desbloquear servicios de análisis [#unblock-service]

Sintético bloquea la ejecución de scripts [de servicios de análisis populares](https://nr-synthetics-assets.s3.amazonaws.com/blacklists/blacklist.hosts) de forma predeterminada. Puede permitir que se ejecute un script para un servicio específico. Esto permite que el script del servicio se ejecute y recopile datos como lo haría para un usuario real.

```
//Allow Google Analytics scripts to run
$browser.addHostnameToWhitelist(hostnameArr: ['google-analytics.com']);

//Visit https://my-website.com
$browser.get('https://my-website.com');
```

## Personaliza el agente de usuario [#customize-user-agent]

Puede personalizar el agente de usuario del browser con script para garantizar que las correcciones específicas browseren su aplicación funcionen correctamente o para evitar un mecanismo de seguridad para filtrar un sitio interno.

```
//Simulate Internet Explorer 10.6
$browser.addHeader('User-Agent', 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0');

//Visit http://httpbin.org/user-agent
$browser.get('http://httpbin.org/user-agent');
```

<Callout variant="important">
  Esto solo falsifica el encabezado HTTP del agente de usuario para la solicitud al servidor. No cambia el valor de `navigator.userAgent`.
</Callout>

## Importar módulos opcionales [#importing]

También puede importar muchos módulos populares de Node.js para mejorar su conjunto de pruebas, automatizar la inserción de datos de prueba y simplificar funciones complejas. Para obtener más información, consulte [Importación de módulos de Node.js.](/docs/synthetics/new-relic-synthetics/scripting-monitors/importing-nodejs-modules)
