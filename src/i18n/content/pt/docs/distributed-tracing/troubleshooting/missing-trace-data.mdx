---
title: Dados trace ausentes
type: troubleshooting
tags:
  - Understand dependencies
  - Distributed tracing
  - Troubleshooting
metaDescription: 'New Relic distributed tracing: Troubleshoot missing spans or other missing data in your distributed traces.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você ativou [distributed tracing](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing) , mas os dados que você esperava ver não aparecem na interface distributed tracing do New Relic.

## Antes que você comece [#before]

Antes de realizar a resolução de problemas, pode ser útil:

* Revise os detalhes técnicos de [como funciona distributed tracing ](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works).

* Use nosso [aplicativo de status de instrumentação](https://one.newrelic.com/dt-setup-assistant) para ter uma visão geral de sua instrumentação trace , incluindo taxas de amostragem. Isso pode ajudá-lo a entender períodos ausentes e rastreamentos fragmentados. Para encontrar isso, acesse:

  <DNT>
    **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Apps > Distributed tracing instrumentation status**
  </DNT>

  .

## Soluções

Aqui estão algumas causas e soluções para dados trace ausentes:

### Problemas com habilitação ou instrumento [#enable]

<CollapserGroup>
  <Collapser
    id="not-enabled"
    title="Períodos ausentes devido ao serviço não ter distributed tracing ativado"
  >
    Para que distributed tracing relate detalhes de todos os nós em um trace, cada aplicativo deve ser monitorado por um agente New Relic que tenha [distributed tracing ativado](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing).

    Se a conta New Relic de um aplicativo não tiver distributed tracing habilitado, ele terá estes problemas:

    * Sua página de interface distributed tracing não terá dados.
    * Ele não reportará dados para rastreamento distribuído de outras contas.
  </Collapser>

  <Collapser
    id="manual-instrumentation"
    title="Aplicativos/serviços ausentes podem exigir instrumentação manual"
  >
    Ao habilitar distributed tracing para aplicativos e serviços que o New Relic utiliza automaticamente, você geralmente verá dados completos e detalhados para esses nós na interface distributed tracing .

    No entanto, você pode perceber que alguns serviços ou aplicativos estão faltando no rastreio ou que há alguns spans internos que você espera ver que estão faltando. Se for esse o caso, você pode querer implementar [a instrumentação personalizada](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis) do aplicativo ou transação específica para ver mais detalhes no rastreamento. Alguns exemplos de quando você pode precisar fazer isso:

    * <DNT>
        **Transactions not automatically instrumented**
      </DNT>

      . Para garantir que seu aplicativo seja automaticamente instrumento, leia a [documentação de compatibilidade e requisitos](/docs/apm/new-relic-apm/getting-started/introduction-apm) do agente New Relic que você está usando. Caso uma aplicação não seja um instrumento automático, ou se desejar adicionar instrumentação de atividade específica, consulte [instrumentação personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/#implementing).

    * <DNT>
        **All Go applications**
      </DNT>

      . O agente Go, diferentemente de outros agentes, requer instrumentação manual do seu código. Para obter instruções, consulte [Instrumento a aplicativo Go](/docs/agents/go-agent/instrumentation/instrument-go-transactions).

    * <DNT>
        **A service doesn't use HTTP**
      </DNT>

      . Se um serviço não se comunicar via HTTP, o agente New Relic não enviará cabeçalhos distributed tracing . Esse pode ser o caso de algum aplicativo que não seja da web ou fila de mensagens. Para remediar isso, use a para instrumentar o [distributed tracing API](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis) aplicativo chamador ou chamado.
  </Collapser>
</CollapserGroup>

### Problemas com vãos [#spans]

<CollapserGroup>
  <Collapser
    id="advanced-infinite"
    title="Rastreamento infinito: períodos ausentes"
  >
    Se seu <InlinePopover type="apm"/>agente não conseguir gravar dados com rapidez suficiente no observador trace , `queue_size` será uma configuração adicional do agente APM para limitar o número de períodos que o agente manterá. Veja os exemplos a seguir para seu agente:

    <table>
      <thead>
        <tr>
          <th>
            Método de configuração .NET
          </th>

          <th>
            Exemplo
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Arquivo de configuração
          </td>

          <td>
            ```xml
            <configuration . . . >
               <infiniteTracing>
                  <trace_observer>
                     <span_events queue_size="100000" />
                  </trace_observer>
               </infiniteTracing>
            </configuration>
            ```
          </td>
        </tr>

        <tr>
          <td>
            Variável de ambiente
          </td>

          <td>
            ```ini
            NEW_RELIC_INFINITE_TRACING_SPAN_EVENTS_QUEUE_SIZE=100000
            ```
          </td>
        </tr>
      </tbody>
    </table>

    <table>
      <thead>
        <tr>
          <th>
            Método de configuração Python
          </th>

          <th>
            Exemplo
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Arquivo de configuração
          </td>

          <td>
            ```ini
            infinite_tracing.span_queue_size = 100000
            ```
          </td>
        </tr>

        <tr>
          <td>
            Variável de ambiente
          </td>

          <td>
            ```ini
            NEW_RELIC_INFINITE_TRACING_SPAN_QUEUE_SIZE = 100000
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="export"
    title="Período ausente não sendo exportado"
  >
    Às vezes, a propagação do cabeçalho é bem-sucedida, mas as informações de extensão não são enviadas para o New Relic. Por exemplo, se o OpenTelemetry não for um instrumento com um exportador New Relic, os detalhes do span nunca chegarão ao New Relic.

    Neste diagrama, observe que a propagação do cabeçalho foi bem-sucedida, mas nenhum exportador está configurado no Serviço 2 para enviar o span para o New Relic:

    <img
      title="missing-exporter.png"
      alt="Diagram showing missing exporter."
      src="/images/distributed-tracing_diagram_missing-exporter.webp"
    />

    O diagrama a seguir também mostra a propagação de cabeçalho bem-sucedida, mas inclui um exportador no Serviço 2 que envia os detalhes do intervalo para o New Relic (consulte [Trace API](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api)):

    <img
      title="exporter-deployed.png"
      alt="Diagram showing a deployed exporter."
      src="/images/distributed-tracing_diagram_exporter-deployed.webp"
    />
  </Collapser>

  <Collapser
    id="sampling"
    title="Vãos ausentes devido ao processo de amostragem"
  >
    Distributed tracing padrão para <InlinePopover type="apm"/>usa [amostragem adaptativa](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works#sampling). Isso significa que uma porcentagem das chamadas para um serviço será relatada como parte de um distributed trace. Chamadas específicas para o seu serviço podem não ter sido selecionadas para amostragem.
  </Collapser>

  <Collapser
    id="agent-limits"
    title="Períodos ausentes devido aos limites de período esgotados"
  >
    Existem [limites para o número de intervalos que podem ser coletados e exibidos](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#1k-limit). Se um aplicativo gerar um número muito grande de intervalos para uma única chamada, ele poderá exceder o limite de coleta de intervalos do agente APM para esse ciclo de coleta. Isso pode resultar na perda de intervalos e limitar significativamente o número de rastreamentos que o agente pode amostrar e relatar completamente.

    Atualmente, mostramos apenas 10.000 spans por vez.
  </Collapser>

  <Collapser
    id="late-spans"
    title="Períodos ausentes devido a períodos enviados com atraso"
  >
    Os spans devem ser enviados nos últimos sessenta minutos para serem capturados em um índice trace . Se você enviar intervalos com mais de sessenta minutos, mas mais recentes que um dia, os dados do intervalo ainda serão gravados. No entanto, ele não será inserido no índice trace , que controla a lista trace na interface do usuário distributed tracing . Se um intervalo tiver um timestamp com mais de um dia, ele será descartado. Isso geralmente ocorre quando há distorção de relógio (diferenças de tempo) entre sistemas ou trabalhos em segundo plano de longa duração.

    <Callout variant="important">
      Quaisquer intervalos enviados por meio do [protocolo OpenTelemetry](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/otlp.md) (OTLP, abreviadamente) com mais de sessenta minutos não serão gravados no [NRDB](/docs/data-apis/get-started/nrdb-horsepower-under-hood/), produzindo o seguinte NrIntegrationError:

      ```
      The span timestamp cannot be older than 60 minutes.
      ```
    </Callout>
  </Collapser>
</CollapserGroup>

### Problemas com detalhes trace

<CollapserGroup>
  <Collapser
    id="middleware-failure"
    title="Middleware não reconhece cabeçalho proprietário New Relic"
  >
    Se a sua transação estiver enviando apenas o cabeçalho proprietário da New Relic, algum middleware poderá não reconhecer o formato e então descartar as informações conforme mostrado neste diagrama:

    <img
      title="broken-trace.png"
      alt="Diagram showing dropped header information."
      src="/images/distributed-tracing_diagram_broken-trace.webp"
    />

    Uma solução é atualizar seu agente New Relic para uma versão que suporte W3C Trace Context. No diagrama abaixo, o agente New Relic compatível com W3C passa o cabeçalho anterior junto com dois cabeçalhos padronizados:

    <img
      title="upgraded-agent.png"
      alt="Diagram showing a W3C compatible New Relic agent."
      src="/images/distributed-tracing_diagram_upgraded-agent.webp"
    />
  </Collapser>

  <Collapser
    id="proxy"
    title="Um intermediário está faltando ou não está passando no contexto do trace"
  >
    Alguns problemas potenciais com proxies e outros intermediários:

    * <DNT>**Incomplete trace.**</DNT> Alguns intermediários não propagarão automaticamente o [cabeçalhodistributed tracing ](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works#headers). Nesse caso, você deve configurar esse componente para permitir que o cabeçalho seja passado da origem ao destino. Para obter instruções, consulte a documentação desse componente intermediário.

    * <DNT>**Missing intermediary in trace.**</DNT> Se o intermediário for monitor New Relic, certifique-se de que ele propague o cabeçalho `newrelic` que é gerado ou atualizado pelo agente New Relic em execução nesse intermediário. Isso pode se manifestar quando um intermediário estava anteriormente visível no rastreamento, mas desapareceu depois que distributed tracing foi habilitado para uma entidade upstream (por exemplo, um aplicativo de monitoramento de browser).

      <Callout variant="tip">
        Se alguma entidade relatar dados trace para outro sistema de rastreamento, você poderá usar o ID trace da interface do New Relic para pesquisar outros sistemas de rastreamento em busca de períodos ausentes.
      </Callout>
  </Collapser>

  <Collapser
    id="mixed-sourcees"
    title="Unindo trechos de fontes mistas"
  >
    Se cada agente em uma cadeia suportar W3C Trace Context, então poderemos unir os trechos em um trace completo. Se parte da cadeia for de um agente, como o Zipkin, que não oferece suporte W3C Trace Context, os intervalos provenientes desse agente poderão não ser incluídos no trace.
  </Collapser>

  <Collapser
    id="account-access"
    title="Detalhes trace são ofuscados"
  >
    Se um trace contiver dados do aplicativo monitor de várias contas New Relic e suas permissões de usuário não permitirem que você acesse essas contas, alguns detalhes do intervalo e do serviço serão [ofuscados na interface](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#account-access).

    Por exemplo, você poderá ver uma série de asteriscos (\*\*\*\*\*) em vez do nome do serviço na sua lista distributed tracing se não tiver acesso à conta vinculada ao serviço.
  </Collapser>

  <Collapser
    id="mismatched-trace-details"
    title="As informações da lista trace e os detalhes trace não correspondem"
  >
    A lista trace é gerada por índices trace , que são capturados em uma janela de vinte minutos a partir do momento em que os primeiros spans são recebidos.

    Geralmente, isso se deve a [períodos tardios](#late-spans).
  </Collapser>

  <Collapser
    id="long-traces-short-backend"
    title="Rastreamento longo com tempos backend curtos"
  >
    Se você estiver observando tempos backend excepcionalmente curtos para rastreamentos longos, isso provavelmente é um problema com o carimbo de data/hora enviado.

    Por exemplo, o intervalo raiz pode reposicionar microssegundos como milissegundos. Isso também pode acontecer se o intervalo raiz for um aplicativo de browser. Ao usar um cliente externo, como um browser da Web, você poderá enfrentar distorções de relógio (diferenças de tempo) com mais frequência.
  </Collapser>
</CollapserGroup>

### Problemas com aplicativo do browser [#browser]

<CollapserGroup>
  <Collapser
    id="spans-browser"
    title="Períodos e transações ausentes após a ativação de um aplicativo de browser"
  >
    Versões mais antigas de alguns <InlinePopover type="apm"/>agentes são incompatíveis com distributed tracing para aplicativos de browser. Se o aplicativo do browser fizer uma solicitação AJAX para um aplicativo APM executando um agente incompatível, o agente APM poderá não registrar a transação e abranger os dados dessa solicitação.

    Se distributed tracing estiver habilitado para um aplicativo de browser e você não estiver vendo dados de transação ou de intervalo para solicitações downstream do APM, revise os [dados do browser em requisitos distributed tracing ](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#requirements)e confirme se todos os aplicativos estão executando versões suportadas do agente APM.
  </Collapser>

  <Collapser
    id="browser-spans-missing"
    title="Não vendo os períodos finais do usuário do aplicativo do browser"
  >
    Se o rastreamento parecer estar faltando nos intervalos do usuário final, leia e entenda os distributed tracing [requisitos pelo](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#requirements) browser e [ative os procedimentos](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#enable).

    Na [página da interface<DNT>**AJAX**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls), há links para a interface distributed tracing , independentemente de haver períodos de usuário final presentes nesse trace. Para obter detalhes sobre quais dados geram intervalos, consulte [Requisitos](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#requirements).
  </Collapser>

  <Collapser
    id="orphan-browser-spans"
    title="Os períodos do browser não estão conectados a outros períodos"
  >
    Versões mais antigas de alguns <InlinePopover type="apm"/>agentes são incompatíveis com distributed tracing para aplicativos de browser. Se os intervalos de APM estiverem ausentes consistentemente no rastreamento que inclui o aplicativo do browser, consulte os [dados do browser nos requisitos distributed tracing ](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#requirements)e confirme se todos os aplicativos estão executando versões suportadas do agente APM.

    Para outras causas de extensões de browser órfãs, consulte [relatórios de extensão de Browser](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#browser-spans).
  </Collapser>
</CollapserGroup>

### Outros problemas [#other]

<CollapserGroup>
  <Collapser
    id="multiple-app-names"
    title="Pesquise por entity.name e não encontre nomes de aplicativos associados"
  >
    Causa potencial: para aplicativos que têm [vários nomes de aplicativo](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app), o atributo `entity.name` será associado somente ao nome do aplicativo principal. Para pesquisar por outros nomes de aplicativos, pesquise usando o atributo `appName` .
  </Collapser>

  <Collapser
    id="supporting-open-telemetry"
    title="Suporte para OpenTelemetry"
  >
    Dúvidas sobre integração com OpenTelemetry devem ser encaminhadas ao [Fórum de Suporte](https://discuss.newrelic.com).
  </Collapser>
</CollapserGroup>

## Outros fatores que afetam o acesso [#more-info]

Para obter mais informações sobre os fatores que podem afetar sua capacidade de acessar o recurso New Relic, consulte [Fatores que afetam o acesso](/docs/accounts/accounts-billing/general-account-settings/factors-affecting-access-features-data).
