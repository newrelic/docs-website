---
title: Seguimiento de anuncios para la aplicación Roku
tags: null
metaDescription: Learn how to track ad events in Roku applications using the New Relic Roku Agent.
freshnessValidatedDate: never
translationType: machine
---

El agente de Roku Video proporciona monitoreo de eventos publicitarios a través de dos API de anuncios diferentes:

* [Marco de publicidad de Roku (RAF)](https://developer.roku.com/en-gb/docs/developer-program/advertising/roku-advertising-framework.md)
* [IMA de Google](https://developers.google.com/ad-manager/dynamic-ad-insertion/sdk/roku)

## Instalar Roku Advertising Framework (RAF)

Para RAF, no se requieren pasos adicionales ya que el rastreador está integrado dentro de NRAgent.

## Instalar Google IMA

Para IMA, cerciorar de que los siguientes archivos estén incluidos en el directorio del proyecto:

```
components/NewRelicAgent/trackers
    IMATracker.brs
    IMATracker.xml
source/
    IMATrackerInterface.brs
```

## Uso

### Uso de la RAF

Pase el objeto NRAgent (creado con la llamada a `NewRelic(accountId, apiKey)`) a la tarea Ads usando un campo. Dentro de la tarea Anuncios, realice lo siguiente:

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

Para ver un ejemplo de uso completo, consulte los archivos `VideoScene.brs` (función `setupVideoWithAds()`) y `AdsTask.brs` en el repositorio actual.

### Uso de IMA

<Steps>
  <Step>
    Cree el objeto IMA Tracker:

    ```brightscript
    tracker = IMATracker(m.nr)
    ```

    Donde `m.nr` es el objeto NRAgent.
  </Step>

  <Step>
    Pase el objeto rastreador a la tarea SDK de IMA usando un campo e incluya el script `IMATrackerInterface.brs` en el XML de la tarea. Dentro de la tarea, realice lo siguiente:

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

    Donde `m.top.tracker` es el objeto rastreador pasado a la tarea.
  </Step>
</Steps>

Para ver un ejemplo de uso completo, consulte los archivos `VideoScene.brs` (función `setupVideoWithIMA()`) y `imasdk.brs`.