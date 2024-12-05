---
title: Instalação do AWS Elastic Beanstalk para Java
tags:
  - Agents
  - Java agent
  - Additional installation
metaDescription: Directions for installing the New Relic Java agent with Elastic Beanstalk.
freshnessValidatedDate: never
translationType: machine
---

Se você for um usuário [<DNT>AWS Elastic Beanstalk</DNT>](http://docs.amazonwebservices.com/elasticbeanstalk/latest/gsg/) , o agente Java exigirá configuração adicional.

## Pré-requisitos

Antes de concluir a configuração, você deve primeiro:

* Crie uma [conta compatível da Amazon Web Services](http://aws.amazon.com/elasticbeanstalk/).
* Crie uma [conta New Relic ](http://newrelic.com/signup).
* [Baixe e instale o agente Java](/docs/agents/java-agent/installation/java-agent-manual-installation).

Para concluir a instalação do agente Java em <DNT>AWS Elastic Beanstalk</DNT>, siga as etapas para sua plataforma:

## Plataforma Tomcat

Para aplicativo implantado com a plataforma <DNT>AWS Elastic Beanstalk Tomcat</DNT> :

1. Em seu arquivo WAR, adicione os arquivos `newrelic.jar` e `newrelic.yml` a `WEB-INF/lib/`.

2. Reempacote e implante seu novo arquivo WAR como um novo aplicativo ou uma atualização de um aplicativo anterior.

3. Localize e conecte-se às instâncias subjacentes do EC2. Uma vez conectado, encontre o caminho para o arquivo `newrelic.jar` usando este comando - certifique-se de pesquisar um diretório por vez. Use `/var` ou `/usr` conforme apropriado.

   ```sh
   sudo find /var -name "newrelic.jar"
   sudo find /usr -name "newrelic.jar"
   ```

   Para passar a sinalização `-javaagent` para a JVM:

4. No console AWS, abra o arquivo Elastic Beanstalk.

5. Selecione a região relevante.

6. Selecione seu ambiente.

7. No painel esquerdo, selecione <DNT>**Configurations**</DNT>.

8. Role até <DNT>**Updates, monitoring, and logging**</DNT> e selecione <DNT>**Edit**</DNT> no canto superior direito.

9. Role até <DNT>**Platform Software**</DNT> e adicione a seguinte linha ao campo <DNT>**JVM Options**</DNT> :

   ```sh
   -javaagent:/full/path/to/newrelic.jar
   ```

10. Selecione <DNT>**Apply**</DNT> para salvar.

Seu <DNT>Elastic Beanstalk</DNT> atualizará seu ambiente.

## Plataforma Java SE

Para aplicativo implantado com a plataforma <DNT>AWS Elastic Beanstalk Java SE</DNT> :

1. Adicione os arquivos `newrelic.jar` e `newrelic.yml` ao seu projeto, como em um subdiretório chamado `opt/newrelic`.

2. Para usar argumentos JVM customizados com seu aplicativo Java SE, recomendamos incluir um `Procfile` na raiz do pacote de origem do seu aplicativo. Consulte [a documentação do Java SE](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/java-se-platform.html) para obter detalhes.

   Passe o sinalizador `-javaagent` como um argumento JVM em `Procfile`:

   ```makefile
   web:java -javaagent:path/from/bundle/root/to/newrelic.jar -jar <your-application>.jar
   ```

3. Reempacote e implante o pacote de origem no Elastic Beanstalk.
