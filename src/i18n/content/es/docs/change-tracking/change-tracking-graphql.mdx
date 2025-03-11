---
title: Seguimiento de cambios utilizando NerdGraph (GraphQL)
tags:
  - APM
  - APM UI pages
  - Events
  - Browser
  - Mobile
  - NerdGraph
metaDescription: Here's how to use NerdGraph (GraphQL) to designate what you want to capture with change tracking.
freshnessValidatedDate: never
translationType: machine
---

La característica de seguimiento de cambios le permite realizar un seguimiento del efecto de diversos cambios en sus clientes y sistemas. Por ejemplo, si realiza alguna implementación, puede usar la característica de seguimiento de cambios para monitor los resultados en los gráficos UI de New Relic. También tendrás acceso a características que te ayudarán a comprender los efectos de esos cambios.

En lugar de designar qué cambios desea monitor usando nuestra CLI o una integración CI/CD, puede hacer lo mismo usando mutaciones GraphQL y consultar a través de nuestra API NerdGraph.

Para obtener información general sobre el uso de NerdGraph, consulte [Introducción a NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph). Si aún no lo ha hecho, cree su cuenta New Relic gratuita a continuación para comenzar a monitorear sus datos hoy.

<InlineSignup/>

## Requisitos [#api-requirements]

Los requisitos incluyen:

* [Requisitos de NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/#authentication)
* Permisos de usuario: cualquier [tipo de usuario](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) puede usar NerdGraph para crear un marcador de despliegue y realizar un seguimiento de otros cambios, pero solo los usuarios de la plataforma completa pueden acceder a las experiencias UI de seguimiento de cambios seleccionadas.

## Comprender los campos en el explorador NerdGraph [#field-definitions]

Los campos que utilizará en su consulta GraphQL se clasifican en estos tipos generales:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="required-fields"
    title="Atributo requerido"
  >
    Para realizar un seguimiento de un cambio, como un despliegue, debe configurar lo siguiente:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Atributo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `entityGuid`
          </td>

          <td>
            El valor `entityGuid` es el identificador único asignado por New Relic a los componentes de su sistema durante los procesos de instrumentación y configuración. Para obtener más información sobre la entidad New Relic y cómo encontrar GUID de entidad, consulte esta [guía](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic/#find).
          </td>
        </tr>

        <tr>
          <td>
            `version`
          </td>

          <td>
            El valor del atributo de versión puede ser cualquier cosa, aunque recomendamos utilizar el número de versión establecido durante el proceso de compilación. Para ver un ejemplo de cómo se puede hacer esto, consulte nuestra [documentación del complemento de implementación de Jenkins](#jenkins-markers) a continuación. Si ya informa los números de versión a New Relic <InlinePopover type="mobile"/>o por algún otro medio, le recomendamos usar los mismos aquí para prepararse para la próxima característica que le permitirá facetar y correlacionar datos por versión.
          </td>
        </tr>
      </tbody>
    </table>

    <Callout variant="tip">
      Si está abandonando la API REST legacy , deberá comenzar a usar el GUID de entidad de su aplicación en lugar del ID de aplicación. Puede encontrar fácilmente el GUID en NerdGraph con esta consulta:

      ```graphql
      {
        actor {
          entitySearch(query: "domainId=INSERT_YOUR_APPID") {
            count
            query
            results {
              entities {
                entityType
                name
                guid
              }
            }
          }
        }
      }
      ```
    </Callout>
  </Collapser>

  <Collapser
    className="freq-link"
    id="optional-fields"
    title="Atributo opcional"
  >
    Puede definir algún atributo opcional y útil para agregar contexto al cambio que está rastreando. Estos atributos también pueden habilitar ciertas características de seguimiento de cambios.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Atributo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `changelog`
          </td>

          <td>
            Puede enviar una URL o cualquier cadena para el atributo de registro de cambios. Por ejemplo: `changelog: "Added: /v2/deployments.rb, Removed: None"` o `changelog: "https://github.com/nodejs/node/blob/v4.2.3/CHANGELOG.md"`.
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            Puede enviar cualquier cadena para el atributo de descripción. Por ejemplo: `description: "Added a deployments resource to the v2 API"`.

            El atributo de descripción puede ser donde usted elija insertar información codificada de sus procesos internos de gestión de despliegue. Puede utilizar ID o etiquetas que asigne a cada confirmación o despliegue que describan el aspecto organizacional o comercial del trabajo, por ejemplo, `EU_MAINT_DMARK_v101`.
          </td>
        </tr>

        <tr>
          <td>
            `commit`
          </td>

          <td>
            Puede enviar cualquier cadena para el atributo `commit` y le sugerimos utilizar el SHA de confirmación asociado con el despliegue o cambio, por ejemplo, `commit: "r3ws4sa43f"`.
          </td>
        </tr>

        <tr>
          <td>
            `deepLink`
          </td>

          <td>
            Puede enviar cualquier URL para el atributo `deepLink` . Sugerimos usar uno que ayude a alguien a evaluar un cambio en New Relic para llegar rápidamente a un lugar donde pueda tomar más medidas, como Jenkins, ArgoCD o GitHub Actions. Aquí hay un ejemplo: `deepLink: "http://localhost:8080/job/PipelineV2/configure"`.
          </td>
        </tr>

        <tr>
          <td>
            `deploymentType`
          </td>

          <td>
            Puede dividir los cambios relacionados con la implementación en diferentes tipos. Estos tipos se alinean con técnicas de implementación comunes, pero también existe un tipo `OTHER` . Los tipos incluyen:

            * `BASIC`
            * `BLUE_GREEN`
            * `CANARY`
            * `ROLLING`
            * `SHADOW`
            * `OTHER`

              Asignar un tipo a cada despliegue lo ayudará a filtrar los resultados en las interfaces de seguimiento de cambios y los resultados de la consulta NerdGraph/NRQL.
          </td>
        </tr>

        <tr>
          <td>
            `groupId`
          </td>

          <td>
            Es posible que desee agrupar el despliegue en los casos en los que esté realizando una serie de cambios en una o más entidades o publicando muchos cambios en muchas entidades dentro de su sistema. Al establecer el mismo valor de atributo `groupId` para cada despliegue relacionado, puede ver más fácilmente estos cambios juntos en las interfaces de New Relic o usar `groupId` para restringir los resultados de la consulta.

            El `groupId` puede ser cualquier cadena de su elección y puede continuar agregando despliegue a un grupo después del primer uso de `groupId` (en caso de que desee relacionar este despliegue con uno que sucedió hace semanas o incluso meses). .

            <Callout variant="tip">
              Además de utilizar el `groupId` para relacionar muchos despliegues, también puede utilizar el atributo para definir cambios de larga duración. Por ejemplo, dos despliegues con el mismo `groupId` podrían abarcar un período durante el cual se suprimieron las alertas o se estaba produciendo alguna migración.
            </Callout>
          </td>
        </tr>

        <tr>
          <td>
            usuario
          </td>

          <td>
            Puede ser cualquier cadena, por ejemplo, `user: "datanerd@example.com"`.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    className="freq-link"
    id="nr-attributes"
    title="Atributo establecido por New Relic"
  >
    New Relic establece automáticamente el atributo `timestamp` y `deploymentId` . Puede proporcionar un valor `timestamp` como anulación, pero New Relic siempre generará `deploymentId` para garantizar la unicidad.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Atributo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            timestamp
          </td>

          <td>
            La hora a la que se recibió la llamada de NerdGraph. Puede proporcionar una anulación aquí como el número de milisegundos desde la época de Unix. Por ejemplo: `timestamp: 1032480000000`.

            <Callout variant="important">
              Se aplica una limitación firme de que toda marca de tiempo debe ser +/- 24 horas de la hora actual en la que se recibe la llamada de NerdGraph o la carga útil será rechazada.
            </Callout>
          </td>
        </tr>

        <tr>
          <td>
            `deploymentId`
          </td>

          <td>
            Un identificador único que se genera cuando se registra el despliegue. Si bien no puede configurar `deploymentId`, puede usarlo en su consulta NerdGraph y NRQL para ubicar un despliegue específico. Aquí hay un ejemplo: `deploymentId: "8a3a594c-e726-4bc2-8078-26dffec9a3d8"`.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Crear un marcador de seguimiento de cambios usando una mutación [#mutation-examples]

Para registrar un cambio, como un despliegue, deberá incluir los campos obligatorios y luego decidir si desea incluir campos opcionales.

A continuación se muestran algunos ejemplos de mutaciones de GraphQL que muestran algunas formas de crear un marcador de despliegue:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="simple-mutation"
    title="Mutación con solo campos obligatorios"
  >
    ```graphql
    mutation {
      changeTrackingCreateDeployment(
        deployment: {
          version: "0.0.1",
          entityGuid: "INSERT_YOUR_GUID"
        }
      )
        {
          deploymentId
          entityGuid
        }
    }
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="optional-mutation-example"
    title="Mutación con campos opcionales"
  >
    ```graphql
    mutation {
      changeTrackingCreateDeployment(
        deployment: {
          version: "0.0.1",
          user: "INSERT_YOUR_NAME",
          timestamp: INSERT_MS_EPOCH_TIMESTAMP,
          groupId: "78641",
          entityGuid: "INSERT_YOUR_GUID",
          description: "create a new marker",
          deploymentType: BASIC,
          deepLink: "example.com/path",
          commit: "INSERT_A_COMMIT_HASH",
          changelog: "test log"
        }
      )
      {
        changelog
        commit
        deepLink
        deploymentId
        deploymentType
        description
        entityGuid
        groupId
        timestamp
        user
        version
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Que sigue [#whats-next]

Después de haber utilizado mutaciones para designar los cambios que desea rastrear, puede analizar el efecto de esos cambios en la UI de New Relic:

* Consulte sus cambios: puede escribir su propia consulta GraphQL o NRQL para ver detalles sobre los cambios que está siguiendo. Para más detalles, consulte [consultar datos de cambio](/docs/change-tracking/change-tracking-view-analyze/#query-deployments).
* Utilice nuestros gráficos seleccionados: para obtener más detalles, consulte [Cómo ver y analizar sus cambios en New Relic](/docs/change-tracking/change-tracking-view-analyze).
