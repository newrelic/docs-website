---
title: Métrica al nível do código
metaDescription: See performance data at the method level.
freshnessValidatedDate: '2024-12-04T00:00:00.000Z'
translationType: machine
---

Sem a necessidade de procurá-los, os dados de desempenho são exibidos contextualmente no editor para que possam informar o trabalho em questão. Digamos que você esteja trabalhando na correção de um bug e perceba que a área do código em que está trabalhando tem uma taxa de erros elevada. Talvez você resolva esse problema como parte da correção do bug, para que ele não se transforme em um problema maior.

<img title="A CodeLens displaying error rate and average duration for a method." alt="A screenshot CodeLens displaying error rate and average duration for a method." src="/images/codestream_screenshot-crop_code-level-metrics-example.webp" />

CodeStream mostra a duração média e taxas de erros, dos últimos 30 minutos, em um CodeLens acima de cada instrumento de método do agente New Relic APM . Para o Visual Studio, um ícone New Relic é exibido na medianiz do editor em vez de um CodeLens. métricas são calculadas para o serviço atualmente selecionado no painel CodeStream. Expanda um serviço diferente e a métrica seja atualizada de acordo.

Clique no CodeLens para ver gráficos visualizando cada uma das métricas. Se o repositório estiver associado a vários serviços de monitoramento da New Relic, você poderá alternar facilmente entre eles. Isso altera o serviço no qual se baseia o nível do código métrico exibido nos gráficos e no editor, e também altera a seleção do serviço no painel CodeStream.

<img title="Code-level metrics details showing charts and errors." alt="A screenshot of code-level metrics details showing charts and errors." src="/images/codestream_screenshot-crop_code-level-charts.webp" />

Junto com um gráfico da taxa de erros, você também verá uma lista dos erros reais que acontecem no mesmo período, incluindo o número de ocorrências de cada um. Se a taxa de erros estiver aumentando e você perceber que um erro específico está causando o problema, clique nele para visualizar o stack trace e [começar a colaborar](/docs/codestream/observability/error-investigation) na resolução.

## Cobertura [#coverage]

O agente New Relic tenta coletar dados automaticamente para funções em classes vinculadas a solicitações HTTP. Em muitos casos, e com muitas estruturas que usam uma framework MVC, esses geralmente são métodos em uma classe Controller.

Como todas as solicitações do agente New Relic não são coletadas o tempo todo, é possível que os métodos de baixo tráfego não vejam nenhum dado. Se faltarem dados para um método específico cujos resultados você deseja ver, você poderá usar instrumentação personalizada para preencher quaisquer lacunas. Consulte as orientações para [Java](/docs/apm/agents/java-agent/custom-instrumentation/java-custom-instrumentation), [.NET](/docs/apm/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation), [PHP](/docs/apm/agents/php-agent/features/php-custom-instrumentation), [Python](/docs/apm/agents/python-agent/custom-instrumentation/python-custom-instrumentation), [Ruby](/docs/apm/agents/ruby-agent/api-guides/ruby-custom-instrumentation), [Go](/docs/apm/agents/go-agent/instrumentation/instrument-go-transactions) e [Node.js.](/docs/apm/agents/nodejs-agent/extend-your-instrumentation/nodejs-custom-instrumentation)

Execute a consulta NRQL a seguir para identificar onde você pode ver CodeLenses com nível do código métrico para um de seus serviços. Basta substituir o valor `entity.guid` do exemplo pelo valor do serviço fornecido. Nos resultados da consulta, observe o atributo `code.*` para ver se algum deles representa seu código, e não o código framework .

```sql
SELECT * FROM Span
WHERE entity.guid = 'YOUR_ENTITY_GUID' AND code.function IS NOT NULL
SINCE 30 minutes ago LIMIT MAX
```

## Requisitos [#requirements]

Para ver os dados de desempenho no editor, seu serviço deve atender aos requisitos listados abaixo e deve ter coletado dados nos últimos 30 minutos.

* [distributed tracing](/docs/distributed-tracing/enable-configure/language-agents-enable-distributed-tracing) deve estar ativado. distributed tracing está ativado por padrão nas versões recentes de todos os agentes, portanto, você só precisa se preocupar com isso se tiver desabilitado distributed tracing.
* Se estiver usando o VS Code, você deverá ter uma extensão de suporte a linguagens instalada para [Java](https://marketplace.visualstudio.com/items?itemName=redhat.java), [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp), [PHP](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client), [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python), [Go](https://marketplace.visualstudio.com/items?itemName=golang.go) ou [Ruby](https://marketplace.visualstudio.com/items?itemName=Shopify.ruby-lsp).
* <DNT>**Java:**</DNT> nível do código métrico estão disponíveis apenas para projetos implementados com um [suportado Java framework](/docs/apm/agents/java-agent/getting-started/compatibility-requirements-java-agent/#frameworks). Observe que o suporte ao Kotlin está disponível apenas no IntelliJ.
* <DNT>**.NET:**</DNT> Se estiver usando o Visual Studio, certifique-se de que o CodeLenses esteja habilitado em <DNT>**Tools &gt; Options &gt; Text Editor &gt; All Languages &gt; CodeLens**</DNT> e que as opções **Enable CodeLens** e **Show CodeStream Code-Level Metrics** estejam marcadas.
* <DNT>**Node.js:**</DNT> Se sua base de código incluir funções anônimas, você deverá usar [o Monitoramento de Alterações](/docs/change-tracking/change-tracking-introduction/) para enviar informações de implantação para o New Relic ou enviar seu [SHA de compilação usando uma variável de ambiente](/docs/codestream/observability/error-investigation/#buildsha) em seu pipeline de compilação.
* <DNT>**Python:**</DNT> O nível do código métrico está disponível apenas para projetos implementados com um [suportado Python framework](/docs/apm/agents/python-agent/getting-started/instrumented-python-packages) e para PHP versão 7.0 ou superior.
* <DNT>**Ruby:**</DNT> O nível do código métrico está disponível apenas para aplicativos Rails e métodos Ruby com rastreamento manual ([saiba mais sobre métodos Ruby e CodeStream](/docs/apm/agents/ruby-agent/features/ruby-codestream-integration)).

Você pode desativar o CodeLenses acessando a seção CodeStream das configurações do seu IDE e desmarcando a configuração <DNT>**CodeStream: Show Golden Signals In Editor**</DNT> .