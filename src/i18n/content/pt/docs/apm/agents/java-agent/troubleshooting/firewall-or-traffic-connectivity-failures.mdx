---
title: Falhas de firewall ou conectividade de tráfego
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'If your Java app''s logs show INFO messages about connectivity failures with New Relic, follow these troubleshooting steps based on frequency of the message.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Os [dadoslog ](/docs/agents/java-agent/troubleshooting/generate-debug-logs-troubleshooting-java)do seu aplicativo Java mostram falhas na conexão com o New Relic. Você deseja verificar se as mensagens `INFO` são causadas por conectividade de tráfego ou regras de firewall, ou se são causadas por problemas mais sérios.

## Solução

Falhas ocasionais na conexão ao [coletor New Relic](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector) não devem ser motivo de preocupação. Essas falhas não devem afetar a métrica de desempenho disponível na interface de usuário do New Relic do seu aplicativo.

O agente Java da New Relic tenta se conectar uma vez por minuto. Para solucionar o problema:

1. Procure em seu arquivo de log por [`INFO` mensagens sobre falhas de conexão](#info-messages).
2. Verifique [com que frequência as mensagens aparecem](#message-frequency).

Por exemplo, procure mensagens como:

```
Jul 31, 2017 21:37:14 +0000 NewRelic 10
INFO: Failed to connect to collector.newrelic.com.:443 for My Application:java.net.
ConnectException: Connection refused:connect
```

ou

```
Jul 31, 2017 21:37:14 +0000 NewRelic 40
INFO: The data collector is temporarily unavailable.
This can happen periodically. In the event that availability of our servers 
is not restored after a period of time, 
then please report this to New Relic.
java.net.SocketException: Connection reset
```

Dependendo da frequência com que a mensagem aparece, faça o seguinte para solucionar o problema:

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Frequency of INFO message**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Alguns minutos
      </td>

      <td>
        O agente Java da New Relic pode armazenar em cache uma quantidade significativa de dados métricos quando não consegue se conectar. Mesmo que a interrupção dure alguns minutos, em geral, isso não resultará em perda de informações na interface <InlinePopover type="apm"/>. Você pode ignorar essas mensagens com segurança.
      </td>
    </tr>

    <tr>
      <td>
        Intermitentemente durante alguns dias
      </td>

      <td>
        Problemas de conexão intermitentes podem ocasionalmente causar muitas dessas mensagens em pouco tempo. Se isso ocorrer apenas uma vez a cada poucos dias e todos os dados do seu aplicativo aparecerem na interface do New Relic, você pode ignorar essas mensagens com segurança.
      </td>
    </tr>

    <tr>
      <td>
        Cada minuto durante vários minutos
      </td>

      <td>
        Se falhas ocorrerem a cada minuto por mais de alguns minutos, o agente Java não poderá receber dados do seu aplicativo e nenhum dado poderá ser relatado. Nesta situação:

        1. Verifique se o New Relic está enfrentando problemas de disponibilidade: verifique o status do New Relic em [status.newrelic.com](https://status.newrelic.com).
        2. Se a New Relic não estiver relatando nenhum problema, [reúna informações sobre resolução de problemas](/docs/agents/java-agent/troubleshooting/gather-troubleshooting-information-java) para seu aplicativo.
      </td>
    </tr>
  </tbody>
</table>

## Causa

Apesar do texto do log, esse erro geralmente é causado por uma falha de conectividade ou tráfego protegido por firewall, em vez de o coletor New Relic estar realmente indisponível. Para obter mais informações, consulte as listas de [intervalos de IP](/docs/apm/new-relic-apm/getting-started/networks) usados por todos os serviços da New Relic.
