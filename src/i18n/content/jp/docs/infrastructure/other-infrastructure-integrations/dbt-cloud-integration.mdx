---
title: dbt Cloud with Airflow および Snowflake インテグレーション
tags:
  - New Relic integrations
  - Dbt Cloud integrations
metaDescription: Dbt Cloud with Airflow and Snowflake integration
freshnessValidatedDate: never
translationType: machine
---

<DNT>dbt Cloud</DNT>インテグレーションと<DNT>Airflow</DNT>は、 <DNT>dbt Cloud</DNT>ジョブとリソースの状態を監視し、実行、モデル、テストが失敗した場合などの問題を特定するのに役立ちます。

このインテグレーションは<DNT>Apache Airflow</DNT>で実行され、構成されている場合は失敗したテストに対して<DNT>Snowflake</DNT>をクエリします。

## 前提条件 [#prerequisites]

* API が有効になっており、 <DNT>Snowflake</DNT>をデータベースとして使用している dbt Cloud アカウント。
* <DNT>dbt Cloud</DNT>アカウントが実行される<DNT>Snowflake</DNT>アカウントへのアクセス。
* 既存の<DNT>Airflow</DNT>環境バージョン 2.8.1 以上、または<DNT>Docker Compose</DNT>を実行する機能。

## 統合をインストールする [#install]

次のいずれかの方法で、<DNT>Airflow</DNT> を使用してNew Relic <DNT>dbt Cloud</DNT> インテグレーションをインストールできます。

* 既存の Airflow 環境にインストールします。 本番環境におすすめです。
* docker Compose を使用してインストールします。 これは迅速な POC に適しています。

タブをクリックして、ニーズに最も適したオプションを選択します。

<Tabs>
  <TabsBar>
    <TabsBarItem id="1">
      既存のAirflow環境にインストールする
    </TabsBarItem>

    <TabsBarItem id="2">
      docker Composeでインストールする
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="1">
      <Steps>
        <Step>
          Snowflake プロバイダーがあることを確認し、次のコマンドを実行して`newrelic-dbt-cloud-integration`リポジトリのクローンを作成します。

          ```shell
          pip install apache-airflow-providers-snowflake>=3.0.0
          ```

          ```shell
          git clone https://github.com/newrelic-experimental/newrelic-dbt-cloud-integration.git
          ```
        </Step>

        <Step>
          `airflow/dags`の内容を Airflow dags フォルダのルートにコピーします
        </Step>

        <Step>
          DAG に必要な 5 つの Airflow 接続を作成します。 次の表には、接続名とそれを設定するための情報が記載されています。 これらすべての型は`http`であることに注意してください。

          <table>
            <thead>
              <tr>
                <th>
                  接続名
                </th>

                <th>
                  説明
                </th>

                <th>
                  タイプ
                </th>

                <th>
                  ホストとパスワード
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="children-nowrap">
                  `dbt_cloud_admin_api`
                </td>

                <td>
                  <span class="children-nowrap">`SimpleHttpHook`</span>を使用して dbt Cloud 管理 API に接続できます
                </td>

                <td>
                  <span class="children-nowrap">`http`</span>
                </td>

                <td>
                  **ホスト:** https://cloud.getdbt.com/api/v2/accounts/ACCOUNT\_ID/ ( `ACCOUNT_ID`を dbt Cloud アカウント ID に置き換えます)

                  **パスワード:** [dbt Cloud APIパスワード (プロファイル設定) またはサービス アカウント](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens#user-tokens)
                </td>

                <td />
              </tr>

              <tr>
                <td class="children-nowrap">
                  `dbt_cloud_discovery_api`
                </td>

                <td>
                  dbt検出APIに接続できます
                </td>

                <td>
                  <span class="children-nowrap">`http`</span>
                </td>

                <td>
                  **ホスト:** https://metadata.cloud.getdbt.com/graphql

                  **パスワード:** [DBT クラウド サービス アカウント](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens#user-tokens)
                </td>
              </tr>

              <tr>
                <td class="children-nowrap">
                  `nr_insights_insert`
                </td>

                <td>
                  New Relicにカスタムイベントをアップロードできます
                </td>

                <td>
                  <span class="children-nowrap">`http`</span>
                </td>

                <td>
                  **ホスト:** https://insights-collector.newrelic.com/v1/accounts/ACCOUNT\_ID/events ( `ACCOUNT_ID`をアカウント ID に置き換えてください)

                  **パスワード:** [NR インサイトにAPIキーを挿入](https://one.newrelic.com/admin-portal/api-keys/insightkeys)
                </td>
              </tr>

              <tr>
                <td class="children-nowrap">
                  `nr_insights_query`
                </td>

                <td>
                  New Relicカスタムイベントをクエリできます
                </td>

                <td>
                  <span class="children-nowrap">`http`</span>
                </td>

                <td>
                  **ホスト:** https://insights-api.newrelic.com/v1/accounts/ACCOUNT\_ID/query ( `ACCOUNT_ID`をアカウント ID に置き換えてください)

                  **パスワード:** [NR インサイト作成APIキー](https://one.newrelic.com/admin-portal/api-keys/insightkeys)
                </td>
              </tr>
            </tbody>
          </table>

          上記の 4 つを設定したら、Snowflake 接続を設定する必要があります。 Snowflake を使用すると、失敗したテスト行をクエリできます。 スノーフレーク接続を構成する[方法は多数](https://airflow.apache.org/docs/apache-airflow-providers-snowflake/stable/connections/snowflake.html)あります。 秘密鍵ペアを使用して設定するには、次の属性を入力します。

          * `Type`: スノーフレーク
          * `Login`: Snowflakeのユーザー名
          * `Account`: Snowflakeアカウント
          * `Warehouse`: Snowflakeの倉庫
          * `Role`: あなたの Snowflake の役割。 失敗したテスト行をすべて取得するには、ロールに dbt Cloud で使用されるすべての DB へのアクセス権が必要です。
          * `Private Key Text`: この接続に使用される完全な秘密鍵。
          * `Password`: 秘密鍵が暗号化されている場合のパスフレーズ。 暗号化されていない場合は空白になります。
        </Step>

        <Step>
          `new_relic_data_pipeline_observability_get_dbt_run_metadata2` DAG を有効にしてセットアップを完了します。
        </Step>
      </Steps>
    </TabsPageItem>

    <TabsPageItem id="2">
      <Steps>
        <Step>
          `newrelic-dbt-cloud-integration`リポジトリをクローンするには、次のコマンドを実行します。

          ```shell
          git clone https://github.com/newrelic-experimental/newrelic-dbt-cloud-integration.git
          ```

          次に、Airflow ディレクトリに`cd`します。

          ```shell
          cd newrelic-dbt-cloud-integration/airflow
          ```

          次に、次のコマンドを実行してdocker compose を初期化して実行します。

          ```shell
          docker-compose up airflow-init
          ```

          ```shell
          docker-compose up
          ```
        </Step>

        <Step>
          Airflow UIリリース: `http://localhost:8080`
        </Step>

        <Step>
          DAG に必要な 5 つの Airflow 接続を作成します。 次の表には、接続名とそれを設定するための情報が記載されています。 これらすべての型は`http`であることに注意してください。

          <table>
            <thead>
              <tr>
                <th>
                  接続名
                </th>

                <th>
                  説明
                </th>

                <th>
                  タイプ
                </th>

                <th>
                  ホストとパスワード
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="children-nowrap">
                  `dbt_cloud_admin_api`
                </td>

                <td>
                  <span class="children-nowrap">`SimpleHttpHook`</span>を使用して dbt Cloud 管理 API に接続できます
                </td>

                <td>
                  <span class="children-nowrap">`http`</span>
                </td>

                <td>
                  **ホスト:** https://cloud.getdbt.com/api/v2/accounts/ACCOUNT\_ID/ ( `ACCOUNT_ID`を dbt Cloud アカウント ID に置き換えます)

                  **パスワード:** [dbt Cloud APIパスワード (プロファイル設定) またはサービス アカウント](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens#user-tokens)
                </td>

                <td />
              </tr>

              <tr>
                <td class="children-nowrap">
                  `dbt_cloud_discovery_api`
                </td>

                <td>
                  dbt検出APIに接続できます
                </td>

                <td>
                  <span class="children-nowrap">`http`</span>
                </td>

                <td>
                  **ホスト:** https://metadata.cloud.getdbt.com/graphql

                  **パスワード:** [DBT クラウド サービス アカウント](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens#user-tokens)
                </td>
              </tr>

              <tr>
                <td class="children-nowrap">
                  `nr_insights_insert`
                </td>

                <td>
                  New Relicにカスタムイベントをアップロードできます
                </td>

                <td>
                  <span class="children-nowrap">`http`</span>
                </td>

                <td>
                  **ホスト:** https://insights-collector.newrelic.com/v1/accounts/ACCOUNT\_ID/events ( `ACCOUNT_ID`をアカウント ID に置き換えてください)

                  **パスワード:** [NR インサイトにAPIキーを挿入](https://one.newrelic.com/admin-portal/api-keys/insightkeys)
                </td>
              </tr>

              <tr>
                <td class="children-nowrap">
                  `nr_insights_query`
                </td>

                <td>
                  New Relicカスタムイベントをクエリできます
                </td>

                <td>
                  <span class="children-nowrap">`http`</span>
                </td>

                <td>
                  **ホスト:** https://insights-api.newrelic.com/v1/accounts/ACCOUNT\_ID/query ( `ACCOUNT_ID`をアカウント ID に置き換えてください)

                  **パスワード:** [NR インサイト作成APIキー](https://one.newrelic.com/admin-portal/api-keys/insightkeys)
                </td>
              </tr>
            </tbody>
          </table>

          上記の 4 つを設定したら、Snowflake 接続を設定する必要があります。 Snowflake を使用すると、失敗したテスト行をクエリできます。 スノーフレーク接続を構成する[方法は多数](https://airflow.apache.org/docs/apache-airflow-providers-snowflake/stable/connections/snowflake.html)あります。 秘密鍵ペアを使用して設定するには、次の属性を入力します。

          * `Type`: スノーフレーク
          * `Login`: Snowflakeのユーザー名
          * `Account`: Snowflakeアカウント
          * `Warehouse`: Snowflakeの倉庫
          * `Role`: あなたの Snowflake の役割。 失敗したテスト行をすべて取得するには、ロールに dbt Cloud で使用されるすべての DB へのアクセス権が必要です。
          * `Private Key Text`: この接続に使用される完全な秘密鍵。
          * `Password`: 秘密鍵が暗号化されている場合のパスフレーズ。 暗号化されていない場合は空白になります。
        </Step>

        <Step>
          `new_relic_data_pipeline_observability_get_dbt_run_metadata2` DAG を有効にしてセットアップを完了します。
        </Step>
      </Steps>
    </TabsPageItem>
  </TabsPages>
</Tabs>

## データを検索する [#find-data]

このインテグレーションは、3 つのカスタム イベントを作成し、 New Relicに報告します。

<CollapserGroup>
  <Collapser id="collapser-1-in-group-2" title="`dbt_job_run`">
    `dbt_job_run`: 完了したすべての実行のメタデータとステータスを提供します。 このイベントには、モデル、スナップショット、シード、テストに関するデータは含まれません。 属性には以下が含まれます:

    * `project_name`
    * `environment_name`
    * `run_team`
    * [実行用の dbt Cloud v2 API](https://docs.getdbt.com/dbt-cloud/api-v2#/operations/Retrieve%20Run)にリストされているすべてのフィールド。

    `project_name`と`environment_name`以外のすべての属性には、 `run_`

    クエリの例:

    ```sql
    -- Get status of all job runs in the past seven days
    select 
        project_name,
        environment_name,
        job_name,
        run_created_at,
        run_run_duration_humanized,
        run_status,
        run_status_humanized,
        run_status_message
    from dbt_job_run
    since 7 days ago
    ```
  </Collapser>

  <Collapser id="collapser-1-in-group-2" title="`dbt_resource_run`">
    `dbt_resource_run` dbt ジョブ実行で実行されるすべてのリソースのメタデータとステータスを提供します。 リソースには、モデル、スナップショット、シード、テストが含まれます。 属性には以下が含まれます:

    * すべての属性 `dbt_job_run`
    * `team` (dbt プロジェクト メタで構成)
    * `alert_failed_test_rows`
    * `failed_test_rows_limit`
    * `slack_mentions`
    * `message`
    * `resource_type`
    * `unique_id`
    * `database_name`
    * `schema_name`
    * `test_column_name`
    * `test_model_name`
    * `test_namespace`
    * `test_parameters`
    * `test_short_name`
    * `alias`
    * `severity`
    * `warn_if`
    * `error_if`
    * `tags`
    * `path`
    * `original_file_path`
    * `meta`
    * `meta_config`

    クエリの例:

    ```sql
    -- Get status of all resources run in the past day
    -- Status = 'None' means the resource exists in the project but was not executed in a particular run
    select 
        project_name,
        environment_name,
        job_name,
        run_created_at,
        resource_type,
        name,
        status
    from dbt_resource_run
    where status != 'None'
    since 1 day ago
    limit 200
    ```

    ```sql
    -- Get all resources types in the past day
    select 
        uniques(resource_type)
    from dbt_resource_run 
    since 1 day ago
    ```

    ```sql
    -- Get the count of all statuses in the last day
    -- Status = 'None' means the resource exists in the dbt project, but was not executed in a particular run
    select 
        count(*) as total_count
    from dbt_resource_run
    facet
        status
    since 1 day ago
    ```
  </Collapser>

  <Collapser id="collapser-3-in-group-2" title="dbt_failed_test_rows 関数">
    `dbt_failed_test_rows`: 失敗したテスト クエリの結果のメタデータと最初の 10 列までを提供します。 このイベントは、dbt テストのメタ構成に`alert_failed_test_rows` : `true`がある場合にのみ作成されます。 属性には以下が含まれます:

    * すべての属性 `dbt_resource_run`
    * `field_1` - `field_10`テストクエリで返される最初の 10 列を表します

    クエリの例:

    ```sql
    select 
        project_name,
        environment_name,
        job_name,
        run_created_at,
        name,
        field_1,
        field_2,
        field_3,
        field_4,
        field_5,
        field_6,
        field_7,
        field_8,
        field_9,
        field_10
    from dbt_failed_test_row
    since 7 days ago
    ```
  </Collapser>
</CollapserGroup>

## DAG設定

### 接続:

この DAG は、設定なしでそのまま実行することを目的としています。 同時に、貴社では接続に対して独自の命名規則を持っている可能性があることを認識しています。 そのため、 `dag_config.yml`内にはさまざまな接続の名前を設定できる簡単な構成があります。

```yaml
connections:
  dbt_cloud_admin_api: dbt_cloud_admin_api
  dbt_cloud_discovery_api: dbt_cloud_discovery_api 
  nr_insights_query: nr_insights_query 
  nr_insights_insert: nr_insights_insert
  snowflake_api: SNOWFLAKE 
```

### ランニングチーム:

dbt ジョブは異なるチームによって所有されている可能性がありますが、dbt Cloud 内にこれを設定する場所はありません。 Python コードを使用してチームを動的に設定できます。 独自のコードを記述するには、 `airflow/dags/nr_utils/nr_utils.py`を変更し、必要なロジックを`get_team_from_run()`に配置します。 その関数に渡される実行データは、次の属性にアクセスできます。

* プロジェクト名
* 環境名
* [実行用の dbt Cloud v2 API](https://docs.getdbt.com/dbt-cloud/api-v2#/operations/Retrieve%20Run)にリストされているすべてのフィールド。 すべての属性の先頭に「run\_」が付きます

関数の例を次に示します。

```python
def get_team_from_run(run: dict) -> str:
    team = 'Data Engineering' 
    if run['project_id'] == '11111' and run['environment_id'] in ['55555', '33333']:
        team = 'Platform'
    if re.match(r'Catch-all', run['job_name']):
        team = 'Project Catch All'
    return team
```

## Dbtプロジェクトの設定

Dbt プロジェクト内では、メタ構成を使用して追加のチームおよびテスト固有の設定を設定できます。

* `Team`: ジョブを所有するのは`run_team determines`ですが、テストやモデルなどの失敗したリソースに関する集計通知を上流または下流のチームが受け取る必要がある場合があります。 チームを設定するとそれが実現しやすくなります。
* `alert_failed_test_rows`: `True`に設定すると、失敗したテスト行が有効になり、失敗したテストのクエリが実行され、最初の10列までがNew Relicに送信されます。
* `failed_test_rows_limit`: New Relic に送信する失敗したテスト行の最大数。 不当な量のデータが New Relic に送信される状況を防ぐために、100 行というハードコードされた制限を設けています。
* `slack_mentions`: Slack アラートを有効にすると、このフィールドでメッセージに誰を記載するかを設定できます。

`dbt_project.yml`でこれを設定すると、チームが「データ エンジニアリング」に設定され、失敗したテスト行が有効になります。

```yaml
models:
  dbt_fake_company:
    +meta:
      nr_config:
        team: 'Data Engineering'
        alert_failed_test_rows: False 
        failed_test_rows_limit: 5
        slack_mentions: '@channel, @business_users'
```

リソースに、メッセージと呼ばれる別の属性を追加できます。 次の設定では、特定の失敗したテストについてパートナー ビジネス チームがアラートを受け取ることができます。 さらに、失敗したテスト行自体にアラートを設定することもできます。

```yaml
models:
  - name: important_business_model
    tests:
      - some_custom_test:
        config:
          meta:
            nr_config:
              team: 'Upstream Business Team'
              alert_failed_test_rows: true 
              failed_test_rows_limit: 10 
              slack_mentions: '@channel, @business_user1, @engineer1'
              message: 'Important business process produced invalid data. Please check X tool' 
```

## トラブルシューティング [#troubleshooting]

異なるバージョンの Airflow と異なるバージョンのプロバイダーを組み合わせると、重大な変更が発生する可能性があります。 場合によっては、Airflow 環境の特定のバージョンに合わせてコードを変更する必要があることがあります。 既知の問題は[Github リポジトリ](https://github.com/newrelic-experimental/newrelic-dbt-cloud-integration/issues)で追跡しています。