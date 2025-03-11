---
title: Fregadero de salida vectorial para reenvío de logs
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'Install and configure New Relic logging for your Vector output sink, so you can use our enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Si sus datos log ya están siendo monitoreados por [Vector](https://vector.dev/), puede usar nuestro [receptor de salida Vector](https://vector.dev/docs/reference/configuration/sinks/new_relic/) para reenviar y enriquecer sus datos log en New Relic.

Reenviar su registro de Vector a New Relic le brindará <InlinePopover type="logs"/>capacidades mejoradas para recopilar, procesar, explorar, consultar y alertar sobre sus datos log .

## Configurar el receptor de registros vectoriales para New Relic [#configure-sink]

Para reenviar su registro de Vector a New Relic:

1. Asegúrate de tener:

   * Una New Relic

     <InlinePopover type="licenseKey"/>

   * Versión vectorial 0.7.0 o superior

2. Siga los procedimientos para [configurar el receptor de registros vectoriales para New Relic](https://vector.dev/docs/reference/configuration/sinks/new_relic/).

3. Agrega un fragmento a tu archivo `vector.toml` (ubicado en `/etc/vector` por defecto), reemplazando `YOUR_LICENSE_KEY` con tu New Relic <InlinePopover type="licenseKey"/>:

   ```toml
   # Ingest data by tailing one or more files

   [sources.mylog]
   type          = "file"
   include       = ["/path/to/file"] # Specify file or files to be tailed
   ignore_older  = 86400             # Ignore events older than 1 day
   file_key      = "file"            # Add filename to log events
   host_key      = "host"            # Add hostname to log events

   # Configure sink to forward events to New Relic

   [sinks.new_relic_logs]
   # REQUIRED
   type            = "new_relic_logs"   # must be: "new_relic_logs"
   inputs          = ["mylog"]          # example - value must be one or more source IDs
   license_key     = "YOUR_LICENSE_KEY"
   region          = "us"               # Enum, must be one of: "us" "eu" depending on your New Relic account region
   encoding.codec  = "json"

   # OPTIONAL
   healthcheck = true                   # default
   ```

4. Reinicie el servicio Vector para asegurarse de que se apliquen los cambios.

## Pruebe el receptor de registros Vector [#test-sink]

Para probar si su receptor de registros Vector está reenviando eventos a New Relic:

1. Ejecute el siguiente comando para agregar un mensaje de registro de prueba a su archivo de registro:

   ```shell
   echo "test message" >> /PATH/TO/YOUR/LOG/FILE
   ```

2. Busque en nuestra [UIde registro](https://one.newrelic.com/launcher/logger.log-launcher) su mensaje de prueba.

## Ver datos log [#find-data]

Si todo está configurado correctamente y se están recopilando sus datos, debería ver los datos log en ambos lugares:

* Nuestra [UIusuario de registros](https://one.newrelic.com/launcher/logger.log-launcher)
* Nuestras herramientas para ejecutar [NRQL consulta](/docs/chart-builder/use-chart-builder/choose-data/use-advanced-nrql-mode-specify-data). Por ejemplo, puedes ejecutar una consulta como esta:

```sql
SELECT * FROM Log
```

Si no aparecen datos después de habilitar nuestras capacidades de administración de registros, siga nuestros [procedimientos estándar de resolución de problemas de registros](/docs/logs/log-management/troubleshooting/no-log-data-appears-ui/).

<InstallFeedback/>

## ¿Que sigue? [#what-next]

Explore los datos de registro en su plataforma con nuestra [UIde registros](/docs/logs/log-management/ui-data/use-logs-ui/).

* Obtenga una visibilidad más profunda de los datos de rendimiento de su aplicación y de su plataforma reenviando su registro con nuestras capacidades [de logs en el contexto](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) .
* Configurar [alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [Consulta tus datos](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) y [crea un panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Desactivar reenvío de registros [#disable]

Para deshabilitar las capacidades de reenvío de registros, siga los procedimientos estándar en [la documentación del receptor de registros vectoriales](https://vector.dev/docs/reference/configuration/sinks/new_relic/). No necesitas hacer nada más en New Relic.
