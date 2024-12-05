---
title: Integração OpenAI
metaDescription: A lightweight tool to monitor your OpenAI workload.
freshnessValidatedDate: never
translationType: machine
---

Com nossa integração OpenAI, você tem a capacidade de monitor perfeitamente todas as consultas OpenAI. Ao adicionar apenas duas linhas de código, sua equipe pode obter acesso às principais métricas de desempenho, como custo, tempo de resposta, limites de taxa, taxas de erros, histórico de chat e amostras de entradas e saídas. Nossa integração OpenAI fornece métricas em tempo real para ajudar as empresas a otimizar o uso, reduzir custos e obter melhores resultados.

<Callout variant="important">
  Para instrumentar seu aplicativo com tecnologia OpenAI, recomendamos o uso AI Monitoring em vez deste método de instalação mais antigo. [Consulte nossos documentos para começar](/docs/ai-monitoring/intro-to-ai-monitoring/).
</Callout>

<img
  title="OpenAI dashboard"
  alt="OpenAI dashboard"
  src="/images/model-performance-monitoring_screenshot-crop_openai-dashboard-1.webp"
/>

Este guia mostrará como integrar seu aplicativo OpenAI para que você possa começar a monitorar seus dados.

<CollapserGroup>
  <Collapser
    id="install-with-python"
    title="Instalar para aplicativo Python"
  >
    <Steps>
      <Step>
        ### Instale OpenAI com pip

        Depois de concluir a importação do OpenAI, execute:

        ```bash
        pip install nr-openai-observability
        ```
      </Step>

      <Step>
        ### Defina sua variável de ambiente [#set-environment-variable]

        Obtenha seu <InlinePopover type="licenseKey"/>e defina-o como variável de ambiente: `NEW_RELIC_LICENSE_KEY`.

        Para mais detalhes e instruções, confira nossa [documentação da API REST](/docs/apis/intro-apis/new-relic-api-keys/#license-key).

        ```bash
        export NEW_RELIC_LICENSE_KEY=<license key>
        ```

        ```python
        import os
        os.environ["NEW_RELIC_LICENSE_KEY"] = "<license key>"
        ```

        Seu `NEW_RELIC_LICENSE_KEY` também pode ser enviado como parâmetro na chamada `monitor.initialization()` .
      </Step>

      <Step>
        ### Modifique seu código [#modify-code]

        Adicione as duas linhas a seguir ao seu código:

        ```python
        from nr_openai_observability import monitor
        monitor.initialization()
        ```
      </Step>

      <Step>
        ### Adicione seu dashboard [#add-dashboard]

        Para adicionar o dashboard à sua conta New Relic:

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
    title="Instalar com Node.js"
  >
    <Steps>
      <Step>
        ### Instale o OpenAI [#install-openai-node]

        Use npm e execute:

        ```bash
        npm install @newrelic/openai-observability openai
        ```
      </Step>

      <Step>
        ### Modifique seu código [#modify-code]

        Chame `monitorOpenAI` com seu cliente `OpenAI` configurado.

        Aqui está um exemplo de código:

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

        Certifique-se de adicionar o tipo de módulo a `package.json`:

        ```json
        "type": "module"
        ```
      </Step>

      <Step>
        ### Opções de inicialização [#modify-code]

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

## Usuário da conta da UE [#EU-account-users]

Se estiver usando uma conta da UE, você deverá definir seu `EVENT_CLIENT_HOST` da seguinte forma:

```bash
export EVENT_CLIENT_HOST="insights-collector.eu01.nr-data.net"
```

```python
import os
os.environ["EVENT_CLIENT_HOST"] = "insights-collector.eu01.nr-data.net"
```

## Encontre seus dados

Depois de integrar o OpenAI, siga estas etapas para encontrar dados de observabilidade:

1. De [one.newrelic.com](https://one.newrelic.com).

2. Clique em

   <DNT>
     **Model Performance**
   </DNT>

   .

3. Pesquise em

   <DNT>
     **Applications**
   </DNT>

   .

## Veja como funciona [#see-how-it-works]

Se você estiver tendo dificuldades com essas instruções, recomendamos que assista a este vídeo de demonstração.

<Video
  type="wistia"
  id="dz28h83owk"
/>
