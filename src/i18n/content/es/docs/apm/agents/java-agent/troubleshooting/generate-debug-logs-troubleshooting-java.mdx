---
title: Generar registro de depuración para resolución de problemas (Java)
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'When troubleshooting your New Relic Java agent, change the newrelic_agent.log level temporarily to FINEST, then collect about 5 minutes of log data.'
freshnessValidatedDate: never
translationType: machine
---

Cuando resuelva problemas su agente de Java New Relic, genere el registro `finest` para buscar e investigar errores. Cuando termine la resolución de problemas, asegúrese de volver a configurar el archivo de registro en una configuración menos detallada, como `info`.

## Requisitos [#requirement]

Si solo cambia la configuración del archivo de registro en su archivo `newrelic.yml` , no necesita reiniciar el servidor o la JVM. Sin embargo, si realiza otros cambios, <DNT>**must**</DNT> reinicie su servidor o JVM.

Asegúrese de mantener la sangría de línea original en su archivo `newrelic.yml` . YAML es "sensible al espacio" y requiere una sangría adecuada.

La configuración `audit_mode` (cuando se establece en `true` ) también log la comunicación entre el agente de Java y New Relic en el archivo de registro. El soporte de New Relic ocasionalmente puede solicitar [registros del modo de auditoría](/docs/agents/manage-apm-agents/configuration/log-audit-all-data-your-new-relic-agent-transmits) para una resolución adicional de problemas.

## Generar archivo de registro [#finer]

Para generar `finest` archivo de registro detallado:

1. Edite su archivo `newrelic.yml` y cambie [`log_level`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-log_level) a `finest`. Asegúrese de mantener estas líneas [con sangría <DNT>**two spaces**</DNT>](#requirements).

   ```
   # The agent uses its own log file to keep its logging
     # separate from that of your application. Specify the log level here.
     # This setting is dynamic, so changes do not require restarting your application.
     # The levels in increasing order of verboseness are:
     # off, severe, warning, info, fine, finer, finest
     # Default is info.
     log_level: finest

     # Log all data sent to and from New Relic in plain text.
     # This setting is dynamic, so changes do not require restarting your application.
     # Default is false.
     audit_mode: false
   ```

2. Ejercite su aplicación web durante unos cinco minutos para generar suficientes datos de registro.

3. Después de la prueba, cambie [`log_level`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-log_level) a un nivel menos detallado, como `info` (predeterminado).

4. Abra su archivo de registro y examínelos en busca de errores.

## Examinar archivo de registro [#logfile]

<Callout variant="important">
  La configuración log `finest` es un nivel de registro muy detallado. Para reducir el consumo de espacio en disco después de la prueba, devuelva `log_level` a su configuración original.
</Callout>

De forma predeterminada, los archivos de registro se almacenan en un subdirectorio `logs` , dentro del mismo directorio que `newrelic.jar`. Si es necesario, siga los [procedimientos de resolución de problemas si no aparece ningún archivo de registro](/docs/agents/java-agent/troubleshooting/no-log-file-java).
