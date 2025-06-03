---
title: add_custom_span_attribute (API del agente Python)
type: apiDoc
shortDescription: Agrega un atributo personalizado a un evento de intervalo.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call adds a custom attribute (key/value pair) to a transaction.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.add_custom_span_attribute(key, value)
```

Agrega un atributo personalizado a un evento de intervalo.

## Descripción

Esta llamada registra un [atributo personalizado](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute) (un par principal de valor adjunto a su [evento de intervalo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#span)).

El atributo se puede encontrar en rastreo distribuido o en APM si la transacción principal crea una traza de la transacción. El atributo también se puede [encontrar y consultar](/docs/query-your-data/explore-query-data/explore-data/introduction-querying-new-relic-data) en la UI de New Relic.

<Callout variant="important">
  Antes de crear un atributo personalizado, revise nuestra lista de [términos reservados utilizados por NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
</Callout>

## Parámetros

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
        `key`

        _cadena_
      </td>

      <td>
        Requerido. El nombre clave. Sólo se conservan los primeros 255 caracteres.
      </td>
    </tr>

    <tr>
      <td>
        `value`

        _cadena_, _entero_, _flotante_, _booleano_
      </td>

      <td>
        Requerido. El valor de cadena que se agregará al evento de intervalo actual. Sólo se conservan los primeros 255 caracteres.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve `True` si el atributo se agregó correctamente. 

## Ejemplos

### Agregar atributo personalizado a la tarea en segundo plano [#custom-parameter-example]

Un ejemplo de cómo agregar un atributo personalizado a una [tarea en segundo plano](/docs/agents/python-agent/python-agent-api/background_task):

```py
@newrelic.agent.background_task()
def send_request():
    with newrelic.agent.FunctionTrace(name='Trace'):
        newrelic.agent.add_custom_span_attribute('attribute', 'value')
```

### Uso del atributo de intervalo personalizado para solucionar problemas [#parameter-troubleshooting]

También puede utilizar el atributo personalizado para solucionar problemas de rendimiento. Por ejemplo, es posible que ocasionalmente veas un tiempo de respuesta lento en un grupo de instancias de Memcache, pero no sabes qué instancia está causando el problema. Podrías agregar un atributo al intervalo que indique el servidor, así:

```py
# Set server_ip to be the current server processing the transaction

newrelic.agent.add_custom_span_attribute("memcache_query_frontend_lookup", server_ip)
```
