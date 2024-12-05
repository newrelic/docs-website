---
title: Exemplos de atributos Ruby
tags:
  - Agents
  - Ruby agent
  - Attributes
metaDescription: Examples of using attributes with the New Relic Ruby agent.
freshnessValidatedDate: never
translationType: machine
---

Este documento mostra exemplos de como configurar a coleção atributo com o agente New Relic Ruby. Para obter uma lista de todas as configurações do agente Ruby para atributo, consulte [Configuração do agente Ruby: atributo](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#attributes).

## Parâmetro de solicitação de captura [#ex\_req\_params][#ex_req_params]

A captura do parâmetro de solicitação não está habilitada por padrão. A configuração a seguir ativará a captura de parâmetros para os destinos padrão: `transaction_tracer`, `transaction_events` e `error_collector`. Para limitar os destinos consulte o [exemplo Selecionando destinos específicos](#ex_select_dest).

<DNT>
  **Configuration:**
</DNT>

```yml
attributes.include: request.parameters.*
```

Os parâmetros de solicitação são prefixados com a string `request.parameters` e os parâmetros aninhados possuem chaves para refletir esse aninhamento. Por exemplo, um usuário com um atributo de localização aninhado abaixo de um perfil teria uma chave`request.parameters.user.profile.location`.

Da mesma forma, os atributo membros de coleções terão chaves com índices que refletem a adesão. Se um usuário tivesse vários números de telefone, as teclas apareceriam da seguinte forma: `request.parameters.phone_numbers.0`, `request.parameters.phone_numbers.1`, etc.

## Exclua dados confidenciais ao capturar o parâmetro da solicitação [#ex\_req\_params\_exclude][#ex_req_params_exclude]

Pode haver situações em que você queira omitir informações confidenciais do parâmetro de solicitação, como senhas ou números de cartão de crédito. A configuração a seguir fará isso:

<DNT>**Configuration**</DNT>:

```yml
attributes.include: request.parameters.*
attributes.exclude: [request.parameters.password, request.parameters.credit_card_no]
```

## Capturar apenas parâmetro de solicitação específico [#ex\_req\_params\_capture\_specific][#ex_req_params_capture_specific]

Para capturar apenas um parâmetro de solicitação específico, você pode simplesmente passar uma lista para `attributes.include`:

<DNT>**Configuration**</DNT>:

```yml
attributes.include: [request.parameters.user_id, request.parameters.shard_id]
```

## Capturar argumentos de trabalho do Resque [#ex\_resque\_args][#ex_resque_args]

Por padrão, os argumentos do trabalho Resque não são capturados. Para habilitar esta funcionalidade utilize a configuração abaixo.

```yml
attributes.include: job.resque.args.*
```

<DNT>
  **Note:**
</DNT>

Os argumentos para trabalhos Resque são posicionais e as chaves geradas refletem isso. Por exemplo, um trabalho que recebe dois argumentos terá as chaves `job.resque.args.0` e `job.resque.args.1`

## Capturar argumentos de trabalho do Sidekiq [#ex\_sidekiq\_args][#ex_sidekiq_args]

Por padrão, os argumentos do trabalho do Sidekiq não são capturados. Para habilitar esta funcionalidade utilize a configuração abaixo.

```yml
attributes.include: job.sidekiq.args.*
```

<DNT>
  **Note:**
</DNT>

Os argumentos para os trabalhos do Sidekiq são posicionais e as chaves geradas refletem isso. Por exemplo, um trabalho que recebe dois argumentos terá as chaves `job.sidekiq.args.0` e `job.sidekiq.args.1`

## Desativando todos os atributos [#ex\_disable\_all][#ex_disable_all]

Neste exemplo, os atributo estão desabilitados, portanto as listas de inclusão e exclusão serão ignoradas e todos os atributo serão filtrados.

<DNT>
  **Configuration:**
</DNT>

```yml
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

* transaction\_tracer: none
* error\_collector: nenhum
* transaction\_events: none
* browser\_monitoring: none

## Selecionando destinos específicos [#ex\_select\_dest][#ex_select_dest]

Neste exemplo:

* Atributo estão desabilitados para rastreamento da transação. As listas de inclusão e exclusão serão ignoradas e todos os atributos serão filtrados para este destino.
* Atributo também estão desativados para <InlinePopover type="browser" />por padrão.
* Os parâmetros de solicitação (prefixados com `request.parameters.`) estão desativados por padrão para todos os destinos.

Como resultado, apenas `bar` é enviado em erros de rastreamento e eventos de transação.

<DNT>
  **Configuration:**
</DNT>

```yml
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

* transaction\_tracer: none
* error\_collector: barra
* transaction\_events: bar
* browser\_monitoring: none

## Selecionando valores e destinos [#example3]

Neste exemplo, teclas de entrada específicas são selecionadas para determinados destinos de saída e excluídas de outros.

* A chave `food.fruit.banana` será excluída apenas do rastreamento da transação.
* As chaves `food` e `food.vegetable` serão excluídas de todos os destinos.

<DNT>
  **Configuration:**
</DNT>

```yml
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

* transaction\_tracer: food.fruit.apple
* error\_collector: food.fruit.apple, food.fruit.banana
* transaction\_events: food.fruit.apple, food.fruit.banana
* browser\_monitoring: food.fruit.apple, food.fruit.banana