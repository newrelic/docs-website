---
title: Integración del servidor de Apache Traffic
tags:
  - Apache Traffic Server integration
  - New Relic integrations
metaDescription: Install our Apache Traffic Server dashboards and see your Apache Traffic Server  data in New Relic.
freshnessValidatedDate: '2023-06-28T00:00:00.000Z'
translationType: machine
---

Nuestra integración de Apache Traffic Server monitorea el rendimiento de su servidor Apache Traffic. El tráfico HTTP/HTTPS se puede reenviar o revertir mediante proxy en una o ambas direcciones, proporcionando rendimiento y escalabilidad.

<img
  title="Apache Traffic Server dashboard"
  alt="Apache Traffic Server dashboard"
  src="/images/infrastructure_screenshot-full_apache-traffic-server-dashboard.webp"
/>

<figcaption>
  Después de configurar nuestro Apache Traffic Server, puede instalar un dashboard para su Apache Traffic Server.
</figcaption>

## Instalar el agente de infraestructura [#infra]

Para ingresar datos en New Relic, instale nuestro agente de infraestructura. Nuestro agente de infraestructura recopila e ingiere datos para que pueda realizar un seguimiento del rendimiento de su aplicación. La versión debe ser 1.10.7 o superior para admitir la integración NRI-Flex.

Puede instalar el agente de infraestructura de dos maneras diferentes:

* Nuestra [instalación guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) es una herramienta CLI que inspecciona su sistema e instala el agente de infraestructura junto con el agente de monitoreo de aplicaciones que mejor funcione para su sistema. Para obtener más información sobre cómo funciona nuestra instalación guiada, consulte nuestra [descripción general de la instalación guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Si prefiere instalar nuestro agente de infraestructura manualmente, puede seguir un tutorial para la instalación manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) o [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Instalar el agente Apache New Relic

Nuestra integración Apache recopila métricas de red como conexiones TCP, búsqueda de DNS, HTTPS, SSL y estados de servidor y trabajador. Para instalar la integración, siga los pasos de nuestra [instalación guiada](https://one.newrelic.com/launcher/nr1-core.explorer?pane=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5saXN0aW5nIn0=&cards%5B0%5D=eyJuZXJkbGV0SWQiOiJucjEtaW5zdGFsbC1uZXdyZWxpYy5ucjEtaW5zdGFsbC1uZXdyZWxpYyIsInBhdGgiOiJvaGkiLCJyZWNpcGVOYW1lIjoiYXBhY2hlLW9wZW4tc291cmNlLWludGVncmF0aW9uIiwiYWN0aXZlQ29tcG9uZW50IjoiVlRTT0NvbW1hbmQiLCJhY3RpdmVFbnZpcm9ubWVudCI6ImFwYWNoZS1vcGVuLXNvdXJjZS1pbnRlZ3JhdGlvbiJ9). Si necesita instalar la integración de otra manera, consulte [Apache monitoreo integración](/docs/infrastructure/host-integrations/host-integrations-list/apache-monitoring-integration/).

## Expone tu métrica

Después de una instalación exitosa, Apache Traffic Server debe iniciarse exitosamente y luego debería comenzar a ejecutarse en un `your_ip` con el puerto `8080`. Es necesario configurar las estadísticas métricas expuestas.

1. Vaya al archivo `plugin.config` :

   ```shell
   sudo nano /etc/trafficserver/plugin.config
   ```

2. Agregue la siguiente línea en su archivo `plugin.config` .

   ```
   stats_over_http.so
   ```

3. Asegúrese de que sus métricas estén expuestas en la siguiente URL.

   Métrica de tu Apache Traffic Server: `http://YOUR_IP:8080/_stats`

## Configurar NRI-Flex para el servidor de Apache Traffic [#integrate]

Flex viene incluido con el agente New Relic Infrastructure . Para crear un archivo de configuración flexible, siga estos pasos:

1. Vaya al directorio `integrations.d` :

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

2. Cree tres archivos denominados `nri-flex-apache-traffic-server-config.yml`, `nri-flex-ats-cache-config.yml` y `nri-flex-ats-http-config.yml`.

El valor en `event_type` se utiliza para almacenar métrica en el NRDB. Tus archivos deberían verse así:

`nri-flex-apache-traffic-server-config.yml`:

```yml
integrations:
  - name: nri-flex
    interval: 30s
    config:
      name: ApcheTrafficServerMetrics
      apis:
        - event_type: ATSSampleMetrics
          url: http://YOUR_IP:8080/_stats 
          remove_keys:
            - http
            - cache
```

`nri-flex-ats-cache-config.yml`:

```yml
integrations:
  - name: nri-flex
    interval: 30s
    config:
      name: ATSCacheMetrics
      apis:
        - event_type: ATSCacheSampleMetrics
          url: http://YOUR_IP:8080/_stats 
          keep_keys:
          	- cache
```

`nri-flex-ats-http-config.yml`:

```yml
integrations:
  - name: nri-flex
    interval: 30s
    config:
      name: ApcheTrafficServerMetrics
      apis:
        - event_type: ATSHttpSampleMetrics
          url: http://YOUR_IP:8080/_stats 
          keep_keys:
          	- http
```

## Reenviar el registro del servidor de Apache Traffic a New Relic

Puede utilizar nuestro [reenvío de registros](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para reenviar el registro del servidor Apache Traffic a New Relic.

En máquinas Linux, su archivo de registro llamado `logging.yml` debe estar presente en esta ruta:

```shell
cd /etc/newrelic-infra/logging.d/
```

Después de crear el archivo de registro, agregue el siguiente script al archivo `logging.yml`:

```yml
logs:
  - name: manager
    file: /var/log/trafficserver/manager.log
    attributes:
      logtype: ats_manager_logs
  - name: diags
    file: /var/log/trafficserver/diags.log
    attributes:
      logtype: ats_diags_logs 
```

## Reinicie el agente New Relic Infrastructure

Antes de que pueda comenzar a leer sus datos, utilice las instrucciones de nuestros [documentos del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar su agente de infraestructura.

```shell
sudo systemctl restart newrelic-infra.service
```

En un par de minutos, su servidor Apache Traffic enviará métrica a [one.newrelic.com](https://one.newrelic.com).

## Encuentra tus datos

Puede elegir nuestra plantilla dashboard prediseñadas llamada `Apache Traffic Server` para monitor su servidor Apache Traffic Server métricamente. Siga estos pasos para utilizar nuestra plantilla dashboard prediseñadas:

1. Desde [one.newrelic.com](https://one.newrelic.com), vaya a la página

   <DNT>
     **+ Add data**
   </DNT>

   .

2. Haga clic en

   <DNT>
     **Dashboards**
   </DNT>

   .

3. En la barra de búsqueda, escriba `Apache Traffic Server`.

4. Debería aparecer el dashboard Apache Traffic Server. Haga clic en él para instalarlo.

Su dashboard de Apache Traffic Server se considera un panel personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

Aquí hay una consulta NRQL para verificar el total de errores de caché del servidor Apache Traffic:

```sql
SELECT latest(global.proxy.process.cache_total_misses) AS 'cache misses' FROM ATSCacheSampleMetrics
```

## ¿Que sigue?

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.
* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización de su panel o para agregar más contenido a su dashboard.
