---
title: New Relic にLambda監視をインストールして設定する
metaDescription: Configure your AWS Lambda functions with New Relic
freshnessValidatedDate: never
translationType: machine
---

## あなたが始める前に [#begin]

* まだ行っていない場合は、 Lambda関数が[互換性と要件](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/compatibility-requirement-lambda-monitoring)を満たしているかどうかを確認してください。

## Lambda監視をインストールする [#setup]

Lambda 監視には以下が含まれます:

* AWSCloudWatchメトリクスを取り込み、 内でエンティティ合成を実行するための インテグレーション。New Relic
* [New Relic Lambda レイヤー](https://github.com/newrelic/newrelic-lambda-layers)または[SDK](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/sdk-based-instrumentation)に含まれる New Relic エージェント。
* [newrelic-log-ingestion](https://github.com/newrelic/aws-log-ingestion)関数または[Extension を](https://github.com/newrelic/newrelic-lambda-extension)介してペイロードとログを New Relic に送信する方法。 [New Relic Lambda Layers を](https://github.com/newrelic/newrelic-lambda-layers)使用する場合、データを送信するために追加の設定を行う必要はありません。

<Steps>
  <Step>
    ## AWSとNew Relicアカウントをリンクする [#link]

    <Callout variant="tip">
      [newrelic-lambda-cli を](https://github.com/newrelic/newrelic-lambda-cli)使用してLambda関数をビルドすると、リンク プロセスが自動化されるため、この手順を省略できます。
    </Callout>

    アカウントをリンクすると、 AWSアカウントのインベントリを作成し、 Lambda関数の CloudWatchメトリクスを自動的に収集する権限を New Relic に付与することになります。 アカウントをリンクすると、 AWSアカウントのリソースが[エンティティ エクスプローラー](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts/#find)にエンティティとして表示されます。 Lambda関数 エンティティはサーバーレス機能ビューにあります。

    次の統合方法のいずれかで、 AWSと New Relic アカウントをリンクできます。

    <Tabs>
      <TabsBar>
        <TabsBarItem id="1">AWSメトリクスストリーム(推奨)</TabsBarItem> <TabsBarItem id="2">APIポーリング</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="1">
          New Relic がLambda関数を監視するには、New Relic とAWSの間の統合をセットアップする必要があります。 レイテンシを削減し、ポーリング リクエストのスロットルを回避するには[、メトリクス ストリーム](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream)を使用することをお勧めします。
        </TabsPageItem>

        <TabsPageItem id="2">
          メトリクス Streams インテグレーションを使用していない場合は、代わりに[APIポーリング インテグレーション](/docs/infrastructure/amazon-integrations/connect/connect-aws-new-relic-infrastructure-monitoring)をセットアップすることを選択できます。 デフォルトでは、Lambda サービスが有効になっているAPIポーリング統合は、CloudWatchメトリクスに対して 5 分ごとにポーリングを行います。

          [newrelic-lambda-cli](https://github.com/newrelic/newrelic-lambda-cli)を使用してAPIポーリング統合をセットアップすることはできますが、メトリクス Streams 統合はセットアップできません。

          ```sh
          newrelic-lambda integrations install --nr-account-id YOUR_NR_ACCOUNT_ID \
          --nr-api-key YOUR_NEW_RELIC_USER_KEY
          ```

          [統合インストール コマンド](https://github.com/newrelic/newrelic-lambda-cli?tab=readme-ov-file#aws-lambda-integration)の 1 つのステップで、 [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)に `NEW_RELIC_LICENSE_KEY` シークレットが作成され、セキュリティが向上します。 これは、他のオプションやフラグとともに、 `--disable-license-key-secret`フラグを使用して構成できます。
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## Lambda関数を計算 [#instrument]

    Lambda関数を計装するには、エージェントと拡張機能が必要です。 これらのコンポーネントは、New Relic [Lambda レイヤー](https://github.com/newrelic/newrelic-lambda-layers)にまとめられています。 Lambda レイヤーを使用できない場合は、エージェントと拡張機能を関数に手動で組み込むことができます。 Lambda関数の要件に基づいて、次のいずれかのインストルメンテーション方法を選択します。

    <Tabs>
      <TabsBar>
        <TabsBarItem id="layered-instrumentation">階層化されたインストゥルメンテーション</TabsBarItem><TabsBarItem id="sdk-based-instrumentation">SDK ベースのインストゥルメンテーション</TabsBarItem><TabsBarItem id="containerized-instrumentation">コンテナ化されたインストゥル</TabsBarItem>メンテーション
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="layered-instrumentation">
          Lambda関数がZipファイルとしてパッケージ化されており、レイヤーを追加できる場合は、この方法を使用します。 レイヤーは、ライブラリ、カスタム ランタイム、およびその他の依存関係の配布メカニズムです。 詳細については、 [Layered インストゥルメンテーションの](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/instrument-your-own/)ドキュメントを参照してください。
        </TabsPageItem>

        <TabsPageItem id="sdk-based-instrumentation">
          Lambda関数がレイヤーを使用できない場合はこのメソッドを使用すると、レイヤーを変更する必要がなく、迅速なデプロイメントが保証されます。 詳細については、 [SDK ベースのインストゥルメンテーションの](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/sdk-based-instrumentation/)ドキュメントを参照してください。
        </TabsPageItem>

        <TabsPageItem id="containerized-instrumentation">
          Lambda関数がコンテナ内で実行される場合は、このメソッドを使用します。 コンテナは、アプリケーションに対して一貫性のある分離された実行環境を提供します。 New Relic は、New Relic Lambda レイヤー、New Relic Lambda 拡張機能、および New Relic エージェントを含む、事前に構築された Docker イメージを提供します。 詳細については、 [コンテナ化されたインストゥルメンテーションの](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/containerized-images/)ドキュメントを参照してください。
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## 環境変数を設定する [#environment]

    <Callout variant="tip">
      * New Relic CLI を使用して New Relic のLambdaレイヤーをセットアップすると、必須の環境変数が自動的に構成されます。 ただし、デフォルト設定の一部を変更し、監視のニーズに合った環境変数を使用してLambda関数を構成する必要がある場合があります。
      * New Relic Lambda 拡張機能を使用している場合は、環境変数を手動で設定する必要があります。
    </Callout>

    [環境変数は](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/env-variables-lambda)、New Relic エージェントと Lambda 拡張機能を構成するために使用されます。 Lambda関数が正しく監視されるようにするには、これらの変数を正しく設定することが重要です。
  </Step>
</Steps>

## サンプル関数をお試しください

New Relicの Lambda レイヤーをインストゥルメントした後は、サンプル関数を試してみることを強くお勧めします。 これらの実用的な例は、独自のサーバーレス機能を開始するための出発点として使用する必要があります。 これらの例を使用すると、 New Relic Lambda レイヤーやアカウント リンクのテストに慣れることができ、独自のインストゥルメンテーションのリファレンスとしても使用できます。 各例では、権限の追加、ハンドラーをラップするためのランタイム固有の手法、CloudWatch での関数ログ保持の管理などを示します。

Lambda 関数を管理およびデプロイする方法は多数ありますが、この例ではAWS CloudFormation というメカニズムを使用しています。

私たちの例は、New Relic Lambda Extension とともに、この[GitHub リポジトリ](https://github.com/newrelic/newrelic-lambda-extension)で公開されています。 New Relic がサポートする Lambda ランタイムごとに 1 つあります。

* [Node.js](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/node)
* [Python](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/python)
* [Go](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/go)
* [Java](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/java)
* [Ruby](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/ruby)
* [.NET](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/dotnet)

また、ディストリビューティッド（分散）トレーシングの例で、ディストリビュー[ティッド（分散）トレーシングを](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/distributedtracing)非自明なサーバーレス アプリケーションに組み込む方法を学ぶこともできます。 これは、Node、Python、 Ruby 、Java 関数を使用して、Lambda 関数を呼び出す可能性のある 2 つの一般的なサービスである SQS と SNS の手動トレース伝播を示しています。

<Callout variant="tip">
  手動でテストする場合、テレメトリーデータが遅延する可能性があります。 バッファリングされたテレメトリが配信されるように、関数を再度呼び出す前に 7 秒待つことをお勧めします。
</Callout>

<DocTiles>
  <DocTile title="Compatibility and requirement" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/compatibility-requirement-lambda-monitoring">サポートされているランタイムと前提条件の詳細をご覧ください。</DocTile> <DocTile title="Data and UI" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/ui-data/understand-lambda-monitoring-ui/">New Relic を使用してAWS Lambda関数を監視する方法を学びます。</DocTile> <DocTile title="Troubleshooting" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/troubleshooting">インストレーション関連の問題のトラブルシューティング方法を学びます。</DocTile>
</DocTiles>