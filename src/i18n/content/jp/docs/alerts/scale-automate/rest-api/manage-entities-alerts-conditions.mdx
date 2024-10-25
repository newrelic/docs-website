---
title: アラート状態でのエンティティの管理
tags:
  - Alerts
  - REST API alerts
metaDescription: Read about how to use the REST API (v2) to add or remove apps and other entities from an alerts policy condition.
freshnessValidatedDate: never
translationType: machine
---

<InlinePopover type="alerts" />では、<DNT>**entity**</DNT> はアプリケーション、 browser 、ホストなどの監視対象として定義されます。 [アラート UI には、](http://one.newrelic.com/alerts/)選択可能なエンティティが表示されます。 REST API と API Explorer を使用して、条件のエンティティを[追加](https://api.newrelic.com/docs/#/Alerts%20Entity%20Conditions/put_alerts_entity_conditions__entity_id__json)または[削除すること](https://api.newrelic.com/docs/#/Alerts%20Entity%20Conditions/delete_alerts_entity_conditions__entity_id__json)もできます。

## RESTAPIを使用する前に [#before-start]

REST API は、アラートをプログラムで管理するための推奨方法ではなくなりました。 詳細については、 [「アラートの API の概要」](/docs/alerts/scale-automate/nerdgraph/nerdgraph-api-examples/)をお読みください。

## 要件

条件のエンティティのリストを変更するには、知っておく必要があります。

* あなたの [API キー](/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key)
* 監視するエンティティの[\{&apos;\{entity\_ID}&apos;}](/docs/new-relic-solutions/get-started/glossary/#entity)
* 変更したい条件の[\{&apos;\{condition\_ID}&apos;}](/docs/new-relic-solutions/get-started/glossary/#alert-condition)

## 一般的な手順 [#basic\_process][#basic_process]

ある条件のエンティティリストを更新するには

1. 適切なエンティティ ID を見つけます。たとえば、[アプリケーション ID](/docs/apis/rest-api-v2/requirements/listing-host-instance-application-server-ids)や[browser ID など](/docs/apis/rest-api-v2/browser-examples-v2/add-or-list-browser-apps-api-v2/)です。

2. [名前またはタイプでポリシー ID を識別します](/docs/alerts/scale-automate/rest-api/rest-api-calls-alerts/#alert-policies)。

3. ポリシーに関連する条件のリストを取得し、該当するカテゴリーの中から変更したいものを選択します。

   * [APM、ブラウザ監視、モバイル監視](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#conditions)
   * [外部サービス](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#ext-services-conditions)
   * [合成モニタリング](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#synthetics-conditions)

4. 追加または削除[API リクエスト](/docs/alerts/scale-automate/rest-api/rest-api-calls-alerts/#alert-entity-conditions)を使用して条件を変更します。

<Callout variant="important">
  [](/docs/alerts/new-relic-alerts/configuring-alert-policies/minimum-maximum-values)条件に追加できるエンティティの最小数と最大数の要件に従ってください。
</Callout>

## 例: エンティティの追加または削除 [#example]

次の例は、条件に`TimberTime`という名前のRubyアプリケーションを追加する方法と、同じ条件からエンティティを削除する方法を示しています。

この例では、最初のステップだけが、エンティティとしてRubyアプリを選択した場合に固有のものとなっています。残りのステップは、どのエンティティを選択しても同じです。

1. `entity_id`を取得します;たとえば、 `application_id` ：

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/applications.json' \
        -H $API_KEY -i
   ```

   また

   アプリケーション名がわかっている場合は、このコマンドを使用して`app_name`を指定します。

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/applications.json' \
        -H $API_KEY -i \
        -d 'filter[name]=TimberTime'
   ```

2. 出力を確認して`application_id`を見つけ、それを`entity_id`として使用します。

   ```json
   {
     "applications": [
       {
         "id": 12345,         // application_id == entity_id
         "name": "TimberTime",
         "language": "ruby",
         "health_status": "gray",
         ...
       },
   ```

3. 更新する`policy_id`を取得します。たとえば、 `TimberTime`アプリの`Logjam Alert`ポリシー。 `policy_id`を取得するには、次のコマンドを使用します。

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/alerts_policies.json' \
        -H $API_KEY -i \
        -G -d 'filter[name]= Logjam Alert'   # policy_name
   ```

4. ポリシーの出力を確認します。

   ```json
   {
     "policies": [
       {
         "id": 85,      // policy_id
         "incident_preference": "PER_POLICY",
         "name": "Logjam Alert",
         "created_at": 1461176510393,
         "updated_at": 1461176510393
       },
   ```

5. このポリシーのすべての条件をリストし、 `condition_id`を見つけます。

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/alerts_conditions.json' \
        -H $API_KEY -i \
        -G -d 'policy_id=85'
   ```

   契約条件の見直し、例えば

   ```json
   {
     "conditions": [
       {
         "id": 234567,               // condition_id
         "type": "apm_app_metric",
         "name": "Throughput (web) (High)",
         "enabled": true,
         "entities": [
           "8288171"                 // Entity currently included in the policy
         ],
         "metric": "response_time_web",
         "terms": [
           {
             "duration": "5",
             "operator": "above",
             "priority": "critical",
             "threshold": "500",
             "time_function": "all"
           }
         ]
       }
     ]
   }
   ```

6. APIリクエストを使用して、ポリシーの条件にエンティティを追加したり、ポリシーの条件からエンティティを削除したりします。

   `entity_id`を`condition_id` 234567に追加するには、 `entity_type`を`Application`に設定します。

   ```shell

   curl -X PUT 'https://api.newrelic.com/v2/alerts_entity_conditions/12345.json' \
        -H $API_KEY -i \
        -H 'Content-Type: application/json' \
        -G -d 'entity_type=Application&condition_id=234567'
   ```

   `entity_type`を`Application`に設定して`condition_id` }234567から`entity_id` 8288171を削除するには：

   ```shell

   curl -X DELETE 'https://api.newrelic.com/v2/alerts_entity_conditions/8288171.json' \
        -H $API_KEY -i \
        -G -d 'entity_type=Application&condition_id=234567'
   ```