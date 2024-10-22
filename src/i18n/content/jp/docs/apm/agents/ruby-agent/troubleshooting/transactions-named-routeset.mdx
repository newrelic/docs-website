---
title: '「Middleware/Rack/ActionDispatch::Routing::RouteSet#call」というラベルの付いたトランザクション'
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: 'Find out what to do if you see transactions named Middleware/Rack/ActionDispatch::Routing::RouteSet#call in your APM UI.'
freshnessValidatedDate: '2023-11-13T00:00:00.000Z'
translationType: machine
---

## 問題 [#problem]

APM UI に`Middleware/Rack/ActionDispatch::Routing::RouteSet#call`という名前のトランザクションが表示されますが、それが何であるかわかりません。

## 原因 [#cause]

`Middleware/Rack/ActionDispatch::Routing::RouteSet#call`という名前のトランザクションは、インストルメント化されていない Rails アプリ内のルートを表します。Rails ミドルウェアがインストルメント化されているため、New Relic はトランザクションに費やされた時間をキャプチャできますが、それ以上の詳細は提供できません。

`Middleware/Rack/ActionDispatch::Routing::RouteSet#call`という名前のトランザクションが発生する可能性のある状況はさまざまです。このトランザクション タイプの最も一般的な原因に対して 2 つの解決策を提供しました。

## 解決 [#solution]

<Tabs>
  <TabsBar>
    <TabsBarItem id="route-gem">
      インストルメント化されていない gem にカスタム インストルメンテーションを追加する
    </TabsBarItem>

    <TabsBarItem id="route-controller">
      コントローラーを直接計測する
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="route-gem">
      アプリ内のルートがインストルメント化されたミドルウェアを経由してインスツルメント化されていない gem に到達する場合、トランザクションに関するより具体的なデータを確認するには、その gem にカスタム インストルメンテーションを追加する必要があります。カスタム インストルメンテーションを追加するには、 [Ruby カスタム インストルメンテーションのドキュメント](/docs/agents/ruby-agent/installation-configuration/ruby-custom-instrumentation)を読むことをお勧めします。

      これらのトランザクションの詳細を取得するには、アプリケーションにカスタム インストルメンテーションを追加するのが最善の方法です。
    </TabsPageItem>

    <TabsPageItem id="route-controller">
      Ruby エージェントは、インストルメンテーションを`ActionController::Base`に挿入することでコントローラーをインストルメントします。ただし、ルートが`ActionController::Base`を継承しないコントローラーを通過する場合、そのコントローラーにはインストルメンテーションが必要です。これをコントローラー クラスに追加して、コントローラーを直接計測します。

      ```ruby
      include NewRelic::Agent::Instrumentation::ControllerInstrumentation
      ```
    </TabsPageItem>
  </TabsPages>
</Tabs>
