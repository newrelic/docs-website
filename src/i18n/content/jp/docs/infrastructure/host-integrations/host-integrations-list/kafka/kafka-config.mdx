---
title: Kafkaの統合構成設定
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
  - Advanced configuration
metaDescription: Advanced configuration New Relic's Kafka integration.
freshnessValidatedDate: never
translationType: machine
---

この統合はオープン ソース ソフトウェアです。つまり[、ソース コードを参照して](https://github.com/newrelic/nri-kafka)改善を送信したり、独自のフォークを作成してビルドしたりできます。

## ラベルとカスタム属性 [#labels]

環境変数は、 <InlinePopover type="licenseKey"/>などの構成設定を制御するために使用でき、その後、インフラストラクチャエージェントに渡されます。 この機能の使用方法については、 [「インフラストラクチャエージェントの構成」を](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#passthrough)参照してください。

また、ラベルを使ってメトリクスをさらに装飾することもできます。<br/> デフォルトのサンプル・コンフィグ・ファイルにはラベルの例が含まれていますが、必須ではないので、自分の好きなものを削除、変更、または新たに追加することができます。

```yaml
  labels:
    env: production
    role: kafka
```

オンホスト統合構成の一般的な構造については、 [構成](/docs/integrations/integrations-sdk/file-specifications/host-integration-configuration-overview) を参照してください。

## 在庫データ [#inventory]

Kafka統合は、デフォルト以外のブローカーとトピック構成パラメーターをキャプチャし、ZooKeeperによって報告されたトピックパーティションスキームを収集します。データは、 `config/kafka`ソースの下の[インベントリUIページ](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-inventory-page-search-your-entire-infrastructure)で入手できます。

## KafkaBrokerSampleおよびKafkaTopicSampleコレクションの設定 [#broker-collection]

Kafka インテグレーションはメトリックスとインベントリ情報の両方を収集します。 各コレクションで使用可能な設定を確認するには、以下の<DNT>**Applies To**</DNT>列を確認してください。

'' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        モニターするクラスタを一意に識別するためのユーザー定義の名前。 <DNT>**Required**</DNT> 。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KAFKA_VERSION**
        </DNT>
      </td>

      <td>
        接続先のKafkaブローカーのバージョンで、最適なAPIバージョンを設定するために使用されます。ブローカーのバージョンと一致するか、それ以下でなければなりません。

        1.0.0より古いバージョンでは、一部の機能が失われている可能性があります。

        ブローカーのバイナリ名が`kafka_2.12-2.7.0`の場合、使用される Kafka API バージョンは 2.7.0 であり、その前の 2.12 は Scala 言語バージョンであることに注意してください。
      </td>

      <td>
        1.0.0
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **AUTODISCOVER_STRATEGY**
        </DNT>
      </td>

      <td>
        ブローカーを発見する方法。オプションは`zookeeper`または`bootstrap`です。
      </td>

      <td>
        飼育係
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **METRICS**
        </DNT>
      </td>

      <td>
        メトリックのみの収集を有効にするには、 `true`に設定します。
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
        インベントリのみの収集を有効にするには、 `true`に設定します。
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

## Zookeeper の自動検出用引数 [#zookeeper-discovery]

これらは、 `autodiscover_strategy`オプションが`zookeeper`に設定されている場合にのみ関連します。

'' '' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        接続する必要のあるApache ZooKeeperホストの一覧 (JSON形式)

        <DNT>
          **If `CONSUMER_OFFSET` is set to `false` `KafkaBrokerSamples` and `KafkaTopicSamples` will be collected.**
        </DNT>
      </td>

      <td>
        \[]
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_AUTH_SCHEME**
        </DNT>
      </td>

      <td>
        接続に使用されるZooKeeper認証スキーム。現在、サポートされている値は`digest`のみです。省略した場合、認証は使用されません。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_AUTH_SECRET**
        </DNT>
      </td>

      <td>
        接続に使用されるZooKeeper認証シークレット。`username:password`の形式である必要があります。`zookeeper_auth_scheme`が指定されている場合にのみ必要です。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_PATH**
        </DNT>
      </td>

      <td>
        Kafka構成が存在するZookeeperノード。デフォルトは`/`です。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **PREFERRED_LISTENER**
        </DNT>
      </td>

      <td>
        特定のリスナーを使用してブローカーに接続します。 設定されていない場合は、テスト接続に成功した最初のリスナーが使用されます。 サポートされる値は`PLAINTEXT` 、 `SASL_PLAINTEXT` 、 `SSL` 、 `SASL_SSL`です。

        **`SASL_*`プロトコルはKerberos（GSSAPI）認証のみをサポートしていることに注意してください。**
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>
  </tbody>
</table>

## ブートストラップ・ブローカー発見用引数 [#bootstrap-discovery]

これらは、 `autodiscover_strategy`オプションがに設定されている場合にのみ関連します`bootstrap`

'' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        ブートストラップ・ブローカーのホストです。

        <DNT>
          **If `CONSUMER_OFFSET` is set to `false` `KafkaBrokerSamples` and `KafkaTopicSamples` will be collected.**
        </DNT>
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_KAFKA_PORT**
        </DNT>
      </td>

      <td>
        ブートストラップ・ブローカーのKafkaポートです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_KAFKA_PROTOCOL**
        </DNT>
      </td>

      <td>
        ブートストラップブローカーへの接続に使用するプロトコル。サポートされている値は、 `PLAINTEXT` 、 `SASL_PLAINTEXT` 、 `SSL` 、および`SASL_SSL`です。

        **`SASL_*`プロトコルはKerberos（GSSAPI）認証のみをサポートしていることに注意してください。**
      </td>

      <td>
        PLAINTEXT
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_PORT**
        </DNT>
      </td>

      <td>
        クラスター内の各ブローカの収集に使用するJMXポートです。

        <DNT>
          **Note that all discovered brokers should have JMX active on this port**
        </DNT>
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_USER**
        </DNT>
      </td>

      <td>
        クラスタ内の各ブローカの収集に使用するJMXユーザ。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        クラスター内の各ブローカの収集に使用するJMXパスワードです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>
  </tbody>
</table>

## JMXのオプション [#jmx]

これらのオプションは、インスタンス上のすべてのJMX接続に適用されます。

'' '' '' '' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        JMXクライアントのSSL証明書を含むキーストアのファイルパスです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KEY_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        JMXのSSLキーストアのパスワードです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TRUST_STORE**
        </DNT>
      </td>

      <td>
        JMXサーバーのSSL証明書を含むトラストキーストアのファイルパスです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TRUST_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        JMXトラストストアのパスワードです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_USER**
        </DNT>
      </td>

      <td>
        メトリクスを収集するために JMX ホストに接続しているデフォルトのユーザーです。JMX ホストで username フィールドが省略された場合は、この値が使用されます。
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        JMX ホストに接続するためのデフォルトのパスワードです。JMX ホストでパスワードフィールドが省略された場合は、この値が使用されます。
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TIMEOUT**
        </DNT>
      </td>

      <td>
        個々のJMXクエリのタイムアウト（単位：ミリ秒）。
      </td>

      <td>
        10000
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>
  </tbody>
</table>

## ブローカーTLS接続オプション [#broker-tls]

ブローカープロトコルが`SSL`または`SASL_SSL`の場合、これらのオプションが必要です。

'' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        SSLおよびSASL_SSLリスナー用の認証局ファイル（PEM形式）です。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TLS_CERT_FILE**
        </DNT>
      </td>

      <td>
        SSLおよびSASL_SSLリスナー用のクライアント証明書ファイル（PEM形式）です。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TLS_KEY_FILE**
        </DNT>
      </td>

      <td>
        SSLおよびSASL_SSLリスナー用のクライアントキーファイル（PEM形式）です。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TLS_INSECURE_SKIP_VERIFY**
        </DNT>
      </td>

      <td>
        サーバーの証明書チェーンとホスト名の検証をスキップします。
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>
  </tbody>
</table>

## ブローカーSASLおよびKerberos接続オプション [#broker-sasl-kerberos]

ブローカープロトコルが`SASL_PLAINTEXT`または`SASL_SSL`の場合、これらのオプションが必要です。

'' '' '' '' '' '' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        使用するSASL認証のタイプ。サポートされているオプションは、 `SCRAM-SHA-512` 、 `SCRAM-SHA-256` 、 `PLAIN` 、および`GSSAPI`です。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_USERNAME**
        </DNT>
      </td>

      <td>
        PLAINおよびSCRAMメカニズムで必要なSASLユーザー名。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_PASSWORD**
        </DNT>
      </td>

      <td>
        PLAINおよびSCRAMメカニズムで必要なSASLパスワード。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_REALM**
        </DNT>
      </td>

      <td>
        GSSAPI機構で必要なKerberosレルム。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_SERVICE_NAME**
        </DNT>
      </td>

      <td>
        GSSAPI機構で必要なKerberosサービス名です。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_USERNAME**
        </DNT>
      </td>

      <td>
        GSSAPI機構で必要なKerberosユーザー名。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_KEY_TAB_PATH**
        </DNT>
      </td>

      <td>
        GSSAPI機構で必要なKerberos key tabのパス。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_KERBEROS_CONFIG_PATH**
        </DNT>
      </td>

      <td>
        GSSAPI機構で必要なKerberosのコンフィグパスです。
      </td>

      <td>
        /etc/krb5.conf
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_DISABLE_FAST_NEGOTIATION**
        </DNT>
      </td>

      <td>
        FASTネゴシエーションを無効にします。
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>
  </tbody>
</table>

## ブローカーコレクション フィルタリング [#broker-filteri]

'' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        構成されたブートストラップブローカーに関連するメトリックのみを収集します。`autodiscover_strategy`が`bootstrap`の場合にのみ使用されます。

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
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TOPIC_MODE**
        </DNT>
      </td>

      <td>
        収集するトピックの数を決定します。オプションは、 `all` 、 `none` 、 `list` 、または`regex`です。
      </td>

      <td>
        なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TOPIC_LIST**
        </DNT>
      </td>

      <td>
        監視するトピック名のJSON配列。`topic_mode`が`list`に設定されている場合にのみ有効です。
      </td>

      <td>
        \[]
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TOPIC_REGEX**
        </DNT>
      </td>

      <td>
        監視するトピック名に一致する正規表現パターン。`topic_mode`が`regex`に設定されている場合にのみ有効です。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TOPIC_BUCKET**
        </DNT>
      </td>

      <td>
        トピックコレクションを複数のインスタンスに分割するために使用されます。`<bucket number>/<number of buckets>`の形式である必要があります。
      </td>

      <td>
        1/1
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **COLLECT_TOPIC_SIZE**
        </DNT>
      </td>

      <td>
        メトリックトピックサイズを収集します。オプションは`true`または`false`で、デフォルトは`false`です。

        <DNT>
          **This is a resource-intensive metric to collect, especially against many topics.**
        </DNT>
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **COLLECT_TOPIC_OFFSET**
        </DNT>
      </td>

      <td>
        メトリックトピックオフセットを収集します。オプションは`true`または`false`で、デフォルトは`false`です。

        <DNT>
          **This is a resource-intensive metric to collect, especially against many topics.**
        </DNT>
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>
  </tbody>
</table>

## KafkaConsumerSampleおよびKafkaProducerSampleコレクションの設定 [#KafkaConsumerSample-collection]

Kafka インテグレーションは、メトリクス ( <strong>M</strong> ) 情報とインベントリ ( <strong>I</strong> ) 情報の両方を収集します。 それぞれのコレクションに使用できる設定を確認するには、以下の<DNT>**Applies To**</DNT>列を確認してください。

'' '' '' '' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        モニターするクラスタを一意に識別するためのユーザー定義の名前。 <DNT>**Required**</DNT> 。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **PRODUCERS**
        </DNT>
      </td>

      <td>
        収集するプロデューサー。プロデューサーごとに、 `name` 、 `hostname` 、 `port` 、 `username` 、および`password`をJSON形式で指定できます。`name`は、Kafkaに表示されるプロデューサーの名前です。設定されていない場合、host：port内のすべてのプロデューサーからのメトリックが収集されます。`host` 、 `port` 、 `username` 、および`password`はオプションのJMX設定であり、指定されていない場合はデフォルトを使用します。値`default`を設定して`name`を未定義にし、 `host` 、 `port` 、 `username` 、および`password`のデフォルト値を使用することもできます。KafkaProducerSampleを作成するために必要です。

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
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONSUMERS**
        </DNT>
      </td>

      <td>
        収集する消費者。コンシューマーごとに、 `name` 、 `hostname` 、 `port` 、 `username` 、および`password`をJSON形式で指定できます。`name`は、Kafkaに表示される消費者の名前です。設定されていない場合、host：port内のすべてのコンシューマーからのメトリックが収集されます。`host` 、 `port` 、 `username` 、および`password`はオプションのJMX設定であり、指定されていない場合はデフォルトを使用します。値`default`を設定して`name`を未定義にし、 `host` 、 `port` 、 `username` 、および`password`のデフォルト値を使用することもできます。KafkaConsumerSampleを作成するために必要です。

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
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_HOST**
        </DNT>
      </td>

      <td>
        JMX メトリクスを収集するためのデフォルトのホストです。プロデューサまたはコンシューマの構成でホストフィールドが省略された場合、この値が使用されます。
      </td>

      <td>
        ローカルホスト
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_PORT**
        </DNT>
      </td>

      <td>
        JMX メトリクスを収集するためのデフォルトのポートです。プロデューサまたはコンシューマの設定でポートフィールドが省略された場合、この値が使用されます。
      </td>

      <td>
        9999
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_USER**
        </DNT>
      </td>

      <td>
        メトリクスを収集するために JMX ホストに接続しているデフォルトのユーザー。プロデューサまたはコンシューマの構成で username フィールドが省略された場合は、この値が使用されます。
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        JMX ホストに接続するためのデフォルトのパスワードです。プロデューサまたはコンシューマの設定でパスワードフィールドが省略された場合、この値が使用されます。
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **METRICS**
        </DNT>
      </td>

      <td>
        メトリックのみの収集を有効にするには、 `true`に設定します。
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
        インベントリのみの収集を有効にするには、 `true`に設定します。
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

#### JMXのSSLとタイムアウトのオプション

これらのオプションは、インスタンス上のすべてのJMX接続に適用されます。

'' '' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        JMXクライアントのSSL証明書を含むキーストアのファイルパスです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KEY_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        JMXのSSLキーストアのパスワードです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TRUST_STORE**
        </DNT>
      </td>

      <td>
        JMXサーバーのSSL証明書を含むトラストキーストアのファイルパスです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TRUST_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        JMXトラストストアのパスワードです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TIMEOUT**
        </DNT>
      </td>

      <td>
        個々のJMXクエリのタイムアウト（単位：ミリ秒）。
      </td>

      <td>
        10000
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>
  </tbody>
</table>

## KafkaOffsetSampleコレクションの設定 [#KafkaOffsetSample-collection]

Kafka インテグレーションはメトリックスとインベントリ情報の両方を収集します。 それぞれのコレクションに使用できる設定を確認するには、以下の<DNT>**Applies To**</DNT>列を確認してください。

'' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        モニターするクラスタを一意に識別するためのユーザー定義の名前。 <DNT>**Required**</DNT> 。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KAFKA_VERSION**
        </DNT>
      </td>

      <td>
        接続先のKafkaブローカーのバージョンで、最適なAPIバージョンを設定するために使用されます。ブローカーのバージョンと一致するか、それ以下でなければなりません。

        1.0.0より古いバージョンでは、一部の機能が失われている可能性があります。

        <DNT>**Note that if the broker binary name is kafka_2.12-2.7.0 the Kafka api version to be used is 2.7.0, the preceding 2.12 is the Scala language version**</DNT>。
      </td>

      <td>
        1.0.0
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **AUTODISCOVER_STRATEGY**
        </DNT>
      </td>

      <td>
        ブローカーを発見する方法。オプションは`zookeeper`または`bootstrap`です。
      </td>

      <td>
        飼育係
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONSUMER_OFFSET**
        </DNT>
      </td>

      <td>
        trueに設定すると、KafkaOffsetSampleにコンシューマーのオフセットデータを投入します。

        <DNT>
          **Note that this option will skip Broker/Consumer/Producer collection and only collect KafkaOffsetSample**
        </DNT>
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONSUMER_GROUP_REGEX**
        </DNT>
      </td>

      <td>
        オフセット統計を収集する消費者グループにマッチする正規表現パターンです。これは、300個の消費者グループの統計を収集する場合に限られます。

        注：このオプションは、CONSUMER_OFFSETがtrueの場合に設定する必要があります。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **INACTIVE_CONSUMER_GROUP_OFFSET**
        </DNT>
      </td>

      <td>
        アクティブなコンシューマーがないコンシューマーグループからオフセットメトリックを収集します。CONSUMER_OFFSETをtrueに設定する必要があります。
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONSUMER_GROUP_OFFSET_BY_TOPIC**
        </DNT>
      </td>

      <td>
        トピックごとにconsumerGroupの追加のメトリック集計をアクティブにします。CONSUMER_OFFSETをtrueに設定する必要があります。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **METRICS**
        </DNT>
      </td>

      <td>
        メトリックのみの収集を有効にするには、 `true`に設定します。
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
        インベントリのみの収集を有効にするには、 `true`に設定します。
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

## Zookeeper の自動検出用引数 [#zookeeper-autodiscovery]

これは、 `autodiscover_strategy`オプションが`zookeeper`に設定されている場合にのみ関係します。

'' '' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        接続する必要のあるApache ZooKeeperホストの一覧 (JSON形式)

        <DNT>
          **If `CONSUMER_OFFSET` is set to `false` `KafkaBrokerSamples` and `KafkaTopicSamples` will be collected.**
        </DNT>
      </td>

      <td>
        \[]
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_AUTH_SCHEME**
        </DNT>
      </td>

      <td>
        接続に使用されるZooKeeper認証スキーム。現在、サポートされている値は`digest`のみです。省略した場合、認証は使用されません。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_AUTH_SECRET**
        </DNT>
      </td>

      <td>
        接続に使用されるZooKeeper認証シークレット。`username:password`の形式である必要があります。`zookeeper_auth_scheme`が指定されている場合にのみ必要です。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_PATH**
        </DNT>
      </td>

      <td>
        Kafka構成が存在するZookeeperノード。デフォルトは`/`です。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **PREFERRED_LISTENER**
        </DNT>
      </td>

      <td>
        特定のリスナーを使用してブローカーに接続します。 設定されていない場合は、テスト接続に成功した最初のリスナーが使用されます。 サポートされる値は`PLAINTEXT` 、 `SASL_PLAINTEXT` 、 `SSL` 、 `SASL_SSL`です。

        **`SASL_*`プロトコルはKerberos（GSSAPI）認証のみをサポートしていることに注意してください。**
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>
  </tbody>
</table>

## ブートストラップ・ブローカー発見用引数 [#bootstrap-broker]

これは、 `autodiscover_strategy`オプションが`bootstrap`に設定されている場合にのみ関係します。

'' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        ブートストラップ・ブローカーのホストです。

        <DNT>
          **If `CONSUMER_OFFSET` is set to `false` `KafkaBrokerSamples` and `KafkaTopicSamples` will be collected.**
        </DNT>
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_KAFKA_PORT**
        </DNT>
      </td>

      <td>
        ブートストラップ・ブローカーのKafkaポートです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_KAFKA_PROTOCOL**
        </DNT>
      </td>

      <td>
        ブートストラップブローカーへの接続に使用するプロトコル。サポートされている値は、 `PLAINTEXT` 、 `SASL_PLAINTEXT` 、 `SSL` 、および`SASL_SSL`です。

        **`SASL_*`プロトコルはKerberos（GSSAPI）認証のみをサポートしていることに注意してください。**
      </td>

      <td>
        PLAINTEXT
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_PORT**
        </DNT>
      </td>

      <td>
        クラスター内の各ブローカの収集に使用するJMXポートです。

        <DNT>
          **Note that all discovered brokers should have JMX active on this port**
        </DNT>
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_USER**
        </DNT>
      </td>

      <td>
        クラスタ内の各ブローカの収集に使用するJMXユーザ。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        クラスター内の各ブローカの収集に使用するJMXパスワードです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>
  </tbody>
</table>

## JMXのSSLとタイムアウトのオプション [#jmx-ssl-timeout]

これらは、インスタンス上のすべてのJMX接続に適用されます。

'' '' '' '' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        設定
      </th>

      <th>
        説明
      </th>

      <th>
        デフォルト
      </th>

      <th>
        に適用されます
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
        JMXクライアントのSSL証明書を含むキーストアのファイルパスです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KEY_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        JMXのSSLキーストアのパスワードです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TRUST_STORE**
        </DNT>
      </td>

      <td>
        JMXサーバーのSSL証明書を含むトラストキーストアのファイルパスです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TRUST_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        JMXトラストストアのパスワードです。
      </td>

      <td>
        該当なし
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_USER**
        </DNT>
      </td>

      <td>
        メトリクスを収集するために JMX ホストに接続しているデフォルトのユーザーです。JMX ホストで username フィールドが省略された場合は、この値が使用されます。
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        JMX ホストに接続するためのデフォルトのパスワードです。JMX ホストでパスワードフィールドが省略された場合は、この値が使用されます。
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TIMEOUT**
        </DNT>
      </td>

      <td>
        個々のJMXクエリのタイムアウト（単位：ミリ秒）。
      </td>

      <td>
        10000
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>
  </tbody>
</table>

## トラブルシューティング [#troubleshooting]

<CollapserGroup>
  <Collapser
    id="duplicate-info"
    title="重複したデータが報告される"
  >
    プロデューサーおよび/またはコンシューマーを監視し、 `Topic mode`が`All` ：に設定されているエージェントの場合、重複データが報告されるという問題が発生する可能性があります。重複データを停止するには：[構成オプション](#config)`Collect topic size`がfalseに設定されていることを確認します。
  </Collapser>

  ''

  <Collapser
    id="zookeeper-node-not-found"
    title="Integration is logging errors 'zk: node not found'."
  >
    [構成ファイル](#config)で`zookeeper_path`が正しく設定されていることを確認してください。
  </Collapser>

  <Collapser
    id="jmx-connection-errors"
    title="JMXの接続エラー"
  >
    Kafka統合は、 `nrjmx`と呼ばれるJMXヘルパーツールを使用して、ブローカー、コンシューマー、およびプロデューサーからJMXメトリックを取得します。JMXは、クラスター内のすべてのブローカーで有効化および構成する必要があります。また、統合を実行しているホストからJMXポートを介したブローカーへの接続を許可するように、ファイアウォールを調整する必要があります。

    JMXが正しく構成されているかどうかを確認するには、Kafka統合を実行しているマシンからブローカーごとに次のコマンドを実行します。`PORT` 、 `USERNAME` 、および`PASSWORD`変数をブローカーの対応するJMX設定に置き換えます。

    ```shell
    echo "*:*" | nrjmx -hostname MY_HOSTNAME -port MY_PORT -v -username MY_USERNAME -password MY_PASSWORD
    ```

    このコマンドを実行すると、エラーなしで一連の長いメトリクスを示す出力が生成されます。
  </Collapser>

  <Collapser
    id="kerberos-authentication"
    title="Kerberos認証の失敗"
  >
    インテグレーションでは、以下のようなエラーが表示されることがあります。

    ```shell
    KRB Error: (6) KDC_ERR_C_PRINCIPAL_UNKNOWN Client not found in Kerberos database
    ```

    kinitコマンドでkeytabを確認します。ハイライトされたフィールドをあなたの値に置き換えてください。

    ```shell
    $ kinit -k -t KEY_TAB_PATH USERNAME
    ```

    ユーザー名とkeytabの組み合わせが正しければ、上記のコマンドはエラーを表示せずに終了します。

    klistコマンドでレルムを確認します。

    ```shell
    $ klist |grep "Default principal:"
    ```

    このように表示されます。

    ```shell
    Default principal: johndoe@a_realm_name
    ```

    印刷されたユーザー名とレルムが、統合構成の`sasl_gssapi_realm` }パラメーターと`sasl_gssapi_username`パラメーターと一致することを確認してください。
  </Collapser>
</CollapserGroup>
