---
title: クロスアプリケーショントレースの概要
tags:
  - APM
  - Transactions
  - Cross application traces
metaDescription: APM's cross application tracing feature allows you to view details for applications that happen across multiple applications.
freshnessValidatedDate: never
translationType: machine
---

APMのクロスアプリケーショントレーシングを使用すると、APMがモニターするアプリケーション間でトランザクションをリンクできます。

## クロスアプリケーショントレーシングとは？ [#feature]

<Callout variant="important">
  クロスアプリケーション トレースは、[ディストリビューティッド（分散）トレーシング機能](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing)に代わって非推奨となり、将来のエージェント バージョンでは削除される予定です。 ディストリビューティッド（分散）トレーシングは、クロスアプリケーション トレーシング機能の改良版であり、大規模な分散システムに推奨されます。
</Callout>

APMのクロスアプリケーショントレースでは、サービス指向アーキテクチャー（SOA）内にあるAPMアプリケーション間のトランザクションをリンクします。これはたとえば、自分のアプリケーション（「呼び出し元」アプリケーション）と内部あるいは外部サービス（「呼び出し先」アプリケーション）で発生するパフォーマンスの問題（例：内部サービスへのトラフィック）を特定する場合に有効です。

これは以下に役立ちます。

* クロスアプリケーションのコールフロー内のボトルネックを発見します。
* 特定のトランザクションが他のアプリケーションやサービスによってどのように使用されているかを、エンドツーエンドで把握します。
* 問題をより迅速に診断し、チーム間のコラボレーションを強化します。

## セキュリティに関する懸念事項 [#security]

クロスアプリケーショントレーシングでは3つのHTTPヘッダーを使って、呼び出し元アプリケーションと呼び出し先アプリケーションの間で情報をやり取りします。

* 最初の2つ（`X-NewRelic-ID`と`X-NewRelic-Transaction`）は、インストゥルメントされたアプリケーションによって送られた送信リクエスト内の、HTTPリクエストヘッダーとして表示されます。
* 残りのヘッダー（`X-NewRelic-App-Data`）は、呼び出されたアプリケーションが呼び出し元アプリケーションと同一のNew Relicアカウントに属している場合、HTTPレスポンスに挿入されます。

New Relic は、 <InlinePopover type="browser"/>に使用するものと同じ難読化スキームを使用して、これらのヘッダーすべてを難読化しますが、キーは異なります。

<table>
  <thead>
    <tr>
      <th width={250}>
        <DNT>
          **HTTP header**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `X-NewRelic-ID`

        （リクエストヘッダー内）
      </td>

      <td>
        アカウントIDと、呼び出しを行うアプリケーションのアプリケーションIDを含む
      </td>
    </tr>

    <tr>
      <td>
        `X-NewRelic-Transaction`

        （リクエストヘッダー内）
      </td>

      <td>
        呼び出しによって作成される個々のトランザクションに関する情報（呼び出し元トランザクションにとってユニークなGUIDと、トランザクションを発生させたアップストリームの呼び出しに関する情報）を含む
      </td>
    </tr>

    <tr>
      <td>
        `X-NewRelic-App-Data`

        （該当する場合、レスポンス内）
      </td>

      <td>
        呼び出し先アプリケーションに関する次の情報を含みます。

        * アカウントID
        * アプリケーションID
        * 呼び出されたトランザクションの名前
        * 呼び出されたトランザクションのタイミング情報
        * 呼び出されたトランザクションのGUID
      </td>
    </tr>
  </tbody>
</table>
