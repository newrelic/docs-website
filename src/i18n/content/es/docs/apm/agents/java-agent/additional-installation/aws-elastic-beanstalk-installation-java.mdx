---
title: Instalación de AWS Elastic Beanstalk para Java
tags:
  - Agents
  - Java agent
  - Additional installation
metaDescription: Directions for installing the New Relic Java agent with Elastic Beanstalk.
freshnessValidatedDate: never
translationType: machine
---

Si es usuario [de AWS Elastic Beanstalk](http://docs.amazonwebservices.com/elasticbeanstalk/latest/gsg/) , el agente de Java requiere una configuración adicional.

## Requisitos previos

Antes de completar la configuración, primero debe:

* Cree una [cuenta de Amazon Web Services](http://aws.amazon.com/elasticbeanstalk/) compatible.
* Crea una [cuenta New Relic ](http://newrelic.com/signup).
* [Descargue e instale el agente de Java](/docs/agents/java-agent/installation/java-agent-manual-installation).

Para completar la instalación del agente de Java en AWS Elastic Beanstalk, siga los pasos para su plataforma:

## Plataforma Tomcat

Para implementar la aplicación con la plataforma Tomcat de AWS Elastic Beanstalk:

1. En su archivo WAR, agregue los archivos `newrelic.jar` y `newrelic.yml` a `WEB-INF/lib/`.

2. Vuelva a empaquetar y desplegar su nuevo archivo WAR como una nueva aplicación o una actualización de una aplicación anterior.

3. Localice y conéctese a las instancias EC2 subyacentes. Una vez conectado, busque la ruta al archivo `newrelic.jar` usando este comando; asegúrese de buscar un directorio a la vez. Utilice `/var` o `/usr` según corresponda.

   ```
   sudo find </var | /usr> -name "newrelic.jar"
   ```

   Para pasar el indicador `-javaagent` a la JVM:

4. En la consola de AWS, abra Elastic Beanstalk.

5. Seleccione la región relevante.

6. Seleccione su entorno.

7. En el panel izquierdo, seleccione <DNT>**Configurations**</DNT>.

8. Desplácese hasta <DNT>**Updates, monitoring, and logging**</DNT> y seleccione <DNT>**Edit**</DNT> en la esquina superior derecha.

9. Desplácese hasta <DNT>**Platform Software**</DNT> y agregue la siguiente línea al campo <DNT>**JVM Options**</DNT> :

   ```
   -javaagent:/full/path/to/newrelic.jar
   ```

10. Seleccione <DNT>**Apply**</DNT> para guardar.

Su Elastic Beanstalk luego actualizará su entorno.

## Plataforma Java SE

Para implementar la aplicación con la plataforma AWS Elastic Beanstalk Java SE:

1. Agregue los archivos `newrelic.jar` y `newrelic.yml` a su proyecto, por ejemplo, en un subdirectorio llamado `opt/newrelic`.

2. Para utilizar argumentos JVM personalizados con su aplicación Java SE, le recomendamos que incluya un `Procfile` en la raíz del paquete fuente de su aplicación. Consulte [la documentación de Java SE](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/java-se-platform.html) para obtener más detalles.

   Pase la bandera `-javaagent` como argumento de JVM en `Procfile`:

   ```
   web:java -javaagent:path/from/bundle/root/to/newrelic.jar -jar <your-application>.jar
   ```

3. Vuelva a empaquetar y desplegar el paquete fuente en su Elastic Beanstalk.
