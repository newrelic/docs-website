---
title: Problemas de desempenho no AWS Fargate
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Using the PHP Agent in AWS Fargate results in poor to unacceptable performance due to the clocksource.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Usar o agente PHP New Relic no AWS Fargate resulta em desempenho insatisfatório.

## Explicação

O agente PHP depende muito da origem do relógio de um sistema para cronometrar atividades. Devido à verificação constante do relógio, para ser eficaz, o agente PHP precisa de um clocksource baseado em vDSO para que as chamadas repetitivas para verificar o tempo não dominem o desempenho geral. Você pode encontrar mais detalhes sobre como verificar/alterar a fonte do relógio [aqui](https://discuss.newrelic.com/t/relic-solution-php-agent-cpu-overhead-tips/70182).

Infelizmente, o AWS Fargate exige o xen clocksource que NÃO oferece suporte a vDSO. Apesar da disponibilidade de outras fontes de relógio, o AWS Fargate proíbe que você altere a fonte de relógio tornando o diretório `sys` somente leitura. Este é um [problema em aberto](https://github.com/aws/containers-roadmap/issues/974) com o Fargate em relação a esta limitação.

Se Fargate for um requisito absoluto, você pode desligar a instrumentação automática e instrumentar manualmente apenas alguns, transação principal. Fora isso, como o clocksource é muito importante para a verificação de tempo para coletar métricas do PHP, atualmente não há soluções alternativas para esse problema da AWS. Alguns clientes obtiveram sucesso usando agentes em serviços da AWS que permitem alterar a fonte do relógio, como EC2 e Graviton.
