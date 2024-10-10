---
title: 'Integração no host: legado configuração formato'
tags:
  - Create integrations
  - Infrastructure Integrations SDK
  - Specifications
freshnessValidatedDate: never
translationType: machine
---

A integração New Relic Infrastructure [nenhum host](/docs/integrations/host-integrations/getting-started/introduction-host-integrations) pode usar um dos dois tipos de [formatos de configuração](/docs/integrations/integrations-sdk/file-specifications/config-file-overview). Este documento explica o formato de configuração legado mais antigo.

<Callout variant="important">
  A New Relic recomenda usar o novo [formato de configuração padrão aprimorado](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-standard-configuration-format). Para atualizar seu arquivo de configuração para este novo formato, verifique a [seção de atualização](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-standard-configuration-format#update)
</Callout>

Para obter uma introdução à configuração, consulte [Visão geral da configuração](/docs/integrations/integrations-sdk/file-specifications/config-file-overview).

## Estrutura do arquivo de configuração [#structure]

Uma integração no host que usa o formato de configuração padrão requer dois arquivos de configuração:

* Um [arquivo de definição](#definition-file)
* Um [arquivo de configuração](#config-file)

## Arquivo de definição

O arquivo de definição possui um formato de nomenclatura como `INTEGRATION_NAME-definition.yml`. Este arquivo fornece informações descritivas sobre a integração, tais como: a versão do protocolo JSON que suporta, uma lista de comandos que pode executar e argumentos que aceita. Ele reside neste diretório:

* Linux:

  ```
  /var/db/newrelic-infra/newrelic-integrations
  ```

* Windows:

  ```
  C:\Program Files\New Relic\newrelic-infra\newrelic-integrations
  ```

Aqui está um exemplo de arquivo de definição de integração NGINX com duas seções de comando em um sistema Linux:

```
name: com.myorg.nginx
protocol_version: 2
description: Collect metric and configuration data from NGINX
os: linux
commands:
  metrics:
    command:
      - myorg-nginx
      - --metrics
    interval: 15
  inventory:
    command:
      - myorg-nginx
      - --inventory
    interval: 120
    prefix: integration/myorg-nginx
```

Um arquivo de definição pode ser dividido em duas partes:

* O [cabeçalho](#def-header)
* A [seção de comandos](#def-commands)

### Cabeçalho do arquivo de definição [#def-header]

Aqui estão as explicações dos elementos de cabeçalho de um arquivo de definição:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo de cabeçalho de definição
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `name`
      </td>

      <td>
        Obrigatório. Um nome exclusivo `name` para identificar a integração para registro, métrica interna, etc. Quando o agente carrega o arquivo de configuração, o New Relic usa o `name` para procurar a integração no registro do agente.
      </td>
    </tr>

    <tr>
      <td>
        `protocol_version`
      </td>

      <td>
        Obrigatório. O número da versão do protocolo. A New Relic usa isso para garantir a compatibilidade entre a integração e o agente. Caso o agente não reconheça a versão de uma integração, ele filtrará essa integração e criará uma mensagem do log.

        A versão atual do protocolo JSON é `2`. Para obter mais informações sobre alterações de protocolo, consulte [Alterações no SDK](/docs/integrations/integrations-sdk/getting-started/compatibility-requirements-infrastructure-integrations-sdk#change-log).
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        Opcional. Explicação amigável sobre o que a integração faz.
      </td>
    </tr>

    <tr>
      <td>
        `os`
      </td>

      <td>
        Opcional. O sistema operacional onde a integração é executada. New Relic usa isso para filtrar integrações que você pretende rodar apenas em sistemas operacionais específicos.

        Padrão: execute a integração independentemente do valor `os` .

        Para restringir a integração a um sistema operacional específico, use uma destas opções:

        * `linux`
        * `windows`
      </td>
    </tr>
  </tbody>
</table>

### Comandos de arquivo de definição [#def-commands]

Após o cabeçalho há uma lista de comandos. A seção de comandos define:

* Um ou mais modos operacionais independentes para o executável
* Os dados de tempo de execução necessários para que ele seja executado

A seção de comandos é um mapa YAML de definições de comando, onde cada chave é o nome alternativo exclusivo do comando no arquivo de configuração da integração que especifica o executável a ser executado.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Comandos de definição
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `command`
      </td>

      <td>
        Obrigatório. A linha de comando real a ser executada como uma matriz YAML de partes de comando. Eles são montados para executar o comando real. Para comandos simples, a matriz pode ser apenas um elemento.

        Regras de comando adicionais incluem:

        * `command` argumentos: O comando e quaisquer argumentos de linha de comando que são compartilhados para todas as instâncias da integração configuração.

        * `command` execução: O comando será executado no mesmo diretório do arquivo de definição.

        * `command` path: Qualquer comando disponível no `$PATH` do host pode ser usado. Os executáveis localizados no mesmo diretório do arquivo de definição, ou em um subdiretório dele, podem ser executados usando um caminho relativo. Por exemplo:

          * <DNT>**Linux:**</DNT> Para executar um executável chamado `myorg-nginx` no mesmo diretório do arquivo de definição, você pode usar `myorg-nginx` ou `./myorg-nginx`. Os sistemas Linux executarão `myorg-nginx` como se o usuário usasse `./myorg-nginx`.
          * <DNT>**Windows:**</DNT> Para executar um executável chamado `myorg-nginx.exe` no mesmo diretório do arquivo de definição, você pode usar `\myorg-nginx.exe` ou `.\myorg-nginx.exe`. A escrita `myorg-nginx.exe` dos sistemas Windows será executada como se indicasse o caminho atual: `.\myorg-nginx.exe`.
          * Para usar um comando instalado dentro de um diretório no `$PATH` do host, basta usar o nome do comando. Exemplo `python`.
          * Para executar qualquer outro executável que não esteja no `$PATH` do host nem no diretório da integração, use um caminho absoluto para o executável. Exemplo `/opt/jdk/bin/java`.

          Se o nome do executável fornecido existir no diretório da integração, mas também existir em outro lugar no sistema `$PATH`, a versão no diretório da integração terá precedência.
      </td>
    </tr>

    <tr>
      <td>
        `interval`
      </td>

      <td>
        Opcional. O número de segundos entre duas execuções consecutivas do comando, em particular entre o final da execução anterior e o início da próxima execução.

        * Padrão para sondagem métrica: 30 segundos.
        * Mínimo (piso): 15 segundos.
        * Alertas: Para métricas utilizadas para alertas, utilize intervalo de 30 segundos ou menos.
      </td>
    </tr>

    <tr>
      <td>
        `prefix`
      </td>

      <td>
        Opcional. A categorização do inventário no formato `category/short_integration_name`. Exemplo `integration/myorg-nginx`.

        O prefixo não é um caminho específico da plataforma. A barra é o separador correto entre a categoria e `short_integration_name`.

        O prefixo pode ter no máximo dois níveis. Caso contrário, o inventário não será reportado.

        Valor padrão se não for definido: `integration/integration_name`.
      </td>
    </tr>
  </tbody>
</table>

## Arquivo de configuração [#config-file]

O [arquivo de configuração](/docs/infrastructure/infrastructure-integrations/custom-integrations/create-integration-config-file) possui um formato de nomenclatura como `INTEGRATION_NAME-config.yml`. Este arquivo especifica quais executáveis serão executados e os parâmetros necessários para executá-los. Ele reside neste diretório:

* Linux:

  ```
  /etc/newrelic-infra/integrations.d/
  ```

* Windows:

  ```
  C:\Program Files\New Relic\newrelic-infra\integrations.d
  ```

<Callout variant="tip">
  Recomendamos [lintar](http://www.yamllint.com/) os arquivos de configuração YAML antes de usá-los para evitar problemas de formatação.
</Callout>

Aqui está um exemplo de arquivo de configuração com uma instância definida. As explicações desses campos são explicadas abaixo do exemplo.

```
integration_name: com.myorg.nginx
instances:
  - name: nginx1.myorg.com-metrics
    command: metrics
    arguments:
      status_url: http://127.0.0.1/status
    labels:
      environment: production
      role: load_balancer
```

Outro exemplo de arquivo de configuração com duas instâncias definidas.

```
integration_name: com.myorg.nginx
instances:
  - name: nginx1.myorg.com-metrics
    command: metrics
    arguments:
      status_url: http://one.url/status
    labels:
      environment: production
      role: load_balancer
 - name: nginx2.myorg.com-metrics
   command: metrics
   arguments:
     status_url: http://another.url/status
   labels:
     environment: production
     role: load_balancer
```

### Definições de campo do arquivo de configuração [#config-fields]

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo do arquivo de configuração
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `integration_name`
      </td>

      <td>
        Obrigatório. Este é o cabeçalho e é usado para identificar quais executáveis serão executados. Esse nome deve corresponder exatamente ao nome especificado no [arquivo de definição](#definition-file) da integração.

        Recomendação: Para garantir nomes exclusivos, use a notação reversa de nome de domínio.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        Obrigatório. Este é o nome da invocação específica (instância) da integração. Isto é usado para ajudar a identificar qualquer mensagem do log gerada por esta integração e também é útil para [resolução de problemas](/docs/infrastructure/new-relic-infrastructure/troubleshooting/generate-logs-troubleshooting-infrastructure).
      </td>
    </tr>

    <tr>
      <td>
        `command`
      </td>

      <td>
        Obrigatório. Este é o comando a ser executado. Deve corresponder exatamente a um dos nomes de alias exclusivos especificados no [arquivo de definição](/docs/infrastructure/integrations-sdk/file-specifications/integration-definition-file-specifications) da integração.
      </td>
    </tr>

    <tr>
      <td>
        `arguments`
      </td>

      <td>
        Opcional. Um objeto YAML onde:

        * Chaves: O nome do argumento. Transformado em maiúsculas quando definido como variável de ambiente.

        * Valores: os valores do argumento. Passado como está.

          Os argumentos são disponibilizados para uma integração como um conjunto de variáveis de ambiente.

          Os argumentos no arquivo de configuração não podem ser maiúsculos e devem usar sublinhados para separar palavras.
      </td>
    </tr>

    <tr>
      <td>
        `labels`
      </td>

      <td>
        Opcional. Um objeto YAML onde:

        * Chaves: O nome do rótulo.
        * Valores: o valor do rótulo definido.
      </td>
    </tr>

    <tr>
      <td>
        `integration_user`
      </td>

      <td>
        Opcional. String com o nome que o agente utilizará para executar o binário de integração.

        Padrão: depende de `usermode`. Por padrão, a integração é executada com o mesmo usuário que está executando a integração agente, nri-agente para modo privilegiado e não privilegiado e usuário root para modo root.

        Quando presente, o agente de infraestrutura executará o binário de integração como o usuário especificado. Por exemplo, para executar o binário de integração como usuário root ao executar o agente em um `usermode` diferente de `root`, basta adicionar `integration_user: root` ao arquivo de configuração.
      </td>
    </tr>
  </tbody>
</table>
