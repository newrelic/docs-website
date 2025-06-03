---
title: C SDK를 사용한 거래 계측
metaDescription: Learn how to instrument transactions in your C application so you can monitor them with New Relic.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="EOL 공지"
>
  2022년 4월부터 C SDK 기능을 지원하지 않습니다. 자세한 내용은 [지원 포럼 게시물 을](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744)참조하십시오.
</Callout>

C SDK [를](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) 사용하여 C 라이브러리를 가져올 수 있는 언어를 사용하는 Linux의 모든 예외를 모니터링할 수 있습니다. 뉴렐릭 기능을 추가하여 소스 코드에서 수동으로 제거한 후 [<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)뉴렐릭 UI 의 페이지 에서 데이터를 볼 수 있습니다.

## 거래 계측 [#c-agent-txn]

New Relic UI에서 모니터링할 수 있도록 트랜잭션을 계측하려면 트랜잭션 주변에서 계측을 시작 및 중지하는 New Relic 함수를 래핑합니다. 사용하는 기능은 [웹 또는 비웹 트랜잭션](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm#types) 을 계측할 것인지 여부에 따라 다릅니다.

1. 모니터하려는 프로세서에 즉시 다음 코드를 추가하세요. <DNT>**before**</DNT>

   웹 거래의 경우:

   ```c
   newrelic_txn_t *txn;
   /* ... */
   txn = newrelic_start_web_transaction(app, "NAME_YOUR_TRANSACTION");
   ```

   웹이 아닌 거래의 경우:

   ```c
   newrelic_txn_t *txn;
   /* ... */
   txn = newrelic_start_non_web_transaction(app, "NAME_YOUR_TRANSACTION");
   ```

2. 모니터링하려는 웹 또는 비웹 프로세서 바로 뒤에 다음 코드를 추가합니다.

   ```c
   newrelic_end_transaction(&txn);
   ```

## 기기 세그먼트 및 오류 [#segments-errors]

세그먼트는 트랜잭션을 구성하는 기능 및 호출입니다. 거래를 계측한 후 다음을 수행할 수 있습니다.

* 해당 트랜잭션 동안 호출된 함수에 대한 추가 데이터를 원하는 경우 트랜잭션의 [세그먼트를 계측](/docs/instrument-segments-c-agent) 합니다.
* New Relic UI를 사용하여 트랜잭션 중에 발생하는 오류를 모니터링할 수 있도록 [오류를 계측합니다](/docs/instrument-errors-c-agent) .
