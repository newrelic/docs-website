---
title: suppress_transaction_trace (API del agente Python)
type: apiDoc
shortDescription: Evita que la transacción actual genere una traza de la transacción.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call prevents a transaction from producing a transaction trace.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.suppress_transaction_trace(flag=True)
```

Evita que la transacción actual genere una traza de la transacción.

## Descripción

Esta llamada evita que la transacción actual produzca una [traza de la transacción](/docs/apm/transactions/transaction-traces/introduction-transaction-traces).

Puede usar esto si tiene una transacción recurrente de larga duración de la cual rara vez desea ver una traza de la transacción. Sin embargo, nuestro algoritmo para seleccionar la traza de la transacción ya resta prioridad a las trazas de las transacciones que han generado una traza recientemente. Por lo tanto, esta llamada normalmente no es necesaria.

Para cancelar la supresión de una transacción previamente suprimida, deberá utilizar `flag=False`.

<Callout variant="tip">
  También puede evitar que una transacción produzca una traza con un diccionario ambiental WSGI. Para hacerlo, configure la clave `newrelic.suppress_transaction_trace` para la solicitud específica en el diccionario de entorno WSGI pasado por el servidor WSGI a la aplicación WSGI que se está monitoreando.
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
        `flag`

        _booleano_
      </td>

      <td>
        Opcional. El valor predeterminado es `True`. Si previamente se ha bloqueado una transacción para que no produzca una traza, puede cancelar su supresión estableciendo el indicador en `False`.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Ninguno.

## Ejemplos

### Suprimir traza de la transacción [#trace-example]

En este ejemplo, tiene algunas URL o vistas donde sus clientes suelen cargar archivos. Estas transacciones frecuentemente lentas generan trazas de la transacción con más frecuencia de lo que es útil, y le gustaría deshabilitar las trazas de la transacción en estas para recibir una traza más relevante.

Para deshabilitar la traza para estas transacciones, ejecute lo siguiente donde se esté ejecutando la transacción:

```py
import newrelic.agent
newrelic.agent.suppress_transaction_trace()
```
