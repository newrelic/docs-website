---
title: 'Observabilidade como código: automatize sua configuração de observabilidade para gerar valor'
metaDescription: Our observability as code guide gives you best practices for automating your New Relic installation and configuration.
tags:
  - Observability as Code
  - Automation
  - Workflow
  - Implementation guide
freshnessValidatedDate: never
translationType: machine
---

Este guia orienta você em ideias e processos para automatizar a instalação e configuração do New Relic para maximizar o valor obtido com a observabilidade. Faz parte da nossa [série sobre maturidade de observabilidade](/docs/new-relic-solutions/observability-maturity/introduction).

## Visão geral [#overview]

<DNT>**Observability as code**</DNT> é um termo usado para descrever o processo de automatização da configuração de suas ferramentas de observabilidade, de forma consistente, controlada e automatizada, para ajudá-lo a obter o máximo valor de seus dados de telemetria. Este recurso se concentrará em fazer isso para a implementação do New Relic.

Por que você deve usar este guia?

À medida que sua infraestrutura, tecnologias de aplicativos e serviços evoluem, sua escala e complexidade aumentam, aumentando o volume de dados coletados de ferramentas de instrumentação (incluindo New Relic) e o desafio associado à compreensão dos dados, contextualizando-os e conduzindo ações por trás disso.

Usar nossa observabilidade como metodologia de código para automatizar a configuração do New Relic aborda esse desafio, ajudando a organização a acelerar a adoção, melhorar a estabilidade e impulsionar uma melhor governança.

Este guia fornece orientação sobre como abordar a implementação da observabilidade como código e oferece conselhos de boas práticas e exemplos de referência para permitir que você crie e mantenha sua plataforma New Relic com rapidez e escala. Ele aproveita a automação do fluxo de trabalho e ferramentas de provisionamento para permitir que a organização dimensione a observabilidade das práticas recomendadas, ao mesmo tempo que reduz o esforço manual e melhora a prestação de serviços. Uma implementação bem-sucedida dessas ideias deverá agregar valor real tanto para a própria organização de TI quanto para os negócios que ela suporta.

## Resultados desejados [#desired-outcomes]

Reduzindo os custos e riscos associados à implementação e manutenção de uma solução de observabilidade configurada de maneira ideal em ambientes de grande escala e em rápida mudança.

Especificamente, alguns dos benefícios de adotar a observabilidade como práticas de código são:

### Repetível, replicável, reutilizável

Gerenciar os recursos da New Relic por meio de código significa que eles podem ser facilmente repetidos, dimensionados e atualizados em massa. Aproveitar uma abordagem modular com ferramentas de provisionamento como o Terraform permite que conjuntos de recursos, como painel, alerta e carga de trabalho, sejam compartilhados e implantados de forma rápida e fácil, acelerando o tempo de inicialização e melhorando os padrões de toda a organização.

### Trabalho reduzido

O trabalho de criar e manter recursos New Relic gerenciados por meio de código é significativamente menor do que gerenciá-los manualmente por meio da interface do usuário, especialmente quando se trabalha em escala. Nossa interface se presta bem à descoberta e ao teste, mas as alterações nos recursos gerenciados por código podem ser aplicadas em massa, reduzindo enormemente o tempo de administração dos recursos. Uma abordagem comum é desenvolver alertas e painéis dentro da interface do usuário e, quando forem considerados maduros o suficiente, migrá-los para recursos gerenciados por código.

### Documentação e contexto

A enorme variedade de recursos que podem ser configurados no New Relic pode dificultar a compreensão, ao analisar um único recurso, por que ele foi criado ou configurado dessa forma. A configuração via código permite comentários e documentação associados que ajudam a explicar por que certas escolhas podem ter sido feitas, quando e por quem.

### Histórico auditável

Embora seja possível entender quem fez alterações nos recursos da New Relic por meio do evento `NRAuditEvent` , isso não fornece muitos antecedentes sobre <DNT>**why**</DNT> as alterações foram feitas, qual era seu estado anterior ou quem aprovou as alterações. O gerenciamento de recursos por meio de código em conjunto com um fluxo de trabalho de provisionamento baseado em aprovação automatizada permite uma visibilidade muito mais clara das alterações e uma governança aprimorada, ao mesmo tempo que fornece métodos de reversão e recuperação.

### Segurança

A observabilidade como código permite controles mais rígidos sobre o uso de chave de API para gerenciar recursos da New Relic. A segurança é melhorada reduzindo o número de chaves de API em circulação e garantindo uma governança adequada em relação à sua criação e disseminação. Dissuadir o usuário de usar suas próprias chaves, especialmente dentro do fluxo de trabalho automatizado, significa que a área de superfície para uma violação de chave ou corrupção não intencional é reduzida.

### Mudanças delta eficientes

Ferramentas de provisionamento como o Terraform possibilitam fazer alterações delta nos recursos existentes. Isso torna as atualizações rápidas e eficientes, pois apenas os atributos dos recursos que precisam ser alterados são alterados, com destruição e recriação mínimas de recursos. Isto é importante porque garante que os GUIDs de recursos como dashboard e alerta não sejam alterados na atualização.

### Reaja a estímulos externos

Combinar a observabilidade como código com o fluxo de trabalho automatizado permite que recursos do New Relic sejam criados e alterados como resultado de estímulos externos, como implantação de aplicativo, evento de infraestrutura ou qualquer outra entrada de dados. Por exemplo, você pode gerar automaticamente um painel e um alerta que compare os principais sinais métricos clássicos entre os lançamentos de versões de código no momento da implantação.

### Propriedade contextual e embalagem

O gerenciamento de recursos no código permite que recursos relacionados sejam gerenciados em conjunto. É mais fácil compreendê-los e gerenciá-los em um só lugar, em código, do que quando distribuídos pela interface do usuário. Por exemplo, isso permite que diferentes equipes gerenciem, visualizem e mantenham os recursos dentro de sua esfera de influência e não tenham que caçar os recursos que gerenciam.

### Recuperação de desastres

Ocasionalmente acontecem erros, o recurso errado é atualizado ou excluído. A recuperação dessas situações com o gerenciamento manual de recursos é difícil porque não é fácil saber o que existia antes ou mesmo se o recurso foi alterado ou perdido. A observabilidade como código ajuda a proteger contra esses problemas, garantindo que qualquer recurso possa ser recriado ou redefinido para a configuração esperada. Ele também cria uma oportunidade para detectar proativamente desvios de configuração.

### Velocidade de implantação

Observabilidade, pois o código acelera a velocidade de implantação, permitindo que um conjunto comum de recursos seja facilmente compartilhado entre as equipes e usado para iniciar ferramentas de observabilidade. Isso é particularmente evidente na arquitetura de microsserviços, onde arquitetura de implantação de aplicativo semelhante se beneficia dos recursos padrão da New Relic baseados em módulos. A criação de módulos reutilizáveis gerenciados centralmente também ajuda a padronizar abordagens comuns para ferramentas de observabilidade.

## Principais indicadores de desempenho [#key-performance-indicators]

A maturidade da sua observabilidade como implantação de código pode ser avaliada de diversas maneiras. Geralmente, quanto mais recursos em um ambiente forem gerenciados por meio de código, mais madura será a implantação. Aqui estão alguns dos KPIs:

<CollapserGroup>
  <Collapser
    id="resources-managed-kpi"
    title="Proporção de recursos gerenciados por meio de código"
  >
    <img
      src="/images/oac_diagram_env-maturity.webp"
      title="Environment maturity"
      alt="Percentage of code driven configuration increases with environment maturity"
    />

    <figcaption>
      Este diagrama ilustra como a porcentagem de recursos gerenciados com código pode aumentar em direção ao ambiente de produção.
    </figcaption>

    ### Calcular recursos gerenciados

    A proporção de recursos gerenciados por meio de código pode ser usada como indicador de maturidade. Este KPI pode ser usado para comparar a maturidade de diferentes ambientes e também para acompanhar ao longo do tempo o progresso da sua observabilidade conforme a jornada de maturidade do código.

    Primeiro você deve decidir quais recursos incluir em seu cálculo e com que granularidade.

    Por exemplo, alguns recursos, como a política de alertas, são compostos por múltiplos sub-recursos (condição do alerta). Você pode considerar contar apenas o número de apólices ou pode optar por ir um nível mais profundo e também contar as condições.

    Depois de decidir quais recursos incluir em seu KPI, você precisa identificar quantos desses recursos são gerenciados por código e quantos não são.

    Você pode então calcular o KPI com a seguinte fórmula:

    Porcentagem de KPI do recurso OaC = (resources_code_managed/(resources_code_managed + resources_not_code_managed)) \* 100

    Por exemplo:

    | Tipo de recurso      | Código gerenciado | Não gerenciado por código | KPI                |
    | -------------------- | ----------------- | ------------------------- | ------------------ |
    | Painel               | 20                | 13                        | 60%                |
    | Política de alertas  | 10                | 20                        | 33%                |
    | Carga de trabalho    | 5                 | 3                         | 63%                |
    | Jornadas sintéticas  | 14                | 5                         | 74%                |
    | <DNT>**Total**</DNT> | <DNT>**49**</DNT> | <DNT>**41**</DNT>         | <DNT>**54%**</DNT> |

    ### Maturidade ambiental

    É um padrão familiar para entidades de diferentes ambientes serem instrumentos e reportarem a diferentes contas da New Relic. Por exemplo, sua stack de produção pode reportar-se a uma conta de produção e a não produção a outra. A proporção de recursos provisionados com código em comparação com aqueles provisionados manualmente deve ser maior quanto mais próximo o ambiente estiver da produção. Alguns clientes optam por restringir totalmente o acesso manual ao ambiente de produção, impondo alterações de código gerenciadas e auditáveis na configuração de produção.
  </Collapser>
</CollapserGroup>

<CollapserGroup>
  <Collapser
    id="shared-resources-kpi"
    title="Proporção de recursos gerenciados por meio de recursos compartilhados"
  >
    Um dos benefícios de adotar a observabilidade como código é a capacidade de publicar e compartilhar configurações facilmente entre as equipes. Construir e compartilhar módulos que agrupam vários recursos de maneira consistente e padronizada permite que as equipes acelerem sua implantação, reduzam o trabalho e mantenham a qualidade. Uma observabilidade madura à medida que a implantação de código terá uma proporção maior de recursos gerenciados com módulos compartilhados centralizados.

    ### Calcular recursos compartilhados

    O cálculo deste KPI requer que você saiba quantos recursos gerenciados por código são provisionados como resultado de um módulo compartilhado. Você pode tornar a implantação de recursos por meio de módulos compartilhados mais fácil de identificar, garantindo que eles estejam bem marcados.

    KPI de recursos compartilhados = número de recursos implantados via módulos compartilhados / número total de recursos gerenciados por código
  </Collapser>
</CollapserGroup>

<CollapserGroup>
  <Collapser
    id="trigger-kpi"
    title="Provisionamento automático baseado em gatilhos"
  >
    A observabilidade como código oferece oportunidades de inovação ao implantar configuração que é provisionada automaticamente com base em gatilhos. Por exemplo, você pode provisionar automaticamente um pacote dashboard e alerta quando uma nova versão de um aplicativo é implantada ou quando um novo produto é lançado. Uma observabilidade madura à medida que a implantação de código exibirá algumas dessas inovações.

    ### Calcular o provisionamento baseado em gatilhos

    Existem dois KPIs que você pode considerar rastrear para provisionamento baseado em gatilhos:

    <DNT>**Number and scale of triggers configured:**</DNT> Este KPI permite identificar quais contas contêm recursos provisionados pelo gatilho. Você pode considerar contar o número de recursos gerenciados pelos gatilhos, além de uma contagem de gatilhos individuais que foram configurados. <DNT>**Number of invocations of each trigger:**</DNT> Esse KPI permite monitorar a frequência com que seus acionadores são usados e ajuda a identificar acionadores redundantes ou significativamente barulhentos.
  </Collapser>
</CollapserGroup>

<CollapserGroup>
  <Collapser
    id="calculating-config-drift-kpi"
    title="Desvio de configuração"
  >
    Rastrear a frequência e a escala do desvio de configuração permite avaliar a estabilidade e a qualidade do pipeline e dos recursos de observabilidade. Você pode usar este KPI para identificar os recursos que podem precisar de refinamento e melhoria.

    ### Calcular desvio de configuração

    Você pode calcular um KPI para desvio de configuração registrando o número de ocorrências em que o desvio de configuração foi identificado. Acompanhar isso ao longo do tempo ajuda a avaliar a eficácia da sua estratégia de maturidade ambiental e a descobrir quais recursos podem precisar de refinamento.
  </Collapser>
</CollapserGroup>

## Pré-requisitos [#prerequisites]

Antes de embarcar em uma implementação <DNT>**Observability as code**</DNT> com a New Relic, você deve se familiarizar com nossos fundamentos que estão disponíveis na [New Relic University](https://learn.newrelic.com).

Você também deveria:

* Escolha e tenha familiaridade com ferramentas de provisionamento como Terraform
* Tenha acesso a uma plataforma CI/CD que suporta automação de fluxo de trabalho
* Familiarize-se com a plataforma New Relic e recurso API
* Determinaram uma convenção ou estratégia de tag e nomenclatura para seus recursos
* Decidir sobre a estratégia de granularidade de ativos para determinar KPIs
* Ter preparado a chave de API da conta de serviço e um modelo de permissões para aplicar alterações de ferramentas de CI/CD

## Estabelecer o estado atual [#establish-current-state]

Antes de embarcar na adoção de práticas de observabilidade como código, você deve avaliar o estado atual. Você pode aproveitar os conceitos de avaliação de maturidade discutidos acima para determinar o grau de maturidade de seus ambientes e priorizar quais ambientes serão abordados primeiro.

## Processo de melhoria [#improvement-process]

Você pode ter decidido adotar a observabilidade como código com o New Relic, mas não tem certeza de como começar ou deseja evitar becos sem saída e armadilhas comuns. Aqui fornecemos guias sobre boas práticas, conselhos e exemplos de referência para ajudá-lo a adotar a observabilidade como código com segurança.

### Isolamento de recursos baseado em equipe [#team-based-resources]

Muitas equipes podem estar envolvidas no gerenciamento de recursos em uma única conta New Relic ou em várias contas. Nossa prática de observabilidade como código fornece uma maneira de controlar mais rigorosamente o isolamento, o acesso e o gerenciamento de recursos. Restringir o acesso de gravação a indivíduos e impor alterações a serem feitas por meio de código gerenciado permite que as equipes trabalhem com segurança no mesmo espaço, sem correr o risco de afetar os recursos uns dos outros.

Por exemplo, você pode ter uma equipe de infraestrutura compartilhada que gerencia a infraestrutura de nuvem em nome de diversas equipes de aplicativos, cada uma monitor seus aplicativos em diferentes contas da New Relic. Essa equipe de infraestrutura compartilhada gerenciaria seus próprios recursos do New Relic nessas contas, juntamente com os próprios recursos das equipes do aplicativo. Restringir o acesso de gravação do usuário e garantir que os principais recursos sejam gerenciados apenas por meio do fluxo de trabalho observabilidade como código permite que os recursos das equipes vivam juntos em harmonia e reduz a possibilidade de alterações não autorizadas ou não intencionais.

<img
  src="/images/oac_diagram_team-based-access.webp"
  title="Team based resource isolation permission model"
  alt="Team based resource isolation permission model"
/>

<figcaption>
  Este diagrama ilustra como o pipeline de CI/CD para diferentes equipes pode ter acesso para gerenciar recursos isolados em várias contas sobrepostas.
</figcaption>

### Chave de API

O gerenciamento de recursos usando nossa API NerdGraph ou por meio de ferramentas de provisionamento como o Terraform requer uma [chave de usuário](/docs/apis/intro-apis/new-relic-api-keys) New Relic. As chaves de usuário estão associadas a um usuário específico e herdam as permissões desse usuário.

### Contas de serviço

A criação de chaves de usuário New Relic contra usuários humanos reais pode causar problemas em pipelines automatizados. Por exemplo, se as permissões desse usuário mudarem como parte de uma mudança de equipe ou se o usuário sair da organização, um pipeline de automação que depende dele poderá falhar.

Considere criar um usuário de "conta de serviço" gerenciado por uma equipe de gerenciamento central criada especificamente para fins de automação. Estas equipas podem então gerar e gerir chaves para divulgação a outras equipas de implementação. As contas de serviço podem ser usadas para gerar diversas chaves, garantindo que as equipes de implementação usem apenas suas próprias chaves. As chaves gerenciadas dessa forma são auditadas mais facilmente e ajudam a garantir que as permissões sejam definidas corretamente e permaneçam estáveis. Os indivíduos devem ser incentivados a não usar suas próprias chaves de usuário, exceto para desenvolvimento e testes.

### Geração automatizada de chave de API

As chaves de usuário do New Relic podem ser geradas via [NerdGraph](/docs/apis/nerdgraph/examples/use-nerdgraph-manage-license-keys-user-keys), permitindo o provisionamento de chaves sob demanda totalmente automatizado. Isso poderia ser usado para automatizar a geração de chaves por meio de um portal ou fluxo de processo de serviço.

## Ferramentas de automação

Recomendamos usar [o Terraform](https://www.terraform.io) para gerenciar o provisionamento dos recursos do New Relic. Ferramentas como o Terraform permitem configurar recursos no código sem ter que se preocupar com qual API chamar ou como manter um registro do que foi criado.

A New Relic mantém ativamente nosso próprio [provedor New Relic Terraform](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs). solicitações de recursos e problemas podem ser enviados em [nosso repositório GitHub Terraform de código aberto](https://github.com/newrelic/terraform-provider-newrelic/issues).

### Gestão estadual

Ao gerenciar recursos do New Relic com o Terraform, é importante manter um registro estável do estado do Terraform. Idealmente, o estado deve ser armazenado com segurança em um [local remoto](https://www.terraform.io/language/state/remote), ter versão controlada e aproveitar [o bloqueio de estado](https://www.terraform.io/language/state/locking) para garantir a estabilidade.

### Identificar recursos gerenciados

É importante que você consiga identificar facilmente os recursos no New Relic que são gerenciados por código. Isso permite não apenas avaliar o KPI de maturidade, mas também ajuda o usuário que interage com a interface a entender quais recursos são gerenciados por código e que, portanto, não devem ser alterados manualmente.

É uma boa prática desenvolver um padrão consistente em toda a organização para marcar e nomear recursos gerenciados em código. No mínimo, você deve tag e identificar que um recurso é gerenciado por código. Por exemplo, você pode adicionar a tag `codeManaged=true` e talvez um sufixo ou prefixo ao nome do recurso (por exemplo, "Resumo de desempenho do banco de dados \[CM]") para ajudar a identificá-los. Além disso, você deve considerar marcar recursos com mais informações úteis, como a equipe proprietária, a origem do recurso ou a versão do código, por exemplo.

### Lidando com grandes conjuntos de recursos

Cada recurso configurado no Terraform precisa ser atualizado e avaliado para buscar alterações quando novas configurações forem aplicadas. À medida que a quantidade de configuração aumenta, a lista de recursos a serem verificados aumenta. Cada verificação requer uma chamada de API e, portanto, uma configuração grande pode levar algum tempo para ser concluída e pode encontrar limites de API se muitas solicitações forem feitas em paralelo. Uma abordagem é reduzir o número de recursos gerenciados em um único estado, dividindo a configuração em partes. Além disso, reduzir o [paralelismo das solicitações do Terraform](https://www.terraform.io/cli/commands/apply#parallelism-n) pode aliviar a limitação da API.

### Adote uma abordagem modular

Os módulos são a principal forma de empacotar e reutilizar a configuração de recursos com o Terraform e podem ser aproveitados para empacotar qualquer número de recursos da New Relic. Embalagens como essa permitem implantação orientada por parâmetros. Por exemplo, você pode ter um módulo que pega um nome de aplicativo e cria um dashboard visão geral, sinais clássicos de alerta e jornada Sintético, operação completa.

Os módulos Terraform podem ser [publicados](https://www.terraform.io/language/modules#published-modules) em registros remotos, permitindo que as equipes compartilhem e consumam pacotes de recursos desenvolvidos por outras equipes. Isso oferece oportunidades para implementar a padronização e implementar facilmente alterações e melhorias controladas por versão.

## Referência de implementação [#implementation-reference]

### Fluxo de trabalho de automação

A automação do fluxo de trabalho é essencial para dimensionar a observabilidade como código para equipes e organização. Existem muitas ferramentas e serviços de CI/CD disponíveis que podem impulsionar [o fluxo de trabalho do Terraform](https://www.terraform.io/intro/core-workflow). Isso permite que as alterações de configuração sejam discutidas e aprovadas, ao mesmo tempo que fornece uma trilha auditável das alterações.

Recomendamos a adoção de um [fluxo de trabalho Terraform](https://www.terraform.io/intro/core-workflow) para permitir que as equipes trabalhem juntas na configuração do New Relic. Um desses fluxos de trabalho aproveita os recursos de CI/CD de sistemas de controle de versão de código, como GitHub, GitLab e Bitbucket, para planejar e aplicar código automaticamente usando mecanismos integrados de aprovação e revisão.

<img
  src="/images/oac_diagram_tf-workflow.webp"
  title="Simple Terraform workflow"
  alt="Example Terraform workflow"
/>

<figcaption>
  Este diagrama ilustra como uma mudança é levantada como um PR, que é então aprovado e mesclado com o main para acionar a implantação de recursos.
</figcaption>

### Exemplos de implementações de fluxo de trabalho

Os [exemplos de referência](https://github.com/newrelic-experimental/oma-nr-terraform-workflows) a seguir demonstram como configurar um fluxo de trabalho do Terraform em vários sistemas diferentes:

* [Exemplo de GitHub Actions](https://github.com/newrelic-experimental/oma-nr-terraform-workflows/blob/main/github-action-example): este exemplo mostra como usar [GitHub Actions](https://github.com/features/actions) junto com armazenamento de estado apoiado por AWS S3.
* [Exemplo de pipeline do GitLab](https://github.com/newrelic-experimental/oma-nr-terraform-workflows/blob/main/gitlab-pipeline-example): este exemplo mostra como usar um [pipeline do GitLab](https://docs.gitlab.com/ee/user/infrastructure/iac/) junto com o armazenamento de estado http do Gitlab.
* [Exemplo de pipeline do Bitbucket](https://github.com/newrelic-experimental/oma-nr-terraform-workflows/blob/main/bitbucket-pipeline-example): este exemplo demonstra o uso de um [pipeline do Bitbucket](https://bitbucket.org/product/features/pipelines) junto com o armazenamento de estado apoiado pelo S3.

### Fixação de versão

Ao provisionar recursos automaticamente por meio de fluxos de trabalho de observabilidade como código, é importante garantir que o fluxo de trabalho funcione da mesma maneira em todas as execuções. Recomendamos fixar a versão do provedor New Relic e do Terraform que você usou, para garantir que não ocorram atualizações inesperadas que causem falha no pipeline. Se você decidir fixar a versão, deverá atualizar e testar periodicamente as versões mais recentes. Você pode aprender mais sobre como restringir versões na [documentação do Terraform](https://www.terraform.io/language/expressions/version-constraints).

### Detectando desvio de configuração

Compreender o desvio de configuração é importante para garantir a estabilidade e a confiabilidade da sua plataforma de observabilidade. Dependendo da sua estratégia de controle de acesso e permissões pode ser possível que o usuário altere recursos na interface que também são gerenciados por código. Detectar esse desvio de configuração permite compreender as alterações e corrigir a configuração, se necessário.

Existem dois modos principais de operação:

* <DNT>
    **Detect and notify**
  </DNT>

  : Neste modo, o desvio é detectado e os operadores são notificados. No entanto, nenhuma alteração corretiva é feita automaticamente.

* <DNT>
    **Detect, remediate and notify**
  </DNT>

  : neste modo, o desvio é detectado e, sempre que possível, também corrigido automaticamente pelo fluxo de trabalho.

<img
  src="/images/oac_diagram_config-drift.webp"
  title="Configuration drift workflow"
  alt="Configuration drift workflow"
/>

<figcaption>
  Este diagrama ilustra como um fluxo de trabalho de desvio de configuração pode ser implementado. As alterações detectadas são relatadas à New Relic, onde podem ser alertadas e rastreadas ao longo do tempo.
</figcaption>

#### Exemplo de referência de desvio de configuração

Este exemplo de referência aproveita GitHub Actions para agendar operações regulares do plano Terraform. O número de alterações detectadas é relatado ao New Relic e a reaplicação do Terraform pode ser opcionalmente iniciada.

[Exemplo de desvio de configuração do Terraform](https://github.com/newrelic-experimental/oma-nr-terraform-workflows/tree/main/github-tf-config-drift)

## Conclusão [#conclusion]

### Práticas medidas para adotar

* Defina e implemente claramente os KPIs para medir a maturidade da observabilidade como código.
* Estabeleça e comunique o estado atual antes de implementar novos recursos de observabilidade como código.
* Aproveite a automação sempre que possível para acelerar a entrega de observabilidade em todos os ambientes.
* Documente automaticamente ativos criados por meio de código.
* Rastreie e resolva o desvio de configuração.
* Promova a reutilização estendida de ativos em todos os ambientes.

### Realização de valor

Ao final deste processo você deverá perceber os seguintes benefícios:

* Comunique de maneira fácil e eficaz sua maturidade atual de observabilidade como código.
* Reduza o tempo de observabilidade de seus ambientes.
* Reduza o esforço manual necessário para implementar a observabilidade e libere tempo produtivo.
* Reduza o risco operacional no seu ambiente de produção.
* Melhore a capacidade de detectar e resolver problemas com mais rapidez.
* Acelere o tempo para implantar novos lançamentos.
* Torne os dados de telemetria mais acionáveis para sua organização como um todo.
* Melhore a disponibilidade e a entrega do seu serviço para a empresa.
