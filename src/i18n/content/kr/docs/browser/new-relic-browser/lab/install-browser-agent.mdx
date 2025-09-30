---
title: '랩 파트 2: 애플리케이션 계측'
description: 'New Relic 브라우저 모니터링을 사용하여 사이트를 개선하는 방법에 대한 여러 부분으로 구성된 랩의 파트 2: React 애플리케이션 계측'
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="course"
  title="랩"
>
  이 절차는 뉴렐릭 <InlinePopover type="browser"/>을(를) 사용하여 웹 앱 문제를 해결하는 방법을 알려주는 실습의 일부입니다.

  랩의 각 절차는 마지막 절차를 기반으로 하므로 이 절차를 시작하기 전에 마지막 절차인 [랩 환경 설정을](/docs/browser/new-relic-browser/lab/set-up-env/)완료했는지 확인하십시오.
</Callout>

이제 React 앱이 브라우저에서 실행되고 있습니다. 사용자가 사이트에서 항상 최상의 경험을 하도록 해야 합니다. 이를 위해서는 페이지 로드 시간과 같은 사용자 경험에 대한 통찰력이 필요합니다.

이 목표를 달성하려면 브라우저 에이전트를 설치해야 합니다.

## 브라우저 에이전트 설치

<Steps>
  <Step>
    [New Relic](https://one.newrelic.com/)으로 이동하여 계정으로 로그인합니다.
  </Step>

  <Step>
    상단 탐색 메뉴 오른쪽에서 <DNT>**Integrations & Agents**</DNT> 클릭합니다.

    <img
      title="Integrations & Agents button in the UI"
      alt="Screenshot of the Integrations & Agents button in the UI"
      src="/images/browser-lab-screenshot-add-data.webp"
    />
  </Step>

  <Step>
    <DNT>**Browser & mobile**</DNT> 까지 아래로 스크롤하고 <DNT>**Browser monitoring**</DNT>) 선택합니다.

    <img
      title="Arrow pointing to new relic browser"
      alt="Arrow pointing to new relic browser"
      src="/images/browser-lab-screenshot-newrelic-browser.webp"
    />

    UI는 브라우저 에이전트 설치 과정을 안내합니다.
  </Step>

  <Step>
    구현, 배포 방법으로 <DNT>**Copy/paste JavaScript code**</DNT> 선택합니다.

    <img
      title="Select deployment method"
      alt="Select deployment method"
      src="/images/browser-lab-screenshot-select-deployment-method.webp"
    />
  </Step>

  <Step>
    <DNT>**Name your app**</DNT> 까지 아래로 스크롤합니다. 앱 이름을 <DNT>**Relicstaurants**</DNT> 로 지정하고 <DNT>**Enable**</DNT> 클릭합니다.

    <img
      title="Enable browser agent for your app"
      alt="Enable browser agent for your app"
      src="/images/browser-lab-screenshot-enable-browser.webp"
    />

    이렇게 하면 브라우저 모니터링을 활성화하는 JavaScript 코드 스니펫이 제공됩니다. 클립보드에 복사합니다.

    <img
      title="javascript code snippet to enable browser agent"
      alt="javascript code snippet to enable browser agent"
      src="/images/browser-lab-screenshot-browser-code-snippet.webp"
    />
  </Step>

  <Step>
    선택한 IDE에서 앱을 엽니다.

    앱의 _public/index.html_ 파일에서 복사한 자바스크립트 스니펫을 `<head>`안에 붙여넣습니다.

    ```html lineHighlight=22-23 fileName=public/index.html
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Web site created using create-react-app" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap"
        rel="stylesheet">
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      <title>Relicstaurants</title>
        <!--Replace these lines with your 
          browser monitoring code snippet -->
    </head>

    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
    </body>

    </html>
    ```

    귀하의 애플리케이션은 이제 브라우저 에이전트로 계측됩니다.
  </Step>
</Steps>

## 애플리케이션 다시 시작

애플리케이션을 구성했으므로 이제 로컬 서버를 다시 시작할 차례입니다.

```bash
npm run build
npm run newstart
```

부하 생성기도 다시 시작하십시오.

```bash
python3 simulator.py
```

<Callout variant="important">
  올바른 터미널 창에서 이러한 명령을 실행하고 있는지 확인하십시오. 해당 창이 더 이상 없으면 [설정 절차](/docs/browser/new-relic-browser/lab/set-up-env)의 단계를 따르십시오.
</Callout>

## 데이터 보기

귀하의 앱은 이제 뉴렐릭으로 브라우저 데이터를 보내고 있습니다. <DNT>**Browser**</DNT> 아래의 뉴렐릭에서 이 데이터를 확인하세요.

<Steps>
  <Step>
    [New Relic](https://one.newrelic.com/) 으로 이동하여 계정으로 로그인합니다.
  </Step>

  <Step>
    왼쪽 탐색 메뉴에서 <DNT>**Browser**</DNT> 으로 이동하여 <DNT>**Relicstaurants**</DNT> 선택합니다.

    <img
      title="view relicstraunts"
      alt="view relicstaruants"
      src="/images/browser-lab-screenshot-view-relicstaurants.webp"
    />

    여기에서는 앱의 <DNT>**Page views with JavaScript errors**</DNT>, <DNT>**Core web vitals**</DNT>, <DNT>**User time on the site**</DNT>, <DNT>**Initial page load and route changes**</DNT> 및 기타 성능 데이터를 볼 수 있습니다.

    <img
      title="view relicstraunts browser app"
      alt="view relicstaruants browser app"
      src="/images/browser-lab-screenshot-relicstaurants-browser-app.webp"
    />
  </Step>
</Steps>

브라우저 에이전트를 사용하여 브라우저 데이터를 New Relic으로 보내도록 애플리케이션을 구성했습니다. 또한 New Relic에서 성능 데이터를 볼 수 있습니다. 다음으로 이 데이터를 사용하여 사이트의 프런트 엔드 오류 문제를 해결합니다.

<Callout
  variant="course"
  title="랩"
>
  이 절차는 New Relic 브라우저 모니터링으로 웹 앱의 문제를 해결하는 방법을 알려주는 랩의 일부입니다. 이제 브라우저 에이전트로 애플리케이션을 계측했으므로 [오류를 디버그합니다](/docs/browser/new-relic-browser/lab/debug-errors/).
</Callout>
