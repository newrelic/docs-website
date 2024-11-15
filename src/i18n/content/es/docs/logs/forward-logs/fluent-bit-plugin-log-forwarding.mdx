---
title: Complemento Fluent Bit para reenvío de logs
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
  - Fluent Bit
metaDescription: 'Install and configure the New Relic logging plugin for Fluent Bit, so you can use enhanced log management capabilities.'
freshnessValidatedDate: '2024-10-30T00:00:00.000Z'
translationType: machine
---

Si log [Fluent Bit](https://fluentbit.io/) ya está monitoreando sus datos , puede usar nuestro complemento de salida Fluent Bit para reenviar y enriquecer sus log datos en New Relic.

Reenviar su registro de Fluent Bit a le New Relic brindará <InlinePopover type="logs" />capacidades mejoradas para recopilar, procesar, explorar, consultar y alertar sobre sus log datos . Tienes estas opciones para instalar Fluent Bit:

* [Instalación Kubernetes](#k8s-installation)
* [Usando una imagen de Docker](#helm-docker-image)
* [Instalación en el host](#on-host-installation)

## Instalación Kubernetes [#k8s-installation]

New Relic tiene un [complemento de salida Fluent Bit](https://github.com/newrelic/newrelic-fluent-bit-output) para reenviar su registro a New Relic la administración de logde . Puede instalar este complemento como una imagen de Docker independiente en un clúster de Kubernetes, donde funciona como un DaemonSet, también conocido como el complemento Kubernetes .

Puedes instalarlo en tu clúster usando nuestro [gráfico Helm](https://github.com/newrelic/helm-charts/tree/master) de dos maneras:

* A través de nuestra instalación guiada
* Instalación manual

### Usando nuestra instalación guiada [#helm-guided-install]

Aunque el gráfico [`newrelic-logging`](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging) funciona de forma independiente, recomendamos instalarlo como parte del gráfico [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) .

La mejor manera de instalarlo es a través de nuestro proceso [de instalación guiada](/install/kubernetes/) . Esta instalación guiada genera los comandos Helm necesarios para instalarla.

### Instalación manual

Puedes instalarlo manualmente usando Helm, aunque esta opción no se recomienda. Ejecute este comando para instalar el repositorio:

```bash
    helm repo add newrelic https://helm-charts.newrelic.com
```

Para actualizar el repositorio, ejecute este comando:

```bash
    helm repo update newrelic
```

<Callout variant="tip">
  Vea nuestro [parámetro de configuración admitido](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#supported-configuration-parameters) en nuestro gráfico de Helm `newrelic-logging` .
</Callout>

Consulta [Desinstalar la integración de Kubernetes](/docs/kubernetes-pixie/kubernetes-integration/installation/uninstall-kubernetes/) si deseas desinstalarla.

## Usando una imagen de Docker [#helm-docker-image]

Si tiene su propia integración Kubernetes personalizada, le recomendamos emplear nuestra [imagen de Docker](https://hub.docker.com/r/newrelic/newrelic-fluentbit-output) que viene con el complemento [`newrelic-fluent-bit-output`](https://github.com/newrelic/newrelic-fluent-bit-output) . O puede emplear la imagen de Docker como imagen base y agregarle sus propios archivos de configuración personalizados.

## Instalación en el host [#on-host-installation]

Para realizar una instalación en el host del complemento Fluent Bit, siga estos pasos:

1. Abra el New Relic [repositorio de complementos Fluent Bit](https://github.com/newrelic/newrelic-fluent-bit-output) de en GitHub.

2. Desde la página del repositorio, [clona o descarga el repositorio](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

3. Ejecute este comando para crear su complemento:

```sh
cd newrelic-fluent-bit-output && make all
```

4. Almacene `out_newrelic.so` o `out_newrelic_winXX.dll` en una ubicación donde daemon `fluent-bit` pueda acceder a ellos.

<Callout variant="tip">
  Si prefiere no compilar el complemento usted mismo, descargue versiones precompiladas desde [la página de versiones de nuestro repositorio de GitHub](https://github.com/newrelic/newrelic-fluent-bit-output/releases).
</Callout>

### Actualice el complemento Fluent Bit [#upgrade-plugin]

Antes de actualizar su complemento Fluent Bit, ejecute la siguiente consulta NRQL para encontrar las versiones actuales del complemento de salida que está empleando en su sistema:

```sql
FROM K8sContainerSample 
SELECT latest(containerImage) 
WHERE podName like '%newrelic-logging%' 
FACET clusterName
```

<Callout variant="caution">
  Las [vulnerabilidades de seguridad (CVE-2024-4323)](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-4323) afectan a las versiones 1.16.0-1.19.2 del complemento de salida de Fluent Bit. Si está empleando una de estas versiones, actualícela a la versión 2.0.0 o superior. Para obtener más información sobre esto, consulte nuestro boletín de seguridad [NR24-01 - Fluent Bit](/docs/security/new-relic-security/security-bulletins/security-bulletin-nr24-01/).
</Callout>

Para actualizar, siga las instrucciones de instalación o descargue la última versión precompilada desde nuestro [repositorio de GitHub](https://github.com/newrelic/newrelic-fluent-bit-output/releases).

## Configurar el complemento Fluent Bit [#configure-plugin]

Fluent Bit necesita saber la ubicación del complemento New Relic y New Relic <InlinePopover type="licenseKey" />para enviar datos a New Relic.

<Callout variant="important">
  Preste atención a los espacios en blanco al editar sus archivos de configuración. Asegúrese de utilizar cuatro espacios para sangrar y un espacio entre claves y valores.
</Callout>

Para configurar su complemento Fluent Bit, siga estos pasos:

1. Localice o cree el archivo `plugins.conf` en su directorio de complementos.

2. En el archivo `plugins.conf` , agregue una referencia a `out_newrelic.so`, junto a su archivo `fluent-bit.conf` :

```ini
[PLUGINS]
    Path /PATH/TO/newrelic-fluent-bit-output/out_newrelic.so
```

3. En el archivo `fluent-bit.conf` , agregue la siguiente línea debajo del bloque `service` :

```ini
[SERVICE]
    # This is the main configuration block for fluent bit.
    # Ensure the follow line exists somewhere in the SERVICE block
    Plugins_File plugins.conf
```

4. En la parte inferior del archivo `fluent-bit.conf` , agregue lo siguiente para configurar las secciones de entrada, filtro y salida. Reemplace el texto del marcador de posición con su <InlinePopover type="licenseKey" />:

   ```ini
   [INPUT]
       Name tail
       Tag  my.tag
       Path /PATH/TO/YOUR/LOG/FILE
       
   # If you have multiple sources, just add another [INPUT] section like this:
   [INPUT] 
       Name tail 
       Tag  my.other.tag 
       Path /PATH/TO/SOME/OTHER/LOG/FILE 

   # Having multiple [FILTER] blocks allows you to control the flow of changes as they read top down. 
   [FILTER]
       Name modify
       # Here we only match on one tag, my.tag, defined in the [INPUT] section earlier
       Match  my.tag
       # Below, we're renaming the host.cpu attribute to CPU
       Rename host.cpu CPU

   [FILTER]
       Name   record_modifier
       # Match on all tags, *, so all logs get decorated per the Record clauses below. Record adds attributes + their values to each record.
       Match  *
       # Adding a logtype attribute ensures your logs will be automatically parsed by our built-in parsing rules
       Record logtype nginx
       # Add the server's hostname to all logs generated
       Record hostname ${HOSTNAME}

   [OUTPUT]
       Name       newrelic
       Match      *
       licenseKey YOUR_LICENSE_KEY
   ```

5. Resetear su instancia de Fluent Bit. Ejecute este comando:

   ```sh
   fluent-bit -c /PATH/TO/fluent-bit.conf
   ```

## Pruebe el complemento Fluent Bit [#test-plugin]

Para probar si su complemento Fluent Bit está recibiendo información de un archivo de log:

1. Ejecute este comando para agregar un mensaje de log prueba a su archivo de log:

   ```sh
   echo "test message" >> /PATH/TO/YOUR/LOG/FILE
   ```

2. Busque `test message` en nuestra [UIde registro](https://one.newrelic.com/launcher/logger.log-launcher) .

Para obtener más opciones, consulte [el filtro `modify` en la documentación de Fluent Bit](https://docs.fluentbit.io/manual/pipeline/filters/modify). Consulte también nuestra documentación para [reenviar su registro empleando el agente de infraestructura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/#automatically-inserted-attributes).

## Opcional: configurar el atributo del complemento [#instrument-plugin]

Una vez que instaló y [configurado](#configure-plugin) el complemento Fluent Bit, puede usar el siguiente atributo para configurar cómo el complemento envía datos a New Relic:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Llave
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `licenseKey`
      </td>

      <td>
        El <InlinePopover type="licenseKey" />. Utilice `licenseKey` (<DNT>**recommended**</DNT>) o `apiKey`, no ambos. Por defecto: `none`
      </td>
    </tr>

    <tr>
      <td>
        `maxBufferSize`
      </td>

      <td>
        El tamaño máximo que envió la carga, en bytes. Por defecto: `256000`
      </td>
    </tr>

    <tr>
      <td>
        `maxRecords`
      </td>

      <td>
        El número máximo de registros para enviar a la vez. Por defecto: `1024`
      </td>
    </tr>

    <tr>
      <td>
        `apiKey`
      </td>

      <td>
        <DNT>**Deprecated.**</DNT> Toma una New Relic [clave de inserción de información valiosa](/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api#register), pero `licenseKey` se prefiere usar el atributo. Emplee `licenseKey` o `apiKey`, no ambos.
      </td>
    </tr>

    <tr>
      <td>
        `endpoint`
      </td>

      <td>
        El valor predeterminado es `https://log-api.newrelic.com/log/v1`. Si está empleando una clave de la UE, debe configurarla en `https://log-api.eu.newrelic.com/log/v1`
      </td>
    </tr>
  </tbody>
</table>

## Ver datos log [#find-data]

Si configuraste todo correctamente y New Relic recopila tus datos, deberías ver datos log en estos dos lugares:

* Nuestra [UI de logs](https://one.newrelic.com/launcher/logger.log-launcher)

* Nuestras herramientas para ejecutar [NRQL consulta](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-query-data/). Por ejemplo, puedes ejecutar una consulta como esta:

```sql
SELECT * 
FROM Log
```

Si no obtiene ningún dato luego de habilitar nuestras capacidades de administración de log , siga nuestros procedimientos estándar log [de resolución de problemas](/docs/logs/troubleshooting/no-log-data-appears-ui/).

## ¿Que sigue? [#what-next]

Explore los datos de registro en su plataforma con nuestra [UIde registro](/docs/logs/ui-data/use-logs-ui/).

* Obtenga una visibilidad más profunda de los datos de rendimiento de su aplicación y de su plataforma reenviando su log con nuestras capacidades [de logs en el contexto](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) .

* Configurar [alertas](/docs/alerts/create-alert/create-alert-condition/alert-conditions/).

* [Consulta tus datos](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) y [crea un panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Desactivar reenvío de logs [#disable]

Para deshabilitar las capacidades de reenvío de log , siga los procedimientos estándar en [la documentación de Fluent Bit](https://fluentbit.io/). No necesitas hacer nada más en New Relic.