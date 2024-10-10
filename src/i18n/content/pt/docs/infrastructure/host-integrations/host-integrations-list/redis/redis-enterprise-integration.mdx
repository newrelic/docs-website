---
title: Redis Enterprise monitoramento integração
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'New Relic Redis Enterprise integration: how to install it, configure it, and understand the data it reports.'
freshnessValidatedDate: never
translationType: machine
---

Esta integração é para cluster Redis Enterprise auto-hospedado e não para nuvem hospedada Redis ou várias ofertas de mercado Redis Enterprise.

## Arquitetura [#architecture]

A integração do Redis Enterprise pode ser executada em dois modos:

<CollapserGroup>
  <Collapser
    id="localhost-mode"
    title="Modo localhost"
  >
    Recomendamos que você use esse modo, pois ele também fornece estatísticas do sistema operacional no nível do host para melhor correlação. Aqui está um exemplo de arquivo de configuração:

    ```yaml
    instances:
    - name: redis-metrics
        command: metrics
        arguments:
        hostname: localhost
        port: 9443
        username: devops@example.com
        password: myPassword
    ```
  </Collapser>

  <Collapser
    id="cluster-mode"
    title="Modo cluster"
  >
    O New Relic agente em um nó fora do Redis Enterprise cluster pode extrair vários clusters para obter métricas. Aqui está um exemplo de arquivo de configuração:

    ```yaml
    instances:
    - name: redis-metrics1
        command: metrics
        arguments:
        hostname: cluster1.fqdn
        port: 9443
        username: devops@example.com
        password: myPassword
    - name: redis-metrics2
        command: metrics
        arguments:
        hostname: cluster.fqdn
        port: 9443
        username: devops@example.com
        password: myPassword
    ```
  </Collapser>
</CollapserGroup>

## Pré-requisitos [#prereqs]

Antes de passar para a [instalação](#install), certifique-se de atender aos seguintes pré-requisitos.

### Crie uma conta de monitoramento no Redis Enterprise [#monitoring-account]

1. Crie uma conta de monitoramento em sua conta Redis Enterprise.

2. Login em sua instância do Redis Entprise e clique em

   <DNT>
     **Access Control**
   </DNT>

   .

   <Callout variant="tip">
     Recomendamos usar uma conta interna, mas você poderá usar o LDAP se tiver o LDAP ativado.
   </Callout>

3. Adicione uma nova conta de usuário com

   <DNT>
     **Cluster View Permissions**
   </DNT>

   .

### Certifique-se de ter instalado o agente de infraestrutura New Relic [#NR-agent]

Para ver se você instalou o agente New Relic Infrastructure, execute o seguinte comando:

```shell
sudo service newrelic-infra status -l
```

Dependendo da sua distribuição Linux, pode ser necessário executar o seguinte comando:

```shell
sudo /bin/systemctl status  -l newrelic-infra.service
```

Caso ainda não tenha instalado, veja [como instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent/).

## Instalar e configurar [#install]

1. Baixe o arquivo TAR mais recente de acordo com o seu sistema operacional no [Github](https://github.com/redis-field-engineering/newrelic-redis-enterprise/releases).

2. Descompacte o arquivo TAR executando:

   ```shell
   sudo su -
   mkdir -p /tmp/nr_install
   cd /tmp/nr_install
   wget $RELEASE_DOWNLOAD
   tar zxvf *.tar.gz 
   ```

3. Crie uma pasta e copie os arquivos do arquivo TAR para esta nova pasta executando:

   ```shell
   mkdir -p /var/db/newrelic-infra/custom-integrations/bin
   cp newrelic-redis-enterprise /var/db/newrelic-infra/custom-integrations/bin
   cp conf/redis-redisenterprise-definition.yml /var/db/newrelic-infra/custom-integrations/
   cp conf/redis-redisenterprise-multi-config.yml.example conf/redis-redisenterprise-multi-config.yml
   ```

4. Configure a integração executando:

   ```shell
   vi conf/redis-redisenterprise-multi-config.yml
   mv conf/redis-redisenterprise-multi-config.yml /etc/newrelic-infra/integrations.d/redis-redisenterprise-config.yaml
   ```

5. Teste seu nome de usuário e senha executando:

   ```shell
   curl -vk -u devops@example.com:password https://CLUSTER.FQDN:9443/v1/cluster
   ```

6. Reinicie o New Relic executando:

   ```shell
   sudo service  newrelic-infra  restart
   ```

<InstallFeedback/>

### Parâmetro de configuração [#config-parameters]

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Parâmetro
      </th>

      <th>
        Definição
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `hostname`
      </td>

      <td>
        Domínio do Redis cluster
      </td>

      <td>
        Se estiver executando no modo localhost, use `localhost`
      </td>
    </tr>

    <tr>
      <td>
        `port`
      </td>

      <td>
        Porta da API Redis Enterprise
      </td>

      <td>
        A porta padrão é `9443`
      </td>
    </tr>

    <tr>
      <td>
        `username`
      </td>

      <td>
        O usuário Redis que você criou
      </td>

      <td>
        Endereço de e-mail como `devops@example.com`
      </td>
    </tr>

    <tr>
      <td>
        `password`
      </td>

      <td>
        Sua senha
      </td>
    </tr>
  </tbody>
</table>

## Instalar painel [#install-dashboards]

1. Vá para <DNT>**[one.newrelic.com/marketplace](https://one.newrelic.com/marketplace)**</DNT>.

2. Clique na guia <DNT>**Dashboards**</DNT> e, no campo de pesquisa, insira <DNT>**Redis Enterprise**</DNT>.<img title="Redis Enterprise dashboards" alt="A screenshot of the Redis Enterprise dashboards." src="/images/infrastructure_screenshot-crop_redis-enterprise-dashboard.webp"/>

   <Callout variant="tip">
     Se você conhece o dashboard que deseja adicionar, clique em um dos seguintes links:

     * [Métrico Redis Enterprise cluster dashboard](https://one.newrelic.com/marketplace?state=51bb87db-0e38-0700-be7a-8fb16d608735)
     * [Redis CRDT do banco de dados Enterprise dashboard](https://one.newrelic.com/marketplace?state=3dd588b8-ef40-85b6-17f5-49ca63ad25e3)
     * [Redis métrico do Enterprise Database dashboard](https://one.newrelic.com/marketplace?state=8d596a92-8338-1657-4b08-3c520845fec6)
   </Callout>

3. Clique em um dos painéis e selecione uma conta no dropdown. Em seguida, clique em <DNT>**View dashboard**</DNT> para adicioná-lo à sua conta.
