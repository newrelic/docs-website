---
title: Redmine integração
tags:
  - Redmine  integration
  - New Relic integrations
metaDescription: Install our Redmine  dashboards and see your Redmine  data in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Com nosso dashboard Redmine, você pode acompanhar facilmente sua transação da taxa web, taxas de erros do aplicativo e banco de dados. Desenvolvido com nosso agente Ruby, o Redmine início rápido oferece um conjunto de padrões <InlinePopover type="dashboards"/>que permitem visualizar seus dados mais críticos completos.

<img
  src="/images/infrastructure_screenshot-crop_redmine-io-dash.webp"
  title="Redmine dashboard"
  alt="Redmine dashboard"
/>

<figcaption>
  Depois de configurar a integração com o New Relic, veja seus dados em painéis como estes, prontos para uso.
</figcaption>

## Integre o Redmine com o agente Ruby [#ruby]

Nosso agente Ruby coleta e ingere dados para que você possa acompanhar o desempenho do Redmine no New Relic. Você pode instalar o agente Ruby usando nosso [launcher](https://one.newrelic.com/marketplace?account=1&state=eb17d004-3569-306a-d693-9506d3d0cf4e) ou seguindo [a instalação manual](/docs/apm/agents/ruby-agent/installation/install-new-relic-ruby-agent) com nossos documentos.

Depois de instalado, confirme se o New Relic está ingerindo seus dados do Redmine acessando <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capaibilities)**</DNT> e clicando em <DNT>**Metrics & events**</DNT>. Execute a seguinte consulta NRQL para confirmar se o New Relic está recebendo dados do Redmine:

```sql
SELECT apm.service.transaction.duration FROM Metric
```

## Instalar o agente de infraestrutura [#infrastructure]

Embora nossa integração Redmine não seja construída com nosso agente de infraestrutura, recomendamos instalá-lo se você quiser dados de desempenho sobre seus hosts. É possível instalar o agente de infraestrutura de duas maneiras diferentes:

* Nossa [instalação guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) é uma ferramenta CLI que inspeciona seu sistema e instala o agente de infraestrutura junto com o agente de monitoramento do aplicativo que melhor funciona para seu sistema. Para saber mais sobre como funciona nossa instalação guiada, confira nossa [Visão geral da instalação guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Se preferir instalar nosso agente de infraestrutura manualmente, você pode seguir um tutorial para instalação manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) ou [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Veja a métrica Redmine em um dashboard [#dash]

Nosso dashboard padrão transforma esses dados brutos em tabelas e gráficos, que fornecem uma visão panorâmica da saúde do seu sistema. Para instalar nosso painel padrão, acesse nossa [página de observabilidade instantânea do Redmine](https://newrelic.com/instant-observability/redmine).

## Crie consulta para painel personalizado [#custom]

Certas métricas de desempenho não estão disponíveis imediatamente com nosso painel pré-construído. Embora opcional, recomendamos instrumentação adicional para que você possa acompanhar as métricas do Redmine, como problemas gerenciáveis, não gerenciáveis e vencidos. Para iniciar o rastreamento, instale o plug-in [de monitoramento e controle](https://www.redmine.org/plugins/monitoring-controlling) do seu aplicativo Redmine.

1. Vá para a pasta `redmine-monitoring-controlling` e abra o arquivo chamado `home_monitoring_controlling_project_controller.rb`. Ele é encontrado no diretório do plug-in.

2. Insira este trecho na parte inferior do arquivo: `::NewRelic::Agent.record_metric(‘Custom/managementIssues’,@managementissues.count)`

3. Vá para <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT> e clique em <DNT>**Metrics & events**</DNT>. Execute a seguinte consulta para confirmar se New Relic está reportando métrica personalizada:

   ```sql
   SELECT MAX(newrelic.timeslice.value) AS Manageable Issues FROM Metric WHERE metricTimesliceName like '%Custom/managementissues%'
   ```

## Qual é o próximo?

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.
* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o modo de exibição dos painéis ou para adicionar mais conteúdo ao seu dashboard.
