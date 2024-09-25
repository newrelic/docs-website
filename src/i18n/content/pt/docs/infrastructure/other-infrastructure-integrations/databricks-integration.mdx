---
title: Integração DataBricks
tags:
  - databricks integration
  - New Relic integration
metaDescription: Install the DataBricks integration to monitor your spark metrics.
freshnessValidatedDate: '2024-09-19T00:00:00.000Z'
translationType: machine
---

A integração do New Relic Databricks pode coletar telemetria do Spark em execução no Databricks, bem como de qualquer implantação do Spark que não esteja em execução no Databricks.

Por padrão, a integração se conecta automaticamente e coleta telemetria da implantação do Spark em todos os clusters criados por meio da interface ou API no espaço de trabalho especificado. Esta integração oferece suporte ao recurso de telemetria do Collect Spark.

## Configure a integração [#setup]

Esta integração usa uma ferramenta autônoma do repositório experimental do New Relic. Essa integração pode ser executada em um host ou localmente para testes. Esta integração é executada nestas plataformas de host:

* Linux amd64
* Windows amd64

<Callout variant="tip">
  Para obter mais informações, consulte o [GitHub ReadMe](https://github.com/newrelic-experimental/newrelic-databricks-integration) para esta integração.
</Callout>

### Implantar no hospedeiro [#on-host-deploy]

Para implantar esta integração em um host (exemplo: EC2), siga estas etapas:

1. Baixe o arquivo apropriado para sua plataforma na [versão mais recente](https://github.com/newrelic-experimental/newrelic-databricks-integration/releases).

2. Extraia o arquivo para um diretório novo ou existente.

3. Crie um diretório chamado **configs** no mesmo diretório.

4. Crie um arquivo chamado `config.yml` no diretório configs e copie o conteúdo do arquivo [`configs/config.template.yml`](https://github.com/newrelic-experimental/newrelic-databricks-integration/blob/main/configs/config.template.yml) neste repositório para ele.

5. Edite o arquivo `config.yml` para [configurar](https://github.com/newrelic-experimental/newrelic-databricks-integration#configuration) a integração adequadamente para seu ambiente.

6. No diretório onde o arquivo foi extraído, execute o binário de integração usando o comando a seguir, copiando quaisquer [opções de linha de comando](https://github.com/newrelic-experimental/newrelic-databricks-integration#command-line-options) conforme necessário:

```bash
# Linux
 ./newrelic-databricks-integration 
 
 # Windows
 .\newrelic-databricks-integration.exe
```

### implantar em um clusterdatabricks [#databricks-deploy]

A New Relic integração do Databricks pode ser implantada no nó do driver de um Databricks cluster usando um clusterinit com escopo script. O script de inicialização usa variáveis de ambiente customizadas para especificar o parâmetro de configuração necessário para a configuração de integração.

Para instalar o script init, siga estas etapas:

1. Faça login na sua conta Databricks e navegue até o [espaço de trabalho](https://docs.databricks.com/en/getting-started/concepts.html#accounts-and-workspaces) desejado.

2. Siga as [recomendações do script init](https://docs.databricks.com/en/init-scripts/index.html#recommendations-for-init-scripts) para armazenar o script `cluster_init_integration.sh` no seu espaço de trabalho da maneira recomendada. Por exemplo, se seu espaço de trabalho estiver [habilitado para o catálogo Unity](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html#step-1-confirm-that-your-workspace-is-enabled-for-unity-catalog), você deverá armazenar o script init em um [volume do catálogo Unity](https://docs.databricks.com/en/ingestion/file-upload/upload-to-volume.html).

3. Vá para a aba **Compute** e selecione o computador multifuncional ou de trabalho desejado para abrir a interface de detalhes do computador.

4. Clique no botão **Edit** para [editar a configuração do computador](https://docs.databricks.com/en/compute/clusters-manage.html#edit-a-compute).

5. Siga as etapas para usar a interface do usuário para configurar um [script init com escopo de cluster](https://docs.databricks.com/en/init-scripts/cluster-scoped.html#configure-a-cluster-scoped-init-script-using-the-ui) e aponte para o local onde você armazenou o script init na etapa 2 acima.

6. Se o seu cluster não estiver em execução, clique no botão **Confirm** para salvar suas alterações. Em seguida, reinicie o cluster. Se o seu cluster já estiver em execução, clique no botão **Confirm and restart** para salvar suas alterações e reinicie o cluster.

Além disso, siga as etapas para [definir variáveis de ambiente](https://docs.databricks.com/en/compute/configure.html#environment-variables) para adicionar as seguintes variáveis de ambiente:

* `NEW_RELIC_API_KEY`: Sua [chave de API de usuário do New Relic](/docs/apis/intro-apis/new-relic-api-keys/#user-key).

* `NEW_RELIC_LICENSE_KEY`: Sua [chave de licença do New Relic](/docs/apis/intro-apis/new-relic-api-keys/#license-key).

* `NEW_RELIC_ACCOUNT_ID`: Seu [ID de conta New Relic](/docs/accounts/accounts-billing/account-structure/account-id/).

* `NEW_RELIC_REGION`: A [região](/docs/accounts/accounts-billing/account-setup/choose-your-data-center/#regions-availability) da sua conta New Relic; **EUA** ou **UE**.

* `NEW_RELIC_DATABRICKS_WORKSPACE_HOST`: o [nome](https://docs.databricks.com/en/workspace/workspace-details.html) da instância do destino Databricks.

* `NEW_RELIC_DATABRICKS_ACCESS_TOKEN`: Para [autenticar](https://github.com/newrelic-experimental/newrelic-databricks-integration#authentication) com um [token de acesso pessoal](https://docs.databricks.com/en/dev-tools/auth/pat.html#databricks-personal-access-tokens-for-workspace-users), seu token de acesso pessoal.

* `NEW_RELIC_DATABRICKS_OAUTH_CLIENT_ID`: Para usar uma entidade de serviço para [autenticação com o Databricks (OAuth M2M)](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html), o ID do cliente OAuth para a entidade de serviço.

* `NEW_RELIC_DATABRICKS_OAUTH_CLIENT_SECRET`: Para usar uma entidade de serviço para [autenticação com o Databricks (OAuth M2M)](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html), um segredo de cliente OAuth associado à entidade de serviço.

<Callout variant="tip">
  Observe que `NEW_RELIC_API_KEY` e `NEW_RELIC_ACCOUNT_ID` não estão sendo usados no momento, mas são necessários para o [módulo`new-relic-client-go` ](https://github.com/newrelic/newrelic-client-go)usado pela integração.

  Além disso, observe que apenas o token de acesso pessoal ou as credenciais do OAuth precisam ser especificados, mas não ambos. Se ambos forem especificados, as credenciais do OAuth terão precedência.

  Por fim, certifique-se de reiniciar o cluster seguindo a configuração das variáveis de ambiente.
</Callout>

## Instale nosso dashboardde monitoramento DataBricks [#add-dashboard]

Para configurar nosso dashboard DataBricks pré-criado para monitor seu aplicativo métrico, acesse a [instalação dashboard DataBricks](https://one.newrelic.com/marketplace?state=34e67b15-4fe1-28ef-ff41-99658fb36820) e siga as instruções. Uma vez instalado, o dashboard deverá exibir o métrica.

Se precisar de ajuda com o painel, consulte:

* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o <InlinePopover type="dashboards" />modo de exibição ou para adicionar mais conteúdo ao dashboard.