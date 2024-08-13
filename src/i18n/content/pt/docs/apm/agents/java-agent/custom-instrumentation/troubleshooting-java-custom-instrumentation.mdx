---
title: Resolução de problemas Java instrumentação personalizada
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: Troubleshooting tips when using custom instrumentation with your New Relic Java agent.
freshnessValidatedDate: never
translationType: machine
---

Aqui estão algumas dicas de resolução de problemas para [instrumentação personalizada com o agente Java da New Relic](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation).

## Opções de interface

Você pode usar a interface do New Relic para [definir regras de instrumentação](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-quickly-customize-your-java-instrumentation) com o Editor de instrumentação personalizada ou editar seu arquivo XML através do <DNT>**Settings**</DNT> do seu aplicativo Java.

<DNT>**Java apps only:**</DNT> Para editar seu arquivo XML diretamente da interface do New Relic: Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Java app) > Settings > Live Instrumentation**</DNT>. A partir daqui você pode:

* Baixe um arquivo XML de amostra.
* Selecione um arquivo XML existente para edição.
* Pesquise o histórico de instrumentação.

## Transação aninhada no thread profiler [#thread-profiler]

A instrumentação personalizada é útil para transações aninhadas. No thread profiler, os métodos com ícones cinza ao lado não podem ser instrumentados porque isso resultaria em sobrecarga inaceitável. Contudo, filhos desses métodos costumam ser instrumentados.

<img
  title="Thread profiler: Nested transactions colors"
  alt="Thread profiler: Nested transactions colors"
  src="/images/apm_screenshot-crop_Java-custom-instrumentation-colors.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Thread profiler:**</DNT> Um ícone cinza significa que não pode ser instrumentado. Um ícone branco significa que não é instrumentado, mas pode ser instrumentado. Um ícone azul significa que está instrumentado no momento.
</figcaption>

Para identificar os métodos que você pode usar, expanda a árvore de perfis do thread até encontrar um método adequado:

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Thread profiler**
   </DNT>

   .

2. Expanda a árvore de perfis de thread até encontrar um método adequado.

3. Siga [os procedimentos padrão](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-quickly-customize-your-java-instrumentation) para definir e implantar instrumentação personalizada.

## Classes e métodos [#classes-methods]

Ao resolver problemas de instrumentação personalizados para seu agente Java, compare as informações `pointcut` em seu arquivo de configuração `newrelic.yml` com mensagens de confirmação em seu [arquivo de log](/docs/agents/java-agent/troubleshooting/generating-logs-troubleshooting-java). Verifique se as classes e os métodos correspondem.

Aqui está um exemplo:

```xml
# This is a pointcut example in your newrelic.yml config file:
<pointcut transactionStartPoint="true">
  <className>com.example.class.name</className>
  <method>
    <name>exampleMethod</name>
  </method>
</pointcut>
```

Se isso estiver sendo instrumentado corretamente, você poderá ver uma mensagem semelhante a esta no arquivo de log:

```
# This is a confirmation example in your log file:
Oct 1, 2015 10:58:52 -0700 [9805 1] com.newrelic FINER: Instrumenting com/example/class/name
```

Se a classe e o método do arquivo de log não corresponderem aos valores da sua instrumentação personalizada, revise e ajuste conforme necessário. (Talvez você nem sempre veja uma confirmação em seu arquivo de log sobre se o carregamento da instrumentação personalizada foi bem-sucedido ou falhou.)

## Transação separada em XML [#separate-transaction]

Aqui está um exemplo de pointcut com vários valores `method` . O `nameTransaction` foi adicionado ao XML para dividir o método como uma transação separada, em vez de um segmento na [tabela de detalhamento<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)do APM.

```xml
# This is a pointcut example to identify a specific transaction with XML custom instrumentation:
<pointcut>
  <nameTransaction/>
  <className>com.examplename.client.actionflow.impl.exampleActionFlow</className>
  <method>
    <name>requestNAME</name>
    <parameters>
      <type>boolean</type>
    </parameters>
  </method>
</pointcut>
```

## Transação assíncrona [#async]

Se seu aplicativo usar processos assíncronos, poderá ser possível conectar a atividade do trabalhador assíncrono à transação pai usando a API Java. Por padrão, essas transações não estão vinculadas. Para obter mais informações, consulte [Instrumentação de sincronização Java](/docs/agents/java-agent/async-instrumentation/introduction-java-async-instrumentation).
