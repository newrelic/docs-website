---
title: Integração Apache Mesos
tags:
  - New Relic integrations
  - Apache Mesos integration
metaDescription: Use New Relic infrastructure agent to get a dashboard with metrics from your Apache Mesos.
freshnessValidatedDate: '2024-05-20T00:00:00.000Z'
translationType: machine
---

Monitor o cluster Apache Mesos perfeitamente com New Relic para insights abrangentes sobre desempenho, integridade e utilização de recursos. Rastreie nós mestres e escravos, monitor a execução de tarefas e revise as métricas do sistema.

<img
  title="Apache Mesos dashboard"
  alt="Apache Mesos dashboard"
  src="/images/infrastructure_screenshot_full-apache-mesos-dashboard.webp"
/>

<figcaption>
  Depois de configurar nossa integração Apache Mesos, fornecemos um dashboard para sua métrica Apache Mesos.
</figcaption>

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura [#infra-install]

    Para usar a integração do Apache Mesos, é necessário [instalar também o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) no mesmo host. O agente de infraestrutura monitora o próprio host, enquanto a integração que você instalará na próxima etapa estende seu monitoramento com dados específicos do Apache Mesos.
  </Step>

  <Step>
    ## Habilite a integração do Apache Mesos com nri-flex

    Para configurar a integração do Apache Mesos, siga estas etapas:

    1. Crie um arquivo chamado `nri-apache-mesos-config.yml` no diretório integração:

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-apache-mesos-config.yml
       ```

    2. Adicione o trecho a seguir ao arquivo `nri-apache-mesos-config.yml` para permitir que o agente capture dados do Apache Mesos:

       ```yml
       integrations:
         - name: nri-flex
           interval: 30s
           config:
             name: apacheMesos
             apis:
               - event_type: apacheMesos
                 url: http://<ip-address>:5050/metrics/snapshot
       ```
  </Step>

  <Step>
    ## Log de encaminhamento do Apache Mesos

    Siga estas etapas para encaminhar o log do Apache Mesos para New Relic:

    1. Edite o arquivo de log denominado `logging.yml` localizado no seguinte caminho:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Adicione o seguinte trecho ao arquivo `logging.yml` . Substitua `file` pelo caminho do arquivo de log do Apache Mesos, se necessário:

       ```yml
       logs:
         - name: apache-mesos.log
           file: /var/log/mesos/LOG_FILE_NAME
           attributes:
             logtype: apache_mesos_log
       ```
  </Step>

  <Step>
    ## Reinicie o agente do New Relic Infrastructure

    Reinicie seu agente de infraestrutura:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    Em alguns minutos, seu aplicativo começará a enviar métricas para [one.newrelic.com](https://one.newrelic.com).
  </Step>

  <Step>
    ## Encontre seus dados

    Você pode usar nosso modelo dashboard pré-construído para monitor seu aplicativo métrica do Apache Mesos. Siga estas etapas para usar nosso modelo dashboard pré-construído:

    1. De [one.newrelic.com](https://one.newrelic.com), vá para a página

       <DNT>
         **+ Integrations & Agents**
       </DNT>

    2. Clique em

       <DNT>
         **Dashboards**
       </DNT>

    3. Na barra de pesquisa, digite `Apache Mesos`

    4. O dashboard do Apache Mesos deve aparecer. Clique nele para instalá-lo

       Seu dashboard do Apache Mesos é considerado um painel personalizado e pode ser encontrado na interface <DNT>**Dashboards**</DNT>. Para obter documentos sobre como usar e editar o painel, consulte [nossos documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Aqui está um exemplo de consulta NRQL para visualizar o master tempo de operação do Apache Mesos:

       ```sql
       SELECT latest(`master/uptime_secs`) as 'Masters uptime (seconds)' FROM apacheMesos
       ```
  </Step>
</Steps>

## Qual é o próximo?

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.
* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o modo de exibição dos painéis ou para adicionar mais conteúdo ao seu dashboard.
