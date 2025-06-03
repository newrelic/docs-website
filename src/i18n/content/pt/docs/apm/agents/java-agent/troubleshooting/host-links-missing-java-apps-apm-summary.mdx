---
title: Links de host ausentes no resumo do APM do aplicativo Java
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: How to control how the hostname is reported by the New Relic Java agent on Linux systems.
freshnessValidatedDate: never
translationType: machine
---

## Problema

<Callout variant="caution">
  Alterar as configurações do nome do host, especialmente as configurações do FQDN, pode desabilitar o acesso à rede do seu servidor. Teste todas as alterações minuciosamente antes de implantá-las em um ambiente de produção.
</Callout>

Você não pode visualizar links para seus hosts Linux na [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/applications-overview-dashboard)do seu aplicativo Java.

## Solução

Defina as configurações de nome do host para que o agente New Relic Infrastructure em um ambiente de agente Linux retorne exatamente a mesma sequência de nome que o agente Java New Relic. Recomendação: Edite as configurações do nome de domínio totalmente qualificado (FQDN). O agente lê seu nome do host nas configurações de FQDN do sistema operacional, portanto, definir o nome do host garantirá que ambos os agentes compartilhem um único nome do host.

<Callout variant="caution">
  A interface do usuário do New Relic usa o nome do host para vincular um aplicativo ao seu servidor host. A alteração do nome do host fará com que um nome diferente seja relatado para o servidor de aplicativos daquele relatado por qualquer aplicativo de monitoramento. Se o link do aplicativo estiver funcionando no momento, alterar o nome do host poderá quebrar os links host-servidor.
</Callout>

<CollapserGroup>
  <Collapser
    id="fqdn-example"
    title="Exemplo: edite suas configurações de FQDN"
  >
    Este exemplo configura o servidor para usar os seguintes valores de FQDN:

    * Endereço de IP: `1.2.3.4`

    * FQDN: `myhost.example.com`

    * Nome curto do host: `myhost`

      A maioria das distribuições Linux armazena o nome do host em dois arquivos, normalmente:

    * `/etc/hosts`

    * `/etc/sysconfig/network` (Este caminho pode não existir na sua distribuição Linux.)

      Para configurar o nome do host que você deseja que esteja em vigor na próxima vez que o host ou servidor for inicializado:

    1. Anexe o endereço IP, o FQDN e o nome abreviado do host aos dados existentes em `/etc/hosts`; por exemplo:

       ```
       127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
       ::1 localhost localhost.localdomain localhost6 localhost6.localdomain6
       1.2.3.4 myhost.example.com myhost
       ```

    2. Se `/etc/sysconfig/network` estiver presente, anexe o FQDN aos dados existentes em `/etc/sysconfig/network`. Por exemplo:

       ```
       NETWORKING=yes
       HOSTNAME=myhost.example.com
       ```

    3. Use a linha de comando para definir o nome do host atual, para que as alterações tenham efeito sem reiniciar o servidor:

       ```
       sudo hostname myhost.example.com
       ```

    4. Reinicie o agente Java e o agente de infraestrutura para registrar o novo nome do host.
  </Collapser>

  <Collapser
    id="aws-example"
    title="Exemplo: script nome do host settings em <DNT>AWS Elastic Beanstalk</DNT>"
  >
    Você também pode configurar o nome do host para ser um FQDN na inicialização usando um script de shell. Neste exemplo, [`cloud-init`](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html) passa um script de shell para a [Amazon Machine Image](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.html#launch-instance-console) (AMI) na inicialização, usando a variável `UserData`. Um script `cloud-init` é executado antes do início do agente Java e do agente de infraestrutura, portanto, o agente herda as configurações de nome do host do script `cloud-init` .

    Este script de exemplo configura todas as configurações de nome do host. Dependendo da sua distribuição Linux, o comando `echo` para `/etc/sysconfig/network` pode não ser necessário.

    ```
    #!/bin/sh

    # Set the hostname so the infrastructure agent
    # and Java agent see the same names.

    SHORT_HOSTNAME=`hostname -s`
    IP=`hostname -I`
    DOMAIN="example.com"
    HOSTNAME="${SHORT_HOSTNAME}.${DOMAIN}"

    hostname "${HOSTNAME}"
    echo "${IP} ${HOSTNAME}" >> /etc/hosts
    echo "HOSTNAME=${HOSTNAME}" >> /etc/sysconfig/network
    ```
  </Collapser>
</CollapserGroup>

## Causa

O New Relic vincula o aplicativo e o host ou servidor combinando a string do nome do host relatado pelo agente Java e nosso agente de infraestrutura para Linux. Se essas duas strings de nome do host não forem idênticas, o New Relic não poderá conectar o aplicativo e o servidor na [página <DNT>**Summary**</DNT> do APM](/docs/apm/applications-menu/monitoring/applications-overview-dashboard).

Existem vários motivos pelos quais isso pode ocorrer. Por exemplo:

* A JVM pode estar reportando o endereço IP e não o nome do host.
* A JVM pode reportar um endereço IPv6, enquanto o agente Linux reporta um endereço IPv4.
