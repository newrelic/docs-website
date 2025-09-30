---
title: タイムピッカーを追加する
metaDescription: Add a time picker to a sample application
freshnessValidatedDate: never
translationType: machine
---

このガイドでは、サンプルのトランザクション概要アプリケーションでタイムピッカーへのアクセスを追加するプロセスを段階的に説明します。

サンプル アプリケーションでは、アプリケーションごとのトランザクション、平均応答時間、HTTP 応答コード、トランザクション エラーなど、テレメトリー データの概要が提供されます。 タイムピッカーを有効にすると、ユーザーは表示するデータの時間範囲を指定できます。

以下の手順を説明する 12 分間のビデオも用意されています。

<Video
  id="inyshp3m7r"
  type="wistia"
/>

## あなたが始める前に [#begin]

プロジェクトを開発するには、New Relic One CLI (コマンドライン インターフェース) が必要です。 まだインストールしていない場合は、次の操作を行ってください。

* [Node.js を](https://nodejs.org/en/download/)インストールします。
* [CLI クイック スタート](https://one.newrelic.com/launcher/developer-center.launcher?pane=eyJuZXJkbGV0SWQiOiJkZXZlbG9wZXItY2VudGVyLmRldmVsb3Blci1jZW50ZXIifQ==)の手順 1 ～ 4 を完了します。 ステップ 1 では、アカウント名の前の番号を必ずコピーしてください。 これはあなたのアカウント ID です。後で必要になります。

<Callout variant="important">
  New Relic One CLI をすでにインストールしているが、アカウント ID を思い出せない場合は、 [CLI クイック スタートを](https://one.newrelic.com/launcher/developer-center.launcher?pane=eyJuZXJkbGV0SWQiOiJkZXZlbG9wZXItY2VudGVyLmRldmVsb3Blci1jZW50ZXIifQ==)再度起動し、 **Get your API key**の下矢印をクリックします。 アカウント ID は、アカウント名の前の番号です。
</Callout>

詳細については、 [「開発環境のセットアップ」](/build-apps/set-up-dev-env)を参照してください。

## タイムピッカーのサンプルコードを準備する [#picker-sample-code]

開始するには、次の手順を実行してアプリケーションの UUID (ユニークID) を更新し、サンプル アプリケーションをローカルで実行します。

<Steps>
  <Step>
    まだ行っていない場合は、[ハウツー GitHub リポジトリ](https://github.com/newrelic/nr1-how-to)からサンプル アプリケーションをクローンしてください。

    ```bash
    git clone https://github.com/newrelic/nr1-how-to.git
    ```
  </Step>

  <Step>
    ディレクトリ`nr1-howto-add-time-picker-nerdlet`に変更します:

    ```bash
    cd nr1-how-to/add-time-picker/nerdlets/nr1-howto-add-time-picker-nerdlet
    ```
  </Step>

  <Step>
    好みのテキスト エディターで`index.js`を開きます。
  </Step>

  <Step>
    `YOUR_ACCOUNT_ID`をアカウント ID に置き換えます:

    <Callout variant="important">
      アカウント ID は CLI クイック スタートで確認できます ( **始める前に**を参照)。
    </Callout>

    ```jsx
    this.accountId = <ADD YOUR ACCOUNT ID>;
    ```
  </Step>

  <Step>
    `add-time-picker`ディレクトリに変更します:

    ```bash
    cd /nr1-how-to/add-time-picker
    ```
  </Step>

  <Step>
    次のコマンドを実行して UUID を更新し、サンプル アプリケーションを提供します。

    ```bash
    nr1 update
    nr1 nerdpack:uuid -gf
    nr1 nerdpack:serve
    ```
  </Step>

  <Step>
    サンプル アプリケーションが正常に提供されたら、 New Relicのローカル バージョン ( [https://one.newrelic.com/?nerdpacks=local](https://one.newrelic.com/?nerdpacks=local) ) に移動し、 **Apps** \[アプリ]をクリックして、 **Add Time Picker** \[タイムピッカーの追加]をクリックします。
  </Step>
</Steps>

**Add Time Picker**アプリケーションを起動すると、 New Relicアカウントのトランザクションの概要を示すダッシュボードが表示されます。

デフォルトでは、アプリケーションは過去 60 分以内のデータを表示します。 タイムピッカーを切り替えても、 トランザクション概要アプリケーションがNew Relic Platform に接続されていないため、チャートは更新されません。 タイムピッカーからのデータにはアクセスできません。

次のセクションでは、タイムピッカーをサンプルアプリケーションに追加し、クエリに時間を追加します。

## `PlatformStateContext`コンポーネントをインポートします [#import]

タイムピッカーを追加する最初の手順は、 `PlatformStateContext`コンポーネントをインポートすることです。

<Callout variant="important">
  次の`PlatformStateContext`の例についてさらに詳しく知りたい場合は、 [API とコンポーネントのページを](/components/platform-state-context)参照してください。
</Callout>

`PlatformStateContext`コンポーネントの機能は次のとおりです。

* すべてのコードをレンダリング メソッドの return ステートメント内にラップします。
* New Relic プラットフォームの状態を渡して関数呼び出しを行います。
* 現在の return ステートメント内のすべてのコードを返します。

次の手順を実行します。

<Steps>
  <Step>
    テキスト エディターで`/add-time-picker/nerdlets/nr1-howto-add-time-picker-nerdlet/index.js`を開きます。
  </Step>

  <Step>
    次のように、 `PlatformStateContext`コンポーネントをインポート ステートメントの末尾に追加します。

    ```jsx
    import {
      Grid,
      GridItem,
      HeadingText,
      AreaChart,
      TableChart,
      PieChart,
      PlatformStateContext,
    } from 'nr1';
    ```
  </Step>

  <Step>
    現在の`return`のすぐ下に、 `PlatformStateContext`コンポーネントの次のコードを挿入します。

    ```jsx
    <PlatformStateContext.Consumer>
        {(platformState) => {
    return (
    // ADD THE CURRENT RETURN CODE HERE
    )
    }}
    </PlatformStateContext.Consumer>
    ```
  </Step>

  <Step>
    現在のアプリケーション コードを、 `platformState`関数呼び出しの`return`の下に移動します。 `return`ステートメントは次のようになります。

    ```jsx
    return (
      <PlatformStateContext.Consumer>
        {(platformState) => {
          return (
            <>
              <Grid
                className="primary-grid"
                spacingType={[Grid.SPACING_TYPE.NONE, Grid.SPACING_TYPE.NONE]}
              >
                <GridItem className="primary-content-container" columnSpan={6}>
                  <main className="primary-content full-height">
                    <HeadingText
                      spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                      type={HeadingText.TYPE.HEADING_4}
                    >
                      Transaction Overview
                    </HeadingText>
                    <TableChart
                      fullWidth
                      accountId={this.accountId}
                      query={trxOverview}
                    />
                  </main>
                </GridItem>
                <GridItem className="primary-content-container" columnSpan={6}>
                  <main className="primary-content full-height">
                    <HeadingText
                      spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                      type={HeadingText.TYPE.HEADING_4}
                    >
                      Average Response Time
                    </HeadingText>
                    <AreaChart
                      fullWidth
                      accountId={this.accountId}
                      query={avgResTime}
                    />
                  </main>
                </GridItem>
                <GridItem className="primary-content-container" columnSpan={6}>
                  <main className="primary-content full-height">
                    <HeadingText
                      spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                      type={HeadingText.TYPE.HEADING_4}
                    >
                      Response Code
                    </HeadingText>
                    <PieChart
                      fullWidth
                      accountId={this.accountId}
                      query={responseCodes}
                    />
                  </main>
                </GridItem>
                <GridItem className="primary-content-container" columnSpan={6}>
                  <main className="primary-content full-height">
                    <HeadingText
                      spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                      type={HeadingText.TYPE.HEADING_4}
                    >
                      Transaction Errors
                    </HeadingText>
                    <PieChart
                      fullWidth
                      accountId={this.accountId}
                      query={errCount}
                    />
                  </main>
                </GridItem>
              </Grid>
            </>
          );
        }}
      </PlatformStateContext.Consumer>
    );
    ```
  </Step>

  <Step>
    適切なデータが表示されていることを確認するには、 `console.log`ステートメントを追加します。 `<Grid>`コンポーネントの開始タグの直前の`PlatformState` return ステートメント内に次のコードを挿入します。

    ```jsx
    /* Taking a peek at the PlatformState */
    console.log(platformState);
    ```
  </Step>
</Steps>

これらの手順を完了すると、 browserコンソールにログが表示されます。

## クエリに時間を追加する [#add-time]

コンソールに、New Relic プラットフォームの状態のデータが表示されます。 これで、 `timeRange`データを追加して、トランザクション概要アプリケーションのグラフを更新する準備が整いました。

この手順では、New Relic アプリ コミュニティ ライブラリから`timeRangeToNrql`ユーティリティ メソッドをインポートする必要があります。

<Callout variant="important">
  New Relic アプリ コミュニティ ライブラリの詳細については、 [GitHub リポジトリ](https://github.com/newrelic/nr1-community)をご覧ください。
</Callout>

このヘルパー メソッドは、 `PlatformState.timeRange`期間データを受け取り、それをミリ秒からフォーマットし、フォーマットされた`SINCE`ステートメントを返して、 `NRQL`に追加します。

<Steps>
  <Step>
    他の`import`セクションの下に次のコード行を挿入して、 `timeRangeToNrql`メソッドをインポートします。

    <Callout variant="important">
      コミュニティのインポート例から`AccountDropdown`を含める必要はありません。
    </Callout>

    ```jsx
    import { timeRangeToNrql } from '@newrelic/nr1-community';
    ```
  </Step>

  <Step>
    `platformState`を`timeRangeToNrql`ヘルパーに渡し、その出力を後で使用するために`since`ステートメントとして保存します。

    ```jsx
    const since = timeRangeToNrql(platformState);
    ```
  </Step>

  <Step>
    `since`変数を作成した後、 `PlatformStateContext` return ステートメントのコードを確認し、既存の各チャート コンポーネント クエリで`since`変数を連結します。 `TableChart`の例を次に示します。

    ```jsx
    <TableChart fullWidth accountId={this.accountId} query={trxOverview + since} />
    ```
  </Step>

  <Step>
    すべてのチャート コンポーネントを更新した後、最終的な`index.js`ファイルが次のようになっていることを確認します。

    <Callout variant="important">
      この完成したサンプル コードは`nerdlet final.js`にあります。
    </Callout>

    ```jsx
    import React from 'react';
    import {
      PlatformStateContext,
      Grid,
      GridItem,
      HeadingText,
      AreaChart,
      TableChart,
      PieChart,
    } from 'nr1';
    import { timeRangeToNrql } from '@newrelic/nr1-community';

    export default class Nr1HowtoAddTimePicker extends React.Component {
      constructor(props) {
        super(props);
        this.accountId = 1;
      }
      render() {
        const avgResTime = `SELECT average(duration) FROM Transaction FACET appName TIMESERIES AUTO `;
        const trxOverview = `FROM Transaction SELECT count(*) as 'Transactions', apdex(duration) as 'apdex', percentile(duration, 99, 95) FACET appName `;
        const errCount = `FROM TransactionError SELECT count(*) as 'Transaction Errors' FACET error.message `;
        const responseCodes = `SELECT count(*) as 'Response Code' FROM Transaction FACET httpResponseCode `;

        return (
          <PlatformStateContext.Consumer>
            {(platformState) => {
              /* Taking a peek at the platformState */
              console.log(platformState);

              const since = timeRangeToNrql(platformState);
              console.log(since);

              return (
                <>
                  <Grid
                    className="primary-grid"
                    spacingType={[Grid.SPACING_TYPE.NONE, Grid.SPACING_TYPE.NONE]}
                  >
                    <GridItem className="primary-content-container" columnSpan={6}>
                      <main className="primary-content full-height">
                        <HeadingText
                          spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                          type={HeadingText.TYPE.HEADING_4}
                        >
                          Transaction Overview
                        </HeadingText>
                        <TableChart
                          fullWidth
                          accountId={this.accountId}
                          query={trxOverview + since}
                        />
                      </main>
                    </GridItem>
                    <GridItem className="primary-content-container" columnSpan={6}>
                      <main className="primary-content full-height">
                        <HeadingText
                          spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                          type={HeadingText.TYPE.HEADING_4}
                        >
                          Average Response Time
                        </HeadingText>
                        <AreaChart
                          fullWidth
                          accountId={this.accountId}
                          query={avgResTime + since}
                        />
                      </main>
                    </GridItem>
                    <GridItem className="primary-content-container" columnSpan={6}>
                      <main className="primary-content full-height">
                        <HeadingText
                          spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                          type={HeadingText.TYPE.HEADING_4}
                        >
                          Response Code
                        </HeadingText>
                        <PieChart
                          fullWidth
                          accountId={this.accountId}
                          query={responseCodes + since}
                        />
                      </main>
                    </GridItem>
                    <GridItem className="primary-content-container" columnSpan={6}>
                      <main className="primary-content full-height">
                        <HeadingText
                          spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                          type={HeadingText.TYPE.HEADING_4}
                        >
                          Transaction Errors
                        </HeadingText>
                        <PieChart
                          fullWidth
                          accountId={this.accountId}
                          query={errCount + since}
                        />
                      </main>
                    </GridItem>
                  </Grid>
                </>
              );
            }}
          </PlatformStateContext.Consumer>
        );
      }
    }
    ```
  </Step>
</Steps>

## 概要 [#summary]

この例のすべての手順を完了すると、 `PlatformStateContext`コンポーネントをインポートし、その`timePicker`データ オブジェクトにアクセスすることで、アプリケーションにタイムピッカーが正常に実装されます。
