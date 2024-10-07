---
title: New Relic 계약을 게시하세요
metaDescription: Publish your New Relic application
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  이 강의는 처음부터 New Relic 제작 방법을 가르치는 과정의 일부입니다. 아직 확인하지 않았다면 개요를 확인하세요.

  과정의 각 레슨은 마지막 레슨을 기반으로 하므로 이 레슨을 시작하기 전에 마지막 레슨인 카탈로그에 대한 앱 설명을 완료했는지 확인하세요.
</Callout>

지난 강의에서는 이 과정 전반에 걸쳐 구축해 온 A/B 테스트 앱에 대한 카탈로그 정보를 생성했습니다. 이제 앱을 Instant 옵저버빌리티 카탈로그에 게시하고 해당 카탈로그 세부정보를 제출할 차례입니다.

## 버전 및 태그 [#versions]

애플리케이션을 게시하려면 두 가지 주요 정보가 필요합니다.

* 버전
* 꼬리표

애플리케이션 버전은 포함된 코드를 식별하며 Nerdpack의 루트 수준 `package.json` 파일에 저장됩니다. Nerdpack의 코드를 수정하고 출시할 준비가 될 때마다 `package.json` 에서 버전을 업데이트하게 됩니다. 예를 들어, 애플리케이션 코드의 첫 번째 주요 버전에서 일부 버그를 수정하는 경우 버전 `1.0.1` 아래에 변경 사항을 게시할 수 있습니다.

앱 버전의 태그는 해당 상태를 설명합니다. 예를 들어 작업 진행 중인 애플리케이션의 버전 `0.0.1` 은 개발 중임을 나타내기 위해 `DEV` 태그와 함께 게시될 수 있습니다.

<Callout variant="tip">
  태그 사용 방법에 적용되는 몇 가지 규칙이 있으며 태그 설명서에서 이에 대한 내용을 읽을 수 있습니다.
</Callout>

## 첫 번째 애플리케이션 게시 [#publish]

<Steps>
  <Step>
    [교과 과정 저장소](https://github.com/newrelic-experimental/nru-programmability-course) 의 `publish/ab-test` 디렉터리로 변경합니다.

    ```sh
    cd nru-programmability-course/publish/ab-test
    ```

    이 디렉토리에는 과정의 이 시점에서 귀하의 애플리케이션이 가질 것으로 예상되는 코드가 포함되어 있습니다. 각 레슨을 시작할 때 올바른 디렉토리로 이동하면 사용자 정의 코드를 남겨두어 한 레슨에서 다음 레슨으로 잘못된 코드가 전달되는 것을 방지할 수 있습니다.
  </Step>

  <Step>
    `nru-programmability-course/publish/ab-test` 에서 Nerdpack의 루트로 이동합니다.
  </Step>

  <Step>
    나만의 앱 UUID를 생성하세요.

    ```sh
    nr1 nerdpack:uuid -gf
    ```

    UUID는 New Relic 앱 레지스트리에서 앱을 식별하는 데 사용됩니다. 이 과정을 위해 개발한 코드를 사용하고 있기 때문에 기존 UUID가 있는 애플리케이션이 이미 레지스트리에 존재합니다. 이제 자신만의 애플리케이션을 생성하여 이 애플리케이션을 게시할 수 있습니다.

    <Callout
      variant="tip"
      title="기술적인 세부사항"
    >
      UUID는 또한 귀하의 앱을 귀하의 계정에 연결하므로 애플리케이션이 앱을 설치한 계정을 대신하여 Nerdgraph 요청을 할 수 있도록 합니다.
    </Callout>
  </Step>

  <Step>
    `package.json` 에서 `version` `1.0.0` 로 설정합니다.

    ```json
    {
      "private": true,
      "name": "ab-test",
      "version": "1.0.0",
      "scripts": {
        "start": "nr1 nerdpack:serve",
        "test": "exit 0"
      },
      "nr1": {
        "uuid": "2d923ba6-d231-4dd3-830f-b1923577a422"
      },
      "dependencies": {
        "prop-types": "^15.6.2",
        "react": "^16.6.3",
        "react-dom": "^16.6.3"
      },
      "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
    }
    ```

    New Relic은 [의미론적 버전 관리를](https://semver.org) 사용하며 이 규칙에 따라 `1.0.0` 첫 번째 주요 릴리스를 나타냅니다. 이제 게시할 준비가 되었습니다!
  </Step>

  <Step>
    프로젝트의 모든 `<YOUR NEW RELIC ACCOUNT ID>` 및 `<YOUR NEW RELIC ENTITY GUID>` (를) 각각 실제 New Relic [계정 ID](/docs/accounts/accounts-billing/account-setup/account-id) 및 엔터티 GUID로 바꾸세요.
  </Step>

  <Step>
    New Relic 피규어를 게시하세요:

    ```sh
    nr1 nerdpack:publish -t DEV
    ```

    그게 다야! New Relic의 레지스트리에 귀하의 기능을 게시하셨습니다. `-t` 참가자는 게시된 버전에 대한 태그를 지정합니다. 다른 로그 중에서 콘솔에 다음 확인이 표시되어야 합니다.

    ```sh
    [output] Publishing Nerdpack AbTest ({blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain})
    [output]  {success}✔{plain}  Nerdpack published successfully!
    [output]  {success}✔{plain}  Tagged {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain} version {green}1.0.0{plain} as {green}DEV{plain}.
    ```

    현재로서는 아직 작업이 진행 중이므로 1.0.0 릴리스에 `DEV` 태그를 지정했습니다.
  </Step>

  <Step>
    앱의 레지스트리 정보를 확인하세요.

    ```sh
    nr1 nerdpack:info
    [output] Id: {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380
    [output] Region: {muted}us
    [output] Account ID: 123456
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 4
    [output]
    [output] Version  Date           Tags
    [output] -------  -------------  ------
    [output] 1.0.0    {muted}5 minutes ago  {green}DEV
    ```

    이 명령의 결과는 UUID, 버전 및 계정 ID를 포함하여 귀하의 개성에 대해 New Relic 레지스트리에 저장된 정보를 자세히 설명합니다.
  </Step>
</Steps>

## Instant 옵저버빌리티에서 귀하의 구성을 확인하세요 [#view-app]

이제 귀하의 기능이 게시되고 태그가 추가되었으므로 Instant 옵저버빌리티 카탈로그에서 보실 수 있습니다.

<Steps>
  <Step>
    [New Relic](https://one.newrelic.com) 으로 이동합니다. `?nerdpacks=local` 쿼리 문자열을 사용하고 있지 않다는 점에 유의하세요. 앱을 로컬에서 제공하지 않기 때문에 더 이상 필요하지 않습니다.
  </Step>

  <Step>
    홈페이지의 상단 탐색 모음에서 **Integrations & Agents** \[통합 및 에이전트] 로 이동합니다.

    **Apps & Visualizations** \[앱 및 시각화 를] 선택합니다.

    여기에서 리소스 중에서 애플리케이션을 볼 수 있습니다.

    이는 앱을 로컬로 제공할 때와 다릅니다. 대신 앱 오버레이의 **Your apps** \[내 앱] 아래에 구독한 로컬 앱과 게시된 앱이 표시됩니다.
  </Step>

  <Step>
    자세한 내용을 보려면 앱을 클릭하세요.

    출시일과 앱 버전을 확인하세요. 이 페이지에는 지난 강의에서 생성한 정보가 표시됩니다. 아직은 해당 정보를 카탈로그에 제출하지 않았고 앱을 게시해도 해당 정보가 제출되지 않았기 때문에 아직 그렇지 않습니다.
  </Step>
</Steps>

## 카탈로그 정보 제출 [#submit]

애플리케이션을 게시했더라도 카탈로그가 알지 못하는 몇 가지 사항이 있습니다. 지난 강의에서 생성한 설명, 스크린샷, 메타데이터입니다. `nr1 catalog` 이 정보를 제출하고 보는 데 사용됩니다.

<Steps>
  <Step>
    카탈로그 정보 제출:

    ```sh
    nr1 catalog:submit
    [output] Uploading screenshots from nru-programmability-course/publish/ab-test...
    [output]  {success}✔{normal}  Screenshots uploaded from: nru-programmability-course/publish/ab-test
    [output]  {green}✔  {plain}Updated metadata for AbTest 1.0.0
    ```

    모든 것이 올바르게 진행되면 스크린샷과 메타데이터가 업데이트되었음을 알리는 성공 메시지가 표시됩니다.

    그러나 이 정보를 카탈로그에 제출할 때 오류가 발생할 수 있습니다.

    ```sh
    [output] Uploading screenshots...
    [output]  {error}›   {plain}Error: {error}1 error while updating AbTest 1.0.0
    [output]  {error}›
    [output]  {error}›   Invalid Version: Nerdpack version 1.0.0 not found. Have you run `nr1 nerdpack:publish` yet?
    [output]  {error}›   {plain}Code: UNKNOWN
    ```

    그렇다면 1-2분 후에 다시 시도하세요. 카탈로그가 애플리케이션의 새 버전으로 업데이트되는 데 몇 초 정도 걸릴 수 있습니다.

    그래도 작동하지 않으면 `nr1 nerdpack:publish` 으로 앱을 게시했는지 확인하세요.
  </Step>

  <Step>
    카탈로그 정보 보기:

    ```sh
    nr1 catalog:info
    [output] AbTest (Nerdpack):
    [output]     {purple}categoryTerms.0: {plain}browser agent
    [output]     {purple}description: {plain}Nerdpack ab-test
    [output]     {purple}details: {plain}Display test data for our newsletter subscription A/B test
    [output]     {purple}displayName: {plain}AbTest
    [output]     {purple}keywords.0: {plain}a/b test
    [output]     {purple}icon.url: {plain}https://nr3.nr-ext.net/artifact-index-production/a685fec2-29fb-40b0-9f65-4178...
    [output]     {purple}previews.0.url: {plain}https://application-catalog-production.s3.us-east-2.amazonaws.com/nerdpacks/a...
    [output]     {purple}releaseDate: {plain}2021-03-12T15:46:09.600138Z
    [output]     {purple}repository: {plain}https://github.com/newrelic-experimental/nru-programmability-course
    [output]     {purple}tagline: {plain}Win @ newsletter subscriptions
    [output]     {purple}version: {plain}1.0.0
    [output]     {purple}whatsNew.changes: {plain}Initial release! Includes:
    [output]     - A variety of charts for understanding the test r...
    [output]     {purple}whatsNew.version: {plain}1.0.0
    [output] AbTestLauncher (Launcher):
    [output]     {purple}description: {plain}Describe me
    [output]     {purple}displayName: {plain}AbTestLauncher
    [output]     {purple}icon.url: {plain}https://nr3.nr-ext.net/artifact-index-production/a685fec2-29fb-40b0-9f65-4178...
    [output] AbTestNerdlet (Nerdlet):
    [output]     {purple}displayName: {plain}AbTestNerdlet
    [output]     {purple}supportedEntityTypes.mode: NONE
    ```

    `catalog` 의 모든 정보가 여기에 표시됩니다.
  </Step>

  <Step>
    앱을 봅니다.

    자세한 내용을 보려면 앱을 클릭하세요.

    **What's inside** \[내부 내용] 아래에서 실행기 또는 Nerdlet에 추가된 스크린샷을 볼 수 있습니다.

    여기에서 앱 세부정보, 문서 탭, 릴리스 노트 및 스크린샷을 볼 수 있습니다.
  </Step>
</Steps>

## 버전 태그 업데이트 [#update]

귀하의 앱은 메타데이터, 이미지 및 문서가 모두 포함된 Instant 옵저버빌리티 카탈로그에서 멋지게 보입니다. 이전에는 모든 정보가 공개적으로 사용될 준비가 되어 있지 않았기 때문에 앱에 `DEV` 태그를 지정했습니다. 지금이야. 이제 버전 태그를 업데이트할 시간입니다.

<Steps>
  <Step>
    `1.0.0` 앱 버전을 `DEV` 에서 `STABLE` 로 업데이트하세요.

    ```sh
    nr1 nerdpack:tag -t STABLE
    [output]  {success}✔{plain}  Tagged {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain} version {green}1.0.0{plain} as {green}STABLE{plain}.
    ```

    버전을 지정하지 않으면 `nr1` `package.json` 에 지정된 버전을 사용합니다. `-V` 명령을 사용하여 버전을 지정할 수 있습니다. `nr1 nerdpack:tag --help` 명령을 사용하여 `nerdpack:tag` 에 대해 자세히 알아보세요.
  </Step>

  <Step>
    앱 정보 보기:

    ```sh
    nr1 nerdpack:info
    [output] Id: {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380
    [output] Region: {muted}us
    [output] Account ID: 123456
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date           Tags
    [output] -------  -------------  ------
    [output] 1.0.0    {muted}30 minutes ago  {green}STABLE
    ```

    이제 앱에 `STABLE` 태그가 지정되어 공개적으로 사용할 준비가 되었음을 나타냅니다.

    <Callout
      variant="tip"
      title="기술적인 세부사항"
    >
      앱이 공개적으로 사용될 준비가 되어 있더라도 여전히 귀하의 계정 사용자에게만 표시됩니다. 다른 계정은 해당 앱이 공개 Instant 옵저버빌리티 카탈로그에 추가되지 않는 한 다른 개인 계정에서 생성된 앱을 볼 수 없습니다.
    </Callout>
  </Step>
</Steps>

이제 귀하의 앱이 게시되고 해당 메타데이터가 제출되었으므로 Instant 옵저버빌리티에서 귀하의 계정으로 앱을 구독할 수 있습니다. 다음 강의에서는 새 애플리케이션을 구독하고 구독 취소하는 방법을 배우게 됩니다.

<Callout variant="course">
  이 강의는 처음부터 New Relic 제작 방법을 가르치는 과정의 일부입니다. 다음 강의를 계속 진행하세요: New Relic 제작을 구독하세요.
</Callout>
