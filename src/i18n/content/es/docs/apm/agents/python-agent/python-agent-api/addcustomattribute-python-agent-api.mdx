---
title: add_custom_attribute (API del agente Python)
type: apiDoc
shortDescription: Agrega un atributo personalizado a una transacción.
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
newrelic.agent.add_custom_attribute(key, value)
```

Agrega un [atributo personalizado](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/) a una transacción.

## Descripción

Esta llamada registra un [atributo personalizado](/docs/new-relic-solutions/get-started/glossary/#attribute) (un par de valor principal adjunto a su [transacción](/docs/new-relic-solutions/get-started/glossary/#transaction)).

El atributo se puede encontrar en APM si la transacción está asociada con un error o si se genera una traza de la transacción para esa transacción. El atributo también se puede encontrar y consultar en la UI de New Relic.

<Callout variant="important">
  Antes de crear un atributo personalizado, revise nuestra lista de [términos reservados utilizados por NRQL](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
</Callout>

## Atributo

<table>
  <thead>
    <tr>
      <th width="25%">
        Atributo
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
        Requerido. El valor de cadena que se agregará a la transacción actual. Sólo se conservan los primeros 255 caracteres.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve `True` si el atributo se agregó correctamente. 

## Ejemplos

### Agregar atributo personalizado a la tarea en segundo plano [#custom-attribute-example]

Un ejemplo de cómo agregar un atributo personalizado a una [tarea en segundo plano](/docs/agents/python-agent/python-agent-api/background_task):

```py
@newrelic.agent.background_task()
def send_request(): 
    response = requests.post('http://URL_path', headers=headers, data=data) 
    newrelic.agent.add_custom_attribute('url_path_status_code', response.status_code)
```

### Uso de atributo personalizado para solucionar problemas [#attribute-troubleshooting]

También puede utilizar el atributo personalizado para solucionar problemas de rendimiento. Por ejemplo, es posible que ocasionalmente veas un tiempo de respuesta lento en un grupo de instancias de Memcache, pero no sabes qué instancia está causando el problema. Podrías agregar un atributo a la transacción que indique el servidor, así:

```py
# Set server_ip to be the current server processing the transaction

newrelic.agent.add_custom_attribute("memcache_query_frontend_lookup", server_ip)
```
