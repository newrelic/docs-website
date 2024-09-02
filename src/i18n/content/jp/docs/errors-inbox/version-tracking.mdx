---
title: Errors Inboxによるバージョン追跡
metaDescription: 'Errors inbox is an error tracking solution designed to give you the tools to proactively detect, triage, and resolve errors across your full application stack.'
freshnessValidatedDate: '2024-05-13T00:00:00.000Z'
translationType: machine
---

<SideBySide>
  <Side>
    Errors Inboxバージョン追跡により、開発者は各コンポーネントを監視して、正確性と成功を確認できます。 あなたとあなたのチームが、あなたのグループの 1 つでエラー率が急上昇したという集計を受け取ったとします。 [エラーの原因](/docs/tutorial-error-tracking/respond-outages/)を特定し、カナリアデプロイメントをリリースすることを決定します。 バージョン追跡を使用すると、修正と以前の修正を監視して、問題が解決されたかどうか、または最初からやり直す必要があるかどうかを判断できます。
  </Side>

  <Side>
    <img
      width="60%"
      title="errors inbox change tracking"
      alt="A screenshot that depicts error occurrences by version"
      src="/images/errors-inbox_screenshot-crop_errors-inbox-change-tracking.webp"
    />
  </Side>
</SideBySide>

## エラーステータスによるトリアージ [#error-status]

受信トレイをトリアージするときに、さまざまなステータスから選択できます。 エラーをすぐに解決したり、無視されるようにマークしたりすることもできます。 場合によっては、次のバージョンまたは特定のバージョンで問題を解決したいこともあります。

<img
  style={{ align: 'left',maxWidth: '100%' }}
  title="Screenshot showing resolve in version"
  alt="Screenshot showing resolve in version"
  src="/images/errors-inbox_screenshot-full_resolve-in-version.webp"
/>

次のいずれかのステータスを設定し、ステータスごとに受信トレイをフィルタリングできます。

* <DNT>
    **Unresolved**
  </DNT>

  : これはエラー グループのデフォルトのステータスです。

* <DNT>
    **Resolve in next version**
  </DNT>

  : 次のリリースでこのエラー グループを解決する予定の場合は、このステータスを使用することをお勧めします。 このオプションを有効にするには、[ ](/docs/change-tracking/change-tracking-introduction/#start-tracking)Errors Inboxが新しいリリースを検出し、エラー グループが実際に解決されたことを確認できるように、アプリケーションの 変更追跡 (変更追跡機能) を設定する必要があります。次のバージョンまたは将来のバージョンでもエラー グループが引き続き検出された場合、エラー グループは自動的に未解決となり、回帰としてマークされ、回帰に関する Slack 通知が届きます。

* <DNT>
    **Resolve in specific version**
  </DNT>

  : 次の状況でエラー グループを解決するには、このオプションを選択します。

  * エラーグループが特定のバージョンで解決されることがわかっている場合
  * 既存のバージョンでエラーグループが解決されていることがわかっている場合
  * 特定のバージョンを入力したい場合

  このオプションを有効にするには、アプリケーションまたはサービスの[バージョン追跡を計測する](#instrument-version-tracking)必要があります。 同等以上のセマンティック バージョンを持つエラー発生が検出されると、エラー グループは自動的に未解決となり、回帰としてマークされ、回帰に関する Slack 通知が届きます。

* <DNT>
    **Resolve**
  </DNT>

  : エラー グループを解決済みとして設定すると、フィルターを更新して解決済みのエラー グループを含めない限り、そのエラー グループがデフォルトの受信トレイ ビューに表示されなくなります。 エラー グループを解決済みとしてマークした後に、エラー グループのフィンガープリントと一致するイベントが発生すると、ステータスは自動的に**Unresolved** \[未解決]にリセットされます。 これは回帰を識別するのに役立ちます。

* <DNT>
    **Ignore**
  </DNT>

  : 無視されたエラーを含めるようにフィルターが更新されない限り、またはエラー グループの無視を停止するまで、受信トレイ ビューでエラー グループが非表示になります。

<Callout variant="tip">
  オプション<DNT>**Resolve in next version**</DNT>と<DNT>**Resolve in specific version**</DNT>は、チームがセマンティック バージョン管理を使用している場合にのみサポートされます。
</Callout>

## バージョン追跡フィールドを理解する [#understand-version-tracking-fields]

バージョン追跡をインストルメント化する前に、エラー受信箱が結果をどのように分類するかを理解することが重要です。APM および OpenTelemetry アプリケーションでは、エラーを追跡するときに、次のイベント フィールドがチェックされ、_この順序で_表示されます。

1. `service.version`
2. `tags.service.version`
3. `tags.releaseTag`
4. `tags.commit`

モバイル アプリケーションの場合、イベント フィールドは`appVersion`です。

ブラウザ アプリケーションの場合、イベント フィールドは`application.version`です。

## 楽器のバージョン追跡 [#instrument-version-tracking]

バージョン追跡からデータを取得するには、関連するエンティティのフィールドを構成する必要があります。

* [OpenTelemetry エンティティの場合は、 `service.version`を構成します](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-resources/)。

* APM エンティティの場合は、APM エンティティの環境変数を構成します。

  * [Go](/docs/apm/agents/go-agent/configuration/go-agent-code-level-metrics-config/#errors-inbox-configuration)
  * [Java](/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#errors-inbox-configuration)
  * [.NET](/docs/apm/agents/net-agent/configuration/net-agent-configuration/#errors-inbox-configuration)
  * [Node.js](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#errors-inbox-configuration)
  * [PHP](/docs/apm/agents/php-agent/configuration/php-agent-configuration/#errors-inbox-configuration)
  * [Python](/docs/apm/agents/python-agent/configuration/python-agent-configuration/#errors-inbox-configuration)
  * [Ruby](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#errors-inbox-configuration)

* [モバイル エンティティの場合は、 `appVersion`を構成します](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/set-application-version/)。

* [ブラウザエンティティの場合は、 `application.version`を使用します](/docs/browser/new-relic-browser/browser-apis/setApplicationVersion/)。

## バージョンでフィルタリングする [#filter-by-version]

バージョン追跡を設定すると、エラー グループが各リリースからデータを自動的にキャプチャします。バージョンごとにフィルタリングできます。

複数のバージョンを持つエラー グループをフィルタリングするには、+ 演算子を使用して`OR`条件を選択します。

<img
  style={{ align: 'left',maxWidth: '50%' }}
  title="version tracking errors inbox"
  alt="A screenshot depicting how to filter by versions in errors inbox. "
  src="/images/errors-inbox_screenshot-crop_filter-errors-by-versions.webp"
/>

[変更追跡を](/docs/change-tracking/change-tracking-view-analyze/)使用して展開を監視できます。これを行った場合は、エラーのバージョンとデプロイメントのバージョンを一致させることができるように、デプロイメントがエンティティにインストルメントしたのと同じバージョン形式と一致していることを確認することが重要です。

## エラーグループごとにバージョンを検索 [#find-versions-by-error-group]

また、エラー グループをクリックして、エラー グループの最初と最後に確認された日付に一致する各デプロイメントを表示することもできます。最初に確認した日から 30 分以内、最後に確認した日から 30 分以内に公開されていたバージョンのみが表示されます。

<img
  style={{ align: 'left',maxWidth: '50%' }}
  title="error date"
  alt="A screenshot depicting last seen date of errors"
  src="/images/errors-inbox_screenshot-full_error-date.webp"
/>

発生した各エラーをバージョン別にグループ化して表示するグラフを使用すると、エラー グループをさらに詳しく調べることができます。

変更追跡を使用してデプロイメントも設定している場合は、このグラフにデプロイメント マーカーが表示されます。これらのマーカーは、各デプロイメントがいつリリースされたかを示します。マーカーをクリックしてデプロイメントに移動します。
