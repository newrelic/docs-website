---
title: ECSインテグレーションのインストール
tags:
  - Integrations
  - Elastic Container Service integration
  - Installation
metaDescription: How to install New Relic's Amazon ECS integration.
freshnessValidatedDate: never
translationType: human
---

New RelicのECSインテグレーションは、Amazon ECS環境からのパフォーマンスデータをレポートおよび表示します。

## インストールの概要 [#overview]

[インストールする](#install-options)前に、次の2つの起動タイプに対してinfrastructureエージェント（`newrelic-infra`）がどのようにデプロイされるかの概要を理解しておくとよいでしょう。

* <DNT>
    **EC2 and EXTERNAL (ECS Anywhere) launch type:**
  </DNT>

  当社のエージェントは、デーモンスケジューリング戦略を使用して、サービスとしてECSクラスタにデプロイされます（[こちらのAWSドキュメントで説明](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html)）。これにより、クラスタのすべてのEC2インスタンスにエージェントがインストールされ、ECSとDockerコンテナが監視されます。

* <DNT>
    **AWS Fargate launch type:**
  </DNT>

  監視するすべてのタスクで、エージェントはサイドカーとしてデプロイされます。オプション：[AWSがサイドカーを定義する方法の詳細をご覧ください](https://aws.github.io/copilot-cli/docs/developing/sidecars/)。

## インストールオプション [#install-options]

必要なインストールを選択します。

* [AWS CloudFormationを使用してインストールする](#cloud-formation-install)
* [自動スクリプトを使用してインストールする](#auto-script-install)
* [手動でインストールする](#manual-install)

## CloudFormationを使用してインストールする [#cloud-formation-install]

AWS CloudFormationを使用したインストールを支援するために、EC2、EXTERNAL（ECS Anywhere）、およびAWS Fargate起動タイプのAWSアカウントに、ECSインテグレーションをインストールするCloudFormationテンプレートがいくつか用意されています。

CloudFormationを使用してインストールするには：

1. ECSインテグレーションタスクを登録するには、[このスタック](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://nr-downloads-main.s3.amazonaws.com/infrastructure_agent/integrations/ecs/cloudformation/task/master.yaml&stackName=NewRelicECSIntegration)をデプロイします。スタックを目的のリージョンにデプロイしていることを確認してください。このスタックは次のリソースを作成します。

   * New Relic

     <InlinePopover type="licenseKey"/>

     を保存するシークレット

   * ライセンスキーにアクセスするためのポリシー

   * ライセンスキーへのアクセス権を持つ、ECSタスク`ExecutionRole`として使用されるインスタンスロール

   * EC2および外部（ECS Anywhere）の起動タイプ：New Relic Infrastructure ECSインテグレーションタスクを登録する

2. 起動タイプに応じて追加の手順に従ってください。

   <CollapserGroup>
     <Collapser
       id="ec2-cloudformation"
       title="EC2起動タイプ"
     >
       すべてのEC2コンテナインスタンスでタスクを実行するサービスを作成するには、[このスタック](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://nr-downloads-main.s3.amazonaws.com/infrastructure_agent/integrations/ecs/cloudformation/service.yaml&NewRelicInfraTaskVersion=1)をデプロイします。

       EC2起動タイプを選択します。次に、`newrelic-infra`という名前のサービスがクラスタ内に作成されます。
     </Collapser>

     <Collapser
       id="external-cloudformation"
       title="外部（ECS Anywhere）起動タイプ"
     >
       すべての外部コンテナインスタンスでタスクを実行するサービスを作成するには、[このスタック](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://nr-downloads-main.s3.amazonaws.com/infrastructure_agent/integrations/ecs/cloudformation/service.yaml&NewRelicInfraTaskVersion=1)をデプロイします。

       EXTERNAL起動タイプを選択します。次に、`newrelic-infra-external`という名前のサービスがクラスタ内に作成されます。
     </Collapser>

     <Collapser
       id="fargate-cloudformation"
       title="AWS Fargate起動タイプ"
     >
       1. デプロイするサイドカーコンテナを含むタスク定義の例をダウンロードします。

          ```sh
          curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-fargate-example-latest.json
          ```

          <Callout variant="tip">
            Gravitonの場合は、`"cpuArchitecture": "X86_64"`を`"cpuArchitecture": "ARM64"`に置き換えます。
          </Callout>

       2. このタスク定義の`newrelic-infra`コンテナを、監視するタスク定義にサイドカーとして追加します。このタスク例では、アプリケーションのコンテナがプレースホルダー`busybox`コンテナを置き換えます。
     </Collapser>
   </CollapserGroup>

完了したら、[次の手順](#next-steps)を参照してください。

## 自動スクリプトでインストールする [#auto-script-install]

[インストールオプション](#install-overview)の1つは、インストールスクリプトを使用することです。自動インストールスクリプトを使用するには：

1. ECSインテグレーションインストーラをダウンロードします

   ```sh
   curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-installer.sh
   ```

2. インストーラに実行権限を追加します

   ```sh
   chmod +x newrelic-infra-ecs-installer.sh
   ```

3. `-h`で実行してドキュメントと要件を確認します

   ```sh
   ./newrelic-infra-ecs-installer.sh -h
   ```

4. AWSプロファイルが ECSクラスタが作成されたのと同じリージョンを指していることを確認します

   ```sh
   aws configure get region
   [output] us-east-1
   [output] 
   aws ecs list-clusters
   [output] YOUR_CLUSTER_ARNS 	
   [output] arn:aws:ecs:us-east-1:YOUR_AWS_ACCOUNT:cluster/YOUR_CLUSTER
   ```

5. <InlinePopover type="licenseKey"/>とクラスタ名を指定してインストーラーを実行します。

   <CollapserGroup>
     <Collapser
       id="auto-script-ec2"
       title="EC2起動タイプ"
     >
       ```sh
       ./newrelic-infra-ecs-installer.sh -c YOUR_CLUSTER_NAME -l YOUR_LICENSE_KEY
       ```
     </Collapser>

     <Collapser
       id="auto-script-external"
       title="外部（ECS Anywhere）起動タイプ"
     >
       ```sh
       ./newrelic-infra-ecs-installer.sh -c YOUR_CLUSTER_NAME -l YOUR_LICENSE_KEY -e
       ```
     </Collapser>

     <Collapser
       id="auto-script-fargate"
       title="AWS Fargate起動タイプ"
     >
       ```sh
       ./newrelic-infra-ecs-installer.sh -f -c YOUR_CLUSTER_NAME -l YOUR_LICENSE_KEY
       ```
     </Collapser>
   </CollapserGroup>

6. Fargate起動タイプ（EC2起動タイプではない）の追加手順：

   * デプロイするサイドカーコンテナを含むタスク定義の例をダウンロードします。

     ```sh
     curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-fargate-example-latest.json
     ```

     <Callout variant="tip">
       Gravitonの場合は、`"cpuArchitecture": "X86_64"`を`"cpuArchitecture": "ARM64"`に置き換えます。
     </Callout>

     作成したばかりの`NewRelicECSTaskExecutionRole`をタスク実行ロールとして使用する必要があります。ロールにアタッチされたポリシー（すべての起動タイプ）：

     * `NewRelicSSMLicenseKeyReadAccess` ライセンスキーを使用してSSMにアクセスできるようになります。
     * `AmazonECSTaskExecutionRolePolicy`

   * 次に、監視したいコンテナをサイドカーとして追加できます

完了したら、[次の手順](#next-steps)を参照してください。

## 手動インストール

[インストールオプション](#install-overview)の1つは、[自動インストーラスクリプト](#auto-script-install)によって実行される手順を手動で実行することです。`awscli`ツールを使用してこれを行う方法について説明します。

1. AWSプロファイルが ECSクラスタが作成されたのと同じリージョンを指していることを確認します

   ```sh
   aws configure get region
   [output] us-east-1
   [output] 
   aws ecs list-clusters
   [output] YOUR_CLUSTER_ARNS
   [output] arn:aws:ecs:us-east-1:YOUR_AWS_ACCOUNT:cluster/YOUR_CLUSTER
   ```

2. <InlinePopover type="licenseKey"/>をSystems Manager（SSM）パラメーターとして保存します。

   ```sh
   aws ssm put-parameter \
     --name "/newrelic-infra/ecs/license-key" \
     --type SecureString \
     --description 'New Relic license key for ECS monitoring' \
     --value "NEW_RELIC_LICENSE_KEY"
   ```

3. ライセンスキーパラメーターにアクセスするためのIAMポリシーを作成します

   ```sh
   aws iam create-policy \
     --policy-name "NewRelicSSMLicenseKeyReadAccess" \
     --policy-document "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Action\":[\"ssm:GetParameters\"],\"Resource\":[\"ARN_OF_LICENSE_KEY_PARAMETER\"]}]}" \
     --description "Provides read access to the New Relic SSM license key parameter"
   ```

4. タスク実行ロールとして使用するIAMロールを作成します

   ```sh
   aws iam create-role \
     --role-name "NewRelicECSTaskExecutionRole" \
     --assume-role-policy-document '{"Version":"2008-10-17","Statement":[{"Sid":"","Effect":"Allow","Principal":{"Service":"ecs-tasks.amazonaws.com"},"Action":"sts:AssumeRole"}]}' \
     --description "ECS task execution role for New Relic infrastructure"
   ```

5. ポリシー`NewRelicSSMLicenseKeyReadAccess`と`AmazonECSTaskExecutionRolePolicy`をロールにアタッチします

   ```sh
   aws iam attach-role-policy \
     --role-name "NewRelicECSTaskExecutionRole" \
     --policy-arn "POLICY_ARN"
   ```

6. 詳細な手順については、以下の起動タイプを選択してください

   <CollapserGroup>
     <Collapser
       id="manual-ec2"
       title="EC2およびEXTERNAL（ECS Anywhere）起動タイプ"
     >
       EC2起動タイプの追加手順：

       1. New Relic ECSインテグレーションのタスク定義テンプレートファイルをダウンロードします。

          ```sh
          curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-ec2-latest.json
          ```

       2. テンプレートファイル内のタスク実行ロールを、新しく作成したロールに置き換えます。

          ```json
          "executionRoleArn": "NewRelicECSTaskExecutionRole",
          ```

       3. `secret`の`valueFrom`属性をSystems Managerパラメーターの名前に置き換えます。

          ```json
          "secrets": [
            {
              "valueFrom": "/newrelic-infra/ecs/license-key",
              "name": "NRIA_LICENSE_KEY"
            }
          ],
          ```

       4. タスク定義ファイルを登録します。

          ```sh
          aws ecs register-task-definition --cli-input-json file://newrelic-infra-ecs-ec2-latest.json
          ```

       5. 登録されたタスクの[デーモンスケジューリング](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html)戦略を使用してサービスを作成します。

          EC2起動タイプの場合：

          ```sh
          aws ecs create-service --cluster "YOUR_CLUSTER_NAME" --service-name "newrelic-infra" --task-definition "newrelic-infra" --scheduling-strategy DAEMON --launch-type EC2
          ```

          EXTERNAL（ECS Anywhere）起動タイプの場合：

          ```sh
          aws ecs create-service --cluster "YOUR_CLUSTER_NAME" --service-name "newrelic-infra-external" --task-definition "newrelic-infra" --scheduling-strategy DAEMON --launch-type EXTERNAL
          ```
     </Collapser>

     <Collapser
       id="manual-fargate"
       title="AWS Fargate起動タイプ"
     >
       AWS Fargate起動タイプの追加手順：

       1. デプロイするサイドカーコンテナを含むタスク定義の例をダウンロードします。

          ```sh
          curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-fargate-example-latest.json
          ```

          <Callout variant="tip">
            Gravitonの場合は、`"cpuArchitecture": "X86_64"`を`"cpuArchitecture": "ARM64"`に置き換えます。
          </Callout>

       2. このタスク定義の`newrelic-infra`コンテナを、監視するタスク定義にサイドカーとして追加します。このタスク例では、アプリケーションのコンテナがプレースホルダー`busybox`コンテナを置き換えます。
     </Collapser>
   </CollapserGroup>

完了したら、[次の手順](#next-steps)を参照してください。

<InstallFeedback/>

## インストール後の次の手順 [#next-steps]

このインテグレーションをインストールした後：

* 数分待ってから、[UIでデータを探します](/docs/ecs-integration-understand-use-data)
* 推奨：[ECSクラウドインテグレーション](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ecsecr-monitoring-integration)をインストールします。これにより、クラスタやサービスに関する情報を含む他のECSデータが取得されます
* [推奨アラート条件](/docs/ecs-integration-recommended-alert-conditions)を参照してください
* このプロセスによって作成される[AWSリソース](#aws-resources)を理解します

## 作成されたAWSリソース [#aws-resources]

デフォルト/推奨値を使用してECSインテグレーションをインストールすると、AWSで次のことが行われます。

* Systems Manager（SSM）パラメーター`/newrelic-infra/ecs/license-key`を作成します。このシステムパラメーターにはNew Relic

  <InlinePopover type="licenseKey"/>

  が含まれています。

* IAMポリシー`NewRelicSSMLicenseKeyReadAccess`を作成します。これにより、ライセンスキーを使用してSSMライセンスへのアクセスが可能になります

* [タスク実行ロール](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html)として使用するIAMロール`NewRelicECSTaskExecutionRole`を作成します。ロールにアタッチされたポリシー：

  * `NewRelicSSMLicenseKeyReadAccess` （インストーラにより作成）
  * `AmazonECSTaskExecutionRolePolicy`

* EC2および外部（ECS Anywhere）起動タイプの`newrelic-infra` ECSタスク定義を登録します

* EC2[起動タイプ](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html)の場合、以下も行われます

  * [デーモンスケジューリング](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html)戦略とEC2起動タイプを使用して、登録されたタスクのサービス`newrelic-infra`を作成します。

* EXTERNAL（ECS Anywhere）[起動タイプ](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html)の場合、以下も行われます

  * [デーモンスケジューリング](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html)戦略とEXTERNAL（ECS Anywhere）起動タイプを使用して、登録されたタスクのサービス`newrelic-infra-external`を作成します
