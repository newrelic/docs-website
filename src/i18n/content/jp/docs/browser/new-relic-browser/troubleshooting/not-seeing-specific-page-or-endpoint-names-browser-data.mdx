---
title: ブラウザのデータに特定のページやエンドポイント名が表示されない
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: 'Troubleshooting tips if you do not see expected page views, URLs, or AJAX when using New Relic browser or SPA monitoring.'
freshnessValidatedDate: never
translationType: machine
---

## 問題

<InlinePopover type="browser"/>[<DNT>**Page views**</DNT> UI ページ](/docs/browser/new-relic-browser/additional-standard-features/page-views-insights-your-sites-popularity)または[<DNT>**AJAX**</DNT> UI ページ](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls)で特定のページまたはエンドポイントのパフォーマンスの内訳を探しています。 UI に探している URL グループが表示されないか、 `/`と`/*`のみが表示されます。 この動作は、 `BrowserInteraction`イベントの SPA データにも表示され、 `browserInteractionName` 、 `targetGroupedUrl` 、および`previousGroupedUrl`属性に適用されます。

## 解決

" ブラウザモニタリングは、アプリケーションが最初にデプロイされたときに、自動的に"がページビューのグループ化を学習し、その情報を [の URL の許可リストに追加します](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls) 。このグループ分けが、現在のページビュー情報と一致しないことがあります。

この問題を解決するには、アプリケーションの [URL セグメントリストの設定](/docs/browser/new-relic-browser/configuration/browser-settings-ui-options-apdex-geography#enabling) を管理し、 [既存のルールの編集](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls#maintaining) または [サイトの URL を構成するドメインと URL セグメント](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls#adding) を追加します。必要なルールを追加すると、UIに情報の内訳が表示されるようになります。

ここでは、いくつかの有用なヒントを紹介します。

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Adding segments to your allow list**
        </DNT>
      </th>

      <th>
        <DNT>
          **Tip**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        一定のURLセグメントを使用する。
      </td>

      <td>
        多くのページビューを経ても変わらないURLセグメントのみを追加します。IDや特定のカテゴリーなどのユニークなセグメントは追加しないでください。これは、 [メトリックのグルーピングの問題につながる可能性があるからです。](/docs/features/metric-grouping-issues) 。
      </td>
    </tr>

    <tr>
      <td>
        正確に入力してください。
      </td>

      <td>
        大文字小文字を含めた完全一致でURLセグメントを入力してください。
      </td>
    </tr>

    <tr>
      <td>
        既存のルールを利用する。
      </td>

      <td>
        あるドメインに対してすでにルールが表示されている場合

        1. <DNT>
             **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Settings > Segment allow lists**
           </DNT>

           に移動します。

        2. 新しいルールを作成するのではなく、既存のルールを編集し、UI の

           <DNT>
             **Allow listed segments**
           </DNT>

           フィールドにドメインを追加します。
      </td>
    </tr>

    <tr>
      <td>
        グループのサブドメインです。
      </td>

      <td>
        `foo.domain.com`や`bar.domain.com`などの同様のサブドメインを`*.domain.com`の下にグループ化します。このグループ化は、トップレベル ドメイン名の直前に行う必要があります。
      </td>
    </tr>

    <tr>
      <td>
        シングルページのアプリを設定します。
      </td>

      <td>
        サイトがシングルページ アプリケーションであり、ページ ビューの下に`/`のみが表示される場合、グループ化は正しく機能しています。 New Relic は AJAX の読み込み時に後続のリクエストを記録し、 [<DNT>**AJAX**</DNT>ページ](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls)にさらに詳細な情報が含まれます。 そうでない場合は、このドキュメントのヒントに従ってください。
      </td>
    </tr>

    <tr>
      <td>
        必要に応じてルールを削除する。
      </td>

      <td>
        ルールを削除する必要がある場合は、 [support.newrelic.com](https://support.newrelic.com/) でサポートを受けてください。
      </td>
    </tr>
  </tbody>
</table>
