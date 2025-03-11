---
title: Mesmo IP para múltiplas entidades
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'You see multiple entities in the entity explorer with the same IP, but different names.'
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Você vê várias entidades na [interface do explorador de entidades](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find) com o mesmo IP, mas com nomes diferentes.

Isso pode acontecer quando o dispositivo que usa esse IP foi renomeado ou o IP foi movido para um dispositivo diferente. Seu arquivo `ktranslate snmp-base.yaml` terá entradas para cada combinação de `device_name__ip` que já descobriu. Isso é comum quando um IP é usado para redundância, como HSRP, pilha de switches ou failovers primários/secundários.

Quando um trabalho de descoberta é executado, sempre que descobre um IP, ele tenta determinar o `device_name` conectado ao endereço IP. Se ainda não houver uma entrada na lista de dispositivos que corresponda a essa combinação específica de `device_name__ip` , será adicionada uma nova entrada com um `device_name` codificado. Ele não sobrescreve ou remove automaticamente entradas anteriores que usaram esse IP.

Quando `ktranslate` realiza sua polling ele só usa o IP quando executa, então se sua lista de dispositivos contiver múltiplas entradas com o mesmo endereço IP, ele irá coletar e enviar métrica para New Relic como se fossem entidades separadas, mas na realidade ele são apenas os mesmos dados que vieram de qualquer dispositivo que respondeu às solicitações de IP no atual intervalo de sondagem. O `device_name` não é coletado ou atualizado como parte do ciclo de pesquisa.

## Solução [#solution]

Se o `device_name` tiver sido alterado devido a uma alteração única, como a substituição de uma peça de hardware ou a atualização das convenções de nomenclatura, edite o `snmb-base.yaml` e exclua a entrada com o nome do dispositivo antigo. A entidade antiga ainda será exibida no menu <DNT>**Explorer**</DNT> , mas deixará de ter novos dados associados a ela e, eventualmente, desaparecerá do sistema. Na maioria dos casos, isso acontecerá 8 dias após a interrupção da chegada dos dados.

Qualquer IP que faça parte de um grupo de redundância ou seja movido entre dispositivos diferentes deve ser adicionado ao [ignore_list](/docs/network-performance-monitoring/advanced/advanced-config/#discovery) no snmp-base.yaml. Esses dispositivos devem ser monitorados individualmente com um endereço IP exclusivo que se conectará de forma confiável a um dispositivo específico.

Se quiser confirmar se o IP virtual está ativo, você pode adicioná-lo manualmente como um dispositivo [ping_only](/docs/network-performance-monitoring/advanced/advanced-config/#response_time-attribute) .
