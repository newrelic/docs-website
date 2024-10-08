---
title: ECSインテグレーションのトラブルシューティングデータが表示されない
type: troubleshooting
tags:
  - Integrations
  - Elastic Container Service integration
  - Troubleshooting
metaDescription: Troubleshooting tips for when New Relic's on-host Amazon ECS integration is not reporting data.
freshnessValidatedDate: never
translationType: machine
---

## 問題

[オンホスト ECS 統合を](/docs/introduction-amazon-ecs-integration) インストールして数分間待機しましたが、クラスターが [エンティティ リスト](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find)に表示されません。

<Callout variant="important">
  ECS 統合には、 [クラウドベースの統合](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ecsecr-monitoring-integration) とオンホスト統合の 2 つがあります。このドキュメントはオンホスト統合について説明しています。
</Callout>

## 解決

以前にインフラストラクチャ エージェントまたはインフラストラクチャ オンホスト統合をインストールしていた場合は、数分以内にデータが [UI](/docs/ecs-integration-understand-use-data) に表示されるはずです。

オンホスト ECS 統合をインストールする前にこれらの作業を行っていない場合は、データが UI に表示されるまでに数十分かかる場合があります。その場合は、最大 1 時間待ってから、次のトラブルシューティング手順を実行するか、サポートに連絡することをお勧めします。

データが表示されない場合のトラブルシューティングにはいくつかの方法があります。

* [awscli ツールによるトラブルシューティング](#awscli) （New Relic のテクニカルサポートに相談する際にお勧めします。）
* [UIによるトラブルシューティング](#ui)

停止したタスクについての情報は、 [停止したタスクの理由](#stopped-tasks) を参照してください。

### awscliによるトラブルシューティング [#awscli]

New Relic のサポートとやりとりする際には、この方法を使用し、生成されたファイルをサポートリクエストと一緒に送信してください。

1. `newrelic-infra`サイドカーを持つタスクを含む`newrelic-infra`サービスまたは Fargate サービスに関連する情報を取得します。

   ```sh
   aws ecs describe-services --cluster YOUR_CLUSTER_NAME --service newrelic-infra > newrelic-infra-service.json
   ```

   ```sh
   aws ecs describe-services --cluster YOUR_CLUSTER_NAME --service YOUR_FARGATE_SERVICE_WITH_NEW_RELIC_SIDECAR > newrelic-infra-sidecar-service.json
   ```

2. `failures`属性は、サービスのエラーの詳細を示します。

3. `services`の下には`status`属性があります。サービスに問題がない場合は`ACTIVE`と表示されます。

4. `desiredCount`は`runningCount`と一致する必要があります。これは、サービスが処理しているタスクの数です。デーモン サービス タイプを使用するため、クラスター内のコンテナー インスタンスごとに 1 つのタスクが必要です。すべてのタスクが実行されている必要があるため、 `pendingCount`属性はゼロにする必要があります。

5. `services`の`events`属性を調べて、タスクのスケジュールまたは開始に関する問題を確認してください。例: サービスがタスクを正常に開始できない場合、次のようなメッセージが表示されます。

   ```json
   {
     "id": "5295a13c-34e6-41e1-96dd-8364c42cc7a9",
     "createdAt": "2020-04-06T15:28:18.298000+02:00",
     "message": "(service newrelic-ifnra) is unable to consistently start tasks successfully. For more information, see the Troubleshooting section of the Amazon ECS Developer Guide."
   }
   ```

6. 同じセクションでは、イベントからサービスがどのタスクを開始したかを確認することもできます。

   ```json
   {
     "id": "1c0a6ce2-de2e-49b2-b0ac-6458a804d0f0",
     "createdAt": "2020-04-06T15:27:49.614000+02:00",
     "message": "(service fargate-fail) has started 1 tasks: (task YOUR_TASK_ID)."
   }
   ```

7. このコマンドで、タスクに関連する情報を取得します。

   ```sh
   aws ecs describe-tasks --tasks YOUR_TASK_ID --cluster YOUR_CLUSTER_NAME > newrelic-infra-task.json
   ```

8. `desiredStatus`と`lastStatus`は`RUNNING`である必要があります。タスクが正常に開始できなかった場合、ステータスは`STOPPED`になります。

9. `stopCode`と`stoppedReason`を調べます。1 つの理由の例: タスク実行ロールに、ライセンス キーを含むシークレットをダウンロードするための適切なアクセス許可がないために開始できなかったタスクの出力は、次のようになります。

   ```json
   "stopCode": "TaskFailedToStart",
   "stoppedAt": "2020-04-06T15:28:54.725000+02:00",
   "stoppedReason": "Fetching secret data from AWS Secrets Manager in region YOUR_AWS_REGION: secret arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:NewRelicLicenseKeySecret-Dh2dLkgV8VyJ-80RAHS-fail: AccessDeniedException: User: arn:aws:sts::YOUR_AWS_ACCOUNT:assumed-role/NewRelicECSIntegration-Ne-NewRelicECSTaskExecution-1C0ODHVT4HDNT/8637b461f0f94d649e9247e2f14c3803 is not authorized to perform: secretsmanager:GetSecretValue on resource: arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:NewRelicLicenseKeySecret-Dh2dLkgV8VyJ-80RAHS-fail-DmLHfs status code: 400, request id: 9cf1881e-14d7-4257-b4a8-be9b56e09e3c",
   "stoppingAt": "2020-04-06T15:28:10.953000+02:00",
   ```

10. タスクが実行されているにもかかわらずデータが表示されない場合は、 [verbose log](/docs/infrastructure/infrastructure-troubleshooting/troubleshoot-logs/infrastructure-agent-logging-behavior) を生成し、エラーがないか調べてください。

停止したタスクの理由の詳細については、 [停止したタスク](#stopped-tasks) を参照してください。

### UIでのトラブルシューティング [#ui]

UIを使ってトラブルシューティングするには

1. AWSコンソールにログインし、「EC2 Container Service」セクションに移動します。

2. New Relic ECS インテグレーションをインストールしたクラスタをクリックします。

3. <DNT>
     **Services**
   </DNT>

   タブで、フィルターを使用してインテグレーション サービスを検索します。 自動インストール スクリプトを使用した場合、サービスの名前は`newrelic-infra`になります。 Fargate を使用している場合は、モニター サービスの名前になります。 見つかったら、名前をクリックします。

4. サービス ページには、サービスの

   <DNT>
     **Status**
   </DNT>

   が表示されます。 サービスに問題がない場合、 `ACTIVE`と表示されます。

5. 同じページで、

   <DNT>
     **Desired**
   </DNT>

   カウントは

   <DNT>
     **Running**
   </DNT>

   カウントと一致する必要があります。 これは、サービスが処理しているタスクの数です。 デーモン サービス タイプを使用するため、クラスター内のコンテナー インスタンスごとに 1 つのタスクが存在する必要があります。 すべてのタスクが実行されているため、保留カウントはゼロになるはずです。

6. <DNT>
     **Events**
   </DNT>

   タブを調べて、タスクのスケジュール設定または開始に関する問題がないか確認します。

7. サービスの

   <DNT>
     **Tasks**
   </DNT>

   タブで、

   <DNT>
     **Task status**
   </DNT>

   セレクターをクリックすると、実行中のタスクと停止したタスクを検査できます。

   <DNT>
     **Stopped**
   </DNT>

   ステータスを選択すると、起動に失敗したコンテナが表示されます。

8. タスクをクリックすると、タスクの詳細ページに移動します。

   <DNT>
     **Stopped reason**
   </DNT>

   の下に、タスクが停止された理由を説明するメッセージが表示されます。

9. タスクが実行されているにもかかわらずデータが表示されない場合は、 [verbose log](/docs/infrastructure/infrastructure-troubleshooting/troubleshoot-logs/infrastructure-agent-logging-behavior) を生成し、エラーがないか調べてください。

停止したタスクの理由の詳細については、 [停止したタスク](#stopped-tasks) を参照してください。

### 停止したタスクの理由 [#stopped-tasks]

[AWS ECS troubleshooting documentation](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/troubleshooting.html) には、実行中のタスクやサービスに関するエラーの一般的な原因に関する情報が掲載されています。タスクが停止するいくつかの理由については、以下を参照してください。

<DNT>
  **Task stopped with reason:**
</DNT>

```
Fetching secret data from AWS Secrets Manager 
  in region YOUR_AWS_REGION: 
  secret arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:YOUR_SECRET_NAME: 
  AccessDeniedException: User: arn:aws:sts::YOUR_AWS_ACCOUNT:assumed-role/YOUR_ROLE_NAME 
  is not authorized to perform: secretsmanager:GetSecretValue 
  on resource: arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:YOUR_SECRET_NAME 
  status code: 400, request id: 9cf1881e-14d7-4257-b4a8-be9b56e09e3c"
```

これは、タスク定義で`executionRoleArn`を使用して指定された IAM ロールが、 `NRIA_LICENSE_KEY`に使用されるシークレットにアクセスできないことを意味します。実行ロールには、シークレットを読み取るためのアクセス権を付与するポリシーがアタッチされている必要があります。

1. タスクの実行ロールを取得します。

   ```sh
   aws ecs describe-task-definition --task-definition newrelic-infra --output text --query taskDefinition.executionRoleArn
   ```

   `--task-definition newrelic-infra`を、サイドカー コンテナーを含む fargate タスクの名前に置き換えることができます。

   ```sh
   aws ecs describe-task-definition --task-definition YOUR_FARGATE_TASK_NAME --output text --query taskDefinition.executionRoleArn
   ```

2. ロールに付随するポリシーを一覧表示します。

   ```sh
   aws iam list-attached-role-policies --role-name YOUR_EXECUTION_ROLE_NAME
   ```

   これにより、3 つのポリシー`AmazonECSTaskExecutionRolePolicy` 、 `AmazonEC2ContainerServiceforEC2Role` 、および<InlinePopover type="licenseKey"/>への読み取りアクセスを許可する 3 番目のポリシーが返されます。 次の例では、ポリシーの名前は`NewRelicLicenseKeySecretReadAccess`です。

   ```json
   {
     "AttachedPolicies": [
       {
         "PolicyName": "AmazonECSTaskExecutionRolePolicy",
         "PolicyArn": "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
       },
       {
         "PolicyName": "AmazonEC2ContainerServiceforEC2Role",
         "PolicyArn": "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role"
       },
       {
         "PolicyName": "YOUR_POLICY_NAME",
         "PolicyArn": "arn:aws:iam::YOUR_AWS_ACCOUNT:policy/YOUR_POLICY_NAME"
       }
     ]
   }
   ```

3. デフォルトのポリシーバージョンを取得します。

   ```sh
   aws iam get-policy-version --policy-arn arn:aws:iam::YOUR_AWS_ACCOUNT:policy/YOUR_POLICY_NAME --version-id $(aws iam get-policy --policy-arn arn:aws:iam::YOUR_AWS_ACCOUNT:policy/YOUR_POLICY_NAME --output text --query Policy.DefaultVersionId)
   ```

   これにより、ポリシーの権限が取得されます。 AWS Secrets Manager を使用して <InlinePopover type="licenseKey"/>を保存した場合は Action`secretsmanager:GetSecretValue` のエントリがあり、 AWS Systems Manager の メンバ Store を使用した場合は `ssm:GetParameters` のエントリがあるはずです。

   <CollapserGroup>
     <Collapser
       id="aws-secrets-manager"
       title="AWS Secrets Manager"
     >
       ```json
       {
         "PolicyVersion": {
           "Document": {
             "Version": "2012-10-17",
             "Statement": [
               {
                 "Action": "secretsmanager:GetSecretValue",
                 "Resource": "arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:YOUR_SECRET_NAME",
                 "Effect": "Allow"
               }
             ]
           },
           "VersionId": "v1",
           "IsDefaultVersion": true,
           "CreateDate": "2020-03-31T13:47:07+00:00"
         }
       }
       ```
     </Collapser>

     <Collapser
       id="aws-systems-manager-parameter-store"
       title="AWS Systems Managerのパラメータストア"
     >
       ```json
       {
         "Version": "2012-10-17",
         "Statement": [
           {
             "Action": "ssm:GetParameters",
             "Resource": [
               "arn:aws:ssm:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:parameter/YOUR_SECRET_NAME"
             ],
             "Effect": "Allow"
           }
         ]
       }
       ```
     </Collapser>
   </CollapserGroup>
