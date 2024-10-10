---
title: APM 애플리케이션 배포에 대해 팀에 알립니다.
tags:
  - APM
metaDescription: 'After you set up the changes you want to monitor, you can use a webhook to notify your colleagues about the impacts of those changes.'
freshnessValidatedDate: '2023-08-29T00:00:00.000Z'
translationType: machine
---

APM 애플리케이션 엔터티에 대한 배포를 기록한 후에는 웹후크를 사용하여 해당 변경 사항에 대한 정보를 팀에 계속 알릴 수 있습니다. 변경 사항 추적 기능을 사용하여 배포를 기록하든지 이전 [REST API를](/docs/apm/apm-ui-pages/events/record-deployments/#api-instructions) 사용하든 상관없이 이러한 기능을 사용할 수 있습니다.

## 필수 권한 [#requirements]

변경 추적 알림 설정에는 특정 [권한이](/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions) 필요합니다.

* 웹훅을 `create` 하려면: `Applied intelligence > Destinations` 및 `Applied intelligence > Channels` 에 대한 `Modify` 권한.
* 웹훅 `view` 및 `test` : `Applied intelligence > Destinations` 및 `Applied intelligence > Channels` 에 대한 `View` 권한.
* 웹훅을 `modify` 하려면: `Applied intelligence > Destinations` 및 `Applied intelligence > Channels` 에 대한 `View` 권한과 `Applied intelligence > Destinations` 에 대한 `Modify` 권한.
* 웹훅을 `delete` 하려면: `Applied intelligence > Destinations` 및 `Applied intelligence > Channels` 에 대한 `Delete` 권한.

## 웹훅 도착 URL 가져오기 [#get-webhook-url]

배포 데이터를 다양한 웹훅 대상으로 보낼 수 있습니다. 웹훅 URL을 얻으려면 사용 중인 도구에 대한 지침을 따르세요. URL이 있으면 다음 섹션의 단계를 완료하여 웹훅 알림을 구성하세요.

Slack을 사용하는 경우 구형 뉴렐릭 <InlinePopover type="alerts"/>앱을 설정하려면 다음 지침을 따르세요.

1. Slack 계정에 관리자로 로그인한 다음

   <DNT>
     **Apps**
   </DNT>

   으로 이동합니다.

2. <DNT>
     **New Relic Alerts**
   </DNT>

   검색하고 해당 타일을 클릭하세요.

3. <DNT>
     **New Relic Alerts**
   </DNT>

   목록에서 뉴렐릭 아이콘 아래의

   <DNT>
     **Configuration**
   </DNT>

   버튼을 클릭합니다.

4. <DNT>
     **New Relic Alerts**
   </DNT>

   제목 아래의

   <DNT>
     **Configuration**
   </DNT>

   탭을 클릭합니다.

5. <DNT>
     **Configuration**
   </DNT>

   탭에서 연필 아이콘을 클릭합니다.

6. <DNT>
     **Webhook URL**
   </DNT>

   섹션까지 아래로 스크롤한 후

   <DNT>
     **Copy URL**
   </DNT>

   클릭합니다.

## 추적된 변경 사항에 대한 웹훅 알림 구성 [#configure-webhook]

New Relic UI에 웹훅 URL을 삽입합니다.

1. 배포 공지 설정 화면으로 이동하세요:

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/) > (user menu) > Administration > Integrations > Deploy notifications**
   </DNT>

   .

2. 웹훅 URL을

   <DNT>
     **Webhook URL**
   </DNT>

   필드에 붙여넣고

   <DNT>
     **Save**
   </DNT>

   클릭합니다.

3. 인공 데이터가 포함된 예제 페이로드를 웹훅 URL로 보내려면

   <DNT>
     **Send a test request**
   </DNT>

   클릭하세요.

   <img
     style={{align: "left"}}
     title="A screenshot showing how to test the webhook"
     alt="A screenshot showing how to test the webhook"
     src="/images/tracking_screenshot-crop_webhook_test.webp"
   />

4. <DNT>
     **Toggle this webhook**
   </DNT>

   아래에서 토글을 밀어 웹훅 공지를 비활성화하거나 다시 활성화할 수 있습니다.

5. 웹훅 공지 설정을 영구적으로 삭제하려면

   <DNT>
     **Delete this webhook**
   </DNT>

   클릭하세요.

## 알림 페이로드 구조 [#payload-structure]

배포 알림이 활성화되고 변경 사항 추적을 시작하면 웹훅은 `application/x-www-form-urlencoded` 유형의 페이로드가 포함된 `POST` 요청을 수신하게 됩니다. 키와 값은 `&` 로 구분된 키-값 튜플로 인코딩되며 키와 값 사이에는 `=` 기호가 있습니다. 키와 값 모두에서 영숫자가 아닌 문자는 URL로 인코딩됩니다.

배포 및 배포된 APM 애플리케이션 엔터티의 특성을 기반으로 다음 키와 값이 전송됩니다.

<table>
  <thead>
    <tr>
      <th>
        열쇠
      </th>

      <th>
        값
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `created_at`
      </td>

      <td>
        ISO 8601 형식의 배포 타임스탬프
      </td>
    </tr>

    <tr>
      <td>
        `application_name`
      </td>

      <td>
        APM 애플리케이션 엔터티의 이름
      </td>
    </tr>

    <tr>
      <td>
        `account_name`
      </td>

      <td>
        APM 애플리케이션 엔터티를 소유한 계정의 이름
      </td>
    </tr>

    <tr>
      <td>
        `changelog`
      </td>

      <td>
        배포에 포함된 변경 사항 목록
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        배포에 대한 설명
      </td>
    </tr>

    <tr>
      <td>
        `revision`
      </td>

      <td>
        배포된 소프트웨어 버전
      </td>
    </tr>

    <tr>
      <td>
        `deployment_url`
      </td>

      <td>
        APM 애플리케이션 엔터티의 배포 UI에 대한 링크
      </td>
    </tr>

    <tr>
      <td>
        `deployed_by`
      </td>

      <td>
        애플리케이션을 배포한 사용자
      </td>
    </tr>
  </tbody>
</table>
