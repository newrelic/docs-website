---
title: Configure o New Relic como uma fonte de dados do Prometheus para Grafana
tags:
  - Integrations
  - Grafana integrations
  - Set up and configure
metaDescription: How to configure New Relic as a Prometheus data source for Grafana
freshnessValidatedDate: never
translationType: machine
---

Você pode configurar uma [fonte de dados Prometheus](https://grafana.com/docs/grafana/latest/features/datasources/prometheus/) no [Grafana](https://grafana.com/login) para consultar dados armazenados no banco de dados New Relic (NRDB) usando nossa [linguagem de consulta estilo PromQL](/docs/integrations/prometheus-integrations/view-query-data/supported-promql-features).

## Adicionar uma fonte de dados do Prometheus [#create-update]

Siga estas etapas para adicionar o New Relic como uma fonte de dados do Prometheus para Grafana. Estas instruções detalham como concluir o processo ao trabalhar com Grafana versões 6.7 e superiores.

<Callout variant="important">
  Você deve [concluir o processo de integração de gravação remota do Prometheus](/docs/integrations/prometheus-integrations/install-configure/set-your-prometheus-remote-write-integration) antes de iniciar o processo de configuração.
</Callout>

1. No New Relic, [crie uma nova chave de consulta do Insights](/docs/apis/intro-apis/new-relic-api-keys/#insights-query-key).

   <Callout variant="important">
     Observação: no Grafana, você precisará colocar isso em um cabeçalho HTTP <DNT>**X-Query-Key**</DNT> personalizado (veja a etapa 7 abaixo), mas é a mesma entidade que a chave de consulta New Relic.
   </Callout>

2. Na tela [Grafana](https://grafana.com/login) <DNT>**Home**</DNT> , vá para <DNT>**Configuration > Data Sources**</DNT> e clique em <DNT>**Add data source**</DNT>.

3. Na tela <DNT>**Add data source**</DNT> em <DNT>**Time series databases**</DNT> opções, selecione <DNT>**Prometheus**</DNT>.

4. Insira o <DNT>**Name**</DNT> que você deseja usar para sua nova fonte de dados do Prometheus.

5. Defina o botão <DNT>**Default**</DNT> para a posição ativado ou desativado, dependendo se você deseja que esta seja sua fonte de dados padrão para a consulta do Prometheus.

   * Desativado: esta não é sua fonte de dados padrão
   * Ativado: esta é sua fonte de dados padrão

6. Insira o <DNT>**URL**</DNT> correto:

   * EUA: [prometheus-api.newrelic.com](https://prometheus-api.newrelic.com)
   * UE: [prometheus-api.eu.newrelic.com](https://prometheus-api.eu.newrelic.com)

7. Em <DNT>**Custom Headers**</DNT>, selecione <DNT>**Add Header**</DNT>. Defina o nome <DNT>**Header**</DNT> como <DNT>**X-Query-Key.**</DNT> Para <DNT>**Value**</DNT>, insira a chave de consulta que você criou na etapa 1.

8. Clique em <DNT>**Save & Test**</DNT>.

<Callout variant="tip">
  Se seus gráficos aparecerem como agrupamentos de pontos e não como linhas conectadas, você poderá alterar o estilo do gráfico para exibir linhas. Para fazer isso, vá até o <DNT>**[Graph panel](https://grafana.com/docs/grafana/latest/panels/visualizations/graph-panel/)**</DNT> do Grafana e selecione <DNT>**Stacking and null value > connected**</DNT>.
</Callout>

<CollapserGroup>
  <Collapser
    id=""
    title="Exemplo de imagem de configuração"
  >
    <img
      title="Configure New Relic as a Prometheus data source for Grafana"
      alt="Screen capture of the add data source workflow in Grafana"
      src="/images/more-integrations_screenshot-crop_grafana-data-source-config.webp"
    />

    <figcaption>
      Fonte de dados Grafana Config.png, por [dbarnesbrown.newrelic.com](/users/dbarnesbrownnewreliccom)
    </figcaption>
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Considerações sobre versionamento

A New Relic recomenda fortemente o uso das versões 6.7.x e superiores para configurar a New Relic como uma fonte de dados do Prometheus. Se você optar por concluir a configuração enquanto executa uma versão anterior, precisará seguir um destes procedimentos para configurar sua fonte de dados com êxito:

* Configure a nova fonte de dados para usar autenticação básica e, em seguida, insira a chave de consulta como senha no fluxo de trabalho de autenticação básica.
* Configure o novo URL da fonte de dados para incluir a chave de consulta: `` https://prometheus-api.newrelic.com/auth/`<query-key>` ``

## Personalize o comportamento da API Prometheus [#customize-API]

Os cabeçalhos são particularmente importantes se você conectou vários servidores Prometheus ao New Relic usando a [integração de gravação remota](/docs/integrations/prometheus-integrations/install-configure/set-your-prometheus-remote-write-integration). Aqui estão alguns detalhes sobre personalização.

<CollapserGroup>
  <Collapser
    id=""
    title="X-chave de consulta"
  >
    O parâmetro [chave de consulta](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#x-query-key) é necessário para autenticar no New Relic e identificar a conta que contém sua métrica. Grafana chama isso de <DNT>**X-Query key**</DNT>, embora apareça como <DNT>**Query key**</DNT> na interface do New Relic.

    Detalhes:

    * Obrigatório
    * Uma chave de consulta de API usada para autenticação
    * Se você estiver usando a integração de gravação remota do Prometheus, a X-chave de consulta deverá corresponder à mesma conta que a X-chave de licença usada para integração para gravação remota
  </Collapser>

  <Collapser
    id=""
    title="X-Prometheus-Only"
  >
    <Callout variant="important">
      O suporte ao preenchimento automático do Grafana não lida com métricas que não estejam estritamente em conformidade com as convenções de nomenclatura do Prometheus. A New Relic recomenda excluir qualquer métrica que não esteja em conformidade com este parâmetro.
    </Callout>

    Detalhes:

    * Opcional
    * Limita as métricas expostas pela API àquelas originadas do Prometheus
    * Padrão = verdadeiro se não for especificado
  </Collapser>

  <Collapser
    id=""
    title="X-Prometheus-Server"
  >
    Este parâmetro é útil se você estiver coletando métricas de vários servidores Prometheus. Por exemplo, se você estiver usando o Grafana, talvez queira criar uma fonte de dados para cada servidor Prometheus conectado ao New Relic e, em seguida, outra fonte de dados que possa ser usada para consultar todos os servidores Prometheus.

    Detalhes:

    * Opcional
    * Limita as métricas expostas pela API àquelas coletadas do servidor Prometheus especificado
    * Esse valor deve corresponder ao parâmetro de URL `prometheus_server` no URL de gravação remota usado para conectar seu servidor prometheus ao New Relic
    * O padrão é retornar métricas coletadas de todos os servidores
  </Collapser>
</CollapserGroup>

## Excluir uma fonte de dados do Prometheus [#delete]

Para excluir uma fonte de dados no Grafana:

1. Vá para

   <DNT>
     **Configuration > Data Sources**
   </DNT>

   .

2. Clique na fonte de dados que deseja excluir.

3. Clique no botão

   <DNT>
     **Delete**
   </DNT>

   na parte inferior da página.
