---
title: Conecte los servicios de Google Cloud Platform a New Relic
tags:
  - Integrations
  - Google Cloud Platform integrations
  - Get started
metaDescription: How to connect your Google Cloud Platform services to the integration with New Relic.
freshnessValidatedDate: never
translationType: machine
---

Para comenzar a recibir datos de Google Cloud Platform (GCP) con [la integración New Relic GCP](/docs/introduction-google-cloud-platform-integrations), conecte su proyecto de Google al [monitoreo de infraestructura](/docs/infrastructure) de New Relic. Si aún no tiene una, [cree una cuenta New Relic](https://newrelic.com/signup). Es gratis, para siempre.

<Callout variant="tip">
  Puede utilizar Terraform para automatizar el proceso de habilitar la integración en la nube. Lea cómo hacerlo en el [sitio de documentación oficial de Terraform](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs/guides/cloud_integrations_guide).
</Callout>

## Requisitos [#reqs]

Estos son los requisitos para la autorización:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **GCP integration requirements**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Monitoreo
      </td>

      <td>
        En la configuración del proyecto GCP <DNT>**API & Services Library**</DNT> , debes habilitar <DNT>**Google Stackdriver Monitoring API**</DNT>.
      </td>
    </tr>

    <tr>
      <td rowSpan={2}>
        Autorización
      </td>

      <td>
        <DNT>
          **For [service account](#service) authorization (recommended):**
        </DNT>

        Necesita un usuario con el rol <DNT>**Project IAM Admin**</DNT> para agregar el ID de la cuenta de servicio como miembro de su proyecto de GCP.

        En el proyecto de GCP <DNT>**IAM & admin**</DNT>, la cuenta de servicio debe tener la función <DNT>**Project Viewer**</DNT> y la función <DNT>**Service Usage Consumer**</DNT> o, alternativamente, una [función personalizada](/docs/integrations/google-cloud-platform-integrations/get-started/integrations-custom-roles).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **For [user account](#user) authorization:**
        </DNT>

        El usuario de New Relic que integrará el proyecto GCP debe tener una cuenta de Google y debe poder ver el proyecto GCP que New Relic monitor.

        En el proyecto de GCP <DNT>**IAM & admin**</DNT>, el usuario debe tener los roles <DNT>**Project Viewer**</DNT> y <DNT>**Monitoring viewer**</DNT> .

        Tenga en cuenta que este método de autorización no permitirá que New Relic recopile etiquetas y otros atributos que puedan ser útiles para limitar su consulta, panel y alerta de NRQL.

        Puede migrar el método de autorización de una cuenta de usuario a una cuenta de servicio desde el enlace <DNT>**Manage services**</DNT> en la interfaz de usuario de New Relic.
      </td>
    </tr>

    <tr>
      <td>
        Nombre del proyecto
      </td>

      <td>
        Como parte del [proceso de configuración en línea](#connect), debe identificar `Project name` de los proyectos que desea monitor con New Relic. El flujo de trabajo UI enumera automáticamente los proyectos activos que puede seleccionar.
      </td>
    </tr>

    <tr>
      <td>
        Permisos (solo para autorización de cuenta de usuario)
      </td>

      <td>
        New Relic no hereda los permisos de su cuenta de Google y, por lo tanto, no está autorizado a realizar ningún cambio en el proyecto. Además, New Relic requiere un conjunto específico de permisos de solo lectura exclusivamente para ciertos tipos de datos.

        Para obtener más información sobre los permisos de API que utiliza New Relic, consulte la [documentación de Google sobre alcances](https://developers.google.com/identity/protocols/googlescopes).
      </td>
    </tr>
  </tbody>
</table>

## Opciones de autorización [#authorization]

Para integrar su proyecto de GCP con New Relic, debe autorizar a New Relic a obtener datos de monitoreo de su proyecto de GCP. Puede elegir entre dos métodos de autorización: <DNT>**Service accounts**</DNT> o <DNT>**User accounts**</DNT>.

<CollapserGroup>
  <Collapser
    id="service"
    title="Cuenta de servicio (recomendado)"
  >
    Se recomienda la autorización de la cuenta de servicio.

    Si autoriza a New Relic a obtener datos a través de una cuenta de servicio, llamaremos a las API de su proyecto GCP utilizando un ID de cuenta de servicio y su par de claves pública/privada asociada.

    New Relic administra una cuenta de servicio de Google específica para su cuenta de New Relic; no es necesario crearlo ni administrar la clave privada asociada. Simplemente agregue el ID de la cuenta de servicio como miembro con permisos de visualización en su proyecto.

    Si su organización utiliza una [restricción de dominio](https://cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), deberá actualizar la política para permitir el dominio New Relic, `C02x1gp26`.

    Se recomienda este método de autorización, especialmente si su proyecto de GCP es administrado por un equipo. También garantiza que New Relic recopilará etiquetas y otros atributos siempre que sea posible.
  </Collapser>

  <Collapser
    id="user"
    title="Cuenta de usuario"
  >
    Si autoriza a New Relic a obtener datos a través de una cuenta de usuario, New Relic accederá a los datos de monitoreo de su proyecto GCP en nombre de un usuario de Google en particular.

    El proceso de autorización se logra a través de un flujo de trabajo OAuth, que lo redirige desde la UI de New Relic a una interfaz de autorización de Google. Sin embargo, dado que la autorización está vinculada a un usuario de Google en particular, este método no se recomienda para proyectos de GCP administrados por equipos grandes.
  </Collapser>
</CollapserGroup>

## Conecte GCP al monitoreo de infraestructura de New Relic [#connect]

<Callout variant="important">
  Si es la primera vez que configura GCP con New Relic, debe asegurarse de haber habilitado el monitoreo de la nube API para su proyecto. Puedes hacer esto en la [consola de Google Cloud](https://console.cloud.google.com/apis/api/monitoring.googleapis.com/).
</Callout>

Para conectar su cuenta de Google a New Relic con autorización de cuenta de usuario:

1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > GCP**</DNT>. En la página de integración <DNT>**Google Cloud Services**</DNT> , seleccione <DNT>**Add a GCP account**</DNT>.

2. <DNT>**Choose Authorization Method**</DNT>: seleccione <DNT>**Authorize a [Service Account](#service)**</DNT> o <DNT>**Authorize a [User Account](#user)**</DNT> y siga las instrucciones en la UI para autorizar New Relic.

3. <DNT>**Add projects:**</DNT> Seleccione los proyectos de los que desea que New Relic reciba datos.

4. <DNT>**Select services:**</DNT> De la lista de servicios disponibles para su cuenta de GCP, seleccione los servicios individuales de los que desea que New Relic reciba datos o seleccione todos los servicios.

   <Callout variant="tip">
     Estos servicios se habilitarán para <DNT>**all**</DNT> de los proyectos que seleccionó en el paso anterior. Una vez finalizado el proceso de configuración, puede ajustar los servicios que desea monitorear para cada proyecto individualmente.
   </Callout>

5. Para completar el proceso de configuración, seleccione <DNT>**Finish**</DNT>.

Si ve errores de autenticación de API, siga los [procedimientos de resolución de problemas](/docs/gcp-integration-api-authentication-errors).

Pueden pasar algunos minutos hasta que se detecten y sinteticen nuevos recursos como entidad. Consulte [los límites del sistema](/docs/data-apis/manage-data/view-system-limits) de integración en la nube para obtener más información.

## Explorar datos de aplicaciones en New Relic [#find-data]

Después de autorizar a New Relic a integrar uno o más de los servicios de su proyecto de Google, New Relic comienza a monitorear sus datos de GCP a intervalos regulares de sondeo. Después de unos minutos, los datos aparecerán en la UI de New Relic. Para [buscar y utilizar sus datos](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), incluidos enlaces a <InlinePopover type="dashboards"/>y configuraciones de alerta, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > GCP**</DNT>.

## Vincular varios proyectos de Google [#connect-mulitple]

Para su comodidad, el proceso de configuración le permite seleccionar más de un proyecto a la vez.

Después de la primera configuración, si necesita monitor proyectos de GCP adicionales con New Relic, puede repetir el procedimiento para [conectar sus servicios de GCP](#connect) tantas veces como necesite.

## Desvincula tu integración de GCP [#disconnect]

Puede [desactivar cualquiera de sus integraciones de GCP](/docs/infrastructure/new-relic-infrastructure/installation/uninstall-infrastructure-agent#disable-integrations) en cualquier momento y aún mantener su proyecto de Google conectado a New Relic.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Deshabilitar una o más integraciones de servicios GCP
      </td>

      <td>
        Para deshabilitar servicios mientras mantiene su cuenta de GCP vinculada a New Relic:

        1. Desde

           <DNT>
             **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > GCP > Manage services**
           </DNT>

           .

        2. Desde su página

           <DNT>
             **Edit GCP account**
           </DNT>

           , desmarque la casilla de verificación de cada servicio activo que desee deshabilitar.

        3. Guarde sus cambios.
      </td>
    </tr>

    <tr>
      <td>
        Deshabilite toda la integración de GCP y desvincule el monitoreo de su proyecto
      </td>

      <td>
        Para desconectar completamente su cuenta de GCP de New Relic, debe desvincular su cuenta de GCP. Esto deshabilita toda la integración de New Relic asociada con esa cuenta de GCP.

        Si registró el proyecto de GCP usando un <DNT>**user account**</DNT>, siga estos pasos:

        1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > GCP > Manage services**</DNT>.

        2. Desde su página <DNT>**Edit GCP account**</DNT> , seleccione <DNT>**Unlink this account**</DNT>.

        3. Guarde sus cambios.

           Si registró el proyecto de GCP usando un <DNT>**service account**</DNT>, siga los pasos a continuación. Si está eliminando una función personalizada, tenga en cuenta que esta función puede usarse para otros fines además del acceso a New Relic.

           Para un <DNT>**custom user role**</DNT>:

        4. Inicie sesión en New Relic y vaya a <DNT>**Infrastructure > Integrations > Google Cloud Platform**</DNT>.

        5. Vaya a <DNT>**IAM > admin > Roles**</DNT>, busque el rol, selecciónelo y seleccione <DNT>**DELETE**</DNT>.

           Para un <DNT>**standard (non-custom) user role**</DNT>:

        6. Inicie sesión en New Relic y vaya a <DNT>**Infrastructure > Integrations > Google Cloud Platform**</DNT>.

        7. Seleccione <DNT>**Manage Services**</DNT> para la cuenta que desea eliminar. Copie el valor de <DNT>**User**</DNT> y guárdelo.

        8. Inicie sesión en [Google Cloud](https://console.cloud.google.com/) y seleccione el proyecto correcto en el cuadro <DNT>**Select a project**</DNT> .

        9. En el menú de navegación, seleccione <DNT>**IAM & admin > IAM**</DNT>.

        10. Busque y seleccione el valor de usuario que guardó y luego seleccione <DNT>**REMOVE**</DNT>.
      </td>
    </tr>

    <tr>
      <td>
        Limpia tus proyectos de GCP después de desvincular New Relic
      </td>

      <td>
        Para limpiar su proyecto de GCP después de desvincularlo, siga los pasos a continuación:

        Si estuviera usando un <DNT>**user account**</DNT>:

        1. Abra la configuración de su cuenta de usuario de Google.

        2. Abra la sección <DNT>**Apps with access to your account**</DNT> .

        3. Elija <DNT>**New Relic**</DNT> aplicación.

        4. Elija <DNT>**Remove Access**</DNT>.

           Si estuviera usando un <DNT>**service account**</DNT>:

        5. Abra la consola GCP IAM.

        6. Seleccione el proyecto que desea desvincular de New Relic y haga clic en Abrir.

        7. Seleccione la cuenta de servicio que utiliza New Relic.

        8. Haga clic en el icono <DNT>**Remove**</DNT> .
      </td>
    </tr>
  </tbody>
</table>
