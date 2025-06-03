---
title: set_llm_token_count_callback (API do agente Python)
type: apiDoc
shortDescription: Registra um retorno de chamada para calcular contagens token LLM
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call registers a callback to calculate LLM token counts'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe [#syntax]

```py
    newrelic.agent.set_llm_token_count_callback(callback, application=None)
```

Registra uma função de retorno de chamada que será utilizada para calcular contagens token em eventos de grande modelo de linguagem (LLM).

## Requisitos [#requirements]

Agente Python versão 9.8.0 ou superior.

## Descrição [#description]

Esta API registra um retorno de chamada para calcular e armazenar contagens token em eventos `LlmEmbedding` e `LlmChatCompletionMessage`.

* Esta função deve ser usada quando `ai_monitoring.record_content.enabled` estiver definido como `false`. Essa configuração evita que o agente envie conteúdo de IA para o servidor New Relic, onde as contagens de token estão anexadas no lado do servidor.
* Se ainda quiser capturar contagens token para o evento LLM, você pode implementar um retorno de chamada no código do seu aplicativo para determinar as contagens token localmente e enviar essas informações para New Relic.

Na maioria dos casos, esta API será chamada exatamente uma vez, mas você pode fazer várias chamadas para esta API. Cada nova chamada feita ao endpoint substitui o retorno de chamada registrado anteriormente pelo novo fornecido. Para cancelar completamente o retorno de chamada, passe `None` no lugar do retorno de chamada original.

## Parâmetro API [#api-parameters]

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `callback`

        _chamável_ ou _Nenhum_
      </td>

      <td>
        Obrigatório. O retorno de chamada para calcular contagens token . Para cancelar a definição do retorno de chamada atual, passe `None` em vez de uma função de retorno de chamada.
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _objeto_
      </td>

      <td>
        Opcional. O objeto de aplicativo específico ao qual associar a chamada de API. Um objeto de aplicativo pode ser obtido usando a função [`newrelic.agent.application`](/docs/apm/agents/python-agent/python-agent-api/application-python-agent-api/) .
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno [#return-values]

Nenhum.

## Requisitos de retorno de chamada [#callback-requirements]

O retorno de chamada fornecido deve retornar um valor de contagem token inteiro positivo ou nenhuma contagem token será capturada no evento LLM.

## Parâmetro de retorno de chamada [#callback-parameters]

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `model`

        _corda_
      </td>

      <td>
        Obrigatório. O nome do modelo LLM.
      </td>
    </tr>

    <tr>
      <td>
        `content`

        _corda_
      </td>

      <td>
        Obrigatório. O conteúdo/prompt da mensagem ou entrada de incorporação.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos [#examples]

### Calculando contagens token e registrando o retorno de chamada

Exemplo com tiktoken:

```py
import newrelic.agent
def token_count_callback(model, content):
    """
    Calculate token counts locally based on the model being used and the content.
    This callback will be invoked for each message sent or received during a LLM call.
    If the application supports more than one model, it may require finding libraries for
    each model to support token counts appropriately.

    Arguments:
    model -- name of the LLM model
    content -- the LLM message content
    """
    import tiktoken

    try:
        enc = tiktoken.encoding_for_model(model)
    except KeyError:
        return None # Unknown model
    return len(enc.encode(content))

newrelic.agent.set_llm_token_count_callback(token_count_callback)
```

Exemplo de uso de API com um objeto de aplicativo passado:

```py
    application = newrelic.agent.register_application(timeout=10.0)
    newrelic.agent.set_llm_token_count_callback(token_count_callback, application)
```
