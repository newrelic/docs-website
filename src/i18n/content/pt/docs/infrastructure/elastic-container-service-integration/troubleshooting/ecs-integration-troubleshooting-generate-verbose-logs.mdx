---
title: 'ECS integração resolução de problemas: gerar log detalhado'
type: troubleshooting
tags:
  - Integrations
  - Elastic Container Service integration
  - Troubleshooting
metaDescription: How to generate verbose logs to troubleshoot the New Relic on-host Amazon ECS integration.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Quando [a resolução de problemas é a integração do ECS no host](/docs/ecs-integration-no-data-appears), você pode gerar um log detalhado por alguns minutos para localizar e investigar erros. Isto pode ser útil para conduzir sua própria resolução de problemas ou ao fornecer informações ao [suporte New Relic ](https://support.newrelic.com/).

O registro detalhado gera muitos dados muito rapidamente. Ao terminar de gerar o log, defina `verbose: 0` para reduzir o consumo de espaço em disco.

Você pode automatizar esse processo usando o comando `newrelic-infra-ctl` . Para obter mais informações, consulte [Resolução de problemas com um agente em execução](/docs/infrastructure/install-configure-manage-infrastructure/manage-your-agent/troubleshoot-running-agent).

## Solução

A geração de arquivo de log detalhado requer a edição do arquivo de definição de tarefa. Para obter um arquivo de configuração de amostra que inclui todas as configurações aplicáveis, consulte [Configurações de infraestrutura](/docs/infrastructure/install-configure-manage-infrastructure/configuration/infrastructure-configuration-settings).

Você tem várias opções para implementar o log detalhado:

* [Altere a variável de ambiente de definição de tarefa e reinicie a tarefa](#env-variable)
* Para tipo de lançamento EC2: [recuperar log via SSH](#retrieve-logs-via-ssh)
* [Encaminhe para o CloudWatch e baixe com awscli](#forward-logs-cloudwatch)
* [Execute um comando do contêiner em execução](#running-container)

### Usando variável de ambiente de definição de tarefa [#env-variable]

Para ativar o log detalhado alterando a variável de ambiente e reiniciando a tarefa:

1. Edite sua definição de tarefa. Altere o valor de `NRIA_VERBOSE` de `0` para:

   * `1` para log detalhado sempre ativo
   * `2` para registro inteligente
   * `3` para enviar para New Relic

   Leia [mais sobre essas opções](/docs/infrastructure/install-configure-manage-infrastructure/configuration/infrastructure-configuration-settings#verbose).

2. Salve sua definição de tarefa.

3. Atualize seu serviço para usar a definição de tarefa recém-registrada.

4. Se você escolheu `NRIA_VERBOSE=3` e não está enviando o registro diretamente para New Relic, você terá duas opções para visualizar e fazer download do registro:

   * Para o tipo de lançamento EC2: você pode [recuperar o log via SSH](#retrieve-logs-via-ssh) ou
   * [Encaminhar log para CloudWatch](#forward-logs-cloudwatch)

5. Retorne suas configurações ao padrão:

   1. Desative o registro detalhado editando sua definição de tarefa e definindo `NRIA_VERBOSE` como `0`.
   2. Salve sua definição de tarefa.
   3. Atualize seu serviço para a versão mais recente da sua tarefa.

6. Examine o arquivo de log em busca de erros.

7. Se você precisar enviar seu arquivo de log para [o suporte da New Relic](https://support.newrelic.com/):

   1. Inclua a linha no seu arquivo de log que contém a versão de integração do ECS:

      ```
      New Relic ECS integration version X.YY.ZZZ
      ```

   2. Anexe o arquivo de log ao seu ticket de suporte, junto com sua definição de tarefa .yml arquivo.

### Recuperar log via SSH (apenas tipo de lançamento EC2) [#retrieve-logs-via-ssh]

Para obter log via SSH:

1. Edite sua definição de tarefa. Altere o valor de `NRIA_VERBOSE` de `0` para:

   * `1` para log detalhado sempre ativo
   * `2` para registro inteligente
   * `3` para enviar para New Relic

   Leia [mais sobre essas opções](/docs/infrastructure/install-configure-manage-infrastructure/configuration/infrastructure-configuration-settings#verbose).

2. SSH em uma de suas instâncias.

3. Encontre o ID do contêiner do contêiner de integração New Relic, executando o comando `docker ps -a`. O nome do contêiner deve ser `nri-ecs`.

4. Salve o log do contêiner com o comando `docker logs NRI_ECS_CONTAINER_ID > logs.txt`. Deixe o comando em execução por cerca de três minutos para gerar dados de log suficientes.

5. Continue com as instruções na seção [ativar log detalhado](#env-variable) .

### Encaminhe o log para o CloudWatch e baixe-os com awscli [#forward-logs-cloudwatch]

Para obter log via CloudWatch:

1. Edite sua definição de tarefa. Altere o valor de `NRIA_VERBOSE` de `0` para:

   * `1` para log detalhado sempre ativo
   * `2` para registro inteligente
   * `3` para enviar para New Relic

   Leia [mais sobre essas opções](/docs/infrastructure/install-configure-manage-infrastructure/configuration/infrastructure-configuration-settings#verbose).

2. Usamos um grupo log do CloudWatch chamado `/newrelic-infra/ecs` para encaminhar o log. Para ver se já existe, execute:

   ```sh
   aws logs describe-log-groups --log-group-name-prefix /newrelic-infra/ecs
   ```

   Se existir um grupo log com esse prefixo, você obterá esta saída:

   ```json
   {
     "logGroups": [
       {
         "logGroupName": "/newrelic-infra/ecs",
         "creationTime": 1585828615225,
         "metricFilterCount": 0,
         "arn": "arn:aws:logs:YOUR_REGION:YOUR_AWS_ACCOUNT:log-group:/newrelic-infra/ecs:*",
         "storedBytes": 122539356
       }
     ]
   }
   ```

   Como esse comando corresponde a grupos log com prefixos, certifique-se de que o nome do grupo de log retornado seja exatamente `/newrelic-infra/ecs`. Se o grupo log não existir, a saída será:

   ```json
   {
     "logGroups": []
   }
   ```

3. Se o grupo log não existir, crie-o executando:

   ```sh
   aws logs create-log-group --log-group-name /newrelic-infra/ecs
   ```

4. Edite sua definição de tarefa. Na definição do contêiner para o contêiner `newrelic-infra`, adicione o seguinte `logConfiguration`:

   ```json
   "logConfiguration": {
     "logDriver": "awslogs",
     "options": {
       "awslogs-group": "/newrelic-infra/ecs",
       "awslogs-region": "AWS_REGION_OF_YOUR_CLUSTER",
       "awslogs-stream-prefix": "verbose"
     }
   }
   ```

5. Registre a nova versão da tarefa e atualize seu serviço.

6. Em seguida, você procurará o fluxo log relevante. Se você tiver várias instâncias da tarefa em execução, todas elas enviarão seus logs para o mesmo grupo log, mas cada uma terá seu próprio fluxo log . Os nomes dos fluxos de log seguem a estrutura `AWSLOGS_STREAM_PREFIX/TASK_FAMILY_NAME/TASK_ID`. Neste caso, será `verbose/newrelic-infra/TASK_ID`.

   Para obter todos os fluxos log de um determinado grupo log, execute este comando:

   ```sh
   aws logs describe-log-streams --log-group-name /newrelic-infra/ecs
   ```

   Veja a seguir um exemplo de saída de um grupo log com dois fluxos:

   ```json
   {
     "logStreams": [
       {
         "logStreamName": "verbose/newrelic-infra/9dfb28114e40415ebc399ec1e53a21b7",
         "creationTime": 1586166741197,
         "firstEventTimestamp": 1586166742030,
         "lastEventTimestamp": 1586173933472,
         "lastIngestionTime": 1586175101220,
         "uploadSequenceToken": "49599989655680038369205623273330095416487086853777112338",
         "arn": "arn:aws:logs:AWS_REGION_OF_YOUR_CLUSTER:YOUR_AWS_ACCOUNT:log-group:/newrelic-infra/ecs:log-stream:verbose/newrelic-infra/9dfb28114e40415ebc399ec1e53a21b7",
         "storedBytes": 0
       },
       {
         "logStreamName": "verbose/newrelic-infra/f6ce0be416804bc4bfa658da5514eb00",
         "creationTime": 1586166745643,
         "firstEventTimestamp": 1586166746491,
         "lastEventTimestamp": 1586173037927,
         "lastIngestionTime": 1586175100660,
         "uploadSequenceToken": "49605664273821671319096446647846424799651902350804230514",
         "arn": "arn:aws:logs:AWS_REGION_OF_YOUR_CLUSTER:YOUR_AWS_ACCOUNT:log-group:/newrelic-infra/ecs:log-stream:verbose/newrelic-infra/f6ce0be416804bc4bfa658da5514eb00",
         "storedBytes": 0
       }
     ]
   }
   ```

7. Na lista anterior de fluxos log, identifique aquele com o ID da tarefa cujo log você deseja recuperar e use logStreamName neste comando:

   ```sh
   aws logs get-log-events --log-group-name /newrelic-infra/ecs --log-stream-name "LOG_STREAM_NAME" --output text > logs.txt
   ```

8. Continue com as instruções [para ativar o log detalhado](#env-variable) .

### Do contêiner em execução [#running-container]

Para ativar o log detalhado executando um comando no contêiner em execução:

1. SSH em uma de suas instâncias.

2. Encontre o ID do contêiner do contêiner de integração New Relic executando o comando `docker ps -a`. O nome do contêiner deve ser `nri-ecs`.

3. Ative o registro detalhado por um período limitado usando `newrelic-infra-ctl`. Execute o comando:

   ```sh
   docker exec INTEGRATION_CONTAINER_ID /usr/bin/newrelic-infra-ctl
   ```

   Para obter mais detalhes, consulte [Solucionar problemas do agente](/docs/infrastructure/install-configure-manage-infrastructure/manage-your-agent/troubleshoot-running-agent).

4. Salve o log do contêiner com o comando

   ```sh
   docker logs INTEGRATION_CONTAINER_ID > logs.txt
   ```

   Deixe o comando em execução por cerca de três minutos para gerar dados de log suficientes.

5. Examine o arquivo de log em busca de erros.

Se você precisar enviar seu arquivo de log para [o suporte da New Relic](https://support.newrelic.com/):

1. Inclua a linha no seu arquivo de log que contém a versão de integração do ECS:

   ```
   New Relic ECS integration version X.YY.ZZZ
   ```

2. Anexe o arquivo de log ao seu ticket de suporte, junto com sua definição de tarefa .yml arquivo.
