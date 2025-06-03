---
title: Ofuscar datos del agente del navegador
tags:
  - Browser monitoring
  - Obfuscation
metaDescription: You can configure the browser agent to obfuscate the data it sends.
freshnessValidatedDate: '2023-10-24T00:00:00.000Z'
translationType: machine
---

<Callout variant="important">
  Esta característica está actualmente disponible para aquellos que utilizan los métodos de instalación browser copiar/pegar o NPM. Actualmente no hay opciones de configuración de UI o NerdGraph disponibles. Seguimos trabajando para mejorar el acceso a estas y otras opciones de configuración.
</Callout>

Si bien la recomendación de New Relic es evitar el uso de información confidencial en la estructura pública de su aplicación, también entendemos que esto no siempre es posible. Puede configurar el agente del navegador para ofuscar selectivamente los datos en cada carga útil que envía. Esto puede resultar útil si su aplicación utiliza datos confidenciales en lugares que el agente captura, como rutas de navegación, mensajes de error y más.

## Cómo funciona [#how-it-works]

A partir de [la versión 1216](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) y superior del agente del navegador, la regla de ofuscación se puede aplicar a la carga de cosecha saliente.

Para configurar estas reglas, deberá configurar la siguiente propiedad del agente del navegador:

* La propiedad `init.obfuscate` contiene una matriz de selectores y reemplazos que se utilizarán para modificar cada cosecha antes de enviarla.

  * Dado que actualmente la ofuscación requiere que utilice los métodos de instalación copiar/pegar o NPM, deberá editar manualmente la sección de configuración de JavaScript y configurar la matriz `obfuscate` para que contenga sus condiciones de ofuscación.

### Recomendaciones

Al configurar esta propiedad, recomendamos lo siguiente:

* Utilice patrones de expresiones regulares intencionales para ofuscar solo lo que necesita ofuscación.

  * Ofuscar innecesariamente puede tener efectos secundarios como una menor granularidad al agrupar datos y una menor capacidad para digerir lo que capturó el agente.

* Reemplace sus datos confidenciales con términos neutrales y genéricos que también indiquen qué datos se han redactado.

  * Ejemplo: `/account-id/g` --> `ACCOUNT_ID`

### Copiar/pegar instalación [#copy-paste]

Si está utilizando el método de instalación de copiar y pegar, agregue la siguiente configuración a las configuraciones de JavaScript de su browser antes del cargador del agente:

```js
window.NREUM.init = {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: <RegExp | string>
        replacement: <string>
      },
      ...<other obfuscation rules>...
    ]
}
```

### Instalación de NPM [#npm]

Si está utilizando el método de instalación browser NPM, agregue la siguiente configuración al inicializar el agente del navegador:

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: <RegExp | string>
        replacement: <string>
      },
      ...<other obfuscation rules>...
    ]
  }
})
```

### Ejemplos

```js
window.NREUM.init = {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: /user-id/g,
        replacement: 'USER_ID'
      },
    ]
}
```

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: /account-id/g,
        replacement: 'ACCOUNT_ID'
      },
    ]
  }
})
```
