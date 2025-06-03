---
title: A descoberta de SNMP resulta na entidade 'Kentik Default'
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: SNMP monitoring discovery results in 'Kentik Default' entities in the New Relic UI.
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Depois de executar uma descoberta, você verá `Kentik Default` entidade na interface New Relic .

## Solução [#solution]

Durante a descoberta, `ktranslate` coleta o [identificador de objeto do sistema](http://oid-info.com/get/1.3.6.1.2.1.1.2), como sysObjectID ou sysOID, que fornece uma maneira fácil de identificar um dispositivo. Cada tipo de dispositivo que responde ao SNMP possui um sysObjectID, e o valor desse ID deve ser exclusivo o suficiente para que qualquer pessoa possa identificar qual tipo de dispositivo é.

<Callout variant="tip">
  Verifique a [lista CISCO-PRODUCTS-MIB](https://mibs.observium.org/mib/CISCO-PRODUCTS-MIB/), que descreve os valores sysObjectID para um grande número de vários dispositivos que a Cisco tem suportado ao longo dos anos.
</Callout>

Depois que `ktranslate` conhece o sysObjectID de um dispositivo, esse valor é usado para corresponder aos perfis conhecidos disponíveis no repositório [de perfis snmp](https://github.com/kentik/snmp-profiles) de código aberto mantido pelo Kentik.

Se o sysObjectID não puder ser correspondido, o dispositivo será considerado uma entidade `Kentik Default` . O objetivo disso é fornecer ao usuário a visualização de que os dispositivos estão sendo monitorados, bem como orientação sobre como ajudar a proporcionar uma experiência melhor para seus dispositivos específicos.

### O tipo de dispositivo já existe [#device-exists]

Em muitas situações, existe um perfil pré-existente que cobrirá o seu dispositivo ao qual simplesmente precisamos adicionar o novo sysObjectID. A primeira etapa é dar uma olhada no repositório [snmp-profiles](https://github.com/kentik/snmp-profiles/tree/main/profiles/kentik_snmp) para ver se existe um diretório para o fornecedor do seu dispositivo e o arquivo de perfil associado dentro do diretório.

Por exemplo, se você tiver um switch da série Cisco Catalyst que aparece como `Kentik Default`, mas o sysObjectID não estiver no [perfil do catalisador](https://github.com/kentik/snmp-profiles/blob/main/profiles/kentik_snmp/cisco/cisco-catalyst.yml), você poderá criar uma pull request para adicioná-lo ou abrir um problema no repositório e nós o adicionaremos em seu nome.

### É necessário novo tipo de dispositivo [#device-type-needed]

Se nenhum perfil SNMP atender às suas necessidades, você poderá seguir as etapas descritas na documentação [Criando e gerenciando perfis SNMP](/docs/network-performance-monitoring/advanced/snmp-profiles) .
