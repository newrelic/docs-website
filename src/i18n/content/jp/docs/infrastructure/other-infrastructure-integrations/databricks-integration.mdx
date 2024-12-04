---
title: DataBricks の統合
tags:
  - databricks integration
  - New Relic integration
metaDescription: Install the DataBricks integration to monitor your spark metrics.
freshnessValidatedDate: '2024-09-19T00:00:00.000Z'
translationType: machine
---

New Relic Databricks 統合は、Databricks 上で実行されている Spark だけでなく、Databricks 上で実行されていない Spark デプロイメントからもテレメトリーを収集できます。

デフォルトでは、統合は、指定されたワークスペースのUIまたはAPIを通じて作成されたすべてのクラスタ内の Spark デプロイメントに自動的に接続し、テレメトリーを収集します。 この統合は、Collect Spark テレメトリー機能をサポートします。

## インテグレーションの設定 [#setup]

この統合では、 New Relicの実験的なリポジトリのスタンドアロン ツールを使用します。 この統合はホスト上で実行することも、テストのためにローカルで実行することもできます。 この統合は、次のホスト プラットフォーム上で実行されます。

* リナックスamd64
* ウィンドウズamd64

<Callout variant="tip">
  詳細については、この統合に関する[GitHub ReadMe](https://github.com/newrelic-experimental/newrelic-databricks-integration)を参照してください。
</Callout>

### ホスト上でのデプロイ [#on-host-deploy]

この統合をホスト (例: EC2) 上でデプロイするには、次の手順に従います。

1. [最新リリース](https://github.com/newrelic-experimental/newrelic-databricks-integration/releases)から、プラットフォームに適したアーカイブをダウンロードします。

2. アーカイブを新しいディレクトリまたは既存のディレクトリに抽出します。

3. 同じディレクトリに**configs**という名前のディレクトリを作成します。

4. configs ディレクトリに`config.yml`という名前のファイルを作成し、このリポジトリ内の[`configs/config.template.yml`](https://github.com/newrelic-experimental/newrelic-databricks-integration/blob/main/configs/config.template.yml)ファイルの内容をそのファイルにコピーします。

5. `config.yml`ファイルを編集して、環境に合わせて統合を適切に[構成します](https://github.com/newrelic-experimental/newrelic-databricks-integration#configuration)。

6. アーカイブを解凍したディレクトリから、次のコマンドを使用して統合バイナリを実行します。必要に応じて[コマンドライン オプション](https://github.com/newrelic-experimental/newrelic-databricks-integration#command-line-options)をコピーします。

```bash
# Linux
 ./newrelic-databricks-integration 
 
 # Windows
 .\newrelic-databricks-integration.exe
```

### Databricks クラスターにデプロイする [#databricks-deploy]

New Relic Databricks 統合は、クラスタ スコープの init スクリプトを使用して、Databricks クラスタのドライバ ノード上でデプロイできます。 init スクリプトはカスタム環境変数を使用して、統合設定に必要な設定を指定します。

init スクリプトをインストールするには、次の手順に従います。

1. Databricks アカウントにログインし、目的の[ワークスペース](https://docs.databricks.com/en/getting-started/concepts.html#accounts-and-workspaces)に移動します。

2. [init スクリプトの推奨事項](https://docs.databricks.com/en/init-scripts/index.html#recommendations-for-init-scripts)に従って、推奨される方法で`cluster_init_integration.sh`スクリプトをワークスペース内に保存します。 たとえば、ワークスペース[で Unity カタログが有効になっている](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html#step-1-confirm-that-your-workspace-is-enabled-for-unity-catalog)場合は、init スクリプトを[Unity カタログ ボリューム](https://docs.databricks.com/en/ingestion/file-upload/upload-to-volume.html)に保存する必要があります。

3. **Compute** \[計算]タブに移動し、目的の汎用計算またはジョブ計算を選択して、計算の詳細UI開きます。

4. **Edit** \[編集]ボタンをクリックして[計算の設定を編集します](https://docs.databricks.com/en/compute/clusters-manage.html#edit-a-compute)。

5. 手順に従って、UI を使用して[クラスター スコープの init スクリプトを](https://docs.databricks.com/en/init-scripts/cluster-scoped.html#configure-a-cluster-scoped-init-script-using-the-ui)構成し、上記の手順 2 で init スクリプトを保存した場所を指定します。

6. クラスターが実行されていない場合は、 **Confirm** \[確認]ボタンをクリックして変更を保存します。 次に、クラスターを再起動します。 クラスターがすでに実行されている場合は、 **Confirm and restart** \[確認して再起動]ボタンをクリックして変更を保存し、クラスターを再起動します。

さらに、[環境変数を設定する](https://docs.databricks.com/en/compute/configure.html#environment-variables)手順に従って、次の環境変数を追加します。

* `NEW_RELIC_API_KEY`: [New RelicユーザーAPIキー](/docs/apis/intro-apis/new-relic-api-keys/#user-key)。

* `NEW_RELIC_LICENSE_KEY`: [New Relicライセンスキー](/docs/apis/intro-apis/new-relic-api-keys/#license-key)。

* `NEW_RELIC_ACCOUNT_ID`: [New Relic アカウント ID](/docs/accounts/accounts-billing/account-structure/account-id/) 。

* `NEW_RELIC_REGION`: New Relic アカウントの[地域](/docs/accounts/accounts-billing/account-setup/choose-your-data-center/#regions-availability)。**US**または**EU**のいずれかです。

* `NEW_RELIC_DATABRICKS_WORKSPACE_HOST`: ターゲット Databricks インスタンスの[インスタンス名](https://docs.databricks.com/en/workspace/workspace-details.html)。

* `NEW_RELIC_DATABRICKS_ACCESS_TOKEN`:[ ](https://github.com/newrelic-experimental/newrelic-databricks-integration#authentication)[個人アクセス トークン を使用して 認証する](https://docs.databricks.com/en/dev-tools/auth/pat.html#databricks-personal-access-tokens-for-workspace-users) には、個人アクセス トークンを使用します。

* `NEW_RELIC_DATABRICKS_OAUTH_CLIENT_ID`: サービス プリンシパルを使用して[Databricks (OAuth M2M) で認証する](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html)には、サービス プリンシパルの OAuth クライアント ID が必要です。

* `NEW_RELIC_DATABRICKS_OAUTH_CLIENT_SECRET`: サービス プリンシパルを使用して[Databricks (OAuth M2M) で認証する](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html)には、サービス プリンシパルに関連付けられた OAuth クライアント シークレットが必要です。

<Callout variant="tip">
  `NEW_RELIC_API_KEY`と`NEW_RELIC_ACCOUNT_ID`は現在使用されていませんが、統合で使用される[`new-relic-client-go`モジュール](https://github.com/newrelic/newrelic-client-go)に必要であることに注意してください。

  さらに、個人アクセス トークンまたは OAuth 資格情報のいずれか一方のみを指定する必要があり、両方を指定する必要はないことに注意してください。 両方が指定されている場合は、OAuth 資格情報が優先されます。

  最後に、環境変数の設定に従ってクラスターを再起動してください。
</Callout>

## DataBricks 監視ダッシュボードをインストールする [#add-dashboard]

アプリケーション メトリクスを監視するために事前に構築された DataBricks ダッシュボードを設定するには、 [DataBricks ダッシュ](https://one.newrelic.com/marketplace?state=34e67b15-4fe1-28ef-ff41-99658fb36820)ボードの説明にアクセスし、指示に従ってください。 インストールすると、ダッシュボードにメトリクスが表示されるはずです。

ダッシュボードに関するヘルプが必要な場合は、以下を参照してください。

* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。
* [ダッシュボードを管理して](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)、 <InlinePopover type="dashboards" />表示モードを調整したり、ダッシュボードにコンテンツを追加したりできます。