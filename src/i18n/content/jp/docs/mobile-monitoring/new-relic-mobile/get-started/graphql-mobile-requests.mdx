---
title: モバイルアプリのGraphQLリクエストを監視する
tags:
  - GraphQL
  - Mobile monitoring
  - Get started
metaDescription: Learn how to add custom names for GraphQL requests and view request data in New Relic.
freshnessValidatedDate: '2023-11-30T00:00:00.000Z'
translationType: machine
---

モバイル アプリ開発の動的な領域では、開発者は GraphQL を使用して強力で合理化されたデータ取得ツールを構築できます。しかし、GraphQL クエリの複雑さとモバイル アプリ アーキテクチャの複雑化に伴い、包括的なモニタリングの必要性がさらに重要になっています。New Relic は GraphQL リクエストの監視に役立ち、次のことが可能になります。

* 遅延やパフォーマンス低下の原因となっているクエリを特定して最適化します。
* ユーザーに影響を与える前にエラーを積極的に捕捉します。
* エンドユーザーのリクエストからデータが迅速かつスムーズに読み込まれるようにします。

<img
  title="HTTP requests"
  alt="Screenshot of the HTTP requests UI"
  src="/images/mobile_screenshot-full_mobile-graphql-requests.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > HTTP requests**</DNT>: 関数のカスタム名に基づいて GraphQL リクエストを表示します。
</figcaption>

## 始めましょう [#get-started]

New Relic は、デフォルトですべての GraphQL リクエストをシームレスに監視します。ただし、明確さと分析を強化するために、GraphQL リクエストの名前を手動で構成することをお勧めします。これにより、機能に基づいてリクエストを分類し、特定のリクエスト グループのパフォーマンス データを表示できます。

各エンドポイントが個別の目的を果たす REST API とは異なり、すべての GraphQL リクエストは単一の`/graphql`エンドポイントに送信されます。このため、異なるアクションを実行するリクエストを区別することが困難になります。リクエストにカスタム名を割り当てることで、GraphQL API がどのように使用されているかをより明確に理解し、特定のリクエスト機能に関連する潜在的なパフォーマンスのボトルネックを特定できます。

GraphQL リクエストにカスタム名を付けるには、次の操作を行う必要があります。

1. ネットワークリクエストのURLを特定します。たとえば、これは URL `https://www.YOUR_MOBILE_APP.com/checkout`の顧客のチェックアウト プロセスに関連するリクエストである可能性があります。

2. `addHTTPHeaderTracking method`を使用して、識別されたリクエストの`X-APOLLO-OPERATION-NAME`ヘッダーを設定します。たとえば、顧客のチェックアウト プロセスに関連するリクエストには、 `checkout`という名前を付けることができます。名前は次の要件を満たす必要があります。

   * 長さ: 1 ～ 1024 文字の文字列です。
   * 文字: [ASCII 文字](https://www.ascii-code.com/characters)のみで構成されます。

以下のプラットフォーム固有の手順に従ってください。

<CollapserGroup>
  <Collapser
    id="objc"
    title="目的-c"
  >
    1. エージェントを開始するときに、 `operationName`ヘッダーを追加します。

       ```objectivec
       [NewRelic addHTTPHeaderTrackingFor:@[@"operationName"]]; 
       ```

    2. GraphQL HTTP リクエスト ヘッダーに、リクエスト URL とカスタム名を追加します。

       ```objectivec
       NSURLRequest *request = [NSURLRequest requestWithURL:[NSURL URLWithString:@"https://www.YOUR_MOBILE_APP.com/checkout"]]; // Add your request URL here.
       NSMutableURLRequest *mutableRequest = [request mutableCopy];
       [mutableRequest addValue:@"YOUR_CUSTOM_NAME" forHTTPHeaderField:@"operationName"]; // Add your custom name here.
       request = [mutableRequest copy];
       [[NSURLSession sharedSession] dataTaskWithRequest:request];
       ```
  </Collapser>

  <Collapser
    id="java"
    title="Java"
  >
    1. エージェントを開始するときに、 `operationName`ヘッダーを追加します。

       ```java
       List<String> headers = new ArrayList<>(); 
       headers.add("operationName");
       NewRelic.addHTTPHeaderTrackingFor(headers);
       ```

    2. GraphQL HTTP リクエスト ヘッダーに、リクエスト URL とカスタム名を追加します。

       ```java
       Request request = new Request.Builder()
               .url("https://www.YOUR_MOBILE_APP.com/checkout") // Add your request URL here.
               .addHeader("operationName","YOUR_CUSTOM_NAME") // Add your custom name here.
               .build();
       ```
  </Collapser>

  <Collapser
    id="kotlin"
    title="コトリン"
  >
    1. エージェントを開始するときに、 `operationName`ヘッダーを追加します。

       ```kotlin
       // Add the operationName header.
               val headers = mutableListOf<String>()
               headers.add("operationName")

               NewRelic.addHTTPHeaderTrackingFor(headers);
       ```

    2. GraphQL HTTP リクエスト ヘッダーに、リクエスト URL とカスタム名を追加します。

       ```kotlin
       val request = Request.Builder()
           .url("https://www.YOUR_MOBILE_APP.com/checkout") // Add your request URL here.
           .addHeader("operationName", "YOUR_CUSTOM_NAME") // Add your custom name here.
           .build()
       ```
  </Collapser>

  <Collapser
    id="swift"
    title="迅速"
  >
    1. エージェントを開始するときに、 `operationName`ヘッダーを追加します。

       ```swift
       NewRelic.addHTTPHeadersTracking(for:["operationName"])
       ```

    2. GraphQL HTTP リクエスト ヘッダーに、リクエスト URL とカスタム名を追加します。

       ```swift
       var request = URLRequest(url: URL(string:"https://www.YOUR_MOBILE_APP.com/checkout")!) // Add your request URL here.
       request.addValue("YOUR_CUSTOM_NAME", forHTTPHeaderField: "operationName") // Add your custom name here.
       URLSession.shared.dataTask(with: request)
       ```
  </Collapser>
</CollapserGroup>

## New Relicでデータを見る [#view-data]

GraphQL リクエストを表示するには:

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile**
   </DNT>

   に移動します。

2. モバイルアプリを選択します。

3. 左側のメニューで、

   <DNT>
     **HTTP requests**
   </DNT>

   をクリックします。

4. <DNT>
     **Group by**
   </DNT>

   ドロップダウンで、

   <DNT>
     **Operation Name**
   </DNT>

   を選択します。 HTTP リクエスト ページには、設定した`operationName`ごとにグループ化されたすべてのリクエストが表示されます。

<img
  title="Filter by operation name"
  alt="Screenshot of filtering requests by the operation name"
  src="/images/mobile_screenshot-crop_group-by-dropdown.webp"
/>

GraphQL リクエストのみを表示しているので、特定のリクエストをクリックして、応答時間とネットワーク障害に関するメトリクスを表示します。

<img
  title="Request details"
  alt="Screenshot of clicking into a specific request"
  src="/images/mobile_screenshot-crop_request-details.webp"
/>
