---
title: Actualice al inicio de logs en el contexto automático
tags:
  - Logs
metaDescription: 'For apps that have Logs in Context enabled, learn'
freshnessValidatedDate: never
translationType: machine
---

Esta guía es aplicable a clientes que previamente hayan configurado [el reenvío de registros](/docs/logs/forward-logs/enable-log-management-new-relic/) o [logs en el contexto](/docs/apm/new-relic-apm/getting-started/get-started-logs-context/); Si no ha configurado ninguna de las características, le recomendamos actualizar a la última versión del agente <InlinePopover type="apm"/>para aprovechar [el reenvío de registros automático y la decoración local](/docs/apm/new-relic-apm/getting-started/get-started-logs-context/).

Si actualmente está enviando un registro de aplicación a New Relic, es posible enviar un registro duplicado si actualiza al último agente de lenguaje APM sin revisar su estrategia de registro actual. La ruta de migración óptima dependerá de su aplicación y su entorno.

Si tiene un procesamiento de datos extenso o una lógica de enriquecimiento en su configuración de reenviador de registros existente, enviar el registro directamente desde el agente APM omitirá ese paso.

<Callout variant="tip">
  ¿Tienes muchos registros de Go? Consulte nuestro [tutorial sobre cómo optimizarlos y administrarlos](/docs/tutorial-large-logs/get-started-managing-large-logs/).
</Callout>

Hay dos rutas de actualización principales que recomendamos para evitar el envío de registros duplicados:

1. Actualice al último [agente APM](/docs/new-relic-one/install-configure/update-new-relic-agent/), que reenvía automáticamente el registro y luego deshabilite el reenviador de registros:

   * Actualice la configuración framework de registro de su aplicación para asegurarse de que su aplicación no esté escribiendo registros para prueba o producción. Esto puede ser en un archivo en el disco o en STDOUT si está recopilando registros usando un sidecar.
   * Deshabilite el reenviador de registros siguiendo el archivo de registro de su aplicación. Deshabilitar los contenedores utilizados para recopilar el registro de aplicación
   * Desactive el reenvío de registros con su proveedor de nube
   * Reinicia el agente APM/desplegar tus cambios


2. Utilice agente APM con reenviador de registros (recomendado solo si ya existe un reenviador):

   * [Actualizar](/docs/new-relic-one/install-configure/update-new-relic-agent) el agente APM
   * Configure el agente APM para garantizar que la decoración log locales esté habilitada y el reenvío de registros esté deshabilitado.
   * Revierta los cambios anteriores que se realizaron en la configuración framework de registro de la aplicación para habilitar [el logs en el contexto manual](/docs/logs/logs-context/logs-in-context#enable-logs).
   * Confirme que framework de registro de la aplicación esté configurado para escribir el registro de la aplicación en STDOUT o en un archivo que está siendo monitoreado/vigilado por un reenviador de registros.
   * Reinicia el agente APM/desplegar tus cambios

### Habilitación de la decoración local

La documentación sobre cómo configurar la decoración local en la última versión del agente de idioma se puede encontrar a continuación:

* [Java](/docs/logs/logs-context/java-configure-logs-context-all/#2-decorate)
* [Ruby](/docs/logs/logs-context/configure-logs-context-ruby)
* [.NET](/docs/logs/logs-context/net-configure-logs-context-all#2-decorate)

### Actualización con Kubernetes

Si se ha configurado el [logs en el contexto](/docs/apm/new-relic-apm/getting-started/get-started-logs-context/) , los clientes que utilicen nuestra Kubernetes integración de reenvío de [](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#installation)registros deberán revertir los cambios realizados en la configuración registro de la aplicación framework al implementar el logs en el contexto [manualmente](/docs/logs/logs-context/logs-in-context#enable-logs). Esto es necesario para preservar el enriquecimiento de metadatos de Kubernetes realizado por nuestra integración.

Tenga en cuenta que el framework de registro de la aplicación debe configurarse para escribir el registro de la aplicación en STDOUT.

La decoración local debe estar habilitada en el agente <InlinePopover type="apm"/>para garantizar que su registro esté contextualizado. No es necesario realizar cambios en la configuración de su reenvío de registros.

Siga los pasos a continuación para actualizar su monitoreo de Kubernetes:

1. [Actualice](/docs/new-relic-one/install-configure/update-new-relic-agent/) el agente APM.
2. Configure el agente APM para garantizar que la decoración log locales esté habilitada y el reenvío de registros esté deshabilitado.
3. Revierta los cambios anteriores que se realizaron en la configuración framework de registro de la aplicación para habilitar el inicio de logs en el contexto [manual](/docs/logs/logs-context/logs-in-context#enable-logs).
4. Confirme que framework de registro de la aplicación esté configurado para escribir el registro de la aplicación en STDOUT o en un archivo que está siendo monitoreado/vigilado por un reenviador de registros.
5. Reinicia el agente APM/desplegar tus cambios.
