---
title: Java用New Relicの概要
tags:
  - Agents
  - Java agent
  - Getting started
metaDescription: 'For an overview of New Relic''s Java agent (compatibility, requirements, installation, configuration), start here.'
freshnessValidatedDate: never
translationType: human
---

New RelicのJavaエージェントを使用すると、コード内のパフォーマンスの問題から小さなエラーまですべてを追跡できます。エージェントは1分ごとに[メトリックタイムスライスとイベントデータ](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data)をNew Relicのユーザーインタフェースに載せます。該当するデータの所有者（オーナー）はインタフェースにサインインしてデータを使用し、ウェブサイトのパフォーマンスを確認できます。

New Relic Javaエージェントを使用して、[「私のアプリが遅い」のチュートリアル](/docs/journey-app-slow/root-causes/)でアプリのパフォーマンスの問題を解決します。

<Callout variant="tip">
  Javaの動向についてご興味がありますか？弊社のレポート[2024年Javaエコシステムの現状](https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem)をご覧ください。
</Callout>

## インストレーション [#java-installation]

Javaエージェントを使用するには、

1. システムが[Javaエージェントの互換性および要件](/docs/compatibility-requirements-java-agent)を満たしていることを確認してください。
2. まだの場合は、無料のアカウントにサインアップしてください。<InlineSignup/>
3. ランチャーを使用して、または次の[インストールドキュメント](/install/java/)に従って、Javaエージェントをインストールします。

<ButtonGroup>
  <ButtonLink
    role="button"
    to="/docs/agents/java-agent/installation/install-java-agent"
    variant="normal"
  >
    インストールドキュメントを読む
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.newrelic.com/marketplace/install-data-source?state=f91bc85d-0574-6e23-b90a-4d89c7c12866"
    variant="primary"
  >
    Javaデータの追加
  </ButtonLink>
</ButtonGroup>

[New Relic UIでアプリのパフォーマンスを表示する](/docs/apm/applications-menu/monitoring/apm-overview-page)には、<DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Summary**</DNT>に移動します。APMユーザーインタフェースには専用の[<DNT>**JVM metrics**</DNT> ページ](/docs/agents/java-agent/features/jvm-metrics-page)、[トランザクション](/docs/apm/transactions)と[エラー](/docs/apm/applications-menu/error-analytics/introduction-error-analytics)の詳細、[スレッドプロファイラーツール](/docs/apm/applications-menu/events/thread-profiler-tool)が含まれており、Javaスレッドのサンプリング、スタックトレースのレポート作成などを実行できます。

また、[エージェントインストゥルメンテーションを拡張](#extend-instrumentation)し、当社の[メトリクスとイベントエクスプローラー](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer)や[ダッシュボード](/docs/query-your-data/explore-query-data/dashboards/introduction-new-relic-one-dashboards)など、他のNew Relic機能でデータを調査することもできます。

## 起動設定 [#h2-startup]

Javaエージェントは、`newrelic.jar`と同じディレクトリにある必要がある、`newrelic.yml`ファイルからスタートアップ設定を読み込みます。また、Javaシステムのプロパティを使用して設定を上書きすることもできます。

エージェントは、スタートアップ（ブートストラップ）時に、`license_key`と`app_name`の設定が必要です。ログファイルの場所やその他の設定は`newrelic.yml`ファイルで[カスタマイズ](/docs/agents/java-agent/configuration/java-agent-configuration-config-file)できます。また、アプリケーションサーバーが[同一のJVMで複数のアプリケーション](/docs/agents/java-agent/configuration/automatic-application-naming)を実行している場合は、命名設定を調整することができます。

## 設定オプション [#h2-configuration]

New Relicウェブインタフェースからアプリケーションのレポーティングを[サーバーサイドコンフィグレーション](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration)を使用して設定できます。変更内容はJVMを再起動した際にアプリケーションをレポートするすべてのエージェントに適用されます。ただし、サーバーサイドコンフィグレーションを使用する場合は、引き続き必要な設定（`license_key`と`app_name`）をローカル設定ファイルに保持する必要があります。

トランザクションのトレースとエラーのスナップショットの両方において、オプションでHTTPパラメーターを記録することもできます。HTTPパラメーターには、クレジットカード番号のような機密情報が含まれる場合があります。エージェントには特定の名前を持ったパラメーター以外のHTTPパラメーターを収集するような、[データセキュリティを確保するための設定オプション](/docs/agents/java-agent/getting-started/apm-agent-security-java)が複数存在します。

## APMおよびインフラストラクチャデータのログを表示 [#logs-context]

また、ログとアプリケーションのデータを統合して、トラブルシューティングをより簡単かつ迅速にできます。[コンテキストのログ](/docs/logs/logs-context/java-configure-logs-context-all/)では、エラーとトレースに関連するログメッセージをアプリケーションのUIで直接表示できます。また、Kubernetesクラスタなど、[インフラストラクチャデータ](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/)のコンテキストでログを表示することもできます。別のUIページに切り替える必要はありません。

## 追加のインストゥルメンテーション [#extend-instrumentation]

Javaエージェントをインストール後、以下のいずれかの方法を使用してインストゥルメンテーションを拡張できます。

* [カスタムインストゥルメンテーション：](/docs/agents/manage-apm-agents/agent-metrics/custom-instrumentation) 注釈またはXMLを使用してJavaカスタムインストゥルメンテーションを実装します。

* [ディストリビューティッド（分散）トレーシングの有効化](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing)[:](/docs/agents/manage-apm-agents/agent-metrics/collect-custom-attributes) リクエストのパスが分散されると、複数サービスのアーキテクチャー全体に展開する様子を見ることができます。

* [カスタム属性の収集：](/docs/agents/manage-apm-agents/agent-metrics/collect-custom-attributes) APIまたはXMLファイルでカスタム属性を収集します。

* [JavaエージェントAPI：](/docs/agents/java-agent/custom-instrumentation/java-agent-api) APIを使用してJavaエージェントの制御、カスタマイズまたは機能を拡張します。

* [ブラウザのインストゥルメンテーション：](/docs/browser/new-relic-browser/page-load-timing-resources/page-load-timing-process)Javaエージェントを

  <InlinePopover type="browser">
    [](/docs/browser/new-relic-browser/getting-started/new-relic-browser)
  </InlinePopover>

  と統合してエンドユーザーのアクティビティを可視化します。

* [Javaカスタムインストゥルメンテーションのブレーカー：](/docs/agents/java-agent/custom-instrumentation/circuit-breaker-java-custom-instrumentation) ブレーカーを使用して、アプリケーションが過剰インストゥルメンテーションされないように保護します。

* [YAMLによるカスタムインストゥルメンテーション：](/docs/agents/java-agent/custom-instrumentation/custom-jmx-instrumentation-yaml) YAMLカスタムインストゥルメンテーションファイルを使用してカスタムJMXメトリクスを表示します。

* [JVMメトリクスページ：](/docs/apm/applications-menu/monitoring/jvm-metrics-page) 最も一般的なアプリケーションサーバーからJMXを使用してメトリクスを収集します。

* [オープンソーステレメトリー:](/docs/integrations/open-source-telemetry-integrations/get-started/introduction-new-relics-open-source-telemetry-integrations) [Kamon Reporter](/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/kamon-reporter)、[OpenTelemetryエクスポーター](/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/new-relics-opentelemetry-integration)、[Micrometerメトリクスのレジストリ](/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/new-relics-micrometer-integration)、[Java Telemetry SDK](/docs/data-ingest-apis/get-data-new-relic/new-relic-sdks/telemetry-sdks-send-custom-telemetry-data-new-relic)などのさまざまなツールを提供しています。

## JVMの再起動タイミング [#jvm_restart]

設定ファイルまたはカスタムXMLを変更する場合は、ほぼすべての場合にJVMを再起動する必要があります。再起動が**不要**なのは、以下の4つの場合に限定されます。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **JVM restart is not required for...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        ログレベルまたは監査モードの変更
      </td>

      <td>
        単に[Javaエージェント設定ファイル](/docs/agents/java-agent/configuration/java-agent-configuration-config-file)で`log_level`や`audit_mode`を変更する場合は、JVMを再起動する必要はありません。
      </td>
    </tr>

    <tr>
      <td>
        カスタムインストゥルメンテーションXMLファイル
      </td>

      <td>
        JVMを再起動するかどうかは、Javaエージェントのバージョンによって異なります。

        * 3.15.0以上：extensionsフォルダ内のカスタムインストゥルメンテーションXMLファイルを更新する場合、更新内容は1分以内に自動的に再読み込みされます。
        * Javaエージェントのバージョン3.15.0以下：バージョン3.15.0以下のエージェントを使用している場合は、JVMを再起動する必要があります。
      </td>
    </tr>

    <tr>
      <td>
        ブレーカーの変更
      </td>

      <td>
        Javaカスタムインストゥルメンテーション用の[ブレーカーを変更](/docs/agents/java-agent/custom-instrumentation/circuit-breaker-java-custom-instrumentation#troubleshooting)する場合は、JVMの再起動は不要です。
      </td>
    </tr>

    <tr>
      <td>
        無視されたまたは想定済みのエラー
      </td>

      <td>
        `newrelic.yml`ファイルを設定してエラーを無視または想定している場合は、JVMを再起動する必要はありません。これには、バージョン3.40.0以上のJavaエージェントを使用している場合に、`newrelic.yml`ファイルにステータスコードまたはクラスを追加することが含まれます。例：

        * `ignore_status_codes`
        * `expected_status_codes`
        * `ignore_classes`
        * `ignore_messages`
        * `expected_classes`
        * `expected_messages`
      </td>
    </tr>
  </tbody>
</table>

その他すべての変更についてはエージェントの再起動、つまりJVMの再起動が必要です。

## JSR 163準拠 [#jvm]

New Relic Javaエージェントはウェブのトランザクションを監視し、その情報を受信し、強力な[データセキュリティ](/docs/accounts-partnerships/accounts/security/data-security)対策を施したNew Relicのユーザーインタフェースにその情報を伝達します。このエージェントは、JVMの起動処理を変更することでJVMによってアクティブ化される、JSR 163準拠の`javaagent`としてパッケージ化されています。有効化されると、エージェントはそれ自体をクラス読み込み処理の中に組み込み、バイトコードインストゥルメンテーション（bci）を使用してクラスメソッドをインストゥルメントします。

Webアプリケーションへの影響を最小限に抑えるように設計されたクラスはすべて、ユーザー独自のクラスと衝突しないように、`newrelic`パッケージネームスペースに存在します。このエージェントは、ソフトウェアプローブの挿入にASMのbciエンジンを使用します。

このエージェントは、オペレーティングシステム、Javaのバージョン、システムのプロパティ、New Relicの設定ファイルなど、使用中のホスト環境に関する基本的な情報を受信します。また、このエージェントはJVMとJMXからデータをポーリングします。

## トラブルシューティング手順 [#troubleshoot]

問題がある場合は、そのセクションの[データが表示されない](/docs/apm/agents/java-agent/troubleshooting/no-data-appears-java)、およびその他のトラブルシューティング文書を参照してください。
