---
title: 타임 피커 추가
metaDescription: Add a time picker to a sample application
freshnessValidatedDate: never
translationType: machine
---

이 가이드에서는 샘플 프로세서 개요에서 강제 피커에 대한 액세스를 추가하는 과정을 안내합니다.

샘플은 귀하의 계정의 프로세서, 로그 시간, HTTP 응답 코드 및 프로세서 오류를 표시하는 테슬라 템플릿 데이터의 개요를 제공합니다. 타임 피커를 활성화하면 사용자는 볼 데이터의 시간 범위를 지정할 수 있습니다.

아래 단계를 다루는 12분짜리 비디오도 있습니다.

<Video
  id="inyshp3m7r"
  type="wistia"
/>

## 시작하기 전에 [#begin]

프로젝트를 개발하려면 뉴렐릭 One CLI(명령줄 인터페이스)가 필요합니다. 아직 설치하지 않았다면 다음을 수행하세요.

* [Node.js를](https://nodejs.org/en/download/) 설치합니다.
* [CLI 빠른 시작](https://one.newrelic.com/launcher/developer-center.launcher?pane=eyJuZXJkbGV0SWQiOiJkZXZlbG9wZXItY2VudGVyLmRldmVsb3Blci1jZW50ZXIifQ==) 의 1-4단계를 완료합니다. 1단계에서 계정 이름 앞의 번호를 복사하세요. 이것이 귀하의 계정 ID이며 나중에 필요합니다.

<Callout variant="important">
  뉴렐릭 One CLI를 이미 설치했지만 계정 ID가 기억나지 않는 경우 [CLI 빠른 시작을](https://one.newrelic.com/launcher/developer-center.launcher?pane=eyJuZXJkbGV0SWQiOiJkZXZlbG9wZXItY2VudGVyLmRldmVsb3Blci1jZW50ZXIifQ==) 다시 시작한 다음 **Get your API key** \[API 키 가져오기] 아래쪽 화살표를 클릭하세요. 계정 ID는 계정 이름 앞의 숫자입니다.
</Callout>

자세한 내용은 [개발 환경 설정을](/build-apps/set-up-dev-env) 참조하세요.

## 타임피커 샘플 코드 준비 [#picker-sample-code]

시작하려면 다음 단계를 완료하여 애플리케이션 UUID(고유 ID)를 업데이트하고 샘플 애플리케이션을 로컬에서 실행하세요.

<Steps>
  <Step>
    아직 복제하지 않았다면 [GitHub 리포지터리 사용법](https://github.com/newrelic/nr1-how-to) 에서 예제를 복제하세요.

    ```bash
    git clone https://github.com/newrelic/nr1-how-to.git
    ```
  </Step>

  <Step>
    `nr1-howto-add-time-picker-nerdlet` 디렉터리로 변경합니다.

    ```bash
    cd nr1-how-to/add-time-picker/nerdlets/nr1-howto-add-time-picker-nerdlet
    ```
  </Step>

  <Step>
    원하는 텍스트 편집기에서 `index.js` 엽니다.
  </Step>

  <Step>
    `YOUR_ACCOUNT_ID` 계정 ID로 바꿉니다.

    <Callout variant="important">
      귀하의 계정 ID는 CLI 빠른 시작에서 확인할 수 있습니다( **Before you begin** \[시작하기 전에] 참조).
    </Callout>

    ```jsx
    this.accountId = <ADD YOUR ACCOUNT ID>;
    ```
  </Step>

  <Step>
    `add-time-picker` 디렉터리로 변경합니다.

    ```bash
    cd /nr1-how-to/add-time-picker
    ```
  </Step>

  <Step>
    다음 명령을 실행하여 UUID를 업데이트하고 샘플 애플리케이션을 제공합니다.

    ```bash
    nr1 update
    nr1 nerdpack:uuid -gf
    nr1 nerdpack:serve
    ```
  </Step>

  <Step>
    샘플이 성공적으로 제공되면 뉴렐릭 로컬 버전([https://one.newrelic.com/?nerdpacks=local](https://one.newrelic.com/?nerdpacks=local))으로 이동하여 **Apps** 를 클릭하고 **Add Time Picker** \[타임피커 추가를] 클릭합니다.
  </Step>
</Steps>

**타임 피커 추가 추가를** 실행하면, 뉴렐릭 계정에 소니의 개요를 제공하는 대시보드가 표시됩니다.

기본적으로 애플리케이션은 지난 60분 동안의 데이터를 표시합니다. 타임 피커를 토글하면 프로세서 개요가 뉴렐릭 플랫폼에 연결되어 있지 않기 때문에 차트가 업데이트되지 않습니다. 타임피커의 데이터에는 접근할 수 없습니다.

다음 섹션에서는 예제에 타임피커를 추가하고 쿼리에 시간을 추가하겠습니다.

## `PlatformStateContext` 구성요소 가져오기 [#import]

타임피커를 추가하는 첫 번째 단계는 `PlatformStateContext` 구성요소를 가져오는 것입니다.

<Callout variant="important">
  다음에 나오는 `PlatformStateContext` 예시에 대한 자세한 내용이 필요한 경우 [API 및 구성요소 페이지를](/components/platform-state-context) 참조하세요.
</Callout>

`PlatformStateContext` 구성요소의 기능은 다음과 같습니다.

* render 메서드의 return 문 내에서 모든 코드를 래핑합니다.
* 뉴렐릭 플랫폼 상태를 전달하는 함수 호출을 만듭니다.
* 현재 return 문 내의 모든 코드를 반환합니다.

다음 단계를 완료하세요.

<Steps>
  <Step>
    텍스트 편집기에서 `/add-time-picker/nerdlets/nr1-howto-add-time-picker-nerdlet/index.js` 엽니다.
  </Step>

  <Step>
    import 문 끝에 `PlatformStateContext` 구성요소를 추가하여 다음과 같이 만듭니다.

    ```jsx
    import {
      Grid,
      GridItem,
      HeadingText,
      AreaChart,
      TableChart,
      PieChart,
      PlatformStateContext,
    } from 'nr1';
    ```
  </Step>

  <Step>
    현재 `return` 바로 아래에 `PlatformStateContext` 구성요소에 대한 다음 코드를 삽입하세요.

    ```jsx
    <PlatformStateContext.Consumer>
        {(platformState) => {
    return (
    // ADD THE CURRENT RETURN CODE HERE
    )
    }}
    </PlatformStateContext.Consumer>
    ```
  </Step>

  <Step>
    현재 애플리케이션 코드를 이동하여 `platformState` 함수 호출의 `return` 아래에 있도록 합니다. 이제 `return` 문은 다음과 같아야 합니다.

    ```jsx
    return (
      <PlatformStateContext.Consumer>
        {(platformState) => {
          return (
            <>
              <Grid
                className="primary-grid"
                spacingType={[Grid.SPACING_TYPE.NONE, Grid.SPACING_TYPE.NONE]}
              >
                <GridItem className="primary-content-container" columnSpan={6}>
                  <main className="primary-content full-height">
                    <HeadingText
                      spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                      type={HeadingText.TYPE.HEADING_4}
                    >
                      Transaction Overview
                    </HeadingText>
                    <TableChart
                      fullWidth
                      accountId={this.accountId}
                      query={trxOverview}
                    />
                  </main>
                </GridItem>
                <GridItem className="primary-content-container" columnSpan={6}>
                  <main className="primary-content full-height">
                    <HeadingText
                      spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                      type={HeadingText.TYPE.HEADING_4}
                    >
                      Average Response Time
                    </HeadingText>
                    <AreaChart
                      fullWidth
                      accountId={this.accountId}
                      query={avgResTime}
                    />
                  </main>
                </GridItem>
                <GridItem className="primary-content-container" columnSpan={6}>
                  <main className="primary-content full-height">
                    <HeadingText
                      spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                      type={HeadingText.TYPE.HEADING_4}
                    >
                      Response Code
                    </HeadingText>
                    <PieChart
                      fullWidth
                      accountId={this.accountId}
                      query={responseCodes}
                    />
                  </main>
                </GridItem>
                <GridItem className="primary-content-container" columnSpan={6}>
                  <main className="primary-content full-height">
                    <HeadingText
                      spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                      type={HeadingText.TYPE.HEADING_4}
                    >
                      Transaction Errors
                    </HeadingText>
                    <PieChart
                      fullWidth
                      accountId={this.accountId}
                      query={errCount}
                    />
                  </main>
                </GridItem>
              </Grid>
            </>
          );
        }}
      </PlatformStateContext.Consumer>
    );
    ```
  </Step>

  <Step>
    적절한 데이터가 표시되는지 확인하려면 `console.log` 문을 추가하세요. `<Grid>` 구성요소의 여는 태그 바로 앞에 있는 `PlatformState` 반환 문 내에 다음 코드를 삽입합니다.

    ```jsx
    /* Taking a peek at the PlatformState */
    console.log(platformState);
    ```
  </Step>
</Steps>

이 단계를 완료하면 브라우저 콘솔에 로그가 표시됩니다.

## 쿼리에 시간을 추가하세요. [#add-time]

콘솔에서 뉴렐릭 플랫폼 상태의 일부 데이터를 볼 수 있습니다. 이제 프로세서 개요에서 차트를 업데이트하기 위해 `timeRange` 데이터를 추가할 준비가 되었습니다.

이 단계에서는 뉴렐릭 앱 커뮤니티 라이브러리에서 `timeRangeToNrql` 유틸리티 메서드를 가져와야 합니다.

<Callout variant="important">
  우리 [GitHub 리포지터리](https://github.com/newrelic/nr1-community) 에서 뉴렐릭 앱 커뮤니티 라이브러리에 대한 자세한 내용을 확인할 수 있습니다.
</Callout>

이 도우미 메서드는 `PlatformState.timeRange` 기간 데이터를 가져와 밀리초 단위로 형식을 지정하고 형식이 지정된 `SINCE` 문을 반환하여 `NRQL` 에 추가합니다.

<Steps>
  <Step>
    다른 `import` 섹션 아래에 다음 코드 줄을 삽입하여 `timeRangeToNrql` 메서드를 가져옵니다.

    <Callout variant="important">
      커뮤니티 가져오기 예시의 `AccountDropdown` 를 포함할 필요는 없습니다.
    </Callout>

    ```jsx
    import { timeRangeToNrql } from '@newrelic/nr1-community';
    ```
  </Step>

  <Step>
    `platformState` 를 `timeRangeToNrql` 도우미에 전달하고 나중에 사용할 수 있도록 출력을 `since` 문으로 저장합니다.

    ```jsx
    const since = timeRangeToNrql(platformState);
    ```
  </Step>

  <Step>
    `since` 변수를 생성한 후 `PlatformStateContext` 반환 문의 코드를 살펴보고 기존 차트 구성 요소 쿼리 각각에 `since` 변수를 연결합니다. 다음은 `TableChart` 예입니다.

    ```jsx
    <TableChart fullWidth accountId={this.accountId} query={trxOverview + since} />
    ```
  </Step>

  <Step>
    모든 차트 구성요소를 업데이트한 후 최종 `index.js` 파일이 다음과 유사한지 확인합니다.

    <Callout variant="important">
      완성된 샘플 코드는 `nerdlet final.js` 에 있습니다.
    </Callout>

    ```jsx
    import React from 'react';
    import {
      PlatformStateContext,
      Grid,
      GridItem,
      HeadingText,
      AreaChart,
      TableChart,
      PieChart,
    } from 'nr1';
    import { timeRangeToNrql } from '@newrelic/nr1-community';

    export default class Nr1HowtoAddTimePicker extends React.Component {
      constructor(props) {
        super(props);
        this.accountId = 1;
      }
      render() {
        const avgResTime = `SELECT average(duration) FROM Transaction FACET appName TIMESERIES AUTO `;
        const trxOverview = `FROM Transaction SELECT count(*) as 'Transactions', apdex(duration) as 'apdex', percentile(duration, 99, 95) FACET appName `;
        const errCount = `FROM TransactionError SELECT count(*) as 'Transaction Errors' FACET error.message `;
        const responseCodes = `SELECT count(*) as 'Response Code' FROM Transaction FACET httpResponseCode `;

        return (
          <PlatformStateContext.Consumer>
            {(platformState) => {
              /* Taking a peek at the platformState */
              console.log(platformState);

              const since = timeRangeToNrql(platformState);
              console.log(since);

              return (
                <>
                  <Grid
                    className="primary-grid"
                    spacingType={[Grid.SPACING_TYPE.NONE, Grid.SPACING_TYPE.NONE]}
                  >
                    <GridItem className="primary-content-container" columnSpan={6}>
                      <main className="primary-content full-height">
                        <HeadingText
                          spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                          type={HeadingText.TYPE.HEADING_4}
                        >
                          Transaction Overview
                        </HeadingText>
                        <TableChart
                          fullWidth
                          accountId={this.accountId}
                          query={trxOverview + since}
                        />
                      </main>
                    </GridItem>
                    <GridItem className="primary-content-container" columnSpan={6}>
                      <main className="primary-content full-height">
                        <HeadingText
                          spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                          type={HeadingText.TYPE.HEADING_4}
                        >
                          Average Response Time
                        </HeadingText>
                        <AreaChart
                          fullWidth
                          accountId={this.accountId}
                          query={avgResTime + since}
                        />
                      </main>
                    </GridItem>
                    <GridItem className="primary-content-container" columnSpan={6}>
                      <main className="primary-content full-height">
                        <HeadingText
                          spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                          type={HeadingText.TYPE.HEADING_4}
                        >
                          Response Code
                        </HeadingText>
                        <PieChart
                          fullWidth
                          accountId={this.accountId}
                          query={responseCodes + since}
                        />
                      </main>
                    </GridItem>
                    <GridItem className="primary-content-container" columnSpan={6}>
                      <main className="primary-content full-height">
                        <HeadingText
                          spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                          type={HeadingText.TYPE.HEADING_4}
                        >
                          Transaction Errors
                        </HeadingText>
                        <PieChart
                          fullWidth
                          accountId={this.accountId}
                          query={errCount + since}
                        />
                      </main>
                    </GridItem>
                  </Grid>
                </>
              );
            }}
          </PlatformStateContext.Consumer>
        );
      }
    }
    ```
  </Step>
</Steps>

## 요약 [#summary]

이 예의 모든 단계를 완료하면 `PlatformStateContext` 구성요소를 가져오고 해당 `timePicker` 데이터 객체에 액세스하여 로그에서 타임 피커를 성공적으로 구현한 것입니다.
