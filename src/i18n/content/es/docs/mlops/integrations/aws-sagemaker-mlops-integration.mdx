---
title: Integración de Amazon SageMaker
metaDescription: Send your machine learning model data from Amazon SageMaker to New Relic to understand your model's performance.
freshnessValidatedDate: never
translationType: machine
---

Al integrar la integración de Amazon SageMaker con New Relic, podrá instrumentar, analizar, solucionar problemas y optimizar el rendimiento del aprendizaje automático en todo su sistema. Observe rigurosamente sus capacidades para reaccionar rápidamente ante cambios en la entrada o salida del modelo y la relación entre ambas.

Realice los siguientes pasos para monitor su métrica y objetos de Amazon SageMaker (que se envían a AWS CloudWatch) y verlos como [entidad](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/) y [panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/) en New Relic.

Para ver nuestra integración de SageMaker en acción, mire este breve vídeo de YouTube (2:57 minutos).

<Video
  id="U3ttUZhiuJ0"
  type="youtube"
/>

## Transmita las métricas de CloudWatch de AWS a New Relic [#set-up-cloudwatch]

Comience a beneficiarse del [monitoreo del rendimiento de los modelos](/docs/alerts-applied-intelligence/mlops/get-started/intro-mlops/) entidad New Relic en un solo y simple paso (¡y solo unos minutos!):

<Callout variant="important">
  Cada métrica enviada a CloudWatch se envía automáticamente a la tabla de métricas de New Relic en NRDB, según el filtro namespace . Siempre puedes consultarlos usando NRQL:

  ```sql
  FROM Metric SELECT * WHERE aws.Namespace = '/aws/sagemaker/Endpoints' LIMIT MAX SINCE 1 WEEK AGO
  ```
</Callout>

### Opción manual [#set-up-manual]

Siga nuestros documentos para configurar [CloudWatch Metric Streams](/docs/integrations/amazon-integrations/aws-integrations-list/aws-metric-stream).

### Opción automatizada [#set-up-automated]

Puede automatizar la configuración con el [código Terraform](https://github.com/newrelic-experimental/terraform-cloudwatch-metric-streams):

```hcl
module "example_usage" {
  source = "modules/nr-cloudwatch-metric-stream"

  name_suffix    = "suffix" # optional
  aws_account_id = "your-aws-account-id"

  newrelic_collector_endpoint = "newrelic-endpoint-url"
  newrelic_trusted_account_id = "12345678"
  newrelic_license_key        = "YOUR_INGEST_LICENSE_KEY"
}
```

Al llamar al módulo, escriba el `newrelic_collector_endpoint` correcto:

* URL extremo HTTP&#x3A; centro de datos de EE. UU.: `https://aws-api.newrelic.com/cloudwatch-metrics/v1`
* URL extremo HTTP - Centro de datos de la UE: `https://aws-api.eu01.nr-data.net/cloudwatch-metrics/v1`

Cuando configura la secuencia métrica, puede elegir transmitir la métrica desde todo el espacio de nombres, o puede especificar el espacio de nombres.

<Callout variant="important">
  Puedes ver la métrica de cada entidad en un dashboard que se crea automáticamente cuando la métrica llega a la New Relic.
</Callout>

## Monitor tus datos y modelo en Amazon SageMaker, y envía la métrica a CloudWatch [#model-monitor]

SageMaker monitorea automáticamente el rendimiento de su extremo y envía estadísticas métricas a CloudWatch. Para obtener más información, consulte [extremos métricos de CloudWatch](https://docs.aws.amazon.com/sagemaker/latest/dg/monitoring-cloudwatch.html).

Para obtener más beneficios de la integración de Amazon SageMaker, utilice las herramientas monitor del modelo de Amazon SageMaker. Tendrás que definir trabajos de monitoreo programados para monitor la calidad de tus modelos de aprendizaje automático en producción y enviar métricas a CloudWatch.

El <DNT>**[Amazon SageMaker Model Monitor](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html)**</DNT> proporciona los siguientes tipos de monitoreo:

* [monitor la calidad de los datos](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-quality.html): monitor la desviación en la calidad de los datos.

  * Cuaderno de ejemplo: [monitor de modelo de Amazon SageMaker](https://sagemaker-examples.readthedocs.io/en/latest/sagemaker_model_monitor/introduction/SageMaker-ModelMonitoring.html)
  * Namespace: `aws/sagemaker/Endpoints/data-metrics`

* [monitor la calidad del modelo](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality.html): monitor la deriva en la calidad métrica del modelo, como la precisión.

  * Cuaderno de ejemplo: [monitor de calidad del modelo de Amazon SageMaker](https://sagemaker-examples.readthedocs.io/en/latest/sagemaker_model_monitor/model_quality/model_quality_churn_sdk.html)
  * Namespace: `aws/sagemaker/Endpoints/model-metrics`

* [monitor la deriva del sesgo para modelos en producción](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-monitor-bias-drift.html): monitor el sesgo en las predicciones de su modelo.

  * Cuaderno de ejemplo: [deriva de sesgo de monitoreo y deriva de atribución de características Amazon SageMaker Clarify](https://sagemaker-examples.readthedocs.io/en/latest/sagemaker_model_monitor/fairness_and_explainability/SageMaker-Model-Monitor-Fairness-and-Explainability.html)
  * Namespace: `aws/sagemaker/Endpoints/bias-metrics`

* [monitor la deriva de atribución de características para modelos en producción](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-monitor-feature-attribution-drift.html): monitor la deriva en la atribución de características.

  * Cuaderno de ejemplo: [deriva de sesgo de monitoreo y deriva de atribución de características Amazon SageMaker Clarify](https://sagemaker-examples.readthedocs.io/en/latest/sagemaker_model_monitor/fairness_and_explainability/SageMaker-Model-Monitor-Fairness-and-Explainability.html)
  * Namespace: `aws/sagemaker/Endpoints/explainability-metrics`

<InstallFeedback/>

### Opciones avanzadas [#model-monitor-advanced]

También puede publicar puntos de datos métricos en Amazon CloudWatch y definir el espacio de nombres y uno de los anteriores utilizando la [función`put_metric_data` ](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cloudwatch.html#CloudWatch.Client.put_metric_data).

Si utiliza su propio algoritmo para el ajuste de hiperparámetros, asegúrese de que envíe al menos una métrica escribiendo datos de evaluación en `stderr` o `stdout`. Lea más sobre [cómo definir métrica en el ajuste automático de modelos](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics.html). Consulte también el cuaderno de ejemplo [Desarrollar, entrenar, optimizar y desplegar Scikit-Learn Random Forest](https://github.com/aws/amazon-sagemaker-examples/blob/master/sagemaker-python-sdk/scikit_learn_randomforest/Sklearn_on_SageMaker_end2end.ipynb).

## Explora tu entidad y panel de control [#explore-entities-dashboards]

Generamos `aws-entities` (bajo el dominio de entidad MLOps) para el espacio de nombres detallado. Para estas entidades, puede obtener vistas y <InlinePopover type="dashboards"/>listos para usar. También puedes crear tu propio dashboard para ver las métricas que no se muestran como parte de las vistas de la entidad.

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Entidad de New Relic
      </th>

      <th>
        Namespace
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Extremo del aprendizaje automático
      </td>

      <td>
        `/aws/sagemaker/Endpoints`, `AWS/SageMaker`
      </td>
    </tr>

    <tr>
      <td>
        Datos del modelo de aprendizaje automático
      </td>

      <td>
        `aws/sagemaker/Endpoints/data-metrics`
      </td>
    </tr>

    <tr>
      <td>
        Modelo de aprendizaje automático
      </td>

      <td>
        `aws/sagemaker/Endpoints/model-metrics`, `aws/sagemaker/Endpoints/explainability-metrics`
      </td>
    </tr>
  </tbody>
</table>

Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Model performance**</DNT> para ver:

* El dashboard para la métrica del extremo de una de las entidades de Amazon SageMaker

<img
  title="Dashboard for the for the machine learning endpoint"
  alt="Dashboard for the machine learning endpoint"
  src="/images/model-performance-monitoring_screenshot-crop_amazon-sagemaker-dashboard.webp"
/>

* El dashboard de la entidad de datos del modelo

<img
  title="Dashboard for the model data entity.png"
  alt="Dashboard for the model data entity"
  src="/images/model-performance-monitoring_screenshot-crop_amazon-sagemaker-model-data-entity.webp"
/>
