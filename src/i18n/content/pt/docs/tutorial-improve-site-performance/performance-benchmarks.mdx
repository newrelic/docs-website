---
title: Criar benchmark de desempenho de front-end
metaDescription: Learn how to create and define performance benchmarks with service levels.
freshnessValidatedDate: never
translationType: machine
---

A arquitetura do seu sistema é composta de hosts, aplicativos e serviços que afetam e dependem uns dos outros. Se uma parte da sua arquitetura apresentar desempenho inferior, isso poderá levar a interrupções críticas do sistema posteriormente. O nível de serviço, no entanto, permite aplicar limites que facilitam o controle do seu sistema. Se o desempenho de um serviço exceder ou ficar abaixo de um determinado limite, você receberá um alerta. Aqui estão as camadas do nível de serviço:

* Um nível de serviço é composto de objetivos de nível de serviço (SLOs). SLOs são metas que representam como você espera que seus serviços se comportem.
* Seus SLOs são definidos por indicadores de nível de serviço (SLIs). SLIs são medidas e métricas importantes que determinam a disponibilidade do serviço.
* Para além destes objectivos alertam-se indicadores. Eles notificam você quando seus serviços não atendem aos seus SLOs.

## Objetivos [#objectives]

Este tutorial orienta você na criação de benchmark de desempenho com nível de serviço. Ao final do tutorial, você terá estas tarefas concluídas:

* Entenda a relação entre indicadores de nível de serviço (SLIs) e objetivos de nível de serviço (SLOs).
* Crie e defina SLIs e SLOs para sua experiência de front-end.
* Configure o alerta para saber quando seus serviços apresentam queda no desempenho.

## Defina seu nível de serviço [#define]

Definir e gerenciar seu nível de serviço seguindo as etapas abaixo permite:

* Facilite configurações futuras: Estabeleça automaticamente uma baseline de desempenho e confiabilidade para qualquer serviço com uma configuração com um clique.
* Defina a confiabilidade entre as equipes: evite processos árduos de alinhamento com recomendações de SLO e SLI que ajudam a determinar os limites do serviço. Defina benchmark de confiabilidade automaticamente com base em métricas de desempenho recentes em qualquer entidade.
* Iterar e melhorar: com contextostack e automação por meio de ferramentas de infraestrutura como código de código aberto, como o Terraform, as equipes têm insights sobre como nós ou serviços específicos impactam a confiabilidade do sistema e podem assumir rapidamente o controle sobre seu desempenho. Visualizações personalizadas para proprietários de serviços e líderes de negócios impulsionam a eficiência operacional e levam a melhores processos de relatórios, alertas e gerenciamento de incidentes.
* Padronize a confiabilidade: as equipes interorganizacionais têm uma visão unificada e transparente da confiabilidade do serviço e podem cumprir melhor o SLA voltado para os clientes. As métricas de conformidade do SLO e os orçamentos de erros oferecem à organização uma maneira de relatar a confiabilidade e implementar mudanças em aplicativos, infraestrutura e equipes de maneira coesa.

## Crie seu benchmark de desempenho [#create]

<Steps>
  <Step>
    ## Selecione indicadores de nível de serviço:

    Embora haja uma grande quantidade de SLIs que você pode usar para definir seu benchmark de experiência de front-end, a seguir estão alguns que recomendamos especificamente. Cada recolhedor tem uma explicação de quando você deve escolher aquele SLI e uma consulta NRQL correspondente (que você usará na etapa 2).

    Por enquanto, basta selecionar um dos seguintes:

    <DNT>**SLIs for APM services instrumented with the New Relic agent**</DNT>: com base no evento `Transaction` , esses SLIs são os mais comuns para serviços orientados por solicitação:

    <CollapserGroup>
      <Collapser
        className="freq-link"
        id="service-availability"
        title="Sucesso do serviço"
      >
        O sucesso do serviço é a razão entre o número de respostas bem-sucedidas e o número de todas as solicitações. Efetivamente, esta é uma taxa de erros, mas você pode filtrá-la, por exemplo, removendo erros esperados.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}'
        ```

        Onde `{entityGuid}` é o GUID do serviço.

        <DNT>
          **Bad events fields**
        </DNT>

        ```sql
        FROM: TransactionError
        WHERE: entityGuid = '{entityGuid}' AND error.expected IS FALSE
        ```

        Onde `{entityGuid}` é o GUID do serviço.
      </Collapser>

      <Collapser
        className="freq-link"
        id="service-latency"
        title="Latência de serviço"
      >
        Um SLI de latência mede a proporção de solicitações válidas que foram atendidas mais rapidamente do que o limite estabelecido como uma boa experiência.

        Para determinar esse limite de duração, verifique o desempenho do serviço nas últimas semanas e use esse resultado como uma baseline realista e alcançável. Depois, você poderá iterar no limite do SLI e alinhá-lo com um desempenho mais ambicioso.

        Para selecionar um valor apropriado para a condição de duração, uma prática típica é selecionar a duração do percentil 95 das respostas dos últimos 7 ou 15 dias. Encontre esse limite de duração usando o [criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder/) e use-o para determinar um bom evento para seu SLI:

        ```sql
        SELECT percentile(duration, 95) FROM Transaction WHERE entityGuid = '{entityGuid}' since 7 days ago limit max
        ```

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}' AND transactionType = 'Web'
        ```

        Onde `{entityGuid}` é o GUID do serviço.

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}' AND transactionType = 'Web' AND duration < {duration}
        ```

        * Onde `{entityGuid}` é o GUID do serviço.
        * Onde `{duration}` é o tempo de resposta que você considera que proporciona uma boa experiência para seu atendimento ao cliente ou usuário final, em segundos.
      </Collapser>
    </CollapserGroup>

    <DNT>**SLIs for browser applications**</DNT>: os SLIs a seguir baseiam-se nos core web vitals do Google.

    <CollapserGroup>
      <Collapser
        className="freq-link"
        id="browser-availability"
        title="Sucesso do aplicativo de browser"
      >
        É a proporção de visualizações de páginas exibidas sem erros.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageView
        WHERE: entityGuid = '{entityGuid}'
        ```

        Onde `{entityGuid}` é o GUID do serviço.

        <DNT>
          **Bad events fields**
        </DNT>

        ```sql
        FROM: JavaScriptError
        WHERE: entityGuid = '{entityGuid}' AND firstErrorInSession IS true
        ```

        Onde `{entityGuid}` é o GUID do aplicativo do browser.
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-contentful-paint"
        title="Maior pintura com conteúdo do aplicativo de browser"
      >
        É a proporção de visualizações de páginas válidas em que o maior elemento de conteúdo visível na janela de visualização foi renderizado mais rapidamente do que o limite considerado correspondente a uma boa experiência.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND largestContentfulPaint IS NOT NULL
        ```

        Onde `{entityGuid}` é o GUID do serviço.

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND largestContentfulPaint < '{largestContentfulPaint}'
        ```

        * Onde `{entityGuid}` é o GUID do aplicativo do browser.
        * Onde `{largestContentfulPaint}` é o tempo (em milissegundos) para renderizar o maior elemento de conteúdo visível na janela de visualização que você considera proporcionar uma boa experiência para o usuário final. Um padrão frequente é 4.000 ms.

        Para determinar um número realista a ser usado para `{largestContentfulPaint}` em seu ambiente, uma prática típica é selecionar a duração do percentil 95 das respostas dos últimos 7 ou 15 dias. Encontre-o usando o criador de consulta:

        ```sql
        SELECT percentile(largestContentfulPaint, 95) FROM PageViewTiming WHERE entityGuid = '{entityGuid}' SINCE 7 days ago LIMIT MAX
        ```
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-first-delay"
        title="Interação do aplicativo browser para a próxima pintura"
      >
        É a proporção de visualizações de páginas em que o tempo entre a primeira interação do usuário com a página e o tempo em que o browser responde a essa interação é inferior a um determinado limite.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND interactionToNextPaint IS NOT NULL
        ```

        Onde `{entityGuid}` é o GUID do serviço.

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND interactionToNextPaint < {interactionToNextPaint}
        ```

        * Onde `{entityGuid}` é o GUID do aplicativo do browser.
        * Onde `{interactionToNextPaint}` é o tempo (em milissegundos) que o browser deve responder para fornecer uma boa experiência ao usuário final. Um padrão frequente é 300 ms.

        Para determinar um número realista a ser usado para `{interactionToNextPaint}` em seu ambiente, uma prática típica é selecionar a duração do percentil 95 das respostas dos últimos 7 ou 15 dias. Encontre-o usando o criador de consulta:

        ```sql
        SELECT percentile(interactionToNextPaint, 95) FROM PageViewTiming WHERE entityGuid = '{entityGuid}' SINCE 7 days ago LIMIT MAX FACET deviceType
        ```
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-cumulative-shift"
        title="Mudança cumulativa de layout do aplicativo do browser"
      >
        É a proporção de visualizações de página com uma boa mudança cumulativa de layout (CLS). CLS é descrito como a soma total de todas as pontuações individuais de mudança de layout para cada mudança inesperada de layout que ocorre durante toda a vida útil da página. Uma mudança de layout ocorre sempre que um elemento visível muda sua posição de um quadro renderizado para o próximo.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND cumulativeLayoutShift IS NOT NULL
        ```

        Onde `{entityGuid}` é o GUID do serviço.

        Se desejar criar SLIs separados para rastrear CLS em desktops e dispositivos móveis separadamente, adicione uma destas cláusulas no final do campo:

        * `and deviceType = 'Mobile'`
        * `and deviceType = 'Desktop'`

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND cumulativeLayoutShift < {cumulativeLayoutShift}
        ```

        * Onde `{entityGuid}` é o GUID do aplicativo do browser.
        * Onde `{cumulativeLayoutShift}` é um valor predefinido. Para fornecer uma boa experiência ao usuário, seu site deve se esforçar para ter uma pontuação CLS de 0,1 ou menos. Uma pontuação CLS de 0,25 ou mais é considerada uma experiência do usuário ruim.

        Se você decidiu criar SLIs separados para rastrear CLS em desktops e dispositivos móveis separadamente quando definiu a consulta de evento válida, adicione esta cláusula no final do campo:

        * `and deviceType = 'Mobile'`
        * `and deviceType = 'Desktop'`

        Para determinar um número realista a ser selecionado para `{cumulativeLayoutShift}` em seu ambiente, uma prática típica é selecionar o 75º percentil de carregamentos de página nos últimos 7 ou 15 dias, segmentados em dispositivos móveis e desktop. Encontre-o usando o criador de consulta:

        ```sql
        SELECT percentile(cumulativeLayoutShift, 95) FROM PageViewTiming WHERE  entityGuid = '{entityGuid}' since 7 days ago limit max facet deviceType
        ```
      </Collapser>
    </CollapserGroup>

    <Callout variant="tip">
      Sua organização deve definir SLOs e SLIs com base em suas necessidades específicas, nas expectativas do usuário e nos recursos disponíveis. Após concluir este tutorial, recomendamos que você [aprenda mais sobre como definir nível de serviço personalizado granular](/docs/service-level-management/create-slm/#define-user-exp).
    </Callout>
  </Step>

  <Step>
    <img
      title="SLI ui"
      alt="An image of the service level maangement ui"
      src="/images/sonic_screenshot-full_sli-ui-overview.webp"
    />

    1. Navegue até

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com) > All capabilities > Service levels management**
       </DNT>

       . Esta interface mostra todo o seu nível de serviço e permite defini-los, monitorá-los e editá-los.

    2. Selecione

       <DNT>
         **+ Add a service level**
       </DNT>

       no canto superior direito da interface.
  </Step>

  <Step>
    Escolha a entidade correspondente para a qual você deseja criar um nível de serviço. Pode ser uma workload inteira, um serviço específico, um monitor Sintético ou até mesmo uma transação específica. Depois de selecionar sua entidade, clique em <DNT>**Continue**</DNT> no lado esquerdo do painel da interface.
  </Step>

  <Step>
    Defina o SLI que você escolheu na etapa um neste painel. Por exemplo, se você escolher definir um SLI para o sucesso do aplicativo do browser, você usaria a seguinte consulta:

    <DNT>**Query for valid events**</DNT>:

    ```sql
    FROM: PageView
    WHERE: entityGuid = '{entityGuid}'
    ```

    <DNT>**Query for bad events**</DNT>:

    ```sql
    FROM: JavaScriptError
    WHERE: entityGuid = '{entityGuid}' AND firstErrorInSession IS true
    ```

    Selecione <DNT>**Continue**</DNT> no painel esquerdo depois de confirmar que suas consultas estão corretas.
  </Step>
</Steps>

## Qual é o próximo? [#next]

Parabéns! Você completou nossa jornada sobre como usar o New Relic para melhorar o desempenho do seu site! Neste tutorial, você aprendeu algumas coisas sobre como melhorar o desempenho do seu site. Você aprendeu como:

* Desbloqueie dados que podem fornecer insights sobre o desempenho atual do seu site, por instrumento seu site.
* Avalie seus core web vitals para que você possa tomar as decisões corretas sobre como melhorar a experiência do usuário final.
* Faça melhorias em seu site corrigindo a alta latência e reduzindo erros de JavaScript
* Crie um benchmark de desempenho para monitorar o desempenho ao longo do tempo.

A New Relic oferece outros recursos que podem ajudá-lo a melhorar o desempenho. Embora este tutorial tenha se concentrado em seu site, você pode conferir nossos outros tutoriais:

* Seu aplicativo está lento? Confira [Meu aplicativo é lento](/docs/tutorial-app-slow/root-causes) para solucionar e corrigir problemas comuns com seus aplicativos.
* Sua infraestrutura é um instrumento, mas você não sabe como grok os dados do seu host? Confira nosso tutorial [sobre solução de problemas de hosts com dados de infra](/docs/tutorial-troubleshoot-infra-hosts/diagnose-app-infra-data) .
* Precisa de alerta, mas não sabe por onde começar? Confira nosso tutorial [Criar e gerenciar alertas](/docs/tutorial-create-alerts/create-new-relic-alerts) .
