---
title: A descoberta SNMP é mapeada para um perfil inesperado
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: SNMP monitoring discovery maps your device to an unexpected profile.
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Após executar uma descoberta SNMP, seu dispositivo é mapeado para um perfil inesperado na chave `mib_profile` da configuração do dispositivo.

## Fundo [#background]

O processo de descoberta SNMP tentará mapear automaticamente dispositivos para um perfil existente do repositório [kentik/snmp-profiles](https://github.com/kentik/snmp-profiles) usando o seguinte processo:

* Primeiro, é feita uma tentativa de corresponder o valor do [sysObjectID](http://oid-info.com/get/1.3.6.1.2.1.1.2) do dispositivo com uma correspondência literal ou curinga para os valores na chave `systemobjectid` de um perfil.
* Nos casos em que o sysObjectID de um dispositivo é um dos [OIDs do agente Net-SNMP](http://oid-info.com/get/1.3.6.1.4.1.8072.3.2), há uma tentativa de melhor esforço para isolar ainda mais o perfil do dispositivo por meio de uma correspondência de regex em relação ao valor [sysDescr](http://oid-info.com/get/1.3.6.1.2.1.1.1) do dispositivo. Você pode ver as opções atuais na chave `matches` do [perfil net-snmp.yml](https://github.com/kentik/snmp-profiles/blob/main/profiles/kentik_snmp/_general/net-snmp.yml).

Existem dois cenários distintos que podem existir após este processo:

1. O dispositivo corresponde a um perfil esperado e coleta métricas sem problemas.
2. O dispositivo corresponde inesperadamente ao perfil errado e está coletando a métrica errada ou faltando métrica.

## Solução [#solution]

### Dispositivos padrão Kentik [#kentik-default]

Para o segundo cenário, a situação mais comum é que o seu dispositivo seja mapeado para o seguinte:

```yaml
# Snippet from device config
  mib_profile: base.yml
  provider: kentik-default
```

Siga as etapas nos [resultados da descoberta de SNMP no guia de resolução de problemas 'Kentik Default'](/docs/network-performance-monitoring/troubleshooting/snmp-discovery-kentik-default) para resolver isso.

### Dispositivos Net-SNMP [#net-snmp]

Você também poderá ver situações em que a correspondência de melhor esforço em relação ao valor `sysDescr` de um dispositivo não funciona ou não está disponível devido à falta de informações de identificação exclusiva disponíveis no valor.

Nesse caso, você pode substituir manualmente a correspondência do trabalho de descoberta usando a sintaxe <DNT>**bang (!)**</DNT> : `"!profile-name.yml"`, que permite forçar qualquer perfil desejado:

```yaml
# Snippet from device config
  mib_profile: "!sonicwall-sma.yml"
  provider: kentik-firewall
```

Conforme mencionado na [documentação de configuração do dispositivo](/docs/network-performance-monitoring/advanced/advanced-config/#devices), o valor da chave `provider` também precisa ser definido para garantir uma experiência de interface adequada no New Relic.

Certifique-se de adicionar quaisquer novos MIBs para seu arquivo de configuração na chave global `mibs_enabled` . Isto diz ao contêiner em execução para coletar ativamente métricas para esses MIBs.

Aqui está um exemplo de firewall Sonicwall:

```yaml
# Snippet from global config
  mibs_enabled:
  - HOST-RESOURCES-MIB
  - IF-MIB
  - SONICWALL-SMA-APPLIANCE-SYSTEM-HEALTH-MIB
  - SONICWALL-SMA-APPLIANCE-SERVICE-HEALTH-MIB
  - SONICWALL-SMA-APPLIANCE-SECURITY-HISTORY-MIB
  - SONICWALL-SMA-APPLIANCE-TUNNEL-SERVER-MIB
```

<Callout variant="tip">
  Você também deve definir a chave de configuração de descoberta: "[replace_devices](/docs/network-performance-monitoring/advanced/advanced-config/#discovery)" como `false` para evitar a substituição acidental dessas edições em um trabalho de descoberta futuro.
</Callout>
