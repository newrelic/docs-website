---
title: Explore os dados do Pixie
tags:
  - Pixie Auto-telemetry
  - Pixie integration
  - Kubernetes
  - eBPF
metaDescription: Explore Pixie data in the UI of New Relic
freshnessValidatedDate: never
translationType: machine
---

A telemetria automática coletada pelo Pixie pode ser encontrada na interface do New Relic. Use os dados de telemetria do Pixie para fazer o seguinte:

* [Monitor a integridade do serviço](#service-health)
* [Veja os perfis de CPU do aplicativo pod](#cpu-profiles)
* [Monitor problemas de rede](#network-health)
* [Inspecione solicitações de corpo inteiro](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/pixie-entities)

A interface do New Relic extrai dados de telemetria do Pixie do armazenamento de curto e longo prazo. Saiba mais sobre o modelo de armazenamento híbrido para integração do New Relic Pixie [aqui](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/overview).

## Monitor a integridade do serviço [#service-health]

O Pixie rastreia automaticamente solicitações HTTP (incluindo HTTP/2) enviadas entre serviços, mesmo se um endpoint estiver fora do cluster.

A integração do New Relic Pixie exporta extensões HTTP do Pixie para o New Relic para armazenamento de longo prazo usando o protocolo OpenTelemetry. A visualização <DNT>**Services - OpenTelemetry**</DNT> lista os serviços identificados automaticamente pelo Pixie, juntamente com uma visão geral de alto nível do tempo de resposta do serviço, taxas de transferência e taxas de erros.

<img
  title="The <DNT>**Services - OpenTelemetry**</DNT> view lists all services identified by Pixie with high-level latency, error and throughput details."
  alt="The <DNT>**Services - OpenTelemetry**</DNT> view lists all services identified by Pixie with high-level latency, error and throughput details."
  src="/images/pixie_screenshot-full_services-otel.webp"
/>

<figcaption>
  A visualização <DNT>**Services - OpenTelemetry**</DNT> lista todos os serviços identificados pelo Pixie junto com detalhes de alto nível de latência, erro e taxas de transferência.
</figcaption>

Selecionar um serviço desta lista abrirá a visualização do serviço <DNT>**Summary**</DNT> que mostra gráficos do tempo de resposta, taxas de transferência e taxas de erros para todas as solicitações HTTP feitas a este serviço.

<img
  title="The <DNT>**Services - OpenTelemetry**</DNT> service Summary view shows graphs of response time, throughput and error rate over time."
  alt="The <DNT>**Services - OpenTelemetry**</DNT> service Summary view shows graphs of response time, throughput and error rate over time."
  src="/images/pixie_screenshot-full_services-otel-details.webp"
/>

<figcaption>
  A visualização do serviço OpenTelemetry <DNT>**Summary**</DNT> mostra gráficos de tempo de resposta, taxas de transferência e taxas de erros ao longo do tempo.
</figcaption>

Na visualização do serviço OpenTelemetry, selecione a guia <DNT>**Service map**</DNT> na barra lateral esquerda. Esta visualização do mapa do serviço ajuda a visualizar a dependência do seu aplicativo, mostrando um gráfico de todas as entidades com as quais o serviço se comunica.

<img
  title="The OpenTelemetry <DNT>**Service map**</DNT> view shows helps visualize your application's dependencies."
  alt="The OpenTelemetry <DNT>**Service map**</DNT> view shows helps visualize your application's dependencies."
  src="/images/pixie_screenshot-full_service-otel-map.webp"
/>

<figcaption>
  A visualização OpenTelemetry <DNT>**Service map**</DNT> ajuda a visualizar a dependência do seu aplicativo.
</figcaption>

A guia <DNT>**Transactions**</DNT> do serviço OpenTelemetry mostra os diferentes endpoints para os quais o serviço faz solicitações. Você pode classificar o endpoint por tempo de resposta ou taxas de transferência.

<img
  title="Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  alt="Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  src="/images/pixie_screenshot-full_services-otel-transactions.webp"
/>

<figcaption>
  Dados Pixie vistos na guia OpenTelemetry <DNT>**Transactions**</DNT> .
</figcaption>

A guia <DNT>**Databases**</DNT> mostra todas as solicitações de banco de dados feitas pelo serviço.

<img
  title="Pixie data seen in the OpenTelemetry <DNT>**Databases**</DNT> tab."
  alt="Pixie data seen in the OpenTelemetry <DNT>**Databases**</DNT> tab."
  src="/images/pixie_screenshot-full_services-otel-databases.webp"
/>

<figcaption>
  Dados Pixie vistos na guia OpenTelemetry <DNT>**Databases**</DNT> .
</figcaption>

As informações de integridade do serviço fornecidas pelo Pixie também podem ser encontradas nas visualizações do cluster do Kubernetes Explorer (KCE). A visualização resumida do KCE inclui todos os serviços identificados automaticamente pelo Pixie.

<img
  title="The Kubernetes cluster explorer shows the services identified by Pixie."
  alt="The Kubernetes cluster explorer shows the services identified by Pixie."
  src="/images/pixie_screenshot-full_kce.webp"
/>

<figcaption>
  O cluster do Kubernetes Explorer mostra os serviços identificados pelo Pixie.
</figcaption>

Selecionar um serviço mostra a barra lateral de detalhes do serviço com taxas de transferência HTTP, taxas de erros e dados de tempo de resposta coletados pelo Pixie:

<img
  title="The pod details page in the Kubernetes cluster explorer shows application metrics collected by Pixie."
  alt="The pod details page in the Kubernetes cluster explorer shows application metrics collected by Pixie."
  src="/images/pixie_screenshot-full_kce-pod-details.webp"
/>

<figcaption>
  A página de detalhes pod no cluster do Kubernetes Explorer mostra a métrica do aplicativo coletada pelo Pixie.
</figcaption>

Na parte inferior da visualização de detalhes do serviço, selecione o botão <DNT>**Map View**</DNT> na seção <DNT>**Related Entities**</DNT> .

Esta visualização de mapa ajuda a visualizar a dependência do seu aplicativo, mostrando um gráfico de todas as entidades com as quais o serviço se comunica.

<img
  title="The service map shown in the pod details view is constructed using HTTP traces collected by Pixie."
  alt="The service map shown in the pod details view is constructed using HTTP traces collected by Pixie."
  src="/images/pixie_screenshot-full_kce-pod-details-map.webp"
/>

<figcaption>
  O mapa de serviço mostrado na visualização de detalhes pod é construído usando rastreamento HTTP coletado pelo Pixie.
</figcaption>

Na parte superior da visualização de detalhes do serviço, selecione <DNT>**Check metrics in Pixie**</DNT> para acessar o script `px/service` na guia [Live Debugging with Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) . O `px/service script` mostra uma visão geral resumida das estatísticas de desempenho deste serviço, bem como solicitações de entrada usando os dados Pixie de curto prazo armazenados em seu cluster.

## Veja os perfis de CPU do aplicativo pod [#cpu-profiles]

Você pode usar o recurso de criação de perfil contínuo do Pixie para investigar picos na utilização da CPU ou para identificar problemas de desempenho no código do seu aplicativo.

Selecione um pod listado na visualização do explorador de cluster do Kubernetes para ver a visualização de detalhes do pod.

<img
  title="The pod detail view contains an option to see a pod cpu flamegraph."
  alt="The pod detail view contains an option to see a pod cpu flamegraph."
  src="/images/pixie_screenshot-full_kce-pod.webp"
/>

<figcaption>
  O <DNT>**Pod details view**</DNT> no explorador de cluster do Kubernetes tem uma opção para <DNT>**Check flamegraph in Pixie**</DNT>.
</figcaption>

Na visualização de detalhes do pod, selecione a opção <DNT>**Check flamegraph in Pixie**</DNT> para ver um perfil de CPU usando o rico conjunto de dados que o Pixie armazena em armazenamento de curto prazo em seu cluster.

<img
  title="Check a pod's CPU profile using Pixie"
  alt="Check a pod's CPU profile using Pixie"
  src="/images/pixie_screenshot-crop_cpu-profile.webp"
/>

<figcaption>
  Use o Pixie para ver os flamegraphs da CPU do seu pod Kubernetes .
</figcaption>

Para ver os gráficos de chama da CPU para um nó Kubernetes , use o script `px/node` na guia [Live debugging with Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) . Role até a parte inferior desta visualização para ver os gráficos de chama da CPU para o nó.

Aprenda como interagir com os flamegraphs da CPU do Pixie no [Tutorial de criação de perfil contínuo](https://docs.px.dev/tutorials/pixie-101/profiler/).

## Monitor problemas de rede [#network-health]

Você pode usar o Pixie para monitor sua rede Kubernetes junto com suas camadas de aplicativo e infraestrutura.

A guia <DNT>**Summary**</DNT> do explorador de cluster do Kubernetes contém uma seção <DNT>**Kubernetes network monitoring with Pixie**</DNT> . Cada visualização vinculada nesta seção é alimentada pelo rico conjunto de dados de telemetria Pixie [armazenados em armazenamento de curto prazo](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/overview) em seu cluster.

<img
  title="Kubernetes network monitoring with Pixie"
  alt="Kubernetes network monitoring with Pixie"
  src="/images/pixie_screenshot-full_network-monitoring.webp"
/>

<figcaption>
  Use Pixie for Kubernetes Monitoramento de rede.
</figcaption>

O link <DNT>**Spot DNS issues**</DNT> mostrará um gráfico de todas as solicitações de DNS no seu cluster. Passe o mouse sobre qualquer borda do gráfico para ver informações de latência e taxas de transferência.

<img
  title="Spot DNS issues with Pixie's DNS flow graph"
  alt="Spot DNS issues with Pixie's DNS flow graph"
  src="/images/pixie_screenshot-full_dns-flow-graph.webp"
/>

<figcaption>
  Identifique problemas de DNS em seu cluster usando o gráfico de fluxo de DNS do Pixie.
</figcaption>

Os links <DNT>**See TCP retransmissions**</DNT> e <DNT>**See dropped packets**</DNT> mostrarão gráficos das retransmissões e quedas de TCP em seu cluster. Observe que você precisará pressionar o botão `RUN` para ver os resultados dessas visualizações. A saída TCP descarta é mostrada abaixo:

<img
  title="See TCP drops and TCP retransmissions using Pixie"
  alt="See TCP drops and TCP retransmissions using Pixie"
  src="/images/pixie_screenshot-full_tcp-drops.webp"
/>

<figcaption>
  Consulte Quedas de TCP e retransmissões de TCP em seu cluster usando Pixie.
</figcaption>

Observe que as visualizações <DNT>**Kubernetes network monitoring with Pixie**</DNT> acima também podem ser vistas na guia [Depuração ao vivo com Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) usando o script `px/dns_flow_graph`, `px/tcp_drops` e `px/tcp_retransmits` . Este script possui argumentos opcionais que permitem filtrar a saída para selecionar a entidade.
