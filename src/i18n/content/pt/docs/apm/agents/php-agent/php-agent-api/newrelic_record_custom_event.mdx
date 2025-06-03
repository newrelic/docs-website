---
title: newrelic_record_custom_event (API do agente PHP)
type: apiDoc
shortDescription: Grave um evento personalizado com o nome e atributo fornecidos.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to report custom event data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```php
newrelic_record_custom_event(string $name, array $attributes)
```

Grave um evento personalizado com o nome e atributo fornecidos.

## Requisitos

Versão do agente [4.18.0.89](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-418089) ou superior.

## Descrição

Registra um [evento personalizado](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#custom%20event) para uso no [New Relic](/docs/insights/new-relic-insights/understanding-insights/new-relic-insights). Para mais informações veja [Inserindo evento personalizado com o agente PHP](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-new-relic-agents#php-att).

<Callout variant="tip">
  Ao criar um evento personalizado, siga estas regras:

  * O agente registra no máximo 30.000 eventos por minuto por padrão. Você pode configurar o agente para registrar até 100.000 eventos por minuto alterando [esta configuração ini](/docs/apm/agents/php-agent/configuration/php-agent-configuration/#inivar-custom-events-maxsamples).
  * Limite o número de nomes de tipos de eventos exclusivos criados e não gere esses nomes dinamicamente.
  * Evite usar [palavras e caracteres reservados](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#reserved-words) para nomes de eventos e atributos.
  * Certifique-se de não exceder as [restrições de tamanho e taxa do evento](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/).
  * Se `newrelic_ignore_transaction` for chamado dentro da mesma transação que `newrelic_record_custom_event`, o(s) evento(s) personalizado(s) não será(ão) reportado(s).
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
        `$name`

        _corda_
      </td>

      <td>
        Obrigatório. Nome do evento personalizado.
      </td>
    </tr>

    <tr>
      <td>
        `$attributes`

        _matriz_
      </td>

      <td>
        Obrigatório. Forneça atributo personalizado como uma matriz associativa. Forneça os nomes dos atributos como chaves de até 255 caracteres e forneça os valores como valores escalares. matriz e objetos não são suportados.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

### Exemplo básico

```php
if (extension_loaded('newrelic')) { // Ensure PHP agent is available
    newrelic_record_custom_event("WidgetSale", array("color"=>"red", "weight"=>12.5));
}
```
