---
title: No aparecen datos (iOS)
type: troubleshooting
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Troubleshoot
metaDescription: 'If your iOS app is not reporting data to New Relic, follow these steps to troubleshoot.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Su aplicación iOS o tvOS no informa datos después de instalar el agente iOS.

## Solución

Después de enviar una solicitud en su aplicación, los datos deberían aparecer en la UI de monitoreo de móviles en tres a cinco minutos. Si no aparecen datos:

1. Asegúrese de llamar al agente en la primera línea de `didFinishLaunchingWithOptions()` y de ejecutar el agente en el hilo principal. Para evitar un comportamiento inesperado o inestable, no inicie `didFinishLaunchingWithOptions()` más tarde, de forma asincrónica o en un subproceso en segundo plano.
2. Asegúrese de haber completado todas las [instrucciones de instalación](/docs/mobile-monitoring/mobile-monitoring-installation/getting-started/ios-installation-configuration#installation).
3. Utilice [New Relic Diagnostics](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics) para intentar identificar automáticamente el problema.
4. Examine [el registro detallado](#logs) en busca de errores.
5. Confirme que el dispositivo pueda alcanzar el monitoreo de móviles extremos listado en [Redes](/docs/using-new-relic/cross-product-functions/install-configure/networks).
6. Si necesita ayuda adicional, obtenga soporte en [support.newrelic.com](https://support.newrelic.com).

Para configurar su archivo de registro:

1. Aumente el nivel de registro de New Relic agregando esta llamada a método antes de llamar a `startWithApplicationToken`:

   ```objectivec
   [NRLogger setLogLevels:NRLogLevelALL];
   ```

2. Genera unos minutos de actividad en tu aplicación.

3. Examine log de su dispositivo en busca de líneas del SDK de New Relic que puedan indicar problemas potenciales.

4. Para eliminar el aumento de la sobrecarga de rendimiento causada por `NRLogLevelALL`, comente el aumento del nivel de registro después de examinar su registro:

   ```objectivec
   //[NRLogger setLogLevels:NRLogLevelALL];
   ```

5. Consulte el registro de compilación de su aplicación para detectar signos de problemas con la instrumentación de New Relic.
