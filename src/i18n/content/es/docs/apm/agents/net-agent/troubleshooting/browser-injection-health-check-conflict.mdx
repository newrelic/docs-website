---
title: 'Inyección browser : conflicto de verificación de estado'
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting tips for your New Relic .NET agent if your webpage health check is failing.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Como control de estado, su balanceador de carga (como un balanceador de carga F5) hace ping periódicamente a una página web específica. En algunos casos, cuando [la inyección automática del navegador](/docs/agents/net-agent/additional-installation/new-relic-browser-net-agent) está habilitada, el fragmento de JavaScript [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)agregado al encabezado de la página hace que la verificación falle. Dependiendo de cómo esté configurado el equilibrador de carga, esto puede hacer que el tráfico se dirija a otra instancia de la aplicación.

## Solución

Para evitar esto, agregue el [subelemento`requestPathsExcluded` ](/docs/agents/net-agent/configuration/net-agent-configuration#browser-path-exclusion)a la configuración de su agente .NET. Esta es una referencia al directorio virtual de la ruta en su aplicación y no a la URL completa de la ruta que desea excluir.

Por ejemplo, si su balanceador de carga está configurado para hacer ping a una página web en `https://www.mywebsite.com/healthmonitor/`, inserte `/healthmonitor/` como valor de expresión regular de ruta:

```xml
<!-- If you use both the Exclude and Attribute elements
     the Exclude element must be listed first. -->
<browserMonitoring autoInstrument="true">
  <requestPathsExcluded>
    <path regex="/healthmonitor/"/>
  </requestPathsExcluded>
</browserMonitoring>
```

## Causa

El [agente del navegador](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent) es un fragmento de JavaScript inyectado en el encabezado de una página web. A veces, puede impedir que el monitor de verificación de estado vea la información que necesita para validar que el sitio está en buen estado. Excluir la ruta donde se encuentra la página de verificación de estado evitará que el agente inserte el fragmento en los encabezados de páginas específicas.
