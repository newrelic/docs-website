---
title: Exemplos de instrumentação Java XML
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: 'With New Relic monitoring for Java, you can use XML files to set up custom instrumentation of your Java application.'
freshnessValidatedDate: never
translationType: machine
---

Para sua aplicação Java New Relic-monitor, um método [de instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) é usar um arquivo XML que lista os métodos e classes que você deseja instrumentar. Esta documentação mostra um exemplo de arquivo de instrumentação XML. Para mais informações, veja [Instrumentação Java por XML](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-xml).

## Edite o arquivo XML na interface [#ui]

Para editar seu arquivo XML diretamente da interface do New Relic: Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Instrumentation**</DNT>. A partir daqui você pode:

* Baixe um arquivo XML de amostra.
* Selecione um arquivo XML existente para edição.
* Pesquise o histórico de instrumentação.

## Formato de arquivo XML [#file-format]

O formato de arquivo XML inclui nós raiz e filhos.

<Callout variant="caution">
  Não instrumente todos os seus métodos, pois isso pode levar a um [problema de agrupamento métrico](/docs/apm/other-features/metrics/metric-grouping-issues).
</Callout>

<CollapserGroup>
  <Collapser
    id="extension"
    title="Nó raiz: extensão"
  >
    O nó raiz de um arquivo XML é `extension`. Pode ter três atributos diferentes:

    <table>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>
            Valor
          </th>

          <th>
            Definição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `name`
          </td>

          <td>
            Um nome exclusivo, mas descritivo, que identifica sua extensão XML.
          </td>
        </tr>

        <tr>
          <td>
            `enabled`
          </td>

          <td>
            Identifica se a extensão será lida pelo agente Java. O padrão é `true`. Se `false`, o New Relic ignorará a extensão.
          </td>
        </tr>

        <tr>
          <td>
            `version`
          </td>

          <td>
            A versão da extensão. Se duas extensões tiverem o mesmo nome, somente a extensão com a versão mais recente será usada.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="instrumentation"
    title="Instrumentação (filho da extensão)"
  >
    O nó `instrumentation` é filho de `extension`. Pode ter um atributo: `metricPrefix`. Este é o prefixo utilizado para os nomes das métricas quando o nó `nameTransaction` não é especificado. O padrão é `CUSTOM`.
  </Collapser>

  <Collapser
    id="pointcut"
    title="Pointcut (filho da instrumentação)"
  >
    O `pointcut` é um nó filho de `instrumentation` e pode ter vários atributos. Além disso, um `pointcut` pode ter vários [nós filhos](#pointcut-children) diferentes.

    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
            Valor
          </th>

          <th>
            Definição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `transactionStartPoint`
          </td>

          <td>
            Se uma transação ainda não estiver em andamento quando esse ponto for atingido, uma transação será iniciada. Se uma transação já estiver em andamento, então essa transação continuará. Uma nova transação não será criada.
          </td>
        </tr>

        <tr>
          <td>
            `metricNameFormat`
          </td>

          <td>
            O formato de nome a ser usado para uma métrica. Se não estiver presente, o padrão será o nome da classe seguido pelo nome do método. Você só pode definir `metricNameFormat` em pontos de corte onde `transactionStartPoint` está definido como `false`.
          </td>
        </tr>

        <tr>
          <td>
            `excludeFromTransactionTrace`
          </td>

          <td>
            Quando `true` o trace da transação não será fornecido se este pointcut iniciar a transação. Se o pointcut for atingido no meio de uma transação, então o trace da transação ainda estará presente, mas este método será excluído do gráfico de chamadas.
          </td>
        </tr>

        <tr>
          <td>
            `ignoreTransaction`
          </td>

          <td>
            Quando `true` toda a transação será ignorada.
          </td>
        </tr>

        <tr>
          <td>
            `transactionType`
          </td>

          <td>
            Define o tipo da transação. Os valores possíveis são `background` (padrão, relatado como a [transação fora da web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions)) e `web` (relatado como a [transação da web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm)).
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="pointcut-children"
    title="Nós filhos para pointcut"
  >
    Um `pointcut` pode ter vários nós filhos diferentes:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Valor
          </th>

          <th>
            Definição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `nameTransaction`
          </td>

          <td>
            Se este elemento estiver presente, o agente nomeará a transação usando o nome da classe e o(s) método(s) instrumentado(s) por este pointcut.
          </td>
        </tr>

        <tr>
          <td>
            `methodAnnotation`
          </td>

          <td>
            O nome completo que diferencia maiúsculas de minúsculas de uma classe de anotação, incluindo o nome do pacote. Todos os métodos marcados com esta anotação serão correspondidos.
          </td>
        </tr>

        <tr>
          <td>
            `className`
          </td>

          <td>
            O nome da classe que diferencia maiúsculas de minúsculas, incluindo o nome do pacote. Emparelhe este nó com o nó do método. Se este nó estiver presente em um pointcut, então o nó `interfaceName` não poderá estar presente no mesmo nó pointcut.

            O nó `className` possui o atributo `includeSubclasses`. Se `true` os métodos na classe com o nome correspondente serão instrumentados juntamente com os métodos correspondentes em qualquer classe filha desta classe. Se `false` (padrão), apenas métodos na classe exata especificada serão instrumentados.

            O `className` deve seguir estas regras:

            * As classes internas podem ser instrumentadas.
            * Deve ser usada a estrutura completa do pacote com pontos entre os pacotes.
            * Para corresponder às subclasses da classe especificada, defina o atributo `includeSubclasses` como `true`.
          </td>
        </tr>

        <tr>
          <td>
            `interfaceName`
          </td>

          <td>
            O nome de uma interface que diferencia maiúsculas de minúsculas, incluindo o nome do pacote, cujas classes de implementação serão correspondidas. Emparelhe este nó com o nó do método. Se este nó estiver presente em um pointcut, então o nó `className` não poderá estar presente no mesmo nó pointcut.

            O `interfaceName` deve seguir esta regra: Deve ser usada a estrutura completa do pacote com pontos entre os pacotes.
          </td>
        </tr>

        <tr>
          <td>
            `method`
          </td>

          <td>
            Um método na classe para instrumento. Emparelhe este nó com um nó `className` . Além disso, o nó `method` pode ter [filhos](#method-children).
          </td>
        </tr>

        <tr>
          <td>
            `traceByReturnType`
          </td>

          <td>
            O nome da classe, incluindo pacote, no formato usado no bytecode, por exemplo `Ljava/lang/String;`.

            Todos os métodos que retornam um objeto dessa classe serão correspondidos.
          </td>
        </tr>

        <tr>
          <td>
            `traceLambda`
          </td>

          <td>
            Um booleano que indica se lambdas devem ser correspondidos.

            O nó `traceLambda` possui o atributo:

            * `includeNonstatic` - um booleano que indica se métodos não estáticos devem ser correspondidos (o padrão é falso);
            * `pattern` - uma string com o padrão para procurar os métodos lambda.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="method-children"
    title="Nós filhos para método"
  >
    O nó `method` pode ter vários filhos. Para obter mais informações e exemplos, consulte [resolução de problemas de instrumentação Java personalizada](/docs/agents/java-agent/custom-instrumentation/troubleshooting-java-custom-instrumentation#separate-transaction).

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Valor
          </th>

          <th>
            Definição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `name`
          </td>

          <td>
            O nome exato que diferencia maiúsculas de minúsculas do método a ser correspondido.

            Um nó do método `name` deve seguir estas regras:

            * Métodos públicos, protegidos, privados e de pacote podem ser instrumentados.
            * Métodos estáticos e de instância podem ser instrumentados.
            * Construtores não podem ser instrumentados.
          </td>
        </tr>

        <tr>
          <td>
            `parameters`
          </td>

          <td>
            Os tipos de parâmetro do método especificados em ordem. Se o elemento `parameters` não estiver presente, todos os métodos correspondentes ao nome serão correspondidos. Isto inclui declarações privadas e protegidas.

            Um nó de método `parameters` contém uma lista dos parâmetros do método, especificados por elementos `type` . Aqui estão as regras principais para os elementos `type` :

            * Os primitivos são especificados usando seu nome normal: int, float, double, long, byte, short, boolean, char.
            * Os objetos requerem uma estrutura de pacote completa. Por exemplo, não use `String` no XML; em vez disso, use `java.lang.String`.
            * Não use genéricos com objetos de coleção. Por exemplo, escreva `java.util.List` em vez de `java.util.List<String>`.
            * Inclui colchetes para matriz. Por exemplo, uma matriz de números inteiros será `int[ ]` e uma matriz de strings será `java.lang.String[ ]`.
            * Inclua dois conjuntos de colchetes para uma matriz de arrays. Por exemplo, uma matriz de arrays de longs seria `long[ ][ ]`.
            * Para enviar o parâmetro como um evento analítico para o New Relic, adicione um atributo XML ao elemento de tipo chamado `attributeName`.
            * Para usar um método sem parâmetro, o nó `parameters` precisa estar presente para corresponder a um método "sem argumentos".
          </td>
        </tr>

        <tr>
          <td>
            `returnType`
          </td>

          <td>
            O nome de uma classe que diferencia maiúsculas de minúsculas indicando um tipo de retorno a ser correspondido. Todos os métodos que retornam este tipo de classe serão correspondidos.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Exemplo

Aqui está um exemplo de classe e um arquivo XML que pode ser usado para instrumentar essa classe.

<CollapserGroup>
  <Collapser
    id="package-test"
    title="Aula de exemplo"
  >
    ```java
    package test;

    import java.util.HashMap;
    import java.util.Map;
    import java.util.concurrent.Executors;
    import java.util.concurrent.ScheduledExecutorService;
    import java.util.concurrent.TimeUnit;

    public class SampleTester {

        private String configName;
        private Map<String, Long> maxSampleTimes;

        public SampleTester(String pConfigName) {
            configName = pConfigName;
            maxSampleTimes = new HashMap<>();
        }

        public void checkSample(String name, long[] times) {
            if (times != null) {
                maxSampleTimes.put(name, getFirst(times));
            } else {
                maxSampleTimes.put(name, (long) getFirst());
            }
        }

        private Long getFirst(long[] times) {
            return times[0];
        }

        private int getFirst() {
            return 0;
        }

        public void printMaxRepeat(final long max) throws Exception {
            Runnable myRunnable = new Runnable() {
                public void run() {
                    try {
                        printMax(max);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            };

            ScheduledExecutorService scheduledExecutor = Executors.newScheduledThreadPool(1);
            scheduledExecutor.scheduleWithFixedDelay(myRunnable, 0, 10000, TimeUnit.MILLISECONDS);
        }

        private void printMax(long max) {
            System.out.println("max is " + max);
        }
    }
    ```
  </Collapser>

  <Collapser
    id="sample-xml-file"
    title="Exemplo de arquivo de instrumentação XML e explicação"
  >
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <extension xmlns="https://newrelic.com/docs/java/xsd/v1.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="newrelic-extension extension.xsd"
      name="customExtension" version="1.0">

      <instrumentation metricPrefix="EXAMPLE">
        <pointcut transactionStartPoint="true">

          <!--class name is preceded by package name-->
          <className>test.SampleTester</className>
          <method>
            <name>checkSample</name>
            <parameters>
              <type attributeName="sampleName">java.lang.String</type>
              <type>long[]</type>
            </parameters>
          </method>
          <!--two methods with the same name but different signatures can share one node-->
          <method>
            <name>getFirst</name>
          </method>
          <method>
            <name>run</name>
          </method>
        </pointcut>

        <pointcut transactionStartPoint="false" 
          ignoreTransaction="false"
          excludeFromTransactionTrace="false"
          metricNameFormat="SampleTester/methods">
  
          <className>test.SampleTester</className>
          <method>
            <name>printMaxRepeat</name>
          </method>
          <method>
            <name>printMax</name>
          </method>
        </pointcut>

      </instrumentation>
    </extension>
    ```

    O primeiro bloco do arquivo XML especifica o nome e a versão da extensão. Como a extensão XML é padrão `enabled`, esse atributo não é especificado.

    O segundo bloco especifica os métodos em `SampleClass` que devem ser instrumentados. Uma transação é iniciada no início do bloco. É importante notar que na classe de exemplo, existem dois métodos que compartilham um nome (`getFirst`), mas possuem assinaturas diferentes. Estes são instrumentados com um único nó de método. Ao remover o nó `parameters` , todos os métodos com o mesmo nome podem ser correspondidos em um nó de método.

    No terceiro bloco, os métodos especificados não possuem uma transação iniciada neles. Isso ocorre porque a transação já foi iniciada em `run`. A transação não será ignorada e será incluída no rastreamento da transação.
  </Collapser>
</CollapserGroup>
