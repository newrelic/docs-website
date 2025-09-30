---
title: AJAXデータ収集のトラブルシューティング
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Troubleshooting for not seeing AJAX data for your browser app.
freshnessValidatedDate: never
translationType: machine
---

## 問題

ブラウザアプリに、 [AJAXデータ](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls) が表示されていません。

## 解決

アプリケーションが[<InlinePopover type="browser" />](/docs/browser/new-relic-browser/installation-configuration/troubleshooting-browser-monitoring-installation)でインストルメントされており、他の[Pro 機能](/docs/browser/new-relic-browser/browser-pro-features)のデータを正しく収集している場合は、次の手順に従います。

<Steps>
  <Step>
    ## ページがインストゥルメントされたことを確認します [#verify-page-intrum]

    XMLHttpRequest を使用している場合は、 browserの開発コンソールを使用して、ページが正しくインストゥルメントされたことを確認してください。 コンソールに`XMLHttpRequest`および/または`fetch`を入力します。 インストゥルメンテーションが失敗した場合は、次のようなメッセージが表示されます。

    ```js
    // XMLHttpRequest
    ƒ XMLHttpRequest() { [native code] }
    ```

    他に何か表示された場合、検証は成功しています。
  </Step>

  <Step>
    ## AJAX インストゥルメンテーションが有効になっていることを確認します [#verify-instrum]

    AJAX インストゥルメンテーションはライトエージェントには含まれていません。

    AJAX インストゥルメンテーションを確認するには:

    1. browserコンソール開発ツールを開き、`newrelic.initializedAgents` オブジェクトを確認します。 このオブジェクトには、ページ上で実行されているすべてのエージェントのエントリが含まれています。 通常、ページにはエージェントが 1 つだけ存在します。

    2. 初期化されたエージェント オブジェクトで`runtime`オブジェクトを検査します。 このオブジェクトには、 `loaderType`のような実行中のエージェントに関する情報が含まれています。 `loaderType`が`lite`の場合、AJAX インストゥルメンテーションは使用されているエージェントに含まれません。

    3. `loaderType`が`lite`でない場合は、初期化されたエージェントで`config`および`features`オブジェクトを確認することもできます。

       * `config`オブジェクトには、 `enabled`ブール値を持つ`ajax`オブジェクトを含む、エージェントの実行時設定が含まれます。
       * `features`オブジェクトには、 `ajax`エントリを含む、エージェントによって初期化された各機能のエントリが含まれている必要があります。

    4. この AJAX オブジェクトにブール値`enabled` ( `true` ) と`featAggregate`エントリが含まれていることを確認します。

    これらの項目のいずれかが当てはまらない場合、New Relic browserエンティティ上の の設定変更、または`NREUM.init` HTML にコピーして貼り付けられた オブジェクトへの手動変更が原因で、AJAX インストゥルメンテーションが初期化されていない可能性があります。 。

    <Callout variant="important">
      `newrelic.initializedAgents` 古いバージョンまたはサポートされていないバージョンのエージェントを使用している場合を除き、ページ上のエージェントの存在を確認するために使用できるプロパティです。
    </Callout>
  </Step>

  <Step>
    ## 拒否リストの設定を確認する [#verify-deny-list]

    [AjaxRequest イベントの](/attribute-dictionary/?event=AjaxRequest)作成時に特定のドメインとパスを無視するようにエージェントを構成できます。

    ブラウザの開発コンソールを使用して、 `newrelic.init`を実行して現在の AJAX 拒否リスト ルールを確認します。`deny_list`という配列を含むプロパティ `ajax` を探します。

    拒否リストに見覚えのないエントリ、または AJAX 呼び出しのフィルタリングの原因となっているエントリがある場合は、 [「AjaxRequest イベントのフィルタリング」](/docs/browser/new-relic-browser/configuration/filter-ajax-request-events/) ドキュメントを参照して詳細なガイダンスを確認してください。
  </Step>

  <Step>
    ## ネットワークアクセスを確認する [#verify-network-access]

    オブジェクトが正しくストゥルメントされた場合は、 browserの開発者ツールでネットワーク トラフィックを監視しながら、アプリケーションで AJAX 呼び出しをトリガーしてみてください。 最大 1 分待ってから、 `xhr`問題を持つ`bam.nr-data.net/jserrors`への呼び出しを探します。 通話が失敗した場合は、ネットワークの問題がないか確認してください。 または、ペイロードが`bel.7;2`で始まる`bam.nr-data.net/events`へのリクエストを探します。

    この呼び出しが表示されない場合、ネットワーク アクセスに関係のないエラーで失敗した場合、または成功してもデータが表示されない場合は、トラブルシューティングのドキュメントに進んでください。
  </Step>

  <Step>
    ## JSONPがリクエストに与える影響を確認する [#jsonp]

    リクエストで[JSONP](https://en.wikipedia.org/wiki/JSONP)を使用する場合、これらのリクエストは[AJAX UI ページ](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls)に表示されません。

    ただし、それらを[セッショントレース](/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle)内のアセットとして表示することはできます。

    SPA 監視 を使用している場合は、 <DNT>**Page views**</DNT>ページの<DNT>**AJAX**</DNT>タブで表示できます。

    JSONPが認識されるための要件

    * JSONPの各リクエストには、固有のコールバック関数を使用する必要があります。ほとんどの一般的なライブラリ（jQueryなど）は、リクエストごとに固有のコールバック関数を動的に生成します。
    * New Relic によって認識されるためには、コールバック関数名を含むクエリ文字列の名前が `"callback"` または `"cb"` である必要があります。これは、最も一般的なライブラリのデフォルトの動作です。
  </Step>
</Steps>

<Callout variant="tip">
  これらのトラブルシューティング手順のいずれかが失敗する場合、または AJAX データの欠落に関する問題が依然として発生する場合は、 [support.newrelic.com](https://support.newrelic.com)でサポートを受けてください。
</Callout>