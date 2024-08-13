---
title: Entenda a página da interface de detalhes trace
tags:
  - Distributed tracing
  - UI and data
  - Trace details
metaDescription: 'Dive deeper into New Relic''s distributed tracing feature: learn how to use and understand the trace details UI.'
freshnessValidatedDate: '2023-07-19T00:00:00.000Z'
translationType: machine
---

Depois de selecionar um trace na lista trace , você será direcionado para a página de detalhes trace na interface do usuário. Use os detalhes trace para entender o fluxo de operações que compõem um distributed trace e ajuste a visualização para encontrar as informações mais importantes para você.

<img
  title="Trace details page"
  alt="New Relic distributed tracing UI - trace details page"
  src="/images/distributed-tracing-trace-details-page.webp"
/>

<figcaption>
  Selecione um trace na lista de rastreamentos para ver detalhes sobre ele.
</figcaption>

Confira maneiras de exibir os intervalos do seu rastreamento:

<Tabs>
  <TabsBar>
    <TabsBarItem id="timeline-view">
      Visualização da linha do tempo
    </TabsBarItem>

    <TabsBarItem id="latency-view">
      Visualização de latência
    </TabsBarItem>

    <TabsBarItem id="waterfall-view">
      Vista da cachoeira
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="timeline-view">
      A visualização da linha do tempo é uma visualização de alta densidade de todos os intervalos no trace. Essa visualização permite rolar rapidamente por todo trace e ver como a latência e os erros se propagam pelo trace e pelos limites da entidade. Você pode selecionar extensões nesta visualização para ver os detalhes da extensão na visualização em cascata abaixo dela.
    </TabsPageItem>

    <TabsPageItem id="latency-view">
      A visualização de latência mostra quanta latência é contribuída por cada entidade no trace, bem como o número de intervalos de erro por entidade. A latência contribuída por uma entidade é o tempo transcorrido em que ela tinha um ou mais processos em execução, mas **não** estava fazendo nenhuma chamada externa ou de banco de dados. Aqui estão dois exemplos:

      * Se uma entidade tiver um processo com duração de 500 ms, mas durante 400 ms desse tempo estiver fazendo uma chamada externa, isso será mostrado como contribuindo com 100 ms de latência para o trace.

      * Se uma entidade tiver três processos em execução em paralelo por um segundo e nenhum deles tiver feito chamadas externas, isso será mostrado como contribuindo com um segundo de latência para o trace.

        <img
          title="Latency view"
          alt="Screenshot showing the distributed tracing latency view"
          src="/images/distributed-tracing-trace-details-page-latency-view.webp"
        />
    </TabsPageItem>

    <TabsPageItem id="waterfall-view">
      A visualização em cascata na seção inferior da página exibe um fluxo detalhado de todas as operações que compõem o distributed trace. Isso permite que você veja o contexto exato de onde surgem a latência e os erros.

      ### Controles de cascata [#waterfall-controls]

      A visualização em cascata possui vários controles para facilitar a localização de trechos importantes para você:

      * <DNT>**Expand all/Collapse all**</DNT>: Use esta opção para alternar entre mostrar todos os trechos (incluindo trechos em processamento) e mostrar trechos recolhidos.

      * <DNT>**Standard/Manual**</DNT>: no modo padrão, você obtém uma visualização semi-expandida que inclui o primeiro intervalo de cada processo. No modo manual, você vê apenas o que expande.

        * Ambos

          <DNT>
            **Standard**
          </DNT>

          e

          <DNT>
            **Manual**
          </DNT>

          são substituídos por

          <DNT>
            **Expand all**
          </DNT>

          , que exibe todos os períodos.

        * Se você estiver no modo padrão ou manual e clicar em

          <DNT>
            **Collapse all**
          </DNT>

          , a cascata será redefinida para o padrão do modo que você está usando.

      * <DNT>**Focus on**</DNT>: se o seu intervalo tiver erros ou anomalias, você verá caixas de seleção para cada um desses tipos. Se você marcar essas caixas, sua visualização em cascata recolherá todos os outros tipos de extensões e mostrará apenas erros codificados por cores ou extensões anômalas. Esta é uma maneira rápida de encontrar extensões problemáticas.<img style={{ width: "70%",align: "left" }} title="Screenshot showing the color coding of focus on" alt="Screenshot showing the color coding of focus on" src="/images/distributed-tracing_screenshot-crop_focus-on-example.webp"/>

      * <DNT>**Maximize**</DNT>: Isso permite que você veja mais trechos na tela expandindo a cascata e ocultando o mapa de entidades.

        ### Propriedades de extensão em cascata [#span-icons]

        A interface indica propriedades de span com estes ícones:

        <table id="span-types">
          <thead>
            <tr>
              <th style={{ width: "130px" }}>
                Propriedade de extensão
              </th>

              <th style={{ width: "110px" }}>
                Indicador
              </th>

              <th>
                Descrição
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                Serviço
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-service-span-icon.png"
                  alt="New Relic distributed tracing service icon"
                  src="/images/new-relic-distributed-tracing-service-icon.webp"
                />
              </td>

              <td>
                Este ícone representa um intervalo que é o ponto de entrada de um serviço.
              </td>
            </tr>

            <tr id="in-process">
              <td>
                Em processo
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-in-process-span-icon.png"
                  alt="New Relic distributed tracing in-process span icon "
                  src="/images/new-relic-distributed-tracing-inprocess-icon.webp"
                />
              </td>

              <td>
                Este ícone representa um [span em processamento](#in-process), que é um span que ocorre dentro de um processo (em oposição a um span entre processos). Exemplos: instrumentação de middleware, spans criados pelo usuário.
              </td>
            </tr>

            <tr>
              <td>
                Armazenamento de dados
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-database-span-icon.png"
                  alt="New Relic distributed tracing datastore span icon"
                  src="/images/new-relic-distributed-tracing-databases-icon.webp"
                />
              </td>

              <td>
                Este ícone representa uma chamada span para um armazenamento de dados.
              </td>
            </tr>

            <tr>
              <td>
                Externo
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-external-span-icon.png"
                  alt="New Relic distributed tracing external span icon"
                  src="/images/new-relic-distributed-tracing-external-icon.webp"
                />
              </td>

              <td>
                Este ícone representa uma categoria que representa uma chamada para um serviço externo feita via HTTP.
              </td>
            </tr>

            <tr>
              <td>
                Aplicativo de browser
              </td>

              <td>
                <img
                  title="distributed-tracing-browser-span-icon.png"
                  alt="New Relic distributed tracing browser span icon"
                  src="/images/distributed-tracing-browser-span-icon.webp"
                />
              </td>

              <td>
                Este ícone representa uma [extensão de aplicativo do browser](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing).
              </td>
            </tr>

            <tr>
              <td>
                Lambda
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-lambda-icon.png"
                  alt="New Relic distributed tracing external span icon"
                  src="/images/new-relic-distributed-tracing-lambda-icon.webp"
                />
              </td>

              <td>
                Este ícone representa um intervalo de uma [função do Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/introduction-new-relic-monitoring-aws-lambda).
              </td>
            </tr>
          </tbody>
        </table>

        Alguns períodos terão indicadores adicionais:

        <table id="span-types-table">
          <thead>
            <tr>
              <th style={{ width: "130px" }}>
                Propriedade de extensão
              </th>

              <th style={{ width: "110px" }}>
                Indicador
              </th>

              <th>
                Descrição
              </th>
            </tr>
          </thead>

          <tbody>
            <tr id="connecting-lines">
              <td>
                Tipo de conexão
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-lines-image.png"
                  alt="New Relic distributed tracing connecting lines image"
                  src="/images/new-relic-distributed-tracing-lines-image.webp"
                />
              </td>

              <td>
                As linhas sólidas indicam um relacionamento direto entre pais e filhos; em outras palavras, um processo ou função chamando outro diretamente. Uma linha pontilhada indica um relacionamento não direto. Para obter mais informações sobre relacionamentos entre extensões, consulte [Estrutura de rastreamento](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure).
              </td>
            </tr>

            <tr>
              <td>
                Erros
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-error-icon.png"
                  alt="New Relic distributed tracing error icon"
                  src="/images/new-relic-distributed-tracing-error-icon.webp"
                />
              </td>

              <td>
                Um intervalo com um erro. Consulte [Como entender erros de span](#error-tips).
              </td>
            </tr>

            <tr>
              <td>
                Anômalo
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-anomalous-icon.png"
                  alt="New Relic distributed tracing datastore span icon"
                  src="/images/new-relic-distributed-tracing-anomalous-icon.webp"
                />
              </td>

              <td>
                Este ícone representa a detecção de um [intervalo anômalo](#anomalous-spans).
              </td>
            </tr>

            <tr>
              <td>
                Períodos órfãos
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-fragmented-icon.png"
                  alt="New Relic distributed tracing orphaned span icon"
                  src="/images/new-relic-distributed-tracing-orphan-icon.webp"
                />
              </td>

              <td>
                Alguns spans podem ser "órfãos" ou separados do trace. Esses intervalos aparecerão na parte inferior do trace. Para obter mais detalhes, consulte [Rastreamento fragmentado](#fragmented-traces).
              </td>
            </tr>

            <tr>
              <td>
                Vários nomes de aplicativos
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-multiple-app-names-indicator.png"
                  alt="New Relic distributed tracing multiple app names indicator"
                  src="/images/new-relic-distributed-tracing-multiapp-icon.webp"
                />
              </td>

              <td>
                Ao lado de um nome de extensão, representa uma entidade que teve [vários nomes de aplicativos definidos](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app). Selecione esta opção para ver todos os nomes de aplicativos aos quais ele se reporta. Para pesquisar dados trace por nomes de aplicativos alternativos, use o atributo `appName`.
              </td>
            </tr>

            <tr>
              <td>
                Diferença de horário cliente/servidor
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-client-server-time-indicator.png"
                  alt="New Relic distributed tracing client-server time difference indicator"
                  src="/images/new-relic-distributed-tracing-client-server-time-indicator.webp"
                />
              </td>

              <td>
                Se o indicador de duração de um período não estiver completamente colorido (como neste exemplo), significa que há uma discrepância de tempo entre a duração do lado do servidor e a duração do lado do cliente para essa atividade. Para obter detalhes sobre isso, consulte [Diferença de horário cliente/servidor](#client-server-time).
              </td>
            </tr>
          </tbody>
        </table>
    </TabsPageItem>
  </TabsPages>
</Tabs>

## Painel de detalhes do intervalo [#span-details]

Quando você seleciona um intervalo, um painel é aberto com detalhes do intervalo. Esses detalhes podem ser úteis para questões de desempenho de resolução de problemas. Esta página possui três guias:

* <DNT>
    **Performance**
  </DNT>

  : Você verá gráficos mostrando a duração média e as taxas de transferência para essa operação de período, bem como a comparação do desempenho desse período específico com a média.

* <DNT>
    **Attributes**
  </DNT>

  : Você pode aprender mais sobre atributo em nosso [dicionário de dados](/attribute-dictionary/?dataSource=Distributed+Tracing&event=Span).

* <DNT>
    **Details**
  </DNT>

  : Você pode visualizar detalhes, como o [nome completo e a fonte de dados do intervalo](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#prettified-span-names) .

O que um intervalo exibe é baseado em seu tipo de intervalo. Por exemplo, os detalhes do intervalo do armazenamento de dados incluirão a consulta ao banco de dados. Para obter mais informações sobre a estrutura trace e como as propriedades de span são determinadas, consulte [Estrutura de rastreamento](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure).

## Atributo do período [#span-attributes]

Se quiser saber mais sobre dados de `Span` :

* Explore seus dados de span usando o [criador de consulta](/docs/chart-builder/use-chart-builder/get-started/introduction-chart-builder).
* Para ver o atributo padrão anexado aos dados span, use o [dicionário de dados](/attribute-dictionary/?event=Span).
* Confira estes [exemplos de consulta](/docs/apm/distributed-tracing/ui-data/example-insights-queries-distributed-trace-data) para obter ajuda com a consulta NRQL usando esses atributos.

## Ver registro relacionado [#view-your-logs]

Se você estiver usando nosso recurso [de logs contextualizados](/docs/logs/logs-context/configure-logs-context-apm-agents/) , poderá ver qualquer log vinculado ao seu rastreamento:

1. Vá para a página de detalhes trace clicando em um trace.

2. No canto superior esquerdo da página de detalhes do período, clique na guia

   <DNT>
     **Logs**
   </DNT>

   .

3. Para obter detalhes relacionados a uma mensagem individual do log, clique diretamente na mensagem.
