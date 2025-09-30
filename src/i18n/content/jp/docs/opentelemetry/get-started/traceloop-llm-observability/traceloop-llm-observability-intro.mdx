---
title: OpenLLMetry による Traceloop LLM の可用性
tags:
  - Integrations
  - LLM observability with OpenTelemetry
  - OpenTelemetry
  - OpenLLMetry
  - Traceloop
metaDescription: Set up OpenTelemetry-based Traceloop LLM observability with New Relic.
freshnessValidatedDate: '2024-07-02T00:00:00.000Z'
translationType: machine
---

OpenTelemetry 、一般的なアプリケーション データ (トレース、メトリック、ログ) を収集するための強力な標準を提供しますが、AI モデルに固有の主要パフォーマンス指標 (KPI) を取得する機能がありません。 これには、モデル名、バージョン、プロンプトと完了トークン、温度などの重要なメトリックが含まれます。 これらの詳細は、効果的な監視とパフォーマンスに不可欠です。

<img
  title="LLM Traceloop Attributes"
  alt="LLM Traceloop Attributes"
  src="/images/llm-traceloop-attributes_screenshot.webp"
/>

OpenLLMetry は、AI モデルの耐久性におけるこのギャップを解決するために特別に設計されたソリューションとして登場しました。 OpenTelemetryフレームワーク上に構築された OpenLLMetry は、シームレスな統合を提供し、その機能を拡張します。 OpenAI、HuggingFace、Pinecone、LangChain などの一般的な AI フレームワークをサポートしています。

<DNT>
  **Key Benefits of OpenLLMetry:**
</DNT>

* <DNT>
    **Standardized Collection of AI Model KPIs:**
  </DNT>

  OpenLLMetry は、重要なモデルパフォーマンス メトリックの一貫したキャプチャを保証し、多様なフレームワークにわたる包括的な可用性を実現します。

* <DNT>
    **Deeper Insights into LLM Applications:**
  </DNT>

  OpenLLMetry の OSS SDK を使用すると、大規模言語モデル (LLM) アプリケーションを徹底的に理解できるようになります。 このページでは、 を使用したOpenTelemetry ベースのAPM 監視の一般的なセットアップ手順について説明します。New Relic

OpenLLMetry により、開発者はOpenTelemetryの強みを活用しながら、効果的な AI モデルの監視とパフォーマンスの最適化に必要な追加機能を獲得できるようになります。

## 始める前に [#prereqs]

* New Relicアカウントに[サインアップ](https://newrelic.com/signup)します。
* データを報告するNewRelicアカウントの[ライセンスキー](https://one.newrelic.com/launcher/api-keys-ui.launcher)を取得します。

<Steps>
  <Step>
    ## OpenLLMetryでLLMモデルを計測する [#instrument]

    New Relic OpenTelemetryをネイティブでサポートしているため、トレースをNew Relicの インターフェース にルーティングし、 APIキーを設定するだけです。

    ```env
    TRACELOOP_BASE_URL = https://otlp.nr-data.net:443
    TRACELOOP_HEADERS = "api-key=<YOUR_NEWRELIC_LICENSE_KEY>"
    ```

    * OpenTelemetry Protocol (OTLP) エクスポーターは、 [New Relic OTLP エンドポイント](/docs/opentelemetry/best-practices/opentelemetry-otlp)にデータを送信します。

    <DNT>
      **Example: OpenAI LLM Model with LangChain**
    </DNT>

    ```python
    from traceloop.sdk import Traceloop
    import os
    import time
    from langchain_openai import ChatOpenAI
    from traceloop.sdk.decorators import workflow, task

    os.environ['OPENAI_API_KEY'] = 'OPENAI_API_KEY'
    os.environ['TRACELOOP_BASE_URL'] = 'https://otlp.nr-data.net:443'
    os.environ['TRACELOOP_HEADERS'] = 'api-key=YOUR_NEWRELIC_LICENSE_KEY'

    Traceloop.init(app_name="llm-test", disable_batch=True)

    def add_prompt_context():
      llm = ChatOpenAI(
          model="gpt-3.5-turbo",
          temperature=0)
      chain = llm
      return chain

    def prep_prompt_chain():
      return add_prompt_context()

    def prompt_question():
      chain = prep_prompt_chain()
      return chain.invoke("explain the business of company Newrelic and it's advantages in a max of 50 words")

    if  __name__ == "__main__":
      print(prompt_question())
    ```
  </Step>

  <Step>
    ## NewRelicUIでデータを表示する [#view-data]

    アプリがインストゥルメントされ、 New Relicにデータをエクスポートするように構成されると、 New Relic UIでデータを見つけることができるようになります。

    * <DNT>**All entities -> Services - OpenTelemetry**</DNT>でエンティティを見つけます。 エンティティ名は、アプリの`service.name`リソース属性の値に設定されます。 New RelicサービスエンティティがOpenTelemetryリソース属性からどのように派生するかの詳細については、[サービス](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services)を参照してください。<img title="LLM Traceloop Application" alt="LLM Traceloop Application" src="/images/llm-traceloop_screenshot.webp"/>

      <img
        title="LLM Traceloop Details"
        alt="LLM Traceloop Details"
        src="/images/llm-traceloop-details_screenshot.webp"
      />

    * [NRQL](/docs/nrql/get-started/introduction-nrql-new-relics-query-language/)を使用して、 [トレース](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gU3BhbiBTRUxFQ1QgY291bnQoKikgd2hlcmUgbmV3cmVsaWMuc291cmNlPSclb3RscCUnIFRJTUVTRVJJRVMifV0sImluaXRpYWxDaGFydFNldHRpbmdzIjp7ImNoYXJ0VHlwZSI6IkNIQVJUX0xJTkUiLCJsaW1pdCI6NzU0MiwibGlua2VkRW50aXR5R3VpZCI6bnVsbCwibGlua2VkRGFzaGJvYXJkSWQiOm51bGwsInlTY2FsZSI6eyJzdGF0aWMiOmZhbHNlLCJkb21haW4iOltudWxsLG51bGxdfSwieVplcm8iOnRydWV9fQo=)、 [メトリック](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gTWV0cmljIFNFTEVDVCBjb3VudCgqKSB3aGVyZSBuZXdyZWxpYy5zb3VyY2UgTElLRSAnJW90bHAlJyBUSU1FU0VSSUVTIn1dLCJpbml0aWFsQ2hhcnRTZXR0aW5ncyI6eyJjaGFydFR5cGUiOiJDSEFSVF9MSU5FIiwibGltaXQiOjc1NDIsImxpbmtlZEVudGl0eUd1aWQiOm51bGwsImxpbmtlZERhc2hib2FyZElkIjpudWxsLCJ5U2NhbGUiOnsic3RhdGljIjpmYWxzZSwiZG9tYWluIjpbbnVsbCxudWxsXX0sInlaZXJvIjp0cnVlfX0K)、および[ログ](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gTG9nIFNFTEVDVCBjb3VudCgqKSB3aGVyZSBuZXdyZWxpYy5zb3VyY2U9JyVvdGxwJScgVElNRVNFUklFUyJ9XSwiaW5pdGlhbENoYXJ0U2V0dGluZ3MiOnsiY2hhcnRUeXBlIjoiQ0hBUlRfTElORSIsImxpbWl0Ijo3NTQyLCJsaW5rZWRFbnRpdHlHdWlkIjpudWxsLCJsaW5rZWREYXNoYm9hcmRJZCI6bnVsbCwieVNjYWxlIjp7InN0YXRpYyI6ZmFsc2UsImRvbWFpbiI6W251bGwsbnVsbF19LCJ5WmVybyI6dHJ1ZX19Cg==)を直接クエリします。

    * 詳細については[、OpenTelemetry APM UI](/docs/opentelemetry/get-started/apm-monitoring/opentelemetry-apm-ui)を参照してください。

      エンティティが見つからず、NRQL でデータが表示されない場合は、 [「OTLP トラブルシューティング」](/docs/opentelemetry/best-practices/opentelemetry-otlp-troubleshooting)を参照してください。<InstallFeedback/>
  </Step>
</Steps>
