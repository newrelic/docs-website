---
title: Integración de envío de correo
tags:
  - Sendmail integration
  - New Relic integrations
metaDescription: Install our Sendmail dashboards and see your Sendmail performance data in New Relic.
freshnessValidatedDate: '2023-06-28T00:00:00.000Z'
translationType: machine
---

Nuestra integración Sendmail monitorea el rendimiento de su agente de transferencia de correo Sendmail, ayudándolo a instrumentar y monitor rápidamente su agente.

<img
  title="Screenshot of Sendmail dashboard"
  src="/images/infrastructure_screenshot-full_Sendmail-integration.webp"
/>

<figcaption>
  Después de configurar nuestra integración Sendmail, te brindamos un dashboard para tu métrica de Sendmail.
</figcaption>

## Instalar el agente de infraestructura [#install-infra-agent]

Para ingresar datos en New Relic, instale nuestro agente de infraestructura.

Puede instalar el agente de infraestructura de dos maneras diferentes:

* Nuestra [instalación guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) es una herramienta CLI que inspecciona su sistema e instala el agente de infraestructura junto con el agente de monitoreo de aplicaciones que mejor funcione para su sistema. Para obtener más información sobre cómo funciona nuestra instalación guiada, consulte nuestra [descripción general de la instalación guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Si prefiere instalar nuestro agente de infraestructura manualmente, puede seguir un tutorial para la instalación manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) o [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Configurar NRI-Flex para Sendmail [#configure-nri-flex]

Flex viene incluido con el agente New Relic Infrastructure . Para crear un archivo de configuración flexible, siga estos pasos:

1. Cree un archivo llamado `sendmail-flex-config.yml` en esta ruta:

   ```shell
   /etc/newrelic-infra/integrations.d
   ```

2. Actualice su archivo de configuración `sendmail-flex-config.yml` usando el siguiente fragmento.

Asegúrese de reemplazar las referencias de "FAILED_MESSAGES_FILE_NAME" con el nombre de su archivo. Para encontrar este nombre de archivo, vaya a `/var/mail/` y verifique el archivo que se creó para ver si hay mensajes fallidos.

```yml
---
integrations:
  - name: nri-flex
    config:
      name: sendmailFlex
      apis:
        #check if Sendmail service is up.
        - event_type: SendmailUp
          commands:
            - run: echo "value:$(systemctl status sendmail | grep 'Active':' active (running)' | wc -l)"
              split_by: ':'

        #check if Sendmail service is down.
        - event_type: SendmailDown
          commands:
            - run: echo "value:$(systemctl status sendmail | grep 'Active':' inactive (dead)' | wc -l)"
              split_by: ':'

        #Read the number of times SMTP service is unreachable.
        - event_type: SendmailSMTPserviceUnreachable
          commands:
            - run: echo "value:$(cat /var/log/mail.log | grep -E 'stat=Service unavailable' | wc -l)"
              split_by: ':'

        #Read the count of error message - host not found.
        - event_type: SendmailHostNotFound
          commands:
            - run: echo "value:$(cat /var/log/mail.log | grep -c 'host not found')"
              split_by: ':'

        #Read the count of error logged.
        - event_type: SendmailErrorCount
          commands:
            - run: echo "value:$(cat /var/log/mail.err | wc -l)"
              split_by: ':'

        #Read the number of messages accepted for delivery.
        - event_type: SendmailMessageAcceptedForDelivery
          commands:
            - run: echo "value:$(cat /var/log/mail.log | grep -c 'Message accepted for delivery')"
              split_by: ':'

        #Read the number of messages sent & deferred.
        - event_type: SendmailMessageStatus
          commands:
            - run: echo "sent:$(cat /var/log/mail.log | grep 'stat=Sent' |  wc -l)"
              split_by: ':'
            - run: echo "deferred:$(cat /var/log/mail.log | grep 'stat=Deferred' |  wc -l)"
              split_by: ':'

        #Read the number of messages held by user.
        #Go to the path "/var/mail/" and check the file that has been created for failed messages and accordingly update "FAILED_MESSAGES_FILE_NAME" in the below command.
        - event_type: SendmailHeldMessage
          commands:
            - run: echo "value:$(cat /var/mail/FAILED_MESSAGES_FILE_NAME | grep -c 'Subject:')"
              split_by: ':'

        #Read the number of connection timeout.
        - event_type: SendmailConnectionTimeOut
          commands:
            - run: echo "value:$(cat /var/log/mail.log | grep -c 'timeout')"
              split_by: ':'

        #Read the recipients with message count.
        - event_type: SendmailRecipientsbyMessageCount
          commands:
            - run: cat /var/log/mail.log | grep "to=<.*.>" | awk '{n=split($7,a,"to="); print a[1],a[2]}' | cut -d "<" -f2 |cut -d ">" -f1 | sort | uniq -c | sort -nr
              split: horizontal
              header_split_by: \s+(\d+)\s+(.*.)
              set_header: [msgCount.total, recipients.total]
              regex_match: true
              split_by: \s+(\d+)\s+(.*.)
            - run: cat /var/log/mail.log | grep "to=<.*.>" | grep "$(date +'%b %e')" | awk '{n=split($7,a,"to="); print a[1],a[2]}' | cut -d "<" -f2 |cut -d ">" -f1 | sort | uniq -c | sort -nr
              split: horizontal
              header_split_by: \s+(\d+)\s+(.*.)
              set_header: [msgCount.latest, recipients.latest]
              regex_match: true
              split_by: \s+(\d+)\s+(.*.)

        #Read the recipients host/domain.
        - event_type: SendmailRecipientsHostname
          commands:
            - run: cat /var/log/mail.log | grep "to=<.*.>" | awk '{print $7}' | grep -oE '[^@]+[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}' | sort | uniq -c
              split: horizontal
              header_split_by: \s+(\d+)\s+(.*.)
              set_header: [hostCount.total, hostname.total]
              regex_match: true
              split_by: \s+(\d+)\s+(.*.)
            - run: cat /var/log/mail.log | grep "to=<.*.>" | grep "$(date +'%b %e')" | awk '{print $7}' | grep -oE '[^@]+[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}' | sort | uniq -c
              split: horizontal
              header_split_by: \s+(\d+)\s+(.*.)
              set_header: [hostCount.latest, hostname.latest]
              regex_match: true
              split_by: \s+(\d+)\s+(.*.)

        #Read the senders with message count.
        - event_type: SendmailSendersbyMessageCount
          commands:
            - run: cat /var/log/mail.log | grep "from=<.*@.*>" | awk '{print $7}' | cut -d "<" -f2 |cut -d ">" -f1 | sort | uniq -c
              split: horizontal
              header_split_by: \s+(\d+)\s+(.*.)
              set_header: [msg.total, senders.total]
              regex_match: true
              split_by: \s+(\d+)\s+(.*.)
            - run: cat /var/log/mail.log | grep "from=<.*@.*>" | grep "$(date +'%b %e')" | awk '{print $7}' | cut -d "<" -f2 |cut -d ">" -f1 | sort | uniq -c
              split: horizontal
              header_split_by: \s+(\d+)\s+(.*.)
              set_header: [msg.latest, senders.latest]
              regex_match: true
              split_by: \s+(\d+)\s+(.*.)

        #Read the senders host/domain.
        - event_type: SendmailSendersHostname
          commands:
            - run: cat /var/log/mail.log | grep "from=<.*.>" | awk '{print $7}' | grep -oE '[^@]+[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}' | sort | uniq -c
              split: horizontal
              header_split_by: \s+(\d+)\s+(.*.)
              set_header: [hostCount.total, hostname.total]
              regex_match: true
              split_by: \s+(\d+)\s+(.*.)
            - run: cat /var/log/mail.log | grep "from=<.*.>" | grep "$(date +'%b %e')" | awk '{print $7}' | grep -oE '[^@]+[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}' | sort | uniq -c
              split: horizontal
              header_split_by: \s+(\d+)\s+(.*.)
              set_header: [hostCount.latest, hostname.latest]
              regex_match: true
              split_by: \s+(\d+)\s+(.*.) 
```

## Reenvía tu registro de Sendmail a New Relic [#forward-logs]

Puede utilizar nuestro [reenvío de registros](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para reenviar el registro de Sendmail a New Relic.

En máquinas Linux, su archivo de registro llamado `logging.yml` debe estar presente en esta ruta:

```shell
/etc/newrelic-infra/logging.d/
```

Agregue el siguiente script al archivo `logging.yml` :

```yml
  
logs:
  - name: mail.log
    file: /var/log/mail.log
    attributes:
      logtype: sendmail_log
  - name: mail.err
    file: /var/log/mail.err
    attributes:
      logtype: sendmail_error
```

## Reinicie el agente New Relic Infrastructure [#restart-agent]

Antes de que pueda comenzar a leer sus datos, utilice las instrucciones de nuestros [documentos del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar su agente de infraestructura.

```shell
sudo systemctl restart newrelic-infra.service
```

En un par de minutos, tu aplicación se enviará métrica a [one.newrelic.com](https://one.newrelic.com).

## Encuentra tus datos [#find-data]

Puede elegir nuestra plantilla dashboard prediseñadas llamada `Sendmail` para monitor su aplicación métrica Sendmail. Siga estos pasos para utilizar nuestra plantilla dashboard prediseñadas:

1. Desde [one.newrelic.com](https://one.newrelic.com), vaya a la página

   <DNT>
     **+ Add data**
   </DNT>

   .

2. Haga clic en

   <DNT>
     **Dashboards**
   </DNT>

   .

3. En la barra de búsqueda, escriba `sendmail`.

4. Debería aparecer el dashboard de Sendmail. Haga clic en él para instalarlo.

Su dashboard de Sendmail se considera un panel personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

Aquí hay una consulta NRQL para encontrar el estado de envío de su último mensaje:

```sql
SELECT latest(sent) as 'Sent', latest(deferred) as ‘Deferred’ 
FROM SendmailMessageStatus
```

Aquí hay una consulta NRQL para ver el estado del servicio Sendmail:

```sql
SELECT latest(value) as 'Service Up' 
FROM SendmailUp 
TIMESERIES AUTO
```

## ¿Que sigue? [#whats-next]

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.

* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.

* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar su

  <InlinePopover type="dashboards"/>

  modo de visualización o para agregar más contenido a su dashboard.
