---
title: Configurar monitoramento de log de fluxo do Amazon VPC
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

<Video
  type="youtube"
  id="ao_8izubBFw"
/>

O log do Amazon Virtual Private Cloud Flow (VPC) por meio do Amazon Kinesis Data Firehose ajuda a reduzir o atrito do envio de log para New Relic. Com o log de fluxo de VPC de todas as suas propriedades AWS , você pode compreender rapidamente os principais insights para análise de desempenho e resolução de problemas de conectividade de rede.

<img
  title="Amazon VPC Flow Logs overview"
  alt="Amazon VPC Flow Logs overview"
  src="/images/network_screenshot-crop_cloud-flow-logs-overview.webp"
/>

<figcaption>
  <DNT>**Add [Amazon VPC Flow Logs to your New Relic account](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**</DNT>.
</figcaption>

O Amazon Virtual Private Cloud (VPC) permite lançar recursos AWS em uma rede virtual isolada e segura com os benefícios do uso da infraestrutura escalonável AWS .

<ButtonGroup>
  <ButtonLink
    role="button"
    to="https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9"
    variant="primary"
  >
    Adicionar log de fluxo da Amazon VPC
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.eu.nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9"
    variant="primary"
  >
    Instalação guiada, região da UE
  </ButtonLink>
</ButtonGroup>

## Pré-requisitos [#prerequisites]

### Pré-requisitos New Relic [#prerequisites-NR]

* Uma conta New Relic . Não tem um? [Cadastre-se gratuitamente!](https://newrelic.com/signup) Não é necessário cartão de crédito.

### Pré-requisitos da AWS [#prerequisites-aws]

<Callout variant="important">
  O log do Amazon VPC Flow por meio do Kinesis Data Firehose ainda não é compatível com clientes FedRAMP. Enquanto isso, você pode usar [nossa API de ingestão FedRAMP](/docs/security/security-privacy/compliance/fedramp-compliant-endpoints#data-ingest-apis).
</Callout>

* Ambiente:

  * [AWS CLI (v 1.9.15+) instalada](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).
  * Uma lista de regiões AWS onde você coleta o log do Amazon VPC Flow.
  * [IDs de VPC](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/describe-vpcs.html) que serão configurados para enviar o log de fluxo de VPC. Se desejar um controle mais granular, especifique os [IDs de sub-rede](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/describe-subnets.html) em vez dos IDs de VPC.

* Permissões:

  * Um usuário AWS com [permissões para criar log de fluxo de VPC](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-s3-iam).
  * Permissões do arquivo de log do Amazon S3 para [leitura e gravação para o proprietário da entrega de log](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-file-permissions).
  * Permitir que [o Kinesis Data Firehose assuma uma função do IAM](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#firehose-assume-role).

* [Nomes de recursos da Amazon (ARNs)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html):

  * ARN de um bucket S3 com permissões para [armazenar mensagem do log de fluxo não entregue](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-s3-permissions).

  * Se desejar habilitar a amostragem, você precisará do ARN para a função IAM do Lambda.

  * ARN para o [Kinesis Data Firehose com acesso ao bucket S3](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3).

    <Callout variant="tip">
      Recomendamos que você crie um novo firehose de dados com nossa instalação guiada na primeira vez que configurar o log de fluxo de VPC para uma região específica. Para VPCs e sub-redes subsequentes na mesma região, você pode reutilizar o firehose de dados existente.
    </Callout>

### Funções do IAM [#iam-roles]

Se você configurar a integração do log de fluxo usando a AWS CLI, deverá fornecer uma ou duas funções do IAM para diferentes componentes de infraestrutura. Se você usar o CloudFormation, poderá fornecer suas próprias funções ou deixar que o modelo defina novas funções.

As funções necessárias devem ter pelo menos as seguintes permissões:

<CollapserGroup>
  <Collapser
    id="kinesis-firehose"
    title="Mangueira de incêndio Kinesis"
  >
    Esta permissão é necessária.

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "",
                "Effect": "Allow",
                "Action": [
                    "s3:AbortMultipartUpload",
                    "s3:GetBucketLocation",
                    "s3:GetObject",
                    "s3:ListBucket",
                    "s3:ListBucketMultipartUploads",
                    "s3:PutObject"
                ],
                "Resource": [
                    "arn:aws:s3:::<FIREHOSE_ERRORS_BUCKET>",
                    "arn:aws:s3:::<FIREHOSE_ERRORS_BUCKET>/*"
                ]
            },
            {
                "Sid": "",
                "Effect": "Allow",
                "Action": [
                    "lambda:InvokeFunction",
                    "lambda:GetFunctionConfiguration"
                ],
                "Resource": [
                    "arn:aws:lambda:us-west-2:<YOUR_ACCOUNT>:function:NewRelic-Flow-Sampling-Lambda",
                    "arn:aws:lambda:us-west-2:<YOUR_ACCOUNT>:function:NewRelic-Flow-Sampling-Lambda:*"
                ]
            }
        ]
    }
    ```
  </Collapser>

  <Collapser
    id="aws-sampling-lambda"
    title="AWS Amostragem Lambda"
  >
    Você só precisa dessa permissão se estiver usando amostragem.

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Action": "logs:CreateLogGroup",
                "Resource": "arn:aws:logs:us-west-2:<YOUR_ACCOUNT>:*",
                "Effect": "Allow"
            },
            {
                "Action": [
                    "logs:CreateLogStream",
                    "logs:PutLogEvents"
                ],
                "Resource": [
                    "arn:aws:logs:us-west-2:<YOUR_ACCOUNT>:log-group:/aws/lambda/NewRelic-Flow-Sampling-Lambda:*"
                ],
                "Effect": "Allow"
            }
        ]
    }
    ```
  </Collapser>
</CollapserGroup>

## Formatando seu log no New Relic [#NR-logs-format]

Para usar a exploração log de fluxo selecionado e a vinculação de entidade, você deve seguir este formato para o log de fluxo da VPC:

```shell
${version} ${account-id} ${region} ${az-id} ${sublocation-type} ${vpc-id} ${subnet-id} ${instance-id} ${interface-id} ${srcaddr} ${pkt-srcaddr} ${pkt-src-aws-service} ${dstaddr} ${pkt-dstaddr} ${pkt-dst-aws-service} ${srcport} ${dstport} ${protocol} ${packets} ${bytes} ${flow-direction} ${traffic-path} ${start} ${end} ${action} ${log-status}
```

<Callout variant="tip">
  Se quiser saber mais sobre os campos de log, verifique os campos disponíveis na [documentação da VPC Amazon](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-logs-fields).
</Callout>

Você deve usar uma [partição log ](/docs/logs/ui-data/data-partitions)para log de fluxo de VPC chamada `Log_VPC_Flows_AWS`. Se você usar a [instalação guiada](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9), isso será feito automaticamente.

## Configurar monitoramento de log de fluxo do Amazon VPC no New Relic [#setup-aws-vpc-flow-logs]

Siga o assistente guiado para instalar o log do Amazon VPC Flow:

1. Inicie o

   <DNT>
     **[guided install process](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**
   </DNT>

   .

2. No dropdown

   <DNT>
     **Select an account**
   </DNT>

   , escolha a conta New Relic para a qual você deseja enviar o log do Amazon VPC Flow e clique em

   <DNT>
     **Continue**
   </DNT>

   .

3. Na seção

   <DNT>
     **Select your data**
   </DNT>

   , escolha

   <DNT>
     **Amazon VPC Flow Logs**
   </DNT>

   e clique em

   <DNT>
     **Continue**
   </DNT>

   .

4. Na seção

   <DNT>
     **Select your install method**
   </DNT>

   , continue com

   <DNT>
     **CLI**
   </DNT>

   e clique em

   <DNT>
     **Continue**
   </DNT>

   .

Após essas etapas, um novo assistente aparecerá para ajudá-lo a configurar o envio do log do Amazon VPC Flow para New Relic por meio do serviço AWS Kinesis Firehose.

1. Na seção <DNT>**Choose Setup Options**</DNT> :

   * Verifique se o seu método de configuração está correto.

   * Selecione a região AWS que enviará o log de fluxo da VPC para New Relic.

   * Opcionalmente, se você estiver reutilizando um Kinesis Data Firehose, marque a caixa de seleção

     <DNT>
       **I already have a Kinesis Firehose to New Relic**
     </DNT>

     e prossiga para a seção

     <DNT>
       **Define flow logs**
     </DNT>

     .

   * Clique em

     <DNT>
       **Continue**
     </DNT>

     .

2. Na seção <DNT>**Define Kinesis Firehose**</DNT> :

   * No campo

     <DNT>
       **Kinesis Firehose Name**
     </DNT>

     , certifique-se de que o nome gerado esteja correto.

   * No campo

     <DNT>
       **Firehose Backup Bucket**
     </DNT>

     , insira o [ARN do bucket S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html) a ser usado para armazenar mensagens que falham na entrega. O ARN deve seguir este formato: `arn:my_string`.

   * No campo

     <DNT>
       **Firehose IAM Role**
     </DNT>

     , insira o [ARN da função do IAM](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#firehose-assume-role) a ser usada pelo Kinesis Data Firehose. O ARN deve seguir este formato: `arn:my_string`.

   * Clique em

     <DNT>
       **Continue**
     </DNT>

     .

   * Opcionalmente, se você quiser obter uma amostra do log de fluxo de VPC, marque a caixa de seleção

     <DNT>
       **Use Sampling**
     </DNT>

     e:

   <CollapserGroup>
     <Collapser
       id="sampling-lambda"
       title="Usar amostragem Lambda"
     >
       * Primeiro, na seção <DNT>**Define Sampling Lambda**</DNT> , faça o seguinte:

         * No campo

           <DNT>
             **Lambda Name**
           </DNT>

           verifique se o nome gerado para a função do Lambda está correto. Se você tiver padrões de nomenclatura específicos do Lambda, edite o nome.

         * No campo

           <DNT>
             **Sample Rate**
           </DNT>

           , especifique a taxa de amostragem a ser aplicada. Por padrão, está definido como `1:10`.

       * Em seguida, na seção <DNT>**Create Sampling Lambda**</DNT> , clique em <DNT>**Generate CLI Command**</DNT> e:

         * Copie o conteúdo do bloco de código para

           <DNT>
             **Create your sampling Lambda**
           </DNT>

           e execute-o na AWS CLI.

         * Para verificar se o seu Lambda foi criado, execute o comando da segunda etapa na AWS CLI.

         * Copie o ARN retornado para a função do Lambda e cole no campo

           <DNT>
             **Sampling Lambda ARN**
           </DNT>

           no formato `arn:my_string`. Em seguida, clique em

           <DNT>
             **Continue**
           </DNT>

           .

         <Callout variant="tip">
           A amostragem é uma função de contagem simples, mas reduzirá o volume de log de fluxo enviado para a New Relic. Os dados amostrados usando esta função do Lambda podem perder uma conversa específica no New Relic. Fique atento aos textos explicativos que indicam dados de amostra na interface de Monitoramento de rede do New Relic.
         </Callout>
     </Collapser>
   </CollapserGroup>

3. Na seção <DNT>**Generate Kinesis Firehose**</DNT> , clique em <DNT>**Generate CLI Command**</DNT> e:

   <Callout variant="tip">
     Geramos automaticamente um novo <InlinePopover type="licenseKey"/>para ser usado nesta ingestão de dados. Para regenerar uma chave, clique em <DNT>**Generate and use a new key**</DNT>.

     Se quiser reutilizar uma chave existente, atualize o valor `AccessKey` na primeira etapa.
   </Callout>

   * Copie o conteúdo do bloco de código para

     <DNT>
       **Create your Kinesis Data Firehose**
     </DNT>

     e cole-o na AWS CLI.

   * Para verificar se o Kinesis Firehose foi criado, execute o comando da segunda etapa na AWS CLI. Se nenhum ARN for retornado, aguarde 30 segundos e tente novamente.

   * Copie o ARN retornado para o Kinesis Firehose e cole-o no campo

     <DNT>
       **Kinesis Data Firehose ARN**
     </DNT>

     no formato `arn:my_string`. Em seguida, clique em

     <DNT>
       **Continue**
     </DNT>

     .

   <img
     title="Generate Kinesis Firehose"
     alt="Generate Kinesis Firehose"
     src="/images/network_screenshot-crop_kinesis-forehose-aws-vpc-flow-logs.webp"
   />

   <figcaption>
     Etapa Gerar o Kinesis Firehose na instalação guiada.
   </figcaption>

4. Na seção <DNT>**Define Flow Logs**</DNT> , faça o seguinte:

   * No dropdown

     <DNT>
       **Traffic Type**
     </DNT>

     , selecione se deseja enviar somente entradas aceitas, somente rejeitadas ou todas as entradas log de fluxo.

   * No campo

     <DNT>
       **Flow Source ID**
     </DNT>

     , insira o ID da VPC (`vpc-MY_STRING`) ou o ID da sub-rede (`subnet-MY_STRING`) para o qual o log do Amazon VPC Flow deve ser criado.

   * O campo

     <DNT>
       **Flow Source Type**
     </DNT>

     será preenchido automaticamente, então clique em

     <DNT>
       **Continue**
     </DNT>

     .

5. Na seção <DNT>**Create Flow Logs**</DNT> , clique em <DNT>**Generate CLI Command**</DNT> e copie o conteúdo do bloco de sintaxe. Em seguida, execute-o na AWS CLI para começar a gerar o log de fluxo para os recursos especificados.

6. Clique em <DNT>**Continue**</DNT> para começar a explorar o log do Amazon VPC Flow na seção Monitoramento de rede do New Relic.

7. [Visualize os dados de desempenho da sua rede no New Relic](/docs/network-performance-monitoring/monitoring-network-data/visualize-network-data).

<InstallFeedback/>
