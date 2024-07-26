---
title: add_custom_attributes (API del agente Python)
type: apiDoc
shortDescription: Agrega uno o más atributos personalizados a una transacción.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call adds a custom attribute (key/value tuple) to a transaction.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.add_custom_attributes(items)
```

Agrega múltiples atributos personalizados a una transacción.

## Descripción

Esta llamada registra uno o más [atributos personalizados](/docs/new-relic-solutions/get-started/glossary/#attribute) (una tupla de valor principal adjunta a su [transacción](/docs/new-relic-solutions/get-started/glossary/#transaction)).

El atributo se puede encontrar en APM si la transacción está asociada con un error o si se genera una traza de la transacción para esa transacción. El atributo también se puede encontrar y consultar en la UI de New Relic.

<Callout variant="important">
  Antes de crear un atributo personalizado, revise nuestra lista de [términos reservados utilizados por NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
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
        `items`

        _lista_
      </td>

      <td>
        Requerido. Cada elemento de la lista debe ser un `tuple`, siendo el primer elemento una _clave_ y el segundo su _valor_. Cada clave es una cadena que representa el nombre de un atributo y cada valor correspondiente es el valor que se agregará a la transacción actual para este atributo. Los valores pueden ser `int`, `float`, `string` o `boolean`. Solo se conservan los primeros 255 caracteres tanto para las claves como para los valores.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve `True` si todos los atributos se agregaron correctamente.

## Ejemplos

### Agregar atributo personalizado a la tarea en segundo plano [#custom-attribute-example]

Un ejemplo de cómo agregar un atributo personalizado a una [tarea en segundo plano](/docs/agents/python-agent/python-agent-api/background_task):

```py
@newrelic.agent.background_task()
def send_request():
    response = requests.get("http://example.com")
    newrelic.agent.add_custom_attributes(
        [("url_path_status_code", response.status_code)]
    )
```

### Uso de atributo personalizado para solucionar problemas [#attribute-troubleshooting]

También puede utilizar el atributo personalizado para solucionar problemas de rendimiento. Por ejemplo, es posible que ocasionalmente veas un tiempo de respuesta lento en un grupo de instancias de Memcache, pero no sabes qué instancia está causando el problema. Podrías agregar un atributo a la transacción que indique el servidor, así:

```py
# Set server_ip to be the current server processing the transaction
newrelic.agent.add_custom_attributes([
    ("memcache_query_frontend_lookup", server_ip)
])
```
