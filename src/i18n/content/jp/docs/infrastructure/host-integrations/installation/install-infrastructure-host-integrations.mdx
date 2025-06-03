---
title: オンホストインテグレーション：インストレーションと設定
tags:
  - Integrations
  - On-host integrations
  - Installation
metaDescription: Details about the New Relic on-host infrastructure integrations for third-party services that work in tandem with the infrastructure agent.
freshnessValidatedDate: never
translationType: human
---

当社の[オンホストインテグレーション](/docs/infrastructure/host-integrations/get-started/introduction-host-integrations)の一部は、特定の方法で構築され、Infrastructureエージェントと密接にバンドルされているため、インストールおよび設定プロセスが類似しています。

このドキュメントには、これらのタイプのインテグレーションの基本的なインストール手順が含まれています。これらのインテグレーションの仕組みに関する技術的な詳細については、[オンホストインテグレーションデータレポート](/docs/infrastructure/host-integrations/understand-use-data/host-integration-data-collection-reporting)を参照してください。

## インストレーションの方法 [#install]

サービスは単一の物理ホストやVM、KubernetesやAmazon ECSでオーケストレーションされたコンテナで実行できます。目的のインストール方法を選択します。

インテグレーションの基本的なインストールを行った後、特定のインテグレーションのドキュメントに戻って設定手順を一読する必要があります。

### オーケストレーションされた環境 [#orchestrated]

コンテナ化された、オーケストレーション環境向けのオプション：

* <img
    style={{ width: '32px', height: '32px', verticalAlign: 'middle'}}
    class="inline"
    title="Kubernetes"
    alt="Kubernetes"
    src="/images/os_icon_k8.webp"
  />

  [Kubernetes にオンホスト インテグレーションをインストールする](/docs/integrations/kubernetes-integration/link-apps-services/monitor-services-running-kubernetes)

* <img
    style={{ width: '32px', height: '32px', verticalAlign: 'middle'}}
    class="inline"
    title="ECS"
    alt="ECS"
    src="/images/os_icon_ecs.webp"
  />

  [Amazon ECSでオンホストインテグレーションをインストール](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs)（EC2起動タイプ）

### VMまたはオンプレミスホストでの実行 [#standard]

シナリオを選択してください。

<CollapserGroup>
  <Collapser
    id="windows"
    title={<>MSIファイルを使用してインストール（<img src="/images/os_icon_windows.webp" title="Windows" alt="Windows" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>Windows）</>}
  >
    インストールするには、以下の手順に従います。

    1. まだ無い場合は、[Infrastructureエージェントをインストールしてください](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic)。

    2. 必要なインテグレーション用の最新の.MSIインストーライメージを、[当社のリポジトリから](https://download.newrelic.com/infrastructure_agent/windows/integrations/)ダウンロードします。

    3. アドミニストレーターのアカウントで、絶対パスを使用してインストールスクリプトを実行します。

       ```
       msiexec.exe /qn /i PATH\TO\integration-name.msi
       ```

    4. インテグレーションのドキュメントに戻り、設定手順を完了します。
  </Collapser>

  <Collapser
    id="apt"
    title={<>aptでインストール（<img src="/images/os_icon_debian.webp" title="Debian icon" alt="Debian.webp" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>Debian、<img src="/images/os_icon_ubuntu.webp" title="ubuntu icon" alt="ubuntu icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>Ubuntu）</>}
  >
    `apt`を使用してインテグレーションをインストールするには、次の手順を実行します。

    1. まだ無い場合は、ご利用のオペレーティングシステムに合わせた[Infrastructureエージェントをインストールしてください](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic)。

    2. コマンドラインから、以下を実行してください。

       ```
       sudo apt-get update
       ```

    3. 以下のコマンドを実行します。コマンドの`INTEGRATION_FILE_NAME`は、インテグレーションのファイル名を表します。詳しくは、[インテグレーションのドキュメンテーション](/docs/integrations/host-integrations/host-integrations-list)を参照してください。

       ```
       sudo apt-get install INTEGRATION_FILE_NAME
       ```

    4. インテグレーションのドキュメントに戻り、設定手順を完了します。
  </Collapser>

  <Collapser
    id="yum"
    title={<>yumでインストール（<img src="/images/os_icon_amazon-linux.webp" title="amazon linux.webp" alt="amazon linux.webp" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>Amazon Linux、<img src="/images/os_icon_centos.webp" title="centos icon" alt="centos icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>CentOS、<img src="/images/os_icon_redhat.webp" title="redhat icon" alt="redhat icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>RHEL）</>}
  >
    `yum`を使用してインテグレーションパッケージをインストールするには、次の手順を実行します。

    1. まだ無い場合は、ご利用のオペレーティングシステムに合わせた[Infrastructureエージェントをインストールしてください](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic)。

    2. コマンドラインから、以下を実行してください。

       ```
       sudo yum -q makecache -y --disablerepo='*' --enablerepo='newrelic-infra'
       ```

    3. 以下のコマンドを実行します。コマンドの`INTEGRATION_FILE_NAME`は、インテグレーションのファイル名を表します。詳しくは、[特定のオンホストインテグレーション](/docs/infrastructure/host-integrations/host-integrations-list)を参照してください。

       ```
       sudo yum install INTEGRATION_FILE_NAME
       ```

    4. インテグレーションのドキュメントに戻り、設定手順を完了します。
  </Collapser>

  <Collapser
    id="zypper"
    title={<>zypperでインストール（<img src="/images/os_icon_suse.webp" title="suse icon" alt="suse icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>SLES）</>}
  >
    以下の手順に従い、zypper でオンホストのインテグレーションをインストールしてください。

    1. まだ無い場合は、ご利用のオペレーティングシステムに合わせた[Infrastructureエージェントをインストールしてください](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic)。

    2. コマンドラインから、以下を実行してください。

       ```
       sudo zypper -n ref -r newrelic-infra
       ```

    3. 以下のコマンドを実行します。コマンドの`INTEGRATION_FILE_NAME`は、インテグレーションのファイル名を表します。詳しくは、[インテグレーションのドキュメンテーション](/docs/integrations/host-integrations/host-integrations-list)を参照してください。

       ```
       sudo zypper -n install INTEGRATION_FILE_NAME
       ```

    4. インテグレーションのドキュメントに戻り、設定手順を完了します。
  </Collapser>

  <Collapser
    id="tarball"
    title={<>tarballでインストール（<img src="/images/os_icon_linux.webp" title="Linux" alt="Linux icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>その他のディストリビューション）</>}
  >
    <Callout variant="tip">
      [ディストリビューションパッケージマネージャを使用して、Infrastructureエージェントをインストールすることを](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/install-infrastructure-linux-using-package-manager)お勧めします。[エージェントを手動でインストールする](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/tarball-manual-install-infrastructure-linux)場合は、用意されているtarファイルからオンホストインテグレーションをインストールすることもできます。
    </Callout>

    手動のインストールプロセスは、自動化されていません。手動インストールを選択した場合、異なるファイルを正しいフォルダに入れると共に、エージェントがすべてのインテグレーションを実行する権限を保有していることを確認する必要があります。

    Tarファイルからインテグレーションをインストールするには：

    1. [tarball リポジトリ](https://download.newrelic.com/infrastructure_agent/binaries/linux/amd64/)からパッケージ化されたインテグレーション ファイルをダウンロードします。

    2. エージェントがインテグレーションの定義、設定、および実行ファイルを見つけることができるように、当社の[インテグレーションのファイル構造と配置ルール](/docs/integrations/integrations-sdk/getting-started/integration-file-structure-activation)に従ってTarファイルを解凍します。

    3. 定義ファイルを含むバイナリを[エージェントディレクトリ](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/tarball-manual-install-infrastructure-linux#agent-directory)の`newrelic-integrations`または`custom-integrations`に配置します。

    4. インテグレーションの設定ファイルを[プラグインディレクトリ](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/tarball-manual-install-infrastructure-linux#configure-plugin)の下に配置します。

    5. インテグレーションのドキュメントに戻り、設定手順を完了します。インテグレーションでJMXツールを使用する必要がある場合は、以下を参照してください。

       `nrjmx`ツールが必要なインテグレーションについては、次の追加の指示に従います。

       #### New Relic JMX ツールの使用 [#nrjmx]

       一部のインテグレーション（[JMX](/docs/integrations/host-integrations/host-integrations-list/jmx-monitoring-integration)、[Cassandra](/docs/integrations/host-integrations/host-integrations-list/cassandra-monitoring-integration)、[Kafka](/docs/integrations/host-integrations/host-integrations-list/kafka-monitoring-integration)など）には、`nrjmx`ツールが必要です。インテグレーションでこのツールが必要な場合は、[当社のリポジトリ](https://download.newrelic.com/infrastructure_agent/binaries/linux/noarch/)からダウンロードして解凍します。

       <Callout variant="important">
         `nrjmx` には、Java 8またはそれ以降が必要です。
       </Callout>

       JMXインテグレーションバージョン2.3.3以上、およびCassandraインテグレーションバージョン2.3.0以上では、`nrjmx`ツールは依存関係として含まれています。このため、パッケージマネージャを使用する場合、`nrjmx`ツールを手作業でインストールする必要はありません。

       `nrjmx`がすでにインストールされており、`nri-jmx`をインストールする場合、当社のJMXツールはすでにインストールされたバージョンを保持します。`nrjmx`がまだインストールされていない場合、最新の`nrjmx`リリースを取得します。

       デフォルトでは、`nrjmx`の場所は`/usr/bin/nrjmx/*`です。別の場所にインストールするには、`NR_JMX_TOOL`環境変数に新しいパスを設定します。
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## エージェントの更新 [#upgrade]

オンホストインテグレーションが最新の状態であり続けるよう、通常の手順に従い[オンホストのインテグレーションパッケージをアップデートしてください](/docs/infrastructure/host-integrations/installation/update-infrastructure-host-integration-package)。

## 技術的詳細 [#technical-details]

これらのインテグレーションは、同じファイル構造と設定構造で構築されます。その構造とデータの報告方法の詳細については、[データの報告](/docs/infrastructure/host-integrations/understand-use-data/host-integration-data-collection-reporting)を参照してください。
