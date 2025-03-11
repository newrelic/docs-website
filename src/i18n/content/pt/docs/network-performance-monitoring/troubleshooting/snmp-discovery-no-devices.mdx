---
title: A descoberta SNMP não encontra nenhum dispositivo
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'SNMP monitoring discovery does not find any devices, or you didn''t find all of the devices you expected.'
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Você iniciou uma execução de descoberta SNMP, mas não encontrou todos os dispositivos esperados.

## Solução [#solution]

O processo de descoberta SNMP será executado em todos os endereços IP da sua lista da seção [`cidrs`](/docs/network-performance-monitoring/advanced/advanced-config/#discovery) na configuração de descoberta. Durante a varredura, há uma verificação da porta TCP para garantir que o endereço IP de destino responda. Se for bem-sucedido, `ktranslate` tentará se comunicar com o endereço IP via SNMP.

Os pontos de falha comuns no processo de descoberta incluem:

* Tempos limite devido à latência da rede ou ao tempo de resposta do dispositivo às solicitações SNMP. Os Meraki Cloud Controllers [recomendam um valor de tempo limite de pelo menos 10s](https://documentation.meraki.com/General_Administration/Monitoring_and_Reporting/SNMP_Overview_and_Configuration) , por exemplo.
* Falhas iniciais na verificação de capacidade de resposta de dispositivos que geralmente estão sob posturas de segurança mais rígidas, como firewall.
* Tempos limite devido ao intervalo de IP excessivamente grande apresentado na seção `cidrs` da configuração de descoberta.

<Callout variant="important">
  Por padrão, a descoberta SNMP usa 4 threads para ser executada de forma assíncrona com um tempo limite de 3 segundos por endereço IP. Para um bloco CIDR `/22` com 1.024 endereços IP no total, você deve esperar aproximadamente 13 minutos para que um trabalho de descoberta seja concluído:

  ```
  1,024 IPs / 4 threads = 256 IPs per thread 
  256 IPs per thread * 3 seconds per IP = 768 seconds
  768 seconds / 60 = 12.8 minutes
  ```

  Para um bloco CIDR `/16` com um total de 65.536 endereços IP, levaria aproximadamente 13,65 horas.
</Callout>

Para contornar esses problemas, tente uma ou todas as seguintes soluções:

1. Edite `snmp-base.yaml` e aumente o valor do tempo limite para a variável `timeout_ms` .
2. Para dispositivos que ainda parecem não responder, defina todos os valores `cidrs` com um comprimento de `/32`, o que força o processo de descoberta a ignorar a verificação de capacidade de resposta e tentar apenas a conexão SNMP.
3. Se você estiver recebendo tempos limite em todo o trabalho, certifique-se de limitar os blocos CIDR fornecidos a 1.024 IPs ou menos no total. Por exemplo, um intervalo CIDR entre `/22` e `/32`. Você pode fornecer vários blocos de `/22` em um único arquivo de configuração, mas no geral recomendamos que você escale horizontalmente em vários contêineres quando tiver um ambiente de destino grande, em vez de tentar fazer todo o trabalho em um único contêiner.

<Callout variant="tip">
  Se você tiver um grande conjunto de dispositivos que estão sendo ignorados devido à verificação de portas, você pode editar o arquivo `snmp-base.yaml` e ativar a opção [check_all_ips](/docs/network-performance-monitoring/advanced/advanced-config/#discovery) para ignorar a verificação de portas e ir diretamente para testar as credenciais SNMP em todos os endereços da sua descoberta . Tenha em mente que esta opção aumentará o tempo necessário para concluir uma descoberta com base nos valores de tempo limite e de nova tentativa na configuração.
</Callout>
