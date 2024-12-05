---
title: Resolução de problemas com grande uso de memória (Node.js)
type: troubleshooting
tags:
  - Agents
  - Nodejs agent
  - Troubleshooting
metaDescription: If you installed the New Relic Node.js agent and your application's memory usage increases read this troubleshooting doc for potential causes and solutions.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você instalou o agente New Relic Node.js e o uso de memória do seu aplicativo Node.js aumentou.

## Solução

Existem várias causas possíveis para esse aumento de memória e possíveis soluções para cada uma delas.

<CollapserGroup>
  <Collapser
    id="cluster"
    title="Aumento causado pelas alocações de lajes de trabalhadores do cluster"
  >
    Node.js fornece o [módulo Cluster](http://nodejs.org/api/cluster.html). Isto permite lidar com solicitações em paralelo usando todos os núcleos de processador disponíveis em um host. No entanto, cada trabalhador do cluster aloca seu próprio buffer de laje para transação SSL e mantém sua própria cópia dos dados do agente Node.js. Isso multiplica a sobrecarga de memória pelo número de trabalhadores de cluster usados. Isso também é verdadeiro se um host executar vários aplicativos Node.js ao mesmo tempo.

    <DNT>
      **Solution:**
    </DNT>

    Alguns provedores de serviços de nuvem usam ambientes que apresentam um número maior de núcleos de processador do que podem realmente ser usados em um determinado momento. Reduzir o número de trabalhadores de cluster ou executar sem suporte cluster pode diminuir o uso de memória sem afetar o desempenho.
  </Collapser>

  <Collapser
    id="log"
    title="Aumento causado por mensagem do log armazenada em disco"
  >
    Mensagem do log são registradas no disco por padrão. Devido à forma como os dados da mensagem são manipulados, os objetos da mensagem podem ser movidos para <DNT>**Old-pointer-space**</DNT> para coleta de lixo. Isso significa que os objetos permanecem na memória por um tempo, mesmo depois de todas as referências a eles terem desaparecido. Isso leva a uma maior quantidade de memória consumida por um processo a qualquer momento. O tempo de processamento adicional também é usado para coleta de lixo.

    <DNT>
      **Solution:**
    </DNT>

    Dependendo da sua versão do Node.js, o agente pode usar como padrão o nível de log `trace` ou `info` . Diminua o detalhamento do registro para níveis `info` ou `warn` para diminuir visivelmente o uso de memória e o tempo gasto na coleta de lixo.
  </Collapser>

  <Collapser
    id="mongo"
    title="Aumento causado por cursores MongoDB vazados"
  >
    Muitos drivers do banco de dados usam uma abstração chamada `cursor`. Os cursores fornecem a capacidade de iterar pelos resultados da consulta. Por exemplo, o driver <DNT>**mongodb**</DNT> fornece cursores ao executar a consulta `find` .

    Os cursores vivem como objetos no tempo de execução do Node.js e como entidade no servidor MongoDB. Quando um aplicativo terminar de usar `cursor`, ele deverá fechá-lo para liberar recursos no servidor e no aplicativo cliente.

    No Node.js é possível que um cursor seja coletado como lixo, liberando recursos no aplicativo, sem fechar o `cursor` no servidor. Isso pode passar despercebido no aplicativo. No entanto, o agente Node.js da New Relic monitora os cursores abertos para medir o tempo gasto na iteração dos resultados. Se o seu aplicativo não fechar todos os cursores que usa, o agente continuará rastreando cursores obsoletos e vazando memória.

    <DNT>
      **Solution:**
    </DNT>

    Certifique-se de que cada `cursor` criado em seu aplicativo seja fechado chamando `cursor.close()` depois que o aplicativo terminar de processar os resultados da consulta.
  </Collapser>

  <Collapser
    id="agent"
    title="Aumento causado pelo armazenamento de dados do agente"
  >
    O agente Node.js registra dados para cada transação processada pelo seu aplicativo. Os dados geralmente são agrupados por nome de transação. A memória utilizada pelo agente aumenta com o número de diferentes transações registradas em cada ciclo de coleta de um minuto.

    Além disso, uma quantidade maior de dados é mantida durante cada transação, mas eventualmente descartada quando a transação é concluída. A memória utilizada pelo agente aumenta com o número de transações simultâneas tratadas pelo aplicativo.

    <DNT>
      **Solution:**
    </DNT>

    Se o armazenamento de dados do agente for identificado como a causa de um aumento no uso de memória, a melhor maneira de resolver isso é adicionar memória adicional ao seu host ou mudar para uma instância de nuvem maior.
  </Collapser>
</CollapserGroup>
