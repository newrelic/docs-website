---
title: Complemento Logstash para reenvío de registros
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'Install and configure New Relic logging for Logstash, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Si log [Logstash](https://www.elastic.co/products/logstash) ya está monitoreando sus datos , puede usar nuestro complemento Logstash para reenviar y enriquecer sus log datos en New Relic.

Reenviar su registro de Logstash a New Relic le brindará <InlinePopover type="logs"/>capacidades mejoradas para recopilar, procesar, explorar, consultar y alertar sobre sus datos log .

## Habilite Logstash para la administración de registros [#enable-process]

Para reenviar su registro de Logstash a New Relic:

1. Asegúrate de tener:

   * Una New Relic

     <InlinePopover type="licenseKey"/>

   * [Logstash versión 6.6 o superior](https://www.elastic.co/guide/en/logstash/current/installing-logstash.html) con Java 8 o Java 11. Utilice la [distribución oficial de Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html) o una distribución de código abierto como [OpenJDK](http://openjdk.java.net/).

2. [Instale y configure](#logstash-plugin) el complemento Logstash.

3. Opcional: configurar [un atributo de complemento adicional](#instrument-plugin).

4. [Pruebe](#test-plugin) el complemento Logstash.

5. Genere algo de tráfico y espere unos minutos, luego [verifique los datos de su cuenta](#find-data) .

## Instalar y configurar el complemento Logstash [#logstash-plugin]

Para reenviar su registro a New Relic con nuestro [complemento Logstash](https://github.com/newrelic/logstash-output-plugin):

1. Ingrese el siguiente comando en su terminal o interfaz de línea de comando:

   ```bash
   logstash-plugin install logstash-output-newrelic
   ```

2. En su archivo `logstash.conf` , agregue el siguiente bloque de datos. Asegúrate de reemplazar el texto del marcador de posición con tu New Relic <InlinePopover type="licenseKey"/>.

   ```ini
   output {
     newrelic {
       license_key => "LICENSE_KEY"
     }
   }
   ```

3. Reinicie su instancia de Logstash.

<InstallFeedback/>

## Configuración opcional [#instrument-plugin]

Después de instalar y configurar el complemento Logstash, puede usar el siguiente atributo para configurar cómo el complemento envía datos a New Relic. Para obtener más información sobre cómo agregar o configurar atributos, consulte nuestros [ejemplos de configuración de Logstash en GitHub](https://github.com/newrelic/logstash-examples/blob/master/README.md#example-configurations-for-logstash).

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Propiedad
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `concurrent_requests`
      </td>

      <td>
        El número de subprocesos desde los que realizar solicitudes. Por defecto: `1`
      </td>
    </tr>

    <tr>
      <td>
        `base_uri`
      </td>

      <td>
        El extremo de ingestión New Relic .

        * Extremo estadounidense: `https://log-api.newrelic.com/log/v1`
        * Extremo UE: `https://log-api.eu.newrelic.com/log/v1`
      </td>
    </tr>

    <tr>
      <td>
        `max_retries`
      </td>

      <td>
        Número máximo de intentos de reintento para enviar un mensaje. Si se establece en `0`, no se realizarán nuevos intentos. Por defecto: `3`
      </td>
    </tr>
  </tbody>
</table>

## Pruebe el complemento Logstash [#test-plugin]

Para probar si su complemento Logstash recibe información de un archivo de registro:

1. Agregue lo siguiente a su archivo `logstash.conf` :

   ```ini
   input {
     file {
       path => "/PATH/TO/YOUR/LOG/FILE"
     }
   }
   ```

2. Reinicie su instancia de Logstash.

3. Ejecute el siguiente comando para agregar un mensaje de registro de prueba a su archivo de registro:

   ```bash
   echo "test message" >> /PATH/TO/YOUR/LOG/FILE
   ```

4. Busque en nuestra [UI de registros](https://one.newrelic.com/launcher/logger.log-launcher) `test message`.

## Ver datos log [#find-data]

Si todo está configurado correctamente y se están recopilando sus datos, debería ver los datos log en ambos lugares:

* Nuestra [UIusuario de registros](https://one.newrelic.com/launcher/logger.log-launcher)
* Nuestras herramientas para ejecutar [NRQL consulta](/docs/chart-builder/use-chart-builder/choose-data/use-advanced-nrql-mode-specify-data). Por ejemplo, puedes ejecutar una consulta como esta:

```sql
SELECT * FROM Log
```

Si no aparecen datos después de habilitar nuestras capacidades de administración de registros, siga nuestros [procedimientos estándar de resolución de problemas de registros](/docs/logs/log-management/troubleshooting/no-log-data-appears-ui/).

## ¿Que sigue? [#what-next]

Explore los datos de registro en su plataforma con nuestra [UIde registros](/docs/logs/log-management/ui-data/use-logs-ui/).

* Obtenga una visibilidad más profunda de los datos de rendimiento de su aplicación y de su plataforma reenviando su registro con nuestras capacidades [de logs en el contexto](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) .
* Configurar [alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [Consulta tus datos](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) y [crea un panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Desactivar reenvío de registros [#disable]

Para deshabilitar las capacidades de reenvío de registros, siga los procedimientos estándar en [la documentación de Logstash](https://www.elastic.co/products/logstash). No necesitas hacer nada más en New Relic.
