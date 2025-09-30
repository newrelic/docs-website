---
title: AI Monitoring API
tags:
  - Agents
  - Ruby agent
  - API guides
metaDescription: For information about customizing New Relic's Ruby agent for AI monitoring.
freshnessValidatedDate: never
translationType: machine
---

Quando você instrumenta seu aplicativo para AI Monitoring, o agente New Relic Ruby coleta automaticamente muitas métricas de IA, mas também fornece API para coletar informações sobre contagem token e feedback do usuário.

<Callout variant="tip">
  AI Monitoring API está disponível no Ruby agente versão 9.8.0 e superior.
</Callout>

## Contagem token [#token-count]

Você pode definir um processo de retorno de chamada para calcular o atributo `token_count` para o evento LlmEmbedding e LlmChatCompletionMessage e depois passar essas informações para o New Relic usando a API `NewRelic::Agent.set_llm_token_count_callback` .

Esta API deve ser chamada apenas uma vez para definir um retorno de chamada para uso com todos os cálculos de token LLM. Se for chamado várias vezes, cada novo retorno de chamada substituirá o antigo. O proc será chamado com um único hash aplicar como argumento de entrada e deve retornar um número inteiro representando o número de token usado para aquele prompt, mensagem de conclusão ou incorporação específico. Valores menores ou iguais a 0 não serão anexados a um evento.

O hash aplicar possui as seguintes chaves:

* `:model` (String) - O nome do modelo LLM
* `:content` (String) – O conteúdo ou prompt da mensagem

O código de exemplo a seguir demonstra a configuração de um retorno de chamada que calcula a contagem token e a transmissão desse retorno de chamada para `NewRelic::Agent.set_llm_token_count_callback`.

```rb
    require 'tiktoken_ruby' # Example library for counting GPT model tokens used

    token_count_callback = proc do |hash|
      return unless hash[:model].includes?('gpt')
  
      enc = Tiktoken.encoding_for_model(hash[:model])
      enc.encode(hash[:content]).length
    end

    NewRelic::Agent.set_llm_token_count_callback(token_count_callback)
```

## Feedback do usuário [#user-feedback]

AI Monitoring pode correlacionar IDs trace entre uma mensagem gerada pela sua IA e o feedback da mensagem de um usuário final usando `NewRelic::Agent.record_llm_feedback_event`.

`NewRelic::Agent.record_llm_feedback_event` aceita os seguintes argumentos:

* `trace_id` (obrigatório) - ID do trace onde ocorreram as conclusões do chat relacionadas ao feedback
* `rating` (obrigatório) - Classificação fornecida por um usuário final (ex: 'Bom', 'Ruim', 1, 2, 5, 8, 10)
* `category` (opcional) - Categoria do feedback fornecido pelo usuário final (ex: “informativo”, “impreciso”)
* `message` (opcional) – Feedback em texto livre de um usuário final
* `metadata` (opcional) - Conjunto de pares de valores principais para armazenar quaisquer outros dados desejados para enviar com o evento de feedback

Esta API requer o `trace_id` atual para correlacionar mensagens com feedback, que pode ser obtido usando [NewRelic::agente::tracer.current_trace_id](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/Tracer#current_trace_id-class_method).

O código de exemplo a seguir usa um aplicativo Sinatra para demonstrar a coleta do feedback e rastreamento necessários do usuário de uma transação atual (juntamente com o parâmetro opcional desta API) e, em seguida, passar esses parâmetros para `NewRelic::Agent.record_llm_feedback_event`.

```rb
responses = {}

get '/chat-completion' do
    @response_message = client.chat(
        parameters: {
        model: 'gpt-3.5-turbo',
        messages: [ 
            {'role': 'system', 'content': 'You are a helpful assistant.'},
        ],
        temperature: 0.7,
        }
    )

    # trace_id must be obtained within the current transaction
    trace_id = NewRelic::Agent::Tracer.current_trace_id
    responses[@response_message.id] = trace_id

    render(@response_message)
end

post '/feedback' do
    trace_id = responses[@response_message.id]
    rating = 1
    category = 'feedback-test'
    message = 'Good talk'
    metadata = {user: 'new'}

    halt(404) if !responses[@response_message.id]

    NewRelic::Agent.record_llm_feedback_event(
        trace_id: responses[@response_message.id],
        rating: 1,
        category: 'feedback-test',
        message: 'Good talk',
        metadata: {user: 'new'}
    )

    render('Feedback Recorded')
end
```
