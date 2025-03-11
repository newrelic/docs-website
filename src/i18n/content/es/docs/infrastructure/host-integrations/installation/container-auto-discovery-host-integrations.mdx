---
title: Descubrimiento automático de contenedores para integración en el host
tags:
  - Integrations
  - On-host integrations
  - Installation
metaDescription: Use discovery to automatically configure a New Relic infrastructure integration to monitor services that may run in multiple containers.
freshnessValidatedDate: never
translationType: machine
---

Nuestra característica de descubrimiento automático de contenedores le permite configurar una integración para monitor automáticamente los servicios que se ejecutan en múltiples contenedores. En el archivo de configuración de una integración, puede establecer los criterios de coincidencia del contenedor y el agente ejecuta la integración para cada contenedor local que coincida con los criterios.

Una integración se ejecutará tantas veces como encuentre elementos de descubrimiento. Si el descubrimiento no encuentra ningún contenedor, la integración no se ejecutará.

<Callout variant="tip">
  Actualmente, el [agente de infraestructura](/docs/infrastructure/install-configure-manage-infrastructure) puede descubrir el contenedor docker local.
</Callout>

## Añade marcador de posición a tu configuración [#placeholders]

En tu configuración de integración, debes crear `${discovery.<property>}` marcador de posición. Luego, estos serán reemplazados automáticamente por información específica del contenedor.

Estos ejemplos (para entornos solo docker y para Kubernetes) muestran cómo configurar una [integración NGINX](/docs/infrastructure/host-integrations/host-integrations-list/nginx/nginx-integration) para monitor todos los contenedores locales que tienen un nombre de imagen que contiene `nginx` y que están etiquetados como `env=production`. Cada servicio estará disponible a través de diferentes IP y puertos, por lo que deben ser variables.

<CollapserGroup>
  <Collapser
    id="docker-example"
    title="Ejemplo docker (no orquestado)"
  >
    Esta configuración se aplica a escenarios no orquestados, donde se usa docker sin Kubernetes u otros entornos de orquestación.

    ```
    discovery:
      docker:
        match:
          image: /nginx/
          label.env: production
    integrations:
      - name: nginx-server-metrics
        command: metrics
        env:
    # use discovery.private.ip if container doesn't have attached public ip address
          STATUS_URL: http://${discovery.ip}:${discovery.port}/status
          STATUS_MODULE: discover
          REMOTE_MONITORING: true
        labels:
          env: ${discovery.label.env}
          role: ${discovery.label.role}
    ```
  </Collapser>

  <Collapser
    id="kubernetes-example"
    title="Ejemplo de Kubernetes"
  >
    Si usa Kubernetes y nuestra [integración de Kubernetes](/docs/integrations/kubernetes-integration/get-started/introduction-kubernetes-integration), así es como se vería el ConfigMap para la integración. Tenga en cuenta que `nri-discovery-kubernetes` detectará automáticamente la configuración. Sin embargo, si se requiere alguna personalización, la herramienta acepta varios argumentos opcionales:

    * `--namespaces`: Lista de espacios de nombres separados por comas

    * `--tls`: Utilice una conexión segura (TLS)

    * `--port`: El puerto utilizado para conectarse al kubelet.

    * `--host`: El host utilizado para conectarse al kubelet.

      ```
      ---
      apiVersion: v1
      kind: ConfigMap
      metadata:
        name: nri-integration-cfg
        namespace: default
      data:
        nginx-config.yaml: |
          ---
          discovery:
            command:
              # Run discovery for Kubernetes. Use the following optional arguments:
              # --namespaces: Comma separated list of namespaces to discover pods on
              # --tls: Use secure (TLS) connection
              # --port: Port used to connect to the kubelet.
              # --host: Host used to connect to the kubelet.
              exec: /var/db/newrelic-infra/nri-discovery-kubernetes
              match:
                image: /nginx/
                label.env: production
          integrations:
            - name: nri-nginx
              env:
                # Use the discovered IP as the host address
                STATUS_URL: http://${discovery.ip}/server-status?auto
                METRICS: 1
      ```
  </Collapser>
</CollapserGroup>

## Agregar propiedades de descubrimiento [#define-discover]

Para configurar el descubrimiento, configure una entrada `discovery` en su configuración de integración YAML usando las siguientes propiedades. Un contenedor coincidirá cuando <DNT>**all**</DNT> las propiedades coincidan con los valores definidos.

<Callout variant="tip">
  Los valores de las propiedades coincidirán con un <DNT>**exact string**</DNT>, a menos que el valor a coincidir esté establecido entre `/.../`. Los contenidos dentro de las barras se compararán como [expresiones regulares](https://en.wikipedia.org/wiki/Regular_expression).
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Nombre de la clave de descubrimiento
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `ttl`

        Tipo: String
      </td>

      <td>
        Tiempo de vida de los resultados de descubrimiento almacenados en caché, utilizado para minimizar la cantidad de procesos de descubrimiento. Defina como un número seguido de una unidad de tiempo (`s`, `m` o `h`).

        Ejemplos: `30s`, `10m`, `1h`, `0`

        Predeterminado: 1m
      </td>
    </tr>

    <tr>
      <td>
        `docker`

        Tipo: propiedades YAML
      </td>

      <td>
        Definición coincidente del contenedor docker . Consiste en una propiedad `match` que contiene un mapa donde:

        * Cada clave es cualquiera de las siguientes propiedades.

        * El valor es el valor esperado de la propiedad dada para el contenedor devuelto.

        * Un contenedor coincide si todas las propiedades coinciden (operación AND).

          Las claves YAML disponibles incluyen:

        * `ip`: Dirección IP externa del contenedor, si la hubiera

        * `private.ip`: Dirección IP privada del contenedor

        * `port`: Número de puerto externo del contenedor

        * `private.port`: Número de puerto privado del contenedor

        * `image`: Nombre de la imágen

        * `name`: Nombre del contenedor

        * `label.<label name>`: Cualquier etiqueta de contenedor, accesible por su nombre.
      </td>
    </tr>
  </tbody>
</table>

### Ejemplo de descubrimiento [#example]

El siguiente ejemplo coincide con todos los contenedores docker cuya imagen comienza con `httpd:` (proporcionada como una expresión regular) y está etiquetada como `scrapable=yes`. Los resultados se almacenan en caché con un tiempo de vida de 5 minutos.

```
discovery:
  ttl: 5m
  docker:
    match:
      image: /^httpd:/
      label.scrapable: yes
```

## Información de contenedores disponibles [#container-information]

Nuestra característica de descubrimiento actualmente emite las siguientes variables, que pueden usarse para configurar su integración. El agente de infraestructura los reemplaza por los valores correspondientes del contenedor descubierto.

<Callout variant="important">
  Asegúrese de agregar el prefijo `discovery.` .
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Variable
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `${discovery.ip}`
      </td>

      <td>
        Dirección IP pública del contenedor, si la hubiera
      </td>
    </tr>

    <tr>
      <td>
        `${discovery.private.ip}`
      </td>

      <td>
        Dirección IP privada del contenedor
      </td>
    </tr>

    <tr>
      <td>
        `${discovery.port}`
      </td>

      <td>
        Número de puerto público del contenedor
      </td>
    </tr>

    <tr>
      <td>
        `${discovery.private.port}`
      </td>

      <td>
        Número de puerto privado del contenedor
      </td>
    </tr>

    <tr>
      <td>
        `${discovery.image}`
      </td>

      <td>
        Nombre de la imágen
      </td>
    </tr>

    <tr>
      <td>
        `${discovery.name}`
      </td>

      <td>
        Nombre del contenedor
      </td>
    </tr>

    <tr>
      <td>
        `${discovery.label.<label name>}`
      </td>

      <td>
        Cualquier etiqueta de contenedor, accesible por su nombre.
      </td>
    </tr>
  </tbody>
</table>

### Mapeo múltiples puertos

Cuando un contenedor expone muchos puertos públicos o privados, se puede acceder a ellos a través de `discovery.private.ports.` o `discovery.ports.` seguido de un índice que comienza en 0. Los puertos se indexan del valor de puerto privado más bajo al más alto.

Por ejemplo, un contenedor que expone los puertos privados 80 y 443 a través de los puertos públicos 2345 y 1111, respectivamente, proporcionaría las siguientes variables con sus respectivos valores:

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Variable
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `${discovery.private.ports.0}`
      </td>

      <td>
        `80` (el puerto privado más bajo)
      </td>
    </tr>

    <tr>
      <td>
        `${discovery.private.ports.1}`
      </td>

      <td>
        `443` (el puerto privado más alto)
      </td>
    </tr>

    <tr>
      <td>
        `${discovery.ports.0}`
      </td>

      <td>
        `2345` (el puerto público mapeo al puerto privado 0)
      </td>
    </tr>

    <tr>
      <td>
        `${discovery.ports.1}`
      </td>

      <td>
        `1111` (el mapeo del puerto público al puerto privado 1)
      </td>
    </tr>

    <tr>
      <td>
        `${discovery.private.port}`
      </td>

      <td>
        `80` (igual que `${discovery.private.ports.0}`)
      </td>
    </tr>

    <tr>
      <td>
        `${discovery.port}`
      </td>

      <td>
        `2345` (igual que `${discovery.ports.0}`)
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="important">
  Observe que la palabra `port` es singular en las variables no indexadas y plural en las variables indexadas.
</Callout>

### Puertos mapeo por nombre de protocolo

Además de la indexación de la sección anterior, también se puede hacer referencia a los puertos por su nombre de protocolo (como `tcp`, `udp`, etc.). Por ejemplo, `${discovery.ports.tcp}` o `${discovery.ports.udp}`.

Si varios puertos coinciden con el mismo protocolo, también se pueden indexar según las reglas de la sección anterior: `${discovery.ports.tcp.0}`, `${discovery.ports.tcp.1}`, etc.
