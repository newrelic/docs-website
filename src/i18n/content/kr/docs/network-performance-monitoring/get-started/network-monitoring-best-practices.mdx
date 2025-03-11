---
title: 네트워크 모니터링 모범 사례
tags:
  - Network monitoring
  - Best practices
metaDescription: Review best practices for network monitoring.
freshnessValidatedDate: '2024-01-18T00:00:00.000Z'
translationType: machine
---

네트워크 모니터링에서, 뉴렐릭은 에이전트를 사용해 네트워크 텔레메트리 데이터를 수집합니다. 이 데이터는 네트워크 성능을 모니터링하고 병목 현상을 식별하며 문제를 해결하는 데 사용할 수 있습니다. 시스템 아키텍처 및 배포를 기반으로 한 네트워크 모니터링 에이전트 배포의 모범 사례를 알아보십시오.

## 배포 고려 사항 [#deployment-considerations]

이 가이드에서는 다음 요구 사항을 충족하는 일반적인 네트워킹 아키텍처를 참조합니다.

* SNMP 폴링 및 SNMP 트랩 수집
* 네트워크 장치에서 Syslog 수집
* NetFlow v5, NetFlow v9, IPFIX 및 sFlow 프로토콜에서 네트워크 흐름 수집
* 지리적으로 멀리 떨어져 있는 여러 사이트 지원

## 아키텍처 고려 사항 [#architectural-considerations]

### 에이전트의 작업

각 에이전트의 작업에 따라 네트워크 배포의 설계가 결정됩니다. 따라야 할 몇 가지 기본 규칙은 다음과 같습니다.

* SNMP 데이터를 수집하는 에이전트는 기본적으로 SNMP 트랩을 수신할 수도 있습니다.
* Syslog 데이터를 수신하는 에이전트는 자체적으로 실행되어야 합니다.
* 네트워크 흐름 데이터를 수신하는 에이전트는 수집되는 흐름 템플릿 유형에 따라 격리되어야 할 수도 있습니다.

### 네트워크 흐름 및 Syslog 에이전트 [#network-flow-and-syslog-agents]

네트워크 흐름 및 Syslog 에이전트를 사용하는 경우 커스텀 구성 파일이 필요하지 않습니다. 모든 에이전트 설정은 런타임 시 플래그를 통해 전달되므로 에이전트의 기본 설정은 올바르게 작동합니다.

그러나 장치 섹션에 입력이 포함된 구성 파일을 제공하지 않으면, 뉴렐릭 API로 전송된 결과는 해당 패킷의 IP 주소에서 DNS를 통해 확인된 [`device_name`](/docs/network-performance-monitoring/advanced/advanced-config/#snmp-base-yml-template)을 사용합니다. 런타임에 커스텀 DNS 서버 위치를 제공할 수 있지만, 태그 지정을 완전히 제어하려면 장치 섹션에서 [`flow_only`](/docs/network-performance-monitoring/advanced/advanced-config/#flow_only-attribute) 설정을 `true`로 설정하여 고유한 입력을 제공해야 합니다. 이는 뉴렐릭 API로 전송된 이름이 동일한 장치를 폴링하는 SNMP에서 전송된 이름과 일치하도록 만들기 위해 관리자들이 일반적으로 수행하는 작업입니다.

### 지리학 [#geography]

현대의 네트워크에서는 우선순위가 낮기 때문에, SNMP 및 ICMP(ping) 프로토콜은 왕복 시간의 레이턴시가 늘어나면 영향을 받을 수 있습니다. 시간 초과로 인한 폴링 실패를 방지하려면 대상 장치 가까이에 에이전트를 생성해야 합니다.

### 컴퓨팅 규모 [#compute-scale]

개별 에이전트는 일반적으로 매우 작은 호스트에서 호스팅되며, 최소 요구 사항은 [KTranslate 컨테이너 요구 사항](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-requirements)에 설명되어 있습니다. 그러나 폴링이 많은 시나리오에서는 호스트의 CPU를 확장해야 할 수도 있습니다. 에이전트를 더 큰 CPU 공간으로 확장하는 주된 이유는 작업에 제공되는 로드의 양 때문입니다. 이러한 상황에서는 일반적으로 비용에 영향을 미칠 수 있는 호스트의 전체 크기를 늘리는 대신 여러 에이전트를 실행하여 부하 분산을 수행하는 것이 좋습니다.

### 일반적인 아키텍처 예 [#common-architecture]

<SideBySide>
  <Side>
    이 다이어그램은 다음과 같은 샘플 네트워킹 아키텍처를 반영합니다.

    * 각 지리적 위치에는 데이터를 수집하고 뉴렐릭으로 전달하는 데 사용되는 자체 로컬 에이전트가 있습니다.

      * <DNT>
          **DC_01 (AMER)**
        </DNT>

        :

        * 뉴욕시의 DC_01 위치를 지원하는 호스트 1개에 에이전트 3개

        * 컨테이너는 SNMP 폴링, NetFlow v5 수집 및 Syslog 수집을 처리합니다.

        * <DNT>
            **Consideration**
          </DNT>

          : 이 호스트에는 클래스 B 프라이빗 서브넷(/16)이 포함되어 있습니다. 작업을 완료할 수 있는 시간을 확보하려면 검색 범위, 목표를 관리 가능한 서브넷 크기로 분할해야 합니다.

      * <DNT>
          **OFFICE_01 (APJ)**
        </DNT>

        :

        * 호주 시드니의 OFFICE_01 위치를 지원하는 호스트 1개에 에이전트 1개
        * 컨테이너는 /24 서브넷에 대한 검색을 통해 SNMP 폴링 및 SNMP 트랩 수집을 처리합니다.

      * <DNT>
          **DC_02 (EMEA)**
        </DNT>

        :

        * 아일랜드 더블린의 DC_02 위치를 지원하는 호스트 1개에 에이전트 3개

        * 컨테이너는 NetFlow v9, IPFIX 및 sFlow 컬렉션을 처리하며 각각은 호스트의 서로 다른 수신 포트를 대상으로 합니다.

        * <DNT>
            **Consideration**
          </DNT>

          : 이 호스트에는 훨씬 더 큰 클래스 A 개인 서브넷(/8)이 있지만 이 위치에서는 검색할 필요가 없으므로 작업을 확장할 필요가 없습니다. 초당 흐름에 따라 향후 추가 에이전트로 확장해야 할 수도 있습니다.
  </Side>

  <Side>
    <img
      title="Common network architecture diagram"
      alt="Diagram to visualize common network architecture"
      src="/images/network_diagram_common-architecture.webp"
      width="80%"
      height="80%"
    />
  </Side>
</SideBySide>

## 배포 유지 관리 [#maintaining-deployment]

초기 설치 후 다양한 기술을 사용하여 네트워크 모니터링 옵저버빌리티 설치 공간을 유지 관리할 수 있습니다. 여기에는 구성 파일 변경 사항을 Ansible과 같은 도구와 통합하고, 버전 관리를 지원하기 위해 아키텍처 주변에 GitOps 파이프라인을 구축하는 것과 외부 팀이 검토를 위해 변경 사항을 제출할 수 있는 "게스트" 옵션이 포함됩니다.

지속적인 유지 관리의 가장 일반적인 요구 사항은 타격, 목표 장치 목록을 정확하게 유지하는 것입니다. 이는 세 가지 주요 검색 방법을 사용하여 수행할 수 있습니다.

<Tabs>
  <TabsBar>
    <TabsBarItem id="auto-discovery">
      자동 검색
    </TabsBarItem>

    <TabsBarItem id="man-discovery">
      수동 검색
    </TabsBarItem>

    <TabsBarItem id="man-device-add">
      수동 장치 추가
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="auto-discovery">
      자동 검색은 KTranslate 에이전트가 IP 주소 및/또는 범위의 대상 목록을 스캔하고 활동성 프로브를 수행한 다음, MIB-2 시스템 MIB의 기본 SNMP 워크를 실행하여 장치를 알려진 SNMP 프로필과 일치시키는 데 사용하는 프로세스입니다.

      에이전트에는 반복되는 SNMP 검색 이벤트의 일정을 작성할 수 있는 에이전트 런타임 플래그(`-snmp_discovery_min` 및 `-snmp_discovery_on_start`)가 내장되어 있습니다. 이는 설정 파일의 `discovery` 섹션에 있는 쿠션, 목표에 대한 검색 작업을 자동화한 다음 새 장치로 파일을 자동으로 업데이트하고 변경 사항을 적용하도록 서비스를 새로 고칩니다.

      ### 장점

      * 알려진 IP 범위 및 SNMP 커뮤니티 문자열을 자동으로 검색합니다.

      * 각 장치에 대한 적절한 SNMP 프로필과의 상관 관계를 자동으로 구축합니다.

      * 구성 파일을 손상시킬 수 있는 부적절한 설정을 방지하기 위한 안전 메커니즘이 마련되어 있습니다.

        ### 단점

      * IP 주소의 기존 대상 목록과 구성 파일의 `discovery` 섹션에서 SNMP 커뮤니티 문자열/V3 인증이 필요합니다.

      * 대규모 서브넷은 시간 초과가 발생할 위험이 있습니다. (/16 이하를 권장)

      * 구성 파일에서 장치별로 `user_tags`를 사용하는 팀은 새 장치의 태그가 업데이트 되도록 추가 작업을 수행해야 합니다.

        ### 예시

        이는 뉴렐릭 UI에서 안내 설치를 사용하는 경우 발견되는 기본 구성 패턴입니다.

        ```yml
        devices: {}
        trap:
          listen: '0.0.0.0:1620'
        discovery:
          cidrs:
              - 192.168.0.0/24
          ignore_list: []
          debug: false
          ports:
              - 161
          default_communities:
              - public
          default_v3: null
          add_devices: true
          add_mibs: true
          threads: 4
          replace_devices: true
          check_all_ips: true
          use_snmp_v1: false
        global:
          poll_time_sec: 300
          mib_profile_dir: /etc/ktranslate/profiles
          mibs_enabled:
              - IF-MIB
          timeout_ms: 3000
          retries: 0
        ```

        연결된 Docker 실행 명령은 다음과 같으며 `$UNIQUE_NAME`, `$YOUR_NR_LICENSE_KEY`, `$YOUR_NR_ACCOUNT_ID`를 대체합니다.

        ```shell
        docker run -d --name ktranslate-$UNIQUE_NAME --restart unless-stopped --pull=always -p 162:1620/udp \
          -v `pwd`/snmp-base.yaml:/snmp-base.yaml \
          -e NEW_RELIC_API_KEY=$YOUR_NR_LICENSE_KEY \
        kentik/ktranslate:v2 \
          -snmp /snmp-base.yaml \
          -nr_account_id=$YOUR_NR_ACCOUNT_ID \
          -metrics=jchf \
          -tee_logs=true \
          -service_name=$UNIQUE_NAME \
          -snmp_discovery_on_start=true \
          -snmp_discovery_min=180 \
          nr1.snmp
        ```
    </TabsPageItem>

    <TabsPageItem id="man-discovery">
      수동 검색은 자동 검색과 동일한 메커니즘을 사용하지만 더 많은 통제 역량을 제공합니다. 수동 검색을 사용하면 맞춤화된 에이전트를 즉석에서 실행할 수 있습니다. 원할 때마다 실행할 수 있고 필요에 따라 결과를 검토하고 조작할 수 있다는 의미입니다. 이는 태그 지정이 널리 사용되는 환경이나 네트워크에 새 장치를 추가하는 중앙화된 팀이 상당한 통제력을 가진 환경에서 선호되는 방법입니다. 이렇게 하면 시간이 많이 걸리고 방해가 될 수 있는 전체 서브넷 검색의 필요성이 줄어듭니다.

      ### 장점

      * 태그 장식을 포함해 대상과 결과를 완벽하게 제어할 수 있습니다.

      * 모니터링 범위에 포함되지 않는 장치를 방지하는 데 도움이 됩니다.

      * 각 장치에 대한 적절한 SNMP 프로필과의 상관 관계를 자동으로 구축합니다.

      * 구성 파일을 손상시킬 수 있는 부적절한 설정을 방지하기 위한 안전 메커니즘이 마련되어 있습니다.

        ### 단점

      * 관리자는 네트워크/SNMP 연결이 제대로 테스트되었는지 확인하기 위해 필요에 따라 프로덕션 에이전트가 실행되는 동일한 호스트에서 에이전트를 실행해야 합니다.

      * 검색 결과를 프로덕션 구성 파일로 이동하는 것은 새 설정을 로드하기 위해 프로덕션 에이전트를 다시 시작해야 하는 수동 프로세스입니다.

        ### 예시

        이 검색 방법은 KTranslate 에이전트의 원래 배포 옵션을 따릅니다. 개괄적인 검색 프로세스는 다음과 같습니다.

      1. 최신 버전의 에이전트를 로컬 머신으로 가져옵니다.
      2. 이미지의 샘플 `snmp-base.yaml` 구성 파일을 로컬 머신에 복사합니다.
      3. 구성 파일을 수정해 `cidrs` 및 `default_communities`에 필요한 설정으로 `discovery` 섹션을 업데이트합니다.
      4. 임시 검색 작업을 실행하는 단기 에이전트를 소개합니다.
      5. 구성 파일에서 야기된 장치에 필요한 변경 사항을 수정합니다.
      6. 검색 설정 파일의 새 장치를 프로덕션 에이전트 설정 파일에 복사합니다.
      7. 새 설정이 적용되도록 프로덕션 에이전트를 다시 시작합니다.

         이 방법을 사용하려면, [수동 컨테이너 설정](/docs/network-performance-monitoring/setup-performance-monitoring/snmp-performance-monitoring/#manual-container-setup) 단계를 따르십시오.
    </TabsPageItem>

    <TabsPageItem id="man-device-add">
      마지막 옵션은 전체 검색 프로세스를 건너뛰고 프로덕션 구성 파일에 직접 장치를 수동으로 추가하는 것입니다. 그러나 표준 검색 옵션이 장치를 해당 프로필에 자동으로 매치시키고 구성 파일의 형식이 올바른지 확인하기 때문에 이 패턴이 사용되는 경우는 매우 드뭅니다.

      ### 장점

      * 장치 구성 및 태그 장식을 완벽하게 제어할 수 있습니다.

        ### 단점

      * 설정이 잘못 구성될 위험이 중간 정도됩니다. 이 방법을 사용하려면 장치의 SysOID(시스템 개체 식별자)와 장치가 대상으로 삼을 프로필을 알고 있어야 활성화하려는 MIB를 식별할 수 있습니다. (이 모든 것이 검색 단계에서 자동화됩니다.)

      * 새 설정이 적용되도록 프로덕션 에이전트를 다시 시작해야 합니다.

        ### 예시

        다음은 APC UPS를 성공적으로 모니터링하는 데 필요한 장치 설정의 예입니다.

        ```yml
        devices:
          ups_snmpv2c__10.10.0.201:
            device_name: ups_snmpv2c
            device_ip: 10.10.0.201
            snmp_comm: public
            oid: .1.3.6.1.4.1.318.1.3.27
            mib_profile: apc_ups.yml
            provider: kentik-ups
            user_tags:
              owning_team: dc_ops
        ...
        global:
        ...
          mibs_enabled:
            - IF-MIB
            - PowerNet-MIB_UPS
            - UPS-MIB
        ```

        <Callout variant="important">
          `global.mibs_enabled` MIB 폴링을 시작하려면 업데이트해야 합니다. 장치를 추가할 때 이 설정이 [연결된 SNMP 프로필](https://github.com/kentik/snmp-profiles/tree/main/profiles/kentik_snmp) 전체에서 발견되는 고유한 MIB 이름 목록으로 업데이트되는지 확인해야 합니다.
        </Callout>

        필수 설정은 [장치](/docs/network-performance-monitoring/advanced/advanced-config/#devices) 및 [전역적 블록](/docs/network-performance-monitoring/advanced/advanced-config/#global)에 대한 설명서에 자세히 설명되어 있습니다.
    </TabsPageItem>
  </TabsPages>
</Tabs>
