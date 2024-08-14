---
title: Nerdpack 게시
tags:
  - New Relic
  - Nerdpack
  - Publish
metaDescription: Learn to publish your Nerdpack to Instant Observability.
freshnessValidatedDate: never
translationType: machine
---

Nerdpack이 아직 개발 중이든, 테스트 준비 중이든, 안정적이든 관계없이 게시하여 다른 사람들과 공유하세요.

## CLI 업데이트

명령을 실행하기 전에 최신 버전의 CLI가 있는지 확인하십시오.

```shell
nr1 update
```

## 권한을 확인하세요

Nerdpack을 게시하면 Instant 옵저버빌리티 카탈로그에 등록됩니다. 여기에서 일부 사용자는 Nerdpack을 구독할 수 있습니다. 구독 사용자는 다음을 갖추어야 합니다.

* Nerdpack을 게시한 계정에 대한 액세스
* Nerdpack 관리에 [필요한 권한](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps)

## 패키지 버전 업데이트

[Instant 옵저버빌리티](https://newrelic.com/instant-observability) 카탈로그에는 패키지 버전을 한 번만 게시할 수 있습니다. 예를 들어 버전 1.0.0의 두 인스턴스를 게시할 수 없습니다. 따라서 코드의 새 버전을 구현, 배포할 때마다 Nerdpack의 `package.json` 파일에서 해당 버전을 늘려야 합니다.

```json fileName=package.json lineHighlight=4
{
  "private": true,
  "name": "demo-app",
  "version": "1.0.0",
  "scripts": {
    "start": "nr1 nerdpack:serve",
    "test": "exit 0"
  },
  "nr1": {
    "uuid": "ab123c45-678d-9012-efg3-45hi6jkl7890"
  },
  "dependencies": {
    "prop-types": "^15.6.2",
    "react": "^16.6.3",
    "react-dom": "^16.6.3"
  },
  "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
}
```

<Callout variant="tip">
  Nerdpack 버전은 의미론적 버전 관리를 따릅니다. 자세히 알아보려면 [설명서를](https://semver.org) 읽어보세요.
</Callout>

## Nerdpack용 UUID 생성

`nr1 create --type nerdpack` 사용하여 처음부터 Nerdpack을 구축한 경우 Nerdpack에는 고유 식별자가 있습니다. 루트 디렉터리의 `nr1.json` 파일에서 이 식별자를 찾으세요.

```json fileName=nr1.json lineHighlight=3
{
  "schemaType": "NERDPACK",
  "id": "ab123c45-678d-9012-efg3-45hi6jkl7890",
  "displayName": "DemoApp",
  "description": "Nerdpack demo-app"
}
```

이 ID는 Nerdpack을 카탈로그에 게시할 때 고유해야 합니다. 플랫폼은 ID를 인식하면 Nerdpack을 거부합니다. 따라서 기존 Nerdpack을 복제했거나 오픈 소스 코드를 사용하는 경우 새 UUID를 생성하세요.

```shell
nr1 nerdpack:uuid --generate --force
```

<Callout variant="tip">
  자세히 알아보려면 [`nr1 nerdpack:uuid`](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-nerdpack/#nr1-nerdpackuuid) 문서를 읽어보세요. 또는 `nr1` 도움말 페이지를 확인하세요.

  ```shell
  nr1 nerdpack:uuid --help
  ```
</Callout>

## Nerdpack 게시

<Steps>
  <Step>
    Nerdpack의 루트 폴더에서 `nr1 nerdpack:publish` 실행합니다.

    ```shell
    nr1 nerdpack:publish
    ```

    Nerdpack을 성공적으로 게시했다면 다음을 포함한 몇 가지 성공 출력이 표시됩니다.

    ```shell
    [output] {green}✔{normal}  Nerdpack published successfully!
    [output] {green}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {blue}1.0.0{normal} as {blue}STABLE{normal}.
    ```

    이 출력은 게시된 Nerdpack을 설명합니다. 먼저 Nerdpack의 ID(`ab123c45-678d-9012-efg3-45hi6jkl7890`)를 나타냅니다. 그런 다음 해당 버전(`1.0.0`)입니다. 마지막으로 해당 버전 태그(`STABLE`)입니다.

    이미 Nerdpack의 ID와 버전을 관리하고 계시지만, 버전 태그는 새로운 것입니다. Nerdpack 버전을 관리하려면 임의의 태그를 사용하여 태그를 지정할 수 있습니다. 예를 들어 버전이 아직 개발 중인 경우 `DEV` 태그를 사용하여 태그를 지정할 수 있습니다. 버전이 QA 단계로 이동하는 경우 `QA` 태그를 지정할 수 있습니다. 프로덕션 준비가 되면 `STABLE` 태그를 지정할 수 있습니다.

    <Callout variant="tip">
      자세한 내용은 [태그 가이드를](/docs/new-relic-solutions/new-relic-one/build-nr-apps/tag) 읽어보세요.
    </Callout>

    Nerdpack을 태그와 함께 게시하려면 `-t` 또는 `--tag` 옵션을 사용하세요.

    ```shell
    nr1 nerdpack:publish --tag DEV
    ```

    `nr1 nerdpack:publish` 출력에서 본 것처럼 태그를 전달하지 않으면 `nr1` `STABLE` 태그를 자동으로 적용합니다. 그러나 `-T` 또는 `--skip-tag` 옵션을 사용하면 릴리스에 태그를 적용하지 않도록 지시할 수 있습니다.

    ```shell
    nr1 nerdpack:publish --skip-tag
    ```

    또한 연습 실행을 수행하여 원하는 방식으로 Nerdpack을 게시할 수 있는지 확인할 수도 있습니다.

    ```shell
    nr1 nerdpack:publish --dry-run
    ```
  </Step>

  <Step>
    Nerdpack을 성공적으로 게시한 후 [뉴렐릭](https://one.newrelic.com) 으로 이동하세요. 로컬로 제공되는 Nerdpack이 아닌 게시된 Nerdpack을 볼 예정이므로 `?nerdpacks=local` 쿼리 문자열을 전달할 필요가 없습니다.
  </Step>

  <Step>
    **+ Integrations & Agents** \[+ 통합 및 에이전트] 로 이동합니다. 뉴킹릭 계약을 게시했든 사용자 정의 시각화를 게시했든 여기에서 프로젝트를 찾을 수 있습니다.
  </Step>

  <Step>
    앱 필터나 검색창을 사용하여 게시된 Nerdpack을 찾으세요.

    <Callout variant="tip">
      태그 버전이 있는 Nerdpacks만 [Instant 옵저버빌리티](https://newrelic.com/instant-observability) 에 표시됩니다. 따라서 태그 없이 게시했거나 게시된 Nerdpack에서 태그를 제거한 경우 카탈로그에 해당 태그가 표시되지 않습니다.
    </Callout>
  </Step>
</Steps>

## 게시된 Nerdpack 액세스 관련 문제 해결

때로는 Nerdpack을 게시할 때 문제가 발생할 수 있습니다. 코드 문제로 인해 Nerdpack을 게시할 수 없거나 Instant 옵저버빌리티에서 Nerdpack을 찾을 수 없는 경우 이러한 문제를 해결하기 위한 몇 가지 일반적인 솔루션을 고려해보세요.

### 명령 디버그

Nerdpack을 게시하려고 할 때 `nr1` 명령의 출력을 주의 깊게 읽으십시오. 다음을 포함한 성공 출력을 받을 수 있습니다.

```shell
[output] {green}✔{normal}  Nerdpack published successfully!
[output] {green}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {blue}1.0.0{normal} as {blue}STABLE{normal}.
```

그러나 출력에는 Nerdpack에 일부 오류가 표시될 수 있습니다. 예를 들어:

```shell
[output] Publishing Nerdpack DemoApp ({purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal})
[output] {error}›{normal}   Error: There is already a Nerdpack with given id & version.
[output] {error}›{normal}   Code: 409
```

또한 더 자세한 출력을 보는 데 도움이 될 수도 있습니다. 더 많은 콘텐츠를 표시하려면 `--verbose` 명령을 사용하세요.

```sh
nr1 nerdpack:publish --verbose
```

## 게시된 Nerdpack 정보 공개

뉴렐릭에서 Nerdpack을 찾지 못한 경우 태그가 아닐 수도 있습니다. 게시된 Nerdpack 버전 중 하나 이상에 **Apps** \[앱] 페이지에 표시하려면 태그가 있어야 한다는 점을 기억하세요. `nr1 nerdpack:info`) 사용하여 게시된 Nerdpack에 대한 자세한 정보를 확인하세요.

```shell
nr1 nerdpack:info
[output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
[output] Region: {muted}us
[output] Account ID: 3014918
[output] Local version: 1.0.0
[output] Subscription Model: OWNER_AND_ALLOWED
[output] Version Count: 1
[output]
[output] {white}Version  Date         Tags
[output] -------  -----------  ----
[output] 1.0.0    {muted}3 hours ago
```

이 예에는 게시된 버전이 하나 있지만 태그가 지정되지 않았습니다. 다음을 사용하여 게시된 버전에 태그를 지정할 수 있습니다.

```sh
nr1 nerdpack:tag --from-version=1.0.0 --tag=DEV
```

이제 브라우저 페이지를 새로 고치면 **Apps** \[앱] 에 Nerdpack이 표시됩니다.

<Callout variant="tip">
  자세히 알아보려면 [`nr1 nerdpack:tag`](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-nerdpack/#nr1-nerdpacktag) 문서를 읽어보세요.
</Callout>

## 지역 프로필을 확인하세요

`nr1` 사용하면 [기본 뉴렐릭 프로필을 설정할](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-common/#nr1-profiles) 수 있습니다. 이 프로필은 명령의 `--profile` 옵션으로 달리 지정하지 않는 한 모든 명령에 사용됩니다. Nerdpack을 게시하면 귀하의 계정에 액세스할 수 있는 사용자만 게시된 Nerdpack을 볼 수 있습니다.

따라서 뉴렐릭에서 Nerdpack을 찾지 못했지만 그것이 게시되었다는 것을 알고 있다면 로컬 프로필과 브라우저에서 사용 중인 프로필을 비교하여 동일한지 확인하세요.
