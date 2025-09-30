---
title: トレース オブザーバーをセットアップする
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: 'How to set up New Relic''s trace observer, which is required for enabling our tracing tools that use Infinite Tracing.'
freshnessValidatedDate: never
translationType: machine
---

[分散トレーシングを設定する手順](/docs/distributed-tracing/enable-configure/quick-start)に従い、無限トレーシングと呼ばれる詳細オプションの手順を続行する場合は、トレース オブザーバーを設定する必要があります。トレース オブザーバーは、Infinite Tracing 用の AWS ベースのサービスで、テレメトリ データを New Relic に送信する低レイテンシかつ低コストの方法を提供します。トレース オブザーバーはトレース データを受信すると、[テールベースのサンプリングを](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#tail-based)使用して何を保持し、New Relic に送信するかを決定します。

データ ソースの種類 (サービス、アプリ、またはエンティティ) に合ったトレース オブザーバーのセットアップを完了します。さまざまなタイプがある場合は、複数のセクションで手順を実行する必要がある場合があります。

* [APM エージェントとサードパーティのテレメトリ ツールを備えたサービス](#apm-and-third-party)
* [New Relic ブラウザー、モバイル、および Lambda を備えたサービス](#browser-mobile-lambda)
* [(オプション) すべてのサービス タイプの追加構成](#follow-up-config)

<Callout variant="tip">
  要求の一部は、標準の分散トレースをまだ使用しているサービスと通信していますか? [構成の競合を](/docs/understand-dependencies/distributed-tracing/troubleshooting/infinite-tracing-trace-configuration-conflicts)回避するには、関連するすべてのサービスに対して無限トレースを有効にするのが理想的です。
</Callout>

## APM エージェントとサードパーティのテレメトリ ツールを備えたサービス [#apm-and-third-party]

New Relic <InlinePopover type="apm"/>エージェントまたはサードパーティのインテグレーションを使用している場合に新しいトレース オブザーバーを作成するには:

1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**</DNT>に移動します。

2. 左上のドロップダウンでアカウントを選択します。複数のアカウントにアクセスできる場合は、無限トレースを有効にするアカウントにいることを確認してください。オブザーバーを追加できない場合は、 [リージョンごと、アカウント ファミリーごとに 1 つのオブザーバー](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#infinite-architecture)しか許可されていない可能性があります。

3. トレース オブザーバーがまだ存在しない場合は、 <DNT>**New trace observer**</DNT>をクリックして追加し、情報を入力して<DNT>**Create**</DNT>をクリックします。 以下の地域が対象となりますのでご注意ください。

   * <DNT>
       **us-east-1 (US)**
     </DNT>

   * <DNT>
       **us-west-2 (US)**
     </DNT>

   * <DNT>
       **eu-central-1 (EU):**
     </DNT>

     EU のリクエストからデータを収集しており、EU データセンターでレポートする EU ベースの New Relic アカウントがある場合は、この地域を選択します。

   * <DNT>
       **eu-west-1 (US):**
     </DNT>

     EU のリクエストからデータを収集しており、米国のデータセンターでレポートする米国ベースの New Relic アカウントがある場合は、この地域を選択します。

   * <DNT>
       **ap-southeast-1 (US)**
     </DNT>

   * <DNT>
       **ap-southeast-2 (US)**
     </DNT>

   * <DNT>
       **us-east-2 (US, FedRAMP)**
     </DNT>

4. <DNT>**Endpoints**</DNT>ドロップダウンで、 <DNT>**For other integrations**</DNT>の下のエンドポイント値をコピーして準備します。 この値はコード例では`YOUR_TRACE_OBSERVER_URL`として参照されています。 これは[、トレース オブザーバー](#sample-payload)をテストするだけでなく、[テレメトリ インテグレーション](/docs/distributed-tracing/enable-configure/quick-start)を構成して、[トレースAPI](/docs/distributed-tracing/trace-api/introduction-trace-api/)経由でデータを送信するために使用されます。

5. APMエージェントを設定する場合は、<DNT>**For language agents**</DNT>の下の ヒント 値もコピーして準備しておく必要があります。 この値はコード例では`YOUR_TRACE_OBSERVER_HOST`として参照されています。 これは[、言語エージェントがトレース オブザーバーにデータを送信するように構成する](/docs/distributed-tracing/enable-configure/quick-start)ために使用されます。

6. (オプション) トレース オブザーバーが機能していることを確認するには、サンプル トレース ペイロードを送信することをお勧めします。 [Trace API を](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api) 直接使用している場合は、API の仕組みを理解するのに役立ちます。

   <CollapserGroup>
     <Collapser
       id="sample-request"
       title="サンプル ペイロードの送信"
     >
       <Callout variant="important">
         Zipkin 形式のデータを使用している場合は、 [「Zipkin ペイロードを送信する」](/docs/understand-dependencies/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api#send-zipkin-curl)を参照してください。
       </Callout>

       このテストは、 `Test Service A`という名前のサービスから、1 つのトレースと 2 つのスパンを含むサンプル トレース ペイロードを送信します。

       このサンプル リクエストを送信するには:

       1. データのレポート先となるアカウントの<InlinePopover type="licenseKey"/>を取得して準備しておきます。

       2. 次の `curl` リクエストをテキスト エディタにコピーします。

          ```bash
          curl -i -H 'Content-Type: application/json' \
              -H 'Api-Key: YOUR_LICENSE_KEY' \
              -H 'Data-Format: newrelic' \
              -H 'Data-Format-Version: 1' \
              -X POST \
              -d '[
                  {
                      "common": {
                          "attributes": {
                              "environment": "staging"
                          }
                      },
                      "spans": [
                          {
                              "trace.id": "123456",
                              "id": "ABC",
                              "attributes": {
                                  "duration.ms": 12.53,
                                  "host": "host123.example.com",
                                  "name": "/home",
                                  "service.name": "Test Service A"
                              }
                          },
                          {
                              "trace.id": "123456",
                              "id": "DEF",
                              "attributes": {
                                  "error.message": "Invalid credentials",
                                  "service.name": "Test Service B",
                                  "host": "host456.example.com",
                                  "duration.ms": 2.97,
                                  "name": "/auth",
                                  "parent.id": "ABC"
                              }
                          }
                      ]
                  }
              ]' 'YOUR_TRACE_OBSERVER_URL'
          ```

       3. `curl` リクエストに独自の値を挿入します。

          <table>
            <thead>
              <tr>
                <th>
                  価値
                </th>

                <th>
                  説明
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `YOUR_LICENSE_KEY`
                </td>

                <td>
                  これを ingest <InlinePopover type="licenseKey"/>に置き換えます。
                </td>
              </tr>

              <tr>
                <td>
                  `YOUR_TRACE_OBSERVER_URL`
                </td>

                <td>
                  これを、前の手順でコピーした<DNT>**For other integrations**</DNT>エンドポイント値に置き換えます。
                </td>
              </tr>
            </tbody>
          </table>

       4. curl リクエストをターミナルにコピーして実行します。

       5. テストは成功を示す `HTTP/1.1 202 Accepted`を返します。そうでない場合は、次の一般的な問題を確認してください。

          * <DNT>
              [**For other integrations**](#endpoints)
            </DNT>

            [エンドポイント](#endpoints)値を使用したことを確認してください。

          * `YOUR_TRACE_OBSERVER_URL`を一重引用符で囲んでいることを確認してください。

          * 正しい API キーを使用していることを確認してください。

       6. テストで `HTTP/1.1 202 Accepted`が返された場合は、New Relic UI に移動して、span 属性 `service.name = Test Service A` を使用したサンプル ペイロード データのクエリを確認します ([そのクエリのリンクはここにあります](https://one.newrelic.com/launcher/distributed-tracing-nerdlets.distributed-tracing?launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjoxODAwMDAwfSwiJGlzRmFsbGJhY2tUaW1lUmFuZ2UiOnRydWV9&pane=eyJuZXJkbGV0SWQiOiJkaXN0cmlidXRlZC10cmFjaW5nLW5lcmRsZXRzLmRpc3RyaWJ1dGVkLXRyYWNpbmctbGF1bmNoZXIiLCJzb3J0SW5kZXgiOjAsInNvcnREaXJlY3Rpb24iOiJERVNDIiwicXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJpbmRleFF1ZXJ5Ijp7ImNvbmRpdGlvblR5cGUiOiJJTkRFWCIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W119LCJzcGFuUXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJjb25kaXRpb25TZXRzIjpbeyJjb25kaXRpb25UeXBlIjoiU1BBTiIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W3siYXR0ciI6InNlcnZpY2UubmFtZSIsIm9wZXJhdG9yIjoiRVEiLCJ2YWx1ZSI6IlRlc3QgU2VydmljZSBBIn1dfV19fX0=))。サンプル ペイロードにはエラー属性が含まれているため、エラー サンプラーはそれを保持するようにマークします。ペイロードを変更してエラー属性を削除すると、ランダム サンプラーはこの特定のトレースを保持しない場合があります。

          <Callout variant="tip">
            トレースが UI に表示されるまでに最大 1 分かかる場合があります。
          </Callout>
     </Collapser>
   </CollapserGroup>

7. Infinite Tracing を試した後にそれらに戻ることができるように、以下の [オプションの構成を](#follow-up-config) ブックマークしてください。

8. エージェントまたはサードパーティのテレメトリ ツールの元の分散トレース セットアップ手順に戻り、各サービスの構成に新しいエンドポイント値を挿入します。

9. [New Relic ブラウザー、モバイル、および Lambda でインストルメント化されたサービス](#browser-mobile-lambda)もある場合は、そのセクションの手順に従って、トレース オブザーバーでデータ ソース (サービス、アプリ、またはエンティティ) を選択します。

## New Relic ブラウザー、モバイル、および Lambda を備えたサービス [#browser-mobile-lambda]

New Relic ブラウザー、モバイル、または Lambda を使用している場合に新しいトレース オブザーバーを作成するには、 [APM エージェントおよびサードパーティの統合の](#apm-and-third-party)場合と同様の手順に従います。この設定が異なる点は、各サービスの構成に新しいトレース オブザーバー エンドポイントを挿入する必要がないことです。代わりに、Infinite Tracing トレース オブザーバーにデータを送信するデータ ソース (サービス、アプリ、またはエンティティ) を指定するトレース オブザーバーで個別の構成を完了します。

別の種類のサービス (<InlinePopover type="apm"/>エージェントなど) をセットアップしているときにすでにトレース オブザーバーを作成している場合は、トレース オブザーバーの作成手順をスキップして、 [browser 、モバイル、Lambda の初期トレース オブザーバー設定](#initial-config)に進み、データ ソースを選択できます。

### トレース オブザーバーを作成する [#create-for-mlb]

トレース オブザーバーをまだ設定していない場合は、次の手順を実行します。

1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**</DNT>に移動します。

2. 左上のドロップダウンでアカウントを選択します。複数のアカウントにアクセスできる場合は、無限トレースを有効にするアカウントにいることを確認してください。オブザーバーを追加できない場合は、 [リージョンごと、アカウント ファミリーごとに 1 つのオブザーバー](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#infinite-architecture)しか許可されていない可能性があります。

3. トレース オブザーバーがまだ存在しない場合は、 <DNT>**New trace observer**</DNT>をクリックして追加し、情報を入力して<DNT>**Create**</DNT>をクリックします。 以下の地域が対象となりますのでご注意ください。

   * <DNT>
       **us-east-1 (US)**
     </DNT>

   * <DNT>
       **us-west-2 (US)**
     </DNT>

   * <DNT>
       **eu-central-1 (EU):**
     </DNT>

     EU のリクエストからデータを収集しており、EU データセンターでレポートする EU ベースの New Relic アカウントがある場合は、この地域を選択します。

   * <DNT>
       **eu-west-1 (US):**
     </DNT>

     EU のリクエストからデータを収集しており、米国のデータセンターでレポートする米国ベースの New Relic アカウントがある場合は、この地域を選択します。

   * <DNT>
       **ap-southeast-1 (US)**
     </DNT>

   * <DNT>
       **ap-southeast-2 (US)**
     </DNT>

   * <DNT>
       **us-east-2 (US, FedRAMP)**
     </DNT>

4. <DNT>**Endpoints**</DNT>ドロップダウンで、 <DNT>**For other integrations**</DNT>の下のエンドポイント値をコピーして準備します。 この値はコード例では`YOUR_TRACE_OBSERVER_URL`として参照されています。 これは[トレースオブザーバー](#sample-payload)をテストするために使用されます。

5. (オプション) トレース オブザーバーが機能していることを確認するには、サンプル トレース ペイロードを送信することをお勧めします。

   <CollapserGroup>
     <Collapser
       id="sample-request"
       title="サンプル ペイロードの送信"
     >
       <Callout variant="important">
         Zipkin 形式のデータを使用している場合は、 [「Zipkin ペイロードを送信する」](/docs/understand-dependencies/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api#send-zipkin-curl)を参照してください。
       </Callout>

       このテストは、 `Test Service A`という名前のサービスから、1 つのトレースと 2 つのスパンを含むサンプル トレース ペイロードを送信します。

       このサンプル リクエストを送信するには:

       1. データのレポート先となるアカウントの<InlinePopover type="licenseKey"/>を取得して準備しておきます。

       2. 次の `curl` リクエストをテキスト エディタにコピーします。

          ```bash
          curl -i -H 'Content-Type: application/json' \
              -H 'Api-Key: YOUR_LICENSE_KEY' \
              -H 'Data-Format: newrelic' \
              -H 'Data-Format-Version: 1' \
              -X POST \
              -d '[
                  {
                      "common": {
                          "attributes": {
                              "environment": "staging"
                          }
                      },
                      "spans": [
                          {
                              "trace.id": "123456",
                              "id": "ABC",
                              "attributes": {
                                  "duration.ms": 12.53,
                                  "host": "host123.example.com",
                                  "name": "/home",
                                  "service.name": "Test Service A"
                              }
                          },
                          {
                              "trace.id": "123456",
                              "id": "DEF",
                              "attributes": {
                                  "error.message": "Invalid credentials",
                                  "service.name": "Test Service B",
                                  "host": "host456.example.com",
                                  "duration.ms": 2.97,
                                  "name": "/auth",
                                  "parent.id": "ABC"
                              }
                          }
                      ]
                  }
              ]' 'YOUR_TRACE_OBSERVER_URL'
          ```

       3. `curl` リクエストに独自の値を挿入します。

          <table>
            <thead>
              <tr>
                <th>
                  価値
                </th>

                <th>
                  説明
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `YOUR_LICENSE_KEY`
                </td>

                <td>
                  これを<InlinePopover type="licenseKey"/>に置き換えます。
                </td>
              </tr>

              <tr>
                <td>
                  `YOUR_TRACE_OBSERVER_URL`
                </td>

                <td>
                  これを、前の手順でコピーした<DNT>**For other integrations**</DNT>エンドポイント値に置き換えます。
                </td>
              </tr>
            </tbody>
          </table>

       4. curl リクエストをターミナルにコピーして実行します。

       5. テストは成功を示す `HTTP/1.1 202 Accepted`を返します。そうでない場合は、次の一般的な問題を確認してください。

          * <DNT>
              [**For other integrations**](#endpoints)
            </DNT>

            [エンドポイント](#endpoints)値を使用したことを確認してください。

          * `YOUR_TRACE_OBSERVER_URL`を一重引用符で囲んでいることを確認してください。

          * 正しい API キーを使用していることを確認してください。

       6. テストで `HTTP/1.1 202 Accepted`が返された場合は、New Relic UI に移動して、span 属性 `service.name = Test Service A` を使用したサンプル ペイロード データのクエリを確認します ([そのクエリのリンクはここにあります](https://one.newrelic.com/launcher/distributed-tracing-nerdlets.distributed-tracing?launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjoxODAwMDAwfSwiJGlzRmFsbGJhY2tUaW1lUmFuZ2UiOnRydWV9&pane=eyJuZXJkbGV0SWQiOiJkaXN0cmlidXRlZC10cmFjaW5nLW5lcmRsZXRzLmRpc3RyaWJ1dGVkLXRyYWNpbmctbGF1bmNoZXIiLCJzb3J0SW5kZXgiOjAsInNvcnREaXJlY3Rpb24iOiJERVNDIiwicXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJpbmRleFF1ZXJ5Ijp7ImNvbmRpdGlvblR5cGUiOiJJTkRFWCIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W119LCJzcGFuUXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJjb25kaXRpb25TZXRzIjpbeyJjb25kaXRpb25UeXBlIjoiU1BBTiIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W3siYXR0ciI6InNlcnZpY2UubmFtZSIsIm9wZXJhdG9yIjoiRVEiLCJ2YWx1ZSI6IlRlc3QgU2VydmljZSBBIn1dfV19fX0=))。サンプル ペイロードにはエラー属性が含まれているため、エラー サンプラーはそれを保持するようにマークします。ペイロードを変更してエラー属性を削除すると、ランダム サンプラーはこの特定のトレースを保持しない場合があります。

          <Callout variant="tip">
            トレースが UI に表示されるまでに最大 1 分かかる場合があります。
          </Callout>
     </Collapser>
   </CollapserGroup>

### ブラウザー、モバイル、および Lambda の初期トレース オブザーバー構成 [#initial-config]

トレース オブザーバーを作成したら、Infinite Tracing トレース オブザーバーにデータを送信するデータ ソース (サービス、アプリ、またはエンティティ) を指定する必要があります。データ ソースを選択する前に、次のことをよく理解しておいてください。

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="timing"
    title="New Relic UI にデータが表示されるまでどのくらいかかりますか?"
  >
    ブラウザー、モバイル、および Lambda データ ソースを選択すると、そのトレース オブザーバーの結果が New Relic UI に表示されるまでに最大 3 分の遅延が予想されます。これにより、トレース オブザーバーは、サンプリングの決定を行う前に、これらの高レイテンシ データ ソースが到着するのを十分長く待機できます。

    たとえば、ブラウザ、モバイル、または Lambda のデータ ソースを追加した後に [サンプルのカール テスト](#sample-request) テストを再実行すると、データが UI に表示されるまでに遅延が予想されます。
  </Collapser>

  <Collapser
    className="freq-link"
    id="multi-named-apps"
    title="ブラウザ アプリが複数の名前を持つ APM エージェントに接続されている場合はどうなりますか?"
  >
    ブラウザ アプリ [が複数の名前を持つ APM アプリケーション](/docs/apm/agents/manage-apm-agents/app-naming/use-multiple-names-app/)に関連付けられている場合、データ ソースを選択するときに複数の名前を持つブラウザ アプリのグループから 1 つだけを選択できます。別の名前で呼ばれる同じアプリケーションを選択しようとすると、UI は、ブラウザー アプリを 1 つだけ選択する必要があることを示します。
  </Collapser>

  <Collapser
    className="freq-link"
    id="lambda-sampling"
    title="ラムダ サンプリングはどのように機能しますか?"
  >
    デフォルトでは、Lambda レイヤーをセットアップすると、ヘッドベースのサンプリングが自動的に取得されます。Lambda の無限トレースを有効にすると、ヘッドベースのサンプリング データがトレース オブザーバーによって追加でサンプリングされます。Lambda 関数で Infinite Tracing を有効にする主な利点は、それらのスパンが Infinite Tracing によって追跡される他のサービスからのスパンに確実に含まれるようになることです。
  </Collapser>
</CollapserGroup>

以下の手順は New Relic UI を使用するためのものですが、プログラムによるアプローチを好む場合は、 [GraphQL でデータ ソースを指定](/docs/apis/nerdgraph/examples/configure-infinite-tracing-graphql/#updating-the-data-sources)できます。GraphQL を使用する場合は、この手順に戻り、以下のステップ 4 (オプションの構成) に進みます。

UI でブラウザ、モバイル、および Lambda の設定を完了するには:

1. トレース オブザーバー アプリ ( <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**</DNT> ) に戻ります。

2. トレース オブザーバーの場合は、行の末尾に移動し、省略記号アイコン<DNT>**...**</DNT>をクリックしてから、 <DNT>**Edit mobile, browser, lambda sources**</DNT>をクリックします。

   <img
     title="Screenshot showing menu when you click the ellipsis next to your trace observer"
     alt="Screenshot showing menu when you click the three dots next to your trace observer"
     src="/images/distributed-tracing_screenshot-crop_mobile-lambda-menu-.webp"
   />

3. 次の点に注意して、含めるデータ ソースを選択します。

   * フィルターを使用してオプションを絞り込むことができます。

   * browserアプリが複数の名前を持つ

     <InlinePopover type="apm"/>

     エージェントに接続されている場合、選択できる名前は 1 つだけです。

   * エントリが灰色の場合、別のトレース オブザーバーによって既に使用されています。


4. Infinite Tracing を試した後にそれらに戻ることができるように、以下の [オプションの構成を](#follow-up-config) ブックマークしてください。
5. [New Relic 分散トレーシング UI](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/)で Infinite Tracing データを表示します。
6. [APM エージェントまたはサードパーティのテレメトリ ツールで計測されたサービスも](#apm-and-third-party) ある場合は、そのセクションの手順に従って、それらのデータが New Relic にレポートされるようにします。

## (オプション) すべてのサービス タイプの追加構成 [#follow-up-config]

<Callout variant="tip">
  この機能をしばらく使用した後まで、これらのオプションの構成を延期することをお勧めします。
</Callout>

さまざまな構成でトレース オブザーバーの動作を制御できます。構成できる機能の一部を次に示します。

* [トレース オブザーバーの監視を構成する](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-trace-observer-monitoring/): 表示および保持されるトレースの量を確認できます。
* [スパン属性トレース フィルターの構成](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-span-attribute-trace-filter/): スパンのカスタム フィルター ルールを作成します。
* [無限トレース: ランダム トレース フィルターの構成](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-random-trace-filter): ランダム トレース フィルターで使用されるパーセンテージを調整します。
