---
title: Nome do host logic em Java
tags:
  - Agents
  - Java agent
  - Configuration
metaDescription: The Java agent automatically assigns a hostname to your app. You can decorate this hostname with a display name in the New Relic UI.
freshnessValidatedDate: never
translationType: machine
---

O agente Java atribui automaticamente um nome `host:port` às suas JVMs. Se o nome padrão não for útil, você poderá [definir um nome de exibição](#display-name) para distinguir suas JVMs na interface do New Relic. Para estrutura suportada, o agente Java usa o [nome da instância](#instance-names) em vez do nome de exibição.

O agente Java identifica exclusivamente o agente em execução [por seu host, porta e despachante](#unique-identifier), independentemente do ambiente usado.

## Nomes de exibição [#display-name]

Se o rótulo `host:port` padrão na interface do APM não for útil, você poderá decorar esse nome na interface do New Relic com um [nome de exibição](/docs/apm/new-relic-apm/maintenance/add-rename-remove-hosts#display_name). Defina o nome de exibição por meio [de configuração](/docs/agents/java-agent/configuration/java-agent-configuration-config-file), em uma variável de ambiente ou em seu arquivo de configuração <DNT>**newrelic.yml**</DNT> . A variável de ambiente tem precedência sobre o valor do arquivo de configuração. Depois que a JVM for reiniciada e o agente Java reportar novamente, o nome de exibição será exibido na lista da JVM, conforme visto no exemplo abaixo, além de `host:port`.

Para definir um nome de exibição:

* Defina a variável de ambiente [`NEW_RELIC_PROCESS_HOST_DISPLAY_NAME`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#NEW_RELIC_PROCESS_HOST_DISPLAY_NAME) .  
  OU

* Defina [`process_host.display_name`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#display_name) em seu

  <DNT>
    **newrelic.yml**
  </DNT>

  .

Reinicie sua JVM para ver suas alterações na interface do New Relic.

<Callout variant="tip">
  Você também pode definir o nome de exibição com uma [propriedade do sistema](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#System_Properties).
</Callout>

<img
  title="display_name example"
  alt="upload.png"
  src="/images/apm_screenshot-crop_java-edit-host-name.webp"
/>

## Nomes de instância

Para o usuário WebSphere e WebLogic, o agente Java também relata o nome da instância para cada instância ativa do servidor de aplicativos, que é visível na página <DNT>**Settings > Environment**</DNT> do APM. Geralmente, esse nome é fornecido pelo servidor de aplicativos. Se um nome de instância for definido, ele será usado em vez do nome de exibição na interface do New Relic.

## Precedência lógica do nome do host [#precedence]

Se houver diversas configurações de nome do host (por exemplo, você usa o WebSphere e também define a propriedade `display_name` ), o agente usa esta precedência:

* `display_name` substitui o nome padrão e os nomes de instância do WebSphere e WebLogic.
* Os nomes de instância do WebSphere e WebLogic substituem o nome padrão.
* O nome padrão (`host:port`) tem precedência mais baixa.

## Hosts e identificador de agente exclusivo [#unique-identifier]

O agente Java usa hosts, portas e despachantes para identificar exclusivamente diversas JVMs que se reportam ao mesmo nome de aplicativo. Vários agentes em execução no mesmo servidor são, portanto, relatados separadamente, desde que suas portas ou nomes de despachantes sejam diferentes.

O identificador exclusivo é baseado nos seguintes valores:

* <DNT>
    **Host**
  </DNT>

  : um identificador para o servidor pai do seu aplicativo derivado do sistema operacional. Este valor não é configurável pelo agente Java.

* <DNT>
    **Port**
  </DNT>

  : a porta associada ao servidor de aplicativos. Se o agente não conseguir determinar o número da porta ou se seu aplicativo não estiver em execução em um servidor de aplicativos, o padrão será

  <DNT>
    **0**
  </DNT>

  . Este valor é configurável pelo usuário.

* <DNT>
    **Dispatcher Name**
  </DNT>

  : o nome do servidor de aplicativos. Por exemplo, Apache Tomcat, Glassfish ou WebLogic. Se não houver nenhum servidor de aplicativos ativo, o padrão será

  <DNT>
    **Unknown**
  </DNT>

  .
