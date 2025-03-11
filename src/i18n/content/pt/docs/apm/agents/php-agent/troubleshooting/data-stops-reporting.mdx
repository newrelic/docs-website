---
title: Os dados param de ser relatados
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Learn what to do if the New Relic PHP agent starts and then stops reporting data.
freshnessValidatedDate: never
translationType: machine
---

## Problema

O agente PHP da New Relic estava reportando dados anteriormente, mas depois parou de reportar. Além disso:

* Ao verificar o arquivo de log do daemon do agente `/var/log/newrelic/newrelic-daemon.log`, você viu a mensagem `Lack of activity within 10ms`.
* O status de saúde do aplicativo está cinza.
* A opção para excluir o aplicativo aparece no menu <DNT>**Settings**</DNT> do aplicativo quando você seleciona o <Icon name="fe-settings"/> ícone.

## Solução

Use um destes métodos para evitar que seu aplicativo entre em estado inativo:

* Defina o valor do tempo limite para [`newrelic.daemon.app_timeout`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-app_timeout) como pelo menos duas vezes o intervalo da sua transação. Por exemplo, para um trabalho em segundo plano por hora, defina o tempo limite para duas horas.
* Recomendação: Se você tiver processos longos ou pouco frequentes, execute um cron job a cada cinco minutos com uma transação simples, como `phpinfo()`. Isso ajudará a garantir que o aplicativo não entre em estado inativo.

<Callout variant="important">
  Não defina `newrelic_ignore_transaction` para ignorar o cron job. O agente PHP entrará em estado inativo se o trabalho não for executado e reportado.
</Callout>

## Causa

Se a transação de um aplicativo demorar mais de dez minutos ou ocorrer com menos frequência do que uma vez a cada dez minutos, o aplicativo entrará e permanecerá em estado inativo.

Quando o agente PHP está em estado inativo, <DNT>**two**</DNT> transação deve ocorrer antes que ele comece a reportar novamente:

* A primeira transação ativa o daemon e restabelece a conexão com o New Relic.
* A segunda transação reporta dados para a New Relic.
