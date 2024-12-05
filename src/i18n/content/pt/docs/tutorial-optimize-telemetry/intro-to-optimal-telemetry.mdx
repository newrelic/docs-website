---
title: Otimize seus dados de telemetria com New Relic
metaDescription: Our data ingest governance guide helps you get optimal value for the telemetry data you're reporting to New Relic.
freshnessValidatedDate: '2023-07-26T00:00:00.000Z'
translationType: machine
---

Os dados de telemetria, ou dados coletados de uma fonte e relatados a um monitor para análise, estão se tornando cada vez mais usados na organização moderna, com múltiplas fontes de dados para coletar. Mas navegar e gerenciar esses dados exige considerações próprias, e otimizar a forma como você lida com seus dados de telemetria pode economizar tempo e dinheiro. Isto é especialmente verdadeiro para organizações complexas que possuem numerosas unidades de negócios e grupos de trabalho.

É aqui que entra <DNT>**Data ingest governance**</DNT>, ou a prática de garantir o valor ideal para os dados de telemetria coletados pela sua organização. Nosso guia irá ajudá-lo a se preparar e executar as práticas recomendadas para usar esse conceito em sua organização. Depois de concluir esta série de tutoriais, você:

* Reduza dados de telemetria redundantes ou desnecessários, economizando tempo e dinheiro.
* Entenda exatamente quais grupos dentro da organização estão contribuindo com quais dados.
* Exponha a origem dos seus dados de telemetria e reduza os silos de gerenciamento de dados.
* Contabilize os custos de ingestão de forma clara e concisa.
* Ajuste o volume de ingestão com contexto completo do valor de observabilidade dos dados.

<img
  title="Data ingest governance path"
  alt="A diagram displaying the path for setting up data ingest governance with New Relic. The path is 1. Baseline your data, 2. detect anomalies, and 3. optimize your telemetry"
  src="/images/telemetry_diagram_data-ingest-path.webp"
/>

## Antes de você começar [#before-begin]

Você precisará garantir que os dados sejam gerenciados com o New Relic para poder usar <DNT>**data ingest governance**</DNT> para otimizá-los. Consulte nosso [documento de gerenciamento de dados](/docs/data-apis/manage-data/manage-your-data/) se precisar de mais informações.

<Collapser
  id="understand-nr-consumption-metrics"
  title="Entenda os tipos de eventos de consumo"
>
  Toda a telemetria faturável é rastreada com nossos eventos `NrConsumption` e `NrMTDConsumption` . Este guia se concentra em como consultar `NrConsumption`, que fornece dados mais granulares e em tempo real do que `NrMTDConsumption`. O atributo `NrConsumption` `usageMetric` denota o tipo de telemetria.

  Usando `NrConsumption`, você pode fazer perguntas como "Quantos <InlinePopover type="browser"/>dados cada conta ingeriu nos últimos 30 dias?" e "Como a ingestão mudou desde os 30 dias anteriores?" Aqui está uma consulta retornando esses dados:

  ```sql
  FROM NrConsumption SELECT sum(GigabytesIngested) WHERE usageMetric = 'BrowserEventsBytes' SINCE 30 days AGO COMPARE WITH 30 days AGO FACET consumingAccountName
  ```

  A resposta mostra quantos GBs de dados de monitoramento do Browser você ingeriu por conta.

  ```shell
  Banking platform, 75 GB, +2.9%
  Marketing platform, 40 GB, -1.3%
  ```

  Abaixo está um detalhamento dos diferentes tipos de `usageMetric` , o evento constituinte (tipos de evento onde os dados são armazenados) e o tipo de agente ou mecanismo responsável pela criação da ingestão de dados.

  ### Tabela de detalhamento de telemetria faturável

  <table>
    <thead>
      <tr>
        <th style={{ width: "200px" }}>
          NrcConsumption.usageMetric
        </th>

        <th style={{ width: "200px" }}>
          Evento constituinte
        </th>

        <th>
          Fonte
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          InfraHostBytes
        </td>

        <td>
          `SystemSample`, `StorageSample`, `InfrastructureEvent`, `NetworkSample`
        </td>

        <td>
          Agente de infraestrutura
        </td>
      </tr>

      <tr>
        <td>
          InfraProcessBytes
        </td>

        <td>
          `ProcessSample`
        </td>

        <td>
          Agente de infraestrutura
        </td>
      </tr>

      <tr>
        <td>
          InfraIntegrationBytes
        </td>

        <td>
          Vários eventos para integração de plataforma de terceiros, bem como `ContainerSample`
        </td>

        <td>
          [integração no host](/docs/infrastructure/host-integrations/get-started/introduction-host-integrations/) e certa [integração na nuvem](/docs/infrastructure/infrastructure-integrations/get-started/introduction-infrastructure-integrations/#cloud)
        </td>
      </tr>

      <tr>
        <td>
          ApmEventsBytes
        </td>

        <td>
          `Transaction`, `TransactionError` e possivelmente `WorkloadStatus`
        </td>

        <td>
          Agente APM(s)
        </td>
      </tr>

      <tr>
        <td>
          TracingBytes
        </td>

        <td>
          `Span`, `SpanEvent`
        </td>

        <td>
          Agente APM(s) e OpenTelemetry
        </td>
      </tr>

      <tr>
        <td>
          BrowserEventsBytes
        </td>

        <td>
          `Browser`, `BrowserInteraction`, `Browser:EventLog`, `Browser:JSErrors`, `JavaScriptError`, `PageView`, `PageViewTiming`, `PcvPerf`
        </td>

        <td>
          agente browser
        </td>
      </tr>

      <tr>
        <td>
          MobileEventsBytes
        </td>

        <td>
          `Mobile`, `MobileReqest`, `MobileRequestError`, `MobileSession`, `MobileHandleException`, `MobileCrash`
        </td>

        <td>
          Agente móvel
        </td>
      </tr>

      <tr>
        <td>
          SeverlessBytes
        </td>

        <td>
          Específico da nuvem (ou seja, evento AWS Lambda)
        </td>

        <td>
          Específico da nuvem (ou seja, integração AWS Lambda)
        </td>
      </tr>

      <tr>
        <td>
          LoggingBytes
        </td>

        <td>
          `Log` bem como evento específico da partição do padrão `[partition].Log`
        </td>

        <td>
          Vários (Fluentd, FluentBit, Syslog, serviços de streaming específicos para nuvem)
        </td>
      </tr>

      <tr>
        <td>
          MetricEventBytes
        </td>

        <td>
          `Metric`
        </td>

        <td>
          Da API métrica e da integração que a utiliza ([métricas dimensionais](/docs/data-apis/understand-data/new-relic-data-types/#dimensional-metrics)), ou de agentes como agente Browser, agente APM ou agente móvel ([métrica de fração de tempo data](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data)).
        </td>
      </tr>

      <tr>
        <td>
          Bytes de eventos personalizados
        </td>

        <td>
          Vários
        </td>

        <td>
          Várias API. [Use `SHOW EVENT TYPES` para visualizar todos os tipos de eventos disponíveis em uma conta](#show-event-types).
        </td>
      </tr>
    </tbody>
  </table>
</Collapser>

Você também precisará garantir que você ou sua equipe tenham a capacidade de rastrear e gerenciar:

* Trabalhar com um gerente para manter o destino de ingestão mensal, se aplicável.
* Monitoramento de ingestão de dados base e resposta a anomalias.
* Elaboração e aprovação de planos de otimização/redução de dados conforme necessário.
* Participar de check-ins agendados para analisar dados baseline e compará-los com o destino ingerido.
* Fazendo modificações para ingerir destino conforme necessário.

Se ainda não o fez, considere ter uma equipe de centro de excelência em observabilidade (ou algo semelhante) responsável por:

* Mantendo o relacionamento com a New Relic.
* Governando contas e usuário.
* Integração de novas equipes e indivíduos.
* Manter uma base de conhecimento de observabilidade.
* Promover a colaboração e o compartilhamento entre as equipes.

Ter uma equipe como essa pode ser fundamental para ajudá-lo a obter observabilidade de alta qualidade para toda a sua organização.

## O que há nesta série?

<DocTiles>
  <DocTile
    title="Create baseline reports"
    path="/docs/tutorial-optimize-telemetry/create-baseline-report/"
  >
    Aprenda como usar o dashboard correto para criar sua linha de base de ingestão
  </DocTile>

  <DocTile
    title="Find anomalies"
    path="/docs/tutorial-optimize-telemetry/detect-anomalies/"
  >
    Aprenda como usar seu relatório de baseline para ajudá-lo a encontrar anomalias com sua telemetria
  </DocTile>

  <DocTile
    title="Create an optimization plan"
    path="/docs/tutorial-optimize-telemetry/develop-optimize-plan/"
  >
    Aprenda como desenvolver um plano de otimização para ajudar a reduzir seus custos de ingestão
  </DocTile>

  <DocTile
    title="Optimize your ingest data"
    path="/docs/tutorial-optimize-telemetry/data-optimize-techniques/"
  >
    Aprenda como usar várias técnicas para otimizar sua ingestão geral
  </DocTile>
</DocTiles>
