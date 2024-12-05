---
title: Crie um relatório baseline
metaDescription: Create a baseline ingest report to begin optimizing your data.
freshnessValidatedDate: '2023-07-26T00:00:00.000Z'
translationType: machine
---

Antes de poder otimizar seus dados, é necessário obter uma visão de alto nível de toda a telemetria que sua organização gera atualmente. Para fazer isso, você precisará dividir os dados de ingestão em vários grupos, como conta, tipo de telemetria e aplicativo. Depois de fazer isso, você poderá personalizar seu relatório, baixar e instalar o painel opcional para maior granularidade e otimizar sua telemetria para entender exatamente quais grupos em sua organização estão contribuindo com quais tipos e quantidades de dados.

Este tutorial aborda como gerar um relatório para seus dados com base na organização, nas contas e no tipo de dados de telemetria. Depois de criados, você aprenderá como criar detalhamentos detalhados dos dados com base no tipo de aplicativo, cluster do Kubernetes e integração de infraestrutura.

<img
  title="Data Ingest Dash"
  alt="A screenshot of New Relic's Data Ingest Governance dashboard"
  src="/images/dashboards_screenshot-crop_data-ingest-gov-dashboard.webp"
/>

<Steps>
  <Step>
    ## Instalar o de governança de ingestão de dados baseline dashboard [#install-dash]

    Este é o dashboard que você usará para criar uma linha de base e monitor seus dados de ingestão. A guia <DNT>**Overview**</DNT> fornece vários gráficos para ajudar a monitorar sua ingestão, e há diversas guias que fornecem visualizações detalhadas de tipos de telemetria específicos, como dados do browser, dados de APM, registro e rastreamento.

    Para gerar o relatório, você precisa começar a otimizar sua telemetria, você precisa usar a guia <DNT>**Baseline Reports**</DNT> depois de instalar o painel seguindo as etapas abaixo:

    Para instalar o dashboard:

    1. Navegue até o [início rápido de governança de ingestão de dados](https://onenr.io/0PoR8zpDYQG).

    2. Clique em

       <DNT>
         **Install this quickstart**
       </DNT>

       na parte superior direita da janela do Browser.

    3. Selecione sua conta principal ou de nível superior no alternador de contas, se aplicável.

    4. Clique em

       <DNT>
         **Done**
       </DNT>

       .

    5. Quando a instalação do guia de início rápido terminar, abra o dashboard

       <DNT>
         **Data ingest governance baseline**
       </DNT>

       .
  </Step>

  <Step>
    ## Adicione indicadores de destino de ingestão ao seu dashboard [#add-ingest]

    Depois de configurar o baseline dashboard, você deverá adicionar indicadores de destino ao dashboard para monitor. Esses indicadores ajudam você a otimizar seus dados de ingestão, fornecendo metas métricas para você superar ou ficar abaixo, dependendo de suas necessidades. Alguns destinos que você pode querer criar são:

    * Um destino organizacional geral sobre taxa diária ou ingestão mensal.
    * Destino por tipo de dados para garantir a distribuição ideal (por exemplo 1 TB por dia para log e 2 TB por dia para métrica).
    * Destino para subcontas ou unidades de negócios específicas.

      Para adicionar esses indicadores de destino ao seu dashboard, você pode criar novos gráficos inteiramente ou modificar os gráficos que já existem no dashboard.

      ### Para criar um novo gráfico:

    1. No baseline dashboard,

       <DNT>
         **+ Add widget**
       </DNT>

       selecione .

    2. Selecione

       <DNT>
         **Add a chart**
       </DNT>

       .

    3. Insira a consulta NRQL que o gráfico usará.

    4. Selecione

       <DNT>
         **Run**
       </DNT>

       .

       Por exemplo, se você quiser que sua ingestão organizacional total seja inferior a 360 TB por mês, poderá adicionar um gráfico de linhas de limite adicionando o número estático `360000` à sua instrução `SELECT` usando a seguinte instrução NRQL:

       ```sql
       SELECT 360000, rate(sum(GigabytesIngested), 30 day) AS '30 Day Rate' FROM NrConsumption WHERE productLine='DataPlatform' since 30 days ago limit max compare with 1 month ago TIMESERIES 7 days
       ```

       ### Para modificar um gráfico existente:

    5. No baseline dashboard, selecione

       <DNT>
         **...**
       </DNT>

       para o gráfico que você deseja modificar.

    6. Selecione

       <DNT>
         **Edit**
       </DNT>

       .

    7. Modifique a consulta NRQL que o gráfico usa conforme necessário.

    8. Selecione

       <DNT>
         **Run**
       </DNT>

       .

       Por exemplo, depois de criar o gráfico acima, você pode decidir criar uma taxa de ingestão diária de destino dividindo 360.000 por 30 e usando 12.000 como o número de destino diário. Para fazer isso, você atualizaria o gráfico `Daily ingest rate (compare with 3 months prior)` usando a seguinte consulta:

       ```sql
       SELECT 12000, rate(sum(GigabytesIngested), 1 day) AS avgGbIngestTimeseries FROM NrConsumption WHERE productLine='DataPlatform' TIMESERIES AUTO since 9 months ago limit max COMPARE WITH 3 months ago
       ```
  </Step>

  <Step>
    ## Gere seu relatório de ingestão de 30 dias [#generate-report]

    <img
      src="/images/oma-oe-dg_diagram_baseline-sheet.webp"
      alt="Baseline tabular spreadsheet"
      title="Screenshot of a baseline report example"
    />

    Depois de instalar o baseline dashboard e alterar os dados que ele relata para atender às suas necessidades, você poderá gerar um relatório tabular dos dados de ingestão depois de passar tempo suficiente para coletar a quantidade apropriada de dados. Você pode fazer isso em <DNT>**Baseline report**</DNT> e o intervalo de tempo mais comum é de 30 dias. Para gerar o relatório:

    1. Abra o de governança de ingestão de dados instalado baseline dashboard anteriormente.

    2. Selecione a guia

       <DNT>
         **Baseline report**
       </DNT>

       .

    3. Selecione

       <DNT>
         **...**
       </DNT>

       na tabela

       <DNT>
         **Last 30 days**
       </DNT>

       e escolha

       <DNT>
         **Export as CSV**
       </DNT>

       .

    4. Escolha se deseja importar o CSV para o Planilhas Google ou outra planilha de sua preferência.

       <Callout variant="tip">
         Caso você não tenha instalado o dashboard, você também pode acessar esta consulta e criar um gráfico personalizado no [criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder):

         ```sql
         SELECT sum(GigabytesIngested) AS 'gb_ingest_30_day_sum', rate(sum(GigabytesIngested), 1 day) AS 'gb_ingest_daily_rate', derivative(GigabytesIngested, 90 day) as 'gb_ingest_90_day_derivative' FROM NrConsumption WHERE productLine='DataPlatform' since 30 days ago facet consumingAccountName, usageMetric  limit max
         ```
       </Callout>
  </Step>
</Steps>

### Personalize seu relatório [#customize-report]

Depois de criar seu relatório de ingestão, você poderá adicionar mais personalizações a ele. É uma boa ideia ajustar o relatório de acordo com as necessidades da sua organização, e isso pode ajudá-lo quando chegar a hora de começar a otimizar sua ingestão. Existem dois campos que você pode usar para personalizar seu relatório:

* Notas: Anote quaisquer anomalias de crescimento, bem como possíveis explicações para elas.
* Contato técnico: Nome do gerente de uma determinada conta ou alguém relacionado ao tipo específico de telemetria.

Agora que você criou seu relatório baseline e o personalizou conforme necessário, você pode passar a usar esse relatório para encontrar anomalias.

<UserJourneyControls nextStep={{"path":"/docs/tutorial-optimize-telemetry/detect-anomalies/","title":"Próxima Etapa","body":"Aprenda como usar seu relatório de baseline para ajudá-lo a encontrar anomalias com sua telemetria"}}/>
