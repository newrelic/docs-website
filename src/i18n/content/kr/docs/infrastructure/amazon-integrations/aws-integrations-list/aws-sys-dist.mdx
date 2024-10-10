---
title: AWS 시스템 관리자 총판
metaDescription: 'New Relic''s AWS System Manager Distributor monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: '2024-02-28T00:00:00.000Z'
translationType: machine
---

[AWS System Manager Distributor](https://docs.aws.amazon.com/systems-manager/latest/userguide/distributor.html)통합을 통해 한 번의 클릭으로 AWS EC2 인스턴스에 New Relic의 인프라 에이전트를 설치하십시오. 이 문서에서는 통합 기능, 활성화 방법 및 보고할 수 있는 데이터에 대해 설명합니다.

## 특징 [#features]

한 번의 클릭으로 다양한 AWS 인스턴스에서 원격 측정 데이터를 수집하고 New Relic으로 보냅니다. New Relic의 AWS System Manager Distributor 통합은 AWS 인스턴스에 인프라 에이전트를 설치하고 서비스를 빠르게 모니터링하고 수신 데이터를 쿼리하고 대시보드를 구축하여 시스템을 한 눈에 관찰할 수 있도록 합니다.

## 전제 조건 [#prereqs]

[AWS Systems Manager 설명서](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html) 에서 AWS가 권장하는 설정을 완료하여 역할, 사용자 계정, 권한 및 초기 리소스를 구성합니다.

## 통합 활성화 [#integration]

AWS Systems Manager 콘솔을 사용하여 <DNT>**New Relic infrastructure agent**</DNT> 배포자 패키지를 한 번 설치 또는 업데이트하거나 설치 일정을 설정할 수 있습니다.

* 일회성 설치를 구성하면

  <DNT>
    **Distributor package**
  </DNT>

  는 [AWS 시스템 관리자의 기능인 AWS 시스템 관리자 Run Command를](https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html) 사용하여 설치를 수행합니다.

* 패키지 설치 또는 업데이트를 예약할 때 Distributor는 [AWS Systems Manager State Manager를](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html) 사용하여 설치 또는 업데이트합니다.

New Relic은 또한 EC2 모니터링을 위한 자동화된 프로세스를 제공하며 [여기에서](/whats-new/2023/08/whats-new-08-08-automatic-ec2-monitoring-through-nr-agent/)찾을 수 있습니다.

## 에이전트 설치 또는 업데이트 [#install-update]

1. AWS 시스템 관리자 [콘솔을](https://console.aws.amazon.com/systems-manager) 엽니다. 탐색 창에서 <DNT>**Distributor**</DNT> 선택하고, <DNT>**Third party**</DNT> 선택하고, <DNT>**New Relic infrastructure agent**</DNT> 타일을 선택합니다.

2. 설치 모드를 선택하세요. <DNT>**New Relic infrastructure agent**</DNT> 패키지를 한 번 설치 또는 업데이트하거나 설치를 예약할 수 있습니다. <DNT>**Distributor packages**</DNT> 설치에 대한 자세한 내용은 [AWS 시스템 관리자 배포자 설명서를](https://docs.aws.amazon.com/systems-manager/latest/userguide/distributor-working-with-packages-deploy.html) 참조하십시오.

3. <DNT>**Action**</DNT> 에 대해 <DNT>**Install**</DNT> 선택합니다.

4. <DNT>**Installation type**</DNT> 의 경우 <DNT>**Uninstall and reinstall**</DNT> 중 하나를 선택합니다. 패키지가 완전히 제거된 다음 다시 설치됩니다. 재설치가 완료될 때까지 뉴렐릭 에이전트를 사용할 수 없습니다. <DNT>**In-place update**</DNT>. 업데이트 프로세스 내내 애플리케이션을 계속 사용할 수 있습니다.

5. <DNT>**Additional Arguments**</DNT> 에 아래 코드를 붙여넣으세요. `YOUR_NEWRELIC_LICENSE_KEY` [뉴렐릭 API 키로](/docs/apis/intro-apis/new-relic-api-keys) 바꾸세요.

   ```
   {
     "SSM_NR_LICENSE_KEY" : "YOUR_NEWRELIC_LICENSE_KEY"
   }
   ```

   샘플 변수는 아래와 같이 **Additional Arguments** \[추가 인수] 에 지정할 수도 있습니다.

   ```
   { "SSM_NR_LICENSE_KEY" : "YOUR_NEWRELIC_LICENSE_KEY",
    "SSM_NRIA_METRICS_NETWORK_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_PROCESS_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_STORAGE_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_SYSTEM_SAMPLE_RATE" : "SOME_INTEGER_VALUE", 
    "SSM_NRIA_METRICS_NFS_SAMPLE_RATE" : "SOME_INTEGER_VALUE" }
   ```

   지정하지 않으면 [기본값을](https://github.com/newrelic/infrastructure-agent/blob/master/assets/examples/infrastructure/newrelic-infra-template.yml.example) 사용합니다.

6. <DNT>**Targets**</DNT> 섹션에서 태그를 지정하거나 인스턴스 또는 장치를 수동으로 선택하거나 리소스 그룹을 지정하여 이 작업을 실행할 관리형 노드를 선택합니다. 목록에 관리형 노드가 표시되지 않으면 [다음 AWS 문서를](https://docs.aws.amazon.com/systems-manager/latest/userguide/troubleshooting-managed-instances.html) 참조하십시오.

7. <DNT>**Concurrency**</DNT> 에 대한 <DNT>**Rate Control**</DNT> 의 경우 동시에 명령을 실행하기 위한 목표, 숫자 또는 백분율을 지정합니다.

   <Callout variant="tip">
     태그 또는 리소스 그룹을 지정하여 대상을 선택했고 얼마나 많은 관리 노드가 대상인지 확실하지 않은 경우 백분율을 지정하여 동시에 문서를 실행할 수 있는 대상 수를 제한하십시오.
   </Callout>

8. <DNT>**Error threshold**</DNT> 의 경우, 관리 노드의 수 또는 백분율에서 실패한 후 다른 쿼리, 목표에서 명령 실행을 중지할 시기를 지정합니다. 예를 들어 세 개의 오류를 지정한 경우 네 번째 오류가 수신되면 Systems Manager는 명령 전송을 중지합니다. 명령을 계속 처리 중인 관리 노드에서도 오류가 전송될 수 있습니다.

9. <DNT>**Verify the installation**</DNT>. 설치를 실행한 후 명령 상태 영역에서 진행 상황을 확인하세요. 성공 상태가 표시되면 설치가 성공한 것입니다.

10. [UI](one.newrelic.com) 에서 앱 데이터를 살펴보세요.

## 구성 및 폴링 [#configure-polling]

[구성 옵션](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations) 을 사용하여 폴링 빈도를 변경하고 데이터를 필터링할 수 있습니다.

AWS 통합에 대한 [기본 폴링 정보](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) :

* New Relic 폴링 간격: 5분
* Amazon CloudWatch 데이터 간격: 1분 또는 5분

## 데이터 찾기 및 사용

블루렐릭 인프라 에이전트를 설치한 후 [인스턴스에서 들어오는 데이터 흐름을 조정하고 조정할 수 있습니다](/docs/infrastructure/infrastructure-monitoring/get-started/get-started-infrastructure-monitoring).

데이터를 찾는 방법에 대한 자세한 내용은 [AWS 통합 소개를](/docs/infrastructure/amazon-integrations/get-started/introduction-aws-integrations/#insights) 참조하세요.
