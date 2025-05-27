---
title: Enable event captures
tags:
translate:
metaDescription: 'How to capture events using New Relic media agent in Roku devices.'
redirects:
freshnessValidatedDate: never
---

The New Relic media agent for Roku devices captures events that occur during the playback of video content. This document provides an overview of the events that can be captured and how to enable them in your Roku application.

To enable automatic event capture perform the following steps which are detailed below.

<Steps>

<Step>
    In your main BrightScript file (e.g., Main.brs), call the NewRelic function and store the returned object.
</Step>

<Step>
    Call `nrAppStarted` to log the application start event.
</Step>

<Step>
    (Optional) Use `NewRelicSystemStart` and `NewRelicVideoStart` to begin capturing system and video events.
</Step>

<Step>
    In the main wait loop, call `nrProcessMessage` to handle system events.
</Step>

</Steps>

## Example

Below is a basic example of integrating the New Relic Agent into a Roku application:

### Main.brs

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

### VideoScene.xml

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

### VideoScene.brs [#videoscene.brs]

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