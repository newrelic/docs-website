---
title: Traceloop LLM observabilidade com OpenLLMetry
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

Embora OpenTelemetry ofereça um padrão poderoso para coletar dados gerais de aplicativos (trace, métrica, log), ele não tem a capacidade de capturar os principais indicadores de desempenho (KPIs) específicos do modelo de IA. Isso inclui métricas cruciais como nome do modelo, versão, token prompt e conclusão e parâmetro de temperatura. Esses detalhes são essenciais para um monitoramento eficaz e resolução de problemas do modelo de desempenho de IA.

<img
  title="LLM Traceloop Attributes"
  alt="LLM Traceloop Attributes"
  src="/images/llm-traceloop-attributes_screenshot.webp"
/>

OpenLLMetry surge como uma solução projetada especificamente para resolver essa lacuna na observabilidade do modelo de IA. Construído com base na OpenTelemetry framework, o OpenLLMetry fornece integração perfeita e amplia seus recursos. Ele oferece suporte para estruturas de IA populares como OpenAI, HuggingFace, Pinecone e LangChain.

<DNT>
  **Key Benefits of OpenLLMetry:**
</DNT>

* <DNT>
    **Standardized Collection of AI Model KPIs:**
  </DNT>

  OpenLLMetry garante captura consistente de métricas essenciais de desempenho do modelo, permitindo observabilidade abrangente em diversas estruturas.

* <DNT>
    **Deeper Insights into LLM Applications:**
  </DNT>

  Com seu SDK de código aberto, o OpenLLMetry permite que você obtenha um entendimento completo do seu aplicativo de grande modelo de linguagem (LLM). Esta página descreve etapas comuns de configuração para monitoramento de APM baseado em OpenTelemetry com New Relic.

OpenLLMetry capacita os desenvolvedores a aproveitar os pontos fortes do OpenTelemetry enquanto obtêm as funcionalidades adicionais necessárias para monitoramento eficaz do modelo de IA e otimização de desempenho.

## Antes que você comece [#prereqs]

* [Cadastre-se](https://newrelic.com/signup) para uma conta New Relic.
* Obtenha a [chave de licença](https://one.newrelic.com/launcher/api-keys-ui.launcher) da conta New Relic para a qual deseja relatar dados.

<Steps>
  <Step>
    ## Instrumento seu modelo LLM com OpenLLMetry [#instrument]

    Como New Relic oferece suporte nativo OpenTelemetry, você só precisa rotear o rastreamento para New Relicdo endpoint e definir a chave da API:

    ```env
    TRACELOOP_BASE_URL = https://otlp.nr-data.net:443
    TRACELOOP_HEADERS = "api-key=<YOUR_NEWRELIC_LICENSE_KEY>"
    ```

    * O exportador OpenTelemetry Protocol (OTLP) envia dados para o [endpoint OTLP da New Relic](/docs/opentelemetry/best-practices/opentelemetry-otlp).

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
    ## Visualize seus dados na interface do New Relic [#view-data]

    Depois que seu aplicativo estiver instrumentado e configurado para exportar dados para New Relic, você poderá encontrar seus dados na interface do New Relic :

    * Encontre sua entidade em <DNT>**All entities -> Services - OpenTelemetry**</DNT>. O nome da entidade é definido como o valor do atributo de recurso `service.name` do aplicativo. Para obter mais informações sobre como as entidades de serviço New Relic são derivadas do atributo de recursos OpenTelemetry , consulte [Serviços](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services)<img title="LLM Traceloop Application" alt="LLM Traceloop Application" src="/images/llm-traceloop_screenshot.webp"/>

      <img
        title="LLM Traceloop Details"
        alt="LLM Traceloop Details"
        src="/images/llm-traceloop-details_screenshot.webp"
      />

    * Use [NRQL](/docs/nrql/get-started/introduction-nrql-new-relics-query-language/) para consultar diretamente [trace](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gU3BhbiBTRUxFQ1QgY291bnQoKikgd2hlcmUgbmV3cmVsaWMuc291cmNlPSclb3RscCUnIFRJTUVTRVJJRVMifV0sImluaXRpYWxDaGFydFNldHRpbmdzIjp7ImNoYXJ0VHlwZSI6IkNIQVJUX0xJTkUiLCJsaW1pdCI6NzU0MiwibGlua2VkRW50aXR5R3VpZCI6bnVsbCwibGlua2VkRGFzaGJvYXJkSWQiOm51bGwsInlTY2FsZSI6eyJzdGF0aWMiOmZhbHNlLCJkb21haW4iOltudWxsLG51bGxdfSwieVplcm8iOnRydWV9fQo=), [métrica](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gTWV0cmljIFNFTEVDVCBjb3VudCgqKSB3aGVyZSBuZXdyZWxpYy5zb3VyY2UgTElLRSAnJW90bHAlJyBUSU1FU0VSSUVTIn1dLCJpbml0aWFsQ2hhcnRTZXR0aW5ncyI6eyJjaGFydFR5cGUiOiJDSEFSVF9MSU5FIiwibGltaXQiOjc1NDIsImxpbmtlZEVudGl0eUd1aWQiOm51bGwsImxpbmtlZERhc2hib2FyZElkIjpudWxsLCJ5U2NhbGUiOnsic3RhdGljIjpmYWxzZSwiZG9tYWluIjpbbnVsbCxudWxsXX0sInlaZXJvIjp0cnVlfX0K) e [log](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gTG9nIFNFTEVDVCBjb3VudCgqKSB3aGVyZSBuZXdyZWxpYy5zb3VyY2U9JyVvdGxwJScgVElNRVNFUklFUyJ9XSwiaW5pdGlhbENoYXJ0U2V0dGluZ3MiOnsiY2hhcnRUeXBlIjoiQ0hBUlRfTElORSIsImxpbWl0Ijo3NTQyLCJsaW5rZWRFbnRpdHlHdWlkIjpudWxsLCJsaW5rZWREYXNoYm9hcmRJZCI6bnVsbCwieVNjYWxlIjp7InN0YXRpYyI6ZmFsc2UsImRvbWFpbiI6W251bGwsbnVsbF19LCJ5WmVybyI6dHJ1ZX19Cg==).

    * Consulte [InterfaceOpenTelemetry APM ](/docs/opentelemetry/get-started/apm-monitoring/opentelemetry-apm-ui)para obter mais informações.

      Caso não encontre sua entidade e não veja seus dados com NRQL, veja [OTLP resolução de problemas](/docs/opentelemetry/best-practices/opentelemetry-otlp-troubleshooting).<InstallFeedback/>
  </Step>
</Steps>
