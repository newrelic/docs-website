---
title: Segurança de dados do agente APM
tags:
  - APM
  - Getting started
metaDescription: Learn about the default security settings for data reported by the APM agents and how you can change them.
freshnessValidatedDate: never
translationType: machine
---

O [agente](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#agent) APM que você instalou [recebe dados](#received) do seu aplicativo. A [retenção de dados](/docs/telemetry-data-platform/get-data-new-relic/manage-data/manage-retention-stored-data) padrão é baseada na sua edição de preços.

[As configurações de segurança padrão](#default) da New Relic funcionam automaticamente para garantir a privacidade dos dados e limitar o tipo de informação que a New Relic recebe. Você também pode alterar essas configurações.

## Divulgação e auditoria [#Disclosure_and_Audit]

Nosso agente APM é um plug-in de acesso público para aplicativo da web. O agente não gera nenhum código dinâmico enquanto se comunica com seu aplicativo, portanto, usar o agente não introduzirá nenhum código em seu aplicativo sem o seu conhecimento.

A maioria dos nossos agentes são de código aberto, então você pode ver o que nosso código faz:

* [Go](https://github.com/newrelic/go-agent)
* [.NET](https://github.com/newrelic/newrelic-dotnet-agent)
* [Node.js](https://github.com/newrelic/node-newrelic)
* [Python](https://github.com/newrelic/newrelic-python-agent)
* [Ruby](https://github.com/newrelic/newrelic-ruby-agent)

## Coleção de dados [#data_collection]

Usando um formato de mensagem JSON, os dados que o agente recebe do seu aplicativo são postados uma vez por minuto na interface do usuário do New Relic. O site retorna uma resposta JSON ao agente, indicando se os dados foram recebidos corretamente ou se houve algum erro.

A New Relic coleta os seguintes dados métricos agregados:

* Atividade de banco de dados
* Chamadas de serviço web externas
* Atividade de controlador e despacho
* Ver atividade
* Exceções e contagens não detectadas
* Memória de processo e uso de CPU

Esses dados métricos agregados resumem chamadas para métodos específicos em sua aplicação: quantas vezes cada um foi chamado e diversas estatísticas de tempo de resposta (média, mínimo, máximo e padrão Desvio). No New Relic, você verá os nomes das classes e métodos junto com seus números agregados.

A New Relic coleta opcionalmente:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Data collection**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Erros não detectados
      </td>

      <td>
        O New Relic captura o erro, bem como um stack trace de tempo de execução do código incorreto.
      </td>
    </tr>

    <tr>
      <td>
        Rastreamento da transação
      </td>

      <td>
        Estes são instantâneos de uma única transação. Opcionalmente, o agente também pode coletar os comandos de consulta chamados dentro da transação. A coleção padrão usa ofuscação para ocultar quaisquer strings ou números da consulta.

        Para transações mais lentas do que o limite definido, a New Relic também coleta dados do SQL `EXPLAIN`. Para chamadas de banco de dados mais lentas que um limite configurado, o New Relic coleta opcionalmente o rastreamento de pilha de tempo de execução, que é útil para identificar onde no código uma chamada de banco de dados é feita.
      </td>
    </tr>

    <tr>
      <td>
        Parâmetro personalizado
      </td>

      <td>
        Você pode adicionar parâmetros personalizados ao código do seu aplicativo e registrá-los com o trace da transação para fornecer contexto adicional enquanto você examina as informações de criação de perfil.
      </td>
    </tr>
  </tbody>
</table>

Opcional: Tanto para erros quanto para rastreamento da transação, o parâmetro da solicitação HTTP também pode ser registrado.

## Configurações de segurança [#security-modes]

Se quiser restringir as informações que o New Relic recebe, você pode ativar [o modo de alta segurança](#high-security). Se o modo de alta segurança ou as configurações padrão não funcionarem para suas necessidades comerciais, você poderá aplicar configurações [personalizadas](#custom) .

<CollapserGroup>
  <Collapser
    id="default"
    title="Configurações de segurança padrão"
  >
    Dependendo do agente, as configurações padrão fornecem segurança para parâmetro de solicitação, uso de HTTPS e SQL:

    * [Configurações de segurança padrão Go](/docs/agents/go-agent/get-started/apm-agent-security-go#default)
    * [Configurações de segurança padrão Java](/docs/agents/java-agent/getting-started/apm-agent-security-java#default)
    * [Configurações de segurança padrão do .NET](/docs/agents/net-agent/getting-started/apm-agent-security-net#default)
    * [Configurações de segurança padrão do Node.js.](/docs/agents/nodejs-agent/getting-started/apm-agent-security-nodejs#default)
    * [Configurações de segurança padrão do PHP](/docs/agents/php-agent/getting-started/apm-agent-security-php#default)
    * [Configurações de segurança padrão do Python](/docs/agents/python-agent/getting-started/apm-agent-security-python#default)
    * [Configurações de segurança padrão do Ruby](/docs/agents/ruby-agent/getting-started/apm-agent-security-ruby#default)
  </Collapser>

  <Collapser
    id="high-security"
    title="Modo de alta segurança"
  >
    Quando o agente está em [modo de alta segurança](/docs/agents/manage-apm-agents/configuration/high-security-mode), [as configurações padrão](#default) são bloqueadas para que o usuário não possa alterá-las.

    Além disso, o modo de alta segurança aplica restrições a evento personalizado, instrumentação personalizada, atributo de usuário, mensagens de exceção ou parâmetro de fila de mensagens, dependendo do agente:

    * [Configurações do modo de alta segurança Go](/docs/agents/go-agent/get-started/apm-agent-security-go#restricted)
    * [Configurações do modo de alta segurança Java](/docs/agents/java-agent/getting-started/apm-agent-security-java#restricted)
    * [Configurações do modo de alta segurança .NET](/docs/agents/net-agent/getting-started/apm-agent-security-net#restricted)
    * [Configurações do modo de alta segurança do Node.js](/docs/agents/nodejs-agent/getting-started/apm-agent-security-nodejs#restricted)
    * [Configurações do modo de alta segurança PHP](/docs/agents/php-agent/getting-started/apm-agent-security-php#restricted)
    * [Configurações do modo de alta segurança Python](/docs/agents/python-agent/getting-started/apm-agent-security-python#restricted)
    * [Configurações do modo de alta segurança Ruby](/docs/agents/ruby-agent/getting-started/apm-agent-security-ruby#restricted)
  </Collapser>

  <Collapser
    id="custom"
    title="Configurações de segurança personalizadas"
  >
    Se desejar configurações de segurança personalizadas, você pode personalizar o arquivo de configuração, alterar as configurações de atributo personalizado ou usar a API, dependendo do seu agente:

    * [Configurações de segurança personalizadas Go](/docs/agents/go-agent/get-started/apm-agent-security-go#custom)
    * [Configurações de segurança personalizadas Java](/docs/agents/java-agent/getting-started/apm-agent-security-java#custom)
    * [Configurações do modo de segurança personalizado do .NET](/docs/agents/net-agent/getting-started/apm-agent-security-net#custom)
    * [Configurações de segurança personalizadas do Node.js](/docs/agents/nodejs-agent/getting-started/apm-agent-security-nodejs#custom)
    * [Configurações de segurança personalizadas do PHP](/docs/agents/php-agent/getting-started/apm-agent-security-php#custom)
    * [Configurações de segurança personalizadas do Python](/docs/agents/python-agent/getting-started/apm-agent-security-python#custom)
    * [Configurações de segurança personalizadas Ruby](/docs/agents/ruby-agent/getting-started/apm-agent-security-ruby#custom)
  </Collapser>
</CollapserGroup>

## Dados recebidos pela New Relic [#received]

Estas informações se aplicam a todos os agentes APM, independentemente das configurações de segurança que você aplicou.

<Callout variant="important">
  Outros dados que a New Relic recebe são específicos das [configurações de segurança de cada agente](#security-modes).
</Callout>

<table>
  <thead>
    <tr>
      <th width="450px">
        Dados
      </th>

      <th>
        <DNT>
          **Captured?**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Versão do idioma do agente APM
      </td>

      <td>
        <Icon name="fe-check"/>
      </td>
    </tr>

    <tr>
      <td>
        Tipo e versão do sistema operacional
      </td>

      <td>
        <Icon name="fe-check"/>
      </td>
    </tr>

    <tr>
      <td>
        Propriedades do sistema
      </td>

      <td>
        <Icon name="fe-check"/>
      </td>
    </tr>

    <tr>
      <td>
        Tempo médio de resposta de transação em seu aplicativo
      </td>

      <td>
        <Icon name="fe-check"/>
      </td>
    </tr>

    <tr>
      <td>
        Acessos de URL
      </td>

      <td>
        <Icon name="fe-check"/>
      </td>
    </tr>

    <tr>
      <td>
        Endereço IP do cliente
      </td>

      <td>
        Não capturado
      </td>
    </tr>
  </tbody>
</table>

## TLS e SSL [#ssl]

[Nosso protocolo preferido para todos os domínios](/docs/apm/new-relic-apm/getting-started/networks#tls) é o TLS 1.2. agente APM habilita SSL por padrão. Para verificar qual versão inclui SSL por padrão e garantir que você tenha a versão mais atualizada, consulte as notas de versão do seu agente:

* [Go](/docs/release-notes/agent-release-notes/go-release-notes)
* [Java](/docs/release-notes/agent-release-notes/java-release-notes)
* [.NET](/docs/release-notes/agent-release-notes/net-release-notes)
* [Node.js](/docs/release-notes/agent-release-notes/nodejs-release-notes)
* [PHP](/docs/release-notes/agent-release-notes/php-release-notes)
* [Python](/docs/release-notes/agent-release-notes/python-release-notes)
* [Ruby](/docs/release-notes/agent-release-notes/ruby-release-notes)

O arquivo de configuração também inclui um sinalizador opcional (`ssl`) para ativar ou desativar SSL usando HTTPS. A New Relic não faz autenticação de host com HTTPS, apenas criptografia de comunicação.

A New Relic requer HTTPS para todo o tráfego para APM e API REST. Isso inclui tráfego de entrada e saída. Se sua [chamada de API REST usar HTTP](/docs/apis/rest-api-v2/troubleshooting/301-response-rest-api-calls) ou se você tiver desativado SSL em seu arquivo de configuração, altere seu script ou programa para HTTPS.

## Transmissão de dados [#data_transmission]

Em Java, .NET e PHP, New Relic usa JSON para serializar dados. O agente Ruby usa empacotamento Ruby ou serialização JSON para enviar dados para o New Relic, dependendo se um codificador JSON nativo está disponível na versão Ruby na qual o agente está sendo executado.

Para conhecer as alterações necessárias quando você deseja criar regras de firewall para permitir a comunicação do agente, consulte [Redes](/docs/apm/new-relic-apm/getting-started/networks). Para obter mais informações sobre medidas de segurança para seus dados em trânsito para a New Relic ou em repouso em nosso armazenamento, consulte [Criptografia de dados](/docs/security/new-relic-security/compliance/data-encryption).

## Proxies

Configurações opcionais estão disponíveis para que você possa configurar o agente para se comunicar por meio de um proxy. Para definir configurações de proxy para host, porta, domínio, usuário ou senha, consulte a documentação do arquivo de configuração do seu agente:

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        <DNT>
          **Agent**
        </DNT>
      </th>

      <th>
        <DNT>
          **Proxy settings**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Go
      </td>

      <td>
        [`transport`](/docs/agents/go-agent/instrumentation/go-agent-configuration#transport)
      </td>
    </tr>

    <tr>
      <td>
        Java
      </td>

      <td>
        Use `proxy` configurações, incluindo:

        * [`proxy_host`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-proxy_host)
        * [`proxy_password`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-proxy_password)
        * [`proxy_port`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-proxy_port)
        * [`proxy_user`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-proxy_user)
      </td>
    </tr>

    <tr>
      <td>
        .NET
      </td>

      <td>
        elemento [`proxy`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#proxy)
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        [`proxy`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#proxy)
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        [`newrelic.daemon.proxy`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-proxy) ou a configuração [`proxy`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-proxy) do daemon
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        [`proxy` configurações](/docs/agents/python-agent/installation-configuration/python-agent-configuration#proxy)
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        Use `proxy` configurações, incluindo:

        * [`proxy_host`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#proxy_host)
        * [`proxy_port`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#proxy_port)
        * [`proxy_user`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#proxy_user)
        * [`proxy_pass`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#proxy_pass)
      </td>
    </tr>
  </tbody>
</table>
