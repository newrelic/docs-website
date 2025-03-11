---
title: Javaでのホスト名ロジック
tags:
  - Agents
  - Java agent
  - Configuration
metaDescription: The Java agent automatically assigns a hostname to your app. You can decorate this hostname with a display name in the New Relic UI.
freshnessValidatedDate: never
translationType: machine
---

Java エージェントは自動的に`host:port`名を JVM に割り当てます。デフォルト名が役に立たない場合は、New Relic UI で JVM を区別するため[に表示名を設定](#display-name)できます。サポートされているフレームワークの場合、Java エージェントは表示名の代わりに[インスタンス名](#instance-names)を使用します。

Java エージェントは、使用している環境に関わらず、ホスト、ポート、ディスパッチャ [によって、実行中のエージェントを一意に識別します。](#unique-identifier)

## [表示名 \[#display-name\]](#unique-identifier)

[APM UI のデフォルトの`host:port`ラベルが役に立たない場合は、New Relic UI でその名前を](#unique-identifier)[表示名](/docs/apm/new-relic-apm/maintenance/add-rename-remove-hosts#display_name)で装飾できます。 環境変数または<DNT>**newrelic.yml**</DNT>構成ファイルのいずれかで[構成を](/docs/agents/java-agent/configuration/java-agent-configuration-config-file)介して表示名を設定します。 環境変数は設定ファイルの値よりも優先されます。 JVMが再起動され、Javaagent が再度レポートすると、以下の例に示すように、`host:port` に加えて表示名がJVMリストに表示されます。

表示名を設定するには

* [`NEW_RELIC_PROCESS_HOST_DISPLAY_NAME`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#NEW_RELIC_PROCESS_HOST_DISPLAY_NAME)環境変数を設定します。  
  また

* <DNT>
    **newrelic.yml**
  </DNT>

  に[`process_host.display_name`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#display_name)を設定します。

JVMを再起動すると、New RelicのUIに変更内容が表示されます。

<Callout variant="tip">
  また、 [システムプロパティ](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#System_Properties) で表示名を設定することもできます。
</Callout>

<img
  title="display_name example"
  alt="upload.png"
  src="/images/apm_screenshot-crop_java-edit-host-name.webp"
/>

## インスタンス名

WebSphere および WebLogic ユーザーの場合、Java エージェントはアクティブなアプリケーション サーバー インスタンスごとにインスタンス名も報告します。これはAPM <DNT>**Settings > Environment**</DNT> ページに表示されます。 通常、この名前はアプリ サーバーによって提供されます。 インスタンス名が設定されている場合は、New Relic UI の表示名の代わりにそのインスタンス名が使用されます。

## ホスト名のロジックの優先順位 [#precedence]

複数のホスト名設定がある場合 (たとえば、WebSphere を使用し、 `display_name`プロパティも設定している場合)、エージェントは次の優先順位を使用します。

* `display_name` デフォルト名、WebSphere および WebLogic インスタンス名をオーバーライドします。
* WebSphere と WebLogic のインスタンス名は、デフォルトの名前を上書きします。
* デフォルト ( `host:port` ) の名前の優先順位は最も低くなります。

## ホストとエージェント固有の識別子 [#unique-identifier]

Javaエージェントは、ホスト、ポート、ディスパッチャを使用して、同じアプリ名でレポートする複数のJVMを一意に識別します。そのため、同じサーバー上で動作する複数のエージェントは、ポートやディスパッチャ名が異なる限り、別々に報告されます。

固有の識別子は、以下の値に基づいています。

* <DNT>
    **Host**
  </DNT>

  : OS から派生したアプリの親サーバーの識別子。 この値は Javaagent では設定できません。

* <DNT>
    **Port**
  </DNT>

  : アプリケーション サーバーに関連付けられたポート。 エージェントがポート番号を判別できない場合、またはアプリがアプリ サーバーで実行されていない場合は、デフォルトで

  <DNT>
    **0**
  </DNT>

  になります。 この値はユーザーが設定可能です。

* <DNT>
    **Dispatcher Name**
  </DNT>

  : アプリ サーバーの名前。 たとえば、Apache Tomcat、Glassfish、WebLogic などです。 アクティブなアプリ サーバーがない場合、デフォルトは

  <DNT>
    **Unknown**
  </DNT>

  になります。
