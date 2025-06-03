---
title: 無限のトレーシングJava 7および8用のSSLを設定する
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: 'For New Relic Infinite Tracing, how to implement a special configuration of Java Cryptographic Extensions (JCE) for certain older versions of Java.'
freshnessValidatedDate: never
translationType: machine
---

Infinite Tracingでは、特定の古いバージョンのJavaに対してJava Cryptographic Extensions（JCE）の特別な設定が必要です。このドキュメントでは、このような場合のJavaの設定方法に関するガイドラインを提供しています。

<Callout variant="tip">
  セキュリティとパフォーマンスのために、New Relic は最新の Java 8 アップデートにアップグレードすることを強く推奨します。HotSpotベースのJVMの場合、8u251以降は以下のいずれの手順も必要ありません。
</Callout>

## Java Cryptographyを設定するタイミング [#when-configure]

以下のすべての条件を満たす場合は、この手続きを行う必要があります。

* Infinite Tracingを導入しています。

* 使用しているJVMがApplication-Layer Protocol Negotiation (ALPN)をサポートしていません。New Relic は、これらの JVM が ALPN をサポートしておらず、設定が必要であることを確認しました。

  * Oracle Java 7

  * アップデート251より前のOracle Java 8

  * アップデート252より前のOpenJDK Java 8

    <Callout variant="important">
      New Relicでは、上記のJVMがALPNサポートを欠いていることのみを確認しています。お使いのJVMにALPNサポートがあるかどうかは、ベンダーに確認する必要があります。
    </Callout>

## アプリケーションサーバー

Tomcat、WebSphere、Weblogicなどのアプリケーションサーバーを使用している場合は、アプリケーションサーバーにJava Cryptography Extension（JCE）を追加する方法について、アプリケーションサーバーのドキュメントを参照してください。

## Oracle JVMのエクスポートポリシーの設定 [#export-policy]

古い Oracle JVM では、JCE を有効にするために追加のアップデートが必要です。ダウンロードと手順については、[この Oracle TechNote](https://www.oracle.com/java/technologies/javase-jce-all-downloads.html) を参照してください。

## HotSpot JVMでのConscryptの設定 [#conscrypt]

New Relic は、OpenJDK Java 8 と Conscrypt のテストに成功しました。以下を完了します。

1. オペレーティング システムに対応する [適切な Conscrypt jar](https://github.com/google/conscrypt/#download) をダウンロードします。

2. Conscrypt jar を`JAVA_HOME/jre/lib/ext`にコピーします。このディレクトリはすでに存在しているはずですが、存在しない場合は、 `JAVA_HOME`の下にある`ext`という名前のディレクトリを探します。

3. ファイル`JAVA_HOME/jre/lib/security/java.security`を編集します。

4. `security.provider`で始まる行の下で、最後の数値を増分し、値を`org.conscrypt.OpenSSLProvider`に設定します。たとえば、最後のエントリが`security.provider.10`の場合は、次の行を追加します。

   ```
   security.provider.11=org.conscrypt.OpenSSLProvider
   ```

## Infinite Tracingの設定完了 [#return-to-distributed-tracing]

これらの予備的な設定が終わったら、 [Language agents に戻ります。Enable distributed tracing](/docs/understand-dependencies/distributed-tracing/enable-configure/enable-distributed-tracing) 、Infinite Tracingの設定を終了します。
