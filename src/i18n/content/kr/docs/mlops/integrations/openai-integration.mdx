---
title: OpenAI 통합
metaDescription: A lightweight tool to monitor your OpenAI workload.
freshnessValidatedDate: never
translationType: machine
---

OpenAI 통합을 통해 모든 OpenAI 쿼리를 원활하게 모니터링할 수 있습니다. 단 두 줄의 코드만 추가하면 팀은 비용, 응답 시간, 속도 제한, 오류율, 채팅 기록, 샘플 입력 및 출력과 같은 주요 성능 지표에 액세스할 수 있습니다. OpenAI 통합은 기업이 사용량을 최적화하고, 비용을 절감하고, 더 나은 결과를 달성하는 데 도움이 되는 실시간 지표를 제공합니다.

<img
  title="OpenAI dashboard"
  alt="OpenAI dashboard"
  src="/images/model-performance-monitoring_screenshot-crop_openai-dashboard-1.webp"
/>

이 가이드에서는 데이터 모니터링을 시작할 수 있도록 OpenAI 애플리케이션을 통합하는 방법을 보여줍니다.

<CollapserGroup>
  <Collapser
    id="install-with-python"
    title="Python 애플리케이션용으로 설치"
  >
    <Steps>
      <Step>
        ### pip로 OpenAI 설치

        OpenAI 가져오기를 완료한 후 다음을 실행합니다.

        ```bash
        pip install nr-openai-observability
        ```
      </Step>

      <Step>
        ### 환경 변수 설정 [#set-environment-variable]

        <InlinePopover type="licenseKey"/>(를) 가져와서 환경 변수로 설정합니다: `NEW_RELIC_LICENSE_KEY`.

        자세한 내용과 지침은 [REST API 설명서를](/docs/apis/intro-apis/new-relic-api-keys/#license-key) 확인하세요.

        ```bash
        export NEW_RELIC_LICENSE_KEY=<license key>
        ```

        ```python
        import os
        os.environ["NEW_RELIC_LICENSE_KEY"] = "<license key>"
        ```

        `NEW_RELIC_LICENSE_KEY` 는 `monitor.initialization()` 호출 시 매개변수로 전송될 수도 있습니다.
      </Step>

      <Step>
        ### 코드 수정 [#modify-code]

        코드에 다음 두 줄을 추가합니다.

        ```python
        from nr_openai_observability import monitor
        monitor.initialization()
        ```
      </Step>

      <Step>
        ### 대시보드 추가 [#add-dashboard]

        New Relic 계정에 대시보드를 추가하려면:

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
    title="Node.js로 설치"
  >
    <Steps>
      <Step>
        ### OpenAI 설치 [#install-openai-node]

        npm을 사용하고 다음을 실행하세요.

        ```bash
        npm install @newrelic/openai-observability openai
        ```
      </Step>

      <Step>
        ### 코드 수정 [#modify-code]

        구성된 `OpenAI` 클라이언트를 사용하여 `monitorOpenAI` 호출합니다.

        다음은 몇 가지 예제 코드입니다.

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

        `package.json` 에 모듈 유형을 추가했는지 확인하세요.

        ```json
        "type": "module"
        ```
      </Step>

      <Step>
        ### 초기화 옵션 [#modify-code]

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

## EU 계정 사용자 [#EU-account-users]

EU 계정을 사용하는 경우 다음과 같이 `EVENT_CLIENT_HOST` 을 설정해야 합니다.

```bash
export EVENT_CLIENT_HOST="insights-collector.eu01.nr-data.net"
```

```python
import os
os.environ["EVENT_CLIENT_HOST"] = "insights-collector.eu01.nr-data.net"
```

## 데이터 찾기

OpenAI를 통합한 후 관측 가능성 데이터를 찾으려면 다음 단계를 따르세요.

1. [one.newrelic.com](https://one.newrelic.com) 에서.

2. <DNT>
     **Model Performance**
   </DNT>

   을 클릭합니다.

3. <DNT>
     **Applications**
   </DNT>

   아래에서 검색하세요.

## 작동 방식 보기 [#see-how-it-works]

이러한 지침을 이해하는 데 어려움을 겪고 계시다면 이 데모 비디오를 시청해 보시기 바랍니다.

<Video
  type="wistia"
  id="dz28h83owk"
/>
