---
title: 外部サービスUIの使用方法
metaDescription: Here are tips about how to use the external services UI
freshnessValidatedDate: never
translationType: machine
---

外部サービスのUIは、単一のサービスとそのアップストリームおよびダウンストリームサービスを分析するのに最適な場所です。 UIは、選択したサービスのマップと、応答時間、スループット、およびエラー率の上位5つの結果を示すパフォーマンスチャートから始まります。必要に応じて、同じマップの詳細を[表形式](#table-view)で表示することもできます。

## 外部サービス機能を見つける方法 [#where-externals]

APM - モニター サービスを選択すると、左側のナビゲーション ペインから外部サービス機能が利用できるようになります。 <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services**</DNT>に移動すると開くことができます。 アプリを選択し、 <DNT>**Monitor**</DNT>セクションの<DNT>**External services**</DNT>をクリックします。

## 外部サービスマップ [#use-the-map]

オープニング マップには、選択したサービスが頂点 (六角形) として表示され、上流または下流のサービスが四角形で囲まれます。 初期ビューはダウンストリーム サービスなので、デフォルトでは<DNT>**Downstream entities**</DNT>タブが選択されます。 このタブでは、パフォーマンス チャート ( <DNT>**Response time**</DNT> 、 <DNT>**Throughput**</DNT> 、 <DNT>**Error rate**</DNT> ) がダウンストリーム サービスに適用されます。 <DNT>**Upstream entities**</DNT>をクリックすると、それらのパフォーマンス チャートに切り替えることができます。

<img
  title="Screenshot showing the opening map for external services"
  alt="Screenshot showing the opening map for external services"
  src="/images/apm_screenshot-crop_external-service-intro.webp"
/>

### トランザクションの詳細を見る [#drill-down]

外部サービスの最初のページでは、各長方形にアップストリームまたはダウンストリームサービスを表す頂点が含まれています。頂点は、エッジ（線）によってサービス間で接続されます。特定のサービスにドリルインすると、それらのドリルダウンページの頂点がサービスエンドポイントになるため、トランザクションの詳細を確認できます。

線の太さはサービスのスループットを表し、線の暗さは消費時間（スループット時間の長さ）です。

### 地図記号 [#map-legend]

マップの凡例には、次の2種類のサービスを選択するオプションがあります。

* <DNT>
    **Services**
  </DNT>

  : これらはあなたが所有し、インストゥルメントされたサービスです。

* <DNT>
    **Uninstrumented externals**
  </DNT>

  : これらは、所有しているかどうかわからない、インストルメント化されていないサービスです。

## パフォーマンスチャートのしくみ [#understand-data]

外部サービスのオープニングページには、3つのパフォーマンスチャートが表示されます。 APMエージェントの場合、これらの初期パフォーマンスチャートにはメトリックデータが入力されますが、OpenTelemetryの場合、初期値にはサンプルデータが入力されます。

OpenTelemetryエージェントかAPMエージェントかに関係なく、最初のページの下をドリルすると、各子ページにサンプルデータが入力されます。これは、サンプリングされたデータを表示するページに期待するデータが表示されない場合は、 [サンプリング](/docs/apm/apm-ui-pages/monitoring/external-services/external-services-setup#adjust-sampling)を増やす必要がある可能性があることを意味します。

パフォーマンスチャートには、表示しているページのデータが常に反映されますが、最初のページの下をドリルすると、パフォーマンスチャートのセットが変化します。これらのチャートを理解するために必要なものは次のとおりです。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        パフォーマンスチャート
      </th>

      <th>
        ページ
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        応答時間
      </td>

      <td>
        すべてのページ<br/>（APMと<br/>Opentelemetry）
      </td>

      <td>
        初期ビューのサービス間またはドリルダウンビューのトランザクション間の平均呼び出し時間。 APMの初期ビューには、すべてのコールに基づくメトリックデータとして応答時間が表示されます。 OpenTelemetryの初期ビューには、応答時間がトレースデータとして表示されます。これは、サンプリングされた呼び出しのみに基づいています。

        すべてのドリルダウンページの応答時間は、サンプリングされた呼び出しのみに基づくトレースデータとして応答時間を示しています。これが実際のシステムパフォーマンスをどの程度適切に表すかは、実効サンプルレートによって異なります。
      </td>
    </tr>

    <tr>
      <td>
        スループット
      </td>

      <td>
        ページを開く<br/>（APMのみ）
      </td>

      <td>
        2つのサービス間の呼び出しの総数。
      </td>
    </tr>

    <tr>
      <td>
        エラー率
      </td>

      <td>
        ページを開く<br/>（APMのみ）
      </td>

      <td>
        2つのサービス間のコールの1分あたりのエラー数。
      </td>
    </tr>

    <tr>
      <td>
        トレースされた呼び出し数
      </td>

      <td>
        ページを開く<br/>（OpenTelemetry）

        ドリルダウンページ<br/>（APMと<br/>OpenTelemetry）
      </td>

      <td>
        2つのサービスまたはトランザクション間の特定のパスに対してサンプリングされた呼び出しの数を表します。リクエストを100％サンプリングしない限り、これは総スループットよりも低くなります。
      </td>
    </tr>

    <tr>
      <td>
        トレースされたエラーカウント
      </td>

      <td>
        ページを開く<br/>（OpenTelemetry）

        ドリルダウンページ<br/>（APMと<br/>OpenTelemetry）
      </td>

      <td>
        エラーが発生した2つのサービスまたはトランザクション間でサンプリングされたコールの数。
      </td>
    </tr>
  </tbody>
</table>

## 外部サービステーブル [#table-view]

マップ ビューの補助として、テーブル ビューには関連するすべてのサービスが列形式で一覧表示されます。 ページの右上にある<DNT>**List**</DNT>をクリックすると、マップ ビューと同じサービスが表示されます。

<img
  title="Screenshot showing the table version of the external services map"
  alt="Screenshot showing the table version of the external services map"
  src="/images/apm_screenshot-crop_external-services-table.webp"
/>

マップ ビューと同様に、特定のエンティティ (サービス) をクリックすると、ドリルダウン テーブルでトランザクションを表示できます。 ドリルダウンして興味深い情報を見つけたら、 <DNT>**Traces**</DNT>をクリックしてディストリビューティッド（分散）トレーシングの詳細に切り替えることができます。

各パフォーマンス列の右側には、対応する<DNT>**% change**</DNT> (パーセンテージの変化) 列があります。 パーセンテージの変化の計算は、メインのタイムピッカーと比較のタイムピッカー ( <DNT>**Compare to**</DNT> ) で選択した時間枠に基づいて行われます。 比較タイムピッカーは、メインの時間ウィンドウのどれくらい前に比較を開始するかを示します。

以下は<DNT>**Response time**</DNT>の例です: 現在の時刻が午前 11 時で、メインのタイムピッカーが<DNT>**last 30 minutes**</DNT> 、 <DNT>**Compare to**</DNT>タイムピッカーが<DNT>**1 hour ago**</DNT>の場合:

* 所要時間は午前10時30分から午前11時までの平均です。

* <DNT>
    **% change**
  </DNT>

  はそれを午前9時30分から午前10時までの平均と比較します

## ワークフローの例 [#workflow-example]

典型的なマップワークフローは次のとおりです。

1. マップ上で最も太くて暗い線を探し、それを上流または下流のサービスまでたどります。

2. 上流または下流の頂点をクリックします。

3. 2 つのサービス間のトランザクションの内訳を表示します。

   <img
     title="Screenshot showing calls to various endpoints in downstream service"
     alt="Screenshot showing calls to various endpoints in downstream service"
     src="/images/apm_screenshot-crop_external-services-downstream.webp"
   />

   <figcaption>
     この例では、太いエッジ（線）の1つが、Order-ComposerサービスからOrderStatusサービスのウェアハウスエンドポイントに移動します。
   </figcaption>

4. 特定のトランザクションに最も時間がかかっていると判断した場合は、そのトランザクションをクリックして、その依存関係に特に焦点を合わせます。

   <img
     title="Screenshot showing the transaction between the Order-Composer service and the warehouse endpoint in the Order-Status service"
     alt="Screenshot showing the transaction between the Order-Composer service and the warehouse endpoint in the Order-Status service"
     src="/images/apm_screenshot-crop_external-services-specific-transaction.webp"
   />

   <figcaption>
     このドリルダウンビューでは、Order-ComposerサービスとOrder-Statusサービスのウェアハウスエンドポイント間のトランザクションを確認できます。
   </figcaption>

5. このフローのどの時点からでも、時間の経過に伴う変化を示すサポートパフォーマンスチャートを参照してください。

6. ドリルダウンでディストリビューティッド（分散）トレーシングを表示するポイントに到達したら、右上の

   <DNT>
     **List**
   </DNT>

   をクリックし、表の

   <DNT>
     **Traces**
   </DNT>

   をクリックします。

   <img
     title="Screenshot showing the trace link in the table view"
     alt="Screenshot showing the trace link in the table view"
     src="/images/apm_screenshot-crop_external-services-link-table.webp"
   />

## 従来の外部サービスを表示する方法 [#classic-toggle]

クロスアプリケーション トレースを使用する既存のサービスを監視している場合は、従来の外部サービス ビューを引き続き使用できます。 デフォルトのビューは拡張された外部サービスであるため、切り替えボタン<DNT>**Show new view**</DNT>をクリックしてクラシック ビューに切り替える必要があります。
