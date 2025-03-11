---
title: インストールスクリプトのサイレントモード（上級）
tags:
  - Agents
  - PHP agent
  - Advanced installation
metaDescription: Instructions for advanced PHP system administrators who will be deploying New Relic via systems such as Puppet or Chef.
freshnessValidatedDate: never
translationType: machine
---

Puppet や Chef などのシステムを介して New Relic をインストールするには、 [`newrelic-install`](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script)スクリプトを<DNT>**silent**</DNT>モードで実行し、いくつかの環境変数を介して制御することができます。 このドキュメントでは、 [PHP インストール スクリプト](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script)をサイレント モードで実行できるように環境変数を手動で設定する方法について説明します。

## インストーラの選択 [#install-choose]

PuppetやChefなどのシステムを使ってNew Relicを展開する場合、2つの選択肢があります。

* Puppet を使用して、ネイティブ パッケージマネージャ (

  <DNT>
    **rpm**
  </DNT>

  または

  <DNT>
    **dpkg**
  </DNT>

  ) を使用してアーカイブをインストールします。

* tarball distributionの内容を配布し、選択した場所にファイルを配置する。

パッケージ システム経由でインストールする場合、パッケージ インストール スクリプトによってファイルが配置されます。Ubuntu ベースのシステムは例外です。標準の PHP がインストールされている場合、インストール後のスクリプトによって New Relic 拡張機能のシンボリック リンクが作成されます。ただし、これは Puppet または Chef スクリプトに任されているため、 `newrelic-install`の実行は試行されません。

Puppet や Chef などのシステムを介して New Relic をインストールするには、 [`newrelic-install`](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script)スクリプトを<DNT>**silent**</DNT>モードで実行し、いくつかの環境変数を介して制御することができます。

## 環境変数の設定 [#install-environment]

これは、動作を制御するために[`newrelic-install`](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script)を呼び出す前に設定できる環境変数のリストです。これらの環境変数を使用するだけでなく、インストール時に`newrelic.ini`ファイルで[ライセンス キー](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-license)と[アプリケーション名](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-appname)も定義してください。

<Callout variant="important">
  `NR_INSTALL_SILENT` インストールをサイレント モードで実行するかどうかを決定します。設定されている場合、スクリプトのすべての情報は、これらの環境変数を介して提供する必要があります。
</Callout>

<CollapserGroup>
  <Collapser
    id="NR_INSTALL_SILENT"
    title="nr_install_silent"
  >
    <table>
      <tbody>
        <tr>
          <th>
            タイプ：
          </th>

          <td>
            旗
          </td>
        </tr>

        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            （無し）
          </td>
        </tr>

        <tr>
          <th>
            使う。
          </th>

          <td>
            任意の値を設定すると、フラグがtrueになります。
          </td>
        </tr>
      </tbody>
    </table>

    設定すると、 [スクリプト](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script) がサイレントモードで実行されます。これにより、ほとんどのステータスメッセージが表示されなくなり、ユーザーの入力に対しても停止しなくなります。

    サイレントモードで実行する場合、スクリプトに必要なすべての情報は、これらの環境変数を介して提供されなければなりません。

    設定した場合、 `install`または`uninstall`コマンド ライン オプションを使用してスクリプトを呼び出し、実行モードを設定する必要があります。
  </Collapser>

  <Collapser
    id="NR_INSTALL_NOKSH"
    title="nr_install_noksh"
  >
    <table>
      <tbody>
        <tr>
          <th>
            タイプ：
          </th>

          <td>
            旗
          </td>
        </tr>

        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            （無し）
          </td>
        </tr>

        <tr>
          <th>
            使う。
          </th>

          <td>
            任意の値を設定すると、フラグがtrueになります。
          </td>
        </tr>
      </tbody>
    </table>

    セットされていると、スクリプトは Bourne Again Shell (bash) や Korn Shell (ksh) での再実行を試みません。

    このスクリプトは、従来の Bourne シェルの実装にはない機能を使用しており、デフォルトでは、それらの機能を実装していることがわかっているシェルで再実行しようとします。

    `/bin/sh`が ksh または bash のいずれかであることがわかっている場合は、この変数を任意の値に設定することで、この再実行を防ぐことができます。
  </Collapser>

  <Collapser
    id="NR_INSTALL_SHELL"
    title="nr_install_shell"
  >
    <table>
      <tbody>
        <tr>
          <th>
            タイプ：
          </th>

          <td>
            パス
          </td>
        </tr>

        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            （無し）
          </td>
        </tr>

        <tr>
          <th>
            使う。
          </th>

          <td>
            スクリプトに互換性のあるシェルを指定します。
          </td>
        </tr>
      </tbody>
    </table>

    インストールスクリプトは、いくつかの非常に古い Bourne シェルの実装には存在しない特定の機能に依存しています。そのようなシステムに導入する場合は、この変数に、スクリプトが再実行するための代替シェルを指定してください。

    `NR_INSTALL_NOKSH`が設定されている場合、この変数は無視されます。

    お使いのバージョンの`/bin/sh`が本当に Zsh の 3.x より前のバージョンのリンクである場合は、これを Bash などのより Korn と互換性のあるシェルに設定する必要がある場合があります。
  </Collapser>

  <Collapser
    id="NR_INSTALL_PATH"
    title="nr_install_path"
  >
    <table>
      <tbody>
        <tr>
          <th>
            タイプ：
          </th>

          <td>
            コロンで区切られたディレクトリのリスト
          </td>
        </tr>

        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            （無し）
          </td>
        </tr>

        <tr>
          <th>
            使う。
          </th>

          <td>
            `$PATH`に追加するディレクトリを一覧表示します。
          </td>
        </tr>
      </tbody>
    </table>

    PHP インストールを検索する現在の`$PATH`に追加する、コロンで区切られたディレクトリのリストが含まれます。

    Puppet または Chef からスクリプトを呼び出した時点で`$PATH`以外の非標準の場所に PHP がインストールされている場合は、この変数を設定できます。`PATH`を直接編集して、これらのディレクトリを含めることもできます。
  </Collapser>

  <Collapser
    id="NR_INSTALL_PHPLIST"
    title="nr_install_phplist"
  >
    <table>
      <tbody>
        <tr>
          <th>
            タイプ：
          </th>

          <td>
            コロンで区切られたディレクトリのリスト
          </td>
        </tr>

        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            （無し）
          </td>
        </tr>

        <tr>
          <th>
            使う。
          </th>

          <td>
            New Relic をインストールするディレクトリの一覧です。
          </td>
        </tr>
      </tbody>
    </table>

    New Relic をインストールするディレクトリをコロンで区切って指定します。

    設定されている場合、排他リストが含まれ、 `PATH`または`NR_INSTALL_PATH`で指定されたディレクトリにあるバージョンは無視されます。
  </Collapser>

  <Collapser
    id="NR_INSTALL_ARCH"
    title="nr_install_arch"
  >
    <table>
      <tbody>
        <tr>
          <th>
            タイプ：
          </th>

          <td>
            ストリング
          </td>
        </tr>

        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            （無し）
          </td>
        </tr>

        <tr>
          <th>
            使う。
          </th>

          <td>
            スクリプトベースの検出をオーバーライドするには、 <DNT>**x86**</DNT>または<DNT>**x64**</DNT>に設定します。
          </td>
        </tr>
      </tbody>
    </table>

    これは、アーキテクチャを自動的に決定しようとする試みを無効にします。

    64 ビット システムで実行していて、これを<DNT>**x86**</DNT>に設定すると、スクリプトによって 32 ビット デーモン (tarball からインストールする場合) とエージェントが強制的にインストールされます。

    <DNT>**x64**</DNT>に設定すると、64 ビット デーモンがインストールされ、スクリプトは PHP バージョンが 64 ビットか 32 ビットかを検出できるようになります。

    これを設定する必要はありません。これは念のために用意されています。
  </Collapser>

  <Collapser
    id="NR_INSTALL_KEY"
    title="NR_INSTALL_KEY"
  >
    <table>
      <tbody>
        <tr>
          <th>
            タイプ：
          </th>

          <td>
            ストリング
          </td>
        </tr>

        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            （無し）
          </td>
        </tr>

        <tr>
          <th>
            使う。
          </th>

          <td>
            新規インストール時に New Relic <InlinePopover type="licenseKey"/>に設定します。
          </td>
        </tr>
      </tbody>
    </table>

    これが新規インストールであり、新しい<DNT>**newrelic.ini**</DNT>ファイルを作成する必要がある場合は、この値をライセンスキーに設定します。
  </Collapser>

  <Collapser
    id="NR_INSTALL_INITSCRIPT"
    title="nr_install_initscript"
  >
    <table>
      <tbody>
        <tr>
          <th>
            タイプ：
          </th>

          <td>
            ストリング
          </td>
        </tr>

        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            （無し）
          </td>
        </tr>

        <tr>
          <th>
            使う。
          </th>

          <td>
            対象となる起動デーモンの名前を指定します。
          </td>
        </tr>
      </tbody>
    </table>

    デーモンのスタートアップスクリプトの名前が書かれています。

    デフォルトの名前を使用したくない場合に使用します。
  </Collapser>

  <Collapser
    id="NR_INSTALL_DAEMONPATH"
    title="nr_install_daemonpath"
  >
    <table>
      <tbody>
        <tr>
          <th>
            タイプ：
          </th>

          <td>
            パス
          </td>
        </tr>

        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            （無し）
          </td>
        </tr>

        <tr>
          <th>
            使う。
          </th>

          <td>
            New Relic プロキシ・デーモンのフル・インストール・パスを指定する。
          </td>
        </tr>
      </tbody>
    </table>

    New Relic プロキシデーモンのインストールパスのフルパスを含みます。

    Solaris を除くすべてのシステムで、デフォルトは`/usr/bin/newrelic-daemon`です。Solaris の場合、デフォルトは`/opt/newrelic/bin/newrelic-daemon`です。

    これを変更する場合は、 <DNT>**init**</DNT>スクリプトまたはその設定ファイルを編集する必要がある場合があります。
  </Collapser>

  <Collapser
    id="NR_INSTALL_USE_CP_NOT_LN"
    title="nr_install_use_cp_not_ln"
  >
    <table>
      <tbody>
        <tr>
          <th>
            タイプ：
          </th>

          <td>
            旗
          </td>
        </tr>

        <tr>
          <th>
            デフォルト：
          </th>

          <td>
            （無し）
          </td>
        </tr>

        <tr>
          <th>
            使う。
          </th>

          <td>
            任意の値を設定すると、フラグがtrueになります。
          </td>
        </tr>
      </tbody>
    </table>

    インストールスクリプトに、シンボリックリンクを使わずにエージェントを所定の場所にコピーするように指示します。これは、PHP プロセスがアクセスできないような場所 (例えば、ルートユーザーのホームディレクトリなど) にエージェントを展開した場合に便利です。
  </Collapser>
</CollapserGroup>

<InstallFeedback/>
