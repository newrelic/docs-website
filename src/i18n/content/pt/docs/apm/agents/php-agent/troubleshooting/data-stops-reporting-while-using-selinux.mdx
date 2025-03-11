---
title: Os dados param de ser relatados ao usar o SELinux
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: 'If your New Relic PHP agent stops reporting data and you are using SELinux, consider these troubleshooting options.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Seu agente para de reportar dados ao usar o agente PHP da New Relic. O sistema operacional inclui o SELinux por padrão ou foi adicionado ao ambiente para fins de segurança.

## Solução

Para resolver esse problema, use qualquer uma destas opções:

<CollapserGroup>
  <Collapser
    id="config-selinux-allow"
    title="Configure o SELinux para permitir a comunicação do New Relic"
  >
    Com o SELinux, você pode seguir suas próprias políticas de segurança para configurar uma política personalizada para permitir a comunicação. Este processo está fora do escopo do suporte da New Relic e não podemos fazer recomendações específicas em relação à sua configuração de segurança. No entanto, os links a seguir fornecem pontos de partida úteis para aprender sobre a criação e modificação de políticas do SELinux:

    * [Documentação do CentOS SELinux](https://wiki.centos.org/HowTos/SELinux)
    * [Documentação RHEL SELinux](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/5/html/deployment_guide/sec-sel-policy-customizing)
  </Collapser>

  <Collapser
    id="disable-selinux-permissive"
    title="Defina o SELinux para o modo permissivo"
  >
    <Callout variant="tip">
      Isto pode ser usado como uma medida temporária para verificar se o SELinux é responsável pela não divulgação dos dados.
    </Callout>

    Definir o SELinux para o modo permissivo permite que seus serviços operem sem restrições. A configuração padrão será restaurada se você reiniciar o servidor.

    Para definir para o modo permissivo, use o comando:

    ```
    setenforce Permissive
    ```
  </Collapser>

  <Collapser
    id="disable-selinux"
    title="Desabilitar SELinux"
  >
    <Callout variant="important">
      A New Relic não incentiva ativamente você a desativar o software de segurança. No entanto, para obter melhores resultados, configure o SELinux para permitir que o New Relic funcione totalmente.
    </Callout>

    Se você decidir que desabilitar o SELinux é a decisão certa para o seu servidor, use as seguintes etapas para desabilitar permanentemente o SELinux:

    1. Edite o arquivo SELinux `sysconfig` usando este comando:

       ```
       vi /etc/sysconfig/selinux
       ```

    2. Encontre a configuração `SELINUX=` e altere-a para:

       ```
       SELINUX=disabled
       ```

    3. Reinicie o seu servidor para que a configuração tenha efeito.
  </Collapser>
</CollapserGroup>

## Causa

A extensão PHP e o daemon do agente se comunicam por padrão por meio de `/tmp/.newrelic.sock` (soquete Unix). Se o SELinux não estiver configurado para permitir a comunicação da extensão PHP e do daemon, isso impedirá que esses dois componentes do agente se comuniquem entre si quando o SELinux estiver configurado para o modo `enforcing` .

Em alguns casos, o SELinux pode impedir que o daemon seja iniciado completamente. [Verificar o daemon PHP](/docs/agents/php-agent/troubleshooting/verifying-php-daemon) pode ser uma etapa necessária de resolução de problemas ao diagnosticar problemas do SELinux.

SELinux é um software de segurança desenvolvido para limitar a comunicação de processos em seu ambiente. SELinux é uma ferramenta poderosa em segurança de servidores. Como tal, você deve implementá-lo e configurá-lo para se adequar ao seu próprio ambiente de servidor.

A New Relic não influencia as decisões sobre como configurar a segurança do servidor ou os processos que você permite a execução. Não somos responsáveis pelas decisões de segurança do seu software. Você deve revisar suas definições de configuração para garantir que estejam em conformidade com suas próprias políticas de segurança antes de implementá-las.
