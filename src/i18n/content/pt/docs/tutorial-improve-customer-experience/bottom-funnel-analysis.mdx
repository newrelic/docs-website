---
title: Analise o fundo do funis
tags:
  - Observability maturity
  - Customer experience
  - Digital customer experience
  - Implementation guide
  - Conversions
  - Funnel
  - Bottom of the funnel
metaDescription: 'New Relic observability maturity series: Bottom-of-the-funnel analysis shows New Relic users how to improve end-user conversions.'
freshnessValidatedDate: never
translationType: machine
---

Embora [a melhoria da experiência do cliente](/docs/tutorial-customer-experience/improve-customer-experience/) muitas vezes seja feita de forma abrangente, concentrar seus esforços na melhoria da conversão também aumenta a qualidade da experiência do cliente. Isso é conhecido como análise do fundo do poço e trata de melhorar a conversão, concentrando-se no desempenho no final da jornada do usuário, em vez de na experiência do cliente como um todo. Este guia orienta você sobre como fazer isso corretamente usando o New Relic e, ao final do guia, você terá analisado o fundo do poço e terá as informações necessárias para fazer isso continuamente.

<img
  title="User journey funnel"
  alt="User journey funnel"
  src="/images/cx_diagram_botfa-funnel.webp"
/>

A maioria dos sites e aplicativos são criados com um ou mais propósitos em mente e, onde há um propósito, provavelmente também há uma jornada do usuário. Por exemplo:

| Propósito                                                | Jornada do usuário                                             |
| -------------------------------------------------------- | -------------------------------------------------------------- |
| Conscientização da marca                                 | Baixe um artigo técnico                                        |
| Suporte a clientes                                       | Crie um ticket de suporte                                      |
| Serviços de clientes (cadastro, formulários, pagamentos) | Faça um pagamento                                              |
| Entretenimento                                           | Transmitir um filme                                            |
| Bens                                                     | Compre roupas e acessórios                                     |
| Fins informativos                                        | Encontre um programa de apoio em seu estado                    |
| Geração de leads                                         | Junte-se à lista de distribuição para obter promoções e cupons |
| Divulgação                                               | Obtenha informações sobre eventos em sua cidade                |
| Serviços (viagens, aluguéis, reservas)                   | Agendar um voo                                                 |
| Mídia social                                             | Compartilhe uma selfie                                         |

Quando um usuário conclui uma jornada, isso é chamado de conversão. Todas as conversões têm um valor, e a melhor forma de melhorar a taxa de conversão é começar na parte inferior do funis, quando a intenção de completar a jornada do usuário está clara.

Você deve sempre resolver quaisquer problemas evidentes com seu aplicativo ou site, não importa onde eles ocorram. Quando se trata de otimizar a conversão, é melhor começar na parte inferior do funis por dois motivos:

* Maior retorno do investimento com foco no estágio em que os usuários já têm maior probabilidade de conversão. Resolver problemas de desempenho aqui terá um impacto imediato em seus resultados financeiros.
* Se você tiver problemas na parte inferior do funis, a otimização dos estágios iniciais pode não ter muito impacto em sua taxa de conversão.

Otimizar a parte superior ou intermediária do funis sem focar primeiro na parte inferior pode deixar uma grande lacuna na experiência do cliente. Depois de otimizar a parte inferior do funis, você pode usar as mesmas técnicas para otimizar os estágios iniciais da jornada do usuário.

## Principais indicadores de desempenho [#kpis]

A análise final mede os seguintes KPIs:

<CollapserGroup>
  <Collapser
    id="conversion-rate"
    title="Sucesso no fundo do poço/taxa de conversão"
  >
    A taxa de conversão depois que um usuário foi longe o suficiente para demonstrar a intenção de concluir uma ação até a conclusão real. Exemplos disso são taxas de:

    * Checkout -> envio do pedido
    * Revisão do formulário de seguro -> envio
    * Concluindo detalhes de inscrição -> envio

      Aumente a taxa de conversão abordando erros e latência na parte inferior do funis.
  </Collapser>

  <Collapser
    id="latency-risk"
    title="Receita em risco devido à latência"
  >
    O valor de uma conversão vezes o número de páginas ou interações na parte inferior dos funis que são mais lentas que o limite do setor. Concentre-se em reduzir esse valor melhorando os KPIs da página.
  </Collapser>

  <Collapser
    id="Error risk"
    title="Receita em risco devido a erros"
  >
    O valor de uma conversão vezes o número de erros backend na parte inferior da interação funis. Ajuste esse valor para torná-lo significativo, filtrando erros que não são visíveis para o usuário final e, em seguida, concentre-se em reduzi-lo. Crie um alerta para notificá-lo se houver tendência de alta repentina.
  </Collapser>
</CollapserGroup>

<Steps>
  <Step>
    ### Identifique onde começa a parte inferior do funis [#id-funnel]

    A parte inferior do funis está focada nas etapas finais da jornada do usuário, onde o usuário foi longe o suficiente para mostrar a intenção de concluir a jornada. aqui estão alguns exemplos:

    <CollapserGroup>
      <Collapser
        id="ecommerce-journey"
        title="Jornada do usuário de comércio eletrônico"
      >
        <img
          title="Ecommerce bottom of the funnel"
          alt="Ecommerce bottom of the funnel"
          src="/images/cx_diagram_botfa-ecommerce.webp"
        />

        A jornada do usuário é simplificada para que você possa se concentrar onde começa a parte inferior da diversão: na finalização da compra. A maioria dos usuários que entram na fase de checkout planeja comprar algo. Reduzir erros e latência deste ponto em diante tem mais probabilidade de melhorar as conversões do que focar em qualquer outra parte do funis.
      </Collapser>

      <Collapser
        id="insurance-journey"
        title="Jornada do usuário de compra de seguro automóvel"
      >
        <img
          title="Car insurance bottom of the funnel"
          alt="Car insurance bottom of the funnel"
          src="/images/cx_diagram_botfa-car-insurance.webp"
        />

        No exemplo acima, você percebe o interesse do usuário no seguro de carro quando ele insere as informações, mas não sabe sua intenção até que ele veja a cotação e prossiga.
      </Collapser>
    </CollapserGroup>
  </Step>

  <Step>
    ### Distinguir entre páginas e ações [#distinguish-actions]

    As etapas finais da jornada de um usuário provavelmente serão uma mistura de carregamentos completos de páginas e chamadas AJAX. Você precisará conhecer todas as páginas e solicitações AJAX para a próxima etapa. Se não tiver certeza de quais solicitações estão sendo executadas na página em questão, você pode executar:

    ```
    SELECT count(*) FROM AjaxRequest WHERE pageUrl like '%FILTER%' FACET groupedRequestUrl SINCE 1 DAY AGO
    ```

    <img
      title="Distinguish between pages and actions"
      alt="Distinguish between pages and actions"
      src="/images/cx_diagram_pages-actions.webp"
    />

    Depois de fazer isso, você pode criar um monitor com script para o fundo do funis.
  </Step>

  <Step>
    ### Crie um monitor com script para o fundo do funis [#create-monitor]

    Certifique-se de ter um [monitor com script](/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors/) para cada caminho na parte inferior do funis. O objetivo é garantir que seus serviços básicos estejam funcionando 24 horas por dia.

    Por exemplo, você pode ter um fluxo de checkout que chama uma API de pagamento diferente dependendo das preferências de pagamento dos clientes.
  </Step>

  <Step>
    ### Importe o dashboard inferior do funis

    Siga as instruções no [início rápido da análise final](https://newrelic.com/instant-observability/customer-experience-bottom-funnel-analysis/8d339aa7-69e3-4efa-abc2-9eba600db91c) para instalar o dashboard e configurá-lo.
  </Step>

  <Step>
    ### Capture o desempenho atual [#capture-performance]

    <img
      title="Bottom-of-the-funnel KPI tracking"
      alt="Bottom-of-the-funnel KPI tracking"
      src="/images/cx_diagram_botfa-kpi-tracking.webp"
    />

    1. Siga as instruções em nosso [README de análise do fundo do funis no GitHub](https://github.com/newrelic/oma-resource-center/blob/main/src/content/docs/oma/value-drivers/customer-experience/use-cases/bottom-of-the-funnel-analysis/README.md), que orienta você pelo dashboard de análise do fundo do funis e pelos KPIs relevantes.
    2. Use o dashboard da etapa anterior para entender o desempenho da parte inferior do funis.
    3. Crie um plano para melhorar os KPIs que não atendem aos valores do destino, bem como reduzir as receitas em risco.
  </Step>

  <Step>
    ### Processo de melhoria

    Quer você tenha uma iniciativa dedicada para melhorar o desempenho ou a tenha classificado como manutenção contínua, você precisa acompanhar seu progresso no final de cada sprint. Para obter informações detalhadas, consulte:

    * [Melhorar o tempo de operação](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-web-uptime)
    * [Melhore o desempenho de carregamento da página](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-page-load)
    * [Melhore o desempenho do AJAX](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls)
  </Step>
</Steps>

<Callout variant="tip">
  Uma pergunta comum é: devo aplicar a segmentação dividindo o desempenho em coortes, como região e tipo de dispositivo? Depende das suas necessidades, mas a segmentação é uma boa ideia se:

  * Sua organização deseja abordar um público-alvo de um grupo específico que você pode segmentar usando um atributo personalizado ou dados que já estão disponíveis no New Relic.
  * Você já está familiarizado com a análise do fundo do poço e há uma diferença significativa o suficiente no desempenho entre diferentes coortes para garantir o rastreamento e/ou o foco dos desenvolvedores.
</Callout>

### Práticas medidas daqui para frente [#best-practices]

Manter uma alta qualidade do fundo do poço é um processo contínuo e é uma boa ideia fazer análises e ajustes de rotina para garantir que sua taxa de conversão seja ideal. Suas necessidades serão exclusivas da sua organização e o procedimento usado refletirá isso. O procedimento também pode mudar conforme suas necessidades mudam com o tempo. No entanto, você pode manter as seguintes sugestões em mente:

* Revisite a métrica de desempenho ao final de cada sprint.
* Sempre que a jornada do usuário mudar, verifique se as etapas finais são as mesmas. Incorpore mudanças nos sprints dos desenvolvedores conforme necessário.
* Compartilhe abertamente as métricas com as linhas de negócio que você apoia, bem como com outros stakeholders internos.
* Revisite os SLOs de experiência dos seus clientes. Precisa definir SLOs mais ambiciosos para o fim do funis?
* [Crie alertas](/docs/tutorial-create-alerts/create-new-relic-alerts/) para quedas críticas de negócios nos KPIs básicos de qualidade.
