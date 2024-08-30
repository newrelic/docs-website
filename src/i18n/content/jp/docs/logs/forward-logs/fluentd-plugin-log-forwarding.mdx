---
title: ログフォワーディングのためのFluentdプラグイン
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'Install and configure the New Relic logging plugin for Fluentd, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

ログデータを既に [Fluentd](https://www.fluentd.org) で監視している場合、弊社の Fluentd インテグレーションを使用して、New Relic でログデータを転送し、リッチ化することが可能です。

Fluentd ログをNew Relicに転送すると、ログ データの収集、処理、探索、書き込み、集計の機能が強化されます。<InlinePopover type="logs" />

## 基本的なプロセス [#enable-process]

ログ管理機能を有効にするには

1. あなたが持っていることを確認してください：

   * New Relic<InlinePopover type="licenseKey" />
   * Fluentd 1.0以上

2. [](#fluentd-plugin)Fluentdプラグインをインストールします。

3. [](#configure-plugin)Fluentdプラグインの設定を行います。

4. 該当する場合は、 [EUエンドポイントの設定](#eu-configuration)

5. [テスト](#test-plugin) Fluentd プラグインを使用しています。

6. トラフィックを生成して数分待ってから[、アカウントのデータを確認してください](#find-data)。

## Fluentdプラグインのインストール [#fluentd-plugin]

Fluentdプラグインをインストールするには

<CollapserGroup>
  <Collapser id="gem-install-fluentd" title="fluent-gem installでインストール">
    `fluent-gem install`を使用してインストールするには、端末またはコマンドラインインターフェイスに次のコマンドを入力します。

    ```shell
    fluent-gem install fluent-plugin-newrelic
    ```
  </Collapser>

  <Collapser id="td-agent-install-fluentd" title="td-agent-gemによるインストール">
    [td-agent](https://docs.fluentd.org/quickstart/td-agent-v2-vs-v3) プラグインを使ってインストールするには、ターミナルまたはコマンドライン・インターフェースに次のコマンドを入力します。

    ```shell
    td-agent-gem install fluent-plugin-newrelic
    ```
  </Collapser>
</CollapserGroup>

## Fluentdプラグインの設定 [#configure-plugin]

<Callout variant="tip">
  Fluentd を初めて構成する場合は、一般的な使用例に対処する事前に構築された [構成ファイル](https://github.com/newrelic/newrelic-fluentd-output/tree/master/examples) のコレクションを確認すると役立つ場合があります。
</Callout>

Fluentdプラグインの設定を行う。

1. `fluent.conf`ファイル、または td-エージェントを使用している場合は`td-agent.conf`に次のデータ ブロックを追加し、プレースホルダーのテキストを<InlinePopover type="licenseKey" />に置き換えます。

   ```apacheconf
   #Tail one or more log files
   <source>
     @type tail
     <parse>
       @type none
     </parse>
     path /path/to/file
     tag example.service
   </source>

   #Add hostname and service_name to all events with "example.service" tag
   <filter example.service>
     @type record_transformer
     <record>
       service_name ${tag}
       hostname "#{Socket.gethostname}"
     </record>
   </filter>

   #Forward all events to New Relic

   <match>
     @type newrelic
     license_key YOUR_LICENSE_KEY
   </match>
   ```

2. 変更が適用されたことを確認するために、Fluentdサービスを再起動します。

<InstallFeedback />

## EUアカウント用Fluentdプラグインの設定 [#eu-configuration]

デフォルトでは、Fluentd プラグインはログを米国のエンドポイント `https://log-api.newrelic.com/log/v1`に転送します。New Relic 組織が [EU データ センター](/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers)にある場合は、 `base_uri` プロパティを EU エンドポイントに手動で設定する必要があります。例えば：

```apacheconf
#Tail one or more log files
<source>
  @type tail
  <parse>
    @type none
  </parse>
  path /path/to/file
  tag example.service
</source>

#Add hostname and service_name to all events with "example.service" tag
<filter example.service>
  @type record_transformer
  <record>
    service_name ${tag}
    hostname "#{Socket.gethostname}"
  </record>
</filter>

#Forward all events to New Relic EU Endpoint
<match>
  @type newrelic
  license_key YOUR_LICENSE_KEY
  base_uri https://log-api.eu.newrelic.com/log/v1
</match>
```

## Fluentdプラグインのテスト [#test-plugin]

Fluentdプラグインがログファイルからの入力を受けているかどうかをテストする。

1. 次のコマンドを実行して、テストログメッセージをログファイルに追加します。

   ```shell
   echo "test message" >> /PATH/TO/YOUR/LOG/FILE
   ```

2. [ログ UI](https://one.newrelic.com/launcher/logger.log-launcher) で `test message`を検索します。

## ログデータを表示する [#find-data]

すべてが正しく構成され、データが収集されている場合は、次の両方の場所にログが表示されます。

* [ログUI](https://one.newrelic.com/launcher/logger.log-launcher)
* [NRQL クエリ](/docs/chart-builder/use-chart-builder/choose-data/use-advanced-nrql-mode-specify-data)を実行するためのツール。たとえば、次のようなクエリを実行できます。

```sql
SELECT * FROM Log
```

ログ管理機能を有効にしてもデータが表示されない場合は、[標準のログトラブルシューティング手順](/docs/logs/log-management/troubleshooting/no-log-data-appears-ui/)に従ってください。

## チューンナップログ Fluentd バッファ [#tuneup-buffer]

デフォルトでは、プラグインは5秒ごとにログをNewRelicに送信します。このタイミングを変更する場合は、次の例に従って、構成に`<buffer>`ブロックを追加します。

```apacheconf
[...]

# Forward all events to New Relic EU Endpoint
<match>
  @type newrelic
  license_key YOUR_LICENSE_KEY

  <buffer time>
    timekey 60s
  </buffer>
</match>
```

詳細については、バッファ構成についての [Fluentd のドキュメントを参照してください](https://docs.fluentd.org/configuration/buffer-section) 。

## UTF-16LE から UTF-8 への変換を構成する

この Microsoft SQL Server エラー ログの例では、Fluentd を使用して、取り込みに[ 必要な UTF-8 エンコード を使用して、UTF](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#general)[ -16LE](https://docs.fluentd.org/input/tail#encoding-from_encoding) でエンコードされたログを New Relic に送信します。この例を他のエンコーディングに採用することもできます。

<Callout variant="tip">
  これらのログに適切な`logtype`も追加します。
</Callout>

```apacheconf
#Tail one or more log files
<source>
  @type tail
  <parse>
    @type none
  </parse>
  path "D:/sqlserver/error.log"
  tag example.service
  encoding UTF-8
  from_encoding UTF-16LE
</source>

#Add hostname and service_name to all events with "example.service" tag
<filter example.service>
  @type record_transformer
  <record>
    service_name ${tag}
    hostname "#{Socket.gethostname}"
    logtype MSSQL
  </record>
</filter>

#Forward all events to New Relic
<match>
  @type newrelic
  license_key YOUR_LICENSE_KEY
</match>
```

## Shift-JISからUTF-8への変換を設定する

Shift-JIS (SP932) でエンコードされた日本語ログファイルは[、必要な UTF-8 エンコード](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#general)に変換され、New Relic にログデータをインポートして送信するために必要になります。

```apacheconf

<source>
#Tail one or more log files
  @type tail
  path C:\opt\fluent\cp932text.log  # Full path of the log file you want to collect
  tag example.service
  from_encoding CP932
  encoding UTF-8
  <parse>
    @type none
  </parse>
</source>

#Forward all events to New Relic
<match>
  @type newrelic
  license_key YOUR_LICENSE_KEY
</match>

```

## 次は何ですか？ [#what-next]

[ログ UI](/docs/logs/log-management/ui-data/use-logs-ui/)を使用して、プラットフォーム全体のログ データを調べます。

* [ログインコンテキスト](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/)機能を使用してログを転送することにより、アプリケーションとプラットフォームのパフォーマンスデータの両方をより深く把握できます。
* [アラートを](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/)設定します。
* [データをクエリ](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/)し、[ダッシュボードを作成します](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/)。

## ログ転送を無効にする [#disable]

ログ転送機能を無効にするには、 [Fluentd documentation](https://www.fluentd.org) に記載されている標準的な手順に従ってください。New Relic では、他に何もする必要はありません。