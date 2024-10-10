---
title: Nerdpack의 출시 버전에 태그를 지정하세요.
tags:
  - New Relic
  - Nerdpack
metaDescription: Learn to tag your Nerdpack's release version.
freshnessValidatedDate: never
translationType: machine
---

Nerdpack 버전에 태그를 지정하여 추적하고 구독하세요. 구독을 방지하거나 카탈로그에서 Nerdpack을 숨기려면 버전의 태그를 해제하세요.

## CLI 업데이트

명령을 실행하기 전에 최신 버전의 CLI가 있는지 확인하십시오.

```sh
nr1 update
```

## 권한을 확인하세요

Nerdpack 버전에 태그를 지정하려면 다음이 필요합니다.

* 게시한 계정에 액세스
* Nerdpack 관리에 [필요한 권한입니다](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps) .

## Nerdpack 게시

태그를 지정하기 전에 생성한 Nerdpack을 [게시](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) 해야 합니다.

## 버전에 태그 지정

뉴렐릭 앱 카탈로그에 Nerdpack 버전을 게시한 후 `nr1` CLI를 사용하여 태그를 지정할 수 있습니다.

<Steps>
  <Step>
    Nerdpack의 루트 폴더에서 `nr1 nerdpack:tag` 실행합니다.

    ```sh
    nr1 nerdpack:tag --tag=DEV
    [output] {success}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {green}1.0.0{normal} as {green}DEV{normal}.
    ```

    여기서는 `1.0.0` 버전을 `DEV` 로 태그했습니다.

    이제 귀하와 귀하 계정의 다른 사용자가 이 태그를 사용할 수 있습니다.

    * 계정에 Nerdpack을 추가하면 구독 옵션으로 태그가 표시됩니다.
    * `DEV` 태그를 구독하고 나중에 업데이트되는 경우(예: `DEV` `1.0.1`버전에 적용됨) 다시 구독하지 않고도 자동으로 새 버전으로 업그레이드됩니다.

    <Callout variant="important">
      태그 출시 버전의 기능 중 하나는 태그를 구독한 사용자가 해당 태그가 다른 버전에 사용될 때 자동으로 업데이트된다는 것입니다. 즉, 사용자가 한 버전(예: `1.0.0` 을 테스트하고 동일한 태그를 다른 버전(예: `1.0.1` 에 적용하면 해당 사용자의 계정에 버전 `1.0.1` (가) 표시되며 더 이상 해당 버전에 액세스할 수 없습니다. Nerdpack은 이전에 테스트 중이었습니다. 종종 이는 예상되는 동작이지만 태그를 사용할 때 이러한 부작용을 고려해야 합니다.
    </Callout>
  </Step>

  <Step>
    Nerdpack의 레지스트리 정보를 확인하세요.

    ```sh
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date         Tags
    [output] -------  -----------  ----
    [output] 1.0.0    {muted}5 hours ago{green}  DEV
    ```

    이 출력은 `1.0.0` 버전의 `DEV` 태그를 확인합니다.
  </Step>
</Steps>

## 버전 태그 해제

Nerdpack의 더 많은 버전을 구축하면 태그를 최신 버전으로 업데이트할 수 있습니다. 그러나 `nr1` 사용하여 Nerdpack에서 태그를 제거할 수도 있습니다.

<Steps>
  <Step>
    Nerdpack의 루트 디렉터리에서 레지스트리 정보를 확인하세요.

    ```sh
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date               Tags
    [output] -------  -----------------  ----
    [output] 2.0.0    {muted}a few seconds ago{green}  DEV
    [output] 1.0.1    {muted}8 minutes ago{green}      BETA, STABLE
    [output] 1.0.0    {muted}6 hours ago
    ```

    여기에서는 버전 `1.0.0` 에 태그가 없고, 버전 `1.0.1` 에 태그 2개( `BETA` 및 `STABLE` 가 있으며, 버전 `2.0.0` 에 태그 1개( `DEV` 가 있음을 알 수 있습니다.
  </Step>

  <Step>
    Nerdpack 버전에서 `BETA` 태그를 제거합니다.

    ```sh
    nr1 nerdpack:untag --tag=BETA
    [output] {success}✔{normal}  Removed nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} tag {green}BETA{normal}.
    ```
  </Step>

  <Step>
    Nerdpack에서 태그가 제거되었는지 확인하세요.

    ```sh
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date            Tags
    [output] -------  --------------  ----
    [output] 2.0.0    {muted}5 minutes ago{green}   DEV
    [output] 1.0.1    {muted}13 minutes ago{green}  STABLE
    [output] 1.0.0    {muted}6 hours ago
    ```
  </Step>
</Steps>

## Nerdpack 버전 태그 지정 문제 해결

때로는 Nerdpack 버전에 태그를 지정할 때 문제가 발생할 수 있습니다. Nerdpack에 태그를 지정할 수 없거나 Nerdpack의 태그를 해제할 수 없는 경우 이러한 문제를 해결하기 위한 몇 가지 일반적인 솔루션을 고려하십시오.

### Nerdpack 게시

Nerdpack을 먼저 게시하지 않고 태그를 지정하려고 하면 오류가 발생합니다.

```sh
nr1 nerdpack:tag --tag=DEV
[output] {error}›{normal}   Error: A downstream error occurred.
```

이 오류 메시지에는 많은 내용이 포함되어 있지 않지만 `--verbose` 옵션을 사용하면 자세한 정보를 볼 수 있습니다.

```sh
nr1 nerdpack:tag --tag=DEV --verbose
[output] init version: @oclif/command@1.8.0 argv: [ {green}'--tag=DEV'{normal}, {green}'--verbose'{normal}, [length]: {yellow}2{normal} ]
[output] {blue}dist/metadata.json{normal} does not exist. package.json will be used instead.
[output] Using profile {muted}account-1234567
[output] {purple}Request:{normal} POST https://api.newrelic.com/graphql
[output] {purple}Data:{green} mutation {
[output]                 {green}nerdpackTagVersion(
[output]                     {green}nerdpackId: "ab123c45-678d-9012-efg3-45hi6jkl7890",
[output]                     {green}versionTag: {
[output]                         {green}tag: "DEV",
[output]                         {green}version: "1.0.0"
[output]                     {green}}
[output]                 {green}) {
[output]                     {green}nerdpackId
[output]                     {green}tags
[output]                     {green}version
[output]                 {green}}
[output]             {green}}
[output] {purple}Headers: {
[output]   {green}'API-Key'{normal}: {green}'<YOU USER KEY>'{normal},
[output]   {green}'Content-Type'{normal}: {green}'application/graphql'
[output] }
```

이 보다 자세한 오류 메시지는 `nr1 nerdpack:tag` 에 대해 뒤에서 실행되는 GraphQL을 보여줍니다. 여기서 메시지의 중요한 부분은 다음과 같습니다.

```sh
[output] {blue}dist/metadata.json{normal} does not exist. package.json will be used instead.
```

앱을 게시하면 `dist` 디렉터리가 생성됩니다. 따라서 아직 게시되지 않았기 때문에 이 디렉토리는 존재하지 않으며 `nr1` Nerdpack에 대한 세부정보를 찾기 위해 `package.json` 로 대체됩니다. 그러나 `package.json` 의 UUID가 뉴렐릭 레지스트리에 없기 때문에 명령이 실패했습니다.

따라서 버전에 태그를 지정하기 전에 레지스트리에 게시하세요.

```sh
nr1 nerdpack:publish
nr1 nerdpack:tag --tag=DEV
```

<Callout variant="tip">
  버전을 구현하는 동시에 버전을 태그할 수도 있다는 점을 기억하세요!

  ```sh
  nr1 nerdpack:publish --tag=DEV
  ```
</Callout>

### Nerdpack 구독 취소

구독자가 없는 태그만 제거할 수 있습니다. 사용자가 구독하고 있는 태그를 제거하려고 하면 오류가 발생합니다.

```sh
nr1 nerdpack:info
[output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
[output] Region: {muted}us
[output] Account ID: 1234567
[output] Local version: 2.0.0
[output] Subscription Model: OWNER_AND_ALLOWED
[output] Version Count: 3
[output]
[output] Version  Date         Tags
[output] -------  -----------  ----
[output] 2.0.0    {muted}an hour ago  {green}DEV
[output] 1.0.1    {muted}an hour ago
[output] 1.0.0    {muted}6 hours ago
[output]
nr1 nerdpack:untag -t DEV
[output] {error}›{normal}   Error: A downstream error occurred.
```

이 경우 Nerdpack을 구독하고 있는지 확인하세요.

```sh
nr1 subscription:list
[output] {muted}Listing subscribed deployed nerdpacks on your account:
[output] Version  UUID                                  Name               Date         User
[output] -------  ------------------------------------  -----------------  -----------  ----------
[output] 2.0.0    {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal}  MyAwesomeNerdpack  {muted}an hour ago  1000383529
```

이는 귀하가 `MyAwesomeNerdpack`(를) 구독하고 있음을 나타냅니다. 구독을 취소한 후 `DEV` 태그를 다시 제거해 보세요.

```sh
nr1 nerdpack:unsubscribe
[output] Unsubscribed account {green}1234567{normal} from the nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} on the {green}DEV{normal} channel.
[output]
nr1 nerdpack:untag --tag=DEV
[output] {success}✔{normal}  Removed nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} tag {green}DEV{normal}.
[output]
nr1 nerdpack:info
[output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
[output] Region: {muted}us
[output] Account ID: {green}1234567
[output] Local version: 2.0.0
[output] Subscription Model: OWNER_AND_ALLOWED
[output] Version Count: 3
[output]
[output] Version  Date         Tags
[output] -------  -----------  ----
[output] 2.0.0    {muted}an hour ago
[output] 1.0.1    {muted}an hour ago
[output] 1.0.0    {muted}6 hours ago
```
