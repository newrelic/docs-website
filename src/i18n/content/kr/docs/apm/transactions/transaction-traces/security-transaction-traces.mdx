---
title: 보안 및 트랜잭션 추적
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: An explanation of the data security features for transaction traces in APM.
freshnessValidatedDate: never
translationType: machine
---

APM [트랜잭션 추적](/docs/apm/transactions/transaction-traces/transaction-traces) 은 애플리케이션의 [트랜잭션](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction) 에 대한 자세한 데이터를 수집합니다. 앱에서 자세한 데이터를 수집하기 때문에 트랜잭션 추적은 잠재적인 보안 문제가 될 수 있습니다. 이 문서에서는 데이터 보안 요구 사항에 맞게 트랜잭션 추적을 구성하는 방법을 설명합니다.

## 데이터베이스 쿼리 [#database]

트랜잭션 추적에 의해 수집되는 데이터베이스 쿼리 유형은 New Relic 언어 에이전트에 따라 다릅니다. 쿼리에 민감한 값이 포함될 수 있으므로 쿼리 수집은 잠재적인 보안 및/또는 개인 정보 보호 문제입니다.

세 가지 보안 설정을 사용하여 데이터베이스 쿼리 수집을 사용자 지정할 수 있습니다.

* <DNT>
    **Obfuscated**
  </DNT>

  : 기본값입니다. 이 설정은 쿼리에서 문자열 리터럴과 숫자 시퀀스를 제거하고 이를 `?` 문자로 바꿉니다. 예를 들어, 쿼리 `select * from table where ssn='123-45-6789'` 은 `select * from table where ssn=?` 가 됩니다.

* <DNT>
    **Off**
  </DNT>

  : 쿼리 수집이 완전히 꺼집니다.

* <DNT>
    **Raw**
  </DNT>

  : 전체 쿼리 데이터 수집이 데이터 보안이나 사용자 개인 정보 보호에 영향을 미치지 않는다고 확신하는 경우 설정을 `Raw` 으로 변경하여 모든 쿼리 값을 기록할 수 있습니다.

[트랜잭션 추적 구성](/docs/apm/transactions/transaction-traces/configure-transaction-traces) 에 설명된 `Record SQL` 설정을 사용하여 데이터베이스 쿼리 수집을 편집할 수 있습니다.

## HTTP 요청 속성 및 매개변수 [#http-params]

HTTP 요청 데이터 수집은 잠재적으로 민감한 데이터를 노출할 수 있습니다. 뉴렐릭은 HTTP 요청 중에 수집된 키/값 데이터 <DNT>**attributes**</DNT> 를 호출합니다. 기본적으로 속성 수집은 민감한 데이터(예: 응답 코드 및 호스트)의 소스가 아닌 기본 HTTP 정보로만 제한됩니다. 이는 뉴렐릭이 [<DNT>**agent attributes**</DNT>](/docs/agents/manage-apm-agents/agent-data/agent-attributes) 이라고 부르는 기본 속성 그룹의 일부입니다.

데이터 보안상의 이유로 사용자별 매개변수를 포함한 다른 속성의 수집은 기본적으로 비활성화되어 있습니다. 특정 HTTP 속성 및 사용자 지정 속성의 수집을 활성화/비활성화하는 방법에 대한 정보는 [트랜잭션 추적 구성](/docs/apm/transactions/transaction-traces/configure-transaction-traces#config-attributes) 을 참조하십시오.

## 높은 보안 모드 [#high-security]

뉴렐릭의 기본 설정은 높은 수준의 보안을 제공합니다. 계정의 모든 애플리케이션에 대해 가장 안전한 설정을 강제하려면 <DNT>**high-security mode**</DNT> 을 사용할 수 있습니다. 이 모드를 사용하면 관리자와 사용자가 계정을 어떻게 구성하든 가장 안전한 설정이 강제로 적용되고 재정의될 수 없습니다. 자세한 내용은 [높은 수준의 보안 모드를](/docs/agents/manage-apm-agents/configuration/high-security-mode) 참조하세요.
