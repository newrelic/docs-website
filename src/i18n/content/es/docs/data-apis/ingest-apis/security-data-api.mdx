---
title: Enviar datos utilizando la API de datos de seguridad
metaDescription: Send your security data using our security data API.
freshnessValidatedDate: never
translationType: machine
---

Envíe vulnerabilidades personalizadas o datos de seguridad a New Relic a través de nuestra API de datos de seguridad mediante una simple solicitud POST. Utilice la API si actualmente no admitimos su servicio de seguridad con una integración o si el envío de datos de seguridad a través de una API se adapta mejor a su flujo de trabajo personalizado.

## Requisitos previos

* Una New Relic

  <InlinePopover type="licenseKey"/>

  para la cuenta a la que desea informar datos.

## Enviar datos a New Relic [#send-data]

Para enviar vulnerabilidades u otros datos de seguridad, envíe un objeto JSON mediante el método POST que contenga una matriz de hallazgos. Cada objeto en la matriz describe una vulnerabilidad detectada u otro evento de seguridad. Asegúrate de incluir el extremo de seguridad para New Relic. Utilice uno de los siguientes según su región:

* Para los EE.UU., `https://security-api.newrelic.com/security/v1`
* Para la UE, `https://security-api.service.eu.newrelic.com/security/v1`

A continuación se muestra un ejemplo de solicitud POST. Echaremos un vistazo a los componentes individuales en la siguiente sección:

```
curl -X POST https://security-api.newrelic.com/security/v1 \
  -H "Content-Type: application/json" \
  -H "Api-Key: INSERT_YOUR_API_KEY " \
  -d '{
    "findings": [
        {
            "source": "Insert security tool name, such as Snyk",
            "title": "Insert a short description of security issue",
            "message": "Insert long description and remediation advice",
            "issueType": "Insert Library|Container|Host Vulnerability",
            "issueId": "Insert vulnerability identifier like CVE, CWE, CIS, etc.",
            "issueVendorId": "Vendor-specific identifier if different from issueId",
            "issueInstanceKey": "Insert the unique path to this instance of the issue",
            "disclosureUrl": "Insert a URL to additional information on the issue",
            "severity": "Insert CRITICAL|HIGH|MEDIUM|LOW|INFO",
            "remediationExists": Insert boolean true | false (no quotation marks),
            "remediationRecommendation": "Explain the action to take",
            "detectedAt": "Insert timestamp when detected, in milliseconds since epoch",
            "entityType": "Insert Host|Service|Repository|Image|AWS",
            "entityLookupValue": "Insert a URL to find entity",
            "entityGuid": "ABCDEFG",
            "customFields": {
                "sourceDetailInfo": "DecadeCoffee"
            }
        }
    ]
}'
```

## Parámetro URL [#url-params]

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Parámetro
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `repository`
      </td>

      <td>
        Opcional: la URL del repositorio de la aplicación con su integración.
      </td>
    </tr>
  </tbody>
</table>

## Campos requeridos [#req-fields]

Los siguientes campos son obligatorios en la solicitud:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `source`
      </td>

      <td>
        El nombre descriptivo de usuario de la herramienta de seguridad que generó este evento, como `Snyk` o `Dependabot`.
      </td>
    </tr>

    <tr>
      <td>
        `title`
      </td>

      <td>
        Un breve resumen (50-100 caracteres) del problema. Debe ser adecuado para su uso como título de página o contenido de celda de tabla.
      </td>
    </tr>

    <tr>
      <td>
        `message`
      </td>

      <td>
        Descripción detallada del problema, incluida la explicación del hallazgo y cómo solucionarlo. Puede incluir rebajas.
      </td>
    </tr>

    <tr>
      <td>
        `issueType`
      </td>

      <td>
        Un tipo de problema soportado por New Relic. Actualmente estos son:

        * `Library Vulnerability`
        * `Container Vulnerability`
        * `Host Vulnerability`
      </td>
    </tr>

    <tr>
      <td>
        `issueID`
      </td>

      <td>
        Un identificador estándar para el problema detectado. Por ejemplo, el identificador CVE o CWE, o la regla de puntos de referencia del CIS. Si varias herramientas detectan el mismo problema, el `issueId` debería ser el mismo en todas las herramientas.
      </td>
    </tr>

    <tr>
      <td>
        `severity`
      </td>

      <td>
        El consenso comunitario definido sobre la gravedad del problema o la herramienta de escaneo. Este debería ser uno de los siguientes:

        * `CRITICAL`
        * `HIGH`
        * `MEDIUM`
        * `LOW`
        * `INFO`
      </td>
    </tr>

    <tr>
      <td>
        `entityType`
      </td>

      <td>
        Se utiliza para correlacionar un problema informado con una [entidad](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic/) conocida en la plataforma New Relic. Debe ser uno de los tipos reconocidos por la API de búsqueda de entidades, o casos especiales admitidos por la API de seguridad (`Image` y `AWS`).

        Un ejemplo con `entityLookupValue` sería:

        ```
        "entityType": "AWS",
        "entityLookupValue": "arn:aws:rds:us-east-2:403720000000:db:my-database"
        ```
      </td>
    </tr>

    <tr>
      <td>
        `entityLookupValue`
      </td>

      <td>
        Se utiliza para encontrar la entidad apropiada de ese tipo.

        Un ejemplo con `entityType` sería:

        ```
        "entityType": "Repository",
        "entityLookupValue": "https://github.com/newrelic/ruby_agent"
        ```
      </td>
    </tr>
  </tbody>
</table>

## Campos opcionales [#optional-fields]

Su solicitud puede contener cualquiera de los siguientes campos opcionales:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `cvssScore`
      </td>

      <td>
        La puntuación CVSSv3 asignada al CVE, como un número de punto flotante en JSON/
      </td>
    </tr>

    <tr>
      <td>
        `cvssVector`
      </td>

      <td>
        El vector CVSSv3 que describe este CVE.
      </td>
    </tr>

    <tr>
      <td>
        `issueInstanceKey`
      </td>

      <td>
        Una ruta o identificador que identifica de forma única la aparición de esta instancia de vulnerabilidades de otras instancias en el mismo repositorio, servicio, entidad o cuenta. Por ejemplo: ruta completa al archivo más el número de línea para un hallazgo de código fuente, o ruta a un binario vulnerable en un host o en una imagen de contenedor. La clave de instancia debe ser idéntica para hallazgos repetidos del mismo problema y, al mismo tiempo, diferenciar varias instancias en las que cada una necesita solución. Si no se proporciona, se utiliza el `entityGuid` resuelto o `entityLookupValue` proporcionado por el usuario.
      </td>
    </tr>

    <tr>
      <td>
        `issueVendorID`
      </td>

      <td>
        Identificador específico del proveedor para el problema, si es diferente de `issueId`.
      </td>
    </tr>

    <tr>
      <td>
        `disclosureUrl`
      </td>

      <td>
        Una URL a información adicional sobre el problema, ya sea del sitio web del proveedor de la herramienta fuente o de referencias de divulgación pública. Debería ser una fuente confiable.
      </td>
    </tr>

    <tr>
      <td>
        `remediationExists`
      </td>

      <td>
        Booleano que indica si se sabe que existe una solución para el problema.
      </td>
    </tr>

    <tr>
      <td>
        `remediationRecommendation`
      </td>

      <td>
        Texto breve que explica la acción a tomar para remediar. Para dependencia de terceros, utilice el formulario `upgrade PACKAGE_NAME to X.Y.Z`
      </td>
    </tr>

    <tr>
      <td>
        `detectedAt`
      </td>

      <td>
        Marca de timestamp de cuando se detectó el problema, en milisegundos desde epoch. Si no se proporcionan, utilizamos el momento en que los datos se envían a New Relic.
      </td>
    </tr>
  </tbody>
</table>
