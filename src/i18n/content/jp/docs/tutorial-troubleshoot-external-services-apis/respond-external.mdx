---
title: APIの問題に対応する
metaDescription: Learn how to manage APIs and other external services
freshnessValidatedDate: '2023-09-02T00:00:00.000Z'
translationType: machine
---

ほとんどすべてのアプリケーションとサービスは、API やその他の外部サービスを呼び出します。サイト上で `buy` ボタンを押すという単純な操作で数十の API 呼び出しが行われる場合、必ず問題が発生します。問題のある API 呼び出しは、在庫に関する小さな事故から、サイトが支払い処理業者と通信できないという危険な状況に至るまで、あらゆる事態を引き起こす可能性があります。

これらのエラーの分析には時間がかかります。購入トランザクションの呼び出しが失敗したために、サイトが購入の処理に失敗していませんか?それとも、支払い処理業者への認証呼び出しでしょうか?おそらく、それは外部 API の問題ではなく、内部インベントリ API の問題である可能性があります。それは API エラーですか、それとも独自のアプリケーション内のエラーですか?New Relic を使用すると、手動で行う場合に比べてほんのわずかな時間でこれらの問題を解決できます。

<img
  title="Maps overview"
  alt="Home maps overview"
  src="/images/apm_screenshot-crop_maps-home.webp"
/>

## 目的 [#objective]

このチュートリアル シリーズでは、問題のある API インタラクションを特定する方法と、New Relic プラットフォームを使用してそれらを解決する方法を説明します。このドキュメントでは以下について説明します。

* New Relic をアプリケーションと統合して監視するデータを送信する
* 外部サービス UI を使用した問題のある API の特定

## New Relicの統合 [#integrate]

何かを監視または解決するには、使用するデータを収集するエージェントをインストールする必要があります。

<Steps>
  <Step>
    ## APMエージェントのインストール

    アプリケーションのパフォーマンスを監視するには、アプリケーションの言語専用に作成されたエージェントを使用します。ロゴをクリックすると New Relic プラットフォームに移動し、ガイドに従ってエージェントのインストールと構成を行います。

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

    エージェントをインストールしたら、 **[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))** にアクセスしてアプリを選択します。まだ多くのデータが表示されていない場合は、しばらく離れて、エージェントがアプリケーションの実行中にリアルタイム データを収集できるようにします。
  </Step>

  <Step>
    ## 追加セットアップ

    特定の構成では追加のセットアップが必要になる場合があります。詳細については [、外部サービスのセットアップに関するドキュメント](/docs/apm/apm-ui-pages/monitoring/external-services/external-services-setup/) をご覧ください。

    上記のドキュメントの追加手順を完了したら、**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))** > (アプリを選択) > **外部サービス** に移動します。API と外部サービスに関するデータが流入しているのが確認できるはずです。
  </Step>
</Steps>

## 問題のある API を特定する

アプリケーションが API やその他の外部サービスとどのように対話するかを追跡できるようになりました。その情報を使用して、問題の原因となっている API または外部サービスを特定してみましょう。

<Steps>
  <Step>
    ## 根本原因を考える

    問題のある API またはサービスを探している場合は、おそらくすでに解決できる問題を抱えているでしょう。場合によっては、ユーザーが購入できなかったり、サイトにログインできなかったりする可能性があります。

    アプリケーションは数十または数百の API を呼び出す場合があります。次の手順を続行する間、根本的な問題に留意してください。購入に関して問題があることがわかっている場合は、購入および取引関連の API に焦点を当てる必要があります。ログインの問題の場合は、ユーザー データベースまたは外部認証サービスへの呼び出しに焦点を当てることができます。
  </Step>

  <Step>
    ## マップによるトリアージ

    あなたがウェブストアを運営していて、荷物が到着したときに通知が来なかったという苦情のメールをユーザーから受け取ったとします。SMS 通知と電子メール通知の両方を受信しているはずなので、これは奇妙だと思われます。

    配信プロセス全体を処理するサービスを実装しました。**External services** \[外部サービス] ページに移動し、 **Maps** \[マップ]をクリックします。

    <img
      title="Map view"
      alt="The maps view"
      src="/images/apm_screenshot-crop_external-maps.webp"
    />

    これにより、独自のすべてのサービスと外部サービスまたは API との関係が表示されます。この場合、優先順位付けが必要なサービスは `Delivery`です。これは、 `Order-Composer` という別のサービスによって呼び出され、右に示すように、他の 4 つのサービスと API を呼び出します。
  </Step>

  <Step>
    ## 異常を特定する

    マップ ビューには、スループットと応答時間を追跡するのに役立つグラフがいくつか表示されますが、サービスとそのサービスが呼び出すサービスとの間の線の太さと色によって、それらのメトリクスも視覚的に表現されます。

    <img
      title="RPM"
      alt="Screenshot showing the hover view of map entities"
      src="/images/apm_screenshot-crop_maps-rpm.webp"
    />

    `Delivery` サービスとその依存関係の間の線は、 `Sms notification`を指している線を除いて、すべてかなり似ているように見えます。実際、SMS サービスの上にマウスを置くと、スループットが他の依存関係よりもはるかに高いことがわかります。
  </Step>
</Steps>

これで、ユーザーの不満の原因として考えられるのは `Sms notification` であると特定されました。疑わしい人物を特定したので、根本的な問題を解決できます。

<UserJourneyControls nextStep={{"path":"/docs/tutorial-external-services/solve-external","title":"次のステップ","body":"メトリック チャート、システム マップ、トレースを使用して API の問題を解決します。"}}/>
