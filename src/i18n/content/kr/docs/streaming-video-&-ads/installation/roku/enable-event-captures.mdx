---
title: 이벤트 캡처 활성화
tags: null
metaDescription: How to capture events using New Relic media agent in Roku devices.
freshnessValidatedDate: never
translationType: machine
---

Roku 장치용 뉴렐릭 미디어 에이전트는 비디오 콘텐츠 재생 중에 발생하는 이벤트를 캡처합니다. 이 문서에서는 캡처할 수 있는 이벤트의 개요와 Roku 애플리케이션에서 이를 활성화하는 방법을 제공합니다.

자동 이벤트 캡처를 활성화하려면 아래에 자세히 설명된 다음 단계를 수행하세요.

<Steps>
  <Step>
    기본 BrightScript 파일(예: Main.brs)에서 NewRelic 함수를 호출하고 반환된 객체를 저장합니다.
  </Step>

  <Step>
    로그 시작 이벤트를 로그하려면 `nrAppStarted` 호출하세요.
  </Step>

  <Step>
    (선택 사항) `NewRelicSystemStart` 및 `NewRelicVideoStart` 사용하여 시스템 및 비디오 이벤트 캡처를 시작합니다.
  </Step>

  <Step>
    기본 대기 루프에서 `nrProcessMessage` 호출하여 시스템 이벤트를 처리합니다.
  </Step>
</Steps>

## 예시

다음은 뉴렐릭 에이전트를 Roku 로그에 통합하는 기본 예입니다.

### 메인.brs

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

### 비디오씬.xml

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

### 비디오씬.brs [#videoscene.brs]

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