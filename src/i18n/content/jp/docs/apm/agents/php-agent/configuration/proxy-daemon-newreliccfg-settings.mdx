---
title: プロキシ・デーモン（newrelic.cfg）の設定
tags:
  - Agents
  - PHP agent
  - Configuration
metaDescription: How to change configuration settings for New Relic's PHP proxy daemon (a process that acts as a communications proxy between the agent and the data collectors).
freshnessValidatedDate: never
translationType: machine
---

デーモン ( `newrelic-daemon` ) は、PHP エージェントと New Relic コレクターの間のプロキシとして機能し、ネットワーク トラフィックを削減し、インストルメントされたアプリケーションの応答時間を短縮します。デーモン プロセスはシステムの起動時に開始され、New Relic にデータを送信するために実行されている必要があります。

## 推奨構成

PHP エージェントのバージョン 3.0 以降では、エージェントによってデーモンが自動的に構成され、起動されるようになりました。自動構成には`newrelic.cfg`ファイルは必要ありません。これが推奨される構成です。

しかし、デーモンを手動で起動することが有効な場合もあります。起動プロセスの詳細については、 [New Relic daemon startup modes](/docs/agents/php-agent/installation/starting-php-daemon) を参照してください。

## マニュアル設定 [#proxy-settings]

サンプルのデーモン構成ファイルはインストール中に作成されました。デーモンを手動で構成するには、 `newrelic.cfg.template`をコピーして名前を`/etc/newrelic/newrelic.cfg.template`から`/etc/newrelic/newrelic.cfg`に変更し、ファイルを編集します。すべての設定はオプションであり、ほとんどの設定にはデフォルト値があります。

<Callout variant="important">
  エージェントは、 `/etc/newrelic/`ディレクトリで`newrelic.cfg`ファイルを見つけても、デーモンを自動的に起動しません。
</Callout>

<CollapserGroup>
  <Collapser
    id="cfgvar-logfile"
    title={<InlineCode>ログファイル</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            `[none]`
          </td>
        </tr>
      </tbody>
    </table>

    使用するログファイルの名前を設定します。

    デーモン`-l`オプションでコマンドラインに設定できます。 コマンドラインでこの値を設定すると、 `newrelic.cfg`で設定された値が上書きされます。デーモン自体はログファイルのデフォルト名を提供しませんが、デーモンの起動スクリプトは<DNT>**-l**</DNT>オプションを使用してデフォルトの場所と名前を`/var/log/newrelic/newrelic-daemon.log`に設定します。
  </Collapser>

  <Collapser
    id="cfgvar-loglevel"
    title={<InlineCode>ローグレベル</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            `info`
          </td>
        </tr>
      </tbody>
    </table>

    [ログファイル](#cfgvar-logfile) に送られるメッセージの詳細レベルを設定します。このフィールドには、エージェントと同じ値を設定することが可能で、詳細度の高い順に

    * `error`

    * `warning`

    * `info`

    * `debug`

      デーモンで問題が発生している場合は、ログレベル<DNT>**debug**</DNT>を少なくとも問題が再現するのに十分な時間に設定してください。 プロキシ デーモンの問題をデバッグするには、多くの場合、 <DNT>**debug**</DNT>ログ ファイルが必要になります。

      デーモン`--loglevel`オプションを使用してコマンドラインで設定できます。コマンドラインでこの値を設定すると、で設定された値が上書きされます。 `newrelic.cfg`
  </Collapser>

  <Collapser
    id="cfgvar-ssl"
    title={<InlineCode>ssl</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            `yes`
          </td>
        </tr>
      </tbody>
    </table>

    この設定は、PHP エージェントのバージョンが 8.0 未満の場合のみ有効です。8.0 以上のバージョンでは、この設定を無視し、常に HTTPS 暗号化を使用して New Relic と通信します。

    `yes`に設定すると、プロキシは安全な接続のみを使用してコレクタと通信します。この設定では SSL が指定されていますが、この設定では最新の業界標準に準拠した HTTPS 暗号化が参照されます。エージェントはデフォルトで HTTPS 経由で New Relic と通信し、New Relic は New Relic および New Relic REST API へのすべてのトラフィックに HTTPS を必要とします。

    コマンドラインでデーモンの`--tls`オプションを使用して有効または無効にできます。コマンドラインでこの値を設定すると、で設定された値が上書きされます。 `newrelic.cfg`
  </Collapser>

  <Collapser
    id="cfgvar-ssl-ca-bundle"
    title={<InlineCode>ssl_ca_bundle</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            `""`
          </td>
        </tr>
      </tbody>
    </table>

    PEM形式のCA証明書を含むファイルの場所を設定します。設定すると、このファイルの証明書を使用して、New Relicコレクターが認証されます。ほとんどの場合、CAバンドの設定は不要です。New Relic PHPエージェントには、必要なCA証明書が同梱されます。

    [`ssl_ca_path`](#cfgvar-ssl-ca-path)も設定されている場合 (以下を参照)、このファイル内の証明書が最初に検索され、次に[`ssl_ca_path`](#cfgvar-ssl-ca-path)ディレクトリに含まれる証明書が検索されます。

    [`ssl`](#cfgvar-ssl)が`false`に設定されている場合、この設定は効果がありません。
  </Collapser>

  <Collapser
    id="cfgvar-ssl-ca-path"
    title={<InlineCode>ssl_ca_path</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            `""`
          </td>
        </tr>
      </tbody>
    </table>

    PEM形式の信頼されるCA証明書を含むディレクトリの場所を設定します。設定すると、このディレクトリの証明書を使用して、New Relicコレクターが認証されます。ほとんどの場合、CAパスの設定は不要です。New Relic PHPエージェントには、必要なCA証明書が同梱されます。

    [`ssl_ca_bundle`](#cfgvar-ssl-ca-bundle)も設定されている場合 (上記を参照)、最初に検索され、次に[`ssl_ca_path`](#cfgvar-ssl-ca-path)に含まれる証明書が検索されます。

    [`ssl`](#cfgvar-ssl)が`false`に設定されている場合、この設定は効果がありません。
  </Collapser>

  <Collapser
    id="cfgvar-proxy"
    title={<InlineCode>proxy</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            `[none]`
          </td>
        </tr>
      </tbody>
    </table>

    一部のサイトでは、イグレスファイアウォールの制限が非常に厳しく、外部と通信するためにプロキシを使用する必要があります。このようなサイトでは、この値を設定する必要があります。

    値の形式は`scheme://user:password@hostname:port`です。

    値`scheme` 、 `user` 、 `password` 、および`port`は、プロキシ構成によっては省略される場合があります。たとえば、ユーザー名とパスワードを必要としない HTTP プロキシを使用している場合は、単に`hostname:port`を使用できます。ほとんどのプロキシでは、ポートのデフォルトは 1080 です。

    デーモン`--proxy`オプションを使用してコマンドラインで設定できます。コマンドラインでこの値を設定すると、で設定された値が上書きされます。 `newrelic.cfg`
  </Collapser>

  <Collapser
    id="cfgvar-port"
    title={<><InlineCode>
      address
    </InlineCode> （ <InlineCode>
      port
    </InlineCode>のエイリアス）</>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            `/tmp/.newrelic.sock`
          </td>
        </tr>
      </tbody>
    </table>

    デーモンがリッスンするソケット エンドポイントを設定します。このエンドポイントにより、エージェントはデーモンと通信できるようになります。これは、エージェントの[`newrelic.daemon.address`](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-daemon-port)設定と同じ値である必要があります。これは次の方法で指定できます。

    * 推奨: 指定されたファイルを UNIX ドメイン ソケット (UDS) として使用するには、 <DNT>**absolute**</DNT>パス名を文字列として指定します。

    * 標準の TCP ポートを使用するには、 `1`から`65534`の範囲の番号を指定します。

    * 抽象ソケットを使用するには、値`@newrelic-daemon`を使用します (エージェント バージョン 5.2.0.141 以降で使用可能)。

    * 異なるホストで実行されているアプリケーションからの接続を有効にするには ([コンテナ環境](/docs/agents/php-agent/advanced-installation/install-php-agent-docker)に役立ちます)、この値を`host:port`に設定します。ここで、 `host`ローカル ホストのホスト名または IP アドレスを表し、 `port`有効なポートを表します。番号。IPv4 と IPv6 の両方がサポートされています。これは、PHP エージェント バージョン 9.2.0.247 以降で利用できます。

      これらのオプションは、デーモンの`--address`オプションを使用してコマンド ラインから設定することもできます。コマンドラインでこの値を設定すると、 `newrelic.cfg`に設定された値がオーバーライドされます。
  </Collapser>

  <Collapser
    id="cfgvar-pidfile"
    title={<InlineCode>pidfile</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            `/tmp/newrelic.pid`
          </td>
        </tr>
      </tbody>
    </table>

    デーモンがプロセスID（pid）を記録するファイルの名前を設定します。

    デーモンはこれをデフォルト値の`/tmp/newrelic.pid`に設定しますが、起動スクリプトはほとんどの場合、 `--pidfile`オプションを使用してこれを`/var/run/newrelic-daemon.pid`に設定します。

    デーモン`--pidfile`オプションを使用してコマンドラインで設定できます。コマンドラインでこの値を設定すると、で設定された値が上書きされます。 `newrelic.cfg`
  </Collapser>

  <Collapser
    id="cfgvar-auditlog"
    title={<InlineCode>監査ログ</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            `[none]`
          </td>
        </tr>
      </tbody>
    </table>

    この機能はバージョン 3.4 で導入されました。この機能を有効にすると、エージェントは、デーモンから New Relic に送信されたすべてのデータを含む監査ログを作成します。このデータには、各リクエストの完全なURL、日付、時刻、圧縮されていない、エンコードされていないデータが含まれています。これにより、機密データが含まれていないことを確認するために、New Relic に送信されるデータを正確に観察することができます。

    指定するファイルは、上述のようにデーモンログと同じファイルにすることはできません。この監査ログはあっという間に膨大な量になってしまうため、New Relic では長時間使用しないことを推奨しています。

    デーモン`--auditlog`オプションを使用してコマンドラインで設定できます。コマンドラインでこの値を設定すると、で設定された値が上書きされます。 `newrelic.cfg`
  </Collapser>
</CollapserGroup>
