---
title: Ejemplos de atributos de Python
tags:
  - Agents
  - Python agent
  - Attributes
metaDescription: Examples of using attributes with the Python agent.
freshnessValidatedDate: never
translationType: machine
---

A continuación se muestran algunos ejemplos del uso [de atributos](/docs/agents/python-agent/attributes/python-agent-attributes) con el agente Python.

## Parámetro de solicitud de captura [#ex_req_params]

El parámetro de solicitud de captura no está habilitado de forma predeterminada. La siguiente configuración activará la captura de parámetros para los destinos predeterminados: `transaction_tracer`, `transaction_events` y `error_collector`. Para limitar los destinos, consulte el [ejemplo Selección de destinos específicos](#ex_select_dest).

<DNT>
  **Configuration:**
</DNT>

```ini
attributes.include = request.parameters.*
```

## Capturar solo un parámetro de solicitud específico [#ex_req_params_exclude]

Para capturar solo un parámetro de solicitud específico, simplemente puede pasar una lista a `attributes.include`:

<DNT>**Configuration**</DNT>:

```ini
attributes.include = request.parameters.user_id request.parameters.product_id
```

## Deshabilitar todos los atributos [#ex_disable_all]

En este ejemplo, los atributos están deshabilitados, por lo que las listas de inclusión y exclusión se ignorarán y todos los atributos se filtrarán.

<DNT>
  **Configuration:**
</DNT>

```ini
attributes.enabled = false
attributes.include = request.parameters.*
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
error_collector:    none
transaction_events: none
browser_monitoring: none
```

## Seleccione destinos específicos [#ex_select_dest]

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
attributes.enabled = true
transaction_tracer.attributes.enabled = false
attributes.exclude = foo
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
error_collector:    bar
transaction_events: bar
browser_monitoring: none
```

## Seleccionar valores y destinos [#ex_select_values_and_dest]

En este ejemplo, se seleccionan claves de entrada específicas para ciertos destinos de salida y se excluyen de otros.

* La clave `food.fruit.banana` se excluirá únicamente de la traza de la transacción.
* Las claves `food` y `food.bread` se excluirán de todos los destinos.

<DNT>
  **Configuration:**
</DNT>

```ini
browser_monitoring.attributes.enabled = true
attributes.exclude = food*
attributes.include = food.fruit.*
transaction_tracer.attributes.exclude = food.fruit.banana
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
error_collector:    food.fruit.banana, food.fruit.apple
transaction_events: food.fruit.banana, food.fruit.apple
browser_monitoring: food.fruit.banana, food.fruit.apple
```
