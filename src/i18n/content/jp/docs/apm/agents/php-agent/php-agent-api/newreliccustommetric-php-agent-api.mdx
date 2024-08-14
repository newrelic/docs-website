---
title: newrelic_custom_metric (PHPエージェントAPI)
type: apiDoc
shortDescription: デフォルトでは取得されないアプリのコンポーネントの時間を測定するカスタムメトリック（ミリ秒単位）を追加します。
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to record custom metric timeslice data.
freshnessValidatedDate: never
translationType: machine
---

## 構文

```php
newrelic_custom_metric(string $metric_name, float $value)
```

デフォルトでは取得されないアプリのコンポーネントの時間を測定するカスタムメトリック（ミリ秒単位）を追加します。

## 要件

すべてのAgentバージョンに対応しています。

## 説明

記録する [カスタムメトリクス](/docs/agents/manage-apm-agents/agent-data/custom-metrics) PHPエージェントがデフォルトで取得していないもの。

ならば、できる。

* [メトリックとイベント](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer)を使用して、カスタム メトリックを検索し、カスタマイズ可能なグラフを作成して、ダッシュボードに追加します。
* [New Relic REST API](/docs/apis/rest-api-v2/requirements/new-relic-rest-api-v2-getting-started) を使用して、New Relic UI の外でプログラム的にカスタムメトリックデータを取得して使用することができます。
* [カスタムメトリックアラートを作成する](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-custom-metrics-alert-condition) カスタムメトリックが特定の値を超えたときに自分やチームに通知します。

## パラメーター

<table>
  <thead>
    <tr>
      <th width="25%">
        パラメータ
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$metric_name`

        _ストリング_
      </td>

      <td>
        必須。 カスタムメトリックの名前に<DNT>**Custom/**</DNT>プレフィックスを付けます (例: <DNT>**Custom/MyMetric**</DNT> )。 これにより、 UIエクスポートメトリックを 1 か所に整理できるようになり、メトリック エクスプローラーで簡単に見つけられるようになります。
      </td>
    </tr>

    <tr>
      <td>
        `$value`

        _浮く_
      </td>

      <td>
        必須。タイミングをミリ秒単位で記録します。例: `4`の値は、New Relic のシステムでは`.004`秒として保存されます。

        値がNaN、Infinity、denorm、負のゼロの場合、この関数の動作は不定です。New Relic は、与えられた値から 1 ビット以上の精度 (ULP) を破棄することがあります。
      </td>
    </tr>
  </tbody>
</table>

## 戻り値

メトリックが正常に追加された場合、 `true`を返します。

## 例

### 100ミリ秒の応答時間を記録 [#100-ms-example]

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_custom_metric("Custom/custom-metric-name", 100.00);
    }
}
```
