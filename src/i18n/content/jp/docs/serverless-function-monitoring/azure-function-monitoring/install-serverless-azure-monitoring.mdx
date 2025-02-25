---
title: New Relic に Azure Functions 監視をインストールして構成する
metaDescription: Configure your Azure Functions with New Relic
freshnessValidatedDate: never
translationType: machine
---

## あなたが始める前に [#begin]

Azure Functions が[互換性と要件を](/docs/serverless-function-monitoring/azure-function-monitoring/compatibility-requirement-azure-monitoring)満たしていることを確認します。

<Steps>
  <Step>
    ## AzureアカウントをNew Relicにリンクする

    Azure Monitor メトリクスのポーリングを構成することで、 Azureアカウントを New Relic にリンクできます。 これにより、New Relic UIでメトリクスを確認できるようになります。 詳細については、 [Azureインテグレーション」](https://docs.newrelic.com/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-functions-monitoring-integration/#polling)を参照してください。
  </Step>

  <Step>
    ## New Relic .NETエージェントを使用してAzure Functions計装する

    要件に基づいて、次のいずれかのオプションを選択して、New Relic .NET エージェントを使用してAzure Functions計測します。

    <Tabs>
      <TabsBar>
        <TabsBarItem id="linux-instrumentation">Linux</TabsBarItem> <TabsBarItem id="windows-instrumentation">Windows</TabsBarItem> <TabsBarItem id="containerized-instrumentation">コンテナ化された機能</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="linux-instrumentation">
          1. `NewRelic.Agent` NuGet パッケージをアプリケーション プロジェクトに追加します。

             * Visual Studio コード エディターで、NuGet パッケージマネージャを使用して、最新バージョンの`NewRelic.Agent`を検索し、アプリケーションに追加します。
             * 他の開発環境を使用している場合は、 `dotnet add package NewRelic.Agent`を使用してパッケージを追加できます。

          2. 好みの公開メカニズムを使用して、更新されたアプリケーションを Azure にデプロイします。 これには、 `/home/site/www/newrelic`フォルダーにインストールされている New Relic エージェントが含まれます。
        </TabsPageItem>

        <TabsPageItem id="windows-instrumentation">
          New Relic Azure Websites Extension (v1.6.0 以降) は、 Windows Azure Functions のインストゥルメンテーションを自動的に構成します。

          New Relic Azure Websites 拡張機能をインストールするには、次の手順に従います。

          1. Azure ポータルで、関数アプリに移動します。
          2. <DNT>**Development tools**</DNT>セクションをクリックし、 <DNT>**Extensions**</DNT>を選択します。
          3. <DNT>**+ Add**</DNT>をクリックします。
          4. <DNT>**Search for an extension to install**</DNT>選択し、 <DNT>**Filter items**</DNT>ボックスに`New Relic .NET Agent`と入力します。
          5. <DNT>**New Relic .NET Agent(vx.x.x) - New Relic**</DNT>拡張機能を選択し、 <DNT>**Add**</DNT>クリックします。
          6. インストールが完了すると、インストールされた拡張機能のリストに拡張機能が表示されます。 正しいインストレーションを確認するには、「参照」列の下のリンクをクリックしてインストレーション ログを表示します。
        </TabsPageItem>

        <TabsPageItem id="containerized-instrumentation">
          New Relic .NET エージェントをインストールするには、Dockerfile の最終段階で次の行を追加します。

          ```dockerfile
          # Install the latest New Relic .NET agent using the apt-get package manager
          RUN apt-get update && apt-get install -y wget ca-certificates gnupg \
              && echo 'deb http://apt.newrelic.com/debian/ newrelic non-free' | tee /etc/apt/sources.list.d/newrelic.list \
              && wget https://download.newrelic.com/548C16BF.gpg \
              && apt-key add 548C16BF.gpg \
              && apt-get update \
              && apt-get install -y newrelic-dotnet-agent \
              && rm -rf /var/lib/apt/lists/*
          ```
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## 環境変数を設定する

    New Relic .NETエージェントを使用してAzure Functionsインストゥルメントした後、次の手順を実行してNew Relicにデータを送信するように[環境変数](/docs/serverless-function-monitoring/azure-function-monitoring/env-variables-azure)を構成します。

    1. Azure ポータルで Azure Functions に移動し、 **Settings** \[設定]の下にある**Environment variables** \[環境変数] をクリックして、 **Advanced edit** \[詳細編集] をクリックします。

    2. アプリケーションの要件に基づいて、次の値を貼り付けます。

    <Callout variant="important">
      既存の最後の行の末尾に必ずカンマを追加し、次の設定でライセンスキーとアプリ名を更新してください。
    </Callout>

    <Tabs>
      <TabsBar>
        <TabsBarItem id="linux-configuration">Linux</TabsBarItem> <TabsBarItem id="windows-configuration">Windows</TabsBarItem> <TabsBarItem id="containerized-configuration">コンテナ化された機能</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="linux-configuration">
          ```json
          {
            "name": "CORECLR_ENABLE_PROFILING",
            "value": "1",
            "slotSetting": false
          },
          {
            "name": "CORECLR_NEW_RELIC_HOME",
            "value": "/home/site/wwwroot/newrelic",
            "slotSetting": false
          },
          {
            "name": "CORECLR_PROFILER",
            "value": "{36032161-FFC0-4B61-B559-F6C5D41BAE5A}",
            "slotSetting": false
          }, 
          {
            "name": "CORECLR_PROFILER_PATH",
            "value": "/home/site/wwwroot/newrelic/libNewRelicProfiler.so",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_AZURE_FUNCTION_MODE_ENABLED",
            "value": "1",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_LOG_DIRECTORY",
            "value": "/home/LogFiles/NewRelic",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_LICENSE_KEY",
            "value": "<your newrelic license key here>",
            "slotSetting": false
          }
          ```
        </TabsPageItem>

        <TabsPageItem id="windows-configuration">
          ```json
          {
            "name": "NEW_RELIC_LICENSE_KEY",
            "value": "YOUR_NEW_RELIC_LICENSE_KEY",
            "slotSetting": false
          }
          ```

          必要に応じて、次の環境変数を追加して、インストールする .NET エージェントのバージョンを指定できます。

          ```json
          {
            "name": "NEW_RELIC_AGENT_VERSION_OVERRIDE",
            "value": "10.35.0",
            "slotSetting": false
          }
          ```
        </TabsPageItem>

        <TabsPageItem id="containerized-configuration">
          ```json
          {
            "name": "CORECLR_ENABLE_PROFILING",
            "value": "1",
            "slotSetting": false
          },
          {
            "name": "CORECLR_NEW_RELIC_HOME",
            "value": "/usr/local/newrelic-dotnet-agent",
            "slotSetting": false
          },
          {
            "name": "CORECLR_PROFILER",
            "value": "{36032161-FFC0-4B61-B559-F6C5D41BAE5A}",
            "slotSetting": false
          }, 
          {
            "name": "CORECLR_PROFILER_PATH",
            "value": "/usr/local/newrelic-dotnet-agent/libNewRelicProfiler.so",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_AZURE_FUNCTION_MODE_ENABLED",
            "value": "1",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_LOG_DIRECTORY",
            "value": "/home/LogFiles/NewRelic",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_LICENSE_KEY",
            "value": "<your newrelic license key here>",
            "slotSetting": false
          }
          ```
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## Azure Functionsを再起動します

    環境変数を追加したら、Azure Functions を再起動して変更を適用します。
  </Step>
</Steps>

## 次のステップ

インストールと設定の手順が完了したら、 Azure Functionsにトラフィックを送信して、New Relic UIダッシュボードでメトリクスを確認します。