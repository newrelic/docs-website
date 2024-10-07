---
title: アプリケーションの自動ネーミング
tags:
  - Agents
  - Java agent
  - Configuration
metaDescription: How to configure New Relic's Java agent to report data for individual web apps to their own application in APM.
freshnessValidatedDate: never
translationType: machine
---

アプリケーションに付けた名前は、New Relic のパフォーマンス指標を整理するのに役立ちます。

New Relic の Java エージェントは、単一の JVM 内のすべてのトランザクションとその他のメトリクスを、設定`app_name`の`newrelic.yml`で指定されたアプリケーション名にレポートします (アプリケーションの名前付けの詳細については、 [「Java アプリケーションに名前を付ける」](/docs/agents/java-agent/configuration/name-your-java-application)を参照してください)。`newrelic.yml`の`enable_auto_app_naming`を`true`に変更すると、アプリケーションにはコンテキスト、フィルター、サーブレット、またはリクエスト属性に応じた名前が付けられます。

この設定により、トランザクション、エラー、メトリクスを New Relic ユーザー インターフェースの他の適切なアプリケーションにレポートしながら、単一の JVM で複数の Web アプリケーションを実行できます。バックグラウンド タスクでは、引き続き`newrelic.yml`のデフォルトのアプリケーション名が使用されます。

<Callout variant="important">
  これらの設定変更を有効にするには、JVMの再起動が必要です。

  この設定はInfinite Tracingを有効にした場合には機能しません。
</Callout>

<Callout variant="caution">
  アプリの自動ネーミングを有効にすると、エージェントに取り込まれるデータ量が増加します。 [データ取り込みの警告と監視を行うには様々な方法があります](/docs/data-apis/manage-data/manage-data-coming-new-relic/) 。
</Callout>

## アプリケーション名のソース [#enable-auto-app-naming]

`enable_auto_app_naming`を`true`に設定すると、New Relic は次の情報ソースを使用してアプリケーションに名前を付けます。

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **App type**
        </DNT>
      </th>

      <th>
        <DNT>
          **Naming source**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        バックグラウンドタスク
      </td>

      <td>
        デフォルトのアプリケーション名 `newrelic.yml`
      </td>
    </tr>

    <tr>
      <td>
        Webトランザクション
      </td>

      <td>
        優先順位の高い順に並べています。

        * リクエスト属性（最優先）
        * サーブレットの初期化パラメーター
        * フィルターの初期化パラメーター
        * ウェブアプリケーションのコンテキストパラメーター
        * Webアプリのコンテキスト名（表示名）
        * Webアプリのコンテキストパス（最優先）
      </td>
    </tr>
  </tbody>
</table>

## リクエスト属性

`APPLICATION_NAME`リクエスト属性は、XML 内のどの設定よりも優先されます。この属性は、Web トランザクションのできるだけ早い段階で設定します。複数回呼び出された場合、最後の呼び出しによってアプリケーション名が決定されます。

<Callout variant="tip">
  `APPLICATION_NAME` ServletRequest でのみ動作します。
</Callout>

request属性を使用して、リクエストURIに基づいたきめ細かなアプリケーションの命名を行うこと。

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  ...
  String requestUri = httpServletRequest.getRequestURI();

  if (requestUri.startsWith("/my-special-request/")) {
      request.setAttribute("com.newrelic.agent.APPLICATION_NAME", "MySpecialWebApp");
  }
  ...
```

## サーブレットの初期化パラメーター [#servlet-init-param]

<DNT>**init parameters**</DNT>を使用して`web.xml`内の個々のサーブレットのアプリケーション名を設定するには:

```xml
<servlet>
  <servlet-name>SqlServlet</servlet-name>
  <servlet-class>test.SqlServlet</servlet-class>
  <init-param>
    <param-name>com.newrelic.agent.APPLICATION_NAME</param-name>
    <param-value>MyServletApp</param-value>
  </init-param>
</servlet>
```

エージェントは、呼び出して`init-param`の値を取得します。

```java
javax.servlet.ServletConfig#getInitParameter(String)
```

引数`com.newrelic.agent.APPLICATION_NAME`を使用します。

Web リクエストが複数のサーブレットを呼び出す場合、最初に終了したサーブレットの`init-param`が優先されます。`init-param`のないサーブレットは、Web アプリのデフォルトのアプリケーション名を使用します。

アプリケーション名を XML で宣言するだけでなく、 `javax.servlet.ServletRequest`に属性を保存してアプリケーション コードで設定することもできます。

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  ...
  request.setAttribute("com.newrelic.agent.APPLICATION_NAME", "MyWebApp");
  ...
```

## フィルターの初期化パラメーター [#filter-init-param]

Webアプリにサーブレットがない場合は、フィルタのinitパラメータを使うことができます。

```xml
<filter>
  <filter-name>SqlFilter</filter-name>
  <filter-class>test.SqlFilter</filter-class>
  <init-param>
    <param-name>com.newrelic.agent.APPLICATION_NAME</param-name>
    <param-value>MyFilterApp</param-value>
  </init-param>
</filter>
```

エージェントは、引数`com.newrelic.agent.APPLICATION_NAME`を指定して`javax.servlet.FilterConfig#getInitParameter(String)`を呼び出すことで、 `init-param`の値を取得します。アプリケーションの命名に関してはサーブレットがフィルターよりも優先されるため、フィルターの init パラメーターはサーブレットが呼び出されなかった場合にのみ使用されます。最初に終了するフィルタの`init-param`が優先されます。

## コンテキストパラメータ [#context-param]

コンテキストパラメーターを使ってアプリケーション名を設定するには

```xml
<context-param>
  <param-name>com.newrelic.agent.APPLICATION_NAME</param-name>
  <param-value>MyWebApp</param-value>
</context-param>
```

エージェントは、引数`com.newrelic.agent.APPLICATION_NAME`を指定して`javax.servlet.ServletContext#getInitParameter(String)`を呼び出すことでコンテキスト パラメータの値を取得します。context パラメータは、 `display-name`要素よりも優先されます。

## 表示名

`web.xml`の`display-name`要素を使用してアプリケーション名を決定するには:

```xml
<display-name>MyWebApp</display-name>
```

エージェントは、 `javax.servlet.ServletContext#getServletContextName()`を呼び出して`display-name`要素の値を取得します。

## コンテクストパス

`display-name`要素がなく、アプリ名の設定に他の上位階層メソッドが使用されていない場合、アプリケーション名は Web アプリのコンテキスト パスから取得されます。エージェントは、 `javax.servlet.ServletContext#getContextPath()`を呼び出してコンテキスト パスを取得します。

コンテキストパスは、リクエストのコンテキストを選択するために使用されるリクエストURIの部分です。コンテキストパスは、リクエストURIの中で常に最初に置かれます。例えば、以下のようになります。

次のようなURLを考えてみましょう。

```
http://example.com/newrelic-axis2-ws/getWeather
```

このURLに

* リクエスト URI は`/newrelic-axis2-ws/getWeather`です。
* コンテキスト パスは`/newrelic-axis2-ws`です。
* アプリケーションの名前は`newrelic-axis2-ws`です。
