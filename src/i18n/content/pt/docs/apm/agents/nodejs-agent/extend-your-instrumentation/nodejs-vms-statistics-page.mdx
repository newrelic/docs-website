---
title: Página de estatísticas da VM Node.js
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: A description of the metric timeslice data that the Node.js agent for New Relic collects for the Node.js VM.
freshnessValidatedDate: never
translationType: machine
---

No APM da New Relic, a página <DNT>**Node VMs**</DNT> fornece dados de tempo de execução úteis para resolução de problemas de desempenho e monitoramento da integridade do seu aplicativo.

## O que você precisa [#requirements]

Alguns dos gráficos na página <DNT>**Node VMs**</DNT> exigem que você instale o [módulo métrico nativo do New Relic](https://www.npmjs.com/package/@newrelic/native-metrics) , além do agente Node.js. Para obter instruções de instalação, consulte [Medidas de VM do Node.js.](/docs/agents/nodejs-agent/supported-features/node-vm-measurements)

## Ver estatísticas da VM Node.js [#view-data]

<img
  title="Screenshot of the Node.js VMs page"
  alt="Screenshot of the Node.js VMs page"
  src="/images/apm_screenshot-crop_nodejs-vm-page-overview.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Node VMs**</DNT>: quando vários servidores reportam para o mesmo aplicativo, a página divide os gráficos por servidor. Você pode visualizar dados de um servidor individual e obter detalhes adicionais selecionando um servidor no filtro <DNT>**Servers**</DNT> na parte superior da página.
</figcaption>

Para correlacionar picos ou tendências ascendentes em qualquer uma dessas medidas com transações específicas:

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Node VMs**
   </DNT>

   .

2. Selecione o período clicando e arrastando em qualquer um dos gráficos.

3. Navegue até a [página da transação](/docs/apm/applications-menu/monitoring/transactions-page) ou qualquer outra página.

À medida que você avança para outras páginas, a seleção do [seletor de hora](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) permanecerá a mesma.

## Analise problemas de desempenho [#node-vm-charts]

Aqui está um resumo dos dados disponíveis em gráficos <DNT>**Node VMs**</DNT> individuais. Usando todos os gráficos juntos, você pode solucionar problemas de desempenho. Por exemplo:

* Quando o aplicativo começar a usar mais objetos, o uso de memória aumentará e a coleta de lixo (GC) será executada com mais frequência. A utilização da CPU aumentará devido ao tempo gasto no GC.

* A execução de código síncrono anormalmente longa pode aumentar a utilização da CPU. Isso mostrará picos no gráfico

  <DNT>
    **Event loop max CPU time per tick**
  </DNT>

  .

<CollapserGroup>
  <Collapser
    id="time-in-garbage-collection"
    title="Tempo de pausa do GC"
  >
    A quantidade de tempo gasto na coleta de lixo. Para um único servidor, o gráfico mostra o tempo médio, máximo e total por minuto. Para vários servidores, o gráfico mostra o tempo total agrupado por servidor.

    Normalmente, picos no tempo ou frequência do GC indicam um possível problema.
  </Collapser>

  <Collapser
    id="gc-pause-frequency"
    title="Frequência de pausa do GC"
  >
    O número de vezes que as execuções do GC foram executadas por minuto. Para um único servidor, o gráfico é dividido por tipo de GC. Para vários servidores, o gráfico mostra o número total de chamadas de GC (todos os tipos combinados) agrupadas por servidor.
  </Collapser>

  <Collapser
    id="gc-pause-time-by-type"
    title="Tempo de pausa do GC por tipo"
  >
    Este gráfico mostra o tempo total gasto na coleta de lixo por minuto, dividido por tipo de GC. Só é mostrado ao visualizar um único servidor. Você poderá ver os seguintes tipos dependendo da sua versão do Node.js e da atividade do aplicativo:

    <table>
      <thead>
        <tr>
          <th style={{ width: "225px" }}>
            <DNT>
              **Value**
            </DNT>
          </th>

          <th>
            <DNT>
              **Description**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `Scavenge`
          </td>

          <td>
            O método de coleta de lixo mais comum. O Node.js normalmente acionará um deles sempre que a VM estiver ociosa.
          </td>
        </tr>

        <tr>
          <td>
            `MarkSweepCompact`
          </td>

          <td>
            O tipo mais pesado de coleta de lixo que o V8 pode fazer. Se você observar muitas dessas coisas acontecendo, precisará manter menos objetos em seu processo ou aumentar o limite de heap do V8.
          </td>
        </tr>

        <tr>
          <td>
            `IncrementalMarking`
          </td>

          <td>
            Uma coleta de lixo em fases que intercala a coleta com a lógica do aplicativo para reduzir o tempo que o aplicativo fica pausado. Somente no Node.js v6 ou superior.
          </td>
        </tr>

        <tr>
          <td>
            `ProcessWeakCallbacks`
          </td>

          <td>
            Após ocorrer uma coleta de lixo, o V8 chamará qualquer retorno de chamada de referência fraca registrado para objetos que foram liberados. Essa medida vai do início do primeiro retorno de chamada fraco até o final do último para uma determinada coleta de lixo. Somente no Node.js v6 ou superior.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="memory"
    title="Uso de memória"
  >
    Este gráfico mostra a quantidade de memória consumida pelo processo Node.js. Para vários servidores, o gráfico mostra a memória total agrupada por servidor. Para um único servidor, o gráfico é segmentado pelos seguintes tipos de memória:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            <DNT>
              **Value**
            </DNT>
          </th>

          <th>
            <DNT>
              **Description**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Não heap
          </td>

          <td>
            A memória alocada para dados fora do heap do V8 (por exemplo, buffers, soquetes).
          </td>
        </tr>

        <tr>
          <td>
            Pilha V8 (usada)
          </td>

          <td>
            A quantidade de memória usada pelo V8 (por exemplo, objetos JavaScript).
          </td>
        </tr>

        <tr>
          <td>
            Pilha V8 (grátis)
          </td>

          <td>
            A quantidade de memória reservada pela V8 para pool de memória. Essa memória não está sendo usada ativamente, mas é reservada para que o V8 aloque mais livremente conforme necessário.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="cpu"
    title="Utilização da CPU"
  >
    Este gráfico mostra a utilização da CPU do processo Node.js.

    Para vários servidores, o gráfico mostra a utilização total da CPU agrupada por servidor. Para um único servidor, o gráfico é segmentado pelo seguinte:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            <DNT>
              **Value**
            </DNT>
          </th>

          <th>
            <DNT>
              **Description**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Usuário
          </td>

          <td>
            O tempo gasto na execução do código do usuário, dividido pelo tempo transcorrido.
          </td>
        </tr>

        <tr>
          <td>
            Sistema
          </td>

          <td>
            O tempo gasto no kernel do sistema em nome do processo Node.js, dividido pelo tempo transcorrido.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="event-loop"
    title="Loop de eventos – ticks por minuto"
  >
    Este gráfico mostra o número de ticks do loop de eventos por minuto. Um tick é uma única volta do loop de eventos, na qual são executadas funções que estão prontas para serem executadas.

    Como parte de cada ciclo de evento, o Node.js aguarda a conclusão da E/S pendente. Assim que qualquer evento de E/S for recebido, o loop de eventos executa o retorno de chamada associado a ele. Portanto, o número de ticks por minuto corresponde à frequência com que os eventos de E/S ocorrem.
  </Collapser>

  <Collapser
    id="event-loop-cpu"
    title="Loop de eventos — tempo máximo de CPU por tick"
  >
    Este gráfico mostra o tempo máximo gasto em um único tick por minuto. Isso é útil para detectar um tique de loop de evento anormalmente longo, que indica uma longa execução de código síncrono.
  </Collapser>
</CollapserGroup>

## Ver cluster de vários processos [#clustering]

Quando vários processos Node.js no mesmo servidor reportam para o mesmo aplicativo New Relic, esses gráficos mostrarão dados agregados. Isso ocorre porque cada processo de trabalho em um cluster tem seu próprio tempo de execução Node.js separado e coleta dados separados.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Clusters**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Soma de todos os trabalhadores
      </td>

      <td>
        Os gráficos a seguir mostram uma soma de todos os trabalhadores:

        * Tempo de pausa do GC - Tempo total por minuto
        * Frequência de pausa do GC
        * Tempo de pausa do GC por tipo
        * Utilização da CPU
        * Ciclos de eventos por minuto
      </td>
    </tr>

    <tr>
      <td>
        Média de todos os trabalhadores
      </td>

      <td>
        Os gráficos a seguir mostram uma média de todos os trabalhadores:

        * Uso de memória
        * Tempo de pausa do GC — média
      </td>
    </tr>

    <tr>
      <td>
        Máximo em todos os trabalhadores
      </td>

      <td>
        Os gráficos a seguir mostram o máximo em todos os trabalhadores:

        * Tempo de pausa do GC — máx.
        * Loop de eventos — tempo máximo de CPU por tick
      </td>
    </tr>
  </tbody>
</table>
