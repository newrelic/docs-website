---
title: CoCreateInstanceのエラーです。プロファイラーログがない
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'If your New Relic .NET app is not reporting data, follow these troubleshooting steps to check for CoCreateInstance errors related to permissions.'
freshnessValidatedDate: never
translationType: machine
---

## 問題

トラフィックを生成して数分待つと、.NET アプリケーションは New Relic にデータを報告しません。また、.NET アプリケーションの New Relic プロファイラー ログもありません。

<Callout variant="important">
  `CoCreateInstance`エラーが発生している Azure Websites ユーザーの場合は、 [support.newrelic.com](https://support.newrelic.com)でサポートを受けてください。
</Callout>

## 解決

New Relicに必要な権限があるかどうかを確認し、問題を解決するには、以下のトラブルシューティングの手順に従ってください。

<CollapserGroup>
  <Collapser
    id="clsid-errors"
    title="プロファイラーのCLSIDエラーをチェックします。"
  >
    パーミッションのエラーがプロファイラーのエラーによるものかどうかを確認するため。

    1. アプリケーションのイベントログにこのようなエラーがないか確認してください。

       ```
       NET Runtime version 4.0.30319.296 - Loading profiler failed during CoCreateInstance. Profiler CLSID: '{71DA0A04-7777-4EC6-9643-7D28B46A8A41}'
       ```

    2. エラーのCLSIDとNew RelicのCLSIDを比較します。

       ```
       {71DA0A04-7777-4EC6-9643-7D28B46A8A41} (agent for .NET Framework)
       {36032161-FFC0-4B61-B559-F6C5D41BAE5A} (agent for .NET Core)
       ```

    3. 次のうち1つを行います。

       * CLSIDが一致しない場合は、 [他のプロファイラーをアンインストールしてください](/docs/agents/net-agent/troubleshooting/cocreate-errors-no-event-log) 。
       * CLSID が一致する場合は、この手順を続行して、プロファイラー ログで`CoCreateInstance`権限エラーを確認してください。
  </Collapser>

  <Collapser
    id="mscorlib"
    title="New Relic のアセンブリーを確認します。"
  >
    New Relic アセンブリが`w3wp.exe`プロセスに接続されていることを確認するには:

    1. アプリがインストールされているサーバーで、 [Microsoft Windows <DNT>**Sysinternals Process Explorer**</DNT>をダウンロードします](https://technet.microsoft.com/en-us/sysinternals/bb896653.aspx)。

    2. ファイルを解凍し、 `procexp.exe`を管理者として実行してください。

    3. <DNT>**View > Show Lower Pane**</DNT>を選択し、次に<DNT>**View > Lower Pane View > DLLs**</DNT>を選択します。

    4. あなたのアプリにトラフィックをもたらします。

    5. プロセス リストを更新するには、 <DNT>**View > Refresh Now**</DNT>を選択します。

    6. 上部ペインで、サービスまたは`w3wp`インスタンス (通常は`svchost.exe`プロセスの下にネストされています) を選択します。

    7. 下部ペインで、次のような名前が`NewRelic`で始まるアセンブリを探します。

       ```
       NewRelic.Agent.Core.dll
       NewRelic.Profiler.dll
       NewRelic.Agent.IL.dll
       NewRelic.ICSharpCode.SharpZipLib.dll
       NewRelic.Json.dll
       NewRelic.Log.dll
       ```

    8. アセンブリが見つからない場合は、 [support.newrelic.com でサポートを受けてください。](https://support.newrelic.com)
  </Collapser>

  <Collapser
    id="w3wp"
    title="w3wp.exeの環境の詳細を確認します。"
  >
    `w3wp.exe`環境の詳細が次のようになっていることを確認します。

    ```ini
    COR_ENABLE_PROFILING=1
    COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
    NEWRELIC_INSTALL_PATH=C:\Program Files\New Relic\.NET Agent\
    ```
  </Collapser>

  <Collapser
    id="allusersprofile"
    title="プロファイラーのログを確認する。"
  >
    `%ALLUSERSPROFILE%\New Relic\.NET Agent\Logs`でプロファイラーのログを確認してください。

    * トラブルシューティングしている Web アプリのプロファイラー ログが

      <DNT>
        **no**
      </DNT>

      個あることを確認してください。

    * シンプルでデフォルトのサイトをインストールしている場合は、他のウェブアプリのプロファイラーログは無視してください。
  </Collapser>

  <Collapser
    id="everyone-group"
    title="パーミッションのエラーを解決する。"
  >
    上記の条件がすべて揃っている場合は、パーミッションエラーが発生しています。以下のいずれかのオプションを使用して、該当するパーミッション・エラーを解決してください。

    <table>
      <thead>
        <tr>
          <th>
            <DNT>
              **Available options**
            </DNT>
          </th>

          <th>
            <DNT>
              **Resolve permissions errors**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <DNT>**Everyone**</DNT>グループの権限を設定します。
          </td>

          <td>
            <DNT>**Everyone**</DNT>グループの次のフォルダーの権限を調整して、グループにすべての権限<DNT>**except**</DNT> `Full Control`を付与します。

            ```
            C:\Program Files\New Relic\.NET Agent\
            ```

            ```
            C:\Program Files (x86)\New Relic\.NET Agent\
            ```
          </td>
        </tr>

        <tr>
          <td>
            個々のユーザーの権限を設定します。
          </td>

          <td>
            セキュリティ ポリシーで<DNT>**Everyone**</DNT>グループの権限の調整が許可されていない場合は、個々のユーザーの権限を調整してください。 アプリケーションを実行するユーザーを記録し、各ユーザーの権限を調整します。
          </td>
        </tr>

        <tr>
          <td>
            PowerShellスクリプトを使ってパーミッションを設定します。
          </td>

          <td>
            PowerShell スクリプトを使用して`HKLM\SOFTWARE\New Relic`に権限を追加するには:

            ```shell
            $key = "HKLM:\SOFTWARE\New Relic"
            $acl = Get-Acl $key
            $AddACL = New-Object System.Security.AccessControl.RegistryAccessRule ("Everyone","FullControl","ObjectInherit,ContainerInherit","None","Allow")
            $acl.SetAccessRule($AddACL)
            $acl |Set-Acl -Path $key
            ```

            32 ビット アプリの場合、パスは次のようになります。 `HKLM:\SOFTWARE\Wow6432Node\New Relic`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
