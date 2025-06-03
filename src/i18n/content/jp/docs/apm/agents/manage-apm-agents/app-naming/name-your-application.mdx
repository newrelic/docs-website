---
title: アプリケーションに名前を付ける、または名前を変更する
tags:
  - Agents
  - Manage APM agents
  - App naming
metaDescription: 'After deploying your app in New Relic, change the default app name to something descriptive. You can also add an alias for your app.'
freshnessValidatedDate: never
translationType: human
---

New Relicは、[ライセンスキー](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key)とプライマリアプリケーション名を使用して、メトリクスを各アプリケーションに接続します。アプリケーション名は、設定ファイルで変更するか、アプリケーションにエイリアスを割り当てて、New Relic UI に表示する名前を変更できます。

<Callout variant="important">
  New Relic設定ファイルにアプリケーション名を指定しない場合、ほとんどのNew Relicエージェントはデフォルトで汎用アプリケーション名を使用します。同じアプリケーションに対するすべての[集計データ](/docs/accounts-partnerships/accounts/account-billing-usage/data-retention-components#components-aggregate-metrics)が正確にレポートされるようにするには、[各アプリケーションに分かりやすい名前を付ける必要があります](#app-name)。
</Callout>

## 名前対エイリアスの変更 [#differences]

アプリには新しい名前を割り当て、またはエイリアスを変更できます。これには 2 つの効果があります。

<table>
  <thead>
    <tr>
      <th width={100}>
        用語
      </th>

      <th width={200}>
        <DNT>
          **How to change it**
        </DNT>
      </th>

      <th>
        <DNT>
          **Effect**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        名前
      </td>

      <td>
        [設定ファイルに名前を割り当てる](#assigning)
      </td>

      <td>
        エージェントの設定ファイル内のアプリケーション名を変更すると、アプリケーションは、New Relicユーザーインタフェースの新しい見出しに完全に不連続なデータをレポートします。

        これは、たとえば、最初からやり直して新しいデータをレポートする場合に便利です。他のエージェントが古いアプリケーション名にレポートしていない場合、古いアプリケーション名はグレー表示され、削除できます。
      </td>
    </tr>

    <tr>
      <td>
        エイリアス
      </td>

      <td>
        [APM 設定 UI でエイリアスを変更する](#app-alias)
      </td>

      <td>
        [アプリケーション名の<DNT>**alias**</DNT>を作成すると](/docs/apm/new-relic-apm/maintenance/rename-your-application#app-alias)、New Relic UIでのアプリ名の表示方法のみが変更されます。エイリアスを変更しても、データのレポート方法には影響しません。これは、便利なエイリアスを使用してデータを追跡する上で役立ちます。
      </td>
    </tr>
  </tbody>
</table>

## 各アプリケーションに分かりやすい名前を付ける [#app-name]

ほとんどのNew Relicエージェントのデフォルト設定では、アカウントにリンクされている各アプリケーションに対してデフォルトのアプリケーション名（<DNT>**My Application**</DNT>、<DNT>**PHP Application**</DNT>など）を使用します。

<Callout variant="important">
  アプリのデフォルト名は、デプロイメント前に分かりやすい名前に変更することをお勧めします。名前には最大128文字を使用できます。
</Callout>

それぞれの固有のアプリ名は、ご利用のNew Relic UIで新しいアプリケーションレコードを作成します。これにより、以下が可能となります。

* 複数のホストでアプリケーションを実行し、すべてのデータを同じ名前で集計（収集）させます。
* 単一のホストで複数のアプリケーションを実行し、すべてのデータを別名で集計（収集）させます。

## 設定ファイルに名前を割り当てる [#assigning]

アプリ名を変更するには、エージェントの設定ファイルでアプリ名の値を設定します。1つのAPMエージェントを介してアプリケーションをデプロイしてから、別のAPMエージェントを介して同じ名前の別のアプリケーションをデプロイすると、New Relicは自動的にエージェント言語名を2番目のアプリ名の末尾に追加します。たとえば、`New-App`という名前のNode.jsアプリをデプロイしてから、`New-App`という名前の.NETアプリをデプロイする場合は、New Relicは2番目のアプリ名を`New-App (DOTNET)`として自動的に追加します。

命名規則を遵守するため、アプリケーション名には`<`および`>`の記号は使用できないことに留意してください。これらの記号が含まれている場合は、自動的に削除されます。アプリケーション名がこの要件に従っていることを確認してください。

<table>
  <thead>
    <tr>
      <th width={100}>
        <DNT>
          **Agent**
        </DNT>
      </th>

      <th>
        <DNT>
          **Configuration file value**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        C
      </td>

      <td>
        [`;`](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code#app-name)で、セミコロン`newrelic_app_config_t* config;`で区切った最大3つの名前を識別します。
      </td>
    </tr>

    <tr>
      <td>
        Go
      </td>

      <td>
        [`AppName`](/docs/agents/go-agent/instrumentation/go-agent-configuration#app-name) にセミコロンで区切られた最大 3 つの名前を設定します。
      </td>
    </tr>

    <tr>
      <td>
        Java
      </td>

      <td>
        [Javaアプリケーションの命名](/docs/agents/java-agent/configuration/name-your-java-application)に関するオプションをご覧ください。
      </td>
    </tr>

    <tr>
      <td>
        .NET
      </td>

      <td>
        使用可能オプションのいずれかを使用して、[.NET アプリに命名](/docs/agents/net-agent/installation-and-configuration/naming-your-net-application)します。
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        [`app_name`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#app_name)にカンマで区切られた最大3つの名前を設定します。名前を一重引用符または二重引用符で囲みます。（または、環境変数 [`NEW_RELIC_APP_NAME`](/docs/agents/nodejs-agent/installation-configuration/configuring-nodejs-environment-variables#app_name) を変更します）。
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        [PHP アプリケーションに名前を付ける](/docs/agents/php-agent/configuration/name-your-php-application)際のオプションをご覧ください。
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        [`app_name`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#app_name)にセミコロンで区切られた最大3つの名前を設定します。セミコロンの後にスペースを追加しないでください。スペースを追加すると、次の名前がコメントとして解釈されます。
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        [`app_name`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#app_name) にセミコロンで区切られた最大 3 つの名前を設定します。
      </td>
    </tr>
  </tbody>
</table>

## アプリケーションのエイリアスの変更 [#app-alias]

New Relic ユーザーインタフェースで設定するアプリケーション名は、人が判読できる<DNT>**alias**</DNT>です。アプリ名を変更すると、[リンクされたブラウザアプリ](/docs/browser/new-relic-browser/installation-configuration/rename-browser-apps)を含むNew Relic UIのすべての場所で表示名が更新されます。

最初は、このエイリアスはNew Relicエージェントの設定ファイルのアプリの識別子名と同じです。ただし、UIのエイリアスを変更しても、エージェントの設定ファイルで設定された、データのロールアップに使用する元のアプリ名はその影響を受けません<DNT>**does not**</DNT>。エイリアスを変更するには、アプリケーションがアクティブにデータをレポートする必要があります。UIのエイリアスを変更すると、アプリ識別子でレポートするすべてのエージェントが再起動されます。

New Relicユーザーインタフェースでアプリケーション名の<DNT>**alias**</DNT>を変更するには：

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Application**
   </DNT>

   に移動します。

2. <DNT>
     **Application alias**
   </DNT>

   フィールドに、選択したアプリの新しい名前 (エイリアス) を入力します。

3. <DNT>
     **Save application settings**
   </DNT>

   を選択します。

[New Relic REST API を使用して](/docs/apm/apis/application-examples-v2/changing-alias-your-application-api-v2)、アプリのエイリアスを変更することもできます。

<Callout variant="tip">
  <DNT>**Application settings**</DNT>で変更を行うと、保存された変更によりエージェントが再起動されます。この特定のサービスのエージェントのみが再起動されますが、このアクションによってアプリプールやWebサーバーは再起動されません。
</Callout>

## アプリに複数の名前を使用する [#multiple-names]

[アプリに複数の名前](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app)を付けることにより、アプリ全体またはサービス全体で複数のエージェントのメトリクスを集計できます。

<Callout variant="important">
  アプリに複数の名前を使用する場合は、最後に割り当てた名前が、New Relic がデータのロールアップに使用する最も限定度が低い名前になります。インスタンスレベルのデータと集計データの両方を表示する最良の方法は、設定ファイル内におけるアプリのロールアップ名の順序を限定度が高い名前から低い名前の順に設定することです。
</Callout>
