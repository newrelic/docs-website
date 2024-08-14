---
title: Ejemplos de atributos de Ruby
tags:
  - Agents
  - Ruby agent
  - Attributes
metaDescription: Examples of using attributes with the New Relic Ruby agent.
freshnessValidatedDate: never
translationType: machine
---

Este documento muestra ejemplos de cómo configurar la colección de atributos con el agente New Relic Ruby. Para obtener una lista de todas las configuraciones del agente Ruby para el atributo, consulte [Configuración del agente Ruby: atributo](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#attributes).

## Parámetro de solicitud de captura [#ex_req_params]

El parámetro de solicitud de captura no está habilitado de forma predeterminada. La siguiente configuración activará la captura de parámetros para los destinos predeterminados: `transaction_tracer`, `transaction_events` y `error_collector`. Para limitar los destinos, consulte el [ejemplo Selección de destinos específicos](#ex_select_dest).

<DNT>
  **Configuration:**
</DNT>

```
attributes.include: request.parameters.*
```

Los parámetros de solicitud tienen como prefijo la cadena `request.parameters` y los parámetros anidados tienen claves para reflejar ese anidamiento. Por ejemplo, un usuario con un atributo de ubicación anidado debajo de un perfil tendría una clave de`request.parameters.user.profile.location`.

De manera similar, los atributos que son miembros de colecciones tendrán claves con índices que reflejan la membresía. Si un usuario tuviera varios números de teléfono, las claves aparecerían de la siguiente manera: `request.parameters.phone_numbers.0`, `request.parameters.phone_numbers.1`, etc.

## Excluir datos confidenciales al capturar el parámetro de solicitud [#ex_req_params_exclude]

Puede haber situaciones en las que desee omitir información confidencial del parámetro de solicitud, como contraseñas o números de tarjetas de crédito. La siguiente configuración logrará eso:

<DNT>**Configuration**</DNT>:

```
attributes.include: request.parameters.*
attributes.exclude: [request.parameters.password, request.parameters.credit_card_no]
```

## Capturar solo un parámetro de solicitud específico [#ex_req_params_capture_specific]

Para capturar solo un parámetro de solicitud específico, simplemente puede pasar una lista a `attributes.include`:

<DNT>**Configuration**</DNT>:

```
attributes.include: [request.parameters.user_id, request.parameters.shard_id]
```

## Capturar argumentos de trabajo de Resque [#ex_resque_args]

De forma predeterminada, los argumentos del trabajo de Resque no se capturan. Para habilitar esta funcionalidad utilice la siguiente configuración.

```
attributes.include: job.resque.args.*
```

<DNT>
  **Note:**
</DNT>

Los argumentos a favor de los trabajos de Resque son posicionales y las claves generadas lo reflejan. Por ejemplo, un trabajo que toma dos argumentos tendrá las claves `job.resque.args.0` y `job.resque.args.1`

## Capturar argumentos de trabajo de Sidekiq [#ex_sidekiq_args]

De forma predeterminada, los argumentos del trabajo de Sidekiq no se capturan. Para habilitar esta funcionalidad utilice la siguiente configuración.

```
attributes.include: job.sidekiq.args.*
```

<DNT>
  **Note:**
</DNT>

Los argumentos a favor de los trabajos de Sidekiq son posicionales y las claves generadas lo reflejan. Por ejemplo, un trabajo que toma dos argumentos tendrá las claves `job.sidekiq.args.0` y `job.sidekiq.args.1`

## Deshabilitar todos los atributos [#ex_disable_all]

En este ejemplo, los atributos están deshabilitados, por lo que las listas de inclusión y exclusión se ignorarán y todos los atributos se filtrarán.

<DNT>
  **Configuration:**
</DNT>

```
attributes.enabled: false
attributes.include: request.parameters.*
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

* transaction_tracer: none
* error_collector: ninguno
* transaction_events: none
* browser_monitoring: none

## Seleccionar destinos específicos [#ex_select_dest]

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

```
attributes.enabled: true
transaction_tracer.attributes.enabled: false
attributes.exclude: foo
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

* transaction_tracer: none
* error_collector: barra
* transaction_events: bar
* browser_monitoring: none

## Seleccionar valores y destinos [#example3]

En este ejemplo, se seleccionan claves de entrada específicas para ciertos destinos de salida y se excluyen de otros.

* La clave `food.fruit.banana` se excluirá únicamente de la traza de la transacción.
* Las claves `food` y `food.vegetable` se excluirán de todos los destinos.

<DNT>
  **Configuration:**
</DNT>

```
browser_monitoring.attributes.enabled: true
attributes.exclude: food*
attributes.include: food.fruit.*
transaction_tracer.attributes.exclude: food.fruit.banana
```

<DNT>
  **Input keys:**
</DNT>

```
food, food.vegetable, food.fruit.apple, food.fruit.banana
```

<DNT>
  **Output for destinations:**
</DNT>

* transaction_tracer: food.fruit.apple
* error_collector: food.fruit.apple, food.fruit.banana
* transaction_events: food.fruit.apple, food.fruit.banana
* browser_monitoring: food.fruit.apple, food.fruit.banana
