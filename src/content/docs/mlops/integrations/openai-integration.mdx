---
title: OpenAI integration
metaDescription: "A lightweight tool to monitor your OpenAI workload."
freshnessValidatedDate: never
---

With our OpenAI integration, you have the ability to seamlessly monitor all OpenAI queries. By adding just two lines of code, your team can gain access to key performance metrics such as cost, response time, rate limits, error rates, chat history, and sample inputs and outputs. Our OpenAI integration provides real-time metrics to help businesses optimize usage, reduce costs, and achieve better results.

<Callout variant="important">
  To instrument your OpenAI-powered app, we recommend using AI monitoring rather than this older installation method. [See our docs to get started](/docs/ai-monitoring/intro-to-ai-monitoring/).
</Callout>

<img
  title="OpenAI dashboard"
  alt="OpenAI dashboard"
  src="/images/model-performance-monitoring_screenshot-crop_openai-dashboard-1.webp"
/>

This guide will show you how to integrate your OpenAI applications so you can start monitoring your data.

<CollapserGroup>
  <Collapser
    id="install-with-python"
    title="Install for Python applications"
  >
    <Steps>
      <Step>
        ### Install OpenAI with pip

        After you've completed your OpenAI import, run:

        ```bash
        pip install nr-openai-observability
        ```
      </Step>

      <Step>
        ### Set your environment variable [#set-environment-variable]

        Get your <InlinePopover type="licenseKey"/> and set it as environment variable: `NEW_RELIC_LICENSE_KEY`.

        For more details and instructions, check out our [REST API documentation](/docs/apis/intro-apis/new-relic-api-keys/#license-key).

        ```bash
        export NEW_RELIC_LICENSE_KEY=<license key>
        ```

        ```python
        import os
        os.environ["NEW_RELIC_LICENSE_KEY"] = "<license key>"
        ```

        Your `NEW_RELIC_LICENSE_KEY` can also be sent as a parameter at the `monitor.initialization()` call.
      </Step>

      <Step>
        ### Modify your code [#modify-code]

        Add the following two lines to your code:

        ```python
        from nr_openai_observability import monitor
        monitor.initialization()
        ```
      </Step>

      <Step>
        ### Add your dashboard [#add-dashboard]

        To add the dashboard to your New Relic account:

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
    title="Install with Node.js"
  >
    <Steps>
      <Step>
        ### Install OpenAI [#install-openai-node]

        Use npm and run:

        ```bash
        npm install @newrelic/openai-observability openai
        ```
      </Step>

      <Step>
        ### Modify your code [#modify-code]

        Call `monitorOpenAI` with your configured `OpenAI` client.

        Here is some example code:

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

        Make sure that you add module type to `package.json`:

        ```json
        "type": "module"
        ```
      </Step>

      <Step>
        ### Initialization options [#modify-code]

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

## EU account users [#EU-account-users]

If you're using an EU account, you should set your `EVENT_CLIENT_HOST` as follows:

```bash
export EVENT_CLIENT_HOST="insights-collector.eu01.nr-data.net"
```

```python
import os
os.environ["EVENT_CLIENT_HOST"] = "insights-collector.eu01.nr-data.net"
```

## Find your data

After you've integrated OpenAI, follow these steps to find observability data:

1. From [one.newrelic.com](https://one.newrelic.com).
2. Click on <DNT>**Model Performance**</DNT>.
3. Search under <DNT>**Applications**</DNT>.

## See how it works [#see-how-it-works]

If you're struggling with these instructions, we encourage you to watch this demonstration video.

<Video
  type="wistia"
  id="dz28h83owk"
/>
