---
title: アラートの作成
metaDescription: create alerts in New Relic
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  この手順は、クイックスタートを構築する方法を教えるコースの一部です。 まだご覧になっていない方は、[コース紹介を](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart)ご覧ください。

  このコースの各手順は前回の手順に基づいて構築されるため、この手順に進む前に必ず[ダッシュボードを作成してください](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-a-dashboard)。
</Callout>

New Relicアラートを使用すると、サービスを監視し、関心のある問題に関する通知を受け取ることができるため、迅速に対応してトラブルシューティングを行い、解決することができます。 New Relic で利用できるアラートには 2 種類あります。

* 静的
* ベースライン

この手順では、これらのアラートを作成する方法を学習します。

<Callout variant="tip">
  アラートの基本については既に理解していることを前提としています。 始めたばかりの場合は、続行する前に[集計ドキュメント](/docs/alerts-applied-intelligence/overview)を参照して基本を理解してください。
</Callout>

## アラートポリシーの作成 [#create-alert-policy]

アラート条件を設定する前に、ポリシーを作成する必要があります。

左側のナビゲーションの**Alerts** \[アラート]から、 **Alert conditions** \[アラート条件]セクションに移動します。 次に、 **New alert policy** \[新しいアラートポリシー]をクリックします。

ポリシーに`FlashDB alert policy`という名前を付けます。

残りのフィールドにはデフォルト値を使用し、ページを下にスクロールして**Create policy without notifications** \[通知なしでポリシーを作成]をクリックします。

次のステップは、アラートポリシーに条件を追加することです。

## アラート条件を作成する [#create-alert-conditions]

次のアラート条件を追加します。

* 読み取り応答が遅い
* キャッシュのヒット率が低い

### 高いレスポンスタイムとアラート条件を作成する [#crete-response-time]

**FlashDB alert policy** \[FlashDB アラートポリシー]の下で、**Create a condition** \[条件の作成を]クリックします。

次のページでは、症状のカテゴリを選択するよう求められます。 NRQL を選択すると、NRQL クエリを使用して条件を作成できます。 次に、 **Next, define thresholds** \[次はしきい値を定義します] をクリックします。

読み取り操作に予想よりも時間がかかっている場合は、New Relic から通知を受ける必要があります。 アラート条件に「読み取り応答が遅い」という名前を付け、条件に対して次の NRQL クエリを入力します。

```sql
SELECT average(fdb_read_responses) FROM Metric
```

ここでは、FlashDB の平均読み取り応答を選択しました。

同じページを下にスクロールして、閾値を定義します。 閾値タイプとして**Static** \[静的]を選択します。 これは最も単純な閾値タイプであり、クエリによって返された数値に基づいて条件を作成します。

臨界閾値を 0.9 に設定します。 ここでは、読み取り応答時間が 5 分以上 0.9 を超えるたびに違反が開く条件を定義しました。

次に、 **Add warning threshold** \[警告閾値の追加]をクリックします。

閾値を 0.8 に入力すると、読み取り応答が 5 分以上 0.8 を超えた場合に警告が表示されます。

残りのフィールドにはデフォルト値を使用し、ページを下にスクロールして**Save condition** \[条件を保存]をクリックします。

これで、FlashDB アラートポリシーの下に新しい条件が表示されます。

### キャッシュのヒット率条件を作成する [#create-cache-hit]

あなたは、データベースが業界で最速であると主張しているので、キャッシュのヒット率が低すぎる場合にもNew Relicから通知を受けたいと思っています。 **Add a condition** \[条件の追加]をクリックして、同じポリシーの下に別の条件を追加します。

次のページでは、症状のカテゴリを選択するよう求められます。 NRQLを選択し、**Next, define threshold** \[次へ、しきい値を定義]をクリックします。

条件に「Low キャッシュのヒット率」という名前を入力し、次のNRQLクエリを使用します。

```sql
SELECT sum(fdb_cache_hits)/sum(fdb_read_responses) FROM Metric
```

**Threshold Type** \[閾値タイプ]で**Anomaly** \[異常を]選択し、**Threshold direction** \[閾値方向]を**Lower only** \[下限のみ]に変更します。 次に、クリティカル閾値と警告閾値をそれぞれ 3 標準偏差と 2 標準偏差に設定します。

条件を保存してアラートポリシーに追加します。アラートポリシーは次のようになります。

## 通知ワークフローを作成する [#create-notification]

開封済みの違反に関する通知を受け取るには、通知ワークフローも作成する必要があります。

まず、 **Notification settings** \[通知設定]タブに移動し、 **Create workflow** \[ワークフローの作成]をクリックします。

これにより、**Create a new workflow to get notified** \[通知を受け取るための新しいワークフローを作成する]ページに移動します。 チャネル オプションのリストから、**Email** \[電子メール]をクリックします。

通知を受信するメールアドレスを入力し、**Email subject** \[メールの件名]を更新して、 **Save** \[保存]をクリックします。

これにより、**Create a new workflow to get notified** \[通知を受け取るための新しいワークフローを作成する]ページに戻り、通知チャネルが追加されたことがわかります。 次に、 **Activate workflow** \[ワークフローをアクティブ化]をクリックします。

**Notification settings** \[通知設定]の下にワークフローが表示されます。

## 概要 [#summary]

この手順では、FlashDB アラートポリシー を作成し、それに遅い読み取り応答と低いキャッシュのヒット率の条件を追加しました。 また、未解決の違反に関する通知を受け取るためのワークフローも作成しました。

<Callout variant="tip">
  この手順は、クイックスタートを構築する方法を教えるコースの一部です。 次の手順[「クイックスタートの構築](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/build-a-quickstart)」に進みます。
</Callout>
