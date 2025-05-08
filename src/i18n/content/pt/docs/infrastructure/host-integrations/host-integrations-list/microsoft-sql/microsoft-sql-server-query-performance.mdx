---
title: Integração do Microsoft SQL Server consulta nível monitoramento
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
  - Configuration
metaDescription: Configuration New Relic's Kafka integration.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="Visualização">
  Ainda estamos trabalhando nesse recurso, mas adoraríamos que você experimentasse!

  Atualmente, esse recurso é fornecido como parte de uma prévia, de acordo com nossas [políticas de pré-lançamento](https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy/).
</Callout>

Você pode visualizar análises em nível de consulta para monitorar sua consulta SQL dentro do seu banco de dados MSSQL para avaliar seu desempenho e impacto. Este recurso fornece insights sobre tempos de execução, consumo de recursos e potencial gargalo, permitindo que você otimize as operações do banco de dados. Para obter mais informações, consulte [Análise em nível de consulta](/docs/infrastructure/infrastructure-data/query-level-monitoring).

<img title="Query Performance monitoring" alt="Query Performance monitoring" src="/images/mssql-query-performance.webp" />

## Pré-requisitos:

* O Microsoft SQL Server oferece suporte a 2017, 2019 ou 2022.
* O usuário do banco de dados deve ser membro da função de servidor fixa sysadmin ou ter a permissão `VIEW SERVER STATE` .

Para habilitar o recurso de monitoramento em nível de consulta, siga estas etapas:

<Steps>
  <Step>
    ## Para habilitar o modo de autenticação do SQL Server e do Windows

    Habilite o login no SQL Server e o modo de autenticação do Windows. Para obter mais informações, consulte [a documentação sobre alteração do modo de autenticação da Microsoft](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/change-server-authentication-mode?view=sql-server-ver16&tabs=ssms).
  </Step>

  <Step>
    ## Para habilitar o TCP

    1. Certifique-se de que o TCP esteja habilitado para acesso remoto em sua instância usando a [documentação](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port?view=sql-server-ver16)
    2. Verifique as configurações do firewall:

    * Certifique-se de que seu firewall permite tráfego na porta `1433`. Esta é a porta de escuta do Microsoft SQL Server:

      * Abra o **Windows Defender Firewall with Advanced Security**.
      * No menu esquerdo, clique em **Inbound Rules.**
      * Encontre qualquer regra para o SQL Server (normalmente chamada SQL Server (TCP-In) ou SQL Server TCP 1433).
      * Se não houver uma regra, crie uma nova regra para permitir tráfego TCP na porta 1433.
  </Step>

  <Step>
    ## Para habilitar a loja de consulta [#queryStore]

    Execute o seguinte comando

    ```sql
    ALTER DATABASE DATABASE_NAME SET QUERY_STORE = ON ( QUERY_CAPTURE_MODE = ALL, DATA_FLUSH_INTERVAL_SECONDS = 900 )
    ```
  </Step>

  <Step>
    ## Execute a consulta abaixo para confirmar se a loja de consultas está habilitada [#confirmQueryStore]

    Se a saída da consulta for 1, podemos assumir que o armazenamento da consulta está habilitado.

    ```sql
    SELECT is_query_store_on FROM sys.databases where physical_database_name = DATABASE_NAME
    ```
  </Step>

  <Step>
    ## Para integrar o agente MSSQL

    Integre o agente MSSQL usando [este guia.](/install/microsoft-sql)
  </Step>

  <Step>
    ## Para configurar a integração MSSQL para habilitar o monitoramento de desempenho de consulta

    1. Para alterar o diretório para a pasta de configuração de integração, execute:

    ```bash
    cd "C:\Program Files\New Relic\newrelic-infra\integrations.d\"
    ```

    2. Edite o arquivo `mssql-config.yml` com a seguinte configuração:

    * `ENABLE_QUERY_MONITORING` - Habilitar monitoramento de desempenho de consulta - Padrão: `false`.
    * `QUERY_MONITORING_RESPONSE_TIME_THRESHOLD `- Definir o limite de tempo de resposta da consulta em ms para recuperação da métrica de desempenho da consulta individual. O `Defaults` está definido como `500 ms`.
    * `QUERY_MONITORING_COUNT_THRESHOLD` - O número de registros para cada métrica de desempenho de consulta. O `Defaults` está definido como `20`.

    ```yaml
      integrations:
      - name: nri-mssql
      env:
        HOSTNAME: localhost
        PORT: 1433
        USERNAME: USERNAME
        PASSWORD: PASSWORD
        ENABLE_SSL: true
        TRUST_SERVER_CERTIFICATE: true
        # Enable collection of detailed query performance metrics.
        ENABLE_QUERY_MONITORING: true
        # Threshold in milliseconds for query response time. If response time exceeds this threshold, the query will be considered slow.
        QUERY_MONITORING_RESPONSE_TIME_THRESHOLD: 500
        # Maximum number of queries returned in query analysis results.
        QUERY_MONITORING_COUNT_THRESHOLD: 20
        # Interval in seconds for fetching grouped slow queries; Should always be same as mysql-config interval.
        QUERY_MONITORING_FETCH_INTERVAL: 15
      interval: 15s
      labels:
        environment: production
      inventory_source: config/mssql
    ```
  </Step>

  <Step>
    ## Encontre seus dados

    Você pode usar nosso modelo dashboard pré-criado para monitorar seu MSSQL métrica. Siga estas etapas para usar nosso modelo dashboard pré-criado:

    1. De [one.newrelic.com](https://one.newrelic.com), vá para a página <DNT>**+ Integrations &amp; Agents**</DNT> .
    2. Clique <DNT>**Dashboards**</DNT>
    3. Na barra de pesquisa, digite `MSSQL On-Host Integration`
    4. O dashboard do MSSQL é exibido. Clique para instalar.
  </Step>
</Steps>

## métrica coletada por integração

<CollapserGroup>
  <Collapser id="blockingSession" title="Bloqueio de sessão métrica">
    <table>
      <thead>
        <tr>
          <th>
            Métrica
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `blocking_spid`
          </td>

          <td>
            O ID da sessão de bloqueio.
          </td>
        </tr>

        <tr>
          <td>
            `blocking_status`
          </td>

          <td>
            O status da sessão de bloqueio.
          </td>
        </tr>

        <tr>
          <td>
            `blocked_spid`
          </td>

          <td>
            O ID da sessão bloqueada.
          </td>
        </tr>

        <tr>
          <td>
            `blocked_status`
          </td>

          <td>
            O status da sessão bloqueada.
          </td>
        </tr>

        <tr>
          <td>
            `wait_type`
          </td>

          <td>
            O tipo de espera experimentado pela sessão bloqueada.
          </td>
        </tr>

        <tr>
          <td>
            `wait_time_in_seconds`
          </td>

          <td>
            O tempo que a sessão ficou esperando em segundos.
          </td>
        </tr>

        <tr>
          <td>
            `command_type`
          </td>

          <td>
            O tipo de comando que está sendo executado.
          </td>
        </tr>

        <tr>
          <td>
            `database_name`
          </td>

          <td>
            O nome do banco de dados onde o bloqueio está ocorrendo.
          </td>
        </tr>

        <tr>
          <td>
            `blocking_query_text`
          </td>

          <td>
            O texto da consulta que está causando o bloqueio.
          </td>
        </tr>

        <tr>
          <td>
            `blocked_query_text`
          </td>

          <td>
            O texto da consulta está sendo bloqueado.
          </td>
        </tr>

        <tr>
          <td>
            `blocked_query_start_time`
          </td>

          <td>
            A hora de início da consulta bloqueada.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="executionPlan" title="consulta Métrica do Plano de Execução">
    <table>
      <thead>
        <tr>
          <th>
            Métrica
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `sql_text`
          </td>

          <td>
            O texto da instrução SQL.
          </td>
        </tr>

        <tr>
          <td>
            `query_id`
          </td>

          <td>
            O identificador exclusivo para a consulta.
          </td>
        </tr>

        <tr>
          <td>
            `query_plan_id`
          </td>

          <td>
            O identificador exclusivo para o plano de consulta.
          </td>
        </tr>

        <tr>
          <td>
            `NodeId`
          </td>

          <td>
            O ID do nó no plano de execução.
          </td>
        </tr>

        <tr>
          <td>
            `PhysicalOp`
          </td>

          <td>
            A operação física realizada por este nó.
          </td>
        </tr>

        <tr>
          <td>
            `LogicalOp`
          </td>

          <td>
            A operação lógica representada por este nó.
          </td>
        </tr>

        <tr>
          <td>
            `EstimateRows`
          </td>

          <td>
            O número estimado de linhas que esta operação produzirá.
          </td>
        </tr>

        <tr>
          <td>
            `EstimateIO`
          </td>

          <td>
            O custo estimado de I/O desta operação.
          </td>
        </tr>

        <tr>
          <td>
            `EstimateCPU`
          </td>

          <td>
            O custo estimado da CPU desta operação.
          </td>
        </tr>

        <tr>
          <td>
            `AvgRowSize`
          </td>

          <td>
            O tamanho médio das linhas processadas por este nó.
          </td>
        </tr>

        <tr>
          <td>
            `TotalSubtreeCost`
          </td>

          <td>
            O custo total estimado para executar esta subárvore.
          </td>
        </tr>

        <tr>
          <td>
            `EstimatedOperatorCost`
          </td>

          <td>
            A estimativa de custo da operação do nó.
          </td>
        </tr>

        <tr>
          <td>
            `EstimatedExecutionMode`
          </td>

          <td>
            O modo de execução estimado desta operação.
          </td>
        </tr>

        <tr>
          <td>
            `GrantedMemoryKb`
          </td>

          <td>
            A quantidade de memória concedida para esta consulta em kilobytes.
          </td>
        </tr>

        <tr>
          <td>
            `SpillOccurred`
          </td>

          <td>
            Um indicador booleano que indica se ocorreu um vazamento.
          </td>
        </tr>

        <tr>
          <td>
            `NoJoinPredicate`
          </td>

          <td>
            Um indicador booleano que indica se há um predicado de junção.
          </td>
        </tr>

        <tr>
          <td>
            `total_worker_time`
          </td>

          <td>
            O tempo total do trabalhador em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `total_elapsed_time`
          </td>

          <td>
            O tempo total decorrido em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `total_logical_reads`
          </td>

          <td>
            O número total de leituras lógicas realizadas.
          </td>
        </tr>

        <tr>
          <td>
            `total_logical_writes`
          </td>

          <td>
            O número total de gravações lógicas realizadas.
          </td>
        </tr>

        <tr>
          <td>
            `execution_count`
          </td>

          <td>
            O número de vezes que a consulta foi executada.
          </td>
        </tr>

        <tr>
          <td>
            `plan_handle`
          </td>

          <td>
            O identificador do plano usado para recuperar o plano.
          </td>
        </tr>

        <tr>
          <td>
            `avg_elapsed_time_ms`
          </td>

          <td>
            O tempo médio decorrido em milissegundos.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="waitTime" title="Aguarde evento métrico">
    <table>
      <thead>
        <tr>
          <th>
            Métrica
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            consulta
          </td>

          <td>
            O identificador exclusivo para a consulta.
          </td>
        </tr>

        <tr>
          <td>
            banco de dados
          </td>

          <td>
            O nome do banco de dados.
          </td>
        </tr>

        <tr>
          <td>
            consulta
          </td>

          <td>
            O texto da consulta.
          </td>
        </tr>

        <tr>
          <td>
            categoria_espera
          </td>

          <td>
            A categoria de espera experimentada pela consulta.
          </td>
        </tr>

        <tr>
          <td>
            tempo_de_espera_total_ms
          </td>

          <td>
            O tempo total de espera em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            tempo_médio_de_espera_ms
          </td>

          <td>
            O tempo médio de espera em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            contagem_de_eventos_de_espera
          </td>

          <td>
            A contagem de eventos de espera que ocorreram.
          </td>
        </tr>

        <tr>
          <td>
            hora_da_última_execução
          </td>

          <td>
            O horário da última execução da consulta.
          </td>
        </tr>

        <tr>
          <td>
            coleção_timestamp
          </td>

          <td>
            O registro de timestamp em que os dados foram coletados.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="slowQueries" title="consulta lenta métrica">
    <table>
      <thead>
        <tr>
          <th>
            Métrica
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            consulta
          </td>

          <td>
            O identificador exclusivo para a consulta.
          </td>
        </tr>

        <tr>
          <td>
            consulta
          </td>

          <td>
            O texto da consulta.
          </td>
        </tr>

        <tr>
          <td>
            banco de dados
          </td>

          <td>
            O nome do banco de dados.
          </td>
        </tr>

        <tr>
          <td>
            nome_do_esquema
          </td>

          <td>
            O nome do esquema.
          </td>
        </tr>

        <tr>
          <td>
            carimbo_de_hora_da_última_execução
          </td>

          <td>
            O timestamp da última execução da consulta.
          </td>
        </tr>

        <tr>
          <td>
            contagem_de_execução
          </td>

          <td>
            O número de vezes que a consulta foi executada.
          </td>
        </tr>

        <tr>
          <td>
            tempo_médio_da_cpu_em_ms
          </td>

          <td>
            O tempo médio da CPU em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            tempo_médio_decorrido_ms
          </td>

          <td>
            O tempo médio decorrido em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            média_de_leituras_de_disco
          </td>

          <td>
            O número médio de leituras de disco.
          </td>
        </tr>

        <tr>
          <td>
            média_de_gravações_em_disco
          </td>

          <td>
            O número médio de gravações em disco.
          </td>
        </tr>

        <tr>
          <td>
            tipo_de_declaração
          </td>

          <td>
            O tipo de instrução SQL.
          </td>
        </tr>

        <tr>
          <td>
            coleção_timestamp
          </td>

          <td>
            O registro de timestamp em que os dados foram coletados.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>