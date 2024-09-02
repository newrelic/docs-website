---
title: Guia de práticas recomendadas de APM
tags:
  - New Relic solutions
  - Best practices guides
metaDescription: Here are some best practices designed to help you become a APM master and a key asset to your team.
freshnessValidatedDate: never
translationType: machine
---

<DNT>
  **Application monitoring tips you need to know**
</DNT>

Uma coisa é saber usar o APM, outra é saber usar bem o software de monitoramento de desempenho de aplicativos (APM) da New Relic. Aqui estão algumas práticas recomendadas elaboradas para ajudar você a se tornar um <InlinePopover type="apm"/>profissional e um recurso importante para sua equipe!

Quer um tutorial passo a passo sobre como resolver problemas de desempenho? Confira nosso [tutorial meu aplicativo é lento](/docs/journey-app-slow/root-causes/).

<Callout variant="tip">
  Para obter uma visão geral de alto nível de todos os seus aplicativos e serviços, use nosso [explorador de entidades](/docs/new-relic-one/use-new-relic-one/ui-data/new-relic-one-entity-explorer).
</Callout>

<Callout variant="tip">
  Consulte [Diagnósticos de engenharia de confiabilidade](/docs/new-relic-solutions/observability-maturity/uptime-performance-reliability/diagnostics-beginner-guide) para obter um guia sobre como encontrar problemas comuns de desempenho usando APM e outros recursos da New Relic.
</Callout>

## 1. Padronize nomes de aplicativos [#naming]

A maioria dos agentes New Relic fornece um nome de aplicativo padrão, como “Meu aplicativo” ou “Aplicativo PHP”, se você não especificar um em seu arquivo de configuração New Relic. Você não quer acabar com 20 aplicativos com nomes idênticos, certifique-se de selecionar um identificador descritivo para seus aplicativos assim que implantá-los.

Para manter tudo consistente e fácil de navegar, a New Relic recomenda padronizar a nomenclatura do seu aplicativo (por exemplo, todos os aplicativos em preparação acrescentam \[preparação] ou algo semelhante no final de seus nomes). Idealmente, você deseja que seu novo aplicativo Java seja nomeado automaticamente para reduzir as chances de erros tipográficos e nomes incorretos.

### Como fazer isso

Para aplicativos Java, a nomenclatura automática de aplicativos pode vir das seguintes fontes:

* Solicitar atributo
* Parâmetro de inicialização do servlet
* Parâmetro de inicialização do filtro
* Parâmetro de contexto do aplicativo Web
* Nome do contexto do aplicativo Web (nome de exibição)
* Caminho de contexto do aplicativo Web

Escolha o método que melhor se adapta às suas necessidades e siga [estes passos](/docs/agents/java-agent/configuration/automatic-application-naming).

Para aplicativos não Java, não há métodos de nomenclatura automática; portanto, consulte a [documentação do seu agente APM](/docs/apm/new-relic-apm/getting-started/introduction-apm).

## 2. Adicione tag ao seu aplicativo [#labels]

Quando vários aplicativos diferentes usam a mesma conta e cada aplicativo abrange vários ambientes (por exemplo, desenvolvimento, teste, pré-produção, produção), pode ser difícil encontrar um aplicativo específico no dashboard de visão geral. É por isso que recomendamos adicionar tags aos seus aplicativos para que você possa segmentá-los em grupos lógicos.

As duas tags mais comuns que os clientes maduros do APM usam são o nome do aplicativo e o ambiente. Assim, por exemplo, se você quiser visualizar o aplicativo de faturamento em Teste, poderá simplesmente filtrar por "aplicativo de faturamento" ( tag de nome) e "teste" ( tag de ambiente).

<Callout variant="caution">
  Nos arquivos de configuração do agente APM, use o campo `labels` para adicionar tag aos seus dados. Por exemplo, veja esta descrição da [configuração de rótulos do Python](/docs/agents/python-agent/configuration/python-agent-configuration#labels).
</Callout>

O APM foi projetado para que os aplicativos possam ser agrupados em um número ilimitado de categorias de tag significativas.

### Como fazer isso

1. [Aprenda sobre a etiqueta.](/docs/new-relic-one/use-new-relic-one/core-concepts/tagging-use-tags-organize-group-what-you-monitor)
2. [Aprenda como adicionar tag.](/docs/new-relic-one/use-new-relic-one/core-concepts/use-tags-help-organize-find-your-data/#tag-sources)
3. [Aprenda como consultar tag.](/docs/new-relic-one/use-new-relic-one/core-concepts/use-tags-help-organize-find-your-data/#query-apm-tags)

## 3. Criar e avaliar políticas de alertas [#alerts]

Quando os principais indicadores de desempenho aumentam ou diminuem, os indivíduos e as equipes da sua organização precisam ser notificados. [Os alertas no New Relic](/docs/alerts/new-relic-alerts/getting-started/alerting-new-relic) fornecem um conjunto de ferramentas, incluindo anomalias dinâmicas, que permitem detectar problemas antes que eles afetem seu usuário final.

A política de alertas pode ser configurada de duas maneiras principais:

* <DNT>
    **Static threshold alerts**
  </DNT>

  são ótimos quando você já conhece a natureza de um aplicativo e seus comportamentos normais provavelmente não mudarão tão cedo. Pontuação Apdex, tempo de resposta, taxas de erros, taxas de transferência são alguns dos limites estáticos sobre os quais você pode criar políticas de alertas.

* <DNT>
    **Dynamic anomaly alerts**
  </DNT>

  facilita a determinação e definição do limite de alerta dinâmico para aplicativos com padrões sazonais variados e tendências de crescimento (que dificultam a definição de limites que definam o comportamento normal). Esses

  <InlinePopover type="alerts"/>

  usam anomalias modeladas a partir dos dados métricos históricos do seu aplicativo.

Cada política de alertas pode conter quantas condições você precisar, e cada condição do alerta inclui três componentes:

* Tipo de condição (métrica, serviço externo e assim por diante)

* [entidade](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#alert-entity) que a política destina (por exemplo, aplicativos APM,

  <InlinePopover type="browser"/>

  aplicativos ou hosts)

* Limite que se transforma em situações de alerta com gravidade crescente

Depois de configurar seu alerta, você deseja ter certeza de que está aproveitando todos os canais de notificação viáveis. Afinal, para que servem os alertas se ninguém sabe deles?

Você pode gerenciar alertas criando grupos de usuários específicos e aproveitando os canais de alerta integrados da New Relic, incluindo Slack, PagerDuty, webhooks e e-mail. Certifique-se de avaliar as políticas de alertas regularmente para garantir que sejam sempre válidas.

### Como fazer isso

Veja a documentação detalhada:

* Para configurar o alerta dinâmico de anomalia e escolher um aplicativo, [siga os procedimentos padrão](/docs/alerts/new-relic-alerts/defining-conditions/create-anomaly-alert-conditions). Você verá uma visualização da métrica com a anomalia prevista. Você pode selecionar uma métrica para esse aplicativo e ver a anomalia correspondente. Em seguida, usando os controles deslizantes de limite, você pode definir até que ponto deseja que seu limite siga a previsão de anomalia.
* Para configurar o alerta de limite estático para suas configurações do Apdex, [siga os procedimentos padrão](/docs/apm/new-relic-apm/apdex/change-your-apdex-settings).
* Para configurar seu canal de notificação de alerta, [siga os procedimentos padrão](/docs/alerts-applied-intelligence/notifications/intro-notifications).

## 4. Identifique e configure o principal da transação [#key-transactions]

Dependendo da natureza do seu aplicativo, algumas transações podem ser mais importantes para você do que outras. O principal recurso de transação da New Relic foi projetado para ajudá-lo monitor de perto o que você considera ser a transação mais crítica para os negócios do seu aplicativo, seja o tempo de resposta do usuário final ou do aplicativo, contagens de chamadas, taxas de erros ou qualquer outra coisa. Você também pode definir níveis de limite de alerta para notificação quando o principal da sua transação estiver apresentando desempenho insatisfatório.

### Como fazer isso

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Key transactions**
   </DNT>

   e selecione

   <DNT>
     **Add more**
   </DNT>

   . Em seguida, selecione o aplicativo e a transação da web ou, na transação selecionada, selecione

   <DNT>
     **Track as key transaction**
   </DNT>

   .

2. Digite um nome para o principal da transação e selecione

   <DNT>
     **Track key transaction**
   </DNT>

   .

3. Opcional: se o agente do aplicativo selecionado suportar alertas customizados, use os valores padrão que o New Relic preenche automaticamente ou selecione Editar política de transação de alerta principal para configurar os valores de Apdex e limite de alerta.

4. Para visualizar os detalhes dashboard principal da transação, selecione

   <DNT>
     **View new key transaction**
   </DNT>

   .

## 5. Acompanhe o histórico de implantação [#deployments]

Quando as equipes de desenvolvimento lançam novos códigos com a maior frequência possível, pode ser difícil medir o impacto que cada implantação está tendo no desempenho. Uma maneira de ficar atento à forma como essas mudanças estão afetando seu aplicativo é por meio de relatórios de implantação.

Esses relatórios listam a implantação recente e seu impacto nas pontuações Apdex do usuário final e dos servidores de aplicativos, juntamente com o tempo de resposta, taxas de transferência e erros. Você também pode visualizar e detalhar os detalhes para detectar erros relacionados à implantação recente ou registrar um ticket e compartilhar detalhes com sua equipe.

### Como fazer isso

1. Na barra de menu New Relic , selecione

   <DNT>
     **APM & services > (select an app) > Events > Deployments**
   </DNT>

   .

2. Para visualizar o desempenho após uma implantação, acesse o dashboard Visão geral do aplicativo selecionado na seção

   <DNT>
     **Recent events**
   </DNT>

   .

Uma barra vertical azul em um gráfico indica uma implantação. Para visualizar informações resumidas sobre a implantação, aponte para a barra azul.

## 6. Revise os relatórios APM [#reporting]

Desde SLA, implantação e capacidade até escalabilidade, relatórios de uso de host e muito mais, o APM oferece uma variedade de ferramentas de relatórios para download que revelam tendências históricas – todas ótimas maneiras de relatar para equipes executivas seniores ou clientes. Dê uma olhada na [lista completa de relatórios](/docs/apm/reports) e use-os a seu favor.

### Como fazer isso

1. Na barra de menu do APM, selecione

   <DNT>
     **Applications > (select an app) > Reports**
   </DNT>

   .

2. Selecione o relatório que você gostaria de ver.

3. Se quiser salvar ou exportar um relatório para compartilhar, selecione

   <DNT>
     **Download this report as .csv**
   </DNT>

   , que criará um relatório com valores separados por vírgula.

## 7. Revise seu ambiente com mapas de serviço [#entire-environment]

Use [mapas de serviços](/docs/data-analysis/service-maps/get-started/introduction-service-maps) da New Relic, um recurso incluído no APM, para entender como os aplicativos e serviços em sua arquitetura se conectam e se comunicam entre si. Os mapas de serviço são [representações visuais e personalizáveis](/docs/apm/applications-menu/monitoring/customize-service-maps) da arquitetura do seu aplicativo. Os mapas mostram automaticamente [as conexões e dependências](/docs/data-analysis/service-maps/get-started/introduction-service-maps#connections) do seu aplicativo, incluindo banco de dados e serviços externos. [Indicadores de integridade e métricas de desempenho](/docs/data-analysis/service-maps/get-started/introduction-service-maps#health-performance) mostram o status operacional atual de cada parte da sua arquitetura.

<DNT>
  **How to do it**
</DNT>

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > More > Service maps**
   </DNT>

   .

2. Para começar, consulte [Introdução aos mapas de serviço](/docs/understand-dependencies/understand-system-dependencies/service-maps/introduction-service-maps).

## 8. Mantenha-se atualizado [#agents-current]

Com a plataforma SaaS da New Relic, obter novos recursos é tão fácil quanto atualizar seu agente. Muito provavelmente sua organização já possui um conjunto de scripts para implantar atualizações de aplicativos em seu ambiente. De maneira semelhante, você também pode automatizar a implantação do agente New Relic para garantir que seus sistemas estejam atualizados. [Ansible](https://github.com/newrelic/infrastructure-agent-ansible), [Chef](https://github.com/newrelic/infrastructure-agent-chef) e [Puppet](https://github.com/newrelic/infrastructure-agent-puppet) são ótimos exemplos de estrutura de implantação que facilitam a vida, permitindo automatizar todo o processo de implantação e gerenciamento.

### Como fazer isso

Revise regularmente qual versão do agente você está usando para saber quando uma atualização é necessária. Se a versão mais recente do agente contiver uma correção necessária ou funcionalidade adicional, faça download dela.

Para implantar o agente automaticamente <DNT>**(preferred as a method to avoid errors)**</DNT>:

1. Use o script de implantação existente, desde que possa ser adaptado para lidar com a implantação.

   OU

   Criar e manter um script que implante e configure especificamente o agente New Relic. Idealmente, o script extrairia os arquivos do agente de um repositório onde os arquivos são versionados (para fins de reversão).

2. Depois que o script for criado, desligue o aplicativo (a menos que o script resolva isso).

3. Execute o script de implantação.

4. Inicie o aplicativo (a menos que o script lide com isso).

5. Se surgirem problemas, execute o script para reverter para a versão anterior.

Para implantar o agente manualmente:

1. Faça backup do diretório do agente atual.

2. Implantar o agente atualizado no diretório de agente existente.

3. Modifique os arquivos de configuração comparando novos arquivos com arquivos existentes. Em particular, certifique-se de que itens como

   <InlinePopover type="licenseKey"/>

   e extensões personalizadas sejam copiados para a nova configuração.

4. Reinicie o aplicativo.

5. Se surgirem problemas, restaure o agente antigo usando o backup e reinicie.

## 9. Gerencie o acesso do usuário [#sso]

Como você gerencia seu usuário depende de qual [modelo de usuário](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-user-models) seu usuário está:

* Veja [a documentação do nosso modelo de usuário original](/docs/accounts/original-accounts-billing/original-users-roles/users-roles-original-user-model)
* Veja [a documentação do nosso modelo de usuário mais recente](/docs/accounts/accounts-billing/new-relic-one-user-management/introduction-managing-users)
