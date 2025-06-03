---
title: Configuración INI por directorio de PHP
tags:
  - Agents
  - PHP agent
  - Configuration
metaDescription: 'How to configure settings for your app per-directory; for example, a single web server for multiple apps or you need to adjust settings for specific apps.'
freshnessValidatedDate: never
translationType: machine
---

La mayoría de [las variables de configuración del agente PHP](/docs/php/php-agent-phpini-settings) se pueden configurar por directorio. Esta opción se utiliza a menudo cuando hay un único servidor web que sirve varias aplicaciones y desea ajustar la configuración (por ejemplo, el nombre de la aplicación) aplicación por aplicación.

El proceso para establecer valores por directorio depende del entorno. Este documento describe los tres entornos más comunes:

* [Apache](#perdir-apache)
* [PHP-FPM](#php-fpm_per-dir)
* [NGINX](#PHP-FPM_nginix)

Para conocer otras opciones de nombres de aplicaciones, consulte [Asigne un nombre a su aplicación PHP](/docs/agents/php-agent/configuration/name-your-php-application).

## Configuración por directorio de Apache para PHP [#perdir-apache]

Cuando se utiliza el módulo PHP, Apache proporciona dos mecanismos para configurar variables PHP fuera del archivo INI:

<CollapserGroup>
  <Collapser
    id="ini-apache"
    title={<>Edite el archivo <InlineCode>httpd.conf</InlineCode> o uno de los archivos que incluye.</>}
  >
    Utilice la sintaxis de los ejemplos del archivo INI cuando su servidor web ofrezca múltiples dominios. Para ver cada uno de estos dominios por separado en New Relic:

    1. Para su dominio principal, establezca `newrelic.appname = "My Main Domain"` en su archivo INI global.

    2. Anule el valor de cada uno de los hosts virtuales agregando `php_value` entradas como parte de la configuración de su host virtual.

       <Callout variant="important">
         Asegúrese de utilizar el nombre de módulo adecuado para su instalación de PHP. Reemplace `PHP_MODULE` en los ejemplos siguientes con el nombre del módulo PHP5 instalado. Este nombre depende de la distribución de Linux y/o PHP que se utilice. Por ejemplo, los nombres comunes incluyen `php5_module`, `mod_php5`, `php_module`, etc. Las mayúsculas pueden variar.
       </Callout>

       Para los servidores Apache, puede encontrar los nombres de los módulos de una de las siguientes maneras. Cada uno generará una lista de módulos instalados.

    * Desde la línea de comando, ejecute:

      ```bash
      apachectl -t -D DUMP_MODULES
      ```

      <DNT>
        **OR**
      </DNT>

    * Desde dentro de una página web, utilice:

      ```php
      <?php
        print_r(apache_get_modules());
      ?>
      ```

      <CollapserGroup>
        <Collapser
          id="separating-domains"
          title="Configuración del nombre de la aplicación por dominio"
        >
          A continuación se muestra un ejemplo de separación de dominios, donde `PHP_MODULE` es el nombre de su módulo PHP5.

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

          En el ejemplo anterior, `newrelic.appname` se establece en un valor diferente para cada host virtual.
        </Collapser>
      </CollapserGroup>

      Para valores de cadena y numéricos, utilice `php_value name VALUE`, donde:

    * `name` es el nombre de la configuración INI a modificar como se indica en la [configuración INI de PHP](/docs/php/php-agent-phpini-settings).

    * `VALUE` es el valor que desea establecer para ese host virtual en particular.

      Asegúrese de incluir los valores de cadena entre comillas `"`.

      Si desea cambiar una configuración booleana, use la sintaxis `php_flag name VALUE`, donde `name` es el nombre de la variable que figura en la [configuración INI de PHP](/docs/php/php-agent-phpini-settings) y `VALUE` es `on` o `off`.

      Para deshabilitar completamente el agente New Relic para un host virtual, use un indicador booleano:

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
    title={<>Edite el archivo <InlineCode>.htaccess</InlineCode> .</>}
  >
    Utilice la sintaxis de los ejemplos del archivo INI dentro de un archivo `.htaccess` . Por ejemplo:

    ```apacheconf
    php_value newrelic.appname "My Blog App"
    ```

    Esto le permite controlar la configuración por directorio desde dentro de los directorios.

    En este ejemplo, su servidor web tiene su raíz de documentos en `/data/webroot`. También tienes dos subdirectorios para aplicaciones especializadas:

    * Su

      <DNT>
        **`/data/webroot/blog`**
      </DNT>

      contiene una aplicación de blog.

    * Su `/data/webroot/shop` contiene una aplicación de carrito de compras.

    Para que las tres partes de su sitio se informen como aplicaciones distintas en la UI de New Relic:

    1. Establezca el nombre de su aplicación principal en su archivo INI.
    2. Anule ese nombre utilizando un archivo `.htaccess` en cada uno de los directorios especializados.

    Cualquier parte de su servidor web (por ejemplo, `/data/webroot/something`) que no tenga un archivo `.htaccess` específico utilizará el nombre de la aplicación global definido en el archivo INI.

    <Callout variant="important">
      El archivo `.htaccess` debe estar en el directorio de nivel superior de esa aplicación. Los objetos en ese directorio, o sus subdirectorios, usarán el valor especificado en el archivo `.htaccess` .
    </Callout>

    Para obtener más información sobre el uso y la protección de archivos <DNT>**`.htaccess`**</DNT> , consulte el [tutorial del servidor HTTP Apache](http://httpd.apache.org/docs/2.2/howto/htaccess.html "El enlace se abre en una ventana nueva.").
  </Collapser>
</CollapserGroup>

## Configuración por directorio de PHP-FPM [#php-fpm_per-dir]

El Administrador de procesos FastCGI (<DNT>**PHP-FPM**</DNT>) está dedicado a PHP. Genera una serie de procesos de trabajo que esperan solicitudes. Aumenta el rendimiento al no reinicializar el motor PHP en cada invocación, lo que permite que cada proceso maneje una cantidad de solicitudes antes de reciclarse.

Para obtener más información sobre PHP-FPM, consulte [la página acerca de PHP-FPM](http://php-fpm.org/about/ "El enlace se abre en una ventana nueva.") y [FastCGI Process Manager](http://www.php.net/manual/en/install.fpm.php "El enlace se abre en una ventana nueva.") en [php.net](http://www.php.net/ "El enlace se abre en una ventana nueva.").

Cuando se utiliza PHP-FPM, existen dos mecanismos para configurar variables PHP fuera del archivo INI y una técnica especial para <DNT>**NGINX**</DNT>:

<CollapserGroup>
  <Collapser
    id="perdir-fpm"
    title={<>Edite la configuración por directorio <strong>del grupo PHP-FPM</strong></>}
  >
    <Callout variant="important">
      Cambiar variables por directorio puede ser más difícil si usa <DNT>**PHP-FPM**</DNT>. Debe utilizar varios grupos PHP-FPM, uno para cada host virtual o aplicación única.
    </Callout>

    Un <DNT>**pool**</DNT> es un conjunto dedicado de trabajadores secundarios que solo atenderá solicitudes para ese grupo. Debido a que requiere hijos trabajadores dedicados, PHP-FPM escala mal si tiene una gran cantidad de hosts virtuales o aplicaciones para las que desea configurar opciones individuales.

    Para configurar PHP-FPM por directorio:

    1. Establezca el nombre de la aplicación principal en el archivo INI.

    2. Configure dos grupos para las dos aplicaciones adicionales.

    3. Anule la configuración del nombre de la aplicación en esos grupos.

       Cada grupo debe tener un mecanismo de conexión único (para que pueda identificar qué grupo usar en el archivo de configuración de su servidor web). A continuación se muestra un ejemplo de `php-fpm.conf`:

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

       El formato general de la configuración de las variables por grupo es `php_value[name] = VALUE` para variables numéricas o de cadena, o `php_flag[name] = VALUE` para valores booleanos. Siempre coloque los valores de cadena entre comillas `"`. Los valores booleanos deben ser `on` o `off`.

       Una vez configurado el archivo de configuración, se debe indicar al servidor web que utilice los diferentes grupos para diferentes partes del sitio web. Para obtener más información, consulte la documentación de su servidor web.
  </Collapser>

  <Collapser
    id="PHP-FPm_user_ini"
    title={<>Cree un archivo <InlineCode>.user.ini</InlineCode> .</>}
  >
    Puede utilizar la sintaxis del ejemplo del archivo INI para CGI/FastCGI en un archivo `.user.ini` . Es similar a un archivo `.htaccess` para Apache pero es exclusivo de PHP-FPM. El directorio en el que se ejecuta PHP se analiza en busca de un archivo `.user.ini` . Más información sobre esta característica está disponible en la [documentación de los archivos PHP `user.ini` ](http://php.net/manual/en/configuration.file.per-user.php).

    Cambie el nombre de la aplicación siguiendo los siguientes pasos en el directorio raíz de la página web.

    1. Crea el archivo `.user.ini`

    2. Añade la configuración que deseas cambiar  
       `newrelic.appname = "New Appname"`

    3. Guarda el archivo.

       De forma predeterminada, el <DNT>**`.user.ini` file**</DNT> se lee cada cinco minutos, por lo que no es necesario reiniciar

       Esto es útil en los siguientes escenarios:

    4. La configuración del servidor no funciona. En la configuración NGINX/PHP-FPM, puede haber una falta de comunicación entre FastCGI y PHP y la información de  
       `fastcgi_param PHP_VALUE newrelic.appname="Appname"`  
       nunca llega a PHP.

    5. El `.htaccess` no funciona, como cuando PHP está implementado con suPHP
  </Collapser>

  <Collapser
    id="PHP-FPM_nginix"
    title={<>Edite el <strong>archivo de configuración de NGINX</strong>.</>}
  >
    <Callout variant="important">
      Esta sección se aplica sólo a PHP 5.3.3 o superior.
    </Callout>

    Aquí hay un pequeño fragmento de un archivo de configuración de NGINX que muestra el procedimiento general para pasar valores a su administrador FastCGI en función de una ubicación de NGINX.

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

## Otra opción: llamada API [#api-calls]

Aunque recomendamos cambiar el nombre de la aplicación con la configuración INI global o por directorio, en algunos casos esto puede no ser posible. Por ejemplo, las limitaciones del proveedor pueden impedirle modificar los archivos de configuración.

Otra opción es utilizar la llamada API [`newrelic_set_appname()`](/docs/agents/php-agent/php-agent-api/newrelic_set_appname) . Para conocer otras configuraciones que puede modificar con la API, consulte [API del agente PHP](/docs/php/the-php-api).

Antes de comenzar, le recomendamos leer las [pautas de la API de llamada](/docs/apm/agents/php-agent/php-agent-api/newrelic_set_appname/#call-and-location-behavior) para [`newrelic_set_appname()`](/docs/agents/php-agent/php-agent-api/newrelic_set_appname) para garantizar la captura más completa de la traza de la transacción asignada al nombre de su aplicación.

Si no tiene acceso al código de su aplicación, o si necesita aislar sus aplicaciones en sus propios hosts virtuales por otros motivos, utilice las siguientes configuraciones por directorio para anular cualquier [configuración del archivo de configuración](/docs/agents/php-agent/configuration/php-agent-configuration).

## Nombres de aplicaciones acumuladas [#perdir-rollup]

Si desea tener una visión general del rendimiento del servidor en todos los hosts virtuales o en todas las aplicaciones, es conveniente poder informar a más de una aplicación a la vez. Por ejemplo, informe a una aplicación específica de host virtual, así como a una aplicación acumulativa.

Para ello, establezca más de un nombre de aplicación para el parámetro [`newrelic.appname`](/docs/php/php-agent-phpini-settings#inivar-appname) separando cada nombre de aplicación con un punto y coma. El nombre de la aplicación principal es el primero y el nombre de la aplicación secundaria es el siguiente. Puede definir hasta dos nombres de aplicaciones adicionales.

Por ejemplo:

```ini
newrelic.appname="Virtual Host 1;All Virtual Hosts"
```

Esto informará a dos aplicaciones New Relic: "Virtual Host 1" y "All Virtual Hosts".

<Callout variant="important">
  Esta característica sólo está disponible en las versiones 2.4 o superiores del agente PHP.
</Callout>
