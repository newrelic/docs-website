---
title: '호스트 내 통합: 설치 및 구성'
tags:
  - Integrations
  - On-host integrations
  - Installation
metaDescription: Details about the New Relic on-host infrastructure integrations for third-party services that work in tandem with the infrastructure agent.
freshnessValidatedDate: never
translationType: machine
---

일부 [온호스트 통합은](/docs/infrastructure/host-integrations/get-started/introduction-host-integrations) 특정 방식으로 구축되었으며 인프라 에이전트와 긴밀하게 번들되어 있습니다. 즉, 설치 및 구성 프로세스가 유사합니다.

이 문서에는 이러한 유형의 통합에 대한 기본 설치 절차가 포함되어 있습니다. 이러한 통합의 작동 방식에 대한 기술적인 세부 정보는 [온호스트 통합 데이터 보고를](/docs/infrastructure/host-integrations/understand-use-data/host-integration-data-collection-reporting) 참조하세요.

## 설치 방법 [#install]

귀하의 서비스는 단일 물리적 호스트, VM 또는 Kubernetes 또는 Amazon ECS에 의해 오케스트레이션된 컨테이너에서 실행될 수 있습니다. 원하는 설치 방법을 선택하십시오.

통합의 기본 설치를 수행한 후 구성 지침을 읽으려면 특정 통합에 대한 설명서로 돌아가야 합니다.

### 오케스트레이션된 환경 [#orchestrated]

컨테이너화되고 오케스트레이션된 환경을 위한 옵션:

* <img
    style={{ width: '32px', height: '32px', verticalAlign: 'middle'}}
    class="inline"
    title="Kubernetes"
    alt="Kubernetes"
    src="/images/os_icon_k8.webp"
  />

  [Kubernetes ](/docs/integrations/kubernetes-integration/link-apps-services/monitor-services-running-kubernetes)에 온-호스트 통합 설치

* <img
    style={{ width: '32px', height: '32px', verticalAlign: 'middle'}}
    class="inline"
    title="ECS"
    alt="ECS"
    src="/images/os_icon_ecs.webp"
  />

  [Amazon ECS ](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs)(EC2 시작 유형)에 온호스트 통합 설치

### VM 또는 온프레미스 호스트에서 실행 [#standard]

시나리오를 선택하세요.

<CollapserGroup>
  <Collapser
    id="windows"
    title={<>MSI 파일을 사용하여 설치(<img src="/images/os_icon_windows.webp" title="Windows" alt="Windows" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>윈도우)</img></>}
  >
    설치하기 위해서:

    1. 아직 가지고 있지 않다면 [인프라 에이전트를 설치하십시오](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic).

    2. [저장소에서](https://download.newrelic.com/infrastructure_agent/windows/integrations/) 원하는 통합을 위한 최신 .MSI 설치 프로그램 이미지를 다운로드하십시오.

    3. 관리자 계정에서 절대 경로를 사용하여 설치 스크립트를 실행합니다.

       ```
       msiexec.exe /qn /i PATH\TO\integration-name.msi
       ```

    4. 통합 문서로 돌아가서 구성 지침을 완료하세요.
  </Collapser>

  <Collapser
    id="apt"
    title={<>apt로 설치(<img src="/images/os_icon_debian.webp" title="Debian icon" alt="Debian.webp" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>데비안,<img src="/images/os_icon_ubuntu.webp" title="ubuntu icon" alt="ubuntu icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>우분투)</>}
  >
    `apt` 와의 통합을 설치하려면 다음을 수행하십시오.

    1. 아직 설치하지 않은 경우 운영 체제용 [인프라 에이전트를 설치하십시오](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) .

    2. 명령줄에서 다음을 실행합니다.

       ```
       sudo apt-get update
       ```

    3. 다음 명령을 실행합니다. 여기서 `INTEGRATION_FILE_NAME` 통합의 파일 이름을 나타냅니다. 자세한 내용은 [통합 문서를](/docs/integrations/host-integrations/host-integrations-list) 참조하세요.

       ```
       sudo apt-get install INTEGRATION_FILE_NAME
       ```

    4. 통합 문서로 돌아가서 구성 지침을 완료하세요.
  </Collapser>

  <Collapser
    id="yum"
    title={<>yum으로 설치(<img src="/images/os_icon_amazon-linux.webp" title="amazon linux.webp" alt="amazon linux.webp" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>아마존 리눅스,<img src="/images/os_icon_centos.webp" title="centos icon" alt="centos icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>CentOS,<img src="/images/os_icon_redhat.webp" title="redhat icon" alt="redhat icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>RHEL)</>}
  >
    `yum` 을(를) 사용하여 통합 패키지를 설치하려면 다음을 수행합니다.

    1. 아직 설치하지 않은 경우 운영 체제용 [인프라 에이전트를 설치하십시오](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) .

    2. 명령줄에서 다음을 실행합니다.

       ```
       sudo yum -q makecache -y --disablerepo='*' --enablerepo='newrelic-infra'
       ```

    3. 다음 명령을 실행합니다. 여기서 `INTEGRATION_FILE_NAME` 통합의 파일 이름을 나타냅니다. 자세한 내용은 [특정 호스트 내 통합을](/docs/infrastructure/host-integrations/host-integrations-list) 참조하세요.

       ```
       sudo yum install INTEGRATION_FILE_NAME
       ```

    4. 통합 문서로 돌아가서 구성 지침을 완료하세요.
  </Collapser>

  <Collapser
    id="zypper"
    title={<>지퍼로 설치(<img src="/images/os_icon_suse.webp" title="suse icon" alt="suse icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>SLES)</>}
  >
    zypper와 온-호스트 통합을 설치하려면:

    1. 아직 설치하지 않은 경우 운영 체제용 [인프라 에이전트를 설치하십시오](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) .

    2. 명령줄에서 다음을 실행합니다.

       ```
       sudo zypper -n ref -r newrelic-infra
       ```

    3. 다음 명령을 실행합니다. 여기서 `INTEGRATION_FILE_NAME` 통합의 파일 이름을 나타냅니다. 자세한 내용은 [통합 문서를](/docs/integrations/host-integrations/host-integrations-list) 참조하세요.

       ```
       sudo zypper -n install INTEGRATION_FILE_NAME
       ```

    4. 통합 문서로 돌아가서 구성 지침을 완료하세요.
  </Collapser>

  <Collapser
    id="tarball"
    title={<>tarball에서 설치(<img src="/images/os_icon_linux.webp" title="Linux" alt="Linux icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>기타 배포판)</>}
  >
    <Callout variant="tip">
      [배포 패키지 관리자를 사용하여 인프라 에이전트를 설치하는](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/install-infrastructure-linux-using-package-manager) 것이 좋습니다.[에이전트를 수동으로 설치](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/tarball-manual-install-infrastructure-linux) 하도록 선택한 경우 제공된 tarball에서 호스트 내 통합을 설치할 수도 있습니다.
    </Callout>

    수동 설치 프로세스는 자동화되지 않습니다. 수동 설치를 선택하는 경우 올바른 폴더에 다른 파일을 배치하고 에이전트에 통합을 실행할 수 있는 모든 권한이 있는지 확인해야 합니다.

    tarball에서 통합을 설치하려면:

    1. [tarball 저장소](https://download.newrelic.com/infrastructure_agent/binaries/linux/amd64/) 에서 패키지 통합 파일을 다운로드합니다.

    2. 에이전트가 통합의 정의, 구성 및 실행 파일을 찾을 수 있도록[통합 파일 구조 및 배치 규칙](/docs/integrations/integrations-sdk/getting-started/integration-file-structure-activation) 에 따라 tarball 파일의 압축을 풉니다.

    3. [에이전트 디렉토리](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/tarball-manual-install-infrastructure-linux#agent-directory) 의 `newrelic-integrations` 또는 `custom-integrations` 내부에 정의 파일이 포함된 바이너리를 배치합니다.

    4. [플러그인 디렉토리](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/tarball-manual-install-infrastructure-linux#configure-plugin) 아래에 통합의 구성 파일을 배치합니다.

    5. 통합 문서로 돌아가서 구성 지침을 완료하세요. 통합에 JMX 도구를 사용해야 하는 경우 이에 대한 세부정보는 아래와 같습니다.

       `nrjmx` 도구가 필요한 통합의 경우 다음 추가 지침을 따르세요.

       #### New Relic JMX 도구 사용 [#nrjmx]

       일부 통합(예: [JMX](/docs/integrations/host-integrations/host-integrations-list/jmx-monitoring-integration) , [Cassandra](/docs/integrations/host-integrations/host-integrations-list/cassandra-monitoring-integration) 및 [Kafka](/docs/integrations/host-integrations/host-integrations-list/kafka-monitoring-integration) )에는 `nrjmx` 도구가 필요합니다. 통합에 필요한 경우 [저장소](https://download.newrelic.com/infrastructure_agent/binaries/linux/noarch/) 에서 다운로드하여 압축을 풉니다.

       <Callout variant="important">
         `nrjmx` Java 8 이상이 필요합니다.
       </Callout>

       JMX 통합 버전 2.3.3 이상 및 Cassandra 통합 버전 2.3.0 이상의 경우 `nrjmx` 도구가 종속 항목으로 포함됩니다. 이러한 이유로 패키지 관리자를 사용할 때 `nrjmx` 도구를 수동으로 설치할 필요가 없습니다.

       `nrjmx` 이(가) 이미 설치되어 있고 `nri-jmx` 을(를) 설치한 경우 JMX 도구는 이미 설치된 버전을 유지합니다. `nrjmx` 이(가) 아직 설치되어 있지 않으면 최신 `nrjmx` 릴리스를 가져옵니다.

       기본적으로 `nrjmx` 위치는 `/usr/bin/nrjmx/*` 입니다. 다른 위치에 설치하려면 `NR_JMX_TOOL` 환경 변수에서 새 경로를 설정하십시오.
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## 에이전트 업데이트 [#upgrade]

호스트 내 통합을 최신 상태로 유지하려면 표준 절차에 따라 [호스트 내 통합 패키지를 업데이트하십시오](/docs/infrastructure/host-integrations/installation/update-infrastructure-host-integration-package) .

## 기술적 세부 사항 [#technical-details]

이러한 통합은 동일한 파일 구조 및 구성 구조로 구축됩니다. 구조 및 데이터 보고 방법에 대한 자세한 내용은 [데이터 보고를](/docs/infrastructure/host-integrations/understand-use-data/host-integration-data-collection-reporting) 참조하십시오.
