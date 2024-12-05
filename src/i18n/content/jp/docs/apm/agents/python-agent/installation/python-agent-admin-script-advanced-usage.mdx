---
title: Pythonのエージェント管理スクリプト。高度な使い方
tags:
  - Agents
  - Python agent
  - Installation
metaDescription: A summary of functions and commands available with the New Relic Python agent's newrelic-admin script.
freshnessValidatedDate: never
translationType: machine
---

Python エージェント管理スクリプトは[、インストール プロセス](/docs/apm/agents/python-agent/getting-started/introduction-new-relic-python/#installation)中に使用されます。 Python エージェント パッケージがインストールされると、 `newrelic-admin`スクリプトも Python インストレーションまたは仮想環境の`bin`ディレクトリにインストールされます。

このドキュメントでは、これらのアドミン・スクリプトの使い方について、さらに詳しく説明しています。

* エージェント初期設定ファイルの生成
* 設定ファイルの検証
* New Relicへの接続テスト
* スタンドアロンPythonウェブアプリケーションのラッピング起動

## サブコマンドの構造 [#sub-commands]

サブコマンドを実行するには、サブコマンドの名前を`newrelic-admin`スクリプトの最初の引数として指定します。次に、サブコマンドの名前の後にオプションを追加します。例えば：

```shell
newrelic-admin help
```

## help&lt;コマンド> [#help]

引数を指定せずに実行すると、受け付けたすべてのサブコマンドのリストが表示されます。

```shell
newrelic-admin help
[output]  Usage: newrelic-admin command [options]
[output]  
[output]  Type 'newrelic-admin help <command>'for help on a specific command.
[output]  
[output]  Available commands are:
[output]    generate-config
[output]    license-key
[output]    local-config
[output]    network-config
[output]    record-deploy
[output]    run-program
[output]    run-python
[output]    server-config
[output]    validate-config
```

サブコマンドに関する追加の詳細を表示するには、サブコマンドとそのオプションのいずれかを指定して help コマンドを実行します。例えば：

```shell
newrelic-admin help generate-config
[output]  Usage: newrelic-admin generate-config license_key [output_file]
[output]  
[output]  Generates a sample agent configuration file for <license_key>.
```

## generate-config license_key \[output_file] (ライセンスキーの生成) [#generate-config]

サンプルのエージェント設定ファイルを生成します。 `license_key`オプションは<InlinePopover type="licenseKey"/>です。

デフォルトでは、サンプル構成ファイルは標準出力に送られ、画面に表示されます。出力をキャプチャするには、代わりに`output_file`オプションとしてファイルの名前を指定してファイルに保存できます。

サンプル エージェント構成ファイルが生成されると、ファイル内のライセンス キー オプションのみが更新されます。ファイルを編集し、必要に応じて`app_name`および`log_file`オプションを変更する必要があります。詳しくは、 [Python エージェントのインストール](/docs/python/python-agent-installation)を参照してください。

`generate-config`コマンドを実行して初期エージェント構成ファイルを生成できない場合は、download.newrelic.com/python_agent/release/newrelic.ini からサンプル構成ファイルを[ダウンロードできます](https://download.newrelic.com/python_agent/release/newrelic.ini)。

## validate-config config_file \[log_file]を参照してください。 [#validate-config]

`config_file`オプションで指定されたエージェント構成ファイルの構文を検証します。

これは、 `generate-config`によって生成され、その後編集されたエージェント構成、またはダウンロード サイトからサンプル構成ファイルをダウンロードして作成されたエージェント構成ファイルである可能性があります。

構成ファイルの構文を検証するだけでなく、エージェント構成ファイルに含まれる`license_key`を使用してアカウントを識別し、サーバーに接続できるかどうかもテストします。

このサブコマンドは、データコレクタホストのホスト名を解決するためのDNSが利用可能であること、ネットワーク接続が可能であること、ファイアウォールがアクセスをブロックしていないことを確認するために使用できます。

弊社のサーバーに接続すると、テストによって、お客様のアカウントの下に`Python Agent Test`というアプリケーションが作成されます。 このアプリケーションには、少量のシミュレートされたウェブトランザクション データとエラーが報告されます。 一定期間が経過すると、必要に応じてアカウント内のこのアプリケーションを<DNT>**Applications**</DNT>リストから削除できるようになります。

このテストが実行されると、その場所にログファイルが作成されます。

```
/tmp/python-agent-test.log
```

この場所をオーバーライドする必要がある場合は、 `log_file`オプションを指定できます。ログ ファイルに書き込まれる内容を画面に表示するには、 `log_file`オプションとして渡される値として`stdout`または`stderr`を使用できます。

Herokuのように、通常はエージェント設定ファイルを使用しないホスティングサービスを使用する場合でも、このサブコマンドを使用して当社への接続をテストすることができます。Heroku の場合、ライセンスキーの情報は、New Relic アドオンを Heroku インスタンスに追加した際に Heroku が自動的に設定する環境変数に定義されます。

環境変数を使用してライセンス キーを定義するこの場合、接続テストを実行するには、エージェント構成ファイルへのパスの代わりに`config_file`オプションの値`-`を渡します。したがって、Heroku インスタンスでコマンドを実行するには、次を使用します。

```shell
heroku run newrelic-admin validate-config - stdout
```

この場合、ログ ファイルに`stdout`を指定したことに注意してください。それ以外の場合は、生成されたログ ファイルを個別に取得する必要があります。

初めてPythonエージェントをセットアップするとき、あるいは新しいホスト上で、データが問題なく報告されるかどうかをテストするために、このサブコマンドを使用することが推奨されます。詳細については、 [Testing the Python agent](/docs/python/testing-the-python-agent) を参照してください。

## run-program ... [#run-program]

`...`として指定された Python Web アプリケーションのコマンド ラインを実行しますが、起動時にエージェントを自動的に初期化します。

これは、Pythonエージェントを初期化するコードを追加するためにWebアプリケーションを手動で変更することなく、Python Webアプリケーションを起動するためのショートカット方法です。この方法は、PythonウェブフレームワークやWSGIサーバーを使用し、WSGIアプリケーションのエントリーポイントをラップするために自動的にインスツルメンテーションが追加されるような状況であれば、どのような場合でも使用することができます。言い換えれば、エージェントの初期化コードのみを追加する必要がある状況です。

この方法を使用する場合のエージェント構成は、2 つの異なる方法で提供できます。完全なエージェント構成ファイルを使用する場合、その構成の場所は`NEW_RELIC_CONFIG_FILE`環境変数によって提供されます。

例えばgunicornを使っていたとしたら、次のようになります。

```ini
NEW_RELIC_CONFIG_FILE=newrelic.ini newrelic-admin run-program gunicorn wsgi:application
```

また

```shell
NEW_RELIC_CONFIG_FILE=newrelic.ini
export NEW_RELIC_CONFIG_FILE

newrelic-admin run-program gunicorn wsgi:application
```

`NEW_RELIC_CONFIG_FILE`環境変数を使用して構成ファイルの場所を指定する場合、次の追加の環境変数を設定して、構成ファイルの処理方法をカスタマイズできます。

`NEW_RELIC_ENVIRONMENT`: 特定のデプロイメント環境の名前。指定すると、構成ファイル内の別の展開セクションから追加のオーバーライド構成が読み取られます。特定のデプロイメント環境の構成ファイルのセクションは、 `newrelic:environment`という名前にする必要があります。ここで、 `environment`は、この環境変数によって指定されている名前に置き換えられます

完全なエージェント設定ファイルの代わりに、主要なエージェント設定情報のみを提供する環境変数を設定することもできます。この場合に設定可能な環境変数は以下の通りです。

* `NEW_RELIC_LICENSE_KEY` - あなたのNew Relic

  <InlinePopover type="licenseKey"/>

  。

* `NEW_RELIC_APP_NAME` - UI でデータをレポートするアプリケーションの名前。定義されていない場合、これはデフォルトで`Python Application`になります。

* `NEW_RELIC_LOG` - エージェント ログに使用されるファイルへのパス。定義されていない場合、ログは記録されません。`stdout`または`stderr`に設定して、ロギングを標準出力または標準エラーに出力して処理することもできます。

* `NEW_RELIC_LOG_LEVEL` - エージェントによってログが出力されるレベル。定義されていない場合、デフォルトは`info`です。可能な値は、詳細の昇順で次のとおりです: `critical` 、 `error` 、 `warning` 、 `info`および`debug` 。

Heroku でアプリケーションをホストするときには、個別の環境変数が使用されます。 New Relic アドオンを追加すると、環境変数は Heroku 環境によって適切に自動的に設定されます。 したがって、Heroku を使用する場合、 <DNT>**Procfile**</DNT>からこのオプションを指定して`newrelic-admin`コマンドを使用するときは、上記の環境変数を設定する必要はありません。

ラップされたプログラムは、Python エージェント パッケージと`newrelic-admin`スクリプトがインストールされたものと同じ Python インストールまたは仮想環境を使用している必要があることに注意してください。そうでない場合、ラッパー スクリプトは影響を与えず、 `newrelic` Python パッケージが見つからないため、Python インタープリターの起動時にエラーが発生することさえあります。

`sudo` を使用してWSGIを別のユーザーとして起動する場合、デフォルトの <DNT>**sudo**</DNT> 設定では通常、<DNT>**sudo**</DNT> が実行されるシェルのユーザー環境変数が無視されることに注意してください。 この場合、特定の環境変数を渡すことができるように<DNT>**sudoers**</DNT>設定を変更する必要があります。 または、環境変数を設定し、 `newrelic-admin`で WSGI アプリケーションを実行するシェル スクリプトを作成します。 WSGI アプリケーションを別のユーザーとして起動するには、WSGI アプリケーションで直接実行するのではなく、そのスクリプトで<DNT>**sudo**</DNT>を実行します。

<DNT>**supervisord**</DNT>構成内の環境変数設定が正しく渡されないという問題が発生した場合、 <DNT>**supervisord**</DNT>を使用するときに、追加のラッパー スクリプトを使用して環境変数を設定し、 `newrelic-admin`で WSGI アプリケーションを実行する必要がある場合もあります。

## run-python ... [#run-python]

`...`として指定された引数を使用して、 `newrelic-admin`がインストールされている Python インストールまたは仮想環境から`python`実行可能ファイルを実行しますが、起動時にエージェントを自動的に初期化します。

これは、Pythonエージェントを初期化するコードを追加するためにWebアプリケーションを手動で変更することなく、Python Webアプリケーションを起動するためのショートカット方法です。この方法は、PythonウェブフレームワークやWSGIサーバーを使用し、WSGIアプリケーションのエントリーポイントをラップするために自動的にインスツルメンテーションが追加されるような状況であれば、どのような場合でも使用することができます。言い換えれば、エージェントの初期化コードのみを追加する必要がある状況です。

上記の`run-program`サブコマンドと同様に、環境変数を使用して Python エージェントを構成します。たとえば、 `python`実行可能ファイルを直接使用している場合は、次のように言えます。

```ini
NEW_RELIC_CONFIG_FILE=newrelic.ini newrelic-admin run-python wsgi.py
```

また

```shell
NEW_RELIC_CONFIG_FILE=newrelic.ini 
export NEW_RELIC_CONFIG_FILE 

newrelic-admin run-python wsgi.py
```

## license-key config_file \[log_file]. [#license-key]

使用される予定のライセンスキーを出力します。これは、実際のWSGIアプリケーションが起動する前のスタートアップスクリプトで使用することができ、正しい値が使用されているかどうかを検証する目的でライセンスキーを記録します。

エージェント設定ファイルと一緒に使用することができます。

```shell
newrelic-admin license-key newrelic.ini
```

また

環境変数を使用してライセンス キーを設定する場合は、構成ファイルの名前として`-`を使用します。

```shell
NEW_RELIC_LICENSE_KEY='YOUR-LICENSE-KEY'
export NEW_RELIC_LICENSE_KEY 

newrelic-admin license-key -
```

という形で出力されます。

```ini
license_key = 'YOUR-LICENSE-KEY'
```

エージェントの設定ファイルにライセンスキーが見つからない場合や、ユーザーの環境変数からライセンスキーが検出されない場合は、次のように出力されます。

```ini
license_key = None
```

## network-config config_file \[log_file]を参照してください。 [#network-config]

使用されるネットワーク構成を出力します。これは、実際のWSGIアプリケーションが起動する前のスタートアップスクリプトで、正しい値が使用されているかどうかを検証する目的で、ネットワーク構成をログに記録するために使用することができます。

エージェント設定ファイルと一緒に使用することができます。

```shell
newrelic-admin network-config newrelic.ini
```

また

環境変数を使用してプロキシ情報を設定する場合は、構成ファイルの名前として`-`を使用します。

```shell
NEW_RELIC_PROXY_HOST=proxy.example.com
export NEW_RELIC_PROXY_HOST

NEW_RELIC_PROXY_PORT=8888
export NEW_RELIC_PROXY_PORT

newrelic-admin network-config -
```

という形で出力されます。

```ini
host = 'collector.newrelic.com'
port = 0
proxy_host = 'proxy.example.com'
proxy_port = 8888
proxy_user = None
proxy_pass = None
ssl = True
```

ポートの値`0`は、データ コレクターとの通信に SSL 接続が使用されているかどうかに基づいて、ポート番号`80`または`443`が自動的に選択されることを示します。

## local-config config_file \[log_file]. [#local-config]

ビルトインのデフォルト、環境変数、および任意のエージェント設定ファイルに基づいて、ローカルのエージェント設定を出力します。この情報は、エージェント起動時の問題をデバッグする際に、テクニカルサポートから要求されることがあります。これは、エージェント設定ファイルと一緒に使用することができます。

```shell
newrelic-admin local-config newrelic.ini
```

また

環境変数を使用して設定を行う場合は、構成ファイルの名前として`-`を使用できます。

```shell
newrelic-admin local-config -
```

## server-config config_file \[log_file]を指定します。 [#server-config]

特定のアプリケーションの完全な設定を出力します。これは、特定のアプリケーションのための [サーバー側の設定](/docs/agents/manage-apm-agents/configuration/configure-agent#ssc) によって上書きされる、ローカルエージェントの設定になります。この情報は、エージェント起動時の問題をデバッグする際に、テクニカルサポートから要求されることがあります。

エージェント設定ファイルと一緒に使用することができます。

```shell
newrelic-admin server-config newrelic.ini
```

また

環境変数を使用して設定を変更する場合は、構成ファイルの名前として`-`を使用できます。

```shell
newrelic-admin server-config -
```

サーバー側の設定を取得するために、このスクリプトは、設定によって定義された特定のアプリケーションのためのエージェント登録を強制します。そのアプリケーションがAPMのユーザーインターフェイスにまだ表示されていない場合、そのためのエントリが作成されますが、そのアプリケーションに対するメトリックデータは報告されません。

## record-deploy config_file description [#record-deploy]

これは、アプリケーションのデプロイメントを記録するための New Relic REST API のラッパーです。また、REST API を通じて直接 [デプロイメントを記録することもできます](/docs/apm/new-relic-apm/maintenance/recording-deployments) 。

コマンドを使用するには

1. [セクションに次のような行を追加して](/docs/apis/rest-api-v2/requirements/api-keys)、[ エージェント構成ファイ](/docs/agents/python-agent/installation-configuration/python-agent-configuration#agent-configuration-file)ル `newrelic.ini`( ) に API キ`[newrelic]`ー を追加します。

   ```ini
   api_key=substitute-your-api-key-here
   ```

2. コマンド ラインから`newrelic-admin`コマンドを呼び出します。(構成ファイルに追加しないでください。) 次のサブコマンド構造を使用します。

   ```shell
   newrelic-admin record-deploy config_file description [revision changelog user]
   ```

このサブコマンドには2つの必須引数があります。

* `config_file`: 構成ファイル名へのパス
* `description`: デプロイメントを説明または識別するテキスト。たとえば、Git コミット コメント

また、3つのオプションの引数があります。

* `revision`: デプロイされている特定のリビジョンを識別します
* `changelog`: 変更内容の詳細なログを提供します
* `user`: 展開の責任者を特定します

## その他の高度なヒント [#advanced-tips]

以下に示すのは、Adminスクリプトを実行するにあたっての詳細手順です。

<CollapserGroup>
  <Collapser
    id="multi-line"
    title="複数のラインにわたってAdminスクリプトコマンドを分割する"
  >
    スクリプトを実行する前に、`NEW_RELIC_CONFIG_FILE`環境変数を別々に設定してエクスポートできます。必ず、`YOUR_COMMAND_OPTIONS`の既存のコマンドオプションを置き換えてください。

    ```shell
    NEW_RELIC_CONFIG_FILE=newrelic.ini
    export NEW_RELIC_CONFIG_FILE

    newrelic-admin run-program YOUR_COMMAND_OPTIONS
    ```

    起動コマンドが`exec`を使用する場合、環境変数の設定とAdminスクリプトの実行を区別してください。必ず、`YOUR_COMMAND_OPTIONS`の既存のコマンドオプションを置き換えてください。

    ```shell
    NEW_RELIC_CONFIG_FILE=newrelic.ini
    export NEW_RELIC_CONFIG_FILE

    exec newrelic-admin run-program YOUR_COMMAND_OPTIONS
    ```

    <DNT>**supervisord**</DNT>などのプロセス管理システムを使用する場合、環境変数を別の構成設定で設定する必要があるため、コマンドと同じ行で設定することはできません。

    たとえば、 <DNT>**supervisord**</DNT>では次のように使用できます。 `YOUR_COMMAND_OPTIONS`には必ず既存のコマンド オプションを置き換えてください。

    ```ini
    [program:warpdrive]
    command = newrelic-admin run-program YOUR_COMMAND_OPTIONS
    environment = NEW_RELIC_CONFIG_FILE=newrelic.ini
    ```
  </Collapser>

  <Collapser
    id="run-program"
    title="Python実行ファイルでAdminスクリプトを実行する"
  >
    実行するコマンドが`python`の実行ファイルであり、それが`python main.py`としてPythonコードファイル上で直接実行されている場合、以下のいずれかを使用してください。

    ```shell
    newrelic-admin run-program python main.py

    newrelic-admin run-python main.py
    ```

    `run-python`を使用すると、 <DNT>**newrelic-admin**</DNT>がインストールされている Python インストレーションまたは仮想環境にインストールされているのと同じ`python`実行可能ファイルが常に使用されます。
  </Collapser>

  <Collapser
    id="location-admin"
    title="newrelic-adminのロケーションに関するメモ"
  >
    実行する<DNT>**newrelic-admin**</DNT>プログラムは、アプリケーションが使用しているのと同じ Python インストレーションまたは仮想環境からのものである必要があります。 異なる Python インストレーションのプログラム/コンポーネントを混在させることはできません。 これを実行すると、エージェントは正しく実行されません。

    仮想環境で<DNT>**supervisord**</DNT>などのプロセス管理システムを使用する場合は、次の設定を使用できます。

    ```ini
    [program:warpdrive]
    command = newrelic-admin run-program  
    environment = PATH="/path/to/python/app/venv/bin",NEW_RELIC_CONFIG_FILE="newrelic.ini"
    directory = /path/to/python/app
    user = www-data
    ```

    `PATH`環境変数が示すパスは、仮想環境で使用するものと同一のパスである点に注意してください。

    `newrelic-admin`のこれらのオプションと、ユーザー環境変数に基づくさまざまな構成オプションの詳細については、 `run-program`および`run-python`オプションの詳細なドキュメントを参照してください。
  </Collapser>
</CollapserGroup>
