---
title: 'Docker e outros ambientes de contêiner: Instale C SDK'
tags:
  - Agents
  - C SDK
  - Install and configure
metaDescription: How to install the New Relic C SDK on a Docker container (or other container) to monitor one or more of your C applications.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO DE EOL"
>
  A partir de abril de 2022, não ofereceremos suporte ao recurso C SDK. Para obter mais detalhes, consulte nossa [postagem no Fórum de suporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Você pode instalar o [New Relic C SDK](/docs/agents/c-sdk/get-started/introduction-c-sdk) em um contêiner Docker (ou outro contêiner) para monitor um ou mais de seus aplicativos C.

## Instale C SDK no ambiente de contêiner [#install-container]

Requisitos:

* Atenda [aos requisitos do SDK C](/docs/agents/c-sdk/get-started/c-sdk-compatibility-requirements)
* C SDK versão 1.2 ou superior

<Callout variant="caution">
  Os dados transmitidos do agente para o daemon **não** são criptografados. Recomendamos usar apenas uma conexão de rede privada entre o agente e o daemon. Isso se aplica apenas quando o agente e o daemon estão em execução em hosts diferentes.
</Callout>

Para instalar o C SDK para um ambiente de contêiner, recomendamos instalar o [daemon C SDK](/docs/agents/c-sdk/get-started/introduction-c-sdk#architecture) em um contêiner Docker separado:

1. Instale o daemon clonando o [repositório C SDK](https://github.com/newrelic/c-sdk) e construindo o daemon. Isso é feito de maneira mais eficaz por meio do comando `make daemon`. Consulte o [README.md](https://github.com/newrelic/c-sdk/blob/master/README.md#building-the-c-sdk) para obter mais detalhes.

   Se estiver usando o Docker, você pode usar a [imagem daemon C SDK no Dockerhub](https://hub.docker.com/r/newrelic/c-daemon).

2. Inicie o daemon usando os argumentos `--address` e `--watchdog-foreground` . O argumento `--address` é usado para definir uma porta onde o daemon está aceitando conexões. O argumento `--watchdog-foreground` garante que o daemon seja executado em primeiro plano.

Em seguida, use o SDK C em seu aplicativo em contêiner:

1. Siga as etapas para [adicionar o C SDK ao seu código](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code).
2. Aponte o C SDK para o daemon adicionando uma [chamada`newrelic_init` ](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a03f07e64a51b5f0cd51caa4f28c8b6c1)e transmitindo um argumento `address` válido. O valor desse argumento deve ser `HOST:PORT`, onde `HOST` é o nome ou endereço IP do host onde o daemon está sendo executado e `PORT` é o número da porta onde o daemon está atendendo.
