---
title: Amazon VPC フロー ログのモニタリングをセットアップする
tags:
  - Integrations
  - Network monitoring
  - Installation
  - Setup
  - AWS
metaDescription: Set up Amazon VPC Flow Logs monitoring.
freshnessValidatedDate: never
translationType: machine
---

<Video
  type="youtube"
  id="ao_8izubBFw"
/>

Amazon Kinesis Data Firehose を介した Amazon Virtual Private Cloud Flow (VPC) ログは、ログを New Relic に送信する手間を軽減するのに役立ちます。AWS 資産全体からの VPC フロー ログを使用すると、パフォーマンス分析とネットワーク接続のトラブルシューティングに関する重要な洞察をすばやく理解できます。

<img
  title="Amazon VPC Flow Logs overview"
  alt="Amazon VPC Flow Logs overview"
  src="/images/network_screenshot-crop_cloud-flow-logs-overview.webp"
/>

<figcaption>
  <DNT>**Add [Amazon VPC Flow Logs to your New Relic account](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**</DNT>。
</figcaption>

Amazon Virtual Private Cloud (VPC) を使用すると、スケーラブルな AWS インフラストラクチャを使用して、分離された安全な仮想ネットワークに AWS リソースを起動できます。

<ButtonGroup>
  <ButtonLink
    role="button"
    to="https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9"
    variant="primary"
  >
    Amazon VPC フロー ログを追加する
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.eu.nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9"
    variant="primary"
  >
    ガイド付きインストール（EUオプション）
  </ButtonLink>
</ButtonGroup>

## 前提条件 [#prerequisites]

### NewRelicの前提条件 [#prerequisites-NR]

* NewRelicアカウント。持っていませんか？[無料でお申し込み頂けます！](https://newrelic.com/signup)クレジットカードは必要ありません。

### AWSの前提条件 [#prerequisites-aws]

<Callout variant="important">
  Kinesis Data Firehose 経由の Amazon VPC フロー ログは、FedRAMP のお客様にはまだサポートされていません。それまでの間、 [FedRAMP 取り込み API](/docs/security/security-privacy/compliance/fedramp-compliant-endpoints#data-ingest-apis)を使用できます。
</Callout>

* 環境：

  * [AWS CLI（v 1.9.15+）がインストールされて](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)います。
  * Amazon VPC フロー ログを収集する AWS リージョンのリスト。
  * [VPC フロー ログを送信するように設定される VPC ID](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/describe-vpcs.html) 。よりきめ細かい制御が必要な場合は、VPC ID の代わりに[サブネット ID](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/describe-subnets.html)を指定します。

* 権限:

  * [VPC フロー ログを作成する権限を](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-s3-iam)持つ AWS ユーザー。
  * [ログ配信所有者の Amazon S3 ログ ファイルの読み取りと書き込みの](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-file-permissions)アクセス許可。
  * [Kinesis Data Firehose が IAM ロールを引き受けることを](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#firehose-assume-role)許可します。

* [Amazon リソースネーム (ARN)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html) :

  * [未配信のフロー ログ メッセージを保存](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-s3-permissions)する権限を持つ S3 バケットの ARN。

  * サンプリングを有効にする場合は、Lambda の IAM ロールの ARN が必要です。

  * [S3 バケットにアクセスできる Kinesis Data Firehose](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3)の ARN。

    <Callout variant="tip">
      特定のリージョンの VPC フロー ログを初めて設定するときは、ガイド付きインストールで新しいデータ ファイアホースを作成することをお勧めします。同じリージョン内の後続の VPC とサブネットについては、既存のデータ Firehose を再利用できます。
    </Callout>

### IAM ロール [#iam-roles]

AWS CLI を使用してフロー ログの統合をセットアップする場合は、さまざまなインフラストラクチャ コンポーネントに対して 1 つまたは 2 つの IAM ロールを提供する必要があります。CloudFormation を使用する場合は、独自のロールを提供するか、テンプレートに新しいロールを定義させることができます。

必要な役割には、少なくとも次の権限が必要です。

<CollapserGroup>
  <Collapser
    id="kinesis-firehose"
    title="Kinesis Firehose"
  >
    この許可が必要です。

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "",
                "Effect": "Allow",
                "Action": [
                    "s3:AbortMultipartUpload",
                    "s3:GetBucketLocation",
                    "s3:GetObject",
                    "s3:ListBucket",
                    "s3:ListBucketMultipartUploads",
                    "s3:PutObject"
                ],
                "Resource": [
                    "arn:aws:s3:::<FIREHOSE_ERRORS_BUCKET>",
                    "arn:aws:s3:::<FIREHOSE_ERRORS_BUCKET>/*"
                ]
            },
            {
                "Sid": "",
                "Effect": "Allow",
                "Action": [
                    "lambda:InvokeFunction",
                    "lambda:GetFunctionConfiguration"
                ],
                "Resource": [
                    "arn:aws:lambda:us-west-2:<YOUR_ACCOUNT>:function:NewRelic-Flow-Sampling-Lambda",
                    "arn:aws:lambda:us-west-2:<YOUR_ACCOUNT>:function:NewRelic-Flow-Sampling-Lambda:*"
                ]
            }
        ]
    }
    ```
  </Collapser>

  <Collapser
    id="aws-sampling-lambda"
    title="AWS サンプリング ラムダ"
  >
    サンプリングを使用している場合にのみ、このアクセス許可が必要です。

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Action": "logs:CreateLogGroup",
                "Resource": "arn:aws:logs:us-west-2:<YOUR_ACCOUNT>:*",
                "Effect": "Allow"
            },
            {
                "Action": [
                    "logs:CreateLogStream",
                    "logs:PutLogEvents"
                ],
                "Resource": [
                    "arn:aws:logs:us-west-2:<YOUR_ACCOUNT>:log-group:/aws/lambda/NewRelic-Flow-Sampling-Lambda:*"
                ],
                "Effect": "Allow"
            }
        ]
    }
    ```
  </Collapser>
</CollapserGroup>

## New Relic でのログのフォーマット [#NR-logs-format]

精選されたフロー ログの探索とエンティティ リンクを使用するには、VPC フロー ログの次の形式に従う必要があります。

```shell
${version} ${account-id} ${region} ${az-id} ${sublocation-type} ${vpc-id} ${subnet-id} ${instance-id} ${interface-id} ${srcaddr} ${pkt-srcaddr} ${pkt-src-aws-service} ${dstaddr} ${pkt-dstaddr} ${pkt-dst-aws-service} ${srcport} ${dstport} ${protocol} ${packets} ${bytes} ${flow-direction} ${traffic-path} ${start} ${end} ${action} ${log-status}
```

<Callout variant="tip">
  ログ フィールドの詳細については、 [VPC Amazon ドキュメント](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-logs-fields)で使用可能なフィールドを確認してください。
</Callout>

VPC フロー ログには、 `Log_VPC_Flows_AWS`という名前の [ログ パーティション](/docs/logs/ui-data/data-partitions) を使用する必要があります。 [ガイド付きインストールを](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)使用する場合、これは自動的に処理されます。

## New Relic で Amazon VPC Flow Logs モニタリングを設定する [#setup-aws-vpc-flow-logs]

ガイド付きウィザードに従って、Amazon VPC フロー ログをインストールします。

1. <DNT>
     **[guided install process](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**
   </DNT>

   開始します。

2. <DNT>
     **Select an account**
   </DNT>

   ドロップダウンから、Amazon VPC フローログを送信する New Relic アカウントを選択し、

   <DNT>
     **Continue**
   </DNT>

   をクリックします。

3. <DNT>
     **Select your data**
   </DNT>

   セクションで、

   <DNT>
     **Amazon VPC Flow Logs**
   </DNT>

   を選択し、

   <DNT>
     **Continue**
   </DNT>

   をクリックします。

4. <DNT>
     **Select your install method**
   </DNT>

   セクションで、

   <DNT>
     **CLI**
   </DNT>

   に進み、

   <DNT>
     **Continue**
   </DNT>

   をクリックします。

これらの手順の後、新しいウィザードがポップアップ表示され、AWS Kinesis Firehose サービスを介して Amazon VPC フロー ログを New Relic に送信するためのセットアップを支援します。

1. <DNT>**Choose Setup Options**</DNT>セクション:

   * セットアップ方法が正しいことを確認します。

   * VPC フロー ログを New Relic に送信する AWS リージョンを選択します。

   * 必要に応じて、Kinesis Data Firehose を再利用する場合は、

     <DNT>
       **I already have a Kinesis Firehose to New Relic**
     </DNT>

     チェックボックスをオンにして、

     <DNT>
       **Define flow logs**
     </DNT>

     セクションに進みます。

   * <DNT>
       **Continue**
     </DNT>

     をクリックします。

2. <DNT>**Define Kinesis Firehose**</DNT>セクション:

   * <DNT>
       **Kinesis Firehose Name**
     </DNT>

     フィールドで、生成された名前が正しいことを確認します。

   * <DNT>
       **Firehose Backup Bucket**
     </DNT>

     フィールドに、配信に失敗したメッセージを保存するために使用される[S3 バケットの ARN](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html)を入力します。 ARN は次の形式に従う必要があります: `arn:my_string` 。

   * <DNT>
       **Firehose IAM Role**
     </DNT>

     フィールドに、Kinesis Data Firehose によって使用される[IAM ロールの ARN](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#firehose-assume-role)を入力します。 ARN は次の形式に従う必要があります: `arn:my_string` 。

   * <DNT>
       **Continue**
     </DNT>

     をクリックします。

   * 必要に応じて、VPC フロー ログをサンプリングする場合は、

     <DNT>
       **Use Sampling**
     </DNT>

     チェックボックスを選択し、次の操作を行います。

   <CollapserGroup>
     <Collapser
       id="sampling-lambda"
       title="サンプリング ラムダを使用する"
     >
       * まず、 <DNT>**Define Sampling Lambda**</DNT>セクションで次の操作を行います。

         * <DNT>
             **Lambda Name**
           </DNT>

           フィールドで、Lambda関数の生成された名前が正しいことを確認してください。 特定の Lambda 命名基準がある場合は、名前を編集します。

         * <DNT>
             **Sample Rate**
           </DNT>

           フィールドで、適用するサンプル レートを指定します。 デフォルトでは、 `1:10`に設定されています。

       * 次に、 <DNT>**Create Sampling Lambda**</DNT>セクションで<DNT>**Generate CLI Command**</DNT>をクリックし、次の操作を行います。

         * <DNT>
             **Create your sampling Lambda**
           </DNT>

           のコード ブロックの内容をコピーし、AWS CLI で実行します。

         * Lambda が作成されたかどうかを確認するには、AWS CLI の 2 番目のステップからコマンドを実行します。

         * Lambda関数の返されたARNをコピーし、 `arn:my_string`形式で

           <DNT>
             **Sampling Lambda ARN**
           </DNT>

           フィールドに貼り付けます。 次に、

           <DNT>
             **Continue**
           </DNT>

           をクリックします。

         <Callout variant="tip">
           サンプリングは単純なカウント機能ですが、New Relic に送信されるフロー ログの量を減らします。この Lambda 関数を使用してサンプリングされたデータは、New Relic の特定の会話を見逃す可能性があります。New Relic のネットワーク監視 UI でサンプリングされたデータを示すコールアウトに注意してください。
         </Callout>
     </Collapser>
   </CollapserGroup>

3. <DNT>**Generate Kinesis Firehose**</DNT>セクションで、 <DNT>**Generate CLI Command**</DNT>をクリックし、次の操作を行います。

   <Callout variant="tip">
     このデータ取り込みに使用する新しい<InlinePopover type="licenseKey"/>自動的に生成されます。 キーを再生成するには、 <DNT>**Generate and use a new key**</DNT>をクリックします。

     既存のキーを再利用する場合は、最初のステップで`AccessKey`値を更新してください。
   </Callout>

   * <DNT>
       **Create your Kinesis Data Firehose**
     </DNT>

     のコード ブロックの内容をコピーし、AWS CLI に貼り付けて実行します。

   * Kinesis Firehose が作成されたかどうかを確認するには、AWS CLI の 2 番目のステップからコマンドを実行します。ARN が返されない場合は、30 秒待ってから再試行してください。

   * Kinesis Firehose に対して返された ARN をコピーし、 `arn:my_string`形式で

     <DNT>
       **Kinesis Data Firehose ARN**
     </DNT>

     フィールドに貼り付けます。 次に、

     <DNT>
       **Continue**
     </DNT>

     をクリックします。

   <img
     title="Generate Kinesis Firehose"
     alt="Generate Kinesis Firehose"
     src="/images/network_screenshot-crop_kinesis-forehose-aws-vpc-flow-logs.webp"
   />

   <figcaption>
     ガイド付きインストールで Kinesis Firehose ステップを生成します。
   </figcaption>

4. <DNT>**Define Flow Logs**</DNT>セクションで、次の操作を行います。

   * <DNT>
       **Traffic Type**
     </DNT>

     ドロップダウンから、承認されたもののみを送信するか、拒否されたもののみを送信するか、またはすべてのフロー ログ エントリを送信するかを選択します。

   * <DNT>
       **Flow Source ID**
     </DNT>

     フィールドに、Amazon VPC フロー ログを作成する必要がある VPC ID ( `vpc-MY_STRING` ) またはサブネット ID ( `subnet-MY_STRING` ) を入力します。

   * <DNT>
       **Flow Source Type**
     </DNT>

     フィールドに自動的に値が入力されるので、

     <DNT>
       **Continue**
     </DNT>

     をクリックします。

5. <DNT>**Create Flow Logs**</DNT>セクションで、 <DNT>**Generate CLI Command**</DNT>をクリックして構文ブロックの内容をコピーします。 次に、AWS CLI で実行して、指定されたリソースのフローログの生成を開始します。

6. <DNT>**Continue**</DNT>をクリックして、New Relic のネットワーク監視セクションで Amazon VPC フロー ログの調査を開始します。

7. [NewRelicでネットワークパフォーマンスデータを視覚化します](/docs/network-performance-monitoring/monitoring-network-data/visualize-network-data)。

<InstallFeedback/>
