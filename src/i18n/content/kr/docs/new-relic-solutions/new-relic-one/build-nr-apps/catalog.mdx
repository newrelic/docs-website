---
title: Nerdpack의 카탈로그 정보를 업데이트하세요
tags:
  - New Relic
  - Nerdpack
metaDescription: Learn to describe your Nerdpack in the Instant Observability catalog.
freshnessValidatedDate: never
translationType: machine
---

스크린샷, 설명, 기타 메타데이터를 Nerdpack에 추가하고 모두 [Instant 옵저버빌리티](https://newrelic.com/instant-observability) 에 업로드하세요.

## CLI 업데이트 [#update-cli]

명령을 실행하기 전에 최신 버전의 CLI가 있는지 확인하십시오.

```shell
nr1 update
```

## 권한을 확인하세요 [#check-permissions]

Nerdpack을 게시하고 카탈로그 정보를 업데이트하려면 다음이 필요합니다.

* 게시한 계정에 액세스합니다.
* Nerdpack 관리에 [필요한 권한입니다](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps) .

## Nerdpack 게시 [#publish-nerdpack]

카탈로그 정보를 업데이트하려면 먼저 생성한 Nerdpack을 [게시](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) 해야 합니다.

## Nerdpack의 카탈로그 메타데이터 업데이트 [#update-nerdpack]

Nerdpack을 [Instant 옵저버빌리티](https://newrelic.com/instant-observability) 카탈로그에 게시한 후 Nerdpack의 메모데이터를 업데이트하여 사용자에게 Nerdlet 또는 시각화에 대한 모든 정보를 알려주세요.

```json fileName=catalog/config.json
{
  "tagline": "",
  "details": "",
  "categoryTerms": [],
  "keywords": [],
  "repository": "",
  "whatsNew": "",
  "support": {
    "email": {
      "address": ""
    },
    "issues": {
      "url": ""
    },
    "community": {
      "url": ""
    }
  }
}
```

<Steps>
  <Step>
    [뉴렐릭](https://one.newrelic.com) 홈페이지에서 상단 탐색 메뉴의 <DNT>**+ Integrations & Agents**</DNT> 으로 이동하세요.
  </Step>

  <Step>
    앱 필터나 검색창을 사용하여 게시된 Nerdpack을 찾으세요. Nerdpack의 이름과 `nr1.json` 에 있는 간략한 설명 외에는 정보나 세부정보 페이지가 없습니다. 스크린샷, 아이콘, 세부정보 또는 새로운 기능이 없습니다. 이를 위해서는 Nerdpack에 카탈로그 정보를 제공해야 합니다.
  </Step>

  <Step>
    Nerdpack의 루트에서 Nerdpack의 스크린샷과 메타데이터를 보관할 **카탈로그** 디렉터리를 만듭니다.

    ```sh
    nr1 create --type catalog
    [output] {success}✔{normal}  created: launchers/launcher/catalog
    [output] {success}✔{normal}  created: nerdlets/home/catalog
    [output]
    [output] {success}✔{normal}  catalog created successfully!
    [output]    {purple}catalog{normal} is available at "./catalog"
    ```

    루트 `catalog` 디렉터리 내에서 Nerdpack에 대한 정보를 사용자에게 표시하기 위한 특정 파일과 디렉터리를 찾을 수 있습니다.

    ```sh
    ls catalog
    [output] README.md         additionalInfo.md config.json       documentation.md  {blue}screenshots
    ```

    <table>
      <thead>
        <tr>
          <th>
            파일
          </th>

          <th>
            설명
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            읽어보기.md
          </td>

          <td>
            카탈로그의 정보와 메타데이터를 사용하는 방법을 알려주는 마크다운 파일
          </td>
        </tr>

        <tr>
          <td>
            구성.json
          </td>

          <td>
            다음 필드를 포함하는 JSON 파일:

            * `tagline`: 제작에 대한 간략한 헤드라인입니다. 30자를 초과할 수 없습니다.

            * `repository`: Nerdpack의 원격 저장소에 대한 URL입니다. 1000자를 초과할 수 없습니다.

            * `details`: 너드팩의 목적과 사용방법. 1000자를 초과할 수 없습니다. 서식 지정에 줄바꿈을 사용하고 마크다운이나 HTML을 포함하지 마세요.

            * `categoryTerms`: Nerdpack을 [Instant 옵저버빌리티](https://newrelic.com/instant-observability) 카탈로그의 카테고리와 일치시키는 용어 목록입니다. NerdGraph를 사용하여 카테고리 용어 매핑을 조회할 수 있습니다.

              * [미국 쿼리](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20nr1Catalog%20%7B%0A%20%20%20%20%20%20categories%20%7B%0A%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20terms%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
              * [EU 쿼리](https://api.eu.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20nr1Catalog%20%7B%0A%20%20%20%20%20%20categories%20%7B%0A%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20terms%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

            * `keywords`: Nerdpack의 검색 가능성을 향상시키기 위한 관련 단어 목록입니다. 50단어를 초과할 수 없으며 각 단어는 64자를 초과할 수 없습니다.

            * `support`: 다음을 포함하는 객체:

              * `issues`: 저장소의 문제 목록에 대한 URL입니다. 예를 들어 GitHub를 사용하는 경우 **Issues** \[문제] 탭입니다.
              * `email`: 특수를 지원하는 팀의 유효한 이메일 주소입니다.
              * `community`: 문제 해결 및 사용 지원을 위한 지원 스레드, 포럼 또는 웹사이트의 URL입니다.

            * `whatsNew`: 현재 릴리스 버전의 변경 사항을 글머리 기호로 표시한 목록입니다. 500자를 초과할 수 없습니다. 형식 지정에 줄바꿈을 사용하고 마크다운이나 HTML을 포함하지 마세요.

              실제 구현을 보려면 [페이지뷰 지도 애플리케이션의 `config.json`](https://github.com/newrelic/nr1-pageview-map/blob/main/catalog/config.json) 확인하세요.
          </td>
        </tr>

        <tr>
          <td>
            문서.md
          </td>

          <td>
            Nerdpack의 Nerdlets 또는 시각화를 사용하는 방법을 사용자에게 알려주는 마크다운 파일입니다. 이는 세부정보 보기의 **Documentation** \[문서] 탭에 표시됩니다.
          </td>
        </tr>

        <tr>
          <td>
            추가정보.md
          </td>

          <td>
            애플리케이션 사용에 대한 추가 정보를 위한 선택적 마크다운 파일
          </td>
        </tr>

        <tr>
          <td>
            스크린샷
          </td>

          <td>
            Nerdlet의 선택된 이미지 또는 시각화와 같이 Nerdpack을 보여주는 스크린샷이 포함된 디렉토리입니다. 여기에는 6개 이상의 이미지가 포함될 수 있습니다. 모든 스크린샷은 다음 기준을 충족해야 합니다.

            * 3:2 화면비
            * PNG 형식
            * 가로 방향
            * 너비 1600-2400픽셀
          </td>
        </tr>
      </tbody>
    </table>

    또한 이 명령은 Nerdpack의 각 실행기, Nerdlet 및 시각화에 대한 `catalog` 디렉터리를 생성합니다. 내부에는 각 Nerdpack 항목에 대한 스크린샷을 추가할 수 있는 디렉토리가 있습니다.

    ```shell
    ls launchers/launcher/catalog
    [output] {blue}screenshots
    [output]
    ls nerdlets/home/catalog
    [output] {blue}screenshots
    ```
  </Step>

  <Step>
    Nerdpack의 `documentation.md` 파일을 업데이트합니다.

    ```md fileName=catalog/documentation.md
    Enter your first and last name into the fields provided. When you're done, press **Submit** to see a personalized "Hello!" message.
    ```
  </Step>

  <Step>
    `config.json` 파일을 업데이트합니다.

    ```json fileName=catalog/config.json
    {
        "tagline": "Say hi!",
        "details": "DemoApp says Hello to a user.",
        "categoryTerms": [],
        "keywords": ["hello world"],
        "repository": "https://github.com/newrelic/developer-website",
        "whatsNew": "feat: Initial commit"
    }
    ```
  </Step>

  <Step>
    루트 `screenshots` 디렉터리 또는 Nerdpack 항목 `screenshots` 디렉터리에 스크린샷을 포함합니다.
  </Step>

  <Step>
    Instant 옵저버빌리티 카탈로그에 정보를 제출하십시오:

    ```shell
    nr1 catalog:submit
    [output] Uploading screenshots from demo-app...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app
    [output] Uploading screenshots from demo-app/launchers/launcher...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/launchers/launcher
    [output] Uploading screenshots from demo-app/nerdlets/home...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/nerdlets/home
    [output]  {success}✔{normal}  Updated metadata for DemoApp 1.0.0
    ```
  </Step>

  <Step>
    변경 사항을 보려면 Instant 옵저빌리버티로 이동하세요. 새로운 세부정보를 보려면 Nerdpack을 클릭하세요. 그런 다음 **What's inside** \[내부 내용을] 클릭하여 Nerdpack의 개별 항목에 대해 업로드한 스크린샷을 확인하세요.
  </Step>
</Steps>

## Nerdpack 아이콘 업데이트 [#nerdpack-icons]

Nerdpack 내에서는 두 가지 유형의 아이콘을 설정할 수 있습니다.

* 카탈로그에서 Nerdpack을 나타내는 전체 Nerdpack에 대한 하나입니다.
* Nerdlet을 나타내는 각 실행기당 하나씩입니다.

이러한 아이콘을 교체하고 Nerdpack을 게시하여 변경 사항을 확인하세요.

<Steps>
  <Step>
    Nerdpack 루트에서 `icon.png` 업데이트합니다. 이 아이콘은 카탈로그와 Nerdpack의 상세 페이지에서 사용됩니다.
  </Step>

  <Step>
    하나 이상의 실행기로 Nerdpack을 빌드하는 경우 각 실행기의 하위 폴더에서 `icon.png` 업데이트하세요.
  </Step>

  <Step>
    `package.json` 버전을 업데이트하세요.

    ```json fileName=package.json lineHighlight=4
    {
      "private": true,
      "name": "demo-app",
      "version": "1.0.1",
      "scripts": {
        "start": "nr1 nerdpack:serve",
        "test": "exit 0"
      },
      "nr1": {
        "uuid": "f2dbc999-e9a3-49b9-933d-5a704c6750bd"
      },
      "dependencies": {
        "prop-types": "^15.6.2",
        "react": "^16.6.3",
        "react-dom": "^16.6.3"
      },
      "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
    }
    ```

    이를 통해 Nerdpack의 새 버전을 게시할 수 있습니다.
  </Step>

  <Step>
    Nerdpack [게시](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) :

    ```sh
    nr1 nerdpack:publish
    ```
  </Step>

  <Step>
    `catalog/config.json` 에서 `whatsNew` 문자열을 업데이트합니다.

    ```json fileName=catalog/config.json
    {
      "tagline": "Say hi!",
      "details": "DemoApp says Hello to a user.",
      "categoryTerms": [],
      "keywords": ["hello world"],
      "repository": "https://github.com/newrelic/developer-website",
      "whatsNew": "feat: Add new icons"
    }
    ```

    이것은 Nerdpack의 최신 버전에 추가한 내용을 사용자에게 알려줍니다.
  </Step>

  <Step>
    이 새 메타데이터를 카탈로그에 제출합니다.

    ```sh
    nr1 catalog:submit
    [output] Uploading screenshots from demo-app...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app
    [output] Uploading screenshots from demo-app/launchers/launcher...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/launchers/launcher
    [output] Uploading screenshots from demo-app/nerdlets/home...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/nerdlets/home
    [output]  {success}✔{normal}  Updated metadata for DemoApp 1.0.1
    ```
  </Step>

  <Step>
    카탈로그로 이동하여 [Nerdpack을 구독하여](/docs/new-relic-solutions/new-relic-one/build-nr-apps/subscribe) 새 아이콘을 확인하세요.
  </Step>
</Steps>

## 카탈로그 정보 제출 관련 문제 해결 [#resolve-issues]

때로는 카탈로그 메타데이터로 작업할 때 문제가 발생할 수 있습니다. 이러한 문제를 해결하기 위한 몇 가지 일반적인 솔루션을 고려해 보십시오.

### Nerdpack 게시 [#publish-nerdpack]

이미 게시된 Nerdpack에 대한 카탈로그 메타데이터만 제출할 수 있다는 점을 기억하세요. 게시되지 않은 Nerdpack에 대한 정보를 제출하려고 하면 CLI가 다음을 지원하려고 시도합니다.

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {error}›{normal}   Error: {error}1 error while updating DemoApp 1.0.0
[output]  {error}›
[output]  {error}›   Invalid Version: Nerdpack version 1.0.0 not found. Have you run `nr1 nerdpack:publish` yet?
[output]  {error}›{normal}   Code: UNKNOWN
```

### 이미지 크기 조정 [#resize-images]

카탈로그의 스크린샷은 이 가이드의 앞부분에 지정된 기준을 충족해야 합니다. 그렇지 않은 경우 CLI는 다음을 지원하려고 시도합니다.

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {error}›{normal}   Error: {error}2 errors while updating DemoApp 1.0.1
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/screenshots/screenshot.png
[output]  {error}›{normal}   {red}Invalid Screenshot: screenshot.png has a size ratio of 4:2. Update size ratio to 3:2.
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/screenshots/screenshot.png
[output]  {error}›{normal}   {red}Invalid Screenshot: screenshot.png has a width of 3054px. Update size to be between 1600px and 2400px.
[output]  {error}›{normal}   Code: UNKNOWN
```

### 끈의 길이를 확인하세요 [#check-strings]

`config.json` 의 콘텐츠 대부분에는 문자열 길이 요구 사항이 있습니다. `config.json` 파일을 업데이트할 때 이러한 요구 사항을 검토하고 이를 준수해야 합니다. 그렇지 않으면 설정을 카탈로그에 제출하려고 할 때 오류가 표시됩니다.

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {success}✔{normal}  Screenshots uploaded
[output]  {error}›{normal}   Error: {error}2 errors while updating DemoApp 1.0.1
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/config.json
[output]  {error}›{normal}   {error}Invalid Metadata: `details` has a character length of 2204. Must be no longer than 1000 characters
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/config.json
[output]  {error}›{normal}   {error}Invalid Metadata: `tagline` has a character length of 266. Must be no longer than 30 characters
[output]  {error}›{normal}   Code: UNKNOWN
```
