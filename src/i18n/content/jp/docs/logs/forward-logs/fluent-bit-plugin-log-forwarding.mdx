---
title: ログ転送用のFluentBitプラグイン
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
  - Fluent Bit
metaDescription: 'Install and configure the New Relic logging plugin for Fluent Bit, so you can use enhanced log management capabilities.'
freshnessValidatedDate: '2024-10-30T00:00:00.000Z'
translationType: machine
---

ログデータがすでにFluentBitによって監視されている場合は、 [Fluent](https://fluentbit.io/) Bit出力プラグインを使用して、NewRelicでログデータを転送および強化できます。

Fluent Bit ログをNew Relicに転送すると、ログ データの収集、処理、探索、書き込み、集計の機能が強化されます。<InlinePopover type="logs" /> Fluent Bit をインストールするには、次のオプションがあります。

* [Kubernetesへのインストレーション](#k8s-installation)
* [Dockerイメージの使用](#helm-docker-image)
* [オンホストのインストール](#on-host-installation)

## Kubernetesへのインストレーション [#k8s-installation]

New Relic には、ログを New Relic ログ管理に転送するための[Fluent Bit 出力プラグイン](https://github.com/newrelic/newrelic-fluent-bit-output)があります。 このプラグインは、スタンドアロンの Docker イメージとしてKubernetesクラスタにインストールできます。このプラグインは、 Kubernetesプラグインとも呼ばれる DaemonSet として機能します。

[Helm チャートを](https://github.com/newrelic/helm-charts/tree/master)使用してクラスターにインストールするには、次の 2 つの方法があります。

* ガイド付きインストールを通じて
* 手動インストール

### ガイド付きインストールを使用する [#helm-guided-install]

[`newrelic-logging`](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging)チャートはスタンドアロンとしても機能しますが、 [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle)チャートの一部としてインストールすることをお勧めします。

これをインストールする最良の方法は[、ガイド付きのインストール](/install/kubernetes/)プロセスを使用することです。 このガイド付きインストールでは、インストールに必要な Helm コマンドが生成されます。

### 手動インストール

Helm を使用して手動でインストールすることもできますが、このオプションは推奨されません。 リポジトリをインストールするには、次のコマンドを実行します。

```bash
    helm repo add newrelic https://helm-charts.newrelic.com
```

リポジトリを更新するには、次のコマンドを実行します。

```bash
    helm repo update newrelic
```

<Callout variant="tip">
  `newrelic-logging` Helm チャートで[サポートされている設定を](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#supported-configuration-parameters)参照してください。
</Callout>

アンインストールする場合は、 [Kubernetesインテグレーションのアンインストール」を](/docs/kubernetes-pixie/kubernetes-integration/installation/uninstall-kubernetes/)参照してください。

## Dockerイメージの使用 [#helm-docker-image]

Kubernetes独自のカスタム インテグレーションをお持ちの場合は、 プラグインに付属の[ Docker イメージ](https://hub.docker.com/r/newrelic/newrelic-fluentbit-output) [`newrelic-fluent-bit-output`](https://github.com/newrelic/newrelic-fluent-bit-output)を使用することをお勧めします。または、Docker イメージをベースイメージとして使用し、独自のカスタム設定ファイルをレイヤー化することもできます。

## オンホストのインストール [#on-host-installation]

Fluent Bit プラグインをホスト上でインストールするには、次の手順に従います。

1. GitHub で New Relic の[Fluent Bit プラグイン リポジトリ](https://github.com/newrelic/newrelic-fluent-bit-output)を開きます。

2. リポジトリ ページから、 [リポジトリをクローンまたはダウンロードします](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)。

3. プラグインをビルドするには、次のコマンドを実行します。

```sh
cd newrelic-fluent-bit-output && make all
```

4. `out_newrelic.so`または`out_newrelic_winXX.dll`を`fluent-bit`デーモンがアクセスできる場所に保存します。

<Callout variant="tip">
  プラグインを自分でコンパイルしたくない場合は、 [GitHub リポジトリのリリース ページ](https://github.com/newrelic/newrelic-fluent-bit-output/releases)からコンパイル済みバージョンをダウンロードしてください。
</Callout>

### Fluent Bit プラグインをアップグレードする [#upgrade-plugin]

Fluent Bit プラグインをアップグレードする前に、次の NRQL クエリを実行して、システムで使用している出力プラグインの現在のバージョンを見つけます。

```sql
FROM K8sContainerSample 
SELECT latest(containerImage) 
WHERE podName like '%newrelic-logging%' 
FACET clusterName
```

<Callout variant="caution">
  [セキュリティ脆弱性 (CVE-2024-4323) は、](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-4323) Fluent Bit 出力プラグイン バージョン 1.16.0 ～ 1.19.2 に影響します。 これらのバージョンのいずれかを使用している場合は、バージョン 2.0.0 以上に更新してください。 詳細については、セキュリティ速報[NR24-01 - Fluent Bit](/docs/security/new-relic-security/security-bulletins/security-bulletin-nr24-01/)を参照してください。
</Callout>

更新するには、インストレーションの指示に従うか、 [GitHub リポジトリ](https://github.com/newrelic/newrelic-fluent-bit-output/releases)から最新のコンパイル済みバージョンを取得します。

## FluentBitプラグインを構成します [#configure-plugin]

Fluent Bit は、New Relic にデータを出力するために、New Relic プラグインと New Relic <InlinePopover type="licenseKey" />の場所を認識する必要があります。

<Callout variant="important">
  設定ファイルを編集するときは、空白に注意してください。インデントには必ず4つのスペースを使用し、キーと値の間には1つのスペースを使用してください。
</Callout>

Fluent Bit プラグインを構成するには、次の手順に従います。

1. プラグイン ディレクトリで`plugins.conf`ファイルを探すか作成します。

2. `plugins.conf`ファイルで、 `fluent-bit.conf`ファイルに隣接する`out_newrelic.so`への参照を追加します。

```ini
[PLUGINS]
    Path /PATH/TO/newrelic-fluent-bit-output/out_newrelic.so
```

3. `fluent-bit.conf`ファイルで、 `service`ブロックの下に次の行を追加します。

```ini
[SERVICE]
    # This is the main configuration block for fluent bit.
    # Ensure the follow line exists somewhere in the SERVICE block
    Plugins_File plugins.conf
```

4. `fluent-bit.conf`ファイルの最後に次の行を追加して、入力、フィルター、出力セクションを設定します。 プレースホルダー テキストを<InlinePopover type="licenseKey" />に置き換えます。

   ```ini
   [INPUT]
       Name tail
       Tag  my.tag
       Path /PATH/TO/YOUR/LOG/FILE
       
   # If you have multiple sources, just add another [INPUT] section like this:
   [INPUT] 
       Name tail 
       Tag  my.other.tag 
       Path /PATH/TO/SOME/OTHER/LOG/FILE 

   # Having multiple [FILTER] blocks allows you to control the flow of changes as they read top down. 
   [FILTER]
       Name modify
       # Here we only match on one tag, my.tag, defined in the [INPUT] section earlier
       Match  my.tag
       # Below, we're renaming the host.cpu attribute to CPU
       Rename host.cpu CPU

   [FILTER]
       Name   record_modifier
       # Match on all tags, *, so all logs get decorated per the Record clauses below. Record adds attributes + their values to each record.
       Match  *
       # Adding a logtype attribute ensures your logs will be automatically parsed by our built-in parsing rules
       Record logtype nginx
       # Add the server's hostname to all logs generated
       Record hostname ${HOSTNAME}

   [OUTPUT]
       Name       newrelic
       Match      *
       licenseKey YOUR_LICENSE_KEY
   ```

5. Fluent Bit インスタンスを再起動します。 次のコマンドを実行します:

   ```sh
   fluent-bit -c /PATH/TO/fluent-bit.conf
   ```

## FluentBitプラグインをテストする [#test-plugin]

Fluent Bitプラグインがログファイルから入力を受信しているかどうかをテストするには、次の手順に従います。

1. 次のコマンドを実行して、テスト ログメッセージをログファイルに追加します。

   ```sh
   echo "test message" >> /PATH/TO/YOUR/LOG/FILE
   ```

2. [ログ UI](https://one.newrelic.com/launcher/logger.log-launcher)で`test message`を検索します。

その他のオプションについては、 [Fluent Bit ドキュメントの`modify`フィルター](https://docs.fluentbit.io/manual/pipeline/filters/modify)を参照してください。 [インフラストラクチャエージェントを使用してログを転送する](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/#automatically-inserted-attributes)方法については、ドキュメントも参照してください。

## オプション：プラグイン属性を構成します [#instrument-plugin]

Fluent Bit プラグインをインストールして[設定し](#configure-plugin)たら、次の属性を使用して、プラグインが New Relic にデータを送信する方法を設定できます。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        鍵
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `licenseKey`
      </td>

      <td>
        <InlinePopover type="licenseKey" />。 `licenseKey` ( <DNT>**recommended**</DNT> ) または`apiKey`いずれかを使用し、両方を使用することはできません。 デフォルト： `none`
      </td>
    </tr>

    <tr>
      <td>
        `maxBufferSize`
      </td>

      <td>
        ペイロードが送信する最大サイズ（バイト単位）。デフォルト： `256000`
      </td>
    </tr>

    <tr>
      <td>
        `maxRecords`
      </td>

      <td>
        一度に送信するレコードの最大数。デフォルト： `1024`
      </td>
    </tr>

    <tr>
      <td>
        `apiKey`
      </td>

      <td>
        <DNT>**Deprecated.**</DNT> New Relic[サイトの挿入キー](/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api#register)を受け取りますが、`licenseKey` プロパティを使用することをお勧めします。 `licenseKey`または`apiKey`のいずれかを使用してください。両方は使用できません。
      </td>
    </tr>

    <tr>
      <td>
        `endpoint`
      </td>

      <td>
        デフォルトは`https://log-api.newrelic.com/log/v1`です。 EUキーを使用している場合は、次のように設定する必要があります。 `https://log-api.eu.newrelic.com/log/v1`
      </td>
    </tr>
  </tbody>
</table>

## ログデータを表示する [#find-data]

すべてが正しく設定され、New Relic がデータを収集している場合は、次の両方の場所にログ データが表示されます。

* [ログUI](https://one.newrelic.com/launcher/logger.log-launcher)

* [NRQL クエリを](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-query-data/)実行するためのツール。 たとえば、次のようなクエリを実行できます。

```sql
SELECT * 
FROM Log
```

ログ管理機能を有効にしてもデータが取得されない場合は、標準のログ[トラブルシューティング手順](/docs/logs/troubleshooting/no-log-data-appears-ui/)に従ってください。

## 次は何ですか？ [#what-next]

[ログ UI](/docs/logs/ui-data/use-logs-ui/)を使用して、プラットフォーム全体のログ データを調べます。

* [ログインコンテキスト](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/)機能を使用してログを転送することにより、アプリケーションとプラットフォームのパフォーマンスデータの両方をより深く把握できます。

* [アラート](/docs/alerts/create-alert/create-alert-condition/alert-conditions/)を設定します。

* [データをクエリ](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/)し、[ダッシュボードを作成します](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/)。

## ログ転送を無効にする [#disable]

ログ転送機能を無効にするには、 [Fluent Bit ドキュメント](https://fluentbit.io/)の標準手順に従ってください。 New Relic では他に何もする必要はありません。