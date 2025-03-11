---
title: Atlassian Jira インテグレーション
tags:
  - Integrations
  - Open source telemetry integrations
  - OpenTelemetry
  - Atlassian
  - Quickstart
metaDescription: Monitor Atlassian with New Relic.
freshnessValidatedDate: '2024-04-24T00:00:00.000Z'
translationType: machine
---

New Relic 、 New Relic問題とインシデント情報を Jira と同期する Atlassian Jira とのインテグレーションを提供します。 このデータは Jira の[インシデント機能](https://support.atlassian.com/jira-software-cloud/docs/what-is-the-incidents-feature/)に表示され、Jira の問題に接続して停止ワークフローを改善できます。 このセクションでは、このインテグレーションを設定する方法と、それを使用するためのベストプラクティスについて説明します。

<Callout title="プレビュー">
  この機能はまだ開発中ですが、ぜひお試しください。

  この機能は現在、弊社の[プレリリース ポリシー](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy)に従ってプレビュー プログラムの一部として提供されています。
</Callout>

## データ共有 [#data-sharing]

Atlassian Marketplace からNew Relic for Jira アプリをインストールすると、インテグレーションで次のアクションを実行できるようになります。

* Jira からエンティティ、インシデント、問題を読み取ります。
* エンティティ、インシデント、問題を Jira に書き込みます。
* New Relicと Jira の両方からテンプレート、インシデント、および課題を削除して、各テンプレートのデータレポートをミラーリングします。

<Callout variant="caution">
  このインテグレーションにより、 New Relic問題とインシデント情報が、関連する Jira ワークスペース内のすべてのユーザーに公開されます。 このワークスペースの Jira ユーザーはNew Relicにアクセスできない可能性があります。また、アクセスできたとしても、API キー ユーザーと同じNew Relicアカウントにアクセスできない可能性があります。

  非表示にするNew Relicアカウント情報がある場合は、機密アカウントへのアクセス権を持たない[インテグレーション ユーザー](/docs/more-integrations/best-practices-integration/#integration-user-leverage)を使用してください。
</Callout>

## インストール [#installation]

New Relic を Jira と統合するには、次の手順に従ってください。

<Steps>
  <Step>
    ## New Relic for Jiraアプリをインストールする [#install-nr-jira-app]

    New Relic と Atlassian の間でデータを同期するには、New Relic for Jira アプリをインストールする必要があります。 マーケットプレイス アプリケーションをインストールするには、Jira サイトのアドミニストレーター権限が必要であることに注意してください。 [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1233828/new-relic-for-jira?tab=overview&hosting=cloud)にアクセスし、 **Install** \[インストール]ボタンをクリックします。

    <Callout variant="tip">
      サイト管理者権限を持っていない場合は、アドミニストレーターにリクエストすることができます。 アプリケーションのインストール プロセスを完了するには、Jira サイトのアドミニストレーターに問い合わせることをお勧めします。
    </Callout>
  </Step>

  <Step>
    ## New Relic APIキーを作成する [#create-new-relic-key]

    New Relic for Jira アプリをインストールした後、 [New Relic API キー](/docs/apis/intro-apis/new-relic-api-keys/)を作成する必要があります。 Jira サイト管理者とNew Relicアドミニストレーターが、Jira に公開するアカウントを決定します。 正しいNew Relicアカウント アクセス権を持つユーザーは、 New Relic API キーを生成できます。 New Relic API キーは、それを生成したユーザーと同じアカウントにアクセスできます。

    [New Relic API キーUI](https://one.newrelic.com/launcher/api-keys-ui.api-keys-launcher)ページから API キーを作成および管理するか、 [Atlassian APIキー](https://id.atlassian.com/manage-profile/security/api-tokens)ページにログインして**Create API token** \[APIキーの作成]をクリックします。
  </Step>

  <Step>
    ## New Relic APIキーを適用する [#apply-new-relic-key]

    API キーを作成したら、そのキーをNew Relic connect アプリケーションの最初のページに適用できます。

    New Relic API トークンを New Relic Atlassian Marketplace アプリケーションに貼り付けて、 **Connect** \[接続]をクリックします。

    <img width="50%;" title="Apply a New Relic API key" alt="Apply a New Relic API key" src="/images/opentelemetry_screenshot-crop_connect-nr-jira.webp" />
  </Step>

  <Step>
    ## New Relicサービスを選択してください [#select-nr-services]

    New Relic for Jira アプリが API キー経由で接続されると、その API キーのアカウントに関連付けられているすべてのテンプレートのリストが表示されます。 ナビゲーションでインシデント機能を選択し、Jira で公開するエンティティを接続します。

    [Jira でサービスを接続および削除する](https://support.atlassian.com/jira-software-cloud/docs/connect-jira-service-management-services-to-jira-software/)方法を学びます。

    <img title="Jira incident management page" alt="Jira incident management page" src="/images/opentelemetry_screenshot-full_jira-incident-mgt.webp" />
  </Step>

  <Step>
    ## Atlassian Jira で New Relic の問題とインシデントを確認する [#see-issues-incidents]

    New Relic エンティティを選択すると、アプリケーションは New Relic から Atlassian Jira へのデータの同期を開始します。 検出されたインシデントのリストを表示するには、インシデント タブを開きます。
  </Step>
</Steps>

## インシデント機能を有効にする [#enable-incidents-feature]

プロジェクト管理者権限を持っている場合は、次の手順に従ってインシデント機能を有効にします。

1. プロジェクトのサイドバーから<DNT>**Project settings &gt; Features**</DNT>に移動します。

2. <DNT>**Incidents**</DNT>機能のオン/オフを切り替えます。

3. 有効にしたら、プロジェクト サイドバーで<DNT>**Incidents**</DNT>を選択して機能を使用します。

詳細については、Atlassian サポート ドキュメントの[インシデント機能](https://support.atlassian.com/jira-software-cloud/docs/what-is-the-incidents-feature/)ページを参照してください。

## New RelicとJira間の接続を削除する [#remove-connection]

いつでも New Relic からのデータの同期を停止し、同期されたデータを削除できます。 Jira サイト管理者権限を持っている場合は、Jira 内のNew Relic設定ページからこれを実行できます。 接続されている組織を選択し、 <DNT>**Delete**</DNT>をクリックできます。 プロセスが終了すると、Jira のインシデント機能に New Relic インシデントと問題情報が表示されなくなります。

## 別の組織に接続する [#different-organization]

別の組織に接続したり、API キーが提供するアカウント アクセスを変更したりするには、Jira 内のNew Relic設定ページに移動します。

<DNT>**Connect another New Relic organization**</DNT> を選択した場合は、 New Relic API キーを指定する必要があります。 新しいキーを追加すると、Atlassian に同期されているすべてのデータを含む現在の接続が削除されます。 その後、新しい API キーのアカウントと組織アクセス間の新しい同期プロセスが開始されます。

<img title="New Relic configuration from Jira" alt="New Relic configuration from Jira" src="/images/opentelemetry_screenshot-full_jira-nr-configuration.webp" />