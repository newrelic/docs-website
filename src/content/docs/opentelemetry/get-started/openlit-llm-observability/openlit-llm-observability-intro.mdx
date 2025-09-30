---
title: 'LLM observability with OpenLIT'
tags:
  - Integrations
  - LLM observability with OpenTelemetry
  - GenAI Observability with OpenTelemetry
  - OpenTelemetry
  - OpenLIT
metaDescription: Set up OpenTelemetry-based LLM observability with New Relic and OpenLIT.
freshnessValidatedDate: 2024-10-08
---

While OpenTelemetry offers a powerful standard for collecting general application data (traces, metrics, logs), it lacks the ability to capture key performance indicators (KPIs) specific to AI models. Essential metrics like performance tracking, token usage, costs, and user interaction data in the form of LLM prompts and responses are crucial for effective LLM application monitoring and troubleshooting.

To bridge this gap in LLM observability, OpenLIT has emerged as a tailored solution. Built on the OpenTelemetry framework, OpenLIT is an open-source tool that integrates smoothly and extends its capabilities. It supports widely-used AI frameworks such as OpenAI, Anthropic, Pinecone, LangChain, among others. Additionally, it provides OpenTelemetry-based GPU monitoring capabilities out of the box.

Key benefits of OpenLIT:

* **Advanced monitoring of LLM and VectorDB performance**: OpenLIT automatically generates traces and metrics for in-depth performance and cost analysis of LLM and VectorDB usage, helping you optimize resource use and scale efficiently across various environments, such as production.

* **Cost tracking for custom and fine-tuned models**: Allows for precise cost tracking through a custom JSON file, enabling accurate budgeting, and alignment with project-specific needs.

* **OpenTelemetry-native and vendor-neutral SDKs**: OpenLIT is built with native support for OpenTelemetry, making it blend seamlessly with your projects. This vendor-neutral approach reduces barriers to integration, making OpenLIT an intuitive part of your software stack rather than an additional complexity.

OpenLIT empowers developers to leverage the strengths of OpenTelemetry while gaining the additional functionalities required for effective LLM monitoring and performance optimization.

## Before you start [#prereqs]

* [Sign up](https://newrelic.com/signup) for a New Relic account.
* Get the [license key](https://one.newrelic.com/launcher/api-keys-ui.launcher) for the New Relic account to which you want to report data.

## Instrument your LLM Model with OpenLIT [#instrument]

Follow these common setup steps for OpenTelemetry-based APM monitoring with New Relic.

<Steps>
    <Step>

### Route the traces and metrics [#route-traces]

Since New Relic natively supports OpenTelemetry, you just need to route the traces and metrics to New Relic's endpoint and set the API key. 

Run the following commands to have the [OpenTelemetry Protocol](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/otlp.md) (OTLP for short) exporter send data to the [New Relic OTLP endpoint](/docs/opentelemetry/best-practices/opentelemetry-otlp).

```env
OTEL_EXPORTER_OTLP_ENDPOINT = https://otlp.nr-data.net:443
OTEL_EXPORTER_OTLP_HEADERS = "api-key=YOUR_NEWRELIC_LICENSE_KEY"
```

See this example about OpenAI LLM Model with LangChain:

  ```python
  import openlit
  import os
  from langchain_openai import ChatOpenAI

  os.environ['OPENAI_API_KEY'] = 'OPENAI_API_KEY'
  os.environ['OTEL_EXPORTER_OTLP_ENDPOINT'] = 'https://otlp.nr-data.net:443'
  os.environ['OTEL_EXPORTER_OTLP_HEADERS'] = 'api-key=YOUR_NEWRELIC_LICENSE_KEY'

  openlit.init()

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

Once your app is instrumented and configured to export data to New Relic, you should be able to find your data in the New Relic UI, you can import the LLM observability pre-built dashboard by following these steps:

1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Dashboards**</DNT>.

2. In the top-right corner, click <DNT>**Import dashboard**</DNT>.

3. Copy the dashboard JSON provided [here](https://docs.openlit.io/latest/connections/new-relic#dashboard) and paste it.

5. Choose the account and permission settings for the dashboard. You can't change the account once you've set it, but you can change the permissions at any time.

6. Click <DNT>**Import dashboard**</DNT>.

If you can't find your entity and don't see your data with NRQL, see [OTLP troubleshooting](/docs/opentelemetry/best-practices/opentelemetry-otlp-troubleshooting).
<InstallFeedback />
  </Step>
</Steps>
