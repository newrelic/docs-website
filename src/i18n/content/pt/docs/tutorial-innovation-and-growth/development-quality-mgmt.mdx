---
title: Melhore sua base de código
metaDescription: Our development quality guide helps increase stability by using New Relic to ensure that fewer defects are introduced into the code base.
freshnessValidatedDate: never
translationType: machine
---

No geral, as operações digitais de uma empresa são tão estáveis quanto o seu código. Sem uma base de código estável, a engenharia nunca terá tempo para atender nem mesmo à demanda básica por novos recursos, muito menos avançar no ritmo necessário para inovar recursos novos e interessantes para seus clientes. O engenheiro gastará seu tempo resolvendo problemas e corrigindo códigos de baixa qualidade para evitar experiências negativas dos clientes. A implementação de código de alta qualidade é fundamental para a capacidade de uma organização inovar e crescer.

Este guia identifica principais indicadores de desempenho e processos específicos que ajudam a melhorar a qualidade do código. É seguido pelo [Guia de qualidade de lançamento](/docs/new-relic-solutions/observability-maturity/innovation-growth/release-quality-implementation-guide), que só pode ser feito após a conclusão das etapas descritas neste.

Você é um bom candidato para usar este guia se:

* No momento, você não está medindo a qualidade do código.
* A qualidade do seu código é considerada ruim.
* Você não sabe onde seus desenvolvedores estão gastando seu tempo.
* Sua organização sofre muitas interrupções devido a defeitos no aplicativo.

## Principais indicadores de desempenho [#key-perf-indicators]

Esses KPIs ajudam a identificar as fontes de defeitos de código e as áreas que exigem mais esforço do desenvolvedor para que seus desenvolvedores possam usar seu tempo com mais eficiência. Os KPIs também ajudam a entender se a velocidade de desenvolvimento tem algum impacto na qualidade do código.

### Estabilidade [#kpi-stability]

<CollapserGroup>
  <Collapser
    id="kpi-build-success"
    title="Crie KPI de sucesso"
  >
    O sucesso da construção mede o número de vezes que o novo código é compilado ou integrado com sucesso no aplicativo geral.

    <DNT>**Goal:**</DNT> Aumente a taxa de sucesso de construção para quase 100%

    <DNT>**Best practices:**</DNT> O evento de construção de código deve incluir o seguinte atributo:

    * ID da versão
    * Nome da compilação
    * Resultado da construção (sucesso/falha)
    * Duração da construção
  </Collapser>

  <Collapser
    id="kpi-unit-test-success"
    title="KPI de sucesso do teste unitário"
  >
    O sucesso do teste de unidade mede a porcentagem de testes de unidade com novos códigos aprovados.

    <DNT>**Goal:**</DNT> Aumente a taxa de sucesso do teste.

    <DNT>
      **Best practices:**
    </DNT>

    Os testes unitários devem:

    * Teste um caso de uso.

    * Conclua rapidamente.

    * Ser confiável.

    * Não tem dependência inter ou externa.

    * Tenha um código simples e fácil de manter.

      O evento de teste unitário deve incluir o seguinte atributo:

    * Nome de teste

    * Commit sendo testado

    * Duração do teste

    * Resultado do teste (sucesso/falha)
  </Collapser>

  <Collapser
    id="kpi-code-coverage"
    title="KPI de cobertura de código"
  >
    A cobertura de código mede a quantidade de base de código de um aplicativo que está sujeita a pelo menos um teste de unidade.

    <DNT>**Goal:**</DNT> Aumente a cobertura do código para 100%.

    <DNT>**Best practices:**</DNT> Siga as práticas recomendadas [de teste de unidade](#kpi-unit-test-success) para garantir que a cobertura do teste de código atinja a meta de 100%.
  </Collapser>

  <Collapser
    id="kpi-defect-volume"
    title="KPI de volume de defeitos"
  >
    O volume de defeitos mede o número de defeitos introduzidos em um aplicativo por um módulo de código específico.

    <DNT>**Goal:**</DNT> Reduza o número de novos defeitos. <DNT>**Best practices:**</DNT> Identifique as fontes de novos defeitos relacionando-os a serviços e módulos de código específicos.

    O evento de defeito de código deve incluir o seguinte atributo:

    * Timestamp
    * Aplicativo
    * Módulo de código
    * Referência ao defeito
  </Collapser>
</CollapserGroup>

### Velocidade [#kpi-velocity]

<CollapserGroup>
  <Collapser
    id="kpi-commit-volume"
    title="KPI de volume de confirmação de código"
  >
    A taxa de confirmação de código mede o número de novos commits de código ao longo do tempo.

    <DNT>**Goal:**</DNT> A taxa de confirmação de código deve ser correlacionada com o volume de defeitos para identificar o equilíbrio ideal entre velocidade e estabilidade.

    <DNT>**Best practices:**</DNT> O evento de commit do código deve incluir o seguinte atributo:

    * Timestamp
    * Usuário
    * Projeto
    * Repositório
    * Filial
    * Confirmar ID ou aplicar hash
  </Collapser>
</CollapserGroup>

<Steps>
  <Step>
    ### Reúna os KPIs necessários [#gather-kpis]

    O melhor lugar para começar é reunindo seus principais indicadores de desempenho. Para isso, você precisa conhecer a plataforma tecnológica específica que dá suporte aos seus processos de desenvolvimento, como repositório de código-fonte e plataforma de automação de build/teste. Em seguida, você precisará identificar métodos para extrair o atributo de cada KPI e importá-los para o New Relic.

    Você pode encontrar os KPIs e os atributos mínimos necessários para este caso de uso na seção [de indicadores-chave de desempenho](#key-perf-indicators) acima. Normalmente, você usará as APIs do seu conjunto de ferramentas de desenvolvimento para extrair os KPIs e seus atributos e, em seguida, enviá-los para a New Relic usando a [API do evento personalizado](/docs/data-apis/ingest-apis/introduction-event-api/).

    Antes de iniciar qualquer trabalho de integração personalizada, você deve descobrir se existe alguma integração pronta para uso aplicável.
  </Step>

  <Step>
    ### Implementar painel [#implement-dashboards]

    Nossos <InlinePopover type="dashboards"/>são o principal método usado por esse processo de melhoria. Eles mostram seus KPIs atuais e ajudam você a identificar as áreas que precisam de melhorias. Você pode encontrar um painel de amostra [no centro de recursos New Relic OMA no GitHub](https://github.com/newrelic/oma-resource-center).

    As informações exibidas no painel dependem do seu conjunto de ferramentas de desenvolvimento, portanto, você precisará [personalizar seu dashboard](https://developer.newrelic.com/collect-data/monitor-your-application/query-custom-data/) de acordo com suas especificações exatas.
  </Step>

  <Step>
    ### Estabeleça uma baselinede desenvolvimento [#establish-baseline]

    Como você precisa de dados suficientes para formar uma baseline antes de [executar a ativação inicial](#perform-enablement-one), você deve estabelecer sua linha de base que consiste em uma amostra da atividade de desenvolvimento. Normalmente, isso levará no mínimo duas semanas, mas pode levar até seis semanas, dependendo do seu ritmo de desenvolvimento atual. Uma maneira fácil de fazer isso é alinhar seu ciclo de coleta e avaliação baseline com seus sprints Agile, se aplicável.

    Você deve garantir periodicamente que os dados do evento estejam se acumulando conforme esperado no New Relic enquanto estabelece sua linha de base.
  </Step>

  <Step>
    ### Reúna-se com sua equipe [#meet-with-team]

    Depois de estabelecer sua linha de base, você apresentará às equipes de desenvolvimento e outras partes interessadas os dados coletados e o processo de melhoria contínua que seguirá.

    O processo consiste em três atividades:

    1. <DNT>
         **Review the KPIs and trends**
       </DNT>

       : Você e as partes interessadas analisarão os KPIs e identificarão tendências.

    2. <DNT>
         **Identfy achievements, challenges, and opportunities**
       </DNT>

       : nesta fase, você identificará áreas onde os KPIs estão melhorando (conquistas) e áreas onde não estão melhorando (desafios). Em seguida, você identificará estratégias e táticas para melhorar KPIs (oportunidades) e a melhor forma de implementá-las.

    3. <DNT>
         **Make technical recommendations**
       </DNT>

       : aqui, você e as partes interessadas relevantes identificarão e revisarão recomendações técnicas, como fazer alterações em sua cadeia de ferramentas de desenvolvimento ou estratégias de observabilidade.
  </Step>

  <Step>
    ### Comece o processo de melhoria [#improvement-process]

    Esta etapa final é um processo de melhoria contínua. Durante esta fase, você se [reunirá com sua equipe](#meet-with-team) para analisar seu progresso em relação à baseline e ajustar suas estratégias para entregar as melhorias desejadas. Cada ciclo do processo de melhoria deve ocorrer após várias iterações do seu processo de desenvolvimento. Normalmente, eles ocorrem no meio e no final de cada sprint Agile.

    Durante esta fase você deve:

    * Relate seus KPIs todas as semanas às partes interessadas para garantir que as equipes estejam priorizando o trabalho de maneira adequada e mostrem o progresso feito em direção aos resultados de negócios prometidos.
    * Registre e retenha seus KPIs semanais ao longo do tempo para estabelecer uma nova linha de base e mostrar a taxa de melhoria.
  </Step>
</Steps>

Depois de concluir o processo acima, você pode usar o New Relic para melhorar a qualidade do lançamento.

<UserJourneyControls nextStep={{"path":"/docs/tutorial-innovation-and-growth/release-quality-mgmt/","title":"Próxima Etapa","body":"Aprenda como usar o New Relic para melhorar a qualidade dos seus lançamentos"}}/>
