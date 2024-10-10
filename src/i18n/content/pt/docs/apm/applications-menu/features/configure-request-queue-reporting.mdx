---
title: Configurar relatórios de fila de solicitações
tags:
  - APM
  - APM UI pages
  - Features
metaDescription: How to configure the APM agent to report request queue timing.
freshnessValidatedDate: never
translationType: machine
---

[O enfileiramento de solicitações](/docs/apm/applications-menu/features/request-queuing-tracking-frontend-time) ocorre antes que a solicitação chegue ao seu aplicativo (onde o agente reside). É por isso que você precisa fazer algumas configurações simples do agente e dos hosts de produção para aproveitar esse recurso.

## Cabeçalho HTTP

Para relatar o enfileiramento de solicitações, a maioria dos agentes New Relic depende de um cabeçalho HTTP definido pelo [servidor](/docs/features/request-queue-server-configuration-examples) web frontend (como Apache ou Nginx) ou balanceador de carga (como HAProxy ou F5). Você pode configurar esses servidores front-end para definir o timestamp no cabeçalho HTTP que representa quando a solicitação entrou pela primeira vez na infraestrutura de produção.

<Callout variant="tip">
  Defina esse cabeçalho o mais rápido possível após a solicitação entrar em sua infraestrutura, para que você tenha menos probabilidade de perder problemas de desempenho em sua infraestrutura que ocorrem antes de o cabeçalho ser definido.
</Callout>

A maioria dos agentes New Relic interpretará um cabeçalho `X-Queue-Start` ou `X-Request-Start` e o usará para calcular o enfileiramento de solicitações. O agente trata esses cabeçalhos de forma idêntica. Inclua um valor no formato `t=MICROSECONDS_SINCE_EPOCH` onde `MICROSECONDS_SINCE_EPOCH` é um valor inteiro do número de microssegundos decorridos desde o início da época Unix (por exemplo, 1º de janeiro de 1970).

Quase qualquer servidor HTTP front-end ou balanceador de carga pode ser configurado para adicionar este cabeçalho. Detalhes adicionais dependem do agente específico e da configuração do servidor. Para obter mais informações, consulte os [exemplos de configuração da fila de solicitações](/docs/apm/applications-menu/features/request-queue-server-configuration-examples).

## Go agente [#go]

Com o agente Go, defina um dos cabeçalhos para registrar uma métrica para ele.

## Java, Node.js, Agente Python, Ruby [#most-agents]

As versões mais recentes do Java, Node.js, Os agentes Python e Ruby fornecem mais flexibilidade no formato do cabeçalho `X-Request-Start` ou `X-Queue-Start` . Esses agentes permitem que o timestamp seja enviado em segundos, milissegundos ou microssegundos como um valor inteiro ou de ponto flutuante. Esses agentes também permitem que o `t=` inicial no valor do cabeçalho seja omitido.

Com base na ordem de grandeza, esses agentes interpretam automaticamente a unidade de tempo como segundos, milissegundos ou microssegundos. A New Relic pode fazer isso de forma confiável, já que um timestamp em milissegundos, interpretado como microssegundos, resultaria em um tempo de fila superior a 40 anos.

<DNT>**Python agent only:**</DNT> Ao usar o Apache/mod_wsgi 3.4 ou superior, o mod_wsgi inserirá automaticamente um equivalente ao cabeçalho `X-Queue-Start` no dicionário de ambiente WSGI para cada solicitação. Isso marcará o momento específico em que o Apache aceitou a solicitação pela primeira vez. O valor definido por mod_wsgi será obtido e usado pelo agente Python se nenhum cabeçalho `X-Request-Start` ou `X-Queue-Start` separado tiver sido configurado manualmente no frontend de um servidor web ou no próprio Apache.

## Agente .NET [#net]

O agente .NET não requer (e irá ignorar) qualquer configuração de cabeçalhos HTTP para calcular o tempo de fila. Ele funciona instrumentando diretamente o mecanismo de enfileiramento do IIS e relata o tempo de fila como a diferença entre o momento em que o construtor `HttpContext` é executado e o momento em que o evento `HttpApplication.BeginRequest` é acionado.

O tempo de fila de solicitação é relatado apenas para aplicativos .NET framework hospedados no IIS (por exemplo: aplicativo ASP.NET). **Não** é relatado para o aplicativo ASP .NET Core (direcionado ao .NET Core ou framework), nem para o aplicativo OWIN auto-hospedado.

## Agente PHP [#php]

O agente PHP oferece suporte apenas ao cabeçalho `X-Request-Start` . Isso identifica o timestamp em microssegundos como um número inteiro, com um `t=` opcional no valor do cabeçalho. Para garantir que o cabeçalho seja lido corretamente, verifique seu `phpinfo()` na seção <DNT>**PHP Variables**</DNT> e verifique se `_SERVER["HTTP_X_REQUEST_START"]` existe e está no formato esperado.

Se você estiver usando o Nginx, consulte [Exemplos de configuração do servidor de fila de solicitações](/docs/apm/other-features/request-queueing/request-queue-server-configuration-examples#nginx) para obter informações adicionais sobre como configurar o cabeçalho.
