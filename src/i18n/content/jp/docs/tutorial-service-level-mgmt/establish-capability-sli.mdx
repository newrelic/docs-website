---
title: 機能 SLI を確立する
metaDescription: 'New Relic observability maturity series: our service level management guide shows you how to easily measure and communicate the overall health, performance, and quality of your digital products and services to all stakeholders.'
freshnessValidatedDate: never
translationType: machine
---

ログインや支払いの承認など、重要なビジネス機能のサービスレベルを確立すると、IT とビジネスの間の言語の壁が急速になくなります。 機能のサービスレベル スコアは、サービスレベルが悪化し始めたときに修正する機会も与えます。 たとえば、ログイン サービス レベルが低下し始めた場合は、消費者向け API から始めて ID 管理の依存関係とワークフローを確認する必要があることがわかります。

このタスクを完了するために、アプリケーションやサービスについての詳しい知識は必要ありません。 必要なのは、消費者向け API (サービス境界) を見つけて、以下の手順に従って機能サービスレベルを作成することだけです。

1. [出力 SLI ドキュメントの確立](/docs/tutorial-service-level-mgmt/establish-output-sli/)の説明に従って、サービス境界アプリケーションを特定します。

2. 次の NRQL クエリを実行して、最も頻繁に使用されるトランザクションのベースラインを特定します。 `Order-Processing`を指定したアプリケーション名に置き換えることを忘れないでください。

   ```
   FROM Transaction SELECT count(*), percentile(duration, 95) WHERE appName='Order-Processing' FACET name SINCE 1 WEEK AGO
   ```

   以下のスクリーンショットのようなものが表示されるはずです。 最初のトランザクションには、「購入」に関係があることが示されています。 「購入」機能のサービスレベルを作成できるようになりました。

   <img
     alt="transaction list query"
     src="/images/queries-nrql_screenshot-full_transaction-list-nrql.webp"
   />

3. クエリの末尾に`WHERE name='Controller/Sinatra//purchase'`を追加し、 `Controller/Sinatra//purchase`トランザクション名に置き換えます。

4. クエリを実行して、機能することを確認します。 これで、結果には 1 つのトランザクションのみが表示されるはずです。 このクエリと`DURATION (95%)`の結果をメモ帳にコピーします。 すぐに両方が必要になります。

5. プラットフォームで新しいサービスレベルを作成します。新しいサービス・レベルの開始については、 [入力パフォーマンス SLI の確立](#establishing-input-sli) で説明しています。

この場合、リストでアプリケーション（APM `Entity`タイプ）を検索して、エンティティGUIDを介してメタデータ（タグ）を保持できるようにします。上記のセクションの「合成モニター」の代わりに、エンティティフィルターのドロップダウンで「APM」を選択します。

6. 「レイテンシー」ガイド付きワークフローを選択すると、有効なクエリが自動的に入力されます。

7. メモ帳を使用して、 `name='your/transaction/name/here'`だけをコピーします。

8. 以下のスクリーンショットで下線が引かれているように、この条件をサービスレベルの両方のクエリに追加**`AND `**ます。

   <img
     alt="capability query clause"
     src="/images/apm_screenshot-crop_capability-filter-clause.webp"
   />

9. メモ帳にコピーした元のベースラインの`DURATION (95%)`結果と一致するように、2 番目のクエリの`duration < 1.78`部分を調整します。

10. このサービスレベルに名前を付け、説明を更新し、サービスレベルを保存します。

ここから、これらの機能のサービスレベルをいくつか設定し、アプリケーション チームとリーダーシップに提示してフィードバックを求めることをお勧めします。

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-service-level-mgmt/improve-with-slm/","title":"次のステップ","body":"SLM テクニックを使用して信頼性を向上させる方法を学ぶ"}}
  previousStep={{"path":"/docs/tutorial-service-level-mgmt/establish-input-sli/","title":"一つ前の手順","body":"インプット指標と目標を作成する方法を学ぶ"}}
/>
