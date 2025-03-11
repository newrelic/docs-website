---
title: A los resultados del monitoreo SNMP les falta métrica
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'SNMP monitoring is working, but expected metrics are missing.'
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Durante el monitoreo SNMP, no ve todas las métricas esperadas para su dispositivo.

## Solución [#solution]

Identifique qué métricas existen en New Relic ejecutando la siguiente consulta NRQL , reemplazando `$DEVICE_NAME` según sea necesario:

```sql
FROM Metric SELECT 
  uniques(metricName) 
WHERE instrumentation.provider = 'kentik' 
AND device_name = '$DEVICE_NAME'
SINCE 1 HOUR AGO LIMIT MAX
```

Esta consulta le dará una lista de todas las dimensiones métricas recopiladas en su dispositivo en la última hora. Si la métrica no aparece en la lista, deberías probar estas pruebas:

<CollapserGroup>
  <Collapser
    id="verify-device-response"
    title="Verifique que el dispositivo responda al OID objetivo"
  >
    Ejecute la [utilidad snmpwalk](/docs/network-performance-monitoring/troubleshooting/snmp-walk) desde el host donde se ejecuta su agente `ktranslate` , utilizando las credenciales SNMP que configuró en el archivo de configuración `snmp-base.yaml` .

    Si la prueba falla, lo más probable es que el dispositivo no admita el OID que desea recopilar. Esta es una limitación del propio dispositivo, controlada por el proveedor.

    <Callout variant="tip">
      Si está utilizando SNMPv3, valide la configuración del usuario v3 en el dispositivo. En la mayoría de las situaciones, el administrador del dispositivo debe otorgar explícitamente acceso a las MIB para una cuenta de usuario v3.
    </Callout>
  </Collapser>

  <Collapser
    id="verify-listed-profile"
    title="Verifique que el OID aparezca en el perfil SNMP"
  >
    Compruebe si el OID existe en el perfil del dispositivo. Si parece haber un problema con un OID que ya existe en el perfil, [abra un problema de GitHub](https://github.com/kentik/snmp-profiles/issues/new/choose) para comunicarse con los mantenedores del repositorio para que trabajen hacia una solución. Si el OID no existe en el perfil, puede [enviar una solicitud de extracción \[la\]](https://github.com/kentik/ktranslate/pulls) para agregarlo. Siga los pasos en la [documentación de perfiles SNMP](/docs/network-performance-monitoring/advanced/snmp-profiles/#public).

    <Callout variant="tip">
      El valor de `instrumentation.name` en su métrica dimensional se asigna al nombre del archivo de perfil donde está configurada la colección métrica.
    </Callout>
  </Collapser>

  <Collapser
    id="verify-device-matches"
    title="Verifique que el dispositivo coincida con el perfil SNMP correcto"
  >
    Verifique que el valor configurado para `mib_profile` en su archivo `snmp-base.yaml` coincida con el nombre de archivo de perfil correcto. Por ejemplo:

    ```yaml
    devices:
      deviceOne:
        ...
        mib_profile: cisco-catalyst.yml
        ...
    ```

    Puede verificar esto en New Relic con la siguiente consulta NRQL, reemplazando `$DEVICE_NAME` según sea necesario:

    ```sql
    FROM Metric SELECT
      latest(instrumentation.name)
    WHERE instrumentation.provider = 'kentik'
    AND device_name = '$DEVICE_NAME'
    ```

    La biblioteca de perfiles SNMP se actualiza constantemente y, a veces, la imagen del contenedor que estás utilizando no tiene la configuración de perfil que estás buscando. Si `mib_profile` no coincide con el perfil esperado, puede actualizar manualmente su archivo de configuración o ejecutar un nuevo descubrimiento.

    Siempre debe obtener la imagen más reciente para su contenedor antes de realizar cambios ejecutando `docker pull kentik/ktranslate:v2`.

    Alternativamente, puedes obtener la última versión a través de apt-get:

    ```shell
    curl -s https://packagecloud.io/install/repositories/kentik/ktranslate/script.deb.sh | sudo bash && \
    sudo apt-get install ktranslate
    ```
  </Collapser>

  <Collapser
    id="verify-ktranslate-polling"
    title="Verifique que KTranslate esté sondeando el dispositivo como se esperaba"
  >
    Verifique su cuenta para detectar errores de gravedad `Warn`que indiquen que `ktranslate` tiene problemas para recopilar ciertas métricas de su dispositivo.

    Logs UI:

    ```shell
    collector.name:"ktranslate" message:"*OID failed to return results*"
    ```

    NRQL:

    ```sql
    FROM Log SELECT * WHERE `collector.name` = 'ktranslate' AND `message` LIKE '%OID failed to return results%'
    ```

    Resultados previstos:

    ```
    KTranslate>cisco-7513 OID failed to return results, Metric Name: ipIfStatsHCInOctets, Profile: cisco-asr
    ```

    <Callout variant="tip">
      En este ejemplo, puede ver que el dispositivo de destino, `cisco-7513` , no devuelve la métrica para el OID `ipIfStatsHCInOctets` , que se encuentra en el perfil SNMP `cisco-asr` .
    </Callout>

    A continuación, debe ejecutar una única encuesta SNMP en su dispositivo para ver exactamente qué recibe `ktranslate` de la solicitud, utilizando la configuración proporcionada.

    Para hacer esto, ejecute `ktranslate` como un contenedor de corta duración, utilizando el indicador `-snmp_poll_now` . Puede ejecutar este contenedor usando este comando, reemplazando `TARGET_DEVICE_NAME` con el valor de `devices.[].device_name` en su archivo YAML de configuración para el dispositivo en cuestión:

    ```shell
    docker run -d --name ktranslate-poll_now --rm --pull=always -p 162:1620/udp \
    -v `pwd`/snmp-base.yaml:/snmp-base.yaml \
    kentik/ktranslate:v2 \
      -snmp /snmp-base.yaml \
      -service_name=poll_now \
      -snmp_poll_now=$TARGET_DEVICE_NAME \
      -format=new_relic_metric
    ```

    Los resultados de este sondeo se pueden ver en el registro del contenedor usando `docker logs --follow ktranslate-poll_now`

    Ejemplo de éxito del sondeo de metadatos del dispositivo:

    ```
    2022-01-03T23:08:50.583 ktranslate/poll_now [Info] KTranslate SNMP Device Metadata: Data received: {SysName:router123 SysObjectID:.1.3.6.1.4.1.9.1.46 SysDescr:Cisco Internetwork Operating System Software ...}
    2022-01-03T23:08:50.585 ktranslate/poll_now [Info] nrmFormat New Metadata for router123
    ```

    Ejemplo de éxito de una encuesta de estadísticas de dispositivos:

    ```
    [{"metrics":[{"name":"kentik.snmp.ifInErrors","type":"count","value":0,"attributes":{"if_Speed":2,"mib-name":"IF-MIB","poll_duration_sec":60,"if_Type":"proppointtopointserial", "if_AdminStatus":"up","objectIdentifier":".1.3.6.1.2.1.2.2.1.14","mib-table":"if","if_OperStatus":"up","device_name":"router123","provider":"kentik-router","if_interface_name":"Se11/0/0:16","instrumentation.name":"cisco-asr","if_Index":"63","if_Address":"10.201.0.65","eventType":"KSnmpInterfaceMetric","if_Netmask":"255.255.255.252","if_Alias":"pkt.ds1"}}]...}]
    ```

    Si observa el JSON _"bonito"_ , puede ver aquí que el sondeo funciona como se esperaba para este dispositivo:

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
