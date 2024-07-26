---
title: El descubrimiento SNMP no encuentra ningún dispositivo
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'SNMP monitoring discovery does not find any devices, or you didn''t find all of the devices you expected.'
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Ejecutó una ejecución de descubrimiento SNMP pero no encontró todos los dispositivos esperados.

## Solución [#solution]

El proceso de descubrimiento SNMP se ejecutará en cada dirección IP de su lista desde la sección [`cidrs`](/docs/network-performance-monitoring/advanced/advanced-config/#discovery) en la configuración de descubrimiento. Durante el escaneo, se verifica el puerto TCP para garantizar que la dirección IP de destino responda. Si tiene éxito, `ktranslate` intentará comunicarse con la dirección IP a través de SNMP.

Los puntos de falla comunes en el proceso de descubrimiento incluyen:

* Tiempos de espera debidos a latencia de la red o tiempo de respuesta del dispositivo a solicitudes SNMP. Los controladores de nube Meraki [recomiendan al menos un valor de tiempo de espera de 10 segundos](https://documentation.meraki.com/General_Administration/Monitoring_and_Reporting/SNMP_Overview_and_Configuration) , por ejemplo.
* Fallos iniciales en la verificación de la capacidad de respuesta de dispositivos que generalmente se encuentran bajo posturas de seguridad más estrictas, como firewall.
* Tiempos de espera debidos a un rango de IP excesivamente grande presentado en la sección `cidrs` de la configuración de detección.

<Callout variant="important">
  De forma predeterminada, el descubrimiento SNMP utiliza 4 subprocesos para ejecutarse de forma asincrónica con un tiempo de espera de 3 segundos por dirección IP. Para un bloque CIDR `/22` con un total de 1024 direcciones IP, debe esperar aproximadamente 13 minutos para que se complete un trabajo de descubrimiento:

  ```
  1,024 IPs / 4 threads = 256 IPs per thread 
  256 IPs per thread * 3 seconds per IP = 768 seconds
  768 seconds / 60 = 12.8 minutes
  ```

  Para un bloque CIDR `/16` con 65 536 direcciones IP en total, tomaría aproximadamente 13,65 horas.
</Callout>

Para solucionar estos problemas, pruebe una o todas las siguientes soluciones:

1. Edite `snmp-base.yaml` y aumente el valor de tiempo de espera para la variable `timeout_ms` .
2. Para los dispositivos que todavía parecen no responder, establezca todos los valores `cidrs` en una longitud de `/32`, lo que obliga al proceso de descubrimiento a omitir la verificación de capacidad de respuesta y solo intenta la conexión SNMP.
3. Si recibe tiempos de espera en todo el trabajo, asegúrese de limitar los bloques CIDR proporcionados a 1024 o menos IP en total. Por ejemplo, un rango CIDR entre `/22` y `/32`. Puede proporcionar varios bloques de `/22` en un único archivo de configuración, pero en general le recomendamos escalar horizontalmente a varios contenedores cuando tenga un entorno objetivo grande en lugar de intentar hacer todo el trabajo en un solo contenedor.

<Callout variant="tip">
  Si tiene un gran conjunto de dispositivos que se omiten debido al escaneo de puertos, puede editar el archivo `snmp-base.yaml` y habilitar la opción [check_all_ips](/docs/network-performance-monitoring/advanced/advanced-config/#discovery) para omitir el escaneo de puertos y simplemente pasar directamente a probar las credenciales SNMP con cada dirección en su descubrimiento. . Tenga en cuenta que esta opción aumentará el tiempo que lleva completar un descubrimiento según los valores de tiempo de espera y reintento en la configuración.
</Callout>
