---
title: セキュリティとトランザクション・トレース
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: An explanation of the data security features for transaction traces in APM.
freshnessValidatedDate: never
translationType: machine
---

APM [トランザクショントレース](/docs/apm/transactions/transaction-traces/transaction-traces) は、お客様のアプリケーションの [トランザクション](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction) に関する詳細なデータを収集します。トランザクショントレースは、アプリケーションから詳細なデータを収集するため、セキュリティ上の問題が生じる可能性があります。このドキュメントでは、データセキュリティのニーズに合わせてトランザクショントレースを設定する方法を説明します。

## データベースクエリ [#database]

トランザクショントレースによって収集されるデータベースのクエリタイプは、New Relic の言語エージェントによって異なります。クエリには機密性の高い値が含まれている可能性があるため、クエリの収集はセキュリティやプライバシーに関わる可能性があります。

データベース・クエリ・コレクションは、3つの異なるセキュリティ設定でカスタマイズできます。

* <DNT>
    **Obfuscated**
  </DNT>

  : これがデフォルト値です。 この設定により、クエリから文字列リテラルと数値シーケンスが削除され、 `?`文字に置き換えられます。 たとえば、クエリ`select * from table where ssn='123-45-6789'`は`select * from table where ssn=?`になります。

* <DNT>
    **Off**
  </DNT>

  : クエリの収集は完全にオフになっています。

* <DNT>
    **Raw**
  </DNT>

  : 完全なクエリ データ収集がデータ セキュリティやユーザーのプライバシーに影響を与えないと確信できる場合は、設定を`Raw`に変更して、すべてのクエリ値を記録することができます。

[トランザクション追跡の](/docs/apm/transactions/transaction-traces/configure-transaction-traces)構成で説明されているように、 `Record SQL`設定を使用してデータベース クエリ コレクションを編集できます。

## HTTPリクエストの属性とパラメータ [#http-params]

HTTP リクエスト データの収集により、潜在的に機密性の高いデータが公開される可能性があります。 New Relic HTTP リクエスト <DNT>**attributes**</DNT> 中に収集されたキー値データを呼び出します。 デフォルトでは、属性のコレクションは、機密データのソースではない基本的な HTTP 情報 (応答コードやホストなど) のみに制限されています。これらは、New Relic が[<DNT>**agent attributes**</DNT>](/docs/agents/manage-apm-agents/agent-data/agent-attributes)と呼ぶ基本属性のグループの一部です。

データセキュリティ上の理由から、ユーザー固有のパラメーターを含むその他の属性の収集は、デフォルトでは無効になっています。特定のHTTP属性やカスタム属性の収集を有効/無効にする方法については、 [Configure transaction traces](/docs/apm/transactions/transaction-traces/configure-transaction-traces#config-attributes) を参照してください。

## ハイセキュリティモード [#high-security]

New Relic のデフォルト設定は高いレベルのセキュリティを提供します。 アカウント内のすべてのアプリケーションに対して最も安全な設定を強制するには、 <DNT>**high-security mode**</DNT>を使用できます。 このモードでは、管理者とユーザーがアカウントをどのように構成しても、最も安全な設定が強制され、上書きできないようになります。 詳細については、 [「高セキュリティ モード」](/docs/agents/manage-apm-agents/configuration/high-security-mode)を参照してください。
