---
title: Detectar anomalia de ingestão
metaDescription: Use your baseline report to detect ingest anomalies.
freshnessValidatedDate: '2023-07-31T00:00:00.000Z'
translationType: machine
---

Depois de instalar o [dashboard linha de base](/docs/tutorial-optimize-telemetry/create-baseline-report/), você deve ficar de olho nele para detectar qualquer anomalia de ingestão com a maior freqüência possível. Embora você tenha que esperar até ter dados suficientes para otimizar sua ingestão, você pode usar seu dashboard para encontrar problemas com sua ingestão muito mais cedo. Você pode usar o baseline dashboard como está ou fazer download do painel opcional para obter opções ainda maiores de detecção de anomalias.

Você também deve configurar <InlinePopover type="alerts"/>para ajudar a notificá-lo sobre problemas à medida que eles ocorrem. Você pode usar nosso [guia de alerta de ingestão](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/usage-queries-alerts) para criar uma grande variedade de alertas, mas recomendamos que você configure estes dois alertas no mínimo:

* Um alerta de limite para notificar se você exceder o destino mensal para ingestão de dados além dos aumentos sazonais
* Um alerta de anomalia para notificá-lo sobre um aumento repentino e acentuado na ingestão de dados

<Callout variant="tip">
  Novo na criação de alertas com nossa plataforma? Confira nosso [tutorial de criação e gerenciamento de alertas](/docs/tutorial-create-alerts/create-new-relic-alerts/) para aprender tudo o que você precisa sobre como criar alertas New Relic.
</Callout>

## Monitor anomalia com visualização Lookout [#lookout]

Depois de instalar o dashboard, você poderá obter uma visualização de alto nível dos seus padrões de ingestão com a visualização <DNT>**Lookout**</DNT>. A partir daí, você pode criar uma consulta NRQL para procurar qualquer anomalia de ingestão. Por exemplo, a consulta NRQL a seguir fornecerá informações sobre todas as anomalias de ingestão de `usageMetric` nas últimas 24 horas:

```sql
SELECT rate(sum(GigabytesIngested), 1 day) AS avgGbIngest FROM NrConsumption WHERE productLine='DataPlatform' FACET usageMetric 
```

<img
  src="/images/oma-oe-dg_screenshot-crop_lookout-view-telem-type.webp"
  alt="Lookout view usage metric"
  title="Lookout view usage metric"
/>

Você pode alterar o campo de faceta para qualquer coisa que desejar para obter mais ou menos granularidade em seus dados de ingestão. Por exemplo, alterar `usageMetric` para `consumingAccountName` forneceria informações ainda mais detalhadas ao gerar relatórios sobre a ingestão por nome de conta, conforme mostrado abaixo:

<img
  src="/images/oma-oe-dg_screenshot-crop_lookout-view-consuming-account.webp"
  alt="Lookout view consuming account"
  title="Lookout view consuming account"
/>

### Instale o dashboard de detalhamento da entidade (opcional) [#install-entity-breakdown-dashboard]

O de ingestão baseline dashboard que usa `NrConsumption` como fonte primária. Mas você pode descobrir que também deseja informações sobre como estimar o tráfego de ingestão para outro evento ou métrica. Se fizer isso, você poderá instalar o dashboard de detalhamento da entidade , que ajuda a criar outras visualizações que usam `bytescountestimate()` para ajudar a estimar seus dados de ingestão.

Para instalar o dashboard de detalhamento da entidade:

1. Vá para o [mesmo início rápido](https://onenr.io/0PoR8zpDYQG) usado para o baseline dashboard.

2. Selecione <DNT>**Install this quickstart**</DNT>.

3. Instale o dashboard em qualquer conta que contenha <InlinePopover type="apm"/>, <InlinePopover type="browser"/>, monitoramento de Mobile ou cluster do Kubernetes usando a [função de importação dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/#dashboards-import). Você pode instalar esse dashboard em várias contas, mas evite instalá dashboard lo em uma conta de proprietário de parceria ou POA.

   <Callout variant="tip">
     Se você tiver uma estrutura de conta pai/filho, poderá instalar o dashboard em uma conta pai e modificar o dashboard para ter gráficos específicos da conta dashboard completo .
   </Callout>

4. Selecione <DNT>**Done**</DNT>.

5. Quando a instalação do guia de início rápido terminar, abra o dashboard <DNT>**Data governance entity breakdowns**</DNT> para acessar seus dados.

Você pode consultar [esta seção](/docs/new-relic-solutions/observability-maturity/operational-efficiency/dg-baselining#understand-nr-consumption-metrics) para ver exatamente quais tipos de eventos são usados nessas análises. Observe que essas consultas consomem mais recursos porque não funcionam a partir de uma fonte de dados pré-agregada como `NrConsumption`, portanto, pode ser necessário ajustar os prazos usando cláusulas `WHERE` e `LIMIT` adicionais para fazê-las funcionar melhor em alguns de seus ambientes.

### Instale o painel integração na nuvem (opcional) [#install-cloud-integration-dashboards]

A integração na nuvem da New Relic geralmente oferece uma fonte significativa de crescimento na ingestão de dados. Mas sem boas visualizações, muitas vezes é difícil descobrir de onde vem o crescimento da ingestão. Geralmente é porque essas integrações não fazem parte do pipeline normal de CI/CD de uma organização ou não fazem parte do sistema normal de gerenciamento de configuração.

Felizmente, temos um conjunto de dashboards que você pode instalar [diretamente do New Relic Instant observabilidade](https://onenr.io/0EPwJJO9Ow7). O painel individual instalado por este pacote inclui:

* Integração AWS
* Integração Azure
* Integração do Google Cloud Platform
* Integração sem host
* Kubernetes

<Collapser
  id="Exercise"
  title="Verificando seus dados"
>
  Responder às seguintes perguntas irá ajudá-lo a desenvolver confiança na sua capacidade de interpretar dados baseline e fazer inferências corretas. Você pode responder a essas perguntas usando a baseline de ingestão de dados e o painel de detalhamento da entidade de ingestão de dados. Instale esse painel conforme descrito e veja quantas dessas perguntas você pode responder.

  <table>
    <thead>
      <tr>
        <th>
          Questões
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          Qual é a taxa diária típica de ingestão para toda a organização (todas as contas) na semana passada? O que foi três meses antes?
        </td>
      </tr>

      <tr>
        <td>
          Quais são os três principais tipos de telemetria (para a organização como um todo) por ingestão? Liste cada tipo de telemetria e sua taxa de ingestão mais recente em 30 dias.
        </td>
      </tr>

      <tr>
        <td>
          Quantas contas contribuem para a ingestão desta organização?
        </td>
      </tr>

      <tr>
        <td>
          Quantas contas (se houver) contribuem atualmente com mais de 50 TB por mês?
        </td>
      </tr>

      <tr>
        <td>
          Quais são as três principais contas em termos de ingestão nos últimos 30 dias?
        </td>
      </tr>

      <tr>
        <td>
          Qual é a ingestão de GB no mês de janeiro passado para a conta com maior consumo?
        </td>
      </tr>

      <tr>
        <td>
          Quais são as três principais contas em termos de ingestão de `ApmEventsBytes` nos últimos 30 dias
        </td>
      </tr>

      <tr>
        <td>
          Qual é o maior aumento em termos de ingestão de tipo de telemetria para uma determinada conta nos últimos nove meses? E quanto às diminuições?
        </td>
      </tr>

      <tr>
        <td>
          Acesse a conta que mais contribui `ApmEventsBytes` e instale/abra o `data governance entity breakdown dashboard`. Liste os três principais aplicativos APM por ingestão nas últimas 24 horas e suas respectivas taxas de ingestão em 24 horas.
        </td>
      </tr>
    </tbody>
  </table>
</Collapser>

## Qual é o próximo? [#whats-next]

Se você seguiu o tutorial até agora, instalou pelo menos o baseline dashboard, gerou um relatório e configurou sistemas para ajudá-lo a detectar sua anomalia de ingestão. Só falta dar mais um passo: usar os dados de ingestão para otimizar sua telemetria!

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-optimize-telemetry/develop-optimize-plan/","title":"Próxima Etapa","body":"Aprenda como desenvolver um plano de otimização para ajudar a reduzir seus custos de ingestão"}}
  previousStep={{"path":"/docs/tutorial-optimize-telemetry/create-baseline-report/","title":"Passo anterior","body":"Aprenda como usar o dashboard correto para criar sua linha de base de ingestão"}}
/>
