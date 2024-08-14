---
title: Crear un informe de línea de base
metaDescription: Create a baseline ingest report to begin optimizing your data.
freshnessValidatedDate: '2023-07-26T00:00:00.000Z'
translationType: machine
---

Antes de poder optimizar sus datos, es necesario obtener una vista de alto nivel de toda la telemetría que genera actualmente su organización. Para ello, deberá dividir los datos de ingesta en varios grupos, como cuenta, tipo de telemetría y aplicación. Una vez que lo haga, podrá personalizar su informe, descargar e instalar un panel opcional para obtener una mayor granularidad y optimizar su telemetría para que pueda comprender exactamente qué grupos dentro de su organización contribuyen con qué tipos y cantidades de datos.

Este tutorial cubre cómo generar un informe para sus datos según la organización, las cuentas y el tipo de telemetry data. Una vez creado, aprenderá a crear desgloses detallados de los datos según el tipo de aplicación, el clúster de Kubernetes y la integración de la infraestructura.

<img
  title="Data Ingest Dash"
  alt="A screenshot of New Relic's Data Ingest Governance dashboard"
  src="/images/dashboards_screenshot-crop_data-ingest-gov-dashboard.webp"
/>

<Steps>
  <Step>
    ## Instalar el dashboard control de la línea de base de gobernanza de ingesta de datos [#install-dash]

    Este es el dashboard que utilizará para crear una línea de base y monitor sus datos de ingesta. La pestaña <DNT>**Overview**</DNT> proporciona una variedad de gráficos para ayudar a controlar su ingesta, y hay varias pestañas que brindan vistas detalladas de tipos de telemetría específicos, como datos del navegador, datos de APM, logs y trazas.

    Para generar el informe, necesita comenzar a optimizar su telemetría; debe usar la pestaña <DNT>**Baseline Reports**</DNT> después de instalar el tablero siguiendo los pasos a continuación:

    Para instalar el dashboard:

    1. Vaya al [inicio rápido sobre gobernanza de ingesta de datos](https://onenr.io/0PoR8zpDYQG).

    2. Haga clic en

       <DNT>
         **Install this quickstart**
       </DNT>

       en la parte superior derecha de la ventana de su browser .

    3. Seleccione su cuenta principal o de nivel superior en el selector de cuentas, si corresponde.

    4. Haga clic en

       <DNT>
         **Done**
       </DNT>

       .

    5. Cuando el inicio rápido termine de instalarse, abra el dashboard

       <DNT>
         **Data ingest governance baseline**
       </DNT>

       .
  </Step>

  <Step>
    ## Agregue indicadores de objetivos de ingesta a su dashboard [#add-ingest]

    Una vez que haya configurado el dashboard de línea de base, debe agregar indicadores de objetivos al dashboard para monitor. Estos indicadores lo ayudan a optimizar sus datos de ingesta al brindarle métricas objetivo que puede superar o mantenerse por debajo, según sus necesidades. Algunos objetivos que quizás quieras crear son:

    * Un objetivo organizacional general sobre la tarifa diaria o la ingesta mensual.
    * Objetivo por tipo de datos para garantizar el desglose óptimo (por ejemplo, 1 TB por día para log y 2 TB por día para métrica).
    * Objetivo para subcuenta o unidades de negocio específicas.

      Para agregar estos indicadores objetivo a su dashboard, puede crear gráficos completamente nuevos o modificar los gráficos que ya existen en el dashboard.

      ### Para crear un nuevo gráfico:

    1. En el dashboard de línea de base, seleccione

       <DNT>
         **+ Add widget**
       </DNT>

       .

    2. Seleccione

       <DNT>
         **Add a chart**
       </DNT>

       .

    3. Ingrese la consulta NRQL que utilizará el gráfico.

    4. Seleccione

       <DNT>
         **Run**
       </DNT>

       .

       Por ejemplo, si desea que la ingesta total de su organización sea inferior a 360 TB por mes, puede agregar un gráfico de líneas de umbral agregando el número estático `360000` a su declaración `SELECT` usando la siguiente declaración NRQL:

       ```sql
       SELECT 360000, rate(sum(GigabytesIngested), 30 day) AS '30 Day Rate' FROM NrConsumption WHERE productLine='DataPlatform' since 30 days ago limit max compare with 1 month ago TIMESERIES 7 days
       ```

       ### Para modificar un gráfico existente:

    5. En el dashboard de línea de base, seleccione

       <DNT>
         **...**
       </DNT>

       para el gráfico que desea modificar.

    6. Seleccione

       <DNT>
         **Edit**
       </DNT>

       .

    7. Modifique la consulta NRQL que utiliza el gráfico según sea necesario.

    8. Seleccione

       <DNT>
         **Run**
       </DNT>

       .

       Por ejemplo, después de crear el gráfico anterior, puede decidir que desea crear un objetivo de tasa de ingesta diaria dividiendo 360 000 entre 30 y utilizando 12 000 como número objetivo diario. Para hacerlo, actualizaría el gráfico `Daily ingest rate (compare with 3 months prior)` usando la siguiente consulta:

       ```sql
       SELECT 12000, rate(sum(GigabytesIngested), 1 day) AS avgGbIngestTimeseries FROM NrConsumption WHERE productLine='DataPlatform' TIMESERIES AUTO since 9 months ago limit max COMPARE WITH 3 months ago
       ```
  </Step>

  <Step>
    ## Genera tu informe de ingesta de 30 días [#generate-report]

    <img
      src="/images/oma-oe-dg_diagram_baseline-sheet.webp"
      alt="Baseline tabular spreadsheet"
      title="Screenshot of a baseline report example"
    />

    Una vez que haya instalado el dashboard de línea de base y haya cambiado los datos que informa para adaptarlos a sus necesidades, puede generar un informe tabular de sus datos de ingesta después de que haya pasado suficiente tiempo para recopilar la cantidad adecuada de datos. Puedes hacerlo desde el <DNT>**Baseline report**</DNT> y el período de tiempo más común es de 30 días. Para generar el informe:

    1. Abra el dashboard de la línea de base de gobierno de ingesta de datos previamente instalado.

    2. Seleccione la pestaña

       <DNT>
         **Baseline report**
       </DNT>

       .

    3. Seleccione

       <DNT>
         **...**
       </DNT>

       en la tabla

       <DNT>
         **Last 30 days**
       </DNT>

       y elija

       <DNT>
         **Export as CSV**
       </DNT>

       .

    4. Elija si desea importar el CSV a Google Sheets u otra hoja de cálculo de su elección.

       <Callout variant="tip">
         Si no instaló el dashboard, también puede acceder a esta consulta y crear un gráfico personalizado en el [generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder):

         ```sql
         SELECT sum(GigabytesIngested) AS 'gb_ingest_30_day_sum', rate(sum(GigabytesIngested), 1 day) AS 'gb_ingest_daily_rate', derivative(GigabytesIngested, 90 day) as 'gb_ingest_90_day_derivative' FROM NrConsumption WHERE productLine='DataPlatform' since 30 days ago facet consumingAccountName, usageMetric  limit max
         ```
       </Callout>
  </Step>
</Steps>

### Personaliza tu informe [#customize-report]

Después de crear su informe de ingesta, puede agregarle más personalizaciones. Es una buena idea ajustar el informe a las necesidades de su organización y hacerlo puede ayudarle cuando llegue el momento de comenzar a optimizar su ingesta. Hay dos campos que puede utilizar para personalizar su informe:

* Notas: Tenga en cuenta cualquier anomalía de crecimiento, así como sus posibles explicaciones.
* Contacto técnico: Nombre del administrador de una cuenta determinada o alguien relacionado con el tipo de telemetría específico.

Ahora que ha creado su informe de línea de base y lo ha personalizado según sea necesario, puede continuar usando ese informe para encontrar anomalías.

<UserJourneyControls nextStep={{"path":"/docs/tutorial-optimize-telemetry/detect-anomalies/","title":"Próximo paso","body":"Aprenda a utilizar su informe de línea de base para ayudarle a encontrar anomalías en su telemetría"}}/>
