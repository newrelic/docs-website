---
title: 로그 전달을 위한 Fluent Bit 플러그인
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
  - Fluent Bit
metaDescription: 'Install and configure the New Relic logging plugin for Fluent Bit, so you can use enhanced log management capabilities.'
freshnessValidatedDate: '2024-10-30T00:00:00.000Z'
translationType: human
---

[Fluent Bit](https://fluentbit.io/)에서 이미 로그 데이터를 모니터링하고 있는 경우, Fluent Bit 출력 플러그인을 사용하여 뉴렐릭에서 로그 데이터를 전달하고 보강할 수 있습니다.

Fluent Bit 로그를 뉴렐릭으로 전달하면 로그 데이터에 대한 수집, 처리, 탐색, 쿼리 및 알림 설정 시에 향상된 <InlinePopover type="logs" />기능을 활용할 수 있습니다. 다음과 같은 방법으로 Fluent Bit를 설치할 수 있습니다.

* [쿠버네티스 설치](#k8s-installation)
* [도커 이미지 사용](#helm-docker-image)
* [온 호스트 설치](#on-host-installation)

## 쿠버네티스 설치 [#k8s-installation]

뉴렐릭에는 로그를 뉴렐릭 로그 관리로 전달하기 위한 [Fluent Bit 출력 플러그인](https://github.com/newrelic/newrelic-fluent-bit-output)이 있습니다. 이 플러그인을 독립적으로 실행되는 도커 이미지로 쿠버네티스 클러스터에 설치할 수 있습니다. 그러면 이 플러그인은 쿠버네스트 플러그인, 다른 말로는 DaemonSet의 역할을 수행합니다.

[Helm 차트](https://github.com/newrelic/helm-charts/tree/master)를 사용해 두 가지 방법으로 클러스터에 설치할 수 있습니다.

* 뉴렐릭 안내 설치 사용
* 수동 설치

### 뉴렐릭 안내 설치 사용 [#helm-guided-install]

[`newrelic-logging`](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging) 차트는 독립적으로 작동하지만 [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) 차트의 일부로 설치하는 것을 권장합니다.

이를 설치하는 가장 좋은 방법은 [안내 설치](/install/kubernetes/) 프로세스를 따르는 것입니다. 이 안내 설치는 설치에 필요한 Helm 명령을 생성합니다.

### 수동 설치

Helm을 사용해 수동으로 설치하는 방법도 있지만 권장하지 않습니다. 리포지터리를 설치하려면 다음 명령을 실행합니다.

```bash
    helm repo add newrelic https://helm-charts.newrelic.com
```

리포지토리를 업데이트하려면 다음 명령을 실행합니다.

```bash
    helm repo update newrelic
```

<Callout variant="tip">
  `newrelic-logging` Helm 차트에서 [지원되는 설정 모범 사례](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#supported-configuration-parameters)를 참조하십시오.
</Callout>

제거하려면 [쿠버네티스 통합 제거](/docs/kubernetes-pixie/kubernetes-integration/installation/uninstall-kubernetes/)를 참조하십시오.

## 도커 이미지 사용 [#helm-docker-image]

맞춤화된 쿠버네티스 통합이 있는 경우, [`newrelic-fluent-bit-output`](https://github.com/newrelic/newrelic-fluent-bit-output)과 함께 제공되는 [도커](https://hub.docker.com/r/newrelic/newrelic-fluentbit-output) 이미지를 사용하는 것이 좋습니다. 또는 도커 이미지를 기본 이미지로 사용하고 맞춤 설정 파일을 계층화할 수도 있습니다.

## 온 호스트 설치 [#on-host-installation]

Fluent Bit 플러그인의 온 호스트 설치는 다음 단계를 따릅니다.

1. GitHub에서 뉴렐릭의 [Fluent Bit 플러그인](https://github.com/newrelic/newrelic-fluent-bit-output)을 엽니다.

2. 리포지토리 페이지에서 [리포지토리를 복제하거나 다운로드](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)합니다.

3. 다음 명령을 실행해 플러그인을 빌드합니다.

```sh
cd newrelic-fluent-bit-output && make all
```

4. `fluent-bit` 데몬이 액세스할 수 있는 위치에 `out_newrelic.so` 또는 `out_newrelic_winXX.dll`을 저장합니다.

<Callout variant="tip">
  플러그인을 직접 컴파일하길 원치 않는 경우 [GitHub 리포지터리의 릴리스 페이지](https://github.com/newrelic/newrelic-fluent-bit-output/releases)에서 사전 컴파일된 버전을 다운로드할 수 있습니다.
</Callout>

### Fluent Bit 플러그인 업그레이드 [#upgrade-plugin]

Fluent Bit 플러그인을 업그레이드하기 전에 다음 NRQL 쿼리를 실행하여 시스템에서 사용 중인 출력 플러그인의 현재 버전을 찾으십시오.

```sql
FROM K8sContainerSample 
SELECT latest(containerImage) 
WHERE podName like '%newrelic-logging%' 
FACET clusterName
```

<Callout variant="caution">
  [보안 취약점(CVE-2024-4323)](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-4323)은 Fluent Bit 출력 플러그인 버전 1.16.0-1.19.2에 영향을 미칩니다. 이 버전 중 하나를 사용하고 있다면 2.0.0 이상 버전으로 업데이트해야 합니다. 이에 대한 자세한 내용은 보안 공지 [NR24-01 - Fluent Bit](/docs/security/new-relic-security/security-bulletins/security-bulletin-nr24-01/)를 참조하십시오.
</Callout>

업데이트하려면 설치 지침을 따르거나 [GitHub 리포지터리](https://github.com/newrelic/newrelic-fluent-bit-output/releases)에서 최신 사전 컴파일 버전을 다운로드하십시오.

## Fluent Bit 플러그인 구성 [#configure-plugin]

Fluent Bit는 뉴렐릭 플러그인과 뉴렐릭<InlinePopover type="licenseKey" />의 위치를 알아야 뉴렐릭에 데이터를 출력할 수 있습니다.

<Callout variant="important">
  구성 파일을 수정할 때 공백에 주의하십시오. 들여쓰기에 4개의 공백을 사용하고 키와 값 사이에 1개의 공백을 사용해야 합니다.
</Callout>

다음 단계에 따라 Fluent Bit 플러그인을 설정합니다.

1. 플러그인 디렉토리에서 `plugins.conf` 파일을 찾거나 생성합니다.

2. `plugins.conf` 파일에서 `fluent-bit.conf` 파일 옆에 `out_newrelic.so`에 대한 참조를 추가합니다.

```ini
[PLUGINS]
    Path /PATH/TO/newrelic-fluent-bit-output/out_newrelic.so
```

3. `fluent-bit.conf` 파일에서 `service` 블록 아래에 다음 줄을 추가합니다.

```ini
[SERVICE]
    # This is the main configuration block for fluent bit.
    # Ensure the follow line exists somewhere in the SERVICE block
    Plugins_File plugins.conf
```

4. `fluent-bit.conf` 파일 하단에 다음을 추가하여 입력, 필터, 출력 섹션을 설정합니다. 자리표시자 텍스트를 <InlinePopover type="licenseKey" />로 바꿉니다.

   ```ini
   [INPUT]
       Name tail
       Tag  my.tag
       Path /PATH/TO/YOUR/LOG/FILE
       
   # If you have multiple sources, just add another [INPUT] section like this:
   [INPUT] 
       Name tail 
       Tag  my.other.tag 
       Path /PATH/TO/SOME/OTHER/LOG/FILE 

   # Having multiple [FILTER] blocks allows you to control the flow of changes as they read top down. 
   [FILTER]
       Name modify
       # Here we only match on one tag, my.tag, defined in the [INPUT] section earlier
       Match  my.tag
       # Below, we're renaming the host.cpu attribute to CPU
       Rename host.cpu CPU

   [FILTER]
       Name   record_modifier
       # Match on all tags, *, so all logs get decorated per the Record clauses below. Record adds attributes + their values to each record.
       Match  *
       # Adding a logtype attribute ensures your logs will be automatically parsed by our built-in parsing rules
       Record logtype nginx
       # Add the server's hostname to all logs generated
       Record hostname ${HOSTNAME}

   [OUTPUT]
       Name       newrelic
       Match      *
       licenseKey YOUR_LICENSE_KEY
   ```

5. Fluent Bit 인스턴스를 다시 시작합니다. 다음 명령을 실행합니다.

   ```sh
   fluent-bit -c /PATH/TO/fluent-bit.conf
   ```

## Fluent Bit 플러그인 테스트 [#test-plugin]

Fluent Bit 플러그인이 로그 파일에서 입력을 수신하는지 테스트하려면:

1. 다음 명령을 실행하여 테스트 로그 메시지를 로그 파일에 추가합니다.

   ```sh
   echo "test message" >> /PATH/TO/YOUR/LOG/FILE
   ```

2. [로그 UI](https://one.newrelic.com/launcher/logger.log-launcher) 에서 `test message`를 검색합니다.

더 많은 옵션은 [Fluent Bit 문서의 `modify` 필터](https://docs.fluentbit.io/manual/pipeline/filters/modify)를 참조하십시오. [인프라 에이전트를 사용해 로그를 전달하는 방법](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/#automatically-inserted-attributes)에 대한 문서도 참조할 수 있습니다.

## 선택 사항: 플러그인 속성 구성 [#instrument-plugin]

Fluent Bit 플러그인을 설치하고 [설정](#configure-plugin)한 후에는 다음 속성을 사용해 플러그인이 데이터를 뉴렐릭으로 보내는 방법을 설정할 수 있습니다.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        키
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `licenseKey`
      </td>

      <td>
        <InlinePopover type="licenseKey" />. `licenseKey` (<DNT>**recommended**</DNT>) 또는 `apiKey` 중 하나를 사용하고 둘 다 사용할 수는 없습니다. 기본: `none`
      </td>
    </tr>

    <tr>
      <td>
        `maxBufferSize`
      </td>

      <td>
        페이로드가 보낸 최대 크기(바이트)입니다. 기본: `256000`
      </td>
    </tr>

    <tr>
      <td>
        `maxRecords`
      </td>

      <td>
        한 번에 보낼 최대 레코드 수입니다. 기본: `1024`
      </td>
    </tr>

    <tr>
      <td>
        `apiKey`
      </td>

      <td>
        <DNT>**Deprecated.**</DNT> 뉴렐릭 [인사이트 삽입 키](/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api#register)를 사용하지만 `licenseKey` 속성을 사용하는 것이 좋습니다. `licenseKey` 또는 `apiKey` 중 하나만 사용하고 둘 다 사용하지는 마십시오.
      </td>
    </tr>

    <tr>
      <td>
        `endpoint`
      </td>

      <td>
        기본값은 `https://log-api.newrelic.com/log/v1`입니다. EU 키를 사용하는 경우의 설정: `https://log-api.eu.newrelic.com/log/v1`
      </td>
    </tr>
  </tbody>
</table>

## 로그 데이터 확인 [#find-data]

모든 것이 올바르게 설정되었고 뉴렐릭이 데이터를 수집하기 시작하면 다음 두 곳 모두에서 로그 데이터가 표시됩니다.

* [로그 UI](https://one.newrelic.com/launcher/logger.log-launcher)

* [NRQL 쿼리](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-query-data/) 실행을 위한 뉴렐릭 툴. 예를 들어, 다음과 같은 쿼리를 실행할 수 있습니다.

```sql
SELECT * 
FROM Log
```

로그 관리 기능을 활성화한 후에도 데이터가 수집되지 않으면 표준 로그 [문제 해결 절차](/docs/logs/troubleshooting/no-log-data-appears-ui/)를 따르십시오.

## 다음 단계는? [#what-next]

[로그 UI](/docs/logs/ui-data/use-logs-ui/)를 사용하여 플랫폼 전반에 걸쳐 로깅 데이터를 탐색합니다.

* [문맥적 로그](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) 기능으로 로그를 전달하여 애플리케이션과 플랫폼 성능 데이터에 대한 더 깊은 가시성을 얻을 수 있습니다.

* [알림](/docs/alerts/create-alert/create-alert-condition/alert-conditions/)을 설정합니다.

* [데이터를 쿼리](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/)하고 [대시보드를 만듭니다](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## 로그 전달 비활성화 [#disable]

로그 전달 기능을 비활성화하려면 [Fluent Bit 문서](https://fluentbit.io/)의 표준 절차를 참고하십시오. 뉴렐릭에서는 다른 작업을 수행할 필요가 없습니다.