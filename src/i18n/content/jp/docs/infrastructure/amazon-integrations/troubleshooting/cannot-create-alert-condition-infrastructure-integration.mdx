---
title: インフラストラクチャ統合のためのアラート条件を作成できない
type: troubleshooting
tags:
  - Integrations
  - Amazon integrations
  - Troubleshooting
metaDescription: Troubleshooting suggestions if you cannot create an alert condition for your New Relic infrastructure integration.
freshnessValidatedDate: never
translationType: machine
---

## 問題

[集計するメトリックがインフラストラクチャ UI のアラート](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/infrastructure-alerts-add-edit-or-view-host-alert-information) ページの<DNT>**Define thresholds**</DNT> UIセクションに表示され ため、 インフラストラクチャ アラート条件 を作成できません。

## 解決

New Relic のインフラ UI を使用する代わりに、 [インフラ REST API 呼び出し](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts) を使用して、アラート条件を作成します。

1. インフラストラクチャ条件 [を作成 (POST) するためのクエリ構文](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts#post-conditions) を確認してください。

2. [メトリック条件のAPI要件を確認する](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts#metric-api).

3. 条件を作成する場合: `select_value`フィールドの場合、次の構文を使用して指標名を作成します。ここで、 `provider`は標準のプレフィックス文字列です。

   ```
   provider.metric.aggregation_type
   ```

   * `metric`：ご利用のインテグレーションのNew Relicドキュメンテーション内に書かれたメトリック名を使用してください。
   * `aggregation_type` `Sum` 、 `Average` 、 `Minimum` 、または`Maximum`を使用します。統合のクラウド プロバイダーによる元のドキュメントを参照して、各メトリックで使用できる統計集計を確認してください。

4. `policy_id`フィールドには、条件に関連付けられたアラート ポリシーの一意の ID を使用します。ポリシー URL でポリシー ID を見つけます。

   ```
   https://alerts.newrelic.com/accounts/ACCOUNT_ID/policies/ALERT_POLICY_ID
   ```

## 原因

これは、インフラストラクチャUIの <DNT>**Define thresholds**</DNT> アラート リストには、 New Relicが過去 1 時間に収集できたメトリックのみが表示されるために発生します。
