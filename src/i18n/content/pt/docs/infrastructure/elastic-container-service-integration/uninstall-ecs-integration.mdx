---
title: Desinstale a integração do ECS
tags:
  - Integrations
  - Elastic Container Service integration
  - Installation
metaDescription: How to uninstall New Relic's on-host Amazon ECS integration.
freshnessValidatedDate: never
translationType: machine
---

[A integração do ECS](/docs/introduction-amazon-ecs-integration) no host da New Relic relata e exibe dados de desempenho do seu ambiente [Amazon ECS](https://docs.aws.amazon.com/ecs/index.html) . Continue lendo para saber como desinstalar essa integração.

## Desinstalar

Existem várias opções de desinstalação, dependendo de como você [instalou](/docs/install-ecs-integration#install-ec2):

* [Desinstalar com CloudFormation](#cloudformation)
* [Use scriptde instalador automático](#auto-installer)
* [Desinstalação manual](#manual-uninstall)

### Desinstalação do CloudFormation [#cloudformation]

Para desinstalar a integração do ECS usando os modelos do CloudFormation:

1. Vá para a [lista de pilhas em seu console AWS .](https://console.aws.amazon.com/cloudformation/home?#/stacks?filteringText=&filteringStatus=active&viewNested=true&hideStacks=false)

2. Para cada New Relic stack:

   1. Selecione a stack
   2. Clique no botão excluir
   3. Clique no botão excluir stack no pop-up de confirmação.

### Desinstalação automática [#auto-installer]

Para desinstalar a integração do ECS usando o script do instalador:

* Para tipo de lançamento EC2 e EXTERNO: execute

  ```ah
  ./newrelic-infrastructure-ecs-installer.sh -u -c YOUR_CLUSTER_NAME
  ```

* Para o tipo de lançamento Fargate:

  ```sh
  ./newrelic-infrastructure-ecs-installer.sh -f -u -c YOUR_CLUSTER_NAME
  ```

Você só precisa executar o comando uma vez, independentemente do número de nós no seu cluster. O comando excluirá os [recursos AWS criados durante o procedimento de instalação](/docs/install-ecs-integration#aws-resources).

O instalador fornece um modo de simulação que mostra os comandos awscli que serão executados. O modo de simulação para o processo de desinstalação é ativado passando a sinalização `-d` para o comando:

```sh
./newrelic-infrastructure-ecs-installer.sh -d -u -c YOUR_CLUSTER_NAME
```

### Desinstalação manual

Para desinstalar manualmente, você deve excluir todos os [recursos da AWS](/docs/install-ecs-integration#aws-resources) relacionados à integração. Para fazer isso:

1. Verifique se o seu perfil da AWS aponta para a mesma região onde o cluster do ECS foi criado:

   ```sh
   aws configure get region
   [output] us-east-1
   [output] 
   aws ecs list-clusters
   [output] YOUR_CLUSTER_ARNS	
   [output] arn:aws:ecs:us-east-1:YOUR_AWS_ACCOUNT:cluster/YOUR_CLUSTER
   ```

2. Exclua o parâmetro Systems Manager (SSM) que armazena a New Relic <InlinePopover type="licenseKey"/>:

   ```sh
   aws ssm delete-parameter --name "/newrelic-infra/ecs/license-key"
   ```

3. Antes de excluir a função do IAM, você precisa desanexar todas as suas políticas. Para obter uma lista das políticas anexadas:

   ```sh
   aws iam list-attached-role-policies \
     --role-name "NewRelicECSTaskExecutionRole" \
     --output text \
     --query 'AttachedPolicies[*].PolicyArn'
   ```

4. Desanexe todas as políticas retornadas na etapa anterior da função do IAM:

   ```sh
   aws iam detach-role-policy --role-name "NewRelicECSTaskExecutionRole" --policy-arn "POLICY_ARN"
   ```

5. Exclua a função do IAM:

   ```sh
   aws iam delete-role --role-name "NewRelicECSTaskExecutionRole"
   ```

6. Exclua a política do IAM `NewRelicSSMLicenseKeyReadAccess`, que concede acesso à chave de licença do System Manager:

   ```sh
   aws iam delete-policy --policy-arn "POLICY_ARN"
   ```

7. As etapas restantes são apenas para o tipo de lançamento EC2 e EXTERNO, e não para Fargate:

   1. Exclua os serviços:

      ```sh
      aws ecs delete-service --service "newrelic-infra" --cluster "YOUR_CLUSTER_NAME"
      ```

      ```sh
      aws ecs delete-service --service "newrelic-infra-external" --cluster "YOUR_CLUSTER_NAME"
      ```

   2. Liste a definição de tarefa para a família de tarefas `newrelic-infra` :

      ```sh
      aws ecs list-task-definitions \
        --family-prefix newrelic-infra \
        --output text \
        --query taskDefinitionArns
      ```

   3. Cancele o registro das tarefas:

      ```sh
      aws ecs deregister-task-definition --task-definition "TASK_DEFINITION_ARN"
      ```
