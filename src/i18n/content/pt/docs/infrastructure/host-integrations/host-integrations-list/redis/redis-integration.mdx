---
title: Redis monitoramento integração
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'New Relic''s Redis integration: how to install it, configure it, and understand the data it reports.'
freshnessValidatedDate: never
translationType: machine
---

Nossa integração Redis reporta dados críticos de desempenho do seu servidor [Redis](https://redis.io) para produtos New Relic. Você pode visualizar esses [dados métricos](#metrics) e [dados de inventário](#inventory) em um painel pré-construído, criar políticas de alertas e criar consultas e gráficos personalizados. Você também pode especificar chaves que são importantes para o seu aplicativo e obter informações sobre seu comprimento.

Continue lendo para instalar a integração e ver quais dados coletamos.

## Compatibilidade e requisitos [#comp-req]

Nossa integração é compatível com as versões do Redis 3.0 a 7.0.

Antes de instalar a integração, certifique-se de atender aos seguintes requisitos:

* Uma conta New Relic . Não tem um? [Cadastre-se gratuitamente!](https://newrelic.com/signup) Não é necessário cartão de crédito.

* Se o Redis **não** estiver em execução no Kubernetes ou no Amazon ECS, você deverá [instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) em um host do sistema operacional Linux que esteja executando o Redis. De outra forma:

  * Se estiver executando no Kubernetes, consulte [estes requisitos](/docs/monitor-service-running-kubernetes#requirements).
  * Se estiver executando no ECS, consulte [estes requisitos](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).

A integração obtém dados executando comandos Redis:

* [Comando`INFO` ](https://redis.io/commands/info): Os dados do comando INFO preenchem dados métricos e alguns dados de inventário.

* [Comando`CONFIG GET` ](https://redis.io/commands/config-get): a maioria dos dados de inventário vem deste comando.

  * Na instalação gerenciada Redis sem permissões para executar o comando `CONFIG` (por exemplo, AWS ElastiCache), a execução deste comando pode ser desabilitada com a opção de configuração `config_inventory: false`.

* Aquisição do comprimento da chave: Dependendo do tipo de chave, estes comandos são usados:

  * [`LLEN`](https://redis.io/commands/llen) para `list`
  * [`SCARD`](https://redis.io/commands/scard) para `set`
  * [`ZCOUNT`](https://redis.io/commands/zcount) para `zset`
  * [`HLEN`](https://redis.io/commands/hlen) para o tipo `hash` .

Para a coleta de dados de comprimento de chave, o agente usa [pipeline](https://redis.io/topics/pipelining) para minimizar o impacto no desempenho do Redis. No entanto, se você estiver coletando o comprimento de muitas chaves, o desempenho do Redis poderá ser afetado. Por esta razão, o agente inclui um limite de chave padrão (mas este limite pode ser sobrescrito).

<Callout variant="important">
  Se você editou os nomes dos comandos Redis mencionados acima, a integração não será capaz de recuperar os dados do Redis.
</Callout>

## Começo rápido [#quick]

Instrua seu servidor Redis rapidamente e envie seus dados de telemetria com instalação guiada. Nossa instalação guiada cria um comando CLI personalizado para o seu ambiente que baixa e instala a CLI do New Relic e o agente de infraestrutura.

Pronto para começar? Clique em um desses botões para experimentar.

<ButtonGroup>
  <ButtonLink
    role="button"
    to="https://one.newrelic.com/marketplace/install-data-source?state=eea8674d-6cb6-b7c3-e0c9-d25f5d75ff79"
    variant="primary"
  >
    Instalação guiada
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.eu.newrelic.com/marketplace/install-data-source?state=eea8674d-6cb6-b7c3-e0c9-d25f5d75ff79"
    variant="primary"
  >
    UE instalação guiada
  </ButtonLink>
</ButtonGroup>

## Instalar e ativar [#install]

Para instalar a integração do Redis, siga as instruções para seu ambiente:

Notas Adicionais:

* <DNT>
    **Advanced:**
  </DNT>

  integração também estão disponíveis em [formato tarball](/docs/integrations/host-integrations/installation/install-host-integrations-built-new-relic#tarball) para permitir a instalação fora de um gerenciador de pacote.

* <DNT>
    **On-host integrations do not automatically update.**
  </DNT>

  Para obter melhores resultados, [atualize regularmente o pacote de integração](/docs/integrations/host-integrations/installation/update-infrastructure-host-integration-package) e [o agente de infraestrutura](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).

<CollapserGroup>
  <Collapser
    id="ecs-install"
    title="SEC"
  >
    Consulte [Monitorar serviço em execução no ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
  </Collapser>

  ' '

  <Collapser
    id="k8s-install"
    title="Kubernetes"
  >
    Consulte [Monitorar serviço em execução no Kubernetes](/docs/monitor-service-running-kubernetes).
  </Collapser>

  <Collapser
    id="linux-install"
    title="Linux"
  >
    1. Instale [o agente de infraestrutura](/docs/integrations/host-integrations/installation/install-infrastructure-host-integrations/#install) e substitua a variável `INTEGRATION_FILE_NAME` por `nri-redis`.

    2. Altere o diretório para a pasta integração configuração:

       ```sh
       cd /etc/newrelic-infra/integrations.d
       ```

    3. Copie o arquivo de configuração de amostra:

       ```sh
       sudo cp redis-config.yml.sample redis-config.yml
       ```

    4. Edite o arquivo `redis-config.yml` com base nos métodos de conexão do servidor Redis:

       <CollapserGroup>
         <Collapser
           id="socket-connect"
           title="Conecte-se com soquete Unix"
         >
           Se você se conectar usando soquete Unix, especifique `unix_socket_path` no [arquivo de configuração](#config). Se houver mais de uma instância do Redis usando soquetes Unix, certifique-se de definir `use_unix_socket` como `true` no [arquivo de configuração](#config).

           Certifique-se de que o usuário que está executando a integração do Redis tenha as permissões corretas para acessar esse soquete Unix. As permissões do soquete Unix são definidas na configuração do Redis (valor de `unixsocketperm`).
         </Collapser>

         <Collapser
           id="tcp-connect"
           title="Conecte-se com TCP"
         >
           Se você se conectar via TCP, o [arquivo de configuração](config) será definido por padrão como `localhost` e porta `6379`. Você pode alterar isso especificando `hostname` e/ou o argumento `port` . Se você usar esse método, o parâmetro `unix_socket_path` não poderá ser definido.
         </Collapser>
       </CollapserGroup>

    5. Se necessário, defina outras configurações do arquivo de configuração com base na configuração do Redis, conforme descrito em [Configuração](#config).

    6. Para ativar a análise automática de log e encaminhamento de erros Redis, copie (ou renomeie) o arquivo `redis-log.yml.example` para `redis-log.yml`. Não há necessidade de reiniciar o agente.

       <DNT>
         **Example:**
       </DNT>

       ```sh
       sudo cp /etc/newrelic-infra/logging.d/redis-log.yml.example /etc/newrelic-infra/logging.d/redis-log.yml
       ```
  </Collapser>

  <Collapser
    id="windows-install"
    title="Windows"
  >
    1. Baixe a imagem do instalador `nri-redis` .MSI em:

       [https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-redis/nri-redis-amd64.msi](https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-redis/nri-redis-amd64.msi)

    2. Para instalar a partir do prompt de comando do Windows, execute:

       ```sh
       msiexec.exe /qn /i PATH\TO\nri-redis-amd64.msi
       ```

       ou clique duas vezes no arquivo no Explorer.

    3. No diretório integração, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`, crie uma cópia do arquivo de configuração de amostra executando:

       ```sh
       copy redis-win-config.yml.sample redis-win-config.yml
       ```

    4. Edite o arquivo `redis-win-config.yml` conforme descrito nas [definições de configuração](#config).
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Crie um usuário New Relic para seu servidor Redis [#enable-instance]

Se você estiver usando o Redis 6+ e listas de controle de acesso (ACLs) para controlar o acesso à sua instância, convém criar um usuário `newrelic` para a integração. Use este comando para criar e conceder as permissões necessárias ao seu usuário:

```sh
ACL SETUSER newrelic on >'YOUR_SELECTED_PASSWORD' ~* +INFO +CONFIG|GET +SELECT +TYPE +LLEN +SCARD +ZCOUNT +HLEN
```

## Configurar a integração [#config]

Existem diversas formas de configurar a integração, dependendo de como ela foi instalada:

* Se habilitado via Kubernetes: consulte [Monitorar serviços em execução no Kubernetes](/docs/monitor-service-running-kubernetes).
* Se habilitado via Amazon ECS: consulte [Monitorar serviços em execução no ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
* Se instalado no host: edite a configuração no arquivo de configuração YAML da integração `redis-config.yml`.

Use a configuração YAML para colocar as credenciais de login necessárias e configurar como seus dados são coletados, dependendo de sua configuração e preferência.

O arquivo de configuração possui configurações comuns aplicáveis a todas as integração, como `interval`, `timeout`, `inventory_source`. Para saber mais sobre essas configurações comuns, consulte nosso [formato de configuração YAML](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-newer-configuration-format/#configuration-basics).

<Callout variant="important">
  Se você ainda estiver usando nossos arquivos de configuração/definição de legado, use nosso [foramt de configuração padrão mais antigo](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-standard-configuration-format/).
</Callout>

Configurações específicas relacionadas ao Redis são definidas usando a seção `env` do arquivo de configuração. Essas configurações controlam a conexão com sua instância Redis, bem como outras configurações e recursos de segurança.

## Configurações de instância do Redis [#instance-settings]

A integração Redis coleta informações métricas(<DNT>**M**</DNT>) e de inventário(<DNT>**I**</DNT>). Na tabela, use a coluna <DNT>**Applies To**</DNT> para as configurações disponíveis para cada coleção:

' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: '150px' }}>
        Contexto
      </th>

      <th>
        Descrição
      </th>

      <th>
        Padrão
      </th>

      <th>
        Aplica-se a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `HOSTNAME`
      </td>

      <td>
        Nome do servidor Redis do host.
      </td>

      <td>
        `localhost`
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        `PORT`
      </td>

      <td>
        Porta onde o servidor Redis está escutando.
      </td>

      <td>
        `6379`
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        `USERNAME`
      </td>

      <td>
        Nome de usuário a ser usado ao conectar-se ao servidor Redis. Use apenas com Redis 6+ se a ACL estiver habilitada.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        `PASSWORD`
      </td>

      <td>
        Senha a ser usada ao conectar-se ao servidor Redis. Use somente com servidores Redis se `REQUIREPASS` ou ACL estiver ativado.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        `UNIX_SOCKET_PATH`
      </td>

      <td>
        Caminho para o arquivo de soquete Unix no qual o servidor Redis está escutando. Use isto em vez de nome do Host/Port.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        `USE_UNIX_SOCKET`
      </td>

      <td>
        Defina como `true` para identificar exclusivamente a entidade do monitor ao usar soquetes Unix.
      </td>

      <td>
        `false`
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        `USE_TLS`
      </td>

      <td>
        Use TLS ao se comunicar com o servidor Redis.
      </td>

      <td>
        `false`
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        `TLS_INSECURE_SKIP_VERIFY`
      </td>

      <td>
        Desative a verificação do nome do servidor ao conectar-se por TLS.
      </td>

      <td>
        `false`
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        `KEYS`
      </td>

      <td>
        Lista das chaves para recuperar seus comprimentos.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        `KEYS_LIMIT`
      </td>

      <td>
        Número máximo de chaves para recuperar seus comprimentos.
      </td>

      <td>
        `30`
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        `CONFIG_INVENTORY`
      </td>

      <td>
        Defina como 'false' em ambientes onde o comando Redis CONFIG não é permitido (por exemplo, AWS ou ElastiCache).
      </td>

      <td>
        `true`
      </td>

      <td style={{ 'text-align': 'center' }}>
        EU
      </td>
    </tr>

    <tr>
      <td>
        `RENAMED_COMMANDS`
      </td>

      <td>
        Mapeie os comandos padrão do Redis para seu formato renomeado.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        [`REMOTE_MONITORING`](/docs/remote-monitoring-host-integrations)
      </td>

      <td>
        Habilite o monitoramento de multilocação.
      </td>

      <td>
        `true`
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        `METRICS`
      </td>

      <td>
        Defina como `true` para ativar a coleta somente de métricas.
      </td>

      <td>
        `false`
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>

    <tr>
      <td>
        `INVENTORY`
      </td>

      <td>
        Defina como `true` para ativar a coleta somente de inventário.
      </td>

      <td>
        `false`
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

Os valores para estas configurações podem ser definidos de diversas maneiras:

* Adicione o valor diretamente ao arquivo de configuração. Esta é a forma mais comum.
* Substitua os valores das variáveis de ambiente usando a notação `{{}}` . Isso requer o agente de infraestrutura 1.14.0+. Para saber mais sobre isso, consulte mais sobre [variáveis de ambiente de passagem do agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough).
* Use o gerenciamento de segredos para proteger informações confidenciais, como senhas, para que não sejam expostas em texto simples no arquivo de configuração. Para obter mais informações, consulte [gerenciamento de segredos](/docs/integrations/host-integrations/installation/secrets-management).

## Etiquetas e atributo personalizado [#labels]

Você também pode decorar sua métrica com etiquetas. Os rótulos permitem adicionar atributo de par de valor principal à sua métrica para que você possa consultar, filtrar ou agrupar sua métrica.

Embora nosso arquivo de configuração de amostra padrão inclua exemplos de rótulos, eles são opcionais. Você pode remover, modificar ou adicionar novos.

```yml
labels:
  env: production
  role: load_balancer
```

## Exemplo de configuração [#examples]

<CollapserGroup>
  <Collapser
    id="basic-config"
    title="Configuração básica"
  >
    Esta é a configuração básica usada para coletar métricas e inventário do seu localhost:

    ```yml
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 6379
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production

      - name: nri-redis
        env:
          INVENTORY: true
          HOSTNAME: localhost
          PORT: 6379
          REMOTE_MONITORING: true
        interval: 60s
        labels:
          environment: production
        inventory_source: config/redis
    ```
  </Collapser>

  <Collapser
    id="basic-auth"
    title="Autenticação básica"
  >
    Esta configuração se conecta ao Redis usando autenticação básica. Substitua `my_password` pela sua senha `REQUIREPASS` :

    ```yml
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 6379
          PASSWORD: "my_password"
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production

      - name: nri-redis
        env:
          INVENTORY: true
          HOSTNAME: localhost
          PORT: 6379
          PASSWORD: "my_password"
          REMOTE_MONITORING: true
        interval: 60s
        labels:
          environment: production
        inventory_source: config/redis
    ```
  </Collapser>

  <Collapser
    id="acl-auth"
    title="Autenticação Redis 6+ ACL"
  >
    No Redis 6+, você pode proteger sua instância com [listas de controle de acesso (ACLs)](https://redis.io/topics/acl). Para ACLs, substitua os valores `USERNAME` e `PASSWORD` pelas suas credenciais:

    ```yml
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 6379
          USERNAME: my_user
          PASSWORD: "my_password"
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production

      - name: nri-redis
        env:
          INVENTORY: true
          HOSTNAME: localhost
          PORT: 6379
          USERNAME: my_user
          PASSWORD: "my_password"
          REMOTE_MONITORING: true
        interval: 60s
        labels:
          environment: production
        inventory_source: config/redis
    ```
  </Collapser>

  <Collapser
    id="metrics-tls-connection"
    title="Métrica somente com conexão TLS"
  >
    Use para se conectar ao Redis com TLS. Você pode adicionar `TLS_INSECURE_SKIP_VERIFY : true` para desativar a verificação do nome do servidor:

    ```yml
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 6379
          USE_TLS: true
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production
    ```
  </Collapser>

  <Collapser
    id="metrics-connect-socket"
    title="Conexão somente métrica via soquete"
  >
    Use para conectar-se ao Redis usando um arquivo de soquete. Esta é uma alternativa para uma conexão TCP nome do host/Porta:

    ```yml
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          UNIX_SOCKET_PATH: /var/run/redis/redis.sock
          USE_UNIX_SOCKET: true
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production
    ```
  </Collapser>

  <Collapser
    id="renamed-commands"
    title="Usando comandos renomeados"
  >
    Use isto para coletar sua métrica/inventário se você usou [`rename-command`](https://redis.io/topics/security#disabling-of-specific-commands) para proteger sua instância:

    ```yml
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 6379
          RENAMED_COMMANDS: '{"CONFIG":"b840fc9f15f59e41cb7be6c52","LLEN":"c940fc2d15f59e41cb7be6c21"}'
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production

      - name: nri-redis
        env:
          INVENTORY: true
          HOSTNAME: localhost
          PORT: 6379
          RENAMED_COMMANDS: '{"CONFIG":"b840fc9f15f59e41cb7be6c52"}'
          REMOTE_MONITORING: true
        interval: 60s
        labels:
          environment: production
        inventory_source: config/redis
    ```
  </Collapser>

  <Collapser
    id="multi-instance-keys-filtering"
    title="Monitoramento multi-instância com filtragem de chaves"
  >
    Use isto se precisar coletar métricas de dois servidores Redis diferentes usando a mesma integração.

    O primeiro exemplo de instância está coletando apenas `KEY_1` e `KEY_2` do banco de dados 0 Redis . O segundo exemplo de instância mostra como coletar de diferentes bancos de dados com `{"DB":"KEYS"}`.

    ```yml
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: redis_host_1
          PORT: 6379
          KEYS: '["KEY_1","KEY_2"]'
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production

      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: redis_host_2
          PORT: 6379
          KEYS: '{"0":["KEY_1","KEY_2"],"1":["KEY_3"]}'
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production
    ```
  </Collapser>
</CollapserGroup>

## Encontre e use dados [#find-and-use]

Os dados deste serviço são reportados para um [dashboard de integração](/docs/integrations/new-relic-integrations/getting-started/infrastructure-integration-dashboards-charts).

Métrica estão anexadas aos [tipos de evento](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic) `RedisSample` e `RedisKeyspaceSample` . Você pode [consultar esses dados](/docs/using-new-relic/data/understand-data/query-new-relic-data) para fins de resolução de problemas ou para criar gráficos e dashboards personalizados.

Para saber mais sobre como encontrar e usar seus dados, consulte [Compreender os dados de integração](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Dados métricos [#metrics]

A integração Redis recolhe os seguintes dados métricos atributo:

### Métrica de amostra Redis [#redissample-metrics]

Estes atributos estão anexados ao tipo de evento `RedisSample` :

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Nome
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `cluster.connectedSlaves`
      </td>

      <td>
        Número de escravos conectados.
      </td>
    </tr>

    <tr>
      <td>
        `db.aofLastRewriteTimeInMilliseconds`
      </td>

      <td>
        Duração da última operação de reescrita AOF em milissegundos.
      </td>
    </tr>

    <tr>
      <td>
        `db.aofLastBgrewriteStatus`
      </td>

      <td>
        Booleano que representa o status da última operação de reescrita em segundo plano AOF.
      </td>
    </tr>

    <tr>
      <td>
        `db.aofLastWriteStatus`
      </td>

      <td>
        Booleano que representa o status da última operação de gravação AOF.
      </td>
    </tr>

    <tr>
      <td>
        `db.evictedKeysPerSecond`
      </td>

      <td>
        Número de chaves despejadas devido ao limite máximo de memória por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `db.expiredKeysPerSecond`
      </td>

      <td>
        Número de eventos de expiração de chave por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyspaceHitsPerSecond`
      </td>

      <td>
        Número de pesquisas bem-sucedidas de chaves no dicionário principal por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyspaceMissesPerSecond`
      </td>

      <td>
        Número de falhas na pesquisa de chaves no dicionário principal por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `db.latestForkUsecMilliseconds`
      </td>

      <td>
        Duração da última operação de bifurcação em milissegundos.
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbBgsaveInProgress`
      </td>

      <td>
        Boleano. Um sinalizador indicando que um salvamento do RDB está em andamento.
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbChangesSinceLastSave`
      </td>

      <td>
        Número de alterações desde o último despejo.
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbLastBgsaveStatus`
      </td>

      <td>
        Booleano que representa o status da última operação de salvamento do RDB.
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbLastBgsaveTimeMilliseconds`
      </td>

      <td>
        Duração da última operação de salvamento do RDB em milissegundos.
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbLastSaveTime`
      </td>

      <td>
        Carimbo de data timestamp baseado na época do último salvamento bem-sucedido do RDB em segundos.
      </td>
    </tr>

    <tr>
      <td>
        `db.syncFull`
      </td>

      <td>
        Contagem do número de vezes que os escravos foram totalmente sincronizados com este mestre.
      </td>
    </tr>

    <tr>
      <td>
        `db.syncPartialErr`
      </td>

      <td>
        Contagem do número de vezes que as sincronizações parciais não foram concluídas.
      </td>
    </tr>

    <tr>
      <td>
        `db.syncPartialOk`
      </td>

      <td>
        Contagem do número de vezes que as sincronizações parciais foram concluídas.
      </td>
    </tr>

    <tr>
      <td>
        `net.blockedClients`
      </td>

      <td>
        Número de clientes pendentes em uma chamada bloqueada (`BLPOP`, `BRPOP`, `BRPOPLPUSH`).
      </td>
    </tr>

    <tr>
      <td>
        `net.clientBiggestInputBufBytes`
      </td>

      <td>
        O maior buffer de entrada entre as conexões atuais do cliente.
      </td>
    </tr>

    <tr>
      <td>
        `net.clientLongestOutputList`
      </td>

      <td>
        A lista de saída mais longa entre as conexões atuais do cliente.
      </td>
    </tr>

    <tr>
      <td>
        `net.commandsProcessedPerSecond`
      </td>

      <td>
        Número de comandos processados pelo servidor por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `net.connectedClients`
      </td>

      <td>
        Número de conexões de clientes (excluindo conexões de escravos).
      </td>
    </tr>

    <tr>
      <td>
        `net.connectionsReceivedPerSecond`
      </td>

      <td>
        Número de conexões aceitas pelo servidor por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `net.inputBytesPerSecond`
      </td>

      <td>
        Número total de bytes de entrada por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `net.outputBytesPerSecond`
      </td>

      <td>
        Número total de bytes gerados por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `net.pubsubChannels`
      </td>

      <td>
        Número global de canais pub/sub com assinatura de cliente.
      </td>
    </tr>

    <tr>
      <td>
        `net.pubsubPatterns`
      </td>

      <td>
        Número global de padrão pub/sub com assinatura do cliente.
      </td>
    </tr>

    <tr>
      <td>
        `net.rejectedConnectionsPerSecond`
      </td>

      <td>
        Número de conexões por segundo rejeitadas devido ao limite máximo de clientes.
      </td>
    </tr>

    <tr>
      <td>
        `software.uptimeMilliseconds`
      </td>

      <td>
        Número de milissegundos desde o início do servidor Redis.
      </td>
    </tr>

    <tr>
      <td>
        `system.memFragmentationRatio`
      </td>

      <td>
        Razão entre `used_memory_rss` e `used_memory`.
      </td>
    </tr>

    <tr>
      <td>
        `system.totalSystemMemoryBytes`
      </td>

      <td>
        A quantidade de memória em bytes disponível na instância em que o Redis está em execução.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedCpuSysMilliseconds`
      </td>

      <td>
        CPU do sistema consumida pelo servidor Redis em milissegundos.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedCpuSysChildrenMilliseconds`
      </td>

      <td>
        CPU do sistema consumida pelos processos em segundo plano em milissegundos.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedCpuUserMilliseconds`
      </td>

      <td>
        CPU do usuário consumida pelo servidor Redis em milissegundos.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedCpuUserChildrenMilliseconds`
      </td>

      <td>
        CPU do usuário consumida pelos processos em segundo plano em milissegundos.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedMemoryBytes`
      </td>

      <td>
        O número total de bytes alocados pelo Redis usando seu alocador (padrão `libc`, `jemalloc` ou um alocador alternativo como `tcmalloc`).
      </td>
    </tr>

    <tr>
      <td>
        `system.usedMemoryLuaBytes`
      </td>

      <td>
        Número de bytes usados pelo mecanismo Lua.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedMemoryPeakBytes`
      </td>

      <td>
        O pico de memória consumida pelo Redis em bytes.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedMemoryRssBytes`
      </td>

      <td>
        Número de bytes que o Redis alocou conforme visto pelo sistema operacional (também conhecido como tamanho do conjunto residente). Este é o número relatado por ferramentas como `top(1)` e `ps(1)`.
      </td>
    </tr>
  </tbody>
</table>

### Métrica keyspace

A integração Redis coleta os seguintes metadados e métricas keyspace . Estes atributos estão anexados ao tipo de evento `RedisKeyspaceSample` :

<table>
  <thead>
    <tr>
      <th style={{ width: "270px" }}>
        Nome
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `db.avgTtl`
      </td>

      <td>
        O tempo médio de vida (TTL) em milissegundos de chaves que têm uma expiração definida no banco de dados que está sendo relatado.
      </td>
    </tr>

    <tr>
      <td>
        `db.keys`
      </td>

      <td>
        Número de chaves no banco de dados que estão sendo relatadas.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyspace`
      </td>

      <td>
        Índice do banco de dados Redis, que é o número inteiro (geralmente um número entre `0` e `15`). Formato: `db` seguido do índice do banco de dados. Por exemplo: `db0`, `db1`, `db2`, etc.
      </td>
    </tr>

    <tr>
      <td>
        `db.expires`
      </td>

      <td>
        Número de chaves com expiração no banco de dados que está sendo relatado.
      </td>
    </tr>
  </tbody>
</table>

## Dados de inventário [#inventory]

Os dados de inventário incluem tudo o que é relatado pelo comando Redis [`CONFIG GET`](https://redis.io/commands/config-get), com exceção de `requirepass`, que armazena a senha do servidor Redis. Para obter mais informações sobre dados de inventário, consulte [Compreender os dados de inventário](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#inventory-data).

## Outros dados do sistema [#metadata]

A integração Redis coleta estes [atributos](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute) adicionais sobre o seu serviço Redis :

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        Nome
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `software.version`
      </td>

      <td>
        A versão do servidor Redis. Exemplo: `3.2.3`.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.role`
      </td>

      <td>
        `master` ou `slave,` dependendo da função do nó Redis que está sendo monitorado.
      </td>
    </tr>
  </tbody>
</table>

## Verifique o código-fonte [#source-code]

Esta integração é um software de código aberto. Isso significa que você pode [navegar pelo código-fonte](https://github.com/newrelic/nri-redis) e enviar melhorias, ou criar seu próprio fork e construí-lo.
