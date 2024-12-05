---
title: カスタムインストゥルメンテーションエディタ：UIからインストゥルメント
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: 'To instrument methods and frameworks in your Java app directly from the APM UI, use New Relic''s custom instrumentation editor.'
freshnessValidatedDate: never
translationType: human
---

New Relicのカスタムインストゥルメンテーションエディタを使用すると、JavaアプリケーションユーザーはNew Relicのユーザーインタフェースを使用してカスタムインストゥルメンテーションを実装できます。このエディタは、アプリケーションコードを変更できない場合で、インストゥルメントするメソッドがそれほど多くない場合に使用することをお勧めします。他のインストゥルメンテーションの方法およびそれらを使用する理由については、[Javaカスタムインストゥルメンテーション](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation)をご覧ください。

カスタムインストゥルメンテーションエディターを使用するには、 <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Java app) > Settings > Instrumentation**</DNT>に移動します。カスタムインストゥルメンテーションエディタの用途：

* 未対応のフレームワークをインストゥルメントする。
* インストゥルメントされていないメソッドをさらに詳しく把握する。
* [特定のトランザクションを無視する](/docs/agents/java-agent/instrumentation/blocking-instrumentation-java)。

## 要件

カスタムインストゥルメンテーションエディタを使用するには、以下の要件を満たす必要があります。

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
        エージェント
      </td>

      <td>
        Javaエージェントのバージョン3.17.0またはそれ以降
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        [高セキュリティモード](/docs/accounts-partnerships/accounts/security/high-security)のユーザーは、[インストゥルメンテーションをエクスポート](#manual-deploy)してからアプリケーションサーバーに手動でインポートする必要があります。
      </td>
    </tr>
  </tbody>
</table>

## カスタムインストゥルメンテーションの定義 [#defining]

New Relicのユーザーインタフェースからカスタムインストゥルメンテーションを定義するには、スレッドプロファイリングセッションを使用して、アプリケーションの各スレッドのスタックトレースの詳細を収集します。可能な場合は、本稼動アプリケーションのインストゥルメンテーションの規則を変更する前に、本稼動前環境でカスタムインストゥルメンテーションをテストします。

どちらの環境でも、カスタムインストゥルメンテーションエディタを使用して、インストゥルメントするメソッドを定義して変更を適用します。

1. [スレッドプロファイラーセッション](/docs/apm/applications-menu/events/thread-profiler-dashboard#starting)を新規作成します。十分なデータを確実に収集するには、セッションの長さを2分以上に設定します。

2. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Instrumentation**</DNT>に移動します。ページの下部にある<DNT>**Recently collected thread profiles**</DNT>リストが表示されるまでスクロールし、最新のスレッドプロファイルを選択します。

3. 個々のメソッドを展開して、インストゥルメントされていない<Icon style={{color: '#307099'}} name="fe-circle"/>メソッドを探します。

4. 特定のノードのインストゥルメンテーションの規則を定義するには、<DNT>**Instrument**</DNT>または<DNT>**Ignore**</DNT>を選択し、[必要に応じて規則をカスタマイズします](#options)。

5. 設定を保存するには、<DNT>**Confirm instrumentation changes**</DNT>を選択します。

6. [<DNT>**Instrumentation**</DNT>ページ](#dashboard)から変更をデプロイします。

   * 変更を自動的にデプロイするには、

     <DNT>
       **Deploy instrumentation changes**
     </DNT>

     を選択します。

   * 変更を手動でデプロイするには、

     <DNT>
       **Export XML**
     </DNT>

     を選択し、[インストゥルメントのエクスポート](#manual-deploy)を確認します。

<Callout variant="caution">
  可能な限り、過剰なインストゥルメンテーションを避けてください。一つひとつのメソッドがインストゥルメンテーションされる度に、エージェントはより多くのリソースを利用することになり、アプリケーションのオーバーヘッドが増大します。また、インストゥルメンテーションをデプロイすると、オーバーヘッドが短期的に増大します。これにより、数秒間アプリケーション要求の処理が遅れることがあります。
</Callout>

変更をUIから適用すると、エージェントは数回の[収集サイクル](/docs/apm/new-relic-apm/getting-started/glossary#harvest-cycle)で（通常は数分以内）、メソッドのインストゥルメンテーションが始まります。

## エディタによる手動のインストゥルメンテーション [#manual-instrumentation]

また、スレッドプロファイルを使用せずに、インストゥルメンテーションポイントを直接作成することも可能です。

1. カスタムインストゥルメンテーションエディタで、

   <DNT>
     **Add manual instrumentation**
   </DNT>

   を選択し、インストゥルメントまたは無視するクラスとメソッドを手動で入力します。

2. [インストゥルメンテーションポイントを定義する場合は、XML規則によるカスタムインストゥルメンテーション](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation-xml-examples#file-format)の手順に従います。

3. インストゥルメンテーションエディタから変更をデプロイします。

この方法を使用してインストゥルメンテーションを追加すると、スレッドプロファイルから使用できる機能以外の機能を使用できます。署名によるメソッドの照合に加えて、戻り値のタイプやJavaアノテーションごとにインストゥルメントし、インタフェース上のメソッドもインストゥルメントできます。

このような複雑なタイプのインストゥルメンテーションは、エディタで作成および削除できますが、編集はできません。

<Callout variant="important">
  メソッドに`Instrumentation not allowed`のマークが付いている場合は、New Relicの[カスタムインストゥルメンテーションのトラブルシューティング手順](/docs/agents/java-agent/custom-instrumentation/troubleshooting-java-custom-instrumentation)に従います。
</Callout>

## 変更を手動でデプロイする [#manual-deploy]

カスタムインストゥルメンテーションエディタは、カスタムインストゥルメンテーションセットを構築し、インストゥルメンテーションファイルをエクスポートしてからアプリケーションサーバーに手動でインポートするために使用することもできます。この方法は、[高セキュリティモード](/docs/accounts-partnerships/accounts/security/high-security)のユーザーに必要です。

インストゥルメンテーションをエクスポートするには、[UIを使用してカスタムインストゥルメンテーションを定義します](#defining)。次に、<DNT>**Instrumentation**</DNT>ページから<DNT>**Export xml**</DNT>を選択し、[アプリケーションサーバーにファイルをインポートします](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-xml#file-location)。

## ページ関数 [#dashboard]

<DNT>**Instrumentation**</DNT>ページでは、以下の機能がサポートされます。

<table>
  <thead>
    <tr>
      <th width={200}>
        以下を行う場合...
      </th>

      <th>
        操作...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="disable">
      <td>
        カスタムインストゥルメンテーションを一時停止または無効にする
      </td>

      <td>
        * <Icon
            style={{color: '#55555A'}}
            name="fe-slash"
          />

          <DNT>
            **Disable instrumentation**
          </DNT>

          を選択して、すべてのUI定義カスタムインストゥルメントを一時的に無効にします。

        * <DNT>
            **Enable instrumentation**
          </DNT>

          を選択して、インストゥルメンテーションの設定を再度有効にします。
      </td>
    </tr>

    <tr id="import">
      <td>
        既存のインストゥルメンテーションをインポートする
      </td>

      <td>
        * <DNT>
            **Import xml**
          </DNT>

          を選択すると、既存の[カスタムインストゥルメンテーションxmlファイルを](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-xml)インポートできます。

        * [変更を自動的にデプロイしない](#manual-deploy)場合は、

          <DNT>
            **Export xml**
          </DNT>

          を実行することもできます。
      </td>
    </tr>

    <tr id="edit-delete">
      <td>
        インストゥルメンテーションポイントを編集または削除する
      </td>

      <td>
        [手動のインストゥルメンテーション](#manual-instrumentation)は、削除するだけで編集はできません。

        * 特定のメソッドのインストゥルメンテーションを停止するには、

          <DNT>
            **Remove**
          </DNT>

          を選択します。

        * インストゥルメンテーションの規則を変更するには、

          <DNT>
            **Edit**
          </DNT>

          を選択します。
      </td>
    </tr>

    <tr id="history">
      <td>
        インストゥルメンテーションの履歴を表示する
      </td>

      <td>
        * <DNT>
            **Instrumentation history**
          </DNT>

          タブからは、誰がいつ変更をデプロイしたかを含め、カスタムインストゥルメンテーションの以前の各イテレーションを表示できます。

        * 古いバージョンは、

          <DNT>
            **export**
          </DNT>

          を選択してカスタムインストゥルメンテーションファイルのコピーをダウンロードし、その後にインストゥルメンテーションエディタに[インポート](#import)すると復元できます。
      </td>
    </tr>
  </tbody>
</table>

## インストゥルメンテーションのオプション [#options]

カスタムインストゥルメンテーションエディタを使用すると、以下のオプションを定義できます。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Instrumentation options**
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
        メソッドをインストゥルメントする
      </td>

      <td>
        選択したメソッドのインストゥルメントを開始します。インストゥルメントするメソッドはNew Relic UIに表示されます。 <DNT>**Instrument**</DNT>では以下の子オプションがサポートされます。

        * <DNT>
            **Name the transaction (transaction name)**
          </DNT>

          ：[自動命名規則](/docs/agents/java-agent/instrumentation/naming-web-transactions)によって定義される標準のトランザクション名を上書きします。UIはリストにある名前を代わりに使用します。

        * <DNT>
            **Start the transaction when this method executes**
          </DNT>

          ：親トランザクション内のこのメトリックからメトリクスを含める代わりに、このメソッドに対する新しいトランザクションを作成します。このオプションによる[エージェントの動作](#start-results)は、スレッドに既存のトランザクションがあるかどうかによって異なります。
      </td>
    </tr>

    <tr>
      <td>
        カスタム属性をレポートする
      </td>

      <td>
        メソッドのパラメーターは、トランザクションの属性として取得できます。New Relicは、これらの属性をトランザクショントレース、トレースされたエラー、および`Transaction`イベントにレポートします。

        セキュリティ上の理由により、カスタムインストゥルメンテーションエディタを使用してカスタム属性を取得することは、デフォルトで<DNT>**disabled**</DNT>になっており、[高セキュリティモード](/docs/agents/java-agent/getting-started/apm-agent-security-java)を使用している間は有効にできません。カスタムインストゥルメンテーションエディタを使用してカスタム属性をレポートし、Javaエージェントを高セキュリティモードにすることを望まない場合は、[高セキュリティモード](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-enable_high_security)を無効にし、以下のテキストを<DNT>**newrelic.yml**</DNT>の`common:`ブロックに追加します。

        ```yml
        reinstrument:
            attributes_enabled: true
        ```
      </td>
    </tr>

    <tr>
      <td>
        トランザクションを無視
      </td>

      <td>
        [このメソッドを完全に無視します](/docs/agents/java-agent/instrumentation/blocking-instrumentation-java)。エージェントはこのメソッドからメトリックスをレポートしなくなり、メソッドはApdex計算から除外されます。
      </td>
    </tr>
  </tbody>
</table>

## 「開始」オプションの結果 [#start-results]

<DNT>**Instrument methods > Start the transaction when this method executes**</DNT>を選択した場合、エージェントの動作はスレッド上に既存のトランザクションがあるかどうかによって異なります。

クラスまたはメソッドをインストゥルメントする場合：

<table>
  <thead>
    <tr>
      <th colSpan={2}>
        <DNT>**Start the transaction"**</DNT>フラグがオンになっていますか？
      </th>
    </tr>

    <tr>
      <th>
        <DNT>
          **Yes**
        </DNT>
      </th>

      <th>
        <DNT>
          **No**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        スレッドに既存のトランザクションがあり<DNT>**is**</DNT> 、<DNT>**Start the transaction**</DNT>フラグがオン<DNT>**is**</DNT>になっている場合：

        1. エージェントは

           <DNT>
             **Start the transaction**
           </DNT>

           フラグを無視します。

        2. エージェントは、既存のトランザクションにクラス／メソッドを含めます。
      </td>

      <td>
        スレッドに既存のトランザクションがあり<DNT>**is**</DNT>、<DNT>**Start the transaction**</DNT>フラグが**オフ**になっている場合、エージェントは、既存のトランザクションにクラス／メソッドを含めます。
      </td>
    </tr>

    <tr>
      <td>
        スレッドにトランザクションが**なく**、<DNT>**Start the transaction**</DNT>フラグがオン<DNT>**is**</DNT>になっている場合：

        1. エージェントは、現在のトランザクションがないことを確認します。
        2. エージェントは、インストゥルメントしたクラス／メソッドから始まる新しいトランザクションを作成します。
      </td>

      <td>
        スレッドにトランザクションが**なく**、<DNT>**Start the transaction**</DNT>フラグが**オフ**になっている場合：

        1. エージェントは、そのスレッドでトランザクションを探しますが、見つかりません。
        2. メトリックは破棄されます。
      </td>
    </tr>
  </tbody>
</table>
