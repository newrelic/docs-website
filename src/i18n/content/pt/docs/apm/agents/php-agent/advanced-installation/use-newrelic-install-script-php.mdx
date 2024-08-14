---
title: Use o script newrelic-install para PHP
tags:
  - Agents
  - PHP agent
  - Advanced installation
metaDescription: The New Relic PHP agent's newrelic-install script is useful for multiple PHP installations as well as installations in non-standard locations.
freshnessValidatedDate: never
translationType: machine
---

O script interativo `newrelic-install` simplifica a instalação do aplicativo PHP no New Relic. Funciona com múltiplas instalações de PHP, bem como instalação em locais não padrão. Executá-lo irá:

* Copie os módulos PHP corretos no lugar.
* Instale arquivos `ini` de amostra.
* Configure o daemon proxy do New Relic.

<Callout variant="important">
  Certifique-se de revisar as informações sobre como [trabalhar com múltiplas instalações e locais não padrão](#install-multiple) antes de executar o script.
</Callout>

## Encontre o script do instalador [#location]

A localização do script do instalador depende de como você instalou o agente PHP New Relic.

* Via gerenciador de sistema de pacote: O script de instalação está no diretório `/usr/bin` .
* Por meio de um tarball: o script de instalação está no diretório onde você extraiu o arquivo `tar` . O script na distribuição `tar` inclui etapas de instalação que de outra forma seriam tratadas pelo gerenciador de pacote.

## Trabalhe com múltiplas instalações PHP [#install-multiple]

Para que `newrelic-install` detecte corretamente várias instalações, certifique-se de que sua variável de ambiente `PATH` esteja definida corretamente. O script `newrelic-install` só pode instalar o agente para versões que encontrar.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this...**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Especifique diretórios adicionais
      </td>

      <td>
        Use a variável de ambiente `NR_INSTALL_PATH` com uma lista separada por dois pontos.
      </td>
    </tr>

    <tr>
      <td>
        Substituir `NR_INSTALL_PATH` e `PATH`
      </td>

      <td>
        Especifique um conjunto de diretórios na variável de ambiente `NR_INSTALL_PHPLIST` como uma lista separada por dois pontos. Esses diretórios devem conter a versão de linha de comando do PHP ou o script `php-config` .
      </td>
    </tr>
  </tbody>
</table>

## Chame o script do instalador [#invocation]

O script possui dois modos: [instalar](#install-install) e [desinstalar](#install-uninstall). Se você invocá-lo sem argumentos, será solicitado que você selecione um modo.

Na linha de comando, execute [o script](https://github.com/newrelic/newrelic-php-agent/blob/main/agent/newrelic-install.sh) em seu local:

* Através do gerenciador de sistema do pacote: `/usr/bin/newrelic-install`
* Através de um diretório de arquivo `tar` : `./newrelic-install`

## Use o modo de instalação [#install-install]

Siga este processo para instalar o New Relic.

<CollapserGroup>
  <Collapser
    id="invoke"
    title="1. Invoque o modo de instalação."
  >
    Invoque o modo de instalação usando <DNT>**one**</DNT> destes métodos:

    * Execute `newrelic-install` com a opção de linha de comando `install` .
    * Execute `newrelic-install` sem opções e selecione a opção de instalação no menu principal ao invocar o script.
  </Collapser>

  <Collapser
    id="license-key"
    title="2. Forneça sua chave de licença do New Relic."
  >
    Quando prompt, insira sua New Relic <InlinePopover type="licenseKey"/>. Esta chave será inserida em qualquer arquivo INI criado durante o restante do processo de instalação.
  </Collapser>

  <Collapser
    id="select-version"
    title="3. Selecione qual versão do PHP usar, se aplicável."
  >
    Se `newrelic-install` encontrar mais de uma versão do PHP, selecione qual versão do PHP usar. Você não verá esta tela se o script encontrar apenas uma única versão do PHP.

    <DNT>**Example:**</DNT> O menu mostra sete opções:

    ```
    1)   /usr/bin
    2)   /usr/local/php/5.2.16/bin
    3)   /usr/local/php/5.2.16-zts/bin
    4)   /usr/local/php/5.3.4/bin
    5)   /usr/local/php/5.3.4-zts/bin
    6)   /usr/local/php/5.4.19-zts/bin
    7)   /usr/local/php/5.5.4-zts/bin

    0)   Exit

    Select (1-7, 0 to exit, or all):
    ```

    As opções ZTS aplicam-se apenas às [versões 9.17 e anteriores do agente PHP](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9170300/). ZTS não está disponível para PHP versões 9.18 ou superior.

    No menu, use qualquer uma destas opções:

    * Para selecionar apenas uma versão, insira o número que indica a versão que deseja usar.
    * Para selecionar diversas versões, insira uma lista de números separados por vírgula ou espaço.
    * Para selecionar todas as versões listadas, insira a palavra-chave `all`.
    * Para sair do processo de instalação, insira `0`.

    Para cada diretório selecionado, o script tentará instalar o agente no local apropriado e reportará cada tentativa.

    <Callout variant="important">
      Para instalações PHP que permitem vários arquivos `.ini` , o script de instalação copiará um arquivo de modelo no local, se um arquivo modificado ainda não estiver instalado. Anote os `.ini` arquivos que você precisará modificar manualmente.
    </Callout>

    A partir da [versão 4.0 do agente PHP](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-40518), o instalador não funcionará corretamente se detectar uma única versão do PHP 5.1, que está obsoleta (2013). Se você precisar executar o PHP 5.1, use [o agente PHP versão 3.9.5.13](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-39513). Se precisar de ajuda, obtenha suporte em [support.newrelic.com](https://support.newrelic.com).
  </Collapser>

  <Collapser
    id="daemon"
    title="4. Instale o daemon, se aplicável."
  >
    Se o daemon não foi instalado pelo gerenciador de pacote, instale o daemon.

    Se for uma atualização ou reinstalação, o script fornecerá um prompt de confirmação antes de substituir a cópia antiga do daemon.

    Se a instalação for bem-sucedida, o script mostrará esta mensagem final:

    ```
    New Relic is now installed on your system. Congratulations!
    ```
  </Collapser>

  <Collapser
    id="restart-web-server"
    title="5. Reinicie seu servidor web."
  >
    Para ativar o agente PHP, reinicie seu servidor web.

    Se você estiver executando o PHP-FPM, também poderá ser necessário reiniciar o PHP-FPM separadamente antes que o agente fique ativo.
  </Collapser>

  <Collapser
    id="archive-file"
    title="6. Observe seu arquivo compactado."
  >
    Anote o nome e o local do arquivo de instalação. Este arquivo estará localizado em `/tmp/nrinstall-nnnn.tar` e conterá o log de instalação e informações úteis do sistema para ajudar o suporte técnico da New Relic na resolução de problemas.
  </Collapser>

  <Collapser
    id="configuration"
    title="7. Ajuste sua configuração."
  >
    Depois de instalar o New Relic com sucesso e reiniciar o servidor web, você pode começar a coletar dados sobre o seu aplicativo. Após alguns minutos, os dados começarão a aparecer na sua [página <DNT>**Summary**</DNT> do APM](/docs/apm/apm-ui-pages/monitoring/apm-summary-page-view-transaction-apdex-usage-data/).

    Para ajustar a operação do agente PHP e do daemon, revise as [opções de configuração do PHP](/docs/agents/php-agent/configuration/php-agent-configuration).
  </Collapser>
</CollapserGroup>

## Use o modo install_daemon [#install-daemon-mode]

Para instalar o daemon sem o agente, use o agente PHP 9.2 ou superior. Execute `newrelic-install` com a opção de linha de comando `install_daemon` .

Isso é útil se o daemon for executado em um host diferente ou em um contêiner diferente do aplicativo PHP. Por exemplo, isso pode acontecer com [a instalação do agente no contêiner](/docs/agents/php-agent/advanced-installation/install-php-agent-docker).

<InstallFeedback/>

## Solucione problemas de instalação do PHP [#troubleshoot]

Se houver problemas com o processo de instalação, revise [Nenhum dado aparece](/docs/agents/php-agent/troubleshooting/no-data-appears-php) e outros documentos de resolução de problemas antes de entrar em contato com a New Relic para obter suporte. Certifique-se de anexar seu [arquivo](#archive-file) a qualquer relatório de bug, bem como a saída da função [`phpinfo()`](/docs/agents/php-agent/troubleshooting/submitting-troubleshooting-results-php) produzida por seu servidor web.

## Modo de desinstalação [#install-uninstall]

Você pode desinstalar o New Relic, mas manter arquivos de configuração valiosos (úteis ao atualizar) ou desinstalar permanentemente o New Relic do seu sistema.

<CollapserGroup>
  <Collapser
    id="uninstall-keep"
    title="Desinstale e mantenha os arquivos de configuração."
  >
    Este método é útil quando você deseja desinstalar e atualizar. A desinstalação não remove arquivos de configuração importantes, como o arquivo de configuração do daemon. Além disso, ele não remove nenhum arquivo `newrelic.ini` que você tenha modificado.

    Para desinstalar o New Relic usando o script de instalação, use uma destas opções:

    * Invoque `newrelic-install` com a opção `uninstall` .
    * Execute `newrelic-install` sem opções e selecione a opção de desinstalação no menu principal ao invocar o script.
  </Collapser>

  <Collapser
    id="uninstall-permanent"
    title="Desinstale permanentemente o New Relic."
  >
    Para desinstalar permanentemente o New Relic do seu sistema: Invoque `newrelic-install` com a opção `purge` .

    Isso removerá todos os arquivos de configuração e quaisquer links criados no momento da instalação. Isso **não** afetará nenhum parâmetro de configuração colocado em arquivos como `php.in`. Além disso, isso **não** removerá os pacotes de software instalados no sistema.

    Para remover os pacotes de software New Relic instalados com um gerenciador de pacote, consulte [Desinstalando RedHat e CentOS](/docs/php/php-agent-installation-redhat-and-centos#uninstalling) ou [Desinstalando Ubuntu e Debian](/docs/php/php-agent-installation-ubuntu-and-debian#uninstalling).
  </Collapser>
</CollapserGroup>
