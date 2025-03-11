---
title: Azure Arc에 New Relic 확장 설치
tags:
  - Infrastructure
  - Install NewRelic Extension
  - NewRelic Extension
  - Azure Arc Extension
metaDescription: New Relic's Extension For Azure Arc.
freshnessValidatedDate: never
translationType: machine
---

이 설명서에서는 Azure 명령줄 인터페이스(Azure CLI)를 사용하여 Azure arc 연결된 컴퓨터에 New Relic Extension을 설치하는 방법에 대한 단계별 지침을 제공합니다.

<CollapserGroup>
  <Collapser
    id="verbose-with-manifest"
    title="Azure Arc란 무엇입니까?"
  >
    Azure arc는 Azure 플랫폼을 확장하여 데이터 센터와 멀티클라우드 환경에서 실행할 수 있는 유연성을 갖춘 기능과 서비스를 구축하는 데 도움을 줍니다. Azure arc는 일관된 개발, 운영 및 보안 모델을 통해 클라우드 네이티브 애플리케이션을 개발하는 데 도움이 됩니다.
  </Collapser>
</CollapserGroup>

## 전제 조건

시작하기 전에 다음 사항을 확인하세요.

* 로컬 머신에 설치된 Azure CLI.
* Azure Arc 연결 머신이 설정되고 Azure 구독에 등록됩니다.
* 지정된 리소스 그룹의 리소스를 관리할 수 있는 Azure 구독 소유자 또는 기여자 역할의 권한입니다.

## 설치 단계

<Steps>
  <Step>
    ### 터미널 또는 명령 프롬프트 열기

    Azure 구독에 연결하고 Azure CLI를 통해 다음 단계를 실행합니다.
  </Step>

  <Step>
    ### Azure CLI 명령 실행

    Azure arc 연결 머신에 New Relic 에이전트를 설치하려면 터미널에 다음 명령을 입력하세요.

    <DNT>
      **For Linux-based machines:**
    </DNT>

    ```bash
    az connectedmachine extension create \
      --resource-group "your-resource-group" \
      --machine-name "your-machine-name" \
      --location "your-location" \
      --name NewRelicAgent \
      --publisher newrelic.infrastructure.extensions \
      --type newrelic-infra \
      --settings '{ "NR_LICENSE_KEY": "YOUR-NEW-RELIC-LICENSE-KEY" }'
    ```

    <DNT>
      **For Windows-based machines:**
    </DNT>

    ```bash
    az connectedmachine extension create \
      --resource-group "your-resource-group" \
      --machine-name "your-machine-name" \
      --location "your-location" \
      --name NewRelicAgent \
      --publisher newrelic.infrastructure.extensions \
      --type newrelic-infra-windows \
      --settings '{ "NR_LICENSE_KEY": "YOUR-NEW-RELIC-LICENSE-KEY" }'
    ```

    "your-resource-group", "your-machine-name" 및 "your-location"과 같은 자리 표시자를 실제 리소스 그룹, 컴퓨터 이름 및 위치로 바꿉니다.
  </Step>

  <Step>
    ### 설치를 확인하십시오.

    Azure arc 연결된 머신에서 New Relic 에이전트 상태를 확인하여 설치가 성공했는지 확인하세요.

    1. Azure 포털 -

       <img
         title="azureArcExtension.webp"
         alt="Azure Arc Extension"
         src="/images/Azure-arc-extension.webp"
       />

    2. NewRelic에서 Azure Arc 연결 VM 메트릭을 확인하세요.

       <img
         title="azureArcMetrics.webp"
         alt="Azure Arc NewRelic Metics"
         src="/images/Azure-Arc-Metrics.webp"
       />
  </Step>
</Steps>
