---
title: Synthetics ジョブ マネージャーの構成
tags:
  - synthetics
  - Synthetic monitoring
  - Private locations
metaDescription: Customize your New Relic synthetics job manager.
freshnessValidatedDate: never
translationType: machine
---

このドキュメントでは、次の方法を示して[、外形監視ジョブ マネージャー](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager)の構成について説明します。

* [環境変数](#environment-variables)を使用して、外形監視ジョブ マネージャーを構成します。
* [](#custom-modules)[スクリプトAPI](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests/) または[ スクリプトbrowser](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers) モニターの カスタム モジュール を設定します。
* 設定に[ユーザー定義の変数](#user-defined-vars)を提供します。

## 環境変数を使用した設定 [#environment-variables]

環境変数を使用すると、合成ジョブ マネージャーの構成を微調整して、特定の環境および機能のニーズを満たすことができます。

<CollapserGroup>
  <Collapser
    id="docker-env-config"
    title="Dockerの環境設定"
  >
    変数は、起動時に`-e, --env`引数を使用して提供されます。

    次の表は、synthetics ジョブ マネージャーがサポートするすべての環境変数を示しています。`PRIVATE_LOCATION_KEY`は必須で、その他の変数はすべてオプションです。

    <table>
      <thead>
        <tr>
          <th>
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
            `PRIVATE_LOCATION_KEY`
          </td>

          <td>
            <DNT>**REQUIRED.**</DNT> プライベートロケーション エンティティ リストにあるプライベートロケーション キー。
          </td>
        </tr>

        <tr>
          <td>
            `DOCKER_API_VERSION`
          </td>

          <td>
            形式： `"vX.Y"`指定されたDockerサービスで使用されるAPIバージョン。

            デフォルト： `v1.35.`
          </td>
        </tr>

        <tr>
          <td>
            `DOCKER_HOST`
          </td>

          <td>
            合成ジョブ マネージャーを特定の`DOCKER_HOST`にポイントします。存在しない場合、デフォルト値は `/var/run/docker.sock.`
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_ENDPOINT`
          </td>

          <td>
            米国ベースのアカウントの場合、エンドポイントは次のとおりです。 `https://synthetics-horde.nr-data.net.`

            [EUベース](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center#partner-hierarchy)のアカウントの場合、エンドポイントは次のとおりです。 `https://synthetics-horde.eu01.nr-data.net/`

            モニターにサービスを提供するために、合成ジョブ マネージャーが適切なエンドポイントに接続できることを確認します。
          </td>
        </tr>

        <tr>
          <td>
            `DOCKER_REGISTRY`
          </td>

          <td>
            ランタイム イメージがホストされる Docker レジストリ ドメイン。これを使用して、 `docker.io`をデフォルトとしてオーバーライドします。
          </td>
        </tr>

        <tr>
          <td>
            `DOCKER_REPOSITORY`
          </td>

          <td>
            ランタイム イメージがホストされる Docker リポジトリ / 組織。これを使用して、 `newrelic`をデフォルトとしてオーバーライドします。
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_HOST`
          </td>

          <td>
            Horde 通信に使用されるプロキシ サーバー ホスト。形式: `"localhost"` 。
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_PORT`
          </td>

          <td>
            Horde 通信に使用されるプロキシ サーバー ポート。形式: `8888` 。
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_USERNAME`
          </td>

          <td>
            Horde 通信に使用されるプロキシ サーバーのユーザー名。形式: `"username"` 。
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_PW`
          </td>

          <td>
            Horde 通信に使用されるプロキシ サーバーのパスワード。形式: `"password"` 。
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_ACCEPT_SELF_SIGNED_CERT`
          </td>

          <td>
            Horde 通信に使用されるプロキシ サーバー接続の自己署名プロキシ証明書を受け入れますか?許容値: `true`
          </td>
        </tr>

        <tr>
          <td>
            `CHECK_TIMEOUT`
          </td>

          <td>
            モニター チェックの実行が許可される最大秒数。この値は、0 秒 (除く) から 900 秒 (含む) までの整数である必要があります (たとえば、1 秒から 15 分まで)。

            デフォルト: 180 秒
          </td>
        </tr>

        <tr>
          <td>
            `LOG_LEVEL`
          </td>

          <td>
            デフォルト： `INFO.`

            追加オプション: `WARN` 、 `ERROR` 、 `DEBUG`
          </td>
        </tr>

        <tr>
          <td>
            `HEAVYWEIGHT_WORKERS`
          </td>

          <td>
            一度に実行できる同時重量ジョブ ( browser /スクリプト化されたbrowserおよびスクリプト化された API) の数。

            デフォルト: 使用可能な CPU - 1。
          </td>
        </tr>

        <tr>
          <td>
            `DESIRED_RUNTIMES`
          </td>

          <td>
            特定のランタイム イメージを実行するために使用される配列。 形式: \['newrelic/外形監視-ping-runtime:latest','newrelic/外形監視-node- API -runtime:latest','newrelic/外形監視-node-browser-runtime:latest']

            デフォルト: すべての最新のランタイム。
          </td>
        </tr>

        <tr>
          <td>
            `VSE_PASSPHRASE`
          </td>

          <td>
            設定すると、 <DNT>**verified script execution**</DNT>が有効になり、この値が<DNT>**passphrase**</DNT>として使用されます。
          </td>
        </tr>

        <tr>
          <td>
            `USER_DEFINED_VARIABLES`
          </td>

          <td>
            ユーザーが定義したキーバリューペアのセットをローカルにホストすること。
          </td>
        </tr>

        <tr>
          <td>
            `ENABLE_WASM`
          </td>

          <td>
            設定されている場合、ノードbrowserランタイムの Web アセンブリが有効になります。 WebAssembly を使用するには、外形監視ジョブ マネージャーの最小バージョンが release-367 以上であり、ノードbrowserランタイム バージョンが 2.3.21 以上である必要があります。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="kubernetes-env-config"
    title="Kubernetesの環境設定"
  >
    変数は、起動時に`--set`引数を使用して提供されます。

    次のリストは、synthetics ジョブ マネージャーがサポートするすべての環境変数を示しています。`synthetics.privateLocationKey`は必須で、その他の変数はすべてオプションです。

    多数の追加の高度な設定が利用可能であり[、Helm チャートの README](https://github.com/newrelic/helm-charts/blob/master/charts/synthetics-job-manager/README.md)に完全に記載されています。

    <table>
      <thead>
        <tr>
          <th>
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
            `synthetics.privateLocationKey`
          </td>

          <td>
            <DNT>**REQUIRED if `synthetics.privateLocationKeySecretName` is not set**</DNT>.プライベートロケーション Web ページにあるプライベート[ロケーションのキー](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager/#private-location-key)。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.privateLocationKeySecretName`
          </td>

          <td>
            <DNT>**REQUIRED if `synthetics.privateLocationKey` is not set**</DNT>。キー`privateLocationKey`を含む Kubernetes シークレットの名前。これには、外形監視プライベートロケーションに関連付けられた認証キーが含まれます。
          </td>
        </tr>

        <tr>
          <td>
            `replicaCount`
          </td>

          <td>
            インストールで維持するレプリカの数

            デフォルト： `1.`
          </td>
        </tr>

        <tr>
          <td>
            `imagePullSecrets`
          </td>

          <td>
            指定されたコンテナレジストリからイメージを引き出すために使用されるシークレットオブジェクトの名前です。
          </td>
        </tr>

        <tr>
          <td>
            `fullnameOverride`
          </td>

          <td>
            デフォルトを置き換えて、デプロイメントに使用される名前のオーバーライド。
          </td>
        </tr>

        <tr>
          <td>
            `appVersionOverride`
          </td>

          <td>
            [chart.yml](https://github.com/newrelic/helm-charts/blob/master/charts/synthetics-job-manager/Chart.yaml)で指定されたバージョンの代わりに使用する、synthetics-job-manager のリリース バージョン。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.logLevel`
          </td>

          <td>
            デフォルト： `INFO.`

            追加オプション: `WARN` 、 `ERROR`
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.hordeApiEndpoint`
          </td>

          <td>
            米国ベースのアカウントの場合、エンドポイントは次のとおりです。 `https://synthetics-horde.nr-data.net.`

            [EUベース](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center#partner-hierarchy)のアカウントの場合、エンドポイントは次のとおりです。 `https://synthetics-horde.eu01.nr-data.net/`

            モニターにサービスを提供するために、合成ジョブ マネージャーが適切なエンドポイントに接続できることを確認します。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.minionDockerRunnerRegistryEndpoint`
          </td>

          <td>
            MinionRunnerイメージがホストされているDockerレジストリと組織。これを使用して、デフォルトとして`quay.io/newrelic`をオーバーライドします（たとえば、 `docker.io/newrelic` ）
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.vsePassphrase`
          </td>

          <td>
            設定すると、 <DNT>**verified script execution**</DNT>が有効になり、この値が<DNT>**passphrase**</DNT>として使用されます。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.vsePassphraseSecretName`
          </td>

          <td>
            設定すると、検証済みスクリプトの実行が有効になり、この値を使用して、 `vsePassphrase`というキーを持つ Kubernetes シークレットからパスフレーズを取得します。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.enableWasm`
          </td>

          <td>
            設定されている場合、ノードbrowserランタイムの Web アセンブリが有効になります。 WebAssembly を使用するには、外形監視ジョブ マネージャーの最小バージョンが release-367 以上であり、ノードbrowserランタイム バージョンが 2.3.21 以上である必要があります。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.apiProxyHost`
          </td>

          <td>
            Horde 通信に使用されるプロキシ サーバー。形式: `"host"` 。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.apiProxyPort`
          </td>

          <td>
            Horde 通信に使用されるプロキシ サーバー ポート。形式: `port` 。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.hordeApiProxySelfSignedCert`
          </td>

          <td>
            Horde 通信にプロキシ サーバーを使用する場合は、自己署名証明書を受け入れます。許容値: `true` 。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.hordeApiProxyUsername`
          </td>

          <td>
            Horde 通信用のプロキシ サーバーのユーザー名。フォーマット： `"username"`
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.hordeApiProxyPw`
          </td>

          <td>
            Horde 通信用のプロキシ サーバーのパスワード。形式: `"password"` 。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.userDefinedVariables.userDefinedJson`
          </td>

          <td>
            ユーザー定義変数の JSON 文字列。 ユーザーはスクリプト内でこれらの変数にアクセスできます。 形式: `'{"key":"value","key2":"value2"}'` 。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.userDefinedVariables.userDefinedFile`
          </td>

          <td>
            ユーザー定義変数を含む JSON ファイルへの、ユーザーにとってローカルなパス。 これは`--set-file`経由で渡され、値ファイルで設定することはできません。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.userDefinedVariables.userDefinedPath`
          </td>

          <td>
            user_define_variables.json 파일에 대한 사용자가 제공한 PertantVolume의 경로입니다.この変数が設定されている場合、ユーザーは Persistent Volume または Persistent VolumeClaim を指定する必要があります。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.persistence.existingClaimName`
          </td>

          <td>
            ボリュームをマウントする場合、ユーザーはクラスター内に既に存在する PersistentVolumeClaim の名前を指定できます。 対応する PersistentVolume が存在することを前提とします。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.persistence.existingVolumeName`
          </td>

          <td>
            ボリュームをマウントし、PersistentVolumeClaim を指定しない場合、ユーザーは少なくとも Persistent Volume 名を指定する必要があります。 Helm は PersistentVolumeClaim を生成します。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.persistence.storageClass`
          </td>

          <td>
            生成された PersistentVolumeClaim の StorageClass の名前。 これは、既存の PV の StorageClassName と一致する必要があります。 プロバイダーでない場合、Kubernetes はデフォルトのストレージ クラスが存在する場合はそれを使用します。
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.persistence.size`
          </td>

          <td>
            生成された PersistentVolumeClaim のボリュームのサイズ。 フォーマット: `10Gi` 。 デフォルトは2Giです。
          </td>
        </tr>

        <tr>
          <td>
            `global.checkTimeout`
          </td>

          <td>
            モニター チェックの実行が許可される最大秒数。この値は、0 秒 (除く) から 900 秒 (含む) までの整数である必要があります (たとえば、1 秒から 15 分まで)。

            デフォルト: 180 秒
          </td>
        </tr>

        <tr>
          <td>
            `image.repository`
          </td>

          <td>
            引くための容器です。

            デフォルト： `docker.io/newrelic/synthetics-job-runner`
          </td>
        </tr>

        <tr>
          <td>
            `image.pullPolicy`
          </td>

          <td>
            引きの方針です。

            デフォルト： `IfNotPresent`
          </td>
        </tr>

        <tr>
          <td>
            `podSecurityContext`
          </td>

          <td>
            Synthetics-job-manager ポッドのカスタム セキュリティ コンテキストを設定します。
          </td>
        </tr>

        <tr>
          <td>
            `ping-runtime.enabled`
          </td>

          <td>
            永続的な ping ランタイムをデプロイする必要があるかどうか。ping モニターを使用しない場合は、これを無効にすることができます。

            デフォルト： `true`
          </td>
        </tr>

        <tr>
          <td>
            `ping-runtime.replicaCount`
          </td>

          <td>
            デプロイする ping ランタイム コンテナーの数。ping 監視のニーズに基づいてデプロイをスケーリングするには、replicaCount を増やします。

            デフォルト： `1`
          </td>
        </tr>

        <tr>
          <td>
            `ping-runtime.image.repository`
          </td>

          <td>
            ping ランタイム用にプルするコンテナー イメージ。

            デフォルト： `docker.io/newrelic/synthetics-ping-runtime`
          </td>
        </tr>

        <tr>
          <td>
            `ping-runtime.image.pullPolicy`
          </td>

          <td>
            ping-runtime コンテナーのプル ポリシー。

            デフォルト： `IfNotPresent`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.enabled`
          </td>

          <td>
            Node.js API ランタイムをデプロイする必要があるかどうか。スクリプト化された API モニターを使用しない場合、これを無効にすることができます。

            デフォルト： `true`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.parallelism`
          </td>

          <td>
            デプロイする Node.js API ランタイム`CronJobs`の数。同時に実行される Node.js API ジョブの最大数。[追加の詳細](#kubernetes-sizing)。

            デフォルト： `1`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.completions`
          </td>

          <td>
            1 分あたりに完了する Node.js API ランタイム`CronJobs`の数。並列処理とともにこの設定を増やして、スループットを向上させます。これは、並列処理が増加するたびに増加する必要があり、完了は常に少なくとも並列処理以上である必要があります。 .API ランタイム ジョブが実行されていない期間がある場合は、この設定を増やしてください。[追加の詳細](#kubernetes-sizing)。

            デフォルト： `6`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.image.repository`
          </td>

          <td>
            Node.js API ランタイム用にプルするコンテナー イメージ。

            デフォルト： `docker.io/newrelic/synthetics-node-api-runtime`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.image.pullPolicy`
          </td>

          <td>
            Node.js API ランタイム コンテナーのプル ポリシー。

            デフォルト： `IfNotPresent`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.enabled`
          </td>

          <td>
            Node.js ブラウザー ランタイムをデプロイする必要があるかどうか。シンプルなブラウザ モニタまたはスクリプト化されたブラウザ モニタを使用しない場合は、これを無効にすることができます。

            デフォルト： `true`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.parallelism`
          </td>

          <td>
            デプロイする Chrome ブラウザー ランタイム`CronJobs`の数。同時に実行される Chrome ブラウザ ジョブの最大数。[追加の詳細](#kubernetes-sizing)。

            デフォルト： `1`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.completions`
          </td>

          <td>
            1 分あたりに完了する Chrome ブラウザ ランタイム`CronJobs`の数。並列処理とともにこの設定を増やして、スループットを向上させます。これは、並列処理が増加するたびに増加する必要があり、完了は常に少なくとも並列処理以上である必要があります。ブラウザーのランタイム ジョブが実行されていない期間があることに気付いた場合は、この設定を増やしてください。[追加の詳細](#kubernetes-sizing)。

            デフォルト： `6`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.image.repository`
          </td>

          <td>
            Node.js ブラウザー ランタイム用にプルするコンテナー イメージ。

            デフォルト： `docker.io/newrelic/synthetics-node-browser-runtime`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.image.pullPolicy`
          </td>

          <td>
            Node.js ブラウザー ランタイム コンテナーのプル ポリシー。

            デフォルト： `IfNotPresent`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## スクリプト モニターのユーザー定義変数 [#user-defined-vars]

プライベート外形監視ジョブ マネージャーを使用すると、スクリプト化された監視の環境変数を構成できます。 これらの変数は SJM 上でローカルに管理され、 `$env.USER_DEFINED_VARIABLES`を介してアクセスできます。 ユーザー定義変数は 2 つの方法で設定できます。 JSON ファイルをマウントするか、リリースの SJM に環境変数を指定することができます。 両方が指定されている場合、SJM は環境によって提供される値のみを使用します。

<CollapserGroup>
  <Collapser
    id="user-file-example"
    title="JSONファイルの実装"
  >
    ユーザーは JSON 形式のファイルを作成し、そのファイルが配置されているボリュームを SJM コンテナ内の指定されたターゲット パスにマウントできます。

    ファイルには読み取り権限が必要であり、JSON 形式のマップが含まれている必要があります。 ユーザー定義変数ファイルの例:

    ```
    {
    		      "KEY": "VALUE",
    		      "user_name": "MINION",
    		      "my_password": "PASSW0RD123",
    		      "my_URL": "https://newrelic.com/",
    		      "ETC": "ETC"
    		    }
    ```

    ファイルをホスト上のソース ディレクトリに配置します。 SJM은 파일 이름이 user_define_variables.json이 될 것으로 예상합니다.

    Dockerの例です。

    想定されるターゲット ディレクトリは次のとおりです。 `/var/lib/newrelic/synthetics/variables/`

    ```
    docker run ... -v /variables:/var/lib/newrelic/synthetics/variables:rw ...
    ```

    Kubernetesの例。

    Kubernetes の SJM ポッドにファイルを提供する場合、ユーザーには 2 つのオプションがあります。 以下の可能性があります:

    1. ローカルファイルを渡します。
    2. user_defined_variables.json を含む PersistentVolume を提供します。

    ### ローカルファイルを渡す

    このオプションは、ConfigMap Kubernetes リソースを作成し、それを SJM ポッドにマウントします。

    helm install newrelic/synthetics-job-manager ... --set-file "synthetics.userDefinedVariables.userDefinedFile=\[local-path]/user_defined_variables.json" ...

    ```

     ### Mount a PersistentVolume
    This option requires the user to provide a PersistentVolume that includes the user_defined_variables.json file or a PersistentVolumeClaim to the same. For more details on helm chart installation using a PersistentVolume, follow the instructions at [permanent data storage](/docs/synthetics/synthetic-monitoring/private-locations/job-manager-configuration#permanent-data-storage).
	
    Once the user has prepared a PersistentVolume as described below, launch the SJM, setting the path where the user_defined_variables.json file is located and setting any other `synthetics.persistence` variables as necessary.

    ```

    helm install newrelic/synthetics-job-manger ... --set synthetics.userDefinedVariables.userDefinedPath="variables"

    ```

    ```
  </Collapser>

  <Collapser
    id="passing-env-var"
    title="環境変数として渡す"
  >
    変数は、環境変数を介してそれぞれのコンテナ システムに渡すことができます。 docker例:

    `-e`フラグを使用して、 `USER_DEFINED_VARIABLES`という名前の環境変数を設定し、JSON 形式のマップ文字列の値を指定します。

    ```
    docker run ... -e USER_DEFINED_VARIABLES='{"key":"value","name":"sjm"}' ...
    ```

    Kubernetes の例: `--set-literal`フラグを使用して JSON 形式の文字列を渡します。

    ```
    helm install newrelic/synthetics-job-manager ... --set-literal synthetics.userDefinedVariables.userDefinedJson='{"key":"value","name":"sjm"}' ...
    ```
  </Collapser>
</CollapserGroup>

### スクリプトからユーザー定義の環境変数にアクセスする [#env-vars-scripts]

構成されたユーザー定義の環境変数を参照するには、予約済みの`$env.USER_DEFINED_VARIABLES`に続けて、ドット表記の特定の変数の名前を使用します。

例えば、 `$env.USER_DEFINED_VARIABLES.MY_VARIABLE`

<Callout variant="caution">
  ユーザー定義の環境変数はログから削除されません。 機密情報には[安全な認証情報](/docs/synthetics/new-relic-synthetics/using-monitors/secure-credentials-store-credentials-information-scripted-browsers)機能を使用することを検討してください。
</Callout>

## カスタムノードモジュール [#custom-modules]

カスタム ノード モジュールは、1分間あたりの呼出し回数と SJM の両方で提供されます。 これらを使用すると、カスタマイズされた[ノード モジュール](https://docs.npmjs.com/about-packages-and-modules)のセットを作成し、外形監視用のスクリプト モニター (スクリプトAPIおよびスクリプトbrowser ) で使用できます。

モジュールをセットアップするには

1. ルート フォルダーに[npm の公式ガイドライン](https://docs.npmjs.com/files/package.json)に従って、 `package.json`ファイルを含むディレクトリを作成します。 SJMはpackage.jsonにリストされている依存関係をインストールします。 `dependencies`フィールド。 これらの依存関係は、プライベート外形監視ジョブ マネージャーでモニターを実行するときに使用できます。 以下の例をご覧ください。

<CollapserGroup>
  <Collapser
    id="example-module-directory"
    title="カスタムモジュールのディレクトリ"
  >
    この例では、次のような構造のカスタムモジュールディレクトリを使用しています。

    ```
    /example-custom-modules-dir/
          ├── counter
          │   ├── index.js
          │   └── package.json
          └── package.json            ⇦ the only mandatory file
    ```

    `package.json`は`dependencies`ローカル モジュール (例: `counter` ) とホストされたモジュール (例: `smallest`バージョン`1.0.1` ) の両方として定義します。

    ```
    {
          "name": "custom-modules",
          "version": "1.0.0",           ⇦ optional
          "description": "example custom modules directory", ⇦ optional
          "dependencies": {
            "smallest": "1.0.1",          ⇦ hosted module
            "counter": "file:./counter" ⇦ local module
          }
        }
    ```
  </Collapser>
</CollapserGroup>

2. カスタム モジュール ディレクトリと `package.json` を作成したら、それをdockerおよびKubernetesの SJM に適用します。

   <CollapserGroup>
     <Collapser
       id="docker"
       title="Docker"
     >
       dockerの場合、リリース SJM はディレクトリを `/var/lib/newrelic/synthetics/modules` にマウントします。 例えば：

       ```
       docker run ... -v /example-custom-modules-dir:/var/lib/newrelic/synthetics/modules:rw ...
       ```
     </Collapser>

     <Collapser
       id="kubernetes"
       title="Kubernetes"
     >
       次の項目を完了します。

       1. SJM をリリースし、インストール中にコマンドラインまたは YAML ファイルのいずれかで`persistence.customModules`設定値を設定します。 値には、カスタム モジュール ファイルが存在する外形監視ジョブ マネージャーの永続ボリューム上のサブパスを指定する必要があります。 例えば：

          ```
          helm install ... --set persistence.customModules=<custom-modules-subpath> ...
          ```

       2. カスタムモジュールディレクトリがミニオンポッドで利用可能であることを確認してください。ホストからミニオンにディレクトリをコピーする1つの方法として`kubectl cp`を使用できます。例えば：

          ```
          kubectl cp /example-custom-modules-dir <namespace>/<pod_name>:/var/lib/newrelic/synthetics/modules
          ```
     </Collapser>
   </CollapserGroup>

3. モジュールが正しくインストールされたかどうか、またはエラーが発生したかどうかを確認するには、 [SJM ログの](/docs/synthetics/new-relic-synthetics/private-locations/job-manager-maintenance-monitoring#monitor-docker-logs)`"... Initialization of Custom Modules ..."`というセクションを確認します。 これらのログには、インストレーション プロセスと発生した潜在的なエラーに関する情報を提供する npm インストレーション ログが含まれます。

これで、このプライベートな場所に送信するモニターの[スクリプト](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers)に`"require('smallest');"`を追加できます。

### カスタムモジュールの`package.json`を変更 [#change-package-json]

ローカル モジュールとホスト モジュールに加えて、 [Node.js モジュール](/docs/synthetics/new-relic-synthetics/scripting-monitors/import-nodejs-modules)も利用できます。 SJM で使用されるカスタム モジュールを更新するには、 `package.json`ファイルに変更を加えて、SJM を再起動します。 再起動プロセス中に、SJM は設定の変更を認識し、クリーンアップと再インストール操作を自動的に実行して、更新されたモジュールが確実に適用されるようにします。

<Callout variant="caution">
  ローカル モジュール: `package.json`には任意のローカル モジュールを含めることができますが、これらのモジュールはカスタム モジュール ディレクトリの下のツリー内に存在する必要があります。 ツリー外に保存すると、初期化プロセスが失敗し、SJM を起動した後に[dockerログ](/docs/synthetics/new-relic-synthetics/private-locations/job-manager-maintenance-monitoring#monitor-docker-logs)にエラー メッセージが表示されます。
</Callout>

## データの永久保存 [#permanent-data-storage]

ユーザーは、永続データ ストレージを使用して、 `user_defined_variables.json`ファイルを提供したり、カスタム ノード モジュールをサポートしたりすることができます (プライベートの外形監視ジョブ マネージャーはまだ利用できません)。

### Docker

Dockerに恒久的なデータ保存を設定するには

1. ジョブ マネージャーを起動するホスト上にディレクトリを作成します。 これがソース ディレクトリです。
2. ジョブ マネージャーをリリースし、ソース ディレクトリをターゲット ディレクトリ`/var/lib/newrelic/synthetics`にマウントします。

例：

```
		docker run ... -v /sjm-volume:/var/lib/newrelic/synthetics:rw ...
```

### Kubernetes

Kubernetes に永続的なデータ ストレージを設定するには、ユーザーには 2 つのオプションがあります。

1. 既存の Persistent Volume (PV) に既存の Persistent VolumeClaim (PVC) を指定し、 `synthetics.persistence.existingClaimName`構成値を設定します。

例：

```
		helm install ... --set synthetics.persistence.existingClaimName=sjm-claim ...
```

2. 既存の PersistentVolume (PV) 名を指定し、 `synthetics.persistence.existingVolumeName`構成値を設定します。 Helm はユーザー用の PVC を生成します。

ユーザーはオプションで次の値も設定できます。

* `synthetics.persistence.storageClass`: 既存の PV のストレージ クラス。 指定しない場合、Kubernetes はデフォルトのストレージ クラスを使用します。
* `synthetics.persistence.size`: クレームのサイズ。 設定されていない場合、現在のデフォルトは 2Gi です。

```
		helm install ... --set synthetics.persistence.existingVolumeName=sjm-volume --set synthetics.persistence.storageClass=standard ...
```

## Kubernetes と Docker のサイジングに関する考慮事項 [#kubernetes-sizing]

<Callout variant="tip">
  Docker 固有のサイジングに関する考慮事項は、まもなく利用可能になります。
</Callout>

大規模な環境で作業している場合は、合成モニターを効率的に実行するための最小要件を満たすように、ジョブ マネージャーの構成をカスタマイズする必要がある場合があります。次のような多くの要因が、合成ジョブ マネージャーの展開のサイジング要件に影響を与える可能性があります。

* 予想される使用量に基づいてすべてのランタイムが必要な場合
* モニターの種類 (ping、シンプルまたはスクリプト化されたブラウザー、およびスクリプト化された API) ごとの 1 分あたりのジョブ数
* 約 3 分でタイムアウトするジョブを含む、ジョブの所要時間
* ジョブの失敗数。ジョブが失敗した場合、組み込みの 3/3 再試行ロジックを提供するためにモニターが失敗し始めると、自動再試行がスケジュールされます。これらの追加のジョブは、合成ジョブ マネージャーのスループット要件に追加されます。

以下にリストされているサイジング構成設定に加えて、同じプライベート ロケーション キーを使用して追加の合成ジョブ マネージャーを展開し、複数の環境間でジョブの負荷を分散することができます。

## Kubernetes [#k8s]

Kubernetes 合成ジョブ マネージャーで使用される各ランタイムは、 [ヘルム チャート](https://github.com/newrelic/helm-charts/tree/master/charts/synthetics-job-manager)で値を設定することで個別にサイズを調整できます。

`1`のデフォルト値から`ping-runtime.replicaCount`設定を増やすことで、追加の ping ランタイムを開始して、ping モニター負荷の実行を支援できます。

Node.js API と Node.js ブラウザ ランタイムは、 `parallelism`と`completions`の設定の組み合わせを使用して個別にサイズ設定されます。これらの設定の理想的な構成は、お客様の要件によって異なります。

`parallelism` 設定は、特定のランタイムの同時実行ポッドの数を制御します。`parallelism` 設定は、コンテナ化されたプライベート ミニオン (CPM) の `synthetics.heavyWorkers` 設定と同等です。[リソース要求と制限値](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager/#kubernetes-requirements)に基づいて、この数のポッドを実行するのに十分なリソースが Kubernetes クラスターにあることを確認してください。

`completions` 設定は、 `CronJob` がそのランタイムの別の Kubernetes ジョブを開始する前に、特定のランタイムのポッドの数を完了する必要があるかを制御します。Kubernetes ジョブ (大文字の J) と合成モニター ジョブの違いに注目してください。効率を向上させるには、 `completions` `parallelism` 値の 6 ～ 10 倍に設定する必要があります。これは、Kubernetes ジョブがすべての `completions` が完了するのを待機するため、実行されるポッドの数が `parallelism` 未満になる可能性がある「完了の終わりに近づく」非効率を最小限に抑えるのに役立ちます。

`completions` が 1 より大きい場合、Kubernetes ジョブで定義されたすべての完了 (たとえば 6/6 完了) が満たされるまで、「Completed」ステータスのポッドが `kubectl get pods -n YOUR_NAMESPACE` の出力に表示されたままになります。ポッドのステータスが「完了」または「失敗」の場合、リソースはノードから解放されます。

Kubernetes ジョブの有効期間 5 分 (`kubectl get jobs -n YOUR_NAMESPACE`) は、ポッドが完了するまでにかかる時間と、1 分あたりに実行する必要がある合成ジョブの数 (ジョブ レート) の変動を考慮した控えめな目標です。次の方程式は、各ランタイムの `completions` と `parallelism` の開始点として使用できます。プライベート ロケーション キューの増加の観察に基づいて調整を行う必要がある場合があります。

```m
completions = 300 / avg job duration (s)
parallelism = synthetics jobs per 5 minutes / completions
```

ランタイムが異なれば、合成ジョブの期間と速度も異なる可能性があります。次のクエリを使用して、プライベート ロケーションの平均期間と料金を取得できます。

```sql
# non-ping average job duration by runtime type
FROM SyntheticCheck SELECT average(duration) AS 'avg job duration' WHERE type != 'SIMPLE' AND location = 'YOUR_PRIVATE_LOCATION' FACET type SINCE 1 hour ago

# non-ping jobs per minute by runtime type
FROM SyntheticCheck SELECT rate(uniqueCount(id), 5 minutes) AS 'jobs per 5 minutes' WHERE type != 'SIMPLE' AND location = 'YOUR_PRIVATE_LOCATION' FACET type SINCE 1 hour ago
```

<Callout variant="tip">
  上記のクエリは現在の結果に基づいています。プライベート ロケーションに結果がない場合、またはジョブ マネージャーが最高のパフォーマンスを発揮していない場合、クエリ結果は正確ではない可能性があります。その場合、 `kubectl get jobs -n YOUR_NAMESPACE` 継続時間が少なくとも 5 分 (十分な完了)、キューが増大しない (十分な並列処理) ことが確認されるまで、 `completions` と `parallelism` にいくつかの異なる値を試します。
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        例
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `parallelism=1`

        `completions=1`
      </td>

      <td>
        ランタイムは 1 分あたり 1 つの外形監視ジョブを実行します。 1 つのジョブが完了すると、 `CronJob`設定は次の瞬間に新しいジョブを開始します。 <DNT>**Throughput will be extremely limited with this configuration.**</DNT>
      </td>
    </tr>

    <tr>
      <td>
        `parallelism=1`

        `completions=6`
      </td>

      <td>
        ランタイムは一度に 1 つの外形監視ジョブを実行します。 ジョブが完了すると、新しいジョブがすぐに開始されます。 `completions`設定数のジョブが完了すると、 `CronJob`構成によって新しい Kubernetes ジョブが開始され、完了カウンターがリセットされます。 <DNT>**Throughput will be limited, but slightly better.**</DNT>長時間実行される単一の外形監視ジョブは、このタイプの他の外形監視ジョブの処理をブロックします。
      </td>
    </tr>

    <tr>
      <td>
        `parallelism=3`

        `completions=24`
      </td>

      <td>
        ランタイムは一度に 3 つの外形監視ジョブを実行します。 これらのジョブのいずれかが完了すると、新しいジョブがすぐに開始されます。 `completions`設定数のジョブが完了すると、 `CronJob`構成によって新しい Kubernetes ジョブが開始され、完了カウンターがリセットされます。 <DNT>**Throughput is much better with this or similar configurations.**</DNT>単一の長時間実行される外形監視ジョブが、このタイプの他の外形監視ジョブの処理に及ぼす影響は限定的です。
      </td>
    </tr>
  </tbody>
</table>

合成ジョブの完了に時間がかかる場合、ジョブで 5 分間を埋めるために必要な完了数は少なくなりますが、より多くの並列ポッドが必要になります。同様に、1 分あたりにより多くの合成ジョブを処理する必要がある場合は、より多くの並列ポッドが必要になります。`parallelism` 設定は、1 分あたりに実行できる合成ジョブの数に直接影響します。値が小さすぎるとキューが増大する可能性があります。値が大きすぎると、ノードのリソースが制限される可能性があります。

`parallelism` 設定がうまく機能してキューをゼロに維持している場合は、 `completions` に `300 / avg job duration` から計算される値よりも高い値を設定すると、次のいくつかの方法で効率を向上させることができます。

* CronJob の最小期間である少なくとも 1 分間が合成ジョブで埋められるように、ジョブ期間の変動に対応します。
* 完了サイクルの数を減らして、最後のジョブが完了するまで次の完了セットを開始できない「完了が終わりに近づく」非効率を最小限に抑えます。

`completions` 値が大きすぎないように注意することが重要です。大きすぎると、CronJob で次のような警告イベントが発生します。

```
8m40s       Warning   TooManyMissedTimes     cronjob/synthetics-node-browser-runtime                  too many missed start times: 101. Set or decrease .spec.startingDeadlineSeconds or check clock skew
```

<Callout variant="tip">
  New Relicは、外形監視ジョブ マネージャー ファイルに加えられた変更に対して責任を負わないことを覚えておいてください。
</Callout>
