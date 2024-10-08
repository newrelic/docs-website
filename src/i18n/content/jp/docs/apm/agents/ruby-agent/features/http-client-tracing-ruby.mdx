---
title: RubyでのHTTPクライアントのトレース
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'Information about HTTP tracing in the New Relic Ruby agent, including supported clients and versions.'
freshnessValidatedDate: never
translationType: machine
---

Ruby エージェントは、アプリケーションまたはスクリプトによって行われた送信 HTTP リクエストを追跡して、次のことを行うことができます。

* HTTPリクエストの所要時間や、どのホストにヒットしているかなどのメトリクスを記録します。
* トランザクションのトレースに、各HTTPリクエストのノードをアノテートします。
* New Relic で計測されたアプリケーション間のリクエストの[分散トレース](/docs/distributed-tracing/concepts/introduction-distributed-tracing/)を提供します。

## 対応するHTTPクライアントライブラリ [#supported_libraries]

現在、RubyエージェントがサポートしているHTTPクライアントライブラリは以下の通りです。

<table>
  <thead>
    <tr>
      <th width={150}>
        名前
      </th>

      <th width={200}>
        最小限の対応バージョン
      </th>

      <th>
        メモ
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [非同期::HTTP](https://github.com/socketry/async-http)
      </td>

      <td>
        0.59.0
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        [縁石](https://github.com/taf2/curb)
      </td>

      <td>
        0.9.3
      </td>

      <td>
        Curl::Multi のリクエストは部分的に計測されます。 [Curb notes](#curb) を参照してください。
      </td>
    </tr>

    <tr>
      <td>
        [イーソン](https://github.com/typhoeus/ethon)
      </td>

      <td>
        0.12.0
      </td>

      <td>
        [Ethon のノートを](#ethon)参照してください。
      </td>
    </tr>

    <tr>
      <td>
        [エキソン](https://github.com/geemus/excon)
      </td>

      <td>
        0.56.0
      </td>

      <td>
        [エキソンノート](#excon) を参照してください。
      </td>
    </tr>

    <tr>
      <td>
        [HTTPClient](https://github.com/nahi/httpclient)
      </td>

      <td>
        2.8.3
      </td>

      <td>
        非同期のリクエストのインストゥルメンテーションはサポートされていません。
      </td>
    </tr>

    <tr>
      <td>
        [http.rb](https://github.com/httprb/http)
      </td>

      <td>
        2.2.2
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        [HTTPX](https://honeyryderchuck.gitlab.io/httpx/)
      </td>

      <td>
        1.0.0
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        Net::HTTP
      </td>

      <td>
        該当なし（Ruby標準ライブラリの一部）
      </td>

      <td>
        また、 [httparty](http://johnnunemaker.com/httparty/) など、Net::HTTP をベースにしたライブラリも含まれています。
      </td>
    </tr>

    <tr>
      <td>
        [タイフーン](https://github.com/typhoeus/typhoeus)
      </td>

      <td>
        1.3.0
      </td>
    </tr>
  </tbody>
</table>

## イーソンノート [#ethon]

Ethon を保守し、その機能を Ethon に依存している同じチームが Typhoeus も保守しています。各 HTTP リクエストの重複レポートを防ぐため、エージェントは Typhoeus を検出すると Ethon インストルメンテーションを無効にします。

## エキソンノート [#excon]

Rubyエージェントは、Excon バージョン <DNT>**0.56.0 or higher.**</DNT> をサポートしています。Excon インストゥルメンテーションは、Excon ミドルウェアを `Excon.defaults` の `:middlewares` キーに追加する機能に依存しているため、アプリケーションが `Excon.defaults` を変更する場合は、`:middlewares` キーの値を保持するようにする必要があります。

## カーブノート [#curb]

RubyエージェントはCurbバージョン<DNT>**0.9.3 or higher.**</DNT>をサポートしていますが、JRubyでのCurbインストゥルメンテーションはサポートされて**いません**。

`Curl::Multi` API 経由で行われたリクエストは現在、部分的な分散トレースのみをサポートしています。Ruby エージェントはバッチ全体を表す単一のトランザクション トレース ノードを記録しますが、バッチ内の個々のリクエストの詳細を確認することはできません。
