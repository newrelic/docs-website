---
title: Logging com o agente iOS
tags:
  - Mobile logging
  - New Relic Mobile iOS
metaDescription: Suggestions for setting up the logging in your app with the New Relic agent
freshnessValidatedDate: never
translationType: machine
---

Para garantir um logging consistente e abrangente durante todo o projeto, o agente iOS fornece API de logging. Use a API de logging do agente para enviar os logs dos seus aplicativos móveis para o New Relic. Isso garante que seus logs estejam em um só lugar para sua análise. Para mais informações, consulte nossa [API de logging móvel](/docs/mobile-monitoring/mobile-monitoring-ui/mobile-logs/#ios).

## Configurando nível de log

Você pode configurar o nível de log do agente iOS para o agente e registro remoto.

### Nível de log de agente

O nível de log do agente é configurado no agente New Relic e determina quais mensagens de log são gravadas no console do dispositivo. Isso também inclui os logs do agente do New Relic. Para visualizar todos os logs do agente New Relic, defina o nível de log como `NRLogLevelDebug`.

### Nível de log remoto

Na plataforma New Relic, o nível de log remoto controla a verbosidade dos logs enviados de um dispositivo para o New Relic. Isso ajuda a gerenciar o volume de dados e mantém o foco nas informações relevantes.

**Configuração**: No dashboard do New Relic, você pode configurar o nível de login remoto na aba <DNT>**Application**</DNT>. Para obter mais informações sobre como definir o nível de log remoto, consulte [logs móveis](/docs/mobile-monitoring/mobile-monitoring-ui/mobile-logs).

## Coleta automática de logs

Na plataforma New Relic, quando o logging remoto está habilitado, o agente iOS coleta todos os logs gravados em `stdout` e `stderr` do aplicativo. Ele captura todas as chamadas para `NSLog()`, Swift `print()` e outras funções print-family. Os logs coletados dessa maneira são definidos como `NRLogLevelInfo`. Este recurso está desabilitado por padrão. Para habilitá-lo, use o sinalizador de recurso `NRFeatureFlag_AutoCollectLogs` .

O agente separa a mensagem do log usando um delimitador `'\n\n'` . O timestamp reflete quando o agente coletou o log, não quando o aplicativo o escreveu. Isso pode causar uma diferença de milissegundos, pois a mensagem do log foi armazenada em buffer antes de ser coletada pelo agente.

<Callout variant="important">
  Esse recurso interfere no console integrado do Xcode, portanto, não pode ser habilitado enquanto o depurador estiver conectado.
</Callout>