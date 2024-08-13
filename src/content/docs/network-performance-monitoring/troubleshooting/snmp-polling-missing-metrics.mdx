---
title: SNMP monitoring results have metrics missing
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: SNMP monitoring is working, but expected metrics are missing.
freshnessValidatedDate: never
---

## Problem [#problem]

During SNMP monitoring, you don't see all of the expected metrics for your device.

## Solution [#solution]

Identify what metrics exist in New Relic by running the following NRQL query, replacing `$DEVICE_NAME` as necessary:

```sql
FROM Metric SELECT 
  uniques(metricName) 
WHERE instrumentation.provider = 'kentik' 
AND device_name = '$DEVICE_NAME'
SINCE 1 HOUR AGO LIMIT MAX
```

This query will give you a list of every dimensional metric being collected on your device in the last hour. If the metric is not listed, you should try these tests:

<CollapserGroup>
  <Collapser
    id="verify-device-response"
    title="Verify the device responds to target OID"
  >
    Run the [snmpwalk utility](/docs/network-performance-monitoring/troubleshooting/snmp-walk) from the host where your `ktranslate` agent is running, using the SNMP credentials you configured in the `snmp-base.yaml` configuration file.

    If the test fails, the device most likely does not support the OID you want to collect. This is a limitation of the device itself, as controlled by the vendor.

    <Callout variant="tip">
      If you are using SNMPv3, validate the configuration of the v3 user on the device. In most situations, device administrators need to explicitly grant access to MIBs for a v3 user account.
    </Callout>
  </Collapser>

  <Collapser
    id="verify-listed-profile"
    title="Verify the OID is listed in the SNMP profile"
  >
    Check whether the OID exists in the device profile itself. If there seems to be an issue with an OID that already exists in the profile, [open a GitHub issue](https://github.com/kentik/snmp-profiles/issues/new/choose) to contact the repository maintainers so they work towards a resolution. If the OID does not exist in the profile, you can [submit a pull request](https://github.com/kentik/ktranslate/pulls) to have them added. Follow the steps in the [SNMP profiles documentation](/docs/network-performance-monitoring/advanced/snmp-profiles/#public).

    <Callout variant="tip">
      The value of `instrumentation.name` on your dimensional metrics maps to the profile file name where the metrics collection is configured.
    </Callout>
  </Collapser>

  <Collapser
    id="verify-device-matches"
    title="Verify the device is matched to the correct SNMP profile"
  >
    Verify that the configured value for `mib_profile` in your `snmp-base.yaml` file matches the correct profile file name. For example:

    ```yaml
    devices:
      deviceOne:
        ...
        mib_profile: cisco-catalyst.yml
        ...
    ```

    You can check this in New Relic with the following NRQL query, replacing `$DEVICE_NAME` as necessary:

    ```sql
    FROM Metric SELECT
      latest(instrumentation.name)
    WHERE instrumentation.provider = 'kentik'
    AND device_name = '$DEVICE_NAME'
    ```

    The library of SNMP profiles is constantly being updated, and sometimes the container image you're using doesn't have the profile settings you're seeking. If the `mib_profile` doesn't match the expected profile, you can either manually update your configuration file, or run a new discovery.

    You should always pull the latest image for your container before making changes by running `docker pull kentik/ktranslate:v2`.

    Alternatively, you can get the latest via apt-get:

    ```shell
    curl -s https://packagecloud.io/install/repositories/kentik/ktranslate/script.deb.sh | sudo bash && \
    sudo apt-get install ktranslate
    ```
  </Collapser>

  <Collapser
    id="verify-ktranslate-polling"
    title="Verify KTranslate is polling the device as expected"
  >
    Check your account for `Warn`-severity errors that signify `ktranslate` is having issues collecting certain metrics from your device.

    Logs UI:

    ```shell
    collector.name:"ktranslate" message:"*OID failed to return results*"
    ```

    NRQL:

    ```sql
    FROM Log SELECT * WHERE `collector.name` = 'ktranslate' AND `message` LIKE '%OID failed to return results%'
    ```

    Expected Results:

    ```
    KTranslate>cisco-7513 OID failed to return results, Metric Name: ipIfStatsHCInOctets, Profile: cisco-asr
    ```

    <Callout variant="tip">
      In this example, you can see that the target device, `cisco-7513` is not returning metrics for the `ipIfStatsHCInOctets` OID, which is found in the `cisco-asr` SNMP profile.
    </Callout>

    Next, you should run a single SNMP poll against your device to see exactly what `ktranslate` receives from the request, using the supplied configuration.

    To do this, run `ktranslate` as a short-lived container, utilizing the `-snmp_poll_now` flag. You can run this container using this command, replacing `TARGET_DEVICE_NAME` with the value of `devices.[].device_name` in your configuration YAML file for the device in question:

    ```shell
    docker run -d --name ktranslate-poll_now --rm --pull=always -p 162:1620/udp \
    -v `pwd`/snmp-base.yaml:/snmp-base.yaml \
    kentik/ktranslate:v2 \
      -snmp /snmp-base.yaml \
      -service_name=poll_now \
      -snmp_poll_now=$TARGET_DEVICE_NAME \
      -format=new_relic_metric
    ```

    The results of this polling can be seen in the container logs using `docker logs --follow ktranslate-poll_now`

    Device metadata polling example of success:

    ```
    2022-01-03T23:08:50.583 ktranslate/poll_now [Info] KTranslate SNMP Device Metadata: Data received: {SysName:router123 SysObjectID:.1.3.6.1.4.1.9.1.46 SysDescr:Cisco Internetwork Operating System Software ...}
    2022-01-03T23:08:50.585 ktranslate/poll_now [Info] nrmFormat New Metadata for router123
    ```

    Device statistics polling example of success:

    ```
    [{"metrics":[{"name":"kentik.snmp.ifInErrors","type":"count","value":0,"attributes":{"if_Speed":2,"mib-name":"IF-MIB","poll_duration_sec":60,"if_Type":"proppointtopointserial", "if_AdminStatus":"up","objectIdentifier":".1.3.6.1.2.1.2.2.1.14","mib-table":"if","if_OperStatus":"up","device_name":"router123","provider":"kentik-router","if_interface_name":"Se11/0/0:16","instrumentation.name":"cisco-asr","if_Index":"63","if_Address":"10.201.0.65","eventType":"KSnmpInterfaceMetric","if_Netmask":"255.255.255.252","if_Alias":"pkt.ds1"}}]...}]
    ```

    Looking at the _"prettified"_ JSON, you can see here that polling is working as expected for this device:

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
