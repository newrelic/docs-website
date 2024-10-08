---
title: Exemplos de atributos .NET
tags:
  - Agents
  - NET agent
  - Attributes
metaDescription: Examples of using attributes with the New Relic .NET agent.
freshnessValidatedDate: never
translationType: machine
---

Aqui estão alguns exemplos de uso do atributo com o agente New Relic .NET.

## Desativar todos os atributos [#example1]

Neste exemplo, os atributo estão desabilitados. As listas `include` e `exclude` serão ignoradas e todos os atributos serão filtrados.

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

## Selecione destinos específicos [#example2]

Neste exemplo:

* Atributo estão desabilitados para rastreamento da transação. As listas `include` e `exclude` serão ignoradas e todos os atributos serão filtrados para este destino.

* Atributo estão desativados para

  <InlinePopover type="browser"/>

  por padrão.

* Os parâmetros de solicitação (prefixados com `request.parameters.`) estão desativados por padrão para todos os destinos.

Como resultado, apenas `bar` é enviado em erros de rastreamento e eventos de transação.

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

## Selecione valores e destinos [#example3]

Neste exemplo, teclas de entrada específicas são selecionadas para determinados destinos de saída e excluídas de outros.

* A chave `food.fruit.banana` será excluída apenas do rastreamento da transação.
* As chaves `food` e `food.bread` serão excluídas de todos os destinos.

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

## Emulando comportamento de atributo legado do lado do servidor [#emulating]

Neste exemplo, o agente coleta parâmetros de solicitação e os registra nos destinos tracer de transação e do coletor de erros. Isso emula a ativação das configurações de configuração do legado [no lado do servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) para as opções `Capture attributes` ou `Capture parameters` . Personalize os seguintes elementos [`<attributes>`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#agent-attributes) no arquivo de configuração do agente .NET:

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
