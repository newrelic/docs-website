---
title: 'ラボ パート 2: アプリケーションを計測する'
description: 'New Relic ブラウザー監視を使用してサイトを改善するマルチパート ラボのパート 2: React アプリケーションの計測'
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="course"
  title="ラボ"
>
  この手順は、New Relic <InlinePopover type="browser"/>を使用して Web アプリのトラブルシューティングを行う方法を説明するラボの一部です。

  ラボの各手順は前回の手順に基づいているため、この手順を開始する前に、最後の手順で [あるラボ環境のセットアップを](/docs/browser/new-relic-browser/lab/set-up-env/)完了していることを確認してください。
</Callout>

React アプリが起動し、ブラウザーで実行されるようになりました。ユーザーがサイトで常に最高のエクスペリエンスを得られるようにする必要があります。そのためには、ページの読み込み時間など、ユーザーのエクスペリエンスに関する洞察が必要です。

この目標を達成するには、ブラウザ エージェントをインストールする必要があります。

## ブラウザ エージェントをインストールする

<Steps>
  <Step>
    [New Relic](https://one.newrelic.com/)に移動し、自分のアカウントでサインインします。
  </Step>

  <Step>
    上部ナビゲーション バーの右側にある<DNT>**Integrations & Agents**</DNT>をクリックします。

    <img
      title="Integrations & Agents button in the UI"
      alt="Screenshot of the Integrations & Agents button in the UI"
      src="/images/browser-lab-screenshot-add-data.webp"
    />
  </Step>

  <Step>
    <DNT>**Browser & mobile**</DNT> まで下にスクロールし、 <DNT>**Browser monitoring**</DNT>を選択します。

    <img
      title="Arrow pointing to new relic browser"
      alt="Arrow pointing to new relic browser"
      src="/images/browser-lab-screenshot-newrelic-browser.webp"
    />

    UI は、ブラウザ エージェントのインストールをガイドします。
  </Step>

  <Step>
    デプロイメント方法として<DNT>**Copy/paste JavaScript code**</DNT>を選択します。

    <img
      title="Select deployment method"
      alt="Select deployment method"
      src="/images/browser-lab-screenshot-select-deployment-method.webp"
    />
  </Step>

  <Step>
    <DNT>**Name your app**</DNT>まで下にスクロールします。 アプリに<DNT>**Relicstaurants**</DNT>という名前を付け、 <DNT>**Enable**</DNT>をクリックします。

    <img
      title="Enable browser agent for your app"
      alt="Enable browser agent for your app"
      src="/images/browser-lab-screenshot-enable-browser.webp"
    />

    これにより、ブラウザーの監視を有効にする JavaScript コード スニペットが提供されます。クリップボードにコピーします。

    <img
      title="javascript code snippet to enable browser agent"
      alt="javascript code snippet to enable browser agent"
      src="/images/browser-lab-screenshot-browser-code-snippet.webp"
    />
  </Step>

  <Step>
    選択した IDE でアプリを開きます。

    アプリの _public/index.html_ ファイルで、コピーした JavaScript スニペットを `<head>`内に貼り付けます。

    ```html lineHighlight=22-23 fileName=public/index.html
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Web site created using create-react-app" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap"
        rel="stylesheet">
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      <title>Relicstaurants</title>
        <!--Replace these lines with your 
          browser monitoring code snippet -->
    </head>

    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
    </body>

    </html>
    ```

    これで、アプリケーションはブラウザー エージェントでインストルメント化されました。
  </Step>
</Steps>

## アプリケーションを再起動します

アプリケーションのインストルメント化が完了したので、ローカル サーバーを再起動します。

```bash
npm run build
npm run newstart
```

Load Generator も再起動します。

```bash
python3 simulator.py
```

<Callout variant="important">
  これらのコマンドを正しいターミナル ウィンドウで実行していることを確認してください。これらのウィンドウが表示されなくなった場合は、 [セットアップ手順](/docs/browser/new-relic-browser/lab/set-up-env)の手順に従ってください。
</Callout>

## 自分のデータを見る

あなたのアプリは現在、ブラウザデータを New Relic に送信しています。 New Relic の<DNT>**Browser**</DNT>の下にこのデータを表示します。

<Steps>
  <Step>
    [New Relic](https://one.newrelic.com/) に移動し、自分のアカウントでサインインします。
  </Step>

  <Step>
    左側のナビゲーション バーから<DNT>**Browser**</DNT>に移動し、 <DNT>**Relicstaurants**</DNT>を選択します。

    <img
      title="view relicstraunts"
      alt="view relicstaruants"
      src="/images/browser-lab-screenshot-view-relicstaurants.webp"
    />

    ここには、アプリからの<DNT>**Page views with JavaScript errors**</DNT> 、 <DNT>**Core web vitals**</DNT> 、 <DNT>**User time on the site**</DNT> 、 <DNT>**Initial page load and route changes**</DNT> 、およびその他のパフォーマンス データが表示されます。

    <img
      title="view relicstraunts browser app"
      alt="view relicstaruants browser app"
      src="/images/browser-lab-screenshot-relicstaurants-browser-app.webp"
    />
  </Step>
</Steps>

ブラウザー エージェントを使用して New Relic にブラウザー データを送信するようにアプリケーションをインストルメント化しました。New Relic にもパフォーマンス データが表示されます。次に、このデータを使用して、サイトのフロントエンド エラーをトラブルシューティングします。

<Callout
  variant="course"
  title="ラボ"
>
  この手順は、New Relic ブラウザ監視を使用して Web アプリのトラブルシューティングを行う方法を学ぶラボの一部です。アプリケーションにブラウザ エージェントを組み込んだので、 [エラーをデバッグします](/docs/browser/new-relic-browser/lab/debug-errors/)。
</Callout>
