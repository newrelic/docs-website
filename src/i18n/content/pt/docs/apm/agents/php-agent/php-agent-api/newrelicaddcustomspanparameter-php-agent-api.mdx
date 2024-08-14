---
title: newrelic_add_custom_span_parameter (API do agente PHP)
type: apiDoc
shortDescription: Anexa um atributo personalizado (par de valor principal) ao intervalo atual.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to attach custom attributes to your transaction data.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```php
newrelic_add_custom_span_parameter(string $key, scalar $value)
```

Anexa um atributo personalizado (par de valor principal) ao intervalo atual.

## Requisitos

Versão do agente [9.12.0.268](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9120268) ou superior.

## Descrição

Adicione um [atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes) (um par de dados de chave e valor) ao intervalo atual. (O nome da chamada é `newrelic_add_custom_span_parameter` porque "atributo personalizado" era anteriormente chamado de "parâmetro personalizado".) Por exemplo, você pode adicionar o nome completo de um cliente do seu banco de dados de clientes. Este atributo aparece em qualquer intervalo. Você também pode consultar o [Span](/docs/insights/explore-data/attributes/apm-default-attributes-insights) para seu atributo personalizado.

<Callout variant="important">
  Em períodos, o atributo adicionado com `newrelic_add_custom_span_parameter` terá precedência sobre o atributo adicionado com `newrelic_add_custom_parameter`.
</Callout>

<Callout variant="important">
  Caso queira usar seu atributo personalizado, evite usar algum dos [termos reservados usados pelo NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
</Callout>

## Parâmetro

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$key`

        _corda_
      </td>

      <td>
        Obrigatório. O nome do atributo personalizado. Apenas os primeiros 255 caracteres são mantidos.
      </td>
    </tr>

    <tr>
      <td>
        `$value`

        _scalar_
      </td>

      <td>
        Obrigatório. O valor a associar a este atributo personalizado.

        Se o valor fornecido for <DNT>**float**</DNT> com valor NaN, Infinity, denorm ou zero negativo, o comportamento desta função é indefinido. Para outros valores de ponto flutuante, o agente pode descartar 1 ou mais bits de precisão (ULPs) do valor fornecido.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Retorna verdadeiro se o parâmetro foi adicionado com sucesso.

## Exemplos

### Relate uma variável como o valor [#basic-example]

```php
if (extension_loaded('newrelic')) { // Ensure PHP agent is available
    // Record custom data about this web transaction
    newrelic_add_custom_span_parameter ('user_email', $user_email);
}
```
