---
title: SNMPモニタリングの結果、メトリクスが見つからない
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'SNMP monitoring is working, but expected metrics are missing.'
freshnessValidatedDate: never
translationType: machine
---

## 問題 [#problem]

SNMPモニタリングでは、デバイスに期待されるメトリクスがすべて表示されるわけではありません。

## 解決 [#solution]

次の NRQL クエリを実行し、必要に応じて`$DEVICE_NAME`を置き換えて、New Relic にどのようなメトリクスが存在するかを特定します。

```sql
FROM Metric SELECT 
  uniques(metricName) 
WHERE instrumentation.provider = 'kentik' 
AND device_name = '$DEVICE_NAME'
SINCE 1 HOUR AGO LIMIT MAX
```

このクエリにより、過去 1 時間にデバイス上で収集されたすべてのディメンション メトリックのリストが得られます。メトリックがリストされていない場合は、次のテストを試す必要があります。

<CollapserGroup>
  <Collapser
    id="verify-device-response"
    title="デバイスがターゲットOIDに応答することを確認する"
  >
    `snmp-base.yaml`構成ファイルで構成した SNMP 認証情報を使用して、 `ktranslate`エージェントが実行されているホストから[snmpwalk ユーティリティ](/docs/network-performance-monitoring/troubleshooting/snmp-walk)を実行します。

    テストが失敗した場合、そのデバイスは収集したいOIDをサポートしていない可能性が高い。これは、ベンダーが管理しているデバイス自体の制限です。

    <Callout variant="tip">
      SNMPv3を使用している場合は、機器のv3ユーザーの設定を確認してください。ほとんどの場合、デバイス管理者はv3ユーザーアカウントのMIBへのアクセスを明示的に許可する必要があります。
    </Callout>
  </Collapser>

  <Collapser
    id="verify-listed-profile"
    title="OID が SNMP プロファイルにリストされていることを確認します。"
  >
    OID がデバイス プロファイル自体に存在するかどうかを確認します。プロファイルにすでに存在する OID に問題があると思われる場合は、 [GitHub の問題を開いて](https://github.com/kentik/snmp-profiles/issues/new/choose)リポジトリの管理者に連絡し、解決に向けて取り組んでください。OID がプロファイルに存在しない場合は、[プル リクエストを送信して](https://github.com/kentik/ktranslate/pulls)追加してもらうことができます。[SNMP プロファイルのドキュメント](/docs/network-performance-monitoring/advanced/snmp-profiles/#public)の手順に従います。

    <Callout variant="tip">
      ディメンション メトリックの`instrumentation.name`の値は、メトリック コレクションが構成されているプロファイル ファイル名にマップされます。
    </Callout>
  </Collapser>

  <Collapser
    id="verify-device-matches"
    title="デバイスが正しい SNMP プロファイルと一致していることを確認します。"
  >
    `snmp-base.yaml`ファイル内の`mib_profile`に構成された値が正しいプロファイル ファイル名と一致していることを確認してください。例えば：

    ```yaml
    devices:
      deviceOne:
        ...
        mib_profile: cisco-catalyst.yml
        ...
    ```

    これは、New Relic で次の NRQL クエリを使用して確認できます。必要に応じて`$DEVICE_NAME`を置き換えます。

    ```sql
    FROM Metric SELECT
      latest(instrumentation.name)
    WHERE instrumentation.provider = 'kentik'
    AND device_name = '$DEVICE_NAME'
    ```

    SNMPプロファイルのライブラリは常に更新されており、使用しているコンテナイメージに目的のプロファイル設定がない場合があります。 `mib_profile`が期待されるプロファイルと一致しない場合は、構成ファイルを手動で更新するか、新しい検出を実行できます。

    `docker pull kentik/ktranslate:v2`を実行して変更を加える前に、常にコンテナの最新のイメージをプルする必要があります。

    あるいは、apt-get 経由で最新版を入手することもできます。

    ```shell
    curl -s https://packagecloud.io/install/repositories/kentik/ktranslate/script.deb.sh | sudo bash && \
    sudo apt-get install ktranslate
    ```
  </Collapser>

  <Collapser
    id="verify-ktranslate-polling"
    title="KTranslate が期待どおりにデバイスをポーリングしていることを確認します"
  >
    アカウントに`Warn`重大度エラーがないか確認してください。これは、 `ktranslate`がデバイスから特定の指標を収集する際に問題が発生していることを示しています。

    Logs UIです。

    ```shell
    collector.name:"ktranslate" message:"*OID failed to return results*"
    ```

    NRQL。

    ```sql
    FROM Log SELECT * WHERE `collector.name` = 'ktranslate' AND `message` LIKE '%OID failed to return results%'
    ```

    期待される成果

    ```
    KTranslate>cisco-7513 OID failed to return results, Metric Name: ipIfStatsHCInOctets, Profile: cisco-asr
    ```

    <Callout variant="tip">
      この例では、ターゲットデバイス`cisco-7513`が`cisco-asr` SNMPプロファイルにある`ipIfStatsHCInOctets` OIDのメトリックを返さないことがわかります。
    </Callout>

    次に、提供された構成を使用して、デバイスに対して単一の SNMP ポーリングを実行して、 `ktranslate`リクエストから何を受信するかを正確に確認する必要があります。

    これを行うには、 `-snmp_poll_now`フラグを利用して、 `ktranslate`有効期間の短いコンテナとして実行します。次のコマンドを使用して、このコンテナを実行できます。対象のデバイスの構成 YAML ファイル内の`TARGET_DEVICE_NAME` `devices.[].device_name`の値に置き換えます。

    ```shell
    docker run -d --name ktranslate-poll_now --rm --pull=always -p 162:1620/udp \
    -v `pwd`/snmp-base.yaml:/snmp-base.yaml \
    kentik/ktranslate:v2 \
      -snmp /snmp-base.yaml \
      -service_name=poll_now \
      -snmp_poll_now=$TARGET_DEVICE_NAME \
      -format=new_relic_metric
    ```

    このポーリングの結果は、を使用してコンテナログで確認できます。 `docker logs --follow ktranslate-poll_now`

    デバイス・メタデータ・ポーリングの成功例

    ```
    2022-01-03T23:08:50.583 ktranslate/poll_now [Info] KTranslate SNMP Device Metadata: Data received: {SysName:router123 SysObjectID:.1.3.6.1.4.1.9.1.46 SysDescr:Cisco Internetwork Operating System Software ...}
    2022-01-03T23:08:50.585 ktranslate/poll_now [Info] nrmFormat New Metadata for router123
    ```

    デバイスの統計情報のポーリングが成功した例。

    ```
    [{"metrics":[{"name":"kentik.snmp.ifInErrors","type":"count","value":0,"attributes":{"if_Speed":2,"mib-name":"IF-MIB","poll_duration_sec":60,"if_Type":"proppointtopointserial", "if_AdminStatus":"up","objectIdentifier":".1.3.6.1.2.1.2.2.1.14","mib-table":"if","if_OperStatus":"up","device_name":"router123","provider":"kentik-router","if_interface_name":"Se11/0/0:16","instrumentation.name":"cisco-asr","if_Index":"63","if_Address":"10.201.0.65","eventType":"KSnmpInterfaceMetric","if_Netmask":"255.255.255.252","if_Alias":"pkt.ds1"}}]...}]
    ```

    _" prettified"_ JSONを見ると、このデバイスではポーリングが期待通りに機能していることがわかります。

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
