---
title: GAEフレキシブル環境へのGoエージェントのインストール
tags:
  - Agents
  - Go agent
  - Installation
metaDescription: How to install your New Relic's Go app in the Google App Engine (GAE) flexible environment.
freshnessValidatedDate: never
translationType: machine
---

[Go エージェント](/docs/agents/go-agent/get-started/introduction-new-relic-go)を使用すると、 [Google App Engine (GAE) フレキシブル環境](https://cloud.google.com/appengine/docs/flexible/go/)に存在するアプリケーションを監視できます。 New Relicを <DNT>GAE</DNT> フレックス アプリに追加すると、アプリの健全性とパフォーマンスをサイトで確認できるようになり、 [APM](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm)と[<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)で表示できるメトリクスで <DNT>GAE</DNT> が拡張されます。

ここでは、 New Relicカスタム<DNT>GAE</DNT>[ ランタイム](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes) を構成して flex アプリに を追加する方法と、 を使用して Godocker アプリをデプロイする例について説明します。

<Callout variant="important">
  Go エージェントは、カスタム ランタイムを使用して GAE フレキシブル環境で実行できます。 他の環境の制限により、GAE 標準環境または Google App Engine の[「ネイティブ モード」インスト](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode)レーションは使用しないでください。
</Callout>

## Dockerでカスタムランタイムを構築 [#build-runtime]

カスタムランタイムの構築に関する Google のドキュメント [を参照してください。この例では、Go エージェントをインストールし、Docker 用のカスタム Go ランタイムを構築し、golang アプリケーションをデプロイすることで、GAE flex アプリに New Relic を追加する方法を説明します。](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build)

[GAEフレキシブル環境でのGoアプリの展開と設定については、以下をご覧ください。](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build)

* [](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
  [](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build)[Google App Engineのドキュメント](https://cloud.google.com/appengine/docs/flexible/go/) for Go
* [Google App Engineのチュートリアル](https://cloud.google.com/appengine/docs/flexible/go/tutorials) Goアプリを展開するには

<CollapserGroup>
  <Collapser
    id="setup-gae"
    title="1.GAEプロジェクトの設定と依存関係のインストール"
  >
    1. [標準的な手順に従って、特定のアプリサーバー用のGoエージェント](/docs/agents/go-agent/get-started/get-new-relic-go) を、 [ライセンスキー](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key) を含めてインストールしてください。

    2. [Google App Engine procedures for Go](https://cloud.google.com/appengine/docs/flexible/go/quickstart) に従って、新しい Cloud Platform プロジェクトの作成、App Engine アプリケーションの作成、 [git](https://git-scm.com) のダウンロードとインストール、 [Google Cloud SDK](https://cloud.google.com/sdk/docs/) のその他の前提条件の完了を行います。

       Google Cloud SDKは、GAEアプリを管理およびデプロイするための`gcloud`コマンドラインツールを提供します。
  </Collapser>

  <Collapser
    id="configure-app-yaml"
    title="2.app.yamlの設定"
  >
    カスタムランタイムを備えたGAEフレキシブル環境アプリには`app.yaml`構成ファイルが必要です。少なくとも、次のものが含まれていることを確認してください。

    ```yaml
    runtime: custom
    env: flex
    ```
  </Collapser>

  <Collapser
    id="configure-dockerfile"
    title="3.Dockerfileの設定"
  >
    [Dockerfile](http://docs.docker.com/engine/reference/builder/) は、ビルドするDockerイメージを定義しており、GAEフレキシブル環境アプリに必要なものです。次のDockerfileのサンプルコードでは、使用するgolangのバージョンを定義しています。

    ```dockerfile
    FROM golang:1.8-onbuild
    CMD go run main.go
    ```
  </Collapser>

  <Collapser
    id="build-docker-image"
    title="4.Dockerイメージの構築"
  >
    Dockerイメージをビルドするには、以下のコマンドを実行します。カレントディレクトリにビルドファイルがあることを示すために、コードの最後にピリオドを必ず入れてください。

    ```bash
    docker build --rm -t Docker-image-name .
    ```
  </Collapser>

  <Collapser
    id="deploy-docker-image-to-gae"
    title="5.初期化されたGAEフレキシブル環境へのDockerイメージのデプロイ"
  >
    1. [初期化されたGAEフレキシブル環境](https://cloud.google.com/sdk/docs/initializing) にDockerイメージをデプロイするには、以下のコマンドを実行します。

       ```bash
       gcloud --project go-app-name app deploy
       ```

    2. 展開が完了するまで待ちます。

    3. New Relic で GAE flex アプリ データを表示するには、 [APM <DNT>**Summary**</DNT>ページ](/docs/apm/applications-menu/monitoring/apm-overview-page)に移動します。
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## おすすめです。ヘルスチェックの無効化 [#health-checks]

Google App Engine [は定期的にヘルスチェックリクエスト](https://cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml#health_checks)を送信して、インスタンスが正常にデプロイされたことを確認し、実行中のインスタンスが正常なステータスを維持していることを確認します。ヘルスチェックは、URL `/_ah/health`へのHTTPリクエストです。

カスタムランタイムを作成する場合は、アプリが大量のヘルスチェックリクエストを処理できなければなりません。そうしないと、アプリのデータがAPMで正しく表示されない可能性があります。

推奨事項: 次のコードを追加して、ヘルスチェックを無効にするように`app.yaml`を構成します。

```yaml
health_check:
  enable_health_check: False
```

## GAEからエージェントのトラブルシューティングログを取得 [#agent-logs]

GAE flex環境アプリのトラブルシューティングには、これらのリソースをご利用ください。

* GAEインスタンスに接続して、コードを実行しているDockerコンテナでシェルを起動するには、 [GAEのインスタンスをデバッグするためのドキュメント](https://cloud.google.com/appengine/docs/flexible/go/debugging-an-instance) を参照してください。

* [Cloud Platform Console](https://cloud.google.com/compute/docs/console)で New Relic Go エージェント ログを[Stackdriver](http://cloud.google.com/logging/docs/view/logs_viewer_v2)にリダイレクトするには、 `newrelic.yml`ファイルを次のように変更します。

  ```yaml
  log_file_name: STDOUT
  ```
