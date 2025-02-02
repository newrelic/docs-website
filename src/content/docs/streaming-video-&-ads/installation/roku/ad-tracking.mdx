---
title: Ad tracking for Roku applications
tags:
translate:
metaDescription: 'Learn how to track ad events in Roku applications using the New Relic Roku Agent.'
redirects:
freshnessValidatedDate: never
---

The Roku Video Agent provides ad event monitoring through two different Ad APIs: 

* [Roku Advertising Framework (RAF)](https://developer.roku.com/en-gb/docs/developer-program/advertising/roku-advertising-framework.md)
* [Google IMA](https://developers.google.com/ad-manager/dynamic-ad-insertion/sdk/roku)

## Install Roku Advertising Framework (RAF)

For RAF, no additional steps are required as the tracker is integrated within the NRAgent.

## Install Google IMA

For IMA, ensure the following files are included in the project directory:

```
components/NewRelicAgent/trackers
    IMATracker.brs
    IMATracker.xml
source/
    IMATrackerInterface.brs
```

## Usage

### RAF usage

Pass the NRAgent object (created with the call to `NewRelic(accountId, apiKey)`) to the Ads task using a field. Inside the Ads task, perform the following:

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

For a complete usage example, check out the files `VideoScene.brs` (function `setupVideoWithAds()`) and `AdsTask.brs` in the present repo.

### IMA usage

<Steps>

<Step>
    Create the IMA Tracker object:

        ```brightscript
        tracker = IMATracker(m.nr)
        ```

    Where `m.nr` is the NRAgent object.

</Step>

<Step>
    Pass the tracker object to the IMA SDK Task using a field and include the script `IMATrackerInterface.brs` in the task XML. Inside the task, perform the following:

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

Where `m.top.tracker` is the tracker object passed to the task.
</Step>

</Steps>

For a complete usage example, check out the files `VideoScene.brs` (function `setupVideoWithIMA()`) and `imasdk.brs`.