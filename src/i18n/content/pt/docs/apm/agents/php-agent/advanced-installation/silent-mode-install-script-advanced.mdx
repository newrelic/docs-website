---
title: Modo silencioso para o script de instalação (avançado)
tags:
  - Agents
  - PHP agent
  - Advanced installation
metaDescription: Instructions for advanced PHP system administrators who will be deploying New Relic via systems such as Puppet or Chef.
freshnessValidatedDate: never
translationType: machine
---

Para instalar o New Relic por meio de sistemas como Puppet ou Chef, o script [`newrelic-install`](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script) pode ser executado no modo <DNT>**silent**</DNT> e controlado por diversas variáveis de ambiente. Este documento fornece informações para configurar manualmente as variáveis de ambiente para permitir que o [script de instalação do PHP](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script) seja executado no modo silencioso.

## Escolha um instalador [#install-choose]

Duas opções estão disponíveis ao implantar o New Relic por meio de sistemas como Puppet ou Chef:

* Use o Puppet para instalar os arquivos usando o gerenciador de pacote nativo (

  <DNT>
    **rpm**
  </DNT>

  ou

  <DNT>
    **dpkg**
  </DNT>

  ).

* Distribua o conteúdo da distribuição tarball e coloque os arquivos no local selecionado.

Se você instalar através dos sistemas de pacotes, o script de instalação do pacote colocará os arquivos. Os sistemas baseados em Ubuntu são uma exceção, onde o script pós-instalação criará links simbólicos para a extensão New Relic se você tiver o PHP padrão instalado. No entanto, ele não tenta executar `newrelic-install`, pois isso fica a cargo do script Puppet ou Chef.

Para instalar o New Relic por meio de sistemas como Puppet ou Chef, o script [`newrelic-install`](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script) pode ser executado no modo <DNT>**silent**</DNT> e controlado por diversas variáveis de ambiente.

## Definir variáveis de ambiente [#install-environment]

Esta é a lista de variáveis de ambiente que você pode definir antes de invocar [`newrelic-install`](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script) para controlar como ele se comporta. Além de usar essas variáveis de ambiente, certifique-se de definir também [a chave de licença](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-license) e [o nome do aplicativo](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-appname) no arquivo `newrelic.ini` durante a instalação.

<Callout variant="important">
  `NR_INSTALL_SILENT` determina se a instalação é executada no modo silencioso. Quando definido, todas as informações do script devem ser fornecidas por meio dessas variáveis de ambiente.
</Callout>

<CollapserGroup>
  <Collapser
    id="NR_INSTALL_SILENT"
    title="NR_INSTALL_SILENT"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            flag
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Defina qualquer valor para definir o sinalizador como verdadeiro.
          </td>
        </tr>
      </tbody>
    </table>

    Se definido, o [script](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script) será executado no modo silencioso. Isso sufocará a exibição da maioria das mensagens de status e não interromperá a entrada do usuário.

    Ao executar no modo silencioso, todas as informações do script devem ser fornecidas por meio dessas variáveis de ambiente.

    Quando definido, você deve invocar o script com a opção de linha de comando `install` ou `uninstall` para definir o modo de execução.
  </Collapser>

  <Collapser
    id="NR_INSTALL_NOKSH"
    title="NR_INSTALL_NOKSH"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            flag
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Defina qualquer valor para definir o sinalizador como verdadeiro.
          </td>
        </tr>
      </tbody>
    </table>

    Se definido, o script não tentará ser executado novamente com o Bourne Again Shell (bash) ou Korn Shell (ksh).

    O script usa recurso não encontrado em algumas implementações tradicionais do Bourne Shell e, por padrão, tenta executar novamente com um shell que é conhecido por implementar esses recursos.

    Se você sabe que seu `/bin/sh` é ksh ou bash, você pode evitar essa reexecução definindo esta variável com qualquer valor.
  </Collapser>

  <Collapser
    id="NR_INSTALL_SHELL"
    title="NR_INSTALL_SHELL"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            caminho
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Aponte o script para um shell compatível.
          </td>
        </tr>
      </tbody>
    </table>

    O script de instalação depende de certos recursos que não estão presentes em algumas implementações muito antigas do Bourne Shell. Se você estiver implantando em tal sistema, defina esta variável para apontar para um shell substituto com o qual o script será executado novamente.

    Esta variável será ignorada se `NR_INSTALL_NOKSH` for definido.

    Se a sua versão de `/bin/sh` for realmente um link anterior às versões 3.x do Zsh, pode ser necessário configurá-lo para um shell mais compatível com o Korn, como o Bash.
  </Collapser>

  <Collapser
    id="NR_INSTALL_PATH"
    title="NR_INSTALL_PATH"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            lista de diretórios separados por dois pontos
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Listar diretórios para adicionar a `$PATH`.
          </td>
        </tr>
      </tbody>
    </table>

    Contém uma lista de diretórios separados por dois pontos para adicionar ao `$PATH` atual no qual procurar a instalação do PHP.

    Se você tiver uma instalação do PHP em um local não padrão que não esteja em `$PATH` no momento em que você invoca o script do Puppet ou do Chef, você poderá definir essa variável. Você também pode editar `PATH` diretamente para conter esses diretórios.
  </Collapser>

  <Collapser
    id="NR_INSTALL_PHPLIST"
    title="NR_INSTALL_PHPLIST"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            lista de diretórios separados por dois pontos
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Liste os diretórios nos quais instalar o New Relic.
          </td>
        </tr>
      </tbody>
    </table>

    Contém uma lista de diretórios separados por dois pontos nos quais instalar o New Relic.

    Se definido, ele contém a lista exclusiva e quaisquer versões encontradas em `PATH` ou nos diretórios especificados em `NR_INSTALL_PATH` serão ignoradas.
  </Collapser>

  <Collapser
    id="NR_INSTALL_ARCH"
    title="NR_INSTALL_ARCH"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            corda
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Defina como <DNT>**x86**</DNT> ou <DNT>**x64**</DNT> para substituir a detecção baseada em script.
          </td>
        </tr>
      </tbody>
    </table>

    Isso substituirá a tentativa de determinar a arquitetura automaticamente.

    Se você estiver executando em um sistema de 64 bits e definir isso como <DNT>**x86**</DNT>, forçará o script a instalar o daemon de 32 bits (se estiver instalando a partir de tarballs) e o agente.

    Definir como <DNT>**x64**</DNT> instalará o daemon de 64 bits e permitirá que o script detecte se sua versão do PHP é de 64 ou 32 bits.

    Você não deve precisar definir isso. É fornecido para ser completo.
  </Collapser>

  <Collapser
    id="NR_INSTALL_KEY"
    title="NR_INSTALL_KEY"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            corda
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Defina sua New Relic <InlinePopover type="licenseKey"/>em novas instalações.
          </td>
        </tr>
      </tbody>
    </table>

    Se esta for uma instalação nova e um novo arquivo <DNT>**newrelic.ini**</DNT> precisar ser criado, defina esse valor como a chave de licença.
  </Collapser>

  <Collapser
    id="NR_INSTALL_INITSCRIPT"
    title="NR_INSTALL_INITSCRIPT"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            corda
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Especifique o nome do daemon de inicialização de destino.
          </td>
        </tr>
      </tbody>
    </table>

    Contém o nome do script de inicialização do daemon.

    Use isto se não quiser usar o nome padrão.
  </Collapser>

  <Collapser
    id="NR_INSTALL_DAEMONPATH"
    title="NR_INSTALL_DAEMONPATH"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            caminho
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Especifique o caminho completo de instalação do daemon proxy New Relic.
          </td>
        </tr>
      </tbody>
    </table>

    Contém o caminho completo do caminho de instalação do daemon proxy New Relic.

    Para todos os sistemas, exceto Solaris, o padrão é `/usr/bin/newrelic-daemon`. Para Solaris, o padrão é `/opt/newrelic/bin/newrelic-daemon`.

    Se você alterar isso, talvez seja necessário editar o script <DNT>**init**</DNT> ou seus arquivos de configuração.
  </Collapser>

  <Collapser
    id="NR_INSTALL_USE_CP_NOT_LN"
    title="NR_INSTALL_USE_CP_NOT_LN"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            flag
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Defina qualquer valor para definir o sinalizador como verdadeiro.
          </td>
        </tr>
      </tbody>
    </table>

    Instrui o script de instalação a copiar o agente no local em vez de usar links simbólicos. Isso é útil se você extraiu o agente em algum local (como o diretório inicial do usuário root) que não é acessível ao processo PHP.
  </Collapser>
</CollapserGroup>

<InstallFeedback/>
