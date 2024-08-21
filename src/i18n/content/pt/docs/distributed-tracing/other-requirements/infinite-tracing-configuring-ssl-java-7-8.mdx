---
title: 'Rastreamento infinito: configurar SSL para Java 7 e 8'
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: 'For New Relic Infinite Tracing, how to implement a special configuration of Java Cryptographic Extensions (JCE) for certain older versions of Java.'
freshnessValidatedDate: never
translationType: machine
---

O Rastreamento Infinito requer configuração especial de Java Cryptographic Extensions (JCE) para determinadas versões mais antigas do Java. Este documento fornece diretrizes sobre como configurar o Java neste caso.

<Callout variant="tip">
  Para segurança e desempenho, a New Relic recomenda fortemente a atualização para a atualização mais recente do Java 8. Para JVMs baseadas em HotSpot, nenhuma das etapas abaixo é necessária após 8u251.
</Callout>

## Quando configurar a criptografia Java [#when-configure]

Você deve seguir este processo se atender a TODOS os critérios abaixo:

* Você está implementando o rastreamento infinito

* Sua JVM não suporta negociação de protocolo de camada de aplicativo (ALPN). A New Relic identificou que essas JVMs não suportam ALPN e requerem configuração:

  * Oráculo Java 7

  * Oracle Java 8 antes da atualização 251

  * OpenJDK Java 8 antes da atualização 252

    <Callout variant="important">
      A New Relic apenas confirmou que as JVMs acima não possuem suporte para ALPN. Você deve confirmar com seu fornecedor se o suporte ALPN está presente em sua JVM.
    </Callout>

## Servidor de aplicativo

Se você usar Tomcat, WebSphere, Weblogic ou outro servidor de aplicativo, consulte a documentação do servidor de aplicativo sobre como incluir um Java Cryptography Extension (JCE) em seu servidor de aplicativo.

## Configurar a política de exportação para JVMs Oracle [#export-policy]

JVMs Oracle mais antigas exigem uma atualização extra para permitir o JCE. Consulte [este Oracle TechNote](https://www.oracle.com/java/technologies/javase-jce-all-downloads.html) para downloads e instruções.

## Configurando o Conscrypt para JVMs HotSpot [#conscrypt]

A New Relic testou com sucesso o OpenJDK Java 8 com Conscrypt. Complete o seguinte:

1. Baixe o [jar Conscrypt apropriado](https://github.com/google/conscrypt/#download) para seu sistema operacional.

2. Copie o jar do Conscrypt para `JAVA_HOME/jre/lib/ext`. Este diretório já deveria existir, mas se não existir, procure um diretório chamado `ext` em `JAVA_HOME`.

3. Edite o arquivo `JAVA_HOME/jre/lib/security/java.security` .

4. Abaixo das linhas que começam com `security.provider`, aumente o último número e defina o valor como `org.conscrypt.OpenSSLProvider`. Por exemplo, se a última entrada foi `security.provider.10`, adicione esta linha:

   ```
   security.provider.11=org.conscrypt.OpenSSLProvider
   ```

## Conclua a configuração do rastreamento infinito [#return-to-distributed-tracing]

Ao concluir essas configurações preliminares, retorne para [Agente de idioma: Habilitar distributed tracing](/docs/understand-dependencies/distributed-tracing/enable-configure/enable-distributed-tracing) para concluir a configuração do Rastreamento Infinito.
