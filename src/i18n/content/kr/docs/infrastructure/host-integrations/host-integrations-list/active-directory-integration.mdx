---
title: 액티브 디렉토리 통합
tags:
  - Active Directory integration
  - New Relic integrations
metaDescription: Install our Active Directory integration to monitor the health of your environment.
freshnessValidatedDate: never
translationType: machine
---

<DNT>Active Directory</DNT> 통합을 사용하면 디렉토리 서비스 환경의 상태를 쉽게 모니터링하고 잠재적인 문제를 사전에 알릴 수 있습니다.

우리의 방전 에이전트로 구축된 <DNT>Active Directory</DNT> 통합은 가장 중요한 성능 데이터인 올인원 위치를 볼 수 있도록 사전 구축된 <InlinePopover type="dashboards"/>및 <InlinePopover type="alerts"/>세트를 제공합니다.

<img
  src="/images/infrastructure_screenshot_full_active-directory-dashboard.webp"
  title="Active Directory dashboard"
  alt="A screenshot of a dashboard with Active Directory performance metrics."
/>

<figcaption>
  뉴렐릭으로 <DNT>Active Directory</DNT> 통합을 설정한 후 상자에서 꺼내자마자 이와 같은 대시보드에서 데이터를 확인하세요.
</figcaption>

이 페이지를 최대한 활용하려면 환경에 맞는 설치 방법을 선택하세요. 설치 과정을 시작하기 전에 [뉴렐릭 계정이](https://newrelic.com/signup) 필요합니다.

<Callout variant="tip">
  **가이드 설치를 사용하여 UI에서 데이터를 빠르게 확인**

  안내 설치는 <DNT>Active Directory</DNT> 서비스를 모니터링하기 위해 실행할 수 있는 단일 CLI 명령입니다. 소규모 조직이나 뉴렐릭을 테스트하려는 모든 사람에게 좋은 옵션입니다.

  <ButtonGroup>
    <ButtonLink
      role="button"
      to="https://one.newrelic.com/marketplace?state=8f14e646-461e-b010-4675-3a0658bb3d20"
      variant="primary"
    >
      안내 설치
    </ButtonLink>
  </ButtonGroup>

  보다 영구적이고 확장 가능한 솔루션을 위해 통합의 표준 수동 설치를 권장합니다. 설치 방법을 계속 읽어보세요.
</Callout>

<Steps>
  <Step>
    ## 인프라 에이전트 설치 [#infra]

    <DNT>Active Directory</DNT> 통합을 사용하려면 먼저 동일한 호스트에 [인프라 에이전트를 설치](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) 해야 합니다. 클라이언트 에이전트 모니터는 호스트 자체를 모니터링하는 반면, 다음 단계에서 설치하게 될 통합은 <DNT>Active Directory</DNT>관련 데이터로 모니터링을 확장합니다.
  </Step>

  <Step>
    ## Active Directory 통합 리포지터리 복제 [#clone]

    CLI에서 다음 명령을 실행하여 뉴렐릭 <DNT>Active Directory</DNT> 통합 대상을 복제하세요.

    ```bash
    git clone https://github.com/newrelic/newrelic-active-directory-integration.git
    ```
  </Step>

  <Step>
    ## 설정 파일 복사 [#copy-config]

    저장소에서 에이전트로 관련 구성 파일을 복사하고 `$ROOT_PATH` 저장소를 복제한 경로로 바꿉니다.

    ```powershell
    # integrations.d
    Copy-Item -Path "$ROOT_PATH\newrelic-active-directory-integration\integrations.d\*"     -Destination "C:\Program Files\New Relic\newrelic-infra\integrations.d" -Recurse

    # logging.d
    Copy-Item -Path "$ROOT_PATH\newrelic-active-directory-integration\logging.d\*"     -Destination "C:\Program Files\New Relic\newrelic-infra\logging.d" -Recurse
    ```
  </Step>

  <Step>
    ## 통합 설치 [#install-io]

    관련 대시보드 및 알림을 추가하려면 뉴렐릭 I/O 카탈로그에서 [<DNT>Active Directory</DNT> 퀵스타트를](https://newrelic.com/instant-observability/active-directory) 설치하세요.
  </Step>

  <Step>
    ## 데이터 찾기 및 사용 [#find-date]

    <DNT>Active Directory</DNT> 의 텔레메트리 컬렉션은 다음과 같이 에이전트 에이전트의 디렉터리 구조에 있는 다양한 설정 및 펼쳐짐 파일에 따라 달라집니다.

    ```
    C:\Program Files\New Relic\newrelic-infra\
        ├── integrations.d
        │   ├── windows-active-directory-performance-counters.ps1
        │   ├── windows-active-directory-performance-counters.yml
        │   ├── windows-active-directory-replication-checks.yml
        │   ├── windows-active-directory-replication-failures.ps1
        │   ├── windows-active-directory-replication-partners.ps1
        │   └── windows-active-directory-services.yml
        └── logging.d
            └── windows-active-directory.yml
    ```

    이러한 각 파일은 함께 작동하여 완전한 관찰 가능성 공간을 제공합니다. New Relic의 결과 원격 측정은 메트릭, 이벤트 및 로그 데이터로 구성됩니다.
  </Step>
</Steps>

## 이벤트 내용

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **EVENT ATTRIBUTE**
        </DNT>
      </th>

      <th>
        <DNT>
          **COUNTER NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `addressBookClientSessions`
      </td>

      <td>
        `\NTDS\AB Client Sessions`
      </td>

      <td>
        연결된 주소록 클라이언트 세션 수
      </td>
    </tr>

    <tr>
      <td>
        `inboundFullSyncObjectsRemaining`
      </td>

      <td>
        `\NTDS\DRA Inbound Full Sync Objects Remaining`
      </td>

      <td>
        전체 동기화가 완료될 때까지 남은 개체 수
      </td>
    </tr>

    <tr>
      <td>
        `draInbound`
      </td>

      <td>
        `\NTDS\DRA Inbound Values (DNs only)/sec`
      </td>

      <td>
        다른 개체를 참조하는 DN인 인바운드 복제 파트너로부터 받은 개체 속성 값의 수
      </td>
    </tr>

    <tr>
      <td>
        `draOutbound`
      </td>

      <td>
        `\NTDS\DRA Outbound Values (DNs only)/sec`
      </td>

      <td>
        아웃바운드 복제 파트너에게 보낸 DN을 포함하는 개체 속성 값의 수
      </td>
    </tr>

    <tr>
      <td>
        `draPendingReplicationSync`
      </td>

      <td>
        `\NTDS\DRA Pending Replication Synchronizations`
      </td>

      <td>
        이 서버의 대기열에 있지만 아직 처리되지 않은 디렉터리 동기화 수
      </td>
    </tr>

    <tr>
      <td>
        `directoryReadsPerSec`
      </td>

      <td>
        `\NTDS\DS Directory Reads/sec`
      </td>

      <td>
        초당 디렉토리 읽기 수
      </td>
    </tr>

    <tr>
      <td>
        `directoryWritesPerSec`
      </td>

      <td>
        `\NTDS\DS Directory Writes/sec`
      </td>

      <td>
        초당 디렉토리 쓰기 수
      </td>
    </tr>

    <tr>
      <td>
        `directoryNotifyQueueSize`
      </td>

      <td>
        `\NTDS\DS Notify Queue Size`
      </td>

      <td>
        대기열에 있지만 아직 클라이언트에 전송되지 않은 보류 중인 업데이트 알림 수
      </td>
    </tr>

    <tr>
      <td>
        `directoryThreadsInUse`
      </td>

      <td>
        `\NTDS\DS Threads in Use`
      </td>

      <td>
        디렉터리 서비스가 사용 중인 현재 스레드 수
      </td>
    </tr>

    <tr>
      <td>
        `ldapActiveThreads`
      </td>

      <td>
        `\NTDS\LDAP Active Threads`
      </td>

      <td>
        로컬 디렉토리 서비스의 LDAP 하위 시스템이 사용하는 현재 스레드 수
      </td>
    </tr>

    <tr>
      <td>
        `ldapBindTime`
      </td>

      <td>
        `\NTDS\LDAP Bind Time`
      </td>

      <td>
        마지막 LDAP 바인드를 완료하는 데 걸리는 시간(밀리초)
      </td>
    </tr>

    <tr>
      <td>
        `ldapClientSessions`
      </td>

      <td>
        `\NTDS\LDAP Client Sessions`
      </td>

      <td>
        현재 연결된 LDAP 클라이언트 세션 수
      </td>
    </tr>

    <tr>
      <td>
        `ldapSearchesPerSec`
      </td>

      <td>
        `\NTDS\LDAP Searches/sec`
      </td>

      <td>
        LDAP 클라이언트가 검색 작업을 수행하는 비율
      </td>
    </tr>

    <tr>
      <td>
        `ldapSuccessfulBindsPerSec`
      </td>

      <td>
        `\NTDS\LDAP Successful Binds/sec`
      </td>

      <td>
        초당 LDAP 바인드 수
      </td>
    </tr>

    <tr>
      <td>
        `contextSwitchesPerSec`
      </td>

      <td>
        `\System\Context Switches/sec`
      </td>

      <td>
        컴퓨터의 모든 프로세서가 한 스레드에서 다른 스레드로 전환되는 결합 속도
      </td>
    </tr>

    <tr>
      <td>
        `processorQueueLength`
      </td>

      <td>
        `\System\Processor Queue Length`
      </td>

      <td>
        대기열에서 실행 대기 중인 스레드 수
      </td>
    </tr>
  </tbody>
</table>

## Windows Services [#windows-services]

<DNT>Active Directory</DNT> Windows 서비스 수집은 다음 설정 파일을 사용하여 기본 Windows 서비스 통합을 통해 수행됩니다.

```
windows-active-directory-services.yml
```

이 콜렉션의 결과는 데코레이팅된 레이블이 있는 차원 메트릭으로 저장됩니다: `label.primary_app = 'active_directory'`.

## 측정항목 세부정보

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **SERVICE NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `ADWS`
      </td>

      <td>
        <DNT>
          Active Directory
        </DNT>

        웹 서비스
      </td>
    </tr>

    <tr>
      <td>
        `DFS`
      </td>

      <td>
        분산 파일 시스템
      </td>
    </tr>

    <tr>
      <td>
        `DFSR`
      </td>

      <td>
        DFS 복제
      </td>
    </tr>

    <tr>
      <td>
        `DNS`
      </td>

      <td>
        DNS 서버
      </td>
    </tr>

    <tr>
      <td>
        `Dnscache`
      </td>

      <td>
        DNS 클라이언트
      </td>
    </tr>

    <tr>
      <td>
        `IsmServ`
      </td>

      <td>
        사이트 간 메시징
      </td>
    </tr>

    <tr>
      <td>
        `kdc`
      </td>

      <td>
        Kerberos 키 배포 센터
      </td>
    </tr>

    <tr>
      <td>
        `lanmanserver`
      </td>

      <td>
        섬기는 사람
      </td>
    </tr>

    <tr>
      <td>
        `lanmanworkstation`
      </td>

      <td>
        워크스테이션
      </td>
    </tr>

    <tr>
      <td>
        `Netlogon`
      </td>

      <td>
        넷 로그온
      </td>
    </tr>

    <tr>
      <td>
        `NTDS`
      </td>

      <td>
        Active Directory 도메인 서비스
      </td>
    </tr>

    <tr>
      <td>
        `RpcSs`
      </td>

      <td>
        RPC(원격 프로시저 호출)
      </td>
    </tr>

    <tr>
      <td>
        `SamSs`
      </td>

      <td>
        보안 계정 관리자
      </td>
    </tr>

    <tr>
      <td>
        `W32Time`
      </td>

      <td>
        윈도우 시간
      </td>
    </tr>
  </tbody>
</table>

## 이벤트 내용

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **EVENT NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **ATTRIBUTE**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `failureCount`
      </td>

      <td>
        지정된 도메인 컨트롤러에서 발생한 총 복제 실패 수를 나타내는 정수입니다.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `failureType`
      </td>

      <td>
        지정된 도메인 컨트롤러에서 발생한 최신 복제 실패 유형의 문자열 표현입니다.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `firstFailureTime`
      </td>

      <td>
        지정된 도메인 컨트롤러에서 처음으로 관찰된 오류를 나타내는 타임스탬프(

        `MM/dd/yyyy h:mm:ss tt`

        ) 문자열입니다.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `lastError`
      </td>

      <td>
        지정된 도메인 컨트롤러에서 복제 실패에 대해 받은 마지막 오류 코드를 나타내는 정수입니다.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `server`
      </td>

      <td>
        복제 실패가 발생한 도메인 컨트롤러의 문자열 이름입니다.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `lastReplicationAttempt`
      </td>

      <td>
        서버와 파트너 간의 마지막 복제 시도를 나타내는 타임스탬프(

        `MM/dd/yyyy h:mm:ss tt`

        ) 문자열입니다.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `lastReplicationSuccess`
      </td>

      <td>
        서버와 파트너 간에 마지막으로 성공한 복제를 나타내는 타임스탬프(

        `MM/dd/yyyy h:mm:ss tt`

        ) 문자열입니다.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `partner`
      </td>

      <td>
        복제를 위한 원격 파트너의 짧은 이름입니다.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `server`
      </td>

      <td>
        에 대한 로컬 서버의 짧은 이름
      </td>
    </tr>
  </tbody>
</table>

## Windows 이벤트 로그 [#event-logs]

<DNT>Active Directory</DNT> Windows 이벤트 수집은 이 설정 파일을 사용하여 에이전트 에이전트의 통합 쿠키 전달을 통해 수행됩니다.

```
windows-active-directory.yml
```

이 수집의 결과는 `logtype = 'active_directory'`라벨이 지정된 로그로 저장됩니다.

## 로그 세부정보

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **CHANNEL**
        </DNT>
      </th>

      <th>
        <DNT>
          **EVENT ID**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        보안
      </td>

      <td>
        `4609`
      </td>

      <td>
        Windows 종료 중
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4616`
      </td>

      <td>
        시스템 시간이 변경되었습니다.
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4625`
      </td>

      <td>
        계정 로그인 실패
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4648`
      </td>

      <td>
        명시적 자격 증명을 사용하여 로그온을 시도했습니다.
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4649`
      </td>

      <td>
        리플레이 첨부가 감지되었습니다.
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4950`
      </td>

      <td>
        IPsec 주 모드 보안 연결이 설정되었습니다.
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4697`
      </td>

      <td>
        시스템에 서비스가 설치되었습니다.
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4713`
      </td>

      <td>
        Kerberos 정책이 변경됨
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4714`
      </td>

      <td>
        암호화된 데이터 복구 정책이 변경됨
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4719`
      </td>

      <td>
        시스템 감사 정책이 변경됨
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4720`
      </td>

      <td>
        사용자 계정이 생성됨
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4723`
      </td>

      <td>
        계정의 암호를 변경하려고 했습니다.
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4724`
      </td>

      <td>
        계정 암호를 재설정하려고 했습니다.
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4725`
      </td>

      <td>
        사용자 계정이 비활성화되었습니다.
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4726`
      </td>

      <td>
        사용자 계정이 삭제되었습니다.
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4738`
      </td>

      <td>
        사용자 계정이 변경됨
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4739`
      </td>

      <td>
        도메인 정책이 변경됨
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4740`
      </td>

      <td>
        사용자 계정이 잠겼습니다.
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        `4781`
      </td>

      <td>
        컴퓨터 계정이 생성되었습니다
      </td>
    </tr>

    <tr>
      <td>
        체계
      </td>

      <td>
        `1083`
      </td>

      <td>
        보안 설명자 버전 번호를 확인할 수 없습니다.
      </td>
    </tr>

    <tr>
      <td>
        체계
      </td>

      <td>
        `1202`
      </td>

      <td>
        보안 정책이 경고와 함께 전파되었습니다. 0x534 : 계정 이름과 보안 ID 간의 매핑이 수행되지 않았습니다.
      </td>
    </tr>

    <tr>
      <td>
        체계
      </td>

      <td>
        `1265`
      </td>

      <td>
        다음 쓰기 가능한 디렉터리 파티션에 대한 복제 링크를 설정하려는 시도가 실패했습니다.
      </td>
    </tr>

    <tr>
      <td>
        체계
      </td>

      <td>
        `1311`
      </td>

      <td>
        KCC(Knowledge Consistency Checker)에서 다음 디렉터리 파티션의 문제를 감지했습니다.
      </td>
    </tr>

    <tr>
      <td>
        체계
      </td>

      <td>
        `1388`
      </td>

      <td>
        지난 [숫자]일 동안 하나 이상의 디렉터리 파티션에서 복제 오류로 인해 현재 도메인 컨트롤러에서 지정된 명명 컨텍스트에 대해 복제가 비활성화되었습니다.
      </td>
    </tr>

    <tr>
      <td>
        체계
      </td>

      <td>
        `1645`
      </td>

      <td>
        <DNT>
          Active Directory
        </DNT>

        삽입 서비스에서는 여전히 '관리자' 계정의 기본 비밀번호를 사용하고 있는 것을 감지했습니다.
      </td>
    </tr>

    <tr>
      <td>
        체계
      </td>

      <td>
        `5805`
      </td>

      <td>
        컴퓨터 [컴퓨터 이름]의 세션 설정이 인증에 실패했습니다.
      </td>
    </tr>

    <tr>
      <td>
        체계
      </td>

      <td>
        `5807`
      </td>

      <td>
        지난 [숫자]일 동안 포리스트에 몇 가지 복제 오류가 있습니다. 포리스트에 네트워크 또는 연결 문제가 있을 수 있습니다.
      </td>
    </tr>
  </tbody>
</table>

## 소스 코드 확인 [#source-code]

이 통합은 오픈 소스 소프트웨어입니다. 즉, [소스 코드를 검색](https://github.com/newrelic/newrelic-active-directory-integration) 하고 개선 사항을 보내거나 자체 포크를 만들어 빌드할 수 있습니다.
