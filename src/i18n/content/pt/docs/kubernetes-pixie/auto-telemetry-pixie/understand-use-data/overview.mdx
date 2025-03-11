---
title: Visão geral
tags:
  - Pixie Auto-telemetry
  - Service monitoring
  - Kubernetes
  - eBPF
metaDescription: Where to see Pixie data in the New Relic UI
freshnessValidatedDate: never
translationType: machine
---

Quando você instala o Pixie usando a instalação guiada do New Relic, o plug-in New Relic para Pixie é ativado automaticamente e seus dados de telemetria automática são armazenados em dois locais.

* O Pixie armazena o [conjunto completo de dados de telemetria coletados](#pixie-data-sources) nos nós do seu cluster em armazenamento de curto prazo (menos de 24 horas).
* O plug-in New Relic para Pixie registra automaticamente o cluster com o [sistema de plug-in Pixie](https://docs.px.dev/reference/plugins/plugin-system/) e [persiste dados de telemetria selecionados](#pixie-long-term-storage) no New Relic para armazenamento de longo prazo.

<img
  title="The UI of New Relic pulls data from data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  alt="Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  src="/images/pixie_screenshot-full_services-otel-transactions.webp"
/>

<figcaption>
  Autotelemetria Pixie vista na interface New Relic .
</figcaption>

Este modelo de armazenamento híbrido permite que você depure seu incidente ativo Kubernetes com um rico conjunto dos dados de telemetria mais recentes, pagando apenas para ingerir uma quantidade selecionada e configurável de dados no armazenamento de longo prazo.

<img
  title="The New Relic Pixie integration hybrid storage model"
  alt="New Relic Pixie integration hybrid storage model"
  src="/images/pixie_diagram_integration-hybrid-storage.webp"
/>

<figcaption>
  O modelo de armazenamento híbrido de integração New Relic Pixie. Você pode interagir com ambos os conjuntos de dados do Pixie diretamente da interface do New Relic.
</figcaption>

## Onde posso ver os dados do Pixie na interface do New Relic? [#explore-pixie-data]

Na interface New Relic , você pode interagir com os dados de telemetria do Pixie no armazenamento de curto e longo prazo:

* consulte o conjunto completo de dados de telemetria do Pixie em armazenamento de curto prazo em seu cluster usando a guia [Live Debugging with Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) .
* [Explore os dados do Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/explore-pixie-data) persistidos no New Relic usando o cluster do Kubernetes Explorer.
* [Inspecione a solicitação e as respostas do aplicativo de corpo inteiro](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/pixie-entities) persistidas no New Relic.
* [Crie painéis de dados do Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/dashboard-pixie-data) persistidos no New Relic.
* [consulta Os dados do Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/query-pixie-data) persistiram no New Relic usando o criador de consulta e API NerdGraph.

## Quais dados o Pixie coleta? [#pixie-data-sources]

[Pixie usa eBPF](https://docs.px.dev/about-pixie/pixie-ebpf/) para coletar automaticamente dados de telemetria, como solicitações de aplicativos de corpo inteiro, métricas de recursos e rede, perfis de CPU de aplicativos e muito mais.

Para ver a lista completa de fontes de dados que o Pixie coleta automaticamente, confira [os documentos de referência](https://docs.px.dev/about-pixie/data-sources/) do Pixie.

## Quantos dados o Pixie armazena? [#pixie-short-term-storage]

O foco principal do projeto Pixie de código aberto é construir uma plataforma de depuração em tempo real. O armazenamento de curto prazo no cluster é limitado, portanto, os dados de telemetria do Pixie são armazenados por até 24 horas (no máximo) antes de ficarem sem memória. Como esses dados são armazenados em seu cluster, você não paga para ingeri-los.

Para saber como aumentar ou diminuir o armazenamento de curto prazo do Pixie, consulte o [guia Gerenciar memória do Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/advanced-configuration/manage-pixie-memory/).

## Quais dados do Pixie o New Relic persiste? [#pixie-long-term-storage]

A integração do New Relic Pixie persiste em dados de telemetria selecionados do Pixie para armazenamento de longo prazo. O conjunto padrão de dados persistentes inclui:

* Spans de solicitação HTTP (incluindo HTTP/2) e métricas clássicas (taxas de transferência, latência, taxas de erros)
* Spans de solicitação de DNS e métrica de latência
* Extensão de solicitação MySQL e métricas clássicas
* Extensão de solicitação do PostgreSQL e atualizações clássicas
* Cassandra request spans e atualizações clássicas
* Extensão de solicitação Redis e atualizações clássicas
* Mensagens Kafka e atualizações clássicas
* Métrica JVM

Você pode configurar quais dados Pixie são persistidos no New Relic, incluindo dados de telemetria Pixie adicionais persistentes.

## Configure quais dados do Pixie são persistidos no New Relic [#pixie-configure-storage]

<Callout variant="important">
  O recurso <DNT>**Customize Pixie Ingest**</DNT> requer a versão 2.X.X+ da integração New Relic Pixie. Talvez seja necessário [atualizar sua integração](/docs/kubernetes-pixie/auto-telemetry-pixie/install-auto-telemetry-pixie/#upgrade) para acessar esse recurso.
</Callout>

Você pode configurar quais dados de telemetria Pixie serão mantidos no New Relic para armazenamento de longo prazo:

1. [Selecione seu cluster](https://one.newrelic.com/kubernetes-cluster-explorer) para navegar até o explorador de cluster do Kubernetes.
2. Selecione a guia <DNT>**Live debugging with Pixie**</DNT> .
3. Selecione o botão <DNT>**Customize Pixie Ingest**</DNT> no canto superior direito.

<img
  title="Customize Pixie data ingest button"
  alt="Customize Pixie data ingest button"
  src="/images/pixie_screenshot-crop_customize-ingest-button.webp"
/>

<figcaption>
  Você pode personalizar quais dados de telemetria Pixie persistem no New Relic na guia <DNT>**Live debugging with Pixie**</DNT> .
</figcaption>

A integração Pixie New Relic usa [o sistema de plug-in](https://docs.px.dev/reference/plugins/plugin-system/) da Pixie para exportar dados de telemetria selecionados da Pixie para a New Relic para armazenamento de longo prazo. A página <DNT>**Customize Pixie Ingest**</DNT> contém uma visualização incorporada da página de configuração do plug-in do Pixie:

<img
  title="Customize Pixie data ingest page"
  alt="Customize Pixie data ingest page"
  src="/images/pixie_screenshot-full_customize-ingest.webp"
/>

<figcaption>
  Você pode ativar, desativar e adicionar mais scripts de exportação para configurar quais dados de telemetria Pixie serão ingeridos pelo New Relic.
</figcaption>

Por padrão, a integração New Relic Pixie inclui vários scripts de exportação Pixie que já estão habilitados. Você pode optar por desabilitar um ou mais desses scripts para reduzir a ingestão de dados de telemetria do Pixie. Passe o mouse sobre o nome de um script ou clique no botão de edição para ver uma descrição do script de exportação.

Para exportar dados de telemetria Pixie adicionais para o New Relic, use o botão `+ CREATE SCRIPT` . Esses scripts são escritos na linguagem PxL do Pixie e usam os métodos de exportação OpenTelemetry do Pixie. Para aprender como escrever um script PxL para exportar dados Pixie no formato OpenTelemetry, confira este [tutorial](https://docs.px.dev/tutorials/integrations/otel/).
