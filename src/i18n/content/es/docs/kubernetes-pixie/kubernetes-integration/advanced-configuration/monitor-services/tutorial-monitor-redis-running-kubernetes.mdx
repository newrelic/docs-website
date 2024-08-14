---
title: 'Tutorial: monitor Redis ejecutándose en Kubernetes'
tags:
  - Integrations
  - Kubernetes integration
  - Link apps and services
metaDescription: An example of how to set up monitoring of a service running on Kubernetes.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Este tutorial se aplica a la [integración de Kubernetes v3](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/changes-since-v3) [instalada con Helm](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm). Para obtener instrucciones sobre cómo hacer esto en v2 usando helm, consulte [esta sección](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#monitor-services). Para comprobar cómo configurar servicios además del manifiesto simple, consulte [esta otra página](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/monitor-services/monitor-services-running-kubernetes#config-details).
</Callout>

Si tiene un servicio ejecutándose en Kubernetes y es un [servicio que admitimos](/docs/monitor-service-running-kubernetes#integration-configs), puede habilitar el monitoreo de ese servicio agregando una sección de configuración para esa integración a la configuración de la integración de Kubernetes.

Este tutorial muestra cómo habilitar el monitoreo de un servicio Redis que se ejecuta en el libro de visitas PHP de Kubernetes. Para conocer el procedimiento general, consulte [Supervisar un servicio que ejecuta Kubernetes](/docs/monitor-service-running-kubernetes).

## Que necesitas [#requirements]

* Consulte los [requisitos generales para esta característica](/docs/monitor-service-running-kubernetes#requirements), incluidos los servicios compatibles.
* La herramienta `kubectl` línea de comando debe estar configurada para comunicarse con su clúster. Si no tiene un clúster, puede crear uno usando [Minikube](https://kubernetes.io/docs/setup/minikube).

## Paso 1: configurar una aplicación Redis de ejemplo [#set-up-redis]

Este tutorial se basa en el tutorial Kubernetes [para implementar una aplicación de libro de visitas PHP con Redis](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/). Omita el tutorial de Kubernetes y ejecute el siguiente comando para configurar la aplicación necesaria para nuestro tutorial:

```shell
kubectl create -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook/all-in-one/guestbook-all-in-one.yaml
```

Si primero desea completar el [tutorial de Kubernetes](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/), siga las instrucciones del tutorial, pero **no** siga las instrucciones de la sección <DNT>**Cleaning up**</DNT> .

## Paso 2: Habilitar el monitoreo de la instancia Redis [#monitor-redis]

La aplicación PHP Guestbook tiene tres instancias Redis : una instancia maestra y dos instancias de réplica. Cada instancia está etiquetada con una etiqueta donde `app=redis`. Para este ejemplo, usamos nuestra [integración de monitoreo de Redis](/docs/integrations/host-integrations/host-integrations-list/redis-monitoring-integration). Puede monitor tanto la instancia maestra como la réplica de Redis, por lo que no tenemos que distinguir entre ellas.

1. En el archivo `values-newrelic.yaml` YAML de nuestro [gráfico de timón](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm) , debe actualizar la sección `newrelic-infrastructure.integrations` . De [la lista de configuraciones de integración](/docs/monitor-service-running-kubernetes#integration-configs), obtenga el YAML de integración de Redis y agréguelo a la configuración de Kubernetes. La configuración específica de Redis está contenida en la clave `redis-config.yml:` :

   ```yaml
   newrelic-infrastructure:
     integrations:
       redis-config.yml:
         # Run auto discovery to find pods with label "app=redis"
         # https://docs.newrelic.com/docs/integrations/host-integrations/installation/container-auto-discovery
         discovery:
           command:
             # Run discovery for Kubernetes. Use the following optional arguments:
             # --namespaces: Comma separated list of namespaces to discover pods on
             # --tls: Use secure (TLS) connection
             # --port: Port used to connect to the kubelet. Default is 10255
             exec: /var/db/newrelic-infra/nri-discovery-kubernetes --tls --port 10250
             match:
               label.app: redis
         integrations:
           - name: nri-redis
             env:
               # using the discovered IP as the hostname address
               HOSTNAME: ${discovery.ip}
               PORT: 6379
               KEYS: '{"0":["<KEY_1>"],"1":["<KEY_2>"]}'
               labels:
                 env: production
   ```

2. Desplegar el servicio actualizado:

   ```shell
   helm upgrade --install newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml \
   --devel
   ```

   Debería poder ver lo siguiente en el registro del pod `nrk8s-kubelet` que está programado en el mismo nodo que el servicio que desea monitor:

   ```shell
   kubectl logs -n newrelic newrelic-nrk8s-kubelet-xxxxx agent
   ```

   ```
   time="2019-12-23T17:37:07Z" level=info msg="Integration health check starting" instance=redis-metrics integration=com.newrelic.redis prefix=integration/com.newrelic.redis working-dir=/var/db/newrelic-infra/newrelic-integrations
   time="2019-12-23T17:37:07Z" level=info msg="Integration health check finished with success" instance=redis-metrics integration=com.newrelic.redis prefix=integration/com.newrelic.redis working-dir=/var/db/newrelic-infra/newrelic-integrations
   ```

Si no hay errores, debería ver los datos Redis en la UI de infraestructura. Para encontrar el panel Redis , vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Third party services**</DNT> y seleccione el dashboard <DNT>**Redis**</DNT>.

Para conocer el procedimiento general sobre cómo monitor los servicios que se ejecutan en Kubernetes, incluidos más detalles sobre cómo funciona la configuración, consulte [monitor un servicio en ejecución Kubernetes](/docs/monitor-service-running-kubernetes).
