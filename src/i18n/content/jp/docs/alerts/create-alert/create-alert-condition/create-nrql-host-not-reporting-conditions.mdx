---
title: 「ホストが報告しない」 NRQLアラート条件を作成する
metaDescription: Create guided mode NRQL conditions for "host not reporting" infrastructure errors.
freshnessValidatedDate: '2024-08-01T00:00:00.000Z'
translationType: machine
---

import alertsTellUsWheretoLook from 'images/alerts_screenshot-crop_tell-us-where-to-look.webp'

import alertsHostNotReportingSelection from 'images/alerts_screenshot-crop_host-not-reporting-selection.webp'

import alertsSetConditionThresholds from 'images/alerts_screenshot-crop_set-condition-thresholds.webp'

import alertsSignalsLostOptions from 'images/alerts_screenshot-crop_signals-lost-options.webp'

NRQL 条件ガイド モードにより、「ホストがレポートしていない」(HNR) アラートの作成が簡素化されます。 手動でNRQLを作成する代わりに、このガイド付きアプローチを使用すると、インフラストラクチャがデータ送信を停止したときを検出するための条件を迅速に定義できます。 この方法では、従来の HNR アラートと比較して、特定のホスト グループをターゲットにし、積算値をカスタマイズし、インシデント基準を調整するための柔軟性が向上します。

## 特徴 [#features]

HNR イベントは、インフラストラクチャーエージェントが指定された時間枠内にコレクターにデータを送信できなかった場合に生成されます。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>**Host not reporting condition**</DNT>
      </th>

      <th>
        <DNT>**Features**</DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        モニターの内容
      </td>

      <td>
        [エンティティ フィルター バーを](/docs/new-relic-solutions/new-relic-one/core-concepts/search-filter-entities)使用して、 NRQLアラート条件を監視するホストを選択できます。 選択内容に基づいて、NRQL クエリが自動的に構築されます。 この条件は、条件のフィルターに一致する、将来追加するすべてのホストにも自動的に適用されます。
      </td>
    </tr>

    <tr>
      <td>
        通知方法
      </td>

      <td>
        NRQL 条件は[ポリシー](/docs/using-new-relic/welcome-new-relic/get-started/glossary#alert-policy)に含まれています。 ポリシーは[ワークフローと宛先](/docs/alerts/get-notified/intro-notifications/)を使用して、インシデントが作成されたときに通知する方法を決定します。
      </td>
    </tr>

    <tr>
      <td>
        インシデントを開くタイミング
      </td>

      <td>
        HNR ガイド モードでは、信号損失 NRQL 状態の作成をガイドします。 これは、HNR イベントをトリガーする時間枠の構成や、オプション<DNT>**Close all current open incidents**</DNT> 、 <DNT>**Open new &quot;lost signal&quot; incident**</DNT> 、および<DNT>**Do not open &quot;lost signal&quot; incident on expected termination**</DNT>からの選択を含む[、信号喪失のすべての痛値設定](/docs/alerts/create-alert/create-alert-condition/create-nrql-alert-conditions/#signal-loss)に完全にアクセスできることを意味します。 これらの設定は、ポリシーの[インシデント設定](/docs/alerts/new-relic-alerts/configuring-alert-policies/specify-when-new-relic-creates-incidents)と組み合わせて、インシデントがいつオープンするかを決定します。
      </td>
    </tr>
  </tbody>
</table>

## NRQL HNR アラート条件を作成する [#create-nrql-hnr-alert-condition]

1. アラートポリシーのページに移動します。

2. **New alert condition** \[新しいアラート条件を]クリックします。

3. **Use guided mode** \[ガイドモードの使用を]選択します。

4. **Tell us where to look** \[どこを調べるか教えてください]カテゴリの下にある**Hosts** \[ホスト]を選択します。 (注: 「hosts」オプションが表示されない場合は、[インフラストラクチャを計装するための指示](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview/)に従う必要がある場合があります。)

   <img title="creating a condition step 2" alt="screenshot of alert condition step 2" src={alertsTellUsWheretoLook} />

5. **Select an entity type** \[エンティティ タイプの選択]で**Hosts**\[ホスト]が自動的に選択されない場合は、もう一度**Hosts** \[ホスト]を選択してください。

6. **Next**\[次へ]をクリックします。

7. **Select signal catgory** \[信号カテゴリの選択]で、 **Host** \[ホスト]を選択します。

8. **Select a metric to monitor** \[監視するメトリクスを選択してください]で、 **Host not reporting**\[ホストがレポートしていない]を選択します。

   <img title="host not reporting selection" alt="screenshot of selecting host not reporting option" src={alertsHostNotReportingSelection} />

9. ここで、エンティティ フィルターを使用して、監視するホストの範囲を絞り込むことができます。

10. **Next**\[次へ]をクリックします。

    <img title="set condition thresholds" alt="screenshot of setting remaining thresholds" src={alertsSetConditionThresholds} />

11. **Consider the signal lost after** \[信号が失われたとみなす時間]では、時間枠を 30 秒から 48 時間まで調整するオプションがあります。 また、信号が終了すると予想される場合 (たとえば、ホストがシャットダウンすると予想される場合) にインシデントを開くのをスキップするオプションを選択するなど[、信号損失設定](/docs/alerts/create-alert/create-alert-condition/create-nrql-alert-conditions/#signal-loss)を調整することもできます。

12. 残りの手順に従って設定を完了し、アラート条件を保存します。

## オプション: 予想される終了時に「信号喪失」インシデントを開かない [#do-not-open-lost-signal]

**Do not open &quot;lost signal&quot; incident on expected termination** \[予想される終了時に「信号喪失」インシデントを開かない]オプションをオンにすると、信号が終了すると予想されるときにインシデントを開かないように New Relic に指示することになります。 これは、ホストがシャットダウンすることが分かっている場合に便利です。

このオプションを有効にするには、 **Open new &quot;lost signal&quot; incident** \[新しい「信号喪失」インシデントを開く]もチェックする必要があります。 この方法では、New Relic は、信号が失われたときに新しいインシデントを開くことを認識しますが、信号が失われると予想されるときは認識しません。

<img title="signal loss options" alt="screenshot of signal loss options" src={alertsSignalsLostOptions} width="50%" />

<Callout variant="important">
  「予期される終了時に「信号喪失」インシデントを開かない」場合に信号喪失インシデントが開かないようにするには、ホスト エンティティにタグ`termination: expected`を追加する必要があります。 このタグは、信号が終了すると予想されていたことを示します。 [ホスト エンティティにタグを直接](/docs/new-relic-solutions/new-relic-one/core-concepts/use-tags-help-organize-find-your-data/#add-tags)追加する方法を参照してください。
</Callout>