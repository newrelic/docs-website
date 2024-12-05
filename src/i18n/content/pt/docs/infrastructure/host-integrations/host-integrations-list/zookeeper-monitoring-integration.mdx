---
title: Zookeeper monitoramento integração
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: An introduction to New Relic's open-source ZooKeeper integration.
freshnessValidatedDate: never
translationType: machine
---

Nossa integração Apache ZooKeeper monitora o desempenho do seu cluster ZooKeeper, ajudando você a gerenciar e sincronizar seus sistemas distribuídos. Nossa integração Apache ZooKeeper oferece um dashboard pré-construído que inclui métricas em nível clustere em nível de nó.

<img
  src="/images/infrastructure_screenshot-full_apache-zookeeper-dashboard.webp"
  title="Apache ZooKeeper dashboard landing page"
  alt="A screenshot of a dashboard with Apache ZooKeeper metrics."
/>

<figcaption>
  Depois de configurar a integração com o New Relic, veja seus dados em painéis como estes, prontos para uso.
</figcaption>

Conclua as etapas a seguir para instalar a integração:

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura [#infra]

    Para usar a integração do Zookeeper, primeiro é necessário [instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) no mesmo host. O agente de infraestrutura monitora o próprio host, enquanto a integração que você instalará na próxima etapa amplia seu monitoramento com dados específicos do Zookeeper.
  </Step>

  <Step>
    ## Use NRI-Flex para capturar métricas

    Flex permite capturar métricas do Apache Zookeeper. Ele vem junto com o agente New Relic Infrastructure que você instalou na etapa anterior.

    1. Crie um arquivo chamado `zookeeper-config.yml` no caminho `/newrelic-infra/integrations.d` .

    2. Atualize `zookeeper-config.yml` com o seguinte exemplo de configuração:

       ```yml
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: zookeeperFlex
             apis:
               - name: zookeeper
                 event_type: zkSample
                 commands:
                   - run: echo mntr | nc localhost 2181  ## change to your zookeeper server
                     split_by: "\t"  ## split by tab
                 snake_to_camel: true
                 custom_attributes:
                   myCustomAttr: theValue  ## inject your own additional custom attributes
       ```
  </Step>

  <Step>
    ## Reinicie o agente do New Relic Infrastructure

    Antes de começar a ler seus dados, use as instruções em nossos [documentos do agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar seu agente de infraestrutura:

    ```bash
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## Encontre seus dados

    Você pode escolher nosso modelo dashboard pré-construído chamado `Apache ZooKeeper` para monitor seu aplicativo métrica Zookeeper. Siga estas etapas para usar nosso modelo dashboard pré-construído:

    1. De [one.newrelic.com](https://one.newrelic.com), vá para a página

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       .

    2. Clique em

       <DNT>
         **Dashboards**
       </DNT>

       .

    3. Na barra de pesquisa, digite `apache zookeeper`.

    4. O dashboard do ZooKeeper deve aparecer. Clique nele para instalá-lo.

       Seu dashboard do Apache ZooKeeper é considerado um painel personalizado e pode ser encontrado na interface <DNT>**Dashboards**</DNT>. Para obter documentos sobre como usar e editar o painel, consulte [nossos documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Ao usar a integração `nri-flex` sua métrica será exportada para o `EVENT_TYPE` fornecido. Aqui está uma consulta NRQL para verificar o número de znodes no namespace ZooKeeper com uma integração `nri-flex` :

       ```sql
       FROM <EVENT_TYPE> 
       SELECT latest(zkZnodeCount)
       ```
  </Step>
</Steps>

## Qual é o próximo?

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.
* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o modo de exibição dos painéis ou para adicionar mais conteúdo ao seu dashboard.
