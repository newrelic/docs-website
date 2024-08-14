---
title: Integração Vertica
tags:
  - Vertica integration
  - New Relic integrations
metaDescription: Use New Relics infrastructure agent to get a dashboard with metrics from your Vertica.
freshnessValidatedDate: '2023-09-01T00:00:00.000Z'
translationType: machine
---

Nossa integração Vertica monitora o desempenho do seu armazenamento de dados.

<img
  title="Vertica dashboard"
  alt="Vertica dashboard"
  src="/images/infrastructure_screenshot-full_Vertica-dashboard.webp"
/>

<figcaption>
  Depois de configurar a nossa integração Vertica, disponibilizamos-lhe um dashboard para a sua métrica Vertica.
</figcaption>

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura [#infra-install]

    É possível instalar o agente de infraestrutura de duas maneiras diferentes:

    * Nossa [instalação guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) é uma ferramenta CLI que inspeciona seu sistema e instala o agente de infraestrutura junto com o agente de monitoramento do aplicativo que melhor funciona para seu sistema. Para saber mais sobre como funciona nossa instalação guiada, confira nossa [Visão geral da instalação guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
    * Se preferir instalar nosso agente de infraestrutura manualmente, você pode seguir um tutorial para instalação manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) ou [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).
  </Step>

  <Step>
    ## Use `nri-flex` para capturar métricas [#flex]

    O Flex vem junto com o agente New Relic Infrastructure . Você precisa configurar `nri-flex` para Vertica e criar um arquivo de configuração flexível.

    Siga esses passos:

    1. Crie um arquivo chamado `vertica-flex-config.yml` neste caminho:

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Atualize o arquivo `vertica-flex-config.yml` com estas configurações:

       * `EVENT_TYPE`: Você pode considerar `EVENT_TYPE` como uma tabela de banco de dados New Relic que você pode consultar usando NRQL.
       * `COMMAND`: Contém o comando que serve para imprimir métricas no terminal.

         Assim que seu arquivo de configuração for atualizado, ele ficará assim:

       ```yml
         --- 
         integrations:
           - name: nri-flex
             config:
               name: VerticaFlex
               apis:
                 - database: vertica
                   db_conn: 'vertica://dbadmin:vertica@13.235.79.230:5433/dbadmin'
                   logging:
                     open: true
                   db_async: true # process queries async
                   db_queries:
                     - name: VerticaFindCitiesDetails
                       run: SELECT * FROM cities;
                     - name: VerticaDiskSpaceUsedByTables
                       run: SELECT projection_schema, anchor_table_name, to_char(sum(used_bytes)/1024/1024/1024,'999,999.99') as disk_space_used_gb FROM projection_storage
       GROUP by projection_schema, anchor_table_name ORDER by disk_space_used_gb desc limit 50;
                     - name: VerticaFreeDiskSpace
                       run: SELECT to_char(sum(disk_space_free_mb)/1024,'999,999,999') AS disk_space_free_gb, to_char(sum(disk_space_used_mb)/1024,'999,999,999') AS disk_space_used_gb FROM disk_storage;
                     - name: VerticaUserInformation
                       run: SELECT user_name, is_super_user, resource_pool, memory_cap_kb, temp_space_cap_kb, run_time_cap FROM users;
                     - name: VerticaUserDetails
                       run: SELECT * FROM user_sessions;
                     - name: VerticaQueriesByUser
                       run: SELECT * FROM query_profiles WHERE user_name ILIKE '%dbadmin%';
                     - name: VerticaUserRolesInformation
                       run: SELECT * FROM roles;
                     - name: VerticaResourcePoolAssignments
                       run: SELECT user_name, resource_pool FROM users;
                     - name: VerticaTableInfo
                       run: SELECT table_name, is_flextable, is_temp_table, is_system_table, count(*) FROM tables GROUP by 1,2,3,4;
                     - name: VerticaActiveEvents
                       run: SELECT * FROM active_events WHERE event_problem_description NOT ILIKE '%state to UP';
                     - name: VerticaDiskStorage
                       run:  SELECT node_name, storage_path, storage_usage, storage_status, disk_space_free_percent FROM disk_storage;
                     - name: VerticaLongRunningQueries
                       run: SELECT query_duration_us/1000000/60 AS query_duration_mins, table_name, user_name, processed_row_count AS rows_processed, substr(query,0,70) FROM query_profiles ORDER BY query_duration_us DESC LIMIT 250;
                     - name: VerticaLicenseConsumption
                       run: SELECT GET_COMPLIANCE_STATUS();
                     - name: VerticaAudit
                       run: SELECT AUDIT('');

       ```
  </Step>

  <Step>
    ## Encaminhe seu log do Vertica para o New Relic [#logs]

    Você pode usar nosso [encaminhamento de logs](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para encaminhar o log do Vertica para New Relic.

    Em máquinas Linux, você pode encontrar seu arquivo de log chamado `logging.yml` neste caminho:

    ```shell
    /etc/newrelic-infra/logging.d/
    ```

    Após criar o arquivo de log, adicione o seguinte script ao arquivo `logging.yml` :

    ```yml
    logs:
      - name: vertica.log
        file: /home/dbadmin/vdb/v_vdb_node0001_catalog/vertica.log
        attributes:
          logtype: vertica_log
    ```
  </Step>

  <Step>
    ## Reinicie o agente do New Relic Infrastructure [#restart]

    Antes de começar a ler seus dados, use as instruções em nossos [documentos do agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar seu agente de infraestrutura.

    ```bash
    sudo systemctl restart newrelic-infra.service
    ```

    Em alguns minutos, seu aplicativo enviará métricas para [one.newrelic.com](https://one.newrelic.com).
  </Step>

  <Step>
    ## Encontre seus dados [#find-data]

    Você pode escolher nosso modelo dashboard pré-criado chamado `Vertica` para monitor seu aplicativo Vertica métrica. Siga estas etapas para usar nosso modelo dashboard pré-construído:

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

    3. Na barra de pesquisa, digite `vertica`.

    4. O dashboard Vertica deve aparecer. Clique nele para instalá-lo.

       Seu dashboard Vertica é considerado um painel personalizado e pode ser encontrado na interface <DNT>**Dashboards**</DNT>. Para obter documentos sobre como usar e editar o painel, consulte [nossos documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Aqui está uma consulta NRQL para pesquisar informações do usuário do banco de dados em busca de pontos de dados como nome de usuário, pool de recursos, limite de memória, limite de espaço temporário e limite de tempo de execução.

       ```sql
       SELECT user_name, is_super_user, resource_pool, memory_cap_kb, temp_space_cap_kb, run_time_cap 
       FROM VerticaUserInformation;
       ```
  </Step>
</Steps>

## Qual é o próximo? [#next]

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.

* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.

* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o

  <InlinePopover type="dashboards"/>

  modo de exibição ou para adicionar mais conteúdo ao dashboard.
