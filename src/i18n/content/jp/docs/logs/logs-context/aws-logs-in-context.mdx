---
title: AWS ログのコンテキスト
tags:
  - Logs
  - Enable log management in New Relic
  - Configure logs in context
  - AWS
  - CloudWatch
  - S3
  - Lambda
  - RDS
  - ALB
  - NLB
  - Load Balancer
  - CloudFront
  - SQS
  - EC2
metaDescription: 'New Relic logs in context displays your logs in assorted New Relic experiences, helping you more easily correlate and troubleshoot issues.'
freshnessValidatedDate: never
translationType: machine
---

New Relic Logs AWSユーザーに、 AWS環境内でのトラブルシューティングの効率とシステム監視の両方を強化する包括的な統合ログ管理ソリューションを提供します。 New RelicのAWS in Context は、さまざまなAWSサービスからのログをメトリクスとシームレスに関連付け、すぐに問題を迅速に特定して解決できる機能を解放します。 AWS in Context を使用すると、開発チームと運用チームはシステムのダウンタイムを最小限に抑え、信頼性を確保できます。 New Relicプラットフォームの高度な検索機能とフィルタリング機能は、リアルタイムログ分析とともに、 AWSサービスのパフォーマンスと使用状況を詳細にインサイトに提供し、コスト効率の向上に役立ちます。 New Relic Logsを使用すると、 AWSユーザーは強力なインサイトと合理化されたプロセスを獲得し、 cloudリソースのより効果的で情報に基づいた管理をサポートします。

## コンテキスト内のAWSはどのように機能しますか?

AWS in Context 機能は、ログとそれに対応するAWSリソース (エンティティ) との間のシームレスなリンクを提供することにより、ログ管理を強化するように設計されています。 ログには、対応する AWS リソースにリンクするために必要なメタデータが追加されます。 追加されたエンリッチメントにより、次のことが可能になります。

* **エンティティの自動作成と関連付け**: AWSサービスから報告されたすべてのログは、それを生成した特定のAWSリソース (またはエンティティ) に自動的に関連付けられます。 エンティティがまだ存在しない場合は、システムによって自動的に作成されます。
* **エンティティとログ間のシームレスな双方向ナビゲーション**: 必要なコンテキスト情報が充実したログにより、ユーザーはエンティティ Explorer を利用して興味のある特定のAWSリソースを検索し、ログと生成されたエンティティの間を素早く移動できます。

## 前提条件

の[AWS 転送統合](https://docs.newrelic.com/install/aws-logs/?service=aws_services)AWS を使用すると、 in Context が** 自動的に有効になります** New Relic。ほとんどの AWS リソースでは[追加の設定](#configuring-aws-logs-in-context)は必要ありません。

## コンテキストでのAWSの設定 [#configuring-aws-logs-in-context]

AWS in Context 機能は、ほとんどのAWSサービスでそのまま使用できます。 ただし、一部のサービスでは、 AWSリソース設定にいくつかの調整を加える必要があります。 次のセクションでは、サポートされている各 AWS リソースタイプに対して設定のカスタマイズが必要かどうかについて説明します。

<CollapserGroup>
  <Collapser id="alb-configuration" title="アプリケーション ロード バランサー (ALB)">
    コンテキストのAWSは、ALB [アクセス ログ](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/enable-access-logging.html)と[接続ログを](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/enable-connection-logging.html)S3 バケットに配信するためにすぐに使用できます。
  </Collapser>

  <Collapser id="elb-configuration" title="クラシック ロード バランサー (ELB)">
    コンテキストのAWSは、S3 バケットに配信される ELB [アクセス ログ](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html)に対してすぐに使用できます。
  </Collapser>

  <Collapser id="cloudfront-distribution-configuration" title="CloudFront ディストリビューション">
    AWSコンテキストの は現在、[ Amazon](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/standard-logging-legacy-s3.html)[ S3](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html) (レガシー) 配信方法を使用して S3 バケットに配信される CloudFront アクセス ログ と、CloudWatch ログ グループに配信される Web アプリケーションファイア (WAF) ウォールをサポートしています。

    CloudFront 標準ログ出力先を設定するときは、「配信先」オプションでタイプ「Amazon S3 (レガシー)」を選択し、**ログプレフィックスオプションを**`CLOUDFRONT_ACCESS_LOGS`に設定します。

    <img title="CloudFront standard logging configuration using S3 (Legacy)" alt="Screenshot of the CloudFront logging configuration, which highlights the 'Deliver to' option set to 'Amazon S3 (Legacy)' and the 'Log prefix' option set to 'CLOUDFRONT_ACCESS_LOGS'" src="/images/logs_screenshot-aws_lic_cloudfront_s3_legacy_config.webp" />

    CloudFront では、CloudWatch 経由で Web アプリケーション ファイアウォール (WAF) ログを収集できます。 CloudFront ディストリビューションの「セキュリティ」タブで Web アプリケーション ファイアウォールを有効にし、「AWS WAF ログを有効にする」ボタンをクリックするだけです。 ただし、CloudFront ディストリビューションがどの AWS リージョンにデプロイされているかに関係なく、WAF ログは`us-east-1` (N. `aws-waf-logs-CloudFrontDistribution-YOUR_DISTRIBUTION_NAME`という名前のログ グループ内の (バージニア州) リージョン。 これらのログを送信するには**、`us-east-1` リージョンで[AWSログ転送](https://docs.newrelic.com/install/aws-logs/?service=aws_services)統合をデプロイし、そのログ グループから対応するサブスクリプション フィルターを作成する必要があります**。
  </Collapser>

  <Collapser id="elastic-beanstalk-ec2-configuration" title="Elastic Beanstalk EC2インスタンス">
    コンテキストのAWSは、 Elastic Beanstalk EC2 インスタンスの[ストリーミングされたログ](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.logging.html#health-logs-cloudwatchlogs)と[回転されたログが](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.logging.html#health-logs-s3location)それぞれ CloudWatch と S3 に配信されるように、すぐに使用できます。
  </Collapser>

  <Collapser id="lambda-function-configuration" title="Lambda関数">
    AWSLambdaコンテキスト内の は、 関数ログに対してすぐに機能し、CloudWatch の[ デフォルトロググループ](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs-advanced.html#monitoring-cloudwatchlogs-loggroups) New Relicに配信されるか、[New Relic LayersLambda の 拡張機能 を使用して に直接送信されます。](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/introduction-lambda/)
  </Collapser>

  <Collapser id="nlb-configuration" title="ネットワーク ロード バランサー (NLB)">
    コンテキストのAWSは、S3 バケットに配信される NLB [アクセス ログ](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/enable-access-logs.html)に対してすぐに使用できます。
  </Collapser>

  <Collapser id="rds-configuration" title="リレーショナル データベース サービス (RDS) インスタンス">
    コンテキスト内のAWSは、CloudWatch に配信される RDS[インスタンス ログ](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html)に対してすぐに使用できます。
  </Collapser>

  <Collapser id="s3-configuration" title="S3 バケット">
    コンテキストのAWSは、S3 バケットに配信される S3[サーバー アクセス ログ](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html)をサポートします。

    S3 サーバー アクセスのログ記録設定を構成するときは、次のスクリーンショットのように、「送信先プレフィックス」フィールドが`S3_ACCESS_LOGS/` (末尾にスラッシュ) になるように「送信先」フィールドを設定し、 [日付に基づいてパーティション化されたログ オブジェクト キー形式](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html#server-log-keyname-format)を選択する必要があります。

    <img title="S3 server access logging configuration" alt="Screenshot of the S3 server access logging configuration, which highlights the 'Destination' field set to 'S3_ACCESS_LOGS/' and the 'Log object key format' set to 'Date-based partitioned log object key format'" src="/images/logs_screenshot-aws_lic_s3_access_logging_config.webp" />
  </Collapser>

  <Collapser id="sqs-configuration" title="シンプル キュー サービス (SQS) キュー">
    コンテキスト内のAWSは、CloudTrail 経由で CloudWatch または S3 バケットに配信される SQS [管理およびデータ イベント](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/logging-using-cloudtrail.html)(特定の SQS キューに関連する) のためにすぐに使用できます。
  </Collapser>
</CollapserGroup>

## コンテキストエンリッチメントのAWS

AWS in Context 機能は、ログをNew Relicで作成されたエンティティと関連付けることができるプロパティでログを自動的に強化します。 これらのプロパティは、ログを生成したAWSサービスによって異なります。詳細については、次のセクションで説明します。

<CollapserGroup>
  <Collapser id="alb-attributes" title="アプリケーション ロード バランサー (ALB)">
    | 属性名                    | 説明                                                                                                                                                                         |
    | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `aws.Arn`              | AWS リソースの Amazon リソース名 (ARN)。                                                                                                                                              |
    | `entity.guid`          | 発信エンティティの一意の識別子。                                                                                                                                                           |
    | `entity.name`          | エンティティ エクスプローラーまたはカタログ ビューに表示される、発行するエンティティの名前。                                                                                                                            |
    | `entity.type`          | [エンティティ定義](https://github.com/newrelic/entity-definitions)で説明されているエンティティ タイプ ( `AWSALB` 、 `AWSS3BUCKET`など)。                                                                |
    | `entityId`             | [AWS APIポーリング統合](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/)を使用してメトリクスと一緒にログを収集する場合にのみ追加されます。 これにより、あなたのログとこの統合によって作成されたエンティティを関連付けることができます。 |
    | `aws.alb.loadBalancer` | アプリケーション ロード バランサーの名前。                                                                                                                                                     |
  </Collapser>

  <Collapser id="elb-attributes" title="クラシック ロード バランサー (ELB)">
    | 属性名                    | 説明                                                                                                                                                                         |
    | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `aws.Arn`              | AWS リソースの Amazon リソース名 (ARN)。                                                                                                                                              |
    | `entity.guid`          | 発信エンティティの一意の識別子。                                                                                                                                                           |
    | `entity.name`          | エンティティ エクスプローラーまたはカタログ ビューに表示される、発行するエンティティの名前。                                                                                                                            |
    | `entity.type`          | [エンティティ定義](https://github.com/newrelic/entity-definitions)で説明されているエンティティ タイプ ( `AWSALB` 、 `AWSS3BUCKET`など)。                                                                |
    | `entityId`             | [AWS APIポーリング統合](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/)を使用してメトリクスと一緒にログを収集する場合にのみ追加されます。 これにより、あなたのログとこの統合によって作成されたエンティティを関連付けることができます。 |
    | `aws.elb.loadBalancer` | Classic Load Balancer の名前。                                                                                                                                                 |
  </Collapser>

  <Collapser id="cloudfront-distribution-attributes" title="CloudFront ディストリビューション">
    | 属性名                             | 説明                                                                                                                                                                         |
    | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `aws.Arn`                       | AWS リソースの Amazon リソース名 (ARN)。                                                                                                                                              |
    | `entity.guid`                   | 発信エンティティの一意の識別子。                                                                                                                                                           |
    | `entity.name`                   | エンティティ エクスプローラーまたはカタログ ビューに表示される、発行するエンティティの名前。                                                                                                                            |
    | `entity.type`                   | [エンティティ定義](https://github.com/newrelic/entity-definitions)で説明されているエンティティ タイプ ( `AWSALB` 、 `AWSS3BUCKET`など)。                                                                |
    | `entityId`                      | [AWS APIポーリング統合](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/)を使用してメトリクスと一緒にログを収集する場合にのみ追加されます。 これにより、あなたのログとこの統合によって作成されたエンティティを関連付けることができます。 |
    | `aws.cloudfront.DistributionId` | Cloudfront ディストリビューションの識別子。                                                                                                                                                |
  </Collapser>

  <Collapser id="elastic-beanstalk-ec2-attributes" title="Elastic Beanstalk EC2インスタンス">
    | 属性名                  | 説明                                                                                                                                                                         |
    | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `aws.Arn`            | AWS リソースの Amazon リソース名 (ARN)。                                                                                                                                              |
    | `entity.guid`        | 発信エンティティの一意の識別子。                                                                                                                                                           |
    | `entity.name`        | エンティティ エクスプローラーまたはカタログ ビューに表示される、発行するエンティティの名前。                                                                                                                            |
    | `entity.type`        | [エンティティ定義](https://github.com/newrelic/entity-definitions)で説明されているエンティティ タイプ ( `AWSALB` 、 `AWSS3BUCKET`など)。                                                                |
    | `entityId`           | [AWS APIポーリング統合](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/)を使用してメトリクスと一緒にログを収集する場合にのみ追加されます。 これにより、あなたのログとこの統合によって作成されたエンティティを関連付けることができます。 |
    | `aws.ec2.InstanceId` | EC2 インスタンスの識別子。                                                                                                                                                            |
  </Collapser>

  <Collapser id="lambda-function-attributes" title="Lambda関数">
    CloudWatch に送信されるログには、次の属性が追加されます。

    | 属性名                       | 説明                                                                                                                                                                         |
    | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `aws.Arn`                 | AWS リソースの Amazon リソース名 (ARN)。                                                                                                                                              |
    | `entity.guid`             | 発信エンティティの一意の識別子。                                                                                                                                                           |
    | `entity.name`             | エンティティ エクスプローラーまたはカタログ ビューに表示される、発行するエンティティの名前。                                                                                                                            |
    | `entity.type`             | [エンティティ定義](https://github.com/newrelic/entity-definitions)で説明されているエンティティ タイプ ( `AWSALB` 、 `AWSS3BUCKET`など)。                                                                |
    | `entityId`                | [AWS APIポーリング統合](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/)を使用してメトリクスと一緒にログを収集する場合にのみ追加されます。 これにより、あなたのログとこの統合によって作成されたエンティティを関連付けることができます。 |
    | `aws.lambda.FunctionName` | Lambda関数の名前。                                                                                                                                                               |

    [New Relic Layers の Lambda 拡張機能](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/introduction-lambda/)を使用して New Relic に直接送信されるログには、次の属性が追加されます。

    | 属性名           | 説明                                                                                                                                                                         |
    | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `entity.guid` | 発信エンティティの一意の識別子。                                                                                                                                                           |
    | `entity.name` | エンティティ エクスプローラーまたはカタログ ビューに表示される、発行するエンティティの名前。                                                                                                                            |
    | `entity.type` | [エンティティ定義](https://github.com/newrelic/entity-definitions)で説明されているエンティティ タイプ ( `AWSALB` 、 `AWSS3BUCKET`など)。                                                                |
    | `entityId`    | [AWS APIポーリング統合](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/)を使用してメトリクスと一緒にログを収集する場合にのみ追加されます。 これにより、あなたのログとこの統合によって作成されたエンティティを関連付けることができます。 |
  </Collapser>

  <Collapser id="nlb-attributes" title="ネットワーク ロード バランサー (NLB)">
    | 属性名                    | 説明                                                                                                                                                                         |
    | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `aws.Arn`              | AWS リソースの Amazon リソース名 (ARN)。                                                                                                                                              |
    | `entity.guid`          | 発信エンティティの一意の識別子。                                                                                                                                                           |
    | `entity.name`          | エンティティ エクスプローラーまたはカタログ ビューに表示される、発行するエンティティの名前。                                                                                                                            |
    | `entity.type`          | [エンティティ定義](https://github.com/newrelic/entity-definitions)で説明されているエンティティ タイプ ( `AWSALB` 、 `AWSS3BUCKET`など)。                                                                |
    | `entityId`             | [AWS APIポーリング統合](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/)を使用してメトリクスと一緒にログを収集する場合にのみ追加されます。 これにより、あなたのログとこの統合によって作成されたエンティティを関連付けることができます。 |
    | `aws.nlb.loadBalancer` | ネットワーク ロード バランサーの名前。                                                                                                                                                       |
  </Collapser>

  <Collapser id="rds-attributes" title="リレーショナル データベース サービス (RDS) インスタンス">
    | 属性名                            | 説明                                                                                                                                                                         |
    | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `aws.Arn`                      | AWS リソースの Amazon リソース名 (ARN)。                                                                                                                                              |
    | `entity.guid`                  | 発信エンティティの一意の識別子。                                                                                                                                                           |
    | `entity.name`                  | エンティティ エクスプローラーまたはカタログ ビューに表示される、発行するエンティティの名前。                                                                                                                            |
    | `entity.type`                  | [エンティティ定義](https://github.com/newrelic/entity-definitions)で説明されているエンティティ タイプ ( `AWSALB` 、 `AWSS3BUCKET`など)。                                                                |
    | `entityId`                     | [AWS APIポーリング統合](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/)を使用してメトリクスと一緒にログを収集する場合にのみ追加されます。 これにより、あなたのログとこの統合によって作成されたエンティティを関連付けることができます。 |
    | `aws.rds.DBInstanceIdentifier` | RDS データベース インスタンスの識別子 (名前)。                                                                                                                                                |
  </Collapser>

  <Collapser id="s3-attributes" title="S3 バケット">
    | 属性名                 | 説明                                                                                                                                                                         |
    | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `aws.Arn`           | AWS リソースの Amazon リソース名 (ARN)。                                                                                                                                              |
    | `entity.guid`       | 発信エンティティの一意の識別子。                                                                                                                                                           |
    | `entity.name`       | エンティティ エクスプローラーまたはカタログ ビューに表示される、発行するエンティティの名前。                                                                                                                            |
    | `entity.type`       | [エンティティ定義](https://github.com/newrelic/entity-definitions)で説明されているエンティティ タイプ ( `AWSALB` 、 `AWSS3BUCKET`など)。                                                                |
    | `entityId`          | [AWS APIポーリング統合](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/)を使用してメトリクスと一緒にログを収集する場合にのみ追加されます。 これにより、あなたのログとこの統合によって作成されたエンティティを関連付けることができます。 |
    | `aws.s3.BucketName` | S3 バケットの名前。                                                                                                                                                                |
  </Collapser>

  <Collapser id="sqs-attributes" title="シンプル キュー サービス (SQS) キュー">
    | 属性名                 | 説明                                                                                                                                                                         |
    | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `aws.Arn`           | AWS リソースの Amazon リソース名 (ARN)。                                                                                                                                              |
    | `entity.guid`       | 発信エンティティの一意の識別子。                                                                                                                                                           |
    | `entity.name`       | エンティティ エクスプローラーまたはカタログ ビューに表示される、発行するエンティティの名前。                                                                                                                            |
    | `entity.type`       | [エンティティ定義](https://github.com/newrelic/entity-definitions)で説明されているエンティティ タイプ ( `AWSALB` 、 `AWSS3BUCKET`など)。                                                                |
    | `entityId`          | [AWS APIポーリング統合](/docs/infrastructure/amazon-integrations/connect/set-up-aws-api-polling/)を使用してメトリクスと一緒にログを収集する場合にのみ追加されます。 これにより、あなたのログとこの統合によって作成されたエンティティを関連付けることができます。 |
    | `aws.sqs.QueueName` | SQS キューの名前。                                                                                                                                                                |
    | `aws.sqs.queueUrl`  | SQS キューの URL。                                                                                                                                                              |
  </Collapser>
</CollapserGroup>

## トラブルシューティング

<CollapserGroup>
  <Collapser id="troubleshoot-nondefault-log-group-or-s3-bucket" title="デフォルト以外のロググループまたはS3バケット名の使用">
    AWS in Context 機能は、デフォルトの CloudWatch ログ グループ名または各AWSサービスによって設定された S3 バケット名を使用する場合にのみ機能します。 一部のサービスではこれらの値をカスタマイズできますが ( [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs-advanced.html#monitoring-cloudwatchlogs-loggroups)など)、そのようにすると、ログがエンティティに正しく添付されず、誤ったエンティティが作成される可能性があります。 [このセクション](#configuring-aws-logs-in-context)で指定がない限り、デフォルトの設定値を使用することを強くお勧めします。
  </Collapser>
</CollapserGroup>

<InstallFeedback />

## 次は何ですか？ [#what-next]

AWS リソースに AWS Logs in Context を設定したら、New Relic UI でログデータを最大限に活用します。

* [Logs UI](/docs/logs/log-management/ui-data/use-logs-ui) を使って、プラットフォーム全体のロギングデータを調べてみましょう。
* エンティティ エクスプローラーAWS を通じて[ ](https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts/#find)リソースに関連付けられたエンティティを検索し、「ログ」タブを選択してそのログにすばやく移動します。
* [アラートを](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/)設定します。
* [データをクエリ](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/)し、[ダッシュボードを作成します](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/)。