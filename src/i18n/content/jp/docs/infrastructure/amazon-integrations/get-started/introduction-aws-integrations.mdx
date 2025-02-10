---
title: AWSインテグレーション入門
tags:
  - Integrations
  - Amazon integrations
  - Get started
metaDescription: Amazon integrations let you monitor your AWS data in several New Relic features.
freshnessValidatedDate: '2024-09-20T00:00:00.000Z'
translationType: human
---

New Relicには、Amazon Web Services（AWS）環境に関するパフォーマンスデータを収集する方法が複数あります。New Relic AWSに接続すると、システムのAWSテレメトリーにアクセスして、 AWSスタックの健全性を綿密に監視できるようになります。当社のAWSオブザーバビリティソリューションは、[Amazon CloudWatch Metric Streamsのインテグレーション](/docs/infrastructure/amazon-integrations/get-started/introduction-aws-integrations/#monitor-aws)をサポートしてメトリクスを取得し、[AWSサービスログをNew Relicに転送](/install/aws-logs/)してNew Relicにログを取り込みます。このドキュメントでは、 AWS監視を開始する方法について説明し、 AWSコストの概要を示します。

## CloudWatch Metric Streamsのインテグレーションから開始する [#monitor-aws]

当社のAWSオブザーバビリティソリューションはAmazon CloudWatch Metric Streamsインテグレーションであり、[Amazon CloudWatch Metric Streams](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html)を使用してスタック全体に関するデータを収集します。ほとんどのユースケースでは、[Amazon CloudWatch Metric Streamsインテグレーションをインストール](/install/aws-cloudwatch)して、AWSスタックの監視を開始します。

CloudWatch Metric StreamsインテグレーションはAWSスタックに関する最良のデータを提供しますが、[CloudWatch Metric Streamsでサポートされていないインテグレーション](/docs/infrastructure/amazon-integrations/connect/connect-aws-new-relic-infrastructure-monitoring/#integrations-not-replaced-streams)を使用する場合は、レガシーAPIポーリングソリューションを使用する必要がある場合があります。現在、サポートされているインテグレーションにAPIポーリングを使用している場合は、[データをAmazon CloudWatch Metric Streamsに移行すること](/install/aws-cloudwatch/?task=migrate)をお勧めします。

<Callout variant="tip">
  AWSスタックに米国の連邦、州、地方機関に対する特定の規制ニーズがある場合、または教育機関の場合は、[AWS GovCloudの手順に従ってください](/docs/infrastructure/amazon-integrations/connect/connect-aws-govcloud-new-relic)。
</Callout>

## EC2インスタンスとAmazon EKSに関するデータを収集する [#additional-tools]

Amazon CloudWatch Metric Streamsインテグレーションを使用すると、EC2インスタンスとAmazon Elastic Kubernetes Service（EKS）環境に関するデータを収集できます。より詳細なデータが必要な場合は、 CloudWatch Metric Streamsインテグレーションの上に追加のインテグレーションをインストールして、より深い可視性を得ることもできます。

* EC2インスタンスを監視するには、[EC2ホストにinfrastructureエージェントをインストールする](/docs/infrastructure/amazon-integrations/connect/ec2-quickstart)、または[AWS System Manager Distributorを割り当ててinfrastructureエージェントをインストールします](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-sys-dist)
* Kubernetesクラスタを監視するには、[手順に従ってNew Relic EKSアドオンをインストールします](/docs/infrastructure/amazon-integrations/connect/eks-add-on)

## AWSインテグレーションにおけるコストの計算 [#aws-billing]

このセクションでは、インテグレーションがAWSの利用料金にどのように影響するかを記載したAWSドキュメントを紹介します。

* [AWS CloudWatchの価格設定ページ](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html)では、メトリクスの更新数に基づくAWS CloudWatch Metric Streamsの料金の定義が記載されています。
* AWSからNew Relicへの配信方法としてAWS Kinesis Data Firehoseが使用されることがあります。詳細については、[AWS Firehoseの価格設定ページ](https://aws.amazon.com/kinesis/data-firehose/pricing/)を参照してください。
* AWS Configを有効化するとリソースメタデータでCloudWatchメトリクスが強化されます。AWS Configは、記録された設定アイテム数に基づき課金されます。詳細については、[AWS Configの価格設定ページ](https://aws.amazon.com/config/pricing/)を参照してください。
* [AWSリソースグループのタグ付けAPI](https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/overview.html)は、関連するAWSリソースで定義されたカスタムタグを使用してメトリクスを強化するために使用されます。これは、ポーリングとメトリクスストリームの両方に影響します。

CloudWatch Metric StreamsではなくAPIポーリングインテグレーションを使用する場合、New RelicはAmazon CloudWatch APIを使用してAWSサービスに関するデータをキャプチャします。状況によっては、CloudWatch APIの呼び出し回数が増加し、AWSから付与された<DNT>**1 million free**</DNT>の制限を超え、[CloudWatchの請求額が増加する](/docs/infrastructure/amazon-integrations/troubleshooting/cloudwatch-billing-increase)場合があります。これは、 APIポーリングを通じて追加のインテグレーションを有効にしたり、それらのインテグレーションにAWSリソースを追加したり、それらのインテグレーションをより多くの地域に拡張したりすると発生する可能性があります。

AWSの一部のサービスでは拡張監視機能を使用可能で、より多くのメトリクスをより高頻度で監視できます。詳細については、[RDS拡張監視コスト](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.overview.html#USER_Monitoring.OS.cost)を参照してください。

## 利用できる地域 [#region-availability]

大半のAWSサービスは、クラウドリソースとアプリケーション間のデータレイテンシを減らすためにリージョンエンドポイントを提供します。New Relicは、中国を除くすべての[AWS地域](http://docs.aws.amazon.com/general/latest/gr/rande.html)にあるサービスとエンドポイントから監視データを取得できます。