---
title: transação chamada /index.php ou /unknown
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: 'If your transactions are being named /index.php or /unknown, New Relic probably cannot accurately detect or hook into your framework.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

O agente PHP coleta dados métricos, mas todas as suas transações são denominadas `/index.php` ou `/unknown`.

## Solução

Caso o agente não esteja detectando sua framework para alguma transação, você pode utilizar nossa [API](/docs/agents/php-agent/configuration/php-agent-api#api-name-wt) para nomear sua transação. A [função de API](/docs/agents/php-agent/php-agent-api/newrelic_name_transaction/) `newrelic_name_transaction` pode ser usada sempre que um nome de transação personalizado for necessário.

```php
if (extension_loaded ('newrelic')) {
    newrelic_name_transaction ($controller . '/' . $action);
}
```

<Callout variant="tip">
  <DNT>**Note:**</DNT> Não nomeie sua transação com valores que mudam frequentemente, como IDs de usuário, aplicar hash e assim por diante. Implemente [nomenclatura de transação útil](/docs/agents/php-agent/features/php-frameworks-integrating-support-new-relic) em sua chamada de API.
</Callout>

## Causa

O New Relic provavelmente não consegue detectar ou conectar-se com precisão à sua framework específica. Isso geralmente ocorre porque o método de despacho padrão da framework suportada foi modificado (geralmente por um plug-in) ou não está mais sendo usado. Se isso acontecer, o New Relic poderá não ser capaz de detectar ou conectar-se ao despachante da framework e não será capaz de fornecer uma estrutura de nomenclatura de transação significativa.
