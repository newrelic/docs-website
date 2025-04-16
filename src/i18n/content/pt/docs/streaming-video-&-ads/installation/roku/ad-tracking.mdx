---
title: Rastreamento de anúncios para aplicativo Roku
tags: null
metaDescription: Learn how to track ad events in Roku applications using the New Relic Roku Agent.
freshnessValidatedDate: never
translationType: machine
---

O agente Roku Video fornece monitoramento de eventos por meio de duas APIs de anúncios diferentes:

* [Estrutura de publicidade Roku (RAF)](https://developer.roku.com/en-gb/docs/developer-program/advertising/roku-advertising-framework.md)
* [Google IMA](https://developers.google.com/ad-manager/dynamic-ad-insertion/sdk/roku)

## Instalar o Roku Advertising Framework (RAF)

Para a RAF, nenhuma etapa adicional é necessária, pois o rastreador é integrado ao NRAgent.

## Instalar o Google IMA

Para o IMA, certifique-se de que os seguintes arquivos estejam incluídos no diretório do projeto:

```
components/NewRelicAgent/trackers
    IMATracker.brs
    IMATracker.xml
source/
    IMATrackerInterface.brs
```

## Uso

### Uso da RAF

Passe o objeto NRAgent (criado com a chamada para `NewRelic(accountId, apiKey)`) para a tarefa Ads usando um campo. Na tarefa Anúncios, execute o seguinte:

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

Para um exemplo de uso completo, confira os arquivos `VideoScene.brs` (função `setupVideoWithAds()`) e `AdsTask.brs` no repositório atual.

### Uso do IMA

<Steps>
  <Step>
    Crie o objeto IMA Tracker:

    ```brightscript
    tracker = IMATracker(m.nr)
    ```

    Onde `m.nr` é o objeto NRAgent.
  </Step>

  <Step>
    Passe o objeto rastreador para a tarefa do IMA SDK usando um campo e inclua o script `IMATrackerInterface.brs` no XML da tarefa. Dentro da tarefa, execute o seguinte:

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

    Onde `m.top.tracker` é o objeto rastreador passado para a tarefa.
  </Step>
</Steps>

Para um exemplo de uso completo, confira os arquivos `VideoScene.brs` (função `setupVideoWithIMA()`) e `imasdk.brs`.