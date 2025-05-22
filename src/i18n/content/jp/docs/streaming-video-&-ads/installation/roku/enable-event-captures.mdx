---
title: イベントキャプチャを有効にする
tags: null
metaDescription: How to capture events using New Relic media agent in Roku devices.
freshnessValidatedDate: never
translationType: machine
---

Roku デバイス用の New Relic メディア エージェントは、ビデオ コンテンツの再生中に発生するイベントをキャプチャします。 このドキュメントでは、キャプチャできるイベントの概要と、Roku アプリケーションでそれらを有効にする方法について説明します。

自動イベント キャプチャを有効にするには、以下で説明する手順を実行します。

<Steps>
  <Step>
    メインの BrightScript ファイル (例: Main.brs) で、NewRelic 関数を呼び出し、返されたオブジェクトを保存します。
  </Step>

  <Step>
    アプリケーションの開始イベントをログに記録するには、 `nrAppStarted`呼び出します。
  </Step>

  <Step>
    (オプション) `NewRelicSystemStart`と`NewRelicVideoStart`を使用して、システム イベントとビデオ イベントのキャプチャを開始します。
  </Step>

  <Step>
    メインの待機ループで、 `nrProcessMessage`を呼び出してシステム イベントを処理します。
  </Step>
</Steps>

## 例

以下は、 New Relicエージェントを Roku アプリケーションに統合する基本的な例です。

### メイン.brs

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

### ビデオシーン.xml

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

### ビデオシーン.brs [#videoscene.brs]

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