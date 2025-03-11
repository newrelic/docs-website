---
title: ソース マップのサポートを有効にする
tags:
  - Agents
  - Nodejs agent
metaDescription: Enable source map support in Node.js to see more meaningful error traces.
freshnessValidatedDate: never
translationType: machine
---

TypeScript や Babel で記述されたアプリケーションなど、トランスパイルされたアプリケーションは、通常、ソース ファイルではなく、ビルドされたファイル内のファイル、行、および関数を指すエラー スタック トレースを表示します。

Node.js でソース マッピングを有効にすると、ソース コード内の行と関数を指す、より意味のあるエラー トレースが得られます。

## ソース マッピングを有効にする方法 [#enable-command]

アプリケーションを起動する`node`コマンドで Node のソース マップ サポートを有効にできます。

```shell
node --enable-source-maps -r newrelic ./dist/server.js
```

## 例 [#source-map-example]

ソース マップのサポートなしでアプリケーションを実行すると、次のようなエラー スタック トレースが表示される場合があります。

```shell
[output] Error: Failed to get all entries in model
[output]    at /dist/models/entries.js:41:23
[output]    ... (multiple functions in New Relic Node agent js files)
[output]    at /dist/models/entries.js:39:35
[output]    at Generator.next (<anonymous>)
```

<Callout variant="tip">
  トレースは`/dist`のビルド ファイルを参照することに注意してください。
</Callout>

ソース マップ サポートが有効になっている同じアプリケーションは、代わりにソース コード ファイルを参照します。

```shell
[output] Error: Failed to get all entries in model
[output]    at <anonymous> (/src/models/entries.ts:28:13)
[output]    ... (multiple functions in New Relic Node agent js files)
[output]    at <anonymous> (/src/models/entries.ts:26:19)
[output]    at Generator.next (<anonymous>)
```

このスタック トレースは、ソース ファイル内の特定の関数と行番号を指しているため、エラーをより簡単に見つけることができます。

この動作は、[ソース マップのサンプル アプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/main/source-maps)を実行することで確認できます。これにより、ソース マップを有効にした場合と無効にした場合のエラー トレースを簡単に比較できます。
