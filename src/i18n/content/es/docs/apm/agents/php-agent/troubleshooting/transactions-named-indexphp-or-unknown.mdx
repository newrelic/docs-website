---
title: Transacción llamada /index.php o /unknown
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

El agente PHP recopila datos métricos, pero todas sus transacciones se denominan `/index.php` o `/unknown`.

## Solución

Si el agente no detecta su framework para alguna transacción, puede usar nuestra [API](/docs/agents/php-agent/configuration/php-agent-api#api-name-wt) para nombrar su transacción. La [función API](/docs/agents/php-agent/php-agent-api/newrelic_name_transaction/) `newrelic_name_transaction` se puede utilizar siempre que se necesite un nombre de transacción personalizado.

```php
if (extension_loaded ('newrelic')) {
    newrelic_name_transaction ($controller . '/' . $action);
}
```

<Callout variant="tip">
  <DNT>**Note:**</DNT> No asigne un nombre a su transacción con valores que cambien con frecuencia, como ID de usuario, hash, etc. Implemente [nombres de transacciones útiles](/docs/agents/php-agent/features/php-frameworks-integrating-support-new-relic) en su API de llamadas.
</Callout>

## Causa

New Relic probablemente no pueda detectar o conectarse con precisión a su framework específico. Esto ocurre a menudo porque el método de distribución predeterminado del framework admitido se ha modificado (a menudo mediante un complemento) o ya no se utiliza. Si eso sucede, es posible que New Relic no pueda detectar o conectarse al despachador del framework, y no podrá proporcionar una estructura de nombres de transacciones significativa.
