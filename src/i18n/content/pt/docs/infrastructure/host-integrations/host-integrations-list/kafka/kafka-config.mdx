---
title: Definições de configuração de integração do Kafka
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
  - Advanced configuration
metaDescription: Advanced configuration New Relic's Kafka integration.
freshnessValidatedDate: never
translationType: machine
---

Esta integração é um software de código aberto. Isso significa que você pode [navegar pelo código-fonte](https://github.com/newrelic/nri-kafka) e enviar melhorias ou criar seu próprio fork e construí-lo.

## Etiquetas e atributo personalizado [#labels]

Variáveis de ambiente podem ser usadas para controlar definições de configuração, como <InlinePopover type="licenseKey"/>e, em seguida, são passadas para o agente de infraestrutura. Para obter instruções sobre como usar esse recurso, consulte [Configurar o agente de infraestrutura](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#passthrough).

Você pode decorar ainda mais sua métrica usando etiquetas. Os rótulos permitem que você adicione pares de valores principais atributo à sua métrica que você pode usar para consultar, filtrar ou agrupar sua métrica.<br/> Nosso arquivo de configuração de amostra padrão inclui exemplos de rótulos, mas, como não são obrigatórios, você pode remover, modificar ou adicionar novos de sua escolha.

```yaml
  labels:
    env: production
    role: kafka
```

Para obter mais informações sobre a estrutura geral da configuração de integração no host, consulte a [configuração](/docs/integrations/integrations-sdk/file-specifications/host-integration-configuration-overview).

## Dados de inventário [#inventory]

A integração Kafka captura o broker não padrão e o parâmetro de configuração de tópico e coleta os esquemas de partição de tópico conforme relatado pelo ZooKeeper. Os dados estão disponíveis na [página da interface do Inventário](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-inventory-page-search-your-entire-infrastructure) na origem `config/kafka` .

## Configurar a coleção KafkaBrokerSample e KafkaTopicSample [#broker-collection]

A integração Kafka coleta informações métricas e de inventário. Verifique a coluna <DNT>**Applies To**</DNT> abaixo para ver as configurações disponíveis para cada coleção:

' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **CLUSTER_NAME**
        </DNT>
      </td>

      <td>
        Nome definido pelo usuário para identificar exclusivamente o cluster que está sendo monitorado. <DNT>**Required**</DNT>.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KAFKA_VERSION**
        </DNT>
      </td>

      <td>
        A versão do corretor Kafka ao qual você está se conectando, usada para definir versões ideais da API. Deve corresponder ou ser inferior à versão do corretor.

        Versões anteriores a 1.0.0 podem estar faltando algum recurso.

        Observe que se o nome binário do corretor for `kafka_2.12-2.7.0`, a versão da API Kafka a ser usada será 2.7.0 e a 2.12 anterior será a versão da linguagem Scala.
      </td>

      <td>
        1.0.0
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **AUTODISCOVER_STRATEGY**
        </DNT>
      </td>

      <td>
        o método de descobrir corretores. As opções são `zookeeper` ou `bootstrap`.
      </td>

      <td>
        zookeeper
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **METRICS**
        </DNT>
      </td>

      <td>
        Defina como `true` para ativar a coleta somente de métricas.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>

    <tr>
      <td>
        <DNT>
          **INVENTORY**
        </DNT>
      </td>

      <td>
        Defina como `true` para ativar a coleta somente de inventário.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

## Argumentos de descoberta automática do Zookeeper [#zookeeper-discovery]

Eles são relevantes apenas quando a opção `autodiscover_strategy` está definida como `zookeeper`.

' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **ZOOKEEPER_HOSTS**
        </DNT>
      </td>

      <td>
        A lista de hosts Apache ZooKeeper (em formato JSON) que precisam ser conectados.

        <DNT>
          **If `CONSUMER_OFFSET` is set to `false` `KafkaBrokerSamples` and `KafkaTopicSamples` will be collected.**
        </DNT>
      </td>

      <td>
        \[]
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_AUTH_SCHEME**
        </DNT>
      </td>

      <td>
        O esquema de autenticação do ZooKeeper usado para conexão. Atualmente, o único valor suportado é `digest`. Se omitido, nenhuma autenticação será usada.
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
        <DNT>
          **ZOOKEEPER_AUTH_SECRET**
        </DNT>
      </td>

      <td>
        O segredo de autenticação do ZooKeeper usado para conexão. Deve estar no formato `username:password`. Obrigatório apenas se `zookeeper_auth_scheme` for especificado.
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
        <DNT>
          **ZOOKEEPER_PATH**
        </DNT>
      </td>

      <td>
        O nó Zookeeper sob o qual reside a configuração do Kafka. O padrão é `/`.
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
        <DNT>
          **PREFERRED_LISTENER**
        </DNT>
      </td>

      <td>
        Use um ouvinte específico para se conectar a um corretor. Se não for definido, o primeiro ouvinte que passar em uma conexão de teste bem-sucedida será usado. Os valores suportados são `PLAINTEXT`, `SASL_PLAINTEXT`, `SSL` e `SASL_SSL`.

        **Observe que os protocolos `SASL_*` suportam apenas a autenticação Kerberos (GSSAPI).**
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>
  </tbody>
</table>

## Argumentos de descoberta do corretor Bootstrap [#bootstrap-discovery]

Eles só são relevantes quando a opção `autodiscover_strategy` está definida como`bootstrap`

' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **BOOTSTRAP_BROKER_HOST**
        </DNT>
      </td>

      <td>
        O host do corretor de inicialização.

        <DNT>
          **If `CONSUMER_OFFSET` is set to `false` `KafkaBrokerSamples` and `KafkaTopicSamples` will be collected.**
        </DNT>
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_KAFKA_PORT**
        </DNT>
      </td>

      <td>
        A porta Kafka para o corretor de inicialização.
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
        <DNT>
          **BOOTSTRAP_BROKER_KAFKA_PROTOCOL**
        </DNT>
      </td>

      <td>
        O protocolo a ser usado para conectar-se ao corretor de inicialização. Os valores suportados são `PLAINTEXT`, `SASL_PLAINTEXT`, `SSL` e `SASL_SSL`.

        **Observe que os protocolos `SASL_*` suportam apenas a autenticação Kerberos (GSSAPI).**
      </td>

      <td>
        PLAINTEXT
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_PORT**
        </DNT>
      </td>

      <td>
        A porta JMX a ser usada para coleta em cada intermediário no cluster.

        <DNT>
          **Note that all discovered brokers should have JMX active on this port**
        </DNT>
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_USER**
        </DNT>
      </td>

      <td>
        O usuário JMX a ser usado para coleta em cada intermediário no cluster.
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
        <DNT>
          **BOOTSTRAP_BROKER_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        A senha JMX a ser usada para coleta em cada intermediário no cluster.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>
  </tbody>
</table>

## Opções JMX [#jmx]

Estas opções se aplicam a todas as conexões JMX na instância.

' ' ' ' ' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **KEY_STORE**
        </DNT>
      </td>

      <td>
        O caminho do arquivo do keystore que contém o certificado SSL do cliente JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KEY_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        A senha para o armazenamento de chaves JMX SSL.
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
        <DNT>
          **TRUST_STORE**
        </DNT>
      </td>

      <td>
        O caminho do arquivo do keystore confiável que contém o certificado SSL do servidor JMX.
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
        <DNT>
          **TRUST_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        A senha do armazenamento confiável JMX.
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
        <DNT>
          **DEFAULT_JMX_USER**
        </DNT>
      </td>

      <td>
        O usuário padrão que está se conectando ao host JMX para coletar métricas. Se o campo nome de usuário for omitido para um host JMX, esse valor será usado.
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        A senha padrão para conectar-se ao host JMX. Se o campo de senha for omitido para um host JMX, esse valor será usado.
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TIMEOUT**
        </DNT>
      </td>

      <td>
        O tempo limite para consulta JMX individual em milissegundos.
      </td>

      <td>
        10.000
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>
  </tbody>
</table>

## Opções de conexão TLS do corretor [#broker-tls]

Você precisará dessas opções se o protocolo do corretor for `SSL` ou `SASL_SSL`.

' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **TLS_CA_FILE**
        </DNT>
      </td>

      <td>
        O arquivo de autoridade de certificação para ouvintes SSL e SASL_SSL, no formato PEM.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TLS_CERT_FILE**
        </DNT>
      </td>

      <td>
        O arquivo de certificado do cliente para ouvintes SSL e SASL_SSL, no formato PEM.
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
        <DNT>
          **TLS_KEY_FILE**
        </DNT>
      </td>

      <td>
        O arquivo de chave do cliente para listeners SSL e SASL_SSL, no formato PEM.
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
        <DNT>
          **TLS_INSECURE_SKIP_VERIFY**
        </DNT>
      </td>

      <td>
        Ignore a verificação da cadeia de certificados e do nome do host do servidor.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>
  </tbody>
</table>

## Opções de conexão do corretor SASL e Kerberos [#broker-sasl-kerberos]

Você precisará dessas opções se o protocolo do corretor for `SASL_PLAINTEXT` ou `SASL_SSL`.

' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **SASL_MECHANISM**
        </DNT>
      </td>

      <td>
        O tipo de autenticação SASL a ser usada. As opções suportadas são `SCRAM-SHA-512`, `SCRAM-SHA-256`, `PLAIN` e `GSSAPI`.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_USERNAME**
        </DNT>
      </td>

      <td>
        Nome de usuário SASL necessário com os mecanismos PLAIN e SCRAM.
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
        <DNT>
          **SASL_PASSWORD**
        </DNT>
      </td>

      <td>
        Senha SASL necessária com os mecanismos PLAIN e SCRAM.
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
        <DNT>
          **SASL_GSSAPI_REALM**
        </DNT>
      </td>

      <td>
        A região Kerberos é necessária com o mecanismo GSSAPI.
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
        <DNT>
          **SASL_GSSAPI_SERVICE_NAME**
        </DNT>
      </td>

      <td>
        Nome do serviço Kerberos necessário com o mecanismo GSSAPI.
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
        <DNT>
          **SASL_GSSAPI_USERNAME**
        </DNT>
      </td>

      <td>
        Nome de usuário Kerberos necessário com o mecanismo GSSAPI.
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
        <DNT>
          **SASL_GSSAPI_KEY_TAB_PATH**
        </DNT>
      </td>

      <td>
        Caminho da guia da chave Kerberos necessário com o mecanismo GSSAPI.
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
        <DNT>
          **SASL_GSSAPI_KERBEROS_CONFIG_PATH**
        </DNT>
      </td>

      <td>
        Caminho de configuração Kerberos necessário com o mecanismo GSSAPI.
      </td>

      <td>
        /etc/krb5.conf
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_DISABLE_FAST_NEGOTIATION**
        </DNT>
      </td>

      <td>
        Desative a negociação FAST.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>
  </tbody>
</table>

## Filtragem da coleção do corretor [#broker-filteri]

' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **LOCAL_ONLY_COLLECTION**
        </DNT>
      </td>

      <td>
        Colete apenas as métricas referentes ao broker de inicialização configurado. Usado apenas se `autodiscover_strategy` for `bootstrap`.

        <DNT>
          **Environments that use discovery (such as Kubernetes) must be set to true because othwerwise brokers will be discovered twice: By the integration, and by the discovery mechanism, leading to duplicate data.**
        </DNT>

        <DNT>
          **Note that activating this flag will skip KafkaTopicSample collection**
        </DNT>
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TOPIC_MODE**
        </DNT>
      </td>

      <td>
        Determina quantos tópicos coletamos. As opções são `all`, `none`, `list` ou `regex`.
      </td>

      <td>
        nenhum
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TOPIC_LIST**
        </DNT>
      </td>

      <td>
        Matriz JSON de nomes de tópicos a serem monitor. Somente terá efeito se `topic_mode` estiver definido como `list`.
      </td>

      <td>
        \[]
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TOPIC_REGEX**
        </DNT>
      </td>

      <td>
        Padrão Regex que corresponde aos nomes dos tópicos a serem monitor. Somente terá efeito se `topic_mode` estiver definido como `regex`.
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
        <DNT>
          **TOPIC_BUCKET**
        </DNT>
      </td>

      <td>
        Usado para dividir a coleção de tópicos em várias instâncias. Deve estar no formato `<bucket number>/<number of buckets>`.
      </td>

      <td>
        1/1
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **COLLECT_TOPIC_SIZE**
        </DNT>
      </td>

      <td>
        Colete a métrica Tamanho do tópico. As opções são `true` ou `false`, o padrão é `false`.

        <DNT>
          **This is a resource-intensive metric to collect, especially against many topics.**
        </DNT>
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **COLLECT_TOPIC_OFFSET**
        </DNT>
      </td>

      <td>
        Colete a métrica Deslocamento do tópico. As opções são `true` ou `false`, o padrão é `false`.

        <DNT>
          **This is a resource-intensive metric to collect, especially against many topics.**
        </DNT>
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>
  </tbody>
</table>

## Configurar a coleção KafkaConsumerSample e KafkaProducerSample [#KafkaConsumerSample-collection]

A integração Kafka coleta informações métricas(<strong>M</strong>) e de Inventário(<strong>I</strong>). Verifique a coluna <DNT>**Applies To**</DNT> abaixo para descobrir quais configurações podem ser usadas para cada coleção específica:

' ' ' ' ' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **CLUSTER_NAME**
        </DNT>
      </td>

      <td>
        Nome definido pelo usuário para identificar exclusivamente o cluster que está sendo monitorado. <DNT>**Required**</DNT>.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **PRODUCERS**
        </DNT>
      </td>

      <td>
        Produtores para coletar. Para cada produtor, `name`, `hostname`, `port`, `username` e `password` podem ser especificados no formato JSON. `name` é o nome do produtor conforme aparece em Kafka. Caso não seja definido, serão coletadas métricas de todos os produtores do host:port. `host`, `port`, `username` e `password` são as configurações JMX opcionais e usam o padrão se não forem especificados. Também é possível definir o valor `default` para deixar `name` indefinido e usar os valores padrão para `host`, `port`, `username` e `password`. Necessário para produzir KafkaProducerSample.

        <DNT>
          **Examples:**
        </DNT>

        `[{"host": "localhost", "port": 24, "username": "me", "password": "secret"}]`

        `[{"name": "myProducer", "host": "localhost", "port": 24, "username": "me", "password": "secret"}]`
      </td>

      <td>
        \[]
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONSUMERS**
        </DNT>
      </td>

      <td>
        Consumidor a cobrar. Para cada consumidor, `name`, `hostname`, `port`, `username` e `password` podem ser especificados no formato JSON. `name` é o nome do consumidor conforme aparece no Kafka. Caso não seja definido, serão coletadas as métricas de todos os consumidores no host:port. `host`, `port`, `username` e `password` são as configurações JMX opcionais e usam o padrão se não forem especificados. Também é possível definir o valor `default` para deixar `name` indefinido e usar os valores padrão para `host`, `port`, `username` e `password`. Necessário para produzir KafkaConsumerSample.

        <DNT>
          **Examples:**
        </DNT>

        `[{"host": "localhost", "port": 24, "username": "me", "password": "secret"}]`

        `[{"name": "myConsumer", "host": "localhost", "port": 24, "username": "me", "password": "secret"}]`
      </td>

      <td>
        \[]
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_HOST**
        </DNT>
      </td>

      <td>
        O host padrão para coletar a métrica JMX. Se o campo host for omitido de uma configuração de produtor ou consumidor, esse valor será usado.
      </td>

      <td>
        host local
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_PORT**
        </DNT>
      </td>

      <td>
        A porta padrão para coletar métricas JMX. Se o campo port for omitido de uma configuração de produtor ou consumidor, este valor será utilizado.
      </td>

      <td>
        9999
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_USER**
        </DNT>
      </td>

      <td>
        O usuário padrão que está se conectando ao host JMX para coletar métricas. Se o campo nome de usuário for omitido de uma configuração de produtor ou consumidor, esse valor será usado.
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        A senha padrão para conectar-se ao host JMX. Se o campo de senha for omitido de uma configuração de produtor ou consumidor, este valor será utilizado.
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **METRICS**
        </DNT>
      </td>

      <td>
        Defina como `true` para ativar a coleta somente de métricas.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>

    <tr>
      <td>
        <DNT>
          **INVENTORY**
        </DNT>
      </td>

      <td>
        Defina como `true` para ativar a coleta somente de inventário.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

#### Opções de SSL e tempo limite JMX

Estas opções se aplicam a todas as conexões JMX na instância.

' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **KEY_STORE**
        </DNT>
      </td>

      <td>
        O caminho do arquivo do keystore que contém o certificado SSL do cliente JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KEY_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        A senha para o armazenamento de chaves JMX SSL.
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
        <DNT>
          **TRUST_STORE**
        </DNT>
      </td>

      <td>
        O caminho do arquivo do keystore confiável que contém o certificado SSL do servidor JMX.
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
        <DNT>
          **TRUST_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        A senha do armazenamento confiável JMX.
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
        <DNT>
          **TIMEOUT**
        </DNT>
      </td>

      <td>
        O tempo limite para consulta JMX individual em milissegundos.
      </td>

      <td>
        10.000
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>
  </tbody>
</table>

## Configurar a coleção KafkaOffsetSample [#KafkaOffsetSample-collection]

A integração Kafka coleta informações métricas e de inventário. Verifique a coluna <DNT>**Applies To**</DNT> abaixo para descobrir quais configurações podem ser usadas para cada coleção específica:

' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **CLUSTER_NAME**
        </DNT>
      </td>

      <td>
        Nome definido pelo usuário para identificar exclusivamente o cluster que está sendo monitorado. <DNT>**Required**</DNT>.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KAFKA_VERSION**
        </DNT>
      </td>

      <td>
        A versão do corretor Kafka ao qual você está se conectando, usada para definir versões ideais da API. Deve corresponder ou ser inferior à versão do corretor.

        Versões anteriores a 1.0.0 podem estar faltando algum recurso.

        <DNT>**Note that if the broker binary name is kafka_2.12-2.7.0 the Kafka api version to be used is 2.7.0, the preceding 2.12 is the Scala language version**</DNT>.
      </td>

      <td>
        1.0.0
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **AUTODISCOVER_STRATEGY**
        </DNT>
      </td>

      <td>
        o método de descobrir corretores. As opções são `zookeeper` ou `bootstrap`.
      </td>

      <td>
        zookeeper
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONSUMER_OFFSET**
        </DNT>
      </td>

      <td>
        Preencha os dados de deslocamento do consumidor em KafkaOffsetSample se definido como verdadeiro.

        <DNT>
          **Note that this option will skip Broker/Consumer/Producer collection and only collect KafkaOffsetSample**
        </DNT>
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONSUMER_GROUP_REGEX**
        </DNT>
      </td>

      <td>
        padrão regex que corresponde aos grupos de consumidores para os quais coletar estatísticas de compensação. Isto limita-se à recolha de estatísticas para 300 grupos de consumidores.

        Nota: Esta opção deve ser definida quando o CONSUMER_OFFSET for verdadeiro.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **INACTIVE_CONSUMER_GROUP_OFFSET**
        </DNT>
      </td>

      <td>
        Coleta métricas de compensação de grupos de consumidores sem nenhum CONSUMER_OFFSET ativo, requer que o consumidor seja definido como verdadeiro.
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONSUMER_GROUP_OFFSET_BY_TOPIC**
        </DNT>
      </td>

      <td>
        Ativa uma agregação de métrica extra para consumerGroup por tópico. requer que o CONSUMER_OFFSET seja definido como verdadeiro.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **METRICS**
        </DNT>
      </td>

      <td>
        Defina como `true` para ativar a coleta somente de métricas.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>

    <tr>
      <td>
        <DNT>
          **INVENTORY**
        </DNT>
      </td>

      <td>
        Defina como `true` para ativar a coleta somente de inventário.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

## Argumentos de descoberta automática do Zookeeper [#zookeeper-autodiscovery]

Isso só é relevante quando a opção `autodiscover_strategy` está definida como `zookeeper`.

' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **ZOOKEEPER_HOSTS**
        </DNT>
      </td>

      <td>
        A lista de hosts Apache ZooKeeper (em formato JSON) que precisam ser conectados.

        <DNT>
          **If `CONSUMER_OFFSET` is set to `false` `KafkaBrokerSamples` and `KafkaTopicSamples` will be collected.**
        </DNT>
      </td>

      <td>
        \[]
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_AUTH_SCHEME**
        </DNT>
      </td>

      <td>
        O esquema de autenticação do ZooKeeper usado para conexão. Atualmente, o único valor suportado é `digest`. Se omitido, nenhuma autenticação será usada.
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
        <DNT>
          **ZOOKEEPER_AUTH_SECRET**
        </DNT>
      </td>

      <td>
        O segredo de autenticação do ZooKeeper usado para conexão. Deve estar no formato `username:password`. Obrigatório apenas se `zookeeper_auth_scheme` for especificado.
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
        <DNT>
          **ZOOKEEPER_PATH**
        </DNT>
      </td>

      <td>
        O nó Zookeeper sob o qual reside a configuração do Kafka. O padrão é `/`.
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
        <DNT>
          **PREFERRED_LISTENER**
        </DNT>
      </td>

      <td>
        Use um ouvinte específico para se conectar a um corretor. Se não for definido, o primeiro ouvinte que passar em uma conexão de teste bem-sucedida será usado. Os valores suportados são `PLAINTEXT`, `SASL_PLAINTEXT`, `SSL` e `SASL_SSL`.

        **Observe que os protocolos `SASL_*` suportam apenas a autenticação Kerberos (GSSAPI).**
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>
  </tbody>
</table>

## Argumentos de descoberta do corretor Bootstrap [#bootstrap-broker]

Isso só é relevante quando a opção `autodiscover_strategy` está definida como `bootstrap`.

' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **BOOTSTRAP_BROKER_HOST**
        </DNT>
      </td>

      <td>
        O host do corretor de inicialização.

        <DNT>
          **If `CONSUMER_OFFSET` is set to `false` `KafkaBrokerSamples` and `KafkaTopicSamples` will be collected.**
        </DNT>
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_KAFKA_PORT**
        </DNT>
      </td>

      <td>
        A porta Kafka para o corretor de inicialização.
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
        <DNT>
          **BOOTSTRAP_BROKER_KAFKA_PROTOCOL**
        </DNT>
      </td>

      <td>
        O protocolo a ser usado para conectar-se ao corretor de inicialização. Os valores suportados são `PLAINTEXT`, `SASL_PLAINTEXT`, `SSL` e `SASL_SSL`.

        **Observe que os protocolos `SASL_*` suportam apenas a autenticação Kerberos (GSSAPI).**
      </td>

      <td>
        PLAINTEXT
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_PORT**
        </DNT>
      </td>

      <td>
        A porta JMX a ser usada para coleta em cada intermediário no cluster.

        <DNT>
          **Note that all discovered brokers should have JMX active on this port**
        </DNT>
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_USER**
        </DNT>
      </td>

      <td>
        O usuário JMX a ser usado para coleta em cada intermediário no cluster.
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
        <DNT>
          **BOOTSTRAP_BROKER_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        A senha JMX a ser usada para coleta em cada intermediário no cluster.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>
  </tbody>
</table>

## Opções de SSL e tempo limite JMX [#jmx-ssl-timeout]

Elas se aplicam a todas as conexões JMX em uma instância.

' ' ' ' ' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
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
        <DNT>
          **KEY_STORE**
        </DNT>
      </td>

      <td>
        O caminho do arquivo do keystore que contém o certificado SSL do cliente JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KEY_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        A senha para o armazenamento de chaves JMX SSL.
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
        <DNT>
          **TRUST_STORE**
        </DNT>
      </td>

      <td>
        O caminho do arquivo do keystore confiável que contém o certificado SSL do servidor JMX.
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
        <DNT>
          **TRUST_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        A senha do armazenamento confiável JMX.
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
        <DNT>
          **DEFAULT_JMX_USER**
        </DNT>
      </td>

      <td>
        O usuário padrão que está se conectando ao host JMX para coletar métricas. Se o campo nome de usuário for omitido para um host JMX, esse valor será usado.
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        A senha padrão para conectar-se ao host JMX. Se o campo de senha for omitido para um host JMX, esse valor será usado.
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TIMEOUT**
        </DNT>
      </td>

      <td>
        O tempo limite para consulta JMX individual em milissegundos.
      </td>

      <td>
        10.000
      </td>

      <td style={{ 'text-align': 'center' }}>
        MI
      </td>
    </tr>
  </tbody>
</table>

## Resolução de problemas [#troubleshooting]

<CollapserGroup>
  <Collapser
    id="duplicate-info"
    title="Dados duplicados sendo relatados"
  >
    Para produtores e/ou consumidores de agente de monitoramento, e que tenham `Topic mode` configurado para `All`:, pode haver problema de dados duplicados sendo reportados. Para interromper os dados duplicados: certifique-se de que a [opção de configuração](#config) `Collect topic size` esteja definida como falsa.
  </Collapser>

  ' '

  <Collapser
    id="zookeeper-node-not-found"
    title="A integração está registrando erros 'zk: nó não encontrado'"
  >
    Certifique-se de que `zookeeper_path` esteja definido corretamente no [arquivo de configuração](#config).
  </Collapser>

  <Collapser
    id="jmx-connection-errors"
    title="Erros de conexão JMX"
  >
    A integração Kafka utiliza uma ferramenta auxiliar JMX chamada `nrjmx` para recuperar métrica JMX de corretores, consumidores e produtores. O JMX precisa ser habilitado e configurado em todos os brokers do cluster. Além disso, o firewall precisa ser ajustado para permitir conexões do host que executa a integração com os brokers pela porta JMX.

    Para verificar se o JMX está configurado corretamente, execute o comando a seguir para cada agente da máquina que executa a integração do Kafka. Substitua as variáveis `PORT`, `USERNAME` e `PASSWORD` pelas configurações JMX correspondentes para os corretores:

    ```shell
    echo "*:*" | nrjmx -hostname MY_HOSTNAME -port MY_PORT -v -username MY_USERNAME -password MY_PASSWORD
    ```

    O comando deve gerar a saída mostrando uma longa série de métricas sem erros.
  </Collapser>

  <Collapser
    id="kerberos-authentication"
    title="Falha na autenticação Kerberos"
  >
    A integração pode mostrar um erro como este:

    ```shell
    KRB Error: (6) KDC_ERR_C_PRINCIPAL_UNKNOWN Client not found in Kerberos database
    ```

    Verifique o keytab com o comando kinit. Substitua os campos destacados pelos seus valores:

    ```shell
    $ kinit -k -t KEY_TAB_PATH USERNAME
    ```

    Se a combinação nome de usuário/keytab estiver correta, o comando acima deverá terminar sem imprimir nenhum erro.

    Verifique o domínio usando o comando klist:

    ```shell
    $ klist |grep "Default principal:"
    ```

    Você deverá ver algo assim:

    ```shell
    Default principal: johndoe@a_realm_name
    ```

    Verifique se o nome do usuário e a região impressos correspondem aos parâmetros `sasl_gssapi_realm` e `sasl_gssapi_username` na configuração de integração.
  </Collapser>
</CollapserGroup>
