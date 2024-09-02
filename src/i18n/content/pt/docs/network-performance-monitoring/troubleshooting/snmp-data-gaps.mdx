---
title: Os dados SNMP têm lacunas
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'You''re collecting metrics from an SNMP device, but the data has inconsistent gaps.'
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Você tem um dispositivo que às vezes coleta os dados esperados, mas há lacunas inconsistentes nos gráficos.

Isso geralmente acontece quando um dispositivo não consegue responder de maneira confiável às solicitações SNMP dentro do período de tempo limite porque a rede entre o contêiner `ktranslate` e o dispositivo pesquisado está enfrentando contenção de largura de banda, perda de pacotes ou tem alta latência.

Outro cenário pode ser que o dispositivo esteja sobrecarregado e não consiga responder rapidamente às solicitações SNMP. Isso geralmente acontece quando você tenta coletar OIDs de tabelas muito grandes com um `poll_time_sec` que é muito rápido para o dispositivo acompanhar.

## Solução [#solution]

Como regra geral, localize seu contêiner de polling o mais próximo possível dos dispositivos monitores para reduzir a chance de uma carga SNMP UDP não realizar a viagem.

Nos casos em que você precisa pesquisar links WAN com mais latência, pode ser necessário editar o arquivo `snmp-base.yaml` para aumentar o `timeout_ms` dos 5.000 ms padrão para um intervalo mais longo.

Se você acredita que pode haver uma conexão não confiável com o site remoto, considere aumentar o `retries` do padrão 0. Ter um número alto de novas tentativas, mas um tempo limite muito curto, provavelmente não melhorará sua situação e poderá potencialmente aumente as cargas no dispositivo monitor enquanto ele tenta responder a mais solicitações e nenhuma delas retorna antes que o tempo limite expire.

Se você estiver pesquisando grandes tabelas de dados de dispositivos, como um balanceador de carga ocupado, poderá levar algum tempo adicional para que o dispositivo monitor colete os dados necessários para a resposta. Isso pode exigir a configuração de um período `timeout_ms` mais longo e um atraso maior para `poll_time_sec`.
