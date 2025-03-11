---
title: Establecer SLI de capacidad
metaDescription: 'New Relic observability maturity series: our service level management guide shows you how to easily measure and communicate the overall health, performance, and quality of your digital products and services to all stakeholders.'
freshnessValidatedDate: never
translationType: machine
---

Tener un nivel de servicio en capacidades comerciales críticas, como iniciar sesión o autorizar pagos, cerrará rápidamente la barrera del idioma entre TI y las empresas. Los puntajes de nivel de servicio en capacidades también le brindan mejores oportunidades para corregir los niveles de servicio cuando comienzan a empeorar. Por ejemplo, si el nivel de servicio de inicio de sesión comienza a degradarse, deberá observar la dependencia de administración de identidad y el flujo de trabajo comenzando en la API orientada al consumidor.

No es necesario tener un conocimiento profundo de una aplicación o servicio para completar esta tarea. Solo necesita encontrar la API (límite de servicio) orientada al consumidor y seguir los pasos a continuación para crear un nivel de servicio de capacidad:

1. Identifique la aplicación de límite de servicio como se describe en el documento [sobre establecimiento de un SLI de salida](/docs/tutorial-service-level-mgmt/establish-output-sli/) .

2. Ejecute la siguiente consulta NRQL para identificar la línea de base en la transacción utilizada con más frecuencia. Recuerde reemplazar `Order-Processing` con el nombre de la aplicación que identificó.

   ```
   FROM Transaction SELECT count(*), percentile(duration, 95) WHERE appName='Order-Processing' FACET name SINCE 1 WEEK AGO
   ```

   Deberías ver algo similar a la captura de pantalla a continuación. Verá que la primera transacción indica que tiene algo que ver con "compra". Ahora puede crear un nivel de servicio de capacidad de "compra".

   <img
     alt="transaction list query"
     src="/images/queries-nrql_screenshot-full_transaction-list-nrql.webp"
   />

3. Agregue `WHERE name='Controller/Sinatra//purchase'` al final de su consulta, reemplazando `Controller/Sinatra//purchase` con el nombre de su transacción.

4. Ejecute la consulta para asegurarse de que funcione. Ahora debería ver solo una transacción en su resultado. Copie esta consulta y el resultado `DURATION (95%)` en un bloc de notas. Necesitarás ambos en un momento.

5. Crear un nuevo nivel de servicio en la plataforma. El inicio de un nuevo nivel de servicio se describe en [Establecimiento de un SLI de rendimiento de entrada](#establishing-input-sli).

En este caso, desea encontrar su aplicación (tipo APM `Entity` ) en la lista para que podamos conservar los metadatos (etiqueta) a través del GUID de la entidad. En lugar de "monitoreo sintético monitor" como en la sección anterior, seleccione "APM" en el menú desplegable de filtro de entidad.

6. Seleccione el flujo de trabajo guiado de "latencia" para que la consulta válida se complete automáticamente.

7. Utilice su bloc de notas para copiar solo el `name='your/transaction/name/here'`.

8. Agregue esta condición a ambas consultas en el nivel de servicio, **precedida por un `AND `**, como se subraya en la captura de pantalla a continuación.

   <img
     alt="capability query clause"
     src="/images/apm_screenshot-crop_capability-filter-clause.webp"
   />

9. Ajuste la parte `duration < 1.78` de la segunda consulta para que coincida con el resultado `DURATION (95%)` en su línea de base original copiada en su bloc de notas.

10. Asigne un nombre a este nivel de servicio, actualice la descripción y guarde el nivel de servicio.

A partir de aquí, le recomendamos que configure algunos de estos niveles de capacidad de servicio y los presente al equipo de la aplicación y a su liderazgo para obtener comentarios.

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-service-level-mgmt/improve-with-slm/","title":"Próximo paso","body":"Aprenda a utilizar técnicas SLM para mejorar su confiabilidad"}}
  previousStep={{"path":"/docs/tutorial-service-level-mgmt/establish-input-sli/","title":"Paso anterior","body":"Aprenda a crear indicadores y objetivos de entrada"}}
/>
