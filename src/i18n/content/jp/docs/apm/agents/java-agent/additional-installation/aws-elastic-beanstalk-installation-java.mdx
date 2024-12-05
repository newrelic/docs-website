---
title: Java版AWS Elastic Beanstalkのインストール
tags:
  - Agents
  - Java agent
  - Additional installation
metaDescription: Directions for installing the New Relic Java agent with Elastic Beanstalk.
freshnessValidatedDate: never
translationType: machine
---

あなたが[<DNT>AWS Elastic Beanstalk</DNT>](http://docs.amazonwebservices.com/elasticbeanstalk/latest/gsg/)ユーザーの場合、Java エージェントには追加の設定が必要です。

## 前提条件

設定を完了する前に、まず

* サポートされている [Amazon Web Services アカウントの作成](http://aws.amazon.com/elasticbeanstalk/).
* Create a [New Relic account](http://newrelic.com/signup).
* [Javaエージェントのダウンロードとインストール](/docs/agents/java-agent/installation/java-agent-manual-installation).

<DNT>AWS Elastic Beanstalk</DNT>で Java エージェントのインストールを完了するには、プラットフォームの手順に従います。

## Tomcat プラットフォーム

<DNT>AWS Elastic Beanstalk Tomcat</DNT>プラットフォームでデプロイされたアプリケーションの場合:

1. WAR ファイルで、 `newrelic.jar`ファイルと`newrelic.yml`ファイルを`WEB-INF/lib/`に追加します。

2. 新しいWARファイルをリパッケージして、新しいアプリケーションまたは以前のアプリケーションのアップデートとしてデプロイします。

3. 基盤となる EC2 インスタンスを見つけて接続します。接続したら、このコマンドを使用して`newrelic.jar`ファイルへのパスを見つけます。一度に 1 つのディレクトリを検索してください。必要に応じて`/var`または`/usr`を使用してください。

   ```sh
   sudo find /var -name "newrelic.jar"
   sudo find /usr -name "newrelic.jar"
   ```

   `-javaagent`フラグを JVM に渡すには:

4. AWSコンソールで「Elastic Beanstalk」を開きます。

5. 該当する地域を選択します。

6. 環境を選択してください。

7. 左側のペインで、 <DNT>**Configurations**</DNT>を選択します。

8. <DNT>**Updates, monitoring, and logging**</DNT>までスクロールし、右上隅の<DNT>**Edit**</DNT>を選択します。

9. <DNT>**Platform Software**</DNT>までスクロールし、次の行を<DNT>**JVM Options**</DNT>フィールドに追加します。

   ```sh
   -javaagent:/full/path/to/newrelic.jar
   ```

10. <DNT>**Apply**</DNT>を選択して保存します。

<DNT>Elastic Beanstalk</DNT>によって環境が更新されます。

## Java SEプラットフォーム

<DNT>AWS Elastic Beanstalk Java SE</DNT>プラットフォームでデプロイされたアプリケーションの場合:

1. `newrelic.jar`ファイルと`newrelic.yml`ファイルをプロジェクト ( `opt/newrelic`という名前のサブディレクトリなど) に追加します。

2. Java SE アプリケーションでカスタム JVM 引数を使用するには、アプリケーションのソース バンドルのルートに`Procfile`を含めることをお勧めします。詳細については[、Java SE のドキュメントを](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/java-se-platform.html)参照してください。

   `-javaagent`フラグを`Procfile`の JVM 引数として渡します。

   ```makefile
   web:java -javaagent:path/from/bundle/root/to/newrelic.jar -jar <your-application>.jar
   ```

3. ソースバンドルを再パッケージし、Elastic Beanstalk にデプロイします。
