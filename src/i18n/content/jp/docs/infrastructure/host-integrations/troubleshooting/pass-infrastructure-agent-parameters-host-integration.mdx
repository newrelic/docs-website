---
title: インフラストラクチャ エージェントのパラメータをオンホスト統合に渡す
type: troubleshooting
tags:
  - Integrations
  - On-host integrations
  - Troubleshooting
metaDescription: 'New Relic infrastructure monitoring: Pass infrastructure agent parameters to on-host Integrations.'
freshnessValidatedDate: never
translationType: machine
---

## 問題

インフラストラクチャ エージェントで構成パラメータが定義されており、そのパラメータを [オンホスト統合の](/docs/infrastructure/host-integrations/installation/install-infrastructure-host-integrations)1 つに渡したいと考えています。

## 解決

変数 `passthrough_environment` をインフラストラクチャ エージェントの [構成ファイル](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/#passthrough_-environment)に追加することで、エージェントに設定された構成パラメータをオンホスト統合に渡すことができます。

インフラストラクチャ エージェント バージョン 1.24.1 以降、 `passthrough_environment` 変数名の正規表現をサポートします。

例えば、インフラストラクチャエージェントで設定したプロキシオプションを統合に渡したい場合は、インフラストラクチャコンフィグファイルに以下の設定を追加します。

```
passthrough_environment:
  - HTTPS_PROXY
  - HTTP_PROXY
  - MY_REDIS_PASSWORD
  - NRIA_.*
```

インフラストラクチャ エージェント バージョン 1.14.0 以降、以下に示すように、統合構成ファイルの一部として環境変数を定義することもできます (`passthrough_environment` 構成も必要です)。

```
integration_name: com.newrelic.redis
instances:
  - name: redis-metrics
    command: metrics
    arguments:
      hostname: localhost
      port: 6379
      password: {{MY_REDIS_PASSWORD}}
```
