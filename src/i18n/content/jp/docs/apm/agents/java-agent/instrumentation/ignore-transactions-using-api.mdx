---
title: 特定のトランザクションを無視する
tags:
  - Agents
  - Java agent
  - Instrumentation
metaDescription: How to set up New Relic's Java agent to ignore specific web transactions (including Apdex scores) using the API.
freshnessValidatedDate: never
translationType: machine
---

New Relic for Java には、特定のトランザクションを無視するための複数の方法が用意されています。このドキュメントでは[、Java エージェント API アノテーション](/docs/agents/java-agent/custom-instrumentation/java-agent-api)と`ServletRequest`を使用してトランザクションを無視する方法について説明します。

`ignoreTransaction()` [API 呼び出し](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html)と[XML インストルメンテーション ファイルを](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation-xml-examples#file-format)使用してトランザクションを無視することもできます。

<Callout variant="important">
  トランザクションを無視すると、アプリケーションのソースコードが変更され、 [XML インストゥルメント ファイルを](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation-xml-examples#file-format)使用する場合は常にアプリケーションが再コンパイルされます。 <DNT>**unless**</DNT> コードを操作できない場合は、XML を使用してトランザクションを無視します。
</Callout>

## ServletRequestによるWebトランザクションの無視 [#servlet]

Web トランザクションを無視するには、リクエスト中に`com.newrelic.agent.IGNORE`という名前の[`ServletRequest`](http://docs.oracle.com/javaee/6/api/javax/servlet/ServletRequest.html)属性を`true`に設定します。

```java
request.setAttribute("com.newrelic.agent.IGNORE", true);
```

無視するURLを指定するには、その属性を設定するサーブレット [フィルター](http://docs.oracle.com/javaee/6/api/javax/servlet/Filter.html) を作成し、無視したいサーブレットにフィルターを適用します。特定のURLを無視する必要がある場合は、フィルタはリクエストURIにアクセスすることができます。

## アノテーション付きのトランザクションを無視する [#annotation]

アノテーションを使ったトランザクションを無視するようにJavaエージェントに指示する。

1. アプリケーションのコードまたはアプリケーションと統合できるライブラリで、 `NewRelicIgnoreTransaction`というアノテーションを定義します。

   ```java
   @Target(ElementType.METHOD)
   @Retention(RetentionPolicy.RUNTIME)
   public @interface NewRelicIgnoreTransaction {
   }
   ```

2. 無視したいメソッドやクラスにアノテーションを適用します。例えば、以下のようになります。

   ```java
   @NewRelicIgnoreTransaction
   public void methodToBeIgnored() {
   }
   ```

トランザクションが`@NewRelicIgnoreTransaction`アノテーションの付いたメソッドまたはクラスを呼び出した場合、そのトランザクションは無視されます。これは、全体的な Apdex スコアには寄与しないことを意味します。また、トランザクション追跡およびパフォーマンス データは報告されません。

## apdexは無視するが、tracesは無視しない [#apdex]

また、トランザクションがApdexスコアに寄与しないようにしても、トランザクションに使用することができます。これにより、特に長いトランザクションがApdexスコアを歪めてしまうことを防ぐことができます。トランザクションがApdexのスコアに寄与しないようにするには。

1. アプリケーションのコードまたはアプリケーションと統合できるライブラリで、 `NewRelicIgnoreApdex`というアノテーションを定義します。

   ```java
   @Target(ElementType.METHOD)
   @Retention(RetentionPolicy.RUNTIME)
   public @interface NewRelicIgnoreApdex {
   }
   ```

2. 無視したいメソッドやクラスにアノテーションを適用します。例えば、以下のようになります。

   ```java
   @NewRelicIgnoreApdex
   public void ignoreApdexOfThisMethod() {
   }
   ```

トランザクションが`@NewRelicIgnoreApdex`アノテーションの付いたメソッドまたはクラスを呼び出した場合、そのトランザクションは報告されますが、全体的な Apdex スコアには寄与しません。
