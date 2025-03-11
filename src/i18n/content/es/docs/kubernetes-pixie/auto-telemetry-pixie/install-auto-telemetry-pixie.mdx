---
title: Instalar telemetría automática con Pixie
tags:
  - Pixie Auto-telemetry
  - Service monitoring
  - Kubernetes
  - eBPF
metaDescription: How to install Auto-telemetry with Pixie in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Para comenzar a utilizar la telemetría automática con Pixie, comience con nuestra [instalación guiada](https://one.newrelic.com/marketplace?state=fc4edc3d-8214-a314-7432-3e62d7de43d7). La instalación guiada desplegará la integración New Relic con Pixie en su clúster. No necesita realizar ninguna configuración o instalación adicional para comenzar a usar Pixie.

Si desea instalar Auto-telemetría con Pixie en múltiples clústeres, vuelva a ejecutar la instalación guiada para cada clúster adicional.

## Requisitos previos generales para usar Pixie [#general-prereqs]

¿Listo para comenzar? Si aún no tiene una, [regístrese para obtener una cuenta New Relic](https://newrelic.com/signup). ¡Es gratis, para siempre!

Consejos antes de empezar:

* Revise esta [descripción general de Pixie seguridad de los datos para conocer](/docs/auto-telemetry-pixie/pixie-data-security-overview) las acciones que debe tomar para proteger sus datos.
* Asegúrate de que tu clúster tenga suficiente memoria. Pixie requiere, como mínimo, 1 GB de memoria en cada nodo de su clúster. Revise esta [descripción general de la administración de memoria de Pixie](/docs/auto-telemetry-pixie/manage-pixie-memory) para conocer las acciones a seguir para ajustar el uso de la memoria.
* Asegúrate de que Pixie se ejecute en modo privilegiado.
* Revisa los demás [requisitos técnicos de Pixie](https://docs.px.dev/installing-pixie/requirements/).

## Los pasos de configuración dependen del estado de su cuenta [#general-setup]

Utilice la siguiente tabla para saber dónde empezar a instalar Auto-telemetría con Pixie. El lugar donde comienza la instalación depende de si ya tiene una cuenta New Relic o Pixie, o ambas.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        New Relic
      </th>

      <th>
        Duendecito
      </th>

      <th>
        Próximos pasos
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td className="fcenter">
        <Icon
          style={{color: 'green'}}
          name="fe-check"
        />
      </td>

      <td className="fcenter">
        <Icon
          style={{color: 'red'}}
          name="fe-x-circle"
        />
      </td>

      <td>
        Inicie la instalación guiada al [comienzo del proceso](#install-beginning).
      </td>
    </tr>

    <tr>
      <td className="fcenter">
        <Icon
          style={{color: 'green'}}
          name="fe-check"
        />
      </td>

      <td className="fcenter">
        <Icon
          style={{color: 'green'}}
          name="fe-check"
        />
      </td>

      <td>
        Si ya tienes ambos tipos de cuentas y usaste la misma dirección de correo electrónico para cada una de ellas, haz clic en el ícono New Relic en la UI de Pixie. Esto lo llevará a la sección [Configurar el archivo de comando/manifiesto (yaml) de HELM](#install-helm-command-manifest) de la instalación guiada. Luego, sigue los pasos.

        Si utiliza direcciones de correo electrónico diferentes en Pixie y New Relic, cree una nueva cuenta para Pixie o New Relic para que coincida con las direcciones de correo electrónico de ambos productos. También puede comunicarse con el soporte de New Relic para vincular manualmente su cuenta New Relic existente con su cuenta Pixie.
      </td>
    </tr>

    <tr>
      <td className="fcenter">
        <Icon
          style={{color: 'red'}}
          name="fe-x-circle"
        />
      </td>

      <td className="fcenter">
        <Icon
          style={{color: 'green'}}
          name="fe-check"
        />
      </td>

      <td>
        Si sigues un enlace a New Relic desde la UI de Pixie y no tienes una cuenta New Relic , primero debes crear una. Haga clic en el icono New Relic en la UI de Pixie y siga los pasos para crear una cuenta New Relic . Cuando lo haces, tu cuenta Pixie se vincula a él. Luego, [continúe con el proceso de instalación guiada](#install-helm-command-manifest).
      </td>
    </tr>

    <tr>
      <td className="fcenter">
        <Icon
          style={{color: 'red'}}
          name="fe-x-circle"
        />
      </td>

      <td className="fcenter">
        <Icon
          style={{color: 'red'}}
          name="fe-x-circle"
        />
      </td>

      <td>
        Regístrese para obtener una [cuenta gratuita de New Relic](https://www.newrelic.org/signup). Luego, inicie la instalación guiada al [comienzo del proceso](#install-beginning).
      </td>
    </tr>
  </tbody>
</table>

## Instalar usando el proceso de instalación guiada [#install-beginning]

1. Abra nuestra [instalación guiada de monitoreo de New Relic](https://one.newrelic.com/marketplace?state=fc4edc3d-8214-a314-7432-3e62d7de43d7).

2. Seleccione la cuenta que desea utilizar para la instalación guiada y haga clic en

   <DNT>
     **Continue**
   </DNT>

   . Nota: si tiene una sola cuenta, no verá esta opción.

3. Complete los campos restantes y haga clic en

   <DNT>
     **Continue**
   </DNT>

   para completar el resto de la instalación.

## Instalar desde el archivo de comando/manifiesto (yaml) de HELM [#install-helm-command-manifest]

Si llegó al proceso de instalación guiada siguiendo un enlace de Pixie o desde New Relic, sus pasos comienzan aquí.

1. Seleccione la cuenta y el clúster para la instalación. Si es necesario, seleccione un namespace.

   <Callout variant="important">
     Actualmente, Pixie funciona mejor en clústeres con hasta 100 nodos. (Exceder los 100 nodos puede provocar un uso excesivo de la memoria y que el script no se ejecute). Recordatorio: el ajuste de escala automático puede aumentar rápidamente el número de nodos.
   </Callout>

2. Haga clic en <DNT>**Continue**</DNT>.

3. Seleccione los datos que desea recopilar, observar y depurar y haga clic en <DNT>**Continue**</DNT>.

4. En la página <DNT>**Choose install method**</DNT> , seleccione <DNT>**Helm**</DNT> o <DNT>**manifest**</DNT>.

   <CollapserGroup>
     <Collapser
       className="freq-link"
       id="helm-method"
       title="Método de timón"
     >
       Ejecute el comando Helm proporcionado en su línea de comando. Si le preocupa la cantidad de datos de Pixie que ingerirá, consulte nuestras [estrategias para reducir la ingesta](/docs/auto-telemetry-pixie/manage-pixie-data).

       Helm instala un paquete que contiene el agente New Relic Infrastructure , una integración para reunir Prometheus métrica y Kubernetes evento, y la integración Pixie. El despliegue tarda unos minutos en completarse. Para ver el estado de la instalación en el clúster, ejecute `kubectl get pods -n newrelic`.

       Para obtener información general sobre la instalación de una integración de Kubernetes, consulte nuestra documentación sobre [los requisitos de instalación de Helm](/docs/integrations/kubernetes-integration/installation/install-kubernetes-integration-using-helm/#h2-compatibility-and-requirements).
     </Collapser>

     <Collapser
       className="freq-link"
       id="manifest-method"
       title="método manifiesto"
     >
       Ejecute el comando proporcionado en su consola e inserte la ruta al manifiesto descargado. Si está ejecutando su clúster de Kubernetes en la nube, consulte los pasos adicionales en los [documentos de Kubernetes](/docs/integrations/kubernetes-integration/installation/kubernetes-integration-install-configure/#cloud-platforms).
     </Collapser>
   </CollapserGroup>

5. Haga clic en <DNT>**Continue**</DNT> para abrir la página <DNT>**Listening for data**</DNT> .

6. Cuando reciba el mensaje <DNT>**See your data**</DNT>, haga clic en <DNT>**Kubernetes Cluster Explorer**</DNT> para ver su clúster.

   La telemetría automática con Pixie podría reiniciarse después de la instalación. Esto se debe a la característica de actualización automática.

<InstallFeedback/>

## Si vincula la cuenta incorrecta de Pixie y New Relic [#link-wrong-accounts]

Comuníquese con el soporte para desvincular una cuenta Pixie de su cuenta New Relic. Tenga en cuenta que si desvincula una cuenta Pixie que se creó automáticamente mediante la instalación guiada, perderá el acceso a esa cuenta Pixie.

## Actualiza la integración de Pixie [#upgrade]

Para determinar su versión de integración de Pixie, consulte nuestra [documentación de resolución de problemas de Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/troubleshooting/get-pixie-integration-version).

La integración de Pixie se instala como parte de la integración de Kubernetes de New Relic. Para actualizar la integración de Kubernetes, consulte nuestra [documentación de instalación de Kubernetes](/install/kubernetes#update).

<Callout
  variant="important"
  title="AVISO EOL"
>
  Después de agosto de 2022, dejaremos de admitir varias capacidades, incluida la versión 1 de nuestra integración con Pixie. Para obtener más detalles, incluido cómo prepararse fácilmente para esta transición, consulte nuestra [publicación en el Foro de soporte](https://discuss.newrelic.com/t/july-2022-end-of-life-announcements/188318).
</Callout>

## Desinstalar la integración de Pixie [#uninstall]

La integración de Pixie se instala como parte de la integración de Kubernetes de New Relic. Para desinstalar la integración de Kubernetes, consulte nuestra [Desinstalación de la integración de Kubernetes](/docs/kubernetes-pixie/kubernetes-integration/uninstall-kubernetes).
