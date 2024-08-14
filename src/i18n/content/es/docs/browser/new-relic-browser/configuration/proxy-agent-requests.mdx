---
title: Código de agente proxy y datos analíticos
tags:
  - Browser monitoring
  - Proxy
metaDescription: The agent can be configured to fetch its code and send analytics through a proxy server instead of New Relic's endpoints.
freshnessValidatedDate: '2023-09-22T00:00:00.000Z'
translationType: machine
---

<Callout variant="important">
  Esta característica está actualmente disponible para aquellos que utilizan los métodos de instalación browser copiar/pegar o NPM. Actualmente no hay opciones de configuración de UI o NerdGraph disponibles. Seguimos trabajando para mejorar el acceso a estas y otras opciones de configuración.
</Callout>

Configurar una URL proxy para el agente del browser puede ser una forma valiosa de garantizar que los datos de observabilidad se sigan recopilando con fines de rendimiento.

Cuando utiliza el método de proxy, es importante asegurarse de que tiene derecho a hacerlo en función de cualquier obligación contractual, reglamentaria u otra obligación legal que pueda tener con su usuario final y/o con los visitantes del sitio. Si ha verificado que este método es una solución viable y compatible para su organización, puede consultar las instrucciones de configuración a continuación.

## Cómo funciona [#how-it-works]

A partir de [la versión 1.240.0](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) y superior del agente del navegador, puede configurar dos tipos diferentes de servidores proxy, según el tipo de datos que desee reenviar: un proxy para recuperar el código del agente del navegador y un proxy para reenviar datos analíticos. a New Relic.

Para configurar estos servidores proxy, deberá configurar las siguientes propiedades del agente del navegador:

* `init.proxy.assets` determina dónde buscar el agente del navegador.

  * Si está utilizando el método de instalación de copiar y pegar, deberá editar manualmente su fragmento de JavaScript y establecer `assets` en la URL de su dominio.
  * Por ejemplo, si estás usando agente del navegador v1.240.0 Pro+SPA, y configura `init.proxy.assets` en `assets.mydomain.com`, el agente del navegador se cargará desde `https://assets.mydomain.com/nr-spa.<hash>-1.240.0.min.js` en lugar de `https://js-agent.newrelic.com/nr-spa.<hash>-1.240.0.min.js`.
  * Si está utilizando el método de instalación NPM, esta configuración no es relevante. El agente del navegador instalado con NPM se somete al mismo proceso de agrupación que la aplicación host y debería dar como resultado activos del agente en el directorio `output` junto con la aplicación host. Cuando se implementa la aplicación host, esos activos del agente también se deben desplegar, lo que da como resultado que el código del agente ya se cargue desde el mismo dominio que el sitio.

* `init.proxy.beacon` determina dónde se envían los datos analíticos.

  * Para ambos métodos de instalación, deberá configurar `beacon` en la URL de su dominio.
  * Por ejemplo, si configura `beacon` en `beacon.mydomain.com`, todos los datos de observabilidad se enviarán a `https://beacon.mydomain.com/OBSERVABILITY_ENDPOINT`.

Si le preocupa la privacidad del usuario, puede excluir el encabezado `X-Forwarded-For HTTP` , que se utiliza para geolocalizar clientes. Si lo excluye, New Relic geolocalizará su proxy como cliente.

## Empezar [#set-up]

Para comenzar a redirigir solicitudes a su proxy, consulte las instrucciones a continuación según el método de despliegue que utilizó para instalar el agente del navegador.

### Recomendaciones

Al configurar estas propiedades, recomendamos lo siguiente:

* Utilice un subdominio propio. Aunque técnicamente puedes usar otro dominio de terceros, es probable que los bloqueadores de anuncios y las VPN de seguridad lo bloqueen.
* El patrón de entrada es `<domain>[:<port>][/<path>]`. Asegúrese de omitir el protocolo (como `https://`) y cualquier barra final. Los `port` y `path` son opcionales y se respetarán si se agregan.
* Si está configurando `assets` y `beacon`, establezca valores diferentes para cada proxy utilizando diferentes subdominios o diferentes rutas. Esto facilitará mucho la configuración del servidor proxy.

### Copiar/pegar instalación [#copy-paste]

Si está utilizando el método de instalación de copiar y pegar, agregue la siguiente configuración a las configuraciones de JavaScript de su browser antes del cargador del agente:

```js
window.NREUM.init = {
    ...<other init properties>,
    proxy: {
        assets: <URL string>
        beacon: <URL string>
    }
}
```

### Instalación de NPM [#npm]

Si está utilizando el método de instalación browser NPM, agregue la siguiente configuración al inicializar el agente del navegador:

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>,
    proxy: {
        beacon: <URL string>
    }
  }
})
```

## Usando servidores proxy [#using-proxies]

New Relic no proporciona ni admite un servicio de proxy en la nube, por lo que debe configurar y administrar sus propios servidores proxy. Para garantizar una funcionalidad completa, hacemos las siguientes suposiciones sobre sus servidores proxy:

* <DNT>
    **Load the browser agent code from the New Relic CDN and pass it back to the client.**
  </DNT>

  Si está utilizando el campo `assets` , su proxy debe cargar el código del agente del navegador desde `https://js-agent.newrelic.com/` y devolverlo al cliente. Por ejemplo, para agente del navegador v1.240.0, las solicitudes a `https://assets.mydomain.com/nr-spa.3b61d78f-1.240.0.min.js` deben producir la misma respuesta que las del `https://js-agent.newrelic.com/nr-spa.3b61d78f-1.240.0.min.js` ascendente.

* <DNT>
    **Forward client payloads to New Relic.**
  </DNT>

  El proxy `beacon` reenvía la carga del cliente a New Relic. Su extremo original se puede encontrar en [la página de configuración de la aplicación de su navegador](/docs/browser/new-relic-browser/configuration/browser-app-settings-page/). En el fragmento de JavaScript, busque `;NREUM.info={beacon:"_____",...`. Para la mayoría de las aplicaciones, esto sería `(https://)bam.nr-data.net`. Sin embargo, podría ser diferente debido a razones legales y de cumplimiento. Por ejemplo, las solicitudes a `https://yourproxy.com/1/asdf?a=123` deben pasarse a `https://bam.nr-data.net/1/asdf?a=123`.

* <DNT>
    **Do not modify requests and responses.**
  </DNT>

  Las solicitudes y respuestas a través del servidor proxy no deben modificarse.

* <DNT>
    **Support the bandwidth and traffic generated by observability data collection.**
  </DNT>

  Su sistema debe poder soportar la carga de proxy, pero la cantidad de datos generados dependerá del uso de su sitio.
