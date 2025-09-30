---
title: Integración OpenAI
metaDescription: A lightweight tool to monitor your OpenAI workload.
freshnessValidatedDate: never
translationType: machine
---

Con nuestra integración de OpenAI, tiene la capacidad de monitor sin problemas todas las consultas de OpenAI. Al agregar solo dos líneas de código, su equipo puede obtener acceso a métricas clave de rendimiento, como costo, tiempo de respuesta, límites de tasa, tasa de errores, historial de chat y muestras de entradas y salidas. Nuestra integración OpenAI proporciona métricas en tiempo real para ayudar a las empresas a optimizar el uso, reducir costos y lograr mejores resultados.

<img
  title="OpenAI dashboard"
  alt="OpenAI dashboard"
  src="/images/model-performance-monitoring_screenshot-crop_openai-dashboard-1.webp"
/>

Esta guía le mostrará cómo integrar su aplicación OpenAI para que pueda comenzar a monitorear sus datos.

<CollapserGroup>
  <Collapser
    id="install-with-python"
    title="Instalar para la aplicación Python"
  >
    <Steps>
      <Step>
        ### Instalar OpenAI con pip

        Una vez que haya completado su importación de OpenAI, ejecute:

        ```bash
        pip install nr-openai-observability
        ```
      </Step>

      <Step>
        ### Establece tu variable de entorno [#set-environment-variable]

        Obtenga su <InlinePopover type="licenseKey"/>y configúrelo como variable de entorno: `NEW_RELIC_LICENSE_KEY`.

        Para obtener más detalles e instrucciones, consulte nuestra [documentación de la API REST](/docs/apis/intro-apis/new-relic-api-keys/#license-key).

        ```bash
        export NEW_RELIC_LICENSE_KEY=<license key>
        ```

        ```python
        import os
        os.environ["NEW_RELIC_LICENSE_KEY"] = "<license key>"
        ```

        Su `NEW_RELIC_LICENSE_KEY` también se puede enviar como parámetro en la llamada `monitor.initialization()` .
      </Step>

      <Step>
        ### Modifica tu código [#modify-code]

        Agregue las siguientes dos líneas a su código:

        ```python
        from nr_openai_observability import monitor
        monitor.initialization()
        ```
      </Step>

      <Step>
        ### Añade tu dashboard [#add-dashboard]

        Para agregar el dashboard a su cuenta New Relic:

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
    title="Instalar con Node.js"
  >
    <Steps>
      <Step>
        ### Instalar OpenAI [#install-openai-node]

        Utilice npm y ejecute:

        ```bash
        npm install @newrelic/openai-observability openai
        ```
      </Step>

      <Step>
        ### Modifica tu código [#modify-code]

        Llame a `monitorOpenAI` con su cliente `OpenAI` configurado.

        Aquí hay un código de ejemplo:

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

        Cerciorar de agregar el tipo de módulo a `package.json`:

        ```json
        "type": "module"
        ```
      </Step>

      <Step>
        ### Opciones de inicialización [#modify-code]

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

## Usuario de cuenta UE [#EU-account-users]

Si está utilizando una cuenta de la UE, debe configurar su `EVENT_CLIENT_HOST` de la siguiente manera:

```bash
export EVENT_CLIENT_HOST="insights-collector.eu01.nr-data.net"
```

```python
import os
os.environ["EVENT_CLIENT_HOST"] = "insights-collector.eu01.nr-data.net"
```

## Encuentra tus datos

Una vez que haya integrado OpenAI, siga estos pasos para encontrar datos de observabilidad:

1. De [one.newrelic.com](https://one.newrelic.com).

2. Haga clic en

   <DNT>
     **Model Performance**
   </DNT>

   .

3. Busque en

   <DNT>
     **Applications**
   </DNT>

   .

## Mira como funciona [#see-how-it-works]

Si tiene dificultades con estas instrucciones, le recomendamos que vea este vídeo de demostración.

<Video
  type="wistia"
  id="dz28h83owk"
/>
