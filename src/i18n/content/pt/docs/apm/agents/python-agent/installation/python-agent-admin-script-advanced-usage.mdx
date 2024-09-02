---
title: 'Script de administração do agente Python: uso avançado'
tags:
  - Agents
  - Python agent
  - Installation
metaDescription: A summary of functions and commands available with the New Relic Python agent's newrelic-admin script.
freshnessValidatedDate: never
translationType: machine
---

O script de administração do agente Python é usado durante o [processo de instalação](/docs/apm/agents/python-agent/getting-started/introduction-new-relic-python/#installation). Quando o pacote do agente Python é instalado, o script `newrelic-admin` também é instalado no diretório `bin` da instalação do Python ou do ambiente virtual.

Este documento fornece detalhes mais detalhados sobre esses usos do script administrativo:

* Gerando o arquivo de configuração inicial do agente
* Validando seu arquivo de configuração
* Testando a conexão com o New Relic
* Preparando a inicialização do aplicativo web Python independente

## Estrutura de subcomando [#sub-commands]

Para executar subcomandos, forneça o nome do subcomando como primeiro argumento do script `newrelic-admin` . Em seguida, adicione quaisquer opções após o nome do subcomando. Por exemplo:

```shell
newrelic-admin help
```

## help &lt;command> [#help]

Quando executado sem argumentos adicionais, fornece uma lista de todos os subcomandos aceitos:

```shell
newrelic-admin help
[output]  Usage: newrelic-admin command [options]
[output]  
[output]  Type 'newrelic-admin help <command>'for help on a specific command.
[output]  
[output]  Available commands are:
[output]    generate-config
[output]    license-key
[output]    local-config
[output]    network-config
[output]    record-deploy
[output]    run-program
[output]    run-python
[output]    server-config
[output]    validate-config
```

Para visualizar detalhes adicionais sobre um subcomando, execute o comando de ajuda com o subcomando e qualquer uma de suas opções. Por exemplo:

```shell
newrelic-admin help generate-config
[output]  Usage: newrelic-admin generate-config license_key [output_file]
[output]  
[output]  Generates a sample agent configuration file for <license_key>.
```

## generate-config license_key \[output_file] [#generate-config]

Gera um arquivo de configuração de agente de amostra. A opção `license_key` é seu <InlinePopover type="licenseKey"/>.

Por padrão, o arquivo de configuração de amostra será direcionado para a saída padrão e exibido na tela. Para capturar a saída, você pode salvá-la em um arquivo fornecendo o nome do arquivo como a opção `output_file` .

Quando o arquivo de configuração do agente de amostra é gerado, apenas a opção de chave de licença no arquivo é atualizada. Você ainda deve editar o arquivo e fazer alterações nas opções `app_name` e `log_file` conforme apropriado. Para obter mais informações, consulte [Instalação do agente Python](/docs/python/python-agent-installation).

Se não for possível executar o comando `generate-config` para produzir o arquivo de configuração inicial do agente, você poderá fazer download de um arquivo de configuração de amostra em [download.newrelic.com/python_agent/release/newrelic.ini](https://download.newrelic.com/python_agent/release/newrelic.ini).

## validate-config config_file \[log_file] [#validate-config]

Valida a sintaxe de um arquivo de configuração de agente fornecido pela opção `config_file` .

Esta pode ser a configuração do agente gerada por `generate-config` e posteriormente editada ou um arquivo de configuração do agente criado ao fazer download do arquivo de configuração de amostra do site de download.

Além de validar a sintaxe do arquivo de configuração, usar o `license_key` contido no arquivo de configuração do agente para identificar sua conta também testará se uma conexão pode ser feita com nossos servidores.

Este subcomando pode, portanto, ser usado para garantir que o DNS esteja disponível para resolver o nome do host do nosso host coletor de dados e que haja conectividade de rede disponível e que nenhum firewall esteja bloqueando o acesso.

Ao conectar-se aos nossos servidores, o teste criará um aplicativo em sua conta chamado `Python Agent Test`. Nesta aplicação será reportada uma pequena quantidade de dados e erros simulados de transação da web. Após um período de tempo, este aplicativo em sua conta poderá ser excluído da lista <DNT>**Applications**</DNT> , se desejar.

Quando este teste for executado, um arquivo de log será criado no local:

```
/tmp/python-agent-test.log
```

Se precisar substituir esse local, você poderá fornecer a opção `log_file` . Para que o que seria gravado no arquivo de log seja exibido em sua tela, você pode usar `stdout` ou `stderr` como o valor passado como a opção `log_file` .

Ao usar um serviço de hospedagem como o Heroku, onde um arquivo de configuração do agente normalmente não seria usado, este subcomando ainda pode ser usado para testar a conexão conosco. Para o Heroku, as informações da chave de licença são definidas em uma variável de ambiente configurada automaticamente pelo Heroku quando você adiciona o complemento New Relic à sua instância do Heroku.

Neste caso em que uma variável de ambiente é usada para definir a chave de licença, para executar o teste de conectividade, passe o valor `-` para a opção `config_file` no lugar do caminho para o arquivo de configuração do agente. Então, para executar o comando na sua instância do Heroku você usaria:

```shell
heroku run newrelic-admin validate-config - stdout
```

Observe que fornecemos `stdout` para o arquivo de log neste caso, caso contrário seria necessário recuperar separadamente o arquivo de log gerado.

É recomendado que ao configurar o agente Python pela primeira vez, ou mesmo talvez em um novo host, que este subcomando seja usado para testar se os dados podem ser relatados corretamente. Para obter mais informações, consulte [Testando o agente Python](/docs/python/testing-the-python-agent).

## run-program ... [#run-program]

Executa a linha de comando para um aplicativo Web Python fornecido como `...` , mas força a inicialização do agente automaticamente na inicialização.

Este é um método de atalho para iniciar um aplicativo Web Python sem a necessidade de fazer alterações manualmente no aplicativo Web para adicionar código para inicializar especificamente o agente Python. Ele pode ser usado em qualquer situação em que uma framework da web Python ou um servidor WSGI seja usado, onde a instrumentação está sendo adicionada automaticamente para encapsular o ponto de entrada do aplicativo WSGI. Ou seja, em situações onde apenas o código de inicialização do agente precisava ser adicionado.

A configuração do agente ao usar este método pode ser fornecida de duas maneiras diferentes. Se estiver usando um arquivo de configuração de agente completo, o local dessa configuração poderá ser fornecido pela variável de ambiente `NEW_RELIC_CONFIG_FILE` .

Se você estivesse usando gunicorn, por exemplo, poderia dizer:

```ini
NEW_RELIC_CONFIG_FILE=newrelic.ini newrelic-admin run-program gunicorn wsgi:application
```

OU

```shell
NEW_RELIC_CONFIG_FILE=newrelic.ini
export NEW_RELIC_CONFIG_FILE

newrelic-admin run-program gunicorn wsgi:application
```

Ao especificar o local do arquivo de configuração usando a variável de ambiente `NEW_RELIC_CONFIG_FILE` , as seguintes variáveis de ambiente adicionais podem ser definidas para personalizar a forma como o arquivo de configuração é processado.

`NEW_RELIC_ENVIRONMENT`: O nome de um ambiente de implantação específico. Quando especificada, a configuração de substituição adicional será lida em uma seção de implantação separada no arquivo de configuração. A seção do arquivo de configuração para um ambiente de implantação específico deve ser nomeada como `newrelic:environment` onde `environment` é substituído pelo nome que está sendo especificado por esta variável de ambiente

No lugar de um arquivo completo de configuração do agente, você também pode definir variáveis de ambiente fornecendo apenas as principais informações de configuração do agente. As variáveis de ambiente que podem ser definidas neste caso são:

* `NEW_RELIC_LICENSE_KEY` - Sua New Relic

  <InlinePopover type="licenseKey"/>

  .

* `NEW_RELIC_APP_NAME` - O nome do aplicativo sobre o qual você deseja reportar dados na interface. Se não for definido, o padrão será `Python Application`.

* `NEW_RELIC_LOG` - O caminho para um arquivo a ser usado para o log do agente. Se não for definido, nenhum registro ocorrerá. Também pode ser definido como `stdout` ou `stderr` para que o registro vá para a saída padrão ou para o erro padrão do processo.

* `NEW_RELIC_LOG_LEVEL` - O nível em que o log será gerado pelo agente. Se não for definido, o padrão será `info`. Os valores possíveis, em ordem crescente de detalhes, são: `critical`, `error`, `warning`, `info` e `debug`.

Variáveis de ambiente individuais são usadas ao hospedar seu aplicativo no Heroku. As variáveis de ambiente serão definidas automaticamente conforme apropriado pelo ambiente Heroku quando você adicionar o complemento New Relic. Portanto, não é necessário, ao usar o Heroku, definir qualquer uma das variáveis de ambiente acima ao usar o comando `newrelic-admin` com esta opção do seu <DNT>**Procfile**</DNT>.

Observe que o programa empacotado deve usar a mesma instalação do Python ou ambiente virtual em que o pacote do agente Python e o script `newrelic-admin` foram instalados. Se este não for o caso, o script wrapper não terá efeito e você poderá até encontrar um erro na inicialização do interpretador Python devido ao pacote `newrelic` Python não ter sido encontrado.

Se estiver usando `sudo` para inicializar seu aplicativo WSGI como outro usuário, esteja ciente de que a configuração padrão <DNT>**sudo**</DNT> geralmente será tal que as variáveis de ambiente do usuário do shell no qual <DNT>**sudo**</DNT> é executado serão ignoradas. Nesse caso, você precisaria alterar a configuração <DNT>**sudoers**</DNT> para permitir a passagem de variáveis de ambiente específicas. Como alternativa, crie um script de shell que configure as variáveis de ambiente e execute seu aplicativo WSGI em `newrelic-admin`. Para iniciar seu aplicativo WSGI como um usuário diferente, execute <DNT>**sudo**</DNT> nesse script em vez de diretamente em seu aplicativo WSGI.

O uso de um script wrapper adicional para definir as variáveis de ambiente e executar seu aplicativo WSGI em `newrelic-admin` também pode ser necessário ao usar <DNT>**supervisord**</DNT> se algum problema for encontrado com configurações de variáveis de ambiente dentro da configuração de <DNT>**supervisord**</DNT> que não estão sendo transmitidas corretamente .

## run-python ... [#run-python]

Executa o executável `python` da instalação do Python ou do ambiente virtual em que `newrelic-admin` está instalado com os argumentos fornecidos como `...` , mas força a inicialização do agente automaticamente na inicialização.

Este é um método de atalho para iniciar um aplicativo Web Python sem a necessidade de fazer alterações manualmente no aplicativo Web para adicionar código para inicializar especificamente o agente Python. Ele pode ser usado em qualquer situação em que uma framework da web Python ou um servidor WSGI seja usado, onde a instrumentação está sendo adicionada automaticamente para encapsular o ponto de entrada do aplicativo WSGI. Ou seja, em situações onde apenas o código de inicialização do agente precisava ser adicionado.

Assim como no subcomando `run-program` acima, variáveis de ambiente são usadas para configurar o agente Python. Se você estivesse usando o executável `python` diretamente, por exemplo, você poderia dizer:

```ini
NEW_RELIC_CONFIG_FILE=newrelic.ini newrelic-admin run-python wsgi.py
```

OU

```shell
NEW_RELIC_CONFIG_FILE=newrelic.ini 
export NEW_RELIC_CONFIG_FILE 

newrelic-admin run-python wsgi.py
```

## license-key config_file \[log_file] [#license-key]

Produz a chave de licença que será usada. Isso pode ser usado em qualquer script de inicialização antes da inicialização do aplicativo WSGI real para log a chave de licença com a finalidade de verificar se o valor correto está sendo usado.

Pode ser usado com o arquivo de configuração do agente:

```shell
newrelic-admin license-key newrelic.ini
```

OU

Se estiver configurando a chave de licença usando variáveis de ambiente, use `-` como o nome do arquivo de configuração:

```shell
NEW_RELIC_LICENSE_KEY='YOUR-LICENSE-KEY'
export NEW_RELIC_LICENSE_KEY 

newrelic-admin license-key -
```

A saída estará no formato:

```ini
license_key = 'YOUR-LICENSE-KEY'
```

Se nenhuma chave de licença for encontrada no arquivo de configuração do agente ou obtida nas variáveis de ambiente do usuário, a saída será:

```ini
license_key = None
```

## network-config config_file \[log_file] [#network-config]

Produz a configuração de rede que será usada. Isso pode ser usado em qualquer script de inicialização antes da inicialização do aplicativo WSGI real para log a configuração da rede com a finalidade de verificar se os valores corretos estão sendo usados.

Pode ser usado com o arquivo de configuração do agente:

```shell
newrelic-admin network-config newrelic.ini
```

OU

Se estiver configurando qualquer informação de proxy usando variáveis de ambiente, use `-` como o nome do arquivo de configuração:

```shell
NEW_RELIC_PROXY_HOST=proxy.example.com
export NEW_RELIC_PROXY_HOST

NEW_RELIC_PROXY_PORT=8888
export NEW_RELIC_PROXY_PORT

newrelic-admin network-config -
```

A saída estará no formato:

```ini
host = 'collector.newrelic.com'
port = 0
proxy_host = 'proxy.example.com'
proxy_port = 8888
proxy_user = None
proxy_pass = None
ssl = True
```

Um valor `0` para porta indica que o número da porta, `80` ou `443`, será selecionado automaticamente com base no fato de uma conexão SSL estar sendo usada para comunicação com nosso coletor de dados.

## local-config config_file \[log_file] [#local-config]

Gera a configuração do agente local com base em padrões integrados, variáveis de ambiente e qualquer arquivo de configuração do agente. Essas informações podem ser solicitadas pelo nosso suporte técnico ao tentar depurar algum problema de inicialização do agente. Pode ser usado com o arquivo de configuração do agente:

```shell
newrelic-admin local-config newrelic.ini
```

OU

Se definir alguma configuração usando variáveis de ambiente, você poderá usar `-` como o nome do arquivo de configuração:

```shell
newrelic-admin local-config -
```

## server-config config_file \[log_file] [#server-config]

Produz a configuração completa para um aplicativo específico. Esta será a configuração do agente local, substituída por qualquer [configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/configure-agent#ssc) para a aplicação específica. Essas informações podem ser solicitadas pelo nosso suporte técnico ao tentar depurar algum problema de inicialização do agente.

Pode ser usado com o arquivo de configuração do agente:

```shell
newrelic-admin server-config newrelic.ini
```

OU

Se alterar alguma configuração usando variáveis de ambiente, você poderá usar `-` como o nome do arquivo de configuração:

```shell
newrelic-admin server-config -
```

Para obter a configuração no lado do servidor, este script forçará o registro do agente para o aplicativo específico definido pela configuração. Se esse aplicativo ainda não aparecer na interface do usuário do APM, uma entrada para ele será criada, mas nenhum dado métrico será reportado a ele.

## record-deploy config_file description [#record-deploy]

Este é um wrapper em torno da API REST do New Relic para registrar a implantação para sua aplicação. Você também pode registrar a implantação [diretamente via API REST](/docs/apm/new-relic-apm/maintenance/recording-deployments).

Para usar o comando:

1. Adicione sua [chave de API](/docs/apis/rest-api-v2/requirements/api-keys) no [arquivo de configuração do agente](/docs/agents/python-agent/installation-configuration/python-agent-configuration#agent-configuration-file) (`newrelic.ini`) adicionando uma linha semelhante à seguinte na seção `[newrelic]` :

   ```ini
   api_key=substitute-your-api-key-here
   ```

2. Chame o comando `newrelic-admin` na linha de comando. (Não adicione-o ao seu arquivo de configuração.) usando a seguinte estrutura de subcomando:

   ```shell
   newrelic-admin record-deploy config_file description [revision changelog user]
   ```

Este subcomando possui dois argumentos obrigatórios:

* `config_file`: Caminho para o nome do arquivo de configuração
* `description`: Texto para descrever ou identificar a implantação; por exemplo, os comentários de commit do Git

Existem também três argumentos opcionais:

* `revision`: Identifica uma revisão específica sendo implantada
* `changelog`: Fornece um log detalhado de quais alterações foram feitas
* `user`: Identifica a pessoa responsável pela implantação

## Outras dicas avançadas [#advanced-tips]

Aqui estão algumas instruções avançadas para executar o script administrativo:

<CollapserGroup>
  <Collapser
    id="multi-line"
    title="Dividindo o comando do script administrativo em várias linhas"
  >
    Você pode definir e exportar separadamente a variável de ambiente `NEW_RELIC_CONFIG_FILE` antes de executar o script. Certifique-se de substituir suas opções de comando existentes por `YOUR_COMMAND_OPTIONS`:

    ```shell
    NEW_RELIC_CONFIG_FILE=newrelic.ini
    export NEW_RELIC_CONFIG_FILE

    newrelic-admin run-program YOUR_COMMAND_OPTIONS
    ```

    Se o seu comando de inicialização usar `exec`, separe a configuração da variável de ambiente da execução do script administrativo. Certifique-se de substituir suas opções de comando existentes por `YOUR_COMMAND_OPTIONS`:

    ```shell
    NEW_RELIC_CONFIG_FILE=newrelic.ini
    export NEW_RELIC_CONFIG_FILE

    exec newrelic-admin run-program YOUR_COMMAND_OPTIONS
    ```

    Se você usar um sistema de gerenciamento de processos como <DNT>**supervisord**</DNT> em que as variáveis de ambiente devem ser definidas em uma definição de configuração separada, não será possível defini-las na mesma linha do comando.

    Por exemplo, em <DNT>**supervisord**</DNT> você pode usar o seguinte. Certifique-se de substituir suas opções de comando existentes por `YOUR_COMMAND_OPTIONS`.

    ```ini
    [program:warpdrive]
    command = newrelic-admin run-program YOUR_COMMAND_OPTIONS
    environment = NEW_RELIC_CONFIG_FILE=newrelic.ini
    ```
  </Collapser>

  <Collapser
    id="run-program"
    title="Executando script administrativo com executável Python"
  >
    Se o comando que está sendo executado for o executável `python` e estiver sendo executado diretamente em um arquivo de código Python como `python main.py`, use um dos seguintes:

    ```shell
    newrelic-admin run-program python main.py

    newrelic-admin run-python main.py
    ```

    Usar `run-python` sempre usará o mesmo executável `python` instalado na instalação do Python ou no ambiente virtual em que <DNT>**newrelic-admin**</DNT> está instalado.
  </Collapser>

  <Collapser
    id="location-admin"
    title="Notas sobre a localização do newrelic-admin"
  >
    O programa <DNT>**newrelic-admin**</DNT> que você executa deve vir da mesma instalação do Python ou do mesmo ambiente virtual que seu aplicativo está usando. Você não pode misturar programas/componentes de diferentes instalações do Python. Se isso for feito, o agente não será executado corretamente.

    Se você usar um sistema de gerenciamento de processos como <DNT>**supervisord**</DNT> em um ambiente virtual, poderá usar esta configuração:

    ```ini
    [program:warpdrive]
    command = newrelic-admin run-program  
    environment = PATH="/path/to/python/app/venv/bin",NEW_RELIC_CONFIG_FILE="newrelic.ini"
    directory = /path/to/python/app
    user = www-data
    ```

    Observe a variável de ambiente `PATH` que aponta para o mesmo caminho que seria usado pelo ambiente virtual.

    Para obter mais informações sobre essas opções para `newrelic-admin` e as diferentes opções de configuração com base nas variáveis de ambiente do usuário, consulte a documentação mais detalhada das opções `run-program` e `run-python` .
  </Collapser>
</CollapserGroup>
