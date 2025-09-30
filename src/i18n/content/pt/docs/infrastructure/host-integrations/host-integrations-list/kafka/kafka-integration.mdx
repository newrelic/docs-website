---
title: Kafka monitoramento integração
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'New Relic''s Kafka integration: how to install it and configure it, and what data it reports.'
freshnessValidatedDate: never
translationType: machine
---

A New Relic [integração no host do](/docs/integrations/host-integrations/getting-started/introduction-host-integrations) Kafka reporta dados métricos e de configuração do seu serviço Kafka. Instrumentamos todos os elementos-chave do seu cluster, incluindo corretores (ZooKeeper e Bootstrap), produtores, consumidores e tópicos.

Para instalar a integração de monitoramento Kafka, você deve executar as seguintes etapas:

1. [Prepare-se para a instalação](#prepare).
2. [Instale e ative a integração](#install).
3. [Configure a integração](#config).
4. [Encontre e use dados](#find-and-use).
5. Opcionalmente, consulte [as definições de configuração do Kafka](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config).

<Callout variant="tip">
  Para ler sobre práticas recomendadas no monitoramento Kafka, confira [este post do blog](https://newrelic.com/blog/best-practices/new-relic-kafkapocalypse).
</Callout>

## Compatibilidade e requisitos [#req]

### Versões Kafka [#kafka-versions]

Nossa integração é compatível com Kafka versão 3 ou inferior.

Observe [a Política EOL do Apache Kafka](https://cwiki.apache.org/confluence/display/KAFKA/Time+Based+Release+Plan#TimeBasedReleasePlan-WhatIsOurEOLPolicy), pois você pode obter resultados inesperados se usar uma versão [End of Life](https://docs.confluent.io/platform/current/installation/versions-interoperability.html#cp-and-apache-ak-compatibility) Kafka.

### Sistema operacional suportado [#supported-os]

* Windows

  <img
    style={{ width: '32px', height: '32px'}}
    class="inline"
    title="Windows"
    alt="Windows"
    src="/images/os_icon_windows.webp"
  />

* Linux

  <img
    style={{ width: '32px', height: '32px'}}
    class="inline"
    title="Linux"
    alt="Linux"
    src="/images/os_icon_linux.webp"
  />

Para uma lista abrangente de versões específicas do Windows e Linux, verifique a tabela de [sistemas operacionais compatíveis](/docs/infrastructure/install-infrastructure-agent/get-started/requirements-infrastructure-agent/#operating-systems).

### Requisito do sistema [#system-reqs]

* Uma conta New Relic . Não tem um? [Cadastre-se gratuitamente!](https://newrelic.com/signup) Não é necessário cartão de crédito.

* Se o Kafka não estiver em execução no Kubernetes ou no Amazon ECS, você poderá [instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) em um host do sistema operacional Linux ou Windows ou em um host capaz de acessar remotamente o local onde o Kafka está instalado. De outra forma:

  * Se estiver executando

    <img
      style={{ width: '32px', height: '32px'}}
      class="inline"
      title="Kubernetes"
      alt="Kubernetes"
      src="/images/os_icon_k8.webp"
    >
      Kubernetes, consulte [estes requisitos](/docs/monitor-service-running-kubernetes#requirements).
    </img>

  * Se estiver executando

    <img
      style={{ width: '32px', height: '32px'}}
      class="inline"
      title="ECS"
      alt="ECS"
      src="/images/os_icon_ecs.webp"
    >
      Amazon ECS, consulte [estes requisitos](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
    </img>

* Java versão 8 ou superior.

* JMX habilitado em todos os corretores.

* Somente consumidores e produtores baseados em Java e com JMX habilitado.

* O número total de tópicos de monitor deve ser inferior a 10.000.

### Requisitos de conectividade [#connectivity-requirements]

A integração precisa ser configurada e ter permissão para se conectar a:

* Hosts listados em `zookeeper_hosts` no protocolo Zookeeper, usando o mecanismo de autenticação Zookeeper, se `autodiscover_strategy` estiver definido como `zookeeper`.
* Hosts definidos em `bootstrap_broker_host` por meio do protocolo Kafka, usando os mecanismos de autenticação/transporte do corretor Kafka, se `autodiscover_strategy` estiver configurado como `bootstrap`.
* Todos os corretores no cluster sobre o protocolo e porta Kafka, usando os mecanismos de autenticação/transporte dos corretores Kafka.
* Todos os brokers no cluster através do protocolo e porta JMX, usando os mecanismos de autenticação/transporte especificados na configuração JMX dos brokers.
* Todos os produtores/consumidores especificados em produtores e consumidor através do protocolo JMX e porta, caso queira monitoramento produtor/consumidor. As configurações JMX para o consumidor devem ser as mesmas dos corretores.

<Callout variant="important">
  Por padrão, os grupos de segurança e seus equivalentes em outros provedores de nuvem, na AWS, não têm as portas necessárias abertas por padrão. JMX requer duas portas para funcionar: a porta JMX e a porta RMI. Eles podem ser definidos com o mesmo valor ao configurar a JVM para habilitar JMX e devem estar abertos para que a integração possa se conectar e coletar métricas dos corretores.
</Callout>

## Prepare-se para a instalação [#prepare]

Kafka é um software complexo construído como sistemas distribuídos. Por esse motivo, é necessário garantir que a integração possa contatar todos os hosts e serviços necessários para que os dados sejam coletados corretamente.

<CollapserGroup>
  <Collapser
    id="autodiscovery"
    title="Descoberta automática"
  >
    Dada a natureza distribuída do Kafka, o número real e a lista de corretores geralmente não são fixados pela configuração e, em vez disso, são bastante dinâmicos. Por esse motivo, a integração Kafka oferece dois mecanismos para realizar a descoberta automática da lista de brokers do cluster: Bootstrap e Zookeeper. O mecanismo usado depende da configuração do cluster Kafka que está sendo monitorado.

    ### Bootstrap

    Com o [mecanismo de inicialização](#bootstrap), a integração utiliza um broker de inicialização para realizar a autodescoberta. Trata-se de uma corretora cujo endereço é bem conhecido e que será solicitada a quaisquer outras corretoras de que tenha conhecimento. A integração precisa ser capaz de entrar em contato com esse broker no endereço fornecido no parâmetro bootstrap_broker_host para que a descoberta de bootstrap funcione.

    ### Zookeeper

    Alternativamente, a integração Kafka também pode se comunicar com um [servidor Zookeeper](#zookeeper) para obter a lista de corretores. Para fazer isso, a integração precisa ser fornecida com o seguinte:

    * A lista de hosts do Zookeeper, `zookeeper_hosts`, para contato.

    * Os segredos de autenticação adequados para conectar-se aos hosts.

      Juntamente com a lista de corretores que conhece, o Zookeeper também anunciará quais mecanismos de conexão são suportados por cada corretor.

      Você pode configurar a integração do Kafka para tentar diretamente um desses mecanismos com o parâmetro `preferred_listener` . Caso este parâmetro não seja fornecido, a integração tentará entrar em contato com os corretores com todas as configurações anunciadas até que um deles tenha sucesso.

      <Callout variant="tip">
        A integração usará o Zookeeper apenas para descobrir corretores e não recuperará métricas dele.
      </Callout>
  </Collapser>

  <Collapser
    id="topic-listing"
    title="Listagem de tópicos"
  >
    Para listar corretamente os tópicos processados pelas corretoras, a integração precisa entrar em contato com as corretoras através do protocolo Kafka. Dependendo de como os intermediários estão configurados, isso pode exigir a configuração de SSL e/ou SASL para corresponder à configuração do intermediário. Os tópicos devem ter acesso DESCRIBE.
  </Collapser>

  <Collapser
    id="broker-monitoring"
    title="Monitoramento de Corretora (JMX)"
  >
    O Kafka integração consulta JMX, uma extensão Java padrão para troca de métricas em aplicativo Java. O JMX não está habilitado por padrão nos corretores Kafka e você precisa habilitá-lo para que a coleta de métricas funcione corretamente. O JMX requer que o RMI esteja habilitado e a porta RMI precisa ser configurada para a mesma porta do JMX.

    Você pode configurar o JMX para usar autenticação de nome de usuário/senha, bem como SSL. Caso tal recurso tenha sido habilitado nas configurações JMX da corretora, é necessário configurar a integração adequadamente.

    Se a descoberta automática estiver definida como inicialização, as configurações JMX definidas para o corretor de inicialização serão aplicadas a todos os outros corretores descobertos, portanto, a Porta e outras configurações devem ser as mesmas em todos os corretores. <Callout variant="important">Não recomendamos habilitar o acesso JMX/RMI anônimo e/ou não criptografado em segmentos de rede públicos ou não confiáveis porque isso representa um grande risco de segurança.</Callout>
  </Collapser>

  <Collapser
    id="consumer-offset"
    title="Compensação do consumidor"
  >
    O deslocamento dos grupos de consumidores e consumidores dos tópicos, bem como o lag, podem ser recuperados como um [KafkaOffsetSample](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config/#KafkaOffsetSample-collection) com a sinalização `CONSUMER_OFFSET=true`, mas devem estar em uma instância separada porque quando esta sinalização for ativada a instância não coletará outras amostras.
  </Collapser>

  <Collapser
    id="producer"
    title="Monitoramento de Produtor e Consumidor (JMX)"
  >
    Produtores e consumidores escritos em Java também podem ser monitorados para obter metadados mais específicos através do mesmo mecanismo (JMX). Isso irá gerar [KafkaConsumerSamples e KafkaProducerSamples](#KafkaConsumerSample-collection). O JMX precisa ser habilitado e configurado nos aplicativos onde não está habilitado por padrão.

    Produtores e consumidores não-Java não suportam JMX e, portanto, não são suportados pela integração Kafka.
  </Collapser>
</CollapserGroup>

## Instale e ative a integração [#install]

Para instalar a integração do Kafka, siga as instruções para seu ambiente:

### Instalação Linux [#linux-install]

1. Siga as instruções para [instalar uma integração](/docs/install-integrations-package) e substitua a variável `INTEGRATION_FILE_NAME` por `nri-kafka`.

2. Altere o diretório para a pasta integração configuração executando:

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

3. Copie o arquivo de configuração de amostra executando:

   ```shell
   sudo cp kafka-config.yml.sample kafka-config.yml
   ```

4. Edite o arquivo de configuração `kafka-config.yml` com seu editor favorito. Confira alguns [exemplos de arquivos de configuração.](#examples).

### Outros ambientes [#other-env]

<CollapserGroup>
  <Collapser
    id="windows-install"
    title={<><img src="/images/os_icon_windows.webp" title="Windows installation" alt="Windows installation" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>Instalação do Windows</img></>}
  >
    1. [Baixe o instalador .exe para integração Kafka do New Relic](https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-kafka/nri-kafka-amd64-installer.exe).

    2. Para instalar a partir do prompt de comando do Windows, execute:

       ```shell
       PATH\TO\nri-kafka-amd64-installer.exe
       ```

    3. No diretório integração, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`, crie uma cópia do arquivo de configuração de amostra executando:

       ```shell
       cp kafka-config.yml.sample kafka-config.yml
       ```

    4. Edite o arquivo `kafka-config.yml` usando um dos [arquivos de amostra`kafka-config.yml` ](#examples).
  </Collapser>

  <Collapser
    id="ecs-install"
    title={<><img src="/images/os_icon_ecs.webp" title="Amazon ECS installation" alt="Amazon ECS installation" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>' 'Instalação do Amazon ECS</img></>}
  >
    Consulte [Monitorar serviço em execução no ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
  </Collapser>

  <Collapser
    id="k8s-install"
    title={<><img src="/images/os_icon_k8.webp" title="Kubernetes installation" alt="Kubernetes installation" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>Kubernetes Instalação</img></>}
  >
    Consulte [Monitorar serviço em execução no Kubernetes](/docs/monitor-service-running-kubernetes).
  </Collapser>
</CollapserGroup>

Notas Adicionais:

* <DNT>
    **Advanced:**
  </DNT>

  integração também estão disponíveis em [formato tarball](/docs/integrations/host-integrations/installation/install-host-integrations-built-new-relic#tarball) para permitir a instalação fora de um gerenciador de pacote.

* <DNT>
    **On-host integrations do not automatically update.**
  </DNT>

  Para obter melhores resultados, [atualize regularmente o pacote de integração](/docs/integrations/host-integrations/installation/update-infrastructure-host-integration-package) e [o agente de infraestrutura](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).

<InstallFeedback/>

## Configurar a integração [#config]

Existem diversas formas de configurar a integração, dependendo de como ela foi instalada:

* Se habilitado através

  <img
    style={{ width: '32px', height: '32px'}}
    class="inline"
    title="Kubernetes"
    alt="Kubernetes"
    src="/images/os_icon_k8.webp"
  >
    Kubernetes,[consulte Monitorar serviços em execução no Kubernetes](/docs/monitor-service-running-kubernetes).
  </img>

* Se habilitado através

  <img
    style={{ width: '32px', height: '32px'}}
    class="inline"
    title="ECS"
    alt="ECS"
    src="/images/os_icon_ecs.webp"
  >
    Amazon ECS, consulte [Monitorar serviços em execução no ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
  </img>

* Se instalado no host, edite a configuração no arquivo de configuração YAML da integração, `kafka-config.yml`. A configuração no formato YAML de uma integração é onde você pode colocar as credenciais de login necessárias e configurar como os dados são coletados. Quais opções você altera dependem de sua configuração e preferência. O arquivo de configuração possui configurações comuns aplicáveis a todas as integrações como `interval`, `timeout`, `inventory_source`. Para ler tudo sobre essas configurações comuns, consulte nosso documento [Formato de configuração](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-newer-configuration-format/#configuration-basics) .

<Callout variant="important">
  Se você ainda estiver usando nossos arquivos de configuração e definição de legado, consulte este [documento](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-standard-configuration-format/) para obter ajuda.
</Callout>

Tal como acontece com outras integração, um arquivo de configuração `kafka-config.yml` pode ter várias instâncias da integração coletando diferentes métricas de corretores, consumidores e produtores. Você pode ver exemplos de configuração com uma ou múltiplas instâncias nos [arquivos de amostra`kafka-config.yml`](#examples)

As configurações específicas relacionadas ao Kafka são definidas usando a seção `env` de cada instância no arquivo de configuração `kafka-config.yml` . Essas configurações controlam a conexão com seus Brokers, Zookeeper e JMX, bem como outras configurações e recursos de segurança. A lista de configurações válidas está descrita nas [definições de configuração do Kafka](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config).

A integração tem dois modos de operação em cada instância, que são mutuamente exclusivos, que podem ser configurados com o parâmetro `CONSUMER_OFFSET` :

* Coleta de compensação do consumidor: defina `CONSUMER_OFFSET = true` para coletar [KafkaOffsetSample](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config/#KafkaOffsetSample-collection).
* Modo de coleta principal: defina `CONSUMER_OFFSET = false` para coletar o restante das amostras: [KafkaBrokerSample, KafkaTopicSample](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config/#broker-collection), [KafkaProducerSample, KafkaConsumerSample](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config/#KafkaConsumerSample-collection).

<Callout variant="important">
  Esses modos são mutuamente exclusivos porque a coleta de compensação do consumidor leva muito tempo para ser executada e possui requisitos de alto desempenho, para coletar os dois grupos de Amostras, defina duas instâncias, uma com cada modo.
</Callout>

Os valores para estas configurações podem ser definidos de diversas maneiras:

* Adicionando o valor diretamente no arquivo de configuração. Esta é a forma mais comum.
* Substituindo os valores das variáveis de ambiente usando a notação `{{ }}` . Leia mais sobre como [usar passthroughs de variáveis de ambiente com integração no host](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough) ou veja o exemplo de [substituição de variáveis de ambiente](/docs/infrastructure/host-integrations/host-integrations-list/elasticsearch/elasticsearch-integration#envvar-replacement).
* Usando gerenciamento de segredos. Use isto para proteger informações confidenciais, como senhas que seriam expostas em texto simples no arquivo de configuração. Para obter mais informações, consulte [gerenciamento de segredos](/docs/integrations/host-integrations/installation/secrets-management).

### Monitoramento Offset

Ao definir `CONSUMER_OFFSET = true`, por padrão, serão coletadas apenas as métricas dos grupos de consumidores com consumidor ativo (e métrica de consumo). Para coletar também a métrica de grupos de consumidores com consumidores inativos deve-se definir `INACTIVE_CONSUMER_GROUP_OFFSET` como `true`.

Quando um grupo de consumidores está monitorando mais de um tópico, é valioso ter métricas de grupo de consumidores separadas por tópicos, principalmente se um dos tópicos tiver consumidor inativo, pois assim é possível identificar em qual tópico o grupo de consumidores está tendo lag e se há são consumidores ativos para esse grupo e tópico de consumidores.

Para obter as métricas do grupo de consumidores separadas por tópico, você deve definir `CONSUMER_GROUP_OFFSET_BY_TOPIC` como `true` (o padrão é `false`)

Para obter mais informações sobre como configurar o monitoramento de deslocamento, consulte [Configurar coleção KafkaOffsetSample](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config/#KafkaOffsetSample-collection).

## Arquivos de amostra kafka-config.yml [#examples]

<CollapserGroup>
  <Collapser
    id="zookeeper"
    title="Descoberta do Zookeeper"
  >
    Esta configuração coleta métricas e inventário incluindo todos os tópicos descobrindo os corretores de dois hosts JMX diferentes:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          CLUSTER_NAME: testcluster1
          KAFKA_VERSION: "1.0.0"
          AUTODISCOVER_STRATEGY: zookeeper
          ZOOKEEPER_HOSTS: '[{"host": "localhost", "port": 2181}, {"host": "localhost2", "port": 2181}]'
          ZOOKEEPER_PATH: "/kafka-root"
          DEFAULT_JMX_USER: username
          DEFAULT_JMX_PASSWORD: password
          TOPIC_MODE: all
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="zookeeper-jmx-ssl"
    title="Descoberta do Zookeeper com conexão JMX baseada em SSL"
  >
    Esta configuração coleta métricas e inventário descobrindo os brokers de um host JMX com SSL:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          CLUSTER_NAME: testcluster1
          KAFKA_VERSION: "1.0.0"
          AUTODISCOVER_STRATEGY: zookeeper
          ZOOKEEPER_HOSTS: '[{"host": "localhost", "port": 2181}]'
          ZOOKEEPER_PATH: "/kafka-root"
          DEFAULT_JMX_USER: username
          DEFAULT_JMX_PASSWORD: password

          KEY_STORE: "/path/to/your/keystore"
          KEY_STORE_PASSWORD: keystore_password
          TRUST_STORE: "/path/to/your/truststore"
          TRUST_STORE_PASSWORD: truststore_password

          TIMEOUT: 10000  #The timeout for individual JMX queries in milliseconds.
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="bootstrap"
    title="Descoberta de Bootstrap"
  >
    Esta configuração coleta métricas e inventário incluindo todos os tópicos descobrindo os corretores de um corretor de inicialização:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          CLUSTER_NAME: testcluster1
          AUTODISCOVER_STRATEGY: bootstrap
          BOOTSTRAP_BROKER_HOST: localhost
          BOOTSTRAP_BROKER_KAFKA_PORT: 9092
          BOOTSTRAP_BROKER_KAFKA_PROTOCOL: PLAINTEXT
          BOOTSTRAP_BROKER_JMX_PORT: 9999  # This same port will be used to connect to all discover broker JMX
          BOOTSTRAP_BROKER_JMX_USER: admin
          BOOTSTRAP_BROKER_JMX_PASSWORD: password

          LOCAL_ONLY_COLLECTION: false

          COLLECT_BROKER_TOPIC_DATA: true
          TOPIC_MODE: "all"
          COLLECT_TOPIC_SIZE: false
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="bootstrap-tls"
    title="Bootstrap descoberta TLS"
  >
    Esta configuração coleta apenas métricas descobrindo os brokers de um broker inicial ouvindo com protocolo TLS:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          METRICS: true
          CLUSTER_NAME: testcluster1
          AUTODISCOVER_STRATEGY: bootstrap
          BOOTSTRAP_BROKER_HOST: localhost
          BOOTSTRAP_BROKER_KAFKA_PORT: 9092
          BOOTSTRAP_BROKER_KAFKA_PROTOCOL: SSL
          BOOTSTRAP_BROKER_JMX_PORT: 9999
          BOOTSTRAP_BROKER_JMX_USER: admin
          BOOTSTRAP_BROKER_JMX_PASSWORD: password

          # Kerberos authentication arguments
          TLS_CA_FILE: "/path/to/CA.pem"
          TLS_CERT_FILE: "/path/to/cert.pem"
          TLS_KEY_FILE: "/path/to/key.pem"
          TLS_INSECURE_SKIP_VERIFY: false
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="boostrap-kerberos"
    title="Bootstrap descoberta kerberos auth"
  >
    Esta configuração coleta apenas métricas descobrindo os brokers de um broker de inicialização em um cluster Kerberos Auth:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          METRICS: true
          CLUSTER_NAME: testcluster1
          AUTODISCOVER_STRATEGY: bootstrap
          BOOTSTRAP_BROKER_HOST: localhost
          BOOTSTRAP_BROKER_KAFKA_PORT: 9092
          BOOTSTRAP_BROKER_KAFKA_PROTOCOL: PLAINTEXT # Currently support PLAINTEXT and SSL
          BOOTSTRAP_BROKER_JMX_PORT: 9999
          BOOTSTRAP_BROKER_JMX_USER: admin
          BOOTSTRAP_BROKER_JMX_PASSWORD: password

          # Kerberos authentication arguments
          SASL_MECHANISM: GSSAPI
          SASL_GSSAPI_REALM: SOMECORP.COM
          SASL_GSSAPI_SERVICE_NAME: Kafka
          SASL_GSSAPI_USERNAME: kafka
          SASL_GSSAPI_KEY_TAB_PATH: /etc/newrelic-infra/kafka.keytab
          SASL_GSSAPI_KERBEROS_CONFIG_PATH: /etc/krb5.conf
          SASL_GSSAPI_DISABLE_FAST_NEGOTIATION: false
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="zookeeper-topic-bucket"
    title="Balde de tópicos de divulgação do Zookeeper"
  >
    Esta configuração coleta a coleção de tópicos de divisão métrica entre 3 instâncias diferentes:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          METRICS: true
          CLUSTER_NAME: testcluster1
          KAFKA_VERSION: "1.0.0"
          AUTODISCOVER_STRATEGY: zookeeper
          ZOOKEEPER_HOSTS: '[{"host": "host1", "port": 2181}]'
          ZOOKEEPER_AUTH_SECRET: "username:password"
          ZOOKEEPER_PATH: "/kafka-root"
          DEFAULT_JMX_USER: username
          DEFAULT_JMX_PASSWORD: password
          TOPIC_MODE: regex
          TOPIC_REGEX: 'topic\d+'
          TOPIC_BUCKET: '1/3'
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
      - name: nri-kafka
        env:
          METRICS: true
          CLUSTER_NAME: testcluster2
          KAFKA_VERSION: "1.0.0"
          AUTODISCOVER_STRATEGY: zookeeper
          ZOOKEEPER_HOSTS: '[{"host": "host2", "port": 2181}]'
          ZOOKEEPER_AUTH_SECRET: "username:password"
          ZOOKEEPER_PATH: "/kafka-root"
          DEFAULT_JMX_USER: username
          DEFAULT_JMX_PASSWORD: password
          TOPIC_MODE: regex
          TOPIC_REGEX: 'topic\d+'
          TOPIC_BUCKET: '2/3'
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
      - name: nri-kafka
        env:
          METRICS: true
          CLUSTER_NAME: testcluster3
          KAFKA_VERSION: "1.0.0"
          AUTODISCOVER_STRATEGY: zookeeper
          ZOOKEEPER_HOSTS: '[{"host": "host3", "port": 2181}]'
          ZOOKEEPER_AUTH_SECRET: "username:password"
          ZOOKEEPER_PATH: "/kafka-root"
          DEFAULT_JMX_USER: username
          DEFAULT_JMX_PASSWORD: password
          TOPIC_MODE: regex
          TOPIC_REGEX: 'topic\d+'
          TOPIC_BUCKET: '3/3'
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="java-consumer-producer"
    title="Consumidor e produtor Java"
  >
    Isto dá um exemplo de coleta de métrica JMX de consumidores e produtores Java:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          METRICS: "true"
          CLUSTER_NAME: "testcluster3"
          PRODUCERS: '[{"host": "localhost", "port": 24, "username": "me", "password": "secret"}]'
          CONSUMERS: '[{"host": "localhost", "port": 24, "username": "me", "password": "secret"}]'
          DEFAULT_JMX_HOST: "localhost"
          DEFAULT_JMX_PORT: "9999"
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="consumer-offset"
    title="Compensação do consumidor"
  >
    Esta configuração coleta métricas de compensação de consumidor e inventário para o cluster:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          CONSUMER_OFFSET: true
          CLUSTER_NAME: testcluster3
          AUTODISCOVER_STRATEGY: bootstrap
          BOOTSTRAP_BROKER_HOST: localhost
          BOOTSTRAP_BROKER_KAFKA_PORT: 9092
          BOOTSTRAP_BROKER_KAFKA_PROTOCOL: PLAINTEXT
          # A regex pattern that matches the consumer groups to collect metrics from
          CONSUMER_GROUP_REGEX: '.*'
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>
</CollapserGroup>

## Opções de configuração para a integração [#config-options]

Para obter mais informações sobre como encontrar e usar seus dados, consulte [as definições de configuração do Kafka](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config).

## Encontre e use dados [#find-and-use]

Os dados deste serviço são reportados para um [dashboard de integração](/docs/integrations/new-relic-integrations/getting-started/infrastructure-integration-dashboards-charts).

Os dados Kafka são anexados aos seguintes [tipos de eventos](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic):

* [`KafkaBrokerSample`](#broker-sample)
* [`KafkaTopicSample`](#topic-sample)
* [`KafkaProducerSample`](#producer-sample)
* [`KafkaConsumerSample`](#consumer-sample)
* [`KafkaOffsetSample`](#offset-sample)

Você pode [consultar esses dados](/docs/using-new-relic/data/understand-data/query-new-relic-data) para fins de resolução de problemas ou para criação de gráficos e dashboards.

Para saber mais sobre como encontrar e usar seus dados, consulte como [entender os dados de integração](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Métrica coletada pela integração [#metrics]

A integração Kafka recolhe a seguinte métrica. Cada nome de métrica é prefixado com um indicador de categoria e um ponto, como `broker.` ou `consumer.`.

<CollapserGroup>
  <Collapser
    id="broker-sample"
    title="Evento KafkaBrokerSample"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
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
            `broker.bytesWrittenToTopicPerSecond`
          </td>

          <td>
            Número de bytes gravados em um tópico pelo corretor por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `broker.IOInPerSecond`
          </td>

          <td>
            E/S de rede em corretores no cluster em bytes por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `broker.IOOutPerSecond`
          </td>

          <td>
            E/S de rede fora dos agentes no cluster em bytes por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `broker.logFlushPerSecond`
          </td>

          <td>
            Taxa de liberação de log.
          </td>
        </tr>

        <tr>
          <td>
            `broker.messagesInPerSecond`
          </td>

          <td>
            Mensagens recebidas por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `follower.requestExpirationPerSecond`
          </td>

          <td>
            Taxa de expiração de solicitação de seguidores em despejos por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `net.bytesRejectedPerSecond`
          </td>

          <td>
            Bytes rejeitados por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `replication.isrExpandsPerSecond`
          </td>

          <td>
            Taxa de réplicas ingressando no pool ISR.
          </td>
        </tr>

        <tr>
          <td>
            `replication.isrShrinksPerSecond`
          </td>

          <td>
            Taxa de réplicas que saem do pool ISR.
          </td>
        </tr>

        <tr>
          <td>
            `replication.leaderElectionPerSecond`
          </td>

          <td>
            Taxa de eleição de líder.
          </td>
        </tr>

        <tr>
          <td>
            `replication.uncleanLeaderElectionPerSecond`
          </td>

          <td>
            Taxa de eleição de líderes impuros.
          </td>
        </tr>

        <tr>
          <td>
            `replication.unreplicatedPartitions`
          </td>

          <td>
            Número de partições não replicadas.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeFetch`
          </td>

          <td>
            Tempo médio por solicitação de busca em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeMetadata`
          </td>

          <td>
            Tempo médio para solicitação de metadados em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeMetadata99Percentile`
          </td>

          <td>
            Tempo para solicitações de metadados para o percentil 99 em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeOffset`
          </td>

          <td>
            Tempo médio para uma solicitação de deslocamento em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeOffset99Percentile`
          </td>

          <td>
            Tempo para solicitações de deslocamento para o percentil 99 em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeProduceRequest`
          </td>

          <td>
            Tempo médio para uma solicitação de produção em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeUpdateMetadata`
          </td>

          <td>
            Tempo médio para uma solicitação atualizar metadados em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeUpdateMetadata99Percentile`
          </td>

          <td>
            Tempo para solicitações de atualização de metadados para o percentil 99 em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.clientFetchesFailedPerSecond`
          </td>

          <td>
            Falhas na solicitação de busca do cliente por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `request.fetchTime99Percentile`
          </td>

          <td>
            Tempo para solicitações de busca do percentil 99 em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.handlerIdle`
          </td>

          <td>
            Fração média de tempo em que os threads do manipulador de solicitação ficam ociosos.
          </td>
        </tr>

        <tr>
          <td>
            `request.produceRequestsFailedPerSecond`
          </td>

          <td>
            Falha na produção de solicitações por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `request.produceTime99Percentile`
          </td>

          <td>
            Hora de produzir solicitações para o percentil 99.
          </td>
        </tr>

        <tr>
          <td>
            `topic.diskSize`
          </td>

          <td>
            Tamanho do disco do tópico por broker e por tópico. Presente apenas se `COLLECT_TOPIC_SIZE` estiver ativado.
          </td>
        </tr>

        <tr>
          <td>
            `topic.offset`
          </td>

          <td>
            Deslocamento de tópico por corretor e por tópico. Presente apenas se `COLLECT_TOPIC_OFFSET` estiver ativado.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="consumer-sample"
    title="Evento KafkaConsumerSample"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
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
            `consumer.avgFetchSizeInBytes`
          </td>

          <td>
            Número médio de bytes buscados por solicitação para um tópico específico.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.avgRecordConsumedPerTopic`
          </td>

          <td>
            Número médio de registros em cada solicitação para um tópico específico.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.avgRecordConsumedPerTopicPerSecond`
          </td>

          <td>
            Número médio de registros consumidos por segundo para um tópico específico em registros por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.bytesInPerSecond`
          </td>

          <td>
            Bytes do consumidor por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.fetchPerSecond`
          </td>

          <td>
            A taxa mínima na qual o consumidor envia solicitações de busca para solicitações de interrupção por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.maxFetchSizeInBytes`
          </td>

          <td>
            Número máximo de bytes obtidos por solicitação para um tópico específico.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.maxLag`
          </td>

          <td>
            Atraso máximo do consumidor.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.messageConsumptionPerSecond`
          </td>

          <td>
            Taxa de consumo de mensagens do consumidor em mensagens por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.offsetKafkaCommitsPerSecond`
          </td>

          <td>
            Taxa de commits de compensação para Kafka em commits por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.offsetZooKeeperCommitsPerSecond`
          </td>

          <td>
            Taxa de compensação confirmada no ZooKeeper em gravações por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.requestsExpiredPerSecond`
          </td>

          <td>
            Taxa de expiração atrasada da solicitação do consumidor em despejos por segundo.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="producer-sample"
    title="Evento KafkaProducerSample"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
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
            `producer.ageMetadataUsedInMilliseconds`
          </td>

          <td>
            Idade em segundos dos metadados do produtor atual em uso.
          </td>
        </tr>

        <tr>
          <td>
            `producer.availableBufferInBytes`
          </td>

          <td>
            Quantidade total de memória buffer que não está sendo usada em bytes.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgBytesSentPerRequestInBytes`
          </td>

          <td>
            Número médio de bytes enviados por partição por solicitação.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgCompressionRateRecordBatches`
          </td>

          <td>
            Taxa média de compactação de lotes de registros.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgRecordAccumulatorsInMilliseconds`
          </td>

          <td>
            Tempo médio em lotes de registros ms gastos no acumulador de registros.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgRecordSizeInBytes`
          </td>

          <td>
            Tamanho médio do registro em bytes.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgRecordsSentPerSecond`
          </td>

          <td>
            Número médio de registros enviados por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgRecordsSentPerTopicPerSecond`
          </td>

          <td>
            Número médio de registros enviados por segundo para um tópico.
          </td>
        </tr>

        <tr>
          <td>
            `producer.AvgRequestLatencyPerSecond`
          </td>

          <td>
            Latência média de solicitação do produtor.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgThrottleTime`
          </td>

          <td>
            Tempo médio que uma solicitação foi limitada por um corretor em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `producer.bufferMemoryAvailableInBytes`
          </td>

          <td>
            Quantidade máxima de memória buffer que o cliente pode usar em bytes.
          </td>
        </tr>

        <tr>
          <td>
            `producer.bufferpoolWaitTime`
          </td>

          <td>
            Fração de tempo que um anexador aguarda pela alocação de espaço.
          </td>
        </tr>

        <tr>
          <td>
            `producer.bytesOutPerSecond`
          </td>

          <td>
            Saída de bytes do produtor por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `producer.compressionRateRecordBatches`
          </td>

          <td>
            Taxa média de compactação de lotes de registros para um tópico.
          </td>
        </tr>

        <tr>
          <td>
            `producer.iOWaitTime`
          </td>

          <td>
            Tempo de espera de I/O do produtor em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `producer.maxBytesSentPerRequestInBytes`
          </td>

          <td>
            Número máximo de bytes enviados por partição por solicitação.
          </td>
        </tr>

        <tr>
          <td>
            `producer.maxRecordSizeInBytes`
          </td>

          <td>
            Tamanho máximo do registro em bytes.
          </td>
        </tr>

        <tr>
          <td>
            `producer.maxRequestLatencyInMilliseconds`
          </td>

          <td>
            Latência máxima da solicitação em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `producer.maxThrottleTime`
          </td>

          <td>
            Tempo máximo em que uma solicitação foi acelerada por um corretor em milissegundos.
          </td>
        </tr>

        <tr>
          <td>
            `producer.messageRatePerSecond`
          </td>

          <td>
            Mensagens do produtor por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `producer.responsePerSecond`
          </td>

          <td>
            Número de respostas do produtor por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `producer.requestPerSecond`
          </td>

          <td>
            Número de solicitações do produtor por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `producer.requestsWaitingResponse`
          </td>

          <td>
            Número atual de solicitações em andamento aguardando resposta.
          </td>
        </tr>

        <tr>
          <td>
            `producer.threadsWaiting`
          </td>

          <td>
            Número de threads de usuário bloqueados aguardando a memória buffer enfileirar seus registros.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="topic-sample"
    title="Evento KafkaTopicSample"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
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
            `topic.partitionsWithNonPreferredLeader`
          </td>

          <td>
            Número de partições por tópico que não estão sendo lideradas pela réplica preferencial.
          </td>
        </tr>

        <tr>
          <td>
            `topic.respondMetaData`
          </td>

          <td>
            Número de tópicos que respondem a solicitações de metadados.
          </td>
        </tr>

        <tr>
          <td>
            `topic.retentionSizeOrTime`
          </td>

          <td>
            Se uma partição é mantida por tamanho ou por tamanho e tempo. Um valor de 0 = tempo e um valor de 1 = tamanho e tempo.
          </td>
        </tr>

        <tr>
          <td>
            `topic.underReplicatedPartitions`
          </td>

          <td>
            Número de partições por tópico que estão sub-replicadas.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="offset-sample"
    title="Evento KafkaOffsetSample"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
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
            `consumer.offset`
          </td>

          <td>
            O último deslocamento consumido em uma partição pelo grupo de consumidores.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.lag`
          </td>

          <td>
            A diferença entre o limite máximo de um corretor e a compensação do consumidor (`consumer.hwm` - `consumer.offset`).
          </td>
        </tr>

        <tr>
          <td>
            `consumer.hwm`
          </td>

          <td>
            O deslocamento da última mensagem gravada em uma partição (marca d'água alta).
          </td>
        </tr>

        <tr>
          <td>
            `consumer.totalLag`
          </td>

          <td>
            A soma dos atrasos nas partições consumidas por um consumidor.
          </td>
        </tr>

        <tr>
          <td>
            `consumerGroup.totalLag`
          </td>

          <td>
            A soma dos atrasos em todas as partições consumidas por um `consumerGroup`.
          </td>
        </tr>

        <tr>
          <td>
            `consumerGroup.maxLag`
          </td>

          <td>
            O atraso máximo em todas as partições consumidas por um `consumerGroup`.
          </td>
        </tr>

        <tr>
          <td>
            `consumerGroup.activeConsumers`
          </td>

          <td>
            O número de consumidores ativos neste `consumerGroup`.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
