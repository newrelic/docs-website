---
title: El contenedor se está ejecutando pero el trabajo de descubrimiento no comienza
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: The container is running but discovery job will not begin
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Ha ejecutado `docker run`, pero parece que no sucede nada y ve, en el registro de la docker , un error como

```bash
[Error] KTranslate Discovery SNMP Error: There was an error when writing the /snmp-base.yaml SNMP configuration file: chtimes /snmp-base.yaml: operation not permitted.
```

Esto sucede cuando el archivo `snmp-base.yaml` tiene un permiso de propiedad que impide que el usuario docker edite el archivo, generalmente porque usted creó el archivo como usuario `root` o una cuenta privilegiada similar. El contenedor docker se ejecuta con un usuario sin privilegios que no puede modificar este archivo. Dentro del contenedor, `ktranslate` siempre intenta utilizar el ID de usuario 1000 y el ID de grupo 1000, por lo que la propiedad debe permitir que esos ID sean propietarios del archivo.

## Solución [#solution]

Desde su cuenta privilegiada, cambie la propiedad del archivo antes de poder pasarlo al contenedor de la docker . Por ejemplo, ejecute:

```bash
chown 1000:1000 snmp-base.yaml
```
