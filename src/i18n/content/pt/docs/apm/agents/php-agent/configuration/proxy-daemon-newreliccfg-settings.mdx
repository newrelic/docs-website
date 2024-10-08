---
title: Daemon proxy (newrelic.cfg) configurações
tags:
  - Agents
  - PHP agent
  - Configuration
metaDescription: How to change configuration settings for New Relic's PHP proxy daemon (a process that acts as a communications proxy between the agent and the data collectors).
freshnessValidatedDate: never
translationType: machine
---

O daemon (`newrelic-daemon`) atua como um proxy entre o agente PHP e o coletor New Relic para reduzir o tráfego de rede e melhorar o tempo de resposta do aplicativo instrumentado. O processo daemon inicia quando o sistema é iniciado e deve estar em execução para que os dados sejam enviados para o New Relic.

## Configuração recomendada

A partir da versão 3.0 do agente PHP, o daemon pode ser configurado e iniciado automaticamente pelo agente. A configuração automática não requer o arquivo `newrelic.cfg` . Esta é a configuração recomendada.

No entanto, ainda existem alguns casos em que iniciar manualmente o daemon é útil. Para obter mais informações sobre o processo de inicialização, consulte [Modos de inicialização do daemon New Relic](/docs/agents/php-agent/installation/starting-php-daemon).

## Configuração manual [#proxy-settings]

Um arquivo de configuração do daemon de amostra foi criado durante a instalação. Para configurar manualmente o daemon, copie e renomeie `newrelic.cfg.template` de `/etc/newrelic/newrelic.cfg.template` para `/etc/newrelic/newrelic.cfg` e edite o arquivo. Todas as configurações são opcionais e a maioria possui valores padrão.

<Callout variant="important">
  O agente não iniciará automaticamente o daemon se encontrar um arquivo `newrelic.cfg` no diretório `/etc/newrelic/` .
</Callout>

<CollapserGroup>
  <Collapser
    id="cfgvar-logfile"
    title={<InlineCode>logfile</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `[none]`
          </td>
        </tr>
      </tbody>
    </table>

    Define o nome do arquivo de log a ser usado.

    Pode ser definido na linha de comando pela opção do daemon `-l` . Definir esse valor na linha de comando substituirá o valor definido em `newrelic.cfg` Embora o próprio daemon não forneça um nome padrão para o arquivo de log, o script de inicialização do daemon usa a opção <DNT>**-l**</DNT> para definir o local e o nome padrão como `/var/log/newrelic/newrelic-daemon.log`.
  </Collapser>

  <Collapser
    id="cfgvar-loglevel"
    title={<InlineCode>loglevel</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `info`
          </td>
        </tr>
      </tbody>
    </table>

    Define o nível de detalhe das mensagens enviadas para o [arquivo de log](#cfgvar-logfile). Este campo possui os mesmos valores possíveis do agente, que são, em ordem crescente de detalhe:

    * `error`

    * `warning`

    * `info`

    * `debug`

      Se você estiver tendo problemas com o daemon, configure o nível de log <DNT>**debug**</DNT> pelo menos por tempo suficiente para reproduzir o problema. Um arquivo de log <DNT>**debug**</DNT> geralmente é necessário para depurar problemas com o daemon de proxy.

      Pode ser definido na linha de comando usando a opção do daemon `--loglevel` . Definir este valor na linha de comando substituirá o valor definido em `newrelic.cfg`
  </Collapser>

  <Collapser
    id="cfgvar-ssl"
    title={<InlineCode>SSL</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `yes`
          </td>
        </tr>
      </tbody>
    </table>

    Esta definição de configuração está disponível apenas em versões do agente PHP inferiores a 8.0. As versões 8.0 e superiores ignorarão essa configuração e sempre usarão criptografia HTTPS para se comunicar com o New Relic.

    Quando definido como `yes`, o proxy usará apenas uma conexão segura para se comunicar com o coletor. Embora a configuração especifique SSL, a configuração refere-se à criptografia HTTPS de acordo com os padrões mais recentes do setor. O agente se comunica com o New Relic via HTTPS por padrão, e o New Relic requer HTTPS para todo o tráfego para o New Relic e para a API REST do New Relic.

    Pode ser ativado ou desativado na linha de comando pela opção do daemon `--tls` . Definir este valor na linha de comando substituirá o valor definido em `newrelic.cfg`
  </Collapser>

  <Collapser
    id="cfgvar-ssl-ca-bundle"
    title={<InlineCode>ssl_ca_bundle</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `""`
          </td>
        </tr>
      </tbody>
    </table>

    Define o local de um arquivo que contém certificados CA no formato PEM. Quando definidos, os certificados neste arquivo serão usados para autenticar o coletor New Relic. Na maioria dos casos, não será necessário configurar um pacote de CA. O agente PHP New Relic vem com os certificados CA necessários.

    Se [`ssl_ca_path`](#cfgvar-ssl-ca-path) também estiver definido (veja abaixo), os certificados neste arquivo serão pesquisados primeiro, seguidos pelos certificados contidos no diretório [`ssl_ca_path`](#cfgvar-ssl-ca-path) .

    Esta configuração não tem efeito quando [`ssl`](#cfgvar-ssl) está definido como `false`.
  </Collapser>

  <Collapser
    id="cfgvar-ssl-ca-path"
    title={<InlineCode>ssl_ca_path</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `""`
          </td>
        </tr>
      </tbody>
    </table>

    Define o local de um diretório que contém certificados de CA confiáveis no formato PEM. Quando definidos, os certificados neste diretório serão usados para autenticar o coletor New Relic. Na maioria dos casos não será necessário configurar um caminho de CA. O agente PHP New Relic vem com os certificados CA necessários.

    Se [`ssl_ca_bundle`](#cfgvar-ssl-ca-bundle) também estiver definido (veja acima), ele será pesquisado primeiro, seguido pelos certificados contidos em [`ssl_ca_path`](#cfgvar-ssl-ca-path).

    Esta configuração não tem efeito quando [`ssl`](#cfgvar-ssl) está definido como `false`.
  </Collapser>

  <Collapser
    id="cfgvar-proxy"
    title={<InlineCode>procurador</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `[none]`
          </td>
        </tr>
      </tbody>
    </table>

    Certos sites possuem firewall de saída muito restritivo e exigem que você use um proxy para se comunicar com o mundo exterior. Se isso se aplicar ao seu site, você precisará definir esse valor.

    O valor está no formato `scheme://user:password@hostname:port`.

    Os valores `scheme`, `user`, `password` e `port` podem ser omitidos dependendo da configuração do seu proxy. Por exemplo, se você estiver usando um proxy HTTP que não requer nome de usuário e senha, você pode simplesmente usar `hostname:port`. O padrão da porta é 1080 para a maioria dos proxies.

    Pode ser definido na linha de comando usando a opção do daemon `--proxy` . Definir este valor na linha de comando substituirá o valor definido em `newrelic.cfg`
  </Collapser>

  <Collapser
    id="cfgvar-port"
    title={<><InlineCode>
      address
    </InlineCode> (alias para <InlineCode>
      port
    </InlineCode>)</>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `/tmp/.newrelic.sock`
          </td>
        </tr>
      </tbody>
    </table>

    Define o endpoint do soquete que o daemon irá escutar. Este endpoint permite que o agente se comunique com o daemon. Este deve ser o mesmo valor da configuração [`newrelic.daemon.address`](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-daemon-port) do agente. Isso pode ser especificado destas maneiras:

    * Recomendado: para usar um arquivo especificado como um soquete de domínio UNIX (UDS), forneça um nome de caminho <DNT>**absolute**</DNT> como uma string.

    * Para usar uma porta TCP padrão, especifique um número no intervalo de `1` a `65534`.

    * Para usar um soquete abstrato, use o valor `@newrelic-daemon` (disponível para agente versão 5.2.0.141 ou superior).

    * Para ativar conexões de aplicativos que estão sendo executados em hosts diferentes (útil para [ambientes de contêiner](/docs/agents/php-agent/advanced-installation/install-php-agent-docker)), defina esse valor como `host:port`, onde `host` indica o nome do host ou endereço IP do host local e `port` indica uma porta válida número. Tanto IPv4 quanto IPv6 são suportados. Está disponível para o agente PHP versão 9.2.0.247 ou superior.

      Essas opções também podem ser definidas através da linha de comando usando a opção do daemon `--address` . Definir esse valor na linha de comando substituirá o valor definido em `newrelic.cfg`.
  </Collapser>

  <Collapser
    id="cfgvar-pidfile"
    title={<InlineCode>pidfile</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `/tmp/newrelic.pid`
          </td>
        </tr>
      </tbody>
    </table>

    Define o nome do arquivo no qual o daemon registrará seu ID de processo (pid).

    Embora o daemon defina isso com um valor padrão de `/tmp/newrelic.pid`, o script de inicialização quase sempre usa a opção `--pidfile` para defini-lo como `/var/run/newrelic-daemon.pid`.

    Pode ser definido na linha de comando usando a opção do daemon `--pidfile` . Definir este valor na linha de comando substituirá o valor definido em `newrelic.cfg`
  </Collapser>

  <Collapser
    id="cfgvar-auditlog"
    title={<InlineCode>auditlog</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `[none]`
          </td>
        </tr>
      </tbody>
    </table>

    Este recurso foi introduzido na versão 3.4. Quando habilitado, o agente criará um log de auditoria, que contém todos os dados enviados do daemon para o New Relic. Esses dados incluem o URL completo, a data, a hora e os dados não compactados e não codificados de cada solicitação. Isso permite observar exatamente quais dados são enviados para a New Relic para garantir que nenhum dado confidencial seja incluído.

    O arquivo especificado não pode ser o mesmo arquivo do log do daemon, conforme descrito acima. Esse log de auditoria pode ficar muito grande rapidamente, por isso a New Relic recomenda que você não o use por longos períodos de tempo.

    Pode ser definido na linha de comando usando a opção do daemon `--auditlog` . Definir este valor na linha de comando substituirá o valor definido em `newrelic.cfg`
  </Collapser>
</CollapserGroup>
