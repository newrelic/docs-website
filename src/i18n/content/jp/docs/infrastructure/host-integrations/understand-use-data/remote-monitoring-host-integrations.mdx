---
title: オンホスト統合のためのリモート監視
tags:
  - Integrations
  - On-host integrations
  - Understand and use data
metaDescription: 'How remote monitoring works for some New Relic on-host integrations (particularly Apache, Cassandra, MySQL, NGINX, and Redis)'
freshnessValidatedDate: never
translationType: machine
---

New Relic の観点からは、 [エンティティ](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic#what-is-entity) は幅広い概念です。エンティティとは、New Relic が識別できるもので、監視できるデータを持つものを指します。

オンホストインテグレーションは、 `remote_monitoring`オプションを`true`に設定することで、 <DNT>**remote entity,**</DNT>と呼ばれる独自のテンプレートを作成するように構成できます。 `false`に設定すると、インテグレーションはローカル アプライアンスと見なされ、それに関連するデータはエージェントが作成するホスト アプライアンスに添付されます。 リモート監視には、インフラストラクチャエージェント[バージョン 1.2.25 以上が](/docs/release-notes/infrastructure-release-notes/infrastructure-agent-release-notes)必要です。

[Apache](/docs/integrations/host-integrations/host-integrations-list/apache-monitoring-integration) 、 [Cassandra](/docs/integrations/host-integrations/host-integrations-list/cassandra-monitoring-integration) 、 [MySQL](/docs/integrations/host-integrations/host-integrations-list/mysql-monitoring-integration) 、 [NGINX](/docs/integrations/host-integrations/host-integrations-list/nginx-monitoring-integration) 、および [Redis](/docs/integrations/host-integrations/host-integrations-list/redis-monitoring-integration) 統合の場合、構成パラメータ `remote_monitoring`をアクティブ化することでリモート監視 (および [マルチテナンシー](/docs/integrations/host-integrations/getting-started/introduction-host-integrations#multiple-instances)) が有効になります。

<Callout variant="important">
  Apache、Cassandra、MySQL、NGINX、またはRedisのサービスがエージェントと同じホストにある場合、リモートモニタリングを有効にすると、結果として生じるエンティティは、実際の場所にかかわらず、リモートとみなされます。これはアラートに影響を与えたり、属性を変更したり、その他の効果があります。
</Callout>

## 活性化の効果 `remote_monitoring` [#effects-activating-remote-monitoring]

`remote_monitoring`を有効にすると、統合はインフラストラクチャ エージェントに関連付けられなくなる別のエンティティになります。その結果、次の項目が影響を受ける可能性があります。

<CollapserGroup>
  <Collapser
    id="verify-alerts"
    title="アラート検証"
  >
    [<DNT>**Enabling remote monitoring can affect your configured alerts**</DNT>](/docs/verify-your-alerts-after-activating-remote-monitoring) (この新機能の影響を受ける値を使用している場合)。 既存の<InlinePopover type="alerts"/>が期待どおりに動作し続けることを確認することを強くお勧めします。
  </Collapser>

  <Collapser
    id="new-entity-attributes"
    title="新しいエンティティ属性"
  >
    これらの属性は、結果として生じるエンティティで変更されます。

    * <DNT>
        **Display name**
      </DNT>

      : 新しいエンティティの一意のキー（表示名を使用する代わりに）

    * <DNT>
        **Entity GUID**
      </DNT>

      : 新しいエンティティ GUID

    * <DNT>
        **Entity ID**
      </DNT>

      : 新しいアプライアンスID

    * <DNT>
        **Entity key**
      </DNT>

      : 新しいエンティティの一意のキー（表示名を使用する代わりに）

    * <DNT>
        **External key**
      </DNT>

      : インテグレーション エージェント名を使用する（エージェント表示を使用する代わりに）
  </Collapser>

  <Collapser
    id="new-decoration"
    title="記録された指標の変化"
  >
    リモート モニタリングが有効になっている場合、すべての指標に `hostname` と `port` の値が追加されます。`nricluster` 名または `nriservice` 統合構成ファイルで定義されている場合、それらも装飾されます。
  </Collapser>

  <Collapser
    id="lost-attributes"
    title="記録されていない属性"
  >
    統合は、エージェントに接続されていない独立したエンティティになっているため、以下のエージェント属性は収集されません。

    * `agentName`
    * `agentVersion`
    * `coreCount`
    * `criticalViolationCount`
    * `fullHostname`
    * `instanceType`
    * `kernelVersion`
    * `linuxDistribution`
    * `entityType`
    * `operatingSystem`
    * `processorCount`
    * `systemMemoryBytes`
    * `warningViolationCount`
    * あなたの [カスタム属性](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#attributes)
  </Collapser>

  <Collapser
    id="updated-hostname"
    title="更新されたホスト名"
  >
    `ApacheSample` 、 `RedisSample` 、 `CassandraSample` 、および `NginxSample` 統合メトリクスの場合、エージェントからの短いホスト名の代わりに統合構成ホスト名を使用します。

    統合ホスト名が [ループバックアドレス](/docs/integrations/integrations-sdk/file-specifications/integration-executable-file-specifications#h2-loopback-address-replacement-on-entity-names) の場合、エージェントは一意性を保証するためにこれを置き換えます。
  </Collapser>
</CollapserGroup>
