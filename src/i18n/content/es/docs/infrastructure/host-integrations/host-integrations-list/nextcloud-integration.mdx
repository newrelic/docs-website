---
title: Integración con NextCloud
tags:
  - Nextcloud integration
  - New Relic integrations
metaDescription: Install our Nextcloud dashboards and see your Nextcloud performance data in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Con nuestro dashboard de Nextcloud, puede rastrear fácilmente la cantidad de archivos en su sistema, sus cuentas de usuario y el tamaño de su base de datos. Construida con nuestro agente de infraestructura y la integración Prometheus OpenMetrics, la integración Nextcloud le brinda un conjunto de <InlinePopover type="dashboards"/>predeterminado que le permite ver su lugar más completo de datos críticos.

<img
  title="Screenshot of Nextcloud dashboard"
  src="/images/infrastructure_screenshot-full_Nextcloud-integration.webp"
/>

<figcaption>
  Después de configurar la integración de Nextcloud con New Relic, sus datos se muestran en un panel como este desde el primer momento.
</figcaption>

## Instalar el agente de infraestructura [#infra]

Para ingresar datos en New Relic, instale nuestro agente de infraestructura. Nuestro agente de infraestructura recopila e ingiere datos para que pueda realizar un seguimiento del rendimiento de su aplicación.

Puede instalar el agente de infraestructura de dos maneras diferentes:

* Nuestra [instalación guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) es una herramienta CLI que inspecciona su sistema e instala el agente de infraestructura junto con el agente de monitoreo de aplicaciones que mejor funcione para su sistema. Para obtener más información sobre cómo funciona nuestra instalación guiada, consulte nuestra [descripción general de la instalación guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Si prefiere instalar nuestro agente de infraestructura manualmente, puede seguir un tutorial para la instalación manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) o [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Configurar NRI-Flex para Nextcloud [#integrate]

Flex viene incluido con el agente New Relic Infrastructure . Para crear un archivo de configuración flexible, siga estos pasos:

Métricas para Nextcloud están disponibles en la siguiente URL: `http://<YOUR_HOST_IP>/ocs/v2.php/apps/serverinfo/api/v1/info?format=json`

1. Cree un archivo llamado `nri-flex-nextcloud.yml` en `/etc/newrelic-infra/integrations.d`
2. Utilice nuestra [plantilla de configuración](https://github.com/newrelic/nri-flex/blob/master/examples/json-read-cmd-example.yml) para actualizar los campos `EVENT_TYPE` y `YOUR_DOMAIN` en el archivo llamado `nri-flex-nextcloud.yml`. El valor en `event_type` se usa para almacenar métrica en el NRDB. Por ejemplo, puede actualizar `EVENT_TYPE` a `NextcloudFlexMetrics`

Su archivo `nri-flex-nextcloud.yml` debería verse así:

```yml
integrations:
  - name: nri-flex
    config:
      name: nextcloudFlex
      global:
        base_url: http://<YOUR_HOST_IP>/ocs/v2.php/apps/serverinfo/api/v1/
        user: <nextcloud_username>
        pass: <nextcloud_password>
      apis:
        - event_type: EVENT_TYPE
          url: info?format=json
```

## Reenviar el registro de Nextcloud a New Relic

Puede utilizar [el reenvío de registros](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para reenviar el registro de Nextcloud a New Relic.

En máquinas Linux, su archivo de registro llamado `logging.yml` debe colocarse en `/etc/newrelic-infra/logging.d/`

Después de crear el archivo de registro, agregue el siguiente script al archivo `logging.yml`:

```yml
logs:
  - name: nextcloud.log
    file: /var/www/nextcloud/data/nextcloud.log
    attributes:
      logtype: nextcloud_log
```

## Reinicie el agente New Relic Infrastructure

1. Antes de que pueda comenzar a utilizar sus datos, [reinicie su agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/).

   ```shell
   sudo systemctl restart newrelic-infra.service
   ```

2. Instale el [inicio rápido de Nextcloud](https://newrelic.com/instant-observability/nextcloud) para obtener nuestro panel prediseñado.

## Encuentra tus datos

Puede elegir nuestra plantilla dashboard prediseñadas llamada `Nextcloud` para monitor la métrica de su servidor Nextcloud. Siga estos pasos para utilizar nuestra plantilla dashboard prediseñadas:

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

3. En la barra de búsqueda, escriba `Nextcloud`.

4. Debería aparecer el dashboard de Nextcloud. Haga clic en él para instalarlo.

Su dashboard de Nextcloud se considera un panel personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

Utilice esta consulta de muestra para ver su métrica de Nextcloud capturada en <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT>:

A continuación se muestra un ejemplo de consulta NRQL que verifica la cantidad de usuarios activos durante los últimos 5 minutos:

```sql
FROM NextcloudFlexMetrics SELECT latest(ocs.data.activeUsers.last5minutes)
```

A continuación se muestra un ejemplo de consulta NRQL que verifica la cantidad de usuarios activos en las últimas 24 horas:

```sql
FROM NextcloudFlexMetrics SELECT latest(ocs.data.activeUsers.last24hours)
```

## ¿Que sigue?

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel:

* Lea nuestra [introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.

* Lea nuestra [introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar su dashboard y realizar diferentes acciones.

* Vea cómo [administrar su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar su

  <InlinePopover type="dashboards"/>

  modo de visualización o agregar más contenido a su dashboard.
