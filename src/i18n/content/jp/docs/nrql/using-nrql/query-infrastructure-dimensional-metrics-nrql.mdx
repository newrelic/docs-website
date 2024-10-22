---
title: ディメンションメトリクスを使用してより多くのデータをクエリする
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'Learn how dimensional metrics work for infrastructure data, and how to query them.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

<Callout title="プレビュー">
  この機能はまだ開発中ですが、ぜひお試しください。

  この機能は現在、弊社の[プレリリース ポリシー](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy)に従ってプレビュー プログラムの一部として提供されています。
</Callout>

[次元メトリクスは、](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics)メトリクス データの保存とクエリの業界標準です。 New Relic はすべてのインフラストラクチャ メトリクスを[イベント データとして](/docs/data-apis/understand-data/new-relic-data-types/#metric-event-attributes)保存しますが、ディメンション メトリクスとしてクエリを実行することもできます。

New Relic では、メトリクス API、テレメトリー SDK、一部のオープンソース統合、およびインフラストラクチャ サービスがすべて使用できる 次元メトリクス[ ](/docs/using-new-relic/data/understand-data/new-relic-data-types#metrics)を含む、いくつかの方法で[ メトリクス をレポートします。](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics)

このタイプのメトリックでは、以下のことが可能です。

* インフラストラクチャ データのクエリ エクスペリエンスが向上しました。
* すべてのメトリクスを1つの場所で確認できます。
* [Prometheus](/docs/integrations/prometheus-integrations/get-started/new-relic-prometheus-openmetrics-integration-kubernetes)など、より多くのメトリクス ソースを使用します。

たとえば、次のクエリを使用して、Lambda関数の最大継続時間を取得できます。

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

## 始めましょう [#compatibility-reqs]

これらのメトリクスを使用するために、エージェントや統合の更新は必要ありません。 クラウドインテグレーションからのデータ ([ AWS ポーリング インテグレーション](/docs/infrastructure/amazon-integrations/aws-integrations-list) 、[ GCP](/docs/integrations/google-cloud-platform-integrations) 、[ Azure](/docs/integrations/microsoft-azure-integrations/azure-integrations-list) からのメトリクスなど)[ を除く、次元メトリクスに基づく NRQL アラート をサポートします。](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries)New Relic は、Amazon CloudWatch Metric Streams メトリクスを次元メトリクスとして取り込みます。このような場合は、NRQL <InlinePopover type="alerts"/>を使用することをお勧めします。

## ディメンション・メトリクスのクエリの場所と方法 [#where]

New Relic は、現在の[NRQL クエリ機能を](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions)すべてサポートしています。 クエリには`WHERE` 、 `FACET` 、および`SINCE` 、 `UNTIL` 、 `COMPARE WITH`などの時間選択関数を使用できます。

## メトリクスとアトリビュートの命名規則 [#naming-conventions]

ディメンション メトリクスのすべてのメトリクス名と属性は、見つけやすく使用しやすいように同じ命名規則に従っています。 メトリクスと属性名はドットで名前空間化されます。たとえば、 `host.`プレフィックスはホスト メトリクスに使用され、 `k8s.`プレフィックスは Kubernetes メトリクスに使用され、 `aws.`は AWS メトリクスに使用されます。

次の図は、3つの指標（ `cpuPercent` 、 `ioTotalReadBytes` 、および`ioTotalWriteBytes` ）を含む`ProcessSample`が3つの個別の指標に分割される方法を示しています。メトリックと属性の名前が更新されていることに注意してください。

<img
  title="naming-convention.png"
  alt="naming-convention.png"
  src="/images/queries-nrql_diagram_dimensional-metrics-naming-convention.webp"
/>

<figcaption>
  ディメンショナル・メトリクスの命名規則
</figcaption>

## ディメンションメトリクスとイベントのクエリの違い [#known-limitations]

ディメンション メトリクスは、イベント データとは根本的に異なるタイプのデータです。 以下に、ディメンション メトリクスをクエリする際の顕著な違いをいくつか示します。

* `*` を使用したメトリック クエリは [インフラストラクチャ サンプル データ](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data/#infrastructure-events)を返しません。例えば：

  ```sql
  SELECT * FROM Metric
  ```

* `metricName LIKE` を使用したメトリクス クエリはインフラストラクチャ サンプル データを返しません。例えば：

  ```sql
  SELECT uniques(metricName) FROM Metric where metricName like 'k8%'
  ```

* `tags.`で始まる属性を選択するには、メトリック名を指定する必要があります。たとえば、これは`WHERE`句なしでは機能しません。

  ```sql
  SELECT uniques(tags.environment) FROM Metric WHERE metricName='aws.lambda.function.duration'
  ```

* 選択基準に一致するサンプルが多すぎると、結果が不完全になる可能性があります。 たとえば、次のクエリはすべてのインフラストラクチャ サンプルにマップされ、不完全な結果が返される可能性があります。

  ```sql
  SELECT uniqueCount(entity.guid) FROM Metric
  ```

* 新しく導入されたメトリクスのワイルドカード機能はサポートされていません。たとえば、次のとおりです。

  ```sql
  SELECT average(host.swap%Bytes) FROM Metric
  ```

* 複数のメトリクスで使用される[関数は、](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#functions) 失敗したり、誤った結果を返したりする場合があります。次に例を示します。

  ```sql
  FROM Metric SELECT latest(metricNameA + metricNameB)
  ```

* クエリに`RAW`を含めると、リクエストは内部で変換され、同等の集約されたイベント データが出力されます。RAW データは印刷されません。この動作を確認するには、クエリの例を参照してください。

  ```sql
  SELECT max(host.cpuPercent) FROM Metric TIMESERIES 1 MINUTE SINCE 60 MINUTES AGO RAW
  ```

* `keyset`と`TIMESERIES`の使用はサポートされていないため、使用するとエラーが返されます。 以下の例を参照してください。

  ```sql
  FROM Metric SELECT keyset() WHERE instrumentation.provider = 'infrastructure' TIMESERIES
  ```

データ型の違いの概要については、 [「New Relic データ型」](/docs/data-apis/understand-data/new-relic-data-types)を参照してください。

## 次元クエリの例 [#query-examples]

ここでは、次元メトリクスを使用した場合と使用しない場合のNQRLクエリの例を紹介します。

<CollapserGroup>
  <Collapser
    id="example-aws-ebs"
    title="AWSEBSクエリの例"
  >
    EBS ボリュームごとに合計書き込み時間を取得します。

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
    title="Azure Service Busのクエリの例"
  >
    リソース グループごとの Azure Service Bus トピック内のメッセージの最大数:

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
    title="Azure関数のクエリの例"
  >
    過去 6 時間の Azure Functions の関数実行数 (リージョン別):

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
    title="AzureVMのクエリの例"
  >
    過去 30 分間の Azure VM の数を 1 週間前の同じ時期と比較します。

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
    title="NGINXクエリの例"
  >
    一定期間における 1 秒あたりの NGINX リクエストの平均数:

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
    title="MySQLクエリの例"
  >
    使用される MySQL 接続の最大数:

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
