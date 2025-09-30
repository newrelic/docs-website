---
title: Logging con el agente iOS
tags:
  - Mobile logging
  - New Relic Mobile iOS
metaDescription: Suggestions for setting up the logging in your app with the New Relic agent
freshnessValidatedDate: never
translationType: machine
---

Para garantizar un logging consistente y completo durante todo el proyecto, el agente de iOS proporciona API de logging. Emplee las API de logging del agente para enviar los logs de sus aplicaciones móviles a New Relic. Esto garantiza que sus logs estén en un solo lugar para su análisis. Para obtener más información, consulte nuestra [API de log móvil](/docs/mobile-monitoring/mobile-monitoring-ui/mobile-logs/#ios).

## Configurar nivel de logs

Puede configurar el nivel de logs del agente iOS para el agente y el logging remoto.

### Nivel de logs del agente

El nivel de log del agente se configura en el agente de New Relic y determina qué mensajes de log se escriben en la consola del dispositivo. Esto también incluye los logs de agentes de New Relic. Para ver todos los logs de agentes de New Relic, configure el nivel de logs en `NRLogLevelDebug`.

### Nivel de logs remotos

En la plataforma New Relic, el nivel de logs remotos controla el nivel de detalle de los logs enviados desde un dispositivo a New Relic. Esto ayuda a gestionar el volumen de datos y mantiene el foco en la información relevante.

**Configuración**: En el dashboard de New Relic, puedes configurar el nivel de logs remotos en la pestaña <DNT>**Application**</DNT>. Para obtener más información sobre cómo configurar el nivel de logs remotos, consulte [logs móviles](/docs/mobile-monitoring/mobile-monitoring-ui/mobile-logs).

## Recopilación automática de logs

En la plataforma New Relic, cuando el log remoto está habilitado, el agente de iOS recopila todos los logs escritos en `stdout` y `stderr` desde la aplicación. Captura todas las llamadas a `NSLog()`, Swift `print()` y otras funciones de la familia de impresión. Los logs recopilados de esta manera se establecen en `NRLogLevelInfo`. Esta función está deshabilitada de forma predeterminada. Para habilitarlo, emplee el indicador de característica `NRFeatureFlag_AutoCollectLogs` .

El agente separa el mensaje de log usando un delimitador `'\n\n'` . La timestamp refleja cuándo el agente recopiló el log, no cuándo la aplicación lo escribió. Esto podría causar una diferencia de milisegundos ya que el mensaje del log se almacenó en búfer antes de ser recopilado por el agente.

<Callout variant="important">
  Esta función interfiere con la consola incorporada de Xcode, por lo que no se puede habilitar mientras el depurador esté conectado.
</Callout>