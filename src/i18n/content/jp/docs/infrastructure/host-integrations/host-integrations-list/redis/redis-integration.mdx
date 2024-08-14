---
title: Redisモニターインテグレーション
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'New Relic''s Redis integration: how to install it, configure it, and understand the data it reports.'
freshnessValidatedDate: never
translationType: machine
---

当社のRedisインテグレーションは、ご利用の [Redis](https://redis.io)サーバーから重要なパフォーマンスデータをNew Relic製品にレポートします。この[メトリックデータ](#metrics)と[インベントリデータ](#inventory)に関するプレビルドダッシュボードを閲覧し、アラートポリシーを作成して、カスタムクエリおよびチャートを作成することができます。また、ご利用のアプリケーションにとって重要なキーを指定して、その長さに関する詳細を入手することもできます。

統合をインストールし、収集するデータを確認するために読んでください。

## 互換性と要件 [#comp-req]

当社のインテグレーションは、Redisバージョン3.0から7.0まで互換性があります。

統合をインストールする前に、次の要件を満たしていることを確認してください。

* NewRelicアカウント。持っていませんか？[無料でお申し込み頂けます！](https://newrelic.com/signup)クレジットカードは必要ありません。

* RedisがKubernetesまたはAmazon ECSで実行されて**いない**場合、[Infrastructureエージェントが、Redisを実行しているLinux OSホストにインストールされている](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic)必要があります。その他の場合：

  * Kubernetesで実行している場合は、[これらの要件](/docs/monitor-service-running-kubernetes#requirements)を参照してください。
  * ECSで実行している場合は、 [これらの要件](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs)を参照してください。

このインテグレーションは、Redisコマンドを実行することでデータを取得します。

* [`INFO`コマンド](https://redis.io/commands/info)：INFOコマンドによるデータが、メトリックデータと一部のインベントリデータを入力します。

* [`CONFIG GET`コマンド](https://redis.io/commands/config-get)：大半のインベントリデータは、このコマンドによって取得できます。

  * `CONFIG`コマンドの実行許可を持たないマネージドRedisインストレーション（例：AWS ElastiCache）では、このコマンドの実行を`config_inventory: false`設定オプションで無効にできます。

* キーの長さの取得：キーの種類によっては、以下のコマンドを使用します

  * には[`LLEN`](https://redis.io/commands/llen) `list`
  * には[`SCARD`](https://redis.io/commands/scard) `set`
  * には[`ZCOUNT`](https://redis.io/commands/zcount) `zset`
  * `hash`タイプには[`HLEN`](https://redis.io/commands/hlen)。

キーの長さに関するデータ収集において、エージェントは [パイプライニング](https://redis.io/topics/pipelining)を使用してRedisのパフォーマンスへの影響を最小限に抑えます。ただし、多数のキーの長さを収集している場合は、Redisのパフォーマンスにも影響が出る場合があります。こうした理由から、エージェントにはデフォルトのキー制限が含まれています（ただし、この制限は上書き可能）。

<Callout variant="important">
  上記のRedisコマンド名を修正した場合、インテグレーションがRedisデータを回収できなくなります。
</Callout>

## クイックスタート [#quick]

Redisサーバーを迅速に計装し、ガイド付きインストールでテレメトリデータを送信します。ガイド付きインストールは、New Relic CLIおよびインフラストラクチャエージェントをダウンロードおよびインストールする環境用にカスタマイズされたCLIコマンドを作成します。

始める準備はできましたか？これらのボタンの1つをクリックして、試してみてください。

<ButtonGroup>
  <ButtonLink
    role="button"
    to="https://one.newrelic.com/marketplace/install-data-source?state=eea8674d-6cb6-b7c3-e0c9-d25f5d75ff79"
    variant="primary"
  >
    ガイド付きインストール
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.eu.newrelic.com/marketplace/install-data-source?state=eea8674d-6cb6-b7c3-e0c9-d25f5d75ff79"
    variant="primary"
  >
    EUガイド付きインストール
  </ButtonLink>
</ButtonGroup>

## インストールしてアクティブ化する [#install]

Redisインテグレーションをインストールするには、お使いの環境の指示に従います：

その他の注意事項：

* <DNT>
    **Advanced:**
  </DNT>

  インテグレーションは、パッケージマネージャ外でのインストレーションを可能にするために、 [tarball 形式](/docs/integrations/host-integrations/installation/install-host-integrations-built-new-relic#tarball)でも利用できます。

* <DNT>
    **On-host integrations do not automatically update.**
  </DNT>

  最善の結果を得るため、[インテグレーションパッケージの更新](/docs/integrations/host-integrations/installation/update-infrastructure-host-integration-package)と[Infrastructureエージェントの更新](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent)を定期的に実施してください。

<CollapserGroup>
  <Collapser
    id="ecs-install"
    title="ECS"
  >
    [ECSで実行されているモニターサービスを](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs)参照してください。
  </Collapser>

  ''

  <Collapser
    id="k8s-install"
    title="Kubernetes"
  >
    [Kubernetesで実行されているモニターサービスを](/docs/monitor-service-running-kubernetes)参照してください。
  </Collapser>

  <Collapser
    id="linux-install"
    title="Linux"
  >
    1. [インフラストラクチャ エージェントをインストールし](/docs/integrations/host-integrations/installation/install-infrastructure-host-integrations/#install)、 `INTEGRATION_FILE_NAME`変数を`nri-redis`に置き換えます。

    2. ディレクトリを統合構成フォルダに変更します。

       ```sh
       cd /etc/newrelic-infra/integrations.d
       ```

    3. サンプル構成ファイルをコピーします。

       ```sh
       sudo cp redis-config.yml.sample redis-config.yml
       ```

    4. Redisサーバーの接続方法に基づいて、`redis-config.yml`設定ファイルを編集します。

       <CollapserGroup>
         <Collapser
           id="socket-connect"
           title="Unix socketで接続する"
         >
           Unixソケットを使って接続している場合は、[設定ファイル](#config)で`unix_socket_path`を指定します。Unixソケットを使用しているRedisインスタンスが複数ある場合、[設定ファイル](#config)で`use_unix_socket`を`true`に設定してください。

           必ず、Redisインテグレーションを実行するユーザーが、そのUnix socketへの適切なアクセス権限を持っていることを確認してください。Unixソケットへのアクセス権限は、Redis設定（`unixsocketperm`の値）で設定されています。
         </Collapser>

         <Collapser
           id="tcp-connect"
           title="TCPで接続する"
         >
           TCPを介して接続する場合、[設定ファイル](config)はデフォルトで`localhost`とポート`6379`に設定されます。これは、`hostname`か`port`、またはそれら両方の引数を指定することで変更できます。この方法を使う場合、`unix_socket_path`パラメーターは設定できません。
         </Collapser>
       </CollapserGroup>

    5. 必要に応じて、[設定](#config)に書かれている通り、ご利用のRedisのセットアップに基づき、その他の設定ファイルを設定してください。

    6. 自動Redisエラーログ解析および転送を有効にするには、`redis-log.yml.example`ファイルを`redis-log.yml`にコピー（または名前変更）します。エージェントを再起動する必要はありません。

       <DNT>
         **Example:**
       </DNT>

       ```sh
       sudo cp /etc/newrelic-infra/logging.d/redis-log.yml.example /etc/newrelic-infra/logging.d/redis-log.yml
       ```
  </Collapser>

  <Collapser
    id="windows-install"
    title="ウィンドウズ"
  >
    1. `nri-redis` .MSIインストーラーイメージを以下からダウンロードします。

       [https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-redis/nri-redis-amd64.msi](https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-redis/nri-redis-amd64.msi)

    2. Windowsコマンドプロンプトからインストールするには、次のコマンドを実行します。

       ```sh
       msiexec.exe /qn /i PATH\TO\nri-redis-amd64.msi
       ```

       またはエクスプローラーでファイルをダブルクリックします。

    3. Integrationsディレクトリ`C:\Program Files\New Relic\newrelic-infra\integrations.d\`で、次のコマンドを実行してサンプル構成ファイルのコピーを作成します。

       ```sh
       copy redis-win-config.yml.sample redis-win-config.yml
       ```

    4. [構成設定](#config)の説明に従って、 `redis-win-config.yml`ファイルを編集します。
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## お使いのRedisサーバーのNew Relicユーザーの作成 [#enable-instance]

Redis 6+を使用しており、アクセスコントロールリスト（ACL）を使用してインスタンスへのアクセスを制御する場合は、インテグレーション用の`newrelic`ユーザーを作成することをお勧めします。このコマンドを使用して、必要な権限を作成してユーザーに付与します。

```sh
ACL SETUSER newrelic on >'YOUR_SELECTED_PASSWORD' ~* +INFO +CONFIG|GET +SELECT +TYPE +LLEN +SCARD +ZCOUNT +HLEN
```

## 統合を構成する [#config]

インストール方法に応じて、統合を構成する方法はいくつかあります。

* Kubernetes経由で有効になっている場合： [Kubernetesで実行されているサービスの監視を](/docs/monitor-service-running-kubernetes)ご覧ください。
* Amazon ECSを介して有効になっている場合： [ECSで実行されている監視サービスを](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs)参照してください。
* オンホストにインストールする場合：インテグレーションのYAML設定ファイル`redis-config.yml`で設定を編集します。

YAML設定を使用して、必要なログイン認証情報を配置し、セットアップと設定に応じてデータの収集方法を設定します。

設定ファイルには、`interval`、`timeout`、`inventory_source`など、すべてのインテグレーションに適用される共通設定があります。これらの共通設定の詳細については、[YAML設定形式](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-newer-configuration-format/#configuration-basics)を参照してください。

<Callout variant="important">
  レガシーの設定/定義ファイルを引き続き使用する場合は、[旧バージョンの標準設定形式](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-standard-configuration-format/)を使用してください。
</Callout>

設定ファイルの`env`セクションを使用して、Redisに関連する特定の設定を定義します。これらの設定は、Redisインスタンスへの接続、およびその他のセキュリティ設定と機能を制御します。

## Redisインスタンス設定 [#instance-settings]

Redisインテグレーションは、メトリクス(<DNT>**M**</DNT>)とインベントリ(<DNT>**I**</DNT>)の両方の情報を収集します。 表では、各コレクションで使用可能な設定については<DNT>**Applies To**</DNT>列を使用します。

'' '' '' '' '' '' '' '' '' '' '' '' '' ''

<table>
  <thead>
    <tr>
      <th style={{ width: '150px' }}>
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
        `HOSTNAME`
      </td>

      <td>
        Redisサーバーのホスト名。
      </td>

      <td>
        `localhost`
      </td>

      <td style={{ "text-align": "center" }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        `PORT`
      </td>

      <td>
        Redisサーバーがリッスンするポート。
      </td>

      <td>
        `6379`
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        `USERNAME`
      </td>

      <td>
        Redisサーバーに接続する際のユーザー名。ACLが有効な場合、Redis 6+でのみ使用します。
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
        `PASSWORD`
      </td>

      <td>
        Redisサーバーに接続する際のパスワード。`REQUIREPASS`またはACLが有効な場合、Redisサーバーでのみ使用します。
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
        `UNIX_SOCKET_PATH`
      </td>

      <td>
        RedisサーバーがリッスンしているUnixソケットファイルへのパス。ホスト名/ポートの代わりにこれを使用。
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
        `USE_UNIX_SOCKET`
      </td>

      <td>
        `true`に設定すると、Unixソケットを使用するときに監視されるエンティティが一意に識別されます。
      </td>

      <td>
        `false`
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        `USE_TLS`
      </td>

      <td>
        Redisサーバーとの通信時にTLSを使用します。
      </td>

      <td>
        `false`
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        `TLS_INSECURE_SKIP_VERIFY`
      </td>

      <td>
        TLS経由で接続する場合、サーバー名の検証を無効にします。
      </td>

      <td>
        `false`
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        `KEYS`
      </td>

      <td>
        長さを読みだすキーの一覧。
      </td>

      <td>
        該当なし
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
        長さを読みだすキーの最大数。
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
        Redis CONFIGコマンドが許可されていない環境では「false」に設定します（AWSやElastiCacheなど）。
      </td>

      <td>
        `true`
      </td>

      <td style={{ 'text-align': 'center' }}>
        私
      </td>
    </tr>

    <tr>
      <td>
        `RENAMED_COMMANDS`
      </td>

      <td>
        デフォルトのRedisコマンドを名前変更されたフォームにマッピングします。
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
        [`REMOTE_MONITORING`](/docs/remote-monitoring-host-integrations)
      </td>

      <td>
        マルチテナンシー監視を有効にします。
      </td>

      <td>
        `true`
      </td>

      <td style={{ 'text-align': 'center' }}>
        M / I
      </td>
    </tr>

    <tr>
      <td>
        `METRICS`
      </td>

      <td>
        メトリックのみの収集を有効にするには、 `true`に設定します。
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
        インベントリのみの収集を有効にするには、 `true`に設定します。
      </td>

      <td>
        `false`
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

これらの設定の値は、いくつかの方法で定義できます。

* 値を構成ファイルに直接追加します。これが最も一般的な方法です。
* `{{}}`表記を使用して、環境変数の値を置き換えます。これには、インフラストラクチャエージェント1.14.0以降が必要です。詳細については、 [インフラストラクチャエージェントのパススルー環境変数](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough)の詳細を参照してください。
* シークレット管理を使用して、パスワードなどの機密情報を保護し、構成ファイルにプレーンテキストで公開されないようにします。詳細については、[シークレット管理](/docs/integrations/host-integrations/installation/secrets-management)を参照してください。

## ラベルとカスタム属性 [#labels]

メトリックをラベルで装飾することもできます。ラベルを使用すると、キーと値のペアの属性をメトリックに追加して、メトリックをクエリ、フィルタリング、またはグループ化できます。

デフォルトのサンプル構成ファイルにはラベルの例が含まれていますが、それらはオプションです。新しいものを削除、変更、または追加できます。

```yml
labels:
  env: production
  role: load_balancer
```

## 構成例 [#examples]

<CollapserGroup>
  <Collapser
    id="basic-config"
    title="基本構成"
  >
    これは、ローカルホストからメトリックとインベントリを収集するために使用される基本構成です。

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
    title="基本認証"
  >
    この設定は、基本認証を使用してRedisに接続します。`my_password`を`REQUIREPASS`パスワードに置き換えます。

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
    title="REDIS 6+ ACL認証"
  >
    Redis 6+では、[アクセスコントロールリスト（ACL）](https://redis.io/topics/acl)でインスタンスを保護できます。ACLの場合、`USERNAME`と`PASSWORD`の値を認証情報に置き換えます。

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
    title="TLS接続によるメトリクスのみ"
  >
    これを使用して、TLSでRedisに接続します。`TLS_INSECURE_SKIP_VERIFY : true`を追加すると、サーバー名の検証を無効にできます。

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
    title="ソケット上のメトリクスのみの接続"
  >
    ソケットファイルを使用して、Redisに接続する場合に使用します。これは、TCPホスト名/ポート接続の代替手段です。

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
    title="名前を変更したコマンドの使用"
  >
    [`rename-command`](https://redis.io/topics/security#disabling-of-specific-commands)を使ってインスタンスを保護する場合、これを使用してメトリクス/インベントリを収集します。

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
    title="キーフィルタリングによるマルチインスタンス監視"
  >
    同じインテグレーションを使用して2つの異なるRedisサーバーからメトリクスを収集する必要がある場合に使用します。

    最初のインスタンスの例は、Redisデータベース0から`KEY_1`と`KEY_2`のみを収集することです。2番目のインスタンスの例は、異なるデータベースから`{"DB":"KEYS"}`を使用して収集する方法を示しています。

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

## データを見つけて使用する [#find-and-use]

このサービスからのデータは、 [統合ダッシュボード](/docs/integrations/new-relic-integrations/getting-started/infrastructure-integration-dashboards-charts)に報告されます。

メトリクスが、`RedisSample`および`RedisKeyspaceSample` [イベントタイプ](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic)に関連付けられます。トラブルシューティング目的で、またはカスタムのチャートとダッシュボードを作成するために、[このデータのクエリ](/docs/using-new-relic/data/understand-data/query-new-relic-data)を行えます。

データを検索して使用する方法の詳細については、[統合データ](/docs/infrastructure/integrations/find-use-infrastructure-integration-data)についてを参照してください。

## メトリックデータ [#metrics]

Redisインテグレーションは、以下のメトリックデータ属性を収集します。

### Redisサンプルメトリックス [#redissample-metrics]

これらの属性は、 `RedisSample`イベントタイプに関連付けられています。

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        名前
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `cluster.connectedSlaves`
      </td>

      <td>
        接続したスレーブの数。
      </td>
    </tr>

    <tr>
      <td>
        `db.aofLastRewriteTimeInMilliseconds`
      </td>

      <td>
        最後に行ったAOFの修正操作の時間（ミリ秒）。
      </td>
    </tr>

    <tr>
      <td>
        `db.aofLastBgrewriteStatus`
      </td>

      <td>
        最後に行ったAOFのバックグラウンド修正のステータスを示すブール表現。
      </td>
    </tr>

    <tr>
      <td>
        `db.aofLastWriteStatus`
      </td>

      <td>
        最後に行ったAOF書込み操作のステータスを示すブール表現。
      </td>
    </tr>

    <tr>
      <td>
        `db.evictedKeysPerSecond`
      </td>

      <td>
        1秒あたりのmaxmemory制限によって却下されたキーの数。
      </td>
    </tr>

    <tr>
      <td>
        `db.expiredKeysPerSecond`
      </td>

      <td>
        1秒あたりのキーの無効化イベントの数。
      </td>
    </tr>

    <tr>
      <td>
        `db.keyspaceHitsPerSecond`
      </td>

      <td>
        1秒あたりにメインディクショナリでキー検索が成功した回数。
      </td>
    </tr>

    <tr>
      <td>
        `db.keyspaceMissesPerSecond`
      </td>

      <td>
        1秒あたりにメインディクショナリでキー検索が失敗した回数。
      </td>
    </tr>

    <tr>
      <td>
        `db.latestForkUsecMilliseconds`
      </td>

      <td>
        最後に行ったフォーク操作の時間（ミリ秒）。
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbBgsaveInProgress`
      </td>

      <td>
        ブール値。RDBによる保存が進行中であることを示すフラグ。
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbChangesSinceLastSave`
      </td>

      <td>
        最後のダンプが行われてからの変更数。
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbLastBgsaveStatus`
      </td>

      <td>
        最後に行ったRDBの保存操作のステータスを示すブール表現。
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbLastBgsaveTimeMilliseconds`
      </td>

      <td>
        最後に行ったRDBの保存操作の時間（ミリ秒）。
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbLastSaveTime`
      </td>

      <td>
        最後に成功したRDB保存のエポックに基づくタイムスタンプ（秒）。
      </td>
    </tr>

    <tr>
      <td>
        `db.syncFull`
      </td>

      <td>
        スレーブがこのマスターと完全に同期した回数。
      </td>
    </tr>

    <tr>
      <td>
        `db.syncPartialErr`
      </td>

      <td>
        部分同期の完了が失敗に終わった回数。
      </td>
    </tr>

    <tr>
      <td>
        `db.syncPartialOk`
      </td>

      <td>
        部分同期が完了した回数。
      </td>
    </tr>

    <tr>
      <td>
        `net.blockedClients`
      </td>

      <td>
        ブロッキングコールで保留中のクライアントの数（`BLPOP`、`BRPOP`、`BRPOPLPUSH`）。
      </td>
    </tr>

    <tr>
      <td>
        `net.clientBiggestInputBufBytes`
      </td>

      <td>
        現在のクライアント接続の中で最大の入力バッファ。
      </td>
    </tr>

    <tr>
      <td>
        `net.clientLongestOutputList`
      </td>

      <td>
        現在のクライアント接続の中で最大の出力リスト。
      </td>
    </tr>

    <tr>
      <td>
        `net.commandsProcessedPerSecond`
      </td>

      <td>
        1秒あたりにサーバーが処理するコマンドの数。
      </td>
    </tr>

    <tr>
      <td>
        `net.connectedClients`
      </td>

      <td>
        クライアント接続の数（スレーブ接続を除く）。
      </td>
    </tr>

    <tr>
      <td>
        `net.connectionsReceivedPerSecond`
      </td>

      <td>
        1秒あたりにサーバーによって受け入れられた接続の数。
      </td>
    </tr>

    <tr>
      <td>
        `net.inputBytesPerSecond`
      </td>

      <td>
        1秒あたりの入力バイトの合計数。
      </td>
    </tr>

    <tr>
      <td>
        `net.outputBytesPerSecond`
      </td>

      <td>
        1秒あたりの出力バイトの合計数。
      </td>
    </tr>

    <tr>
      <td>
        `net.pubsubChannels`
      </td>

      <td>
        クライアントサブスクリプションを持つpub/subチャネルのグローバルな数。
      </td>
    </tr>

    <tr>
      <td>
        `net.pubsubPatterns`
      </td>

      <td>
        クライアントサブスクリプションを持つpub/subパターンのグローバルな数。
      </td>
    </tr>

    <tr>
      <td>
        `net.rejectedConnectionsPerSecond`
      </td>

      <td>
        maxclientsによる制限を理由に却下された1秒あたりの接続数。
      </td>
    </tr>

    <tr>
      <td>
        `software.uptimeMilliseconds`
      </td>

      <td>
        Redisサーバーを起動してから経過時間（ミリ秒）。
      </td>
    </tr>

    <tr>
      <td>
        `system.memFragmentationRatio`
      </td>

      <td>
        `used_memory_rss`と`used_memory`との比率。
      </td>
    </tr>

    <tr>
      <td>
        `system.totalSystemMemoryBytes`
      </td>

      <td>
        Redisが稼働中のインスタンスで利用可能なメモリ量（バイト数）。
      </td>
    </tr>

    <tr>
      <td>
        `system.usedCpuSysMilliseconds`
      </td>

      <td>
        Redisサーバーで使用されるシステムのCPU（ミリ秒）。
      </td>
    </tr>

    <tr>
      <td>
        `system.usedCpuSysChildrenMilliseconds`
      </td>

      <td>
        バックグラウンド処理で使用されるシステムのCPU（ミリ秒）。
      </td>
    </tr>

    <tr>
      <td>
        `system.usedCpuUserMilliseconds`
      </td>

      <td>
        Redisサーバーが使用するユーザーのCPU（ミリ秒）。
      </td>
    </tr>

    <tr>
      <td>
        `system.usedCpuUserChildrenMilliseconds`
      </td>

      <td>
        バックグラウンド処理で使用されるユーザーのCPU（ミリ秒）。
      </td>
    </tr>

    <tr>
      <td>
        `system.usedMemoryBytes`
      </td>

      <td>
        Redisがそのアロケーター（標準`libc`、`jemalloc`、または`tcmalloc`などの代替アロケーター）を使用して割り当てた合計バイト数。
      </td>
    </tr>

    <tr>
      <td>
        `system.usedMemoryLuaBytes`
      </td>

      <td>
        Luaエンジンが使用したバイト数。
      </td>
    </tr>

    <tr>
      <td>
        `system.usedMemoryPeakBytes`
      </td>

      <td>
        Redisによるピークメモリ使用量（バイト数）。
      </td>
    </tr>

    <tr>
      <td>
        `system.usedMemoryRssBytes`
      </td>

      <td>
        オペレーティングシステムから分かる、Redisが割り当てたバイト数（別名RSS=resident set size）。これは、`top(1)`や`ps(1)`などのツールによってレポートされる数値です。
      </td>
    </tr>
  </tbody>
</table>

### キースペースのメトリックス

Redisインテグレーションは、以下のキースペースのメタデータおよびメトリクスを収集します。これらの属性は、`RedisKeyspaceSample`イベントタイプに関連付けられます。

<table>
  <thead>
    <tr>
      <th style={{ width: "270px" }}>
        名前
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `db.avgTtl`
      </td>

      <td>
        レポートされるデータベース内で有効期限を設定されたキーの平均有効期間（TTL）（ミリ秒）。
      </td>
    </tr>

    <tr>
      <td>
        `db.keys`
      </td>

      <td>
        レポートされるデータベース内のキーの数。
      </td>
    </tr>

    <tr>
      <td>
        `db.keyspace`
      </td>

      <td>
        Redisデータベースの整数のインデックスです（通常、`0`と`15`の間の数値）。フォーマット：`db`の後にデータベースのインデックスが続きます。たとえば、`db0`、`db1`、`db2`など。
      </td>
    </tr>

    <tr>
      <td>
        `db.expires`
      </td>

      <td>
        レポートされるデータベース内の有効期間のあるキーの数。
      </td>
    </tr>
  </tbody>
</table>

## 在庫データ [#inventory]

インベントリデータには、Redisサーバーにパスワードを保管する`requirepass`を除いた、Redis [`CONFIG GET`](https://redis.io/commands/config-get)コマンドによって報告されたデータのすべてが含まれます。インベントリデータの詳細に関しては、 [インベントリデータを理解する](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#inventory-data)を参照してください。

## その他のシステムデータ [#metadata]

Redisインテグレーションは、Redisサービスに関する以下の追加 [属性](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute) を収集します。

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        名前
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `software.version`
      </td>

      <td>
        Redisサーバーのバージョン。例：`3.2.3`。
      </td>
    </tr>

    <tr>
      <td>
        `cluster.role`
      </td>

      <td>
        監視されているRedisノードのロールに応じて、`master`または`slave,`。
      </td>
    </tr>
  </tbody>
</table>

## ソースコードを確認してください [#source-code]

このインテグレーションはオープンソースソフトウェアです。つまり、[ソースコードを参照](https://github.com/newrelic/nri-redis)して改善を送信したり、独自のフォークを作成して構築したりできます。
