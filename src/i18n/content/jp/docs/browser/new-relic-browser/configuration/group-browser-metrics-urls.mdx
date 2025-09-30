---
title: ブラウザデータをURLでグループ化
tags:
  - Browser
  - Browser monitoring
  - Configuration
metaDescription: 'To override the default URL patterns New Relic uses to group event data, add URLs to your allow list in browser monitoring settings.'
freshnessValidatedDate: never
translationType: machine
---

<InlinePopover type="browser"/>は[、 <DNT>**Page views**</DNT>ページ](/docs/browser/new-relic-browser/additional-standard-features/page-views-insights-your-sites-popularity)と[<DNT>**AJAX**</DNT>ページ](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls)のデータに URL パターンを使用します。 URL パターンを使用する利点は次のとおりです。

* 似たようなページをグループ化して、ページビューとAJAXコールのタイミングを提示しています。
* サイトのURLをもとに、直感的に理解できるフォーマットを使用してください。

URLのグループ化は、ブラウザによるWebサイトのURLスペースの分析に基づいて自動的に実行できます。これにより、 `www.foo.com/users/*/profile`などのURLパターンが生成され、さまざまなユーザーIDパラメーターが省略され、類似した「ユーザープロファイル」ページビューがグループ化されます。

独自のURLグループを作成して、多くの異なる個別のページビューで類似したURLの部分を捕捉したり、URLのコンテンツを生成したコードパスに関する情報を提供したりすることができます。また、 [特定のドメイン](/docs/browser/new-relic-browser/installation-configuration/monitor-or-block-specific-domains) を許可リストまたは拒否リストに追加する条件を作成することもできます。

## 許可リストの入力 [#whitelists]

アプリケーションが最初にデータを New Relic にレポートするときに、URL グループが自動的に作成されます。これらのグループ化アルゴリズムへの入力には、次のものがあります。

* お客様のサイトでユーザーがアクセスするURL
* サイトがコールするAJAXエンドポイント（独自のエンドポイントかサードパーティのエンドポイントかは問わない）

URLがロードされたり、AJAXコールが記録されたりすると、まずURLからクエリパラメータを取り除いてフィルタリングします。SPA モニタリングを使用している場合を除き、ハッシュフラグメントも取り除かれます。 [](/docs/browser/single-page-app-monitoring/use-spa-data/understand-spa-data-collection)。これらのパラメータには機密情報が含まれている可能性があり、また、多くの場合、有用なグループ分けを行うにはあまりにも広範囲に変化しています。

## 自動グループ化の動作 [#hierarchy]

URL がフィルタリングされた後、New Relic はリクエストを分析し、セパレータ文字 (ドメインはドット、パスはスラッシュ) に基づいて URL をセグメントに分割します。このロジックでは、有用な用語も保存され、自動グループ化の際に使用されます。ドメイン情報はポート番号によって自動的に分離され、(例えば)HTTPとHTTPSのエンドポイントが別々にリストアップされます。

## URLグルーピングの追加 [#adding]

アプリケーションのURL許可リストに追加することで、ブラウザがデータをグループ化する方法を変更できます。セグメントを追加すると、NewRelicに報告される新しいデータのURLグループにこれらの用語が常に表示されます。 `*`にロールアップされることはありません。

複数のセグメントをリストする場合、順序は重要ではありません。 ただし、追加するセグメントが URL に表示される方法と一致していることを確認してください。 <DNT>**exactly match**</DNT> URL パス セグメントが`.html`または`.jsp`で終わる場合、セグメントに拡張子を含める必要があります。 セグメントでは大文字と小文字が区別されます。

新しい URL セグメントをアプリケーションの許可リストに追加するには、 [GraphQL](/docs/apis/nerdgraph/examples/browser-monitoring-config-nerdgraph#browser-segments)を使用してプログラムで追加するか、New Relic ブラウザ監視 UI でセグメント許可リストを使用できます。

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Settings > Application settings > Segment allow lists**
   </DNT>

   に移動します。

2. <DNT>
     **Allow listed segments**
   </DNT>

   でプラス記号を選択します

   <Icon name="fe-plus-circle"/>

   アイコン。

3. <DNT>
     **Page views**
   </DNT>

   ページと

   <DNT>
     **AJAX**
   </DNT>

   ページにグループ化して表示する[セグメント](#format)を入力します。

4. ドメインセグメント（ドットで囲まれたドメインの要素）またはパスセグメント（スラッシュで囲まれたURLパスの要素）を入力してください。

## ルール作成 [#format]

以下のガイドラインに沿って、URL許可リストを作成してください。

<table>
  <thead>
    <tr id="segments">
      <th width={200}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this...**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        見ていないセグメントをリストに追加する
      </td>

      <td>
        セグメントを入力します。たとえば、 `/users/*`が表示されていて、パス`/users/edit`が表示されていない場合は、リストに`edit`と入力します。

        数字、GUID、極端に長いセグメント（100文字以上）はリストアップできません。
      </td>
    </tr>

    <tr>
      <td>
        ドメインの一覧表示
      </td>

      <td>
        ドメインの各セグメントを入力します。たとえば、許可リストに`www.newrelic.com`を追加するには、 `www` 、 `newrelic` 、および`com`と入力します。
      </td>
    </tr>

    <tr>
      <td>
        パスの一覧表示
      </td>

      <td>
        そのパスのすべての用語を追加します。たとえば、 `www.domain1.com/bar/foo`を表示し、すでに`www.domain1.com`を表示するには、セグメントとして`bar`と`foo`を入力します。
      </td>
    </tr>
  </tbody>
</table>

## URL許可リストの管理 [#maintaining]

時間の経過とともに、お客様のアプリケーションのURLやドメインが変更されることがあります。お客様のアプリケーションのグループ化は、これらの変更に基づいて自動的に適応されますが、お客様の現在のニーズに合わせて変更することもできます。 [標準手順](#adding) に従って、許可リストからセグメントを追加または削除し、URL のグループ化方法を変更します。

自動化されたグループ化アルゴリズムは、URL を便利にグループ化することを目的としていますが、場合によっては、予想よりも多くの異なるグループ化が表示されることがあります。役に立たない URL グループや用語が多すぎる場合、または URL を効果的にグループ化するのに問題がある場合は、 [support.newrelic.com](https://support.newrelic.com)でサポートを受けてください。

## コントローラ名 [#controller]

ブラウザ監視では、サーバー側コントローラーのアクション名 ( `ApplicationsController#show`など) の代わりに、URL パターンを使用してデータをグループ化します。 該当する場合は、関連するバックエンド<InlinePopover type="apm"/>イベントへのリンクが含まれます。 ただし、これはスタンドアロン サービスとしてのbrowserの主要なグループ化戦略ではありません。
