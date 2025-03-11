---
title: Exemplos de atributos Python
tags:
  - Agents
  - Python agent
  - Attributes
metaDescription: Examples of using attributes with the Python agent.
freshnessValidatedDate: never
translationType: machine
---

Aqui estão alguns exemplos de uso [do atributo](/docs/agents/python-agent/attributes/python-agent-attributes) com o agente Python.

## Parâmetro de solicitação de captura [#ex_req_params]

A captura do parâmetro de solicitação não está habilitada por padrão. A configuração a seguir ativará a captura de parâmetros para os destinos padrão: `transaction_tracer`, `transaction_events` e `error_collector`. Para limitar os destinos consulte o [exemplo Selecionando destinos específicos](#ex_select_dest).

<DNT>
  **Configuration:**
</DNT>

```ini
attributes.include = request.parameters.*
```

## Capturar apenas parâmetro de solicitação específico [#ex_req_params_exclude]

Para capturar apenas um parâmetro de solicitação específico, você pode simplesmente passar uma lista para `attributes.include`:

<DNT>**Configuration**</DNT>:

```ini
attributes.include = request.parameters.user_id request.parameters.product_id
```

## Desativar todos os atributos [#ex_disable_all]

Neste exemplo, os atributo estão desabilitados, portanto as listas de inclusão e exclusão serão ignoradas e todos os atributo serão filtrados.

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

## Selecione destinos específicos [#ex_select_dest]

Neste exemplo:

* Atributo estão desabilitados para rastreamento da transação. As listas de inclusão e exclusão serão ignoradas e todos os atributos serão filtrados para este destino.

* Atributo também estão desativados para

  <InlinePopover type="browser"/>

  por padrão.

* Os parâmetros de solicitação (prefixados com `request.parameters.`) estão desativados por padrão para todos os destinos.

Como resultado, apenas `bar` é enviado em erros de rastreamento e eventos de transação.

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

## Selecione valores e destinos [#ex_select_values_and_dest]

Neste exemplo, teclas de entrada específicas são selecionadas para determinados destinos de saída e excluídas de outros.

* A chave `food.fruit.banana` será excluída apenas do rastreamento da transação.
* As chaves `food` e `food.bread` serão excluídas de todos os destinos.

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
