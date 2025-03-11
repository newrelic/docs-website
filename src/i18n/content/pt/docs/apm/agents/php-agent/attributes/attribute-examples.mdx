---
title: Exemplos de atributos
tags:
  - Agents
  - PHP agent
  - Attributes
metaDescription: Examples of using attributes for the New Relic PHP agent.
freshnessValidatedDate: never
translationType: machine
---

Aqui estão alguns exemplos de uso do atributo com o agente PHP New Relic. Para usar essas configurações:

1. Modifique seu arquivo `newrelic.ini` conforme aplicável.
2. Reinicie o agente e seu daemon para que as alterações tenham efeito.

## Parâmetro de solicitação de captura [#ex_req_params]

Por padrão, o agente não captura o parâmetro da solicitação.

Você pode usar a seguinte configuração para ativar a captura de parâmetros para estes destinos padrão: `transaction_tracer`, `transaction_events` e `error_collector`. Se você quiser limitar os destinos para os quais você captura parâmetros, consulte [Selecionando destinos específicos](#example2).

<DNT>
  **Configuration:**
</DNT>

```ini
newrelic.attributes.include = request.parameters.*
```

## Capturar apenas parâmetro de solicitação específico [#ex_req_params_exclude]

Para capturar apenas um parâmetro de solicitação específico, você pode passar uma lista para `attributes.include`:

<DNT>**Configuration**</DNT>:

```ini
newrelic.attributes.include = request.parameters.user_id request.parameters.product_id
```

## Desativando todos os atributos [#example1]

Neste exemplo, os atributo estão desabilitados, portanto as listas de inclusão e exclusão serão ignoradas e todos os atributo serão filtrados.

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

## Selecionando destinos específicos [#example2]

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

## Selecionando valores e destinos [#example3]

Neste exemplo, teclas de entrada específicas são selecionadas para determinados destinos de saída e excluídas de outros.

* A chave `food.fruit.banana` será excluída apenas do rastreamento da transação.
* As chaves `food` e `food.bread` serão excluídas de todos os destinos.

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
