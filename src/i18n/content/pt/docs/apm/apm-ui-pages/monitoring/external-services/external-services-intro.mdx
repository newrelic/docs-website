---
title: Serviços externos
tags:
  - APM
  - APM UI pages
  - Monitoring
metaDescription: 'The external services page captures metric details about out-of-process services such as web services, cloud resources, or other network calls.'
freshnessValidatedDate: never
translationType: machine
---

O recurso de serviços externos permite observar atentamente a atividade upstream e downstream de um único serviço. Esses serviços externos upstream ou downstream podem ser seus próprios serviços instrumentados ou podem referir-se a serviços que você simplesmente chama no decorrer de uma transação. Os serviços externos não incluem alguns componentes backend , como MemCache e o próprio banco de dados.

O recurso de serviços externos não é apenas para o usuário do agente New Relic APM . Ele também inclui [OpenTelemetry](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/introduction-opentelemetry-new-relic) e usa o poder do distributed tracing para fornecer insights sobre a atividade do serviço. O recurso clássico de serviços externos ainda está disponível por meio de uma alternância de interface, mas recomendamos que você experimente ao máximo os serviços externos expandidos.

Este recurso fornece uma combinação de mapas e gráficos para ajudá-lo:

* Encontre fontes de latência e erros
* Avalie o impacto da latência para chamadores upstream
* Revise o desempenho no nível da transação
* Encontre vestígios que envolvam a transação na qual você está interessado

Para usar o recurso de serviços externos, você precisa de uma conta New Relic com um agente APM instalado e com distributed tracing habilitado. Se você ainda não tem uma, [cadastre-se](https://newrelic.com/signup) para obter uma conta gratuita.

<img
  title="Screenshot showing the opening map for external services"
  alt="Screenshot showing the opening map for external services"
  src="/images/apm_screenshot-crop_external-service-intro.webp"
/>

<figcaption>
  A espessura das linhas representa as taxas de transferência do seu serviço para os serviços upstream ou downstream. Ao selecionar um serviço específico, você verá vários terminais fazendo chamadas entre os dois serviços.
</figcaption>

Aqui está um pequeno vídeo (1:30 minutos) mostrando como usar o dashboard de serviços externos para rastrear todas as dependências e serviços dos quais sua aplicação depende.

<Video
  id="903EF9MAql8"
  type="youtube"
/>

## Quando você usaria serviços externos? [#when-to-use]

O recurso de serviços externos é uma ferramenta que você pode usar sozinha para ajustar ou solucionar problemas de um serviço específico. Você também pode usá-lo como ponto de partida para resolução adicional de problemas com distributed tracing.

Digamos que você seja um desenvolvedor responsável pelo serviço A:

1. Você recebe um alerta de que o tempo médio de resposta aumentou de forma anormal.
2. Você olha para o seu serviço e vê que o tempo gasto em ligações para outros serviços aumentou na época do alerta.
3. Você detalha os serviços externos e vê que o tempo total de chamada de um serviço em particular, o serviço B, aumentou pouco antes do alerta ser disparado.
4. Você seleciona o serviço B no mapa e vê o desempenho de transações individuais no serviço A que chamam transações no serviço B. Você percebe que uma transação específica no serviço A é mais lenta que o normal e que chama uma transação no serviço B.

Em seguida, você pode usar distributed tracing para detalhar mais:

1. Analise o distributed tracing e veja no trace que as chamadas nesta transação estão fazendo algo estranho.
2. Vá para aquela transação no serviço B e veja que ela ficou lenta após uma implantação.

## Relacionamento com serviços externos clássicos [#classic-external-services]

Embora você ainda possa acessar serviços externos clássicos usando a alternância de interface, a interface principal de serviços externos é preenchida por dados de distributed tracing. Ele ainda fornece dados de transação semelhantes aos serviços externos clássicos, mas aqui estão algumas coisas importantes que você precisa saber sobre os serviços externos expandidos:

* <DNT>
    **Dependency:**
  </DNT>

  Para usar o recurso de serviços externos, você precisa habilitar distributed tracing em serviços que fazem chamadas entre si.

* <DNT>
    **Compatibility:**
  </DNT>

  Distributed tracing não é compatível com versões anteriores do rastreamento multiaplicativo, portanto, se você atualmente depende de serviços externos clássicos, observe que você só terá visibilidade das chamadas entre serviços usando o mesmo protocolo.

* <DNT>
    **Data:**
  </DNT>

  Ao contrário dos serviços externos clássicos, o detalhe do distributed tracing em nível de transação é baseado em amostragem em vez de métrica. Esses dados de amostra são vinculados ao distributed tracing, o que pode fornecer insights mais profundos sobre o que está impulsionando o desempenho da transação.

<Callout variant="tip">
  O recurso de serviços externos não suporta dados <InlinePopover type="browser"/>e <InlinePopover type="mobile"/>.
</Callout>

## Qual é o próximo? [#next]

Se você estiver pronto para ativar esse recurso, confira nossas [etapas de configuração](/docs/apm/apm-ui-pages/monitoring/external-services/external-services-setup).
