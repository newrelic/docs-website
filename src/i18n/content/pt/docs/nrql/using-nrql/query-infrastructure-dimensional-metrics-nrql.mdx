---
title: Utilize métricas dimensionais para consultar mais dados
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'Learn how dimensional metrics work for infrastructure data, and how to query them.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

<Callout title="visualização">
  Ainda estamos trabalhando nesse recurso, mas adoraríamos que você experimentasse!

  Atualmente, esse recurso é fornecido como parte de um programa de visualização de acordo com nossas [políticas de pré-lançamento](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

[As métricas dimensionais](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics) são um padrão da indústria para armazenar e consultar dados métricos. O New Relic armazena todas as métricas de infraestrutura [como dados de eventos](/docs/data-apis/understand-data/new-relic-data-types/#metric-event-attributes), mas você também pode consultá-las como métricas dimensionais.

Na New Relic, reportamos [métricas](/docs/using-new-relic/data/understand-data/new-relic-data-types#metrics) de diversas maneiras, incluindo [métricas dimensionais](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics), que nossa API métrica, SDK de telemetria, alguma integração de código aberto e nossos serviços de infraestrutura podem usar.

Este tipo de métrica permite que você:

* Aproveite uma experiência de consulta aprimorada para dados de infraestrutura.
* Descubra todas as suas métricas em um só lugar.
* Use fontes mais métricas, como [Prometheus](/docs/integrations/prometheus-integrations/get-started/new-relic-prometheus-openmetrics-integration-kubernetes).

Por exemplo, você pode usar a seguinte consulta para obter a duração máxima da sua função do Lambda:

<table>
  <tbody>
    <tr>
      <td style={{ width: "150px" }}>
        <DNT>
          **Query with samples**
        </DNT>
      </td>

      <td style={{ width: "650px" }}>
        ```sql
        FROM ServerlessSample
        SELECT max(provider.duration.Maximum)
        WHERE provider = 'LambdaFunction'
        ```
      </td>
    </tr>

    <tr>
      <td style={{ width: "150px" }}>
        <DNT>
          **Query with metrics**
        </DNT>
      </td>

      <td style={{ width: "650px" }}>
        ```sql
        FROM Metric
        SELECT max(aws.lambda.function.duration)
        ```
      </td>
    </tr>
  </tbody>
</table>

## Iniciar [#compatibility-reqs]

Você não precisa de nenhuma atualização de agente ou integração para usar essas métricas. Oferecemos suporte [a alertas de NRQL](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries) com base em métricas dimensionais, exceto para dados provenientes de integração na nuvem (como métricas de [AWS polling integração](/docs/infrastructure/amazon-integrations/aws-integrations-list), [GCP](/docs/integrations/google-cloud-platform-integrations) e [Azure](/docs/integrations/microsoft-azure-integrations/azure-integrations-list)). A New Relic ingere a métrica do AWS CloudWatch Metric Streams como métrica dimensional e recomendamos que você use NRQL <InlinePopover type="alerts"/>nesses casos.

## Onde e como consultar métrica dimensional [#where]

New Relic oferece suporte a todos [os recursos de consulta NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions) atuais. Você pode usar `WHERE`, `FACET` e funções de seleção de tempo, como `SINCE`, `UNTIL` e `COMPARE WITH` para consulta.

## Convenções de nomenclatura para métrica e atributo [#naming-conventions]

Todos os nomes de métricas e atributos para métricas dimensionais seguem a mesma convenção de nomenclatura para torná-los fáceis de encontrar e usar. os nomes de métrica e atributo são separados por pontos: por exemplo, o prefixo `host.` é usado para métrica de host, o prefixo `k8s.` é usado para métrica de Kubernetes e `aws.` é usado para métrica de AWS.

O gráfico abaixo mostra como um `ProcessSample` que contém três métricas (`cpuPercent`, `ioTotalReadBytes` e `ioTotalWriteBytes`) é dividido em três métricas separadas. Observe a nomenclatura atualizada da métrica e do atributo.

<img
  title="naming-convention.png"
  alt="naming-convention.png"
  src="/images/queries-nrql_diagram_dimensional-metrics-naming-convention.webp"
/>

<figcaption>
  Convenção de nomenclatura métrica dimensional
</figcaption>

## Diferenças na consulta de métricas dimensionais e eventos [#known-limitations]

Métricas dimensionais são um tipo de dados fundamentalmente diferente em comparação com dados de eventos. Abaixo, você encontrará algumas diferenças notáveis ao consultar métricas dimensionais:

* Consulta métrica com `*` não retorna [dados amostrais de infraestrutura](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data/#infrastructure-events). Por exemplo:

  ```sql
  SELECT * FROM Metric
  ```

* Consulta métrica com `metricName LIKE` não retorna dados amostrais de infraestrutura. Por exemplo:

  ```sql
  SELECT uniques(metricName) FROM Metric where metricName like 'k8%'
  ```

* Para selecionar um atributo começando com `tags.` , um nome de métrica deve ser fornecido. Por exemplo, isso não funciona sem a cláusula `WHERE` :

  ```sql
  SELECT uniques(tags.environment) FROM Metric WHERE metricName='aws.lambda.function.duration'
  ```

* Os resultados poderão não estar completos se os critérios de seleção corresponderem a demasiadas amostras. Por exemplo, esta consulta mapeia todas as amostras de infraestrutura e pode retornar resultados incompletos:

  ```sql
  SELECT uniqueCount(entity.guid) FROM Metric
  ```

* Não oferecemos suporte ao recurso curinga de métrica recém-introduzido, por exemplo:

  ```sql
  SELECT average(host.swap%Bytes) FROM Metric
  ```

* [Funções](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#functions) usadas em múltiplas métricas podem falhar ou retornar resultados incorretos, por exemplo:

  ```sql
  FROM Metric SELECT latest(metricNameA + metricNameB)
  ```

* Quando você inclui `RAW` em uma consulta, a solicitação é transformada internamente e imprime dados de evento agregados equivalentes. Não imprimirá dados brutos. Consulte a consulta de exemplo para ver este comportamento:

  ```sql
  SELECT max(host.cpuPercent) FROM Metric TIMESERIES 1 MINUTE SINCE 60 MINUTES AGO RAW
  ```

* Não oferecemos suporte ao uso de `keyset` com `TIMESERIES` e isso retornará um erro. Veja o exemplo abaixo:

  ```sql
  FROM Metric SELECT keyset() WHERE instrumentation.provider = 'infrastructure' TIMESERIES
  ```

Para obter uma visão geral das diferenças de tipos de dados, consulte [Tipos de dados New Relic](/docs/data-apis/understand-data/new-relic-data-types).

## Exemplos de consulta dimensional [#query-examples]

Aqui estão alguns exemplos de consulta NQRL com e sem métrica dimensional:

<CollapserGroup>
  <Collapser
    id="example-aws-ebs"
    title="Exemplo de consulta AWS EBS"
  >
    Obtenha o tempo total de gravação por volume EBS:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM BlockDeviceSample
            SELECT sum('provider.volumeTotalWriteTime.Sum')
            WHERE provider = 'EbsVolume'
            FACET entityName
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT sum(aws.ebs.volume.TotalWriteTime)
            FACET entity.name
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-azure-service-bus"
    title="Exemplo de consulta do barramento de serviço do Azure"
  >
    Número máximo de mensagens num tópico Azure Service Bus por grupo de recursos:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM AzureServiceBusTopicSample
            SELECT max(activeMessages.Maximum)
            FACET resourceGroupName
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT max(azure.servicebus.topic.activeMessages)
            FACET azure.resourceGroup
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-azure-functions"
    title="Exemplo de consulta Azure Functions"
  >
    Número de execuções de funções Azure Functions nas últimas 6 horas por região ao longo do tempo:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM AzureFunctionsAppSample
            SELECT sum(functionExecutionCount.Total)
            FACET regionName
            TIMESERIES SINCE 6 hours ago
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT sum(azure.functions.app.functionExecutionCount)
            FACET azure.region
            TIMESERIES SINCE 6 hours ago
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-azure-vm"
    title="Exemplo de consulta de VM do Azure"
  >
    Compare o número de VMs do Azure nos últimos trinta minutos com o mesmo horário da semana anterior:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM AzureVirtualMachineScaleSetSample
            SELECT uniqueCount(vMName)
            FACET name
            SINCE 30 MINUTES AGO COMPARE WITH 1 WEEK AGO
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT uniqueCount(azure.vms.vmName)
            FACET azure.resourceName
            WHERE azure.resourceType='Microsoft.Compute/virtualMachineScaleSets'
            SINCE 30 MINUTES AGO COMPARE WITH 1 WEEK AGO
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-nginx"
    title="Exemplo de consulta NGINX"
  >
    O número médio de solicitações NGINX por segundo ao longo do tempo:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM NginxSample
            SELECT average(net.requestsPerSecond)
            TIMESERIES
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT average(nginx.server.net.requestsPerSecond)
            TIMESERIES
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-mysql"
    title="Exemplo de consulta MySQL"
  >
    O número máximo de conexões MySQL usadas:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM MysqlSample
            SELECT max(net.maxUsedConnections)
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT max(mysql.node.net.maxUsedConnections)
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
