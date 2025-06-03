---
title: 'Traceloop LLM observability with OpenLLMetry'
tags:
  - Integrations
  - LLM observability with OpenTelemetry
  - OpenTelemetry
  - OpenLLMetry
  - Traceloop
metaDescription: Set up OpenTelemetry-based Traceloop LLM observability with New Relic.
freshnessValidatedDate: 2024-07-02
---

While OpenTelemetry offers a powerful standard for collecting general application data (traces, metrics, logs), it lacks the ability to capture key performance indicators (KPIs) specific to AI models. This includes crucial metrics like model name, version, prompt and completion tokens, and temperature parameters. These details are essential for effectively monitoring and troubleshooting AI model performance.

<img
  title="LLM Traceloop Attributes"
  alt="LLM Traceloop Attributes"
  src="/images/llm-traceloop-attributes_screenshot.webp"
/>

OpenLLMetry emerges as a solution, specifically designed to address this gap in AI model observability. Built on top of the OpenTelemetry framework, OpenLLMetry provides seamless integration and extends its capabilities. It offers support for popular AI frameworks like OpenAI, HuggingFace, Pinecone, and LangChain.

<DNT>
  **Key Benefits of OpenLLMetry:**
</DNT>

* <DNT>**Standardized Collection of AI Model KPIs:**</DNT> OpenLLMetry ensures consistent capture of essential model performance metrics, enabling comprehensive observability across diverse frameworks.
* <DNT>**Deeper Insights into LLM Applications:**</DNT> With its open-source SDK, OpenLLMetry empowers you to gain thorough understanding of your Large Language Model (LLM) applications.
  This page describes common set up steps for OpenTelemetry based APM monitoring with New Relic.

OpenLLMetry empowers developers to leverage the strengths of OpenTelemetry while gaining the additional functionalities required for effective AI model monitoring and performance optimization.

## Before you start [#prereqs]

* [Sign up](https://newrelic.com/signup) for a New Relic account.
* Get the [license key](https://one.newrelic.com/launcher/api-keys-ui.launcher) for the New Relic account to which you want to report data.

<Steps>
  <Step>
    ## Instrument your LLM Model with OpenLLMetry [#instrument]

    Since New Relic natively supports OpenTelemetry, you just need to route the traces to New Relic’s endpoint and set the API key:

    ```env
    TRACELOOP_BASE_URL = https://otlp.nr-data.net:443
    TRACELOOP_HEADERS = "api-key=<YOUR_NEWRELIC_LICENSE_KEY>"
    ```

    * The OpenTelemetry Protocol (OTLP) exporter sends data to the [New Relic OTLP endpoint](/docs/opentelemetry/best-practices/opentelemetry-otlp).

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
    ## View your data in the New Relic UI [#view-data]

    Once your app is instrumented and configured to export data to New Relic, you should be able to find your data in the New Relic UI:

    * Find your entity at <DNT>**All entities -> Services - OpenTelemetry**</DNT>. The entity name is set to the value of the app's `service.name` resource attribute. For more information on how New Relic service entities are derived from OpenTelemetry resource attributes, see [Services](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services)
      <img title="LLM Traceloop Application" alt="LLM Traceloop Application" src="/images/llm-traceloop_screenshot.webp"/>

      <img
        title="LLM Traceloop Details"
        alt="LLM Traceloop Details"
        src="/images/llm-traceloop-details_screenshot.webp"
      />
    * Use [NRQL](/docs/nrql/get-started/introduction-nrql-new-relics-query-language/) to query directly for [traces](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gU3BhbiBTRUxFQ1QgY291bnQoKikgd2hlcmUgbmV3cmVsaWMuc291cmNlPSclb3RscCUnIFRJTUVTRVJJRVMifV0sImluaXRpYWxDaGFydFNldHRpbmdzIjp7ImNoYXJ0VHlwZSI6IkNIQVJUX0xJTkUiLCJsaW1pdCI6NzU0MiwibGlua2VkRW50aXR5R3VpZCI6bnVsbCwibGlua2VkRGFzaGJvYXJkSWQiOm51bGwsInlTY2FsZSI6eyJzdGF0aWMiOmZhbHNlLCJkb21haW4iOltudWxsLG51bGxdfSwieVplcm8iOnRydWV9fQo=), [metrics](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gTWV0cmljIFNFTEVDVCBjb3VudCgqKSB3aGVyZSBuZXdyZWxpYy5zb3VyY2UgTElLRSAnJW90bHAlJyBUSU1FU0VSSUVTIn1dLCJpbml0aWFsQ2hhcnRTZXR0aW5ncyI6eyJjaGFydFR5cGUiOiJDSEFSVF9MSU5FIiwibGltaXQiOjc1NDIsImxpbmtlZEVudGl0eUd1aWQiOm51bGwsImxpbmtlZERhc2hib2FyZElkIjpudWxsLCJ5U2NhbGUiOnsic3RhdGljIjpmYWxzZSwiZG9tYWluIjpbbnVsbCxudWxsXX0sInlaZXJvIjp0cnVlfX0K), and [logs](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gTG9nIFNFTEVDVCBjb3VudCgqKSB3aGVyZSBuZXdyZWxpYy5zb3VyY2U9JyVvdGxwJScgVElNRVNFUklFUyJ9XSwiaW5pdGlhbENoYXJ0U2V0dGluZ3MiOnsiY2hhcnRUeXBlIjoiQ0hBUlRfTElORSIsImxpbWl0Ijo3NTQyLCJsaW5rZWRFbnRpdHlHdWlkIjpudWxsLCJsaW5rZWREYXNoYm9hcmRJZCI6bnVsbCwieVNjYWxlIjp7InN0YXRpYyI6ZmFsc2UsImRvbWFpbiI6W251bGwsbnVsbF19LCJ5WmVybyI6dHJ1ZX19Cg==).
    * See [OpenTelemetry APM UI](/docs/opentelemetry/get-started/apm-monitoring/opentelemetry-apm-ui) for more information.

    If you can't find your entity and don't see your data with NRQL, see [OTLP troubleshooting](/docs/opentelemetry/best-practices/opentelemetry-otlp-troubleshooting).
    <InstallFeedback/>
  </Step>
</Steps>
