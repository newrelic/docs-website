---
title: Mergulhe profundamente no rastreamento da transação
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: APM's Trace Details page shows additional timing details about the individual segments that make up a transaction trace.
freshnessValidatedDate: never
translationType: machine
---

Uma transação é um agrupamento de chamadas de funções e métodos que compõem uma única unidade de trabalho. transações geralmente são mapeadas para uma URL, mas nem sempre. Em <InlinePopover type="apm"/>, você pode visualizar todas as suas transações para uma determinada entidade na guia **Transactions** . Se você clicar em uma transação específica na aba de transações, você verá dados de _todos os usuários_ em _todos os momentos_.

Mas se você quiser saber mais sobre o que aconteceu com um usuário _específico_ durante uma instância _específica_ , você precisa usar **Transaction traces**. Com a **guia Trace details**, você pode:

* **Identifique segmentos lentos**: os segmentos que ocuparam mais de 25% do tempo total trace são marcados como "intervalos lentos", direcionando a atenção para possíveis gargalos.
* **Visualize suas transações**: veja uma representação gráfica do cronograma da transação que mostra a duração de diferentes segmentos, como chamadas de banco de dados, chamadas externas ou execução de código.
* **Solucione problemas com eficiência**: filtre seus dados para se concentrar exclusivamente em períodos lentos.

## Como funciona [#how-it-works]

Selecionar uma transação específica na **aba Transactions** abrirá a **aba de detalhes da transação**. A partir daí, selecione uma transação na tabela **Transaction trace** para abrir a **página de detalhestrace **. A **página Trace details** fornece um mergulho profundo na experiência _de um usuário_ com uma transação em uma _única instância_. Explore seus dados usando uma das três visualizações: linha do tempo, latência ou cascata.

<img
  title="transaction trace details"
  alt="A screenshot depicting the transaction trace details view."
  src="/images/apm_screenshot-crop_transaction-trace-details.webp"
/>

<figcaption>
  Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction trace) > Trace details.**</DNT>
</figcaption>

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
      A visualização da linha do tempo trace contém uma exibição visual condensada e interativa do trace. A cor do nó apresentada nesta visualização corresponde à legenda em cascata para a categoria de cada segmento.

      Passar o mouse sobre os nós nesta visualização exibirá o nome do segmento acima da linha do tempo. Clicar em um nó nesta visualização selecionará o mesmo nó na cascata e abrirá o painel de detalhes do segmento. Um arrasto horizontal nesta visualização filtrará os nós apresentados na cascata para aqueles que ocorrem na janela selecionada. Você pode alterar a janela filtrada movendo manualmente os controles verdes ou clicando no botão **Reset timeline** .

      <img
        title="Timeline view"
        alt="transaction-traces-timeline-view.png"
        src="/images/distributed-tracing-trace-details-page-timeline-view.webp"
      />
    </TabsPageItem>

    <TabsPageItem id="latency-view">
      ### Visualização de latência [#latency]

      A seção Latência View fornece insights sobre os seis serviços ou componentes mais lentos que contribuem para a duração geral trace , juntamente com suas contribuições individuais e contagens de nós lentos.

      Pontos importantes a serem observados:

      * A duração reportada de um serviço é a soma da duração exclusiva de todos os nós originados desse serviço.
      * Clicar em um serviço em um gráfico de pizza ou tabela selecionará o primeiro nó da cascata desse serviço.
      * Quando mais de 6 serviços contribuem para um trace, pode existir uma categoria denominada **Other** , que contém dados acumulados de todos os serviços no trace, excluindo os 6 mais lentos. A categoria **Other** não responde a cliques na tabela ou no gráfico de pizza.

        <img
          title="Latency view"
          alt="transaction-traces-latency-view.png"
          src="/images/distributed-tracing-trace-details-page-latency-view.webp"
        />
    </TabsPageItem>

    <TabsPageItem id="waterfall-view">
      A cascata exibe uma árvore de nós de segmentos organizados em ramificações por caminho de chamada. Cada segmento mostra informações sobre o serviço de origem, incluindo nome do serviço, tipo de segmento e duração do segmento.

      ### Navegando pela cachoeira

      A visualização em cascata possui vários controles para facilitar a localização dos segmentos de seu interesse:

      * **Expandir/Recolher**: mostre ou oculte facilmente segmentos individuais ou ramificações inteiras com as setas.

      * **Concentre-se em extensões lentas**: se o seu trace tiver extensões lentas, clique na caixa de seleção para filtrar outros segmentos e focar instantaneamente no gargalo potencial.

      * **Legenda**: Clique em qualquer cor da legenda para ver detalhes dos segmentos pertencentes a essa categoria de serviço.

        ### Lenda da cachoeira [#waterfall-legend]

        A cachoeira é dividida em diferentes segmentos:

        Amarelo: Mais de 25% do tempo total de transação foi gasto neste segmento.

        <img
          title="Slow segment background."
          alt="icon-alerts-yellow.png"
          src="/images/apm_icon_yellow-alert.webp"
        />

        Striped: Segmentos com classes e métodos não instrumentalizados com a configuração atual do agente.

        <img
          title="uninstrumented segment"
          alt="The icon that represents and uninstrumented segment"
          src="/images/apm_icon_uninstrumented-segment.webp"
        />

        Cada segmento na cascata exibe uma barra que representa sua duração relativa à duração do trace . A cor desta barra indica se o segmento pertence ao código do aplicativo, às chamadas de banco de dados ou às chamadas externas.

        <img
          title="transaction trace waterfall"
          alt="A screenshot showing the transaction trace waterfall view in the UI."
          src="/images/apm_screenshot-crop_transaction-trace-waterfall.webp"
        />

        ### Propriedades do segmento em cascata [#icons]

        Esses ícones podem identificar cada segmento:

        <table id="segment-types">
          <thead>
            <tr>
              <th style={{ width: "130px" }}>
                Propriedade do segmento
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
                  alt="New Relic distributed tracing service icon."
                  src="/images/new-relic-distributed-tracing-service-icon.webp"
                />
              </td>

              <td>
                Este ícone representa um nó que é o ponto de entrada de um serviço.
              </td>
            </tr>

            <tr id="in-process">
              <td>
                Em processo
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-in-process-span-icon.png"
                  alt="New Relic distributed tracing in-process span icon."
                  src="/images/new-relic-distributed-tracing-inprocess-icon.webp"
                />
              </td>

              <td>
                Este ícone representa um nó em processo, que é um nó que ocorre dentro de um processo (em oposição a um nó de processo cruzado). Os exemplos incluem instrumentação de middleware e nó criado pelo usuário.
              </td>
            </tr>

            <tr>
              <td>
                Armazenamento de dados
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-database-span-icon.png"
                  alt="New Relic distributed tracing datastore node icon."
                  src="/images/new-relic-distributed-tracing-databases-icon.webp"
                />
              </td>

              <td>
                Este ícone representa uma chamada de segmento para um armazenamento de dados.
              </td>
            </tr>

            <tr>
              <td>
                Externo
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-external-span-icon.png"
                  alt="New Relic distributed tracing external node icon."
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
                  alt="New Relic distributed tracing browser node icon."
                  src="/images/distributed-tracing-browser-span-icon.webp"
                />
              </td>

              <td>
                Este ícone representa um [segmento de aplicativo do browser](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing).
              </td>
            </tr>

            <tr>
              <td>
                Lambda
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-lambda-icon.png"
                  alt="New Relic distributed tracing external node icon."
                  src="/images/new-relic-distributed-tracing-databases-icon.webp"
                />
              </td>

              <td>
                Este ícone representa um nó de uma [função do Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/introduction-new-relic-monitoring-aws-lambda).
              </td>
            </tr>
          </tbody>
        </table>

        ### Regras de agrupamento de segmentos em cascata [#rollup]

        O New Relic agrupa automaticamente chamadas de métodos rápidas e repetidas dentro da cascata para facilitar o entendimento do rastreamento complexo da transação. Agrupar segmentos ajuda você a se concentrar em áreas potencialmente problemáticas sem ficar sobrecarregado por muitos segmentos.

        Veja como funciona:

      * **Chamadas rápidas**: quando você vê um segmento intitulado `fast calls`, significa que a New Relic agrupou várias chamadas concluídas rapidamente (menos de 7,5 ms cada). Geralmente, essas questões não são questões de desempenho, mas você pode expandir o grupo para visualizar segmentos individuais, se necessário.

      * **Chamadas idênticas**: Quatro ou mais chamadas idênticas consecutivas geralmente indicam um problema N+1, então a New Relic as recolhe para destacar o problema potencial. A expansão do grupo colapsado revela as três primeiras chamadas para análise.
    </TabsPageItem>
  </TabsPages>
</Tabs>

## Mergulhe mais fundo em seus dados [#deep-dive]

### Períodos lentos [#slow-spans]

Um nó marcado como um _intervalo lento_ atende aos seguintes critérios:

* O segmento é um nó folha ou de saída, o que significa que este nó não terá filhos.
* O segmento tem uma duração exclusiva maior ou igual a 25% da duração total trace .

### Código do aplicativo no rastreamento [#application-code]

Se um segmento estiver listado como **Application code** na tabela, indica que aquela seção do código não era instrumento. Você pode usar [instrumentação personalizada](/docs/apm/other-features/metrics/custom-instrumentation) para obter mais detalhes sobre essa parte do código. Os segmentos geralmente são listados como **Application code** para [rastreamento parcial](#partial).

### Rastreamento parcial [#partial]

Por motivos de desempenho, o APM captura apenas os primeiros 2.000 segmentos de um rastreamento da transação (900 para Node.js). Se um trace da transação exceder esse número de segmentos, o agente truncará o trace da transação e exibirá uma mensagem na parte superior da página <DNT>**Details**</DNT> :

`This is a partial trace.`

O agente APM possui regras diferentes sobre quando truncar segmentos.

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Agente APM
      </th>

      <th>
        Truncar regras de segmento
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Go
      </td>

      <td>
        A duração do segmento deve ser maior que o valor [`TransactionTracer.SegmentThreshold`](/docs/agents/go-agent/configuration/go-agent-configuration#txn-tracer-segment-threshold) definido na configuração do segmento Go.
      </td>
    </tr>

    <tr>
      <td>
        Java, .NET, Ruby
      </td>

      <td>
        Esses agentes truncam o rastreamento cronologicamente. Para obter mais informações, consulte a documentação tracer transação para [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-transaction-segments), [.NET](/docs/agents/net-agent/configuration/net-agent-configuration#transaction_tracer) ou [Ruby](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer) , conforme aplicável.
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        O agente Node.js captura apenas os primeiros 900 segmentos de um rastreamento da transação. Para obter mais informações, consulte [Configuração tracer de transações Node.js.](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_tracer_config)
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        Trunca com base na duração do segmento; os 2.000 segmentos mais lentos são capturados para o trace. Para obter mais informações, consulte [Configuração tracer de transações PHP](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page/).
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        Trunca com base na duração do segmento; os 2.000 segmentos mais lentos são capturados para o trace. Para obter mais informações, consulte [Configuração do tracer de transação do Python](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-settings).
      </td>
    </tr>
  </tbody>
</table>

### Rastreamento distribuído [#distributed-traces]

Quando um rastreamento da transação é baseado em dados distributed trace , você pode visualizar o distributed trace completo clicando no link distributed trace no cabeçalho da página.

Coisas a ter em mente:

* Todos os atributos são agrupados em uma única seção `Attributes` em vez de divididos nos três tipos de atributos padrão.
* Os nomes das métricas de segmento podem diferir ligeiramente entre rastreamento distribuído e rastreamento da transação.
* Rastreamento de pilha não são exibidos no segmento atributo.
* A página de detalhes trace exibirá informações ligeiramente diferentes quando você observar um distributed trace em vez de um rastreamento da transação.

## Solucionar problemas com detalhes do segmento [#segment-details]

Quando você seleciona um segmento, um painel é aberto com três páginas separadas de detalhes do segmento. Essas guias podem ajudar a solucionar problemas de desempenho.

1. Guia desempenho:

   * **Visualize tendências de desempenho**: os gráficos mostram a duração média da operação de um segmento e as taxas de transferência, revelando padrões e potenciais discrepâncias.
   * **Compare e contraste**: veja como o desempenho deste segmento específico se compara à média, identificando áreas que podem precisar de atenção.

2. Aba atributo:

   * **Explorar mais**: Compreender os significados dos atributos e as potenciais implicações de resolução de problemas. Você pode aprender mais usando nosso [dicionário de dados](/attribute-dictionary/?dataSource=Distributed+Tracing&event=Span).

3. Guia de detalhes:

   * **Informações básicas**: visualize detalhes críticos, como nome completo do segmento, fonte de dados e metadados relevantes. Você pode aprender mais em nossos [documentos distributed tracing ](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#prettified-span-names).
   * **Insights personalizados**: descubra informações específicas do segmento cruciais para a resolução de problemas, como a consulta ao banco de dados para segmentos de armazenamento de dados.

4. Guia de Log:

   * **Examine log**: Com [log in context](/docs/logs/logs-context/configure-logs-context-apm-agents/), você pode ver a mensagem do log relacionada ao seu trace da transação diretamente na interface do seu aplicativo.

A data de exibição dos segmentos é baseada no tipo de segmento. Por exemplo, os detalhes de um segmento de armazenamento de dados incluirão a consulta ao banco de dados.
