---
title: Distribuidor do AWS System Manager
metaDescription: 'New Relic''s AWS System Manager Distributor monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: '2024-02-28T00:00:00.000Z'
translationType: machine
---

Instale o agente de infraestrutura da New Relic em suas instâncias AWS de EC2 com um único clique através de nossa integração para [AWS System Manager Distributor](https://docs.aws.amazon.com/systems-manager/latest/userguide/distributor.html). Este documento explica o recurso de integração, como ativá-lo e quais dados podem ser reportados.

## Recurso [#features]

Colete e envie dados de telemetria para New Relic de diversas instâncias AWS com um único clique. New Relic AWS A integração do System Manager Distributor da instala nosso agente de infraestrutura em sua AWS instância e permite que você rapidamente monitor seus serviços, consulte dados recebidos e crie um painel para que você possa observar seu sistema rapidamente.

## Pré-requisitos [#prereqs]

Conclua a configuração recomendada pela AWS na [documentação do AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html) para configurar funções, contas de usuário, permissões e recursos iniciais.

## Ativar integração [#integration]

Você pode usar o console do AWS Systems Manager para instalar ou atualizar o pacote do distribuidor <DNT>**New Relic infrastructure agent**</DNT> uma vez ou pode definir uma programação de instalação.

* Ao configurar uma instalação única, o

  <DNT>
    **Distributor package**
  </DNT>

  usa o [AWS Systems Manager Run Command](https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html), um recurso do AWS Systems Manager, para executar a instalação.

* Quando você agenda a instalação ou atualização do pacote, o Distributor usa [o AWS Systems Manager State Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html) para instalar ou atualizar.

A New Relic também fornece processo automatizado para monitoramento do EC2 e pode ser encontrado [aqui](/whats-new/2023/08/whats-new-08-08-automatic-ec2-monitoring-through-nr-agent/)

## Instalar ou atualizar o agente [#install-update]

1. Abra o [console](https://console.aws.amazon.com/systems-manager) do AWS Systems Manager. No painel de navegação, escolha <DNT>**Distributor**</DNT>, selecione <DNT>**Third party**</DNT> e selecione o bloco <DNT>**New Relic infrastructure agent**</DNT> .

2. Selecione o modo de instalação. Você pode instalar ou atualizar o pacote <DNT>**New Relic infrastructure agent**</DNT> uma vez ou agendar a instalação. Para obter informações detalhadas sobre a instalação do <DNT>**Distributor packages**</DNT>, consulte [a documentação do Distribuidor do AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/distributor-working-with-packages-deploy.html).

3. Para <DNT>**Action**</DNT>, escolha <DNT>**Install**</DNT>.

4. Para <DNT>**Installation type**</DNT>, escolha <DNT>**Uninstall and reinstall**</DNT>: o pacote é completamente desinstalado e reinstalado. O agente New Relic ficará indisponível até que a reinstalação seja concluída <DNT>**In-place update**</DNT>. O aplicativo permanece disponível durante todo o processo de atualização.

5. Para <DNT>**Additional Arguments**</DNT>, cole o código apresentado abaixo. Certifique-se de substituir `YOUR_NEWRELIC_LICENSE_KEY` pela sua [chave de API New Relic](/docs/apis/intro-apis/new-relic-api-keys).

   ```
   {
     "SSM_NR_LICENSE_KEY" : "YOUR_NEWRELIC_LICENSE_KEY"
   }
   ```

   Variáveis de amostra também podem ser especificadas em **Additional Arguments** , conforme mostrado abaixo:

   ```
   { "SSM_NR_LICENSE_KEY" : "YOUR_NEWRELIC_LICENSE_KEY",
    "SSM_NRIA_METRICS_NETWORK_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_PROCESS_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_STORAGE_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_SYSTEM_SAMPLE_RATE" : "SOME_INTEGER_VALUE", 
    "SSM_NRIA_METRICS_NFS_SAMPLE_RATE" : "SOME_INTEGER_VALUE" }
   ```

   Se não forem especificados, eles assumirão os [valores padrão](https://github.com/newrelic/infrastructure-agent/blob/master/assets/examples/infrastructure/newrelic-infra-template.yml.example).

6. Na seção <DNT>**Targets**</DNT> , escolha os nós gerenciados nos quais deseja executar esta operação especificando a tag, selecionando instância ou dispositivos manualmente ou especificando um grupo de recursos. Se você não encontrar um nó gerenciado na lista, consulte [estes documentos da AWS](https://docs.aws.amazon.com/systems-manager/latest/userguide/troubleshooting-managed-instances.html).

7. Para <DNT>**Rate Control**</DNT> para <DNT>**Concurrency**</DNT>, especifique um número ou uma porcentagem de destino no qual executar o comando ao mesmo tempo.

   <Callout variant="tip">
     Se você selecionou destino especificando tags ou grupos de recursos e não tiver certeza de quantos nós gerenciados são destino, restrinja o número de destinos que podem executar o documento ao mesmo tempo especificando uma porcentagem.
   </Callout>

8. Para <DNT>**Error threshold**</DNT>, especifique quando parar a execução do comando em outro destino após ele falhar em um número ou em uma porcentagem de nós gerenciados. Por exemplo, se você especificar três erros, o Systems Manager interromperá o envio do comando quando o quarto erro for recebido. Os nós gerenciados que ainda processam o comando também podem enviar erros.

9. <DNT>**Verify the installation**</DNT>. Depois de executar a instalação, verifique o progresso na área Status do comando. Quando você vê o status de Sucesso, significa que a instalação foi bem-sucedida.

10. Explore os dados do seu aplicativo em [nossa interface](one.newrelic.com).

## Configuração e polling [#configure-polling]

Você pode alterar a frequência de pesquisa e filtrar dados usando [opções de configuração](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

[Informações de pesquisa padrão](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para a integração AWS :

* Intervalo de sondagem New Relic : 5 minutos
* Intervalo de dados do Amazon CloudWatch: 1 minuto ou 5 minutos

## Encontre e use dados

Depois de instalar o agente New Relic Infrastructure , [você poderá ajustar e ajustar o fluxo de dados proveniente de sua instância](/docs/infrastructure/infrastructure-monitoring/get-started/get-started-infrastructure-monitoring).

Para ler mais sobre como encontrar seus dados, consulte nossa [introdução à integração AWS ](/docs/infrastructure/amazon-integrations/get-started/introduction-aws-integrations/#insights).
