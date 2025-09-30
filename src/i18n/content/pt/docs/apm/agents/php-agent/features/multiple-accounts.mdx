---
title: Várias contas
tags:
  - Agents
  - PHP agent
  - Features
metaDescription: 'For service providers that offer New Relic for PHP as a service for multiple clients on a single system, or for individual users who have multiple accounts.'
freshnessValidatedDate: never
translationType: machine
---

Você pode configurar o New Relic para oferecer suporte a várias contas por host. Por exemplo, você pode ser um provedor de serviços que oferece suporte a vários clientes em um ambiente de hospedagem compartilhada.

## Definido por host virtual [#vhost]

Defina uma New Relic <InlinePopover type="licenseKey"/>para cada host virtual usando `newrelic.license`.

Por exemplo, com Apache:

```apacheconf
<VirtualHost 192.168.42.43>
  ServerName www.myvhost1.com
  DocumentRoot "/path/to/vhost1/"
  ...
  <IfModule php5_module>
    php_value newrelic.license "NEW RELIC LICENSE KEY 1"
  </IfModule>
</VirtualHost>

<VirtualHost 192.168.123.45>
  ServerName www.myvhost2.com
  DocumentRoot "/path/to/vhost2/"
  ...
  <IfModule php5_module>
    php_value newrelic.license "NEW RELIC LICENSE KEY 2"
  </IfModule>
</VirtualHost>
```

## Definir com a API [#withapi]

Use `newrelic_set_appname()` para alterar a conta durante a transação atual.

Por exemplo:

```php
newrelic_set_appname("APP NAME",  "NEW RELIC LICENSE KEY");
```

Defina isso o mais cedo possível no processo de transação; caso contrário, a transação já poderá estar bloqueada em uma configuração anterior.

<DNT>**Note:**</DNT> `newrelic_start_transaction()` também pode ser usado. Este não é um uso típico.
