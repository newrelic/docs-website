---
title: Jenkins を使用して変更を追跡する
tags:
  - APM
  - APM UI pages
  - Events
  - Browser
  - Mobile
  - NerdGraph
metaDescription: Here's how to use Jenkins to designate what you want to capture with change tracking.
freshnessValidatedDate: never
translationType: machine
---

変更追跡機能を使用すると、監視する変更を指定して、顧客やシステムにどのような影響を与えるかを確認できます。GraphQL または CLI を使用して監視する変更を指定できますが、Jenkins のパイプラインを使用して変更を記録することもできます。

パイプラインは、指定したビルドを呼び出し、追加の環境変数をビルド プロセスに渡します。これにより、デプロイに必要なデータが入力され、New Relic 全体のチャートに表示されます。変更追跡 UI に結果が表示され、この情報を使用してエンティティの正常性に対する変更の影響を理解できます。

## 前提条件 [#prereq]

Jenkins プラグインをインストールするには、次のものが必要です。

* Jenkins 1.580.1 以降
* Jenkins 管理者権限

## Jenkins プラグインをインストールする [#install]

1. Jenkins を開いたら、 <DNT>**Manage Jenkins**</DNT>に移動し、次に<DNT>**Plugins**</DNT>に移動します。

   <img
     title="Screenshot showing where to find Manage Jenkins"
     alt="Screenshot showing where to find Manage Jenkins"
     src="/images/tracking_screenshot-crop_jenkins-home-page.webp"
   />

2. <DNT>**Available plugins**</DNT>をクリックして、 `newrelic-deployment-notifier`を検索します。 <DNT>**Install**</DNT>をクリックします。

   <img
     title="Screenshot showing how to install the plugin"
     alt="Screenshot showing how to install the plugins"
     src="/images/tracking_screenshot-crop_jenkins-install-notifier.webp"
   />

3. インストールの進行状況を示す新しいページが表示されます。プラグインを再起動する必要はありません。

## ビルド後のアクションを作成する [#create-post--build-action]

New Relic Deployment Notifier をビルド後のアクションとして Jenkins ビルド ジョブ設定に追加するには:

1. Jenkins ジョブ設定で、

   <DNT>
     **Post-build Actions section**
   </DNT>

   に移動し、

   <DNT>
     **Add post-build action**
   </DNT>

   をクリックしてから、

   <DNT>
     **New Relic Deployment Notifications**
   </DNT>

   を選択します。

<img
  style={{ align: "left" }}
  title="Screenshot showing the Add post-build action button, with the dropdown menu showing New Relic Deployment Notifications"
  alt="Screenshot showing the Add post-build action button, with the dropdown menu showing New Relic Deployment Notifications"
  src="/images/tracking_screenshot-crop_jenkins--postbuild.webp"
/>

2. ユーザー[API キー](/docs/apis/intro-apis/new-relic-api-keys/)のユーザー名/パスワード認証情報を作成します。キーをパスワードとして入力します。

   <img
     style={{ align: "left" }}
     title="Screenshot showing credential creation dialog"
     alt="Screenshot showing credential creation dialog"
     src="/images/tracking_screenshot-crop_jenkins--credential.webp"
   />

3. ドロップダウン リストでエンティティを選択します。

   <img
     style={{align: "left"}}
     title="Screenshot showing how to find Deployment Notifications"
     alt="Screenshot showing how to find Deployment Notifications"
     src="/images/tracking_screenshot-crop_jenkins--validcredential.webp"
   />

4. 必須の`Version`または`Revision`値と、任意の値を追加します。これらのフィールドでは、 `${BUILD_NUMBER}`などの[環境変数を使用](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#using-environment-variables)できます。

   <img
     style={{ align: "left" }}
     title="Screenshot showing optional fields"
     alt="Screenshot showing optional fields"
     src="/images/tracking_screenshot-crop_jenkins--optional.webp"
   />

   <table>
     <thead>
       <tr>
         <th style={{ width: "200px" }}>
           フィールド
         </th>

         <th>
           説明
         </th>
       </tr>
     </thead>

     <tbody>
       <tr>
         <td>
           説明
         </td>

         <td>
           追跡対象の説明を挿入します。
         </td>
       </tr>

       <tr>
         <td>
           リビジョン
         </td>

         <td>
           導入のためのリビジョン。ここでは`${BUILD_NUMBER}`適切な値になる可能性があります。
         </td>
       </tr>

       <tr>
         <td>
           変更ログ
         </td>

         <td>
           展開で発生した変更のリストへの参照。
         </td>
       </tr>

       <tr>
         <td>
           専念
         </td>

         <td>
           コミット ID を参照するハッシュ。
         </td>
       </tr>

       <tr>
         <td>
           ディープリンク
         </td>

         <td>
           Jenkins ジョブまたはデプロイメントへのその他の参照へのディープ リンク。
         </td>
       </tr>

       <tr>
         <td>
           EntityGuid
         </td>

         <td>
           展開に関するアプリケーション エンティティ ([詳細については、アプリケーション GUID](#guid)を参照してください)。
         </td>
       </tr>

       <tr>
         <td>
           展開タイプ
         </td>

         <td>
           実施されているデプロイメントのタイプ。
         </td>
       </tr>

       <tr>
         <td>
           グループ ID
         </td>

         <td>
           変更のクラスターを参照するための識別子。
         </td>
       </tr>

       <tr>
         <td>
           タイムスタンプ
         </td>

         <td>
           オプションの Unix エポック ロング フォーマットのタイムスタンプ。指定されていない場合は、リクエストを受信した時間に設定します。これは、Unix エポックからのミリ秒数になります。
         </td>
       </tr>

       <tr>
         <td>
           バージョン
         </td>

         <td>
           デプロイされているもののバージョン。ここでは`${BUILD_NUMBER}`適切な値になる可能性があります。
         </td>
       </tr>

       <tr>
         <td>
           ユーザー
         </td>

         <td>
           デプロイメントを実行するユーザー。 <DNT>**Tip:**</DNT> [Build ユーザー Vars プラグインを](https://wiki.jenkins.io/display/JENKINS/Build+User+Vars+Plugin)インストールすると、Jenkins ユーザーに関する環境変数が設定され、それをこのフィールドで使用できます ( `${BUILD_USER}`など)。

           <img
             style={{ align: "left" }}
             title="Screenshot showing User field set to ${BUILD_USER}"
             alt="Screenshot showing User field set to ${BUILD_USER}"
             src="/images/tracking_screenshot-crop_jenkins--user.webp"
           />
         </td>
       </tr>
     </tbody>
   </table>

5. (オプション) この Jenkins ジョブが複数のエンティティに影響を与える場合は、通知を受信するためにエンティティを追加することもできます。 さらにアプリを追加するには、 <DNT>**Add another notification**</DNT>ボタンをクリックします。

## 次は何ですか？ [#whats-next]

追跡したい変更を指定したら、New Relic UI でそれらの変更の影響を分析できます。詳細については、 [New Relic で変更を表示および分析する方法 を](/docs/change-tracking/change-tracking-view-analyze)参照してください。

## プラグインを削除する [#remove-plugin]

1. <DNT>
     **Plugins**
   </DNT>

   ページから

   <DNT>
     **Installed plugins**
   </DNT>

   をクリックします。

2. `newrelic-deployment-notifier`を検索します。

3. 赤い`X`クリックします。

   <img
     title="Screenshot to remove the plugin"
     alt="Screenshot to remove the plugin"
     src="/images/tracking_screenshot-crop_jenkins-rollback.webp"
   />
