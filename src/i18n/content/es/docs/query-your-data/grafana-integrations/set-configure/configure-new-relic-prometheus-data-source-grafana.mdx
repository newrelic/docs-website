---
title: Configure New Relic como fuente de datos de Prometheus para Grafana
tags:
  - Integrations
  - Grafana integrations
  - Set up and configure
metaDescription: How to configure New Relic as a Prometheus data source for Grafana
freshnessValidatedDate: never
translationType: machine
---

Puede configurar una [fuente de datos de Prometheus](https://grafana.com/docs/grafana/latest/features/datasources/prometheus/) en [Grafana](https://grafana.com/login) para consultar los datos almacenados en la base de datos de New Relic (NRDB) utilizando nuestro [lenguaje de consulta estilo PromQL](/docs/integrations/prometheus-integrations/view-query-data/supported-promql-features).

## Agregar una fuente de datos de Prometheus [#create-update]

Siga estos pasos para agregar New Relic como fuente de datos de Prometheus para Grafana. Estas instrucciones detallan cómo completar el proceso cuando se trabaja con las versiones 6.7 y superiores de Grafana.

<Callout variant="important">
  Debe [completar el proceso de integración de escritura remota de Prometheus](/docs/integrations/prometheus-integrations/install-configure/set-your-prometheus-remote-write-integration) antes de comenzar el proceso de configuración.
</Callout>

1. En New Relic, [cree una nueva clave de consulta de Insights](/docs/apis/intro-apis/new-relic-api-keys/#insights-query-key).

   <Callout variant="important">
     Nota: En Grafana, deberá colocar esto en un encabezado HTTP <DNT>**X-Query-Key**</DNT> personalizado (consulte el paso 7 a continuación), pero es la misma entidad que la clave de consulta New Relic.
   </Callout>

2. Desde la pantalla [de Grafana](https://grafana.com/login) <DNT>**Home**</DNT> , vaya a <DNT>**Configuration > Data Sources**</DNT> y haga clic en <DNT>**Add data source**</DNT>.

3. En la pantalla <DNT>**Add data source**</DNT> , en las opciones <DNT>**Time series databases**</DNT> , seleccione <DNT>**Prometheus**</DNT>.

4. Ingrese el <DNT>**Name**</DNT> que desea usar para su nueva fuente de datos de Prometheus.

5. Configure el interruptor <DNT>**Default**</DNT> en la posición de encendido o apagado, dependiendo de si desea que esta sea su fuente de datos predeterminada para Prometheus consulta.

   * Desactivado: esta no es su fuente de datos predeterminada
   * Activado: esta es su fuente de datos predeterminada

6. Ingrese el <DNT>**URL**</DNT> correcto:

   * EE. UU.: [prometheus-api.newrelic.com](https://prometheus-api.newrelic.com)
   * UE: [prometheus-api.eu.newrelic.com](https://prometheus-api.eu.newrelic.com)

7. En <DNT>**Custom Headers**</DNT>, seleccione <DNT>**Add Header**</DNT>. Establezca el nombre <DNT>**Header**</DNT> en <DNT>**X-Query-Key.**</DNT> Para <DNT>**Value**</DNT>, ingrese la clave de consulta que creó en el paso 1.

8. Haga clic en <DNT>**Save & Test**</DNT>.

<Callout variant="tip">
  Si sus gráficos aparecen como grupos de puntos y no como líneas conectadas, puede cambiar el estilo del gráfico para mostrar líneas. Para hacer esto, vaya a <DNT>**[Graph panel](https://grafana.com/docs/grafana/latest/panels/visualizations/graph-panel/)**</DNT> de Grafana y seleccione <DNT>**Stacking and null value > connected**</DNT>.
</Callout>

<CollapserGroup>
  <Collapser
    id=""
    title="Imagen de configuración de muestra"
  >
    <img
      title="Configure New Relic as a Prometheus data source for Grafana"
      alt="Screen capture of the add data source workflow in Grafana"
      src="/images/more-integrations_screenshot-crop_grafana-data-source-config.webp"
    />

    <figcaption>
      Grafana Data Source Config.png, por [dbarnesbrown.newrelic.com](/users/dbarnesbrownnewreliccom)
    </figcaption>
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Consideraciones de versiones

New Relic recomienda encarecidamente utilizar las versiones 6.7.x y superiores para configurar New Relic como fuente de datos de Prometheus. Si elige completar la configuración mientras ejecuta una versión anterior, deberá realizar una de las siguientes acciones para configurar correctamente su fuente de datos:

* Configure la nueva fuente de datos para usar autenticación básica y luego ingrese la clave de consulta como contraseña en el flujo de trabajo de autenticación básica.
* Configure la nueva URL de la fuente de datos para incluir la clave de consulta: `` https://prometheus-api.newrelic.com/auth/`<query-key>` ``

## Personaliza el comportamiento de la API de Prometheus [#customize-API]

Los encabezados son particularmente importantes si ha conectado varios servidores Prometheus a New Relic mediante la [integración de escritura remota](/docs/integrations/prometheus-integrations/install-configure/set-your-prometheus-remote-write-integration). Aquí hay algunos detalles sobre la personalización.

<CollapserGroup>
  <Collapser
    id=""
    title="X-consulta (Clave de consulta)"
  >
    El parámetro [Clave de consulta](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#x-query-key) es necesario para autenticarse con New Relic e identificar la cuenta que contiene su métrica. Grafana llama a esto <DNT>**X-Query key**</DNT>, mientras que aparece como <DNT>**Query key**</DNT> en la UI de New Relic.

    Detalles:

    * Requerido
    * Una clave de consulta API utilizada para la autenticación
    * Si está utilizando la integración de escritura remota de Prometheus, la X-consulta debe corresponder a la misma cuenta que la X-clave de licencia utilizada para integrarse para la escritura remota.
  </Collapser>

  <Collapser
    id=""
    title="Solo X-Prometheus"
  >
    <Callout variant="important">
      El soporte de autocompletar de Grafana no maneja métricas que no se ajusten estrictamente a las convenciones de nomenclatura de Prometheus. New Relic recomienda excluir cualquier métrica que no se ajuste a este parámetro.
    </Callout>

    Detalles:

    * Opcional
    * Límites métricos expuestos por la API a los provenientes de Prometheus
    * Predeterminado = verdadero si no se especifica
  </Collapser>

  <Collapser
    id=""
    title="Servidor X-Prometheus"
  >
    Este parámetro es útil si está recopilando métricas de varios servidores Prometheus. Por ejemplo, si está utilizando Grafana, es posible que desee crear una fuente de datos para cada servidor Prometheus conectado a New Relic y luego otra fuente de datos que pueda usarse para realizar consultas en todos los servidores Prometheus.

    Detalles:

    * Opcional
    * Límites métricos expuestos por la API a los recopilados del servidor Prometheus especificado
    * Este valor debe coincidir con el parámetro de URL `prometheus_server` en la URL de escritura remota utilizada para conectarse a su servidor Prometheus en New Relic.
    * El valor predeterminado es devolver la métrica recopilada de todos los servidores.
  </Collapser>
</CollapserGroup>

## Eliminar una fuente de datos de Prometheus [#delete]

Para eliminar una fuente de datos en Grafana:

1. Vaya a

   <DNT>
     **Configuration > Data Sources**
   </DNT>

   .

2. Haga clic en la fuente de datos que desea eliminar.

3. Haga clic en el botón

   <DNT>
     **Delete**
   </DNT>

   en la parte inferior de la página.
