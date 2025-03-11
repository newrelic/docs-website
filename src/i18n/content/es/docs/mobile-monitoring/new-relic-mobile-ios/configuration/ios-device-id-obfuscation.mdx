---
title: Ofuscación del ID del dispositivo iOS
freshnessValidatedDate: never
translationType: machine
---

New Relic utiliza [la identificación del proveedor](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor) de Apple para rastrear dispositivos específicos y obtener recuentos precisos de usuarios. Una de las características especiales del ID de proveedor es que es único en un conjunto de aplicaciones que utilizan la misma base de ID de paquete. Por ejemplo, el ID del proveedor es el mismo en todas las aplicaciones que usan el mismo ID del paquete: `com.company-name.*` .

Este artículo describe cómo ocultar este identificador entre aplicaciones mediante una API oculta (disponible en la versión 6.11.0 del agente iOS):

```objectivec
+[NewRelic saltDeviceUUID:(BOOL)enabled]
```

## Habilitar sal uuid del dispositivo [#h2_code]

Para acceder al método oculto `+[NewRelic saltDeviceUUID:(BOOL)enabled]`, agregue una categoría al objeto `NewRelic` :

```cpp
@interface NewRelic (salt)
  + (void) saltDeviceUUID:(BOOL)enabled;
@end
```

Esto se puede agregar en su `AppDelegate.h` después `#include <NewRelic/NewRelic.h>` y antes del `@implementation AppDelgate`:

```cpp
//
//  AppDelegate.m
// 
//  Created on 9/11/12.
//  © 2012 New Relic, Inc. All rights reserved.
//

#import "AppDelegate.h"
#import <NewRelic/NewRelic.h>

@interface NewRelic (salt) 
  + (void) saltDeviceUUID:(BOOL)enabled;
@end

@implementation AppDelegate
// code 
@end
```

## Llame a la API [#make-the-call]

A continuación, llame a `[NewRelic saltDeviceUUID:YES];` antes de su `[NewRelic startWithApplicationToken:]`

```cpp
// 
// AppDelegate.m 
// 
// Created on 9/11/12. 
// © 2012 New Relic Inc. All rights reserved. 
//

#import "AppDelegate.h"
#import <NewRelic/NewRelic.h>

@interface NewRelic (salt)
+ (void) saltDeviceUUID:(BOOL)enabled;
@end

@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [NewRelic saltDeviceUUID:YES];
  [NewRelic startWithApplicationToken:@"MY_TOKEN"];

  ...
}

...

@end
```

Las ID de sus dispositivos ahora se ofuscan en todos los eventos y datos enviados a New Relic.
