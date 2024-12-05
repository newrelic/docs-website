---
title: 계정 설정 모범 사례
metaDescription: How to add accounts to your New Relic organization.
freshnessValidatedDate: never
translationType: machine
---

New Relic을 시작하기 전에 New Relic으로 보내려는 데이터를 어떻게 사용할 것인지 잠시 생각해 보는 것이 중요합니다. 여러 자회사가 있는 모회사를 관리하고 계십니까? 빠르게 성장하고 있으며 개발 프로세스의 모든 단계에서 애플리케이션을 모니터링해야 하는 소규모 조직이신가요? 계정을 사용하면 조직의 특정 요구 사항에 맞게 New Relic을 쉽게 사용자 정의할 수 있습니다.

New Relic의 계정 구조를 통해 다음을 수행할 수 있습니다.

* 데이터 수집 극대화
* 데이터를 체계적으로 정리하세요
* 스테이징 및 개발과 같은 여러 환경 모니터링
* 조직의 다양한 영역에 걸쳐 청구 관리
* 계정 수준에서 데이터 액세스 제어

이 문서는 계정 구조를 설정하는 과정을 안내합니다. 여러 계정을 만들려는 경우 데이터 수집을 시작하기 *전에* 계정을 만드는 것이 가장 좋습니다. New Relic을 애플리케이션에 연결한 후에는 기록 컨텍스트를 잃을 위험이 있으므로 변경하기가 더 어려울 수 있습니다. 여러 계정을 만들기 위해 기다리는 경우 가동 중지 시간을 경고할 가능성도 있습니다.

<Callout variant="tip">
  무료 또는 표준 버전을 사용하는 경우 하나의 계정만 사용할 수 있으므로 이 문서가 필요하지 않습니다. [Pro 또는 Enterprise](https://newrelic.com/pricing)로 변경하기로 결정한 경우 언제든지 이 페이지를 다시 방문하세요.
</Callout>

## 시작하기 전에 [#begin]

추가 계정 생성 결정에 중요한 몇 가지 용어를 숙지하시기 바랍니다.

* <DNT>**Organization**</DNT>: 조직은 New Relic 고객을 나타냅니다. 귀하의 New Relic 조직에는 계정, 사용자, 데이터가 포함되어 있습니다.
* <DNT>**Account**</DNT>: New Relic에 가입하시면 귀하의 조직에 자동으로 하나의 계정이 할당됩니다. 계정에는 여러 데이터 보고 소스가 있을 수 있습니다. 예를 들어 단일 계정에는 인프라 에이전트, APM 에이전트 및 기타 통합의 데이터 보고가 있을 수 있습니다. New Relic에 보고된 모든 데이터에는 해당 데이터가 어느 계정에 속해 있는지 알려주는 계정 ID가 필요합니다. 해당 ID는 API 호출과 같은 일부 계정별 작업에도 사용됩니다.
* <DNT>**User**</DNT>: 귀하의 조직에서 귀하의 [New Relic 사용자에게는](/docs/accounts/accounts-billing/new-relic-one-user-management/introduction-managing-users/) 자신의 임무 및 책임과 관련된 특정 계정에 대한 액세스 권한이 부여됩니다. 계정에 대한 사용자 액세스를 관리하려면 특정 계정의 특정 역할에 그룹 액세스 권한을 부여합니다. 당사의 사용자 관리 시스템을 사용하면 몇 개의 계정에 걸쳐 몇 가지 역할만 포함하는 상대적으로 간단한 설정이든, 여러 계정에 걸쳐 많은 역할이 포함된 복잡한 설정이든 상관없이 필요한 사용자 액세스 권한을 생성할 수 있습니다.

## 단일 계정 구조 [#single-account-structure]

New Relic에 가입하면 자동으로 조직이 생성됩니다. 수동으로 추가 계정을 만들지 않는 한 조직에는 하나의 계정이 포함됩니다. 하나의 계정이 많은 회사에 적합할 수 있으며 계정을 더 추가할 필요가 없을 수도 있습니다.

하나의 계정이 귀하에게 적합하다는 몇 가지 징후는 다음과 같습니다.

* 방대한 양의 데이터를 수집하고 있지 않습니다. 확실하지 않은 경우 [스프레드시트를](https://newrelic.com/blog/nerdlog/estimate-data-cost) 사용하여 New Relic으로 보낼 수 있는 데이터 양을 추정해 보세요.
* 적당한 양의 알림을 보낼 것으로 예상됩니다. 확실하지 않은 경우 [알림 규칙 및 한도를](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/rules-limits-alerts) 검토하세요.

이러한 사항이 귀하에게 해당된다면 하나의 계정만 필요할 수 있습니다. 그렇지 않은 경우 필요에 맞게 다중 계정 구조를 고려하는 것이 좋습니다.

## 여러 계정 만들기 [#multiple-accounts]

조직 내에서 여러 계정을 만드는 데는 여러 가지 이유가 있습니다. 다음은 다중 계정 구조가 팀에 적합한지 결정하는 데 도움이 될 수 있는 몇 가지 일반적인 예입니다.

### 여러 계정을 사용하여 테스트 및 프로덕션 환경 분리 [#environments]

여러 계정을 사용하면 여러 환경의 데이터를 관찰할 수 있으므로 프로덕션에 들어가기 전에 변경 사항을 모니터링할 수 있습니다. 애플리케이션을 정기적으로 업데이트하는 경우 각 배포에 오류가 없는지 확인할 수 있도록 강력한 테스트 환경을 마련하는 것이 중요합니다.

<img style={{ align: 'left',maxWidth: '100%' }} title="multiple environments" alt="A diagram demonstrating how to use New Relic with multiple environments" src="/images/accounts_diagram_multiple-account-environments.webp" />

### 고유한 데이터 세트와 여러 계정을 갖춘 별도의 프로젝트 [#data-sets]

조직은 다양한 계정에 대한 다양한 데이터를 보관하는 컨테이너입니다. 계정은 특정 요구 사항에 따라 쉽게 필터링하고 쿼리할 수 있도록 데이터를 별도로 유지하는 좋은 방법이 될 수 있습니다.

여러 계정을 사용하는 몇 가지 시나리오는 다음과 같습니다.

* 여러 국가에서 작동하는 결제 서비스 제공업체를 관리하고 있으며 각 국가의 데이터(통화, 세금 규정 등)가 다른 국가와 혼합되는 것을 원하지 않습니다.
* 소셜 미디어 사이트를 관리하고 있으며 다양한 지역의 다양한 데이터 수집 정책을 준수해야 합니다.

<img style={{ align: 'left',maxWidth: '100%' }} title="Multiple data sets" alt="A diagram showing how to use New Relic with multiple data sets" src="/images/accounts_diagram_unique-data-sets.webp" />

### 계정을 사용하여 대규모 데이터 한도 관리 [#large-data-limits]

방대한 양의 데이터를 수집할 계획이라면 데이터 제한을 피하기 위해 여러 개의 계정을 만드는 것이 좋습니다. 금융 기관과 의료 서비스 제공자는 여러 주에 걸쳐 높은 비율로 RES 및 사용자 정보를 추적하기 때문에 종종 많은 양의 데이터를 수집합니다. 대형 소매업체도 여러 개의 계정을 만드는 것으로 이익을 얻습니다. 하나의 조직이면서 여러 개의 매장을 운영하고 있다면, 각 회사별로 계정을 만드는 것이 좋습니다.

다음과 같은 중요한 제한 사항을 명심하세요.

* 경고 조건은 기본적으로 계정당 4,000개 조건으로 설정됩니다.
* 공지 커뮤니티는 계정당 1,000개의 커뮤니티로 기본 설정되어 있습니다.
* 경고 정책은 기본적으로 계정당 10,000개 정책입니다.
* 경고 대상은 기본적으로 계정당 2,000개입니다.
* NRDB 쿼리 검사 개수 제한은 표준 계정과 데이터 플러스 계정에 따라 다릅니다.

한도에 대해 자세히 알아보려면 다음을 참조하세요.

* [NRQL 쿼리에 대해 검사된 데이터 포인트](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries/#inspected-count-limits)
* [알림 한도](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/rules-limits-alerts/)

<img style={{ align: 'left',maxWidth: '100%' }} title="Large data limits" alt="A screenshot depicting how to use New Relic to manage large data limits" src="/images/accounts_diagram_multiple-accounts-for-large-data-limits.webp" />

### 여러 계정을 사용하여 보안 관리 [#security]

모든 사람이 모든 데이터에 액세스할 필요는 없습니다. 당신이 계약업체에 크게 의존하는 스타트업이라고 가정해 보겠습니다. 임시 직원이 모든 기록 데이터에 액세스하는 것을 원하지 않을 수도 있습니다. 여러 계정을 만들 수 있는 좋은 기회가 될 것입니다.

<img style={{ align: 'left',maxWidth: '100%' }} title="manage security" alt="A diagram showing how to use New Relic to manage security" src="/images/accounts_diagram_manage-security.webp" />

### 다중 계정 및 분산 추적

New Relic의 분산 추적은 전체 시스템에 걸쳐 모든 요청의 경로를 매핑하여 속도가 느려지거나 중단되는 위치를 표시하므로 더 빠르게 수정할 수 있습니다. 여러 계정에 걸쳐 분산 추적 기능을 제공하므로 조직의 여러 영역에서 서비스를 추적할 수 있습니다. 이러한 교차 계정 구조는 다양한 계정 구성에서 분산 추적을 유연하고 유용하게 만듭니다. 그러나 사용자가 액세스 권한이 없는 계정의 서비스에 영향을 미치는 추적을 보려는 경우 추적의 모든 부분에 액세스할 수는 없다는 점에 유의하는 것이 중요합니다.

사용자 및 계정에 대한 액세스 권한을 부여하는 방법에 대해 자세히 알아보려면 [사용자 유형 문서를](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type/) 참조하세요.

## 다음은 뭐지?

<DocTiles>
  <DocTile path="https://docs.newrelic.com/docs/accounts/accounts-billing/account-structure/add-accounts/" title="Add an account" />

  <DocTile path="https://newrelic.com/pricing" title="Learn more about pricing" />

  <DocTile path="https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/introduction-managing-users/" title="Learn about how to manage users" />
</DocTiles>