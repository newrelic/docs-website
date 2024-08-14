---
title: Active Directoryの統合
tags:
  - Active Directory integration
  - New Relic integrations
metaDescription: Install our Active Directory integration to monitor the health of your environment.
freshnessValidatedDate: never
translationType: machine
---

<DNT>Active Directory</DNT>統合を使用すると、ディレクトリ サービス環境の健全性を簡単に監視し、潜在的な問題を積極的に収集できます。

弊社のインフラストラクチャ エージェントを使用して構築された<DNT>Active Directory</DNT>インテグレーションは、最も重要なパフォーマンス データであるオールインワン プレイスを表示できる、事前に構築された一連の<InlinePopover type="dashboards"/>と<InlinePopover type="alerts"/>を提供します。

<img
  src="/images/infrastructure_screenshot_full_active-directory-dashboard.webp"
  title="Active Directory dashboard"
  alt="A screenshot of a dashboard with Active Directory performance metrics."
/>

<figcaption>
  New Relicとの <DNT>Active Directory</DNT> 統合をセットアップした後、箱から出してすぐに、このようなダッシュボードでデータを確認できます。
</figcaption>

このページを最大限に活用するには、環境に適したインストール方法を選択してください。 インストレーション プロセスを開始する前に、 [New Relicアカウントが](https://newrelic.com/signup)必要です。

<Callout variant="tip">
  **ガイド付きインストールを使用して、UI でデータをすばやく確認します**

  ガイド付きインストールは、 <DNT>Active Directory</DNT>サービスを監視するために実行できる単一の CLI コマンドです。 これは、小規模な組織や、New Relic を試してみたい人にとっては良い選択肢です。

  <ButtonGroup>
    <ButtonLink
      role="button"
      to="https://one.newrelic.com/marketplace?state=8f14e646-461e-b010-4675-3a0658bb3d20"
      variant="primary"
    >
      ガイド付きインストール
    </ButtonLink>
  </ButtonGroup>

  より永続的でスケーラブルなソリューションとして、インテグレーションの標準の手動インストールをお勧めします。その方法については、読み続けてください。
</Callout>

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします [#infra]

    <DNT>Active Directory</DNT>統合を使用するには、まず同じホストに[インフラストラクチャ エージェントをインストールする](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/)必要があります。 インフラストラクチャエージェントはホスト自体を監視しますが、次のステップでインストールする統合は、 <DNT>Active Directory</DNT>固有のデータを使用して監視を拡張します。
  </Step>

  <Step>
    ## Active Directory インテグレーションリポジトリのクローンを作成する [#clone]

    CLI で次のコマンドを実行して、 New Relic <DNT>Active Directory</DNT> インテグレーション リポジトリのクローンを作成します。

    ```bash
    git clone https://github.com/newrelic/newrelic-active-directory-integration.git
    ```
  </Step>

  <Step>
    ## 設定ファイルをコピーする [#copy-config]

    関連する構成ファイルをリポジトリからエージェントにコピーし、 `$ROOT_PATH` をリポジトリのクローンを作成したパスに置き換えます。

    ```powershell
    # integrations.d
    Copy-Item -Path "$ROOT_PATH\newrelic-active-directory-integration\integrations.d\*"     -Destination "C:\Program Files\New Relic\newrelic-infra\integrations.d" -Recurse

    # logging.d
    Copy-Item -Path "$ROOT_PATH\newrelic-active-directory-integration\logging.d\*"     -Destination "C:\Program Files\New Relic\newrelic-infra\logging.d" -Recurse
    ```
  </Step>

  <Step>
    ## 統合をインストールする [#install-io]

    関連するダッシュボードとアラートを追加するには、New Relic I/O カタログから[<DNT>Active Directory</DNT>クイックスタートを](https://newrelic.com/instant-observability/active-directory)インストールします。
  </Step>

  <Step>
    ## データを見つけて使用する [#find-date]

    <DNT>Active Directory</DNT>からのテレメトリーのコレクションは、次のようなインフラストラクチャエージェントのディレクトリ構造にあるさまざまな設定ファイルとスクリプト ファイルに依存します。

    ```
    C:\Program Files\New Relic\newrelic-infra\
        ├── integrations.d
        │   ├── windows-active-directory-performance-counters.ps1
        │   ├── windows-active-directory-performance-counters.yml
        │   ├── windows-active-directory-replication-checks.yml
        │   ├── windows-active-directory-replication-failures.ps1
        │   ├── windows-active-directory-replication-partners.ps1
        │   └── windows-active-directory-services.yml
        └── logging.d
            └── windows-active-directory.yml
    ```

    これらの各ファイルは連携して、完全な可観測性フットプリントを表示します。New Relic で得られるテレメトリは、メトリクス、イベント、ログ データで構成されます。
  </Step>
</Steps>

## イベントの詳細

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **EVENT ATTRIBUTE**
        </DNT>
      </th>

      <th>
        <DNT>
          **COUNTER NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `addressBookClientSessions`
      </td>

      <td>
        `\NTDS\AB Client Sessions`
      </td>

      <td>
        接続されたアドレス帳クライアント セッションの数
      </td>
    </tr>

    <tr>
      <td>
        `inboundFullSyncObjectsRemaining`
      </td>

      <td>
        `\NTDS\DRA Inbound Full Sync Objects Remaining`
      </td>

      <td>
        完全同期が完了するまでに残るオブジェクトの数
      </td>
    </tr>

    <tr>
      <td>
        `draInbound`
      </td>

      <td>
        `\NTDS\DRA Inbound Values (DNs only)/sec`
      </td>

      <td>
        他のオブジェクトを参照する DN である受信レプリケーション パートナーから受信したオブジェクト プロパティ値の数
      </td>
    </tr>

    <tr>
      <td>
        `draOutbound`
      </td>

      <td>
        `\NTDS\DRA Outbound Values (DNs only)/sec`
      </td>

      <td>
        アウトバウンド複製パートナーに送信された DN を含むオブジェクト プロパティ値の数
      </td>
    </tr>

    <tr>
      <td>
        `draPendingReplicationSync`
      </td>

      <td>
        `\NTDS\DRA Pending Replication Synchronizations`
      </td>

      <td>
        このサーバーのキューに入れられているがまだ処理されていないディレクトリ同期の数
      </td>
    </tr>

    <tr>
      <td>
        `directoryReadsPerSec`
      </td>

      <td>
        `\NTDS\DS Directory Reads/sec`
      </td>

      <td>
        1 秒あたりのディレクトリ読み取り数
      </td>
    </tr>

    <tr>
      <td>
        `directoryWritesPerSec`
      </td>

      <td>
        `\NTDS\DS Directory Writes/sec`
      </td>

      <td>
        1 秒あたりのディレクトリ書き込み数
      </td>
    </tr>

    <tr>
      <td>
        `directoryNotifyQueueSize`
      </td>

      <td>
        `\NTDS\DS Notify Queue Size`
      </td>

      <td>
        キューに入れられているがまだクライアントに送信されていない保留中の更新通知の数
      </td>
    </tr>

    <tr>
      <td>
        `directoryThreadsInUse`
      </td>

      <td>
        `\NTDS\DS Threads in Use`
      </td>

      <td>
        ディレクトリ サービスが使用している現在のスレッド数
      </td>
    </tr>

    <tr>
      <td>
        `ldapActiveThreads`
      </td>

      <td>
        `\NTDS\LDAP Active Threads`
      </td>

      <td>
        ローカル ディレクトリ サービスの LDAP サブシステムが使用する現在のスレッド数
      </td>
    </tr>

    <tr>
      <td>
        `ldapBindTime`
      </td>

      <td>
        `\NTDS\LDAP Bind Time`
      </td>

      <td>
        最後の LDAP バインドが完了するまでにかかった時間 (ミリ秒)
      </td>
    </tr>

    <tr>
      <td>
        `ldapClientSessions`
      </td>

      <td>
        `\NTDS\LDAP Client Sessions`
      </td>

      <td>
        現在接続されているLDAPクライアントセッションの数
      </td>
    </tr>

    <tr>
      <td>
        `ldapSearchesPerSec`
      </td>

      <td>
        `\NTDS\LDAP Searches/sec`
      </td>

      <td>
        LDAP クライアントが検索操作を実行する速度
      </td>
    </tr>

    <tr>
      <td>
        `ldapSuccessfulBindsPerSec`
      </td>

      <td>
        `\NTDS\LDAP Successful Binds/sec`
      </td>

      <td>
        1 秒あたりの LDAP バインドの数
      </td>
    </tr>

    <tr>
      <td>
        `contextSwitchesPerSec`
      </td>

      <td>
        `\System\Context Switches/sec`
      </td>

      <td>
        コンピューター上のすべてのプロセッサーがあるスレッドから別のスレッドに切り替わる合計速度。
      </td>
    </tr>

    <tr>
      <td>
        `processorQueueLength`
      </td>

      <td>
        `\System\Processor Queue Length`
      </td>

      <td>
        キュー内で実行を待っているスレッドの数
      </td>
    </tr>
  </tbody>
</table>

## Windowsサービス [#windows-services]

<DNT>Active Directory</DNT> Windows サービスの収集は、次の設定ファイルを使用したネイティブ Windows サービス統合を通じて実現されます。

```
windows-active-directory-services.yml
```

このコレクションの結果は、装飾されたラベル `label.primary_app = 'active_directory'`が付いたディメンション メトリックとして保存されます。

## メトリクスの詳細

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **SERVICE NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `ADWS`
      </td>

      <td>
        <DNT>
          Active Directory
        </DNT>

        ウェブサービス
      </td>
    </tr>

    <tr>
      <td>
        `DFS`
      </td>

      <td>
        分散ファイルシステム
      </td>
    </tr>

    <tr>
      <td>
        `DFSR`
      </td>

      <td>
        DFS レプリケーション
      </td>
    </tr>

    <tr>
      <td>
        `DNS`
      </td>

      <td>
        DNSサーバー
      </td>
    </tr>

    <tr>
      <td>
        `Dnscache`
      </td>

      <td>
        DNSクライアント
      </td>
    </tr>

    <tr>
      <td>
        `IsmServ`
      </td>

      <td>
        サイト間メッセージング
      </td>
    </tr>

    <tr>
      <td>
        `kdc`
      </td>

      <td>
        Kerberos キー配布センター
      </td>
    </tr>

    <tr>
      <td>
        `lanmanserver`
      </td>

      <td>
        サーバー
      </td>
    </tr>

    <tr>
      <td>
        `lanmanworkstation`
      </td>

      <td>
        ワークステーション
      </td>
    </tr>

    <tr>
      <td>
        `Netlogon`
      </td>

      <td>
        ネットログオン
      </td>
    </tr>

    <tr>
      <td>
        `NTDS`
      </td>

      <td>
        Active Directory ドメイン サービス
      </td>
    </tr>

    <tr>
      <td>
        `RpcSs`
      </td>

      <td>
        リモート プロシージャ コール (RPC)
      </td>
    </tr>

    <tr>
      <td>
        `SamSs`
      </td>

      <td>
        セキュリティアカウントマネージャー
      </td>
    </tr>

    <tr>
      <td>
        `W32Time`
      </td>

      <td>
        ウィンドウズタイム
      </td>
    </tr>
  </tbody>
</table>

## イベントの詳細

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **EVENT NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **ATTRIBUTE**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `failureCount`
      </td>

      <td>
        指定されたドメイン コントローラーで発生したレプリケーション エラーの合計数を示す整数。
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `failureType`
      </td>

      <td>
        指定されたドメイン コントローラーで発生した最新の種類のレプリケーション障害の文字列表現。
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `firstFailureTime`
      </td>

      <td>
        指定されたドメイン コントローラーで最初に観察された障害を示すタイムスタンプ (

        `MM/dd/yyyy h:mm:ss tt`

        ) 文字列。
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `lastError`
      </td>

      <td>
        指定されたドメイン コントローラーでのレプリケーションの失敗に関して最後に受信したエラー コードを示す整数。
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `server`
      </td>

      <td>
        レプリケーションの失敗が発生したドメイン コントローラーの文字列名。
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `lastReplicationAttempt`
      </td>

      <td>
        サーバーとパートナー間のレプリケーションの最後の試行を示すタイムスタンプ (

        `MM/dd/yyyy h:mm:ss tt`

        ) 文字列。
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `lastReplicationSuccess`
      </td>

      <td>
        サーバーとパートナー間の最後に成功したレプリケーションを示すタイムスタンプ (

        `MM/dd/yyyy h:mm:ss tt`

        ) 文字列。
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `partner`
      </td>

      <td>
        レプリケーションのリモート パートナーの短縮名。
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `server`
      </td>

      <td>
        のローカルサーバーの短縮名
      </td>
    </tr>
  </tbody>
</table>

## Windowsイベントログ [#event-logs]

<DNT>Active Directory</DNT> Windows イベントの収集は、次の設定ファイルを使用して、インフラストラクチャエージェント上の統合されたログフォワーダーで実行されます。

```
windows-active-directory.yml
```

この収集の結果は、装飾されたラベル `logtype = 'active_directory'`が付いたログとして保存されます。

## ログの詳細

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **CHANNEL**
        </DNT>
      </th>

      <th>
        <DNT>
          **EVENT ID**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4609`
      </td>

      <td>
        Windows がシャットダウンしています
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4616`
      </td>

      <td>
        システム時刻が変更されました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4625`
      </td>

      <td>
        アカウントがログオンに失敗しました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4648`
      </td>

      <td>
        明示的な資格情報を使用してログオンが試行されました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4649`
      </td>

      <td>
        リプレイアタッチが検出されました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4950`
      </td>

      <td>
        IPsec メイン モード セキュリティ アソシエーションが確立されました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4697`
      </td>

      <td>
        サービスがシステムにインストールされました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4713`
      </td>

      <td>
        Kerberos ポリシーが変更されました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4714`
      </td>

      <td>
        暗号化データ回復ポリシーが変更されました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4719`
      </td>

      <td>
        システム監査ポリシーが変更されました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4720`
      </td>

      <td>
        ユーザーアカウントが作成されました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4723`
      </td>

      <td>
        アカウントのパスワードを変更しようとしました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4724`
      </td>

      <td>
        アカウントのパスワードをリセットしようとしました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4725`
      </td>

      <td>
        ユーザーアカウントが無効になりました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4726`
      </td>

      <td>
        ユーザーアカウントが削除されました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4738`
      </td>

      <td>
        ユーザーアカウントが変更されました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4739`
      </td>

      <td>
        ドメインポリシーが変更されました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4740`
      </td>

      <td>
        ユーザーアカウントがロックアウトされました
      </td>
    </tr>

    <tr>
      <td>
        セキュリティ
      </td>

      <td>
        `4781`
      </td>

      <td>
        コンピューターアカウントが作成されました
      </td>
    </tr>

    <tr>
      <td>
        システム
      </td>

      <td>
        `1083`
      </td>

      <td>
        セキュリティ記述子のバージョン番号を特定できませんでした
      </td>
    </tr>

    <tr>
      <td>
        システム
      </td>

      <td>
        `1202`
      </td>

      <td>
        セキュリティ ポリシーは警告とともに広められました。0x534 : アカウント名とセキュリティ ID 間のマッピングは行われませんでした
      </td>
    </tr>

    <tr>
      <td>
        システム
      </td>

      <td>
        `1265`
      </td>

      <td>
        次の書き込み可能なディレクトリ パーティションのレプリケーション リンクを確立しようとして失敗しました
      </td>
    </tr>

    <tr>
      <td>
        システム
      </td>

      <td>
        `1311`
      </td>

      <td>
        知識整合性チェッカー (KCC) は、次のディレクトリ パーティションに関する問題を検出しました。
      </td>
    </tr>

    <tr>
      <td>
        システム
      </td>

      <td>
        `1388`
      </td>

      <td>
        過去 [number] 日間。 1 つ以上のディレクトリ パーティションでレプリケーション エラーが発生したため、現在のドメイン コントローラ上の指定された名前付けコンテキストのレプリケーションが無効になりました
      </td>
    </tr>

    <tr>
      <td>
        システム
      </td>

      <td>
        `1645`
      </td>

      <td>
        <DNT>
          Active Directory
        </DNT>

        ドメイン サービスは、ドメインが「アドミニストレーター」アカウントのデフォルトのパスワードをまだ使用していることを検出しました。
      </td>
    </tr>

    <tr>
      <td>
        システム
      </td>

      <td>
        `5805`
      </td>

      <td>
        コンピューター [コンピューター名] からのセッションセットアップの認証に失敗しました
      </td>
    </tr>

    <tr>
      <td>
        システム
      </td>

      <td>
        `5807`
      </td>

      <td>
        過去 [number] 日間。フォレスト内でいくつかのレプリケーション エラーが発生しました。フォレスト内でネットワークまたは接続の問題が発生している可能性があります
      </td>
    </tr>
  </tbody>
</table>

## ソースコードを確認してください [#source-code]

この統合はオープンソース ソフトウェアです。つまり、 [ソース コードを参照し](https://github.com/newrelic/newrelic-active-directory-integration) て改善点を送信したり、独自のフォークを作成してビルドしたりすることができます。
