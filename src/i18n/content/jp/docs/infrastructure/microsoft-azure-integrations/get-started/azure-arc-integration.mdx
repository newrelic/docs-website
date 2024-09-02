---
title: Azure Arc に New Relic 拡張機能をインストールする
tags:
  - Infrastructure
  - Install NewRelic Extension
  - NewRelic Extension
  - Azure Arc Extension
metaDescription: New Relic's Extension For Azure Arc.
freshnessValidatedDate: never
translationType: machine
---

このドキュメントでは、Azure コマンド ライン インターフェイス (Azure CLI) を使用して Azure アークに接続されたマシンに New Relic Extension をインストールする方法を段階的に説明します。

<CollapserGroup>
  <Collapser
    id="verbose-with-manifest"
    title="アズールアークとは何ですか？"
  >
    Azure arc は Azure プラットフォームを拡張し、データセンターやマルチクラウド環境で実行できる柔軟性を備えたアプリケーションとサービスを構築できるようにします。 Azure Arc は、一貫した開発、運用、セキュリティ モデルを使用してクラウドネイティブ アプリケーションを開発するのに役立ちます。
  </Collapser>
</CollapserGroup>

## 前提条件

始める前に、次のものがあることを確認してください。

* Azure CLI がローカル マシンにインストールされている。
* Azure Arc に接続されたマシンがセットアップされ、Azure サブスクリプションに登録されます。
* 指定したリソース グループ内のリソースを管理できるようにする、Azure サブスクリプション所有者または共同作成者ロールからのアクセス許可。

## インストール手順

<Steps>
  <Step>
    ### ターミナルまたはコマンドプロンプトを開きます

    Azure サブスクリプションに接続し、Azure CLI を通じて次の手順を実行します。
  </Step>

  <Step>
    ### Azure CLI コマンドを実行する

    ターミナルに次のコマンドを入力して、Azure arc 接続マシンに New Relic エージェントをインストールします。

    <DNT>
      **For Linux-based machines:**
    </DNT>

    ```bash
    az connectedmachine extension create \
      --resource-group "your-resource-group" \
      --machine-name "your-machine-name" \
      --location "your-location" \
      --name NewRelicAgent \
      --publisher newrelic.infrastructure.extensions \
      --type newrelic-infra \
      --settings '{ "NR_LICENSE_KEY": "YOUR-NEW-RELIC-LICENSE-KEY" }'
    ```

    <DNT>
      **For Windows-based machines:**
    </DNT>

    ```bash
    az connectedmachine extension create \
      --resource-group "your-resource-group" \
      --machine-name "your-machine-name" \
      --location "your-location" \
      --name NewRelicAgent \
      --publisher newrelic.infrastructure.extensions \
      --type newrelic-infra-windows \
      --settings '{ "NR_LICENSE_KEY": "YOUR-NEW-RELIC-LICENSE-KEY" }'
    ```

    「your-resource-group」、「your-machine-name」、「your-location」などのプレースホルダーを実際のリソース グループ、マシン名、場所に置き換えます。
  </Step>

  <Step>
    ### インストールを確認します。

    Azure Arc に接続されたマシン上の New Relic エージェントのステータスをチェックして、インストールが成功したことを確認します。

    1. Azureポータル -

       <img
         title="azureArcExtension.webp"
         alt="Azure Arc Extension"
         src="/images/Azure-arc-extension.webp"
       />

    2. NewRelic で Azure Arc Connected VMメトリックを表示します。

       <img
         title="azureArcMetrics.webp"
         alt="Azure Arc NewRelic Metics"
         src="/images/Azure-Arc-Metrics.webp"
       />
  </Step>
</Steps>
