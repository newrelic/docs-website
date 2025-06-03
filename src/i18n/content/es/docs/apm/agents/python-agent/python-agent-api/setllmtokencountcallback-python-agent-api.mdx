---
title: set_llm_token_count_callback (API del agente Python)
type: apiDoc
shortDescription: Registra una devolución de llamada para calcular el recuento token LLM
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call registers a callback to calculate LLM token counts'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis [#syntax]

```py
    newrelic.agent.set_llm_token_count_callback(callback, application=None)
```

Registra una función de devolución de llamada que se utilizará para calcular el recuento token en el evento de modelo de lenguaje extenso (LLM).

## Requisitos [#requirements]

Agente Python versión 9.8.0 o superior.

## Descripción [#description]

Esta API registra una devolución de llamada para calcular y almacenar recuentos token en los eventos `LlmEmbedding` y `LlmChatCompletionMessage`.

* Esta función debe usarse cuando `ai_monitoring.record_content.enabled` está configurado en `false`. Esta configuración evita que el agente envíe contenido de IA al servidor New Relic , donde los recuentos token se adjuntan en el lado del servidor.
* Si aún desea capturar los recuentos token para el evento LLM, puede implementar una devolución de llamada en el código de su aplicación para determinar los recuentos token localmente y enviar esta información a New Relic.

En la mayoría de los casos, esta API se llamará exactamente una vez, pero puede realizar varias llamadas a esta API. Cada nueva llamada realizada al extremo sobrescribe la devolución de llamada previamente registrada con la nueva que se proporciona. Para desarmar la devolución de llamada por completo, pase `None` en lugar de la devolución de llamada original.

## Parámetro API [#api-parameters]

<table>
  <thead>
    <tr>
      <th width="25%">
        Parámetro
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `callback`

        _invocable_ o _Ninguno_
      </td>

      <td>
        Requerido. La devolución de llamada para calcular el recuento token . Para desarmar la devolución de llamada actual, pase `None` en lugar de una función de devolución de llamada.
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _objeto_
      </td>

      <td>
        Opcional. El objeto de aplicación específico con el que asociar la llamada API. Se puede obtener un objeto de aplicación utilizando la función [`newrelic.agent.application`](/docs/apm/agents/python-agent/python-agent-api/application-python-agent-api/) .
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno [#return-values]

Ninguno.

## Requisitos de devolución de llamada [#callback-requirements]

La devolución de llamada proporcionada debe devolver un valor de recuento token entero positivo o no se capturará ningún recuento token en el evento LLM.

## Parámetro de devolución de llamada [#callback-parameters]

<table>
  <thead>
    <tr>
      <th width="25%">
        Parámetro
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `model`

        _cadena_
      </td>

      <td>
        Requerido. El nombre del modelo LLM.
      </td>
    </tr>

    <tr>
      <td>
        `content`

        _cadena_
      </td>

      <td>
        Requerido. El contenido del mensaje/símbolo o entrada incrustada.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos [#examples]

### Calcular el recuento token y registrar la devolución de llamada

Ejemplo con tiktoken:

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

Ejemplo de uso de API con un objeto de aplicación pasado:

```py
    application = newrelic.agent.register_application(timeout=10.0)
    newrelic.agent.set_llm_token_count_callback(token_count_callback, application)
```
