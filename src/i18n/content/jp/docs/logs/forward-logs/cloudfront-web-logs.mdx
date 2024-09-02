---
title: Amazon CloudFront のアクセス ログを転送する
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
  - CloudFront
metaDescription: 'Configure New Relic logging for your Amazon CloudFront distribution, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Amazon CloudFront ディストリビューションからのログ記録を有効にして、Web アクセス ログを New Relic に送信できます。

## ログ送信のオプション [#log-types]

CloudFront からログを送信するには、標準ログまたはリアルタイム ログの 2 つのオプションがあります。

<DNT>**Standard logs**</DNT> CloudFront から S3 バケットに送信され、そこに保存されます。 次に、AWS Lambda トリガーを使用して、ログを S3 から New Relic に送信します。 [標準ログ (アクセスログ) の設定と使用については、Amazon CloudFront のドキュメント](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html)を参照してください。 これには、S3 バケットの作成と適切な権限の設定に関する詳細情報が記載されています。 標準ログにはすべてのデータ フィールドが含まれており、5 分ごとに S3 に送信され、その後 New Relic に送信されます。 Amazon コンソールで標準ログを設定し、S3 Lambda トリガー経由で New Relic に送信する方法の詳細な手順については、 [「標準ログの有効化」セクション](#enable-standard-logging)を参照してください。

<DNT>**Real-time logs**</DNT> Kinesis Data Stream 消費者 と Kinesis Data Firehose を使用してリクエストを受信してから数秒以内にNew Relicに配信されます。 [リアルタイムログの設定については、Amazon CloudFront のドキュメント](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html)を確認してください。 リアルタイム ログ は設定可能で、サンプリング レート (送信する ログ のパーセンテージ) を設定したり、 ログ レコードで受信する特定のフィールドを選択したり、 ログ を受信する特定のキャッシュ動作 (パス パターン) を定義したりできます。 リアルタイム ログでは、すべてのデータまたは失敗したデータのみを送信するための S3 バックアップ バケットも必要です。 したがって、リアルタイム ログを有効にするには[、S3 バケットを作成するための手順](#create-s3-bucket)にも従う必要があります。 Amazon コンソールで標準ログを設定し、S3 Lambda トリガー経由で New Relic に送信する方法の詳細な手順については、 [「リアルタイム ログの有効化」セクション](#enable-real-time-logging)を参照してください。

どちらのオプションでも、[組み込みのログ解析ルール](/docs/logs/ui-data/built-log-parsing-rules)を使用して CloudFront アクセス ログを自動的に解析し、クイックスタート ダッシュボードを使用してデータの洞察をすぐに得ることができます。組み込みの解析ルールを機能させ、提供されたクイックスタート ダッシュボードのウィジェットにデータを入力するには、手順で定義されているように`logtype`属性を構成する必要があります。一部のロギング フィールドのみを選択した場合のリアルタイム ログの解析の詳細については、「[解析」セクション](#parsing-real-time-logs)を参照してください。

## CloudFront ログを保存するための S3 バケットを作成する [#create-s3-bucket]

CloudFront ディストリビューションで標準ログまたはリアルタイム ログを有効にするには、最初に CloudFront アクセス ログの保存に使用する S3 バケットを作成する必要があります。

1. AWS マネジメントコンソールで、

   <DNT>
     **Services > All services > S3**
   </DNT>

   選択します。

2. <DNT>
     **Create bucket**
   </DNT>

   を選択します。

3. <DNT>
     **Bucket name**
   </DNT>

   を入力し、希望する

   <DNT>
     **AWS region**
   </DNT>

   を選択します。 (標準ログ記録を使用している場合は、S3 バケットが次のセクションで作成する Lambda 関数と同じリージョンにある必要があることに注意してください。)

4. <DNT>
     **Object ownership**
   </DNT>

   セクションで、

   <DNT>
     **ACLs enabled**
   </DNT>

   を選択します。

5. <DNT>
     **Create bucket**
   </DNT>

   を選択します。

標準ログまたはリアルタイム ログのいずれかを有効にできるようになりました。これらのオプションの手順については、読み続けてください。

## 標準ロギングを有効にする [#enable-standard-logging]

CloudFront ディストリビューションを更新して、標準ログを有効にします。

1. AWS マネジメントコンソールで、

   <DNT>
     **Services > All Services > CloudFront**
   </DNT>

   選択します。

2. ディストリビューション

   <DNT>
     **ID**
   </DNT>

   をクリックします。 \[全般] タブの \[設定] セクションで

   <DNT>
     **Edit**
   </DNT>

   を選択します。

3. <DNT>
     **Standard logging**
   </DNT>

   セクションで、

   <DNT>
     **On**
   </DNT>

   を選択してログ記録を有効にし、ログ記録の構成設定を表示します。

4. <DNT>
     **S3 bucket**
   </DNT>

   では、上記で作成した S3 バケット名を検索して選択します。

5. オプション: `cloudfront_logs`のようなログ接頭辞を追加できます。

6. <DNT>
     **Save changes**
   </DNT>

   を選択します。

5 分以内に、次のファイル名形式でログ ファイルが S3 バケットに表示されるようになります。

```
<optional prefix>/<distribution ID>.YYYY-MM-DD-HH.unique-ID.gz
```

次に、AWS Lambda 関数`NewRelic-log-ingestion-s3`をインストールして設定し、S3 のアクセス ログを New Relic に送信する必要があります。適切な`LOG_TYPE`環境変数を設定できるように、Amazon CloudFront ログに単一の Lambda 関数が必要になります。これにより、 [CloudFront 組み込みの解析ルール](/docs/logs/ui-data/built-log-parsing-rules/#cloudfront)と[クイックスタート ダッシュボード](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs)を使用できるようになります。この Lambda 関数がすでにリージョンにインストールされており、それを使用して他の S3 ログ (ALB/NLB ログなど) を New Relic に送信している場合は、Lambda 関数を別のリージョンに再度インストールする必要があります。また、前述したように、アクセス ログを保存するための S3 バケットと S3 ログを New Relic に送信するための Lambda 関数は同じリージョンにある必要があります。

これらの手順を実行するには:

7. ここの手順に従って、 [S3 からログを送信するように AWS Lambda を設定します](/docs/logs/forward-logs/aws-lambda-sending-logs-s3/)。

8. Lambda関数がインストールされたら、

   <DNT>
     **Functions > NewRelic-s3-log-ingestion**
   </DNT>

   を選択します。

9. S3の下の

   <DNT>
     **+ Add trigger**
   </DNT>

   ボタンを選択します。

10. <DNT>
      **Trigger Configuration**
    </DNT>

    の場合は、S3 を選択します。

11. <DNT>
      **Bucket**
    </DNT>

    では、上記で作成した S3 バケットを検索して選択します。

12. <DNT>
      **Recursive invocation**
    </DNT>

    セクションで、確認ボックスをオンにして、

    <DNT>
      **Add**
    </DNT>

    を選択します。

13. 関数の

    <DNT>
      **Configuration**
    </DNT>

    タブで、左側の

    <DNT>
      **Environment variables**
    </DNT>

    オプションを選択します。

14. <DNT>
      **Edit**
    </DNT>

    を選択し、 `LOG_TYPE`に`cloudfront-web`と入力します。

15. <DNT>
      **Save**
    </DNT>

    を選択します。

5 分以内に、ログ UI にログが表示され始めるはずです。ログを受信していることを確認するには、 [ログ UI の検索バー](/docs/logs/ui-data/use-logs-ui)で `logtype:cloudfront-web` を検索するか、次のような NRQL クエリを実行します。 `FROM Log SELECT * WHERE logtype='cloudfront-web'`

## リアルタイム ログを有効にする [#enable-real-time-logs]

CloudFront ディストリビューションのリアルタイム ログを有効にするには、最初に CloudFront ログを受信するための Kinesis Data Stream を作成する必要があります。

1. AWS マネジメントコンソールで、

   <DNT>
     **Services > Kinesis**
   </DNT>

   選択します。

2. <DNT>
     **Data streams**
   </DNT>

   選択し、次に

   <DNT>
     **Create data stream**
   </DNT>

   選択します。

3. <DNT>
     **Data stream name**
   </DNT>

   入力してください。 たとえば、 `CloudFront-DataStream` 。

4. 選択したデータ ストリーム容量モードを選択します。

5. <DNT>
     **Create data stream**
   </DNT>

   を選択します。

6. <DNT>
     **Consumers**
   </DNT>

   セクションで、

   <DNT>
     **Process with delivery stream**
   </DNT>

   を選択します。

7. <DNT>
     **Destination**
   </DNT>

   の場合は、

   <DNT>
     **New Relic**
   </DNT>

   を選択します。

8. <DNT>
     **Delivery stream name**
   </DNT>

   入力してください。 たとえば、 `CloudFront-DeliveryStream` 。

9. <DNT>
     **Destination**
   </DNT>

   設定セクションの HTTP エンドポイント URL で、

   <DNT>
     **New Relic logs - US**
   </DNT>

   または

   <DNT>
     **New Relic logs - EU**
   </DNT>

   選択します。

10. <DNT>
      **API key**
    </DNT>

    には、New Relic アカウントの

    <InlinePopover type="licenseKey"/>

    を入力します。

11. <DNT>
      **Add parameter**
    </DNT>

    を選択します。

12. 以下の手順 21 でログインするすべてのフィールドを選択する場合は、

    <DNT>
      **Key**
    </DNT>

    に`logtype`を入力し、

    <DNT>
      **Value**
    </DNT>

    に`cloudfront-rtl`を入力します。 以下の手順 21 でログインするフィールドのサブセットを選択する場合は、 `cloudfront-rtl-custom`と入力します。 すべてのフィールドを選択しない場合は、ログのカスタム解析ルールを作成する方法については、以下の[「リアルタイム ログ解析」セクション](#parsing-real-time-logs)を参照してください。

13. <DNT>
      **Backup settings**
    </DNT>

    セクションでは、好みに応じて、

    <DNT>
      **Failed data**
    </DNT>

    のみを選択するか、

    <DNT>
      **Source record backup in Amazon S3**
    </DNT>

    オプションに

    <DNT>
      **All data**
    </DNT>

    選択できます。

14. S3 バックアップ バケットの場合は、

    <DNT>
      **Browse**
    </DNT>

    を選択して検索し、CloudFront ログを保存するために上記で作成した S3 バケット名を選択します。

15. <DNT>
      **Create delivery stream**
    </DNT>

    を選択します。

次に、リアルタイム ロギング構成を作成し、CloudFront ディストリビューションにアタッチします。

16. AWS マネジメントコンソールで、

    <DNT>
      **Services > CloudFront**
    </DNT>

    選択します。

17. 左側の

    <DNT>
      **Telemetry section**
    </DNT>

    で、

    <DNT>
      **Logs**
    </DNT>

    を選択します。

18. <DNT>
      **Real-time configurations**
    </DNT>

    タブをクリックし、

    <DNT>
      **Create configuration**
    </DNT>

    を選択します。

19. 構成名を入力します。例: `CloudFront-RealTimeLogs` .

20. `1`から`100`までのサンプリング レートを入力します。

21. <DNT>
      **Fields**
    </DNT>

    の場合は、

    <DNT>
      **All fields**
    </DNT>

    を選択するか、ログに含めるフィールドを選択します。

22. <DNT>
      **Endpoint**
    </DNT>

    には、手順 3 で作成したデータ ストリーム名を選択します。 例: `CloudFront-DataStream` 。

23. <DNT>
      **Distrubutions**
    </DNT>

    セクションで、CloudFront ディストリビューション ID を選択します。

24. <DNT>
      **Cache behaviors**
    </DNT>

    の場合は、

    <DNT>
      **Default (\*)**
    </DNT>

    を確認してください。

25. <DNT>
      **Create configuration**
    </DNT>

    を選択します。

数分以内に、 [ログ UI](/docs/logs/ui-data/use-logs-ui)にログが表示され始めるはずです。リアルタイム ログを受信していることを確認するには、ログ UI 検索バーで `logtype:cloudfront-rtl*` を検索するか、次のような NRQL クエリを使用して検索できます。 `FROM Log SELECT * WHERE logtype LIKE 'cloudfront-rtl%'`

## リアルタイムのログ解析 [#parsing-real-time-logs]

リアルタイム ログの組み込み解析ルールは、すべてのフィールドがログに記録されることを前提としています。フィールドのサブセットのみをログに記録することを選択した場合は、ログ形式に一致するカスタム解析ルールを定義する必要があります。これは、ログを正しく解析し、[クイックスタート ダッシュボード](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs)を使用するために必要です。

カスタム解析ルールを作成するには、ログ UI の<DNT>**Manage data**</DNT>セクションで<DNT>**Parsing**</DNT>を選択します。

1. <DNT>
     **Rule name**
   </DNT>

   には`CloudFront custom parsing rule`と入力します。

2. <DNT>
     **Filter logs based on NRQL**
   </DNT>

   の場合は`logtype='cloundfront-rtl-custom'`と入力します。

3. 以下の Grok 解析ロジックを更新して、リアルタイム ログ設定で選択したフィールド

   <DNT>
     **only**
   </DNT>

   が含まれるようにします。 たとえば、 `cs_headers`フィールドを含めないことを選択した場合は、Grok から`%{SPACE}%{NOTSPACE:cs_headers}%`を削除します。

   ```
   ^%{NOTSPACE:timestamp}.\d{3}%{SPACE}%{NOTSPACE:c_ip}%{SPACE}%{NUMBER:time_to_first_byte:INT}%{SPACE}%{NUMBER:sc_status:INT}%{SPACE}%{NUMBER:sc_bytes:INT}%{SPACE}%{WORD:cs_method}%{SPACE}%{NOTSPACE:cs_protocol}%{SPACE}%{NOTSPACE:cs_host}%{SPACE}%{NOTSPACE:cs_uri_stem}%{SPACE}%{NUMBER:cs_bytes:INT}%{SPACE}%{NOTSPACE:x_edge_location}%{SPACE}%{NOTSPACE:x_edge_request_id}%{SPACE}%{NOTSPACE:x_host_header}%{SPACE}%{NUMBER:time_taken:INT}%{SPACE}%{NOTSPACE:cs_protocol_version}%{SPACE}%{NOTSPACE:cs_ip_version}%{SPACE}%{NOTSPACE:cs_user_agent}%{SPACE}%{NOTSPACE:cs_referer}%{SPACE}%{NOTSPACE:cs_cookie}%{SPACE}%{NOTSPACE:cs_uri_query}%{SPACE}%{NOTSPACE:x_edge_response_result_type}%{SPACE}%{NOTSPACE:x_forwarded_for}%{SPACE}%{NOTSPACE:ssl_protocol}%{SPACE}%{NOTSPACE:ssl_cipher}%{SPACE}%{NOTSPACE:x_edge_result_type}%{SPACE}%{NOTSPACE:fle_encrypted_fields}%{SPACE}%{NOTSPACE:fle_status}%{SPACE}%{NOTSPACE:sc_content_type}%{SPACE}%{NOTSPACE:sc_content_len}%{SPACE}%{NOTSPACE:sc_range_start}%{SPACE}%{NOTSPACE:sc_range_end}%{SPACE}%{NUMBER:c_port:INT}%{SPACE}%{NOTSPACE:x_edge_detailed_result_type}%{SPACE}%{NOTSPACE:c_country}%{SPACE}%{NOTSPACE:cs_accept_encoding}%{SPACE}%{NOTSPACE:cs_accept}%{SPACE}%{NOTSPACE:cache_behavior_path_pattern}%{SPACE}%{NOTSPACE:cs_headers}%{SPACE}%{NOTSPACE:cs_header_names}%{SPACE}%{NOTSPACE:cs_headers_count}$
   ```

4. 更新された Grok を解析ロジック セクションに貼り付け、

   <DNT>
     **Test grok**
   </DNT>

   を選択してパーサーが動作していることを確認します。

5. ルールを有効にして、

   <DNT>
     **Save parsing rule**
   </DNT>

   を選択します。

<img
  title="Creating a CloudFront custom parsing rule"
  alt="Creating a CloudFront custom parsing rule"
  src="/images/logs_screenshot-crop_Cloudfront-log-parsing.webp"
/>

<figcaption>
  CloudFront カスタム解析設定のスクリーンショット。
</figcaption>

## 次は何ですか？ [#what-next]

<img
  title="Dashboard in Amazon CloudFront Access Logs quickstart"
  alt="Dashboard in Amazon CloudFront Access Logs quickstart"
  src="/images/logs_screenshot-crop_Cloudfront-logs-dashboard.webp"
/>

<figcaption>
  Amazon CloudFront Access Logs のクイックスタートには、事前構築済みのダッシュボードが含まれています。
</figcaption>

次のステップのアイデアを次に示します。

* 事前に構築されたダッシュボードを使用して数分で開始し、Amazon CloudFront アクセスログから主要なメトリクスを確認します。 [Amazon CloudFront アクセスログのクイックスタート](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs)に移動し、

  <DNT>
    **Install now**
  </DNT>

  をクリックします。

* [ログ UI](/docs/logs/log-management/ui-data/use-logs-ui)を使用して、プラットフォーム全体のログ データを探索します。

* [コンテキスト](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents)機能のログを使用してログを転送することで、アプリケーションとプラットフォームのパフォーマンス データの両方をより深く可視化できます。

* [アラートを](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions)設定します。

* [データをクエリ](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/)し、[ダッシュボードを作成します](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。

## ログ転送を無効にする [#disable]

ログ転送機能を無効にするには、2 つのオプションがあります。New Relic への S3 ログの送信を停止したいだけの場合は、 `NewRelic-log-ingestion-s3` Lambda 関数で S3 トリガーを削除できます。Amazon CloudFront アクセス ログを完全に無効にする場合は、トリガーを削除し、CloudFront ディストリビューションの一般設定でログをオフにする必要があります。
