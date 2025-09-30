---
title: Instale a integração do ECS
tags:
  - Integrations
  - Elastic Container Service integration
  - Installation
metaDescription: How to install New Relic's Amazon ECS integration.
freshnessValidatedDate: never
translationType: machine
---

A integração do ECS da New Relic relata e exibe dados de desempenho do seu ambiente Amazon ECS.

## Visão geral da instalação [#overview]

Antes de [instalar](#install-options), pode ser útil entender em alto nível como nosso agente de infraestrutura (`newrelic-infra`) é implantado para estes dois tipos de lançamento:

* <DNT>
    **EC2 and EXTERNAL (ECS Anywhere) launch type:**
  </DNT>

  Nosso agente é implantado em um cluster ECS como um serviço usando a estratégia de agendamento daemon ([explicada aqui na documentação da AWS ](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html)). Isso instala o agente em todas as instâncias do EC2 do cluster e monitora o ECS e o contêiner Docker .

* <DNT>
    **AWS Fargate launch type:**
  </DNT>

  Em cada tarefa de monitor, nosso agente é implantado como sidecar. Opcional: [saiba mais sobre como a AWS define um arquivo secundário](https://aws.github.io/copilot-cli/docs/developing/sidecars/).

## Opções de instalação [#install-options]

Escolha a instalação desejada:

* [Instalar usando AWS CloudFormation](#cloud-formation-install)
* [Instalar usando script automático](#auto-script-install)
* [Instale manualmente](#manual-install)

## Instalar usando CloudFormation [#cloud-formation-install]

Para ajudá-lo a instalar usando AWS CloudFormation, fornecemos alguns modelos do CloudFormation que instalam a integração do ECS em sua conta AWS para os tipos de lançamento EC2, EXTERNAL (ECS Anywhere) e AWS Fargate.

Para instalar usando CloudFormation:

1. Para cadastrar a tarefa de integração do ECS, implante [esta stack](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://nr-downloads-main.s3.amazonaws.com/infrastructure_agent/integrations/ecs/cloudformation/task/master.yaml&stackName=NewRelicECSIntegration). Certifique-se de implantar a stack na(s) região(ões) desejada(s). Essa stack cria os seguintes recursos:

   * Um segredo que armazena a New Relic

     <InlinePopover type="licenseKey"/>

     .

   * Uma política para acessar a chave de licença.

   * Uma função de instância a ser usada como uma tarefa ECS `ExecutionRole`, com acesso à chave de licença.

   * Para tipo de lançamento EC2 e Externo (ECS Anywhere): Registra a tarefa de integração do New Relic Infrastructure ECS.

2. Siga as instruções adicionais para o seu tipo de lançamento:

   <CollapserGroup>
     <Collapser
       id="ec2-cloudformation"
       title="Tipo de lançamento EC2"
     >
       Para criar um serviço que execute a tarefa em cada instância do contêiner EC2, implante [esta stack](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://nr-downloads-main.s3.amazonaws.com/infrastructure_agent/integrations/ecs/cloudformation/service.yaml&NewRelicInfraTaskVersion=1).

       Selecione o tipo de lançamento do EC2. Em seguida, um serviço denominado `newrelic-infra` será criado no cluster.
     </Collapser>

     <Collapser
       id="external-cloudformation"
       title="Tipo de lançamento externo (ECS Anywhere)"
     >
       Para criar um serviço que execute a tarefa em cada instância do contêiner externo, implante [esta stack](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://nr-downloads-main.s3.amazonaws.com/infrastructure_agent/integrations/ecs/cloudformation/service.yaml&NewRelicInfraTaskVersion=1).

       Selecione o tipo de lançamento EXTERNO. Em seguida, um serviço denominado `newrelic-infra-external` será criado no cluster.
     </Collapser>

     <Collapser
       id="fargate-cloudformation"
       title="Tipo de lançamento AWS Fargate"
     >
       1. Baixe o exemplo de definição de tarefa com o contêiner sidecar a ser implantado:

          ```sh
          curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-fargate-example-latest.json
          ```

          <Callout variant="tip">
            Para Graviton, substitua `"cpuArchitecture": "X86_64"` por `"cpuArchitecture": "ARM64"`.
          </Callout>

       2. Adicione o contêiner `newrelic-infra` nesta definição de tarefa como um arquivo secundário às definições de tarefa que você deseja monitor. Nesta tarefa de exemplo, o contêiner do seu aplicativo substitui o espaço reservado `busybox` contêiner.
     </Collapser>
   </CollapserGroup>

Quando terminar, consulte [Próximas etapas](#next-steps).

## Instalar com script automático [#auto-script-install]

Uma [opção de instalação](#install-overview) é usar nosso script de instalação. Para usar o script de instalação automática:

1. Baixe o instalador de integração do ECS:

   ```sh
   curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-installer.sh
   ```

2. Adicione permissões de execução ao instalador:

   ```sh
   chmod +x newrelic-infra-ecs-installer.sh
   ```

3. Execute-o com `-h` para ver a documentação e os requisitos:

   ```sh
   ./newrelic-infra-ecs-installer.sh -h
   ```

4. Verifique se o seu perfil da AWS aponta para a mesma região onde o cluster do ECS foi criado:

   ```sh
   aws configure get region
   [output] us-east-1
   [output] 
   aws ecs list-clusters
   [output] YOUR_CLUSTER_ARNS 	
   [output] arn:aws:ecs:us-east-1:YOUR_AWS_ACCOUNT:cluster/YOUR_CLUSTER
   ```

5. Execute o instalador, especificando seu <InlinePopover type="licenseKey"/>e o nome do cluster.

   <CollapserGroup>
     <Collapser
       id="auto-script-ec2"
       title="Tipo de lançamento EC2"
     >
       ```sh
       ./newrelic-infra-ecs-installer.sh -c YOUR_CLUSTER_NAME -l YOUR_LICENSE_KEY
       ```
     </Collapser>

     <Collapser
       id="auto-script-external"
       title="Tipo de lançamento externo (ECS Anywhere)"
     >
       ```sh
       ./newrelic-infra-ecs-installer.sh -c YOUR_CLUSTER_NAME -l YOUR_LICENSE_KEY -e
       ```
     </Collapser>

     <Collapser
       id="auto-script-fargate"
       title="Tipo de lançamento AWS Fargate"
     >
       ```sh
       ./newrelic-infra-ecs-installer.sh -f -c YOUR_CLUSTER_NAME -l YOUR_LICENSE_KEY
       ```
     </Collapser>
   </CollapserGroup>

6. Etapas adicionais para o tipo de lançamento Fargate (não para o tipo de lançamento EC2):

   * Baixe o exemplo de definição de tarefa com o contêiner sidecar a ser implantado:

     ```sh
     curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-fargate-example-latest.json
     ```

     <Callout variant="tip">
       Para Graviton, substitua `"cpuArchitecture": "X86_64"` por `"cpuArchitecture": "ARM64"`.
     </Callout>

     Observe que o `NewRelicECSTaskExecutionRole` recém-criado precisa ser usado como função de execução da tarefa. Políticas anexadas à função (todos os tipos de lançamento):

     * `NewRelicSSMLicenseKeyReadAccess` que permite o acesso ao parâmetro SSM com a chave de licença.
     * `AmazonECSTaskExecutionRolePolicy`

   * Depois, você pode adicionar o contêiner que deseja monitor como sidecar.

Quando terminar, consulte [Próximas etapas](#next-steps).

## Instalação manual

Uma [opção de instalação](#install-overview) é executar manualmente as etapas executadas pelo [script do instalador automático](#auto-script-install). Descreveremos como isso é feito usando a ferramenta `awscli` :

1. Verifique se o seu perfil da AWS aponta para a mesma região onde o cluster do ECS foi criado:

   ```sh
   aws configure get region
   [output] us-east-1
   [output] 
   aws ecs list-clusters
   [output] YOUR_CLUSTER_ARNS
   [output] arn:aws:ecs:us-east-1:YOUR_AWS_ACCOUNT:cluster/YOUR_CLUSTER
   ```

2. Salve seu <InlinePopover type="licenseKey"/>como um parâmetro do Systems Manager (SSM):

   ```sh
   aws ssm put-parameter \
     --name "/newrelic-infra/ecs/license-key" \
     --type SecureString \
     --description 'New Relic license key for ECS monitoring' \
     --value "NEW_RELIC_LICENSE_KEY"
   ```

3. Crie uma política IAM para acessar o parâmetro da chave de licença:

   ```sh
   aws iam create-policy \
     --policy-name "NewRelicSSMLicenseKeyReadAccess" \
     --policy-document "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Action\":[\"ssm:GetParameters\"],\"Resource\":[\"ARN_OF_LICENSE_KEY_PARAMETER\"]}]}" \
     --description "Provides read access to the New Relic SSM license key parameter"
   ```

4. Crie uma função do IAM para ser usada como função de execução de tarefas:

   ```sh
   aws iam create-role \
     --role-name "NewRelicECSTaskExecutionRole" \
     --assume-role-policy-document '{"Version":"2008-10-17","Statement":[{"Sid":"","Effect":"Allow","Principal":{"Service":"ecs-tasks.amazonaws.com"},"Action":"sts:AssumeRole"}]}' \
     --description "ECS task execution role for New Relic infrastructure"
   ```

5. Anexe as políticas `NewRelicSSMLicenseKeyReadAccess` e `AmazonECSTaskExecutionRolePolicy` à função:

   ```sh
   aws iam attach-role-policy \
     --role-name "NewRelicECSTaskExecutionRole" \
     --policy-arn "POLICY_ARN"
   ```

6. Escolha seu tipo de lançamento para obter mais instruções:

   <CollapserGroup>
     <Collapser
       id="manual-ec2"
       title="Tipo de lançamento EC2 e EXTERNO (ECS Anywhere)"
     >
       Etapas adicionais para o tipo de lançamento EC2:

       1. Baixe o arquivo de modelo de definição de tarefa de integração do New Relic ECS:

          ```sh
          curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-ec2-latest.json
          ```

       2. Substitua a função de execução da tarefa no arquivo de modelo pela função recém-criada:

          ```json
          "executionRoleArn": "NewRelicECSTaskExecutionRole",
          ```

       3. Substitua o atributo `valueFrom` de `secret` pelo nome do parâmetro do Systems Manager:

          ```json
          "secrets": [
            {
              "valueFrom": "/newrelic-infra/ecs/license-key",
              "name": "NRIA_LICENSE_KEY"
            }
          ],
          ```

       4. Registre o arquivo de definição de tarefa:

          ```sh
          aws ecs register-task-definition --cli-input-json file://newrelic-infra-ecs-ec2-latest.json
          ```

       5. Crie um serviço com a estratégia [de agendamento do daemon](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html) para a tarefa registrada:

          Para tipo de lançamento EC2:

          ```sh
          aws ecs create-service --cluster "YOUR_CLUSTER_NAME" --service-name "newrelic-infra" --task-definition "newrelic-infra" --scheduling-strategy DAEMON --launch-type EC2
          ```

          Para tipo de lançamento EXTERNO (ECS Anywhere):

          ```sh
          aws ecs create-service --cluster "YOUR_CLUSTER_NAME" --service-name "newrelic-infra-external" --task-definition "newrelic-infra" --scheduling-strategy DAEMON --launch-type EXTERNAL
          ```
     </Collapser>

     <Collapser
       id="manual-fargate"
       title="Tipo de lançamento AWS Fargate"
     >
       Etapas adicionais para o tipo de lançamento AWS Fargate:

       1. Baixe o exemplo de definição de tarefa com o contêiner sidecar a ser implantado:

          ```sh
          curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-fargate-example-latest.json
          ```

          <Callout variant="tip">
            Para Graviton, substitua `"cpuArchitecture": "X86_64"` por `"cpuArchitecture": "ARM64"`.
          </Callout>

       2. Adicione o contêiner `newrelic-infra` nesta definição de tarefa como um arquivo secundário às definições de tarefa que você deseja monitor. Nesta tarefa de exemplo, o contêiner do seu aplicativo substitui o espaço reservado `busybox` contêiner.
     </Collapser>
   </CollapserGroup>

Quando terminar, consulte [Próximas etapas](#next-steps).

<InstallFeedback/>

## Próximas etapas após a instalação [#next-steps]

Depois de instalar esta integração:

* Aguarde alguns minutos e [procure seus dados na interface](/docs/ecs-integration-understand-use-data).
* Recomendado: Instale nosso [ECS cloud integração](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ecsecr-monitoring-integration), que fornece outros dados do ECS, incluindo informações sobre cluster e serviços.
* Consulte [condição recomendada do alerta](/docs/ecs-integration-recommended-alert-conditions).
* Entenda os [recursos da AWS](#aws-resources) criados por esse processo.

## Recursos AWS criados [#aws-resources]

Quando você instala a integração do ECS usando valores padrão/recomendados, ela faz o seguinte na AWS:

* Cria o parâmetro `/newrelic-infra/ecs/license-key` do Systems Manager (SSM). Este parâmetro do sistema contém a New Relic

  <InlinePopover type="licenseKey"/>

  .

* Cria a política IAM `NewRelicSSMLicenseKeyReadAccess`, que permite acesso ao parâmetro SSM com a chave de licença.

* Cria a função IAM `NewRelicECSTaskExecutionRole` usada como [função de execução de tarefas](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html). Políticas associadas à função:

  * `NewRelicSSMLicenseKeyReadAccess` (criado pelo instalador).
  * `AmazonECSTaskExecutionRolePolicy`

* Registra a definição de tarefa `newrelic-infra` do ECS para os tipos de lançamento EC2 e externo (ECS Anywhere).

* Para [o tipo de lançamento](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) EC2, isso também é feito:

  * Cria o serviço `newrelic-infra` para a tarefa registrada usando uma estratégia [de agendamentodaemon ](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html)e um tipo de lançamento do EC2.

* Para [o tipo de lançamento](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) EXTERNO (ECS Anywhere), isso também é feito:

  * Cria o serviço `newrelic-infra-external` para a tarefa registrada usando uma estratégia [de agendamento daemon ](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html)e tipo de lançamento EXTERNO (ECS Anywhere).
