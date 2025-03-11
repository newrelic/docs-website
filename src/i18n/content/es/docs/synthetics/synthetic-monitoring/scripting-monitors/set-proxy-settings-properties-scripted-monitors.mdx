---
title: Establecer configuraciones y propiedades de proxy para el monitor con script
tags:
  - Synthetics
  - Scripting monitors
metaDescription: How to control network proxy settings for synthetic scripted monitors.
freshnessValidatedDate: never
translationType: machine
---

Continúe leyendo para obtener más información sobre la configuración y las propiedades del proxy del monitoreo sintético.

## API de configuración de proxy para monitor con script [#proxy-api]

<Callout variant="important">
  Puede establecer la configuración del servidor proxy para los monitores con secuencias de comandos de Sintético para las versiones de monitor 0.4.0 o superiores.
</Callout>

El objeto global `$network` le permite controlar la configuración de red utilizada por su monitor con script Sintético. Lo siguiente se aplica tanto a las [pruebas de API como](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-api-tests) [de navegador con secuencias de](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers) comandos , a menos que se indique lo contrario.

<CollapserGroup>
  <Collapser
    id="setproxy-perurl"
    title={<>$network.setProxy(string or object PROXY URL)</>}
  >
    Establece un servidor proxy que se utilizará para todas las solicitudes por URL (HTTP, HTTPS y FTP).

    Notas adicionales:

    * El puerto es opcional. Si no se aporta, se derivará del régimen. Por ejemplo, para HTTP el puerto sería 80.

    * Se supone que el nombre de usuario y la contraseña son el resultado de una llamada a `encodeURIComponent()`. Los caracteres especiales como `@` y `:` en el nombre de usuario y/o la contraseña deben estar en formato de escape.

      <CollapserGroup>
        <Collapser
          id="setproxy-perurl-returns"
          title="Devoluciones"
        >
          Este método devuelve un `Promise` que se resolverá una vez que se haya aplicado la configuración.
        </Collapser>

        <Collapser
          id="setproxy-parameters"
          title="Parámetros"
        >
          <table>
            <thead>
              <tr>
                <th style={{ width: "150px" }}>
                  Parámetro
                </th>

                <th style={{ width: "150px" }}>
                  Tipo de datos
                </th>

                <th>
                  Descripción
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `proxyURL | proxyUrlParsed`
                </td>

                <td>
                  Cadena u objeto
                </td>

                <td>
                  La URL para conectarse al servidor proxy. Una cadena que contiene un `proxyURL` (por ejemplo, `http://proxy_host:8888`) o un objeto simple en el mismo formato definido por [el método `url.parse(urlString)` de Node](https://nodejs.org/api/url.html#url_url_strings_and_url_objects).
                </td>
              </tr>
            </tbody>
          </table>
        </Collapser>

        <Collapser
          id="setproxy-example"
          title="Ejemplos"
        >
          Un ejemplo de configuración de un servidor proxy con protocolo HTTP en el puerto 1234 sin autenticación:

          ```
          $network.setProxy('http://host.com:1234')
          ```

          Un ejemplo de configuración de un servidor proxy con protocolo HTTP con credenciales de autenticación.

          ```
          $network.setProxy('http://proxyUsername:proxyPassword@proxyHost:1234')
          ```
        </Collapser>
      </CollapserGroup>
  </Collapser>

  <Collapser
    id="setproxy-http"
    title={<>$network.setProxyForHttp(string or object PROXY URL)</>}
  >
    <Callout variant="tip">
      Esta llamada es exactamente igual que la [llamada `setProxy` por URL](#setproxy-perurl), excepto que se aplica al tráfico HTTP.
    </Callout>

    Establece un servidor proxy que se utilizará para todas las solicitudes HTTP.

    Notas adicionales:

    * El puerto es opcional. Si no se aporta, se derivará del régimen. Por ejemplo, para HTTP el puerto sería 80.

    * Se supone que el nombre de usuario y la contraseña son el resultado de una llamada a `encodeURIComponent()`. Los caracteres especiales como `@` y `:` en el nombre de usuario y/o la contraseña deben estar en formato de escape.

      <CollapserGroup>
        <Collapser
          id="setproxy-perurl-returns"
          title="Devoluciones"
        >
          Este método devuelve un `Promise` que se resolverá una vez que se haya aplicado la configuración.
        </Collapser>

        <Collapser
          id="setproxy-parameters"
          title="Parámetros"
        >
          <table>
            <thead>
              <tr>
                <th style={{ width: "150px" }}>
                  Parámetro
                </th>

                <th style={{ width: "150px" }}>
                  Tipo de datos
                </th>

                <th>
                  Descripción
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `proxyURL | proxyUrlParsed`
                </td>

                <td>
                  Cadena u objeto
                </td>

                <td>
                  La URL para conectarse al servidor proxy. Una cadena que contiene un `proxyURL` (por ejemplo, `http://proxy_host:8888`) o un objeto simple en el mismo formato definido por [el método `url.parse(urlString)` de Node](https://nodejs.org/api/url.html#url_url_strings_and_url_objects).
                </td>
              </tr>
            </tbody>
          </table>
        </Collapser>

        <Collapser
          id="setproxy-example"
          title="Ejemplos"
        >
          Un ejemplo de configuración de un servidor proxy con protocolo HTTP en el puerto 1234 sin autenticación:

          ```
          $network.setProxyForHttp('http://host.com:1234')
          ```

          Un ejemplo de configuración de un servidor proxy con protocolo HTTP con credenciales de autenticación.

          ```
          $network.setProxyForHttp('http://proxyUsername:proxyPassword@proxyHost:1234')
          ```
        </Collapser>
      </CollapserGroup>
  </Collapser>

  <Collapser
    id="setproxy-https"
    title={<>$network.setProxyForHttps(string or object PROXY URL)</>}
  >
    <Callout variant="tip">
      Esta llamada es exactamente igual que la [llamada `setProxy` por URL](#setproxy-perurl), excepto que se aplica al tráfico HTTPS.
    </Callout>

    Establece un servidor proxy que se utilizará para todas las solicitudes HTTPS.

    Notas adicionales:

    * El puerto es opcional. Si no se aporta, se derivará del régimen. Por ejemplo, para HTTP el puerto predeterminado sería 443.

    * Se supone que el nombre de usuario y la contraseña son el resultado de una llamada a `encodeURIComponent()`. Los caracteres especiales como `@` y `:` en el nombre de usuario y/o la contraseña deben estar en formato de escape.

      <CollapserGroup>
        <Collapser
          id="setproxy-perurl-returns"
          title="Devoluciones"
        >
          Este método devuelve un `Promise` que se resolverá una vez que se haya aplicado la configuración.
        </Collapser>

        <Collapser
          id="setproxy-parameters"
          title="Parámetros"
        >
          <table>
            <thead>
              <tr>
                <th style={{ width: "150px" }}>
                  Parámetro
                </th>

                <th style={{ width: "150px" }}>
                  Tipo de datos
                </th>

                <th>
                  Descripción
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `proxyURL | proxyUrlParsed`
                </td>

                <td>
                  Cadena u objeto
                </td>

                <td>
                  La URL para conectarse al servidor proxy. Una cadena que contiene un `proxyURL` (por ejemplo, `http://proxy_host:8888`) o un objeto simple en el mismo formato definido por [el método `url.parse(urlString)` de Node](https://nodejs.org/api/url.html#url_url_strings_and_url_objects).
                </td>
              </tr>
            </tbody>
          </table>
        </Collapser>

        <Collapser
          id="setproxy-example"
          title="Ejemplos"
        >
          Un ejemplo de configuración de un servidor proxy con protocolo HTTPS en el puerto 1234 sin autenticación:

          ```
          $network.setProxyForHttps('https://host.com:1234')
          ```

          Un ejemplo de configuración de un servidor proxy con protocolo HTTPS con credenciales de autenticación.

          ```
          $network.setProxyForHttps('https://proxyUsername:proxyPassword@proxyHost:1234')
          ```
        </Collapser>
      </CollapserGroup>
  </Collapser>

  <Collapser
    id="setproxy-pac"
    title={<>$network.setProxyPAC(string PAC SCRIPT URL, object AUTH OBJECT)</>}
  >
    Establece un servidor proxy a través de un script de configuración automática de proxy (PAC) y devuelve una promesa. Esta función sólo está disponible para [monitor de browser con script](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers).

    <CollapserGroup>
      <Collapser
        id="setproxy-pac-returns"
        title="Devoluciones"
      >
        Este método devuelve un `Promise` que se resolverá una vez que se haya aplicado la configuración.
      </Collapser>

      <Collapser
        id="setproxypac-parameters"
        title="Parámetros"
      >
        <table>
          <thead>
            <tr>
              <th style={{ width: "150px" }}>
                Parámetro
              </th>

              <th style={{ width: "150px" }}>
                Tipo de datos
              </th>

              <th>
                Descripción
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                `scriptURL`
              </td>

              <td>
                Cadena
              </td>

              <td>
                La URL del script PAC.
              </td>
            </tr>

            <tr>
              <td>
                `authCredentialsMap`
              </td>

              <td>
                Objeto
              </td>

              <td>
                Mapa de credenciales de autenticación que se proporcionarán a los servidores proxy, codificadas por el nombre de host del servidor proxy. Los valores de este mapa deben definirse en el formato `{username: 'authUsername', password: 'authPassword'}`
              </td>
            </tr>
          </tbody>
        </table>
      </Collapser>

      <Collapser
        id="setproxy-pac-example"
        title="Ejemplos"
      >
        Un ejemplo de configuración de un servidor proxy mediante un script de configuración automática de proxy (PAC):

        ```
        var authCredentialsMap = {
        'example.com': {username: 'authUsername', password: 'authPassword'},
        }
        ```

        A continuación se muestra un ejemplo de configuración de una red proxy mediante un script de configuración automática de proxy (PAC):

        ```
        var authCredentialsMap = {
        'example.com': {username: 'authUsername', password: 'authPassword'},
        'anotherExample.com': {username: 'authUsername', password: 'authPassword'},
        }

        $network.setProxyPAC("https://www.example.com/pacScript", authCredentialsMap)
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="setproxy-advanced"
    title={<>$network.setProxyAdvanced(object PROXY RULES OBJECT)</>}
  >
    <Callout variant="tip">
      Este método es <DNT>**Chrome-specific**</DNT>: solo se aplica a los tipos de script de monitorización del browser. Se puede utilizar para permitir una configuración de proxy más flexible y compleja. En la mayoría de los casos, este método no será necesario.
    </Callout>

    Establece la configuración del proxy utilizando el formato admitido por la API de extensión de Chrome para proxy. La entrada es un objeto ProxyRules, según lo define la [API de extensión de Chrome para configurar servidores proxy](https://developer.chrome.com/extensions/proxy#type-ProxyRules). Puede agregar `authCredentials` para los servidores proxy que lo necesiten. Ver parámetro para más detalles.

    <CollapserGroup>
      <Collapser
        id="setproxy-advanced-returns"
        title="Devoluciones"
      >
        Este método devuelve un `Promise` que se resolverá una vez que se haya aplicado la configuración.
      </Collapser>

      <Collapser
        id="setproxy-parameters"
        title="Parámetros"
      >
        <table>
          <thead>
            <tr>
              <th style={{ width: "150px" }}>
                Parámetro
              </th>

              <th style={{ width: "150px" }}>
                Tipo de datos
              </th>

              <th>
                Descripción
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                `ProxyRules Object`
              </td>

              <td>
                Objeto
              </td>

              <td>
                `proxyRulesObject` es un objeto simple que sigue el formato ProxyRules definido por la [API de extensión de Chrome para configurar servidores proxy](https://developer.chrome.com/extensions/proxy#type-ProxyRules). Este objeto está "adaptado" para adaptarse a nuestro tiempo de ejecución: el usuario puede definir una propiedad adicional, `authCredentials`, para que [`Proxy server objects`](https://developer.chrome.com/extensions/proxy#type-ProxyServer) proporcione credenciales de autenticación para un servidor proxy específico. `authCredentials` es un objeto en el formato `{username: 'authUsername', password: 'authPassword'}`.
              </td>
            </tr>
          </tbody>
        </table>
      </Collapser>

      <Collapser
        id="setproxyadvanced-example"
        title="Ejemplos"
      >
        A continuación se muestra un ejemplo de cómo crear un `proxyRules` con `authCredentials`:

        ```
        var proxyRules = {
        	singleProxy: {
        		host:"example.com",
        		authCredentials: {
        		  username: 'authUsername',
        		  password: 'authPassword'
        		}
        	}
        };
        ```

        A continuación se muestra un ejemplo de configuración de una red proxy con recursos de zona de red mixta:

        ```
        var proxyRules =
          {singleProxy: {host:"entproxy.mycompany.com", port:8888, scheme:"http"},
          bypassList:['s3.amazonaws.com','*.localcdn.com']
          }
        $network.setProxyAdvanced(proxyRules)
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="clearproxy"
    title="$network.clearProxy()"
  >
    Borra/elimina la configuración de proxy actual.

    <CollapserGroup>
      <Collapser
        id="clearproxy-returns"
        title="Devoluciones"
      >
        Este método devuelve un `Promise` que se resolverá una vez que se haya aplicado la configuración.
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="getproxy"
    title="$network.getProxy()"
  >
    Este método devuelve la configuración de proxy actual. Debe sincronizarse en una devolución de llamada de promesa.

    <CollapserGroup>
      <Collapser
        id="setproxyadvanced-example"
        title="Ejemplos"
      >
        Un ejemplo de sincronización de `getProxy` con `$network.setProxy();` y `$network.clearProxy();`:

        ```
        var assert = require('assert');

        $network.setProxy("http://user:password@myproxyurl.com")
          .then(function () {
            console.log('Proxy configuration applied');

            //Note: $network.getProxy() is not synchronized with the webdriver Control Flow.
            //To make sure we get the proxy configuration after the call to setProxy() above
            // succeeds we need to use a promise callback
            var proxyData = $network.getProxy();
            console.log(proxyData);
          })
          .then(function () {
            // Again: getProxy() is not synchronized with the Webdriver Control Flow: we
            //need this promise callback otherwise clearProxy() might be called before the call
            // to getProxy() above returns
            return $network.clearProxy();
          })
          .then(function () {
            console.log('Proxy configuration cleared');

            // We need this promise callback for reasons explained above
            var proxyData = $network.getProxy();
            assert.equal(proxyData.rules, null);
          });
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>

## Propiedades de proxy [#proxy]

<Callout variant="important">
  Esta información de proxy se aplica solo a estas versiones:

  * Monitor API: 0.4.0, 0.2.2, 0.2.1, 0.1.0
  * Monitor con guión: 0.1.0
</Callout>

Para analizar y recopilar su tráfico HTTP métrico, New Relic debe asegurarse de que el tráfico pase a través de un embudo conceptual. Nuestro monitoreo sintético incluye un componente de software embudos capaz de analizar las solicitudes o respuestas HTTP y luego registrar la información.

* El monitor de browser con script de New Relic (versiones 0.4.x e inferiores) incluye un mecanismo para realizar este análisis sin necesidad de un proxy HTTP, por lo que no es necesario configurar nada.
* La prueba API de New Relic (versiones 0.4.x e inferiores) proporciona un objeto `$http` que está preconfigurado para hacer que las solicitudes pasen a través del proxy HTTP interno. Esto le permite escribir su prueba sin incluir ninguna configuración de proxy.

Si desea utilizar alguna otra forma de generar tráfico HTTP y al mismo tiempo recopilar la métrica del tráfico HTTP, puede utilizar `$env.PROXY_HOST` y `$env.PROXY_PORT`. Para registrar el tráfico métrico, asegúrate de incluir estas propiedades en tu script.
