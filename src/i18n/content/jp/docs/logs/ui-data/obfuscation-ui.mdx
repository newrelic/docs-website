---
title: 'ログの難読化: ログ内の機密データをハッシュまたはマスクする'
metaDescription: How to hash or mask sensitive data in logs you send to New Relic with our log obfuscation UI or API.
freshnessValidatedDate: never
translationType: machine
---

ログの難読化ルールを使用すると、特定の種類の情報がNewRelicに保存されないようにすることができます。

## 要件 [#requirements]

ログの難読化機能は、 [Data Plus オプション](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing#data-prices)の一部としてご利用いただけます。

## ログの難読化とは何ですか？ [#overview]

当社の[<InlinePopover type="logs"/>サービスは](/docs/logs/get-started/get-started-log-management)、クレジットカード番号や社会保障番号など、機密事項である可能性が高いと判断された番号パターンを自動的にマスクします。

追加の難読化が必要な場合は、使用するログフォワーダー（たとえば、インフラストラクチャエージェント）の設定を調整するという方法があります。 しかし、より簡単なオプションは、 [Data Plus](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing#data-prices)で利用できる ログの難読化 機能 を使用することです。 この機能を使用すると、時間のかかる手動構成を行わずに、ログ管理 UI から直接、または NerdGraph API 経由でログ難読化ルールを設定できます。 機密情報に一致する正規表現を定義し、そのデータを難読化するルールを作成します。 機密情報をマスクするかハッシュするかを選択できます。

## 定義 [#definitions]

重要な用語をいくつか紹介します。

* <DNT>
    **Obfuscation rules**
  </DNT>

  難読化アクションを適用するログを定義します。

* <DNT>
    **Obfuscation rule actions**
  </DNT>

  どの属性を調べるか、どのテキストを難読化するか、どのように難読化するか（マスキングまたはハッシュ化のいずれか）を定義します。

* <DNT>
    **Obfuscation expressions**
  </DNT>

  難読化するテキストを識別する名前付き正規表現です。

* <DNT>
    **Masking**
  </DNT>

  情報を完全に削除し、 `X`文字に置き換えます。 これが完了すると、特定の値を検索できなくなります。

* <DNT>
    **Hashing**
  </DNT>

  情報を隠します。 ハッシュ ツールを使用して機密値のハッシュを取得し、そのハッシュを含むログを検索できます。

## 難読化の仕組み [#overview]

次の例に表示されている JSON オブジェクトは、NerdGraph API で使用されるペイロードを簡略化したものです。 これにより、さまざまな API 操作とそれに対応する UI 操作をより適切に関連付けることができます。

### 例：難読化前のログレコード [#example-before]

次のようなログ記録があるとします。

```json
{
  "message": "The credit card number 4321-5678-9876-2345 belongs to user user@email.com (born on 01/02/2003) with SSN 123-12-1234",
  "creditCardNumber": "4321-5678-9876-2345",
  "ssn": "123-12-1234",
  "department": "sales",
  "serviceName": "loginService"
}
```

このログレコードには、いくつかの機密データが含まれています。理想的には、このようなログに仕上げることです。

```json
{
  "message": "The credit card number 9aa9bc1528859aee1b1df75795f1ebd54beb2f0d26c8a1d4580a71a07189cdd5 belongs to user user@email.com (born on XXXXXXXXXX) with SSN 30e6897f76dc102e32ee1d781c43417d259e586eac15c963d75ab8b5187769da",
  "creditCardNumber": "9aa9bc1528859aee1b1df75795f1ebd54beb2f0d26c8a1d4580a71a07189cdd5",
  "ssn": "30e6897f76dc102e32ee1d781c43417d259e586eac15c963d75ab8b5187769da",
  "department": "sales",
  "serviceName": "loginService"
}
```

### 例：基本的なプロセス [#example-process]

この例で機密データを難読化するために使用する基本的なプロセスは次のとおりです。

<CollapserGroup>
  <Collapser
    id="example-actions"
    title="1.適用すべきアクション"
  >
    あなたは、そのサービスから来るすべてのログに以下の難読化アクションを適用することを決定します。

    * `HASH` `message`および`creditCardNumber`属性に存在するクレジットカード番号。
    * `MASK` `message`属性に存在する誕生日。
    * `HASH` `message`および`ssn`属性に存在する社会保障番号。
  </Collapser>

  <Collapser
    id="example-expressions"
    title="2.センシティブなデータをどのように表現するか"
  >
    最初に行う必要があるのは、この機密情報を取得できるようにする難読化表現を定義することです。

    <Callout variant="tip">
      以下の例は、UI で直接使用する正規表現を示しています。 このドキュメントの後半では、 [NerdGraph](#expressions-create)でこれらの正規表現のエスケープバージョンを使用する方法について説明します。
    </Callout>

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            難読化表現
          </th>

          <th>
            定義
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            クレジットカード番号
          </td>

          <td>
            ハイフンで区切られた4桁のグループを4つ取り込む必要があります。

            ```json
            {
              "name": "Credit Card Number",
              "regex": "((?:(?:4\d{3})|(?:5[1-5]\d{2})|6(?:011|5[0-9]{2}))(?:-?|\040?)(?:\d{4}(?:-?|\040?)){3}|(?:3[4,7]\d{2})(?:-?|\040?)\d{6}(?:-?|\040?)\d{5})"
            }
            ```
          </td>
        </tr>

        <tr>
          <td>
            社会保障番号
          </td>

          <td>
            ハイフンで区切られた3桁、2桁、4桁の3つのグループを捕捉する必要があります。

            ```json
            {
              "name": "Social Security Number",
              "regex": "(\d{3}-\d{2}-\d{4})"
            }
            ```
          </td>
        </tr>

        <tr>
          <td>
            生年月日（ `loginService`固有）
          </td>

          <td>
            この例では、生まれた日付はログインサービスの一部です。周囲の単語`"(born on 01/02/2003)"`の日付情報に基づいて難読化する部分を定義します。

            ```json
            {
              "name": "Born date - loginService specific",
              "regex": "born on (.*)\)"
            }
            ```
          </td>
        </tr>
      </tbody>
    </table>

    各難読化表現は、文字列から機密情報を取り出す方法を定義し（正規表現を使用）、後で簡単に識別できるように、いくつかのフレンドリーな名前に関連付けます。

    難読化表現は再利用_できます_。機密データを含む ログ 属性の名前の付け方にはまったく関係ありません。 インスタンスの場合、上記で定義した社会保障式は、 `ssn` 、 `socialSecurityNumber` 、または`socSecNum`という名前のログ属性に適用できます。

    また、ログ属性の形式に密接に結合された、再利用できない難読化表現（ `Born date (loginService specific)`など）を作成することもできます。 たとえば、 `born on`と`before`の後に続くものを使用できます。

    <Callout
      variant="caution"
      title="ネストされた正規表現キャプチャグループはサポートされていません"
    >
      この機能の主な役割は、機密データをハッシュまたはマスクに簡単かつ効率的に置き換えることです。 キャプチャ グループ内で異なる一致をグループ化する必要がある場合は、ネストされたキャプチャ グループの作成を避けるために、非キャプチャ グループ構文`(?:{EXPRESSION})`を使用することを忘れないでください。 たとえば、 `(([A-Z]{12})|([a-z]{6}))`避けて、代わりに`((?:[A-Z]{12})|((?:[a-z]{6}))`を使用します。
    </Callout>
  </Collapser>

  <Collapser
    id="example-rules"
    title="3.どのログがあなたのルールを使用するか"
  >
    機密データをキャプチャする方法を定義したので、どのログを難読化する必要があるか（ログインサービスのもの）、そしてどのように難読化するか（定義した難読化アクションを使用）を指定する必要があります。これを実現するために、難読化ルールを定義します。

    ```json
    {
      "name": "Obfuscate Login Service Logs",
      "filter": "serviceName = 'loginService' AND department = 'sales'",
      "actions": [
        {
          "attributes": ["message", "creditCardNumber"],
          "expression": {"name": "Credit Card Number"},
          "method": "HASH_SHA256"
        },
        {
          "attributes": ["message"],
          "expression": {"name": "Born date - loginService specific"},
          "method": "MASK"
        },
        {
          "attributes": ["message", "ssn"],
          "expression": {"name": "Social Security Number"},
          "method": "HASH_SHA256"
        }
      ]
    }
    ```

    このルールは主に3つの要素で構成されています。

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            難読化ルールコンポーネント
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            名前
          </td>

          <td>
            この名前は、ルールの機能を簡単に識別するのに役立ちます。この例では、このルールは、ログインサービスからのログのさまざまな属性を難読化する方法を定義します。
          </td>
        </tr>

        <tr>
          <td>
            フィルター
          </td>

          <td>
            フィルタはNRQL形式を使用して、ログインサービスからのターゲットログを識別する方法をシステムに通知します。この例では、 `serviceName = loginService`と`department = sales`のログをクエリします。
          </td>
        </tr>

        <tr>
          <td>
            アクション
          </td>

          <td>
            最後に、このルールは、フィルターに一致するログに適用する一連の難読化アクションを定義します。各アクションは以下を定義します：

            * 属性の各セットから機密情報を抽出するために使用する難読化式を以前に作成したもの

            * このデータを難読化するために適用する難読化方法（ `HASH_SHA256`または`MASK` ）

              NerdGraph 経由で難読化ルールを定義する場合は、難読化表現の名前ではなく、その`id`を指定する必要があることに注意してください。 前の例を読みやすくするために、代わりに難読化表現の名前を使用しました。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-more"
    title="4.他のルールでの表現の再利用"
  >
    最後の例として、属性`serviceName = checkoutService`とクレジットカード情報を含む`ccn`属性を持つ「CheckoutService」という名前の別のサービスからのログを難読化する必要があると想像してください。

    ```json
    {
      "message": "Order completed",
      "ccn": "4321-5678-9876-2345",
      "department": "sales",
      "serviceName": "checkoutService"
    }
    ```

    このサービスからのログを難読化するには、これらの特定のログを対象とする別の難読化ルールを定義するだけでよく、以前に作成した`Credit card number`難読化式を再利用するだけです。

    ```json
    {
      "name": "Obfuscate Checkout Service Logs",
      "filter": "serviceName = 'checkoutService' AND department = 'sales'",
      "actions": [
        {
          "attributes": ["ccn"],
          "expression": {"name": "Credit Card Number"},
          "method": "HASH_SHA256"
        }
      ]
    }
    ```
  </Collapser>
</CollapserGroup>

## チェックリスト：ログを難読化する手順 [#checklist]

ログを難読化するために

1. ログに表示される機密データのパターンを特定して、ログの形状を調べます。例えば：

   * すべてのログに機密情報が含まれていますか？それとも、もっと具体的に（サービスAや地域Bのログのみ）教えてください。
   * クレジットカード番号、運転免許証番号、国民ID、生体認証、その他の値など、どのような機密情報が含まれていますか？

2. 機密データを抽出する方法を識別するための難読化[式](#expressions)を作成します。

3. ログのセットごとに難読化[ルール](#rules)を定義します。

   * NRQLを使ってどのように捕らえるかを定義する。
   * それぞれに適用する必要のある難読化アクションを定義します。自問してみてください：後でこの機密情報を使用してログを照会する必要がありますか（ `HASH`を使用することを検討してください）、またはログからこの情報を完全に削除する必要がありますか（ `MASK`を使用することを検討してください）？

<Callout variant="tip">
  <DNT>**Logs obfuscation**</DNT> UI には<DNT>**Hashing tool**</DNT>が含まれており、既知の値からハッシュを見つけてコピーし、他の式やルールで使用することができます。
</Callout>

## CPU制限 [#cpu-limits]

難読化には 1 分あたりの CPU 制限があります。 アカウントがこれらのリソース制限に達した場合、ログは期待どおりに難読化されません。 CPU 制限を確認するには、 <DNT>**Data management**</DNT> UI の[システム<DNT>**Limits**</DNT>ページ](/docs/data-apis/manage-data/view-system-limits/#limits-ui)に移動します。

1 分あたりの難読化 CPU 制限を超え、ログを難読化またはハッシュ化できない場合、難読化ルールが適用された属性は<DNT>**dropped**</DNT>になり、属性が削除された理由を示すテキストに置き換えられます。 たとえば、難読化ルールが`message`フィールドに適用され、1 分あたりの CPU 制限に達した場合、結果のログは次のようになります。

```json
{
  ...
  "message": "<OBFUSCATION> The account is over its obfuscation per-minute limit, attribute dropped",
  ...
}
```

これは、PII やその他の機密データが誤って取り込まれるのを防ぐためです。

さらに、次の \`NrIntegrationError' がアカウントにログ記録されます。

```json
{
  "category": "RateLimit",
  "level": "error",
  "limitName": "Log API obfuscation per account per minute",
  "message": "You’ve exceeded our limit of per-account obfuscation time per-minute for the Log ingestion pipeline. Please reduce your usage or contact New Relic support.",
  "name": "ObfuscationTimeLimitReached",
  "newRelicFeature": "Logs",
  "rateLimitType": "ObfuscationTimePerMinute",
  "timestamp": 1678819264283
}
```

難読化ルールがどの程度機能しているかを評価し、どのルールがスキップされているかを確認するには、 <DNT>**Logs Obfuscation > Health**</DNT>に移動します。 難読化ルールは CPU を大量に消費するため、これらのグラフは、リソース制限によって最も影響を受けるルールを判断するのに役立ちます。

## 難読化表現 [#expressions]

New Relic UIを使用するか、GraphQL ExplorerであるNerdGraphを使用して、難読化式を作成、読み取り、更新、または削除できます。

<img
  title="Logs obfuscation expressions in UI"
  alt="Screenshot of Logs obfuscation expressions UI"
  src="/images/logs_screenshot-crop_log-obfuscation-expression.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs > Obfuscation**</DNT>: まず 1 つ以上の難読化表現を作成し、次に難読化ルールを作成します。
</figcaption>

<CollapserGroup>
  <Collapser
    id="expressions-create"
    title="難読化表現を作成する"
  >
    これらのオプションのいずれかを使用して、難読化式を作成します。

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT>に移動し、左側のナビゲーションから<DNT>**Obfuscation**</DNT>を選択します。

    2. <DNT>**Create regex**</DNT>をクリックします。

    3. 新しい難読化ルールの名前と、キャプチャしたい機密データに一致する正規表現を入力します。 [RE2 構文](https://github.com/google/re2/wiki/Syntax) を使用します。

       次の例は、クレジットカード番号にマッチする基本的な難読化表現を示しています。

       <img
         title="Create an obfuscation expression using the logs UI"
         alt="Create an obfuscation expression using the logs UI"
         src="/images/logs_screenshot-crop_obfuscation-create-expression.webp"
       />

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `logConfigurations`の下の`logConfigurationsCreateObfuscationExpression`ミューテーションを使用します。 GraphiQL のサンプルと、 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql#query=mutation%20%7B%0A%20%20logConfigurationsCreateObfuscationExpression%28accountId%3A%201234%2C%20expression%3A%20%7Bname%3A%20%22Credit%20Card%20Number%22%2C%20regex%3A%20%22%28%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D%29%22%2C%20description%3A%20%22Reusable%20expression%20to%20capture%20credit%20card%20numbers%22%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20regex%0A%20%20%20%20description%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)の関連ドキュメントを参照してください。

       <Callout variant="important">
         NerdGraph で正規表現を使用する場合は、正規表現をエスケープする必要があります。 例えば： `((?:(?:4\\d{3})|(?:5[1-5]\\d{2})|6(?:011|5[0-9]{2}))(?:-?|\\040?)(?:\\d{4}(?:-?|\\040?)){3}|(?:3[4,7]\\d{2})(?:-?|\\040?)\\d{6}(?:-?|\\040?)\\d{5})`
       </Callout>
  </Collapser>

  <Collapser
    id="expressions-read"
    title="難読化表現を読み込む"
  >
    難読化式を照会するには、これらのオプションのいずれかを使用します。

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**
       </DNT>

       に移動し、左側のナビゲーションから

       <DNT>
         **Obfuscation**
       </DNT>

       を選択します。

    2. 利用可能なすべての難読化表現とその定義を表示するには、

       <DNT>
         **Expressions**
       </DNT>

       タブを選択します。

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `actor.account.logConfigurations`の下にある`obfuscationExpressions`フェッチャーを使用します。 GraphiQL のサンプルと、 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20account%28id%3A%201234%29%20%7B%0A%20%20%20%20%20%20logConfigurations%20%7B%0A%20%20%20%20%20%20%20%20obfuscationExpressions%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20regex%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20updatedAt%0A%20%20%20%20%20%20%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)の関連ドキュメントを参照してください。
  </Collapser>

  <Collapser
    id="expressions-update"
    title="難読化表現を更新する"
  >
    難読化表現を更新するには、これらのオプションのいずれかを使用します。

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT>に移動し、左側のナビゲーションから<DNT>**Obfuscation**</DNT>を選択します。
    2. <DNT>**Expressions**</DNT>タブを選択します。
    3. 編集したい難読表現の右側にある省略記号アイコン<DNT>**...**</DNT>をクリックし、 <DNT>**Edit**</DNT>をクリックします。
    4. 必要に応じてフィールドを変更し、 <DNT>**Update**</DNT>をクリックします。

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `logConfigurations`の下の`logConfigurationsUpdateObfuscationExpression`ミューテーションを使用します。 GraphiQL のサンプルと、 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsUpdateObfuscationExpression%28accountId%3A%201234%2C%20expression%3A%20%7Bname%3A%20%22Credit%20Card%20Number%20-%20EDITED%22%2C%20regex%3A%20%22%28%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D%29%22%2C%20description%3A%20%22Reusable%20expression%20to%20capture%20credit%20card%20numbers%20-%20EDITED%22%2C%20id%3A%20%225678%22%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20regex%0A%20%20%20%20description%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)の関連ドキュメントを参照してください。

       <Callout variant="important">
         NerdGraph で正規表現を使用する場合は、正規表現をエスケープする必要があります。 例えば： `((?:(?:4\\d{3})|(?:5[1-5]\\d{2})|6(?:011|5[0-9]{2}))(?:-?|\\040?)(?:\\d{4}(?:-?|\\040?)){3}|(?:3[4,7]\\d{2})(?:-?|\\040?)\\d{6}(?:-?|\\040?)\\d{5})`
       </Callout>

       難読化表現を更新する際に、すべてのフィールドを指定する必要はなく、id（必須）と修正したいフィールドのみを指定すればよい。
  </Collapser>

  <Collapser
    id="expressions-delete"
    title="難読化表現の削除"
  >
    <Callout variant="important">
      難読化式が難読化ルールによって現在使用されている場合、難読化式を削除することはできません。
    </Callout>

    難読化表現を削除するには、これらのオプションのいずれかを使用します。

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT>に移動し、左側のナビゲーションから<DNT>**Obfuscation**</DNT>を選択します。
    2. <DNT>**Expressions**</DNT>タブを選択します。
    3. 削除したい難読表現の右側にある省略記号アイコン<DNT>**...**</DNT>をクリックし、 <DNT>**Delete**</DNT>をクリックします。
    4. <DNT>**Delete**</DNT>をクリックして、式を削除することを確認します。

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `logConfigurations`の下の`logConfigurationsDeleteObfuscationExpression`ミューテーションを使用します。 GraphiQL のサンプルと、 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsDeleteObfuscationExpression%28accountId%3A%201234%2C%20id%3A%205678%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20regex%0A%20%20%20%20description%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20email%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20email%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)の関連ドキュメントを参照してください。

       変異は、削除される前の式のスナップショットを返します。
  </Collapser>
</CollapserGroup>

## サンプル表現 [#samples]

以下に、最も一般的な機密データの種類の一部を難読化するためのサンプル正規表現式をいくつか示します。 難読化表現は、それらの表現が使用されるNew Relicアカウントごとに作成する必要があります。

<Callout variant="tip">
  次の例は、UI で使用できる正規表現です。 これらを GraphQL で使用するには、この[例](#expressions-create)に示すようにエスケープする必要があります。
</Callout>

<CollapserGroup>
  <Collapser
    id="ssn"
    title="米国の社会保障番号"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (\d{3}[-\s\.]?\d{2}[-\s\.]?\d{4})
    ```
  </Collapser>

  <Collapser
    id="ccn"
    title="クレジットカード番号"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ((?:(?:4\d{3})|(?:5[1-5]\d{2})|6(?:011|5[0-9]{2}))(?:-?|\040?)(?:\d{4}(?:-?|\040?)){3}|(?:3[4,7]\d{2})(?:-?|\040?)\d{6}(?:-?|\040?)\d{5})
    ```
  </Collapser>

  <Collapser
    id="dob"
    title="米国の生年月日"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ((?:\d{2})?\d\d(?:\\)?(?:\/)?\d\d(?:\\)?(?:\/)?\d{2}(?:\d{2})?)
    ```
  </Collapser>

  <Collapser
    id="email-address"
    title="電子メールアドレス"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z0-9!#$'*+?^_`{|}~.-]+(?:@|%40)(?:[a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+)
    ```
  </Collapser>

  <Collapser
    id="ipv4"
    title="IPアドレス（IPv4）"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$
    ```
  </Collapser>

  <Collapser
    id="usstreetaddress"
    title="米国の住所"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    /\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})/g
    ```
  </Collapser>

  <Collapser
    id="usphone"
    title="米国の電話番号"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (^[\+]?[1]?[\W]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4})
    ```
  </Collapser>

  <Collapser
    id="uspassport"
    title="米国のパスポート番号"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z]?\d?\d{5,8})
    ```
  </Collapser>

  <Collapser
    id="uknino"
    title="英国国民保険番号 (NINO)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z]{2}[-\s]?\d{2}[-\s]?\d{2}[-\s]?\d{2}[-\s]?[a-dA-D])
    ```
  </Collapser>

  <Collapser
    id="spainnid"
    title="スペイン国民 ID (NIE/DNI/NIF)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z]?[-\s]?\d{7,8}[-\s]?[a-zA-Z])
    ```
  </Collapser>

  <Collapser
    id="indiapanid"
    title="インドのPAN ID"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$
    ```
  </Collapser>

  <Collapser
    id="indiaaadhaar"
    title="インド AADHAAR ID"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ^([2-9]{1}[0-9]{3}\s\d{4}\s\d{4})$
    ```
  </Collapser>

  <Collapser
    id="caphin"
    title="カナダの個人健康/社会保険番号 (PHIN/SIN)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (\d{3}[-\s\.]?\d{3}[-\s\.]?\d{3})
    ```
  </Collapser>

  <Collapser
    id="cahcn"
    title="カナダ健康保険証番号"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (\d{10})
    ```
  </Collapser>

  <Collapser
    id="japanid"
    title="日本の国民識別番号（マイナンバー）"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (d{4}\sd{4}\sd{4})
    ```
  </Collapser>
</CollapserGroup>

## 難読化ルール [#rules]

New Relic UIを使用するか、GraphQL ExplorerであるNerdGraphを使用して、難読化ルールを作成、読み取り、更新、または削除できます。

<CollapserGroup>
  <Collapser
    id="rules-create"
    title="難読化ルールの作成"
  >
    難読化ルールを作成するには、これらのオプションのいずれかを使用します。

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT>に移動し、左側のナビゲーションから<DNT>**Obfuscation**</DNT>を選択します。

    2. <DNT>**Create obfuscation rule**</DNT>をクリックします。

    3. 新しい難読化ルールの名前と、難読化したいログのターゲットセットを捕捉するためのマッチング条件（NRQL形式）を入力します。

    4. 新しい `actions` を追加して（最初のものは自動的に追加されます）、各属性セットをキャプチャする難読化式（正規表現）と、それらを `MASK` または `HASH` するかどうかを指定します。

       * カンマ区切りで複数の属性を指定することができる。
       * `MASK` 一致するすべての文字を`X` esに置き換えます。 `MASK`を使用すると、後で特定の難読化された値を照会できなくなります。
       * `HASH` 機密データをSHA-256ハッシュ値に置き換えます。 `HASH`を使用する場合、クリアテキスト値がわかっていれば、ハッシュツールを使用してそれらをクエリできます。

       ルールは次のようなものです。

       <img
         title="Create an obfuscation rule using the logs UI"
         alt="Create an obfuscation rule using the logs UI"
         src="/images/logs_screenshot-crop_log-obfuscation-create-rule.webp"
       />

    5. 難読化ルールを作成してアクティブ化するには、 <DNT>**Create rule**</DNT>クリックします。

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `logConfigurations`の下の`logConfigurationsCreateObfuscationRule`ミューテーションを使用します。 GraphiQL のサンプルと、 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsCreateObfuscationRule%28accountId%3A%201234%2C%20rule%3A%20%7Bname%3A%20%22Obfuscate%20Login%20Service%20Logs%22%2C%20description%3A%20%22Removes%20PII%20from%20the%20Login%20Service%20Logs%20owned%20by%20the%20Sales%20department.%20Do%20not%20modify%20this%20rule%20without%20contacting%20the%20Sales%20team%20first.%22%2C%20filter%3A%20%22serviceName%20%3D%20%27loginService%27%20AND%20department%20%3D%20%27sales%27%22%2C%20enabled%3A%20true%2C%20actions%3A%20%5B%7Battributes%3A%20%5B%22message%22%2C%20%22creditCardNumber%22%5D%2C%20expressionId%3A%20%2212%22%2C%20method%3A%20HASH_SHA256%7D%2C%20%7Battributes%3A%20%5B%22message%22%5D%2C%20expressionId%3A%20%2234%22%2C%20method%3A%20MASK%7D%2C%20%7Battributes%3A%20%5B%22message%22%2C%20%22ssn%22%5D%2C%20expressionId%3A%20%2256%22%2C%20method%3A%20HASH_SHA256%7D%5D%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)の関連ドキュメントを参照してください。

       <Callout variant="important">
         特定の難読化アクションにリンクするには、難読化`expressionId`を指定する必要があります。このIDを取得するに[は、 `obfuscationRules`をクエリします](#rules-read)。
       </Callout>
  </Collapser>

  <Collapser
    id="rules-read"
    title="難読化ルールを読む"
  >
    難読化ルールを照会するには、これらのオプションのいずれかを使用します。

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT>に移動し、左側のナビゲーションから<DNT>**Obfuscation**</DNT>を選択します。
    2. 使用可能なすべての難読化ルールとその定義を表示するには、 <DNT>**Rules**</DNT>タブ (デフォルト) を選択します。

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `actor.account.logConfigurations`の下にある`obfuscationRules`フェッチャーを使用します。 GraphiQL のサンプルと[<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20account%28id%3A%201234%29%20%7B%0A%20%20%20%20%20%20logConfigurations%20%7B%0A%20%20%20%20%20%20%20%20obfuscationRules%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20filter%0A%20%20%20%20%20%20%20%20%20%20enabled%0A%20%20%20%20%20%20%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20method%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20updatedAt%0A%20%20%20%20%20%20%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)の関連ドキュメントを参照してください。
  </Collapser>

  <Collapser
    id="rules-update"
    title="難読化ルールの更新"
  >
    難読化ルールを更新するには、これらのオプションのいずれかを使用します。

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT>に移動し、左側のナビゲーションから<DNT>**Obfuscation**</DNT>を選択します。
    2. <DNT>**Rules**</DNT>タブを選択します（デフォルト）。
    3. 編集する難読化ルールの右側にある省略記号アイコン<DNT>**...**</DNT>をクリックし、 <DNT>**Edit**</DNT>をクリックします。
    4. 必要に応じてフィールドを変更し、 <DNT>**Update rule**</DNT>をクリックします。

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `logConfigurations`の下の`logConfigurationsUpdateObfuscationRule`ミューテーションを使用します。 GraphiQL のサンプルと、 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsUpdateObfuscationRule%28accountId%3A%201234%2C%20rule%3A%20%7Bid%3A%20%225678%22%2C%20name%3A%20%22EDITED%20-%20Obfuscate%20Login%20Service%20Logs%22%2C%20description%3A%20%22EDITED%20-%20Removes%20PII%20from%20the%20Login%20Service%20Logs%20owned%20by%20the%20Sales%20department.%20Do%20not%20modify%20this%20rule%20without%20contacting%20the%20Sales%20team%20first.%22%2C%20filter%3A%20%22serviceName%20%3D%20%27loginService%27%20AND%20department%20%3D%20%27sales%27%22%2C%20enabled%3A%20true%2C%20actions%3A%20%5B%7Battributes%3A%20%5B%22message%22%2C%20%22creditCardNumber%22%5D%2C%20expressionId%3A%20%2212%22%2C%20method%3A%20HASH_SHA256%7D%2C%20%7Battributes%3A%20%5B%22message%22%5D%2C%20expressionId%3A%20%2234%22%2C%20method%3A%20MASK%7D%2C%20%7Battributes%3A%20%5B%22message%22%2C%20%22ssn%22%5D%2C%20expressionId%3A%20%2256%22%2C%20method%3A%20HASH_SHA256%7D%5D%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)の関連ドキュメントを参照してください。

       <Callout variant="important">
         特定の難読化アクションにリンクするには、難読化`expressionId`を指定する必要があります。このIDを取得するには、\[query the `obfuscationRules` ]]（＃rules-read）で説明されているように、 `obfuscationRules`を使用できます。
       </Callout>

       難読化ルールを更新するときに、すべてのフィールドを指定する必要はありません`id` （必須）と変更するフィールドのみを指定する必要があります。 [名前のみを更新](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsUpdateObfuscationRule%28accountId%3A%201234%2C%20rule%3A%20%7Bid%3A%20%225678%22%2C%20name%3A%20%22EDITED%20-%20Obfuscate%20Login%20Service%20Logs%22%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)する例を次に示します。
  </Collapser>

  <Collapser
    id="rules-delete"
    title="難読化ルールの削除"
  >
    難読化ルールを削除するには、これらのオプションのいずれかを使用します。

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT>に移動し、左側のナビゲーションから<DNT>**Obfuscation**</DNT>を選択します。
    2. <DNT>**Rules**</DNT>タブを選択します（デフォルト）。
    3. 削除する難読化ルールの右側にある省略記号アイコン<DNT>**...**</DNT>をクリックし、 <DNT>**Delete**</DNT>をクリックします。
    4. <DNT>**Delete**</DNT>をクリックして、式を削除することを確認します。

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `logConfigurations`の下の`logConfigurationsDeleteObfuscationRule`ミューテーションを使用します。 GraphiQL のサンプルと、 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsDeleteObfuscationRule%28accountId%3A%201234%2C%20id%3A%205678%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)の関連ドキュメントを参照してください。

       変異は、削除される前のルールのスナップショットを返します。
  </Collapser>
</CollapserGroup>
