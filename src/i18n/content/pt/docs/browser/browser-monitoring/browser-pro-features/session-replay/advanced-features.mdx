---
title: Recurso avançado
metaDescription: 'Manually record session replays, disable automatic session replay tracking and use nerd graph to configure replay settings.'
freshnessValidatedDate: '2024-12-19T00:00:00.000Z'
translationType: machine
---

## Gravar manualmente a repetição da sessão [#manual-replays]

Se necessário, você pode `force` programaticamente uma Session Replay para iniciar ou interromper a gravação usando métodos API . Aqui estão alguns casos de uso:

* Permitir que o usuário opte pela gravação de interação. Por exemplo, se você tiver um pop-up perguntando “Permitir que esta sessão seja gravada para análise de desempenho?” e um usuário consente:

  1. Ligue para `newrelic.recordReplay()` para iniciar a gravação.
  2. Após a conclusão da sessão ou a retirada do consentimento, use `newrelic.pauseReplay()` para interromper a captura de dados.

* Grave sessões com base em critérios específicos, como:

  * Comece a gravar apenas sessões em URLs específicos, como um fluxo de checkout de produto.
  * Interrompa a gravação de páginas confidenciais, como `/billing` ou `/health-records`.

Consulte a documentação da API para obter instruções:

* [`newrelic.recordReplay`](/docs/browser/new-relic-browser/browser-apis/recordReplay/)
* [`newrelic.pauseReplay`](/docs/browser/new-relic-browser/browser-apis/pauseReplay/)

## Desativar rastreamento automático Session Replay [#auto-replays]

Você pode impedir que a repetição da sessão seja iniciada automaticamente, mesmo quando amostrada, definindo a opção de configuração API `autoStart` como `false`. Isto é útil em cenários onde você precisa priorizar ações específicas em vez de amostragem automática. Por exemplo, você pode não querer que o Session Replay seja executado automaticamente em páginas confidenciais, como as compatíveis com HIPAA. Nesses casos, você pode usar a API `.start()` para acionar manualmente o recurso de reprodução depois que o consentimento do usuário for obtido (e seu aplicativo chamar `.start()`)

A configuração `autoStart: false` instrui o agente a adiar sua inicialização até que seja explicitamente chamado usando `.start()`. Isso garante que o Session Replay não será criado, mesmo que o backend faça uma amostragem do seu aplicativo para gravação.

<Callout variant="important">
  Chamar `.start()` não garante que uma repetição da sessão será gravada. Ele simplesmente atrasa a importação do módulo e a avaliação dos resultados da amostragem até esse ponto. Se você precisar forçar uma gravação, consulte [Gravar manualmente o Session Replay](#manual-replays).
</Callout>

Para começar a usar esta API, consulte [`newrelic.start`](/docs/browser/new-relic-browser/browser-apis/start/).

## Use o Nerdgraph para definir as configurações de reprodução [#nerdgraph-mutation]

Você pode definir as configurações Session Replay usando nossa [API NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) em vez de usar a interface. Este método é útil se você precisar fazer alterações em massa, como aplicar taxas de amostragem a múltiplas entidades do browser.

Aqui está um exemplo de mutação e variáveis para criar um novo aplicativo de browser com configurações padrão:

<table>
  <thead>
    <tr>
      <th>
        Mutação
      </th>

      <th>
        Variáveis
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        ```graphql
        mutation SessionReplayConfigUpdate($guid: EntityGuid!, $settings: AgentApplicationSettingsUpdateInput!) {
          agentApplicationSettingsUpdate(guid: $guid, settings: $settings) {
            browserSettings {
              sessionReplay {
                blockSelector
                errorSamplingRate
                maskTextSelector
                enabled
                collectFonts
                inlineImages
                inlineStylesheet
                samplingRate
                maskAllInputs
                maskInputOptions {
                  color
                  date
                  datetimeLocal
                  email
                  month
                  number
                  range
                  search
                  select
                  tel
                  text
                  textArea
                  time
                  url
                  week
                }
              }
            }
            errors {
              field
              errorClass
              description
            }
          }
        }
        ```
      </td>

      <td>
        ```json
        {
          "sessionReplay": {
            "enabled": true,
            "collectFonts": true,
            "blockSelector": ".private-fields",
            "maskTextSelector": "*",
            "inlineStylesheet": false,
            "maskAllInputs": true,
            "maskInputOptions": {
              "color": true,
              "date": true,
              "textArea": true
            },
            "samplingRate": 9.99,
            "errorSamplingRate": 1.11
          }
        }
        ```
      </td>
    </tr>
  </tbody>
</table>