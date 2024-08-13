---
title: 네트워크 흐름 수집에 데이터가 누락되었습니다.
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: Troubleshooting collection issues for network flows.
freshnessValidatedDate: '2023-11-02T00:00:00.000Z'
translationType: machine
---

## 문제 [#problem]

`ktranslate` 네트워크 모니터링 에이전트를 설치한 후 네트워크 흐름 원격 분석을 수집하는 데 문제가 발생합니다.

## 배경 [#background]

`ktranslate` 패킷 페이로드를 편집하지 않고 수집된 원시 흐름 원격 측정을 반환합니다. 기본적으로 지원되는 [여러 유형의 흐름이](/docs/network-performance-monitoring/setup-performance-monitoring/network-flow-monitoring/#supported-network-flow-data-types) 있으며 가장 눈에 띄는 것은 [NetFlow v5](https://www.cisco.com/c/en/us/td/docs/net_mgmt/netflow_collection_engine/3-6/user/guide/format.html), [NetFlow v9](https://datatracker.ietf.org/doc/html/rfc3954), [sFlow](https://sflow.org/sflow_version_5.txt) 및 [IPFIX](https://datatracker.ietf.org/doc/html/rfc7011) 입니다.

<SideBySide>
  <Side>
    모든 네트워크 흐름 원격 측정은 [KFlow 이벤트 유형](/docs/network-performance-monitoring/setup-performance-monitoring/network-flow-monitoring/#find-your-metrics) 에 저장됩니다. NRQL에서 직접 쿼리할 수 있습니다. 이 이벤트 유형이 없으면 계정이 데이터를 수신하지 않는다는 의미입니다.
  </Side>

  <Side>
    ```sql
    FROM KFlow 
    SELECT *
    ```
  </Side>
</SideBySide>

## 해결책 [#solution]

<CollapserGroup>
  <Collapser
    id="ktranslate-configuration"
    title="네트워크 모니터링 에이전트의 흐름 구성"
  >
    `ktranslate` 에이전트는 런타임 시 [-nf.source](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-runtime-options) 인수로 구성된 한 가지 유형의 흐름 템플릿만 수집할 수 있으며 기본값은 `auto` 입니다. 이는 `ktranslate` `NetFlow v5` 의 템플릿을 예상하도록 지시합니다 | `NetFlow v9` \| `sFlow` \| `IPFIX` 이므로 패킷을 변환할 수 있습니다. 일반적인 문제는 특정 유형의 흐름 템플릿을 수신하도록 `ktranslate` 설정한 다음 다른 유형을 에이전트로 내보내는 것입니다. `auto` 에서 다루지 않는 템플릿에 대해서는 별도의 컨테이너를 실행해야 합니다.

    여기서 또 다른 일반적인 실수는 여러 포트를 대상으로 지정하면서 흐름 원격 분석을 `ktranslate` 에이전트로 내보내는 것입니다. 이 시나리오에서는 런타임 시 [-nf.port](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-runtime-options) 에 대해 각각 다른 값으로 설정된 여러 `ktranslate` 에이전트를 실행해야 합니다(기본값은 `9995`). 특정 포트를 대상으로 지정하려면 소스 네트워크 장치에서 흐름 내보내기 구성을 업데이트해야 할 수도 있습니다.
  </Collapser>

  <Collapser
    id="device-configuration"
    title="네트워크 장치의 흐름 구성"
  >
    각 공급업체에는 네트워크 흐름 내보내기를 위해 장치를 올바르게 구성하는 방법에 대한 자체 문서가 있습니다. `NetFlow v9`, `IPFIX` 및 `sFlow` 와 같은 고급 버전에는 관리자가 수집하고 내보내는 필드를 사용자 정의할 수 있는 옵션이 있습니다. 이를 편집하면 `ktranslate` 에 의한 흐름 레코드를 올바르게 처리하는 기능이 효과적으로 비활성화될 수 있습니다.

    다음 필드는 <DNT>**required**</DNT> 입니다.

    <CollapserGroup>
      <Collapser
        id="required-record-group"
        title="모든 기록에 필수"
      >
        * 프로토콜(필드 유형 번호: `4`) - 계층 4 프로토콜
        * 소스 주소(필드 유형 번호: `8`, `27`) - 소스 IPv4 또는 IPv6 주소
        * 소스 포트(필드 유형 번호: `7`) - 소스 TCP/UDP 포트
        * 대상 주소(필드 유형 번호: `12`, `28`) - 대상 IPv4 또는 IPv6 주소
        * 대상 포트(필드 유형 번호: `11`) - 대상 TCP/UDP 포트
      </Collapser>

      <Collapser
        id="required-interfaces-group"
        title="필수 인터페이스 필드(하나 이상)"
      >
        * 인터페이스 수신(필드 유형 번호: `10`) - 수신 인터페이스에 대한 SNMP 인덱스
        * 인터페이스 전송(필드 유형 번호: `14`) - 송신 인터페이스에 대한 SNMP 인덱스
      </Collapser>

      <Collapser
        id="required-bytes-group"
        title="필수 바이트 필드(최소 1개)"
      >
        * 델타 바이트(필드 유형 번호: `1`) - 델타 바이트
        * 총 바이트(필드 유형 번호: `85`) - 총 바이트
        * 출력 바이트(필드 유형 번호: `23`) - 출력 바이트
        * 개시자 옥텟(필드 유형 번호: `231`) - 개시자 바이트
        * 응답자 옥텟(필드 유형 번호: `232`) - 응답자 바이트
      </Collapser>

      <Collapser
        id="required-packets-group"
        title="필수 패킷 필드(하나 이상)"
      >
        * 델타 패킷(필드 유형 번호: `2`) - 델타 패킷
        * 총 패킷(필드 유형 번호: `86`) - 총 패킷
        * 송신 패킷(필드 유형 번호: `24`) - 송신 패킷
        * 개시자 패킷(필드 유형 번호: `298`) - 개시자 패킷
        * 응답자 패킷(필드 유형 번호: `299`) - 응답자 패킷
      </Collapser>

      <Collapser
        id="required-routing-group"
        title="필수 라우팅 필드(최소 1개)"
      >
        * ToS(필드 유형 번호: `5`) - 서비스 유형
        * 소스 AS(필드 유형 번호: `16`) - 소스 BGP 자율 시스템 번호
        * 대상 AS(필드 유형 번호: `17`) - 대상 BGP 자율 시스템 번호
        * 피어 소스 AS(필드 유형 번호: `129`) - 피어 소스 BGP 자율 시스템 번호
        * 피어 대상 AS(필드 유형 번호: `128`) - 피어 대상 BGP 자율 시스템 번호
      </Collapser>

      <Callout variant="tip">
        `ktranslate` 레코드가 명시적으로 `egress` 값을 사용하지 않는 한 모든 흐름 레코드의 기본값은 `Direction: ingress` 입니다. 이는 `Direction` 필드 없이 흐름 레코드가 전송되는 다양한 상황을 다룹니다.
      </Callout>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="tcpdump-confirmation"
    title="흐름 수신 확인"
  >
    각 공급업체에는 장치 CLI/UI를 통해 흐름 내보내기 카운터를 관찰하는 방법에 대한 자체 문서가 있습니다. 장치에서 카운터 증가가 부족하다는 것은 흐름 내보내기가 장치에서 올바르게 구성되지 않았음을 나타냅니다.

    `ktranslate` 에 대한 Docker 컨테이너와 Linux 서비스 배포 옵션은 모두 호스트 네트워크를 사용하여 매핑된 포트에서 데이터를 수신합니다. 흐름 레코드가 호스트에서 수신되고 있는지 확인하려면 [tcpdump](https://www.tcpdump.org) 유틸리티를 사용하여 나중에 [Wireshark](https://www.wireshark.org/) 에서 조사할 수 있는 패킷 캡처(`.pcap`) 파일을 생성할 수 있습니다.

    이 명령을 실행하면 호스트의 모든 인터페이스에서 들어오는 모든 패킷을 캡처하고 현재 디렉터리의 파일에 출력을 쓰도록 `tcpdump` 설정됩니다.

    ```shell
    sudo tcpdump -s 0 -i any -w dump_capture.pcap
    ```

    [tcpdump](https://www.tcpdump.org/manpages/tcpdump.1.html) 에 여러 인수를 추가할 수 있습니다. 여기서 가장 중요한 항목은 나중에 분석에 사용할 수 있는 출력 파일입니다. 결과를 `STDOUT` 에 출력하면 현재 목적에 따라 제한된 가치가 생성됩니다.

    이 파일이 있으면 다음 섹션에서는 결과를 분석하는 방법을 보여줍니다.

    <Callout variant="tip">
      발견된 가장 일반적인 문제 중 하나는 소스 네트워크 장치에서 대상 `ktranslate` 호스트로의 패킷을 차단하는 네트워크 구성/방화벽 규칙입니다. `tcpdump` 유틸리티로 결과를 얻지 못한 경우 문제 해결을 시작하는 가장 좋은 방법은 네트워크 규칙과 `iptables` 구성을 확인하는 것입니다.
    </Callout>
  </Collapser>

  <Collapser
    id="improperly-formatted-flow-records"
    title="Wireshark로 흐름 기록 템플릿 식별"
  >
    [Wireshark를](https://www.wireshark.org/) 사용하여 패킷 캡처 파일을 검사하려면 다음 단계를 따르세요.

    <Steps>
      <Step>
        Wireshark 애플리케이션을 시작하고 패킷 캡처 파일을 엽니다.
      </Step>

      <Step>
        초기 보기에는 캡처된 모든 패킷이 표시되지만 흐름 분석을 위해서는 패킷을 올바르게 디코딩하도록 애플리케이션을 설정해야 합니다. 메뉴를 사용하여 `Analyze > Decode As...` 으로 이동하면 새 팝업이 열립니다.
      </Step>

      <Step>
        팝업에서 왼쪽 하단에 있는 더하기(`+`) 아이콘을 클릭하면 패널에 새 행이 추가됩니다. `Current` 열의 초기 옵션은 `(none)` 입니다. 이를 클릭하여 드롭다운 메뉴를 연 다음 `NetFlow` 및 `IPFIX` 에 대해 `CFLOW` 선택하거나 `sFlow` 패킷에 대해 `sFlow` 선택합니다. 기본 UI로 돌아가려면 오른쪽 하단의 `OK` 클릭하세요.

        <Callout variant="tip">
          이 메뉴는 대소문자를 구분하여 알파벳순으로 정렬되어 있습니다. `sFlow` 옵션은 목록 맨 아래에 있습니다.
        </Callout>
      </Step>

      <Step>
        기본 UI에서 `CFLOW` | 이제 `sFlow` 패킷을 `Protocol` 열에서 식별하여 확인합니다. 디스플레이 필터 `(cflow or sflow)` 를 적용하면 캡처 파일에 있을 수 있는 다른 패킷으로부터 필요한 패킷이 자동으로 격리됩니다.

        다음 섹션에서는 각 패킷 유형을 검사하는 방법을 간략하게 설명합니다.

        <CollapserGroup>
          <Collapser
            id="netflow-ipfix-analysis"
            title="NetFlow 및 IPFIX 패킷 분석"
          >
            `NetFlow` `IPFIX` 프로토콜은 관리자가 표준 옵션 목록에서 수집할 필드를 식별할 수 있는 템플릿 접근 방식을 사용합니다. `ktranslate` 에 대한 [필수 필드가](#device-configuration) 캡처되고 있는지 확인하기 위해 이러한 패킷 분석이 수행됩니다.

            Wireshark의 기본 UI에서 단일 `CFLOW` 패킷을 클릭하여 선택한 다음 `FlowSet n` 섹션을 확장합니다. 여기서 `n` 는 패킷의 단일 흐름 레코드를 식별하는 정수입니다. 그런 다음 `Flow n` 하위 그룹을 확장하여 이 흐름 레코드의 필드를 분석합니다.

            <Callout variant="tip">
              또한 패킷의 `Template Frame` 링크를 클릭하면 이 장치의 모든 흐름에 대한 템플릿이 포함된 캡처된 패킷으로 이동할 수 있습니다.
            </Callout>
          </Collapser>

          <Collapser
            id="sflow-analysis"
            title="sFlow 패킷 분석"
          >
            `sFlow` 과 기존 `NetFlow/IPFIX` 프로토콜 간의 프로토콜 차이로 인해 분석할 필드가 다릅니다.

            Wireshark의 기본 UI에서 단일 `sFlow` 패킷을 클릭하여 선택한 다음 `InMon sFlow` 섹션을 확장합니다. 다음 필드가 있어야 합니다.

            <table>
              <thead>
                <tr>
                  <th style={{ width: "350px" }}>
                    들
                  </th>

                  <th>
                    설명
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    데이터그램 버전
                  </td>

                  <td>
                    이 sFlow 패킷의 버전입니다.
                  </td>
                </tr>

                <tr>
                  <td>
                    에이전트 주소 유형
                  </td>

                  <td>
                    IPv4(1) 또는 IPv6(2)
                  </td>
                </tr>

                <tr>
                  <td>
                    대리인 주소
                  </td>

                  <td>
                    흐름을 내보내는 IP 주소입니다. 여기에서 흐름 내보내기를 구성했습니다.
                  </td>
                </tr>

                <tr>
                  <td>
                    하위 에이전트 ID
                  </td>

                  <td>
                    sFlow v5에서는 여러 내보내기 프로세스를 실행할 수 있습니다. 이는 고유 식별자입니다.
                  </td>
                </tr>

                <tr>
                  <td>
                    시퀀스 번호
                  </td>

                  <td>
                    에이전트 장치에서 보낸 sFlow 패킷 수입니다.
                  </td>
                </tr>

                <tr>
                  <td>
                    시스템 가동 시간
                  </td>

                  <td>
                    에이전트 장치가 마지막으로 재부팅된 이후의 시간입니다.
                  </td>
                </tr>

                <tr>
                  <td>
                    샘플 수
                  </td>

                  <td>
                    현재 패킷에 포함된 sFlow 샘플 수입니다.
                  </td>
                </tr>
              </tbody>
            </table>

            `Flow sample` 이라는 하위 그룹을 확장하면 다음과 같은 추가 필드가 표시됩니다.

            <table>
              <thead>
                <tr>
                  <th style={{ width: "350px" }}>
                    들
                  </th>

                  <th>
                    설명
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    기업
                  </td>

                  <td>
                    이 필드는 관리자가 sFlow 내보내기를 구성할 때 선택적으로 활성화할 수 있는 사용자 정의 sFlow 엔터프라이즈 구성에 주석을 답니다. (기본적으로 `0` )
                  </td>
                </tr>

                <tr>
                  <td>
                    sFlow 샘플 유형
                  </td>

                  <td>
                    이는 기업이 sFlow 내보내기를 사용자 정의할 때 사용되는 샘플 유형에 대한 지정입니다. [sFlow 문서](http://www.sflow.org/developers/diagrams/sFlowV5Sample.pdf) 에서 정의를 찾을 수 있습니다.
                  </td>
                </tr>

                <tr>
                  <td>
                    샘플 길이
                  </td>

                  <td>
                    샘플의 길이(바이트)입니다.
                  </td>
                </tr>

                <tr>
                  <td>
                    시퀀스 번호
                  </td>

                  <td>
                    에이전트가 샘플을 채취할 때마다 카운터 값이 증가합니다.
                  </td>
                </tr>

                <tr>
                  <td>
                    샘플링 속도
                  </td>

                  <td>
                    `X` 개의 패킷 중 1개가 샘플링됩니다.
                  </td>
                </tr>

                <tr>
                  <td>
                    샘플 풀
                  </td>

                  <td>
                    실제 샘플링된 패킷을 포함하여 샘플링될 수 있었던 가능한 총 패킷 수입니다.
                  </td>
                </tr>

                <tr>
                  <td>
                    삭제된 패킷
                  </td>

                  <td>
                    리소스 제약으로 인해 삭제된 패킷 수입니다.
                  </td>
                </tr>

                <tr>
                  <td>
                    입력 인터페이스
                  </td>

                  <td>
                    패킷이 도착한 인터페이스의 SNMP ifIndex입니다.
                  </td>
                </tr>

                <tr>
                  <td>
                    흐름 기록
                  </td>

                  <td>
                    이 샘플에 포함된 샘플링된 레코드 수입니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </Collapser>
        </CollapserGroup>
      </Step>
    </Steps>

    <Callout variant="tip">
      `Decode as...` 단계 없이 동일한 패턴을 적용하여 syslog 및 SNMP 트랩 데이터 수신을 검증할 수 있습니다.
    </Callout>
  </Collapser>
</CollapserGroup>
