---
title: ログのクエリ構文
tags:
  - Logs
  - Log management
  - Example queries
  - UI and data
metaDescription: How to query your logs data in New Relic using the logs query syntax.
freshnessValidatedDate: never
translationType: machine
---

<DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT> のログUI使用すると、ログ データを数秒ですばやく検索できます。 各ログには、 `log_summary`列に使用可能な属性がリストされます。 さらに詳しい情報を表示するには、強調表示された属性をクリックします。

## クエリの構造 [#query-structure]

ログを使用すると、 `new`や`relic`などの単純なキーワード、または`"new relic agent"`などのフレーズを検索フィールドに直接入力して、ログ データを検索できます。

わかりやすい用語は、メッセージ属性とログの`filePath`を「含む」検索です。たとえば、 `"new relic agent"`より詳細な`message: "*New Relic Agent*"`と同等です。

他の属性を検索するには、 `source: "*new relic agent*"`など、用語の前に属性を付けます。詳細については、以下の [一般的な演算子](#general-operators) を参照してください。

キーワードやフレーズを演算子と組み合わせて、より複雑なクエリを作成することもできます。

<Callout variant="tip">
  New Relicのログ書き込みは <DNT>Lucene</DNT> 言語に基づいており、このドキュメントにリストされているすべての <DNT>Lucene</DNT> 関数がサポートされています。 ( <DNT>Lucene</DNT>関数がリストされていない場合はサポートされません。) 役に立つ例については、この[<DNT>Lucene</DNT>チュートリアル](https://www.lucenetutorial.com/lucene-query-syntax.html)をご覧ください。
</Callout>

一般的なクエリのルール

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        ログクエリのルール
      </th>

      <th>
        コメントコメント
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        大文字小文字の区別
      </td>

      <td>
        クエリの構文は、属性値の大文字と小文字を区別します。属性名は常に大文字と小文字を区別します。

        例外: ワイルドカード検索では、属性値の大文字と小文字は区別されません。
      </td>
    </tr>

    <tr>
      <td>
        空白文字
      </td>

      <td>
        用語にスペースやタブ文字などの空白文字が含まれている場合、その用語は二重引用符で囲む必要があります。

        例：正確に`POST /log/v1`を含む`status`属性をクエリするには、次のように用語を引用します。

        `status: "POST /log/v1"`

        注：属性のどこかに`POST /log/v1`を含む`status`属性を照会するには、 `status: "*POST /log/v1*"`などのワイルドカード文字を追加する必要があります（ワイルドカードの詳細については、以下を参照してください）。
      </td>
    </tr>

    <tr>
      <td>
        特殊文字
      </td>

      <td>
        用語に特殊文字が含まれている場合は、用語を二重引用符で囲み、円記号（ `\` ）を使用して特殊文字をエスケープします。これには、 `+` 、 `-` 、 `&` 、 `|` 、 `!` 、 `(` 、 `)` 、 `{` 、 `}` 、 `[` 、 `]` 、などの特殊文字が含まれます。 `^` 、 `"` 、 `~` 、 `*` 、 `?` 、 `:` 、 `/` 、または`\` 。

        例：正確に`"POST /log/v1 HTTP/1.1" 202`を含む`status`属性をクエリするには、次のように引用符をエスケープします。

        `status: "\"POST /log/v1 HTTP/1.1\" 202"`
      </td>
    </tr>

    <tr>
      <td>
        ワイルドカード検索
      </td>

      <td>
        アスタリスク（ `*` ）を使用してワイルドカード検索を実行し、0個以上の文字を置き換えることができます。

        例：どこかに`202`を含む`status`属性をクエリするには、次のようにクエリをフォーマットします。

        `status: *202*`

        用語にスペースまたはその他のメタ文字が含まれている場合（上記を参照）、ワイルドカード用語を引用符で囲む必要があります。

        たとえば、 `/log/v1 202`どこかに含まれている`status`属性をクエリするには、クエリを次のようにフォーマットします。

        `status: "*/log/v1 202*"`
      </td>
    </tr>
  </tbody>
</table>

## テキストで検索 [#query-text]

より具体的な検索結果を得るためには、キーワードやフレーズを組み合わせたテキスト検索が有効です。

### テキスト演算子 [#text-operators]

Logsのクエリ構文では、以下のテキスト演算子を使用できます。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        条件
      </th>

      <th>
        テキスト演算子の例
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        マッチング（キーワード）
      </td>

      <td>
        別々に入力したキーワードを含むログ結果を検索します。

        `"new" "relic"`
      </td>
    </tr>

    <tr>
      <td>
        完全一致（フレーズ）
      </td>

      <td>
        入力された特定のフレーズを含むログ結果を検索します。

        `"new relic agent"`
      </td>
    </tr>

    <tr>
      <td>
        Either / Or
      </td>

      <td>
        入力されたキーワードのいずれか、または両方を含むログ結果を検索します。

        `new OR relic`
      </td>
    </tr>

    <tr>
      <td>
        そして
      </td>

      <td>
        入力されたキーワードの両方を含むログ結果を検索します。

        `new AND relic`
      </td>
    </tr>

    <tr>
      <td>
        \* ワイルドカード（0個以上）
      </td>

      <td>
        入力されたキーワードの両方を含み、その間に0文字以上の文字があるログ結果を検索します。

        `new*relic`
      </td>
    </tr>

    <tr>
      <td>
        否定（キーワード）
      </td>

      <td>
        入力された特定のキーワードを含まないログ結果を検索します。

        `-new`
      </td>
    </tr>

    <tr>
      <td>
        否定（フレーズ）
      </td>

      <td>
        入力された特定の語句を含まないログ結果を検索します。

        `-"new relic"`
      </td>
    </tr>
  </tbody>
</table>

## 属性で探す [#query-attributes]

特定の属性やフィールドにクエリ結果を絞り込むには、属性検索を使用します。

### 一般的なオペレーター [#general-operators]

以下の演算子は、すべてのタイプの属性で使用できます。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        条件
      </th>

      <th>
        一般的なオペレーターの例
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        同等 `:`
      </td>

      <td>
        属性が指定されたキーワードと等しいログ結果を検索します。例：フィールド`hostname`は`chi`に等しい：

        `hostname:chi`
      </td>
    </tr>

    <tr>
      <td>
        等しくない `- :`
      </td>

      <td>
        属性が指定されたキーワードと等しくないログ結果を検索します。例：フィールド`hostname`が`chi`と等しくありません。

        `-hostname:chi`
      </td>
    </tr>

    <tr>
      <td>
        収録内容 `*`
      </td>

      <td>
        属性に指定されたキーワードが含まれているログ結果を検索します。例：フィールド`hostname`には`chi`が含まれています。

        `hostname:*chi*`
      </td>
    </tr>

    <tr>
      <td>
        含まれていません `- *`
      </td>

      <td>
        属性に指定されたキーワードが含まれていないログ結果を検索します。例：フィールド`hostname`に`chi`が含まれていません。

        `-hostname:*chi*`
      </td>
    </tr>

    <tr>
      <td>
        で始まる `*`
      </td>

      <td>
        指定されたキーワードで属性が始まるログ結果を検索します。例：フィールド`hostname`は`chi`で始まります。

        `hostname:chi*`
      </td>
    </tr>

    <tr>
      <td>
        で終わる `*`
      </td>

      <td>
        指定されたキーワードで属性が終了するログ結果を検索します。例：フィールド`hostname`は`chi`で終わります。

        `hostname:*chi`
      </td>
    </tr>

    <tr>
      <td>
        持っています。
      </td>

      <td>
        指定されたフィールドを持つログ結果を検索します。例：フィールド`user_name`があります。

        `has:user_name`
      </td>
    </tr>

    <tr>
      <td>
        ミッシング
      </td>

      <td>
        指定されたフィールドが欠落しているログ結果を検索します。例：フィールド`user_name`がありません。

        `missing:user_name`
      </td>
    </tr>
  </tbody>
</table>

### 数値演算子 [#numeric-operators]

以下の演算子は、数値属性でのみ使用できます。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        条件
      </th>

      <th>
        数値演算子の例
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        より大きい
      </td>

      <td>
        指定されたパラメーターよりも大きいログ結果属性の一致を検索します。例：フィールド`http_response_time_ms`が`500`より大きい。

        `http_response_time_ms:>500`
      </td>
    </tr>

    <tr>
      <td>
        より大きいか等しい
      </td>

      <td>
        指定されたパラメーター以上の属性一致を持つログ結果を検索します。例：フィールド`http_response_time_ms`は`500`以上です。

        `http_response_time_ms:>=500`
      </td>
    </tr>

    <tr>
      <td>
        未満
      </td>

      <td>
        指定されたパラメーターよりも少ない属性一致を持つログ結果を検索します。例：フィールド`http_response_time_ms`は`500`未満です。

        `http_response_time_ms:<500`
      </td>
    </tr>

    <tr>
      <td>
        以下の場合
      </td>

      <td>
        指定されたパラメーター以下の属性一致を持つログ結果を検索します。例：フィールド`http_response_time_ms`は`500`以下です。

        `http_response_time_ms:<=500`
      </td>
    </tr>
  </tbody>
</table>

## ログ クエリの例 [#query]

### 例: クエリ <DNT>Apache</DNT> [#example-query-apache-logs]

<Callout
  variant="tip"
  title="Apache ログについて"
>
  <DNT>Apache</DNT>ログがある場合は、 [<DNT>Apache</DNT>ログ](/docs/logs/ui-data/built-log-parsing-rules/#apache)の組み込み解析ルールを使用してログを属性に解析することをお勧めします。 組み込みの解析を使用するには、 <DNT>Apache</DNT>ログのホストの`logging.yml`設定に`logtype: apache`プロパティを追加するだけです。
</Callout>

<DNT>Apache</DNT>ログをクエリする例をいくつか示します。

<CollapserGroup>
  <Collapser
    id="503-responce-code"
    title="「503」応答コードを含むすべての Apache ログを表示します。"
  >
    ```
    logtype:apache response:503
    ```
  </Collapser>

  <Collapser
    id="multiple-response-codes"
    title="`4xx` または `5xx` レスポンス コードを含むすべての Apache ログを表示します。"
  >
    ```
    logtype:apache response:4* OR response 5*
    ```
  </Collapser>

  <Collapser
    id="method-example"
    title="`Method=GET` および `Response=2xx` ですべての Apache ログを表示します"
  >
    ```
    logtype:apache verb:GET response:2*
    ```
  </Collapser>
</CollapserGroup>

### 例: クエリ <DNT>Amazon Cloudfront CDN</DNT> [#example-query-cloudfront]

<Callout
  variant="tip"
  title="CDN ログについて"
>
  <DNT>Amazon CloudFront</DNT>のログがある場合は、 [<DNT>Amazon CloudFront</DNT>のアクセス ログを New Relic に転送する](/docs/logs/forward-logs/cloudfront-web-logs/)方法を確認してください。 <DNT>Amazon Cloudfront</DNT>の[標準](/docs/logs/ui-data/built-log-parsing-rules/#cloudfront)または[リアルタイムの](/docs/logs/ui-data/built-log-parsing-rules/#cloudfront-rtl)アクセス ログを自動的に解析するために使用できる組み込みの解析ルールを提供します。 また[、 <DNT>Amazon Cloudfront</DNT>アクセス ログ クイックスタートダッシュ](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs)ボードをインストールすると、インサイトから<DNT>Amazon CloudFront CDN</DNT>アクセス ログにすぐにアクセスできるようになります。
</Callout>

[<DNT>Amazon Cloudfront CDN</DNT>アクセス ログ](/docs/logs/forward-logs/cloudfront-web-logs/)をクエリする例をいくつか示します。

<CollapserGroup>
  <Collapser
    id="chase-miss-example"
    title="キャッシュミスの原因となったすべてのアクセス ログを表示する"
  >
    ```
    logtype:cloudfront-rtl x_edge_result_type:Miss
    ```
  </Collapser>

  <Collapser
    id="edge-locations"
    title="アトランタのエッジ ロケーションからのキャッシュ ミスの原因となったすべてのアクセス ログを表示する"
  >
    ```
    logtype:cloudfront-rtl x_edge_result_type:Miss x_edge_location:ATL*
    ```
  </Collapser>

  <Collapser
    id="methods"
    title="アトランタのエッジ ロケーションから 4xx または 5xx エラーが発生した cs_method=GET のすべてのアクセス ログを表示します"
  >
    ```
    logtype:cloudfront-rtl cs_method:GET x_edge_location:ATL* sc_status:4* OR sc_status:5*
    ```
  </Collapser>
</CollapserGroup>

## NRQL クエリを参照してダッシュボードに追加する [#create-dashboard]

ログ チャートの NRQL バージョンを表示するには、そのチャートの省略記号メニューをクリックし、 <DNT>**View query**</DNT>をクリックします。 これにより、そのチャートを生成した NRQL のビューが開きます。 そこでクエリを変更したり、ダッシュボードに追加したりできます。

<DNT>Lucene</DNT> 構文からNRQL書き込みに切り替えるには、書き込みビルダーの右側にある[<DNT>**NRQL**</DNT> ボタン](/docs/logs/ui-data/use-logs-ui#workflow-search)をクリックします。

<DNT>Apache</DNT>ログで 503 応答コードを検索し、それを`FACET`を使用して NRQL クエリに変換し、円グラフとして表示して、そのグラフをダッシュボードに追加するとします。 方法は次のとおりです。

1. <DNT>**All logs**</DNT> UI ページから、クエリを使用して 503 応答コードを持つすべての<DNT>Apache</DNT>ログを検索します。 `logtype:apache response:503`
2. ログ チャートの省略記号メニューから、 <DNT>**View query**</DNT>をクリックします。
3. クエリで、 `SINCE <timestamp> UNTIL <timestamp> TIMESERIES MAX`を`FACET verb`に置き換えて、 <DNT>**Run**</DNT>をクリックします。 メソッド (動詞) ごとにグループ化された応答コードを含むテーブルが表示されます。
4. チャートの種類を<DNT>**Pie**</DNT>に変更します。
5. <DNT>**Add to dashboard**</DNT>をクリックして手順を完了します。
