---
title: Monitoreo del navegador y el agente Ruby
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: Instrumentation for your New Relic Ruby agent to set up New Relic browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

Con el agente Ruby, puede agregar instrumentación [del agente de monitoreo del navegador](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser) a sus páginas web de forma automática o manual. Para habilitar <InlinePopover type="browser"/>en la UI, siga los procedimientos para [instalar el agente del navegador](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent). Luego siga los procedimientos de esta sección para configurar el agente Ruby.

## Requisitos

La instrumentación automática browser es compatible con las versiones más recientes de Rails:

* New Relic Ruby ([versión 3.0.1 o superior](/docs/release-notes/agent-release-notes/ruby-release-notes))
* Para instrumentación automática: Rails 2.3 o superior
* Para instrumentación manual: Rails 2.0 a 2.2

## Utilizar instrumentación automática. [#auto_instrumentation]

La instrumentación automática funciona con Rack y requiere Rails 2.3 o superior.

Configure el agente para que instrumente automáticamente páginas con un script de monitoreo del usuario final, agregando o editando el siguiente indicador en `newrelic.yml`.

```yaml
browser_monitoring:
  auto_instrument: true
```

Esta es la forma más sencilla de monitor el usuario final. El agente Ruby examina cada página de su aplicación y automáticamente inyecta JavaScript en el encabezado browser . La instrumentación automática funciona para entornos que admiten Rack. Por motivos de rendimiento, el agente escanea solo los primeros 50k de la respuesta de su aplicación en busca del punto de instrumentación del encabezado. En los casos en los que esté presente una metaetiqueta `X-UA-Compatible` y la etiqueta `<head>` tenga más de 50 k, la instrumentación automática fallará correctamente.

La instrumentación automática buscará una metaetiqueta `X-UA-Compatible` e insertará JavaScript directamente después de ella. Si la autoinstrumentación no puede encontrar una metaetiqueta `X-UA-Compatible` , la insertará después de la etiqueta del encabezado de apertura y, en su defecto, la insertará después de la etiqueta del cuerpo de apertura. Si alguna de estas etiquetas está envuelta en condicionales o comentarios, es probable que la instrumentación automática falle.

Si la instrumentación automática no logra instrumentar correctamente las páginas de su aplicación, entonces deberá [instrumentarlas manualmente](#manual_instrumentation) a través de la API del agente.

## Instrumento manual a través de la API del agente [#manual_instrumentation]

Si está utilizando Rails 2.1 a 2.2 o no puede utilizar la instrumentación automática, aún puede configurar el monitoreo del usuario final manualmente incluyendo el script apropiado en sus páginas. Utilice la API del agente New Relic Ruby para generar el script que se insertará en sus páginas.

Por ejemplo, para modificar la plantilla de su aplicación para llamar al agente, use:

```erb
<head>
    <%= ::NewRelic::Agent.browser_timing_header rescue "" %>
    # existing template code ...
</head>
```

## Soporte de CSP Nonce

El uso de CSP Nonce en la instrumentación de nuestro browser es compatible con la versión 7.1.0+ del agente Ruby. Para utilizar un nonce con la instrumentación browser , debe desactivar el monitoreo de instrumentación automática del navegador y utilizar la instrumentación manual a través de la API del agente.

Ahora puede pasar un nonce como argumento al método API para permitir que el agente inserte el nonce en la instrumentación del browser . Por ejemplo, `NewRelic::Agent.browser_timing_header(nonce)`.

## Resolución de problemas

Si no ve ningún dato del navegador reportado, vea la fuente HTML y confirme dos bloques de script similares a este en su encabezado HTML:

```html
<script type="text/javascript">window.NREUM||(NREUM={});...</script>
```

Si no están presentes, verifique la configuración de instrumentación automática o la ubicación de la instrumentación manual en sus archivos de plantilla.

En versiones del agente Ruby anteriores a la 3.7.0, `<%=::NewRelic::Agent.browser_timing_footer rescue "" %>` también debía llamarse lo más cerca posible del final del documento. Con 3.7.0, todo el script requerido está incluido en `browser_timing_header`. `browser_timing_footer` devuelve una cadena vacía por compatibilidad.

## Desactivar la instrumentación automática [#disable_instrumentation]

El valor predeterminado de [`auto-instrument`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#browser_monitoring) es `true` (incluso cuando no se especifica). Para deshabilitar la instrumentación automática, establezca este indicador en `false`.

Para deshabilitar la instrumentación automática solo para ciertos controladores o acciones de controlador, use [`newrelic_ignore_enduser`](/docs/agents/ruby-agent/installation-configuration/ignoring-specific-transactions#page-load-timing-rum). La instrumentación del lado del servidor no se verá afectada por esta llamada.
