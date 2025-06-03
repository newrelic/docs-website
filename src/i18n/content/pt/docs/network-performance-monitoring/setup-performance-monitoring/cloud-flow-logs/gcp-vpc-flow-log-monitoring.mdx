---
title: Configurar monitoramento de log de fluxo do Google VPC
tags:
  - Integrations
  - Network monitoring
  - Installation
  - Setup
  - AWS
metaDescription: Set up Amazon VPC Flow Logs monitoring.
freshnessValidatedDate: never
translationType: machine
---

O registro do Virtual Private Cloud Flow (VPC) do Google Cloud oferece suporte à transmissão sem atrito do registro para o New Relic. Com o registro de fluxo de VPC de todas as suas propriedades do GCP, você pode entender rapidamente os principais insights para análise de desempenho e resolução de problemas de conectividade de rede.

<img
  title="Google VPC Flow Logs overview"
  alt="Google VPC Flow Logs overview"
  src="/images/network_screenshot-crop_cloud-flow-logs-overview.webp"
/>

<figcaption>
  <DNT>**Add [Google's VPC Flow Logs to your New Relic account](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**</DNT>.
</figcaption>

A nuvem privada virtual (VPC) do Google permite lançar recursos do GCP em uma rede virtual isolada e segura com os benefícios do uso da infraestrutura escalonável do GCP.

<ButtonLink
  role="button"
  to="https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9"
  variant="primary"
>
  Adicionar log de fluxo do Google VPC
</ButtonLink>

## Pré-requisitos [#prerequisites]

### Pré-requisitos New Relic [#prerequisites-NR]

* Uma conta New Relic . Não tem um? [Cadastre-se gratuitamente!](https://newrelic.com/signup) Não é necessário cartão de crédito.

### Pré-requisitos do GCP [#prerequisites-gcp]

<Callout variant="important">
  O log do Google VPC Flow ainda não é compatível com clientes FedRAMP. Enquanto isso, você pode usar [nossa API de ingestão FedRAMP](/docs/security/security-privacy/compliance/fedramp-compliant-endpoints#data-ingest-apis).
</Callout>

* Ambiente:

  * Você deve ter acesso à [CLI do GCloud](https://cloud.google.com/sdk/docs/install) ou a capacidade de implantar modelos terraform em seu ambiente.
  * Habilite as sub-redes cujo tráfego você deseja enviar para New Relic para coletar o log de fluxo. Veja como fazer isso, na [documentação oficial do Google](https://cloud.google.com/vpc/docs/using-flow-logs#enable-logging-existing).

* Permissões:

  * A capacidade de criar um tópico do Pub/Sub e definir suas permissões.
  * A capacidade de criar e atualizar um roteador de log.
  * A capacidade de criar um job do Dataflow.

## Enviar log adicional do Google VPC Flow [#additional-gcp-vpc-flow-logs]

Para enviar o log de fluxo do Google VPC para o New Relic, siga estas etapas:

1. Inicie o <DNT>**[guided install process](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**</DNT>.

2. No dropdown <DNT>**Select an account**</DNT>, escolha a conta New Relic para a qual você deseja enviar o log do Google VPC Flow e clique em <DNT>**Continue**</DNT>.

3. Na seção <DNT>**Choose Setup Options**</DNT> :

   * No

     <DNT>
       **Setup Method**
     </DNT>

     , você pode optar por usar a CLI do GCloud ou o Terraform para criar recursos em sua conta. O Terraform pode ser mais fácil se você já o usa em seu ambiente Google.

   * Insira o

     <DNT>
       **GCP project ID**
     </DNT>

     do qual você deseja ingerir o log de fluxo.

   * No dropdown

     <DNT>
       **Region**
     </DNT>

     , escolha uma região do GCP. Esta região será utilizada na criação de recursos regionais.

4. <DNT>**Enable Flow Logging**</DNT> - Ative o registro de fluxo para uma sub-rede. Você precisa ativar o log de fluxo para cada sub-rede da qual deseja coletar logs de fluxo. Você pode alterar essa configuração por meio da CLI, do Cloud Console ou de qualquer outra ferramenta de configuração de nuvem usada pela sua equipe.

   <Callout variant="tip">
     Ao configurar o log de fluxo, talvez você queira ajustar a taxa de amostragem e o intervalo de agregação. Uma taxa de amostragem mais alta ou um intervalo de agregação mais baixo produzirá dados mais granulares, mas terá um custo de ingestão de dados mais alto.
   </Callout>

5. Definir coletor de registro: configure um roteador de log no Google Cloud Platform (GCP). O roteador log permite que você escolha qual log de fluxo será enviado para New Relic. Você pode enviar log de fluxo para uma única sub-rede, várias sub-redes, uma VPC inteira e muito mais.

6. Se você escolheu <DNT>**GCloud CLI**</DNT> como método de configuração:

   * <DNT>
       **Create Pub/Sub resources**
     </DNT>

     \- Execute os comandos gerados na CLI do GCloud para criar um tópico e uma assinatura do Pub/Sub.

   * <DNT>
       **Create Logging Sink**
     </DNT>

     \- Execute o comando gerado na CLI do GCloud para criar seu roteador log .

   * <DNT>
       **Setup up Pub/Sub permissions**
     </DNT>

     \- Execute o comando gerado para obter a identidade do gravador associada ao seu roteador log . Copie o resultado do comando e cole-o na próxima caixa de texto. Em seguida, execute os próximos dois comandos para modificar as permissões do tópico do Pub/Sub para permitir o acesso do roteador log .

   * <DNT>
       **Create Dataflow job**
     </DNT>

     \- Execute o comando gerado para criar um job do Dataflow, que reúne vários fluxos e os envia para o New Relic em lotes grandes. Isso ajuda você a economizar dinheiro e evitar limites de taxas.

   <Callout variant="tip">
     Geramos automaticamente um novo <InlinePopover type="licenseKey"/>para ser usado nesta ingestão de dados. Para regenerar uma chave, clique em <DNT>**Generate and use a new key**</DNT>.
   </Callout>

7. Se você escolheu <DNT>**Terraform**</DNT> como método de configuração:

   * <DNT>
       **Run Terraform template**
     </DNT>

     \- implantar o modelo Terraform fornecido em seu projeto GCP para criar todos os recursos necessários para enviar o log de fluxo VPC para New Relic.

8. [Visualize os dados de desempenho da sua rede no New Relic](/docs/network-performance-monitoring/monitoring-network-data/visualize-network-data).

## Atualizar uma integração existente \[#]

Se você já começou a enviar algum log de fluxo de VPC do Google para New Relic de algumas de suas sub-redes, mas deseja enviar mais ou menos log de fluxo de VPC:

1. Certifique-se de que todas as novas sub-redes tenham o registro de fluxo ativado no Google Cloud Platform (GCP).

2. Atualize o

   <DNT>
     **Log Router**
   </DNT>

   que você criou quando definiu

   <DNT>
     **Logging Sink**
   </DNT>

   , para que sua [condição de filtro](https://cloud.google.com/logging/docs/view/logging-query-language) capture o novo conjunto de logs de fluxo de VPC que você deseja enviar para o New Relic.

   <Callout variant="tip">
     No [processo de instalação guiada](https://one.newrelic.com/marketplace?duration=1800000&state=00731ead-620f-4a71-b1fa-b4fc6af24fca), você pode encontrar alguns exemplos de como podem ser as condições do filtro. Se o seu ambiente for complexo, talvez seja necessário ajustar essas condições conforme necessário.
   </Callout>

<InstallFeedback/>
