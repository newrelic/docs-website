---
title: Habilitar capturas de eventos
tags: null
metaDescription: How to capture events using New Relic media agent in Roku devices.
freshnessValidatedDate: never
translationType: machine
---

O agente de mídia New Relic para dispositivos Roku captura eventos que ocorrem durante a reprodução de conteúdo de vídeo. Este documento fornece uma visão geral dos eventos que podem ser capturados e como habilitá-los no seu aplicativo Roku.

Para habilitar a captura automática de eventos, execute as seguintes etapas detalhadas abaixo.

<Steps>
  <Step>
    No seu arquivo BrightScript principal (por exemplo, Main.brs), chame a função NewRelic e armazene o objeto retornado.
  </Step>

  <Step>
    Chame `nrAppStarted` para registrar o evento de início do aplicativo.
  </Step>

  <Step>
    (Opcional) Use `NewRelicSystemStart` e `NewRelicVideoStart` para começar a capturar eventos do sistema e de vídeo.
  </Step>

  <Step>
    No loop de espera principal, chame `nrProcessMessage` para manipular o evento do sistema.
  </Step>
</Steps>

## Exemplo

Abaixo está um exemplo básico de integração do agente New Relic em um aplicativo Roku:

### Principal.brs

```javascript
    sub Main(aa as Object)
        screen = CreateObject("roSGScreen")
        m.port = CreateObject("roMessagePort")
        screen.setMessagePort(m.port)

        'Create the main scene that contains a video player
        scene = screen.CreateScene("VideoScene")
        screen.show()
            
        'Init New Relic Agent
        m.nr = NewRelic(“ACCOUNT ID“, “API KEY“)
            
        'Send APP_STARTED event
        nrAppStarted(m.nr, aa)
            
        'Pass NewRelicAgent object to the main scene
        scene.setField("nr", m.nr)
            
        'Activate system tracking
        m.syslog = NewRelicSystemStart(m.port)
        
        while (true)
            msg = wait(0, m.port)
            if nrProcessMessage(m.nr, msg) = false
                'It is not a system message captured by New Relic Agent
                if type(msg) = "roPosterScreenEvent"
                    if msg.isScreenClosed()
                        exit while
                    end if
                end if
            end if
        end while
    end sub
```

### Cena de vídeo.xml

```xml
    <?xml version="1.0" encoding="utf-8" ?>
    <component name="VideoScene" extends="Scene"> 
	        <interface>
		            <!-- Field used to pass the NewRelicAgent object to the scene -->
		            <field id="nr" type="node" onChange="nrRefUpdated" />
	        </interface>
		
	        <children>
		            <Video
			                id="myVideo"
			                translation="[0,0]"
		            />
	        </children>
	
	        <!-- New Relic Agent Interface -->
	        <script type="text/brightscript" uri="pkg:/source/NewRelicAgent.brs"/>
	
	        <script type="text/brightscript" uri="pkg:/components/VideoScene.brs"/>
    </component>
```

### VideoScene.br [#videoscene.brs]

```javascript
sub init()
    m.top.setFocus(true)
    setupVideoPlayer()
end sub

function nrRefUpdated()
    m.nr = m.top.nr
    
    'Activate video tracking
    NewRelicVideoStart(m.nr, m.video)
end function

function setupVideoPlayer()
    videoUrl = "http://..."
    videoContent = createObject("RoSGNode", "ContentNode")
    videoContent.url = videoUrl
    videoContent.title = "Any Video"
    m.video = m.top.findNode("myVideo")
    m.video.content = videoContent
    m.video.control = "play"
end function
```