---
title: 'Docker y otros entornos de contenedores: instale C SDK'
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
  title="AVISO EOL"
>
  A partir de abril de 2022, no admitimos la capacidad C SDK. Para obtener más detalles, consulte nuestra [publicación en el foro de soporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Puede instalar el [SDK de New Relic C](/docs/agents/c-sdk/get-started/introduction-c-sdk) en un contenedor docker (u otro contenedor) para monitor una o más de sus aplicaciones C.

## Instale C SDK en un entorno de contenedor [#install-container]

Requisitos:

* Cumplir con [los requisitos del SDK de C](/docs/agents/c-sdk/get-started/c-sdk-compatibility-requirements)
* C SDK versión 1.2 o superior

<Callout variant="caution">
  Los datos transmitidos desde el agente al daemon **no** están cifrados. Recomendamos utilizar únicamente una conexión de red privada entre el agente y daemon. Esto sólo se aplica cuando el agente y daemon se ejecutan en hosts diferentes.
</Callout>

Para instalar C SDK para un entorno de contenedor, recomendamos instalar el [daemonC SDK](/docs/agents/c-sdk/get-started/introduction-c-sdk#architecture) en un contenedor docker independiente:

1. Instale el daemon clonando el [repositorio C SDK](https://github.com/newrelic/c-sdk) y compilando el daemon. Esto se hace de forma más eficaz mediante el comando `make daemon`. Consulte [README.md](https://github.com/newrelic/c-sdk/blob/master/README.md#building-the-c-sdk) para obtener más detalles.

   Si está utilizando Docker, puede utilizar la [imagen del daemon C SDK en Dockerhub](https://hub.docker.com/r/newrelic/c-daemon).

2. Inicie el daemon usando los argumentos `--address` y `--watchdog-foreground`. El argumento `--address` se utiliza para establecer un puerto donde el daemon acepta conexiones. El argumento `--watchdog-foreground` garantiza que el daemon se ejecute en primer plano.

Luego, use el SDK de C en su aplicación en contenedores:

1. Siga los pasos para [agregar el SDK de C a su código](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code).
2. Apunte el SDK de C al daemon agregando una [llamada`newrelic_init` ](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a03f07e64a51b5f0cd51caa4f28c8b6c1)y pasando un argumento `address` válido. El valor de este argumento debe ser `HOST:PORT`, donde `HOST` es el nombre o la dirección IP del host donde se ejecuta el daemon y `PORT` es el número de puerto donde escucha el daemon .
