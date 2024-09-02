---
title: データやレジストリキーのパーミッションの問題がない
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'If your New Relic .NET app is not reporting data and you see permissions errors for registry keys, follow these troubleshooting procedures.'
freshnessValidatedDate: never
translationType: machine
---

## 問題

.NET アプリのトラフィックを生成して 5 分間待っても、データが New Relic の UI に表示されません。

## 解決

<Callout variant="important">
  パーミッションを変更する前に、システム管理者に確認してください。
</Callout>

1. アプリ プール ID が、次の場所にある New Relic レジストリ キーに`read`アクセスできることを確認します。

   ```
   HKLM\SOFTWARE\New Relic\.NET Agent\
   ```

2. システム上のすべてのユーザーにこのレジストリキーへのアクセスを許可するか、アプリプールのIDのみにアクセスを許可するかを選択します。

   <CollapserGroup>
     <Collapser
       id="grant-everyone"
       title="Everyoneユーザーにレジストリキーへのアクセスを許可するには"
     >
       1. 管理者として、Windowsのレジストリを開きます。

       2. <DNT>
            **Computer > HKEY_LOCAL_MACHINE > Software > New Relic**
          </DNT>

          選択します。

          <DNT>
            **.NET Agent**
          </DNT>

          を右クリックし、

          <DNT>
            **Permissions**
          </DNT>

          を選択します。

       3. <DNT>
            **Group or user names**
          </DNT>

          リストに

          <DNT>
            **Everyone**
          </DNT>

          ユーザーが表示されない場合は、ユーザーを作成します。

          <DNT>
            **Add**
          </DNT>

          を選択します。 次に、

          <DNT>
            **Select Users or Groups**
          </DNT>

          から:

          <DNT>
            **Enter the object name to select**
          </DNT>

          フィールドに`Everyone`と入力します。

          <DNT>
            **OK**
          </DNT>

          選択します。

       4. <DNT>
            **Group or user names**
          </DNT>

          リストで、

          <DNT>
            **Everyone**
          </DNT>

          選択します。 次に、

          <DNT>
            **Permissions for**
          </DNT>

          テーブルで、

          <DNT>
            **Read**
          </DNT>

          権限の

          <DNT>
            **Allow**
          </DNT>

          チェックボックスをオンにします。
     </Collapser>

     <Collapser
       id="grant-app-pool"
       title="個々のアプリプールのIDにレジストリキーへのアクセス権を与えるには"
     >
       1. この標準フォーマットを使用するアプリプールのアイデンティティを決定します。

          ```
          IIS AppPool\APP_POOL_NAME
          ```

       2. 管理者として、Windowsのレジストリを開きます。

       3. <DNT>**Computer > HKEY_LOCAL_MACHINE > Software > New Relic**</DNT>選択します。 <DNT>**.NET Agent**</DNT>を右クリックし、 <DNT>**Permissions**</DNT>を選択します。

       4. <DNT>**Permissions for .NET Agent**</DNT>ダイアログから<DNT>**Add**</DNT>を選択します。 次に、 <DNT>**Select Users or Groups**</DNT>から: <DNT>**Enter the object name to select**</DNT>フィールドに、アプリ プール ID (例: `IIS AppPool\APP_POOL_NAME` ) を入力します。 <DNT>**OK**</DNT>選択します。

       5. <DNT>**Group or user names**</DNT>リストで、新しいアプリ プール ID を選択します。 次に、 <DNT>**Permissions for**</DNT>テーブルで、 <DNT>**Read**</DNT>権限の<DNT>**Allow**</DNT>チェックボックスをオンにします。
     </Collapser>
   </CollapserGroup>

3. コマンドラインから、 <DNT>**IISRESET**</DNT>を実行します。

4. パーミッションを更新しても問題が解決しない場合は、.NETエージェントのトラブルシューティングの手順に従って、 [missing data](/docs/agents/net-agent/troubleshooting/no-data-appears-net) 。

<Callout variant="tip">
  今後のインストールでこの問題が発生しないようにするには、WSM 3.3.5.0をアンインストールしてください。レジストリに変更を加えたくない場合は、WSMと.NETをアンインストールしてから、最新版を再インストールしてください。
</Callout>

## 原因

データが表示されない一般的な理由は、New Relic .NET エージェントがそのレジストリキーにアクセスできないことです。プロファイラーのログでは、以下のようにレジストリの許可エラーが表示されることがあります。

```
%ALLUSERSPROFILE%\New Relic\.NET Agent\Logs\
```

例えば、以下のようなものがあります。

```
[Info] ... Logger initialized
[Error] ... Unable to find New Relic Home directory in registry or environment.
[Error] ... An exception was thrown while initializing the profiler.
```
