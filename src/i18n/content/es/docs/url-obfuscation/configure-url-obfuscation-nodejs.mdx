---
title: URL de uso del agente Node.js
tags:
  - Distributed Tracing
  - Span attributes
  - Transaction attributes
  - Transaction Trace
  - Transaction Trace Details
metaDescription: 'For apps monitored by the Node.js agent, obfuscate URLS in distributed traces and transaction traces with a regex pattern that protects sensitive data.'
freshnessValidatedDate: never
translationType: machine
---

Con nuestro agente APM Node.js, puede ofuscar las URL en el rastreo distribuido y la traza de la transacción empleando un patrón de expresiones regulares para proteger datos confidenciales. Esta característica está disponible en el [agente Node.js v9.9.0+](/docs/release-notes/agent-release-notes/nodejs-release-notes/).

## Habilitar la ofuscación de URL [#enable-url-obfuscation]

Para habilitar la ofuscación de URL, agregue el siguiente fragmento a la configuración de su agente:

```js
url_obfuscation: {
  enabled: true,
  regex: {
    pattern: '{your regex pattern}',
    flags: '{regex flags}'}',
    replacement: '{replacement string}'
  }
}

```

O usando variables de entorno:

```bash
NEW_RELIC_URL_OBFUSCATION_ENABLED=true
NEW_RELIC_URL_OBFUSCATION_REGEX_PATTERN={your regex pattern}
NEW_RELIC_URL_OBFUSCATION_REGEX_FLAGS={regex flags}
NEW_RELIC_URL_OBFUSCATION_REGEX_REPLACEMENT={replacement string}

```

Las banderas son opcionales. Si no los especifica, el agente no los utilizará. Aunque recomendamos utilizar un patrón de reemplazo, utilizar un patrón de reemplazo es opcional. Si no lo especifica, el agente utilizará el patrón de reemplazo predeterminado, que es una cadena vacía (`''`).

## Configuración de ejemplo [#example-configuration]

```js
url_obfuscation: {
  enabled: true,
  regex: {
    pattern: /(\/api\/v1\/users\/)([\d]+)(\/.*$)/,
    flags: "i",
    replacement: '$1<DNT>**$3'
  }
}

```

Esta configuración ofuscará las URL que coincidan con una URL de ejemplo de `/api/v1/users/12345456/edit` y reemplazará todos los dígitos en el medio de la URL con `**</DNT>` (dos asteriscos). La URL resultante será `/api/v1/users/**/edit`.

## Ejemplo de configuración con variables de entorno. [#example-configuration-with-environment-variables]

```bash
NEW_RELIC_URL_OBFUSCATION_ENABLED=true
NEW_RELIC_URL_OBFUSCATION_REGEX_PATTERN=(/api/v1/users/)([\d]+)(/.*$)
NEW_RELIC_URL_OBFUSCATION_REGEX_FLAGS=i
NEW_RELIC_URL_OBFUSCATION_REGEX_REPLACEMENT=$1**$3

```

## Regla de ofuscación [#obfuscation-rules]

El agente ofuscará las URL que coincidan con el patrón de expresiones regulares que usted proporcione. El agente no ofuscará las URL que no coincidan con el patrón de expresiones regulares. Si no proporciona un patrón de expresiones regulares, el agente no ofuscará ninguna URL. Si no proporciona un patrón de reemplazo, el agente reemplazará el patrón coincidente con una cadena vacía. Si no proporciona ninguna marca, el agente no utilizará ninguna marca.
