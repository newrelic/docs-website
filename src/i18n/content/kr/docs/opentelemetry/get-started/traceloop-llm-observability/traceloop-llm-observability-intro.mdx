---
title: OpenLLMetry를 갖춘 Traceloop LLM 옵저버빌리티
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

OpenTelemetry 일반 데이터(트레이스, 지표, 로그) 수집을 위한 강력한 표준을 제공하지만, AI 모델별 핵심 성과 지표(KPI)를 캡처하는 기능은 부족합니다. 여기에는 모델 이름, 버전, 체중 및 완료 대상, 온도 보고서와 같은 중요한 지표가 포함됩니다. 이러한 세부 사항은 효과적인 모니터링 및 문제 해결 AI 모델 성능에 필수적입니다.

<img
  title="LLM Traceloop Attributes"
  alt="LLM Traceloop Attributes"
  src="/images/llm-traceloop-attributes_screenshot.webp"
/>

OpenLLMetry는 AI 모델 옵저버빌리티의 이러한 격차를 해소하기 위해 특별히 설계된 솔루션으로 등장합니다. OpenTelemetry 프레임워크를 기반으로 구축된 OpenLLMetry는 원활한 통합을 제공하고 기능을 확장합니다. OpenAI, HuggingFace, Pinecone 및 LangChain과 같은 인기 있는 AI 프레임워크에 대한 지원을 제공합니다.

<DNT>
  **Key Benefits of OpenLLMetry:**
</DNT>

* <DNT>
    **Standardized Collection of AI Model KPIs:**
  </DNT>

  OpenLLMetry는 필수 모델 성능 지표의 일관된 캡처를 보장하여 다양한 프레임워크 전반에 걸쳐 포괄적인 옵저버빌리티를 가능하게 합니다.

* <DNT>
    **Deeper Insights into LLM Applications:**
  </DNT>

  오픈 소스 SDK를 통해 OpenLLMetry는 귀하가 궁전 버전(LLM)(LLM) 제작에 대해 철저하게 이해할 수 있도록 지원합니다. 이 페이지에서는 뉴렐릭을 사용한 OpenTelemetry 기반 APM 모니터링의 일반적인 설정 단계를 설명합니다.

OpenLLMetry는 개발자가 OpenTelemetry의 장점을 활용하는 동시에 효과적인 AI 모델 모니터링 및 성능 최적화에 필요한 추가 기능을 얻을 수 있도록 지원합니다.

## 시작하기 전에 [#prereqs]

* New Relic 계정에 [가입](https://newrelic.com/signup) 하세요.
* 데이터를 보고하려는 New Relic 계정의 [라이선스 키](https://one.newrelic.com/launcher/api-keys-ui.launcher) 를 가져옵니다.

<Steps>
  <Step>
    ## OpenLLMetry를 사용하여 LLM 모델을 코딩하세요 [#instrument]

    뉴렐릭은 기본적으로 OpenTelemetry 지원하므로 트레이스를 뉴렐릭의 PartPoint로 라우팅하고 API 키를 설정하기만 하면 됩니다.

    ```env
    TRACELOOP_BASE_URL = https://otlp.nr-data.net:443
    TRACELOOP_HEADERS = "api-key=<YOUR_NEWRELIC_LICENSE_KEY>"
    ```

    * OTLP( OpenTelemetry Protocol) 내보내기 프로그램은 데이터를 [뉴웰릭 OTLP 엔드포인트](/docs/opentelemetry/best-practices/opentelemetry-otlp) 로 보냅니다.

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
    ## New Relic UI에서 데이터 보기 [#view-data]

    앱이 축소되고 데이터를 뉴렐릭으로 내보내도록 구성되면 뉴렐릭 UI 에서 데이터를 찾을 수 있습니다.

    * <DNT>**All entities -> Services - OpenTelemetry**</DNT> 에서 귀하의 엔터티를 찾아보세요. 엔터티 이름은 앱의 `service.name` 리소스 속성 값으로 설정됩니다. 뉴렐릭 서비스 엔터티가 OpenTelemetry 리소스 속성에서 파생되는 방법에 대한 자세한 내용은 [서비스를](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services)참조하세요.<img title="LLM Traceloop Application" alt="LLM Traceloop Application" src="/images/llm-traceloop_screenshot.webp"/>

      <img
        title="LLM Traceloop Details"
        alt="LLM Traceloop Details"
        src="/images/llm-traceloop-details_screenshot.webp"
      />

    * [NRQL](/docs/nrql/get-started/introduction-nrql-new-relics-query-language/)을 사용하여 [트레이스](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gU3BhbiBTRUxFQ1QgY291bnQoKikgd2hlcmUgbmV3cmVsaWMuc291cmNlPSclb3RscCUnIFRJTUVTRVJJRVMifV0sImluaXRpYWxDaGFydFNldHRpbmdzIjp7ImNoYXJ0VHlwZSI6IkNIQVJUX0xJTkUiLCJsaW1pdCI6NzU0MiwibGlua2VkRW50aXR5R3VpZCI6bnVsbCwibGlua2VkRGFzaGJvYXJkSWQiOm51bGwsInlTY2FsZSI6eyJzdGF0aWMiOmZhbHNlLCJkb21haW4iOltudWxsLG51bGxdfSwieVplcm8iOnRydWV9fQo=), [메트릭](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gTWV0cmljIFNFTEVDVCBjb3VudCgqKSB3aGVyZSBuZXdyZWxpYy5zb3VyY2UgTElLRSAnJW90bHAlJyBUSU1FU0VSSUVTIn1dLCJpbml0aWFsQ2hhcnRTZXR0aW5ncyI6eyJjaGFydFR5cGUiOiJDSEFSVF9MSU5FIiwibGltaXQiOjc1NDIsImxpbmtlZEVudGl0eUd1aWQiOm51bGwsImxpbmtlZERhc2hib2FyZElkIjpudWxsLCJ5U2NhbGUiOnsic3RhdGljIjpmYWxzZSwiZG9tYWluIjpbbnVsbCxudWxsXX0sInlaZXJvIjp0cnVlfX0K) 및 [로그인](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gTG9nIFNFTEVDVCBjb3VudCgqKSB3aGVyZSBuZXdyZWxpYy5zb3VyY2U9JyVvdGxwJScgVElNRVNFUklFUyJ9XSwiaW5pdGlhbENoYXJ0U2V0dGluZ3MiOnsiY2hhcnRUeXBlIjoiQ0hBUlRfTElORSIsImxpbWl0Ijo3NTQyLCJsaW5rZWRFbnRpdHlHdWlkIjpudWxsLCJsaW5rZWREYXNoYm9hcmRJZCI6bnVsbCwieVNjYWxlIjp7InN0YXRpYyI6ZmFsc2UsImRvbWFpbiI6W251bGwsbnVsbF19LCJ5WmVybyI6dHJ1ZX19Cg==)에 대해 직접 쿼리합니다.

    * 자세한 내용은 [OpenTelemetry APM UI](/docs/opentelemetry/get-started/apm-monitoring/opentelemetry-apm-ui)를 참조하십시오.

      엔터티를 찾을 수 없고 NRQL이 포함된 데이터가 표시되지 않으면 [OTLP 문제 해결](/docs/opentelemetry/best-practices/opentelemetry-otlp-troubleshooting)을 참조하십시오.<InstallFeedback/>
  </Step>
</Steps>
