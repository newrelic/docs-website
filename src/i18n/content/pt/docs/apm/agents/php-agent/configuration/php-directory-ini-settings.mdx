---
title: Configurações INI por diretório do PHP
tags:
  - Agents
  - PHP agent
  - Configuration
metaDescription: 'How to configure settings for your app per-directory; for example, a single web server for multiple apps or you need to adjust settings for specific apps.'
freshnessValidatedDate: never
translationType: machine
---

A maioria das [variáveis de configuração do agente PHP](/docs/php/php-agent-phpini-settings) pode ser definida por diretório. Essa opção é frequentemente usada quando há um único servidor web atendendo vários aplicativos e você deseja ajustar as configurações (por exemplo, o nome do aplicativo) aplicativo por aplicativo.

O processo de configuração de valores por diretório depende do ambiente. Este documento descreve os três ambientes mais comuns:

* [Apache](#perdir-apache)
* [PHP-FPM](#php-fpm_per-dir)
* [NGINX](#PHP-FPM_nginix)

Para outras opções de nomenclatura de aplicativos, consulte [Nomeie seu aplicativo PHP](/docs/agents/php-agent/configuration/name-your-php-application).

## Configurações por diretório do Apache para PHP [#perdir-apache]

Ao usar o módulo PHP, o Apache fornece dois mecanismos para definir variáveis PHP fora do arquivo INI:

<CollapserGroup>
  <Collapser
    id="ini-apache"
    title={<>Edite o arquivo <InlineCode>httpd.conf</InlineCode> ou um dos arquivos que ele inclui.</>}
  >
    Use a sintaxe dos exemplos de arquivos INI quando seu servidor web servir vários domínios. Para visualizar cada um desses domínios separadamente no New Relic:

    1. Para o seu domínio principal, defina `newrelic.appname = "My Main Domain"` no seu arquivo INI global.

    2. Substitua o valor de cada um dos hosts virtuais adicionando entradas `php_value` como parte da configuração do host virtual.

       <Callout variant="important">
         Certifique-se de usar o nome de módulo adequado para a instalação do PHP. Substitua `PHP_MODULE` nos exemplos abaixo pelo nome do módulo PHP5 instalado. Este nome depende da distribuição Linux e/ou PHP usada. Por exemplo, nomes comuns incluem `php5_module`, `mod_php5`, `php_module`, etc. A capitalização pode variar.
       </Callout>

       Para servidores Apache, você pode encontrar os nomes dos módulos de uma das seguintes maneiras. Cada um irá gerar uma lista de módulos instalados.

    * Na linha de comando, execute:

      ```bash
      apachectl -t -D DUMP_MODULES
      ```

      <DNT>
        **OR**
      </DNT>

    * Em uma página da web, use:

      ```php
      <?php
        print_r(apache_get_modules());
      ?>
      ```

      <CollapserGroup>
        <Collapser
          id="separating-domains"
          title="Configurando appname por domínio"
        >
          Aqui está um exemplo de separação de domínios, onde `PHP_MODULE` é o nome do seu módulo PHP5.

          ```apacheconf
          <VirtualHost 192.168.42.43>
            ServerName www.myvhost1.com
            DocumentRoot "/path/to/vhost1/"
            ...
            <IfModule PHP_MODULE>
              php_value newrelic.appname "Virtual Host 1"
            </IfModule>
          </VirtualHost>

          <VirtualHost 192.168.123.45>
            ServerName www.myvhost2.com
            DocumentRoot "/path/to/vhost2/"
            ...
            <IfModule PHP_MODULE>
              php_value newrelic.appname "Virtual Host 2"
            </IfModule>
          </VirtualHost>
          ```

          No exemplo acima, `newrelic.appname` é definido com um valor diferente para cada host virtual.
        </Collapser>
      </CollapserGroup>

      Para valores de string e números, use `php_value name VALUE`, onde:

    * `name` é o nome da configuração INI a ser modificada conforme listado nas [configurações INI do PHP](/docs/php/php-agent-phpini-settings).

    * `VALUE` é o valor que você deseja definir para esse host virtual específico.

      Certifique-se de colocar os valores da string entre aspas `"`.

      Se você quiser alterar uma configuração booleana, use a sintaxe `php_flag name VALUE`, onde `name` é o nome da variável conforme listado nas [configurações INI do PHP](/docs/php/php-agent-phpini-settings) e `VALUE` é `on` ou `off`.

      Para desabilitar completamente o agente New Relic para um host virtual, use um sinalizador booleano:

      ```apacheconf
      <VirtualHost 192.168.56.78>
        ServerName www.myvhost3.com
        DocumentRoot "/path/to/vhost3/"
        ...
        <IfModule PHP_MODULE>
          php_flag newrelic.enabled off
        </IfModule>
      </VirtualHost>
      ```
  </Collapser>

  <Collapser
    id="htaccess-apache"
    title={<>Edite o arquivo <InlineCode>.htaccess</InlineCode> .</>}
  >
    Use a sintaxe dos exemplos de arquivos INI dentro de um arquivo `.htaccess` . Por exemplo:

    ```apacheconf
    php_value newrelic.appname "My Blog App"
    ```

    Isso permite que você controle as configurações por diretório a partir dos diretórios.

    Neste exemplo, seu servidor web tem a raiz do documento em `/data/webroot`. Você também tem dois subdiretórios para aplicativos especializados:

    * Seu

      <DNT>
        **`/data/webroot/blog`**
      </DNT>

      contém um aplicativo de blog.

    * Seu `/data/webroot/shop` contém um aplicativo de carrinho de compras.

    Para que todas as três partes do seu site sejam relatadas como aplicativos distintos na interface do New Relic:

    1. Defina o nome do seu aplicativo principal no arquivo INI.
    2. Substitua esse nome usando um arquivo `.htaccess` em cada um dos diretórios especializados.

    Qualquer parte do seu servidor web (por exemplo, `/data/webroot/something`) que não tenha um arquivo `.htaccess` específico usará o nome global do aplicativo definido no arquivo INI.

    <Callout variant="important">
      O arquivo `.htaccess` deve estar no diretório de nível superior desse aplicativo. Os objetos nesse diretório, ou em seus subdiretórios, usarão o valor especificado no arquivo `.htaccess` .
    </Callout>

    Para obter mais informações sobre como usar e proteger arquivos <DNT>**`.htaccess`**</DNT> , consulte o [tutorial do servidor HTTP Apache](http://httpd.apache.org/docs/2.2/howto/htaccess.html "O link abre em uma nova janela").
  </Collapser>
</CollapserGroup>

## Configurações PHP-FPM por diretório [#php-fpm_per-dir]

O FastCGI Process Manager (<DNT>**PHP-FPM**</DNT>) é dedicado ao PHP. Ele gera vários processos de trabalho que aguardam solicitações. Ele aumenta o desempenho ao não reinicializar o mecanismo PHP em cada invocação, permitindo que cada processo lide com uma série de solicitações antes de ser reciclado.

Para obter mais informações sobre PHP-FPM, consulte [a página sobre do PHP-FPM](http://php-fpm.org/about/ "O link abre em uma nova janela") e [o FastCGI Process Manager](http://www.php.net/manual/en/install.fpm.php "O link abre em uma nova janela") em [php.net](http://www.php.net/ "O link abre em uma nova janela").

Ao usar PHP-FPM, existem dois mecanismos para definir variáveis PHP fora do arquivo INI e uma técnica especial para <DNT>**NGINX**</DNT>:

<CollapserGroup>
  <Collapser
    id="perdir-fpm"
    title={<>Edite as configurações <strong>do pool PHP-FPM</strong> por diretório</>}
  >
    <Callout variant="important">
      Alterar variáveis por diretório pode ser mais difícil se você usar <DNT>**PHP-FPM**</DNT>. Você deve usar vários pools PHP-FPM, um para cada host virtual ou aplicativo exclusivo.
    </Callout>

    Um <DNT>**pool**</DNT> é um conjunto dedicado de trabalhadores filhos que atenderá apenas solicitações para esse pool. Como requer trabalhadores filhos dedicados, o PHP-FPM não escalará bem se você tiver um grande número de hosts virtuais ou aplicativos para os quais deseja definir opções individuais.

    Para configurar o PHP-FPM por diretório:

    1. Defina o nome do aplicativo principal no arquivo INI.

    2. Configure dois pools para os dois aplicativos adicionais.

    3. Substitua a configuração do nome do aplicativo nesses pools.

       Cada pool deve ter um mecanismo de conexão exclusivo (para que você possa identificar qual pool usar no arquivo de configuração do servidor web). Aqui está um exemplo de `php-fpm.conf`:

       ```ini
       [app1]
       listen=/tmp/pool-app1.sock
       php_value[newrelic.appname] = "My App 1"

       [app2]
       listen=/tmp/pool-app2.sock
       php_value[newrelic.appname] = "My App 2"

       [app3]
       listen=/tmp/pool-app3.sock
       php_flag[newrelic.enabled] = off
       ```

       O formato geral das configurações de variáveis por pool é `php_value[name] = VALUE` para variáveis numéricas ou de sequência de caracteres ou `php_flag[name] = VALUE` para valores booleanos. Sempre coloque os valores da string entre aspas `"`. Os valores booleanos devem ser `on` ou `off`.

       Depois que o arquivo de configuração for configurado, o servidor web deverá ser instruído a usar os diferentes pools para diferentes partes do site. Para obter mais informações, consulte a documentação do seu servidor web.
  </Collapser>

  <Collapser
    id="PHP-FPm_user_ini"
    title={<>Crie um arquivo <InlineCode>.user.ini</InlineCode> .</>}
  >
    Você pode usar a sintaxe do exemplo de arquivo INI para CGI/FastCGI em um arquivo `.user.ini` . Isso é semelhante a um arquivo `.htaccess` para Apache, mas é exclusivo do PHP-FPM. O diretório em que o PHP é executado é verificado em busca de um arquivo `.user.ini` . Mais informações sobre esse recurso estão disponíveis na [documentação dos arquivos `user.ini` do PHP](http://php.net/manual/en/configuration.file.per-user.php).

    Altere o nome do aplicativo seguindo as etapas a seguir no diretório raiz da página da web.

    1. Crie o arquivo `.user.ini`

    2. Adicione a configuração que deseja alterar  
       `newrelic.appname = "New Appname"`

    3. Salve o arquivo.

       Por padrão, o <DNT>**`.user.ini` file**</DNT> é lido a cada cinco minutos, portanto não é necessário reiniciar

       Isso é útil nos seguintes cenários:

    4. A configuração do servidor não funciona. Na configuração NGINX/PHP-FPM, pode haver falta de comunicação entre FastCGI e PHP e as informações de  
       `fastcgi_param PHP_VALUE newrelic.appname="Appname"`  
       nunca chega ao PHP.

    5. O `.htaccess` não funciona, como onde o PHP é implementado com suPHP
  </Collapser>

  <Collapser
    id="PHP-FPM_nginix"
    title={<>Edite o <strong>arquivo de configuração do NGINX</strong>.</>}
  >
    <Callout variant="important">
      Esta seção se aplica apenas ao PHP 5.3.3 ou superior.
    </Callout>

    Aqui está um pequeno fragmento de um arquivo de configuração NGINX mostrando o procedimento geral para passar valores para seu gerenciador FastCGI com base em um local NGINX.

    ```nginx
    location /blog {
      fastcgi_param PHP_VALUE "newrelic.appname=My Blog";
      ...
    }

    location /shop {
      fastcgi_param PHP_VALUE "newrelic.appname=Shopping Cart";
      ...
    }

    location /admin{
      fastcgi_param PHP_VALUE "newrelic.enabled=false";
      ...
    }
    ```
  </Collapser>
</CollapserGroup>

## Outra opção: chamada de API [#api-calls]

Embora recomendemos alterar o nome do aplicativo com configurações INI globais ou por diretório, em alguns casos isso pode não ser possível. Por exemplo, as limitações do provedor podem impedir que você modifique os arquivos de configuração.

Outra opção é usar a chamada de API [`newrelic_set_appname()`](/docs/agents/php-agent/php-agent-api/newrelic_set_appname) . Para outras configurações que você pode modificar com a API, consulte [API do agente PHP](/docs/php/the-php-api).

Antes de começar, recomendamos que você leia as [diretrizes de chamada de API](/docs/apm/agents/php-agent/php-agent-api/newrelic_set_appname/#call-and-location-behavior) de [`newrelic_set_appname()`](/docs/agents/php-agent/php-agent-api/newrelic_set_appname) para garantir a captura mais completa do rastreamento de transação atribuído ao nome do seu aplicativo.

Se você não tiver acesso ao código do seu aplicativo ou se precisar isolar seus aplicativos em seus próprios hosts virtuais por outros motivos, use as seguintes configurações por diretório para substituir quaisquer [configurações do arquivo de configuração](/docs/agents/php-agent/configuration/php-agent-configuration).

## Nomes de aplicativos cumulativos [#perdir-rollup]

Se você quiser ter uma visão geral do desempenho do servidor em todos os hosts virtuais ou em todos os aplicativos, é conveniente poder reportar para mais de um aplicativo por vez. Por exemplo, reporte-se a um aplicativo específico de host virtual, bem como a um aplicativo roll-up.

Para fazer isso, defina mais de um nome de aplicativo para o parâmetro [`newrelic.appname`](/docs/php/php-agent-phpini-settings#inivar-appname) separando cada nome de aplicativo com ponto e vírgula. O nome do aplicativo principal é o primeiro e os nomes dos aplicativos secundários são os próximos. Você pode definir até dois nomes de aplicativos extras.

Por exemplo:

```ini
newrelic.appname="Virtual Host 1;All Virtual Hosts"
```

Isso se reportará a dois aplicativos New Relic: "Virtual Host 1" e "All Virtual Hosts".
