---
title: ネットワークモニタリングのベストプラクティス
tags:
  - Network monitoring
  - Best practices
metaDescription: Review best practices for network monitoring.
freshnessValidatedDate: '2024-01-18T00:00:00.000Z'
translationType: human
---

ネットワークモニタリングでは、New Relicはエージェントを利用してネットワークテレメトリーデータを収集します。このデータは、ネットワークパフォーマンスの監視、ボトルネックの特定、問題のトラブルシューティングに使用できます。システムアーキテクチャーとデプロイメントに基づいて、ネットワークモニタリングエージェントをデプロイするためのベストプラクティスをご覧ください。

## デプロイメントに関する考慮事項 [#deployment-considerations]

このガイドでは、以下の要件を満たす一般的なネットワークアーキテクチャーについて説明します。

* SNMPポーリングとSNMPトラップ収集
* ネットワークデバイスからのSyslog収集
* NetFlow v5、NetFlow v9、IPFIX、sFlowプロトコルでのネットワークフローの収集
* 地理的に離れた複数のサイトのサポート

## アーキテクチャーに関する考慮事項 [#architectural-considerations]

### エージェントのタスク

個々のエージェントのタスクに応じて、ネットワークデプロイメントの設計が決まります。従うべき基本ルールを以下に紹介します。

* SNMPデータを収集するエージェントは、デフォルトでSNMPトラップを受信することもできます
* Syslogデータを受信するエージェントは、独自に実行する必要があります
* ネットワークフローデータを受信するエージェントは、収集されるフローテンプレートのタイプに基づいて分離する必要があります

### ネットワークフローとSyslogエージェント [#network-flow-and-syslog-agents]

ネットワークフローとSyslogエージェントを使用する場合、カスタム設定ファイルは必要ありません。すべてのエージェント設定は実行時にフラグを介して渡されるため、エージェントからのデフォルト設定は問題なく機能します。

ただし、設定ファイルにデバイスセクションのエントリを指定しない場合、New Relic APIに送信される結果には、各パケット内のIPアドレスからDNS経由で解決された[`device_name`](/docs/network-performance-monitoring/advanced/advanced-config/#snmp-base-yml-template)が使用されます。実行時にカスタムDNSサーバーの場所を指定できますが、タグ付けによる完全な制御のためには、[`flow_only`](/docs/network-performance-monitoring/advanced/advanced-config/#flow_only-attribute)設定を`true`に設定して、デバイスセクションに独自のエントリを指定する必要があります。これは、New Relic APIに送信される名前が、同じデバイスをポーリングするSNMPから送信される名前と一致するように、管理者が通常行います。

### 地理 [#geography]

最新のネットワークでは、SNMPおよびICMP（ping）プロトコルの優先順位が下がっているため、往復時間で遅延が長くなる可能性があります。タイムアウトによるポーリングシナリオの失敗を防ぐため、エージェントをターゲットデバイスの近くに作成する必要があります。

### スケールの計算 [#compute-scale]

個々のエージェントは通常、非常に小さなホストでホストされていますが、[KTranslateコンテナ要件](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-requirements)で概説されている最小限の要件があります。ただし、大規模なポーリングシナリオでは、ホストのCPUを拡張する必要がある場合があります。エージェントのCPUフットプリントを大きく拡張する主な理由は、タスクに提示される負荷の量です。このような状況では、通常、コストがかかるホストの合計サイズを増やすよりも、複数のエージェントを実行して負荷分散する方が賢明です。

### 一般的なアーキテクチャーの例 [#common-architecture]

<SideBySide>
  <Side>
    この図は、次のようなネットワーキングアーキテクチャーの例を示しています。

    * 各地理的ロケーションには、データを収集してNew Relicへの転送に使用される独自のローカルエージェントがあります

      * <DNT>
          **DC_01 (AMER)**
        </DNT>

        ：

        * ニューヨーク市のDC_01ロケーションに、サービスを提供する1つのホスト上の3つのエージェント

        * コンテナはSNMPポーリング、NetFlow v5収集、Syslog収集を処理します

        * <DNT>
            **Consideration**
          </DNT>

          ：このホストにはクラスBのプライベートサブネット（/16）が含まれています。ジョブを完了するための時間を確保するには、検出ターゲットを管理可能なサブネットサイズに分割する必要があります。

      * <DNT>
          **OFFICE_01 (APJ)**
        </DNT>

        ：

        * オーストラリア、シドニーのOFFICE_01ロケーションに、サービスを提供する1つのホスト上の1つのエージェント
        * コンテナは、/24サブネットに対する検出を使用して、SNMPポーリングとSNMPトラップ収集を処理します。

      * <DNT>
          **DC_02 (EMEA)**
        </DNT>

        ：

        * アイルランド、ダブリンのDC_02ロケーションに、サービスを提供する1つのホスト上の3つのエージェント

        * コンテナはNetFlow v9、IPFIX、sFlowコレクションを処理し、それぞれがホスト上の異なるリスニングポートをターゲットとします

        * <DNT>
            **Consideration**
          </DNT>

          ：このホストにはさらに大きなクラスAプライベートサブネット（/8）がありますが、この場所では検出の必要がないため、ジョブを拡張する必要はありません。1秒あたりのフロー数によっては、将来的に追加のエージェントにスケールアウトする必要が生じる可能性があります。
  </Side>

  <Side>
    <img
      title="Common network architecture diagram"
      alt="Diagram to visualize common network architecture"
      src="/images/network_diagram_common-architecture.webp"
      width="80%"
      height="80%"
    />
  </Side>
</SideBySide>

## デプロイメントの維持 [#maintaining-deployment]

初期インストール後、ネットワーク監視オブザーバビリティフットプリントは、さまざまな技術を使用して維持できます。これには、設定ファイルの変更をAnsibleなどのツールと統合することや、バージョン管理をサポートするためのアーキテクチャーを中心としたGitOpsパイプラインの構築や、外部チームがレビューのために変更を送信できる「ゲスト」オプションが含まれます。

継続的なメンテナンスでの最も一般的なニーズは、ターゲットデバイスのリストを正確に保つことです。3つの主要な検出方法を使用して、これを実行できます。

<Tabs>
  <TabsBar>
    <TabsBarItem id="auto-discovery">
      自動検出
    </TabsBarItem>

    <TabsBarItem id="man-discovery">
      手動検出
    </TabsBarItem>

    <TabsBarItem id="man-device-add">
      手動によるデバイスの追加
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="auto-discovery">
      自動検出は、KTranslateエージェントがIPアドレスや範囲のターゲットリストをスキャンし、活性プローブを実行し、MIB-2システムMIBの基本的なSNMPウォークを実行して、デバイスと既知のSNMPプロファイルの照合を試みるために使用されるプロセスです。

      エージェントにはエージェントランタイムフラグ（`-snmp_discovery_min`および`-snmp_discovery_on_start`）が埋め込まれており、定期的なSNMP検出イベントのスケジュールを作成できます。これにより、設定ファイルの`discovery`セクションのターゲットに対する検出ジョブが自動化され、新しいデバイスでファイルが自動更新され、変更を受け入れるためにサービスが更新されます。

      ### 利点

      * 既知のIP範囲とSNMPコミュニティ文字列のハンズオフ検出。

      * 各デバイスの適切なSNMPプロファイルへの自動相関。

      * 設定ファイルを破壊する可能性のある不適切な設定を防ぐための安全メカニズムが設けられている。

        ### 欠点

      * 設定ファイルの`discovery`セクションに、IPアドレスとSNMPコミュニティ文字列/V3認証の既存のターゲットリストが必要。

      * 大規模なサブネットはタイムアウトのリスクがある（/16以下を推奨）。

      * 設定ファイルでデバイス固有の`user_tags`を使用するチームは、新しいデバイスのタグが更新されるように追加作業が必要。

        ### 例

        これは、New Relic UIを通じてガイド付きインストールを実行する場合に見られる、ネイティブ設定パターンです。

        ```yml
        devices: {}
        trap:
          listen: '0.0.0.0:1620'
        discovery:
          cidrs:
              - 192.168.0.0/24
          ignore_list: []
          debug: false
          ports:
              - 161
          default_communities:
              - public
          default_v3: null
          add_devices: true
          add_mibs: true
          threads: 4
          replace_devices: true
          check_all_ips: true
          use_snmp_v1: false
        global:
          poll_time_sec: 300
          mib_profile_dir: /etc/ktranslate/profiles
          mibs_enabled:
              - IF-MIB
          timeout_ms: 3000
          retries: 0
        ```

        関連付けられたDocker実行コマンドは次のようになり、`$UNIQUE_NAME`、`$YOUR_NR_LICENSE_KEY`、および`$YOUR_NR_ACCOUNT_ID`が置き換えられます。

        ```shell
        docker run -d --name ktranslate-$UNIQUE_NAME --restart unless-stopped --pull=always -p 162:1620/udp \
          -v `pwd`/snmp-base.yaml:/snmp-base.yaml \
          -e NEW_RELIC_API_KEY=$YOUR_NR_LICENSE_KEY \
        kentik/ktranslate:v2 \
          -snmp /snmp-base.yaml \
          -nr_account_id=$YOUR_NR_ACCOUNT_ID \
          -metrics=jchf \
          -tee_logs=true \
          -service_name=$UNIQUE_NAME \
          -snmp_discovery_on_start=true \
          -snmp_discovery_min=180 \
          nr1.snmp
        ```
    </TabsPageItem>

    <TabsPageItem id="man-discovery">
      手動検出では自動検出と同じメカニズムを使用しますが、より詳細な制御が可能になります。手動検出を使用すると、カスタムエージェントを個別に実行できます。つまり、いつでも実行でき、必要に応じて結果を確認して操作できます。これは、タグ付けが普及している環境や、ネットワークに新しいデバイスを追加する集中型チームからの制御が十分に行われている環境に推奨される方法です。これにより、時間がかかり、中断を伴う完全なサブネットスキャンの必要性が軽減されます。

      ### 利点

      * タグの装飾を含め、ターゲットと結果を完全に制御。

      * 監視対象フットプリントの範囲に含まれない可能性のあるデバイスを除外する。

      * 各デバイスの適切なSNMPプロファイルへの自動相関。

      * 設定ファイルを破壊する可能性のある不適切な設定を防ぐための安全メカニズムが設けられている。

        ### 欠点

      * ネットワーク/SNMP接続が適切にテストされていることを確認するため、管理者は実稼働エージェントが実行されているのと同じホストから、エージェントをオンデマンドで実行する必要がある

      * 手動プロセス検出結果を実稼働設定ファイルに移動し、新しい設定をロードするために実稼働エージェントを再起動する必要がある

        ### 例

        この検出方法は、KTranslateエージェントの元のデプロイメントオプションに従います。大まかに言えば、検出プロセスは次のとおりです

      1. 最新バージョンのエージェントイメージをローカルマシンにプルする。
      2. サンプルの`snmp-base.yaml`設定ファイルをイメージからローカルマシンにコピーする。
      3. 設定ファイルを編集して、`cidrs`と`default_communities`に必要な設定を使用して`discovery`検出セクションを更新する。
      4. アドホック検出ジョブを実行する短期間のエージェントを起動する。
      5. 設定ファイルで、結果として得られるデバイスに必要な変更を編集する。
      6. 検出設定ファイルからの新しいデバイスを実稼働エージェント設定ファイルにコピーする。
      7. 実稼働エージェントを再起動して、新しい設定をロードする。

         この方法を使用するには、[手動コンテナ設定](/docs/network-performance-monitoring/setup-performance-monitoring/snmp-performance-monitoring/#manual-container-setup)の手順に従ってください。
    </TabsPageItem>

    <TabsPageItem id="man-device-add">
      最後のオプションは、検出プロセス全体をスキップし、手動でデバイスを実稼働設定ファイルに直接追加することです。標準の検出オプションによりデバイスがそのプロファイルに自動的に照合され、設定ファイルが正しくフォーマットされていることを確認するため、このパターンが実際に使用されていることはほとんどありません。

      ### 利点

      * デバイスの設定とタグの装飾を完全に制御する。

        ### 欠点

      * 設定での設定ミスのリスクは中程度。この方法では、デバイスのシステムオブジェクト識別子（SysOID）を把握し、有効にするMIBを特定できるように、デバイスがターゲットにするプロファイルを理解している必要がある（すべて検出で自動化）。

      * 新しい設定をロードするには、同様に実稼働エージェントの再起動が必要。

        ### 例

        以下に、APC UPSを正常に監視するために必要なデバイス設定の例を示します。

        ```yml
        devices:
          ups_snmpv2c__10.10.0.201:
            device_name: ups_snmpv2c
            device_ip: 10.10.0.201
            snmp_comm: public
            oid: .1.3.6.1.4.1.318.1.3.27
            mib_profile: apc_ups.yml
            provider: kentik-ups
            user_tags:
              owning_team: dc_ops
        ...
        global:
        ...
          mibs_enabled:
            - IF-MIB
            - PowerNet-MIB_UPS
            - UPS-MIB
        ```

        <Callout variant="important">
          `global.mibs_enabled` MIBのポーリングを開始するには、更新する必要があります。デバイスを追加する際は、[関連するSNMPプロファイル](https://github.com/kentik/snmp-profiles/tree/main/profiles/kentik_snmp)全体で見つかった個別のMIB名のリストを使用して、この設定が更新されていることを確認する必要があります。
        </Callout>

        必要な設定については、[デバイス](/docs/network-performance-monitoring/advanced/advanced-config/#devices)および[グローバルブロック](/docs/network-performance-monitoring/advanced/advanced-config/#global)に関するドキュメントに詳しく説明されています。
    </TabsPageItem>
  </TabsPages>
</Tabs>
