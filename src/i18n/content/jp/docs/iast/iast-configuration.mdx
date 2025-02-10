---
title: IAST設定
tags:
  - IAST
  - New Relic IAST
  - Configuration
metaDescription: Find out how to configure IAST.
freshnessValidatedDate: '2024-09-16T00:00:00.000Z'
translationType: machine
---

スキャンのスケジュールを処理するように IAST を構成できます。 これらの設定を使用すると、特定のAPI 、脆弱性、脆弱性のカテゴリをIAST分析から除外できます。 IAST スキャンを遅らせたり、特定の時間にスケジュールしたりすることもできます。

## IASTスキャンのスケジュール設定 [#scheduling-iast-scans]

2 つの変数を使用して、スケジュールされた IAST スキャンを開始および停止できます。 これらの変数を使用すると、IAST スキャンの特定の時間を設定したり、アプリケーションからの IAST スキャン開始時間に遅延を追加したりできます。

### スケジュールされたIASTスキャンを構成する [#configure-scheduled]

`newrelic.yml`設定ファイルを開いて、 `scan_schedule`を設定します。

```yml
security:
  scan_schedule:
    delay: 0                     # In minutes, default is 0 min
    duration: 0                  # In minutes, default is forever
    schedule: ""                 # Cron Expression to define start time
    always_sample_traces: false  # regardless of scan schedule
```

<CollapserGroup>
  <Collapser
    id="delay"
    title={<><InlineCode>
      delay
    </InlineCode> (分単位)</>
    }
  >
    `delay`フィールドは、アプリケーションの起動後に IAST スキャンが開始されるまでの時間を分単位で指定します。 デフォルト値は`0`です。
  </Collapser>

  <Collapser
    id="duration"
    title={<><InlineCode>
      duration
    </InlineCode> (分単位)</>
    }
  >
    `duration`フィールドは、IAST スキャンが実行される時間の長さを分単位で指定します。 デフォルト値は永久で、制限はありません。

    たとえば、 `duration: 300`設定すると、IAST スキャンは 300 分 (5 時間) 実行されます。
  </Collapser>

  <Collapser
    id="schedule-cron"
    title={<><InlineCode>
      schedule
    </InlineCode> (Cron式)</>
    }
  >
    `schedule`フィールドは、IAST スキャンをいつ実行するかを定義する cron 式を指定します。 デフォルトでは、 `schedule`は無効になっています。 [cron 式は、](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html)スペースで区切られた 6 つのフィールドで構成されます。

    * **second** : 秒を指定します (0-59)
    * **minute**: 分を指定します (0-59)
    * **hour** : 時間を指定します (0-23)
    * **day** : 月の日付を指定します (1-31)
    * **month**: 年の月 (1-12 または JAN-DEC)
    * **day\_of\_week** : 曜日を指定します（1～7またはSUN～SAT）。1は日曜日です。

    <Callout variant="important">
      `duration`が指定されていない場合はどうなりますか? 期間を省略すると、 IASTスキャンを決して停止してはいけないことを意味します。 このシナリオでは、指定されたスケジュールは定期的な操作ではなく、開始時刻として扱われます。 スキャンは中断または終了することなく無期限に継続されます。 たとえば、 `schedule: "0 0 0 * * ?"` IAST スキャンを毎日午前 12 時に実行するようにスケジュールします。
    </Callout>
  </Collapser>

  <Collapser
    id="always-sample-traces"
    title={<><InlineCode>
      always_sample_traces
    </InlineCode> (ブール値)</>
    }
  >
    `always-sample-traces` IAST がバックグラウンドでトレース データをアクティブに収集できるようにし、セキュリティ エージェントは収集されたこのデータを使用して、スケジュールされた時間に IAST スキャンを実行します。 ただし、セッション管理を備えたアプリケーションの場合は、 `always_sample_traces`フラグのデフォルト値を`false`に設定したままにしておくことをお勧めします。 これにより、IAST のサンプリングとスキャンが指定されたウィンドウに制限されます。 セッションの有効期間は通常短く、多くの場合 30 分以内に終了します。 このシナリオでは、ウィンドウの前でトレースをサンプリングすると、価値のあるインサイトが提供されず、脆弱性が失われる可能性があります。 デフォルトでは、 `always_sample_traces`の値は false です。
  </Collapser>
</CollapserGroup>

### 例 [#configure-scheduled-examples]

<CollapserGroup>
  <Collapser id="start-30-minutes" title="IAST をアプリケーションの起動から 30 分後に開始し、300 分間実行するようにスケジュールします。">
    IAST をアプリケーションの起動後 30 分後に開始し、300 分間実行するようにスケジュールするには、遅延を 30 に設定し、期間を 300 に設定する必要があります。

    ```yml
    security:
      scan_schedule:
        delay: 30         # In minutes, default is 0 min
        duration: 300     # In minutes, default is forever
    ```
  </Collapser>

  <Collapser id="specific-time" title="特定の時間にIASTを実行するようにスケジュールする">
    IAST を特定の時間に実行するようにスケジュールするには、希望する時間を表す cron 式にスケジュールを設定します。 たとえば、IAST を毎日深夜に実行するようにスケジュールするには、スケジュールを`"0 0 0 * * ?"`に設定します。

    ```yml
    security:
      scan_schedule:
        schedule: "0 0 0 * * ?"     # By default, schedule is inactive
    ```

    <Callout variant="important">
      遅延とスケジュールの両方が指定されている場合は、遅延が優先されます。 これは、スケジュールに関係なく、指定された遅延後に IAST が開始されることを意味します。
    </Callout>
  </Collapser>

  <Collapser id="iast-sample-traces" title="IAST を常にトレースをサンプリングするように設定する">
    IAST で常にトレースをサンプリングする場合は、 `always_sample_traces` `true`に設定します。 デフォルトでは、これは`false`に設定されており、IAST はアクティブなスキャン ウィンドウ内のトレースのみをサンプリングすることを意味します。

    ```yml
    security:
      scan_schedule:
        delay: 30                   # In minutes, default is 0 min
        always_sample_traces: true  # regardless of scan schedule
    ```
  </Collapser>
</CollapserGroup>

## IASTスキャンから除外 [#exclude-iast-scans]

IASTスキャンから除外設定を使用すると、特定のAPI 、脆弱性カテゴリ、および問題をIAST分析から除外できます。 これは、アプリケーションの特定のコンポーネントが安全であることがわかっている場合や、特定の API の IAST スキャンによってログイン スロットリングなどのアプリケーションの誤動作が発生する可能性がある場合に役立ちます。

IASTスキャンの除外を構成するには、`newrelic.yml` 設定ファイルを開いて、`exclude_from_iast_scan` の除外を設定します。

```yml
security:
  exclude_from_iast_scan:
    api: []
    http_request_parameters:
      header: []
      query: []
      body: []
    iast_detection_category:
      insecure_settings: false
      invalid_file_access: false
      sql_injection: false
      nosql_injection: false
      ldap_injection: false
      javascript_injection: false
      command_injection: false
      xpath_injection: false
      ssrf: false
      rxss: false
```

### APIを除外する [#exclude-api]

`newrelic.yml` 設定ファイルのAPIセクションに特定の API を追加することで、 IAST分析からそれらのAPI無視できます。 Perl 5 の構文に従う正規表現 (regex) パターンを使用して API を指定できます。 正規表現パターンは、エンドポイントのない URL に完全一致するはずです。

API を指定するための形式は次のとおりです。

```yml
exclude_from_iast_scan:
  api:
    - .*account.* 
    - .*/\api\/v1\/.*?\/login
```

例えば：

* `.*account.*` 次のようなURLを持つAPIに一致します `http://localhost:80/api/v1/account/login`

* `.*/\api\/v1\/.*?\/login` 次のようなURLを持つAPIに一致します `http://localhost:80/api/v1/{'{account_id}'}/login`

### 除外 `http_request_parameters` [#exclude-http]

`newrelic.yml` 設定ファイルの `http_request_parameters` セクションに追加することで、 IAST分析からの特定の HTTP リクエストを無視できます。

<CollapserGroup>
  <Collapser id="header" title="ヘッダー">
    これは HTTP ヘッダー キーのリストです。 リクエストにこれらのキーを含むヘッダーが含まれている場合、対応する IAST スキャンはスキップされます。 たとえば、ヘッダー付きの curl リクエストがあり、`X-Forwarded-For` ヘッダーのIASTスキャンをスキップしたい場合は、次の設定を渡すことができます。

    ```bash
    curl -X POST -H "X-Forwarded-For: 123.456.789.012" \
         -H "Content-Type: application/x-www-form-urlencoded" \
         -d "param1=value1&param2=value2" http://example.com
    ```

    次の設定を使用できます:

    ```yml
    exclude_from_iast_scan:
      http_request_parameters:
        header: 
          - X-Forwarded-For
    ```
  </Collapser>

  <Collapser id="query" title="クエリ">
    これは、問題キーのリストです。 リクエストの最初の文字列にこれらの問題が存在すると、 IASTスキャンがスキップされます。 たとえば、問題のあるカール リクエストがあり、`customerID` と `username` のIASTスキャンをスキップしたい場合は、次の設定を渡すことができます。

    ```bash
    curl --location --request GET 'localhost:8080/sql/save?firstName=test&lastName=user&customerID=testuser&username=test123'
    ```

    次の設定を使用できます:

    ```yml
    exclude_from_iast_scan:
      http_request_parameters:
        query: 
          - username
          - customerID
    ```
  </Collapser>

  <Collapser id="body" title="体">
    これはリクエスト本文内のキーのリストです。 本文コンテンツ内にこれらのキーが見つかった場合、IAST スキャンはスキップされます。 リクエスト本文でサポートされているコンテンツ タイプは、JSON、XML、および Form-URL-Encoded データです。

    #### JSONコンテンツタイプの例

    これは、JSON 本文を含む curl リクエストがあり、 `customerID`および`firstName`で IAST スキャンをスキップする場合の JSON コンテンツ タイプの curl の例です。

    ```bash
    curl --location --request POST 'localhost:8080/application/json/post' \
      --header 'Content-Type: application/json' \
      --data '{
        "path": "sample.txt",
        "script":"testscript",
        "customerID":"GREAL",
        "name": {
          "firstName": "john",
          "lastName": "wick"
        },
        "url":"http://example.com",
        "cmd":"ls"
      }'
    ```

    次の設定を使用できます:

    ```yml
    exclude_from_iast_scan:
      http_request_parameters:
        body: 
          - customerID
          - name.firstName
    ```

    #### XMLコンテンツタイプの例

    これは XML 本文を含む curl リクエストであり、 `customerID`と`username`での IAST スキャンをスキップします。

    ```bash
    curl --location 'localhost:8080/application/xml/post' \
      --header 'Content-Type: application/xml' \
      --data '<?xml version="1.0" encoding="UTF-8" ?>
      <AppData>
        <path>sample.txt</path>
        <script>K2</script>
        <customerID>GREAL</customerID>
        <username>bob</username>
        <url>http://example.com</url>
        <cmd>ls</cmd>
        <name>keshav</name>
        <firstName>Aliko</firstName>
      </AppData>'
    ```

    次の設定を使用できます:

    ```yml
    exclude_from_iast_scan:
      http_request_parameters:
        body: 
          - AppData.customerID
          - AppData.username
    ```

    #### フォーム URL エンコードされたコンテンツ タイプの例

    これは、Form-URL-Encoded 本文を含む curl リクエストであり、 `customerID`および`username`での IAST スキャンをスキップします。

    ```bash
    curl --location 'localhost:8080/application/urlencode/post' \
      --header 'Content-Type: application/x-www-form-urlencoded' \
      -d 'name=madhav&path=sample.txt&customerID=GREAL&script=K2&url=http://example.com&username=bob&firstName=Aliko&cmd=ls'
    ```

    次の設定を使用できます:

    ```yml
    http_request_parameters:
      body: 
        - customerID
        - username
    ```

    <Callout variant="tip">
      ネストされた本文の場合は、ピリオド (.) で区切って値を指定します。
    </Callout>
  </Collapser>
</CollapserGroup>

### 除外 `iast_detection_category` [#exclude-iast-detection]

`iast_detection_category` 設定により、ユーザーはIAST分析を適用するか無視する脆弱性のカテゴリを指定できます。 これらのカテゴリのいずれかが`true`に設定されている場合、IAST セキュリティ エージェントはそのカテゴリのイベントを生成せず、脆弱性にフラグを立てません。

SQL インジェクションと SSRF のスキャンをスキップするには、この例を参照してください。 `sql_injection`と`ssrf`問題は`true`に設定されます。

```yml
exclude_from_iast_scan:
  iast_detection_category:
    insecure_settings: false
    invalid_file_access: false
    sql_injection: true
    nosql_injection: false
    ldap_injection: false
    javascript_injection: false
    command_injection: false
    xpath_injection: false
    ssrf: true
    rxss: false
```

<Callout variant="tip">
  `iast_detection_category`は、セキュリティ セクションにある検出構成よりも優先されます。
</Callout>

以下の組み合わせ設定を使用できます:

```yml
security:
  enabled: true
  scan_schedule:
    delay: 0                     # In minutes, default is 0 min
    duration: 0                  # In minutes, default will be forever
    #schedule: ""                # Cron Expression to define start time
    always_sample_traces: false  # continuously collect samples
  exclude_from_iast_scan:
    api: []
    http_request_parameters:
      header: []
      query: []
      body: []
    iast_detection_category:
      insecure_settings: false
      invalid_file_access: false
      sql_injection: false
      nosql_injection: false
      ldap_injection: false
      javascript_injection: false
      command_injection: false
      xpath_injection: false
      ssrf: false
      rxss: false
  agent:
    enabled: true
```

## IASTスキャンコントローラ [#iast-scan-controllers]

### IASTスキャンレート制限 [#iast-scan-rate-limit]

IAST スキャン レート制限設定は、1 分間にアプリケーションに送信できる分析プローブまたは要求の最大数を制限します。 デフォルトの IAST スキャン レート制限は、1 分あたり最小 12 回の再生要求、1 分あたり最大 3,600 回の再生要求に設定されています。