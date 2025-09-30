---
title: 'Instalação do agente PHP: PHP não padrão (avançado)'
tags:
  - Agents
  - PHP agent
  - Advanced installation
metaDescription: 'Non-standard PHP installations: To install your New Relic PHP agent with the newrelic-install script, or to install manually, start here.'
freshnessValidatedDate: never
translationType: machine
---

Se você estiver usando uma instalação PHP não padrão, siga este procedimento para instalar corretamente o New Relic. Isso é comum em instâncias onde o instalador padrão não encontra sua instalação do PHP (por exemplo, se você tiver PHP autocompilado ou uma stack PHP autocontida).

<Callout variant="important">
  Como parte do processo de instalação, altere o [nome padrão do aplicativo](/docs/site/naming-your-application) para um nome significativo.
</Callout>

## Requisitos [#prep]

Use a versão de linha de comando do PHP (`php -i`) ou observe a saída de `phpinfo()` para determinar:

* A versão da extensão PHP (`20090626`, `20100525`, `20121212`, `20131226`, `20151012` ou `20160303`)
* O diretório de instalação da extensão ou módulo
* Se a sua versão do PHP foi compilada ou não com suporte ZTS (Zend Thread Safety)

As opções ZTS aplicam-se apenas às [versões 9.17 e anteriores do agente PHP](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9170300/). ZTS não está disponível para PHP versões 9.18 ou superior.

## Use o script newrelic-install da linha de comando (recomendado) [#script]

1. Aponte New Relic para o diretório correto usando qualquer uma destas opções:

   <CollapserGroup>
     <Collapser
       id="add-php-to-path"
       title="Adicione sua localização PHP ao seu PATH"
     >
       O script de instalação precisa ser capaz de localizar sua linha de comando `php` ou `php-config`. Você pode adicionar o diretório que contém esses programas ao seu `PATH` atual.
     </Collapser>

     <Collapser
       id="nr-install-path"
       title="Defina o NR_INSTALL_PATH"
     >
       Esta pode ser uma lista de diretórios separados por dois pontos para instalação do PHP, além daqueles em seu `PATH`. Certifique-se de que esses diretórios contenham `php` ou `php-config`. Por exemplo:

       ```bash
       NR_INSTALL_PATH=/u/php/5.3/bin; export NR_INSTALL_PATH
       newrelic-install
       ```
     </Collapser>

     <Collapser
       id="nr-install-phplist"
       title="Defina o NR_INSTALL_PHPLIST"
     >
       Opcional: Use uma lista separada por dois pontos para definir os locais exatos (diretórios) onde pesquisar. Esta opção irá ignorar `PATH` e `NR_INSTALL_PATH`. Por exemplo:

       ```bash
       NR_INSTALL_PHPLIST=/usr/local/bin:u/php/5.3/bin; export NR_INSTALL_PHPLIST
       newrelic-install
       ```
     </Collapser>
   </CollapserGroup>

2. Chame o script `newrelic-install` de seu diretório. Dependendo do seu servidor e dos seus caminhos, o script de instalação pode encontrar outras versões do PHP no seu sistema. Selecione sua versão específica na lista.

Para obter mais informações, consulte [Script de instalação do PHP](/docs/agents/php-agent/installation/newrelic-install-script).

## Instale o New Relic manualmente [#manual]

Se não quiser usar o script de instalação, você poderá executar uma instalação totalmente manual. Certifique-se de coletar [informações sobre a instalação do PHP](/docs/agents/php-agent/advanced-installation/php-agent-installation-non-standard-php-advanced/#prep). Você pode revisar e obter os valores apropriados do seu `phpinfo()`. Em seguida, crie e vincule ou copie os arquivos manualmente.

### Obtenha o parâmetro de instalação do phpinfo()

Se esse processo não funcionar, você poderá obter as informações corretas do seu `phpinfo()` e transmitir as configurações apropriadas ao seu sistema como variáveis de ambiente.

<table>
  <thead>
    <tr>
      <th width={125}>
        phpinfo()
      </th>

      <th>
        Notas
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `PHPAPI`
      </td>

      <td>
        Isso é rotulado como `PHP Extension` no cabeçalho `phpinfo()` .
      </td>
    </tr>

    <tr>
      <td>
        `ARCH`
      </td>

      <td>
        Isso pode ser determinado executando `file /path/to/php`.

        * Se você vir uma referência a `ELF-32`, então `ARCH` é `x86`.
        * Se você vir uma referência a `ELF-64`, então `ARCH` é `x64`.
      </td>
    </tr>

    <tr>
      <td>
        `MODULEDIR`
      </td>

      <td>
        Isso é rotulado como `extension_dir` na seção PHP Core.
      </td>
    </tr>

    <tr>
      <td>
        `PHPZTS`
      </td>

      <td>
        As opções ZTS aplicam-se apenas às [versões 9.19.0.309 e anteriores do agente PHP](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9200310/). ZTS não está disponível para agentes PHP versões 9.20.0.310 ou superiores.

        Para determinar se o ZTS está compilado, procure a configuração `Thread Safety` na parte superior da saída `phpinfo()` .

        * Se estiver desativado, `PHPZTS` estará vazio.
        * Se estiver ativado, então `PHPZTS` será a string `-zts`, que inclui um hífen à esquerda conforme observado.
      </td>
    </tr>

    <tr>
      <td>
        `NRBASEDIR`
      </td>

      <td>
        Este é o diretório base do diretório de instalação do agente New Relic; por exemplo, `/usr/lib/newrelic-php5` ou o diretório onde você extraiu o arquivo tar para instalações tarball.
      </td>
    </tr>
  </tbody>
</table>

Use estas informações para executar os comandos a seguir para instalar o módulo PHP. Certifique-se de ajustar os valores do exemplo às suas configurações reais.

```bash
NRBASEDIR=/usr/lib/newrelic-php5; export NRBASEDIR
    MODULEDIR=/usr/lib/php/modules; export MODULEDIR
    ARCH=x64; export ARCH
    PHPAPI=20090626; export PHPAPI
    PHPZTS="-zts"; export PHPZTS
    rm -f $MODULEDIR/newrelic.so
    ln -s $NRBASEDIR/agent/$ARCH/newrelic-${PHPAPI}${PHPZTS}.so \
      $MODULEDIR/newrelic.so
```

### Configuração manual

A próxima etapa é a configuração.

1. Copie o `$NRBASEDIR/scripts/newrelic.ini.template` para o diretório de onde a instalação do PHP lê arquivos de configuração adicionais e renomeie-o como `newrelic.ini`.

   Para determinar o destino, observe a saída `phpinfo()` do item, chamada `Scan this dir for additional .ini files`. Se o diretório listado for `(none)`, adicione as configurações deste arquivo aos arquivos de configuração PHP listados (geralmente `php.ini`).

2. Substitua a configuração da chave de licença no seu arquivo `newrelic.ini` pelo seu <InlinePopover type="licenseKey"/>. Altere também quaisquer outras sessões conforme necessário (por exemplo, `newrelic.appname`).

3. Copie `$NRBASEDIR/daemon/newrelic-daemon.$architecture` para `/usr/bin/newrelic-daemon`.

   Dependendo do seu sistema, $architecture será x86 ou x64.

4. Reinicie seu despachante/servidor web.

5. Verifique se seu site está funcionando corretamente. Se não estiver, remova `newrelic.ini` ou o `newrelic.so` que você criou e reinicie seu despachante/servidor web novamente para restaurar a operação antiga.

6. Examine os arquivos de log do servidor web/despachante (**não** `newrelic`) para ajudar a determinar o problema. Se ainda precisar de ajuda, obtenha suporte em [support.newrelic.com](https://support.newrelic.com).

### Verifique a instalação

Verifique se o agente está instalado após a reinicialização, investigando a página `phpinfo()` para uma seção `newrelic` . Se parecer que o agente foi instalado com sucesso, verifique seu sistema para verificar se dois processos `newrelic-daemon` estão em execução:

* Para sistemas baseados em RedHat:

  ```bash
  ps -aef | grep newrelic-daemon
  ```

* Para sistemas baseados em Debian:

  ```bash
  ps aux | grep newrelic-daemon
  ```

Gere algum tráfego em seu aplicativo e aguarde de três a cinco minutos para que os resultados cheguem em sua [página APM <DNT>**Summary**</DNT> ](/docs/apm/apm-ui-pages/monitoring/apm-summary-page-view-transaction-apdex-usage-data/).

<InstallFeedback/>
