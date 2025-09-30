---
title: SNMP 모니터링 결과에 메트릭이 누락됨
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'SNMP monitoring is working, but expected metrics are missing.'
freshnessValidatedDate: never
translationType: machine
---

## 문제 [#problem]

SNMP 모니터링 중에는 장치에 대해 예상되는 모든 메트릭이 표시되지 않습니다.

## 해결책 [#solution]

다음 NRQL 쿼리를 실행하고 필요에 따라 `$DEVICE_NAME` 바꿔 New Relic에 어떤 측정항목이 있는지 식별합니다.

```sql
FROM Metric SELECT 
  uniques(metricName) 
WHERE instrumentation.provider = 'kentik' 
AND device_name = '$DEVICE_NAME'
SINCE 1 HOUR AGO LIMIT MAX
```

이 쿼리는 지난 한 시간 동안 장치에서 수집된 모든 차원 지표 목록을 제공합니다. 측정항목이 나열되지 않으면 다음 테스트를 시도해야 합니다.

<CollapserGroup>
  <Collapser
    id="verify-device-response"
    title="장치가 대상 OID에 응답하는지 확인"
  >
    `snmp-base.yaml` 구성 파일에 구성한 SNMP 자격 증명을 사용하여 `ktranslate` 에이전트가 실행 중인 호스트에서 [snmpwalk 유틸리티를](/docs/network-performance-monitoring/troubleshooting/snmp-walk) 실행합니다.

    테스트가 실패하면 장치가 수집하려는 OID를 지원하지 않을 가능성이 큽니다. 이는 공급업체가 제어하는 장치 자체의 제한 사항입니다.

    <Callout variant="tip">
      SNMPv3을 사용하는 경우 장치에서 v3 사용자의 구성을 확인하십시오. 대부분의 경우 장치 관리자는 v3 사용자 계정에 대해 MIB에 대한 액세스 권한을 명시적으로 부여해야 합니다.
    </Callout>
  </Collapser>

  <Collapser
    id="verify-listed-profile"
    title="OID가 SNMP 프로필에 나열되어 있는지 확인하세요."
  >
    장치 프로필 자체에 OID가 존재하는지 확인하세요. 프로필에 이미 존재하는 OID에 문제가 있는 것 같으면 [GitHub 문제를 열어](https://github.com/kentik/snmp-profiles/issues/new/choose) 저장소 관리자에게 연락하여 해결 방법을 모색하도록 하세요. 프로필에 OID가 없으면 [풀 요청을 제출하여](https://github.com/kentik/ktranslate/pulls) OID를 추가할 수 있습니다. [SNMP 프로필 설명서](/docs/network-performance-monitoring/advanced/snmp-profiles/#public) 의 단계를 따르십시오.

    <Callout variant="tip">
      차원 측정항목의 `instrumentation.name` 값은 측정항목 컬렉션이 구성된 프로필 파일 이름에 매핑됩니다.
    </Callout>
  </Collapser>

  <Collapser
    id="verify-device-matches"
    title="장치가 올바른 SNMP 프로필과 일치하는지 확인하십시오."
  >
    `snmp-base.yaml` 파일의 `mib_profile` 에 대해 구성된 값이 올바른 프로필 파일 이름과 일치하는지 확인하십시오. 예를 들어:

    ```yaml
    devices:
      deviceOne:
        ...
        mib_profile: cisco-catalyst.yml
        ...
    ```

    필요에 따라 `$DEVICE_NAME` 대체하여 다음 NRQL 쿼리를 사용하여 New Relic에서 이를 확인할 수 있습니다.

    ```sql
    FROM Metric SELECT
      latest(instrumentation.name)
    WHERE instrumentation.provider = 'kentik'
    AND device_name = '$DEVICE_NAME'
    ```

    SNMP 프로필 라이브러리는 지속적으로 업데이트되고 있으며 사용 중인 컨테이너 이미지에 원하는 프로필 설정이 없는 경우가 있습니다. `mib_profile` 이(가) 예상 프로필과 일치하지 않으면 구성 파일을 수동으로 업데이트하거나 새 검색을 실행할 수 있습니다.

    `docker pull kentik/ktranslate:v2` 을 실행하여 변경하기 전에 항상 컨테이너의 최신 이미지를 가져와야 합니다.

    또는 apt-get을 통해 최신 정보를 얻을 수 있습니다.

    ```shell
    curl -s https://packagecloud.io/install/repositories/kentik/ktranslate/script.deb.sh | sudo bash && \
    sudo apt-get install ktranslate
    ```
  </Collapser>

  <Collapser
    id="verify-ktranslate-polling"
    title="KTranslate가 예상대로 장치를 폴링하는지 확인하십시오."
  >
    계정에서 `ktranslate` 가) 기기에서 특정 측정항목을 수집하는 데 문제가 있음을 나타내는 심각도 오류인 `Warn`을 확인하세요.

    로그 UI:

    ```shell
    collector.name:"ktranslate" message:"*OID failed to return results*"
    ```

    NRQL:

    ```sql
    FROM Log SELECT * WHERE `collector.name` = 'ktranslate' AND `message` LIKE '%OID failed to return results%'
    ```

    예상 결과:

    ```
    KTranslate>cisco-7513 OID failed to return results, Metric Name: ipIfStatsHCInOctets, Profile: cisco-asr
    ```

    <Callout variant="tip">
      이 예에서 대상 기기 `cisco-7513` 이(가) `cisco-asr` SNMP 프로필에 있는 `ipIfStatsHCInOctets` OID에 대한 측정항목을 반환하지 않는다는 것을 알 수 있습니다.
    </Callout>

    다음으로, 제공된 구성을 사용하여 `ktranslate` 가) 요청에서 수신하는 내용을 정확하게 확인하려면 장치에 대해 단일 SNMP 폴링을 실행해야 합니다.

    이렇게 하려면 `-snmp_poll_now` 플래그를 활용하여 `ktranslate` 단기 컨테이너로 실행하세요. 이 명령을 사용하여 이 컨테이너를 실행할 수 있습니다. 이때 문제의 기기에 대한 구성 YAML 파일에서 `TARGET_DEVICE_NAME` `devices.[].device_name` 값으로 바꿉니다.

    ```shell
    docker run -d --name ktranslate-poll_now --rm --pull=always -p 162:1620/udp \
    -v `pwd`/snmp-base.yaml:/snmp-base.yaml \
    kentik/ktranslate:v2 \
      -snmp /snmp-base.yaml \
      -service_name=poll_now \
      -snmp_poll_now=$TARGET_DEVICE_NAME \
      -format=new_relic_metric
    ```

    이 폴링의 결과는 다음을 사용하여 컨테이너 로그에서 볼 수 있습니다. `docker logs --follow ktranslate-poll_now`

    기기 메타데이터 폴링 성공 사례:

    ```
    2022-01-03T23:08:50.583 ktranslate/poll_now [Info] KTranslate SNMP Device Metadata: Data received: {SysName:router123 SysObjectID:.1.3.6.1.4.1.9.1.46 SysDescr:Cisco Internetwork Operating System Software ...}
    2022-01-03T23:08:50.585 ktranslate/poll_now [Info] nrmFormat New Metadata for router123
    ```

    기기 통계 폴링 성공 사례:

    ```
    [{"metrics":[{"name":"kentik.snmp.ifInErrors","type":"count","value":0,"attributes":{"if_Speed":2,"mib-name":"IF-MIB","poll_duration_sec":60,"if_Type":"proppointtopointserial", "if_AdminStatus":"up","objectIdentifier":".1.3.6.1.2.1.2.2.1.14","mib-table":"if","if_OperStatus":"up","device_name":"router123","provider":"kentik-router","if_interface_name":"Se11/0/0:16","instrumentation.name":"cisco-asr","if_Index":"63","if_Address":"10.201.0.65","eventType":"KSnmpInterfaceMetric","if_Netmask":"255.255.255.252","if_Alias":"pkt.ds1"}}]...}]
    ```

    "정화된 _"_ JSON을 보면 이 장치에 대해 폴링이 예상대로 작동하고 있음을 알 수 있습니다.

    ```json
    [
      {
        "metrics": [
          {
            "name": "kentik.snmp.ifInErrors",
            "type": "count",
            "value": 0,
            "attributes": {
              "if_Speed": 2,
              "mib-name": "IF-MIB",
              "poll_duration_sec": 60,
              "if_Type": "proppointtopointserial",
              "if_AdminStatus": "up",
              "objectIdentifier": ".1.3.6.1.2.1.2.2.1.14",
              "mib-table": "if",
              "if_OperStatus": "up",
              "device_name": "router123",
              "provider": "kentik-router",
              "if_interface_name": "Se11/0/0:16",
              "instrumentation.name": "cisco-asr",
              "if_Index": "63",
              "if_Address": "10.201.0.65",
              "eventType": "KSnmpInterfaceMetric",
              "if_Netmask": "255.255.255.252",
              "if_Alias": "pkt.ds1"
            }
          }
        ]
      }
    ]
    ```
  </Collapser>
</CollapserGroup>
