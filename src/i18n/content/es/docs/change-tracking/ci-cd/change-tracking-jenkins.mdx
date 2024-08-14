---
title: Seguimiento de cambios usando Jenkins
tags:
  - APM
  - APM UI pages
  - Events
  - Browser
  - Mobile
  - NerdGraph
metaDescription: Here's how to use Jenkins to designate what you want to capture with change tracking.
freshnessValidatedDate: never
translationType: machine
---

La característica de seguimiento de cambios le permite designar los cambios que desea monitor para ver cómo afectan a sus clientes y sistemas. Si bien puede designar qué cambios desea monitor usando GraphQL o nuestra CLI, también puede registrar cambios usando canalizaciones en Jenkins.

Una canalización llamará a cualquier compilación que especifique y también pasará variables de entorno adicionales al proceso de compilación. Esto completa los datos necesarios para que su despliegue aparezca en los gráficos de New Relic. Verá los resultados en la interfaz de usuario de seguimiento de cambios y podrá utilizar esta información para comprender el impacto de los cambios en el estado de la entidad.

## Requisitos previos [#prereq]

Para instalar el complemento de Jenkins, necesitará:

* Jenkins 1.580.1 o más reciente
* Privilegios de administrador de Jenkins

## Instale el complemento de Jenkins [#install]

1. Cuando abras Jenkins, ve a <DNT>**Manage Jenkins**</DNT> y luego <DNT>**Plugins**</DNT>.

   <img
     title="Screenshot showing where to find Manage Jenkins"
     alt="Screenshot showing where to find Manage Jenkins"
     src="/images/tracking_screenshot-crop_jenkins-home-page.webp"
   />

2. Haga clic en <DNT>**Available plugins**</DNT> y luego busque `newrelic-deployment-notifier`. Haga clic en <DNT>**Install**</DNT>.

   <img
     title="Screenshot showing how to install the plugin"
     alt="Screenshot showing how to install the plugins"
     src="/images/tracking_screenshot-crop_jenkins-install-notifier.webp"
   />

3. Aparece una nueva página con el progreso de su instalación. No es necesario reiniciar el complemento.

## Crear acción posterior a la compilación [#create-post--build-action]

Para agregar el Notificador de despliegue New Relic como una acción posterior a la compilación en la configuración del trabajo de compilación de Jenkins:

1. En la configuración de su trabajo de Jenkins, vaya a

   <DNT>
     **Post-build Actions section**
   </DNT>

   , haga clic en

   <DNT>
     **Add post-build action**
   </DNT>

   y luego seleccione

   <DNT>
     **New Relic Deployment Notifications**
   </DNT>

   .

<img
  style={{ align: "left" }}
  title="Screenshot showing the Add post-build action button, with the dropdown menu showing New Relic Deployment Notifications"
  alt="Screenshot showing the Add post-build action button, with the dropdown menu showing New Relic Deployment Notifications"
  src="/images/tracking_screenshot-crop_jenkins--postbuild.webp"
/>

2. Cree una credencial de nombre de usuario/contraseña para la [clave de usuario de API](/docs/apis/intro-apis/new-relic-api-keys/). Ingrese la clave como contraseña.

   <img
     style={{ align: "left" }}
     title="Screenshot showing credential creation dialog"
     alt="Screenshot showing credential creation dialog"
     src="/images/tracking_screenshot-crop_jenkins--credential.webp"
   />

3. Seleccione una entidad en la lista desplegable.

   <img
     style={{align: "left"}}
     title="Screenshot showing how to find Deployment Notifications"
     alt="Screenshot showing how to find Deployment Notifications"
     src="/images/tracking_screenshot-crop_jenkins--validcredential.webp"
   />

4. Agregue el valor `Version` o `Revision` requerido y cualquiera de los valores opcionales. Puede [utilizar variables de entorno](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#using-environment-variables) en estos campos, como `${BUILD_NUMBER}`.

   <img
     style={{ align: "left" }}
     title="Screenshot showing optional fields"
     alt="Screenshot showing optional fields"
     src="/images/tracking_screenshot-crop_jenkins--optional.webp"
   />

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
           Descripción
         </td>

         <td>
           Inserta una descripción de lo que estás rastreando.
         </td>
       </tr>

       <tr>
         <td>
           Revisión
         </td>

         <td>
           Revisión para el despliegue. `${BUILD_NUMBER}` podría ser un buen valor aquí.
         </td>
       </tr>

       <tr>
         <td>
           Registro de cambios
         </td>

         <td>
           Referencia a la lista de cambios incurridos en el despliegue.
         </td>
       </tr>

       <tr>
         <td>
           Comprometerse
         </td>

         <td>
           Un hash para hacer referencia al ID de confirmación.
         </td>
       </tr>

       <tr>
         <td>
           Enlace profundo
         </td>

         <td>
           Un enlace profundo al trabajo de Jenkins o cualquier otra referencia al despliegue.
         </td>
       </tr>

       <tr>
         <td>
           EntityGuid
         </td>

         <td>
           La entidad de la aplicación en referencia al despliegue (ver [Más sobre el GUID de la aplicación](#guid)).
         </td>
       </tr>

       <tr>
         <td>
           Tipo de implementación
         </td>

         <td>
           El tipo de despliegue que se está realizando.
         </td>
       </tr>

       <tr>
         <td>
           Identificación del grupo
         </td>

         <td>
           Un identificador para hacer referencia a un grupo de cambios.
         </td>
       </tr>

       <tr>
         <td>
           Timestamp
         </td>

         <td>
           Timestamp opcional en formato largo Unix Epoch. Si no se proporciona, lo configuraremos en la hora en que recibimos la solicitud, que será la cantidad de milisegundos desde la época de Unix.
         </td>
       </tr>

       <tr>
         <td>
           Versión
         </td>

         <td>
           Versión de lo que se está implementando. `${BUILD_NUMBER}` podría ser un buen valor aquí.
         </td>
       </tr>

       <tr>
         <td>
           Usuario
         </td>

         <td>
           El usuario que realiza el despliegue. <DNT>**Tip:**</DNT> Puede instalar [el complemento Build User Vars](https://wiki.jenkins.io/display/JENKINS/Build+User+Vars+Plugin) para tener variables de entorno relacionadas con el usuario de Jenkins y poder usarlas en este campo, como `${BUILD_USER}`.

           <img
             style={{ align: "left" }}
             title="Screenshot showing User field set to ${BUILD_USER}"
             alt="Screenshot showing User field set to ${BUILD_USER}"
             src="/images/tracking_screenshot-crop_jenkins--user.webp"
           />
         </td>
       </tr>
     </tbody>
   </table>

5. (Opcional) Si este trabajo de Jenkins afecta a varias entidades, también se pueden agregar para recibir notificaciones. Haga clic en el botón <DNT>**Add another notification**</DNT> para agregar más aplicaciones.

## ¿Que sigue? [#whats-next]

Una vez que haya designado los cambios que desea rastrear, puede analizar el efecto de esos cambios en la UI de New Relic. Para obtener más detalles, consulte [Cómo ver y analizar sus cambios en New Relic](/docs/change-tracking/change-tracking-view-analyze).

## Quitar el complemento [#remove-plugin]

1. Desde la página

   <DNT>
     **Plugins**
   </DNT>

   , haga clic en

   <DNT>
     **Installed plugins**
   </DNT>

   .

2. Busque `newrelic-deployment-notifier`.

3. Haga clic en el `X` rojo.

   <img
     title="Screenshot to remove the plugin"
     alt="Screenshot to remove the plugin"
     src="/images/tracking_screenshot-crop_jenkins-rollback.webp"
   />
