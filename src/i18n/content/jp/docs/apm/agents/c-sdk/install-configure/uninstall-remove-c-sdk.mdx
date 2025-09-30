---
title: C SDKをアンインストール（削除）する
tags:
  - Agents
  - C SDK
  - Install and configure
metaDescription: How to temporarily disable the New Relic C SDK or uninstall and remove it completely from your application's code library.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="EOL通知"
>
  2022 年 4 月以降、C SDK 機能はサポートされていません。詳細については、 [サポート フォーラムの投稿 を](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744)参照してください。
</Callout>

必要に応じてこれらの手順に従い、C SDKを使用アプリケーションのコードライブラリで一時的に無効化する、もしくは完全に削除してください。

## 無効化できるインストゥルメンテーションを書く [#disable]

CライブラリはNew Relic APIへ直接アクセスするため、C SDKは直接オンにしたりオフにしたりできません。しかし、簡単な再コンパイルとデプロイによりインストゥルメンテーションを有効化または無効化できるようにSDKのコードを書くことができます。

ひとつのアプローチは`#ifdef`マクロを使用することです。すべてのインストゥルメンテーションを`#ifdef`マクロで囲み、構築システムで`YOURNAMESPACE_NEWRELIC_ENABLED`の値を設定すれば、C/C++ベースのプログラムにあるNew Relicのインストゥルメンテーションは、再コンパイルしてからアプリケーションを再デプロイすることにより簡単に有効化または無効化できます。

<CollapserGroup>
  <Collapser
    id="ifdef"
    title="#ifdefマクロを使用して、C SDKインストゥルメンテーションを無効化する"
  >
    ```c
    // replace `YOURNAMESPACE` with something that's unique to
    // your company/project to ensure a unique name
    #ifdef YOURNAMESPACE_NEWRELIC_ENABLED
    int priority = 50;
    newrelic_txn_t* txn = newrelic_start_non_web_transaction(app, transaction_name);

    ...

    if (err) {
      newrelic_notice_error(txn, priority, "Meaningful error message", "Error.class");
    }

    ...

    newrelic_end_transaction(&txn);
    #endif
    ```
  </Collapser>
</CollapserGroup>

## 完全にアンインストールする [#uninstall]

New Relic C SDKをアプリのコードライブラリから完全に削除するには、以下の手順に従います。

1. 構築システムの中で`libnewrelic.a`へのリンクを削除します。
2. アプリケーションコードから、すべてのNew Relic APIコールを削除します。
3. 再コンパイルしてアプリケーションを再デプロイします。
