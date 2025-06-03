---
title: 'ECS integração resolução de problemas: Nenhum dado aparece'
type: troubleshooting
tags:
  - Integrations
  - Elastic Container Service integration
  - Troubleshooting
metaDescription: Troubleshooting tips for when New Relic's on-host Amazon ECS integration is not reporting data.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você instalou nossa [integração ECS on-host](/docs/introduction-amazon-ecs-integration) e esperou alguns minutos, mas seu cluster não está aparecendo na [lista de entidades](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find).

<Callout variant="important">
  Temos duas integração ECS: uma [integração baseada em nuvem](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ecsecr-monitoring-integration) e uma integração no host. Este documento é sobre a integração no host.
</Callout>

## Solução

Se você já instalou o agente de infraestrutura ou uma infraestrutura de integração no host, seus dados deverão aparecer na [interface](/docs/ecs-integration-understand-use-data) em alguns minutos.

Se você não tiver feito nenhuma dessas coisas antes de instalar a integração do ECS no host, pode levar dezenas de minutos para que os dados apareçam na interface. Nesse caso, recomendamos esperar até uma hora antes de seguir as etapas de resolução de problemas a seguir ou entrar em contato com o suporte.

Existem várias opções para resolução de problemas sem dados aparecendo:

* [Solucione problemas por meio da ferramenta awscli](#awscli) (recomendado ao falar com o suporte técnico da New Relic)
* [Solucionar problemas através da interface](#ui)

Para obter informações sobre tarefas interrompidas, consulte [Motivos das tarefas interrompidas](#stopped-tasks).

### Solucionar problemas via awscli [#awscli]

Ao interagir com o suporte da New Relic, use este método e envie os arquivos gerados com sua solicitação de suporte:

1. Recupere as informações relacionadas ao serviço `newrelic-infra` ou ao serviço Fargate que contém uma tarefa com um arquivo secundário `newrelic-infra` :

   ```sh
   aws ecs describe-services --cluster YOUR_CLUSTER_NAME --service newrelic-infra > newrelic-infra-service.json
   ```

   ```sh
   aws ecs describe-services --cluster YOUR_CLUSTER_NAME --service YOUR_FARGATE_SERVICE_WITH_NEW_RELIC_SIDECAR > newrelic-infra-sidecar-service.json
   ```

2. O atributo `failures` detalha quaisquer erros dos serviços.

3. Em `services` está o atributo `status` . Diz `ACTIVE` se o serviço não apresentar problemas.

4. O `desiredCount` deve corresponder ao `runningCount`. Este é o número de tarefas que o serviço está realizando. Como usamos o tipo de serviço daemon, deve haver uma tarefa por instância de contêiner em seu cluster. O atributo `pendingCount` deve ser zero, pois todas as tarefas devem estar em execução.

5. Inspecione o atributo `events` de `services` para verificar se há problemas no agendamento ou no início das tarefas. Por exemplo: se o serviço não conseguir iniciar as tarefas com sucesso, ele exibirá uma mensagem como:

   ```json
   {
     "id": "5295a13c-34e6-41e1-96dd-8364c42cc7a9",
     "createdAt": "2020-04-06T15:28:18.298000+02:00",
     "message": "(service newrelic-ifnra) is unable to consistently start tasks successfully. For more information, see the Troubleshooting section of the Amazon ECS Developer Guide."
   }
   ```

6. Na mesma seção você também pode ver quais tarefas foram iniciadas pelo serviço a partir do evento:

   ```json
   {
     "id": "1c0a6ce2-de2e-49b2-b0ac-6458a804d0f0",
     "createdAt": "2020-04-06T15:27:49.614000+02:00",
     "message": "(service fargate-fail) has started 1 tasks: (task YOUR_TASK_ID)."
   }
   ```

7. Recupere as informações relacionadas à tarefa com este comando:

   ```sh
   aws ecs describe-tasks --tasks YOUR_TASK_ID --cluster YOUR_CLUSTER_NAME > newrelic-infra-task.json
   ```

8. O `desiredStatus` e `lastStatus` devem ser `RUNNING`. Se a tarefa não puder ser iniciada normalmente, ela terá o status `STOPPED` .

9. Inspecione `stopCode` e `stoppedReason`. Um exemplo de motivo: uma tarefa que não pôde ser iniciada porque a função de execução da tarefa não tem as permissões apropriadas para baixar o segredo que contém a chave de licença teria a seguinte saída:

   ```json
   "stopCode": "TaskFailedToStart",
   "stoppedAt": "2020-04-06T15:28:54.725000+02:00",
   "stoppedReason": "Fetching secret data from AWS Secrets Manager in region YOUR_AWS_REGION: secret arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:NewRelicLicenseKeySecret-Dh2dLkgV8VyJ-80RAHS-fail: AccessDeniedException: User: arn:aws:sts::YOUR_AWS_ACCOUNT:assumed-role/NewRelicECSIntegration-Ne-NewRelicECSTaskExecution-1C0ODHVT4HDNT/8637b461f0f94d649e9247e2f14c3803 is not authorized to perform: secretsmanager:GetSecretValue on resource: arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:NewRelicLicenseKeySecret-Dh2dLkgV8VyJ-80RAHS-fail-DmLHfs status code: 400, request id: 9cf1881e-14d7-4257-b4a8-be9b56e09e3c",
   "stoppingAt": "2020-04-06T15:28:10.953000+02:00",
   ```

10. Se a tarefa estiver em execução, mas você ainda não estiver vendo dados, gere [um log detalhado](/docs/infrastructure/infrastructure-troubleshooting/troubleshoot-logs/infrastructure-agent-logging-behavior) e examine-os em busca de erros.

Para obter detalhes sobre os motivos das tarefas interrompidas, consulte [Tarefas interrompidas](#stopped-tasks).

### Solucionar problemas na interface [#ui]

Para usar a interface para solucionar problemas:

1. Login em seu Console AWS e navegue até a seção Serviço de contêiner EC2.

2. Clique no cluster onde você instalou a integração do New Relic ECS.

3. Na guia

   <DNT>
     **Services**
   </DNT>

   , use o filtro para procurar o serviço de integração. Se você usou o script de instalação automática, o nome do serviço será `newrelic-infra`. Se você estiver usando Fargate, será o nome do seu serviço de monitor. Uma vez encontrado, clique no nome.

4. A página de serviço mostra o

   <DNT>
     **Status**
   </DNT>

   do serviço. Diz `ACTIVE` se o serviço não apresentar problemas.

5. Na mesma página, a contagem de

   <DNT>
     **Desired**
   </DNT>

   deve corresponder à contagem de

   <DNT>
     **Running**
   </DNT>

   . Este é o número de tarefas que o serviço está realizando. Como usamos o tipo de serviço daemon, deve haver uma tarefa por instância de contêiner em seu cluster. A contagem pendente deve ser zero, porque todas as tarefas devem estar em execução.

6. Inspecione a guia

   <DNT>
     **Events**
   </DNT>

   para verificar se há problemas no agendamento ou no início das tarefas.

7. Na aba

   <DNT>
     **Tasks**
   </DNT>

   do seu serviço, você pode inspecionar as tarefas em execução e as tarefas interrompidas clicando no seletor

   <DNT>
     **Task status**
   </DNT>

   . contêiner que falhou ao iniciar são mostrados quando você seleciona o status

   <DNT>
     **Stopped**
   </DNT>

   .

8. Clique em uma tarefa para acessar a página de detalhes da tarefa. Em

   <DNT>
     **Stopped reason**
   </DNT>

   , exibe uma mensagem explicando por que a tarefa foi interrompida.

9. Se a tarefa estiver em execução, mas você ainda não estiver vendo dados, gere [um log detalhado](/docs/infrastructure/infrastructure-troubleshooting/troubleshoot-logs/infrastructure-agent-logging-behavior) e examine-os em busca de erros.

Para obter detalhes sobre os motivos das tarefas interrompidas, consulte [Tarefas interrompidas](#stopped-tasks).

### Razões para tarefas interrompidas [#stopped-tasks]

Na [documentação de resolução de problemas AWS ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/troubleshooting.html) você pode encontrar informações sobre causas comuns de erros relacionados à execução de tarefas e serviços. Veja abaixo detalhes sobre alguns motivos para tarefas interrompidas.

<DNT>
  **Task stopped with reason:**
</DNT>

```
Fetching secret data from AWS Secrets Manager 
  in region YOUR_AWS_REGION: 
  secret arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:YOUR_SECRET_NAME: 
  AccessDeniedException: User: arn:aws:sts::YOUR_AWS_ACCOUNT:assumed-role/YOUR_ROLE_NAME 
  is not authorized to perform: secretsmanager:GetSecretValue 
  on resource: arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:YOUR_SECRET_NAME 
  status code: 400, request id: 9cf1881e-14d7-4257-b4a8-be9b56e09e3c"
```

Isso significa que a função do IAM especificada usando `executionRoleArn` na definição da tarefa não tem acesso ao segredo usado para `NRIA_LICENSE_KEY`. A função de execução deve ter uma política anexada que lhe conceda acesso para ler o segredo.

1. Obtenha a função de execução da sua tarefa:

   ```sh
   aws ecs describe-task-definition --task-definition newrelic-infra --output text --query taskDefinition.executionRoleArn
   ```

   Você pode substituir `--task-definition newrelic-infra` pelo nome da tarefa fargate que inclui o contêiner secundário.

   ```sh
   aws ecs describe-task-definition --task-definition YOUR_FARGATE_TASK_NAME --output text --query taskDefinition.executionRoleArn
   ```

2. Liste as políticas anexadas à função:

   ```sh
   aws iam list-attached-role-policies --role-name YOUR_EXECUTION_ROLE_NAME
   ```

   Isso deve retornar 3 políticas `AmazonECSTaskExecutionRolePolicy`, `AmazonEC2ContainerServiceforEC2Role` e uma terceira que deve conceder acesso de leitura ao <InlinePopover type="licenseKey"/>. No exemplo a seguir, a política é denominada `NewRelicLicenseKeySecretReadAccess`.

   ```json
   {
     "AttachedPolicies": [
       {
         "PolicyName": "AmazonECSTaskExecutionRolePolicy",
         "PolicyArn": "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
       },
       {
         "PolicyName": "AmazonEC2ContainerServiceforEC2Role",
         "PolicyArn": "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role"
       },
       {
         "PolicyName": "YOUR_POLICY_NAME",
         "PolicyArn": "arn:aws:iam::YOUR_AWS_ACCOUNT:policy/YOUR_POLICY_NAME"
       }
     ]
   }
   ```

3. Recupere a versão da política padrão:

   ```sh
   aws iam get-policy-version --policy-arn arn:aws:iam::YOUR_AWS_ACCOUNT:policy/YOUR_POLICY_NAME --version-id $(aws iam get-policy --policy-arn arn:aws:iam::YOUR_AWS_ACCOUNT:policy/YOUR_POLICY_NAME --output text --query Policy.DefaultVersionId)
   ```

   Isso recupera as permissões da política. Deve haver uma entrada para Action`secretsmanager:GetSecretValue` se você usou AWS Secrets Manager para armazenar seu <InlinePopover type="licenseKey"/>, ou uma entrada para `ssm:GetParameters`se você usou o parâmetro Store AWS Systems Manager:

   <CollapserGroup>
     <Collapser
       id="aws-secrets-manager"
       title="Gerenciador de segredos da AWS"
     >
       ```json
       {
         "PolicyVersion": {
           "Document": {
             "Version": "2012-10-17",
             "Statement": [
               {
                 "Action": "secretsmanager:GetSecretValue",
                 "Resource": "arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:YOUR_SECRET_NAME",
                 "Effect": "Allow"
               }
             ]
           },
           "VersionId": "v1",
           "IsDefaultVersion": true,
           "CreateDate": "2020-03-31T13:47:07+00:00"
         }
       }
       ```
     </Collapser>

     <Collapser
       id="aws-systems-manager-parameter-store"
       title="Parâmetro Store AWS Systems Manager"
     >
       ```json
       {
         "Version": "2012-10-17",
         "Statement": [
           {
             "Action": "ssm:GetParameters",
             "Resource": [
               "arn:aws:ssm:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:parameter/YOUR_SECRET_NAME"
             ],
             "Effect": "Allow"
           }
         ]
       }
       ```
     </Collapser>
   </CollapserGroup>
