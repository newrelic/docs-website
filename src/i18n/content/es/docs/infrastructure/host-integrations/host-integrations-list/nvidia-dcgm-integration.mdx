---
title: Integración NVIDIA DCGM
tags:
  - NVIDIA integration
  - DCGM integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with DCGM metrics.
freshnessValidatedDate: '2023-10-30T00:00:00.000Z'
translationType: machine
---

Nuestra integración NVIDIA DCGM te ayuda a monitorear el estado de las GPU. Esta integración aprovecha nuestro agente de infraestructura y la integración de escritura remota de Prometheus, que se integra perfectamente con la utilidad SMI de NVIDIA. Le proporciona un dashboard prediseñado que contiene métricas DCGM cruciales, incluida la utilización de GPU, recuentos de errores XID, estados de reloj y rendimiento, temperatura y uso de energía.

<img
  title="NVIDIA DCGM dashboard"
  alt="NVIDIA DCGM dashboard"
  src="/images/infrastructure_screenshot-full_nvidia-dcgm-dashboard.webp"
/>

<figcaption>
  Después de configurar nuestra integración NVIDIA DCGM, le brindamos un dashboard para su métrica DCGM.
</figcaption>

## Instalar el agente de infraestructura [#infra]

Para ingresar datos en New Relic, instale nuestro agente de infraestructura. Nuestro agente de infraestructura recopila e ingiere datos para que pueda realizar un seguimiento de su rendimiento de DCGM.

Puede instalar el agente de infraestructura de dos maneras diferentes:

* Nuestra [instalación guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) es una herramienta CLI que inspecciona su sistema e instala el agente de infraestructura junto con el agente de monitoreo de aplicaciones que mejor funcione para su sistema. Para obtener más información sobre cómo funciona nuestra instalación guiada, consulte nuestra [descripción general de la instalación guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Si prefiere instalar nuestro agente de infraestructura manualmente, puede seguir un tutorial de instalación manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux) y [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/).

## Configurar el exportador DCGM [#configure-exporter]

1. En tu terminal, clona el repositorio `dcgm-exporter` :

   ```shell
   git clone https://github.com/NVIDIA/dcgm-exporter
   ```

2. En el repositorio clonado, navegue hasta el directorio `dcgm-exporter` :

   ```shell
   cd dcgm-exporter
   ```

3. Instale los binarios necesarios:

   ```shell
   make binary
   ```

   ```shell
   sudo make install
   ```

4. Inicie el `dcgm-exporter`:

   ```shell
   dcgm-exporter &
   ```

5. Vea los detalles de su DCGM métrica:

   ```shell
   curl localhost:9400/metrics
   ```

## Configuración de NVIDIA-DCGM en Prometheus [#configure-prometheus]

Prometheus es una herramienta de alerta y monitoreo de código abierto que se puede utilizar para monitor las GPU NVIDIA mediante el exportador NVIDIA-DCGM. Para configurar Prometheus para monitor DCGM métrica, siga estos pasos:

1. Visite la [página de descarga de Prometheus](https://prometheus.io/download/) para encontrar la última versión.

2. Seleccione la versión adecuada para su sistema operativo y arquitectura. Para Linux, probablemente elijas la versión linux-amd64. Copie el enlace de descarga del archivo tarball (archivo `.tar.gz` ).

3. Una vez descargado Prometheus, descomprima el archivo tar de descarga:

   ```shell
   tar -xvzf <filename.tar.gz>
   ```

4. Navegue hasta la carpeta Prometheus descargada:

   ```shell
   cd /DOWNLOADED-FOLDER/
   ```

5. Abra su archivo `prometheus.yml` y agregue las siguientes líneas:

   ```yml
   ---
   scrape_configs:
     - job_name: NVIDI
       static_configs:
         - targets:['localhost:9400']
   ```

6. Inicia Prometheus:

   ```shell
   ./prometheus --config.file=prometheus.yml
   ```

## Instale el agente de escritura remota Prometheus para NVIDIA-DCGM [#install-remote-write]

Después de configurar la configuración de Prometheus, debes enviar NVIDIA DCGM métrica a Prometheus. Posteriormente, para integrar Prometheus métrica con New Relic, puedes aprovechar el agente de escritura remota de Prometheus. Simplemente siga el [iniciador de configuración de escritura remota de Prometheus en la UI](https://one.newrelic.com/catalog-pack-details?state=04de330d-ad8b-b61c-68e2-ad852c2ca1d4).

## Reinicie el agente New Relic Infrastructure [#restart-infra-agent]

Antes de que pueda comenzar a leer sus datos, utilice las instrucciones de nuestros [documentos del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar su agente de infraestructura.

```shell
sudo systemctl restart newrelic-infra.service
```

## Vea su DCGM métrica en New Relic [#view-data]

Una vez que haya completado la configuración anterior, podrá ver su métrica utilizando nuestra plantilla dashboard prediseñadas llamada nvidia-dcgm. Para acceder a este dashboard:

1. Vaya a

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/) > + Add data**
   </DNT>

   .

2. Haga clic en la pestaña

   <DNT>
     **Dashboards**
   </DNT>

   .

3. En el cuadro de búsqueda, escriba "nvidia-dcgm".

4. Selecciónelo y haga clic en

   <DNT>
     **Install**
   </DNT>

   .

Para instrumentar el inicio rápido de nvidia-dcgm y ver métricas y alertas, también puede seguir nuestra [página de inicio rápido de Nvidia-DCGM](https://newrelic.com/instant-observability/nvidia-dcgm) haciendo clic en el botón “Instalar ahora”.

A continuación se muestran algunos ejemplos de consultas:

<DNT>**Example:**</DNT> ver el recuento de la temperatura de la GPU del dispositivo

```sql
SELECT latest(DCGM_FI_DEV_GPU_TEMP) FROM Metric WHERE metricName LIKE 'DCGM_FI_DEV_GPU_TEMP' TIMESERIES
```

## ¿Que sigue? [#whats-next]

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.

* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.

* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar su

  <InlinePopover type="dashboards"/>

  modo de visualización o para agregar más contenido a su dashboard.
