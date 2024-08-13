---
title: 'Rastreamento infinito: configurar suporte de proxy'
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: Infinite Tracing proxy configuration.
freshnessValidatedDate: never
translationType: machine
---

Para Rastreamento Infinito, você poderá fornecer uma configuração de proxy opcional se o tráfego de saída precisar fluir através de um proxy antes de chegar a um observador trace . Os agentes de idioma que suportam isso estão listados abaixo.

<Callout variant="important">
  Para que um proxy funcione com o Infinite Tracing, ele precisa oferecer suporte ao protocolo HTTP/2 em vez do HTTP/1.1 padrão. Consulte a documentação do seu proxy para determinar se esse suporte está disponível.
</Callout>

## Go

Especifique o endereço do proxy com as variáveis de ambiente `HTTP_PROXY`, `HTTPS_PROXY` e `NO_PROXY` (ou suas versões minúsculas correspondentes).

## Java

A implementação gRPC do agente Java usa automaticamente as propriedades de proxy JVM padrão, conforme observado na documentação Java Networking Properties. Um exemplo de configuração de propriedade do sistema pode ser assim:

```
-Dhttps.proxyHost=<proxy-host> -Dhttps.proxyPort=443
```

Se seu aplicativo já estiver usando um proxy, essas propriedades já poderão estar definidas; nesse caso, o gRPC deverá rotear automaticamente os dados do Infinite Tracing por meio do proxy.

## .NET [#dot-net]

O endereço proxy pode ser especificado pela variável de ambiente `https_proxy` . (O agente .NET versão 10.6.0 e anteriores também suportam o uso da variável de ambiente `grpc_proxy` .) O nome da variável de ambiente pode estar em letras maiúsculas ou minúsculas quando executado no Windows, mas deve estar em letras minúsculas no Linux.

## Node.js, PHP, Python e Ruby [#node-php-python-ruby]

O endereço proxy pode ser especificado pelas variáveis de ambiente `GRPC_PROXY`, `HTTPS_PROXY` e `HTTP_PROXY`. Essas variáveis são verificadas em ordem e a primeira que tiver um valor é usada.
