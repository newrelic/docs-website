---
title: Métrica de tempo de execução do Python
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: The Python agent records runtime metrics for garbage collection and CPU/ memory usage
freshnessValidatedDate: never
translationType: machine
---

O agente Python registra métricas de tempo de execução para permitir que você analise o desempenho de seus processos e interpretador Python. Isso inclui métricas relacionadas ao uso de CPU, uso de memória e coleta de lixo. Este comportamento está habilitado por padrão. Para desabilitar isso, [desabilite a configuração no arquivo de configuração ou na variável de ambiente](/docs/apm/agents/python-agent/configuration/python-agent-configuration#runtime-metrics).

## Utilização do CPU

Com a métrica de tempo de execução da CPU, você pode monitor o uso da CPU examinando a utilização da CPU do usuário e do sistema, e também ver o tempo gasto em diferentes componentes da CPU. As seguintes métricas de uso de CPU estão disponíveis:

* <DNT>
    **CPU time**
  </DNT>

  : monitore a quantidade de tempo gasto em diferentes estados da CPU. Isso inclui usuário (tempo de execução do código do aplicativo) e sistema (tempo gasto no sistema operacional). Essa métrica é representada como o tempo total decorrido em segundos.

* <DNT>
    **CPU utilization**
  </DNT>

  : analise a quantidade de recursos de processamento utilizados ao longo do tempo por diferentes componentes da CPU. Isso inclui o componente do usuário (para executar o código do aplicativo) e o componente do sistema (para executar o código do kernel). Essa métrica é relatada como uma porcentagem que representa o tempo gasto no componente de CPU especificado dividido pelo tempo total de CPU decorrido.

## Uso de memória

Você pode monitor o consumo e a utilização geral de memória do seu sistema por processo e host. As seguintes métricas de uso de memória estão disponíveis:

* <DNT>
    **Total physical memory**
  </DNT>

  : monitor a quantidade total de memória física em megabytes usada pelo seu sistema ao longo do tempo. Essa métrica também está disponível para IDs de processos individuais.

* <DNT>
    **Memory utilization**
  </DNT>

  : rastreie a utilização da memória ao longo do tempo para o seu sistema e para processos individuais. Esta métrica é representada pelo valor da memória física total usada pelo seu sistema (ou um processo específico) dividido pela quantidade total de memória disponível.

## Coleta de lixo

<Callout variant="important">
  O perfil de coleta de lixo está desabilitado por padrão no agente. Para habilitá-lo, confira nossa documentação [aqui](/docs/agents/python-agent/configuration/python-agent-configuration/#garbage-collection-runtime-metrics).
</Callout>

O coletor de lixo encontra objetos de dados não utilizados e recupera esse espaço de memória para que possa ser usado por outro processo. O agente Python fornece a seguinte métrica de coleta de lixo:

* <DNT>
    **Object count by type**
  </DNT>

  : obtenha insights sobre os tipos de objetos mais comuns coletados pelo coletor de lixo visualizando suas contagens de coletas associadas. Você pode personalizar o número máximo de tipos de objetos que gostaria de ver relatados por esse tipo de métrica definindo a [configuração top_object_count_limit](/docs/agents/python-agent/configuration/python-agent-configuration/#garbage-collection-runtime-metrics).

* <DNT>
    **Object count by generation**
  </DNT>

  : Como a coleta ocorre em cada geração do coletor de lixo, os objetos que sobrevivem são promovidos para gerações superiores. Essa métrica permite visualizar o número de objetos armazenados em cada uma das gerações do coletor de lixo ao longo do tempo.

* <DNT>
    **Total time by generation**
  </DNT>

  : analise quanto tempo o coletor de lixo gasta em cada geração de coleta.

* <DNT>
    **Garbage collector collections**
  </DNT>

  : o número de coleções é influenciado pelo limite do objeto definido para cada geração. Quando o limite for atingido, um processo de coleta será acionado. As coleções também podem ser acionadas manualmente no código do aplicativo com chamadas para [gc.collect()](https://docs.python.org/3/library/gc.html#gc.collect). Essa métrica informa o número de varreduras do coletor de lixo que ocorreram em cada geração ao longo do tempo.

* <DNT>
    **Garbage collector uncollectable**
  </DNT>

  : Em algumas instâncias, o coletor de lixo pode não conseguir alcançar e liberar um determinado objeto, considerando-o incobrável. Essa métrica permite visualizar o número de objetos que não puderam ser coletados pelo coletor de lixo em cada geração.

* <DNT>
    **Garbage collector collected**
  </DNT>

  : esta métrica informa o número total de objetos coletados pelo coletor de lixo em cada geração.
