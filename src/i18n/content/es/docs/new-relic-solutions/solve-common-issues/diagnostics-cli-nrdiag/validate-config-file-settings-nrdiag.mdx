---
title: Validar la configuración del archivo de configuración con nrdiag
tags:
  - Using New Relic
  - Cross-product functions
  - Diagnostics CLI (nrdiag)
metaDescription: 'How to validate your config file settings when using New Relic Diagnostics (nrdiag); for example, with deployments.'
freshnessValidatedDate: never
translationType: machine
---

La CLI de diagnóstico incluye una validación detallada de los ajustes de configuración para el archivo `newrelic.yml` del agente de Java. Para solicitar soporte para otro agente de New Relic, use nuestra [plantilla de GitHub](https://github.com/newrelic/newrelic-diagnostics-cli/issues/new?assignees=&labels=enhancement%2C+needs-triage&template=enhancement.md&title=).

Si ejecuta `nrdiag` de la manera habitual (en el sistema que ejecuta su aplicación con el agente New Relic ya instalado), la nueva validación se aplica automáticamente y las advertencias también aparecen automáticamente.

## Ejemplo de implementación [#deployments]

También puede utilizar esta característica como linter para validar un archivo de configuración antes de desplegarlo. Para hacer esto, ejecute la tarea adecuada y proporcione la ruta a su archivo de configuración.

Por ejemplo, si `newrelic.yml` y `nrdiag` están ambos en el directorio actual, ejecute el siguiente comando para eliminar el archivo de configuración:

```
./nrdiag -t Java/Config/ValidateSettings -c newrelic.yml
```

A continuación se muestra un ejemplo del resultado de una configuración incorrecta. La configuración `agent_enabled` en este caso tiene un valor de `yes`, pero el agente de Java solo acepta los valores `true` o `false`. Esta mala configuración impedirá que el agente se ejecute.

<img
  title="agent_enabled.png"
  alt="Screenshot of a terminal window showing command output. The agent_enabled setting is called out as incorrect."
  src="/images/agent_enabled.webp"
/>

<figcaption>
  Si habilita su agente de Java incorrectamente, la CLI de diagnóstico devuelve un mensaje como este, que describe qué configuración debe actualizarse y cómo debe cambiarse.
</figcaption>
