---
title: Predicciones de NRQL
tags:
  - Prediction on a chart
  - Forecasting on a chart
  - NRQL Predictions
  - Forecasting
metaDescription: Use NRQL Predictions to predict future trends and potential performance issues.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="avance">
  Todavía estamos trabajando en esta característica, ¡pero nos encantaría que la probaras!

  Esta característica se proporciona actualmente como parte de un programa de vista previa de conformidad con nuestras [políticas de prelanzamiento](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

<DNT>**NRQL Predictions**</DNT> En New Relic emplea datos históricos para predecir tendencias futuras, proporcionando información valiosa sobre cómo podría comportar la métrica en el futuro. Este enfoque proactivo lo ayuda a visualizar tendencias y anticipar problemas potenciales, lo que permite realizar intervenciones oportunas para mantener un rendimiento óptimo del sistema. Si bien <DNT>**NRQL Predictions**</DNT> en sí no identifica problemas potenciales, le proporciona la información necesaria para evaluar tendencias y planear desafíos futuros.

Para la identificación automática de posibles problemas, puedes inscribirte en la función <DNT>**[Predictive Alerts](/docs/query-your-data/explore-query-data/use-charts/nrql-predictions)**</DNT> , actualmente disponible en vista previa pública. <DNT>**Predictive Alerts**</DNT> trabaja junto con <DNT>**NRQL Predictions**</DNT> para activar alertas automáticamente cuando las tendencias proyectadas indican un problema potencial, lo que permite una gestión proactiva de sus sistemas.

<Callout variant="tip">
  Actualmente, New Relic emplea el [modelo Holt-Winters](https://en.wikipedia.org/wiki/Exponential_smoothing#Triple_exponential_smoothing_\(Holt_Winters\)) para realizar predicciones, que admite patrones y tendencias estacionales por hora, día y semana en sus datos.
</Callout>

## Precios [#pricing]

Su uso de <DNT>**NRQL Predictions**</DNT> se facturará durante la vista previa de acuerdo con su Pedido según corresponda al modelo de precios asociado con su Cuenta. Las consultas de New Relic Language Consulta (NRQLS) relacionadas con el uso de esta característica se facturan como el producto principal de Calcular. Si esta función se vuelve generalmente disponible, su uso será facturable de acuerdo con su Pedido.

Para obtener más detalles sobre los precios, comunicar con nuestro equipo de ventas o consulte su pedido.

## Inscripción [#enrollment]

Para inscribir en la función <DNT>**NRQL Predictions**</DNT> , navegue a <DNT>**[one.newrelic.com &gt; Administration](https://one.newrelic.com//admin-portal) &amp;gt; Preview &amp;amp; Trials**</DNT> y habilite <DNT>**NRQL predictions**</DNT>.

## Agregar predicción en un gráfico de líneas o áreas [#add-prediction]

Para agregar una predicción en un gráfico de líneas o áreas, siga estos pasos:

<Steps>
  <Step>
    ### Acceda a un gráfico de líneas o áreas [#access-a-chart]

    1. Vaya a [one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities).
    2. Para agregar una predicción a un gráfico de líneas o áreas, selecciónelo desde <DNT>**Dashboards**</DNT> o ábralo desde <DNT>**Metrics and events**</DNT>.
  </Step>

  <Step>
    ### Agregar predicción [#add-prediction]

    Para agregar predicción, desde el <Icon name="fe-more-horizontal" /> Menú, seleccione <DNT>**Predict trend**</DNT>. En **Data Explorer**, la tendencia de predicción aparece en el gráfico, proyectando tendencias futuras. El rango de predicción se establece automáticamente en el 20% de la ventana de consulta y se resalta en gris. El gráfico aparece en líneas de puntos dentro del rango previsto.

    La palabra clave `PREDICT` se agrega a la consulta del gráfico. Puede [refinar la consulta](#customize-prediction-range) según sus requisitos y ejecutarla para obtener la tendencia actualizada.

    <Callout variant="tip">
      Cuando agrega predicción a un gráfico de área, el tipo de gráfico cambia a un gráfico de líneas con predicción.
    </Callout>
  </Step>

  <Step>
    ### Agregar al dashboard [#add-to-dashboard]

    1. Para agregar el gráfico con predicción a un dashboard, haga clic en <DNT>**Add to dashboard**</DNT>.
    2. Introduzca un nombre para el widget.
    3. Seleccione un dashboard en el que desea agregar el widget o cree un nuevo dashboard para él.

    Ahora puedes ver el gráfico con la predicción en el dashboard seleccionado.
  </Step>
</Steps>

## Rango de predicción predeterminado [#default-prediction-range]

Cuando agrega una predicción a un gráfico, la función `PREDICT` se agrega a la consulta del gráfico existente con los siguientes comportamientos predeterminados.

* **Rango de predicción**: proyecta el 20% del tiempo total especificado en su ventana de consulta, lo que le permite ver una proyección a corto plazo basada en las tendencias actuales.
* **Datos históricos**: Procesa datos históricos de la ventana de consulta actual y de las dos anteriores para generar predicciones.
* **Intervalo de tiempo**: coincide con el intervalo de puntos de datos de la predicción en la ventana de consulta, lo que garantiza la coherencia en la proyección de datos.

Ejemplo:

```sql
FROM Transaction SELECT count(*) WHERE error IS TRUE TIMESERIES PREDICT
```

La predicción predeterminada en el gráfico aparece de la siguiente manera:

<img title="default prediction" alt="default prediction" src="/images/nrql-predictions-default.webp" />

<figcaption>
  <DNT>**[one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities) &amp;gt; dashboards**</DNT>:predicción predeterminada.
</figcaption>

## Personalizar el rango de predicción [#customize-prediction-range]

Puede personalizar la predicción de las siguientes maneras. Para familiarizar con NRQL, consulte [la documentación de NRQL](/docs/nrql/get-started/introduction-nrql-new-relics-query-language).

<CollapserGroup>
  <Collapser id="hyperparameters" title="Personalice la consulta empleando hiperparámetros y sus niveles de suavizado">
    Como <DNT>**Holt-Winters**</DNT> es el único modelo de predicción que admitimos actualmente, puede ajustar el modelo de predicción a su caso de uso ajustando los hiperparámetros y sus factores de suavizado con `holtwinters`.

    Emplee los siguientes hiperparámetros para personalizar la predicción:

    * **`seasonality`**: Representa la longitud del patrón estacional en el serial temporal.

      * **`seasonality: <time range>`**: Representa la estacionalidad del serial temporal para el rango de tiempo especificado.
      * **`seasonality: AUTO`**: Detecta automáticamente la estacionalidad del serial temporal.
      * **`seasonality: NONE`**: Desactiva la estacionalidad del serial temporal.

    * **`alpha`**: Representa el nivel o valor promedio del serial temporal.

    * **`beta`**: Representa la tendencia o pendiente del serial temporal, indicando movimientos ascendentes o descendentes.

    * **`gamma`**: Representa los patrones estacionales o repetidos del serial temporal.

    * **`phi`**: Representa el factor de amortiguación de la tendencia del serial temporal.

    Puede establecer los factores de suavizado para **`alpha`**, **`beta`**, **`gamma`** y **`phi`**, de 0 a 1. Los valores más altos indican más peso en los datos recientes, mientras que los valores más bajos dan más peso a los datos históricos.
  </Collapser>

  <Collapser id="prediction-range" title="Personalizar la consulta por rango de predicción">
    Puede personalizar la consulta proyectando la predicción hasta un rango de tiempo específico. Emplee la palabra clave `BY` para proyectar la predicción hasta el rango de tiempo especificado. Por ejemplo, `PREDICT BY 3 hours`.
  </Collapser>

  <Collapser id="historical-data-range" title="Personalice la consulta procesando datos históricos para un rango de tiempo específico">
    Puede personalizar la consulta procesando datos históricos del rango de tiempo definido para proyectar la predicción. Emplee la palabra clave `USING` para procesar datos históricos. Por ejemplo, `PREDICT USING 1 day`.
  </Collapser>
</CollapserGroup>

Ejemplo:

```sql
FROM Transaction SELECT count(*) WHERE error IS TRUE TIMESERIES PREDICT holtwinters(beta: 0.5) BY 3 hours USING 1 day
```

La predicción personalizada en el gráfico aparece de la siguiente manera:

<img title="Refined prediction" alt="Refined prediction" src="/images/nrql-predictions-refined.webp" />

<figcaption>
  <DNT>**[one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities) &amp;gt; dashboards**</DNT>:predicción personalizada.
</figcaption>