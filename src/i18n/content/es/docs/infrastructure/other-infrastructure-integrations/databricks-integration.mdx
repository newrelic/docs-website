---
title: Integración de DataBricks
tags:
  - databricks integration
  - New Relic integration
metaDescription: Install the DataBricks integration to monitor your spark metrics.
freshnessValidatedDate: '2024-09-19T00:00:00.000Z'
translationType: machine
---

La integración de New Relic con Databricks puede recopilar telemetría de Spark que se ejecuta en Databricks, así como de cualquier implementación de Spark que no se ejecute en Databricks.

De forma predeterminada, la integración se conecta automáticamente y recopila telemetría del despliegue de Spark en todos los clústeres creados a través de la UI o API en el espacio de trabajo especificado. Esta integración admite la capacidad de telemetría de Collect Spark.

## Configurar la integración [#setup]

Esta integración emplea una herramienta independiente del repositorio experimental New Relic . Esta integración se puede ejecutar en un host o localmente para realizar pruebas. Esta integración se ejecuta en estas plataformas host:

* Linux amd64
* Ventanas amd64

<Callout variant="tip">
  Para obtener más información, consulte el [archivo ReadMe de GitHub](https://github.com/newrelic-experimental/newrelic-databricks-integration) para esta integración.
</Callout>

### Desplegar en el host [#on-host-deploy]

Para implementar esta integración en un host (ejemplo: EC2), siga estos pasos:

1. Descargue el archivo apropiado para su plataforma desde la [última versión](https://github.com/newrelic-experimental/newrelic-databricks-integration/releases).

2. Extraiga el archivo a un directorio nuevo o existente.

3. Crea un directorio llamado **configs** en el mismo directorio.

4. Cree un archivo llamado `config.yml` en el directorio de configuraciones y copie en él el contenido del archivo [`configs/config.template.yml`](https://github.com/newrelic-experimental/newrelic-databricks-integration/blob/main/configs/config.template.yml) de este repositorio.

5. Edite el archivo `config.yml` para [configurar](https://github.com/newrelic-experimental/newrelic-databricks-integration#configuration) la integración adecuadamente para su entorno.

6. Desde el directorio donde se extrajo el archivo, ejecute el binario de integración empleando el siguiente comando copiando cualquier [opción de línea de comando](https://github.com/newrelic-experimental/newrelic-databricks-integration#command-line-options) según sea necesario:

```bash
# Linux
 ./newrelic-databricks-integration 
 
 # Windows
 .\newrelic-databricks-integration.exe
```

### Desplegar en un clúster de databricks [#databricks-deploy]

La integración New Relic con Databricks se puede implementar en el nodo controlador de un clúster Databricks usando un script de inicio con ámbito de clúster. El script de inicio emplea variables de entorno personalizadas para especificar el parámetro de configuración necesario para la configuración de integración.

Para instalar el script de inicio, siga estos pasos:

1. Inicie sesión en su cuenta de Databricks y navegue hasta el [espacio de trabajo](https://docs.databricks.com/en/getting-started/concepts.html#accounts-and-workspaces) deseado.

2. Siga las [recomendaciones del script de inicio](https://docs.databricks.com/en/init-scripts/index.html#recommendations-for-init-scripts) para almacenar el script `cluster_init_integration.sh` dentro de su espacio de trabajo de la manera recomendada. Por ejemplo, si su espacio de trabajo está [habilitado para el catálogo de Unity](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html#step-1-confirm-that-your-workspace-is-enabled-for-unity-catalog), debe almacenar el script de inicio en un [volumen del catálogo de Unity](https://docs.databricks.com/en/ingestion/file-upload/upload-to-volume.html).

3. Vaya a la pestaña **Compute** y seleccione el calcular multipropósito o de trabajo deseado para abrir la UI de detalles de Calcular.

4. Haga clic en el botón **Edit** para [editar la configuración del calcular](https://docs.databricks.com/en/compute/clusters-manage.html#edit-a-compute).

5. Siga los pasos para usar la UI para configurar un [scriptde inicio con ámbito de clúster](https://docs.databricks.com/en/init-scripts/cluster-scoped.html#configure-a-cluster-scoped-init-script-using-the-ui) y señalar la ubicación donde almacenó el script de inicio en el paso 2 anterior.

6. Si su clúster no está en ejecución, haga clic en el botón **Confirm** para almacenar los cambios. Luego, resetear el clúster. Si su clúster ya está en ejecución, haga clic en el botón **Confirm and restart** para almacenar los cambios y resetear el clúster.

Además, siga los pasos para [configurar las variables de entorno](https://docs.databricks.com/en/compute/configure.html#environment-variables) para agregar las siguientes variables de entorno:

* `NEW_RELIC_API_KEY`: Su [New Relic clave de usuario API](/docs/apis/intro-apis/new-relic-api-keys/#user-key).

* `NEW_RELIC_LICENSE_KEY`:Su [clave de licencia de New Relic](/docs/apis/intro-apis/new-relic-api-keys/#license-key).

* `NEW_RELIC_ACCOUNT_ID`:Su [ID de cuenta de New Relic](/docs/accounts/accounts-billing/account-structure/account-id/).

* `NEW_RELIC_REGION`:La [región](/docs/accounts/accounts-billing/account-setup/choose-your-data-center/#regions-availability) de su cuenta New Relic; una de **EE. UU.** o **la UE**.

* `NEW_RELIC_DATABRICKS_WORKSPACE_HOST`: el [nombre de la instancia](https://docs.databricks.com/en/workspace/workspace-details.html) de Databricks de destino.

* `NEW_RELIC_DATABRICKS_ACCESS_TOKEN`:Para [autenticar](https://github.com/newrelic-experimental/newrelic-databricks-integration#authentication) con un [token de acceso personal](https://docs.databricks.com/en/dev-tools/auth/pat.html#databricks-personal-access-tokens-for-workspace-users), su token de acceso personal.

* `NEW_RELIC_DATABRICKS_OAUTH_CLIENT_ID`:Para emplear una entidad de servicio para [autenticar con Databricks (OAuth M2M)](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html), el ID de cliente OAuth para la entidad de servicio.

* `NEW_RELIC_DATABRICKS_OAUTH_CLIENT_SECRET`:Para emplear una entidad de servicio para [autenticar con Databricks (OAuth M2M)](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html), un secreto de cliente OAuth asociado con la entidad de servicio.

<Callout variant="tip">
  Tenga en cuenta que `NEW_RELIC_API_KEY` y `NEW_RELIC_ACCOUNT_ID` no se emplean actualmente, pero son requeridos por el [módulo`new-relic-client-go` ](https://github.com/newrelic/newrelic-client-go)empleado por la integración.

  Además, tenga en cuenta que solo es necesario especificar el token de acceso personal o las credenciales OAuth, pero no ambos. Si se especifican ambos, las credenciales de OAuth tienen prioridad.

  Por último, cerciorar de resetear el clúster siguiendo la configuración de las variables de entorno.
</Callout>

## Instala nuestro dashboardde monitoreo DataBricks [#add-dashboard]

Para configurar nuestro dashboard DataBricks prediseñado para monitor su aplicación métrica, vaya a la [instalación dashboard DataBricks](https://one.newrelic.com/marketplace?state=34e67b15-4fe1-28ef-ff41-99658fb36820) y siga las instrucciones. Una vez instalado, el dashboard debería mostrar métrica.

Si necesita ayuda con el panel de control, consulte:

* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar su <InlinePopover type="dashboards" />modo de visualización o para agregar más contenido a su dashboard.