---
title: インストゥルメンテーションエディタ：UIから.NETをインストゥルメント
freshnessValidatedDate: never
translationType: machine
---

<Callout title="プレビュー">
  この機能はまだ開発中ですが、ぜひお試しください。

  質問やフィードバックがある場合、または .NET エージェントの<DNT>**Instrumentation**</DNT>エディターのプレビュー中にサポートが必要な場合は、 [dotnet-li-editor-beta@newrelic.com](mailto:dotnet-li-editor-beta@newrelic.com)までメールをお送りください。

  この機能は現在、弊社の[プレリリース ポリシー](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy)に従ってプレビュー プログラムの一部として提供されています。
</Callout>

<DNT>**Instrumentation**</DNT> エディターを使用すると、.NET アプリ ユーザーは、インストゥルメントされたアプリケーションを再起動せずに、 New Relicユーザー インタフェースからカスタム インストゥルメントを実装できます。 このエディター:

* 権限のあるユーザーが、ローカルのXMLファイルではなく、New Relic UIからカスタムインスツルメンテーションを編集できるようになります。
* カスタム・インスツルメンテーション・スキーマを検証します。
* アプリケーションのコードやアプリケーションを実行するホストにアクセスできないお客様のためのオプションです。

## 要件

<DNT>**Instrumentation**</DNT>エディターを使用するには、次の要件を満たす必要があります。

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Requirements**
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
        .NETエージェントバージョン7.0.2以上
      </td>
    </tr>

    <tr>
      <td>
        [アカウントの役割](/docs/accounts-partnerships/accounts/roles-permissions/users-roles#roles)
      </td>

      <td>
        オーナーまたは管理者
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        [高セキュリティ モード](/docs/agents/manage-apm-agents/configuration/high-security-mode)のユーザーは、 <DNT>**Instrumentation**</DNT>エディターを使用してアプリのインストゥルメンテーションを更新できません。
      </td>
    </tr>
  </tbody>
</table>

## カスタムインストゥルメンテーションの定義 [#defining]

<img
  title="APM Settings: .NET instrumentation"
  alt="APM Settings: .NET instrumentation"
  src="/images/apm_screenshot-full_dotnet-instrumentation-editor.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a .NET app) > Settings > Instrumentation:**</DNT> <DNT>**Instrumentation**</DNT> エディターを使用すると、 UIでカスタム インストゥルメンテーションを簡単に表示または編集できます。 この XML の例には、アセンブリ名、クラス名、およびメソッド名が表示されます。
</figcaption>

<Callout variant="important">
  ライブインスツルメンテーションを導入すると、一時的にオーバーヘッドが大きくなります。これにより、アプリケーションのリクエストが数秒間、明らかに遅くなることがあります。
</Callout>

<DNT>**Instrumentation**</DNT>エディターを使用するには:

1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM**</DNT>に移動します。 アプリを見つけて、 <DNT>**Settings > Instrumentation**</DNT>をクリックします。

2. <DNT>**Instrumentation**</DNT>エディターを使用して[、ローカルの .xml インストゥルメンテーション ファイルの編集](/docs/agents/net-agent/custom-instrumentation/create-transactions-xml-net)と[インストゥルメンテーションの詳細の追加について説明したのと同じ構文を使用して XML を提供します。](/docs/agents/net-agent/custom-instrumentation/add-detail-transactions-xml-net) UI から次のいずれかのオプションを使用します。

   * XMLコードを直接入力します。

   * コードをコピーして、クリップボードから貼り付けてください。

   * <DNT>
       **Download Sample XML**
     </DNT>

     をクリックして、開始点としてサンプル インストゥルメンテーション ファイルを作成します。

   * .xmlをアップロードする

     <DNT>
       **Choose file**
     </DNT>

     を選択してファイルを開きます。 例については、 [「Example MyInstrumentation.xml」](/docs/agents/net-agent/custom-instrumentation/add-detail-transactions-xml-net#sample)を参照してください。

3. <DNT>**Instrumentation**</DNT>エディターは、入力した XML コードを検証します。 エディターの外部で XML 検証を実行するには、 <DNT>**Download XSD**</DNT>を選択し、お気に入りの XML 検証ツールで XSD ファイルを使用して問題を診断します。

4. 変更をデプロイするには、 <DNT>**Submit**</DNT>を選択します。

## 測定結果を見る [#view]

.NET エージェントは、数回の[収集サイクル](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#harvest-cycle)(通常は数分) 以内に新しいインストゥルメンテーションを開始します。 <DNT>**Instrumentation**</DNT> UI の<DNT>**Current instrumentation**</DNT>セクションには、適用された変更のステータスが表示されます。

<DNT>**Instrumentation**</DNT>エディターからの XML は、エージェントを実行しているマシン上のローカル インストゥルメンテーション ファイルに存在する XML と結合されます。 エージェントは、最終的な (結合された) XML の変更を定期的に検索し、エージェントまたはアプリケーションを再起動することなく、変更を動的に取得します。
