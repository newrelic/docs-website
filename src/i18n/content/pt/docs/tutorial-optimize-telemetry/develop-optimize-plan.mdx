---
title: Crie um plano de otimização
metaDescription: Taking your ingested and reported ingest data and optimizing it.
freshnessValidatedDate: '2023-08-11T00:00:00.000Z'
translationType: machine
---

Com os dados de ingestão mapeados corretamente, você pode começar a otimizar sua telemetria para reduzir os dados de ingestão redundantes e diminuir os custos de ingestão. A primeira etapa é criar um plano de otimização e, em seguida [, usar técnicas de otimização de dados](/docs/tutorial-optimize-telemetry/data-optimize-techniques) para colocar esse plano em ação.

## Entenda seus objetivos de observabilidade [#prioritize-objectives]

Uma das partes mais importantes da framework de governança de ingestão de dados é criar drivers de valor de observabilidade. Isso ajuda você a alinhar seus dados com métricas concretas que você pode usar para medir o quão importantes (ou redundantes) eles são para seus objetivos.

Eles também ajudam você a entender seus objetivos quando precisar configurar uma nova telemetria no futuro. Ao fazer isso, você vai querer entender o que ele oferece aos seus sistemas gerais de observabilidade para evitar qualquer sobreposição desnecessária. Se você estiver criando novos dados de telemetria que não estejam alinhados com nenhum dos objetivos abaixo, pode ser um bom sinal de que os dados não são necessários e que você pode evitar criá-los para ajudar a reduzir custos:

* Cumprindo um SLA interno
* Cumprindo um SLA externo
* Apoio à inovação de recursos (desempenho A/B e testes de adoção)
* Experiência em monitoramento de clientes
* Manter fornecedores e provedores de serviço internos aos seus SLA
* Monitoramento processo da empresa health
* Outros requisitos de conformidade

O alinhamento a esses objetivos permite tomar as decisões corretas sobre a priorização de valor e ajuda a orientar as equipes para saber por onde começar quando implementar novas plataformas e serviços.

## Desenvolva um plano de otimização [#develop-plan]

Depois de entender seus objetivos, é hora de implementar um plano de otimização. Este plano ajudará você a medir o valor de seus dados de ingestão e a encontrar quais dados você pode excluir com segurança para ajudar a manter os custos baixos.

Para esta seção, faremos duas suposições principais:

* Você tem as ferramentas e técnicas da [baseline do seu documento de ingestão de dados](/docs/new-relic-solutions/observability-maturity/operational-efficiency/dg-baselining) para rastrear adequadamente a origem dos seus dados.
* Você tem um bom entendimento dos [drivers de valor de maturidade de observabilidade](/docs/new-relic-solutions/observability-maturity/introduction), que são cruciais para definir um valor e uma prioridade para grupos de telemetria.

Temos três exemplos abaixo de como você pode avaliar sua própria ingestão de telemetria e tomar as decisões certas para as necessidades da sua organização. Embora cada um desses exemplos se concentre em um fator de valor, a maior parte da instrumentação fornece dados sobre muitas áreas de valor.

<CollapserGroup>
  <Collapser
    id="case-study-1"
    title="Exemplo 1: Foco no tempo de operação e confiabilidade"
  >
    Uma conta está ingerindo cerca de 20% mais do que o orçamento previsto. Um gerente lhes pediu que encontrassem uma maneira de reduzir o consumo. Seu fator de valor mais importante é <DNT>**Uptime, performance, and reliability**</DNT>.

    Seu patrimônio inclui:

    * <InlinePopover type="apm"/>(desenvolvimento, preparação, produção)

    * Distributed tracing

    * Browser

    * Monitoramento de infraestrutura de 100 hosts

    * Monitoramento Kubernetes (dev, staging, prod)

    * Log (dev, preparação, prod - incluindo depuração)

      <Callout
        variant="IMPORTANT"
        title="Plano de otimização"
      >
        * Omita o log de depuração (sabendo que eles podem ser ativados se houver algum problema), economizando 5%.
        * Omita várias métricas de estado do Kubernetes que não são necessárias para exibir o explorador de cluster do Kubernetes, economizando 10%.
        * Solte algum browser customizado que eles estavam coletando quando testaram o novo recurso, economizando 10%.
      </Callout>

      Depois de executar essas mudanças, a equipe ficou 5% abaixo do orçamento e liberou espaço para fazer um piloto de NPM, completando a tarefa que lhe foi atribuída pelo gerente.

      <Callout
        variant="IMPORTANT"
        title="Resultado final"
      >
        * 5% abaixo do orçamento original
        * Headroom criado para um piloto NPM que atende aos objetivos de tempo de operação, desempenho e confiabilidade
        * Perda mínima de tempo de operação e observabilidade de confiabilidade
      </Callout>
  </Collapser>

  <Collapser
    id="case-study-2"
    title="Exemplo 2: Foco na experiência do cliente"
  >
    Uma equipe responsável por uma nova plataforma voltada para o usuário com ênfase em <InlinePopover type="mobile"/>e monitoramento de browser está 50% acima do orçamento. Eles precisarão dimensionar corretamente sua ingestão, mas são inflexíveis em não sacrificar nenhuma observabilidade <DNT>**Customer experience**</DNT> .

    Seu patrimônio inclui:

    * Mobile
    * Browser
    * APM
    * Distributed tracing
    * Infraestrutura em 30 hosts, incluindo amostras de processos
    * Monitoramento Serverless para alguns processos backend assíncronos
    * Log de sua função serverless
    * Várias integrações na nuvem

      <Callout
        variant="IMPORTANT"
        title="Plano de otimização"
      >
        * Omita o log serverless, que é redundante para suas necessidades devido à integração do Lambda.
        * Diminua a taxa de amostragem do processo em seus hosts para cada minuto.
        * Elimine dados de amostra do processo em ambientes de desenvolvimento.
        * Desative a integração do EC2, que é altamente redundante com outro monitoramento de infraestrutura fornecido pelo agente de infra-estrutura New Relic.
      </Callout>

      <Callout
        variant="IMPORTANT"
        title="Resultado final"
      >
        * 5% acima do orçamento original
        * Suficiente para passar pela alta temporada
        * Sem perda de observabilidade da experiência dos clientes
      </Callout>

      Depois de executar as mudanças, eles agora estão apenas 5% acima do orçamento original e concluem que isso é suficiente para mantê-los durante a alta temporada.
  </Collapser>

  <Collapser
    id="case-study-3"
    title="Exemplo 3: Foco na inovação"
  >
    Uma equipe está refatorando um grande monólito Python para quatro microsserviços. O monolith compartilha infraestrutura com a nova arquitetura, incluindo um banco de dados de clientes e uma camada de cache. Eles estão 70% acima do orçamento e têm dois meses antes de poderem desativar oficialmente o monólito.

    Seu patrimônio inclui:

    * Monitoramento Kubernetes (microsserviços)

    * Monitoramento de hospedeiro New Relic (monolito)

    * APM (microsserviços e monitoramento de host)

    * Distributed tracing (microsserviços e monitoramento de host)

    * Postgresql (compartilhado)

    * Redis (compartilhado)

    * MSSQL (futuro banco de dados para a arquitetura de microsserviços)

    * Registro do balanceador de carga (microsserviços e monitoramento de host)

      <Callout
        variant="IMPORTANT"
        title="Plano de otimização"
      >
        * Configure a geração de registros do balanceador de carga para monitor apenas códigos de resposta `5xx`.
        * Defina a taxa de amostragem personalizada em `ProcessSample`, `StorageSample` e `NetworkSample` como 60s para hosts que executam o monólito
        * Desative o monitoramento MSSQL, pois a nova arquitetura não o utiliza.
        * Desative distributed tracing para o monólito, pois é muito menos útil do que será para a arquitetura de microsserviços.
      </Callout>

      <Callout
        variant="IMPORTANT"
        title="Resultado Final"
      >
        * 1% abaixo do orçamento original

        * Sem perda de observabilidade

          <DNT>
            **Innovation and growth**
          </DNT>
      </Callout>
  </Collapser>
</CollapserGroup>

<Callout variant="tip">
  Recomendamos que você acompanhe o plano em uma ferramenta de gerenciamento de tarefas para ajudar a gerenciar o plano de otimização e compreender o efeito de cada tarefa de otimização. Você pode usar este [modelo de plano de otimização de dados](https://docs.google.com/spreadsheets/d/1CimLpALwl1Z9f41vzbNWx00bGcED9XPV3s4ROqVEnr0/copy) para ajudar.
</Callout>

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-optimize-telemetry/data-optimize-techniques/","title":"Próxima Etapa","body":"Aprenda como usar várias técnicas para otimizar sua ingestão geral"}}
  previousStep={{"path":"/docs/tutorial-optimize-telemetry/detect-anomalies/","title":"Passo anterior","body":"Aprenda como usar seu relatório de baseline para ajudá-lo a encontrar anomalias com sua telemetria"}}
/>
