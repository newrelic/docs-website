---
title: Integração Amazon SageMaker
metaDescription: Send your machine learning model data from Amazon SageMaker to New Relic to understand your model's performance.
freshnessValidatedDate: never
translationType: machine
---

Ao integrar a integração do Amazon SageMaker com o New Relic, você poderá instrumentar, analisar, solucionar problemas e otimizar o desempenho do aprendizado de máquina em todo o sistema. Observe rigorosamente suas capacidades para reagir rapidamente às mudanças na entrada ou saída do modelo e no relacionamento entre os dois.

Siga as próximas etapas para monitor suas métricas e objetos do Amazon SageMaker (que são enviados para o AWS CloudWatch) e visualizá-los como [entidade](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/) e [painel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/) no New Relic.

Para ver nossa integração SageMaker em ação, assista a este pequeno vídeo no YouTube (2:57 minutos).

<Video
  id="U3ttUZhiuJ0"
  type="youtube"
/>

## Transmita as métricas da AWS do CloudWatch para a New Relic [#set-up-cloudwatch]

Comece a se beneficiar da entidade [de monitoramento de desempenho do modelo](/docs/alerts-applied-intelligence/mlops/get-started/intro-mlops/) New Relic em uma única etapa simples (e apenas alguns minutos!):

<Callout variant="important">
  Cada métrica enviada ao CloudWatch é enviada automaticamente para a tabela de métricas da New Relic no NRDB, de acordo com o filtro de namespace. Você sempre pode consultá-los usando NRQL:

  ```sql
  FROM Metric SELECT * WHERE aws.Namespace = '/aws/sagemaker/Endpoints' LIMIT MAX SINCE 1 WEEK AGO
  ```
</Callout>

### Opção manual [#set-up-manual]

Siga nossos documentos para configurar [CloudWatch Metric Streams](/docs/integrations/amazon-integrations/aws-integrations-list/aws-metric-stream).

### Opção automatizada [#set-up-automated]

Você pode automatizar a configuração com o [código Terraform](https://github.com/newrelic-experimental/terraform-cloudwatch-metric-streams):

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

Ao chamar o módulo, escreva o `newrelic_collector_endpoint` correto:

* URL do endpoint HTTP – datacenter dos EUA: `https://aws-api.newrelic.com/cloudwatch-metrics/v1`
* URL do endpoint HTTP – datacenter da UE: `https://aws-api.eu01.nr-data.net/cloudwatch-metrics/v1`

Ao definir o fluxo de métrica, você pode optar por transmitir a métrica de todo o namespace ou pode especificar o namespace.

<Callout variant="important">
  Você pode visualizar a métrica de cada entidade em um dashboard que é criado automaticamente quando a métrica chega à New Relic.
</Callout>

## Monitor seus dados e modelo no Amazon SageMaker e envie a métrica para o CloudWatch [#model-monitor]

O SageMaker monitora automaticamente o desempenho do seu endpoint e envia métricas estatísticas para o CloudWatch. Para obter mais informações, consulte [métricasendpoint do CloudWatch](https://docs.aws.amazon.com/sagemaker/latest/dg/monitoring-cloudwatch.html).

Para obter mais benefícios da integração do Amazon SageMaker, use as ferramentas monitor do modelo do Amazon SageMaker. Você terá que definir jobs de monitoramento agendados para monitor a qualidade dos seus modelos de machine learning em produção e enviar métricas ao CloudWatch.

O <DNT>**[Amazon SageMaker Model Monitor](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html)**</DNT> fornece os seguintes tipos de monitoramento:

* [monitor a qualidade dos dados](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-quality.html): monitor o desvio na qualidade dos dados.

  * Bloco de notas de exemplo: [monitor de modelo do Amazon SageMaker](https://sagemaker-examples.readthedocs.io/en/latest/sagemaker_model_monitor/introduction/SageMaker-ModelMonitoring.html)
  * Namespace: `aws/sagemaker/Endpoints/data-metrics`

* [monitor a qualidade do modelo](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality.html): monitor o desvio na métrica de qualidade do modelo, como precisão.

  * Bloco de notas de exemplo: [monitor de qualidade do modelo Amazon SageMaker](https://sagemaker-examples.readthedocs.io/en/latest/sagemaker_model_monitor/model_quality/model_quality_churn_sdk.html)
  * Namespace: `aws/sagemaker/Endpoints/model-metrics`

* [monitor o desvio de preconceito para modelos em produção](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-monitor-bias-drift.html): monitor o preconceito nas previsões de seu modelo.

  * Caderno de exemplo: [monitoramento preconceito desvio e desvio de atribuição de recurso Amazon SageMaker Clarify](https://sagemaker-examples.readthedocs.io/en/latest/sagemaker_model_monitor/fairness_and_explainability/SageMaker-Model-Monitor-Fairness-and-Explainability.html)
  * Namespace: `aws/sagemaker/Endpoints/bias-metrics`

* [monitor desvio de atribuição de recurso para modelos em produção](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-monitor-feature-attribution-drift.html): monitor desvio na atribuição de recurso.

  * Caderno de exemplo: [monitoramento preconceito desvio e desvio de atribuição de recurso Amazon SageMaker Clarify](https://sagemaker-examples.readthedocs.io/en/latest/sagemaker_model_monitor/fairness_and_explainability/SageMaker-Model-Monitor-Fairness-and-Explainability.html)
  * Namespace: `aws/sagemaker/Endpoints/explainability-metrics`

<InstallFeedback/>

### Opções avançadas [#model-monitor-advanced]

Você também pode publicar pontos de dados métricos no Amazon CloudWatch e definir o namespace e um dos itens acima usando a [função`put_metric_data` ](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cloudwatch.html#CloudWatch.Client.put_metric_data).

Se você usar seu próprio algoritmo para ajuste de hiperparâmetros, certifique-se de que ele envie pelo menos uma métrica gravando dados de avaliação em `stderr` ou `stdout`. Leia mais sobre [como definir métricas no ajuste automático de modelos](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics.html). Veja também o bloco de notas de exemplo [Desenvolver, treinar, otimizar e implantar Scikit-Learn Random Forest](https://github.com/aws/amazon-sagemaker-examples/blob/master/sagemaker-python-sdk/scikit_learn_randomforest/Sklearn_on_SageMaker_end2end.ipynb).

## Explore sua entidade e painel [#explore-entities-dashboards]

Geramos `aws-entities` (no domínio da entidade MLOps) para o namespace detalhado. Para essas entidades, você pode obter <InlinePopover type="dashboards"/>e visualizações prontas para uso. Você também pode criar seu próprio dashboard para visualizar métricas que não são exibidas nas visualizações da entidade.

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Entidade New Relic
      </th>

      <th>
        Namespace
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Endpointde aprendizado de máquina
      </td>

      <td>
        `/aws/sagemaker/Endpoints`, `AWS/SageMaker`
      </td>
    </tr>

    <tr>
      <td>
        Dados do modelo de aprendizado de máquina
      </td>

      <td>
        `aws/sagemaker/Endpoints/data-metrics`
      </td>
    </tr>

    <tr>
      <td>
        Modelo de aprendizado de máquina
      </td>

      <td>
        `aws/sagemaker/Endpoints/model-metrics`, `aws/sagemaker/Endpoints/explainability-metrics`
      </td>
    </tr>
  </tbody>
</table>

Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Model performance**</DNT> para visualizar:

* O dashboard para a métrica do endpoint de uma das entidades do Amazon SageMaker

<img
  title="Dashboard for the for the machine learning endpoint"
  alt="Dashboard for the machine learning endpoint"
  src="/images/model-performance-monitoring_screenshot-crop_amazon-sagemaker-dashboard.webp"
/>

* O dashboard da entidade de dados do modelo

<img
  title="Dashboard for the model data entity.png"
  alt="Dashboard for the model data entity"
  src="/images/model-performance-monitoring_screenshot-crop_amazon-sagemaker-model-data-entity.webp"
/>
