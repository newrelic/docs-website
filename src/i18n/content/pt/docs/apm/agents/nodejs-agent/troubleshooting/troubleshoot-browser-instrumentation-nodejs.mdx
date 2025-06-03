---
title: Solucionar problemas de instrumentação do browser em Node.js
type: troubleshooting
tags:
  - Agents
  - Nodejs agent
  - Troubleshooting
metaDescription: How to interpret any error messages you see when manually inserting the browser agent with New Relic's Node.js agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Se você tiver problemas [com o aplicativo do browser instrumentado](/docs/nodejs/page-load-timing-in-nodejs) por meio do agente New Relic Node.js, siga os [<InlinePopover type="browser"/>procedimentos padrão de resolução de problemas](/docs/new-relic-browser/troubleshooting-page-view-monitoring). Aqui estão algumas dicas adicionais para Node.js.

## Solução

Os códigos de erro aparecerão automaticamente no código-fonte do site e no log do agente Node.js. Pesquise [`NREUM`](/docs/new-relic-browser/troubleshooting-page-view-monitoring#javascript) para encontrar esses códigos.

<table>
  <thead>
    <tr>
      <th width={100}>
        <DNT>
          **Error code**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        0
      </td>

      <td>
        O monitoramento do browser foi explicitamente desabilitado. Isso foi feito no `newrelic.js` ou com uma variável de ambiente. (`NEW_RELIC_BROWSER_MONITOR_ENABLE` o padrão é `true`.)
      </td>
    </tr>

    <tr>
      <td>
        1
      </td>

      <td>
        O agente browser foi chamado fora de uma transação da web. Isso poderá ocorrer se você tentar gerar os dados do browser uma vez e depois armazená-los em cache ou se você os chamar em uma tarefa em segundo plano.
      </td>
    </tr>

    <tr>
      <td>
        2
      </td>

      <td>
        Algo inesperado ocorreu.
      </td>
    </tr>

    <tr>
      <td>
        3
      </td>

      <td>
        A transação não tem nome. Se você não estiver usando Express ou Restify e não nomeou explicitamente a transação, este erro aparecerá. Isso evita a rolagem do nome da transação para <DNT>\*\*/\*\*</DNT>\*. Para obter mais informações, consulte [como nomear sua transação](/docs/nodejs/nodejs-agent-api).
      </td>
    </tr>

    <tr>
      <td>
        4
      </td>

      <td>
        O agente Node.js ainda não fez um “aperto de mão” com o coletor. O aplicativo foi iniciado e um usuário acessou o site antes que o coletor pudesse falar com o agente. Isso pode ocorrer porque:

        * A página do browser foi carregada antes do agente fazer sua conexão inicial com o New Relic.

        * A chave de licença é inválida.

        * Ocorreu algum outro problema que impediria a disponibilização do ID do aplicativo.

          Se esses erros persistirem por mais de 1 minuto, verifique seu <InlinePopover type="licenseKey"/>. Caso contrário, os erros deverão desaparecer por si próprios.
      </td>
    </tr>

    <tr>
      <td>
        5
      </td>

      <td>
        O monitoramento do Browser foi desabilitado no lado do coletor. Por exemplo, o coletor não retornou dados suficientes para que o monitoramento do Browser fosse habilitado. Este é um problema de coletor, porque [algumas configurações no lado do servidor](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#methods-and-precedence) para Node.js não estão disponíveis atualmente.
      </td>
    </tr>
  </tbody>
</table>
