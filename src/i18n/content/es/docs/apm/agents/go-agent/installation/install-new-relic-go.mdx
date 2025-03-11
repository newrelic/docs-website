---
title: Instalar New Relic para Go
tags:
  - Agents
  - Go agent
  - Installation
metaDescription: How to install New Relic's Go agent to monitor performance of your Go language applications and microservices.
freshnessValidatedDate: never
translationType: machine
---

Nuestro agente de Go instrumentó automáticamente su código para que pueda comenzar a monitorear sus aplicaciones y microservicios de lenguaje Go. Puede utilizar nuestro iniciador o seguir las instrucciones de este documento para completar una instalación básica del agente Go.

Si aún no tiene una, [cree una cuenta New Relic](https://newrelic.com/signup). Es gratis, para siempre.

<ButtonLink
  role="button"
  to="https://one.newrelic.com/marketplace/install-data-source?state=697ccd5e-8b96-ff04-32c1-a3bc39a31255"
  variant="primary"
>
  Agregar datos de Go
</ButtonLink>

## Compatibilidad y requisitos [#requirements]

El agente Go requiere Golang 1.17 o superior en Linux, macOS o Windows. Para obtener más información, consulte [Go compatibilidad del agente y requisitos](/docs/agents/go-agent/get-started/go-agent-compatibility-requirements).

## Instalar el agente Go [#get-new-relic]

Para instalar el agente Go, necesita un <InlinePopover type="licenseKey"/>. Luego, para instalar el agente:

1. Desde [github.com/newrelic/go-agent](https://github.com/newrelic/go-agent), utilice su proceso preferido; Por ejemplo:

   ```bash
   go get github.com/newrelic/go-agent/v3/newrelic
   ```

2. Importe el paquete `github.com/newrelic/go-agent/v3/newrelic` en su aplicación.

   ```go
   import github.com/newrelic/go-agent/v3/newrelic
   ```

3. Inicialice el agente Go agregando lo siguiente en la función `main` o en un bloque `init` :

   ```go
   app, err := newrelic.NewApplication(
       newrelic.ConfigAppName("Your Application Name"),
       newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY")
   )
   ```

4. [instrumento transacción web](/docs/agents/go-agent/get-started/instrument-go-transactions#http-handler-txns) envolviendo solicitudes HTTP estándar en el código de su aplicación. Por ejemplo:

   ```go
   http.HandleFunc(newrelic.WrapHandleFunc(app, "/users", usersHandler))
   ```

5. [instrumento otra transacción](/docs/agents/go-agent/get-started/instrument-go-transactions) que desea monitor.

6. Opcional: [segmentos](/docs/agents/go-agent/get-started/instrument-go-segments) de instrumento para un nivel adicional de detalle de sincronización.

7. Compile y despliegue su aplicación.

## Ver los datos de tu aplicación en New Relic [#view-data]

Espere unos minutos hasta que su aplicación envíe datos a New Relic. Luego, verifique el rendimiento de su aplicación en la [UIde APM](/docs/apm/applications-menu/monitoring/apm-overview-page). Si no aparecen datos en unos minutos, sigue los [consejos de resolución de problemas](/docs/agents/go-agent/troubleshooting/no-data-appears-go).

<InstallFeedback/>

## Mantenga a su agente actualizado [#update]

Para aprovechar al máximo las últimas características, mejoras y parches de seguridad importantes de New Relic, mantenga [actualizado el agente Go](/docs/agents/go-agent/installation/update-go-agent) de su aplicación.
