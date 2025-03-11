---
title: Solicite filas e controle o tempo de front-end
tags:
  - APM
  - APM UI pages
  - Features
metaDescription: An overview of how New Relic measures request queuing and time spent in frontend web servers and load balancers.
freshnessValidatedDate: never
translationType: machine
---

O APM rastreia o tempo após uma solicitação entrar em seus sistemas de produção e antes de chegar ao seu aplicativo. Chamamos essa parte do ciclo de vida da sua solicitação de <DNT>**request queuing**</DNT>. Dependendo das especificidades dos seus sistemas de produção, essa medição de tempo pode ou não incluir uma fila real na qual as solicitações entram. Também pode representar outras funções (como balanceamento de carga ou latência de rede interna).

## Use o enfileiramento de solicitações para identificar problemas de escalabilidade [#performance-scaling]

Rastrear o tempo gasto no enfileiramento de solicitações é útil para identificar certos tipos de problemas de desempenho e escalabilidade; por exemplo:

* Quando seu servidor web front-end está gastando tempo esperando que os trabalhadores do aplicativo fiquem disponíveis
* Quando é gasto tempo extra aquecendo os funcionários do aplicativo após uma implantação ou reinicialização

Você deve configurar seu [agente](/docs/features/configuring-request-queue-reporting) e [servidor](/docs/features/request-queue-server-configuration-examples) New Relic para relatar o enfileiramento de solicitações. Em seguida, as informações aparecerão no gráfico <DNT>**Requests time**</DNT> do aplicativo selecionado para transação da web (da lista <DNT>**Applications**</DNT> do APM, selecione o aplicativo), bem como em outros locais da interface do usuário. A legenda do gráfico indica qual cor representa o enfileiramento de solicitações.

## Cálculos de Apdex [#apdex]

O enfileiramento de solicitações é o tempo desde o momento em que o browser solicita o conteúdo até o momento em que o recebe. Como sua pontuação Apdex refletirá esses cálculos, você pode selecionar se deseja relatar o tempo de fila de solicitações separadamente ou não. Para obter mais informações, consulte [Configuração do agente](/docs/features/configuring-request-queue-reporting).

## Inclinação do relógio

Se o servidor web front-end (como Nginx) e seu aplicativo não residirem no mesmo servidor físico, o enfileiramento de solicitações relatado poderá ser afetado pela distorção do relógio. [O NTP](http://www.ntp.org/ "O link abre em uma nova janela") oferece uma excelente maneira de manter os relógios dos servidores sincronizados. No entanto, eles ainda irão flutuar um em relação ao outro. Como o agente New Relic depende de um timestamp definido pelo servidor front-end, ele pode relatar em excesso ou insuficiente o enfileiramento de solicitações se o relógio nesse servidor não estiver sincronizado com o relógio no servidor de aplicativos.

Isso pode parecer um grande problema com o recurso; no entanto, é improvável que a distorção do relógio resulte em picos repentinos no enfileiramento de solicitações relatadas. Picos repentinos geralmente ocorrem quando um aplicativo é reiniciado ou fica sobrecarregado com solicitações. Nossa experiência é que o relatório da fila de solicitações pode ser útil para identificar problemas reais de desempenho, mas não se esqueça de considerar a distorção do relógio ao interpretar esses dados.
