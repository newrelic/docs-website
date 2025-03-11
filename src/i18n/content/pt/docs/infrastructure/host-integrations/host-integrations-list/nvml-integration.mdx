---
title: Integração NVML
tags:
  - NVML integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with nvml metrics.
freshnessValidatedDate: never
translationType: machine
---

A integração do NVML com New Relic fornece insights valiosos sobre a utilização da GPU e a métrica de desempenho de seu aplicativo e sistemas, facilitando a otimização de recursos, a identificação de desempenho gargalo e a manutenção da estabilidade e eficiência geral em seu ambiente.

<img
  title="NVML dashboard"
  alt="nvml dashboard"
  src="/images/infrastructure_screenshot-full_nvml-dashboard.webp"
/>

<figcaption>
  Depois de configurar a integração NVML com New Relic, veja seus dados em um dashboard pronto para uso.
</figcaption>

## Configure a integração NVML

Conclua as etapas a seguir para configurar a integração NVML:

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura

    Para usar a integração NVML, primeiro é necessário [instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) no mesmo host. O agente de infraestrutura monitora o próprio host, enquanto a integração nvml estende seu monitoramento com dados específicos do seu cluster gpu.
  </Step>

  <Step>
    ## Use NRI-Flex para capturar métricas

    O Flex vem junto com o agente New Relic Infrastructure . Você precisa configurar o NRI-Flex para nvml e criar um arquivo de configuração flexível. Siga esses passos:

    1. Crie um arquivo chamado `nvml-config.yml` no caminho abaixo:

       * para Linux, `/etc/newrelic-infra/integrations.d`
       * para Windows, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`

    2. Use o trecho abaixo para atualizar seu arquivo de configuração chamado `nvml-config.yml`

       ```yml
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: NVMLexample
             apis:
               - name: nvml
                 file: <PATH_TO_METRIC_CSV_FILE>
       ```
  </Step>

  <Step>
    ## Reinicie o agente de infraestrutura [#restart-infra]

    Use as instruções em nossos [documentos do agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar seu agente de infraestrutura. Este é um comando básico que deve funcionar para a maioria das pessoas:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## Veja sua métrica nvml no New Relic [#view-data]

    Depois de concluir a configuração acima, você poderá visualizar sua métrica usando nosso modelo dashboard pré-construído. Para acessar este dashboard:

    1. Acesse **[one.newrelic.com](https://one.newrelic.com/) > + Integrations & Agents**.
    2. Clique na guia do **Dashboards** .
    3. Na caixa de pesquisa, digite `nvml`.
    4. Selecione-o e clique em **Install**.

       Para instrumentar o nvml início rápido e ver métricas e alertas, você também pode acompanhar nossa [página NVML início rápido](https://newrelic.com/instant-observability/nvml) clicando no botão `Install now` .

       Aqui está um exemplo de consulta para verificar o número de dispositivos na GPU:

       ```sql
       SELECT latest(temperature_gpu) FROM nvmlSample TIMESERIES 
       ```
  </Step>
</Steps>

## Qual é o próximo? [#whats-next]

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.

* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.

* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o

  <InlinePopover type="dashboards"/>

  modo de exibição ou para adicionar mais conteúdo ao dashboard.
