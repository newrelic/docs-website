---
title: セキュリティの脆弱性で識別されたJavaエージェント
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
freshnessValidatedDate: never
translationType: machine
---

## 問題

セキュリティスキャンが実行されると、New Relic Javaエージェント（ `newrelic.jar` ）の脆弱性が報告されます。

## 原因

どのソフトウェア製品にもセキュリティ上の脆弱性が存在する可能性がありますが、New Relic Java エージェントはセキュリティ製品によって誤って識別される可能性があります。ファイル内の特定の文字列パターンをスキャンするセキュリティ製品は、エージェントの一部であるインスツルメンテーション モジュールに脆弱なライブラリとして誤ってフラグを付ける可能性があります。

これらのインスツルメンテーション モジュールは、インストルメンテーション用に設計されたソフトウェア フレームワークとそのバージョンにちなんで名付けられた JAR ファイルです。これらにはフレームワークのコードは含まれませんが、同じ名前のクラスが含まれる可能性があります。一部のセキュリティ スキャン ツールは、これらの名前/バージョンを検出し、それが単なる計測モジュールである場合に、実際のソフトウェア フレームワークそのものであると解釈します。

これらは、 `instrumentation`パッケージの`newrelic.jar`内、または`instrumentation-security`パッケージの`newrelic-security-agent.jar`内にあります。

`newrelic.jar`または`newrelic-security-agent.jar`内の jar ファイルに関する警告は誤検知であるため、抑制する必要があります。

## 解決

[New Relic](https://github.com/newrelic/newrelic-java-agent/tree/main/instrumentation) `instrumentation` `instrumentation-security` `newrelic.jar` `newrelic-security-agent.jar` [New Relic SecurityAgent for Java](https://github.com/newrelic/csec-java-agent/tree/main/instrumentation-security) 。

たとえば、 [github.com / jeremylong / DependencyCheck](https://github.com/jeremylong/DependencyCheck)の`DependencyCheck`プロジェクトで発見された誤検知は、次の方法で抑制できます。

```jar
<suppress>
    <notes><![CDATA[newrelic-agent false positives due to the instrumentation package]]></notes>
    <filePath regex="true">.*newrelic.*\.jar[\\\/]instrumentation.*\.jar</filePath>
    <cpe regex="true">.*</cpe>
</suppress>
```

誤検知を防ぐための適切な設定については、セキュリティスキャンベンダーにご相談ください。
