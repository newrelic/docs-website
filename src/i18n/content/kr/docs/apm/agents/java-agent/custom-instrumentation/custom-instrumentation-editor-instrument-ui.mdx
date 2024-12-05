---
title: '사용자 정의 계측 편집기: UI의 계측'
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: 'To instrument methods and frameworks in your Java app directly from the APM UI, use New Relic''s custom instrumentation editor.'
freshnessValidatedDate: never
translationType: machine
---

New Relic의 사용자 지정 계측 편집기를 사용하면 Java 앱 사용자가 New Relic 사용자 인터페이스를 통해 사용자 지정 계측을 구현할 수 있습니다. 편집기는 애플리케이션 코드를 수정할 수 없고 계측할 메서드가 많지 않은 경우 선호되는 선택입니다. 다른 계측 옵션과 각각을 사용하는 이유는 [Java 사용자 지정 계측](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) 을 참조하세요.

사용자 정의 편집기를 사용하려면: <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Java app) > Settings > Instrumentation**</DNT> 으로 이동하세요. 사용자 정의 편집기를 사용하여 다음을 수행합니다.

* 지원되지 않는 프레임워크를 계측합니다.
* 계측되지 않은 방법에 대한 추가 통찰력을 얻으십시오.
* [특정 거래를 무시하십시오](/docs/agents/java-agent/instrumentation/blocking-instrumentation-java) .

## 요구 사항

사용자 정의 계측 편집기를 사용하려면 다음 요구 사항을 충족해야 합니다.

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Requirement**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        에이전트
      </td>

      <td>
        자바 에이전트 버전 3.17.0 이상
      </td>
    </tr>

    <tr>
      <td>
        보안
      </td>

      <td>
        [높은 보안 모드](/docs/accounts-partnerships/accounts/security/high-security) 의 사용자는 [계측을 내보내고](#manual-deploy) 수동으로 앱 서버로 가져와야 합니다.
      </td>
    </tr>
  </tbody>
</table>

## 사용자 정의 계측 정의 [#defining]

New Relic 사용자 인터페이스에서 사용자 정의 계측을 정의하려면 스레드 프로파일링 세션을 사용하여 애플리케이션의 각 스레드에 대한 자세한 스택 추적을 수집하십시오. 가능하면 프로덕션 앱에서 계측 규칙을 변경하기 전에 사전 프로덕션 환경에서 사용자 지정 계측을 테스트하십시오.

두 환경 모두에서 사용자 정의 계측 편집기를 사용하여 계측할 메서드를 정의하고 변경 사항을 적용합니다.

1. 새 [스레드 프로파일러 세션](/docs/apm/applications-menu/events/thread-profiler-dashboard#starting) 을 만듭니다. 충분한 데이터를 수집하려면 세션 길이를 2분 이상으로 설정하십시오.

2. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Instrumentation**</DNT> 로 이동합니다. <DNT>**Recently collected thread profiles**</DNT> 목록이 나타날 때까지 페이지 하단으로 스크롤한 다음 가장 최근 스레드 프로필을 선택합니다.

3. 계측되지 않은 위치를 찾기 위해 개별 방법을 확장합니다. <Icon style={{color: '#307099'}} name="fe-circle"/> 행동 양식.

4. 특정 노드에 대한 계측 규칙을 정의하려면 <DNT>**Instrument**</DNT> 또는 <DNT>**Ignore**</DNT> 선택하고 [필요한 경우 규칙을 맞춤설정하세요](#options).

5. 설정을 저장하려면 <DNT>**Confirm instrumentation changes**</DNT> 선택합니다.

6. 구현하다, 배포하다 [<DNT>**Instrumentation**</DNT> 페이지](#dashboard) 의 변경사항:

   * 변경 사항을 자동으로 구현하고 배포하려면

     <DNT>
       **Deploy instrumentation changes**
     </DNT>

     선택합니다.

   * 변경 사항을 수동으로 구현하고 배포하려면

     <DNT>
       **Export XML**
     </DNT>

     선택하고 [리소스 내보내기를](#manual-deploy) 참조하세요.

<Callout variant="caution">
  가능하면 과도한 계측을 피하십시오. 계측된 각 추가 방법으로 에이전트는 더 많은 리소스를 사용하고 애플리케이션은 더 많은 오버헤드를 발생시킵니다. 또한 계측을 배포하면 잠시 동안 더 높은 오버헤드가 발생합니다. 이로 인해 몇 초 동안 애플리케이션 요청이 눈에 띄게 느려질 수 있습니다.
</Callout>

UI에서 변경 사항을 적용한 경우 에이전트는 몇 가지 [수집 주기](/docs/apm/new-relic-apm/getting-started/glossary#harvest-cycle) (일반적으로 몇 분) 내에 메서드 계측을 시작합니다.

## 편집기를 사용한 수동 계측 [#manual-instrumentation]

스레드 프로필을 사용하지 않고 편집기에서 직접 계측 지점을 생성할 수도 있습니다.

1. 사용자 정의 편집기에서

   <DNT>
     **Add manual instrumentation**
   </DNT>

   선택하여 리소스를 생성하거나 무시할 클래스와 메서드를 수동으로 입력하세요.

2. [계측 지점을 정의할 때 XML 규칙에 따른 사용자 지정 계측을](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation-xml-examples#file-format) 따르십시오.

3. 계측 편집기에서 변경 사항을 배포합니다.

이 방법을 사용하여 계측을 추가하면 스레드 프로필에서 사용할 수 있는 것 이상의 추가 기능이 노출됩니다. 서명으로 메서드를 일치시키는 것 외에도 반환 유형, 인터페이스의 메서드 및 Java 주석별로 메서드를 계측할 수도 있습니다.

이러한 더 복잡한 계측 유형은 편집기에서 생성 및 삭제할 수 있지만 편집할 수는 없습니다.

<Callout variant="important">
  메서드가 `Instrumentation not allowed` 으로 표시된 경우 [맞춤 계측에 대한 New Relic의 문제 해결 절차를](/docs/agents/java-agent/custom-instrumentation/troubleshooting-java-custom-instrumentation) 따르세요.
</Callout>

## 수동으로 변경 사항 배포 [#manual-deploy]

또한 사용자 정의 계측 편집기를 사용하여 사용자 정의 계측 세트를 구축한 다음 계측 파일을 내보내고 수동으로 앱 서버로 가져올 수도 있습니다. 이는 [높은 보안 모드](/docs/accounts-partnerships/accounts/security/high-security) 사용자에게 필요합니다.

로그를 내보내려면 [UI통해 로그를 정의하세요](#defining). 그런 다음 <DNT>**Instrumentation**</DNT> 페이지에서 <DNT>**Export xml**</DNT> 선택하고 [앱 서버에서 파일을 가져옵니다](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-xml#file-location).

## 페이지 기능 [#dashboard]

<DNT>**Instrumentation**</DNT> 페이지는 다음 기능을 지원합니다.

<table>
  <thead>
    <tr>
      <th width={200}>
        원하는 경우...
      </th>

      <th>
        이게 ...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="disable">
      <td>
        사용자 지정 계측 일시 중지 또는 비활성화
      </td>

      <td>
        * 선택하다

          <Icon
            style={{color: '#55555A'}}
            name="fe-slash"
          />

          <DNT>
            **Disable instrumentation**
          </DNT>

          는 모든 UI정의 사용자 정의 로그를 일시적으로 비활성화합니다.

        * 계측 설정을 다시 활성화하려면

          <DNT>
            **Enable instrumentation**
          </DNT>

          선택하세요.
      </td>
    </tr>

    <tr id="import">
      <td>
        기존 계측 가져오기
      </td>

      <td>
        * <DNT>
            **Import xml**
          </DNT>

          선택하여 기존 [사용자 정의 xml 파일을](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-xml) 가져올 수 있습니다.

        * [변경 사항을 자동으로 구현하거나 배포하지 않으려면](#manual-deploy)

          <DNT>
            **Export xml**
          </DNT>

          사용할 수도 있습니다.
      </td>
    </tr>

    <tr id="edit-delete">
      <td>
        계측 지점 편집 또는 삭제
      </td>

      <td>
        [수동 계측](#manual-instrumentation) 은 편집할 수 없으며 삭제만 할 수 있습니다.

        * 특정 메소드를 중지하려면

          <DNT>
            **Remove**
          </DNT>

          선택하세요.

        * 계측 규칙을 변경하려면

          <DNT>
            **Edit**
          </DNT>

          선택합니다.
      </td>
    </tr>

    <tr id="history">
      <td>
        계측 기록 보기
      </td>

      <td>
        * 누가 구현하다, 배포하다 변경하는지, 언제 변경하는지를 포함하여

          <DNT>
            **Instrumentation history**
          </DNT>

          탭에서 사용자 정의 로그의 각 이전 반복을 볼 수 있습니다.

        * <DNT>
            **export**
          </DNT>

          선택하여 사용자 정의 로그 파일의 사본을 다운로드한 다음 이를 HTML 편집기로 [가져오면](#import) 이전 버전을 복원할 수 있습니다.
      </td>
    </tr>
  </tbody>
</table>

## 인스트루먼테이션 옵션 [#options]

사용자 정의 계측 편집기를 사용하여 다음 옵션을 정의할 수 있습니다.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Instrumentation options**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        기기 방법
      </td>

      <td>
        선택한 메소드를 시작했습니다. 편집된 메서드는 뉴렐릭 UI 에 표시됩니다. <DNT>**Instrument**</DNT> 는 다음 하위 옵션을 지원합니다.

        * <DNT>
            **Name the transaction (transaction name)**
          </DNT>

          : [자동 명명 규칙](/docs/agents/java-agent/instrumentation/naming-web-transactions) 에 따라 정의된 표준 트랜잭션 이름을 재정의합니다. 대신 UI는 나열된 이름을 사용합니다.

        * <DNT>
            **Start the transaction when this method executes**
          </DNT>

          : 상위 프로세서 내부에 이 정책의 지표를 포함하는 대신 이 방법에 대한 새 프로세서를 만드세요. 이 옵션을 사용한 [에이전트 동작은](#start-results) 스레드에 기존 트랜잭션이 있는지 여부에 따라 달라집니다.
      </td>
    </tr>

    <tr>
      <td>
        맞춤 속성 보고
      </td>

      <td>
        메소드 매개변수는 트랜잭션의 속성으로 캡처할 수 있습니다. New Relic은 이러한 속성을 트랜잭션 추적, 추적된 오류 및 `Transaction` 이벤트에 보고합니다.

        보안상의 이유로 사용자 정의 로그 편집기를 사용한 사용자 정의 속성 캡처는 기본적으로 <DNT>**disabled**</DNT> 이며 [높은 보안 모드를](/docs/agents/java-agent/getting-started/apm-agent-security-java) 사용하는 동안에는 활성화할 수 없습니다. 사용자 정의 로그 편집기를 사용하여 사용자 정의 속성을 보고하고 로그 에이전트가 높음 보안 모드에 있는 것을 원하지 않는 경우 [높음 보안 모드를](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-enable_high_security) 비활성화한 후 <DNT>**newrelic.yml**</DNT> 의 `common:` 블록에 다음 텍스트를 추가하세요. :

        ```yml
        reinstrument:
            attributes_enabled: true
        ```
      </td>
    </tr>

    <tr>
      <td>
        거래 무시
      </td>

      <td>
        [이 방법을 완전히 무시하십시오](/docs/agents/java-agent/instrumentation/blocking-instrumentation-java) . 에이전트는 이 방법의 메트릭을 보고하지 않으며 이 방법은 Apdex 계산에 기여하지 않습니다.
      </td>
    </tr>
  </tbody>
</table>

## "시작" 옵션이 있는 결과 [#start-results]

<DNT>**Instrument methods > Start the transaction when this method executes**</DNT> 선택하면 에이전트 동작은 스레드에 기존 트랜잭션이 있는지 여부에 따라 달라집니다.

클래스 또는 메서드가 계측될 때:

<table>
  <thead>
    <tr>
      <th colSpan={2}>
        "<DNT>**Start the transaction"**</DNT> 플래그가 선택되어 있습니까?
      </th>
    </tr>

    <tr>
      <th>
        <DNT>
          **Yes**
        </DNT>
      </th>

      <th>
        <DNT>
          **No**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        해당 스레드에 기존 트랜잭션 <DNT>**is**</DNT> 이 있고 <DNT>**Start the transaction**</DNT> 플래그 <DNT>**is**</DNT> 가 선택된 경우:

        1. 에이전트는

           <DNT>
             **Start the transaction**
           </DNT>

           플래그를 무시합니다.

        2. 에이전트는 기존 트랜잭션에 클래스/메서드를 포함합니다.
      </td>

      <td>
        해당 스레드의 기존 트랜잭션 <DNT>**is**</DNT> 과 <DNT>**Start the transaction**</DNT> 플래그가 확인되지 **않은** 경우 에이전트는 클래스/메서드를 기존 트랜잭션에 포함합니다.
      </td>
    </tr>

    <tr>
      <td>
        트랜잭션이 해당 스레드에 **없고** <DNT>**Start the transaction**</DNT> 플래그 <DNT>**is**</DNT> 가 선택된 경우:

        1. 에이전트는 현재 트랜잭션이 없음을 발견합니다.
        2. 에이전트는 계측한 클래스/메서드로 시작하는 새 트랜잭션을 생성합니다.
      </td>

      <td>
        트랜잭션이 해당 스레드에 **없고** <DNT>**Start the transaction**</DNT> 플래그가 확인되지 **않은** 경우:

        1. 에이전트는 해당 스레드에서 트랜잭션을 찾고 찾지 못합니다.
        2. 메트릭이 삭제됩니다.
      </td>
    </tr>
  </tbody>
</table>
