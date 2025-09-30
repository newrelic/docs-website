---
title: 'Migração para nuvem: Criar linha de base do aplicativo'
tags:
  - New Relic solutions
  - New Relic solutions
  - Cloud adoption
metaDescription: Use New Relic to establish a baseline to use for comparison during your cloud adoption process.
freshnessValidatedDate: never
translationType: machine
---

A migração para a nuvem pode assumir muitas formas. Algumas empresas optam por migrar seus aplicativos diretamente do data center para a nuvem (uma migração “Lift and Shift”), enquanto outras se concentram em reestruturar completamente seus aplicativos para aproveitar os benefícios disponíveis apenas na nuvem. Não importa a sua abordagem, há três perguntas principais que você deseja responder após a migração:

* Meu aplicativo ficou mais lento?
* Meu aplicativo está menos estável do que antes?
* Estou perdendo clientes devido a alguma das perguntas anteriores?

Para responder a essas perguntas, comece realizando alguns testes básicos para estabelecer uma baseline para o desempenho e a disponibilidade dos seus sistemas. Uma baseline é uma medida do desempenho e da disponibilidade atuais do seu aplicativo, que você usa como comparação após a migração para validar seu caso de negócios. Em alguns casos, você pode alterar uma baseline ao [realizar testes de aceitação de migração](/docs/new-relic-solutions/new-relic-solutions/optimize-cloud-architecture-spend-continuously-improve-your-modern-cloud-environment). Você também pode usar uma baseline como ponto de comparação durante a migração para ter certeza de que está no caminho certo.

## 1. Identifique os componentes [#identify-components]

Antes de iniciar uma migração para a nuvem, identifique todo o nível de toda a sua stack de aplicativos. Liste todos os componentes (aplicativo, serviços, etc.) que deseja migrar. Segmente a stack de aplicativos da seguinte maneira:

* Aplicativo (back-end/microsserviços/cron jobs)
* Serviços de dependência, como fila de mensagens
* Banco de dados
* Local na rede Internet
* Servidor e infraestrutura subjacentes

<Callout variant="tip">
  Certifique-se de ter acesso ao aplicativo e à instância antes de começar a criar a linha de base do aplicativo. Envolva os proprietários do aplicativo, o engenheiro DevOps e o gerente de produto para obter acesso.
</Callout>

<CollapserGroup>
  <Collapser
    id="components-list"
    title="Exemplo: Lista de componentes"
  >
    Aqui está um exemplo da lista de componentes em uma stack de aplicativos:

    <table>
      <thead>
        <tr>
          <th>
            Nome do componente
          </th>

          <th>
            Proprietário
          </th>

          <th>
            Stack de idiomas
          </th>

          <th>
            Acessibilidade (Internet, Intranet)
          </th>

          <th>
            Sistema operacional
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Serviço 1
          </td>

          <td>
            John Doe
          </td>

          <td>
            Java
          </td>

          <td>
            Internet
          </td>

          <td>
            RHEL 6
          </td>
        </tr>

        <tr>
          <td>
            Serviço 2
          </td>

          <td>
            Maya Wiz
          </td>

          <td>
            .NET
          </td>

          <td>
            Intranet
          </td>

          <td>
            Win2003 R2
          </td>
        </tr>

        <tr>
          <td>
            RabbitMQ
          </td>

          <td>
            John Doe
          </td>

          <td>
            Java
          </td>

          <td>
            Intranet
          </td>

          <td>
            AIX
          </td>
        </tr>

        <tr>
          <td>
            Local na rede Internet
          </td>

          <td>
            Maya Wiz
          </td>

          <td>
            ASP clássico
          </td>

          <td>
            Internet
          </td>

          <td>
            Win2000
          </td>
        </tr>

        <tr>
          <td>
            MSSQL
          </td>

          <td>
            David Z
          </td>

          <td>
            N / D
          </td>

          <td>
            Intranet
          </td>

          <td>
            Win2003 R2
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## 2. Determine a compatibilidade [#determine-compatibility]

Depois de identificar o aplicativo que deseja migrar, é hora de verificar qual aplicativo monitor com a plataforma New Relic. Trabalhe com as partes interessadas da sua organização para determinar a quantidade de instrumentação que é possível – ou permitida – dentro da sua organização. Este é um passo importante e que valerá a pena, pois quanto mais você puder instrumentalizar, melhor será sua linha de base.

Aqui estão os produtos New Relic para usar como linha de base, dependendo dos componentes que você identificou:

* [<DNT>**APM**</DNT>](/docs/apm): monitor seus aplicativos da web com APM. Consulte [Compatibilidade e requisitos para agente e produtos New Relic](/docs/agents/manage-apm-agents/installation/compatibility-requirements-new-relic-agents) para obter detalhes precisos de compatibilidade para cada idioma compatível.
* [<DNT>**Infrastructure**</DNT>](/docs/infrastructure): monitor seus hosts com infraestrutura. Consulte [Compatibilidade e requisitos de infraestrutura](/docs/infrastructure/new-relic-infrastructure/getting-started/compatibility-requirements-new-relic-infrastructure) para sistemas operacionais e ambientes suportados. Você também pode instrumentar outros produtos e serviços com [integração no host](/docs/integrations/host-integrations/host-integrations-list).
* [<DNT>**Synthetic monitoring**</DNT>](/docs/synthetics): monitor interfaces da Web e API com [monitoramento sintético](/docs/synthetics). Às vezes, talvez você não consiga instrumentar seu ambiente local com <InlinePopover type="apm"/>ou infraestrutura. Por exemplo, talvez a política da sua organização proíba a instalação de um agente atrás de um firewall. Nestes casos, se o aplicativo possuir frontend web, utilize monitoramento sintético, pois oferece monitoramento não-agente e ainda fornece a capacidade de estabelecer uma baseline.

<CollapserGroup>
  <Collapser
    id="connect-migration-example"
    title="Exemplo: componentes correspondentes a produtos New Relic"
  >
    Combine os componentes que você identificou com seus produtos correspondentes:

    <table>
      <thead>
        <tr>
          <th>
            Nome do componente
          </th>

          <th>
            Nível Proprietário
          </th>

          <th>
            Stack de idiomas
          </th>

          <th>
            Acessibilidade (Internet/Intranet)
          </th>

          <th>
            Sistema operacional
          </th>

          <th>
            New Relic
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Serviço 1
          </td>

          <td>
            John Doe
          </td>

          <td>
            Java
          </td>

          <td>
            Internet
          </td>

          <td>
            RHEL 6
          </td>

          <td>
            APM, monitoramento de infraestrutura, monitoramento sintético
          </td>
        </tr>

        <tr>
          <td>
            Serviço 2
          </td>

          <td>
            Maya Wiz
          </td>

          <td>
            .NET
          </td>

          <td>
            Intranet
          </td>

          <td>
            Win2003 R2
          </td>

          <td>
            APM, infraestrutura
          </td>
        </tr>

        <tr>
          <td>
            <DNT>
              ActiveMQ
            </DNT>
          </td>

          <td>
            John Doe
          </td>

          <td>
            Java
          </td>

          <td>
            Intranet
          </td>

          <td>
            AIX
          </td>

          <td>
            APM
          </td>
        </tr>

        <tr>
          <td>
            Local na rede Internet
          </td>

          <td>
            Maya Wiz
          </td>

          <td>
            ASP clássico
          </td>

          <td>
            Internet
          </td>

          <td>
            Win2000
          </td>

          <td>
            Sintético
          </td>
        </tr>

        <tr>
          <td>
            MSSQL
          </td>

          <td>
            David Z
          </td>

          <td>
            n/a
          </td>

          <td>
            Intranet
          </td>

          <td>
            Win2003 R2
          </td>

          <td>
            Infraestrutura, integração on-host
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## 3. monitoramento implantar [#deploy-monitoring]

Com base nas correspondências componente-produto que você fez, implante um agente ou monitor em sua arquitetura:

<CollapserGroup>
  <Collapser
    id="deploy-apm"
    title="Implantar APM"
  >
    [Instale o agente APM](/docs/agents/manage-apm-agents/installation/install-agent) na stack de aplicativos. As etapas para instalar o agente <InlinePopover type="apm"/>variam de acordo com o idioma.
  </Collapser>

  <Collapser
    id="deploy-infrastructure"
    title="Infraestrutura implantar"
  >
    Após revisar os requisitos de infraestrutura, siga as instruções para instalar o agente de infraestrutura em seus hosts:

    * [Instalar para Linux](/docs/infrastructure/new-relic-infrastructure/installation/install-infrastructure-linux)
    * [Instalar para Windows Server](/docs/infrastructure/new-relic-infrastructure/installation/install-infrastructure-windows-server)
    * [Instalar no AWS Elastic Beanstalk](/docs/infrastructure/new-relic-infrastructure/installation/install-infrastructure-agent-aws-elastic-beanstalk)
    * [Instalar com uma ferramenta de gerenciamento de configuração](/docs/infrastructure/new-relic-infrastructure/config-management-tools)
  </Collapser>

  <Collapser
    id="deploy-infrastructure-on-host"
    title="Implantar infraestrutura integração no host"
  >
    Para obter visibilidade estendida do aplicativo do qual seu código depende, implante [integração no host](/docs/infrastructure/host-integrations/host-integrations-list). As integrações disponíveis incluem Apache, MySQL, NGINX e outros.
  </Collapser>

  <Collapser
    id="create-synthetics-monitor"
    title="Criar monitor Sintético"
  >
    O monitoramento sintético é um conjunto de ferramentas automatizadas e programáveis para monitor seus sites, transações comerciais críticas e endpoints de API. Para começar [, adicione um monitor](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors#adding-monitors).

    <Callout variant="tip">
      Certifique-se de verificar se o URL do seu site pode ser acessado na rede pública. Você também pode precisar [adicionar IPs da New Relic à sua lista de permissões](/docs/synthetics/new-relic-synthetics/administration/synthetics-public-minion-ips).
    </Callout>
  </Collapser>
</CollapserGroup>

## 4. Reúna métricas [#gather-metrics]

Após implantar o agente e monitor, identifique quais métricas são mais importantes para o seu negócio e utilize essas métricas para definir seus KPIs. Algumas recomendações incluem:

* <DNT>**Response time:**</DNT> Tempo necessário para responder a uma solicitação.
* <DNT>**Throughput:**</DNT> Número de solicitações recebidas pelo aplicativo.
* <DNT>**Requesting queuing (Apache, IIS, NGINX):**</DNT> Duração do tempo que uma solicitação leva para chegar ao seu aplicativo.
* <DNT>**Database call duration:**</DNT> Duração do tempo necessário para concluir uma chamada de banco de dados.
* <DNT>**DB call counts:**</DNT> Quantidade de chamadas realizadas pelo código do aplicativo ao banco de dados.
* <DNT>**Error rate:**</DNT> Porcentagem de erros relatados.
* <DNT>**Apdex score:**</DNT> Um padrão do setor para medir a satisfação do usuário com o tempo de resposta de aplicativos e serviços web.
* <DNT>**DNS setup timing:**</DNT> O tempo que leva para conectar e receber dados do DNS.
* <DNT>**SSL setup timing:**</DNT> O tempo necessário para estabelecer uma conexão SSL.

Você pode encontrar algumas dessas métricas em [mapas de serviço](/docs/using-new-relic/service-maps/get-started/introduction-service-maps), bem como no [APM](/docs/apm/applications-menu/monitoring/apm-overview-page) e nas páginas [do Browser](/docs/browser/browser-monitoring/getting-started/introduction-browser-monitoring) <DNT>**summary**</DNT> .

Para obter informações mais detalhadas sobre navegação, interpretação e uso do APM, confira estes tutoriais da New Relic University:

* [Visão geral do tour dashboard](https://newrelic.wistia.com/medias/nywjt50h8u)
* [Dashboard de transações](https://newrelic.wistia.com/medias/hf694w8ew2)
* [Compreendendo o Apdex](https://newrelic.wistia.com/medias/ed0sc5053k)

## 5. Configure o painel [#dashboards]

Depois de definir seus KPIs, é fácil visualizá-los no [dashboard](/docs/dashboards). O painel oferece um único local para visualizar todos os dados coletados pelos produtos New Relic. os dados do painel consistem em [events](/docs/using-new-relic/welcome-new-relic/get-started/glossary#event), e cada evento possui um tipo de evento, um timestamp e valor principal [atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute).

Para obter mais informações sobre evento, consulte [Coleta de dados](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data) e [Evento padrão para produtos New Relic](/docs/insights/insights-data-sources/default-data/insights-default-data-other-new-relic-products).

Você pode localizar seus KPIs e dados métricos de negócios no New Relic usando [métrica e evento](/docs/query-your-data/explore-query-data/browse-data/introduction-data-explorer/) e a [linguagem de consulta NRQL](/docs/insights/nrql-new-relic-query-language/using-nrql/introduction-nrql). Você também pode [criar um painel](/docs/dashboards/new-relic-one-dashboards/get-started/introduction-new-relic-one-dashboards) para monitorar o desempenho desses KPIs:

<CollapserGroup>
  <Collapser
    id="baseline-maturity-example"
    title="Exemplo: desempenho do componente comparado com a linha de base"
  >
    Continuando os exemplos neste documento, a tabela a seguir ilustra a maturidade do seu desempenho do aplicativo durante um período de tempo com base nos marcos de implantação. Cada marco servirá como uma nova baseline para o seu aplicativo:

    <table>
      <thead>
        <tr>
          <th colSpan={2}>
            Componente
          </th>

          <th colSpan={3}>
            Marco 1
          </th>

          <th colSpan={3}>
            Marco 2
          </th>

          <th>
            Marco N
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style={{ width: "250px" }}>
            <DNT>
              **Environment**
            </DNT>
          </td>

          <td style={{ width: "250px" }}>
            <DNT>
              **Component Name**
            </DNT>
          </td>

          <td>
            <DNT>
              **Response Time**
            </DNT>
          </td>

          <td>
            <DNT>
              **SLA**
            </DNT>
          </td>

          <td>
            <DNT>
              **Apdex**
            </DNT>
          </td>

          <td>
            <DNT>
              **Response Time**
            </DNT>
          </td>

          <td>
            <DNT>
              **SLA**
            </DNT>
          </td>

          <td>
            <DNT>
              **Apdex**
            </DNT>
          </td>

          <td>
            <DNT>
              **Response**
            </DNT>
          </td>
        </tr>

        <tr>
          <td>
            No local
          </td>

          <td>
            Serviço 1
          </td>

          <td>
            1,5 segundos
          </td>

          <td>
            80%
          </td>

          <td>
            70%
          </td>

          <td>
            1,5 segundos
          </td>

          <td>
            68%
          </td>

          <td>
            0,65
          </td>

          <td>
            1,4 segundos
          </td>
        </tr>

        <tr>
          <td>
            Nuvem
          </td>

          <td>
            Serviço 1
          </td>

          <td>
            0,9 segundos
          </td>

          <td>
            96,8%
          </td>

          <td>
            95%
          </td>

          <td>
            0,9 segundos
          </td>

          <td>
            98%
          </td>

          <td>
            0,99
          </td>

          <td>
            0,7 segundos
          </td>
        </tr>

        <tr>
          <td>
            No local
          </td>

          <td>
            Serviço 2
          </td>

          <td>
            0,7 segundos
          </td>

          <td>
            73%
          </td>

          <td>
            68%
          </td>

          <td>
            0,7 segundos
          </td>

          <td>
            80%
          </td>

          <td>
            0,78
          </td>

          <td>
            0,85 segundos
          </td>
        </tr>

        <tr>
          <td>
            Nuvem
          </td>

          <td>
            Serviço 2
          </td>

          <td>
            0,6 segundos
          </td>

          <td>
            90%
          </td>

          <td>
            92%
          </td>

          <td>
            0,6 segundos
          </td>

          <td>
            89%
          </td>

          <td>
            0,90
          </td>

          <td>
            0,5 segundos
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

Após a migração, compare essas linhas de base com a linha de base [dos testes de aceitação da migração](/docs/perform-migration-acceptance-testing) .

## Dicas de especialistas [#expert-tips]

Se você achar que precisa de dados que não são capturados pela instrumentação padrão, facilitamos a captura de dados personalizados:

* [Instrumentação APM personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/)
* [Dados personalizados do Browser](/docs/insights/insights-data-sources/custom-data/insert-data-via-new-relic-browser)
* [Atributo personalizado de infraestrutura](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#conf-custom_attributes)
* [Dados personalizados do evento](/docs/insights/insights-data-sources/custom-data/send-custom-data-insights)
* [Dados personalizados móveis](/docs/mobile-monitoring/new-relic-mobile/maintenance/add-custom-data-new-relic-mobile)
* [Sintético atributo personalizado](/docs/synthetics/new-relic-synthetics/scripting-monitors/add-custom-attributes-new-relic-synthetics-data)

Você também pode aprender mais sobre a instrumentação personalizada do APM com a [série de tutoriais de dados personalizados](https://learn.newrelic.com/custom-data-with-apm) da New Relic University.
