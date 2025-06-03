---
title: Integração NVIDIA DCGM
tags:
  - NVIDIA integration
  - DCGM integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with DCGM metrics.
freshnessValidatedDate: '2023-10-30T00:00:00.000Z'
translationType: machine
---

Nossa integração NVIDIA DCGM auxilia você no monitoramento do status das GPUs. Essa integração aproveita nosso agente de infraestrutura e a integração de gravação remota do Prometheus, que é perfeitamente integrada ao utilitário SMI da NVIDIA. Ele fornece um dashboard pré-construído contendo métricas DCGM cruciais, incluindo utilização de GPU, contagens de erros XID, estados de clock e desempenho, temperatura e uso de energia.

<img
  title="NVIDIA DCGM dashboard"
  alt="NVIDIA DCGM dashboard"
  src="/images/infrastructure_screenshot-full_nvidia-dcgm-dashboard.webp"
/>

<figcaption>
  Depois de configurar nossa integração NVIDIA DCGM, fornecemos um dashboard para sua métrica DCGM.
</figcaption>

## Instalar o agente de infraestrutura [#infra]

Para colocar dados no New Relic, instale nosso agente de infraestrutura. Nosso agente de infraestrutura coleta e ingere dados para que você possa acompanhar o desempenho do seu DCGM.

É possível instalar o agente de infraestrutura de duas maneiras diferentes:

* Nossa [instalação guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) é uma ferramenta CLI que inspeciona seu sistema e instala o agente de infraestrutura junto com o agente de monitoramento do aplicativo que melhor funciona para seu sistema. Para saber mais sobre como funciona nossa instalação guiada, confira nossa [Visão geral da instalação guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Se preferir instalar nosso agente de infraestrutura manualmente, você pode seguir um tutorial para instalação manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/).

## Configurar o exportador DCGM [#configure-exporter]

1. No seu terminal, clone o repositório `dcgm-exporter` :

   ```shell
   git clone https://github.com/NVIDIA/dcgm-exporter
   ```

2. No repositório clonado, navegue até o diretório `dcgm-exporter` :

   ```shell
   cd dcgm-exporter
   ```

3. Instale os binários necessários:

   ```shell
   make binary
   ```

   ```shell
   sudo make install
   ```

4. Inicie o `dcgm-exporter`:

   ```shell
   dcgm-exporter &
   ```

5. Veja os detalhes da sua métrica DCGM:

   ```shell
   curl localhost:9400/metrics
   ```

## Configuração NVIDIA-DCGM no Prometheus [#configure-prometheus]

Prometheus é uma ferramenta de monitoramento e alerta de código aberto que pode ser usada para monitor GPUs NVIDIA usando o exportador NVIDIA-DCGM. Para configurar o Prometheus para monitor a métrica DCGM, siga estas etapas:

1. Visite a [página de download do Prometheus](https://prometheus.io/download/) para encontrar a versão mais recente.

2. Selecione a versão apropriada para seu sistema operacional e arquitetura. Para Linux, você provavelmente escolherá a versão linux-amd64. Copie o link de download do tarball (arquivo `.tar.gz` ).

3. Depois que o Prometheus for baixado, descompacte o arquivo tar de download:

   ```shell
   tar -xvzf <filename.tar.gz>
   ```

4. Navegue até a pasta baixada do Prometheus:

   ```shell
   cd /DOWNLOADED-FOLDER/
   ```

5. Abra seu arquivo `prometheus.yml` e adicione as seguintes linhas:

   ```yml
   ---
   scrape_configs:
     - job_name: NVIDI
       static_configs:
         - targets:['localhost:9400']
   ```

6. Inicie o Prometeu:

   ```shell
   ./prometheus --config.file=prometheus.yml
   ```

## Instale o agente de gravação remota Prometheus para NVIDIA-DCGM [#install-remote-write]

Após configurar a configuração do Prometheus, você deve enviar a métrica NVIDIA DCGM para o Prometheus. Posteriormente, para integrar a métrica do Prometheus ao New Relic, você pode aproveitar o agente de gravação remota do Prometheus. Basta seguir o [iniciador de configuração de gravação remota do Prometheus na interface](https://one.newrelic.com/catalog-pack-details?state=04de330d-ad8b-b61c-68e2-ad852c2ca1d4).

## Reinicie o agente do New Relic Infrastructure [#restart-infra-agent]

Antes de começar a ler seus dados, use as instruções em nossos [documentos do agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar seu agente de infraestrutura.

```shell
sudo systemctl restart newrelic-infra.service
```

## Veja sua métrica DCGM no New Relic [#view-data]

Depois de concluir a configuração acima, você poderá visualizar sua métrica usando nosso modelo dashboard pré-construído chamado nvidia-dcgm. Para acessar este dashboard:

1. Vá para

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/) > + Integrations & Agents**
   </DNT>

   .

2. Clique na guia

   <DNT>
     **Dashboards**
   </DNT>

   .

3. Na caixa de pesquisa, digite “nvidia-dcgm”.

4. Selecione-o e clique em

   <DNT>
     **Install**
   </DNT>

   .

Para instrumentar o `nvidia-dcgm` início rápido e ver métricas e alertas, você também pode seguir nossa [página de início rápido Nvidia-DCGM](https://newrelic.com/instant-observability/nvidia-dcgm) clicando no botão **Install now** .

Aqui estão alguns exemplos de consulta:

<DNT>**Example:**</DNT> visualizar a contagem da temperatura da GPU do dispositivo

```sql
SELECT latest(DCGM_FI_DEV_GPU_TEMP) FROM Metric WHERE metricName LIKE 'DCGM_FI_DEV_GPU_TEMP' TIMESERIES
```

## Qual é o próximo? [#whats-next]

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.

* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.

* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o

  <InlinePopover type="dashboards"/>

  modo de exibição ou para adicionar mais conteúdo ao dashboard.
