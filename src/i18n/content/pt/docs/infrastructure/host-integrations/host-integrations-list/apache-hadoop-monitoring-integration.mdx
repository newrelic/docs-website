---
title: Integração Apache Hadoop
tags:
  - Apache Hadoop integration
  - New Relic integrations
metaDescription: Install our Apache Hadoop dashboards and see your Apache Hadoop  data in New Relic.
freshnessValidatedDate: '2023-06-28T00:00:00.000Z'
translationType: machine
---

Nossa integração Apache Hadoop monitora o desempenho do seu cluster e aplicativo Hadoop. A integração fornece uma compreensão profunda do desempenho e da integridade do Apache Hadoop, fornecendo dados sobre seu HDFS (Hadoop Distributed File System), blocos, carga do sistema, nós de dados, NodeManager e trabalhos.

<img
  title="Apache Hadoop dashboard"
  alt="Apache Hadoop dashboard"
  src="/images/infrastructure_screenshot-full_apache-hadoop-dashboard.webp"
/>

<figcaption>
  Depois de configurar nosso Apache Hadoop, fornecemos um dashboard para sua métrica Apache Hadoop.
</figcaption>

Conclua as etapas a seguir para instalar a integração:

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura [#infra]

    Para usar a integração do Apache Hadoop, primeiro é necessário [instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) no mesmo host. O agente de infraestrutura monitora o próprio host, enquanto a integração que você instalará na próxima etapa amplia seu monitoramento com dados específicos do Hadoop.
  </Step>

  <Step>
    ## Configurar NRI-Flex para Apache Hadoop [#integrate]

    Nossa integração flex vem junto com o agente New Relic Infrastructure e é usada para enviar seus dados do Apache Hadoop para New Relic. Para criar um arquivo de configuração flex, siga estas etapas:

    1. Crie um arquivo chamado `nri-flex-hadoop-config.yml` no caminho `/etc/newrelic-infra/integrations.d` .

    2. Use nosso [modelo de configuração](https://github.com/newrelic/nri-flex/blob/master/examples/json-read-cmd-example.yml) para atualizar os campos `EVENT_TYPE` e `YOUR_DOMAIN` no arquivo criado denominado `nri-flex-hadoop-config.yml`. O valor em `event_type` é usado para armazenar métricas no NRDB.

       Exemplo:

       * `EVENT_TYPE1` pode ser atualizado para `HadoopResourceManagerSample`
       * `EVENT_TYPE2` pode ser atualizado para `HadoopNameNodeSample`

       Seu arquivo `nri-flex-hadoop-config.yml` deverá ficar assim:

       ```yml
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: hadoopMetrics
             apis:
               - event_type: EVENT_TYPE1
                 commands: 
                   # run any command, you could cat .json file, or run some commands that produce a json output
                   # the example just calls an API that returns json
                   - run: curl -s https://YOUR_DOMAIN:9870/jmx #json output is retrieved from this command
               - event_type: EVENT_TYPE2
                 commands: 
                   - run: curl -s https://YOUR_DOMAIN:8088/jmx?qry=Hadoop:*
       ```
  </Step>

  <Step>
    ## Encaminhar log do Apache Hadoop para New Relic

    Você pode usar nosso [encaminhamento de logs](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para encaminhar o log do Apache Hadoop para New Relic.

    1. Crie um arquivo de log chamado `logging.yml` em `/etc/newrelic-infra/logging.d/`

    2. Após criar o arquivo de log, adicione o seguinte script ao arquivo `logging.yml` :

       ```yml
       logs:
         - name: hadoop_secondarynamenode_log
           file: /usr/local/hadoop/logs/hadoop-hadoopuser-secondarynamenode-hadoop-master.log
           attributes:
             logtype: hadoop_secondarynamenode_logs
         - name: hadoop_resourcemanager_log
           file: /usr/local/hadoop/logs/hadoop-hadoopuser-resourcemanager-hadoop-master.log
           attributes:
             logtype: hadoop_hadoop_resourcemanager_logs
         - name: hadoop_namenode_log
           file: /usr/local/hadoop/logs/hadoop-hadoopuser-namenode-hadoop-master.log
           attributes:
             logtype: hadoop_namenode_logs
       ```
  </Step>

  <Step>
    ## Reinicie o agente do New Relic Infrastructure

    Antes de começar a usar seus dados, [reinicie o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/).

    O seguinte comando deve funcionar para a maioria dos sistemas:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## Encontre seus dados

    Você pode escolher nosso modelo dashboard pré-construído chamado `Apache Hadoop` para monitor a métrica do seu servidor Apache Hadoop. Siga estas etapas para usar nosso modelo dashboard pré-construído:

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

    3. Na barra de pesquisa, digite `apache hadoop`.

    4. O dashboard do Apache Hadoop deve aparecer. Clique nele para instalá-lo.

       Seu dashboard do Apache Hadoop é considerado um painel personalizado e pode ser encontrado na interface <DNT>**Dashboards**</DNT>. Para obter documentos sobre como usar e editar o painel, consulte [nossos documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Aqui está uma consulta NRQL para verificar os usuários ativos do gerenciador de recursos:

       ```sql
       SELECT latest(activeUsers) 
       FROM HadoopResourceManagerSample
       ```

       Aqui está uma consulta NRQL para visualizar o número de clientes ativos do nó de nome:

       ```sql
       SELECT latest(numActiveClients) 
       FROM HadoopNameNodeSample
       ```
  </Step>
</Steps>

## Qual é o próximo?

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.
* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o modo de exibição dos painéis ou para adicionar mais conteúdo ao seu dashboard.
