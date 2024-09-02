---
title: 未解決のインポートをロールアップする
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: 'If you use rollup to bundle your project and get an UNRESOLVED_IMPORT error, you may need to update your dependencies.'
freshnessValidatedDate: never
translationType: machine
---

## 問題

バンドルにロールアップを使用するプロジェクトで BrowserAgent NPM パッケージを使用してプロジェクトをビルドすると、 `UNRESOLVED_IMPORT`エラーが発生します。

## 解決

`node-resolve`[プラグイン](https://www.npmjs.com/package/@rollup/plugin-node-resolve)を使用するようにロールアップ設定を更新します。 すでにこのプラグインを使用している場合は、プラグインを最小バージョンの`15.2.1`に更新してください。

### ステンシルプロジェクト

プロジェクトでステンシル フレームワークを使用している場合、 `node-resolve`プラグインのバージョンをオーバーライドすることはできません。 プロジェクトで以下にリストされている回避策を使用し、ステンシル github リポジトリで[この](https://github.com/ionic-team/stencil/issues/3605)問題を監視してください。

## 代替の回避策

`node-resolve`プラグインを更新できない場合、またはオーバーライドできないプラグインをバンドルするフレームワークを使用している場合は、Browserエージェントのインポート ステートメントを変更する必要があります。

```js
// Instead of importing the browser agent like this
import { MicroAgent } from "@newrelic/browser-agent/loaders/micro-agent";

// Import like this
import { MicroAgent } from "@newrelic/browser-agent/src/loaders/micro-agent";
```

`src`ディレクトリには ES2019+ コードが含まれています。 このコードにトランスパイルを適用できず、古いブラウザをサポートする必要がある場合は、Browserエージェント NPM パッケージをバージョン 1.252.0 にアップグレードし、以下のインポート ステートメントを使用します。

```js
import { MicroAgent } from "@newrelic/browser-agent/dist/esm/loaders/micro-agent";
```

`dist`ディレクトリの内容は[、ブラウザのサポートに関する声明](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring/#browser-types)に従います。
