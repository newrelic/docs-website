---
title: 'Integração no host: instalação e configuração'
tags:
  - Integrations
  - On-host integrations
  - Installation
metaDescription: Details about the New Relic on-host infrastructure integrations for third-party services that work in tandem with the infrastructure agent.
freshnessValidatedDate: never
translationType: machine
---

Algumas de nossas [integrações no host](/docs/infrastructure/host-integrations/get-started/introduction-host-integrations) são construídas de maneira específica e fortemente agrupadas com o agente de infraestrutura, o que significa que possuem processos de instalação e configuração semelhantes.

Esta documentação contém os procedimentos básicos de instalação para estes tipos de integração. Para obter detalhes técnicos sobre como essas integração funcionam, consulte [integração no host relatório de dados](/docs/infrastructure/host-integrations/understand-use-data/host-integration-data-collection-reporting).

## Métodos de instalação [#install]

Seus serviços podem estar em execução em um único host físico, em uma VM ou em um contêiner orquestrado pelo Kubernetes ou pelo Amazon ECS. Escolha o método de instalação desejado.

Depois de fazer a instalação básica de uma integração, você deverá retornar à documentação de uma integração específica para ler as instruções de configuração.

### Ambientes orquestrados [#orchestrated]

Nossas opções para ambientes orquestrados e em contêineres:

* <img
    style={{ width: '32px', height: '32px', verticalAlign: 'middle'}}
    class="inline"
    title="Kubernetes"
    alt="Kubernetes"
    src="/images/os_icon_k8.webp"
  >
    [Instale integração no host no Kubernetes](/docs/integrations/kubernetes-integration/link-apps-services/monitor-services-running-kubernetes)
  </img>
* <img
    style={{ width: '32px', height: '32px', verticalAlign: 'middle'}}
    class="inline"
    title="ECS"
    alt="ECS"
    src="/images/os_icon_ecs.webp"
  >
    [Instale integração no host no Amazon ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs) (tipo de lançamento EC2)
  </img>

### Executando em VM ou hosts locais [#standard]

Escolha seu cenário:

<CollapserGroup>
  <Collapser
    id="windows"
    title={<>Instalar usando arquivos MSI (<img src="/images/os_icon_windows.webp" title="Windows" alt="Windows" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>Windows)</img></>}
  >
    Para instalar:

    1. Se ainda não o tiver feito, [instale o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic).

    2. Baixe a imagem mais recente do instalador .MSI para a integração desejada [em nosso repositório](https://download.newrelic.com/infrastructure_agent/windows/integrations/).

    3. Em uma conta de administrador, execute o script de instalação usando um caminho absoluto.

       ```
       msiexec.exe /qn /i PATH\TO\integration-name.msi
       ```

    4. Retorne à documentação da sua integração e conclua as instruções de configuração.
  </Collapser>

  <Collapser
    id="apt"
    title={<>Instale com apt (<img src="/images/os_icon_debian.webp" title="Debian icon" alt="Debian.webp" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>Debian,<img src="/images/os_icon_ubuntu.webp" title="ubuntu icon" alt="ubuntu icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>Ubuntu)</img></>}
  >
    Para instalar uma integração com `apt`:

    1. Se ainda não o tiver feito, [instale o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) para seu sistema operacional.

    2. Na linha de comando, execute:

       ```
       sudo apt-get update
       ```

    3. Execute o comando a seguir, onde `INTEGRATION_FILE_NAME` representa o nome do arquivo de integração. Para obter mais informações, consulte a [documentação da integração](/docs/integrations/host-integrations/host-integrations-list).

       ```
       sudo apt-get install INTEGRATION_FILE_NAME
       ```

    4. Retorne à documentação da sua integração e conclua as instruções de configuração.
  </Collapser>

  <Collapser
    id="yum"
    title={<>Instale com yum (<img src="/images/os_icon_amazon-linux.webp" title="amazon linux.webp" alt="amazon linux.webp" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>Amazon Linux,<img src="/images/os_icon_centos.webp" title="centos icon" alt="centos icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>CentOS,<img src="/images/os_icon_redhat.webp" title="redhat icon" alt="redhat icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>RHEL)</img></>}
  >
    Para instalar um pacote de integração com `yum`:

    1. Se ainda não o tiver feito, [instale o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) para seu sistema operacional.

    2. Na linha de comando, execute:

       ```
       sudo yum -q makecache -y --disablerepo='*' --enablerepo='newrelic-infra'
       ```

    3. Execute o comando a seguir, onde `INTEGRATION_FILE_NAME` representa o nome do arquivo de integração. Para mais informações consulte a [integração específica no host](/docs/infrastructure/host-integrations/host-integrations-list).

       ```
       sudo yum install INTEGRATION_FILE_NAME
       ```

    4. Retorne à documentação da sua integração e conclua as instruções de configuração.
  </Collapser>

  <Collapser
    id="zypper"
    title={<>Instale com zypper (<img src="/images/os_icon_suse.webp" title="suse icon" alt="suse icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>LES)</img></>}
  >
    Para instalar uma integração no host com o zypper:

    1. Se ainda não o tiver feito, [instale o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) para seu sistema operacional.

    2. Na linha de comando, execute:

       ```
       sudo zypper -n ref -r newrelic-infra
       ```

    3. Execute o comando a seguir, onde `INTEGRATION_FILE_NAME` representa o nome do arquivo de integração. Para obter mais informações, consulte a [documentação da integração](/docs/integrations/host-integrations/host-integrations-list).

       ```
       sudo zypper -n install INTEGRATION_FILE_NAME
       ```

    4. Retorne à documentação da sua integração e conclua as instruções de configuração.
  </Collapser>

  <Collapser
    id="tarball"
    title={<>Instalar a partir do tarball (<img src="/images/os_icon_linux.webp" title="Linux" alt="Linux icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>Outras distros)</img></>}
  >
    <Callout variant="tip">
      Recomendamos [usar seu gerenciador de pacote de distribuição para instalar o agente de infraestrutura](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/install-infrastructure-linux-using-package-manager). Se você optar por [instalar manualmente o agente](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/tarball-manual-install-infrastructure-linux), você também pode querer instalar a integração no host a partir dos tarballs fornecidos.
    </Callout>

    O processo de instalação manual não é automatizado. Caso opte pela instalação manual, deverá colocar os diferentes arquivos nas pastas corretas, e garantir que o agente tenha todas as permissões para executar a integração.

    Para instalar uma integração a partir de um tarball:

    1. Baixe o arquivo de integração empacotado do [repositório tarball](https://download.newrelic.com/infrastructure_agent/binaries/linux/amd64/).

    2. Descompacte o arquivo tarball de acordo com nossa [estrutura de arquivos de integração e regras de posicionamento](/docs/integrations/integrations-sdk/getting-started/integration-file-structure-activation), para que o agente possa encontrar as definições, configuração e executáveis da integração.

    3. Coloque o binário que contém o arquivo de definição dentro de `newrelic-integrations` ou `custom-integrations` no [diretório do agente](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/tarball-manual-install-infrastructure-linux#agent-directory).

    4. Coloque o arquivo de configuração da integração no [diretório do plug-in](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/tarball-manual-install-infrastructure-linux#configure-plugin).

    5. Retorne à documentação da sua integração e conclua as instruções de configuração. Se a sua integração requer o uso da ferramenta JMX, detalhes sobre isso estão abaixo.

       Para integração que requer nossa ferramenta `nrjmx`, siga estas instruções adicionais:

       #### Uso da ferramenta New Relic JMX [#nrjmx]

       Algumas integrações (como [JMX](/docs/integrations/host-integrations/host-integrations-list/jmx-monitoring-integration), [Cassandra](/docs/integrations/host-integrations/host-integrations-list/cassandra-monitoring-integration) e [Kafka](/docs/integrations/host-integrations/host-integrations-list/kafka-monitoring-integration)) exigem a ferramenta `nrjmx` . Se sua integração precisar disso, baixe-o em [nosso repositório](https://download.newrelic.com/infrastructure_agent/binaries/linux/noarch/) e descompacte-o.

       <Callout variant="important">
         `nrjmx` requer Java 8 ou superior.
       </Callout>

       Para integração JMX versão 2.3.3 ou superior e integração Cassandra versão 2.3.0 ou superior, a ferramenta `nrjmx` é incluída como uma dependência. Por esse motivo, ao utilizar um gerenciador de pacote, a ferramenta `nrjmx` não precisa ser instalada manualmente.

       Se você já instalou `nrjmx` e instalou `nri-jmx`, nossa ferramenta JMX mantém a versão já instalada. Se você ainda não tiver `nrjmx` instalado, ele obterá a versão mais recente `nrjmx` .

       Por padrão, o local `nrjmx` é `/usr/bin/nrjmx/*`. Para instalar em um local diferente, defina o novo caminho na variável de ambiente `NR_JMX_TOOL` .
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Atualizar o agente [#upgrade]

Para manter a integração no host atualizada, siga os procedimentos padrão para [atualizar o pacote integração no host](/docs/infrastructure/host-integrations/installation/update-infrastructure-host-integration-package).

## Detalhes técnicos [#technical-details]

Essas integração são construídas com a mesma estrutura de arquivos e estrutura de configuração. Para obter detalhes sobre sua estrutura e como eles relatam dados, consulte [relatório de dados](/docs/infrastructure/host-integrations/understand-use-data/host-integration-data-collection-reporting).
