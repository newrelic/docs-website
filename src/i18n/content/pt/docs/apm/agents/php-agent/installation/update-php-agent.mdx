---
title: Atualizar o agente PHP
tags:
  - Agents
  - PHP agent
  - Installation
metaDescription: 'How to update your APM PHP agent, and notes on EOL support for early agent versions.'
freshnessValidatedDate: '2024-07-31T00:00:00.000Z'
translationType: machine
---

Para aproveitar ao máximo os recursos mais recentes, melhorias e patches de segurança importantes da New Relic, recomendamos que você atualize seu agente PHP para a versão mais recente. Para obter informações adicionais sobre atualizações específicas do agente, consulte as [notas de versão do agente PHP](/docs/release-notes/agent-release-notes/php-release-notes).

Este documento explica como atualizar o agente para:

* RedHat e CentOS em x86_64
* Ubuntu e Debian em x86_64

Para atualizar via <DNT>**tar archive**</DNT>, siga os [procedimentos de instalação do arquivo tar](/docs/agents/php-agent/installation/php-agent-installation-tar-file). (Os procedimentos para instalar e atualizar com o arquivo tar são os mesmos.)

## Use o `newrelic-php5` [#newrelic-php5]

O nome do pacote do agente PHP da New Relic é `newrelic-php5`.

<Callout variant="tip">
  Embora o nome do pacote faça referência ao PHP 5, este pacote funciona para todas [as versões suportadas do PHP](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#php-release).
</Callout>

## Atualize usando seu gerenciador de pacote [#install-overview]

Para atualizar o agente PHP:

1. Substitua os arquivos do agente usando seu gerenciador de pacote preferido para seu sistema:

   <CollapserGroup>
     <Collapser
       id="redhat-centos"
       title="RedHat ou CentOS"
     >
       <table>
         <thead>
           <tr>
             <th style={{ width: "125px" }}>
               Gerente
             </th>

             <th>
               Procedimentos
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               <DNT>
                 **yum**
               </DNT>
             </td>

             <td>
               Se você estiver usando o repositório New Relic diretamente, atualize para o agente mais recente usando o seguinte comando:

               ```bash
               sudo yum update newrelic-php5
               ```
             </td>
           </tr>

           <tr>
             <td>
               <DNT>
                 **rpm**
               </DNT>
             </td>

             <td>
               Faça download da versão mais recente dos arquivos `.rpm` na [página de downloads do New Relic](https://download.newrelic.com/pub/newrelic/el5/x86_64/) e execute o comando a seguir. Certifique-se de substituir `X.X.X.X` pelo [número de versão mais recente do New Relic para PHP](/docs/releases/php).

               ```bash
               rpm -i newrelic-php5-common-X.X.X.X-1.noarch.rpm newrelic-daemon-X.X.X.X-1.x86_64.rpm newrelic-php5-X.X.X.X-1.x86_64.rpm
               ```
             </td>
           </tr>
         </tbody>
       </table>
     </Collapser>

     <Collapser
       id="ubuntu-debian"
       title="Ubuntu ou Debian"
     >
       <table>
         <thead>
           <tr>
             <th style={{ width: "125px" }}>
               Gerente
             </th>

             <th>
               Procedimentos
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               <DNT>
                 **apt-get**
               </DNT>
             </td>

             <td>
               Se você estiver usando o repositório New Relic diretamente, atualize para o agente mais recente usando o seguinte comando:

               ```bash
               apt-get update
               apt-get install newrelic-php5
               ```
             </td>
           </tr>

           <tr>
             <td>
               <DNT>
                 **dpkg**
               </DNT>
             </td>

             <td>
               Faça download da versão mais recente dos arquivos `.deb` na [página de downloads do New Relic](https://download.newrelic.com/debian/dists/newrelic/non-free/binary-amd64/) e execute o comando a seguir. Certifique-se de substituir `X.X.X.X` pelo [número de versão mais recente do New Relic para PHP](/docs/releases/php).

               ```bash
               dpkg -i newrelic-php5-common_X.X.X.X_all.deb newrelic-daemon_X.X.X.X_amd64.deb newrelic-php5_X.X.X.X_amd64.deb
               ```
             </td>
           </tr>
         </tbody>
       </table>
     </Collapser>
   </CollapserGroup>

2. RedHat ou CentOS: execute o script `newrelic-install` e siga o [prompt de confirmação do script de instalação](/docs/php/the-newrelic-install-script) antes de substituir uma instalação antiga.

   ```bash
   sudo newrelic-install install
   ```

   Ubuntu ou Debian: siga o prompt do gerenciador de pacote para executar o script `newrelic-install` como parte do processo de instalação.

3. Pare quaisquer processos `newrelic-daemon` residuais executando

   ```
   kill $(pgrep newrelic-daemon)
   ```

   Se o `newrelic-daemon` estiver configurado para [iniciar no modo externo](/docs/agents/php-agent/advanced-installation/starting-php-daemon-advanced#selecting-external), use o gerenciador de serviços do seu sistema operacional para reiniciá-lo.

4. [Reinicie seu servidor web](/docs/agents/php-agent/troubleshooting/why-when-you-must-restart-your-web-server) (Apache, Nginx, PHP-FPM, etc.).

5. Aguarde alguns minutos para que seu aplicativo envie dados para o New Relic.

## Atualizar versões de agente não suportadas [#eol-update]

<Callout variant="important">
  Se você estiver atualizando de uma versão mais antiga do agente, incluindo versões principais, revise a lista a seguir para obter alterações na funcionalidade.
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Migração
      </th>

      <th>
        Comentários
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td id="migration-8-0-0-204">
        8.0.0.204
      </td>

      <td>
        Notas de versão: [agente PHP 8.0.0.204](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-800204)

        <DNT>
          **TLS replaces the `newrelic.daemon.ssl` ini setting.**
        </DNT>

        Para aumentar a segurança, a configuração `newrelic.daemon.ssl` ini foi removida. O Transport Layer Security (TLS) agora será sempre usado na comunicação com o coletor New Relic.
      </td>
    </tr>

    <tr>
      <td id="migration-7-0-0-186">
        7.0.0.186
      </td>

      <td>
        Notas de versão: [agente PHP 7.0.0.186](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-700186)

        <DNT>
          **PHP 5.2 is no longer supported.**
        </DNT>

        A New Relic incentiva você a usar uma versão compatível do PHP (5.6 ou superior). Se você quiser continuar executando o agente PHP New Relic com PHP 5.2, recomendamos usar o agente versão 6.9. No entanto, neste caso, só podemos oferecer suporte limitado.
      </td>
    </tr>

    <tr>
      <td id="migration-5-0-0-115">
        5.0.0.115
      </td>

      <td>
        Notas de versão: [agente PHP 5.0.0.115](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-500115)

        <DNT>
          **Daemon command line flags have been renamed.**
        </DNT>

        Para clientes que iniciam o daemon manualmente, você pode encontrar o <DNT>**newly renamed command line flags**</DNT> com os sinalizadores `-h` ou `--help` . O <DNT>**following old flags will be removed**</DNT> em uma versão futura:

        * \[-p pidfile]
        * \[-d level]
        * \[-c config]
        * \[-l logfile]
        * \[-P port]
        * \[-s]
        * \[-n]
        * \[-b SSL-certificate-bundle]
        * \[-S SSL-certificate-path]
        * \[-H host]
        * \[-x proxy]
        * \[-a auditlog]
      </td>
    </tr>
  </tbody>
</table>

## Resolução de problemas após atualização [#troubleshoot]

Se você atualizou o PHP e o agente parou de funcionar ou de reportar dados, siga os [procedimentos de resolução de problemas](/docs/agents/php-agent/troubleshooting/agent-stops-working-after-updating-php).
