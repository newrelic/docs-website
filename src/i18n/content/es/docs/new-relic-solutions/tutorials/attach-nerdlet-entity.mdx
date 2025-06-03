---
title: Anexar un Nerdlet a una entidad
metaDescription: Attach your Nerdlet to entities
freshnessValidatedDate: never
translationType: machine
---

Una forma para que el usuario acceda a su Nerdlet es creando un iniciador. El iniciador abre un Nerdlet desde la página de **Apps** en New Relic. También puedes proporcionar acceso a tu Nerdlet desde una [entidad](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/) en tu cuenta.

En esta guía, aprenderá cómo conectar su Nerdlet a su entidad.

## Antes de que empieces [#begin]

Si aún no lo has hecho:

* [Regístrese](https://newrelic.com/signup/) para obtener una cuenta New Relic
* [Instalar y configurar la CLI de New Relic One](https://one.newrelic.com/launcher/developer-center.launcher?pane=eyJuZXJkbGV0SWQiOiJkZXZlbG9wZXItY2VudGVyLmRldmVsb3Blci1jZW50ZXIifQ==)

## Crea un Nerdpack [#create-nerdpack]

<Steps>
  <Step>
    Actualice su CLI:

    ```sh
    nr1 update
    ```
  </Step>

  <Step>
    Crea un Nerdpack con la CLI:

    ```sh
    nr1 create --type nerdpack --name entity-nerdlet
    ```

    Esto da como resultado un Nerdpack, llamado `entity-nerdlet`, que consta de un pícher, llamado `entity-nerdlet-launcher`, y un Nerdlet, llamado `entity-nerdlet-nerdlet`.
  </Step>

  <Step>
    Sirve a tu Nerdpack:

    ```sh
    cd entity-nerdlet
    nr1 nerdpack:serve
    ```
  </Step>

  <Step>
    Vaya a [https://one.newrelic.com/?nerdpacks=local](https://one.newrelic.com/?nerdpacks=local) y navegue hasta **Apps**.

    `?nerdpacks=local` es necesario para permitir que sus Nerdpacks servidos localmente se carguen en New Relic.
  </Step>

  <Step>
    En **Your apps**, haz clic en tu iniciador para ver tu aplicación New Relic.
  </Step>
</Steps>

## Adjunta tu Nerdlet a entidad [#attach-nerdlet]

Viste cómo puedes acceder a tu Nerdlet desde un pícher. Ahora, accede a tu Nerdlet desde tu entidad.

<Steps>
  <Step>
    Desde dentro del directorio raíz de tu Nerdpack, abre `nerdlets/entity-nerdlet-nerdlet/nr1.json`. Este es el archivo de metadatos de tu Nerdlet. Emplearás este archivo para anexar tu Nerdlet a entidad.
  </Step>

  <Step>
    Agregue un objeto `context` con una matriz `entities` :

    ```json fileName=nerdlets/entity-nerdlet-nerdlet/nr1.json
    {
        "schemaType": "NERDLET",
        "id": "entity-nerdlet-nerdlet",
        "displayName": "EntityNerdletNerdlet",
        "description": "",
        "context": {
            "entities": [
            ]
        }
    }
    ```

    Esto le dice New Relic que quieres que tu Nerdlet aparezca en una matriz de contextos de entidad.
  </Step>

  <Step>
    Agregue un contexto de entidad:

    ```json fileName=nerdlets/entity-nerdlet-nerdlet/nr1.json
    {
        "schemaType": "NERDLET",
        "id": "entity-nerdlet-nerdlet",
        "displayName": "EntityNerdletNerdlet",
        "description": "",
        "context": {
            "entities": [
                {
                    "domain": "APM",
                    "type": "APPLICATION"
                }
            ]
        }
    }
    ```

    Aquí, anexaste tu Nerdlet a todas las entidades *de aplicación* en el dominio *APM* .
  </Step>

  <Step>
    Ir a **APM**.

    Debido a que estás sirviendo tu Nerdpack localmente, recuerda que aún debes especificar la cadena de consulta `?nerdpacks=local` .
  </Step>

  <Step>
    Elija cualquiera de sus aplicaciones.
  </Step>

  <Step>
    Desplázate hacia abajo para ver tu Nerdlet adjunto a la aplicación.

    Haga clic en esta opción de menú y vea su Nerdlet de la misma manera que lo hizo con el iniciador.
  </Step>
</Steps>

## Configura tu `entities` [#configure-entity]

La clave `context.entities` en el archivo `nr1.json` de tu Nerdlet especifica a qué entidad debe anexar tu Nerdlet.

### Especificar una entidad `domain` [#entity-domain]

Anexe su Nerdlet a un determinado dominio de entidad especificando `domain` como uno de los siguientes valores:

* `APM`: [Monitoreo del rendimiento de aplicaciones (APM)](/docs/apm/new-relic-apm/getting-started/introduction-apm/)
* `BROWSER`: [Browser](/docs/browser/browser-monitoring/getting-started/introduction-browser-monitoring/)
* `INFRA`: [Monitoreo de infraestructura](/docs/infrastructure/infrastructure-monitoring/get-started/get-started-infrastructure-monitoring/)
* `MOBILE`: [Monitoreo de celulares](/docs/mobile-monitoring/new-relic-mobile/get-started/introduction-mobile-monitoring/)
* `SYNTH`: [Monitoreo sintético](/docs/synthetics/synthetic-monitoring/getting-started/get-started-synthetic-monitoring/)

Por ejemplo, anexa tu Nerdlet a todas las entidades en el dominio `APM` :

```json
{
    "context": {
        "entities": [
            {"domain": "APM"}
        ]
    }
}
```

Adjunta tu Nerdlet a todas las entidades *excepto* aquellas en un dominio:

```json
{
    "context": {
        "entities": [
            {"domain": "!APM"}
        ]
    }
}
```

Adjunta tu Nerdlet a todas las entidades en múltiples dominios:

```json
{
    "context": {
        "entities": [
            {"domain": "APM"},
            {"domain": "BROWSER"}
        ]
    }
}
```

### Especificar una entidad `type` [#entity-type]

Anexe su Nerdlet a un determinado tipo de entidad especificando `type` como uno de los siguientes valores:

* `APPLICATION`
* `HOST`
* `MONITOR`

Por ejemplo, anexa tu Nerdlet a todas las entidades del tipo `APPLICATION` :

```json
{
    "context": {
        "entities": [
            {"type": "APPLICATION"}
        ]
    }
}
```

Adjunta tu Nerdlet a todas las entidades *excepto* aquellas de un tipo específico:

```json
{
    "context": {
        "entities": [
            {"type": "!APPLICATION"}
        ]
    }
}
```

Anexe su Nerdlet a cada entidad cuyo tipo coincida con uno de una matriz de tipos:

```json
{
    "context": {
        "entities": [
            {"type": "APPLICATION"},
            {"type": "MONITOR"}
        ]
    }
}
```

### Especificar una entidad `tags` [#entity-tags]

Adjunta tu Nerdlet a entidades que tengan una [etiqueta](/docs/new-relic-solutions/new-relic-one/core-concepts/use-tags-help-organize-find-your-data/) determinada.

Por ejemplo, anexe su Nerdlet a la entidad que tiene un GUID particular:

```json
{
    "context": {
        "entities": [
            {
                "tags": [
                    {
                        "key": "guid",
                        "values": [
                            "<SOME ENTITY GUID>"
                        ]
                    }
                ]
            }
        ]
    }
}
```

Anexe su Nerdlet a cada entidad que tenga `accountId` individuo *y* use el lenguaje de programación Python:

```json
{
    "context": {
        "entities": [
            {
                "tags": [
                    {
                        "key": "accountId",
                        "values": [
                            "<SOME ACCOUNT ID>"
                        ]
                    },
                    {
                        "key": "language",
                        "values": [
                            "python"
                        ]
                    }
                ]
            }
        ]
    }
}
```

### Combinar filtros [#combine-filters]

Cuando filtras la entidad a la que se agregará tu Nerdlet, puedes combinar `domain`, `type` y `tags`:

```json
{
    "context": {
        "entities": [
            {
                "domain": "APM",
                "type": "APPLICATION",
                "tags": [
                    {
                        "key": "language",
                        "values": [
                            "python"
                        ]
                    }
                ]
            },
            {
                "domain": "SYNTH",
                "type": "MONITOR"
            },
            {
                "domain": "BROWSER"
            }
        ]
    }
}
```

En este ejemplo, anexaste tu Nerdlet a:

* Todas las aplicaciones APM cuya etiqueta de metadatos especifica el idioma `python`
* **Y** todos los monitores Sintético
* **Y** todas las entidades Browser