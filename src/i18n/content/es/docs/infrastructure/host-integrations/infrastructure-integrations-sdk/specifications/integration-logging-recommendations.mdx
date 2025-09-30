---
title: Recomendaciones de registro de integración
tags:
  - Create integrations
  - Infrastructure Integrations SDK
  - Specifications
metaDescription: Integration logging recommendations.
freshnessValidatedDate: never
translationType: machine
---

[El agente de infraestructura](/docs/infrastructure/new-relic-infrastructure/getting-started/introduction-new-relic-infrastructure) de New Relic proporciona un [SDK para crear una integración en el host](/docs/infrastructure/host-integrations/infrastructure-integrations-sdk/get-started/introduction-infrastructure-integrations-sdk/). Este documento explica los requisitos y las mejores prácticas para generar un registro de integración.

## Requisitos de registro [#required]

Depende de usted decidir qué tipo de mensaje de registro crear y qué tipo de información será útil para depurar problemas. Sólo hay un requisito: el ejecutable de integración debe escribir el registro en el error estándar (stderr).

El agente de infraestructura capturará las líneas escritas con error estándar y las fusionará en el [flujo de registro](/docs/infrastructure/new-relic-infrastructure/troubleshooting/generating-logs-troubleshooting-infrastructure) escrito por el propio agente de infraestructura.

Para evitar depender de soluciones de registro de terceros, la biblioteca del edificio Go integración proporciona un [paquete log simple](https://github.com/newrelic/infra-integrations-sdk/blob/master/docs/toolset/log.md) con el nivel de registros común.

## Recomendaciones y mejores prácticas [#recommended]

Estas son las prácticas recomendadas para generar un registro de integración:

* De forma predeterminada, una integración debería ser "silenciosa". Aparte de los datos emitidos a la salida estándar, deberían generarse muy pocos mensajes de registro o diagnóstico.
* Le recomendamos incluir un modo de registro detallado similar a la configuración [`verbose`](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#verbose) en el agente de infraestructura. Incluya un modificador de línea de comando para habilitar y deshabilitar el registro detallado (por ejemplo, `-verbose`).
* Para depurar su integración mientras se ejecuta, incluya el modificador detallado en el archivo de definición como parte de la línea de comando que se ejecutará. Esto enviará el registro detallado al propio archivo de registro del agente de infraestructura.
* Para fines de depuración generales, utilice una marca que escriba los datos JSON estándar en un formato "bastante impreso" legible por humanos (por ejemplo, `--pretty`). Tenga en cuenta que la salida escrita en un formato "bonito" es sólo para fines de depuración y no es compatible con el agente de infraestructura.
* Su integración debe crearse para que pueda ejecutarse por sí sola. Si tiene dudas sobre si la integración se está comunicando con el agente, puede ejecutar la integración desde la línea de comando y ver si está produciendo el resultado o mensaje de registro correcto que espera.

Para obtener información sobre el paquete de registro de idiomas de Go, consulte [Paquete de registro](https://github.com/newrelic/infra-integrations-sdk/blob/master/docs/toolset/log.md).
