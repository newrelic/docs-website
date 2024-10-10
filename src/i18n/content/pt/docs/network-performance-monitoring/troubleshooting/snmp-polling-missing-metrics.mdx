---
title: Resultados de monitoramento SNMP possuem métrica faltando
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'SNMP monitoring is working, but expected metrics are missing.'
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Durante o monitoramento SNMP, você não vê todas as métricas esperadas para o seu dispositivo.

## Solução [#solution]

Identifique quais métricas existem no New Relic executando a seguinte consulta NRQL , substituindo `$DEVICE_NAME` conforme necessário:

```sql
FROM Metric SELECT 
  uniques(metricName) 
WHERE instrumentation.provider = 'kentik' 
AND device_name = '$DEVICE_NAME'
SINCE 1 HOUR AGO LIMIT MAX
```

Esta consulta lhe dará uma lista de todas as métricas dimensionais coletadas em seu dispositivo na última hora. Se a métrica não estiver listada, você deve tentar estes testes:

<CollapserGroup>
  <Collapser
    id="verify-device-response"
    title="Verifique se o dispositivo responde ao OID de destino"
  >
    Execute o [utilitário snmpwalk](/docs/network-performance-monitoring/troubleshooting/snmp-walk) no host onde seu agente `ktranslate` está em execução, usando as credenciais SNMP configuradas no arquivo de configuração `snmp-base.yaml` .

    Se o teste falhar, o dispositivo provavelmente não suporta o OID que você deseja coletar. Esta é uma limitação do próprio dispositivo, controlada pelo fornecedor.

    <Callout variant="tip">
      Se você estiver usando SNMPv3, valide a configuração do usuário v3 no dispositivo. Na maioria das situações, o administrador do dispositivo precisa conceder acesso explicitamente aos MIBs para uma conta de usuário v3.
    </Callout>
  </Collapser>

  <Collapser
    id="verify-listed-profile"
    title="Verifique se o OID está listado no perfil SNMP"
  >
    Verifique se o OID existe no próprio perfil do dispositivo. Se parecer haver um problema com um OID que já existe no perfil, [abra um problema no GitHub](https://github.com/kentik/snmp-profiles/issues/new/choose) para entrar em contato com os mantenedores do repositório para que eles trabalhem em uma solução. Se o OID não existir no perfil, você poderá [enviar uma pull request](https://github.com/kentik/ktranslate/pulls) para adicioná-los. Siga as etapas na [documentação de perfis SNMP](/docs/network-performance-monitoring/advanced/snmp-profiles/#public).

    <Callout variant="tip">
      O valor de `instrumentation.name` em sua métrica dimensional é mapeado para o nome do arquivo de perfil onde a coleção de métrica está configurada.
    </Callout>
  </Collapser>

  <Collapser
    id="verify-device-matches"
    title="Verifique se o dispositivo corresponde ao perfil SNMP correto"
  >
    Verifique se o valor configurado para `mib_profile` no arquivo `snmp-base.yaml` corresponde ao nome correto do arquivo de perfil. Por exemplo:

    ```yaml
    devices:
      deviceOne:
        ...
        mib_profile: cisco-catalyst.yml
        ...
    ```

    Você pode verificar isso no New Relic com a seguinte consulta NRQL, substituindo `$DEVICE_NAME` conforme necessário:

    ```sql
    FROM Metric SELECT
      latest(instrumentation.name)
    WHERE instrumentation.provider = 'kentik'
    AND device_name = '$DEVICE_NAME'
    ```

    A biblioteca de perfis SNMP é atualizada constantemente e, às vezes, a imagem do contêiner que você está usando não tem as configurações de perfil que você procura. Se `mib_profile` não corresponder ao perfil esperado, você poderá atualizar manualmente seu arquivo de configuração ou executar uma nova descoberta.

    Você deve sempre extrair a imagem mais recente do seu contêiner antes de fazer alterações executando `docker pull kentik/ktranslate:v2`.

    Alternativamente, você pode obter o mais recente via apt-get:

    ```shell
    curl -s https://packagecloud.io/install/repositories/kentik/ktranslate/script.deb.sh | sudo bash && \
    sudo apt-get install ktranslate
    ```
  </Collapser>

  <Collapser
    id="verify-ktranslate-polling"
    title="Verifique se o KTranslate está pesquisando o dispositivo conforme esperado"
  >
    Verifique se há `Warn`erros de gravidade em sua conta que significam que `ktranslate` está tendo problemas para coletar determinadas métricas do seu dispositivo.

    Interface de registro:

    ```shell
    collector.name:"ktranslate" message:"*OID failed to return results*"
    ```

    NRQL:

    ```sql
    FROM Log SELECT * WHERE `collector.name` = 'ktranslate' AND `message` LIKE '%OID failed to return results%'
    ```

    Resultados esperados:

    ```
    KTranslate>cisco-7513 OID failed to return results, Metric Name: ipIfStatsHCInOctets, Profile: cisco-asr
    ```

    <Callout variant="tip">
      Neste exemplo, você pode ver que o dispositivo de destino `cisco-7513` não está retornando métrica para o OID `ipIfStatsHCInOctets` , que é encontrado no perfil SNMP `cisco-asr` .
    </Callout>

    Em seguida, você deve executar uma única pesquisa SNMP em seu dispositivo para ver exatamente o que `ktranslate` recebe da solicitação, usando a configuração fornecida.

    Para fazer isso, execute `ktranslate` como um contêiner de curta duração, utilizando a sinalização `-snmp_poll_now` . Você pode executar este contêiner usando este comando, substituindo `TARGET_DEVICE_NAME` pelo valor de `devices.[].device_name` no arquivo YAML de configuração do dispositivo em questão:

    ```shell
    docker run -d --name ktranslate-poll_now --rm --pull=always -p 162:1620/udp \
    -v `pwd`/snmp-base.yaml:/snmp-base.yaml \
    kentik/ktranslate:v2 \
      -snmp /snmp-base.yaml \
      -service_name=poll_now \
      -snmp_poll_now=$TARGET_DEVICE_NAME \
      -format=new_relic_metric
    ```

    Os resultados desta votação podem ser vistos no log do contêiner usando `docker logs --follow ktranslate-poll_now`

    Exemplo de sucesso da pesquisa de metadados do dispositivo:

    ```
    2022-01-03T23:08:50.583 ktranslate/poll_now [Info] KTranslate SNMP Device Metadata: Data received: {SysName:router123 SysObjectID:.1.3.6.1.4.1.9.1.46 SysDescr:Cisco Internetwork Operating System Software ...}
    2022-01-03T23:08:50.585 ktranslate/poll_now [Info] nrmFormat New Metadata for router123
    ```

    Exemplo de sucesso da pesquisa de estatísticas do dispositivo:

    ```
    [{"metrics":[{"name":"kentik.snmp.ifInErrors","type":"count","value":0,"attributes":{"if_Speed":2,"mib-name":"IF-MIB","poll_duration_sec":60,"if_Type":"proppointtopointserial", "if_AdminStatus":"up","objectIdentifier":".1.3.6.1.2.1.2.2.1.14","mib-table":"if","if_OperStatus":"up","device_name":"router123","provider":"kentik-router","if_interface_name":"Se11/0/0:16","instrumentation.name":"cisco-asr","if_Index":"63","if_Address":"10.201.0.65","eventType":"KSnmpInterfaceMetric","if_Netmask":"255.255.255.252","if_Alias":"pkt.ds1"}}]...}]
    ```

    Olhando para o JSON _"embelezado"_ , você pode ver aqui que a pesquisa está funcionando conforme o esperado para este dispositivo:

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
