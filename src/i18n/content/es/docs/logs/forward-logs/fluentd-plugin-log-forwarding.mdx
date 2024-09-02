---
title: Complemento Fluentd para reenvío de registros
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'Install and configure the New Relic logging plugin for Fluentd, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Si log [Fluentd](https://www.fluentd.org) ya está monitoreando tus datos , puedes usar nuestra integración Fluentd para reenviar y enriquecer tus log datos en New Relic.

Reenviar su registro de Fluentd a New Relic le brindará <InlinePopover type="logs" />capacidades mejoradas para recopilar, procesar, explorar, consultar y alertar sobre sus datos log .

## Proceso básico [#enable-process]

Para habilitar las capacidades de administración de registros:

1. Asegúrate de tener:

   * Una New Relic<InlinePopover type="licenseKey" />
   * Fluentd 1.0 o superior

2. [Instale](#fluentd-plugin) el complemento Fluentd.

3. [Configura](#configure-plugin) el complemento Fluentd.

4. Si corresponde, [configurar EU extremo](#eu-configuration)

5. [Pruebe](#test-plugin) el complemento Fluentd.

6. Genere algo de tráfico y espere unos minutos, luego [verifique los datos de su cuenta](#find-data) .

## Instalar el complemento Fluentd [#fluentd-plugin]

Para instalar el complemento Fluentd:

<CollapserGroup>
  <Collapser id="gem-install-fluentd" title="Instalar usando la instalación de fluent-gem">
    Para instalar usando `fluent-gem install`, ingrese el siguiente comando en su terminal o interfaz de línea de comando:

    ```shell
    fluent-gem install fluent-plugin-newrelic
    ```
  </Collapser>

  <Collapser id="td-agent-install-fluentd" title="Instalar usando td-agente-gem">
    Para instalar usando el complemento [td-agente](https://docs.fluentd.org/quickstart/td-agent-v2-vs-v3) , ingrese el siguiente comando en su terminal o interfaz de línea de comando:

    ```shell
    td-agent-gem install fluent-plugin-newrelic
    ```
  </Collapser>
</CollapserGroup>

## Configurar el complemento Fluentd [#configure-plugin]

<Callout variant="tip">
  Si estás configurando Fluentd por primera vez, puede resultarte útil revisar nuestra colección de [archivos de configuración](https://github.com/newrelic/newrelic-fluentd-output/tree/master/examples) prediseñados que abordan casos de uso comunes.
</Callout>

Para configurar tu complemento Fluentd:

1. En su archivo `fluent.conf` , o `td-agent.conf` si usa td-agente, agregue el siguiente bloque de datos, reemplazando el texto del marcador de posición con su <InlinePopover type="licenseKey" />:

   ```apacheconf
   #Tail one or more log files
   <source>
     @type tail
     <parse>
       @type none
     </parse>
     path /path/to/file
     tag example.service
   </source>

   #Add hostname and service_name to all events with "example.service" tag
   <filter example.service>
     @type record_transformer
     <record>
       service_name ${tag}
       hostname "#{Socket.gethostname}"
     </record>
   </filter>

   #Forward all events to New Relic

   <match>
     @type newrelic
     license_key YOUR_LICENSE_KEY
   </match>
   ```

2. Reinicie el servicio Fluentd para asegurarse de que se apliquen los cambios.

<InstallFeedback />

## Configurar el complemento Fluentd para cuentas de la UE [#eu-configuration]

De forma predeterminada, el complemento Fluentd reenvía el registro a nuestro extremo de EE. UU.: `https://log-api.newrelic.com/log/v1`. Si su organización New Relic está en nuestro [centro de datos de la UE](/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers), debe configurar manualmente la propiedad `base_uri` en el extremo de la UE. Por ejemplo:

```apacheconf
#Tail one or more log files
<source>
  @type tail
  <parse>
    @type none
  </parse>
  path /path/to/file
  tag example.service
</source>

#Add hostname and service_name to all events with "example.service" tag
<filter example.service>
  @type record_transformer
  <record>
    service_name ${tag}
    hostname "#{Socket.gethostname}"
  </record>
</filter>

#Forward all events to New Relic EU Endpoint
<match>
  @type newrelic
  license_key YOUR_LICENSE_KEY
  base_uri https://log-api.eu.newrelic.com/log/v1
</match>
```

## Prueba el complemento Fluentd [#test-plugin]

Para probar si tu complemento Fluentd recibe información de un archivo de registro:

1. Ejecute el siguiente comando para agregar un mensaje de log de prueba a su archivo de log:

   ```shell
   echo "test message" >> /PATH/TO/YOUR/LOG/FILE
   ```

2. Busque en nuestra [UI de logs](https://one.newrelic.com/launcher/logger.log-launcher) `test message`.

## Ver datos log [#find-data]

Si todo está configurado correctamente y sus datos se están recopilando, debería ver iniciar sesión en ambos lugares:

* Nuestra [UI de logs](https://one.newrelic.com/launcher/logger.log-launcher)
* Nuestras herramientas para ejecutar [NRQL consulta](/docs/chart-builder/use-chart-builder/choose-data/use-advanced-nrql-mode-specify-data). Por ejemplo, puedes ejecutar una consulta como esta:

```sql
SELECT * FROM Log
```

Si no aparecen datos después de habilitar nuestras capacidades de administración de logs, siga nuestros [procedimientos estándar de resolución de problemas de logs](/docs/logs/log-management/troubleshooting/no-log-data-appears-ui/).

## Optimizar log del búfer Fluentd [#tuneup-buffer]

De forma predeterminada, el complemento envía un registro a New Relic cada cinco segundos. Si desea cambiar este tiempo, agregue un bloque `<buffer>` a la configuración siguiendo este ejemplo:

```apacheconf
[...]

# Forward all events to New Relic EU Endpoint
<match>
  @type newrelic
  license_key YOUR_LICENSE_KEY

  <buffer time>
    timekey 60s
  </buffer>
</match>
```

Para obtener más información, consulta la [documentación de Fluentd sobre la configuración del buffer](https://docs.fluentd.org/configuration/buffer-section).

## Configurar la transformación de UTF-16LE a UTF-8

En este ejemplo de registro de errores de Microsoft SQL Server, use Fluentd para enviar el registro codificado en [UTF-16LE](https://docs.fluentd.org/input/tail#encoding-from_encoding) a New Relic con la [codificación UTF-8 requerida](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#general) para la ingesta. También puede adoptar este ejemplo para otras codificaciones.

<Callout variant="tip">
  También agregamos un `logtype` apropiado para estos registros.
</Callout>

```apacheconf
#Tail one or more log files
<source>
  @type tail
  <parse>
    @type none
  </parse>
  path "D:/sqlserver/error.log"
  tag example.service
  encoding UTF-8
  from_encoding UTF-16LE
</source>

#Add hostname and service_name to all events with "example.service" tag
<filter example.service>
  @type record_transformer
  <record>
    service_name ${tag}
    hostname "#{Socket.gethostname}"
    logtype MSSQL
  </record>
</filter>

#Forward all events to New Relic
<match>
  @type newrelic
  license_key YOUR_LICENSE_KEY
</match>
```

## Configurar la transformación de Shift-JIS a UTF-8

Los archivos de log japoneses codificados en Shift-JIS (SP932) se convierten a la [codificación UTF-8 requerida](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#general) y son necesarios para importar y enviar datos log a New Relic.

```apacheconf

<source>
#Tail one or more log files
  @type tail
  path C:\opt\fluent\cp932text.log  # Full path of the log file you want to collect
  tag example.service
  from_encoding CP932
  encoding UTF-8
  <parse>
    @type none
  </parse>
</source>

#Forward all events to New Relic
<match>
  @type newrelic
  license_key YOUR_LICENSE_KEY
</match>

```

## ¿Que sigue? [#what-next]

Explore los datos de logging en su plataforma con nuestra [UI de logs](/docs/logs/log-management/ui-data/use-logs-ui/).

* Obtenga una visibilidad más profunda de los datos de rendimiento de su aplicación y de su plataforma reenviando su log con nuestras capacidades [de logs en el contexto](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) .
* Configurar [alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [Consulta tus datos](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) y [crea un panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Desactivar reenvío de logs [#disable]

Para deshabilitar las capacidades de reenvío de registros, siga los procedimientos estándar en [la documentación de Fluentd](https://www.fluentd.org). No necesitas hacer nada más en New Relic.