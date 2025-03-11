---
title: Cacti integração
tags:
  - Cacti integration
  - New Relic integrations
metaDescription: Use the New Relic infrastructure agent to monitor your Cacti data.
freshnessValidatedDate: never
translationType: machine
---

A integração do Cacti com New Relic fornece uma representação gráfica amigável dos seus dados RRD, tudo dentro da plataforma unificada do New Relic.

<img
  title="Cacti dashboard"
  alt="Cacti dashboard"
  src="/images/infrastructure_screenshot-full_cacti-dashboard.webp"
/>

<figcaption>
  Você pode ver seus dados em um dashboard após configurar a integração do Cacti com New Relic.
</figcaption>

## Configure a integração do Cacti [#setup]

Conclua as etapas a seguir para configurar a integração do Cacti:

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura [#install]

    Para usar a integração do Cacti, primeiro é necessário [instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) no mesmo host.
  </Step>

  <Step>
    ## Expor Cacti métrica [#Expose]

    Conclua as etapas abaixo para expor seus dados RRD em formato CSV ou JSON:

    1. Exporte dados dos arquivos RRD do Cacti para o `XML format` usando RRDTool.
    2. Converta os dados XML em um formato `CSV or JSON` .
  </Step>

  <Step>
    ## Use NRI-Flex para capturar métricas em formato CSV [#capture-csv]

    O Flex vem junto com o agente New Relic Infrastructure . Você precisa configurar o NRI-Flex para Cacti e criar um arquivo de configuração flexível. Siga esses passos:

    1. Crie um arquivo chamado `cacti-config.yml` no caminho `/newrelic-infra/integrations.d` .

    2. Atualize `cacti-config.yml` com o seguinte exemplo de configuração:

       ```yml
       ---
       integrations:
         - name: nri-flex
           config:
             name: machineLoad
             apis:
              - name: machineLoad
                file: /home/ubuntu/xmlToCsv/local_linux_machine_load_1min_2.csv
              - name: memSwap
                file: /home/ubuntu/xmlToCsv/local_linux_machine_mem_swap_5.csv
              - name: proc
                file: /home/ubuntu/xmlToCsv/local_linux_machine_proc_1.csv
              - name: machineUser
                file: /home/ubuntu/xmlToCsv/local_linux_machine_users_3.csv
              - name: memBuffers
                file: /home/ubuntu/xmlToCsv/local_linux_machine_mem_buffers_4.csv
              - name: ApacheCpuLoad
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_cpuload_6.csv
              - name: ApacheTotalHits
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_total_hits_7.csv
              - name: ApacheTotalKbytes
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_total_kbytes_8.csv
              - name: UserLogins
                file: /home/ubuntu/xmlToCsv/local_linux_machine_active_10.csv
       ```
  </Step>

  <Step>
    ## Encaminhar logs do Cacti [#forward]

    Siga estas etapas para encaminhar o log do Cacti para New Relic:

    1. Edite o arquivo de log denominado `logging.yml` localizado no seguinte caminho:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Adicione o seguinte trecho ao arquivo `logging.yml` . Substitua `file` pelo caminho do arquivo de log do Cacti, se necessário:

       ```yml
       logs:
         - name: cacti.log
           file: /var/www/html/cacti/log/LOG_FILE_NAME
           attributes:
             logtype: cacti_log
       ```
  </Step>

  <Step>
    ## Reinicie o agente do New Relic Infrastructure [#restart]

    Reinicie seu agente de infraestrutura:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    Seu aplicativo enviará métricas para [one.newrelic.com](https://one.newrelic.com) em alguns minutos.
  </Step>

  <Step>
    ## Encontre seus dados [#find-data]

    Você pode usar nosso modelo dashboard pré-construído para monitor seu aplicativo métrica Cacti. Siga estas etapas para usar nosso modelo dashboard pré-construído:

    1. De [one.newrelic.com](https://one.newrelic.com), vá para a página

       <DNT>
         **+ Integrations & Agents**
       </DNT>

    2. Clique em

       <DNT>
         **Dashboards**
       </DNT>

    3. Na barra de pesquisa, digite `Cacti`

    4. O dashboard do Cacti deve aparecer. Clique nele para instalá-lo

       Seu dashboard do Cacti é considerado um dashboard personalizado e pode ser encontrado na interface do <DNT>**Dashboards**</DNT>. Para obter documentos sobre como usar e editar o painel, consulte [nossos documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Aqui está um exemplo de consulta NRQL para visualizar a contagem de login do usuário:

       ```sql
       SELECT latest(value) FROM UserLoginsSample FACET name
       ```
  </Step>
</Steps>

## Qual é o próximo? [#whats-next]

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.
* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o modo de exibição do dashboard ou adicionar mais conteúdo.
