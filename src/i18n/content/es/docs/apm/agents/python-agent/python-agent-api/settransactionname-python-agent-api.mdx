---
title: set_transaction_name (API del agente Python)
type: apiDoc
shortDescription: Establece el nombre de la transacción actual.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python agent API: This call sets the name of the current transaction.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.set_transaction_name(name, group=None, priority=None)
```

Establece el nombre de la transacción actual.

## Descripción

Esta llamada establece el nombre de la transacción actual.

A continuación se muestra un ejemplo que muestra una forma de implementar los parámetros `name` y `group` :

```py
name = '%s/%s' % (controller, function)
group = 'Python/WebFramework/Controller'newrelic.agent.set_transaction_name(name, group)
```

El parámetro de prioridad generalmente se puede ignorar a menos que esté implementando instrumentación personalizada para un framework web donde puede haber varios puntos donde desee establecer el nombre (como middleware, controladores de vistas o controladores de errores).

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
        `name`

        _cadena_
      </td>

      <td>
        Requerido. Nombre deseado para la transacción actual. Consulte la [descripción](#description) para ver un ejemplo de cómo configurar el nombre.
      </td>
    </tr>

    <tr>
      <td>
        `group`

        _cadena_
      </td>

      <td>
        Opcional. El `group` representa la estructura de nombres para el parámetro `name`, que se utiliza para establecer el [tipo de transacción](/docs/apm/applications-menu/monitoring/transactions-page#tx_functions) en la UI. Consulte la [descripción](#description) para ver un ejemplo de cómo configurar el grupo.

        Si no se proporciona, el grupo utilizará de forma predeterminada el nombre `Function` con la expectativa de que el nombre tenga la forma `module:class.function` o `module:function` y represente el nombre de la función que se está ejecutando. Si está creando un grupo personalizado, le recomendamos que le ponga el prefijo `Python/`.

        La estructura de nombres utilizada para nombrar la transacción. Como este valor se representa como parte de una URL, se debe evitar la codificación que no sea ASCII. El valor predeterminado es `Function`. Consulte [la descripción](#description) para obtener más información sobre su uso.
      </td>
    </tr>

    <tr>
      <td>
        `priority`

        _En t_
      </td>

      <td>
        Opcional. El valor de prioridad se utiliza para determinar qué nombre se le da a una transacción. Los números más altos anulan los números más bajos. El valor predeterminado es `None`, lo que significa que el nombre de la transacción anula cualquier valor existente. Si la prioridad se deja como `None`, el nuevo nombre siempre anula cualquier valor existente. A continuación se muestra un ejemplo de cómo funciona la prioridad:

        ```py
        newrelic.agent.set_transaction_name('first', 'Python/CustomGroup')
        # transaction name becomes 'first'.

        newrelic.agent.set_transaction_name('second', 'Python/CustomGroup', priority=10)
        # transaction name becomes 'second'. The priority becomes 10.

        newrelic.agent.set_transaction_name('third', 'Python/CustomGroup', priority=5)
        # transaction name is still 'second' because 5 < 10.

        newrelic.agent.set_transaction_name('fourth', 'Python/CustomGroup', priority=15)
        # transaction name becomes 'fourth' because 15 > 10. The priority becomes 15.

        newrelic.agent.set_transaction_name('fifth', 'Python/CustomGroup')
        # transaction name becomes 'fifth'. The priority remains 15.
        ```
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Ninguno.

## Ejemplos

### Usando el parámetro de nombre y grupo [#name-group-example]

Un ejemplo que muestra una forma de implementar los parámetros `name` y `group` :

```py
name = '%s/%s' % (controller, function) 
group = 'Python/WebFramework/Controller'

newrelic.agent.set_transaction_name(name, group)
```

### Nombre de configuración usando current_transaction [#current-txn-example]

Un ejemplo del uso `current_transaction` para establecer el nombre de la transacción actual:

```py
transaction = newrelic.agent.current_transaction()
new_transaction_name = transaction.name
newrelic.agent.set_transaction_name(new_transaction_name)
```
