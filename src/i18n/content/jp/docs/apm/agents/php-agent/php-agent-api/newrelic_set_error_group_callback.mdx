---
title: newrelic_set_error_group_callback (PHP エージェント API)
type: apiDoc
shortDescription: このメソッドを使用すると、ユーザーはカスタム コールバック関数を定義してエラー グループ名を生成できます。
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: Use this API to register a callback which returns a custom error group name.
freshnessValidatedDate: '2023-09-01T00:00:00.000Z'
translationType: machine
---

## 構文

```php
newrelic_set_error_group_callback($callback)
```

独自のカスタム定義のフィンガープリンティング コールバック関数を使用してエラーをグループ化します。

## 要件

エージェントのバージョン 10.12 以降。

## 説明

この API を使用すると、アプリケーションでエラーが発生したときに呼び出されるカスタム コールバック関数を PHP エージェントに登録できます。

コールバックはエージェントから 2 つの PHP 配列を提供します。1 つはトランザクション データを含み、もう 1 つはエラー データを含みます。

コールバックは、提供されたコンテキスト情報を使用して、エラー受信トレイ UI に表示されるエラー グループ名として機能するユーザー定義のロジックに基づいて空ではない文字列を返す必要があります。

<Callout variant="important">
  * 1 つのトランザクションでこの関数への呼び出しが複数ある場合、PHP エージェントは最後の呼び出しからのコールバックのみを保持します。
  * コールバックはリクエストごとに登録されます。この API は、リクエストごとに実行されることが保証されているコード パスで呼び出す必要があります。そうしないと、コールバックは呼び出されません。
  * コールバック関数をできるだけ最小限に抑えることを強くお勧めします。CPU を集中的に使用するコールバック (データベース呼び出しなど) やその他の複雑なロジックは、アプリケーションのパフォーマンスに影響を与えます。
</Callout>

## パラメーター

この API は、単一の関数タイプのコールバックを引数として受け入れます。提供されたコールバックは 2 つのパラメータを受け入れる必要があります。

<table>
  <thead>
    <tr>
      <th width="25%">
        APIパラメータ
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$callback` (_関数_)
      </td>

      <td>
        必須。PHP エージェントに登録されるコールバック関数を提供します。
      </td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th width="25%">
        コールバックパラメータ
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$transaction_data` (_配列_)
      </td>

      <td>
        必須。PHP エージェントによってコールバックに提供されるトランザクション データの配列。
      </td>
    </tr>

    <tr>
      <td>
        `$error_data` (_配列_)
      </td>

      <td>
        必須。PHP エージェントによってコールバックに提供されるエラー データの配列。
      </td>
    </tr>
  </tbody>
</table>

### 配列のキーと値のペア

#### `$transaction_data` - コールバックに提供される PHP エージェントのトランザクション データ

<table>
  <thead>
    <tr>
      <th width="25%">
        鍵
      </th>

      <th>
        価値
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        「リクエスト\_ウリ」
      </td>

      <td>
        (_文字列_) リクエストURI
      </td>
    </tr>

    <tr>
      <td>
        "パス"
      </td>

      <td>
        (_文字列_) ファイルパス
      </td>
    </tr>

    <tr>
      <td>
        "方法"
      </td>

      <td>
        ( _string_ ) HTTP メソッド ( `GET` 、 `POST`など)
      </td>
    </tr>

    <tr>
      <td>
        「ステータスコード」
      </td>

      <td>
        ( _int_ ) HTTP ステータス コード ( `200` 、 `404`など)
      </td>
    </tr>
  </tbody>
</table>

#### `$error_data` - コールバックに提供される PHP エージェントのエラー データ

<table>
  <thead>
    <tr>
      <th width="25%">
        鍵
      </th>

      <th>
        価値
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        「クラス」
      </td>

      <td>
        (_文字列_) クラス名
      </td>
    </tr>

    <tr>
      <td>
        "メッセージ"
      </td>

      <td>
        (_文字列_) エラーメッセージ
      </td>
    </tr>

    <tr>
      <td>
        "ファイル"
      </td>

      <td>
        (_文字列_) ファイルパス
      </td>
    </tr>

    <tr>
      <td>
        "スタック"
      </td>

      <td>
        (_文字列_) JSONエラートラックトレース
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="important">
  * すべてのキーに値が含まれることが保証されているわけではありません。これは、ユーザーのアプリケーションとエラーの性質に大きく依存します。
  * 配列キーは、空の値が含まれているかどうかに関係なく、常に設定されます。
</Callout>

## 戻り値

API はコールバックが正常に登録された場合は`true`を返し、それ以外の場合は`false`を返します。

## 例

```php
if (extension_loaded('newrelic')) { // Ensure PHP agent is available
  $callback = function(array $transaction_data, array $error_data)
  {
      $fingerprint = "";

      //
      // Add custom code to parse array data
      //

      // Example code
      if ($error_data["klass"] == "E_USER_ERROR") {
        $fingerprint = "USER ERROR";
      };

      return $fingerprint;    // Non-empty string error group name
  };

  newrelic_set_error_group_callback($callback);
};
```
