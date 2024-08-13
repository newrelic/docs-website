---
title: AWS System Manager Distributor
metaDescription: 'New Relic''s AWS System Manager Distributor monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: '2024-02-28T00:00:00.000Z'
translationType: machine
---

[AWS System Manager Distributor](https://docs.aws.amazon.com/systems-manager/latest/userguide/distributor.html)の統合を介して、ワンクリックで New Relic のインフラストラクチャ エージェントを AWS EC2 インスタンスにインストールします。このドキュメントでは、統合機能、その有効化方法、およびレポートできるデータについて説明します。

## 特徴 [#features]

ワンクリックでさまざまな AWS インスタンスからテレメトリ データを収集して New Relic に送信します。New Relic の AWS System Manager Distributor 統合により、当社のインフラストラクチャ エージェントが AWS インスタンスにインストールされ、サービスの迅速な監視、受信データのクエリ、およびダッシュボードの構築が可能になるため、システムを一目で確認できます。

## 前提条件 [#prereqs]

[AWS Systems Manager のドキュメント](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html) で AWS が推奨するセットアップを完了して、ロール、ユーザー アカウント、アクセス許可、初期リソースを構成します。

## 統合をアクティブ化する [#integration]

AWS Systems Manager コンソールを使用して、 <DNT>**New Relic infrastructure agent**</DNT>ディストリビュータ パッケージを 1 回だけインストールまたは更新することも、インストール スケジュールを設定することもできます。

* ワンタイム インストレーションを設定すると、

  <DNT>
    **Distributor package**
  </DNT>

  は[AWS Systems Manager の機能である AWS Systems Manager Run Command](https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html)を使用してインストレーションを実行します。

* パッケージのインストールまたは更新をスケジュールすると、ディストリビューターは [AWS Systems Manager State Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html) を使用してインストールまたは更新します。

New Relic は、EC2 を監視するための自動プロセスも提供します。 [こちらから](/whats-new/2023/08/whats-new-08-08-automatic-ec2-monitoring-through-nr-agent/)ご覧いただけます。

## エージェントをインストールまたは更新する [#install-update]

1. AWS Systems Manager[コンソール](https://console.aws.amazon.com/systems-manager)を開きます。 ナビゲーション ペインで、 <DNT>**Distributor**</DNT>を選択し、 <DNT>**Third party**</DNT>を選択して、 <DNT>**New Relic infrastructure agent**</DNT>タイルを選択します。

2. インストレーションモードを選択します。 <DNT>**New Relic infrastructure agent**</DNT>パッケージを 1 回だけインストールまたは更新することも、インストールをスケジュールすることもできます。 <DNT>**Distributor packages**</DNT>のインストールの詳細については、 [AWS Systems Manager ディストリビューターのドキュメントを](https://docs.aws.amazon.com/systems-manager/latest/userguide/distributor-working-with-packages-deploy.html)参照してください。

3. <DNT>**Action**</DNT>には、 <DNT>**Install**</DNT>を選択します。

4. <DNT>**Installation type**</DNT>については、 <DNT>**Uninstall and reinstall**</DNT>のいずれかを選択します。パッケージは完全にアンインストールされ、その後再インストールされます。 New Relic エージェントは、再インストールが完了するまで使用できません<DNT>**In-place update**</DNT> 。 アプリケーションは更新プロセス中も引き続き利用できます。

5. <DNT>**Additional Arguments**</DNT>には、以下に紹介するコードを貼り付けます。 必ず`YOUR_NEWRELIC_LICENSE_KEY` [New Relic API キー](/docs/apis/intro-apis/new-relic-api-keys)に置き換えてください。

   ```
   {
     "SSM_NR_LICENSE_KEY" : "YOUR_NEWRELIC_LICENSE_KEY"
   }
   ```

   以下に示すように、サンプル変数を**Additional Arguments** \[追加の引数]で指定することもできます。

   ```
   { "SSM_NR_LICENSE_KEY" : "YOUR_NEWRELIC_LICENSE_KEY",
    "SSM_NRIA_METRICS_NETWORK_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_PROCESS_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_STORAGE_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_SYSTEM_SAMPLE_RATE" : "SOME_INTEGER_VALUE", 
    "SSM_NRIA_METRICS_NFS_SAMPLE_RATE" : "SOME_INTEGER_VALUE" }
   ```

   指定しない場合は、 [デフォルト値が](https://github.com/newrelic/infrastructure-agent/blob/master/assets/examples/infrastructure/newrelic-infra-template.yml.example)使用されます。

6. <DNT>**Targets**</DNT>セクションで、タグを指定するか、インスタンスまたはデバイスを手動で選択するか、リソース グループを指定することにより、この操作を実行する管理対象ノードを選択します。 リストに管理対象ノードが表示されない場合は、 [これらの AWS ドキュメント を](https://docs.aws.amazon.com/systems-manager/latest/userguide/troubleshooting-managed-instances.html)参照してください。

7. <DNT>**Concurrency**</DNT>の<DNT>**Rate Control**</DNT>には、コマンドを同時に実行するターゲットの数または割合を指定します。

   <Callout variant="tip">
     タグまたはリソース グループを指定してターゲットを選択し、ターゲットにする管理対象ノードの数がわからない場合は、パーセンテージを指定して、ドキュメントを同時に実行できるターゲットの数を制限します。
   </Callout>

8. <DNT>**Error threshold**</DNT>には、管理対象ノードの数または割合でコマンドが失敗した後、他のターゲットでのコマンドの実行をいつ停止するかを指定します。 たとえば、3 つのエラーを指定した場合、Systems Manager は 4 番目のエラーを受信したときにコマンドの送信を停止します。 コマンドを処理中の管理対象ノードもエラーを送信する可能性があります。

9. <DNT>**Verify the installation**</DNT>。インストレーションを実行した後、コマンド ステータス領域で進行状況を確認します。 「成功」ステータスが表示されたら、インストールが成功したことを意味します。

10. [UI](one.newrelic.com)でアプリのデータを調べます。

## 構成とポーリング [#configure-polling]

[構成オプション](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations)を使用して、ポーリング頻度とフィルターデータを変更できます。

AWS 統合の[デフォルトのポーリング情報](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations):

* New Relicのポーリング間隔：5分
* Amazon CloudWatchのデータ間隔：1分または5分

## データを見つけて使用する

New Relic Infrastructureエージェントをインストールした後、 [インスタンスからのデータ フローを調整および調整できます](/docs/infrastructure/infrastructure-monitoring/get-started/get-started-infrastructure-monitoring)。

データの検索方法の詳細については、 [「AWS インテグレーションの概要」](/docs/infrastructure/amazon-integrations/get-started/introduction-aws-integrations/#insights)を参照してください。
