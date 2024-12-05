---
title: Instrumentação Java por XML
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: Use a custom XML file to monitor specific methods in your Java app without modifying code in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Para sua aplicação Java New Relic-monitor, um método de instrumentação personalizada é usar um arquivo XML para especificar os métodos de sua aplicação que devem ser instrumentados. O agente Java irá ler o arquivo XML e instrumentar as classes relevantes na inicialização; Os arquivos XML adicionados ao [diretório`extensions` ](#file-location)após a inicialização não requerem uma reinicialização da JVM para serem detectados.

Veja [agente Java instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) para uma descrição das opções de instrumentação personalizada e as razões para usá-las.

## Acessando seu arquivo XML [#ui-options]

Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Instrumentation**</DNT>. A partir daqui você pode:

* Baixe um arquivo XML de amostra. (Você pode fazer isso no pop-up que aparece quando você clica em `Import an XML file`.)
* Selecione um arquivo XML existente para edição.
* Pesquise o histórico de instrumentação.

## Estrutura do arquivo XML [#file-structure]

Seu pacote de download do agente New Relic (`newrelic_agent.zip`) contém dois modelos para usar instrumentação XML:

* O modelo `extension.xsd` é a definição do esquema XML que todas as extensões personalizadas devem seguir.
* O modelo `extension-example.xml` é um exemplo. Este arquivo serve para alguns dos métodos básicos do JDK. Se você editar e renomear esse arquivo, certifique-se de modificar o atributo `name="extension-example"` para corresponder ao novo nome de arquivo.

Para obter mais informações sobre as propriedades no modelo `extension.xsd` , consulte a [visão geral do formato de arquivo XML](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation-xml-examples#file-format).

## Validação de arquivo XML [#file-validation]

Antes de iniciar seu aplicativo, valide seu arquivo XML usando a ferramenta de linha de comando do New Relic. A ferramenta de linha de comando só pode ser usada quando suas classes estão em um jar. Existem duas maneiras de validar sua instrumentação XML:

<CollapserGroup>
  <Collapser
    id="pre-java-10"
    title="Versões Java abaixo de Java 10"
  >
    A maneira mais fácil de fazer isso para versões Java anteriores ao Java 10 é com este comando:

    ```bash
    java -Djava.ext.dirs=/path/to/jarred/classes -jar newrelic.jar instrument -file /path/to/file.xml -debug true
    ```
  </Collapser>

  <Collapser
    id="all-java-versions"
    title="Todas as versões Java"
  >
    <Callout variant="tip">
      Para versões Java anteriores ao Java 10, consulte o [procedimento recomendado](#pre-java-10). Esse procedimento não é possível com Java 10 ou superior porque essas versões não permitem mais a configuração de `java.ext.dirs` .
    </Callout>

    Para todas as versões Java, você pode definir `classpath` manualmente:

    ```bash
    java -cp /path/to/your-app.jar:/path/to/newrelic.jar com.newrelic.bootstrap.BootstrapAgent instrument -file /path/to/file.xml -debug true
    ```
  </Collapser>
</CollapserGroup>

O aplicativo é executado com o `newrelic.jar`. A chamada deve conter a palavra-chave `instrument` seguida pelo sinalizador `-file` com o caminho para seu arquivo XML. A propriedade `-debug` é opcional e pode ser configurada como `true` para fornecer mais informações durante a validação.

A ferramenta irá:

* Valide a sintaxe XML.
* Verifique se cada classe a ser instrumentada está presente no class path.
* Verifique se cada método está contido na classe apropriada.

Se o arquivo XML for válido, você verá uma instrução pass impressa no terminal:

```
PASS: The extension at file.txt was successfully validated.
```

Se o XML falhar na validação, você verá uma mensagem de falha impressa no terminal:

```
FAIL: reason
```

## Localização do arquivo XML [#file-location]

O agente Java lê todos os arquivos XML no diretório `extensions` na inicialização do processo. O diretório `extensions` também é lido a cada [ciclo de coleta](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#harvest-cycle). Os arquivos XML adicionados a esse diretório durante o tempo de execução serão lidos em alguns minutos, portanto, não requerem reinicialização da JVM.

Existem duas maneiras de especificar o local do arquivo XML:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **XML file location options**
        </DNT>
      </th>

      <th>
        <DNT>
          **Procedure**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Crie um diretório de extensões
      </td>

      <td>
        1. No diretório onde newrelic.jar e newrelic.yml estão localizados, crie um diretório chamado `extensions`.
        2. Coloque o arquivo XML neste diretório com uma extensão `.xml` .
        3. Em `newrelic.yml`, verifique se a propriedade `extensions.dir` não está definida.
      </td>
    </tr>

    <tr>
      <td>
        Especifique um diretório de extensões existente
      </td>

      <td>
        1. No arquivo de configuração `newrelic.yml` na seção comum, use a propriedade `extensions.dir` para especificar o diretório onde o arquivo XML está localizado.
        2. Certifique-se de que o arquivo esteja no diretório especificado e que tenha uma extensão `.xml` .
      </td>
    </tr>
  </tbody>
</table>

## Verifique se o arquivo foi lido [#verifying-read]

Para verificar se o agente leu o arquivo XML, primeiro [defina o gerenciamento de logs como `finer`](/docs/java/java-kb-101):

1. Edite o arquivo de configuração `newrelic.yml` e altere a propriedade `log_level` :

   ```yml
   log_level: finer
   ```

2. Inicie ou reinicie o aplicativo.

Se a leitura foi bem-sucedida, `logs/newrelic_agent.log` indicará isso em uma instrução semelhante a:

```
Reading custom extension file /path/to/file.xml
```

Se nenhuma instrução aparecer em `logs/newrelic_agent.log`, o arquivo XML não foi encontrado. Verifique a localização do arquivo XML e certifique-se de que o processo New Relic tenha acesso de leitura ao arquivo.

## Vários arquivos XML [#multiplying-files]

Embora seja preferível usar um único arquivo XML, você pode usar vários arquivos XML personalizados. Todos esses arquivos serão instrumentados desde que o nome da extensão nos arquivos seja exclusivo.

* Se dois arquivos XML personalizados contiverem o mesmo nome de extensão, aquele com a versão mais recente será implementado e o outro será ignorado.
* Caso os dois arquivos tenham o mesmo nome e versão, então o primeiro arquivo lido pelo agente será implementado e o outro será ignorado.

## XML e YAML

Antes de 2.10.0, Arquivos YAML podem ser usados para instrumentação personalizada. Esses arquivos YAML legados ainda são suportados. Porém, novos usuários deverão utilizar arquivos XML para instrumentação personalizada.

<DNT>**Legacy users:**</DNT> Se existirem arquivos YAML e XML com o mesmo nome de extensão, apenas o arquivo XML será instrumentado. O arquivo YAML será ignorado. Se você deseja que os arquivos YAML e XML sejam instrumentados, atribua a cada arquivo um nome de extensão diferente.

## Exemplo de arquivo XML [#example]

Para obter um exemplo de arquivo XML de instrumentação personalizada, veja [Exemplos Java XML](/docs/java/custom-xml-examples).
