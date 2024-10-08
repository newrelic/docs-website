---
title: Exemplos JMX YAML personalizados
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: 'Example of a custom JMX YAML file for New Relic''s Java agent: value and definition, MBean, attributes, type, and names for metrics, objects, and attributes.'
freshnessValidatedDate: never
translationType: machine
---

Este é um exemplo de arquivo JMX YAML customizado para o agente Java da New Relic, incluindo valor e definição, MBean, atributo, tipo e nomes para métrica, objetos e atributo. Para mais informações, incluindo um vídeo, consulte [Monitoramento JMX personalizado por YAML](/docs/java/custom-jmx-monitoring-by-yml).

## Exemplo de YAML

Aqui está um exemplo de um arquivo JMX YAML personalizado. Os arquivos YAML são sensíveis ao espaço.

```yml
name: TomcatCustom
version: 1.0
enabled: true
jmx:
  - object_name: Catalina:type=Cache,host=localhost,path=/examples
    metrics:
      - attributes: accessCount, cacheSize, hitsCount
        type: simple
  - object_name: Catalina:type=Connector,port=8009
    metrics:
      - attributes: bufferSize, maxHeaderCount
  - object_name: java.nio:type=BufferPool,name=*
    metrics:
      - attributes: Count
        type: monotonically_increasing
```

## Explicação de exemplo [#initial_info]

<CollapserGroup>
  <Collapser
    id="properties"
    title="Propriedades"
  >
    <table>
      <thead>
        <tr>
          <th width={150}>
            <DNT>
              **Value**
            </DNT>
          </th>

          <th>
            <DNT>
              **Definition**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `name`
          </td>

          <td>
            Um nome descritivo que identifica seu arquivo de instrumentação personalizada YAML, utilizando um espaço antes do nome da propriedade. No exemplo acima, o nome é `TomcatCustom`.
          </td>
        </tr>

        <tr>
          <td>
            `version`
          </td>

          <td>
            A versão do arquivo de extensão. Use um duplo. Se duas extensões tiverem o mesmo nome, somente a extensão com a versão mais recente será usada. Use um espaço antes da versão da propriedade. No exemplo acima, a versão é `1.0`.
          </td>
        </tr>

        <tr>
          <td>
            `enabled`
          </td>

          <td>
            Se `true`, o agente Java lerá a extensão. Se `false`, o agente Java ignorará a extensão. Use um espaço antes da propriedade ser habilitada. O exemplo acima está habilitado.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example_mbeans"
    title="MBeans"
  >
    Cada linha no YAML começando com `- object_name` representa um MBean. Por exemplo, as linhas a seguir descrevem as informações a serem extraídas do primeiro MBean:

    ```yml
    - object_name: Catalina:type=Cache,host=localhost,path=/examples
      metrics:
        - attributes: accessCount, cacheSize, hitsCount
          type: simple
    ```

    A própria propriedade object_name pode corresponder a um ou mais MBeans. Por exemplo, a linha abaixo corresponde apenas a um MBean:

    ```yml
    - object_name: Catalina:type=Cache,host=localhost,path=/examples
    ```

    A linha a seguir pode corresponder a vários MBeans:

    ```yml
    - object_name: java.nio:type=BufferPool,name=*
    ```

    O curinga asterisco (`*`) só pode ser usado com JDK 1.6 e superior.

    Os três MBeans listados no exemplo acima possuem os seguintes nomes de objetos:

    ```
    Catalina:type=Cache,host=localhost,path=/examples
    Catalina:type=Connector,port=8009
    java.nio:type=BufferPool,name=*
    ```
  </Collapser>

  <Collapser
    id="example_attributes"
    title="Atributo"
  >
    O exemplo JMX recupera seis atributos diferentes dos três MBeans. O agente Java da New Relic extrai estes atributos do primeiro MBean:

    * `accessCount`

    * `cacheSize`

    * `hitsCount`

      O agente extrai estes atributos do segundo MBean:

    * `bufferSize`

    * `maxHeaderCount`

      O agente extrai um atributo (`Count`) do terceiro MBean.
  </Collapser>

  <Collapser
    id="example_type"
    title="Tipo"
  >
    Para `type`, use `simple` ou `monotonically_increasing`. Quando `type` não é especificado no arquivo JMX YAML, o padrão é `monotonically_increasing`.

    <table>
      <thead>
        <tr>
          <th width={200}>
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
            `simple`
          </td>

          <td>
            O valor exato do atributo será informado à New Relic a cada minuto.
          </td>
        </tr>

        <tr>
          <td>
            `monotonically_increasing`
          </td>

          <td>
            A diferença positiva será informada à New Relic a cada minuto.
          </td>
        </tr>
      </tbody>
    </table>

    No exemplo acima, o atributo `accessCount`, `cacheSize` e `hitsCount` serão relatados como `simple`. O atributo `bufferSize`, `maxHeaderCount` e `Count` serão relatados como `monotonically_increasing`.

    * Se o valor do atributo `hitsCount` for sempre `5`, a New Relic reportará um `5` a cada minuto.
    * Se o valor do atributo `Count` for sempre `5`, a New Relic reportará um `0` para o valor a cada minuto.
    * Se o valor do atributo `Count` mudar de `5` para `7`, a New Relic reportará um `2` para esse minuto.
  </Collapser>

  <Collapser
    id="metric_names"
    title="Nomes métricos"
  >
    Ao selecionar a métrica personalizada do dashboard e não utilizar a propriedade `root_metric_name`, utilize o seguinte formato para todas as métricas JMX customizadas:

    ```
    JMX/beginning_of_object_name/type/any_properties_in_object_name/attribute_name
    ```

    <Callout variant="tip">
      Alguns nomes de objetos não incluem um tipo. Nesse caso, um nulo estará presente no nome da métrica.
    </Callout>

    O arquivo de configuração não utiliza `root_metric_name`, então será criada a seguinte métrica:

    ```
    JMX/Catalina/Cache/localhost/examples/accessCount
    JMX/Catalina/Cache/localhost/examples/cacheSize
    JMX/Catalina/Cache/localhost/examples/hitsCount
    JMX/Catalina/Connector/8009/bufferSize
    JMX/Catalina/Connector/8009/maxHeaderCount
    JMX/java.nio/BufferPool/direct/Count
    JMX/java.nio/BufferPool/mapped/Count
    ```

    Se você estiver usando a propriedade `root_metric_name`, a métrica será o nome da métrica raiz prefixado com JMX e seguido pelo nome do atributo. Você pode usar valores de nome de objeto especificando a chave do nome do objeto em `root_metric_name` entre colchetes `{}`. Por exemplo:

    Parte de um arquivo de configuração:

    ```yml
    - object_name: Catalina:type=Cache,host=localhost,path=/examples
      root_metric_name: Tomcat/{host}
      metrics:
        - attributes: accessCount, cacheSize, hitsCount
          type: simple
    - object_name: mbean:type=Sample,host=localhost,path=*
      root_metric_name: SampleMBean
      metrics:
        - attributes: attOne, attTwo
          type: simple
    ```

    Nomes métricos:

    ```
    JMX/Tomcat/localhost/accessCount
    JMX/Tomcat/localhost/cacheSize
    JMX/Tomcat/localhost/hitsCount
    JMX/SampleMBean/attOne
    JMX/SampleMBean/attTwo
    ```

    Se um atributo não existir realmente no MBean, a métrica nunca aparecerá no New Relic.
  </Collapser>
</CollapserGroup>

## Encontrando nomes de objetos e atributos [#finding_names]

A maneira mais fácil de encontrar MBeans disponíveis e seus atributos associados é usar as [instruções do JConsole para JDK 1.6](http://docs.oracle.com/javase/6/docs/technotes/guides/management/jconsole.html).
