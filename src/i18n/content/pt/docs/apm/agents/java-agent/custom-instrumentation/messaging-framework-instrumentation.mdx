---
title: Instrumentação framework de mensagens
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: An overview of the ways you can implement custom instrumentation for your New Relic-monitored Java application.
freshnessValidatedDate: never
translationType: machine
---

Existem algumas estruturas de mensagens que o New Relic não suporta por padrão. Se você estiver interessado em instrumentar esse framework com nossa API aqui estão algumas diretrizes a seguir.

## Mensagens típicas [#typical]

No caso típico, existe um processo que produz uma mensagem e um processo que consome a mensagem. Algumas coisas úteis que você pode fazer aqui estão abaixo. Observe que você deve estar dentro de uma transação para que elas sejam relatadas.

### Relate a produção/consumo como externa [#report-ext]

Você pode criar MessageProduceParameters e MessageConsumeParameters com dados relevantes e depois chamar reportAsExternal(Params) para relatar as chamadas como externas.

Por exemplo, ao produzir uma mensagem, seria assim:

```java
MessageProduceParameters params = MessageProduceParameters
                                    .library("libraryName")
                                    .destinationType(NAMED_TOPIC)
                                    .destinationName("topicName")
                                    .inboundHeaders(null).build();
NewRelic.getAgent().getTransaction().getTracedMethod().reportAsExternal(params);
```

Uma solução semelhante funcionaria do lado do consumidor.

### Adicionar mensagem métrica/parâmetro personalizado à transação atual [#add-metrics]

Se houver informações úteis que você deseja adicionar à sua transação atual sobre a mensagem, você pode fazer isso facilmente chamando nossa API addCustomParameter(). Parece assim:

```java
NewRelic.addCustomParameter("topic-name", topic);
```

### Passar uma carga de distributed trace [#dt-payload]

Para rastrear o trabalho entre processos/serviços, a framework de mensagens deve ter uma maneira de transmitir metadados com a mensagem, seja por meio de cabeçalhos ou algum outro mecanismo. Você pode criar uma carga distributed trace no lado do produtor que pode ser anexada à mensagem e lida no lado do consumidor. Você deve estar em uma transação para que isso funcione. Para fazer isso, você seguiria um padrão como este:

```java
@Trace(dispatcher = true)
public void sendData(Producer producer){
    NewRelic.getAgent().getTransaction().insertDistributedTraceHeaders(headers);
    data = new ProducerRecord<String, String>("topic", "key", "value", headers);
    producer.send(data);
}
```

E do lado do consumidor:

```java
@Trace(dispatcher = true)
public void processData(ConsumerRecord record){
    NewRelic.getAgent().getTransaction().acceptDistributedTraceHeaders(TransportType.Kafka, record.headers());
}
```

Este exemplo usa Kafka, que você pode usar como instrumento. [instrumento Kafka fila de mensagens](/docs/agents/java-agent/instrumentation/use-kafka-message-queues) fornece informações para instrumentado.

## Casos extremos [#edge-case]

Existem alguns casos extremos que requerem cuidado extra. Abaixo estão sugestões sobre a melhor maneira de lidar com eles.

### Crie uma carga de distributed trace e receba uma mensagem [#create-payload]

O problema aqui é que você não pode criar uma carga de distributed trace distributed trace e depois aceitá-la na mesma transação e nessa ordem. Isso significa que existem duas tentativas de distributed tracing e você deve escolher qual delas deseja. Se você quiser aceitar a segunda carga em vez de criar a primeira, será necessário evitar que a primeira carga seja criada. Você pode remover a instrumentação personalizada (se é isso que está criando a carga útil) ou desabilitar a instrumentação por meio de nossa [configuração](/docs/agents/java-agent/async-instrumentation/disable-scala-netty-akka-play-2-instrumentation)

### Mensagens de leitura em lote [#batch-messages]

Para consumo em lote de mensagens, há um problema sobre qual carga útil distributed tracing você aceita. Se você concordar em vincular apenas uma das cargas distributed trace , poderá aceitar qualquer uma das cargas do lote, mas isso resultará na perda do restante da carga. No entanto, se quiser ver todo o rastreamento distribuído, você precisará criar uma transação por mensagem. A segunda solução pode gerar alguma sobrecarga, portanto leve isso em consideração ao tomar uma decisão. Uma solução como essa ficaria assim:

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

Isso só funcionará se ainda não houver uma transação iniciada no thread neste momento. Se houver, apenas aceitar uma carga útil do lote é sua única solução.

### Capturando o tempo de processamento da mensagem [#process-time]

Se desejar capturar o tempo de processamento de uma mensagem, você precisará mover o trabalho de processamento para um método e, em seguida, trace esse método. Por exemplo:

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
