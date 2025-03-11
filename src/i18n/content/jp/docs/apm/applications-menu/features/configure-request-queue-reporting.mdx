---
title: リクエストキューのレポート設定
tags:
  - APM
  - APM UI pages
  - Features
metaDescription: How to configure the APM agent to report request queue timing.
freshnessValidatedDate: never
translationType: machine
---

リクエストがアプリケーション (エージェントが存在する場所) に到達する前に、[リクエストのキューイング](/docs/apm/applications-menu/features/request-queuing-tracking-frontend-time) が発生します。このため、この機能を利用するには、エージェントと本番ホストを簡単に構成する必要があります。

## HTTPヘッダー

リクエストのキューイングを報告するために、ほとんどの New Relic エージェントは、フロントエンド Web [サーバー](/docs/features/request-queue-server-configuration-examples) (Apache や Nginx など) またはロード バランサー (HAProxy や F5 など) によって設定された HTTP ヘッダーに依存しています。これらのフロントエンド サーバーを構成して、要求が最初に運用インフラストラクチャに入った時刻を表すタイムスタンプを HTTP ヘッダーに設定できます。

<Callout variant="tip">
  このヘッダーは、リクエストがインフラに入ってからできるだけ早く設定することで、ヘッダーが設定される前に発生したインフラのパフォーマンス問題を見逃す可能性が低くなります。
</Callout>

ほとんどの New Relic エージェントは、 `X-Queue-Start`または`X-Request-Start`ヘッダーを解釈し、それを使用してリクエスト キューイングを計算します。エージェントは、これらのヘッダーを同じように扱います。`t=MICROSECONDS_SINCE_EPOCH`の形式で値を含めます。ここで、 `MICROSECONDS_SINCE_EPOCH` Unix エポック (たとえば、1970 年 1 月 1 日) の開始から経過したマイクロ秒数の整数値です。

このヘッダーを追加するように、ほぼすべてのフロントエンド HTTP サーバーまたはロード バランサーを構成できます。追加の詳細は、特定のエージェントとサーバーの構成によって異なります。詳細については、 [リクエスト キューの構成例を](/docs/apm/applications-menu/features/request-queue-server-configuration-examples)参照してください。

## Goエージェント [#go]

Goエージェントで、どちらかのヘッダーにメトリックを記録するように設定します。

## Java、Node.js、Python、Rubyのエージェント [#most-agents]

Java、Node.js、Python および Ruby エージェントでは、 `X-Request-Start`または`X-Queue-Start`ヘッダーの形式がより柔軟になります。これらのエージェントを使用すると、タイムスタンプを秒、ミリ秒、またはマイクロ秒単位で整数または浮動小数点値として送信できます。これらのエージェントでは、ヘッダー値の先頭の`t=`を省略することもできます。

これらのエージェントは大きさの順序に基づいて、時間単位を秒、ミリ秒、マイクロ秒と自動的に解釈します。ミリ秒のタイムスタンプをマイクロ秒と解釈すると、40年以上の待ち行列の時間になってしまうため、New Relic は確実にこれを行うことができます。

<DNT>**Python agent only:**</DNT> Apache/mod_wsgi 3.4 以降を使用する場合、mod_wsgi は各リクエストに対して`X-Queue-Start`ヘッダーと同等のものを WSGI environ 辞書に自動的に挿入します。 これにより、Apache が最初にリクエストを受け入れた特定の時点がマークされます。 Web サーバーのフロントエンドまたは Apache 自体に別の`X-Request-Start`または`X-Queue-Start`ヘッダーが手動で設定されていない場合、mod_wsgi によって設定された値は Python エージェントによって取得され、使用されます。

## .NETエージェント [#net]

.NET エージェントは、キュー時間を計算するために HTTP ヘッダーの構成を必要としません (無視します)。これは、IIS キューイング メカニズムを直接計測することで機能し、 `HttpContext`コンストラクターが実行されたときと`HttpApplication.BeginRequest`イベントが発生したときの差としてキュー時間を報告します。

要求キュー時間は、IISでホストされている.NET Frameworkアプリケーション（例：ASP.NETアプリケーション）についてのみ報告されます。 ASP .NET Coreアプリケーション（.NET CoreまたはFrameworkを対象とする）や、自己ホスト型のOWINアプリケーションについては報告され**ません**。

## PHPエージェント [#php]

PHPエージェントは`X-Request-Start`ヘッダーのみをサポートします。 これは、マイクロ秒単位のタイムスタンプを整数として識別し、ヘッダー値にオプションの`t=`を含めます。 ヘッダーが正しく読み取られることを確認するには、 <DNT>**PHP Variables**</DNT>セクションの`phpinfo()`をチェックし、 `_SERVER["HTTP_X_REQUEST_START"]`が存在し、期待される形式であることを確認します。

Nginx を使用している場合は、 [リクエストキューサーバーの設定例](/docs/apm/other-features/request-queueing/request-queue-server-configuration-examples#nginx) を参照して、ヘッダーの設定についての詳細を確認してください。
