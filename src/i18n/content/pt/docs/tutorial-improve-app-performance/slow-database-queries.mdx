---
title: Diagnosticar lentidão consulta ao banco de dados
metaDescription: Improve query performance by troubleshooting your slow database with the New Relic database UI.
freshnessValidatedDate: never
translationType: machine
---

## Objetivos [#objectives]

Ao final deste tutorial, você irá:

* Identificar consulta lenta ao banco de dados
* Entenda como resolver lentidão consulta ao banco de dados
* Entenda como usar a interface do banco de dados

## Por que otimizar na consulta ao banco de dados

Quando seu aplicativo é interrompido, seus clientes ficam esperando enquanto você soluciona um problema tão complexo quanto seu sistema. Os relatórios dos seus dados e você terá uma ideia aproximada do que poderia ser o problema, mas por onde começar?

Se o seu site depende de um banco de dados (e provavelmente depende), você vai querer verificar se o tempo de resposta da consulta está funcionando conforme o esperado. Muitas vezes, o desempenho do seu site depende de quão bem o seu banco de dados lida com as consultas enviadas pelos seus clientes. Com o New Relic, você pode usar nossa interface de banco de dados para monitorar o desempenho do banco de dados ao longo do tempo, permitindo identificar quando um problema ocorreu para que você possa descobrir que tipo de solução precisa.

Este tutorial explica como solucionar problemas de consulta lenta em suas operações de banco de dados.

## Analise o problema com os dados do seu aplicativo [#diagnose]

Nossa interface de banco de dados exibe gráficos construídos com consulta NRQL. Esses gráficos usam dados da métrica `apm.service.datastore.operation.duration` informada pelo agente que você instalou. Esses gráficos mostram o tempo de resposta dos principais processos do banco de dados pelas principais operações, o tempo de consulta e as taxas de transferência do seu aplicativo.

Ao avaliar um problema, recomendamos usar cada um desses diferentes pontos de entrada, pois eles contam diferentes partes da mesma história. Vejamos como você pode usar a interface para começar a diagnosticar problemas de desempenho.

<img
  title="Default database homepage"
  alt="Default database homepage"
  src="/images/apm_screenshot-full_default-database-UI.webp"
/>

<figcaption>
  Para iniciar a resolução de problemas em sua consulta mais lenta, você começará na interface de banco de dados padrão do APM.
</figcaption>

<Steps>
  <Step>
    Navegue até a interface do banco de dados: vá para <DNT>**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION')) > (select an app) > monitor > databases**</DNT>
  </Step>

  <Step>
    ### Tempo consumido pelas operações do banco de dados

    O gráfico <DNT>**Most time consuming**</DNT> mostra o tempo total de processamento de consulta por uma operação de banco de dados.

    <SideBySide>
      <Side>
        Este gráfico que exibe cinco operações de banco de dados e monitora o tempo para executar uma consulta. Este gráfico mostra sua consulta mais movimentada e chamada com mais frequência na parte superior. Se uma consulta raramente chamada tende a acompanhar suas consultas mais ocupadas, isso pode indicar um problema com uma consulta que precisa de mais escopo para entender por que consome tanto tempo de processamento.
      </Side>

      <Side>
        <img
          title="Top 5 Database operations over time"
          alt=""
          src="/images/apm_screenshot-crop_A-timeslice-chart-of-top-5-database-operations.webp"
        />

        <figcaption>
          A interface do banco de dados mostra gráficos das operações do seu banco de dados ao longo do tempo.
        </figcaption>
      </Side>
    </SideBySide>
  </Step>

  <Step>
    ## Principais bancos de dados por tempo de consulta

    O gráfico <DNT>**Top databases by query time**</DNT> mostra o desempenho do seu banco de dados com base no tempo necessário para executar uma consulta.

    <SideBySide>
      <Side>
        Esta consulta NRQL cria um gráfico que exibe os principais bancos de dados e calcula a média de quanto tempo as consultas levam. Por exemplo, se, em média, seu banco de dados Redis EVAL leva cerca de meio segundo para processar uma consulta, mas o tempo de consulta aumentou dois segundos, então você sabe que deve se aprofundar em consultas individuais.
      </Side>

      <Side>
        <img
          title="Top databases by query time"
          alt=""
          src="/images/apm_screenshot-crop_Top-databases-by-query-time.webp"
        />

        <figcaption>
          A interface do banco de dados mostra gráficos dos seus principais bancos de dados por tempo de consulta.
        </figcaption>
      </Side>
    </SideBySide>
  </Step>

  <Step>
    ## Top banco de dados por taxas de transferência

    O gráfico <DNT>**Top databases by throughput**</DNT> mostra as taxas de transferência do seu banco de dados ao longo do tempo.

    <SideBySide>
      <Side>
        Os gráficos de taxas de transferência rastreiam a quantidade de processos que uma operação executa em um determinado intervalo de tempo. Se suas taxas de transferência forem tanques, você saberá se aprofundar em uma operação específica.
      </Side>

      <Side>
        <img
          title="Top 5 Database operations over time"
          alt=""
          src="/images/apm_screenshot-crop_Database-throughput.webp"
        />

        <figcaption>
          A interface do banco de dados mostra gráficos dos seus principais bancos de dados por taxas de transferência.
        </figcaption>
      </Side>
    </SideBySide>
  </Step>
</Steps>

## Aprofundando sua consulta ao banco de dados [#fix]

Indo mais fundo significa seguir os dados. Identificar a área aproximada onde existe um problema é apenas parte da busca de uma solução.

Depois de observar o desempenho médio do seu banco de dados, o próximo passo é acompanhar os dados com tempo de consulta, transação e rastreamento de pilha.

<DocTiles numbered>
  <DocTile
    title="Prepare to triage your application"
    path="/docs/journey-app-slow/root-causes"
  />

  <DocTile
    title="Identify problematic transactions"
    path="/docs/journey-app-slow/problematic-transactions"
  />
</DocTiles>

<DocTiles>
  <DocTile
    title="Identify slow database queries"
    number="3"
    label={{text: 'Current doc', color: '#FCD672'}}
    path="/docs/journey-app-slow/slow-database-queries"
  />

  <DocTile
    title="Identify slow external services"
    number="4"
    path="/docs/journey-app-slow/external-services"
  />

  <DocTile
    title="Create performance benchmarks"
    number="5"
    path="/docs/journey-app-slow/create-benchmarks/"
  />
</DocTiles>
