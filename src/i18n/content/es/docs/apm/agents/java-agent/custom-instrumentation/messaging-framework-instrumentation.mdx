---
title: Instrumentación framework de mensajería.
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: An overview of the ways you can implement custom instrumentation for your New Relic-monitored Java application.
freshnessValidatedDate: never
translationType: machine
---

Hay algunos marcos de mensajería que New Relic no admite de forma predeterminada. Si está interesado en instrumentar estos frameworks con nuestra API aquí tiene algunas pautas a seguir.

## Mensajes típicos [#typical]

En el caso típico, hay un proceso que produce un mensaje y un proceso que consume el mensaje. A continuación se muestran algunas cosas útiles que podría hacer aquí. Tenga en cuenta que debe estar dentro de una transacción para que se informen.

### Informar el productor/consumidor como externo [#report-ext]

Puede crear MessageProduceParameters y MessageConsumeParameters con datos relevantes y luego llamar a reportAsExternal(Params) para informar las llamadas como externas.

Por ejemplo, al producir un mensaje, este se vería así:

```java
MessageProduceParameters params = MessageProduceParameters
                                    .library("libraryName")
                                    .destinationType(NAMED_TOPIC)
                                    .destinationName("topicName")
                                    .inboundHeaders(null).build();
NewRelic.getAgent().getTransaction().getTracedMethod().reportAsExternal(params);
```

Una solución similar funcionaría del lado del consumidor.

### Agregar mensaje métrica/parámetro personalizado a la transacción actual [#add-metrics]

Si hay información útil que desea agregar a su transacción actual sobre el mensaje, puede hacerlo fácilmente llamando a nuestra API addCustomParameter(). Esto se parece a esto:

```java
NewRelic.addCustomParameter("topic-name", topic);
```

### Pasar una carga útil de rastreo distribuido [#dt-payload]

Para realizar un seguimiento del trabajo entre procesos/servicios, el framework de mensajería debe tener una manera de transmitir metadatos con el mensaje, ya sea a través de encabezados o algún otro mecanismo. Puede crear una carga útil de rastreo distribuido en el lado del productor que se puede adjuntar al mensaje y leer en el lado del consumidor. Debes estar en una transacción para que esto funcione. Para hacer esto seguirías un patrón como este:

```java
@Trace(dispatcher = true)
public void sendData(Producer producer){
    NewRelic.getAgent().getTransaction().insertDistributedTraceHeaders(headers);
    data = new ProducerRecord<String, String>("topic", "key", "value", headers);
    producer.send(data);
}
```

Y del lado del consumidor:

```java
@Trace(dispatcher = true)
public void processData(ConsumerRecord record){
    NewRelic.getAgent().getTransaction().acceptDistributedTraceHeaders(TransportType.Kafka, record.headers());
}
```

Este ejemplo utiliza Kafka, que puedes tocar como instrumento. [instrumento Kafka cola de mensajes](/docs/agents/java-agent/instrumentation/use-kafka-message-queues) proporciona información para instrumentado.

## Casos extremos [#edge-case]

Hay algunos casos extremos que requieren cuidado especial. A continuación se ofrecen sugerencias sobre la mejor manera de abordarlos.

### Crea una carga útil de rastreo distribuido y luego recibe un mensaje [#create-payload]

El problema aquí es que no se puede crear una carga útil de rastreo distribuido y luego aceptar una carga útil de rastreo distribuida dentro de la misma transacción en ese orden. Esto significa que hay dos intentos de rastreo distribuido y debes elegir cuál quieres. Si desea aceptar la segunda carga útil en lugar de crear la primera, debe evitar que se cree la primera carga útil. Puede eliminar la instrumentación personalizada (si eso es lo que crea la carga útil) o desactivar la instrumentación a través de nuestra [configuración](/docs/agents/java-agent/async-instrumentation/disable-scala-netty-akka-play-2-instrumentation) .

### Mensajes de lectura por lotes [#batch-messages]

Para el consumo por lotes de mensajes, existe el problema de qué carga útil de rastreo distribuido acepta. Si está de acuerdo con vincular solo una de las cargas distribuidas del rastreo, entonces puede aceptar cualquiera de las cargas del lote, pero eso hará que el resto de la carga se pierda. Sin embargo, si deseas ver todo el rastreo distribuido, deberás crear una transacción por mensaje. La segunda solución podría generar algunos gastos generales, así que téngalo en cuenta al tomar una decisión. Una solución como esa sería:

```java
public void processMessages(ConsumerRecords<String, String> records) {
    for(ConsumerRecord<String, String> record: records) {
        processRecord(record);
    }
}

@Trace(dispatcher = true)
private void processRecord(ConsumerRecord<String, String> record) {
    final Iterator<Header> nrHeaders = record.headers().headers("newrelicDTPayload").iterator();
    if (nrHeaders.hasNext()) {
        final Header nrHeader = nrHeaders.next();
        final String payload = new String(nrHeader.value(), StandardCharsets.UTF_8);
        NewRelic.getAgent().getTransaction().acceptDistributedTracePayload(payload);
    }
}
```

Esto solo funcionará si no hay ninguna transacción iniciada en el hilo en este momento. Si hay uno, su única solución es simplemente aceptar una carga útil del lote.

### Capturar el tiempo de procesamiento del mensaje. [#process-time]

Si desea capturar el tiempo de procesamiento de un mensaje, deberá mover el trabajo de procesamiento a un método y luego trazar ese método. Por ejemplo:

```java
public void getMessages(){
    KafkaConsumer consumer = new KafkaConsumer(props);
    consumer.subscribe(Arrays.asList("topic"));
    while (true) {
        ConsumerRecords<String, String> recs = consumer.poll(10000);
        if (recs.count() > 0) {
            for (ConsumerRecord<String, String> rec : recs) {
                processRec(rec);
            }
        }
    }
}

@Trace(dispatcher = true)
private void processRec(ConsumerRecord<String, String> rec) {
    // some processing
}
```
