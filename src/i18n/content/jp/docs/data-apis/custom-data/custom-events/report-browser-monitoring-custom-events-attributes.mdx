---
title: カスタムイベントや属性を監視するレポートブラウザ
tags:
  - Insights
  - Event data sources
  - Custom events
metaDescription: How to report custom events and attributes with browser monitoring in New Relic.
freshnessValidatedDate: never
translationType: machine
---

New Relic のブラウザモニタリングを利用して、 [カスタムイベントや属性を追加することができます。](/docs/insights/insights-data-sources/custom-data/report-custom-event-data) 。

## カスタムアトリビュート [#attributes]

カスタムアトリビュートをすべてのbrowserイベントに追加すると、データを書き込んだりフィルタリングして、アプリケーションに関するさらなる質問に答えることができます。

## カスタムイベント [#events]

ブラウザ API の[`recordCustomEvent`](/docs/browser/new-relic-browser/browser-agent-spa-api/record-custom-event)メソッドを使用して、カスタム属性を持つイベントをキャプチャします。

## ページアクション [#overview]

browser APIの[`addPageAction`](/docs/browser/new-relic-browser/browser-agent-spa-api/add-page-action)呼び出しを使用して、アプリケーションでイベント、アクション、ルート変更、またはエンドユーザー インタラクションをキャプチャします。 `addPageAction`呼び出しは、アクション名、ページに関連するメタデータ、および一緒にキャプチャしたカスタムアトリビュート名と値を含む、 `PageAction`という名前のイベントを追加します。

## 前提条件 [#requirements]

`Custom`イベントを報告するには、次の前提条件を確認してください:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Requirement**
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
        エージェントバージョン
      </td>

      <td>
        ブラウザ監視エージェントのバージョンは[1.277.0 以上で](/docs/browser/new-relic-browser/installation-configuration/upgrading-browser-agent#checking)ある必要があります。
      </td>
    </tr>

    <tr>
      <td>
        クライアントのブラウザのバージョン
      </td>

      <td>
        `Custom`イベントを記録するには、ブラウザーが [クロスドメイン XHR をサポート](/docs/browser/new-relic-browser/getting-started/compatibility-requirements#browser-types)している必要があります。
      </td>
    </tr>

    <tr>
      <td>
        サイクルあたりのイベント数
      </td>

      <td>
        `Custom` イベントは他のブラウザ イベントとともにバッファされ、30 秒ごとに送信されます。 合計 1,000 件のイベントが観測された場合、エージェントは収集サイクル間隔をバイパスして、バッファリングされたイベントを直ちに収集します。
      </td>
    </tr>

    <tr>
      <td>
        イベント/アトリビュートのネーミング、データタイプ、サイズ
      </td>

      <td>
        イベント/属性の命名構文、データタイプ、およびサイズに関する [の一般的な要件に確実に従ってください。](/docs/insights/insights-data-sources/custom-data/data-requirements#general)

        [](/docs/insights/insights-data-sources/custom-data/data-requirements#general)
      </td>
    </tr>
  </tbody>
</table>

`PageAction`イベントを報告するには、次の前提条件を確認してください:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Requirement**
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
        エージェントバージョン
      </td>

      <td>
        お使いのブラウザの監視エージェントのバージョンは [593 以上でなければなりません](/docs/browser/new-relic-browser/installation-configuration/upgrading-browser-agent#checking).
      </td>
    </tr>

    <tr>
      <td>
        クライアントのブラウザのバージョン
      </td>

      <td>
        `PageAction`イベントを記録するには、ブラウザーが [クロスドメイン XHR をサポート](/docs/browser/new-relic-browser/getting-started/compatibility-requirements#browser-types)している必要があります。
      </td>
    </tr>

    <tr>
      <td>
        サイクルあたりのイベント数
      </td>

      <td>
        `PageAction` イベントは他のブラウザ イベントとともにバッファされ、30 秒ごとに送信されます。 1,000 件のイベントが観測された場合、エージェントは収集サイクル間隔をバイパスして、バッファリングされたイベントを直ちに収集します。
      </td>
    </tr>

    <tr>
      <td>
        イベント/アトリビュートのネーミング、データタイプ、サイズ
      </td>

      <td>
        イベント/属性の命名構文、データタイプ、およびサイズに関する [の一般的な要件に確実に従ってください。](/docs/insights/insights-data-sources/custom-data/data-requirements#general)

        [](/docs/insights/insights-data-sources/custom-data/data-requirements#general)
      </td>
    </tr>
  </tbody>
</table>

## カスタムイベントを作成する [#creating-custom-events]

`custom`イベントを作成するには:

1. [ブラウザエージェントがアプリにインストールされていることを確認します](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent)
2. アプリケーションの JavaScript の関連部分で[`newrelic.recordCustomEvent`](/docs/browser/new-relic-browser/browser-apis/record-custom-event)関数を呼び出します。
3. アプリケーションが実行され、指定した eventType で関連する`custom`イベントが報告されるまで、数分お待ちください。
4. イベントのキャプチャに使用した `eventType` プロパティ（およびイベントと一緒に送信した関連プロパティ）を含むイベントのNRQL実行します。

* たとえば、 `eventType`が`Foo`で属性が`bar: 123`の`custom`イベントを送信した場合、次のようなクエリを実行できます。
  ```sql
  SELECT * FROM Foo WHERE bar = 123
  ```

## PageActionイベントの作成 [#creating-pageactions]

`PageAction`イベントを作成するには:

1. [ブラウザエージェントがアプリにインストールされていることを確認します](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent)
2. アプリケーションの JavaScript の関連部分で[`newrelic.addPageAction`](/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicaddpageaction-browser-agent-api)関数を呼び出します。
3. アプリケーションが実行され、関連する`PageAction`イベントが報告されるまで数分待ちます。
4. イベントのキャプチャに使用した`actionName`属性 (およびアクションと共に送信した関連属性) を含む`PageAction`イベントの[NRQL クエリ](/docs/query-data/nrql-new-relic-query-language/nrql-query-examples/insights-query-examples-new-relic-browser-spa)を実行します。

* たとえば、 `actionName`が`Foo`で属性が`bar: 123`の`PageAction`イベントを送信した場合、次のようなクエリを実行できます。
  ```sql
  SELECT * FROM PageAction WHERE actionName = 'Foo' AND bar = 123
  ```

## ブラウザイベントにカスタムアトリビュートを追加 [#custom-attributes]

すべてのブラウザイベントにカスタムアトリビュートを追加できます。 `setCustomAttribute` API使用して追加したカスタム アトリビュートは、キャプチャされたすべてのイベントに追加されます。

カスタムアトリビュートを追加するには 2 つの方法があります。

<CollapserGroup>
  <Collapser
    id="custom-attribute-via-browser-api"
    title={<><Link to="/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicsetcustomattribute-browser-agent-api"><InlineCode>
      setCustomAttribute
    </InlineCode></Link> browser APIコールを使用する</>
    }
  >
    ブラウザエージェント経由でカスタムアトリビュートをブラウザイベントに追加するには、 [`setCustomAttribute`](/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicsetcustomattribute-browser-agent-api) browser APIコールを使用します。
  </Collapser>

  <Collapser id="custom-attribute-forward-apm" title="APMデータからカスタム属性を転送">
    APMエージェント経由でカスタムアトリビュートを <InlinePopover type="apm" />`Transaction` イベントに追加した場合、それらのカスタムアトリビュートを `PageView` イベントに自動的に転送できます。

    1. カスタムアトリビュートを挿入するには、 [エージェント固有の手順に従ってください](/docs/insights/insights-data-sources/custom-data/add-custom-attributes-apm-data) 。

    2. エージェントの設定ファイルで属性転送を有効にします。

       <table>
         <thead>
           <tr>
             <th style={{ width: "100px" }}>
               エージェント
             </th>

             <th>
               アトリビュートフォワーディングの有効化
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               Go
             </td>

             <td>
               アトリビュートを有効にするには、これを設定に追加します（デフォルトでは無効）。

               ```go
               cfg.BrowserMonitoring.Attributes.Enabled = true
               ```

               そして、入れたい属性を追加します。

               ```go
               cfg.BrowserMonitoring.Attributes.Include = []string{"request.*"}
               ```
             </td>
           </tr>

           <tr>
             <td>
               Java
             </td>

             <td>
               `browser_monitoring`セクションに[`attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-browser-attributes-enabled)オプションを追加し、それを`true`に設定します。
             </td>
           </tr>

           <tr>
             <td>
               .NET
             </td>

             <td>
               [`<attributes enabled="true">`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#browser-attributes)要素を`browserMonitoring`要素の子として追加します。

               ```xml
               <configuration xmlns="urn:newrelic-config">
                 ...
                 <browserMonitoring autoInstrument="true">
                   ...
                   <attributes enabled="true">
                     ...
                   </attributes>
                 </browserMonitoring>
                 ...
               </configuration>
               ```

               [手動のブラウザ インストルメンテーション](/docs/agents/net-agent/features/page-load-timing-net#manual_instrumentation)を使用している場合は、 `GetBrowserTimingHeader()`呼び出しの前に属性を作成する必要があります。
             </td>
           </tr>

           <tr>
             <td>
               Node.js
             </td>

             <td>
               アプリの`newrelic.js`構成ファイルの`browser_monitoring`セクションに[`attributes: {enabled: true}`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#browser-debug-enabled)を追加します。
             </td>
           </tr>

           <tr>
             <td>
               PHP
             </td>

             <td>
               [`newrelic.browser_monitoring.attributes.enabled`](/docs/agents/php-agent/attributes/enabling-disabling-attributes#cfg-browser-attributes-enabled)オプションを追加して`true`に設定します。
             </td>
           </tr>

           <tr>
             <td>
               Python
             </td>

             <td>
               [`browser_monitoring.attributes.enabled`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#cfg-browser-attributes-enabled)オプションを追加して`true`に設定します。
             </td>
           </tr>

           <tr>
             <td>
               Ruby
             </td>

             <td>
               [`browser_monitoring.attributes.enabled`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#browser_monitoring-attributes-enabled)オプションを追加して`true`に設定します。
             </td>
           </tr>
         </tbody>
       </table>
  </Collapser>
</CollapserGroup>

## 重要な検討事項やベストプラクティスは以下の通りです。

AI モニタリングを使用して、カスタムイベント タイプの総数を約 5 つに制限する必要があります。 カスタムイベント タイプは、高レベルのカテゴリをカプセル化するために使用することを目的としています。 たとえば、さまざまな目的を持つ多数のイベントを含むジェスチャーというイベント タイプを作成するとします。

カスタムイベントの名前にイベント タイプを使用することは避けてください。 イベント タイプを作成してデータのカテゴリを格納し、そのカテゴリ内のプロパティを使用してイベントを区別します。 多数のカスタムイベントを作成できますが、報告されるイベントの種類の数を制限してデータを管理しやすくすることが重要です。

## 帰属表示を含む

カスタムbrowserイベントは、イベントが発生したときのbrowser環境のコンテキストを理解しやすくすることを目的とした次のプロパティで装飾されています。

<CollapserGroup>
  <Collapser id="custom-event-attributes" title="カスタムイベント属性">
    <table>
      <thead>
        <tr>
          <th style={{ width: "100px" }}>
            属性
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            appId
          </td>

          <td>
            New Relic エンティティのアプリケーション ID。
          </td>
        </tr>

        <tr>
          <td>
            アプリ名
          </td>

          <td>
            New Relic エンティティのアプリケーション名。
          </td>
        </tr>

        <tr>
          <td>
            ASN
          </td>

          <td>
            自律システム番号。
          </td>
        </tr>

        <tr>
          <td>
            asn緯度
          </td>

          <td>
            ASNに関連付けられた緯度
          </td>
        </tr>

        <tr>
          <td>
            asn経度
          </td>

          <td>
            ASNに関連付けられた経度
          </td>
        </tr>

        <tr>
          <td>
            asn組織
          </td>

          <td>
            ASNに関連する組織
          </td>
        </tr>

        <tr>
          <td>
            市
          </td>

          <td>
            イベントが発生した都市。
          </td>
        </tr>

        <tr>
          <td>
            国コード
          </td>

          <td>
            イベントが発生した国コード。
          </td>
        </tr>

        <tr>
          <td>
            現在のURL
          </td>

          <td>
            イベントが発生したURL（ソフトナビゲーションを含む）
          </td>
        </tr>

        <tr>
          <td>
            デバイスタイプ
          </td>

          <td>
            イベントが発生したデバイスの種類。
          </td>
        </tr>

        <tr>
          <td>
            entityGuid
          </td>

          <td>
            New Relic エンティティの GUID。
          </td>
        </tr>

        <tr>
          <td>
            name
          </td>

          <td>
            APM によって提供されるトランザクション名
          </td>
        </tr>

        <tr>
          <td>
            ページURL
          </td>

          <td>
            イベントが発生した URL。
          </td>
        </tr>

        <tr>
          <td>
            地域コード
          </td>

          <td>
            イベントが発生した地域コード。
          </td>
        </tr>

        <tr>
          <td>
            セッション
          </td>

          <td>
            イベントが発生したユーザー セッションに関連付けられたセッション識別子。
          </td>
        </tr>

        <tr>
          <td>
            セッショントレースID
          </td>

          <td>
            イベントが発生したページの読み込みに関連付けられたセッショントレース ID。
          </td>
        </tr>

        <tr>
          <td>
            タイムスタンプ
          </td>

          <td>
            イベントの UNIX タイムスタンプ。
          </td>
        </tr>

        <tr>
          <td>
            ユーザーエージェント名
          </td>

          <td>
            イベントが発生したユーザー エージェントの名前。
          </td>
        </tr>

        <tr>
          <td>
            userAgentOS
          </td>

          <td>
            イベントが発生したユーザーエージェントのOS。
          </td>
        </tr>

        <tr>
          <td>
            userAgentVersion
          </td>

          <td>
            イベントが発生したユーザー エージェントのバージョン。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## トラブルシューティング

ここでは、トラブルシューティングをご紹介します。

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Problem**
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
        カスタム属性の欠落
      </td>

      <td>
        カスタム属性が`PageView`イベントに表示されない場合は、ページの Load イベントの前に`setCustomAttribute`を呼び出していることを確認してください。ページのロード後にカスタム属性が呼び出された場合、 `PageView`には表示されません。
      </td>
    </tr>

    <tr>
      <td>
        `PageAction` イベント
      </td>

      <td>
        クエリ時に `PageAction` イベントが表示されない場合は、 [要件](#requirements)を確認してください。

        要件が満たされている場合は、 [予約された属性名や無効な値を](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-insights-api#limits)使用していないかを確認してください。
      </td>
    </tr>

    <tr>
      <td>
        `Custom` イベント
      </td>

      <td>
        クエリ時に `custom` イベントが表示されない場合は、 [要件](#requirements)を確認してください。

        要件が満たされている場合は、 [予約された属性名や無効な値を](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-insights-api#limits)使用していないかを確認してください。
      </td>
    </tr>
  </tbody>
</table>