---
title: OpenAI の統合
metaDescription: A lightweight tool to monitor your OpenAI workload.
freshnessValidatedDate: never
translationType: machine
---

OpenAI の統合により、すべての OpenAI クエリをシームレスに監視できます。わずか 2 行のコードを追加するだけで、チームはコスト、応答時間、レート制限、エラー率、チャット履歴、サンプルの入出力などの主要なパフォーマンス指標にアクセスできるようになります。OpenAI の統合は、企業が使用量を最適化し、コストを削減し、より良い結果を達成するのに役立つリアルタイムのメトリクスを提供します。

<img
  title="OpenAI dashboard"
  alt="OpenAI dashboard"
  src="/images/model-performance-monitoring_screenshot-crop_openai-dashboard-1.webp"
/>

このガイドでは、OpenAI アプリケーションを統合してデータの監視を開始できるようにする方法を説明します。

<CollapserGroup>
  <Collapser
    id="install-with-python"
    title="Python アプリケーション用にインストールする"
  >
    <Steps>
      <Step>
        ### pip を使用して OpenAI をインストールする

        OpenAI のインポートが完了したら、次を実行します。

        ```bash
        pip install nr-openai-observability
        ```
      </Step>

      <Step>
        ### 環境変数を設定します [#set-environment-variable]

        <InlinePopover type="licenseKey"/>を取得し、環境変数`NEW_RELIC_LICENSE_KEY`として設定します。

        詳細と手順については、 [REST API ドキュメント を](/docs/apis/intro-apis/new-relic-api-keys/#license-key)参照してください。

        ```bash
        export NEW_RELIC_LICENSE_KEY=<license key>
        ```

        ```python
        import os
        os.environ["NEW_RELIC_LICENSE_KEY"] = "<license key>"
        ```

        `NEW_RELIC_LICENSE_KEY`は、 `monitor.initialization()`呼び出しのパラメータとして送信することもできます。
      </Step>

      <Step>
        ### コードを変更する [#modify-code]

        次の 2 行をコードに追加します。

        ```python
        from nr_openai_observability import monitor
        monitor.initialization()
        ```
      </Step>

      <Step>
        ### ダッシュボードを追加する [#add-dashboard]

        New Relic アカウントにダッシュボードを追加するには:

        ```python
        import os

        import openai
        from nr_openai_observability import monitor

        monitor.initialization()

        openai.api_key = os.getenv("OPENAI_API_KEY")
        openai.Completion.create(
            model="text-davinci-003",
            prompt="What is Observability?",
            max_tokens=20,
            temperature=0 
        )
        ```
      </Step>
    </Steps>
  </Collapser>

  <Collapser
    id="install-with-node"
    title="Node.jsでインストールする"
  >
    <Steps>
      <Step>
        ### OpenAIをインストールする [#install-openai-node]

        npm を使用して次を実行します。

        ```bash
        npm install @newrelic/openai-observability openai
        ```
      </Step>

      <Step>
        ### コードを変更する [#modify-code]

        構成済みの`OpenAI`クライアントを使用して`monitorOpenAI`を呼び出します。

        コード例を次に示します。

        ```js
        import { Configuration, OpenAIApi } from 'openai';
        import { monitorOpenAI } from '@newrelic/openai-observability';

        const configuration = new Configuration({
          apiKey: 'OPENAI_API_KEY',
        });

        const openAIApi = new OpenAIApi(configuration);

        monitorOpenAI(openAIApi, {
          applicationName: 'MyApp',
          newRelicApiKey: 'NEW_RELIC_LICENSE_KEY',
        });

        const response = await openAIApi.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: 'What is Observability?' }],
        });

        console.log(response.data.choices[0].message);
        ```

        モジュール タイプを`package.json`に追加してください:

        ```json
        "type": "module"
        ```
      </Step>

      <Step>
        ### 初期化オプション [#modify-code]

        ```js
        export interface MonitorOpenAIOptions {
          /**
           * Your application name in New Relic, must provided.
           */
          applicationName: string;
          /**
           * API key with insert access used to authenticate the request.
           * For more information on creating keys, please see:
           * https://docs.newrelic.com/docs/insights/insights-data-sources/custom-data/introduction-event-api#register
           */
          newRelicApiKey?: string;
          /**
           * Optional host override for event endpoint.
           */
          host?: string;
          /**
           * Optional port override for trace endpoint.
           */
          port?: number;
        }
        ```
      </Step>
    </Steps>
  </Collapser>
</CollapserGroup>

## EU アカウントのユーザー [#EU-account-users]

EU アカウントを使用している場合は、 `EVENT_CLIENT_HOST`を次のように設定する必要があります。

```bash
export EVENT_CLIENT_HOST="insights-collector.eu01.nr-data.net"
```

```python
import os
os.environ["EVENT_CLIENT_HOST"] = "insights-collector.eu01.nr-data.net"
```

## データを検索する

OpenAI を統合した後、次の手順に従って可観測性データを検索します。

1. [one.newrelic.com](https://one.newrelic.com)から。

2. <DNT>
     **Model Performance**
   </DNT>

   をクリックします。

3. <DNT>
     **Applications**
   </DNT>

   で検索します。

## どのように機能するか見てみましょう [#see-how-it-works]

これらの手順が難しい場合は、このデモ ビデオをご覧になることをお勧めします。

<Video
  type="wistia"
  id="dz28h83owk"
/>
