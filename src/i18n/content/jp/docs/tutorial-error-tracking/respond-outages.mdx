---
title: エラー追跡による停止への対応
metaDescription: Learn how to monitor your system so you can quickly identify and resolve many error occurrences fast.
freshnessValidatedDate: '2023-07-18T00:00:00.000Z'
translationType: machine
---

エラーは必ず発生します。可観測性ツールを使用したとしても、エラーの原因を見つけるのは思っているほど簡単ではありません。浸水した庭を考えてみましょう。ホースの近くで水が流れていることに気づきましたが、実際には浸水の原因は水道本管のどこかに亀裂が入っていることです。ホースの漏れが洪水の原因だと仮定した場合、ホースは固定されたものの、芝生は台無しになってしまうことになり、高くつく間違いです。

エラー分析により問題の原因が特定されるため、フラッドが発生する前に問題を解決できます。チームが新しいデプロイメントを行ったり、上流でサービスに障害が発生したりした場合は、ソリューションを実装する前にさらに深く掘り下げる必要があります。エラー分析には仮定が入る余地はありません。

## 目的 [#objective]

このチュートリアル シリーズでは、重大なエラーを解決する方法を示し、全体的なエラー数を減らす方法を説明します。このドキュメントでは、次の方法など、[エラー受信トレイ](/docs/errors-inbox/getting-started)機能を操作する方法について説明します。

* サービスを選択してエラー分析を開始してください
* 停止を示すエラー グループを選択してください

## 前提条件 [#prereq]

アプリケーションのパフォーマンスを監視するには、アプリケーションの言語専用に作成されたエージェントを使用します。ロゴをクリックすると、New Relic UI のガイド付きインストーラーに移動し、ガイドに従ってエージェントのインストールと構成を行います。

<TechTileGrid>
  <TechTile
    name="Go agent"
    icon="logo-go"
    to="https://one.newrelic.com/nr1-core?state=985d4005-ba90-a8c7-1da1-2af34539b03b"
  />

  <TechTile
    name="Java agent"
    icon="logo-java"
    to="https://one.newrelic.com/nr1-core?state=80d18bcb-4919-1fcb-2b77-9406838eb916"
  />

  <TechTile
    name=".NET agent"
    icon="logo-dotnet"
    to="https://one.newrelic.com/nr1-core?state=30e93090-6dfa-6b70-8e75-472f54414355"
  />

  <TechTile
    name="Node.js agent"
    icon="logo-nodejs"
    to="https://one.newrelic.com/marketplace/install-data-source?state=be2e62fa-cc3b-c428-27c4-8d662c9e80a1"
  />

  <TechTile
    name="PHP agent"
    icon="logo-php"
    to="https://one.newrelic.com/nr1-core?state=aa633b41-72d4-009c-3abf-55dcf64894fe"
  />

  <TechTile
    name="Python agent"
    icon="logo-python"
    to="https://one.newrelic.com/nr1-core?state=20fda75b-58fb-a92a-f9e1-7b052035c6e8"
  />

  <TechTile
    name="Ruby agent"
    icon="logo-ruby"
    to="https://one.newrelic.com/nr1-core?state=d69143ab-605c-579b-25bf-cc6e5fee5b80"
  />
</TechTileGrid>

エージェントをインストールしたら、 <DNT>**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))**</DNT>に移動してアプリを選択します。 まだ多くのデータが表示されない場合は、しばらく離れて、アプリケーションの実行中にエージェントがリアルタイム データを収集できるようにします。 このチュートリアルでは、最初の集計をまだ作成していない場合でも、 <InlinePopover type="alertsTutorial"/>についてある程度理解していることを前提としています。

## アプリケーション内のエラーを検出して追跡する [#detect-error]

アプリがインストルメント化されたので、New Relic はサービスに関するデータをキャプチャしています。これには、アプリで発生したエラーに関するデータが含まれます。

<Steps>
  <Step>
    ## エンドユーザーのことを考える

    アラートは問題の存在を知らせます。それは芝生に水が溜まっていることです。ただし、アラートではすべてのコンテキストが提供されるわけではありません。そこでエラー受信箱が役に立ちます。

    あなたが e コマース サイト上のいくつかのアプリを担当していると想像してください。2 つのコンポーネントに対して 2 つのアラートを受け取りました。1 つはチェックアウトに関するもの、もう 1 つは在庫の検索に関するものです。エンド ユーザーに対して検索機能が失敗しているというレポートしか受け取っていませんが、チェックアウト コンポーネントは正常に動作しています。チェックアウト機能の方が重要だと考えるかもしれませんが、その信念と可観測性の実践を区別することが重要です。

    この慣行は、エンド ユーザーが何も報告していない場合でも適用されます。サービスが失敗していることに気づいたら、次の質問を自問してください。

    * エンドユーザーは問題を抱えていますか?
    * 彼らの経験はどのように見えるべきでしょうか？
    * 彼らは現在どのような行動を経験していますか?
  </Step>

  <Step>
    ## どのサービスがエラーを報告しているかを特定する

    これが実際にどのように見えるか見てみましょう。 <DNT>**All entities**</DNT>ページを表示すると、4 つのサービスが警告を発していることがわかります。

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_all_entities.webp"
    />

    ステップ 1 からの質問を自問すると、次のことがわかります。

    * エンドユーザーは購入アクションに悩んでいます。
    * サイトでは在庫のある商品のみを表示する必要があります。
    * サイトにはすべての商品が表示されているため、顧客は在庫切れの商品を購入できます。

      `api-gateway` インベントリにとって重要な依存関係であることが特定されました。ここからエラー分析を開始します。
  </Step>

  <Step>
    ## 何が変わったのかを特定する [#source]

    システムへのエントリ ポイントができたので、アプリに影響するエラーを調べることができます。 `api-gateway`概要ページで、 <DNT>**Triage**</DNT>の下の<DNT>**Errors**</DNT>タブをクリックします。 エラー ページでは、データがエラーのみのビューにフィルターされます。

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-inbox-page.webp"
    />

    `api-gateway`には少なくとも 6 つのエラー グループが報告されています。エラー グループは、アプリ内で数十から数千の範囲で発生します。

    最初は粒度が足りないように見えますが、時系列は時間の経過とともに何が変化したかを示すのに十分な情報を提供します。これを詳しく説明します。

    * 出現数だけを考えると、出現数が 4,000 であるため、最初の本能は `ActivemModel:::ValidationError` から始める必要があるかもしれません。ただし、時系列で見ると、山と谷は比較的一貫しています。これは予期されたエラーである可能性がありますが、他の 5 つを見てみましょう。
    * `Net::OpenTimeOut` エラー グループにも同様のパターンがあり、実際には 6 つのレポート グループのうち 4 つを占めています。各エラー グループにわたって、インシデントの前から続く一貫した山と谷が見られます。同じ名前と同様のパターンがあることから、これも予期されたエラーであると推測できます。
    * 最後のオプションは`JsonapiClient:::Notfound`です。 `ActivemModel:::ValidationError`と同様に、明確な形状を持ち、一貫して報告されています。 発生回数は多くありませんが、時系列が異常であるため、もう少し深く掘り下げる価値があるかもしれません。
  </Step>

  <Step>
    ## 時系列を調整する [#timeseries]

    確実にするには、時間パラメーターを調整して、過去 12 時間のパターンを表示します。

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-anomaly.webp"
    />

    調整により、 `ActivemModel:::ValidationError`は不変の山と谷のパターンがあることがわかりますが、 `JsonapiClient:::Notfound` は過去 1 時間で劇的に増加しました。これは良い出発点です。

    何かがいつ起こったかを知ることは、原因に近づくための重要な部分です。問題空間を完全に理解したら、原因を掘り下げることができます。
  </Step>
</Steps>

<UserJourneyControls nextStep={{"path":"/docs/tutorial-errors/solve-critical-errors","title":"次のステップ","body":"エラー グループを選択すると、エラー概要ページにシステムの障害に関する属性データが表示されます。"}}/>
