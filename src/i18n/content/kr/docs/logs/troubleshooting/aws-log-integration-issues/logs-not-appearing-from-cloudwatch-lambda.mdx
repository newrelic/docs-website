---
title: Lambda를 통해 CloudWatch에서 로그가 나타나지 않음
type: troubleshooting
tags:
  - Logs
  - Log management
  - Troubleshooting
metaDescription: Troubleshooting tips if the Logs are not appearing from CloudWatch via Lambda.
freshnessValidatedDate: never
translationType: machine
---

## 문제

Lambda 통합 설정을 통해 CloudWatch의 쿠렐릭에 로그가 표시되지 않습니다.

## 해결책

가능한 이유와 해결책:

* 뉴렐릭 수집 볼륨 키가 유효하지 않을 수 있습니다. AWS 계정에서 <DNT>**CloudFormation stack &gt; Resources**</DNT> 의 논리 ID가 `NewRelicLogsLicenseKeySecret` 인 리소스를 찾아 키를 확인합니다.

* 추가로 디버깅하려면 <DNT>**CloudFormation Stack &gt; Resources &gt; NewRelicServerlessLogForwarder (Lambda Function) &gt; Configuration &gt; Environment Variables**</DNT> 으로 이동하여 `DEBUG_MODE` 보고서를 true로 설정하세요. 그런 다음 Lambda 함수의 CloudWatch 로그를 확인하여 디버그 로그를 가져옵니다.

* 해당 이벤트는 완전히 실패였을 수도 있습니다. 확인하려면 <DNT>**CloudFormation Stack &gt; Resources &gt; NewRelicLogForwarderDLQ**</DNT> 로 이동하거나 AWS SQS에서 DLQ를 검색하여 DLQ 리소스를 조사합니다.

* 뉴렐릭 지역과 Lambda 함수 또는 Firehose에 제공되는 수집 볼륨 키가 일치하지 않을 수 있습니다. 확인하고 일치시켜 주세요.

  예를 들어, 뉴렐릭 지역이 EU인 경우 EU 지역에서 뉴렐릭 수집 인스턴스 키를 제공합니다.

* `NewRelicServerlessLogForwarder` 에 CloudWatch 트리거가 없을 수 있습니다. 중첩된 CloudFormation 스택의 출력을 살펴봅니다.