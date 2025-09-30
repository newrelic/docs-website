---
title: Roku アプリケーションの広告トラッキング
tags: null
metaDescription: Learn how to track ad events in Roku applications using the New Relic Roku Agent.
freshnessValidatedDate: never
translationType: machine
---

Roku Video エージェントは、2 つの異なる広告 API を通じて広告イベント監視を提供します。

* [Roku 広告フレームワーク (RAF)](https://developer.roku.com/en-gb/docs/developer-program/advertising/roku-advertising-framework.md)
* [グーグル](https://developers.google.com/ad-manager/dynamic-ad-insertion/sdk/roku)

## Roku 広告フレームワーク (RAF) をインストールする

RAF の場合、トラッカーは NRAgent 内に統合されているため、追加の手順は必要ありません。

## Google IMAをインストールする

IMA の場合、プロジェクト ディレクトリに次のファイルが含まれていることを確認します。

```
components/NewRelicAgent/trackers
    IMATracker.brs
    IMATracker.xml
source/
    IMATrackerInterface.brs
```

## 使用方法

### RAFの使用

フィールドを使用して、NRAgent オブジェクト ( `NewRelic(accountId, apiKey)`の呼び出しで作成) を Ads タスクに渡します。 広告タスク内で、次の操作を実行します。

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

完全な使用例については、現在のリポジトリ内のファイル`VideoScene.brs` (関数`setupVideoWithAds()` ) と`AdsTask.brs`参照してください。

### IMA の使用

<Steps>
  <Step>
    IMA トラッカー オブジェクトを作成します。

    ```brightscript
    tracker = IMATracker(m.nr)
    ```

    ここで、 `m.nr`は NRAgent オブジェクトです。
  </Step>

  <Step>
    フィールドを使用してトラッカー オブジェクトを IMA SDK タスクに渡し、タスク XML にスクリプト`IMATrackerInterface.brs`を含めます。 タスク内で、次の操作を実行します。

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

    ここで、 `m.top.tracker`はタスクに渡されるトラッカー オブジェクトです。
  </Step>
</Steps>

完全な使用例については、ファイル`VideoScene.brs` (関数`setupVideoWithIMA()` ) と`imasdk.brs`参照してください。