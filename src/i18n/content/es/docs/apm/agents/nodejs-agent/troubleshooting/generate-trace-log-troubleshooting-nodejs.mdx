---
title: Generar log de traza para resolución de problemas (Node.js)
tags:
  - Agents
  - Nodejs agent
  - Troubleshooting
metaDescription: 'To reduce disk space consumption, be sure to lower the ''trace'' log level after generating a troubleshooting log for your New Relic Node.js agent.'
freshnessValidatedDate: never
translationType: machine
---

[logdel agente de New Relic Node.js](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#logging_config) captura errores en el nivel `info` predeterminado. Sin embargo, al resolver problemas o depurar, genere un log `trace` más detallado para ayudar a encontrar e investigar problemas.

<Callout variant="important">
  La configuración log `trace` es un nivel de registro muy detallado. Para reducir el consumo de espacio en disco, devuelva la sección `logging : {level}` a su [configuración original](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#logging_config) después de la prueba.
</Callout>

## Generar archivo de registro [#create]

Para generar el `trace` archivo de registro detallado:

1. Edite su archivo `newrelic.js` y cambie el `level` de la sección `logging` a `trace`. Si utiliza variables de entorno (con Lambda, esta es la forma más común), establezca `NEW_RELIC_LOG_LEVEL` en `trace`.

   ```js
   logging: {
     level: 'trace'
   }
   ```

2. Reiniciar el nodo.

3. Ejercite su aplicación web durante unos cinco minutos para generar suficientes datos de registro.

4. Después de la prueba, cambie `level` a un [nivel de registro](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log_level) menos detallado, como `info` (predeterminado).

5. Abra y examine el archivo de registro generado.

Si está utilizando Lambda, [aprenda cómo configurar el registro](/docs/serverless-function-monitoring/aws-lambda-monitoring/troubleshooting/troubleshoot-enabling-serverless-monitoring-aws-lambda/#attach-logs).

## Examinar archivo de registro [#logfile]

De forma predeterminada, el agente de Node.js [almacena el archivo de registro](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log) en el directorio de trabajo actual como `newrelic_agent.log`. Si el archivo de registro o la carpeta no están visibles:

1. Compruebe si ha configurado la ruta de registro en `stdout` o `stderr`.
2. Verifique que el directorio de trabajo actual sea el mismo que el directorio donde espera que se ubique el archivo de registro.
