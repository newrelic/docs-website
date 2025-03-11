---
title: Integración Lighttpd
tags:
  - Lighttpd  integration
  - New Relic integrations
metaDescription: Install our Lighttpd dashboards and see your Lighttpd  data in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Con nuestro dashboard Lighttpd, su equipo puede monitor medidas de resultados y datos de inventario. El monitoreo de Lighttpd proporciona información importante para ayudarlo a construir una imagen completa del rendimiento de su servidor web. Estos datos de rendimiento incluyen tiempo de actividad, red en bytes y paquetes, cantidad de conexiones y más. Los datos métricos se pueden ver en nuestro panel prediseñado y también puedes crear tus propias búsquedas personalizadas, gráficos y política de alertas. Nuestra integración Lighttpd utiliza una configuración NRI-Flex.

<img
  title="Lighttpd dashboard"
  alt="Lighttpd dashboard"
  src="/images/infrastructure_screenshot-full_Lighttptd-dashboard.webp"
/>

<figcaption>
  Después de configurar la integración con New Relic, vea sus datos en un panel como este, listo para usar.
</figcaption>

## Instalar el agente de infraestructura [#install]

Para ingresar datos en New Relic, instale nuestro agente de infraestructura. Nuestro agente de infraestructura recopila e ingiere datos para que pueda realizar un seguimiento del rendimiento de su aplicación. La versión debe ser 1.10.7 o posterior para admitir la integración NRI-Flex.

Puede instalar el agente de infraestructura de dos maneras diferentes:

* Nuestra [instalación guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) es una herramienta CLI que inspecciona su sistema e instala el agente de infraestructura junto con el agente de monitoreo de aplicaciones que mejor funcione para su sistema. Para obtener más información sobre cómo funciona nuestra instalación guiada, consulte nuestra [descripción general de la instalación guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Si prefiere instalar nuestro agente de infraestructura manualmente, puede seguir un tutorial para la instalación manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) o [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Integrar Lighttpd con New Relic [#integrate]

Una vez instalado, el agente de infraestructura puede ingerir datos de su aplicación y enviarlos a New Relic, pero aún necesita integrarse (o establecer una línea de comunicación) entre el agente y su aplicación. Una vez integrado, puede comenzar con una solución de monitoreo lista para usar para su aplicación Lighttpd.

<Steps>
  <Step>
    ### Configurar manualmente el archivo `lighttpd.conf`

    Para exportar métrica en la url `http://INSERT_DOMAIN:INSERT_PORT/server-status?json`, siga los siguientes pasos:

    1. Vaya a la ruta del archivo de configuración lighttpd.

       ```shell
       cd /etc/lighttpd/
       ```

    2. Abra el archivo `lighttpd.conf` para editarlo.

       ```shell
       sudo nano lighttpd.conf
       ```

    3. Agregue `mod_status` dentro del objeto `server.modules` .

    4. Agregue `status.status-url = /server-status` después de `server.modules`.

    5. Actualice `server.document-root` con la ruta del archivo lighttpd `/var/www/html/lighttpd-webpage`

    6. Actualice `server.port` en el que está ejecutando lighttpd.

       ```
       server.port = 9880.
       ```

    7. Abra `http://INSERT_DOMAIN:INSERT_PORT/server-status?json` en el browser para verificar la métrica relacionada con el servidor.

       Aquí hay un archivo de configuración de muestra:

       ```
       server.modules = (
           "mod_indexfile",
           "mod_access”,
           "mod_alias",
           "mod_redirect”,
           "mod_status"
       )

       server.document-root	= "/var/www/html/lighttpd-webpage"
       server.upload-dirs	  = ( "/var/cache/lighttpd/uploads" )
       server.errorlog		    = "/var/log/lighttpd/error.log"
       server.pid-file		    = "/run/lighttpd.pid"
       server.username		    = "www-data"
       server.groupname	    = "www-data"
       server.port		        = 9880
       status.status-url	    = "/server-status”
       ```
  </Step>

  <Step>
    ## Configuración NRI-Flex [#nri-flex-config]

    Una vez que haya instalado el agente de infraestructura en su host, el binario `nri-flex` también se instalará con él.

    Si no se instaló el agente de infraestructura, siga los [pasos de instalación](https://github.com/newrelic/nri-flex/blob/master/docs/basic-tutorial.md) de `nri-flex` desde [el repositorio nri-flex](https://github.com/newrelic/nri-flex).

    Para crear un archivo de configuración flexible, siga estos pasos:

    1. Cree un archivo llamado `lighttpd-http-config.yml` en esta ruta:

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Actualiza el archivo `lighttpd-http-config.yml` con esta configuración:

       * `EVENT_TYPE`: Puedes considerar `EVENT_TYPE` como una tabla base de datos New Relic que puedes consultar usando NRQL (por ejemplo, `LighttpdStatusSample`).
       * `URL`: Contiene la métrica con formato json (por ejemplo, `http://127.0.0.1:9880/server-status?json`).

       Aquí hay un archivo de configuración de muestra:

       ```yml
       ---
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: lighttpdFlex
             apis:
               - event_type: INSERT_EVENT_TYPE
                 url: INSERT_URL  
       ```
  </Step>

  <Step>
    ### Reenviar el registro de Lighttpd a New Relic

    Puede utilizar nuestro [reenvío de registros](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para reenviar el registro de Lighttpd a New Relic.

    En máquinas Linux, su archivo de registro llamado `logging.yml` debe estar presente en la siguiente ruta. Si no ve su archivo de registro, deberá crearlo siguiendo la documentación de reenvío de registros anterior.

    ```shell
    /etc/newrelic-infra/logging.d/
    ```

    Una vez creado el archivo de registro, agregue el siguiente script al archivo `logging.yml`:

    ```yml
      - name: error.log
        file: /var/log/lighttpd/error.log
        attributes:
          logtype: lighttpd_log
    ```
  </Step>

  <Step>
    ### Reinicie el agente New Relic Infrastructure y el servicio lighttpd

    Antes de que pueda comenzar a leer sus datos, utilice las instrucciones de nuestros [documentos del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar su agente de infraestructura.

    ```shell
    sudo systemctl restart lighttpd.service && sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ### Monitor su aplicación [#monitor-app]

    Puede elegir nuestra plantilla dashboard prediseñadas llamada `Lighttpd` para monitor su servidor Lighttpd métrica. Siga estos pasos para utilizar nuestra plantilla dashboard prediseñadas:

    1. Vaya a

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com/)**
       </DNT>

       y haga clic en

       <DNT>
         **+ Add data**
       </DNT>

       .

    2. Haga clic en la pestaña

       <DNT>
         **Dashboards**
       </DNT>

       .

    3. En el cuadro de búsqueda, escriba `lighttpd`.

    4. Cuando vea nuestro dashboard prediseñado, haga clic en él para instalarlo en su cuenta.

       Una vez que su aplicación esté integrada siguiendo los pasos anteriores, el dashboard debería mostrar métrica.

       Para instrumentar el Lighttpd inicio rápido y ver métricas y alertas, también puedes seguir nuestra [página Lighttpd inicio rápido](https://newrelic.com/instant-observability/lighttpd) que tiene un botón <DNT>**Install now**</DNT> .

       A continuación se muestran algunos ejemplos de consultas:

       <DNT>**Example:**</DNT> Vea la métrica capturada en el generador de consultas New Relic .

       ```sql
       SELECT * FROM LighttpdStatusSample  LIMIT MAX
       ```

       <DNT>**Example:**</DNT> Verifique la conexión activa por servidor.

       ```sql
       SELECT latest(BusyServers) FROM LighttpdStatusSample TIMESERIES AUTO
       ```
  </Step>
</Steps>

## Ver Lighttpd métrica en un dashboard [#dashboard]

Con solo el agente de infraestructura instalado e instrumentado con su aplicación, puede ver sus datos sin procesar en nuestra métrica & evento. Nuestro <InlinePopover type="dashboards"/>predeterminado transforma esos datos sin procesar en cuadros y gráficos, que brindan una vista panorámica del estado de su sistema.

Para instrumentar Lighttpd inicio rápido, instale nuestro panel predeterminado y para ver métricas y alertas, también puede seguir nuestra [página Lighttpd inicio rápido](https://newrelic.com/instant-observability/lighttpd) haciendo clic en el botón <DNT>**Install now**</DNT> .

## ¿Que sigue? [#whats-next]

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.

* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.

* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar su

  <InlinePopover type="dashboards"/>

  modo de visualización o para agregar más contenido a su dashboard.
