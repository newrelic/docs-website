---
title: Observabilidad de Traceloop LLM con OpenLLMetry
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

Si bien OpenTelemetry ofrece un estándar poderoso para recopilar datos de aplicaciones generales (traza, métrica, log), carece de la capacidad de capturar indicadores de clave de rendimiento (KPI) específicos del modelo de IA. Esto incluye métricas cruciales como el nombre del modelo, la versión, el símbolo y el token de finalización, y el parámetro de temperatura. Estos detalles son esenciales para un monitoreo y resolución de problemas efectivos del modelo de rendimiento de IA.

<img
  title="LLM Traceloop Attributes"
  alt="LLM Traceloop Attributes"
  src="/images/llm-traceloop-attributes_screenshot.webp"
/>

OpenLLMetry surge como una solución, diseñada específicamente para abordar esta brecha en la observabilidad del modelo de IA. Construido sobre el OpenTelemetry framework, OpenLLMetry proporciona una integración perfecta y amplía sus capacidades. Ofrece soporte para marcos de IA populares como OpenAI, HuggingFace, Pinecone y LangChain.

<DNT>
  **Key Benefits of OpenLLMetry:**
</DNT>

* <DNT>
    **Standardized Collection of AI Model KPIs:**
  </DNT>

  OpenLLMetry garantiza una captura consistente del rendimiento métrico del modelo esencial, lo que permite una observabilidad integral en diversos marcos.

* <DNT>
    **Deeper Insights into LLM Applications:**
  </DNT>

  Con su SDK de código abierto, OpenLLMetry le permite obtener una comprensión profunda de su aplicación de modelo de lenguaje extenso (LLM). Esta página describe los pasos de configuración comunes para el monitoreo de APM basado en OpenTelemetry con New Relic.

OpenLLMetry permite a los desarrolladores aprovechar las fortalezas de OpenTelemetry mientras obtienen las funcionalidades adicionales necesarias para un modelo de monitoreo IA efectivo y optimización del rendimiento.

## Antes de que empieces [#prereqs]

* [Regístrese](https://newrelic.com/signup) para obtener una cuenta New Relic.
* Obtenga la [clave de licencia](https://one.newrelic.com/launcher/api-keys-ui.launcher) para la cuenta New Relic a la que desea reportar datos.

<Steps>
  <Step>
    ## Instrumente su modelo LLM con OpenLLMetry [#instrument]

    Dado que New Relic soporta OpenTelemetry de forma nativa, sólo necesita enrutar la traza al extremo de New Relicy configurar la clave de API:

    ```env
    TRACELOOP_BASE_URL = https://otlp.nr-data.net:443
    TRACELOOP_HEADERS = "api-key=<YOUR_NEWRELIC_LICENSE_KEY>"
    ```

    * El exportador OpenTelemetry Protocol (OTLP) envía datos al [extremoNew Relic OTLP](/docs/opentelemetry/best-practices/opentelemetry-otlp).

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
    ## Vea sus datos en la UI de New Relic [#view-data]

    Una vez que su aplicación esté instrumentada y configurada para exportar datos a New Relic, debería poder encontrar sus datos en la New Relic UI:

    * Encuentra tu entidad en <DNT>**All entities -> Services - OpenTelemetry**</DNT>. El nombre de la entidad se establece en el valor del atributo de recurso `service.name` de la aplicación. Para obtener más información sobre cómo la entidad de servicio New Relic se deriva del atributo de recurso OpenTelemetry , consulte [Servicios](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services)<img title="LLM Traceloop Application" alt="LLM Traceloop Application" src="/images/llm-traceloop_screenshot.webp"/>

      <img
        title="LLM Traceloop Details"
        alt="LLM Traceloop Details"
        src="/images/llm-traceloop-details_screenshot.webp"
      />

    * Emplee [NRQL](/docs/nrql/get-started/introduction-nrql-new-relics-query-language/) para consultar directamente [traza](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gU3BhbiBTRUxFQ1QgY291bnQoKikgd2hlcmUgbmV3cmVsaWMuc291cmNlPSclb3RscCUnIFRJTUVTRVJJRVMifV0sImluaXRpYWxDaGFydFNldHRpbmdzIjp7ImNoYXJ0VHlwZSI6IkNIQVJUX0xJTkUiLCJsaW1pdCI6NzU0MiwibGlua2VkRW50aXR5R3VpZCI6bnVsbCwibGlua2VkRGFzaGJvYXJkSWQiOm51bGwsInlTY2FsZSI6eyJzdGF0aWMiOmZhbHNlLCJkb21haW4iOltudWxsLG51bGxdfSwieVplcm8iOnRydWV9fQo=), [métrica](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gTWV0cmljIFNFTEVDVCBjb3VudCgqKSB3aGVyZSBuZXdyZWxpYy5zb3VyY2UgTElLRSAnJW90bHAlJyBUSU1FU0VSSUVTIn1dLCJpbml0aWFsQ2hhcnRTZXR0aW5ncyI6eyJjaGFydFR5cGUiOiJDSEFSVF9MSU5FIiwibGltaXQiOjc1NDIsImxpbmtlZEVudGl0eUd1aWQiOm51bGwsImxpbmtlZERhc2hib2FyZElkIjpudWxsLCJ5U2NhbGUiOnsic3RhdGljIjpmYWxzZSwiZG9tYWluIjpbbnVsbCxudWxsXX0sInlaZXJvIjp0cnVlfX0K) y [log](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gTG9nIFNFTEVDVCBjb3VudCgqKSB3aGVyZSBuZXdyZWxpYy5zb3VyY2U9JyVvdGxwJScgVElNRVNFUklFUyJ9XSwiaW5pdGlhbENoYXJ0U2V0dGluZ3MiOnsiY2hhcnRUeXBlIjoiQ0hBUlRfTElORSIsImxpbWl0Ijo3NTQyLCJsaW5rZWRFbnRpdHlHdWlkIjpudWxsLCJsaW5rZWREYXNoYm9hcmRJZCI6bnVsbCwieVNjYWxlIjp7InN0YXRpYyI6ZmFsc2UsImRvbWFpbiI6W251bGwsbnVsbF19LCJ5WmVybyI6dHJ1ZX19Cg==).

    * [OpenTelemetry APM UI](/docs/opentelemetry/get-started/apm-monitoring/opentelemetry-apm-ui) Consulte para obtener más información.

      Si no encuentras tu entidad y no ves tus datos con NRQL, consulta [OTLP resolución de problemas](/docs/opentelemetry/best-practices/opentelemetry-otlp-troubleshooting).<InstallFeedback/>
  </Step>
</Steps>
