---
title: Jenkins를 사용한 변경 사항 추적
tags:
  - APM
  - APM UI pages
  - Events
  - Browser
  - Mobile
  - NerdGraph
metaDescription: Here's how to use Jenkins to designate what you want to capture with change tracking.
freshnessValidatedDate: never
translationType: human
---

변경 추적 기능을 사용하면 모니터링하려는 변경 사항을 지정하여 해당 변경 사항이 고객과 시스템에 어떤 영향을 미치는지 확인할 수 있습니다. GraphQL 또는 CLI를 사용하여 모니터링할 변경 사항을 지정할 수 있지만 Jenkins의 파이프라인을 사용하여 변경 사항을 기록할 수도 있습니다.

파이프라인은 사용자가 지정한 빌드를 호출하고 추가 환경 변수도 빌드 프로세스에 전달합니다. 그러면 배포에 필요한 데이터가 뉴렐릭의 차트들에 표시됩니다. 변경 추적 UI에서 결과를 확인하고, 이 정보를 사용하여 변경 사항이 상태에 미치는 영향을 이해할 수 있습니다.

## 전제 조건 [#prereq]

Jenkins 플러그인을 설치하려면 다음이 필요합니다.

* Jenkins 1.580.1 이상
* Jenkins 관리자 권한

## Jenkins 플러그인 설치 [#install]

1. Jenkins를 열고 <DNT>**Manage Jenkins**</DNT>, <DNT>**Plugins**</DNT>으로 이동합니다.

   <img
     title="Screenshot showing where to find Manage Jenkins"
     alt="Screenshot showing where to find Manage Jenkins"
     src="/images/tracking_screenshot-crop_jenkins-home-page.webp"
   />

2. <DNT>**Available plugins**</DNT>를 클릭한 다음 `newrelic-deployment-notifier`를 검색합니다. <DNT>**Install**</DNT>을 클릭합니다.

   <img
     title="Screenshot showing how to install the plugin"
     alt="Screenshot showing how to install the plugins"
     src="/images/tracking_screenshot-crop_jenkins-install-notifier.webp"
   />

3. 설치 진행 상황이 포함된 새 페이지가 나타납니다. 플러그인을 다시 시작할 필요가 없습니다.

## 빌드 후 작업 생성 [#create-post--build-action]

Jenkins 빌드 작업 구성에서 뉴렐릭 배포 알림(New Relic Deployment Notifier)을 빌드 후 작업으로 추가하려면:

1. Jenkins 작업 설정에서

   <DNT>
     **Post-build Actions section**
   </DNT>

   으로 이동하여

   <DNT>
     **Add post-build action**
   </DNT>

   을 클릭한 다음,

   <DNT>
     **New Relic Deployment Notifications**
   </DNT>

   를 선택합니다.

<img
  style={{ align: "left" }}
  title="Screenshot showing the Add post-build action button, with the dropdown menu showing New Relic Deployment Notifications"
  alt="Screenshot showing the Add post-build action button, with the dropdown menu showing New Relic Deployment Notifications"
  src="/images/tracking_screenshot-crop_jenkins--postbuild.webp"
/>

2. 사용자 [API 키](/docs/apis/intro-apis/new-relic-api-keys/)를 위한 사용자 이름/비밀번호 크리덴셜을 생성합니다. 비밀번호를 키로 입력합니다.

   <img
     style={{ align: "left" }}
     title="Screenshot showing credential creation dialog"
     alt="Screenshot showing credential creation dialog"
     src="/images/tracking_screenshot-crop_jenkins--credential.webp"
   />

3. 드롭다운 메뉴 목록에서 원하는 엔터티를 선택합니다.

   <img
     style={{align: "left"}}
     title="Screenshot showing how to find Deployment Notifications"
     alt="Screenshot showing how to find Deployment Notifications"
     src="/images/tracking_screenshot-crop_jenkins--validcredential.webp"
   />

4. 필수 항목인 `Version` 또는 `Revision` 값과 선택적 값들을 추가합니다. `${BUILD_NUMBER}` 같이 이러한 필드에 [환경 변수를 사용할](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#using-environment-variables) 수 있습니다.

   <img
     style={{ align: "left" }}
     title="Screenshot showing optional fields"
     alt="Screenshot showing optional fields"
     src="/images/tracking_screenshot-crop_jenkins--optional.webp"
   />

   <table>
     <thead>
       <tr>
         <th style={{ width: "200px" }}>
           필드
         </th>

         <th>
           설명
         </th>
       </tr>
     </thead>

     <tbody>
       <tr>
         <td>
           설명
         </td>

         <td>
           추적 중인 사항에 대한 설명을 삽입합니다.
         </td>
       </tr>

       <tr>
         <td>
           Revision
         </td>

         <td>
           배포에 대한 개정입니다. 여기서는 `${BUILD_NUMBER}`가 좋은 값이 될 수 있습니다.
         </td>
       </tr>

       <tr>
         <td>
           Changelog
         </td>

         <td>
           배포에서 발생한 변경 사항 목록에 대한 참조입니다.
         </td>
       </tr>

       <tr>
         <td>
           Commit
         </td>

         <td>
           커밋 ID를 참조하는 해시입니다.
         </td>
       </tr>

       <tr>
         <td>
           Deeplink
         </td>

         <td>
           Jenkins 작업 또는 배포에 대한 다른 참조의 딥 링크입니다.
         </td>
       </tr>

       <tr>
         <td>
           EntityGuid
         </td>

         <td>
           배포에 참조된 애플리케이션 엔터티입니다. ( [애플리케이션 GUID에 대한 추가 정보](#guid) 참조)
         </td>
       </tr>

       <tr>
         <td>
           DeploymentType
         </td>

         <td>
           배포되고 있는 배포의 유형입니다.
         </td>
       </tr>

       <tr>
         <td>
           GroupId
         </td>

         <td>
           변경 사항 클러스터를 참조하는 식별자입니다.
         </td>
       </tr>

       <tr>
         <td>
           Timestamp
         </td>

         <td>
           Unix Epoch 긴 형식의 선택적 타임스탬프입니다. 제공되지 않은 경우 요청을 받은 시간(Unix Epoch 이후의 밀리초)으로 설정됩니다.
         </td>
       </tr>

       <tr>
         <td>
           버전
         </td>

         <td>
           배포되고 있는 버전입니다. 여기서는 `${BUILD_NUMBER}`가 좋은 값이 될 수 있습니다.
         </td>
       </tr>

       <tr>
         <td>
           User
         </td>

         <td>
           배포를 수행하는 사용자입니다. <DNT>**Tip:**</DNT> [Build User Vars 플러그인](https://wiki.jenkins.io/display/JENKINS/Build+User+Vars+Plugin)을 설치하면 Jenkins 사용자에 관한 환경 변수를 확보할 수 있으며, 확보된 변수를 이 필드에서 사용할 수 있습니다. (예: `${BUILD_USER}`)

           <img
             style={{ align: "left" }}
             title="Screenshot showing User field set to ${BUILD_USER}"
             alt="Screenshot showing User field set to ${BUILD_USER}"
             src="/images/tracking_screenshot-crop_jenkins--user.webp"
           />
         </td>
       </tr>
     </tbody>
   </table>

5. (선택사항) 이 Jenkins 작업이 여러 엔터티에 영향을 미치는 경우 알림 수신에도 추가할 수 있습니다. 더 많은 앱을 추가하려면 <DNT>**Add another notification**</DNT> 버튼을 클릭합니다.

## 다음 단계는? [#whats-next]

추적하려는 변경 사항을 지정한 후 뉴렐릭 UI에서 해당 변경 사항의 효과를 분석할 수 있습니다. 보다 자세한 내용은 [뉴렐릭에서 변경 사항을 보고 분석하는 방법](/docs/change-tracking/change-tracking-view-analyze)을 참조하십시오.

## 플러그인 제거 [#remove-plugin]

1. <DNT>
     **Plugins**
   </DNT>

   페이지에서

   <DNT>
     **Installed plugins**
   </DNT>

   를 클릭합니다.

2. `newrelic-deployment-notifier`를 검색합니다.

3. 빨간색 `X`를 클릭합니다.

   <img
     title="Screenshot to remove the plugin"
     alt="Screenshot to remove the plugin"
     src="/images/tracking_screenshot-crop_jenkins-rollback.webp"
   />
