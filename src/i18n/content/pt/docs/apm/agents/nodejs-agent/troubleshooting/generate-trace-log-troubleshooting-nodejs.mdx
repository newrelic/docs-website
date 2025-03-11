---
title: Gerar log trace para resolução de problemas (Node.js)
tags:
  - Agents
  - Nodejs agent
  - Troubleshooting
metaDescription: 'To reduce disk space consumption, be sure to lower the ''trace'' log level after generating a troubleshooting log for your New Relic Node.js agent.'
freshnessValidatedDate: never
translationType: machine
---

[O log do agente Node.js](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#logging_config) do New Relic captura erros no nível `info` padrão. No entanto, durante a resolução de problemas ou depuração, gere um log `trace` mais detalhado para ajudar a localizar e investigar problemas.

<Callout variant="important">
  A configuração log `trace` é um nível de registro altamente detalhado. Para reduzir o consumo de espaço em disco, retorne a seção `logging : {level}` à sua [configuração original](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#logging_config) após o teste.
</Callout>

## Gerar arquivo de log [#create]

Para gerar o arquivo de log `trace` detalhado:

1. Edite seu arquivo `newrelic.js` e altere o `level` da seção `logging` para `trace`. Se estiver usando variáveis de ambiente (com Lambda, esta é a maneira mais comum), defina `NEW_RELIC_LOG_LEVEL` como `trace`.

   ```js
   logging: {
     level: 'trace'
   }
   ```

2. Reinicie o nó.

3. Exercite seu aplicativo Web por cerca de cinco minutos para gerar dados de registro suficientes.

4. Após o teste, altere `level` para um [nível de registro](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log_level) menos detalhado, como `info` (padrão).

5. Abra e examine o arquivo de log gerado.

Se você estiver usando o Lambda, [saiba como configurar o log](/docs/serverless-function-monitoring/aws-lambda-monitoring/troubleshooting/troubleshoot-enabling-serverless-monitoring-aws-lambda/#attach-logs).

## Examinar arquivo de log [#logfile]

Por padrão, o agente Node.js [armazena o arquivo de log](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log) no diretório de trabalho atual como `newrelic_agent.log`. Caso o arquivo de log ou pasta não estejam visíveis:

1. Verifique se você configurou o caminho de registro como `stdout` ou `stderr`.
2. Verifique se o diretório de trabalho atual é o mesmo onde você espera que o arquivo de log esteja localizado.
