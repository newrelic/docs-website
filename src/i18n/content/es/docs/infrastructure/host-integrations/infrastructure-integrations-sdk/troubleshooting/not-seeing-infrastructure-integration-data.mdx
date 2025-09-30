---
title: No ver datos de integración de infraestructura
type: troubleshooting
tags:
  - Create integrations
  - Infrastructure Integrations SDK
  - Troubleshooting
metaDescription: Integration troubleshooting.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Creó una integración de infraestructura personalizada en el host utilizando el [SDK de integración](/docs/integrations/integrations-sdk/getting-started/introduction-infrastructure-integrations-sdk), pero no ve datos en la UI de infraestructura.

## Solución

Para solucionar y resolver el problema:

1. Verifique que su integración cumpla con nuestros [requisitos de integración](#requirements).
2. Después de descartar problemas comunes con los requisitos de integración, siga los procedimientos más detallados de resolución de problemas para [el registro de errores](#check-errors) y [la carga de integración](#check-loading).

<CollapserGroup>
  <Collapser
    id="requirements"
    title="Solucionar problemas de requisitos de integración"
  >
    Si no recibe datos de su integración personalizada, verifique que su integración cumpla con estos requisitos.

    <table>
      <thead>
        <tr>
          <th>
            Requisitos de integración
          </th>

          <th>
            Comentarios
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Ambiente
          </td>

          <td>
            Asegúrese de que su entorno cumpla con los [requisitos del SDK de integración](/docs/compatibility-requirements-infrastructure-integration-sdk).
          </td>
        </tr>

        <tr>
          <td>
            Archivo de configuración
          </td>

          <td>
            1. Utilice un validador como [yamllint](http://www.yamllint.com/) para verificar que el archivo de configuración sea un archivo YAML válido.
            2. Verifique que el archivo esté en la [ubicación correcta](/docs/infrastructure/integrations-sdk/get-started/create-activate-infrastructure-integration#placement-naming).
          </td>
        </tr>

        <tr>
          <td>
            Archivo de definición
          </td>

          <td>
            1. Utilice un validador como [yamllint](http://www.yamllint.com/) para verificar que el archivo de definición sea un archivo YAML válido.
            2. Verifique que los campos del encabezado tengan el [formato requerido](/docs/infrastructure/integrations-sdk/file-specifications/integration-definition-file-specifications#def-header).
            3. Verifique que el [prefijo para el inventario](/docs/infrastructure/integrations-sdk/file-specifications/integration-definition-file-specifications#def-commands) establecido en el archivo de definición no tenga más de dos niveles de profundidad.
            4. Verifique que el archivo esté en la [ubicación correcta](/docs/infrastructure/integrations-sdk/get-started/create-activate-infrastructure-integration#placement-naming).
          </td>
        </tr>

        <tr>
          <td>
            Conjuntos métricos
          </td>

          <td>
            Verifique que la integración:

            * No genera conjuntos métricos con más de 120 pares principales de valores.
            * No genera más de 1000 juegos métricos.
          </td>
        </tr>

        <tr>
          <td>
            Carga JSON
          </td>

          <td>
            Verifique que la integración no genere una única carga útil JSON de más de 5 MB.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="check-errors"
    title="Consulte el archivo de registro de integración para ver mensajes de error."
  >
    Después de descartar problemas comunes con [los requisitos de integración](#requirements), siga estos procedimientos de resolución de problemas más detallados.

    <DNT>**Recommendation:**</DNT> [Configure un archivo de registro](/docs/infrastructure/new-relic-infrastructure/troubleshooting/generating-logs-troubleshooting-infrastructure) en la configuración del agente de infraestructura. Esto ayuda a separar los tipos de errores para que pueda detectar los errores de integración más fácilmente.

    Cuando hay un error al cargar o ejecutar su integración, el agente de infraestructura agrega un mensaje de error al archivo de registro. Los errores se registran incluso si el modo `verbose` está deshabilitado.

    1. Consulte el archivo de registro para ver las líneas que incluyen `"level=error"`.
    2. Si no hay ningún mensaje de error, verifique si el agente de infraestructura está [cargando la integración correctamente](#check-loading).
  </Collapser>

  <Collapser
    id="check-loading"
    title="Comprueba que la integración se carga correctamente"
  >
    Para verificar si el agente de infraestructura está cargando la integración correctamente:

    1. Habilite [el modo`verbose` ](/docs/infrastructure/new-relic-infrastructure/troubleshooting/generating-logs-troubleshooting-infrastructure)en la configuración del agente de infraestructura.

    2. [Reinicie el agente de infraestructura](/docs/infrastructure/new-relic-infrastructure/configuration/start-stop-restart-check-infrastructure-agent-status).

    3. Verifique que las primeras líneas del archivo de log contengan dos mensajes:

       ```
       "loaded plugin" plugin=<your_integration_name>
       "found plugin config file" plugin-path="<your_integration_config_path>"
       ```

    4. Verifique si hay errores justo antes o después de estas líneas que indiquen un problema con la carga.

       El agente programa los datos que se enviarán según la programación establecida en el archivo de definición. Busque en el archivo de registro el JSON de la integración.

       <DNT>
         **JSON payload example**
       </DNT>

       ```
       nginx-server-metrics: {\"name\":\"com.newrelic.nginx\",\"protocol_version\":\"1\",\"integration_version\":\"0.5.0\",\"metrics\":
       [{\"event_type\":\"NginxSample\",\"net.connectionsAcceptedPerSecond\":0.10344827586206896,\"net.connectionsActive\":1,
       \"net.connectionsDroppedPerSecond\":0,\"net.connectionsReading\":0,\"net.connectionsWaiting\":0,\"net.connectionsWriting\":1,
       \"net.requestsPerSecond\":0.10344827586206896,\"software.edition\":\"open source\",\"software.version\":\"1.4.6 (Ubuntu)\"}],\"inventory\":{},\"events\":[]}
       ```
  </Collapser>
</CollapserGroup>
