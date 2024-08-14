---
title: 합성 작업 관리자 구성
tags:
  - synthetics
  - Synthetic monitoring
  - Private locations
metaDescription: Customize your New Relic synthetics job manager.
freshnessValidatedDate: never
translationType: machine
---

이 문서는 다음 방법을 보여줌으로써 [신세틱스 작업 관리자를](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager) 구성하는 과정을 안내합니다.

* [환경 변수를](#environment-variables) 사용하여 신세틱스 작업 관리자를 구성하세요.
* [스크립트 API](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests/) 또는 [스크립트](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers) 브라우저 모니터에 [대한 사용자 정의 모듈을 설정합니다.](#custom-modules)
* 설정에 [사용자 정의 변수를](#user-defined-vars) 제공하세요.

## 환경변수를 이용한 설정 [#environment-variables]

환경 변수를 사용하면 특정 환경 및 기능 요구 사항을 충족하도록 합성 작업 관리자 구성을 미세 조정할 수 있습니다.

<CollapserGroup>
  <Collapser
    id="docker-env-config"
    title="도커 환경 구성"
  >
    변수는 시작 시 `-e, --env` 인수를 사용하여 제공됩니다.

    다음 표는 합성 작업 관리자가 지원하는 모든 환경 변수를 보여줍니다. `PRIVATE_LOCATION_KEY` 은 필수이고 다른 모든 변수는 선택 사항입니다.

    <table>
      <thead>
        <tr>
          <th>
            이름
          </th>

          <th>
            설명
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `PRIVATE_LOCATION_KEY`
          </td>

          <td>
            <DNT>**REQUIRED.**</DNT> 로케이션 로케이션 키는 사냥 로케이션 목록에서 찾을 수 있습니다.
          </td>
        </tr>

        <tr>
          <td>
            `DOCKER_API_VERSION`
          </td>

          <td>
            형식: `"vX.Y"` 지정된 Docker 서비스와 함께 사용할 API 버전입니다.

            기본: `v1.35.`
          </td>
        </tr>

        <tr>
          <td>
            `DOCKER_HOST`
          </td>

          <td>
            합성 작업 관리자가 지정된 `DOCKER_HOST` 을(를) 가리킵니다. 없는 경우 기본값은 `/var/run/docker.sock.`
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_ENDPOINT`
          </td>

          <td>
            미국 기반 계정의 경우 엔드포인트는 다음과 같습니다. `https://synthetics-horde.nr-data.net.`

            [EU 기반](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center#partner-hierarchy) 계정의 경우 엔드포인트는 다음과 같습니다. `https://synthetics-horde.eu01.nr-data.net/`

            모니터를 제공하기 위해 합성 작업 관리자가 적절한 엔드포인트에 연결할 수 있는지 확인하십시오.
          </td>
        </tr>

        <tr>
          <td>
            `DOCKER_REGISTRY`
          </td>

          <td>
            런타임 이미지가 호스팅되는 Docker 레지스트리 도메인입니다. 이를 사용하여 `docker.io` 을 기본값으로 재정의합니다.
          </td>
        </tr>

        <tr>
          <td>
            `DOCKER_REPOSITORY`
          </td>

          <td>
            런타임 이미지가 호스팅되는 Docker 리포지토리/조직입니다. 이를 사용하여 `newrelic` 을 기본값으로 재정의합니다.
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_HOST`
          </td>

          <td>
            Horde 통신에 사용되는 프록시 서버 호스트입니다. 형식: `"localhost"` .
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_PORT`
          </td>

          <td>
            Horde 통신에 사용되는 프록시 서버 포트입니다. 형식: `8888` .
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_USERNAME`
          </td>

          <td>
            Horde 통신에 사용되는 프록시 서버 사용자 이름입니다. 형식: `"username"` .
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_PW`
          </td>

          <td>
            Horde 통신에 사용되는 프록시 서버 비밀번호입니다. 형식: `"password"` .
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_ACCEPT_SELF_SIGNED_CERT`
          </td>

          <td>
            Horde 통신에 사용되는 프록시 서버 연결에 대해 자체 서명된 프록시 인증서를 수락하시겠습니까? 허용되는 값: `true`
          </td>
        </tr>

        <tr>
          <td>
            `CHECK_TIMEOUT`
          </td>

          <td>
            모니터 검사를 실행할 수 있는 최대 시간(초)입니다. 이 값은 0초(제외)에서 900초(포함) 사이의 정수여야 합니다(예: 1초에서 15분).

            기본값: 180초
          </td>
        </tr>

        <tr>
          <td>
            `LOG_LEVEL`
          </td>

          <td>
            기본: `INFO.`

            추가 옵션: `WARN`, `ERROR`, `DEBUG`
          </td>
        </tr>

        <tr>
          <td>
            `HEAVYWEIGHT_WORKERS`
          </td>

          <td>
            한 번에 실행할 수 있는 동시 중량 작업(브라우저/스크립트 브라우저 및 스크립트 API) 수입니다.

            기본값: 사용 가능한 CPU - 1.
          </td>
        </tr>

        <tr>
          <td>
            `DESIRED_RUNTIMES`
          </td>

          <td>
            특정 런타임 이미지를 실행하는 데 사용될 수 있는 기타입니다. 형식: \['newrelic/신세틱스-ping-runtime:latest','newrelic/신세틱스-node-API-runtime:latest','newrelic/신세틱스-node-브라우저-runtime:latest']

            기본값: 모든 최신 런타임.
          </td>
        </tr>

        <tr>
          <td>
            `VSE_PASSPHRASE`
          </td>

          <td>
            설정된 경우 <DNT>**verified script execution**</DNT> 활성화하고 이 값을 <DNT>**passphrase**</DNT> 로 사용합니다.
          </td>
        </tr>

        <tr>
          <td>
            `USER_DEFINED_VARIABLES`
          </td>

          <td>
            로컬에서 호스팅되는 사용자 정의 키 값 쌍 집합입니다.
          </td>
        </tr>

        <tr>
          <td>
            `ENABLE_WASM`
          </td>

          <td>
            설정된 경우 노드 브라우저 런타임을 위한 웹어셈블리를 활성화합니다. 웹어셈블리를 사용하려면 신세틱스 작업 관리자 최소 버전이 release-367 이상, 노드 브라우저 런타임 버전이 2.3.21 이상이어야 합니다.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="kubernetes-env-config"
    title="Kubernetes 환경 구성"
  >
    변수는 시작 시 `--set` 인수를 사용하여 제공됩니다.

    다음 목록은 합성 작업 관리자가 지원하는 모든 환경 변수를 보여줍니다. `synthetics.privateLocationKey` 은 필수이고 다른 모든 변수는 선택 사항입니다.

    많은 추가 고급 설정을 사용할 수 있으며 [Helm 차트 README](https://github.com/newrelic/helm-charts/blob/master/charts/synthetics-job-manager/README.md) 에 완전히 문서화되어 있습니다.

    <table>
      <thead>
        <tr>
          <th>
            이름
          </th>

          <th>
            설명
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `synthetics.privateLocationKey`
          </td>

          <td>
            <DNT>**REQUIRED if `synthetics.privateLocationKeySecretName` is not set**</DNT>. 레지스터 로케이션 웹페이지에서 찾을 수 있는 [레지스터 로케이션의 키입니다](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager/#private-location-key) .
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.privateLocationKeySecretName`
          </td>

          <td>
            <DNT>**REQUIRED if `synthetics.privateLocationKey` is not set**</DNT>. 신세틱스 파트 로케이션과 연결된 인증 키가 포함된 `privateLocationKey` 키가 포함된 Kubernetes 비밀의 이름입니다.
          </td>
        </tr>

        <tr>
          <td>
            `replicaCount`
          </td>

          <td>
            설치와 함께 유지 관리할 복제본 수

            기본: `1.`
          </td>
        </tr>

        <tr>
          <td>
            `imagePullSecrets`
          </td>

          <td>
            지정된 컨테이너 레지스트리에서 이미지를 가져오는 데 사용되는 비밀 개체의 이름입니다.
          </td>
        </tr>

        <tr>
          <td>
            `fullnameOverride`
          </td>

          <td>
            배포에 사용되는 이름 재정의로 기본값을 대체합니다.
          </td>
        </tr>

        <tr>
          <td>
            `appVersionOverride`
          </td>

          <td>
            [chart.yml](https://github.com/newrelic/helm-charts/blob/master/charts/synthetics-job-manager/Chart.yaml) 에 지정된 버전 대신 사용할 합성 작업 관리자의 릴리스 버전입니다.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.logLevel`
          </td>

          <td>
            기본: `INFO.`

            추가 옵션: `WARN`, `ERROR`
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.hordeApiEndpoint`
          </td>

          <td>
            미국 기반 계정의 경우 엔드포인트는 다음과 같습니다. `https://synthetics-horde.nr-data.net.`

            [EU 기반](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center#partner-hierarchy) 계정의 경우 엔드포인트는 다음과 같습니다. `https://synthetics-horde.eu01.nr-data.net/`

            모니터를 제공하기 위해 합성 작업 관리자가 적절한 엔드포인트에 연결할 수 있는지 확인하십시오.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.minionDockerRunnerRegistryEndpoint`
          </td>

          <td>
            Minion Runner 이미지가 호스팅되는 Docker 레지스트리 및 조직입니다. 이를 사용하여 `quay.io/newrelic` 을 기본값으로 재정의합니다(예: `docker.io/newrelic` ).
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.vsePassphrase`
          </td>

          <td>
            설정된 경우 <DNT>**verified script execution**</DNT> 활성화하고 이 값을 <DNT>**passphrase**</DNT> 로 사용합니다.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.vsePassphraseSecretName`
          </td>

          <td>
            설정된 경우 확인된 스크립트 실행을 활성화하고 이 값을 사용하여 `vsePassphrase` 라는 키가 있는 Kubernetes 비밀에서 암호를 검색합니다.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.enableWasm`
          </td>

          <td>
            설정된 경우 노드 브라우저 런타임을 위한 웹어셈블리를 활성화합니다. 웹어셈블리를 사용하려면 신세틱스 작업 관리자 최소 버전이 release-367 이상, 노드 브라우저 런타임 버전이 2.3.21 이상이어야 합니다.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.apiProxyHost`
          </td>

          <td>
            호드 통신에 사용되는 프록시 서버입니다. 형식: `"host"` .
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.apiProxyPort`
          </td>

          <td>
            Horde 통신에 사용되는 프록시 서버 포트입니다. 형식: `port` .
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.hordeApiProxySelfSignedCert`
          </td>

          <td>
            Horde 통신에 프록시 서버를 사용할 때 자체 서명된 인증서를 수락합니다. 허용되는 값: `true` .
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.hordeApiProxyUsername`
          </td>

          <td>
            Horde 통신을 위한 프록시 서버 사용자 이름입니다. 체재: `"username"`
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.hordeApiProxyPw`
          </td>

          <td>
            Horde 통신을 위한 프록시 서버 비밀번호입니다. 형식: `"password"` .
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.userDefinedVariables.userDefinedJson`
          </td>

          <td>
            사용자 정의 변수의 JSON 문자열입니다. 사용자는 스크립트에서 이러한 변수에 액세스할 수 있습니다. 형식: `'{"key":"value","key2":"value2"}'`.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.userDefinedVariables.userDefinedFile`
          </td>

          <td>
            사용자 정의 변수가 포함된 JSON 파일에 대한 사용자 로컬 경로입니다. 이는 `--set-file` 통해 전달되며 값 파일에 설정할 수 없습니다.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.userDefinedVariables.userDefinedPath`
          </td>

          <td>
            user_define_variables.json 파일에 대한 사용자가 제공한 PertantVolume의 경로입니다.이 변수가 채워지면 사용자는 PertantVolume 또는 PertantVolumeClaim을 제공해야 합니다.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.persistence.existingClaimName`
          </td>

          <td>
            볼륨을 탑재하는 경우 사용자는 클러스터에 이미 존재하는 PertantVolumeClaim의 이름을 제공할 수 있습니다. 해당 PertantVolume이 존재한다고 가정합니다.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.persistence.existingVolumeName`
          </td>

          <td>
            볼륨을 마운트하고 PertantVolumeClaim을 제공하지 않는 경우 사용자는 최소한 PertantVolume 이름을 제공해야 합니다. Helm은 PertantVolumeClaim을 생성합니다.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.persistence.storageClass`
          </td>

          <td>
            생성된 PertantVolumeClaim에 대한 StorageClass의 이름입니다. 이는 기존 PV의 StorageClassName과 일치해야 합니다. 공급자가 아닌 경우 Kubernetes는 기본 스토리지 클래스(있는 경우)를 사용합니다.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.persistence.size`
          </td>

          <td>
            생성된 PertantVolumeClaim의 볼륨 크기입니다. 형식: `10Gi`. 기본 2Gi.
          </td>
        </tr>

        <tr>
          <td>
            `global.checkTimeout`
          </td>

          <td>
            모니터 검사를 실행할 수 있는 최대 시간(초)입니다. 이 값은 0초(제외)에서 900초(포함) 사이의 정수여야 합니다(예: 1초에서 15분).

            기본값: 180초
          </td>
        </tr>

        <tr>
          <td>
            `image.repository`
          </td>

          <td>
            가져올 컨테이너입니다.

            기본: `docker.io/newrelic/synthetics-job-runner`
          </td>
        </tr>

        <tr>
          <td>
            `image.pullPolicy`
          </td>

          <td>
            끌어오기 정책.

            기본: `IfNotPresent`
          </td>
        </tr>

        <tr>
          <td>
            `podSecurityContext`
          </td>

          <td>
            합성 작업 관리자 팟(Pod)에 대한 사용자 정의 보안 컨텍스트를 설정하십시오.
          </td>
        </tr>

        <tr>
          <td>
            `ping-runtime.enabled`
          </td>

          <td>
            영구 핑 런타임을 배포해야 하는지 여부입니다. ping 모니터를 사용하지 않는 경우 비활성화할 수 있습니다.

            기본: `true`
          </td>
        </tr>

        <tr>
          <td>
            `ping-runtime.replicaCount`
          </td>

          <td>
            배포할 ping 런타임 컨테이너의 수입니다. ping 모니터링 요구 사항에 따라 배포를 확장하려면 replicaCount를 늘립니다.

            기본: `1`
          </td>
        </tr>

        <tr>
          <td>
            `ping-runtime.image.repository`
          </td>

          <td>
            ping 런타임을 위해 가져올 컨테이너 이미지입니다.

            기본: `docker.io/newrelic/synthetics-ping-runtime`
          </td>
        </tr>

        <tr>
          <td>
            `ping-runtime.image.pullPolicy`
          </td>

          <td>
            ping-runtime 컨테이너에 대한 pull 정책입니다.

            기본: `IfNotPresent`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.enabled`
          </td>

          <td>
            Node.js API 런타임을 배포해야 하는지 여부입니다. 스크립팅된 API 모니터를 사용하지 않는 경우 비활성화할 수 있습니다.

            기본: `true`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.parallelism`
          </td>

          <td>
            배포할 Node.js API 런타임 `CronJobs` 의 수입니다. 언제든지 실행할 최대 동시 Node.js API 작업 수입니다. [추가 세부정보](#kubernetes-sizing) .

            기본: `1`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.completions`
          </td>

          <td>
            분당 완료할 Node.js API 런타임 `CronJobs` 의 수입니다. 처리량을 향상시키려면 병렬 처리와 함께 이 설정을 늘리십시오. 병렬 처리가 증가할 때마다 이 값을 늘려야 하며 완료는 항상 병렬 처리보다 크거나 같아야 합니다. . API 런타임 작업이 실행되지 않는 기간이 있는 경우 이 설정을 늘리십시오. [추가 세부정보](#kubernetes-sizing) .

            기본: `6`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.image.repository`
          </td>

          <td>
            Node.js API 런타임에 대해 가져올 컨테이너 이미지입니다.

            기본: `docker.io/newrelic/synthetics-node-api-runtime`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.image.pullPolicy`
          </td>

          <td>
            Node.js API 런타임 컨테이너에 대한 풀 정책입니다.

            기본: `IfNotPresent`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.enabled`
          </td>

          <td>
            Node.js 브라우저 런타임을 배포해야 하는지 여부입니다. 단순 또는 스크립팅된 브라우저 모니터를 사용하지 않는 경우 비활성화할 수 있습니다.

            기본: `true`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.parallelism`
          </td>

          <td>
            배포할 Chrome 브라우저 런타임 `CronJobs` 의 수입니다. 언제든지 실행할 최대 동시 Chrome 브라우저 작업 수입니다. [추가 세부정보](#kubernetes-sizing) .

            기본: `1`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.completions`
          </td>

          <td>
            분당 완료할 Chrome 브라우저 런타임 `CronJobs` 의 수입니다. 처리량을 향상시키려면 병렬 처리와 함께 이 설정을 늘리십시오. 병렬 처리가 증가할 때마다 이 값을 늘려야 하며 완료는 항상 병렬 처리보다 크거나 같아야 합니다. 브라우저 런타임 작업이 실행되지 않는 기간이 있는 경우 이 설정을 늘리십시오. [추가 세부정보](#kubernetes-sizing) .

            기본: `6`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.image.repository`
          </td>

          <td>
            Node.js 브라우저 런타임에 대해 가져올 컨테이너 이미지입니다.

            기본: `docker.io/newrelic/synthetics-node-browser-runtime`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.image.pullPolicy`
          </td>

          <td>
            Node.js 브라우저 런타임 컨테이너에 대한 풀 정책입니다.

            기본: `IfNotPresent`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## 스크립트 모니터에 대한 사용자 정의 변수 [#user-defined-vars]

개인 신세틱스 작업 관리자를 사용하면 스크립트된 모니터에 대한 환경 변수를 구성할 수 있습니다. 이러한 변수는 SJM에서 로컬로 관리되며 `$env.USER_DEFINED_VARIABLES` 통해 액세스할 수 있습니다. 사용자 정의 변수는 두 가지 방법으로 설정할 수 있습니다. 등장에서 JSON 파일을 마운트하거나 SJM에 환경 변수를 제공할 수 있습니다. 둘 다 제공되는 경우 SJM은 환경에서 제공되는 값만 사용합니다.

<CollapserGroup>
  <Collapser
    id="user-file-example"
    title="JSON 파일 마운트"
  >
    사용자는 JSON 형식의 파일을 생성하고 해당 파일이 있는 볼륨을 SJM 컨테이너의 지정된 바구니, 목표 경로에 마운트할 수 있습니다.

    파일에는 읽기 권한이 있어야 하며 JSON 형식의 맵이 포함되어 있어야 합니다. 사용자 정의 변수 파일의 예:

    ```
    {
    		      "KEY": "VALUE",
    		      "user_name": "MINION",
    		      "my_password": "PASSW0RD123",
    		      "my_URL": "https://newrelic.com/",
    		      "ETC": "ETC"
    		    }
    ```

    파일을 호스트의 소스 디렉터리에 배치합니다. SJM은 파일 이름이 user_define_variables.json이 될 것으로 예상합니다.

    도커 예시:

    예상되는 목표 디렉토리는 다음과 같습니다: `/var/lib/newrelic/synthetics/variables/`

    ```
    docker run ... -v /variables:/var/lib/newrelic/synthetics/variables:rw ...
    ```

    쿠버네티스 예시:

    사용자는 Kubernetes 의 SJM 패드에 파일을 제공할 때 두 가지 옵션이 있습니다. 그들은 아마도:

    1. 로컬 파일을 전달합니다.
    2. user_define_variables.json을 포함하는 PertantVolume을 제공합니다.

    ### 로컬 파일 전달

    이 옵션은 ConfigMap Kubernetes 리소스를 생성하고 이를 SJM 패드에 탑재합니다.

    helm install newrelic/synthetics-job-manager ... --set-file "synthetics.userDefinedVariables.userDefinedFile=\[local-path]/user_defined_variables.json" ...

    ```

     ### Mount a PersistentVolume
    This option requires the user to provide a PersistentVolume that includes the user_defined_variables.json file or a PersistentVolumeClaim to the same. For more details on helm chart installation using a PersistentVolume, follow the instructions at [permanent data storage](/docs/synthetics/synthetic-monitoring/private-locations/job-manager-configuration#permanent-data-storage).
	
    Once the user has prepared a PersistentVolume as described below, launch the SJM, setting the path where the user_defined_variables.json file is located and setting any other `synthetics.persistence` variables as necessary.

    ```

    helm install newrelic/synthetics-job-manger ... --set synthetics.userDefinedVariables.userDefinedPath="variables"

    ```

    ```
  </Collapser>

  <Collapser
    id="passing-env-var"
    title="환경 변수로 전달"
  >
    변수는 환경 변수를 통해 해당 컨테이너 시스템에 전달될 수 있습니다. docker 예:

    `-e` 플래그를 사용하여 `USER_DEFINED_VARIABLES` 이라는 환경 변수를 설정하고 여기에 JSON 형식의 맵 문자열 값을 제공합니다.

    ```
    docker run ... -e USER_DEFINED_VARIABLES='{"key":"value","name":"sjm"}' ...
    ```

    Kubernetes 예: `--set-literal` 플래그를 사용하여 JSON 형식 문자열을 전달합니다.

    ```
    helm install newrelic/synthetics-job-manager ... --set-literal synthetics.userDefinedVariables.userDefinedJson='{"key":"value","name":"sjm"}' ...
    ```
  </Collapser>
</CollapserGroup>

### 스크립트에서 사용자 정의 환경 변수에 액세스 [#env-vars-scripts]

구성된 사용자 정의 환경 변수를 참조하려면 예약된 `$env.USER_DEFINED_VARIABLES` 다음에 점 표기법으로 지정된 변수 이름을 사용하십시오.

예를 들어, `$env.USER_DEFINED_VARIABLES.MY_VARIABLE`

<Callout variant="caution">
  사용자 정의 환경 변수는 로그에서 삭제되지 않습니다. 민감한 정보에는 [보안 자격 증명](/docs/synthetics/new-relic-synthetics/using-monitors/secure-credentials-store-credentials-information-scripted-browsers) 기능을 사용하는 것이 좋습니다.
</Callout>

## 커스텀 노드 모듈 [#custom-modules]

맞춤형 노드 모듈은 분당호출수와 SJM 모두에서 제공됩니다. 이를 통해 사용자 정의된 [노드 모듈](https://docs.npmjs.com/about-packages-and-modules) 세트를 생성하고 이를 신세틱 모델링을 위한 스크립트 모니터(스크립트 API 및 스크립트 브라우저)에서 사용할 수 있습니다.

모듈을 설정하려면:

1. 루트 폴더에 [npm 공식 지침에](https://docs.npmjs.com/files/package.json) 따라 `package.json` 파일이 포함된 디렉터리를 만듭니다. SJM은 package.json에 나열된 의존성/종속성을 설치합니다. `dependencies` 필드. 이러한 의존성/종속성은 개인 신세틱스 작업 관리자에서 모니터를 실행할 때 사용할 수 있습니다. 아래의 예를 참조하세요.

<CollapserGroup>
  <Collapser
    id="example-module-directory"
    title="사용자 정의 모듈 디렉토리"
  >
    이 예에서 사용자 정의 모듈 디렉토리는 다음 구조로 사용됩니다.

    ```
    /example-custom-modules-dir/
          ├── counter
          │   ├── index.js
          │   └── package.json
          └── package.json            ⇦ the only mandatory file
    ```

    `package.json` 는 `dependencies` 로컬 모듈(예: `counter`)과 호스팅된 모듈(예: `smallest` 버전 `1.0.1`)로 정의합니다.

    ```
    {
          "name": "custom-modules",
          "version": "1.0.0",           ⇦ optional
          "description": "example custom modules directory", ⇦ optional
          "dependencies": {
            "smallest": "1.0.1",          ⇦ hosted module
            "counter": "file:./counter" ⇦ local module
          }
        }
    ```
  </Collapser>
</CollapserGroup>

2. 사용자 정의 모듈 디렉터리와 `package.json`을 생성한 후 이를 docker 및 Kubernetes 용 SJM에 적용합니다.

   <CollapserGroup>
     <Collapser
       id="docker"
       title="도커"
     >
       docker 의 경우 SJM이 `/var/lib/newrelic/synthetics/modules`에 디렉터리를 마운트합니다. 예를 들어:

       ```
       docker run ... -v /example-custom-modules-dir:/var/lib/newrelic/synthetics/modules:rw ...
       ```
     </Collapser>

     <Collapser
       id="kubernetes"
       title="Kubernetes"
     >
       다음을 완료:

       1. SJM을 설치하는 동안 퍼즐줄이나 YAML 파일에서 `persistence.customModules` 설정 값을 설정합니다. 값은 사용자 정의 모듈 파일이 존재하는 신세틱스 작업 관리자 영구 볼륨의 하위 경로를 지정해야 합니다. 예를 들어:

          ```
          helm install ... --set persistence.customModules=<custom-modules-subpath> ...
          ```

       2. Minion Pod에서 사용자 정의 모듈 디렉토리를 사용할 수 있는지 확인하십시오. `kubectl cp` 을 한 가지 방법으로 사용하여 호스트에서 Minion으로 디렉토리를 복사할 수 있습니다. 예를 들어:

          ```
          kubectl cp /example-custom-modules-dir <namespace>/<pod_name>:/var/lib/newrelic/synthetics/modules
          ```
     </Collapser>
   </CollapserGroup>

3. 모듈이 올바르게 설치되었는지 또는 오류가 발생했는지 확인하려면 [SJM 로그](/docs/synthetics/new-relic-synthetics/private-locations/job-manager-maintenance-monitoring#monitor-docker-logs) 에서 `"... Initialization of Custom Modules ..."` 섹션을 검토하세요. 이러한 로그에는 npm 설치 로그가 포함되어 설치 프로세스 및 발생한 잠재적 오류에 관한 정보를 제공합니다.

이제 이 개인 위치로 보내는 모니터의 [스크립트](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers) 에 `"require('smallest');"` 을(를) 추가할 수 있습니다.

### 맞춤 모듈에 대해 `package.json` 변경 [#change-package-json]

로컬 및 호스팅 모듈 외에도 [Node.js 모듈](/docs/synthetics/new-relic-synthetics/scripting-monitors/import-nodejs-modules) 도 활용할 수 있습니다. SJM에서 사용하는 사용자 정의 모듈을 업데이트하려면 `package.json` 파일을 변경하고 SJM을 다시 시작하세요. 재부팅 프로세스 동안 SJM은 설정 변경을 인식하고 자동으로 정리 및 재설치 작업을 수행하여 업데이트된 모듈이 적용되도록 합니다.

<Callout variant="caution">
  로컬 모듈: `package.json` 에는 모든 로컬 모듈이 포함될 수 있지만 이러한 모듈은 맞춤 모듈 디렉터리 아래의 트리 내부에 있어야 합니다. 트리 외부에 저장하면 초기화 프로세스가 실패하고 SJM을 시작한 후 [docker 로그](/docs/synthetics/new-relic-synthetics/private-locations/job-manager-maintenance-monitoring#monitor-docker-logs) 에 오류 메시지가 표시됩니다.
</Callout>

## 영구 데이터 저장 [#permanent-data-storage]

사용자는 영구 데이터 저장소를 사용하여 `user_defined_variables.json` 파일을 제공하거나 사용자 정의 노드 모듈을 지원하기를 원할 수 있습니다(비공개 신세틱스 작업 관리자에게는 아직 사용할 수 없음).

### 도커

Docker에서 영구 데이터 저장소를 설정하려면:

1. 작업 관리자를 실행하는 호스트에 디렉터리를 만듭니다. 이것이 소스 디렉터리입니다.
2. Job Manager에서 소스 디렉터리를 뻐, 목표 디렉터리 `/var/lib/newrelic/synthetics` 에 마운트합니다.

예시:

```
		docker run ... -v /sjm-volume:/var/lib/newrelic/synthetics:rw ...
```

### Kubernetes

Kubernetes에 영구 데이터 저장소를 설정하기 위해 사용자에게는 두 가지 옵션이 있습니다.

1. 기존 PertantVolume(PV)에 대해 기존 PertantVolumeClaim(PVC)을 제공하고 `synthetics.persistence.existingClaimName` 구성 값을 설정합니다.

예시:

```
		helm install ... --set synthetics.persistence.existingClaimName=sjm-claim ...
```

2. 기존 PertantVolume(PV) 이름을 제공하고 `synthetics.persistence.existingVolumeName` 구성 값을 설정합니다. Helm은 사용자를 위해 PVC를 생성합니다.

사용자는 선택적으로 다음 값을 설정할 수도 있습니다.

* `synthetics.persistence.storageClass`: 기존 PV의 스토리지 클래스입니다. 제공되지 않으면 Kubernetes는 기본 스토리지 클래스를 사용합니다.
* `synthetics.persistence.size`: 청구의 크기입니다. 설정하지 않은 경우 기본값은 현재 2Gi입니다.

```
		helm install ... --set synthetics.persistence.existingVolumeName=sjm-volume --set synthetics.persistence.storageClass=standard ...
```

## Kubernetes 및 Docker에 대한 크기 조정 고려 사항 [#kubernetes-sizing]

<Callout variant="tip">
  Docker 특정 크기 고려 사항은 곧 제공될 예정입니다.
</Callout>

대규모 환경에서 작업하는 경우 합성 모니터를 효율적으로 실행하기 위한 최소 요구 사항을 충족하도록 작업 관리자 구성을 사용자 지정해야 할 수 있습니다. 다음을 포함하여 많은 요소가 합성 작업 관리자 배포의 크기 요구 사항에 영향을 줄 수 있습니다.

* 예상 사용량에 따라 모든 런타임이 필요한 경우
* 모니터 유형(ping, 단순 또는 스크립트 브라우저, 스크립트 API)별 분당 작업 수
* 작업 시간(약 3분에 시간 초과되는 작업 포함)
* 작업 실패 횟수입니다. 작업 실패의 경우 모니터가 내장된 3/3 재시도 논리를 제공하는 데 실패하기 시작할 때 자동 재시도가 예약됩니다. 이러한 추가 작업은 합성 작업 관리자의 처리량 요구 사항에 추가됩니다.

아래 나열된 크기 조정 구성 설정 외에도 동일한 개인 위치 키로 추가 합성 작업 관리자를 배포하여 여러 환경에서 작업 부하를 분산할 수 있습니다.

## Kubernetes [#k8s]

Kubernetes 합성 작업 관리자가 사용하는 각 런타임은 [helm 차트](https://github.com/newrelic/helm-charts/tree/master/charts/synthetics-job-manager) 의 값을 설정하여 독립적으로 크기를 조정할 수 있습니다.

기본값 `1` 에서 `ping-runtime.replicaCount` 설정을 늘려 핑 모니터 로드를 실행하는 데 도움이 되도록 추가 핑 런타임을 시작할 수 있습니다.

Node.js API 및 Node.js 브라우저 런타임은 `parallelism` 및 `completions` 설정의 조합을 사용하여 독립적으로 크기가 조정됩니다. 이러한 설정에 대한 이상적인 구성은 고객 요구 사항에 따라 달라집니다.

`parallelism` 설정은 특정 런타임의 Pod가 동시에 실행되는 수를 제어합니다. `parallelism` 설정은 컨테이너화된 프라이빗 미니언(CPM)의 `synthetics.heavyWorkers` 구성과 동일합니다. Kubernetes 클러스터에 [리소스 요청 및 제한 값을](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager/#kubernetes-requirements) 기반으로 이 수의 Pod를 실행하는 데 사용할 수 있는 충분한 리소스가 있는지 확인하세요.

`completions` 설정은 `CronJob` 가 해당 런타임에 대해 다른 Kubernetes 작업을 시작하기 전에 완료해야 하는 특정 런타임의 포드 수를 제어합니다. Kubernetes 작업(대문자 J)과 합성 모니터 작업의 차이점을 확인하세요. 효율성을 높이려면 `completions` `parallelism` 값의 6-10배로 설정해야 합니다. 이는 Kubernetes 작업이 모든 `completions` 가) 완료될 때까지 기다릴 때 `parallelism` 개 미만의 포드가 실행될 수 있는 "완료가 거의 끝나가는" 비효율성을 최소화하는 데 도움이 될 수 있습니다.

`completions` 가 1보다 크면 Kubernetes 작업에 정의된 모든 완료(예: 6/6 완료)가 충족될 때까지 '완료됨' 상태의 Pod가 `kubectl get pods -n YOUR_NAMESPACE` 출력에 계속 표시됩니다. Pod의 상태가 Completed 또는 Failed이면 노드에서 리소스가 해제됩니다.

5분(`kubectl get jobs -n YOUR_NAMESPACE`)의 Kubernetes 작업 기간은 포드를 완료하는 데 걸리는 시간과 분당 실행해야 하는 합성 작업 수(작업 속도)의 가변성을 설명하기 위한 보수적인 목표입니다. 다음 방정식은 각 런타임에 대한 `completions` 및 `parallelism` 의 시작점으로 사용될 수 있습니다. 개인 위치 대기열 증가에 대한 관찰을 기반으로 조정이 필요할 수 있습니다.

```m
completions = 300 / avg job duration (s)
parallelism = synthetics jobs per 5 minutes / completions
```

런타임마다 합성 작업 기간과 속도가 다를 수 있습니다. 다음 쿼리를 사용하여 개인 위치의 평균 기간과 요금을 얻을 수 있습니다.

```sql
# non-ping average job duration by runtime type
FROM SyntheticCheck SELECT average(duration) AS 'avg job duration' WHERE type != 'SIMPLE' AND location = 'YOUR_PRIVATE_LOCATION' FACET type SINCE 1 hour ago

# non-ping jobs per minute by runtime type
FROM SyntheticCheck SELECT rate(uniqueCount(id), 5 minutes) AS 'jobs per 5 minutes' WHERE type != 'SIMPLE' AND location = 'YOUR_PRIVATE_LOCATION' FACET type SINCE 1 hour ago
```

<Callout variant="tip">
  위 쿼리는 현재 결과를 기반으로 합니다. 개인 위치에 결과가 없거나 작업 관리자가 최상의 성능을 발휘하지 못하는 경우 쿼리 결과가 정확하지 않을 수 있습니다. 이 경우 `kubectl get jobs -n YOUR_NAMESPACE` 기간이 5분 이상이고(충분한 완료) 큐가 증가하지 않을 때까지(충분한 병렬 처리) `completions` 및 `parallelism` 에 대해 몇 가지 다른 값을 시도해 보십시오.
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        예시
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `parallelism=1`

        `completions=1`
      </td>

      <td>
        런타임은 분당 1개의 신세틱스 작업을 실행합니다. 1개의 작업이 완료된 후 `CronJob` 설정은 다음 순간에 새 작업을 시작합니다. <DNT>**Throughput will be extremely limited with this configuration.**</DNT>
      </td>
    </tr>

    <tr>
      <td>
        `parallelism=1`

        `completions=6`
      </td>

      <td>
        런타임은 한 번에 1개의 신세틱스 작업을 실행합니다. 작업이 완료되면 새 작업이 즉시 시작됩니다. `completions` 개 설정 작업 수가 완료된 후 `CronJob` 구성은 새 Kubernetes 작업을 시작하고 완료 카운터를 재설정합니다. <DNT>**Throughput will be limited, but slightly better.**</DNT> 단일 장기 실행 신세틱스 작업은 이 유형의 다른 신세틱스 작업 처리를 차단합니다.
      </td>
    </tr>

    <tr>
      <td>
        `parallelism=3`

        `completions=24`
      </td>

      <td>
        런타임은 한 번에 3개의 신세틱스 작업을 실행합니다. 이러한 작업이 완료되면 새 작업이 즉시 시작됩니다. `completions` 개 설정 작업 수가 완료된 후 `CronJob` 구성은 새 Kubernetes 작업을 시작하고 완료 카운터를 재설정합니다. <DNT>**Throughput is much better with this or similar configurations.**</DNT> 단일 장기 실행 신세틱스 작업은 이 유형의 다른 신세틱스 작업 처리에 제한적인 영향을 미칩니다.
      </td>
    </tr>
  </tbody>
</table>

합성 작업을 완료하는 데 시간이 더 오래 걸리면 작업으로 5분을 채우는 데 필요한 완료 횟수가 줄어들지만 더 많은 병렬 포드가 필요합니다. 마찬가지로, 분당 더 많은 합성 작업을 처리해야 하는 경우 더 많은 병렬 포드가 필요합니다. `parallelism` 설정은 분당 실행할 수 있는 합성 작업 수에 직접적인 영향을 미칩니다. 값이 너무 작으면 대기열이 커질 수 있습니다. 값이 너무 크면 노드에 리소스가 제한될 수 있습니다.

`parallelism` 설정이 제대로 작동하여 대기열을 0으로 유지하는 경우 `300 / avg job duration` 에서 계산된 값보다 `completions` 에 더 높은 값을 설정하면 몇 가지 방법으로 효율성을 향상시키는 데 도움이 될 수 있습니다.

* 최소 1분은 최소 CronJob 기간인 합성 작업으로 채워지도록 작업 기간의 가변성을 수용합니다.
* 완료 주기 수를 줄여 최종 작업이 완료될 때까지 다음 완료 세트를 시작할 수 없는 "완료가 거의 끝나가는" 비효율성을 최소화합니다.

`completions` 값이 너무 커서는 안 됩니다. 그렇지 않으면 CronJob에서 다음과 같은 경고 이벤트가 발생합니다.

```
8m40s       Warning   TooManyMissedTimes     cronjob/synthetics-node-browser-runtime                  too many missed start times: 101. Set or decrease .spec.startingDeadlineSeconds or check clock skew
```

<Callout variant="tip">
  뉴렐릭은 귀하가 신세틱스 작업 관리자 파일을 수정한 것에 대해 책임을 지지 않는다는 점을 명심하시기 바랍니다.
</Callout>
