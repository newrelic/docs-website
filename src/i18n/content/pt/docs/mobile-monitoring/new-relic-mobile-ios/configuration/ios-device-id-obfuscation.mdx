---
title: ID do dispositivo iOS ofuscação
freshnessValidatedDate: never
translationType: machine
---

A New Relic usa [o ID do fornecedor](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor) da Apple para rastrear dispositivos específicos e obter contagens precisas de usuários. Um dos recursos especiais do ID do fornecedor é que ele é exclusivo em um conjunto de aplicativos que usam a mesma base de ID do pacote. Por exemplo, o ID do fornecedor é o mesmo em todos os aplicativos que usam o mesmo ID de pacote: `com.company-name.*` .

Este artigo descreve como ocultar esse identificador entre aplicativos usando uma API oculta (disponível no agente iOS versão 6.11.0):

```objectivec
+[NewRelic saltDeviceUUID:(BOOL)enabled]
```

## Habilitar uuid salt do dispositivo [#h2_code]

Para acessar o método oculto `+[NewRelic saltDeviceUUID:(BOOL)enabled]`, adicione uma categoria ao objeto `NewRelic` :

```cpp
@interface NewRelic (salt)
  + (void) saltDeviceUUID:(BOOL)enabled;
@end
```

Isso pode ser adicionado em seu `AppDelegate.h` depois de `#include <NewRelic/NewRelic.h>` e antes de `@implementation AppDelgate`:

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

## Chame a API [#make-the-call]

Em seguida, ligue para `[NewRelic saltDeviceUUID:YES];` antes do seu `[NewRelic startWithApplicationToken:]`

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

Os IDs dos seus dispositivos agora serão ofuscados em todos os eventos e dados enviados para o New Relic.
