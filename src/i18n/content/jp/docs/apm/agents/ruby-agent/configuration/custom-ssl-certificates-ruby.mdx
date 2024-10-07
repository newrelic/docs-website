---
title: カスタムSSL証明書（Ruby）
tags:
  - Agents
  - Ruby agent
  - Configuration
metaDescription: 'Ruby agent: Specify custom CA bundles to validate SSL communication via a proxy server.'
freshnessValidatedDate: never
translationType: machine
---

New Relic では、APM および New Relic REST API へのすべてのトラフィックに[HTTPS が必要です](/docs/apis/rest-api-v2/troubleshooting/301-response-rest-api-calls)。Ruby エージェントは、デフォルトで SSL 経由で New Relic コレクター サーバーに接続します。通常、このデフォルトで十分です。

## SSL証明書のインストール

CA 証明書がインストールされていないコンテナまたはサーバーに Ruby アプリケーションとエージェントをデプロイする場合は、それらを自分でインストールして New Relic サーバーへの HTTPS 接続を確立する必要があります。エージェントのバージョン 7.0 では、この変更が導入されました。これらの CA 証明書は、ホストに応じてさまざまな方法でインストールできます。次の外部リンクは、ホストの準備状況をテストし、CA 証明書をインストールするための役立つガイダンスです。

* [SSL証明書エラーのトラブルシューティング](https://bundler.io/v2.0/guides/rubygems_tls_ssl_troubleshooting_guide.html#troubleshooting-certificate-errors)
* [自動SSLチェック](https://bundler.io/v2.0/guides/rubygems_tls_ssl_troubleshooting_guide.html#automated-ssl-check)
* [CA証明書のインストール](https://superuser.com/questions/437330/how-do-you-add-a-certificate-authority-ca-to-ubuntu/719047#719047)
* [Dockerでの証明書の取り扱いについて](https://serverfault.com/questions/975775/how-to-handle-certificates-in-dockerfile)

## カスタムCAバンドルの使用 [#using-custom]

特定の構成では、カスタム CA バンドルの使用が必要になる場合があります。たとえば、HTTP プロキシを使用してエージェントからの SSL トラフィックをインターセプトして復号化し、New Relic への別の SSL 接続を確立することができます。

プロキシによって提示された[SSL 証明書](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#ssl-certificate)を検証するときにカスタム CA バンドルを使用するようにエージェントを構成するには、 <DNT>**newrelic.yml**</DNT>ファイルまたは`NEW_RELIC_CA_BUNDLE_PATH`環境変数で`ca_bundle_path`設定を設定します。

```yml
common: &default_settings
  ca_bundle_path: certificates/mycert.pem
  # ... other settings ...
```

プロキシまたはサーバーの ID を検証するときにエージェントが使用する各証明書を含む<DNT>**.pem**</DNT>ファイルへのパスを指定します。 複数の証明書を 1 つの<DNT>**.pem**</DNT>ファイルに連結できます。

* <DNT>
    **Relative path:**
  </DNT>

  相対パスを指定すると、エージェントは実行時にアプリ サーバー プロセスの作業ディレクトリを基準としたパスを割り当てます。

* <DNT>
    **Absolute path:**
  </DNT>

  作業ディレクトリがアプリケーションのルートではなく`/`である場合は、必ず絶対パスを指定してください。
