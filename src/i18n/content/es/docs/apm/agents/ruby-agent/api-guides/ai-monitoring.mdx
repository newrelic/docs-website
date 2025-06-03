---
title: API de monitoreo de IA
tags:
  - Agents
  - Ruby agent
  - API guides
metaDescription: For information about customizing New Relic's Ruby agent for AI monitoring.
freshnessValidatedDate: never
translationType: machine
---

Cuando haya instrumentado su aplicación para monitoreo de IA, el agente New Relic Ruby recopila automáticamente muchas métricas de IA, pero también proporciona API para recopilar información sobre el recuento token y los comentarios de los usuarios.

<Callout variant="tip">
  Las API de monitoreo de IA están disponibles en la versión 9.8.0 y superior del agente Ruby.
</Callout>

## Recuento token [#token-count]

Puede configurar un proceso de devolución de llamada para calcular el atributo `token_count` para los eventos LlmEmbedding y LlmChatCompletionMessage y luego pasar esa información a New Relic usando la API `NewRelic::Agent.set_llm_token_count_callback`.

Esta API debe llamarse solo una vez para configurar una devolución de llamada para usar con todos los cálculos del token LLM. Si se llama varias veces, cada nueva devolución de llamada reemplazará a la anterior. El proceso se llamará con un único hash como argumento de entrada y debe devolver un número entero que represente el número de token utilizado para ese símbolo, mensaje de finalización o incrustación en particular. Los valores menores o iguales a 0 no se adjuntarán a un evento.

El hash tiene las siguientes claves:

* `:model` (Cadena): el nombre del modelo LLM.
* `:content` (Cadena) - El contenido del mensaje o símbolo.

El siguiente código de ejemplo demuestra cómo configurar una devolución de llamada que calcula el recuento token y pasar esa devolución de llamada a `NewRelic::Agent.set_llm_token_count_callback`.

```rb
    require 'tiktoken_ruby' # Example library for counting GPT model tokens used

    token_count_callback = proc do |hash|
      return unless hash[:model].includes?('gpt')
  
      enc = Tiktoken.encoding_for_model(hash[:model])
      enc.encode(hash[:content]).length
    end

    NewRelic::Agent.set_llm_token_count_callback(token_count_callback)
```

## Comentarios de los usuarios [#user-feedback]

Monitoreo de IA puede correlacionar los ID de traza entre un mensaje generado por su IA y la retroalimentación del mensaje de un usuario final usando `NewRelic::Agent.record_llm_feedback_event`.

`NewRelic::Agent.record_llm_feedback_event` acepta los siguientes argumentos:

* `trace_id` (obligatorio) - ID de la traza donde se produjo la finalización del chat relacionado con los comentarios
* `rating` (obligatorio): calificación proporcionada por un usuario final (por ejemplo: "Bueno", "Malo", 1, 2, 5, 8, 10).
* `category` (opcional) - Categoría de los comentarios proporcionados por el usuario final (por ejemplo: "informativo", "inexacto")
* `message` (opcional): comentarios de texto de formato libre de un usuario final
* `metadata` (opcional): conjunto de pares de valores principales para almacenar cualquier otro dato deseado para enviar con el evento de retroalimentación.

Esta API requiere el `trace_id` actual para correlacionar mensajes con comentarios, que se pueden obtener usando [NewRelic::agente::rastreador.current_trace_id](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/Tracer#current_trace_id-class_method).

El siguiente código de ejemplo utiliza una aplicación Sinatra para demostrar la recopilación de los comentarios del usuario requeridos y la traza de una transacción actual (junto con el parámetro opcional de esta API) y luego pasar esos parámetros a `NewRelic::Agent.record_llm_feedback_event`.

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
