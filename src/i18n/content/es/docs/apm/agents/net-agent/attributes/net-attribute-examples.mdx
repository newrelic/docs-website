---
title: Ejemplos de atributos .NET
tags:
  - Agents
  - NET agent
  - Attributes
metaDescription: Examples of using attributes with the New Relic .NET agent.
freshnessValidatedDate: never
translationType: machine
---

A continuación se muestran ejemplos del uso de atributos con el agente New Relic .NET.

## Deshabilitar todos los atributos [#example1]

En este ejemplo, los atributos están deshabilitados. Las listas `include` y `exclude` se ignorarán y se filtrarán todos los atributos.

<DNT>
  **Configuration:**
</DNT>

```xml
<attributes enabled="false" />
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

```yml
transaction_tracer: none
error_collector: none
transaction_events: none
browser_monitoring: none
```

## Seleccione destinos específicos [#example2]

En este ejemplo:

* El atributo está deshabilitado para la traza de la transacción. Las listas `include` y `exclude` se ignorarán y todos los atributos se filtrarán para este destino.

* Los atributos están deshabilitados para

  <InlinePopover type="browser"/>

  de forma predeterminada.

* El parámetro de solicitud (con el prefijo `request.parameters.`) está desactivado de forma predeterminada para todos los destinos.

Como resultado, solo se envía `bar` en errores de traza y evento de transacción.

<DNT>
  **Configuration:**
</DNT>

```xml
<attributes enabled="true">
  <exclude>foo</exclude>
</attributes>
<transactionTracer>
  <attributes enabled="false" />
</transactionTracer>
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

```yml
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

```xml
<attributes enabled="true">
  <exclude>food*</exclude>
  <include>food.fruit.*</include>
</attributes>
<transactionTracer>
  <attributes enabled="true">
    <exclude>food.fruit.banana</exclude>
  </attributes>
</transactionTracer>
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

```yml
transaction_tracer: food.fruit.apple
error_collector: food.fruit.banana, food.fruit.apple
transaction_events: food.fruit.banana, food.fruit.apple
browser_monitoring: food.fruit.banana, food.fruit.apple
```

## Emulando el comportamiento de los atributos del lado del servidor legacy [#emulating]

En este ejemplo, el agente recopila los parámetros de solicitud y los registra en los destinos del rastreador de transacciones y del recolector de errores. Esto emula la habilitación de la configuración legacy [del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) para las opciones `Capture attributes` o `Capture parameters`. Personalice los siguientes [`<attributes>`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#agent-attributes) elementos en su archivo de configuración del agente .NET:

```xml
<transactionTracer>
  <attributes>
    <include>request.parameters*</include>
  </attributes>
</transactionTracer>

<errorCollector>
  <attributes>
    <include>request.parameters*</include>
  </attributes>
</errorCollector>
```
