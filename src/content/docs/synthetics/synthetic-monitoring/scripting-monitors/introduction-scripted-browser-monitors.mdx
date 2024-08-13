---
title: Introduction to scripted browser monitors
tags:
  - Synthetics
  - Synthetic monitoring
  - Scripting monitors
translate:
  - jp
metaDescription: 'How to create scripted browsers, which send Selenium browsers to your website to test key workflows such as login or search.'
redirects:
  - /docs/synthetics/new-relic-synthetics/scripting-monitors/writing-synthetic-scripts
  - /docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browser-scripts
  - /docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
  - /docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers
  - /docs/synthetics/new-relic-synthetics/scripting-monitors/introduction-scripted-browser-monitors
  - /docs/synthetics/synthetic-monitoring/scripting-monitors
  - /docs/synthetics/synthetic-monitoring/using-monitors/intro-scripted-browser-monitors/
freshnessValidatedDate: never
---

Scripted browsers emulate a custom user experience by scripting browsers that navigate your website, take specific actions, and ensure specific elements are present. [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) drives scripted monitors. Each time your script runs, New Relic creates a fully virtualized Selenium-driven Chrome or Firefox browser that navigates your website and follows each script step. Synthetic monitoring includes an IDE-style script editor that suggests functions, locators, and other elements to simplify scripting. See [Scripted browser reference](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100/) for a list of all available functions.

## How to create a scripted browser monitor [#create-scripted-browser]

1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Synthetic monitoring**</DNT>.

2. Click <DNT>**Create monitor**</DNT>.

3. Select the <DNT>**User flow / functionality**</DNT> tile to test the availability and functionality of your site in different locations.

   <img
     title="Create monitor - User flow / functionality"
     alt="Create monitor - User flow / functionality"
     src="/images/synthetic_screenshot-full_user-flow-functionality.webp"
   />

4. Configure the monitor. Fill in the fields you want. Add a name for your monitor. Select the browsers and emulated devices you would like to test.

   <img
     title="Create monitor - configure monitor"
     alt="Create monitor - configure monitor"
     src="/images/synthetic_screenshot-crop_configure-monitor.webp"
   />

5. Click <DNT>**Select locations**</DNT> to select the location you want to test the monitor.

   <img
     title="Create monitor - select locations"
     alt="Create monitor - select locations"
     src="/images/synthetic_screenshot-crop_select-locations.webp"
   />

6. Click <DNT>**Write script**</DNT> to add your script describing the actions you want the monitor to take. The monitor pre-fills the editor with an example script you can work from, or you can remove this and start from scratch.

7. Click <DNT>**Validate**</DNT> if you want to test your script. This may take a few minutes depending on the script.

8. Click <DNT>**Save monitor**</DNT>.

## Visit a URL [#visiting-a-url]

All scripts begin by specifying which URL the monitor should navigate to. To specify a URL, call `$webDriver.get("url")`:

```js
await $webDriver.get("https://mywebsite.com");
```

## Sequence actions [#sequence]

Because WebDriverJS is asynchronous, scripting actions can sometimes execute out of order. To force script actions to execute in order, use the `await` keyword:

```js
await $webDriver.get("https://my-website.com");
await $webDriver.findElement($selenium.By.linkText("Configuration Panel"));
```

You can also wrap each action in a `then(function(){})` call. But, in that case, the wrapped function must `return` each asynchronous function to ensure they complete before the script moves on:

```js
$webDriver.get("https://my-website.com").then(function(){
    return $webDriver.findElement($selenium.By.linkText("Configuration Panel"));
});
```

To connect multiple actions in sequence, wrap each action in a `then(function(){})` call, and chain the calls together:

```js
$webDriver.get("https://my-website.com").then(function(){
    return $webDriver.findElement($selenium.By.linkText("Configuration Panel"));
}).then(function(){
    return $webDriver.findElement($selenium.By.partialLinkText("Configuration Pa"));
});
```

## Locate elements [#locating-elements]

Once you've specified a URL to monitor, you'll usually want to locate a particular element on the page. Locating an element verifies its presence on the page, and also allows you to [interact with page elements](#interacting-elements).

You can locate elements by their `class`, `id`, `link text`, `name` or even XPath. To find these attributes, use your browser's developer tools or view your website's source code. For a list of all locator functions, see [Locators: Find page elements](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100/#locators).

<CollapserGroup>
  <Collapser
    id="locate-by-class"
    title="Locate by CSS class"
  >
    Locate an element by its HTML `class`, for example `class="button"`. A class is usually specified for CSS styling. When locating an element by class, the monitor will select the first element on the page that has that class:

    ```js
    await $webDriver.findElement($selenium.By.className("button"));
    ```
  </Collapser>

  <Collapser
    id="locate-by-id"
    title="Locate by HTML ID"
  >
    Locate an element by its exact HTML `id`, for example `id="edit-submit"`. This is a straightforward way to locate page elements, but be careful to specify an `id` that isn't likely to change.

    ```js
    await $webDriver.findElement($selenium.By.id("edit-submit"));
    ```

    For an example of locating an element by its `id`, see [Wait for a specific element](#wait-page-element) section.
  </Collapser>

  <Collapser
    id="locate-by-link-text"
    title="Locate by link text"
  >
    Locate an element by its displayed link text, for example `<a href="http://example.com>your link text here</a>`. You can locate by the exact link text `$selenium.By.linkText` or by partial match `$selenium.By.partialLinkText`:

    ```js
    await $webDriver.findElement($selenium.By.linkText("Configuration Panel"));
    ```

    ```js
    await $webDriver.findElement($selenium.By.partialLinkText("Configuration Pa"));
    ```
  </Collapser>

  <Collapser
    id="locate-by-name"
    title="Locate by name"
  >
    Locate an element by its exact HTML `name`, for example  `name="search-query-field"`. This is most commonly used with input fields such as a search box:

    ```js
    await $webDriver.findElement($selenium.By.name("search-query-field"));
    ```

    For an example of locating an element by its `name`, see [Log in to a website](/docs/synthetics/synthetic-monitoring/getting-started/get-started-synthetic-monitoring/#login).
  </Collapser>

  <Collapser
    id="locate-by-xpath"
    title="Locate by XPath"
  >
    For more complex page structures, you can use XPath to locate the target element:

    ```js
    await $webDriver.findElement($selenium.By.xpath("//input[@placeholder = 'search-query-field']"));
    ```

    XPath selectors can break when your website's structure changes. For tips on building good XPath selectors, see [Optimizing XPath selectors](https://blog.newrelic.com/engineering/optimize-xpath-selectors/).

    <Callout variant="tip">
      To quickly find the XPath for a particular element, use your browser's developer tools. For example, from Chrome:

      1. Navigate to the target website from Chrome.
      2. Right-click the target element, then select <DNT>**Inspect element**</DNT>.
      3. From the Developer Tools panel that opens automatically, look for the highlighted target element.
      4. Right-click the target element, then select <DNT>**Copy XPath**</DNT>.
    </Callout>
  </Collapser>
</CollapserGroup>

## Interact with elements [#interacting-elements]

Because a scripted monitor drives a real, Selenium-powered Chrome or Firefox browser, scripted monitors can interact with page elements in the same way a user would. For example, the monitor can click a link, enter text in a search box, etc. For a list of available actions, see [ActionSequence: Link multiple actions](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100/#actionsequence).

First, [locate the page element](#locating-elements), then call an interaction function:

<CollapserGroup>
  <Collapser
    id="clicking-elements"
    title="Click page elements"
  >
    To click on a link or other page element, locate the element and call the `click()` function:

    ```js
    await $webDriver.findElement($selenium.By.linkText("Configuration Panel")).click();
    ```

    ```js
    await $webDriver.findElement($selenium.By.className("config-panel-02")).click();
    ```

    For an example of clicking a located element, see [Locate by link text](#locate-by-link-text).

    <Callout variant="tip">
      You can control the mouse in other ways with the `doubleClick()`, `dragAndDrop()`, `mouseDown`, `mouseUp`, and `mouseMove` functions.
    </Callout>
  </Collapser>

  <Collapser
    id="entering-text"
    title="Enter text"
  >
    To enter text in a field, locate the field and call the `sendKeys()` function:

    ```js
    await $webDriver.findElement($selenium.By.name("search-query-field")).sendKeys("EXAMPLE USER NAME");
    ```

    ```js
    await $webDriver.findElement($selenium.By.id("search-q-box")).sendKeys("EXAMPLE USER NAME");
    ```

    Some fields may have default text in them. [Clear](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100/#webelement) these fields before sending text to them:

    ```js
    await $webDriver.findElement($selenium.By.name("search-query-field")).clear();
    ```

    ```js
    await $webDriver.findElement($selenium.By.id("search-q-box")).clear();
    ```

    For an example of entering text in a field, see [Locate by link text](#locate-by-link-text).

    <Callout variant="tip">
      You can add modifier keys, such as `ALT` and `SHIFT` with the `keyDown()` and `keyUp()` functions.
    </Callout>
  </Collapser>
</CollapserGroup>

## Waiting and timeouts [#waiting-elements]

Large page elements, such as images or complex dynamic content, can take a long time to load. Your script may fail if the monitor tries to interact with or find an element that has not yet loaded.

To avoid these issues, set wait conditions that will pause the script until the specified page element is present, or [sequence actions manually](#sequence). For a list of conditions, see [Conditions: Pause and wait for conditions](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100/#until).

<Callout variant="important">
  After a maximum run time of three minutes, New Relic manually stops the script.
</Callout>

<CollapserGroup>
  <Collapser
    id="wait-page-title"
    title="Wait for page title"
  >
    Instruct the monitor to wait for the page title to match a certain value. This ensures that the browser has at least received some data from the target page. To wait for page title, specify an expected title and a timeout value in milliseconds:

    ```js
    //Call the wait function
    await $webDriver.wait(async function() {
      //Tell the monitor to get the page title.
      var title = await $webDriver.getTitle();
      //Specify the expected page title.
      return title === "Your Page Title Here";
    //If the condition is not satisfied within a timeout of 1000 milliseconds (1 second), proceed anyway.
    }, 1000);
    ```

    For an example of waiting for page title, see [Wait for page title](#wait-page-title).
  </Collapser>

  <Collapser
    id="wait-page-element"
    title="Wait for a specific element"
  >
    Instruct the monitor to wait for a page element to be present. This is useful when an element your script depends on takes a long time to load, or simply to ensure that a page element is present before your script clicks on it.

    Use any of the [locate functions](#locating-elements) with the wait function below. Use your desired function instead of the `$selenium.By.linkText` function used below:

    ```js
    // Tell the monitor to wait up to 7,500 milliseconds (7.5 seconds) for a link whose text is `Your Link Text Here`.
    var linkText = "Your Link Text Here"

    var element = await $webDriver.wait(
      $selenium.until.elementLocated(
        $selenium.By.linkText(linkText),
      ),
      7500,
      'Timed-out waiting for element to be located using link text: "' +linkText+ '"',
    );
    // Wait for the element to be visible
    await $webDriver.wait(
      $selenium.until.elementIsVisible(element),
      7500,
      "Timed-out waiting for element to be visible using ${element}",
    );
    ```

    <Callout variant="important">
      `elementIsVisible()` will fail to find an element if it's entirely behind another element or if it has a size of 0. It will still find elements with 0 opacity.
    </Callout>
  </Collapser>
</CollapserGroup>

## Manually log results to the script log [#script-log-manual]

You can also manually log monitor results to the [script log](/docs/synthetics/synthetic-monitoring/using-monitors/view-simple-scripted-monitor-results/#viewing-logs). Use logging to troubleshoot a script: to discover which step of your script is failing, include a log function along with each key step in your script.

<Callout variant="important">
  The maximum log length is 50,000 bytes. Script logs larger than 50,000 bytes are truncated.
</Callout>

<CollapserGroup>
  <Collapser
    id="log-static"
    title="Log static text"
  >
    To log a line of static text, call `console.log()`:

    ```js
    //Send `Hello world.` to the console log.
    console.log('Hello world.');
    ```

    This results in [the output](/docs/synthetics/synthetic-monitoring/using-monitors/view-simple-scripted-monitor-results/#viewing-logs):

    ```js
    // ----------------------------------- Console log
    Hello world.
    ```
  </Collapser>

  <Collapser
    id="pass-a-variable"
    title="Pass a variable to the log function"
  >
    In addition to [logging static text](#log-static), you can also pass variables to `console.log()`:

    ```js
    //Declare the variable `WEBSITE_URL`
    var assert = require('assert'),
      WEBSITE_URL = 'https://my-website.com/';

    console.log('Hello world.');
    //Load the website specified in `WEBSITE_URL`
    await $webDriver.get(WEBSITE_URL);
    //Log our success to the console
    console.log('Success for', WEBSITE_URL);
    ```

    [Look for these results](/docs/synthetics/synthetic-monitoring/using-monitors/view-simple-scripted-monitor-results/#viewing-logs):

    ```js
    // ----------------------------------- Console log
    Hello world.
    Success for https://my-website.com/
    ```
  </Collapser>
</CollapserGroup>

## Unblock analytics services [#unblock-service]

Synthetics blocks [popular analytics services'](https://nr-synthetics-assets.s3.amazonaws.com/blacklists/blacklist.hosts) scripts from running by default. You can allow scripts to run for a specified service(s). This allows the service's scripts to run and collect data like it would for a real user.

```js
//Allow Google Analytics scripts to run
await $urlFilter.addToAllowList(['google-analytics.com']);

//Visit https://my-website.com
await $webDriver.get('https://my-website.com');
```

## Customize the user agent [#customize-user-agent]

You can customize the scripted browser's user agent to ensure any browser-specific fixes in your app are working properly, or to bypass a security mechanism in order to filter an internal site.

```js
//Simulate Internet Explorer 10.6
$headers.add('User-Agent', 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0');

//Visit http://httpbin.org/user-agent
await $webDriver.get('http://httpbin.org/user-agent');
```

<Callout variant="important">
  This only spoofs the user-agent HTTP header for the request to the server. It doesn't change the value of `navigator.userAgent`.
</Callout>

## Import optional modules [#importing]

You can also import many popular Node.js modules to enhance your test suite, automate the insertion of test data, and simplify complex functions. For more information, see [Importing Node.js modules](/docs/synthetics/synthetic-monitoring/scripting-monitors/import-nodejs-modules/).

<Callout variant="important">
  <DNT>
    **For Non-Legacy Runtimes**
  </DNT>

  The script environment contains write protected directories. If your script requires storing files, prepend any of the following paths to the filename:

  * `runtime/input-output/input/`
  * `runtime/input-output/output/`
</Callout>
