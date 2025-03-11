---
title: Monitoramento de browser e impacto no desempenho
tags:
  - Browser
  - Browser monitoring
  - Performance quality
metaDescription: The negligible amount of overhead required to load browser JavaScript into a webpage results in a significant return of actionable data.
freshnessValidatedDate: never
translationType: machine
---

O trecho JavaScript do <InlinePopover type="browser"/>apresenta um impacto quase invisível no desempenho do site e na percepção do usuário sobre o tempo que uma página leva para carregar. O JavaScript está incluído em um pacote de dados de páginas da web que é enviado de qualquer maneira. Além disso, inicia imediatamente o monitoramento de erros e eventos à medida que o restante da página web é executado. A quantidade insignificante de sobrecarga necessária para carregar o JavaScript resulta em um retorno significativo de dados acionáveis.

## Impacto geral [#overall]

A sobrecarga do JavaScript leva em consideração tanto o impacto no usuário quanto o impacto no desempenho dos seus sistemas:

* <DNT>
    **User perception:**
  </DNT>

  Normalmente o usuário não consegue detectar degradações de desempenho em um site com menos de 200ms. O JavaScript do browser adiciona menos de 15 ms no tempo agregado por carregamento de página. Isso é dividido ao longo do tempo, portanto, em nenhum momento o usuário seria capaz de perceber qualquer impacto no desempenho devido ao JavaScript.

* <DNT>
    **Webserver and systems:**
  </DNT>

  O monitoramento do aplicativo browser ocorre no browser do usuário, não no servidor. O tempo de processamento não afeta o consumo da CPU.

Além disso, tomamos medidas adicionais para minimizar qualquer impacto potencial nos aplicativos e páginas da web monitorados. Por exemplo, o script "loader" é carregado de forma síncrona no `<HEAD>` para garantir que o monitoramento esteja ativado durante todo o ciclo de vida da página. Esse script é incluído em linha, o que elimina a necessidade de outra solicitação de rede de ida e volta para uma [rede de distribuição de conteúdo (CDN)](/docs/browser/new-relic-browser/performance-quality/security-new-relic-browser#cdn). O "carregador" vem com o carregamento inicial da página.

Posteriormente no ciclo de vida da página, o New Relic carrega scripts de monitoramento adicionais de forma assíncrona. Esses scripts não devem ter nenhum efeito perceptível para o usuário e estão incluídos na sobrecarga geral de menos de 15 ms por página.

## Impacto na rede [#network]

O monitoramento do browser também minimiza o tráfego de rede para o usuário final, agregando dados localmente (no cliente) e enviando-os de volta para a New Relic em intervalos periódicos e nos eventos do ciclo de vida da página `load`, `unload`, `pageshow` e `pagehide`. (Durante os períodos ociosos da sessão do browser, as transmissões podem não ser necessárias.)

### Script do agente browser [#agent-scripts]

O agente consiste em múltiplos scripts para reduzir o tamanho inicial do "loader" e para suportar o carregamento apenas do JavaScript necessário para suportar os recursos do agente que estão habilitados. O primeiro script, o "loader", é inserido in-line no documento HTML. Os scripts restantes são baixados da rede de distribuição de conteúdo (js-agente.newrelic.com) quando o evento de ciclo de vida da página `load` acontece. O número de scripts carregados depende do tipo de agente que está sendo usado. Descubra mais sobre [os tipos de browsers de agentes aqui](/docs/browser/browser-monitoring/installation/install-browser-monitoring-agent/#agent-types).

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Script
      </th>

      <th>
        Lite
      </th>

      <th>
        Pró
      </th>

      <th>
        Pró + SPA
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tamanho do script embutido
      </td>

      <td>
        10,2 KB
      </td>

      <td>
        15,5 KB
      </td>

      <td>
        17,5 KB
      </td>
    </tr>

    <tr>
      <td>
        Tamanho do script baixado
      </td>

      <td>
        15,3 KB
      </td>

      <td>
        21 KB
      </td>

      <td>
        25,4 KB
      </td>
    </tr>
  </tbody>
</table>

<sup>
  Os tamanhos são baseados em script reduzido usando compactação gzip.
</sup>

### Colheitas do agente browser [#agent-harvests]

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Tipo de dados
      </th>

      <th>
        Lite
      </th>

      <th>
        Pró
      </th>

      <th>
        Pró + SPA
      </th>

      <th>
        Frequência de colheita
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Evento [PageView](/attribute-dictionary/?event=PageView)
      </td>

      <td>
        sim
      </td>

      <td>
        sim
      </td>

      <td>
        sim
      </td>

      <td>
        `PageView` os eventos são coletados uma vez imediatamente após o evento de ciclo de vida da página `load` . Esses dados são responsáveis por gerar a métrica de page view no dashboard do browser da interface New Relic. Esta é uma chamada JSONP para `bam.nr-data.net` ou `bam-cell.nr-data.net`. Todos os agentes são <DNT>**required**</DNT> para coletar um evento `PageView` .
      </td>
    </tr>

    <tr>
      <td>
        Evento [PageViewTiming](/attribute-dictionary/?event=PageViewTiming)
      </td>

      <td>
        sim
      </td>

      <td>
        sim
      </td>

      <td>
        sim
      </td>

      <td>
        `PageViewTiming` evento são coletados por todos os agentes e incluem dados de tempo, como medições core web vitals . A primeira coleta ocorre 10 segundos após o evento de ciclo de vida da página `load` . Coletas adicionais ocorrem a cada 30 segundos, conforme necessário, quando há dados para enviar. Consulte a [documentação do PageViewTiming](/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details/#interactivity-metrics) para obter uma lista de eventos relatados.
      </td>
    </tr>

    <tr>
      <td>
        Métrica [de erro JavaScript](/attribute-dictionary/?event=JavaScriptError)
      </td>

      <td>
        não
      </td>

      <td>
        sim
      </td>

      <td>
        sim
      </td>

      <td>
        `JavaScriptError` métricas são coletadas a cada 10 segundos após o evento de ciclo de vida da página `load` . Esta colheita é enviada como dados métrica de fração de tempo e também inclui a métrica Ajax.
      </td>
    </tr>

    <tr>
      <td>
        Métrica Ajax
      </td>

      <td>
        não
      </td>

      <td>
        sim
      </td>

      <td>
        sim
      </td>

      <td>
        Enviado junto com JavaScriptError métrica como dados da fração de tempo.
      </td>
    </tr>

    <tr>
      <td>
        Evento [AjaxRequest](/attribute-dictionary/?event=AjaxRequest)
      </td>

      <td>
        não
      </td>

      <td>
        sim
      </td>

      <td>
        sim
      </td>

      <td>
        `AjaxRequest` os eventos são coletados a cada 10 segundos após o evento de ciclo de vida da página `load` , a menos que o agente `SPA` esteja em uso. Se estiver usando o agente `SPA` , a primeira colheita acontecerá após o evento de ciclo de vida da página `load` . As coletas subsequentes acontecerão a cada 10 segundos ou quando o agente `SPA` perceber uma mudança de rota.
      </td>
    </tr>

    <tr>
      <td>
        Rastreamento da sessão
      </td>

      <td>
        não
      </td>

      <td>
        sim
      </td>

      <td>
        sim
      </td>

      <td>
        Os dados de rastreamento da sessão são coletados após o evento de ciclo de vida da página `load` . A colheita subsequente acontece a cada 10 segundos se dados suficientes tiverem sido coletados. trace da sessão envia a maior parte dos dados, mas eles são fortemente amostrados. Apenas cerca de 75 visualizações de página por hora são habilitadas para enviar dados de rastreamento da sessão.
      </td>
    </tr>

    <tr>
      <td>
        Session Replay
      </td>

      <td>
        não
      </td>

      <td>
        sim
      </td>

      <td>
        sim
      </td>

      <td>
        Os eventos Session Replay são coletados quando ocorre uma das seguintes situações:

        * Quando os dados compactados coletados para a sessão atingirem o tamanho máximo de 64 KB.
        * Se o usuário permanecer na mesma página por mais de 60 segundos.
        * Quando a visibilidade da página muda (mudança de guia, foco, navegação, etc)

          O endpoint pode diferir dependendo da localidade, mas um exemplo para os EUA seria `https://bam.nr-data.net/browser/blobs`.
      </td>
    </tr>

    <tr>
      <td>
        Evento [PageAction](/attribute-dictionary/?event=PageAction)
      </td>

      <td>
        não
      </td>

      <td>
        sim
      </td>

      <td>
        sim
      </td>

      <td>
        `PageAction` os eventos são coletados após o evento de ciclo de vida da página `load` . As coletas subsequentes acontecem a cada 30 segundos.
      </td>
    </tr>

    <tr>
      <td>
        Evento [de interação do browser](/attribute-dictionary/?event=BrowserInteraction)
      </td>

      <td>
        não
      </td>

      <td>
        não
      </td>

      <td>
        sim
      </td>

      <td>
        `BrowserInteraction` evento são colhidos imediatamente após o término da interação. A primeira coleta ocorre após o evento de ciclo de vida de `load` página. Sempre haverá pelo menos uma interação que representa o carregamento inicial da página. Interações adicionais são coletadas somente se a URL for alterada (representando mudança de rota). `AjaxRequest` eventos também serão coletados ao mesmo tempo se ocorrerem durante uma interação.
      </td>
    </tr>
  </tbody>
</table>
