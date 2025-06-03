---
title: Habilitar capturas de eventos
tags: null
metaDescription: How to capture events using New Relic media agent in Roku devices.
freshnessValidatedDate: never
translationType: machine
---

El agente multimedia New Relic para dispositivos Roku captura eventos que ocurren durante la reproducción de contenido de video. Este documento proporciona una descripción general de los eventos que se pueden capturar y cómo habilitarlos en su aplicación Roku.

Para habilitar la captura automática de eventos, realice los siguientes pasos que se detallan a continuación.

<Steps>
  <Step>
    En su archivo BrightScript principal (por ejemplo, Main.brs), llame a la función NewRelic y almacene el objeto devuelto.
  </Step>

  <Step>
    Llame `nrAppStarted` para registrar el evento de inicio de la aplicación.
  </Step>

  <Step>
    (Opcional) Emplee `NewRelicSystemStart` y `NewRelicVideoStart` para comenzar a capturar eventos del sistema y de video.
  </Step>

  <Step>
    En el bucle de espera principal, llame `nrProcessMessage` para manejar el evento del sistema.
  </Step>
</Steps>

## Ejemplo

A continuación se muestra un ejemplo básico de integración del agente New Relic en una aplicación Roku:

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

### VideoEscena.xml

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

### VideoEscena.brs [#videoscene.brs]

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