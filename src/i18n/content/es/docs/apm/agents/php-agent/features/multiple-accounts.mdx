---
title: Multiples cuentas
tags:
  - Agents
  - PHP agent
  - Features
metaDescription: 'For service providers that offer New Relic for PHP as a service for multiple clients on a single system, or for individual users who have multiple accounts.'
freshnessValidatedDate: never
translationType: machine
---

Puede configurar New Relic para admitir múltiples cuentas por host. Por ejemplo, puede ser un proveedor de servicios que brinda soporte a varios clientes en un entorno de alojamiento compartido.

## Establecer por host virtual [#vhost]

Establezca una New Relic <InlinePopover type="licenseKey"/>para cada host virtual usando `newrelic.license`.

Por ejemplo, con Apache:

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

## Configurar con la API [#withapi]

Utilice `newrelic_set_appname()` para cambiar la cuenta durante la transacción actual.

Por ejemplo:

```php
newrelic_set_appname("APP NAME",  "NEW RELIC LICENSE KEY");
```

Establezca esto lo más temprano posible en el proceso de transacción; de lo contrario, es posible que la transacción ya esté bloqueada en una configuración anterior.

<DNT>**Note:**</DNT> `newrelic_start_transaction()` también puede ser usado. Este no es un uso típico.
