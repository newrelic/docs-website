---
title: Ejemplos de atributos
tags:
  - Agents
  - PHP agent
  - Attributes
metaDescription: Examples of using attributes for the New Relic PHP agent.
freshnessValidatedDate: never
translationType: machine
---

A continuación se muestran algunos ejemplos del uso de atributos con el agente PHP New Relic. Para utilizar estas configuraciones:

1. Modifique su archivo `newrelic.ini` según corresponda.
2. Reinicie el agente y su daemon para que los cambios surtan efecto.

## Parámetro de solicitud de captura [#ex_req_params]

De forma predeterminada, el agente no captura el parámetro de solicitud.

Puede utilizar la siguiente configuración para activar la captura de parámetros para estos destinos predeterminados: `transaction_tracer`, `transaction_events` y `error_collector`. Si desea limitar los destinos para los que captura el parámetro, consulte [Seleccionar destinos específicos](#example2).

<DNT>
  **Configuration:**
</DNT>

```ini
newrelic.attributes.include = request.parameters.*
```

## Capturar solo un parámetro de solicitud específico [#ex_req_params_exclude]

Para capturar solo un parámetro de solicitud específico, puede pasar una lista a `attributes.include`:

<DNT>**Configuration**</DNT>:

```ini
newrelic.attributes.include = request.parameters.user_id request.parameters.product_id
```

## Deshabilitar todos los atributos [#example1]

En este ejemplo, los atributos están deshabilitados, por lo que las listas de inclusión y exclusión se ignorarán y todos los atributos se filtrarán.

<DNT>
  **Configuration:**
</DNT>

```ini
newrelic.attributes.enabled = false
newrelic.attributes.include = request.parameters.*
```

<DNT>
  **Input keys:**
</DNT>

```
foo, bar, request.parameters.foo, request.parameters.bar
```

<DNT>
  **Output for destinations:**
</DNT>

```
transaction_tracer: none
error_collector: none
transaction_events: none
browser_monitoring: none
```

## Seleccionar destinos específicos [#example2]

En este ejemplo:

* El atributo está deshabilitado para la traza de la transacción. Las listas de inclusión y exclusión se ignorarán y todos los atributos se filtrarán para este destino.

* Los atributos también están deshabilitados para

  <InlinePopover type="browser"/>

  de forma predeterminada.

* El parámetro de solicitud (con el prefijo `request.parameters.`) está desactivado de forma predeterminada para todos los destinos.

Como resultado, solo se envía `bar` en errores de traza y evento de transacción.

<DNT>
  **Configuration:**
</DNT>

```ini
newrelic.attributes.enabled = true
newrelic.transaction_tracer.attributes.enabled = false
newrelic.attributes.exclude = foo
```

<DNT>
  **Input keys:**
</DNT>

```
foo, bar, request.parameters.foo, request.parameters.bar
```

<DNT>
  **Output for destinations:**
</DNT>

```
transaction_tracer: none
error_collector: bar
transaction_events: bar
browser_monitoring: none
```

## Seleccionar valores y destinos [#example3]

En este ejemplo, se seleccionan claves de entrada específicas para ciertos destinos de salida y se excluyen de otros.

* La clave `food.fruit.banana` se excluirá únicamente de la traza de la transacción.
* Las claves `food` y `food.bread` se excluirán de todos los destinos.

<DNT>
  **Configuration:**
</DNT>

```ini
newrelic.browser_monitoring.attributes.enabled = true
newrelic.attributes.exclude = food*
newrelic.attributes.include = food.fruit.*
newrelic.transaction_tracer.attributes.exclude = food.fruit.banana
```

<DNT>
  **Input keys:**
</DNT>

```
food, food.bread, food.fruit.banana, food.fruit.apple
```

<DNT>
  **Output for destinations:**
</DNT>

```
transaction_tracer: food.fruit.apple
error_collector: food.fruit.banana, food.fruit.apple
transaction_events: food.fruit.banana, food.fruit.apple
browser_monitoring: food.fruit.banana, food.fruit.apple
```
