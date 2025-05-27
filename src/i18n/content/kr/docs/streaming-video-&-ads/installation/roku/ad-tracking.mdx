---
title: Roku 애플리케이션에 대한 광고 추적
tags: null
metaDescription: Learn how to track ad events in Roku applications using the New Relic Roku Agent.
freshnessValidatedDate: never
translationType: machine
---

Roku Video 에이전트는 두 가지 다른 Ad API를 통해 광고 이벤트 모니터링을 제공합니다.

* [Roku 광고 프레임워크(RAF)](https://developer.roku.com/en-gb/docs/developer-program/advertising/roku-advertising-framework.md)
* [구글 IMA](https://developers.google.com/ad-manager/dynamic-ad-insertion/sdk/roku)

## Roku 광고 프레임워크(RAF) 설치

RAF의 경우 추적기가 NRAgent에 통합되어 있으므로 추가 단계가 필요하지 않습니다.

## Google IMA 설치

IMA의 경우 프로젝트 디렉토리에 다음 파일이 포함되어 있는지 확인하세요.

```
components/NewRelicAgent/trackers
    IMATracker.brs
    IMATracker.xml
source/
    IMATrackerInterface.brs
```

## 용법

### RAF 사용

필드를 사용하여 `NewRelic(accountId, apiKey)` 에 대한 호출로 생성된 NRAgent 객체를 Ads 작업에 전달합니다. 광고 작업 내에서 다음을 수행합니다.

```brightscript
adIface = Roku_Ads()

' Ad Iface setup code...

logFunc = Function(obj = Invalid as Dynamic, evtType = invalid as Dynamic, ctx = invalid as Dynamic)
    'Call RAF tracker, passing the event and context
    nrTrackRAF(obj, evtType, ctx)
End Function

' m.top.nr is the reference to the field where we have the NRAgent object
adIface.setTrackingCallback(logFunc, m.top.nr)
```

전체 사용 예를 보려면 현재 리포지토리의 파일 `VideoScene.brs` (함수 `setupVideoWithAds()`) 및 `AdsTask.brs` 확인하세요.

### IMA 사용

<Steps>
  <Step>
    IMA Tracker 객체를 생성합니다.

    ```brightscript
    tracker = IMATracker(m.nr)
    ```

    여기서 `m.nr` 은 NRAgent 객체입니다.
  </Step>

  <Step>
    필드를 사용하여 추적기 객체를 IMA SDK 작업에 전달하고 작업 XML에 스크립트 `IMATrackerInterface.brs` 를 포함합니다. 작업 내부에서 다음을 수행합니다.

    ```javascript
        m.player.adBreakStarted = Function(adBreakInfo as Object)
            ' Ad break start code...
            
            ' Send AD_BREAK_START
            nrSendIMAAdBreakStart(m.top.tracker, adBreakInfo)
        End Function

        m.player.adBreakEnded = Function(adBreakInfo as Object)
            ' Ad break end code...

            ' Send AD_BREAK_END
            nrSendIMAAdBreakEnd(m.top.tracker, adBreakInfo)
        End Function

        ' ...

        m.streamManager.addEventListener(m.sdk.AdEvent.START, startCallback)
        m.streamManager.addEventListener(m.sdk.AdEvent.FIRST_QUARTILE, firstQuartileCallback)
        m.streamManager.addEventListener(m.sdk.AdEvent.MIDPOINT, midpointCallback)
        m.streamManager.addEventListener(m.sdk.AdEvent.THIRD_QUARTILE, thirdQuartileCallback)
        m.streamManager.addEventListener(m.sdk.AdEvent.COMPLETE, completeCallback)

        Function startCallback(ad as Object) as Void
            ' Send AD_START
            nrSendIMAAdStart(m.top.tracker, ad)
        End Function

        Function firstQuartileCallback(ad as Object) as Void
            ' Send AD_QUARTILE (first)
            nrSendIMAAdFirstQuartile(m.top.tracker, ad)
        End Function

        Function midpointCallback(ad as Object) as Void
            ' Send AD_QUARTILE (midpoint)
            nrSendIMAAdMidpoint(m.top.tracker, ad)
        End Function

        Function thirdQuartileCallback(ad as Object) as Void
            ' Send AD_QUARTILE (third)
            nrSendIMAAdThirdQuartile(m.top.tracker, ad)
        End Function

        Function completeCallback(ad as Object) as Void
            ' Send AD_END
            nrSendIMAAdEnd(m.top.tracker, ad)
        End Function
    ```

    여기서 `m.top.tracker` 작업에 전달된 추적 객체입니다.
  </Step>
</Steps>

전체 사용 예를 보려면 파일 `VideoScene.brs` (함수 `setupVideoWithIMA()`) 및 `imasdk.brs` 확인하세요.