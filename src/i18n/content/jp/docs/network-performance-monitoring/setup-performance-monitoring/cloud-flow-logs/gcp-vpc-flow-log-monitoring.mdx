---
title: Google VPC フロー ログ モニタリングを設定する
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

Google Cloud の Virtual Private Cloud Flow (VPC) ログは、New Relic へのログのスムーズな送信をサポートしています。GCP 資産全体からの VPC フロー ログを使用すると、パフォーマンス分析とネットワーク接続のトラブルシューティングに関する重要な洞察をすばやく理解できます。

<img
  title="Google VPC Flow Logs overview"
  alt="Google VPC Flow Logs overview"
  src="/images/network_screenshot-crop_cloud-flow-logs-overview.webp"
/>

<figcaption>
  <DNT>**Add [Google's VPC Flow Logs to your New Relic account](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**</DNT>。
</figcaption>

Google Virtual Private Cloud (VPC) を使用すると、スケーラブルな GCP インフラストラクチャを使用して、分離された安全な仮想ネットワークに GCP リソースを起動できます。

<ButtonLink
  role="button"
  to="https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9"
  variant="primary"
>
  Google VPC フロー ログを追加する
</ButtonLink>

## 前提条件 [#prerequisites]

### NewRelicの前提条件 [#prerequisites-NR]

* NewRelicアカウント。持っていませんか？[無料でお申し込み頂けます！](https://newrelic.com/signup)クレジットカードは必要ありません。

### GCP の前提条件 [#prerequisites-gcp]

<Callout variant="important">
  Google VPC フロー ログは、FedRAMP のお客様にはまだサポートされていません。それまでの間、 [FedRAMP 取り込み API](/docs/security/security-privacy/compliance/fedramp-compliant-endpoints#data-ingest-apis)を使用できます。
</Callout>

* 環境：

  * [GCloud CLI](https://cloud.google.com/sdk/docs/install)にアクセスできるか、環境に terraform テンプレートをデプロイできる必要があります。
  * トラフィックを New Relic に送信するサブネットを有効にして、フロー ログを収集します。その方法については、 [Google の公式ドキュメント](https://cloud.google.com/vpc/docs/using-flow-logs#enable-logging-existing)を参照してください。

* 権限:

  * Pub/Sub トピックを作成し、その権限を設定する機能。
  * ログ ルーターを作成および更新する機能。
  * Dataflow ジョブを作成する機能。

## 追加の Google VPC フロー ログを送信する [#additional-gcp-vpc-flow-logs]

Google VPC フロー ログを New Relic に送信するには、次の手順に従います。

1. <DNT>**[guided install process](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**</DNT>開始します。

2. <DNT>**Select an account**</DNT>ドロップダウンから、Google VPC フローログを送信する New Relic アカウントを選択し、 <DNT>**Continue**</DNT>をクリックします。

3. <DNT>**Choose Setup Options**</DNT>セクション:

   * <DNT>
       **Setup Method**
     </DNT>

     では、GCloud CLI または Terraform を使用してアカウントにリソースを作成することができます。 Google 環境ですでに Terraform を使用している場合は、Terraform の方が簡単になるかもしれません。

   * フローログを取り込む

     <DNT>
       **GCP project ID**
     </DNT>

     を入力します。

   * <DNT>
       **Region**
     </DNT>

     ドロップダウンで、GCP リージョンを選択します。 この地域は、地域リソースを設定するときに使用されます。

4. <DNT>**Enable Flow Logging**</DNT> - サブネットのフロー ログをオンにします。 フロー ログを収集するサブネットごとにフロー ログをオンにする必要があります。 この設定は、CLI、Cloud Console、またはチームが使用するその他のクラウド構成ツールを使用して変更できます。

   <Callout variant="tip">
     フロー ログを設定する場合、サンプリング レートと集約間隔を調整する必要がある場合があります。サンプリング レートを高くするか、集計間隔を短くすると、より詳細なデータが生成されますが、データの取り込みコストが高くなります。
   </Callout>

5. Logging Sink の定義 - Google Cloud Platform (GCP) でログ ルーターを設定します。ログ ルーターを使用すると、New Relic に送信するフロー ログを選択できます。単一のサブネット、複数のサブネット、VPC 全体などのフロー ログを送信できます。

6. セットアップ方法として<DNT>**GCloud CLI**</DNT>選択した場合:

   * <DNT>
       **Create Pub/Sub resources**
     </DNT>

     \- GCloud CLI で生成されたコマンドを実行して、Pub/Sub トピックとサブスクリプションを作成します。

   * <DNT>
       **Create Logging Sink**
     </DNT>

     \- 生成されたコマンドを GCloud CLI で実行して、ログルーターを作成します。

   * <DNT>
       **Setup up Pub/Sub permissions**
     </DNT>

     \- 生成されたコマンドを実行して、ログ ルーターに関連付けられたライター ID を取得します。 コマンドの結果をコピーして、次のテキストボックスに貼り付けます。 次に、次の 2 つのコマンドを実行して、Pub/Sub トピックの権限を変更し、ログルーターからのアクセスを許可します。

   * <DNT>
       **Create Dataflow job**
     </DNT>

     \- 生成されたコマンドを実行して、複数のフローをまとめて New Relic に大量に送信するデータフロー ジョブを作成します。 これにより、コストを節約し、レート制限を回避することができます。

   <Callout variant="tip">
     このデータ取り込みに使用する新しい<InlinePopover type="licenseKey"/>自動的に生成されます。 キーを再生成するには、 <DNT>**Generate and use a new key**</DNT>をクリックします。
   </Callout>

7. セットアップ方法として<DNT>**Terraform**</DNT>選択した場合:

   * <DNT>
       **Run Terraform template**
     </DNT>

     \- 提供されている Terraform テンプレートを GCP プロジェクトにデプロイして、VPC フロー ログを New Relic に送信するために必要なすべてのリソースを作成します。

8. [NewRelicでネットワークパフォーマンスデータを視覚化します](/docs/network-performance-monitoring/monitoring-network-data/visualize-network-data)。

## 既存の統合を更新する \[#]

一部のサブネットから New Relic への Google VPC フロー ログの送信をすでに開始しているが、送信する VPC フロー ログの数を増やしたり減らしたりしたい場合:

1. 新しいサブネットでは、Google Cloud Platform (GCP) でフロー ロギングが有効になっていることを確認してください。

2. <DNT>
     **Logging Sink**
   </DNT>

   を定義したときに作成した

   <DNT>
     **Log Router**
   </DNT>

   を更新して、その[フィルター条件](https://cloud.google.com/logging/docs/view/logging-query-language)で、New Relic に送信する新しい VPC フローログのセットをキャプチャできるようにします。

   <Callout variant="tip">
     [ガイド付きインストール プロセス](https://one.newrelic.com/marketplace?duration=1800000&state=00731ead-620f-4a71-b1fa-b4fc6af24fca)では、フィルター条件の例をいくつか見つけることができます。環境が複雑な場合は、必要に応じてこれらの条件を調整する必要があります。
   </Callout>

<InstallFeedback/>
