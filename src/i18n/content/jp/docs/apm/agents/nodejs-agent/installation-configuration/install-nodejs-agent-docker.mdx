---
title: Docker用のNode.jsエージェントのインストール
tags:
  - Agents
  - Nodejs agent
  - Installation and configuration
metaDescription: How to use New Relic's Node.js agent to instrument Node.js applications deployed in Docker containers.
freshnessValidatedDate: never
translationType: machine
---

Node.js エージェントを使用して、Docker コンテナーで Node.js アプリケーションのデプロイを計装できます。 このドキュメントでは、 New Relicでインストレーションした Dockerized Node.js アプリケーションを構築、構成、デプロイする方法について説明します。

Node.js エージェント インストレーションに関する一般的なヘルプが必要な場合は、[メイン インストレーション手順を](/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent)参照してください。

## コンテナの計測 [#instrument]

<Callout variant="caution">
  Dockerfile または Docker イメージにライセンス キーを含めないでください。詳細については[、ライセンス キーのセキュリティに関するドキュメントを](/docs/accounts/install-new-relic/account-setup/license-key#license-key-security)参照してください。
</Callout>

設定をいくつか変更し、 New Relic環境変数を既存の Dockerfile に追加することで、Node.js エージェントを使用して Docker 化されたアプリを計装できます。

1. `newrelic`を`package.json`に追加します。

   ```json
   "newrelic": "latest",
   ```

   値`latest`更新して特定のバージョンをインストールするか、 [`package.json`形式](https://docs.npmjs.com/files/package.json#dependencies)で提供される他のオプションのいずれかを使用できます。 過去のエージェント バージョンに関する情報については、 [Node.js エージェントのリリース ノート](/docs/release-notes/agent-release-notes/nodejs-release-notes)を確認してください。

2. `node`開始コマンドにエージェントを挿入して、アプリケーションを計装します。 コンテナの設定によっては、node コマンドが呼び出されたときに、Node.js `-r` / `--require`フラグを使用して`newrelic`モジュールを最初に含めるように`ENTRYPOINT`編集できる場合があります。 Dockerfile にこれらの開始コマンドのいずれかが含まれている場合は、次のように変更できます。

   * `node YOUR_PROGRAM.js`をに変更します `node -r newrelic YOUR_PROGRAM.js`
   * `ENTRYPOINT ['node', 'YOUR_PROGRAM.js']`をに変更します `ENTRYPOINT ['node', '-r', 'newrelic', 'YOUR_PROGRAM.js']`
   * `CMD ['node', 'YOUR_PROGRAM.js']`をに変更します `CMD ['node', '-r', 'newrelic', 'YOUR_PROGRAM.js']`
   * `npm start`などのプログラムを実行するための npm スクリプトがある場合は、 `npm pkg set scripts.start="node -r newrelic your-program.js"`を実行することでこのスクリプトをプログラムで変更できます。
   * プログラムの実行方法を制御できない場合は、エントリ ファイルの先頭に`require('newrelic')`を追加することで、プログラム内の他のモジュールの前に`newrelic`モジュールをロードできます。

3. 通常の方法でDockerイメージを構築します。

4. エージェントを有効にしてdockerアプリを実行するには、<InlinePopover type="licenseKey" /> と[アプリ名を](/docs/agents/manage-apm-agents/app-naming/name-your-application)環境変数として `docker run` コマンドに追加します。

   ```bash
   docker run -e NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY \
           -e NEW_RELIC_APP_NAME="YOUR_APP_NAME" \
           YOUR_IMAGE_NAME:latest
   ```

<InstallFeedback />

## その他の設定オプション [#configure]

<Callout variant="important">
  Node.js エージェントが[v7.2.0](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-7-2-0)より古い場合は、環境変数`NEW_RELIC_NO_CONFIG_FILE=true`を Dockerfile に追加して、構成ファイルなしでエージェントを実行できるようにする必要があります。構成設定と優先順位の詳細については、[ここを](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/)参照してください。

  Node.js エージェントが[v8.3.0](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-8-3-0)よりも古く、 [ディストリビューティッド（分散）トレーシングを](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing)使用したい場合は、環境変数`NEW_RELIC_DISTRIBUTED_TRACING_ENABLED`を`true`に設定して有効にする必要があります。
</Callout>

アプリケーション名やライセンスキーの設定に加えて、コンテナを`-e`オプションで起動することで[他の設定オプションを](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration)設定できます。 以下のこともできます:

* 以下のスニペットのように、環境変数 ( `NEW_RELIC_NAME_OF_FEATURE_FLAG_ENABLED` ) を使用して機能フラグを有効にします。 `NAME_OF_FEATURE_FLAG`機能フラグの大文字の名前に置き換えます。

  ```bash
  docker run -e NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY \
          -e NEW_RELIC_APP_NAME="YOUR_APP_NAME" \
          -e NEW_RELIC_NAME_OF_FEATURE_FLAG_ENABLED=true \
          YOUR_IMAGE_NAME:latest
  ```

* `ENV`ディレクティブを使用して Dockerfile で構成オプションを設定します。

  ```dockerfile
  ENV NEW_RELIC_NAME_OF_FEATURE_FLAG_ENABLED=true \
      NEW_RELIC_LOG=stdout
      # etc.
  ```